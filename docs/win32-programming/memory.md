---
sidebar_position: 4
---

# Manual memory allocation

Dart is a garbage-collected language. When you create objects (e.g. allocating a
string to a variable, or instantiating a class), Dart is responsible for
allocating memory for them, as well ensuring that the memory used is freed when
those objects are no longer in use.

However, when you're working with libraries through FFI, only primitive values
(such as integers) can be passed directly through to the native code being
called. For other types, such as strings and data structures, you have to take
responsibility for allocating memory from the heap and freeing it up when it is
no longer used.

## Allocating memory with Dart

So how do you allocate memory a block of memory for use with Windows? The
simplest approach is to use the `calloc()` function in `package:ffi`, which
calls the underlying Windows API to allocate and zero out memory from the heap.
For example:

```dart
final pBuffer = calloc<Uint8>(256);
```

This snippet allocates 256 bytes and returns a `Pointer<Uint8>` object, which
can be used to manage the memory. You can use `pBuffer` with an indexed array
operator to access the allocated memory, for example:

```dart
for (var i = 0; i < 256; i++) {
  pBuffer[i] = i % 8;
}
```

which fills the allocated memory with a repeated range of `[0..8]`.

:::danger

Be careful to only access memory that you have allocated. The results of reading
or writing unallocated memory are non-deterministic, but include an immediate
crash of your application or even data corruption.

:::

When you have completed the operation for which the allocated memory was needed,
you should release it so that it can be reused. `dart:ffi` provides a
[`calloc.free()`](https://api.dart.dev/stable/dart-ffi/Allocator/free.html)
method, but for convenience, `package:win32` provides a simple `free()` global
function, which you can use as follows:

```dart
free(pBuffer);
```

When your Dart program exits, Windows will automatically free all allocated
memory that hasn't previously been released, but you shouldn't depend on that.
In the absence of any other garbage collection for native memory, long-running
applications that don't release manually-allocated memory will gradually exhaust
the available heap space (this is known as "leaking" memory).

## Allocating strings

Win32 APIs as projected by Dart typically assume a 16-bit Unicode encoding,
where each character is represented by 2 bytes. The Dart FFI package makes it
easy to copy a Dart-allocated String to native memory, where it can be passed to
Win32 APIs:

```dart
final verb = 'open'.toNativeUtf16();
final process = 'notepad.exe'.toNativeUtf16();
ShellExecute(0, verb, process, nullptr, nullptr, SW_SHOW);

// Do something

free(verb);
free(process);
```

In this example, `verb` and `process` are of type `Pointer<Utf16>`, which
represents a pointer to native memory. The allocated memory includes two bytes
for every character in `dartText`, plus a final null-termination character
(`\x00`).

:::caution

Behind the scenes, the `.toNativeUtf16()` method allocates memory using the same
underlying functions as the `calloc()` method above, so you are still
responsible for freeing its memory.

:::

If you want to create a new string, Win32 provides a simple function `wsalloc`,
which allocates the necessary storage. This is particularly useful when you wish
to _receive_ a string from Windows. The following example calls the Win32
[`SHGetFolderPath`](https://learn.microsoft.com/windows/win32/api/shlobj_core/nf-shlobj_core-shgetfolderpathw)
API to retrieve the directory of the Desktop folder:

```dart
final path = wsalloc(MAX_PATH);
SHGetFolderPath(NULL, CSIDL_DESKTOP, NULL, 0, path);
print('The Windows desktop folder is at ${path.toDartString()}');
free(path);
```

In the example above, the returned value is converted back to a Dart string
using the `.toDartString()` extension method on `Pointer<Utf16>`.

:::tip

Calling `.toString()` on `path` won't give the results you might expect, since
`path` is of type `Pointer<Utf16>`. Instead it will print the address of the
pointer, something like this:

```terminal
Pointer: address=0x1729cc18240
```

:::

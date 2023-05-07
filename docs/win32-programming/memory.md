---
sidebar_position: 2
---

# Native memory management

Dart is a garbage-collected language. When you create objects (e.g. allocating a
string to a variable, or instantiating a class), Dart is responsible for
allocating memory for them, as well ensuring that the memory used is freed when
those objects are no longer in use.

However, when you're working with libraries through FFI, only primitive values
(such as integers) can be passed directly through to the native code being
called. For other types, such as strings and data structures, you have to take
responsibility for allocating memory and freeing it up when it is no longer
used.

## Allocating memory with Dart

TBD

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

If you want to create a new string, Win32 provides a simple function `wsalloc`,
which allocates the necessary storage. This is particularly useful when you wish
to _receive_ a string from Windows.

```dart
    final textLength = GetWindowTextLength(hwndEdit);
    final buffer = wsalloc(textLength); // allocates (textLength * 2) bytes
    GetWindowText(hWnd, buffer, textLength);
```

The returned value can be converted back to a Dart string using an extension
method on `Pointer<Utf16>`, as follows:

```dart
    print(buffer.toDartString());
```

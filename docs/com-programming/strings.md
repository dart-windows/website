---
sidebar_position: 2
---

# Using strings in COM

Most COM interfaces use regular C strings, which are allocated and used using
the techniques described in
[Allocating strings](../win32-programming/memory#allocating-strings).

However, some COM APIs use the `BSTR` type, in particular those that support
late binding (often known as `IDispatch`) interfaces.

`BSTR` types differ from `Pointer<Utf16>` in that they include a four byte
prefix stored immediately prior to the string itself that represents its
length in bytes. The pointer points to the first character of the data
string, not to the length prefix.

:::warning

`BSTR`s should never be created using Dart's memory allocation functions.
For instance, the following code is incorrect, since it does not allocate
and store the length prefix.

```dart
final bstr = 'I am a happy BSTR'.toNativeUtf16();
```

:::

The `win32` package instead offers a wrapper for the COM memory allocation
functions so that `BSTR` types can be created without concern. Instead of the
above code, you can write:

```dart
final bstr = BSTR.fromString('I am a happy BSTR');
```

A debugger that examines the four bytes prior to this location will see a 32-bit
int containing the value 34, representing the length of the string encoded in
UTF-16 (two bytes per char).

For example:

```dart
  final bstr = BSTR.fromString('I am a happy BSTR');
  final len = bstr.ptr.cast<Uint32>()[-1];
  print('Length of bstr: $len');
  bstr.free();
```

As shown above, you can access the pointer for a `BSTR` using its `.ptr`
property.

As with other manually allocated memory, Dart does not garbage collect `BSTR`
objects; instead, you are responsible for freeing the memory allocated for a
`BSTR` when it is no longer used.

:::caution

To release its memory, don't use the global
`free()` function, since that will not free the length prefix. Instead, either
use the `.free()` method on the `BSTR` object itself, or use the Windows API
`SysFreeString`:

```dart
free(bstr);              // BAD!!! This will leak memory

bstr.free();             // Good
SysFreeString(bstr.ptr); // Also good
```

:::

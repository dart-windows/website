---
sidebar_position: 3
---

# Types in Win32

## Integer types

Compared to Dart, which has a single integer type that is used for storing any
value between -2<sup>63</sup>-1 and 2<sup>63</sup>, the Win32 API has
different-sized integer types in both unsigned and signed variants. The
following table demonstrates the various integer types you'll commonly encounter
when accessing Win32 APIs:

| Common Win32 names                            | `dart:ffi` type | Size       | Signed |                               Range |
| --------------------------------------------- | --------------- | ---------- | ------ | ----------------------------------: |
| `BYTE`, `UINT8`, `CHAR`                       | `Uint8`         | 8 bits     | No     |                            0 to 255 |
| `INT8`                                        | `Int8`          | 8 bits     | Yes    |                         -127 to 128 |
| `WORD`, `ATOM`, `UINT16`, `USHORT`            | `Uint16`        | 16 bits    | No     |                          0 to 65535 |
| `INT16`, `SHORT`                              | `Int16`         | 16 bits    | Yes    |                     -32767 to 32768 |
| `DWORD`, `UINT`, `UINT32`, `ULONG`            | `Uint32`        | 32 bits    | No     |                 0 to 2<sup>32</sup> |
| `INT`, `INT32`, `LONG`                        | `Int32`         | 32 bits    | Yes    | -2<sup>31</sup>-1 to 2<sup>31</sup> |
| `DWORDLONG`, `ULONGLONG`, `UINT64`, `ULONG64` | `Uint64`        | 64 bits    | No     |                 0 to 2<sup>64</sup> |
| `LONGLONG`, `INT64`                           | `Int64`         | 64 bits    | Yes    | -2<sup>63</sup>-1 to 2<sup>63</sup> |
| `HANDLE`, `LONG_PTR`, `UINT_PTR`, `ULONG_PTR` | `IntPtr`        | 32/64 bits | No     |              matches pointer length |

When you're calling a function and passing a value in, you don't have to worry
about this: `package:win32` includes all the metadata to convert from a Dart
`int` type to the appropriate native representation.

However, knowing the type of data becomes important when a function is
_returning_ a value, since Win32 typically uses a `Pointer` argument that it
fills with the relevant data.

`package:win32` includes typedefs for all the common Win32 integer types, so you
don't have to remember the size and sign of a type like `DWORD`.

For example, here's how to get the size of the system memory using Dart:

```dart
final lpMemorySize = calloc<ULONGLONG>();
GetPhysicallyInstalledSystemMemory(lpMemorySize);
final memorySizeMB = lpMemorySize.value ~/ 1024;
print('System has ${memorySizeMB}MB of RAM installed.');
free(lpMemorySize);
```

`lpMemorySize` could also be allocated as `calloc<ULONG64>()` or
`calloc<Uint64>()`: they all mean the same thing.

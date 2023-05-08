---
sidebar_position: 5
---

# Using Win32 `struct`s from Dart

It's very common in Win32 programming to create, pass and read from a C
structure.

For example, let's consider the Win32 API
[`GetSystemPowerStatus`](https://learn.microsoft.com/en-us/windows/win32/api/winbase/nf-winbase-getsystempowerstatus),
which retrieves the current power status of the system (e.g. battery or AC
powered).

Here's the C function signature, for reference:

```c
BOOL GetSystemPowerStatus(
  [out] LPSYSTEM_POWER_STATUS lpSystemPowerStatus
);
```

This corresponds to the Dart equivalent function:

```dart
int GetSystemPowerStatus(Pointer<SYSTEM_POWER_STATUS> lpSystemPowerStatus) {
  ...
}
```

In Dart, `SYSTEM_POWER_STATUS` inherits from the dart:ffi
[`Struct`](https://api.dart.dev/be/169657/dart-ffi/Struct-class.html) class.

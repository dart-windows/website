---
sidebar_position: 5
---

# Using Win32 structs from Dart

Win32 programming frequently uses C `struct`s to pass data between functions.
This topic provides more information on how to create, pass and access struct
objects from Dart code.

For example, let's assume you want to call the Win32 API
[`GetSystemPowerStatus`](https://learn.microsoft.com/windows/win32/api/winbase/nf-winbase-getsystempowerstatus),
which retrieves the current power status of the system (e.g. battery or AC
powered).

The [Dart function
signature](https://pub.dev/documentation/win32/latest/win32/GetSystemPowerStatus.html)
looks like this:

```dart
int GetSystemPowerStatus(Pointer<SYSTEM_POWER_STATUS> lpSystemPowerStatus) {}
```

As the documentation indicates,
[`SYSTEM_POWER_STATUS`](https://pub.dev/documentation/win32/latest/win32/SYSTEM_POWER_STATUS-class.html)
inherits from the dart:ffi
[`Struct`](https://api.dart.dev/stable/dart-ffi/Struct-class.html) class.

To create such a struct, you can use `calloc` to allocate memory for
it:

```dart
final lpSystemPowerStatus = calloc<SYSTEM_POWER_STATUS>();
```

:::info

Dart also provides `malloc`, which corresponds to the equivalent C runtime
function that allocates uninitialized memory. In practice, `calloc` is a good
general choice when writing Windows code, since the performance cost of
initializing memory is negligible in return for the eradication of potential
side-effects.

:::

:::tip

Some structs include a field (typically the first one) for their size. This is
typically because they're used with a function that can accept multiple variants
of the same struct (e.g. `WNDCLASS` and `WNDCLASSEX`), with the size field being
used to disambiguate the struct being passed.

The Dart cascade notation provides a convenient way to initialize classes like
this. For example:

```dart
final wndClass = calloc<WNDCLASSEX>()..ref.cbSize = sizeOf<WNDCLASSEX>();
```

:::

Since `lpSystemPowerStatus` is of type `Pointer<SYSTEM_POWER_STATUS>`, how do we
access the fields of `SYSTEM_POWER_STATUS`? Struct pointers have a
[`ref`](https://api.dart.dev/stable/dart-ffi/StructPointer/ref.html)
property which creates a reference accessing the fields of the struct.

Here's a simple example that shows how to detect the power status of a machine:

```dart
final lpSystemPowerStatus = calloc<SYSTEM_POWER_STATUS>();
final hr = GetSystemPowerStatus(lpSystemPowerStatus);

if (SUCCEEDED(hr)) {
  if (lpSystemPowerStatus.ref.BatteryFlag >= 128) {
    // This value is only less than 128 if a battery is detected.
    print('No system battery detected.');
  } else {
    final batteryRemainingPercent = lpSystemPowerStatus.ref.BatteryLifePercent;
    if (batteryRemainingPercent <= 100) {
      print('Battery detected with $batteryRemainingPercent% remaining.');
    } else {
      // Windows sets this value to 255 if it can't detect remaining life.
      print('Battery detected but status unknown.');
    }
  }
}

free(lpSystemPowerStatus);
```

Here we pass a newly allocated and initialized `SYSTEM_POWER_STATUS` struct to
the `GetSystemPowerStatus` function, which fills it with values corresponding to
the machine's state. We then access fields of the returned struct by
dereferencing the pointer.

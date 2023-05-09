---
sidebar_position: 2
---

# Win32 functions

Win32 functions are exposed through `package:win32` as global Dart functions, so
you can call them just like any other Dart function. For consistency with the
C-based functions that they wrap, they are named with title case rather than the
Dart camel case convention. Here's a simple example of calling the
[`Beep`](https://learn.microsoft.com/en-us/windows/win32/api/utilapiset/nf-utilapiset-beep)
API to play an A<sub>4</sub> note for ½ second:

```dart
Beep(440 /* Hz */, 500 /* ms */);
```

## Detecting success or failure of a function

Most Win32 functions use the return value to indicate their successful
execution, with a non-zero value indicating success and zero indicating failure.

`package:win32` provides the `SUCCEEDED()` and `FAILED()` functions as
convenient methods to test the result. For example:

```dart
final hr = CloseWindow(hWnd); // minimizes a window given its window handle
if (FAILED(hr)) {
  print('Window could not be minimized.');
}
```

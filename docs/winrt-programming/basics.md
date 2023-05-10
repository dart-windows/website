---
sidebar_position: 1
---

# Basic concepts

## Overview

The [dartwinrt](https://github.com/dart-windows/dartwinrt) provides an
idiomatic Dart projection of modern Windows Runtime (WinRT) APIs using Dart
FFI. This allows you to use WinRT APIs in your Dart applications, including
Flutter apps with minimal effort.

There are a total of `18` packages, each corresponding to a top-level WinRT
namespace. For example, the [windows_globalization](https://pub.dev/packages/windows_globalization) package contains the WinRT APIs from the
[Windows.Globalization](https://learn.microsoft.com/en-us/uwp/api/windows.globalization) namespace.

To call WinRT APIs, you will typically import the packages that provide the
specific WinRT APIs required by your application. For example, to use the
[Calendar](https://learn.microsoft.com/en-us/uwp/api/windows.globalization.calendar)
class from the `Windows.Globalization` namespace, you would import the `windows_globalization` package as follows:

```dart
import 'package:windows_globalization/windows_globalization.dart';
```

## Initializing the WinRT

The `dartwinrt` automatically initializes the WinRT with a multi-threaded
apartment (MTA) as needed, so you typically don't need to take any additional
steps to use WinRT APIs.

:::note

Keep in mind that, if you need to call WinRT APIs that only work in a
single-threaded apartment (STA), you must initialize the WinRT with a STA by
calling the `RoInitialize(RO_INIT_TYPE.RO_INIT_SINGLETHREADED)` function.

:::

## Basic example

Here is a basic example that demonstrates how to retrieve the current year from
the `Calendar` class:

```dart
import 'package:windows_globalization/windows_globalization.dart';

void main() {
	final calendar = Calendar(); // Create a Calendar object
	print(calendar.year); // prints "2023"
}
```

## Releasing WinRT objects

In general, releasing WinRT objects isn't something you need to worry about,
because when the object becomes inaccessible to the program, the
[Finalizer](https://api.dart.dev/stable/dart-core/Finalizer-class.html)
automatically releases it for you.

:::note

If you are manually managing the lifetime of an object, such as by calling the
`.detach()` method, then it is important to ensure that you release it properly
by calling the `.release()` method. Additionally, you should free up the memory
that was allocated for the object by calling the `free()` helper function as
follows:

```dart
calendar.release(); // Release the WinRT object
free(calendar.ptr); // Release the allocated memory for the object
```

This is necessary to prevent memory leaks and ensure that the memory used by
the object is properly released.

:::

:::tip

It is important to include this code as part of a `try` / `finally` block to
ensure that the object is released properly, even if an exception is thrown
during the execution of your code.

:::

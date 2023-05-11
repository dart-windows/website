---
sidebar_position: 1
---

# Basic concepts

## Overview

The Windows Runtime (WinRT) is a suite of APIs and architectural model,
introduced in Windows 8, that powers the latest generation of Windows APIs.
It is an evolution of the COM API that is designed for access from a variety of
languages. WinRT introduces standardized interfaces for collections (e.g.
[IVector]), as well as support for generic types and asynchronous programming
models.

[dartwinrt] provides an idiomatic Dart projection of modern WinRT APIs using
FFI. This allows you to use WinRT APIs in your Dart applications, including
Flutter apps with minimal effort. It consists of `18` packages, each of which
corresponds to a top-level namespace (e.g. [windows_globalization] package
contains the WinRT APIs from the [Windows.Globalization] namespace).

Typically, you would import only the packages that provide the specific WinRT
APIs that your application requires. For example, to use the [Calendar] class
from the `Windows.Globalization` namespace, you would import the
`windows_globalization` package as follows:

```dart
import 'package:windows_globalization/windows_globalization.dart';
```

:::caution

`dartwinrt` is under active development and is considered **unstable**, which
means breaking changes are expected. Additionally, it is worth noting that
there are some known [limitations](limitations) associated with it.

:::

## Initializing the WinRT

`dartwinrt` automatically initializes WinRT using a multi-threaded apartment
(MTA) when necessary. Therefore, in most cases, you do not need to undertake
any extra measures to begin calling WinRT APIs.

:::note

Keep in mind that, if you need to call WinRT APIs that only work in a
single-threaded apartment (STA), you must initialize WinRT with a STA by
calling the `RoInitialize(RO_INIT_TYPE.RO_INIT_SINGLETHREADED)` function.

:::

## Calling WinRT APIs

Calling WinRT APIs is pretty straightforward. To illustrate, here is a simple
example that demonstrates how to retrieve the current `DateTime` from the
[Calendar] class:

```dart
import 'package:windows_globalization/windows_globalization.dart';

void main() {
	final calendar = Calendar(); // Create a new Calendar object
	final currentDateTime = calendar.getDateTime(); // Get the current DateTime
	print(currentDateTime); // e.g. 2023-05-11 13:47:21.380001Z
}
```

## Releasing WinRT objects

In general, releasing WinRT objects isn't something you need to worry about,
because when the object becomes inaccessible to the program, the [Finalizer]
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

[Calendar]: https://learn.microsoft.com/en-us/uwp/api/windows.globalization.calendar
[dartwinrt]: https://github.com/dart-windows/dartwinrt
[Finalizer]: https://api.dart.dev/stable/dart-core/Finalizer-class.html
[IVector]: https://learn.microsoft.com/en-us/uwp/api/windows.foundation.collections.ivector-1
[packages]: https://github.com/dart-windows/dartwinrt#packages-
[windows_globalization]: https://pub.dev/packages/windows_globalization
[Windows.Globalization]: https://learn.microsoft.com/en-us/uwp/api/windows.globalization

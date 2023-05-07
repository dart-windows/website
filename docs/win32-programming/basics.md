---
sidebar_position: 1
---

# Basic concepts

## Calling native libraries with FFI

The Windows API was originally written with C developers in mind. As a result,
many of the conventions are designed around the characteristics and capabilities
of the C runtime. Fortunately, the wide popularity of C means that many
languages, including Dart, have good support for calling C code and handling C
coding conventions.

In Dart, the primary means of calling C code is FFI, which stands for Foreign
Function Interface. Dart supplies both a library, `dart:ffi`, and a package,
`package:ffi', which together supply useful low-level functions and helpers.

To call FFI features, you will typically import both the library and the package
from your code, as follows:

```dart
import 'dart:ffi';

import 'package:ffi/ffi.dart';
```

:::tip

Don't forget to add a dependency to the `ffi` package in your `pubspec.yaml`.

:::

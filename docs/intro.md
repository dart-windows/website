---
sidebar_position: 1
---

# Introduction to Dart | Windows

Dart | Windows is a suite of packages for working with Windows from the Dart
programming language. It aims to make it easy to write Dart code that can
access Windows hardware and system services, using traditional Win32, COM, or
Windows Runtime API calls.

## Why write Windows code with Dart?

There are a number of scenarios where these packages might be useful to you. A
few examples:

- You're a Flutter developer writing an app that will run on Windows, and you
  need to access a hardware accessory such as a gamepad. Or you want to read a
  setting from the Windows registry.

- You're writing a new cross-platform package, and you want to write the
  Windows implementation.

- You're writing a command-line utility with Dart, and you want to access more
  file APIs than the `dart:io` package directly offers.

- You're writing an app that needs to integrate with other existing Windows
  libraries that have published metadata.

The purpose of the Dart | Windows packages is to provide access to the
underlying Windows APIs from Dart code without having to directly map
API conventions to Dart.

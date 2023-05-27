---
sidebar_position: 6
---

# Patterns for memory management

Consider the following (bad) example of a function that calls
[`CoCreateGuid`](https://learn.microsoft.com/windows/win32/api/combaseapi/nf-combaseapi-cocreateguid)
to return a String. Can you see a potential bug in this code?

```dart
// BAD: Don't do this, since the memory for pGuid may not be released
String createGUID() {
  final pGuid = calloc<GUID>();

  final hr = CoCreateGuid(pGuid);
  if (FAILED(hr)) throw WindowsException(hr);
  final guid = pGuid.ref.toString();
  free(pGuid);
  return guid;
}
```

Here's the problem: if `CoCreateGuid()` fails, `pGuid` will not be released
prior to the exception being thrown. In this example, there are simple solutions
(e.g. call `free` in both failure and success scenarios). But when you're
allocating lots of different objects, this approach can result in rather
unreadable code with plenty of opportunity for memory leaks.

## The `try`/`finally` pattern

One good approach is the `try`/`finally` pattern in Dart, which guarantees the
`finally` clause will be called:

```dart
// GOOD: This approach is safe and convenient.
String createGUID() {
  final pGuid = calloc<GUID>();
  try {
    final hr = CoCreateGuid(pGuid);
    if (FAILED(hr)) throw WindowsException(hr);
    return pGuid.ref.toString();
  } finally {
    free(pGuid);
  }
}
```

In the above example, the `free` will get called regardless of whether
`CoCreateGuid()` fails or not. And there's no need to allocate the result to a
separate string before returning, since we know that `finally` will be called at
the appropriate time.

## The `using` pattern

For simpler methods, the `try`/`finally` pattern works well. But as you add more
manually-allocated objects, this becomes more unwieldy. For example, consider
this function, which interrogates Windows for the timestamp when the
currently-running process was created:

```dart
DateTime processCreationTime() {
  final hProcess = GetCurrentProcess();
  final pCreationTime = calloc<FILETIME>();
  final pExitTime = calloc<FILETIME>();
  final pKernelTime = calloc<FILETIME>();
  final pUserTime = calloc<FILETIME>();
  final pCreationSystemTime = calloc<SYSTEMTIME>();

  try {
    // Retrieve timing information for the current process
    var hr = GetProcessTimes(
        hProcess, pCreationTime, pExitTime, pKernelTime, pUserTime);
    if (FAILED(hr)) throw WindowsException(hr);

    // Convert to UTC
    hr = FileTimeToSystemTime(pCreationTime, pCreationSystemTime);
    if (FAILED(hr)) throw WindowsException(hr);
    return DateTime.utc(
            pCreationSystemTime.ref.wYear,
            pCreationSystemTime.ref.wMonth,
            pCreationSystemTime.ref.wDay,
            pCreationSystemTime.ref.wHour,
            pCreationSystemTime.ref.wMinute,
            pCreationSystemTime.ref.wSecond)
        .toLocal();
  } finally {
    free(pCreationTime);
    free(pExitTime);
    free(pKernelTime);
    free(pUserTime);
    free(pCreationSystemTime);
  }
}
```

There are two problems with this code. Firstly, each variable has to be
individually freed. Secondly, the variable `pCreationSystemTime` has to be
allocated even if the first call fails. This can be a nuisance in larger
methods.

An alternative approach is to use the
[`using`](https://pub.dev/documentation/ffi/latest/ffi/using.html) pattern with
an [`Arena`](https://pub.dev/documentation/ffi/latest/ffi/Arena-class.html)
object, which is a memory allocator that tracks memory allocations and
automatically releases them when the `using` scope ends.

Here's the same function written this way:

```dart
DateTime processCreationTime() {
  return using((Arena alloc) {
    final hProcess = GetCurrentProcess();
    final pCreationTime = alloc<FILETIME>();
    final pExitTime = alloc<FILETIME>();
    final pKernelTime = alloc<FILETIME>();
    final pUserTime = alloc<FILETIME>();

    // Retrieve timing information for the current process
    var hr = GetProcessTimes(
        hProcess, pCreationTime, pExitTime, pKernelTime, pUserTime);
    if (FAILED(hr)) throw WindowsException(hr);

    // Convert to UTC
    final pCreationSystemTime = alloc<SYSTEMTIME>();
    hr = FileTimeToSystemTime(pCreationTime, pCreationSystemTime);
    if (FAILED(hr)) throw WindowsException(hr);
    return DateTime.utc(
            pCreationSystemTime.ref.wYear,
            pCreationSystemTime.ref.wMonth,
            pCreationSystemTime.ref.wDay,
            pCreationSystemTime.ref.wHour,
            pCreationSystemTime.ref.wMinute,
            pCreationSystemTime.ref.wSecond)
        .toLocal();
  });
}
```

In the above code, the need for individual `free` calls is dispensed with. When
the `using` scope ends, the arena releases all the variables that have been
allocated. Arenas can also be nested or shared across functions, which can be
useful when you need greater control over the lifetime of manually-allocated
memory.

:::tip

The `.toNativeUtf16()` String extension method supports passing a custom
allocator, so it can also be used with arenas. For example:

```dart
final pTitle = 'Window title'.toNativeUtf16(allocator: alloc);
```

:::

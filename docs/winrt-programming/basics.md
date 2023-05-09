---
sidebar_position: 1
---

# Basic concepts

TODO

## Initializing the WinRT

Most of the time you don't need to do anyting as this package ensures that
threads are implicitly assigned to the multi-threaded apartment (MTA).

However, if you need to use APIs that only work in a single-threaded apartment
(STA), you need to call `RoInitialize(RO_INIT_TYPE.RO_INIT_SINGLETHREADED)` to
initialize the Windows Runtime with a single-threaded apartment.

## TODO

TODO

### Releasing WinRT objects

In general, releasing WinRT objects isn't something you need to worry about,
because when the object becomes inaccessible to the program, the
[Finalizer](https://api.dart.dev/stable/dart-core/Finalizer-class.html)
automatically releases it for you.

Note that, if you are manually managing the lifetime of an object, such as by
calling the `.detach()` method, then it is important to ensure that you release
it properly by calling the `.release()` method. Additionally, you should free
up the memory that was allocated for the object by calling the `free()` helper
function.

```dart
calendar.release(); // Release the WinRT object
free(calendar.ptr); // Free the allocated memory for the object
```

This is necessary to prevent memory leaks and ensure that the memory used by
the object is properly released.

:::tip

It is important to include this code as part of a `try` / `finally` block to
ensure that the object is released properly, even if an exception is thrown
during the execution of your code.

:::

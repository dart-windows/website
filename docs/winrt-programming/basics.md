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

Most of the time, you don't need to do anything as WinRT objects are
automatically released by `Finalizer` when they go out of scope.

However, if you're manually managing the lifetime of the object (i.e. by
calling the `.detach()` method), you should release it by calling `.release()`:

```dart
calendar.release(); // Release the interface
```

Often this will be called as part of a `try` / `finally` block, to guarantee
that the object is released even if an exception is thrown.

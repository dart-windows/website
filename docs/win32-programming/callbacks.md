---
sidebar_position: 7
---

# Function callbacks

Some Win32 APIs are asynchronous: a function call doesn't complete and return
all the information requested. Dart has the `async`/`await` pattern for handling
asynchronous calls within Dart libraries and packages, but the C-based Win32 API
model does not have a similar construct. So calling Win32 APIs that are
asynchronous is handled instead through _callbacks_, in which you pass a
function with the first API call that Win32 executes to pass data back.

:::caution

Dart currently offers two ways for creating callback functions that can be
invoked from native functions:

- [`NativeCallable.isolateLocal`](https://api.dart.dev/stable/dart-ffi/NativeCallable/NativeCallable.isolateLocal.html):
  Constructs a `NativeCallable` that must be invoked from the same thread that
  created it.
- [`NativeCallable.listener`](https://api.dart.dev/stable/dart-ffi/NativeCallable/NativeCallable.listener.html):
  Constructs a `NativeCallable` that can be invoked from any thread. However,
  this comes with a restriction — only `void` functions are supported.

In most cases, utilizing `NativeCallable.isolateLocal` should suffice. However,
if you encounter a `Cannot invoke native callback outside an isolate.` error, it
indicates that the API you're calling operates in a different thread context.
In such cases, consider using `NativeCallable.listener`, especially if the
callback is a `void` function. If not, there is currently no way to call that
particular API.

:::

As an example of creating a callback, let's look at the
[`EnumFontFamiliesEx`](https://learn.microsoft.com/windows/win32/api/wingdi/nf-wingdi-enumfontfamiliesexw)
function, which enumerates all uniquely-named fonts in the system that match a
specified set of font characteristics. `EnumFontFamiliesEx` takes a `LOGFONT`
struct which contains the

The Dart function signature for `EnumFontFamiliesEx` is as follows:

```dart
int EnumFontFamiliesEx(
        int hdc,
        Pointer<LOGFONT> lpLogfont,
        Pointer<NativeFunction<FONTENUMPROC>> lpProc,
        int lParam,
        int dwFlags) { ... }
```

Notice the third parameter, which is a pointer to the callback function.
`FONTENUMPROC`. This is called once for every enumerated font, and is defined
as:

```dart
typedef FONTENUMPROC = Int32 Function(Pointer<LOGFONT> lpelfe,
    Pointer<TEXTMETRIC> lpntme, DWORD FontType, LPARAM lParam);
```

To create a callback function, define a Dart function that matches the types in
the native callback function above. Replace any integer types with a simple
`int` Dart type. Here's an example:

```dart
int enumerateFonts(
    Pointer<LOGFONT> logFont, Pointer<TEXTMETRIC> _, int __, int ___) {
  // Get extended information from the font
  final logFontEx = logFont.cast<ENUMLOGFONTEX>();

  print(logFontEx.ref.elfFullName);
  return TRUE; // continue enumeration
}
```

A couple of details that are worthy of note:

- Since we are only using the first parameter, we use the Dart `_` convention to
  note that other parameter values are ignored.
- This callback returns `TRUE` to indicate that the enumeration should continue.
  We could stop the callback from being fired for the next enumerated value by
  returning `FALSE` instead (for example, if we'd found a specific font that we
  were looking for).

Now we have our function callback, we can use it to call `EnumFontFamiliesEx`:

```dart
void main() {
  final hDC = GetDC(NULL);
  final searchFont = calloc<LOGFONT>()..ref.lfCharSet = HANGUL_CHARSET;
  final callback = NativeCallable<FONTENUMPROC>.isolateLocal(
    enumerateFonts,
    exceptionalReturn: 0,
  );

  EnumFontFamiliesEx(hDC, searchFont, callback.nativeFunction, 0, 0);

  // Close the callback when it's no longer needed
  callback.close();

  free(searchFont);
}
```

In the above function, we create a struct `LOGFONT` containing our required
search characteristics (fonts that support the Hangul, or Korean, character
set). We then create a
[NativeCallable](https://api.dart.dev/stable/dart-ffi/NativeCallable-class.html)
for the Dart callback function using the
[`NativeCallable.isolateLocal`](https://api.dart.dev/stable/dart-ffi/NativeCallable/NativeCallable.isolateLocal.html)
constructor. Lastly, we call the `EnumFontFamiliesEx` API to set up the
enumeration. The Dart `enumerateFonts()` function will now be called once for
every discovered font that matches the search characteristics.

A complete version of the example here can be found in the `example` folder of
`package:win32` as
[`fonts.dart`](https://github.com/dart-windows/win32/blob/main/example/fonts.dart).

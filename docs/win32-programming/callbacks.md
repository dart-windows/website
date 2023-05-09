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

At present, Dart can only receive function callbacks from the same thread that
was used to create the callback. Win32 APIs that callback from a different
thread are incompatible with this model. See [issue
#544](https://github.com/dart-windows/win32/issues/544) for more information.

:::

As an example of creating a callback, let's look at the
[`EnumFontFamiliesEx`](https://learn.microsoft.com/en-us/windows/win32/api/wingdi/nf-wingdi-enumfontfamiliesexw)
function, which enumerates all uniquely-named fonts in the system that match a
specified set of font characteristics. `EnumFontFamiliesEx` takes a `LOGFONT`
struct which contains the

The Dart function signature for `EnumFontFamiliesEx` is as follows:

```dart
int EnumFontFamiliesEx(
        int hdc,
        Pointer<LOGFONT> lpLogfont,
        Pointer<NativeFunction<EnumFontFamExProc>> lpProc,
        int lParam,
        int dwFlags) { ... }
```

Notice the third parameter, which is a pointer to the callback function.
`EnumFontFamExProc`. This is called once for every enumerated font, and is
defined as:

```dart
typedef EnumFontFamExProc = Int32 Function(Pointer<LOGFONT> lpelfe,
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

:::note

Closures and tear-offs are not supported for function callbacks. They must be a
static function (e.g. declared as a top-level function).

:::

Now we have our function callback, we can use it to call `EnumFontFamiliesEx`:

```dart
void main() {
  final hDC = GetDC(NULL);
  final searchFont = calloc<LOGFONT>()..ref.lfCharSet = HANGUL_CHARSET;
  final callback = Pointer.fromFunction<EnumFontFamExProc>(enumerateFonts, 0);

  EnumFontFamiliesEx(hDC, searchFont, callback, 0, 0);
  
  free(searchFont);
}
```

In the above function, we create a struct `LOGFONT` containing our required
search characteristics (fonts that support the Hangul, or Korean, character
set). We then create a pointer to the Dart callback function using the
[`.fromFunction()`](https://api.dart.dev/stable/3.0.0/dart-ffi/Pointer/fromFunction.html)
method. Lastly, we call the `EnumFontFamiliesEx` API to set up the enumeration.
The Dart `enumerateFonts()` function will now be called once for every
discovered font that matches the search characteristics.

A complete version of the example here can be found in the `example` folder of
`package:win32` as
[`fonts.dart`](https://github.com/dart-windows/win32/blob/main/example/fonts.dart).

"use strict";(self.webpackChunkwin_32_site=self.webpackChunkwin_32_site||[]).push([[638],{9558:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=t(5893),i=t(1151);const o={sidebar_position:7},c="Function callbacks",r={id:"win32-programming/callbacks",title:"Function callbacks",description:"Some Win32 APIs are asynchronous: a function call doesn't complete and return",source:"@site/docs/win32-programming/callbacks.md",sourceDirName:"win32-programming",slug:"/win32-programming/callbacks",permalink:"/docs/win32-programming/callbacks",draft:!1,unlisted:!1,editUrl:"https://github.com/dart-windows/website/tree/main/docs/win32-programming/callbacks.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docs",previous:{title:"Patterns for memory management",permalink:"/docs/win32-programming/memory-patterns"},next:{title:"COM Programming",permalink:"/docs/category/com-programming"}},l={},s=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"function-callbacks",children:"Function callbacks"}),"\n",(0,a.jsxs)(n.p,{children:["Some Win32 APIs are asynchronous: a function call doesn't complete and return\nall the information requested. Dart has the ",(0,a.jsx)(n.code,{children:"async"}),"/",(0,a.jsx)(n.code,{children:"await"})," pattern for handling\nasynchronous calls within Dart libraries and packages, but the C-based Win32 API\nmodel does not have a similar construct. So calling Win32 APIs that are\nasynchronous is handled instead through ",(0,a.jsx)(n.em,{children:"callbacks"}),", in which you pass a\nfunction with the first API call that Win32 executes to pass data back."]}),"\n",(0,a.jsxs)(n.admonition,{type:"caution",children:[(0,a.jsx)(n.p,{children:"Dart currently offers two ways for creating callback functions that can be\ninvoked from native functions:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://api.dart.dev/stable/dart-ffi/NativeCallable/NativeCallable.isolateLocal.html",children:(0,a.jsx)(n.code,{children:"NativeCallable.isolateLocal"})}),":\nConstructs a ",(0,a.jsx)(n.code,{children:"NativeCallable"})," that must be invoked from the same thread that\ncreated it."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://api.dart.dev/stable/dart-ffi/NativeCallable/NativeCallable.listener.html",children:(0,a.jsx)(n.code,{children:"NativeCallable.listener"})}),":\nConstructs a ",(0,a.jsx)(n.code,{children:"NativeCallable"})," that can be invoked from any thread. However,\nthis comes with a restriction \u2014 only ",(0,a.jsx)(n.code,{children:"void"})," functions are supported."]}),"\n"]}),(0,a.jsxs)(n.p,{children:["In most cases, utilizing ",(0,a.jsx)(n.code,{children:"NativeCallable.isolateLocal"})," should suffice. However,\nif you encounter a ",(0,a.jsx)(n.code,{children:"Cannot invoke native callback outside an isolate."})," error, it\nindicates that the API you're calling operates in a different thread context.\nIn such cases, consider using ",(0,a.jsx)(n.code,{children:"NativeCallable.listener"}),", especially if the\ncallback is a ",(0,a.jsx)(n.code,{children:"void"})," function. If not, there is currently no way to call that\nparticular API."]})]}),"\n",(0,a.jsxs)(n.p,{children:["As an example of creating a callback, let's look at the\n",(0,a.jsx)(n.a,{href:"https://learn.microsoft.com/windows/win32/api/wingdi/nf-wingdi-enumfontfamiliesexw",children:(0,a.jsx)(n.code,{children:"EnumFontFamiliesEx"})}),"\nfunction, which enumerates all uniquely-named fonts in the system that match a\nspecified set of font characteristics. ",(0,a.jsx)(n.code,{children:"EnumFontFamiliesEx"})," takes a ",(0,a.jsx)(n.code,{children:"LOGFONT"}),"\nstruct which contains the"]}),"\n",(0,a.jsxs)(n.p,{children:["The Dart function signature for ",(0,a.jsx)(n.code,{children:"EnumFontFamiliesEx"})," is as follows:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"int EnumFontFamiliesEx(\n        int hdc,\n        Pointer<LOGFONT> lpLogfont,\n        Pointer<NativeFunction<EnumFontFamExProc>> lpProc,\n        int lParam,\n        int dwFlags) { ... }\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Notice the third parameter, which is a pointer to the callback function.\n",(0,a.jsx)(n.code,{children:"EnumFontFamExProc"}),". This is called once for every enumerated font, and is\ndefined as:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"typedef EnumFontFamExProc = Int32 Function(Pointer<LOGFONT> lpelfe,\n    Pointer<TEXTMETRIC> lpntme, DWORD FontType, LPARAM lParam);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["To create a callback function, define a Dart function that matches the types in\nthe native callback function above. Replace any integer types with a simple\n",(0,a.jsx)(n.code,{children:"int"})," Dart type. Here's an example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"int enumerateFonts(\n    Pointer<LOGFONT> logFont, Pointer<TEXTMETRIC> _, int __, int ___) {\n  // Get extended information from the font\n  final logFontEx = logFont.cast<ENUMLOGFONTEX>();\n\n  print(logFontEx.ref.elfFullName);\n  return TRUE; // continue enumeration\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"A couple of details that are worthy of note:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Since we are only using the first parameter, we use the Dart ",(0,a.jsx)(n.code,{children:"_"})," convention to\nnote that other parameter values are ignored."]}),"\n",(0,a.jsxs)(n.li,{children:["This callback returns ",(0,a.jsx)(n.code,{children:"TRUE"})," to indicate that the enumeration should continue.\nWe could stop the callback from being fired for the next enumerated value by\nreturning ",(0,a.jsx)(n.code,{children:"FALSE"})," instead (for example, if we'd found a specific font that we\nwere looking for)."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Now we have our function callback, we can use it to call ",(0,a.jsx)(n.code,{children:"EnumFontFamiliesEx"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"void main() {\n  final hDC = GetDC(NULL);\n  final searchFont = calloc<LOGFONT>()..ref.lfCharSet = HANGUL_CHARSET;\n  final callback = NativeCallable<EnumFontFamExProc>.isolateLocal(\n    enumerateFonts,\n    exceptionalReturn: 0,\n  );\n\n  EnumFontFamiliesEx(hDC, searchFont, callback.nativeFunction, 0, 0);\n\n  // Close the callback when it's no longer needed\n  callback.close();\n\n  free(searchFont);\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In the above function, we create a struct ",(0,a.jsx)(n.code,{children:"LOGFONT"})," containing our required\nsearch characteristics (fonts that support the Hangul, or Korean, character\nset). We then create a\n",(0,a.jsx)(n.a,{href:"https://api.dart.dev/stable/dart-ffi/NativeCallable-class.html",children:"NativeCallable"}),"\nfor the Dart callback function using the\n",(0,a.jsx)(n.a,{href:"https://api.dart.dev/stable/dart-ffi/NativeCallable/NativeCallable.isolateLocal.html",children:(0,a.jsx)(n.code,{children:"NativeCallable.isolateLocal"})}),"\nconstructor. Lastly, we call the ",(0,a.jsx)(n.code,{children:"EnumFontFamiliesEx"})," API to set up the\nenumeration. The Dart ",(0,a.jsx)(n.code,{children:"enumerateFonts()"})," function will now be called once for\nevery discovered font that matches the search characteristics."]}),"\n",(0,a.jsxs)(n.p,{children:["A complete version of the example here can be found in the ",(0,a.jsx)(n.code,{children:"example"})," folder of\n",(0,a.jsx)(n.code,{children:"package:win32"})," as\n",(0,a.jsx)(n.a,{href:"https://github.com/dart-windows/win32/blob/main/example/fonts.dart",children:(0,a.jsx)(n.code,{children:"fonts.dart"})}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>c});var a=t(7294);const i={},o=a.createContext(i);function c(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);
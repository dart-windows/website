"use strict";(self.webpackChunkwin_32_site=self.webpackChunkwin_32_site||[]).push([[578],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},i="Managing memory",l={unversionedId:"win32-programming/memory",id:"win32-programming/memory",title:"Managing memory",description:"Dart is a garbage-collected language. When you create objects (e.g. allocating a",source:"@site/docs/win32-programming/memory.md",sourceDirName:"win32-programming",slug:"/win32-programming/memory",permalink:"/docs/win32-programming/memory",draft:!1,editUrl:"https://github.com/dart-windows/website/blob/main/docs/docs/win32-programming/memory.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"win32DocSidebar",previous:{title:"Basic concepts",permalink:"/docs/win32-programming/basics"},next:{title:"Types in Win32",permalink:"/docs/win32-programming/types"}},s={},p=[{value:"Allocating memory with Dart",id:"allocating-memory-with-dart",level:2},{value:"Allocating strings",id:"allocating-strings",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"managing-memory"},"Managing memory"),(0,r.kt)("p",null,"Dart is a garbage-collected language. When you create objects (e.g. allocating a\nstring to a variable, or instantiating a class), Dart is responsible for\nallocating memory for them, as well ensuring that the memory used is freed when\nthose objects are no longer in use."),(0,r.kt)("p",null,"However, when you're working with libraries through FFI, only primitive values\n(such as integers) can be passed directly through to the native code being\ncalled. For other types, such as strings and data structures, you have to take\nresponsibility for allocating memory from the heap and freeing it up when it is\nno longer used."),(0,r.kt)("h2",{id:"allocating-memory-with-dart"},"Allocating memory with Dart"),(0,r.kt)("p",null,"So how do you allocate memory a block of memory for use with Windows? The\nsimplest approach is to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"calloc()")," function in ",(0,r.kt)("inlineCode",{parentName:"p"},"package:ffi"),", which\ncalls the underlying Windows API to allocate and zero out memory from the heap.\nFor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final pBuffer = calloc<Uint8>(256);\n")),(0,r.kt)("p",null,"This snippet allocates 256 bytes and returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Pointer<Uint8>")," object, which\ncan be used to manage the memory. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"pBuffer")," with an indexed array\noperator to access the allocated memory, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"for (var i=0; i<256; i++) {\n  pBuffer[i] = i % 8;\n}\n")),(0,r.kt)("p",null,"which fills the allocated memory with a repeated range of ",(0,r.kt)("inlineCode",{parentName:"p"},"[0..8]"),"."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Be careful to only access memory that you have allocated. The results of reading\nor writing unallocated memory are non-deterministic, but include an immediate\ncrash of your application or even data corruption.")),(0,r.kt)("p",null,"When you have completed the operation for which the allocated memory was needed,\nyou should release it so that it can be reused. ",(0,r.kt)("inlineCode",{parentName:"p"},"dart:ffi")," provides a\n",(0,r.kt)("a",{parentName:"p",href:"https://api.dart.dev/stable/3.0.0/dart-ffi/Allocator/free.html"},(0,r.kt)("inlineCode",{parentName:"a"},"calloc.free()")),"\nmethod, but for convenience, ",(0,r.kt)("inlineCode",{parentName:"p"},"package:win32")," provides a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"free()")," global\nfunction, which you can use as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"free(pBuffer);\n")),(0,r.kt)("p",null,"When your Dart program exits, Windows will automatically free all allocated\nmemory that hasn't previously been released, but you shouldn't depend on that.\nIn the absence of any other garbage collection for native memory, long-running\napplications that don't release manually-allocated memory will gradually exhaust\nthe available heap space (this is known as \"leaking\" memory)."),(0,r.kt)("h2",{id:"allocating-strings"},"Allocating strings"),(0,r.kt)("p",null,"Win32 APIs as projected by Dart typically assume a 16-bit Unicode encoding,\nwhere each character is represented by 2 bytes. The Dart FFI package makes it\neasy to copy a Dart-allocated String to native memory, where it can be passed to\nWin32 APIs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final verb = 'open'.toNativeUtf16();\nfinal process = 'notepad.exe'.toNativeUtf16();\nShellExecute(0, verb, process, nullptr, nullptr, SW_SHOW);\n\n// Do something\n\nfree(verb);\nfree(process);\n")),(0,r.kt)("p",null,"In this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"verb")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"process")," are of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Pointer<Utf16>"),", which\nrepresents a pointer to native memory. The allocated memory includes two bytes\nfor every character in ",(0,r.kt)("inlineCode",{parentName:"p"},"dartText"),", plus a final null-termination character\n(",(0,r.kt)("inlineCode",{parentName:"p"},"\\x00"),")."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Behind the scenes, the ",(0,r.kt)("inlineCode",{parentName:"p"},".toNativeUtf16()")," method allocates memory using the same\nunderlying functions as the ",(0,r.kt)("inlineCode",{parentName:"p"},"calloc()")," method above, so you are still\nresponsible for freeing its memory.")),(0,r.kt)("p",null,"If you want to create a new string, Win32 provides a simple function ",(0,r.kt)("inlineCode",{parentName:"p"},"wsalloc"),",\nwhich allocates the necessary storage. This is particularly useful when you wish\nto ",(0,r.kt)("em",{parentName:"p"},"receive")," a string from Windows. The following example calls the Win32\n",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/api/shlobj_core/nf-shlobj_core-shgetfolderpathw"},(0,r.kt)("inlineCode",{parentName:"a"},"SHGetFolderPath")),"\nAPI to retrieve the directory of the Desktop folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final path = wsalloc(MAX_PATH);\nSHGetFolderPath(NULL, CSIDL_DESKTOP, NULL, 0, path);\nprint('The Windows desktop folder is at ${path.toDartString()}');\nfree(path);\n")),(0,r.kt)("p",null,"In the example above, the returned value is converted back to a Dart string\nusing the ",(0,r.kt)("inlineCode",{parentName:"p"},".toDartString()")," extension method on ",(0,r.kt)("inlineCode",{parentName:"p"},"Pointer<Utf16>"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Calling ",(0,r.kt)("inlineCode",{parentName:"p"},".toString()")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," won't give the results you might expect, since\n",(0,r.kt)("inlineCode",{parentName:"p"},"path")," is of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Pointer<Utf16>"),". Instead it will print the address of the\npointer, something like this:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"Pointer: address=0x1729cc18240\n"))))}d.isMDXComponent=!0}}]);
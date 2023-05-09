"use strict";(self.webpackChunkwin_32_site=self.webpackChunkwin_32_site||[]).push([[331],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=d(n),N=r,k=s["".concat(p,".").concat(N)]||s[N]||u[N]||i;return n?a.createElement(k,l(l({ref:e},m),{},{components:n})):a.createElement(k,l({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=N;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},6302:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3},l="Types in Win32",o={unversionedId:"win32-programming/types",id:"win32-programming/types",title:"Types in Win32",description:"Integer types",source:"@site/docs/win32-programming/types.md",sourceDirName:"win32-programming",slug:"/win32-programming/types",permalink:"/docs/win32-programming/types",draft:!1,editUrl:"https://github.com/dart-windows/website/tree/main/docs/win32-programming/types.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"win32DocSidebar",previous:{title:"Calling functions",permalink:"/docs/win32-programming/functions"},next:{title:"Using Win32 structs from Dart",permalink:"/docs/win32-programming/structs"}},p={},d=[{value:"Integer types",id:"integer-types",level:2}],m={toc:d},s="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(s,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"types-in-win32"},"Types in Win32"),(0,r.kt)("h2",{id:"integer-types"},"Integer types"),(0,r.kt)("p",null,"Compared to Dart, which has a single integer type that is used for storing any\nvalue between -2",(0,r.kt)("sup",null,"63"),"-1 and 2",(0,r.kt)("sup",null,"63"),", the Win32 API has\ndifferent-sized integer types in both unsigned and signed variants. The\nfollowing table demonstrates the various integer types you'll commonly encounter\nwhen accessing Win32 APIs:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Common Win32 names"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"dart:ffi")," type"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Signed"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Range"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BYTE"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"UINT8"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"CHAR")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Uint8")),(0,r.kt)("td",{parentName:"tr",align:null},"8 bits"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0 to 255")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INT8")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Int8")),(0,r.kt)("td",{parentName:"tr",align:null},"8 bits"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-127 to 128")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WORD"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ATOM"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"UINT16"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"USHORT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Uint16")),(0,r.kt)("td",{parentName:"tr",align:null},"16 bits"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0 to 65535")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INT16"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"SHORT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Int16")),(0,r.kt)("td",{parentName:"tr",align:null},"16 bits"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-32767 to 32768")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DWORD"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"UINT"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"UINT32"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ULONG")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Uint32")),(0,r.kt)("td",{parentName:"tr",align:null},"32 bits"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0 to 2",(0,r.kt)("sup",null,"32"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INT"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"INT32"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"LONG")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Int32")),(0,r.kt)("td",{parentName:"tr",align:null},"32 bits"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-2",(0,r.kt)("sup",null,"31"),"-1 to 2",(0,r.kt)("sup",null,"31"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DWORDLONG"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ULONGLONG"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"UINT64"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ULONG64")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Uint64")),(0,r.kt)("td",{parentName:"tr",align:null},"64 bits"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0 to 2",(0,r.kt)("sup",null,"64"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LONGLONG"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"INT64")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Int64")),(0,r.kt)("td",{parentName:"tr",align:null},"64 bits"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-2",(0,r.kt)("sup",null,"63"),"-1 to 2",(0,r.kt)("sup",null,"63"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"HANDLE"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"LONG_PTR"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"UINT_PTR"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ULONG_PTR")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IntPtr")),(0,r.kt)("td",{parentName:"tr",align:null},"32/64 bits"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:"right"},"matches pointer length")))),(0,r.kt)("p",null,"When you're calling a function and passing a value in, you don't have to worry\nabout this: ",(0,r.kt)("inlineCode",{parentName:"p"},"package:win32")," includes all the metadata to convert from a Dart\n",(0,r.kt)("inlineCode",{parentName:"p"},"int")," type to the appropriate native representation."),(0,r.kt)("p",null,"However, knowing the type of data becomes important when a function is\n",(0,r.kt)("em",{parentName:"p"},"returning")," a value, since Win32 typically uses a ",(0,r.kt)("inlineCode",{parentName:"p"},"Pointer")," argument that it\nfills with the relevant data."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"package:win32")," includes typedefs for all the common Win32 integer types, so you\ndon't have to remember the size and sign of a type like ",(0,r.kt)("inlineCode",{parentName:"p"},"DWORD"),"."),(0,r.kt)("p",null,"For example, here's how to get the size of the system memory using Dart:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final lpMemorySize = calloc<ULONGLONG>();\nGetPhysicallyInstalledSystemMemory(lpMemorySize);\nfinal memorySizeMB = lpMemorySize.value ~/ 1024;\nprint('System has ${memorySizeMB}MB of RAM installed.');\nfree(lpMemorySize);\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"lpMemorySize")," could also be allocated as ",(0,r.kt)("inlineCode",{parentName:"p"},"calloc<ULONG64>()")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"calloc<Uint64>()"),": they all mean the same thing."))}u.isMDXComponent=!0}}]);
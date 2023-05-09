"use strict";(self.webpackChunkwin_32_site=self.webpackChunkwin_32_site||[]).push([[51],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:4},o="Using Win32 structs from Dart",s={unversionedId:"win32-programming/structs",id:"win32-programming/structs",title:"Using Win32 structs from Dart",description:"Win32 programming frequently uses C structs to pass data between functions.",source:"@site/docs/win32-programming/structs.md",sourceDirName:"win32-programming",slug:"/win32-programming/structs",permalink:"/docs/win32-programming/structs",draft:!1,editUrl:"https://github.com/dart-windows/website/tree/main/docs/win32-programming/structs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"win32DocSidebar",previous:{title:"Types in Win32",permalink:"/docs/win32-programming/types"},next:{title:"Managing memory",permalink:"/docs/win32-programming/memory"}},c={},l=[],p={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-win32-structs-from-dart"},"Using Win32 structs from Dart"),(0,a.kt)("p",null,"Win32 programming frequently uses C ",(0,a.kt)("inlineCode",{parentName:"p"},"struct"),"s to pass data between functions.\nThis topic provides more information on how to create, pass and access struct\nobjects from Dart code."),(0,a.kt)("p",null,"For example, let's assume you want to call the Win32 API\n",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/api/winbase/nf-winbase-getsystempowerstatus"},(0,a.kt)("inlineCode",{parentName:"a"},"GetSystemPowerStatus")),",\nwhich retrieves the current power status of the system (e.g. battery or AC\npowered)."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/win32/latest/winrt/GetSystemPowerStatus.html"},"Dart function\nsignature"),"\nlooks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"int GetSystemPowerStatus(Pointer<SYSTEM_POWER_STATUS> lpSystemPowerStatus) {}\n")),(0,a.kt)("p",null,"As the documentation indicates,\n",(0,a.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/win32/latest/winrt/SYSTEM_POWER_STATUS-class.html"},(0,a.kt)("inlineCode",{parentName:"a"},"SYSTEM_POWER_STATUS")),"\ninherits from the dart:ffi\n",(0,a.kt)("a",{parentName:"p",href:"https://api.dart.dev/stable/2.19.6/dart-ffi/Struct-class.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Struct"))," class."),(0,a.kt)("p",null,"To create such a struct, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"calloc")," to allocate memory for\nit:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"final lpSystemPowerStatus = calloc<SYSTEM_POWER_STATUS>();\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Dart also provides ",(0,a.kt)("inlineCode",{parentName:"p"},"malloc"),", which corresponds to the equivalent C runtime\nfunction that allocates uninitialized memory. In practice, ",(0,a.kt)("inlineCode",{parentName:"p"},"calloc")," is a good\ngeneral choice when writing Windows code, since the performance cost of\ninitializing memory is negligible in return for the eradication of potential\nside-effects.")),(0,a.kt)("p",null,"Since ",(0,a.kt)("inlineCode",{parentName:"p"},"lpSystemPowerStatus")," is of type ",(0,a.kt)("inlineCode",{parentName:"p"},"Pointer<SYSTEM_POWER_STATUS>"),", how do we\naccess the fields of ",(0,a.kt)("inlineCode",{parentName:"p"},"SYSTEM_POWER_STATUS"),"? Struct pointers have a\n",(0,a.kt)("a",{parentName:"p",href:"https://api.dart.dev/stable/3.0.0/dart-ffi/StructPointer/ref.html"},(0,a.kt)("inlineCode",{parentName:"a"},"ref")),"\nproperty which creates a reference accessing the fields of the struct."),(0,a.kt)("p",null,"Here's a simple example that shows how to detect the power status of a machine:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"final lpSystemPowerStatus = calloc<SYSTEM_POWER_STATUS>();\nfinal hr = GetSystemPowerStatus(lpSystemPowerStatus);\n\nif (SUCCEEDED(hr)) {\n  if (lpSystemPowerStatus.ref.BatteryFlag >= 128) {\n    // This value is only less than 128 if a battery is detected.\n    print('No system battery detected.');\n  } else {\n    final batteryRemainingPercent = lpSystemPowerStatus.ref.BatteryLifePercent;\n    if (batteryRemainingPercent <= 100) {\n      print('Battery detected with $batteryRemainingPercent% remaining.');\n    } else {\n      // Windows sets this value to 255 if it can't detect remaining life.\n      print('Battery detected but status unknown.');\n    }\n  }\n}\n\nfree(lpSystemPowerStatus);\n")),(0,a.kt)("p",null,"Here we pass a newly allocated and initialized ",(0,a.kt)("inlineCode",{parentName:"p"},"SYSTEM_POWER_STATUS")," struct to\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"GetSystemPowerStatus")," function, which fills it with values corresponding to\nthe machine's state. We then access fields of the returned struct by\ndereferencing the pointer."))}u.isMDXComponent=!0}}]);
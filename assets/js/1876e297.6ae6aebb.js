"use strict";(self.webpackChunkwin_32_site=self.webpackChunkwin_32_site||[]).push([[557],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1},o="Basic concepts",c={unversionedId:"win32-programming/basics",id:"win32-programming/basics",title:"Basic concepts",description:"Calling native libraries with FFI",source:"@site/docs/win32-programming/basics.md",sourceDirName:"win32-programming",slug:"/win32-programming/basics",permalink:"/docs/win32-programming/basics",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/win32-programming/basics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"win32DocSidebar",previous:{title:"Win32 Programming",permalink:"/docs/category/win32-programming"},next:{title:"Native memory management",permalink:"/docs/win32-programming/memory"}},l={},s=[{value:"Calling native libraries with FFI",id:"calling-native-libraries-with-ffi",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basic-concepts"},"Basic concepts"),(0,i.kt)("h2",{id:"calling-native-libraries-with-ffi"},"Calling native libraries with FFI"),(0,i.kt)("p",null,"The Windows API was originally written with C developers in mind. As a result,\nmany of the conventions are designed around the characteristics and capabilities\nof the C runtime. Fortunately, the wide popularity of C means that many\nlanguages, including Dart, have good support for calling C code and handling C\ncoding conventions."),(0,i.kt)("p",null,"In Dart, the primary means of calling C code is FFI, which stands for Foreign\nFunction Interface. Dart supplies both a library, ",(0,i.kt)("inlineCode",{parentName:"p"},"dart:ffi"),", and a package,\n`package:ffi', which together supply useful low-level functions and helpers."),(0,i.kt)("p",null,"To call FFI features, you will typically import both the library and the package\nfrom your code, as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"import 'dart:ffi';\n\nimport 'package:ffi/ffi.dart';\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Don't forget to add a dependency to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ffi")," package in your ",(0,i.kt)("inlineCode",{parentName:"p"},"pubspec.yaml"),".")))}m.isMDXComponent=!0}}]);
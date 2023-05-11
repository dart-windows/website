"use strict";(self.webpackChunkwin_32_site=self.webpackChunkwin_32_site||[]).push([[773],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1},o="Basic concepts",s={unversionedId:"winrt-programming/basics",id:"winrt-programming/basics",title:"Basic concepts",description:"Overview",source:"@site/docs/winrt-programming/basics.md",sourceDirName:"winrt-programming",slug:"/winrt-programming/basics",permalink:"/docs/winrt-programming/basics",draft:!1,editUrl:"https://github.com/dart-windows/website/tree/main/docs/winrt-programming/basics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"WinRT Programming",permalink:"/docs/category/winrt-programming"},next:{title:"Advanced concepts",permalink:"/docs/winrt-programming/advanced"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Initializing the WinRT",id:"initializing-the-winrt",level:2},{value:"Calling WinRT APIs",id:"calling-winrt-apis",level:2},{value:"Releasing WinRT objects",id:"releasing-winrt-objects",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basic-concepts"},"Basic concepts"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Windows Runtime (WinRT) is a suite of APIs and architectural model,\nintroduced in Windows 8, that powers the latest generation of Windows APIs.\nIt is an evolution of the COM API that is designed for access from a variety of\nlanguages. WinRT introduces standardized interfaces for collections (e.g.\n",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/uwp/api/windows.foundation.collections.ivector-1"},"IVector"),"), as well as support for generic types and asynchronous programming\nmodels."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dart-windows/dartwinrt"},"dartwinrt")," provides an idiomatic Dart projection of modern WinRT APIs using\nFFI. This allows you to use WinRT APIs in your Dart applications, including\nFlutter apps with minimal effort. It consists of ",(0,i.kt)("inlineCode",{parentName:"p"},"18")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dart-windows/dartwinrt#packages-"},"packages"),", each of which\ncorresponds to a top-level namespace (e.g. ",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/packages/windows_globalization"},"windows_globalization")," package\ncontains the WinRT APIs from the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/uwp/api/windows.globalization"},"Windows.Globalization")," namespace)."),(0,i.kt)("p",null,"Typically, you would import only the packages that provide the specific WinRT\nAPIs that your application requires. For example, to use the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/uwp/api/windows.globalization.calendar"},"Calendar")," class\nfrom the ",(0,i.kt)("inlineCode",{parentName:"p"},"Windows.Globalization")," namespace, you would import the\n",(0,i.kt)("inlineCode",{parentName:"p"},"windows_globalization")," package as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:windows_globalization/windows_globalization.dart';\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"dartwinrt")," is under active development and is considered ",(0,i.kt)("strong",{parentName:"p"},"unstable"),", which\nmeans breaking changes are expected. Additionally, it is worth noting that\nthere are some known ",(0,i.kt)("a",{parentName:"p",href:"limitations"},"limitations")," associated with it.")),(0,i.kt)("h2",{id:"initializing-the-winrt"},"Initializing the WinRT"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dartwinrt")," automatically initializes WinRT using a multi-threaded apartment\n(MTA) when necessary. Therefore, in most cases, you do not need to undertake\nany extra measures to begin calling WinRT APIs."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Keep in mind that, if you need to call WinRT APIs that only work in a\nsingle-threaded apartment (STA), you must initialize WinRT with a STA by\ncalling the ",(0,i.kt)("inlineCode",{parentName:"p"},"RoInitialize(RO_INIT_TYPE.RO_INIT_SINGLETHREADED)")," function.")),(0,i.kt)("h2",{id:"calling-winrt-apis"},"Calling WinRT APIs"),(0,i.kt)("p",null,"Calling WinRT APIs is pretty straightforward. To illustrate, here is a simple\nexample that demonstrates how to retrieve the current ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime")," from the\n",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/uwp/api/windows.globalization.calendar"},"Calendar")," class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"// Since Calendar class is defined in the Windows.Globalization namespace,\n// you need to import the windows_globalization package.\nimport 'package:windows_globalization/windows_globalization.dart';\n\nvoid main() {\n    final calendar = Calendar(); // Create a new Calendar object\n    final currentDateTime = calendar.getDateTime(); // Get the current DateTime\n    print(currentDateTime); // e.g. 2023-05-11 13:47:21.380001Z\n}\n")),(0,i.kt)("h2",{id:"releasing-winrt-objects"},"Releasing WinRT objects"),(0,i.kt)("p",null,"In general, releasing WinRT objects isn't something you need to worry about,\nbecause when the object becomes inaccessible to the program, the ",(0,i.kt)("a",{parentName:"p",href:"https://api.dart.dev/stable/dart-core/Finalizer-class.html"},"Finalizer"),"\nautomatically releases it for you."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If you are manually managing the lifetime of an object, such as by calling the\n",(0,i.kt)("inlineCode",{parentName:"p"},".detach()")," method, then it is important to ensure that you release it properly\nby calling the ",(0,i.kt)("inlineCode",{parentName:"p"},".release()")," method. Additionally, you should free up the memory\nthat was allocated for the object by calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"free()")," helper function as\nfollows:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"calendar.release(); // Release the WinRT object\nfree(calendar.ptr); // Release the allocated memory for the object\n")),(0,i.kt)("p",{parentName:"admonition"},"This is necessary to prevent memory leaks and ensure that the memory used by\nthe object is properly released."),(0,i.kt)("admonition",{parentName:"admonition",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"It is important to include this code as part of a ",(0,i.kt)("inlineCode",{parentName:"p"},"try")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"finally")," block to\nensure that the object is released properly, even if an exception is thrown\nduring the execution of your code."))))}m.isMDXComponent=!0}}]);
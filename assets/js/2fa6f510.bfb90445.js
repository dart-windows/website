"use strict";(self.webpackChunkwin_32_site=self.webpackChunkwin_32_site||[]).push([[773],{7204:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var t=i(5893),a=i(1151);const s={sidebar_position:1},o="Basic concepts",r={id:"winrt-programming/basics",title:"Basic concepts",description:"Overview",source:"@site/docs/winrt-programming/basics.md",sourceDirName:"winrt-programming",slug:"/winrt-programming/basics",permalink:"/docs/winrt-programming/basics",draft:!1,unlisted:!1,editUrl:"https://github.com/dart-windows/website/tree/main/docs/winrt-programming/basics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"WinRT Programming",permalink:"/docs/category/winrt-programming"},next:{title:"Limitations",permalink:"/docs/winrt-programming/limitations"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Initializing the WinRT",id:"initializing-the-winrt",level:2},{value:"Calling WinRT APIs",id:"calling-winrt-apis",level:2},{value:"Releasing WinRT objects",id:"releasing-winrt-objects",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"basic-concepts",children:"Basic concepts"}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["The Windows Runtime (WinRT) is a suite of APIs and architectural model,\nintroduced in Windows 8, that powers the latest generation of Windows APIs.\nIt is an evolution of the COM API that is designed for access from a variety of\nlanguages. WinRT introduces standardized interfaces for collections (e.g.\n",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/uwp/api/windows.foundation.collections.ivector-1",children:"IVector"}),"), as well as support for generic types and asynchronous programming\nmodels."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/dart-windows/dartwinrt",children:"dartwinrt"})," provides an idiomatic Dart projection of modern WinRT APIs using\nFFI. This allows you to use WinRT APIs in your Dart applications, including\nFlutter apps with minimal effort. It consists of ",(0,t.jsx)(n.code,{children:"18"})," ",(0,t.jsx)(n.a,{href:"https://github.com/dart-windows/dartwinrt#packages-",children:"packages"}),", each of which\ncorresponds to a top-level namespace (e.g. ",(0,t.jsx)(n.a,{href:"https://pub.dev/packages/windows_globalization",children:"windows_globalization"})," package\ncontains the WinRT APIs from the ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/uwp/api/windows.globalization",children:"Windows.Globalization"})," namespace)."]}),"\n",(0,t.jsxs)(n.p,{children:["Typically, you would import only the packages that provide the specific WinRT\nAPIs that your application requires. For example, to use the ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/uwp/api/windows.globalization.calendar",children:"Calendar"})," class\nfrom the ",(0,t.jsx)(n.code,{children:"Windows.Globalization"})," namespace, you would import the\n",(0,t.jsx)(n.code,{children:"windows_globalization"})," package as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"import 'package:windows_globalization/windows_globalization.dart';\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["The WinRT APIs that are projected by ",(0,t.jsx)(n.code,{children:"dartwinrt"})," are limited, but additional\nAPIs will be added based on user demand, especially if it helps facilitate the\ndevelopment of new Dart packages for Windows."]}),(0,t.jsxs)(n.p,{children:["If you encounter any issues or have any feature requests, please submit them\nthrough the ",(0,t.jsx)(n.a,{href:"https://github.com/dart-windows/dartwinrt/issues",children:"issue tracker"}),"."]})]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"dartwinrt"})," is under active development and is considered ",(0,t.jsx)(n.strong,{children:"unstable"}),", which\nmeans breaking changes are expected. Additionally, it is worth noting that\nthere are some known ",(0,t.jsx)(n.a,{href:"limitations",children:"limitations"})," associated with it."]})}),"\n",(0,t.jsx)(n.h2,{id:"initializing-the-winrt",children:"Initializing the WinRT"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"dartwinrt"})," automatically initializes WinRT using a multi-threaded apartment\n(MTA) when necessary. Therefore, in most cases, you do not need to undertake\nany extra measures to begin calling WinRT APIs."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Keep in mind that, if you need to call WinRT APIs that only work in a\nsingle-threaded apartment (STA), you must initialize WinRT with a STA by\ncalling the ",(0,t.jsx)(n.code,{children:"RoInitialize(RO_INIT_TYPE.RO_INIT_SINGLETHREADED)"})," function."]})}),"\n",(0,t.jsx)(n.h2,{id:"calling-winrt-apis",children:"Calling WinRT APIs"}),"\n",(0,t.jsxs)(n.p,{children:["Calling WinRT APIs is pretty straightforward. To illustrate, here is a simple\nexample that demonstrates how to retrieve the current ",(0,t.jsx)(n.code,{children:"DateTime"})," from the\n",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/uwp/api/windows.globalization.calendar",children:"Calendar"})," class:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"import 'package:windows_globalization/windows_globalization.dart';\n\nvoid main() {\n\tfinal calendar = Calendar(); // Create a new Calendar object\n\tfinal currentDateTime = calendar.getDateTime(); // Get the current DateTime\n\tprint(currentDateTime); // e.g. 2023-05-11 13:47:21.380001Z\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"releasing-winrt-objects",children:"Releasing WinRT objects"}),"\n",(0,t.jsxs)(n.p,{children:["In general, releasing WinRT objects isn't something you need to worry about,\nbecause when the object becomes inaccessible to the program, the ",(0,t.jsx)(n.a,{href:"https://api.dart.dev/stable/dart-core/Finalizer-class.html",children:"Finalizer"}),"\nautomatically releases it for you."]}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsxs)(n.p,{children:["If you are manually managing the lifetime of an object, such as by calling the\n",(0,t.jsx)(n.code,{children:".detach()"})," method, then it is important to ensure that you release it properly\nby calling the ",(0,t.jsx)(n.code,{children:".release()"})," method. Additionally, you should free up the memory\nthat was allocated for the object by calling the ",(0,t.jsx)(n.code,{children:"free()"})," helper function as\nfollows:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"calendar.release(); // Release the WinRT object\nfree(calendar.ptr); // Release the allocated memory for the object\n"})}),(0,t.jsx)(n.p,{children:"This is necessary to prevent memory leaks and ensure that the memory used by\nthe object is properly released."}),(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["It is important to include this code as part of a ",(0,t.jsx)(n.code,{children:"try"})," / ",(0,t.jsx)(n.code,{children:"finally"})," block to\nensure that the object is released properly, even if an exception is thrown\nduring the execution of your code."]})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var t=i(7294);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
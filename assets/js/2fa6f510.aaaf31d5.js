"use strict";(self.webpackChunkwin_32_site=self.webpackChunkwin_32_site||[]).push([[773],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1},o="Basic concepts",l={unversionedId:"winrt-programming/basics",id:"winrt-programming/basics",title:"Basic concepts",description:"TODO",source:"@site/docs/winrt-programming/basics.md",sourceDirName:"winrt-programming",slug:"/winrt-programming/basics",permalink:"/docs/winrt-programming/basics",draft:!1,editUrl:"https://github.com/dart-windows/website/tree/main/docs/winrt-programming/basics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"WinRT Programming",permalink:"/docs/category/winrt-programming"}},s={},c=[{value:"Initializing the WinRT",id:"initializing-the-winrt",level:2},{value:"TODO",id:"todo",level:2},{value:"Releasing WinRT objects",id:"releasing-winrt-objects",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basic-concepts"},"Basic concepts"),(0,i.kt)("p",null,"TODO"),(0,i.kt)("h2",{id:"initializing-the-winrt"},"Initializing the WinRT"),(0,i.kt)("p",null,"Most of the time you don't need to do anyting as this package ensures that\nthreads are implicitly assigned to the multi-threaded apartment (MTA)."),(0,i.kt)("p",null,"However, if you need to use APIs that only work in a single-threaded apartment\n(STA), you need to call ",(0,i.kt)("inlineCode",{parentName:"p"},"RoInitialize(RO_INIT_TYPE.RO_INIT_SINGLETHREADED)")," to\ninitialize the Windows Runtime with a single-threaded apartment."),(0,i.kt)("h2",{id:"todo"},"TODO"),(0,i.kt)("p",null,"TODO"),(0,i.kt)("h3",{id:"releasing-winrt-objects"},"Releasing WinRT objects"),(0,i.kt)("p",null,"In general, releasing WinRT objects isn't something you need to worry about,\nbecause when the object becomes inaccessible to the program, the\n",(0,i.kt)("a",{parentName:"p",href:"https://api.dart.dev/stable/dart-core/Finalizer-class.html"},"Finalizer"),"\nautomatically releases it for you."),(0,i.kt)("p",null,"Note that, if you are manually managing the lifetime of an object, such as by\ncalling the ",(0,i.kt)("inlineCode",{parentName:"p"},".detach()")," method, then it is important to ensure that you release\nit properly by calling the ",(0,i.kt)("inlineCode",{parentName:"p"},".release()")," method. Additionally, you should free\nup the memory that was allocated for the object by calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"free()")," helper\nfunction."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"calendar.release(); // Release the WinRT object\nfree(calendar.ptr); // Free the allocated memory for the object\n")),(0,i.kt)("p",null,"This is necessary to prevent memory leaks and ensure that the memory used by\nthe object is properly released."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"It is important to include this code as part of a ",(0,i.kt)("inlineCode",{parentName:"p"},"try")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"finally")," block to\nensure that the object is released properly, even if an exception is thrown\nduring the execution of your code.")))}d.isMDXComponent=!0}}]);
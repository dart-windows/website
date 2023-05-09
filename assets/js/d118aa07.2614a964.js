"use strict";(self.webpackChunkwin_32_site=self.webpackChunkwin_32_site||[]).push([[887],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Basic concepts",l={unversionedId:"com-programming/basics",id:"com-programming/basics",title:"Basic concepts",description:"Since the win32 package primarily focuses on providing a lightweight wrapper",source:"@site/docs/com-programming/basics.md",sourceDirName:"com-programming",slug:"/com-programming/basics",permalink:"/docs/com-programming/basics",draft:!1,editUrl:"https://github.com/dart-windows/website/tree/main/docs/com-programming/basics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"win32DocSidebar",previous:{title:"COM Programming",permalink:"/docs/category/com-programming"},next:{title:"Using strings in COM",permalink:"/docs/com-programming/strings"}},c={},s=[{value:"Initializing the COM library",id:"initializing-the-com-library",level:2},{value:"Creating a COM object",id:"creating-a-com-object",level:2},{value:"Asking a COM object for an interface",id:"asking-a-com-object-for-an-interface",level:2},{value:"Calling a method on a COM object",id:"calling-a-method-on-a-com-object",level:2},{value:"Releasing COM objects",id:"releasing-com-objects",level:3}],p={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"basic-concepts"},"Basic concepts"),(0,r.kt)("p",null,"Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"win32")," package primarily focuses on providing a lightweight wrapper\nfor the underlying Windows API primitives, you can use the same API calls as\ndescribed in Microsoft documentation to create and manipulate objects (e.g.\n",(0,r.kt)("inlineCode",{parentName:"p"},"CoCreateInstance")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"IUnknown->QueryInterface"),"). However, since this\nintroduces a certain amount of boilerplate and non-idiomatic Dart code, the\nlibrary also provides some helper functions that reduce the labor compared to a\npure C-style calling convention."),(0,r.kt)("h2",{id:"initializing-the-com-library"},"Initializing the COM library"),(0,r.kt)("p",null,"Before you call any COM functions, first initialize the COM library by calling\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"CoInitializeEx")," function. Details of the threading models are outside the\nscope of this document, but typically you should write something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final hr = CoInitializeEx(\n    nullptr, COINIT_APARTMENTTHREADED | COINIT_DISABLE_OLE1DDE);\nif (FAILED(hr)) throw WindowsException(hr);\n")),(0,r.kt)("h2",{id:"creating-a-com-object"},"Creating a COM object"),(0,r.kt)("p",null,"You can create COM objects using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/win32/learnwin32/creating-an-object-in-com"},"C\nlibrary"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"hr = CoCreateInstance(clsid, nullptr, CLSCTX_INPROC_SERVER, iid, ppv);\n")),(0,r.kt)("p",null,"However, rather than manually allocate GUID structs for the ",(0,r.kt)("inlineCode",{parentName:"p"},"clsid")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"iid"),"\nvalues, checking the ",(0,r.kt)("inlineCode",{parentName:"p"},"hr")," result code and deal with casting the ",(0,r.kt)("inlineCode",{parentName:"p"},"ppv")," return\nobject, it is easier to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"createFromID")," static helper function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final fileDialog2 = IFileDialog2(\n    COMObject.createFromID(CLSID_FileOpenDialog, IID_IFileDialog2));\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"createFromID")," returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Pointer<COMObject>")," containing the requested object,\nwhich can then be cast into the appropriate interface as shown above."),(0,r.kt)("h2",{id:"asking-a-com-object-for-an-interface"},"Asking a COM object for an interface"),(0,r.kt)("p",null,"COM allows objects to implement multiple interfaces, but it does not let you\nmerely cast an object to a different interface. Instead, returned pointers are\nto a specific interface. However, every COM interface in the ",(0,r.kt)("inlineCode",{parentName:"p"},"win32")," package\nderives from ",(0,r.kt)("inlineCode",{parentName:"p"},"IUnknown"),", so as in other language implementations of COM, you\nmay call ",(0,r.kt)("inlineCode",{parentName:"p"},"queryInterface")," on any object to retrieve a pointer to a different\nsupported interface."),(0,r.kt)("p",null,"More information on COM interfaces may be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/win32/learnwin32/asking-an-object-for-an-interface"},"Microsoft\ndocumentation"),"."),(0,r.kt)("p",null,"COM interfaces supply a method that wraps ",(0,r.kt)("inlineCode",{parentName:"p"},"queryInterface"),". If you\nhave an existing COM object, you can call it as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"  final modalWindow = IModalWindow(fileDialog2.toInterface(IID_IModalWindow));\n")),(0,r.kt)("p",null,"or, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"from")," constructor that wraps the ",(0,r.kt)("inlineCode",{parentName:"p"},"toInterface")," for you:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"  final modalWindow = IModalWindow.from(fileDialog2);\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"createFromID")," creates a new COM object, ",(0,r.kt)("inlineCode",{parentName:"p"},"toInterface")," casts an existing\nCOM object to a new interface."),(0,r.kt)("p",null,"Attempting to cast a COM object to an interface it does not support will fail,\nof course. A ",(0,r.kt)("inlineCode",{parentName:"p"},"WindowsException")," will be thrown with an hr of ",(0,r.kt)("inlineCode",{parentName:"p"},"E_NOINTERFACE"),"."),(0,r.kt)("h2",{id:"calling-a-method-on-a-com-object"},"Calling a method on a COM object"),(0,r.kt)("p",null,"No special considerations are needed here; however, it is wise to assign the\nreturn value to a variable and test it for success or failure. You can use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"SUCCEEDED()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"FAILED()")," top-level functions to do this, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final hr = fileOpenDialog.show(NULL);\nif (SUCCEEDED(hr)) {\n  // Do something with the returned dialog box values\n}\n")),(0,r.kt)("p",null,"Failures are reported as ",(0,r.kt)("inlineCode",{parentName:"p"},"HRESULT")," values (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"E_ACCESSDENIED"),"). Sometimes a\nWin32 error code is converted to an ",(0,r.kt)("inlineCode",{parentName:"p"},"HRESULT"),", as in the case where a user\ncancels a common dialog box:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final hr = fileOpenDialog.show(NULL);\nif (FAILED(hr) && hr == HRESULT_FROM_WIN32(ERROR_CANCELLED)) {\n  // User clicked cancel\n}\n")),(0,r.kt)("h3",{id:"releasing-com-objects"},"Releasing COM objects"),(0,r.kt)("p",null,"In general, releasing COM objects isn't something you need to worry about,\nbecause when the object becomes inaccessible to the program, the\n",(0,r.kt)("a",{parentName:"p",href:"https://api.dart.dev/stable/dart-core/Finalizer-class.html"},"Finalizer"),"\nautomatically releases it for you."),(0,r.kt)("p",null,"Note that, if you are manually managing the lifetime of an object, such as by\ncalling the ",(0,r.kt)("inlineCode",{parentName:"p"},".detach()")," method, then it is important to ensure that you release\nit properly by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},".release()")," method. Additionally, you should free\nup the memory that was allocated for the object by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"free()")," helper\nfunction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"fileOpenDialog.release(); // Release the COM object\nfree(fileOpenDialog.ptr); // Free the allocated memory for the object\n")),(0,r.kt)("p",null,"This is necessary to prevent memory leaks and ensure that the memory used by\nthe object is properly released."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It is important to include this code as part of a ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"finally")," block to\nensure that the object is released properly, even if an exception is thrown\nduring the execution of your code.")))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwin_32_site=self.webpackChunkwin_32_site||[]).push([[51],{5548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=n(5893),i=n(1151);const r={sidebar_position:5},a="Using Win32 structs from Dart",o={id:"win32-programming/structs",title:"Using Win32 structs from Dart",description:"Win32 programming frequently uses C structs to pass data between functions.",source:"@site/docs/win32-programming/structs.md",sourceDirName:"win32-programming",slug:"/win32-programming/structs",permalink:"/docs/win32-programming/structs",draft:!1,unlisted:!1,editUrl:"https://github.com/dart-windows/website/tree/main/docs/win32-programming/structs.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"Manual memory allocation",permalink:"/docs/win32-programming/memory"},next:{title:"Patterns for memory management",permalink:"/docs/win32-programming/memory-patterns"}},c={},l=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"using-win32-structs-from-dart",children:"Using Win32 structs from Dart"}),"\n",(0,s.jsxs)(t.p,{children:["Win32 programming frequently uses C ",(0,s.jsx)(t.code,{children:"struct"}),"s to pass data between functions.\nThis topic provides more information on how to create, pass and access struct\nobjects from Dart code."]}),"\n",(0,s.jsxs)(t.p,{children:["For example, let's assume you want to call the Win32 API\n",(0,s.jsx)(t.a,{href:"https://learn.microsoft.com/windows/win32/api/winbase/nf-winbase-getsystempowerstatus",children:(0,s.jsx)(t.code,{children:"GetSystemPowerStatus"})}),",\nwhich retrieves the current power status of the system (e.g. battery or AC\npowered)."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://pub.dev/documentation/win32/latest/win32/GetSystemPowerStatus.html",children:"Dart function\nsignature"}),"\nlooks like this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"int GetSystemPowerStatus(Pointer<SYSTEM_POWER_STATUS> lpSystemPowerStatus) {}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["As the documentation indicates,\n",(0,s.jsx)(t.a,{href:"https://pub.dev/documentation/win32/latest/win32/SYSTEM_POWER_STATUS-class.html",children:(0,s.jsx)(t.code,{children:"SYSTEM_POWER_STATUS"})}),"\ninherits from the dart",":ffi","\n",(0,s.jsx)(t.a,{href:"https://api.dart.dev/stable/dart-ffi/Struct-class.html",children:(0,s.jsx)(t.code,{children:"Struct"})})," class."]}),"\n",(0,s.jsxs)(t.p,{children:["To create such a struct, you can use ",(0,s.jsx)(t.code,{children:"calloc"})," to allocate memory for\nit:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"final lpSystemPowerStatus = calloc<SYSTEM_POWER_STATUS>();\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Dart also provides ",(0,s.jsx)(t.code,{children:"malloc"}),", which corresponds to the equivalent C runtime\nfunction that allocates uninitialized memory. In practice, ",(0,s.jsx)(t.code,{children:"calloc"})," is a good\ngeneral choice when writing Windows code, since the performance cost of\ninitializing memory is negligible in return for the eradication of potential\nside-effects."]})}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsxs)(t.p,{children:["Some structs include a field (typically the first one) for their size. This is\ntypically because they're used with a function that can accept multiple variants\nof the same struct (e.g. ",(0,s.jsx)(t.code,{children:"WNDCLASS"})," and ",(0,s.jsx)(t.code,{children:"WNDCLASSEX"}),"), with the size field being\nused to disambiguate the struct being passed."]}),(0,s.jsx)(t.p,{children:"The Dart cascade notation provides a convenient way to initialize classes like\nthis. For example:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"final wndClass = calloc<WNDCLASSEX>()..ref.cbSize = sizeOf<WNDCLASSEX>();\n"})})]}),"\n",(0,s.jsxs)(t.p,{children:["Since ",(0,s.jsx)(t.code,{children:"lpSystemPowerStatus"})," is of type ",(0,s.jsx)(t.code,{children:"Pointer<SYSTEM_POWER_STATUS>"}),", how do we\naccess the fields of ",(0,s.jsx)(t.code,{children:"SYSTEM_POWER_STATUS"}),"? Struct pointers have a\n",(0,s.jsx)(t.a,{href:"https://api.dart.dev/stable/dart-ffi/StructPointer/ref.html",children:(0,s.jsx)(t.code,{children:"ref"})}),"\nproperty which creates a reference accessing the fields of the struct."]}),"\n",(0,s.jsx)(t.p,{children:"Here's a simple example that shows how to detect the power status of a machine:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"final lpSystemPowerStatus = calloc<SYSTEM_POWER_STATUS>();\nfinal hr = GetSystemPowerStatus(lpSystemPowerStatus);\n\nif (SUCCEEDED(hr)) {\n  if (lpSystemPowerStatus.ref.BatteryFlag >= 128) {\n    // This value is only less than 128 if a battery is detected.\n    print('No system battery detected.');\n  } else {\n    final batteryRemainingPercent = lpSystemPowerStatus.ref.BatteryLifePercent;\n    if (batteryRemainingPercent <= 100) {\n      print('Battery detected with $batteryRemainingPercent% remaining.');\n    } else {\n      // Windows sets this value to 255 if it can't detect remaining life.\n      print('Battery detected but status unknown.');\n    }\n  }\n}\n\nfree(lpSystemPowerStatus);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Here we pass a newly allocated and initialized ",(0,s.jsx)(t.code,{children:"SYSTEM_POWER_STATUS"})," struct to\nthe ",(0,s.jsx)(t.code,{children:"GetSystemPowerStatus"})," function, which fills it with values corresponding to\nthe machine's state. We then access fields of the returned struct by\ndereferencing the pointer."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var s=n(7294);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
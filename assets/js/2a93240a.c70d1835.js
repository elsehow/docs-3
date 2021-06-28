(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7162],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},417:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:2},p={unversionedId:"learn/simple-option/setup",id:"learn/simple-option/setup",isDocsHomePage:!1,title:"Setup",description:"Coding Environment",source:"@site/docs/learn/simple-option/setup.md",sourceDirName:"learn/simple-option",slug:"/learn/simple-option/setup",permalink:"/next/learn/simple-option/setup",editUrl:"https://github.com/CosmWasm/docs/edit/main/docs/learn/simple-option/setup.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/next/learn/simple-option/intro"},next:{title:"Develop Contract",permalink:"/next/learn/simple-option/develop"}},s=[{value:"Coding Environment",id:"coding-environment",children:[{value:"Rust and IDE",id:"rust-and-ide",children:[]}]},{value:"Project Starter",id:"project-starter",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("iframe",{src:"https://player.vimeo.com/video/457712351",width:"640",height:"360",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:!0}),(0,i.kt)("h2",{id:"coding-environment"},"Coding Environment"),(0,i.kt)("h3",{id:"rust-and-ide"},"Rust and IDE"),(0,i.kt)("p",null,"This section is a summary of ",(0,i.kt)("a",{parentName:"p",href:"/next/getting-started/installation"},"Getting Started / Installation and Setting Up Environment"),".\nYou can go to the doc, setup rust and preferred IDE then and come back here. We recommend using Intellij IDEA."),(0,i.kt)("h2",{id:"project-starter"},"Project Starter"),(0,i.kt)("p",null,"Project starter template repo is there for spinning new smart contract quickly.\nWith one command, project layout, boiler plate, git, and even Circle CI for auto testing/formatting/linting will be set up. Cool huh.\nHere is the repo: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-template"},"cosmwasm-template")),(0,i.kt)("p",null,"Assuming you have a followed section above, then the following should get you a new repo to start a contract:"),(0,i.kt)("p",null,"First, install ",(0,i.kt)("strong",{parentName:"p"},"cargo-generate"),". Unless you did that before, run this line now:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cargo install cargo-generate --features vendored-openssl")),(0,i.kt)("p",null,"Now, use it to create your new contract. Go to the folder in which you want to place it and run:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cargo generate --git https://github.com/CosmWasm/cosmwasm-template.git --name simple-option")),(0,i.kt)("p",null,"Initialize git repo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'git add .\ngit commit -m "Initial generation from cosmwasm-template"\n')),(0,i.kt)("p",null,"Great, workstation is ready."))}u.isMDXComponent=!0}}]);
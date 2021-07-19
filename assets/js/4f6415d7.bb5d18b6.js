(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1140],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return m},kt:function(){return u}});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=o.createContext({}),l=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=l(t.components);return o.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,c=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),d=l(n),u=a,h=d["".concat(c,".").concat(u)]||d[u]||p[u]||r;return n?o.createElement(h,i(i({ref:e},m),{},{components:n})):o.createElement(h,i({ref:e},m))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8390:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return d}});var o=n(2122),a=n(9756),r=(n(7294),n(3905)),i=["components"],s={id:"intro",slug:"/",sidebar_position:1},c="Introduction",l={unversionedId:"intro",id:"version-0.14/intro",isDocsHomePage:!1,title:"Introduction",description:"CosmWasm is a new smart contracting platform built for the cosmos ecosystem. If you haven't yet heard",source:"@site/docs_versioned_docs/version-0.14/01-intro.md",sourceDirName:".",slug:"/",permalink:"/docs/0.14/",editUrl:"https://github.com/CosmWasm/docs/edit/main/docs_versioned_docs/version-0.14/01-intro.md",version:"0.14",sidebarPosition:1,frontMatter:{id:"intro",slug:"/",sidebar_position:1},sidebar:"version-0.14/docsSidebar",next:{title:"Your First Contract",permalink:"/docs/0.14/getting-started/intro"}},m=[{value:"How to use CosmWasm",id:"how-to-use-cosmwasm",children:[]},{value:"Sections",id:"sections",children:[]},{value:"Further Studies",id:"further-studies",children:[]}],p={toc:m};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Synopsis")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"CosmWasm is a new smart contracting platform built for the cosmos ecosystem. If you haven't yet heard\nof it, please ",(0,r.kt)("a",{parentName:"p",href:"https://blog.cosmos.network/announcing-the-launch-of-cosmwasm-cc426ab88e12"},"check out this intro"),". The\npurpose of this documentation is to give a deep dive into the technology for developers who wish to try it out or\nintegrate it into their product. Particularly, it is aimed at Go developers with experience with the Cosmos SDK, as well\nas Rust developers looking for a blockchain platform."))),(0,r.kt)("h2",{id:"how-to-use-cosmwasm"},"How to use CosmWasm"),(0,r.kt)("p",null,"CosmWasm is written as a module that can plug into the Cosmos SDK. This means that anyone currently building a\nblockchain using the Cosmos SDK can quickly and easily add CosmWasm smart contracting support to their chain, without\nadjusting existing logic. We also provide a sample binary of CosmWasm integrated into the ",(0,r.kt)("inlineCode",{parentName:"p"},"gaiad")," binary,\ncalled ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd"},(0,r.kt)("inlineCode",{parentName:"a"},"wasmd")),", so you can launch a new smart-contract enabled blockchain out of\nthe box, using documented and tested tooling and the same security model as the Cosmos Hub."),(0,r.kt)("p",null,"You will need a running blockchain to host your contracts and use them from an app. We will explain how\nto ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.0/getting-started/setting-env#setting-up-environment"},"connect to a testnet"),"\nor ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.0/getting-started/setting-env#run-local-node-optional"},'set up a local "dev net"')," in a later section. And\nplan to\nsoon release a hosted testnet, to which all developers can simply upload their contracts, in order to easy run a demo\nand to share their contract with others."),(0,r.kt)("h2",{id:"sections"},"Sections"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/0.14/getting-started/intro"},"Getting Started")," dives you into hands-on training. It gently leads you through\nmodifying,\ndeploying, and executing a smart contract on a local blockchain. It is the ideal place to go through and get\nacquainted with all the aspects of the system, without too much hard work coding.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/0.14/architecture/multichain"},"Architecture")," explains much of the high-level design and 03-architecture of CosmWasm.\nBefore you start designing systems, it is good to understand the mental model and capabilities of the system. If you\njust want to get your hands dirty with working code, you can skip this section for now and come back later when you\nare ready to ponder design.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/ecosystem/testnets/build-requirements"},"Testnets"),' is a good first point if you are searching for a live network to\ntest and\nhack your smart contracts on a stable and easy to use testing environment. Also, "',(0,r.kt)("strong",{parentName:"p"},"We have enough validators joined\nthe testnets"),'", said no one ever \ud83d\ude09')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/tutorials/simple-option/intro"},"Learn")," will demonstrate developing smart contracts from zero to production\nwith\nstep\nby step explanations, code snippets, scripts and more.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/tutorials/videos-workshops"},"Workshops")," has great collection of demonstrations and verbal explanation of\nCosmWasm tech\nstack recorded by our team in various events and organisations.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/ecosystem/overview"},"Ecosystem")," for ecosystem overview.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/cw-plus/general/overview"},"Plus")," is for state of art CosmWasm smart contracts.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/0.14/ibc/overview"},"IBC")," is for all the things related to CosmWasm and IBC. Relayers, Active Network Connections,\nIBC\nenabled smart contracts and more."))),(0,r.kt)("h2",{id:"further-studies"},"Further Studies"),(0,r.kt)("p",null,"you can dig into our code and start writing your own contracts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/cosmwasm-examples"},"A set of example contracts")," for you to fork and experiment with"),(0,r.kt)("li",{parentName:"ul"},"Rustdoc for the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/cosmwasm-std/0.13.1/cosmwasm_std/"},"core contract libs")),(0,r.kt)("li",{parentName:"ul"},"Rustdoc for the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/cosmwasm-storage/0.13.1/cosmwasm_storage/"},"storage helpers"))),(0,r.kt)("p",null,"There are quite a few ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/confio"},"high level articles on medium")," that explain the various components of\nour stack and where we are going."),(0,r.kt)("p",null,"Many thanks to the ",(0,r.kt)("a",{parentName:"p",href:"https://interchain.io/"},"Interchain Foundation")," for funding most of the development work to bring\nCosmWasm to production."))}d.isMDXComponent=!0}}]);
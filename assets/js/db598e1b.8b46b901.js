(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4584],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2021:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],s={sidebar_position:1},c={unversionedId:"learn/hijack-escrow/intro",id:"learn/hijack-escrow/intro",isDocsHomePage:!1,title:"Introduction",description:"In getting started section we demonstrated the essential procedure that is required to use CosmWasm smart contracts: setup, compilation, development, and interacting. We will take it once step further and edit the escrow contract in a way that enables a thief to hijack the funds saved in the contract. Before starting, make sure you read and followed the steps in getting started.",source:"@site/docs/learn/hijack-escrow/intro.md",sourceDirName:"learn/hijack-escrow",slug:"/learn/hijack-escrow/intro",permalink:"/next/learn/hijack-escrow/intro",editUrl:"https://github.com/CosmWasm/docs/edit/main/docs/learn/hijack-escrow/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Next Steps",permalink:"/next/learn/simple-option/next-steps"},next:{title:"Hack the Contract",permalink:"/next/learn/hijack-escrow/hack-contract"}},l=[{value:"Setting up your IDE",id:"setting-up-your-ide",children:[{value:"Setting Root Directory",id:"setting-root-directory",children:[]}]}],u={toc:l};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"/next/getting-started/intro"},"getting started section")," we demonstrated the essential procedure that is required to use CosmWasm smart contracts: setup, compilation, development, and interacting. We will take it once step further and edit the escrow contract in a way that enables a thief to hijack the funds saved in the contract. Before starting, make sure you read and followed the steps in ",(0,a.kt)("a",{parentName:"p",href:"/next/getting-started/intro"},"getting started"),"."),(0,a.kt)("h2",{id:"setting-up-your-ide"},"Setting up your IDE"),(0,a.kt)("p",null,"Now that you can compile and test the code, it is time to edit it. But before that, we will need a good editor to make those changes. I highly recommend plugins that help you learn syntax, especially when just starting rust. There are two free editor environments I can recommend, choose the one that is more familiar to you."),(0,a.kt)("p",null,"If you use VSCode (",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"Download link"),") you just need to add the rust plugin. This is the best supported environment for RLS (Rust Language Server) and uses the rust compiler to type-check all your code on save. This gives the same error messages as the actual compiler would and highlights along the line of the code, but it can be a bit slow to respond sometime (as it runs the compiler). It is quite good, and if you are used to VSCode, I highly recommend it:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=rust-lang.rust"},"RLS for VSCode")),(0,a.kt)("p",null,"The other option I can recommend it Intellij IDEA Community Edition (",(0,a.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/download/"},"Download link"),"), along with the Rust Plugin. This has very nice and quick support for many language features directly inline. In particular, it shows the inferred types along variables, which can be very helpful, especially when working with (nested) generics. It catches most syntax errors very quickly, but not all of them. Which means sometimes you have to look at the compile failures to find the errors. If you are coming from another Intellij product (eg. Goland), I recommend this approach:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://intellij-rust.github.io/"},"RUST for Intellij")),(0,a.kt)("p",null,"There are many more editors out there and some have varying degrees of rust support, at least syntax highlighting, but I would recommend trying one of the two above, especially if you are new to rust. Once you are confident in the language, you can always use another editor and customize it to your liking."),(0,a.kt)("h3",{id:"setting-root-directory"},"Setting Root Directory"),(0,a.kt)("p",null,"Both of the above extensions look for a Cargo.toml file in the root directory of your workspace, and only parse rust code referenced by this Cargo.toml file (listed as a workspace, or imported by ",(0,a.kt)("inlineCode",{parentName:"p"},"src/lib.rs"),"). The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-examples"},(0,a.kt)("inlineCode",{parentName:"a"},"cosmwasm-examples"))," repo does not have a ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file, but rather one in each example sub-directory. To ensure proper IDE support when working on this example, you should open only the ",(0,a.kt)("inlineCode",{parentName:"p"},"escrow")," directory. And in general, have one window open for one rust projects, rooted in the same directory as it's ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file."))}p.isMDXComponent=!0}}]);
(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2927],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3224:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],c={title:"cw20-base Spec",sidebar_position:2},s={unversionedId:"cw-plus/cw20/cw20-base-spec",id:"version-0.14/cw-plus/cw20/cw20-base-spec",isDocsHomePage:!1,title:"CW20 Basic",description:"This is a basic implementation of a cw20 contract. It implements",source:"@site/versioned_docs/version-0.14/cw-plus/cw20/cw20-base-spec.md",sourceDirName:"cw-plus/cw20",slug:"/cw-plus/cw20/cw20-base-spec",permalink:"/0.14/cw-plus/cw20/cw20-base-spec",editUrl:"https://github.com/CosmWasm/docs/edit/main/versioned_docs/version-0.14/cw-plus/cw20/cw20-base-spec.md",version:"0.14",sidebarPosition:2,frontMatter:{title:"cw20-base Spec",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"CW20 Spec: Fungible Tokens",permalink:"/0.14/cw-plus/cw20/spec"},next:{title:"CW20-base Tutorial",permalink:"/0.14/cw-plus/cw20/cw20-base-tutorial"}},l=[{value:"Importing this contract",id:"importing-this-contract",children:[]}],p={toc:l};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is a basic implementation of a cw20 contract. It implements\nthe ",(0,a.kt)("a",{parentName:"p",href:"/0.14/cw-plus/cw20/spec"},"cw20 spec")," and is designed to\nbe deployed as is, or imported into other contracts to easily build\ncw20-compatible tokens with custom logic."),(0,a.kt)("p",null,"Implements:"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","cw20 Base"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Mintable extension"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Allowances extension")),(0,a.kt)("h2",{id:"importing-this-contract"},"Importing this contract"),(0,a.kt)("p",null,"You can also import much of the logic of this contract to build another\nERC20-contract, such as a bonding curve, overriding or extending what you\nneed."),(0,a.kt)("p",null,"Basically, you just need to write your handle function and import\n",(0,a.kt)("inlineCode",{parentName:"p"},"cw20_base::contract::handle_transfer"),", etc and dispatch to them.\nThis allows you to use custom ",(0,a.kt)("inlineCode",{parentName:"p"},"HandleMsg")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryMsg")," with your additional\ncalls, but then use the underlying implementation for the standard cw20\nmessages you want to support. The same with ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryMsg"),". You ",(0,a.kt)("em",{parentName:"p"},"could")," reuse ",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\nas it, but it is likely you will want to change it. And it is rather simple."))}u.isMDXComponent=!0}}]);
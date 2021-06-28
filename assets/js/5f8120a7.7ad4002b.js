(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4899],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),y=a,f=m["".concat(s,".").concat(y)]||m[y]||u[y]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6704:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],c={title:"IBC Relayer",sidebar_position:2},s={unversionedId:"ibc/relayer",id:"ibc/relayer",isDocsHomePage:!1,title:"Relayer",description:"Interchain connections require external processes called [relayer](https://github.",source:"@site/docs/ibc/relayer.md",sourceDirName:"ibc",slug:"/ibc/relayer",permalink:"/next/ibc/relayer",editUrl:"https://github.com/CosmWasm/docs/edit/main/docs/ibc/relayer.md",version:"current",sidebarPosition:2,frontMatter:{title:"IBC Relayer",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"IBC And CosmWasm",permalink:"/next/ibc/overview"},next:{title:"Active IBC connections",permalink:"/next/ibc/active-connections"}},l=[{value:"Relayer Implementations",id:"relayer-implementations",children:[]},{value:"Setting Up a Relayer Process",id:"setting-up-a-relayer-process",children:[]}],p={toc:l};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Interchain connections require external processes called ","[relayer]","(",(0,o.kt)("a",{parentName:"p",href:"https://github."},"https://github."),"\ncom/cosmos/ics/tree/master/spec/ics-018-relayer-algorithms). You can setup and run your own, or just use existing\nconnections."),(0,o.kt)("h2",{id:"relayer-implementations"},"Relayer Implementations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/confio/ts-relayer"},"confio/ts-relayer")," TypeScript implementation of IBC Relayer. Customizable and Reliable.\nProject state: ",(0,o.kt)("strong",{parentName:"li"},"ALPHA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/cosmos/relayer"},"cosmos/relayer")," The Cosmos IBC relayer package contains a basic relayer\nimplementation that is meant for users wishing to relay packets/data between sets of IBC enabled chains. Project\nstate: ",(0,o.kt)("strong",{parentName:"li"},"ALPHA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/informalsystems/ibc-rs"},"informalsystems/ibc-rs"),": Rust implementation of IBC. Project state:\n",(0,o.kt)("strong",{parentName:"li"},"ALPHA"))),(0,o.kt)("h2",{id:"setting-up-a-relayer-process"},"Setting Up a Relayer Process"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Under Development")))}u.isMDXComponent=!0}}]);
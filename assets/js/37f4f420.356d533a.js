(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7038],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2102:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),s=["components"],c={title:"cw20-staking Spec",sidebar_position:6},i={unversionedId:"cw-plus/cw20/cw20-staking-spec",id:"version-0.14/cw-plus/cw20/cw20-staking-spec",isDocsHomePage:!1,title:"CW20 Staking Derivates",description:"cw20-staking source code//github.com/CosmWasm/cosmwasm-plus/tree/master/contracts/cw20-escrow",source:"@site/versioned_docs/version-0.14/cw-plus/cw20/cw20-staking-spec.md",sourceDirName:"cw-plus/cw20",slug:"/cw-plus/cw20/cw20-staking-spec",permalink:"/0.14/cw-plus/cw20/cw20-staking-spec",editUrl:"https://github.com/CosmWasm/docs/edit/main/versioned_docs/version-0.14/cw-plus/cw20/cw20-staking-spec.md",version:"0.14",sidebarPosition:6,frontMatter:{title:"cw20-staking Spec",sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"CW20 Escrow",permalink:"/0.14/cw-plus/cw20/cw20-escrow-spec"},next:{title:"Atomic Swaps",permalink:"/0.14/cw-plus/cw20/cw20-atomic-swap-spec"}},u=[{value:"Functionality",id:"functionality",children:[]}],l={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"cw20-staking source code: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-plus/tree/master/contracts/cw20-escrow"},"https://github.com/CosmWasm/cosmwasm-plus/tree/master/contracts/cw20-escrow"),"\nThis is a sample contract that releases a minimal form of staking derivatives.\nThis is to be used for integration tests and as a foundation for other to build\nmore complex logic upon."),(0,a.kt)("h2",{id:"functionality"},"Functionality"),(0,a.kt)("p",null,'On one side, this acts as a cw20 token, holding a list of\nbalances for multiple addresses, and exposing queries and transfers (no\nallowances and "transfer from" to focus the logic on the staking stuff).\nHowever, it has no initial balance. Instead, it mints and burns them based on\ndelegations.'),(0,a.kt)("p",null,'For such a "bonding curve" we expose two additional message types. A "bond"\nmessage sends native staking tokens to the contract to be bonded to a validator\nand credits the user with the appropriate amount of derivative tokens. Likewise\nyou can burn some of your derivative tokens, and the contract will unbond the\nproportional amount of stake to the user\'s account (after typical 21-day\nunbonding period).'),(0,a.kt)("p",null,"To show an example of charging for such a service, we allow the contract owner\nto take a small exit tax, thus maybe 98% of the tokens will be unbonded and sent\nto the original account, and 2% of the tokens are not unbonded, but rather\ntransferred to the owners account. (The ownership can also be transferred)."))}p.isMDXComponent=!0}}]);
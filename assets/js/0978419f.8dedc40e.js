(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4507],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6407:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},p={unversionedId:"learn/frontend-dapp/cosmicdapp-design",id:"learn/frontend-dapp/cosmicdapp-design",isDocsHomePage:!1,title:"Cosmic dApp design",description:"The @cosmicdapp/design package provides two kinds of resources: theme and components. The theme provides global styles for visual consistency across the dApps, whereas the components will give us layout primitives and reusable React components with internal logic.",source:"@site/docs/learn/frontend-dapp/cosmicdapp-design.md",sourceDirName:"learn/frontend-dapp",slug:"/learn/frontend-dapp/cosmicdapp-design",permalink:"/next/learn/frontend-dapp/cosmicdapp-design",editUrl:"https://github.com/CosmWasm/docs/edit/main/docs/learn/frontend-dapp/cosmicdapp-design.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Cosmic dApp logic",permalink:"/next/learn/frontend-dapp/cosmicdapp-logic"},next:{title:"Bootstrap dApp",permalink:"/next/learn/frontend-dapp/bootstrap-dapp"}},l=[{value:"Theme",id:"theme",children:[]},{value:"Components",id:"components",children:[{value:"Layout primitives",id:"layout-primitives",children:[]},{value:"Components with logic",id:"components-with-logic",children:[]}]}],c={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/dApps/tree/master/packages/design"},(0,a.kt)("inlineCode",{parentName:"a"},"@cosmicdapp/design"))," package provides two kinds of resources: theme and components. The theme provides global styles for visual consistency across the dApps, whereas the components will give us layout primitives and reusable React components with internal logic."),(0,a.kt)("p",null,"The example balance checker dApp will make use of some resources from this package, so let's take a look at them."),(0,a.kt)("h2",{id:"theme"},"Theme"),(0,a.kt)("p",null,"We'll use the exported ",(0,a.kt)("inlineCode",{parentName:"p"},"GlobalStyle")," in order to have visual consistency with the rest of the dApps. This React component includes a CSS reset; spacing, colors, and fonts CSS Custom Properties; and an override for some Ant Design classes. This is seen at first glance if you look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"GlobalStyle")," code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"export function GlobalStyle(): JSX.Element {\n  return (\n    <>\n      <GlobalReset />\n      <GlobalSpacing />\n      <GlobalColors />\n      <GlobalFonts />\n      <GlobalAntOverride />\n    </>\n  );\n}\n")),(0,a.kt)("h2",{id:"components"},"Components"),(0,a.kt)("h3",{id:"layout-primitives"},"Layout primitives"),(0,a.kt)("p",null,"This resource offers some primitives based on the ",(0,a.kt)("a",{parentName:"p",href:"https://every-layout.dev"},"Every Layout")," book."),(0,a.kt)("h4",{id:"stack"},"Stack"),(0,a.kt)("p",null,"This React component displays its children as a stack with a configurable gap between them."),(0,a.kt)("h4",{id:"pagelayout"},"PageLayout"),(0,a.kt)("p",null,"This React component is used as the wrapper for every view. It establishes a max width of page and centers the stacked children inside."),(0,a.kt)("h3",{id:"components-with-logic"},"Components with logic"),(0,a.kt)("h4",{id:"login"},"Login"),(0,a.kt)("p",null,"The first view of the balance checker application. It offers three options for logging in: localStorage burner wallet, ledger wallet, or Keplr wallet."),(0,a.kt)("h4",{id:"youraccount"},"YourAccount"),(0,a.kt)("p",null,"A useful component that lets the user copy their own address to clipboard, and optionally show their current native balance."))}d.isMDXComponent=!0}}]);
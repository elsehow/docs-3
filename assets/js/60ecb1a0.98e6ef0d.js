(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9097],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9498:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],s={title:"Serialization",sidebar_position:5},c="Serialization Formats",l={unversionedId:"architecture/serialization",id:"version-0.16/architecture/serialization",isDocsHomePage:!1,title:"Serialization",description:"One of the driving forces in developing CosmWasm, besides security by design, was to include a very nice Developer UX.",source:"@site/docs_versioned_docs/version-0.16/03-architecture/05-serialization.md",sourceDirName:"03-architecture",slug:"/architecture/serialization",permalink:"/docs/0.16/architecture/serialization",editUrl:"https://github.com/CosmWasm/docs/edit/main/docs_versioned_docs/version-0.16/03-architecture/05-serialization.md",version:"0.16",sidebarPosition:5,frontMatter:{title:"Serialization",sidebar_position:5},sidebar:"version-0.16/docsSidebar",previous:{title:"Querying",permalink:"/docs/0.16/architecture/query"},next:{title:"Contract Composition",permalink:"/docs/0.16/architecture/composition"}},p=[{value:"JSON",id:"json",children:[]},{value:"Protobuf",id:"protobuf",children:[]},{value:"Cap&#39;n Proto",id:"capn-proto",children:[]},{value:"Credits",id:"credits",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"serialization-formats"},"Serialization Formats"),(0,a.kt)("p",null,"One of the driving forces in developing CosmWasm, besides security by design, was to include a very nice Developer UX.\nKey to this is the ability to inspect and debug messages sent on the blockchain, and parse results without needing\ncomplex libraries. Also not requiring downloading custom schemas and ABIs just to make a method call."),(0,a.kt)("h2",{id:"json"},"JSON"),(0,a.kt)("p",null,"The natural solution was to use JSON everywhere. It is self-describing, human-readable, and used in APIs everywhere. It\ndoes have some downsides, such as handling numbers over 2^53 (just use strings), no clear distinction between strings\nand base64-encoded binary, and no hard-coded schema. We auto-generate ",(0,a.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSON Schema"),"\ndescriptors for the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-examples/tree/master/escrow/schema"},"public API of contracts"),",\nwhich can be used to inspect the supported API and optionally used in client side tooling for auto-validation of\nmessages."),(0,a.kt)("p",null,"The feedback when developing and debugging with this has been positive, and we are quite happy with the Developer UX\nwith this. It is too early to tell if the message size and free-form schema will become a hinderance in production.\nHowever, please note that contracts define their own parsing logic for messages, the codec is not enforced by the\nframework. We provide first-class support for json\nthrough ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/blob/master/src/serde.rs"},(0,a.kt)("inlineCode",{parentName:"a"},"cosmwasm::serde")),"\nand ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-template"},(0,a.kt)("inlineCode",{parentName:"a"},"cosmwasm-template")),", but anyone can swap this out - provided they\nprovide client support for the format."),(0,a.kt)("p",null,"It is helpful to have consistency to aid client development, as well as contract-contract calls."),(0,a.kt)("h2",{id:"protobuf"},"Protobuf"),(0,a.kt)("p",null,"Protobuf is a well-known and widely-supported binary format. It gives a stricter schema guarantees than JSON and more\ncompact format. Protocol Buffers and GRPC support has been added with Cosmos SDK v0.39.0 upgrade."),(0,a.kt)("h2",{id:"capn-proto"},"Cap'n Proto"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://capnproto.org/"},"Cap'n Proto")," is a super-lean encoding format with zero-copy reads, and no parsing needed. This\nhas been ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/issues/78"},"suggested for use in CosmWasm")," as an optional addition. This\nmay be considered as an opt-in format for contracts desiring such efficiency or strict schema, or possibly just used for\nencoding internal data structures (",(0,a.kt)("inlineCode",{parentName:"p"},"Params"),")."),(0,a.kt)("h2",{id:"credits"},"Credits"),(0,a.kt)("p",null,"Much thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jtremback"},"Jehan Tremback"),", who insisted on a universal, human-readable format for\nall messages."))}d.isMDXComponent=!0}}]);
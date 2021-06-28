(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3898],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=m(t),u=r,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||s;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<s;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5353:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return m},default:function(){return p}});var a=t(2122),r=t(9756),s=(t(7294),t(3905)),o=["components"],i={sidebar_position:3},l={unversionedId:"learn/simple-option/develop",id:"version-0.14/learn/simple-option/develop",isDocsHomePage:!1,title:"Develop Contract",description:"First test if the starter works, and get your eyes used to rust test results:",source:"@site/versioned_docs/version-0.14/learn/simple-option/develop.md",sourceDirName:"learn/simple-option",slug:"/learn/simple-option/develop",permalink:"/0.14/learn/simple-option/develop",editUrl:"https://github.com/CosmWasm/docs/edit/main/versioned_docs/version-0.14/learn/simple-option/develop.md",version:"0.14",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Setup",permalink:"/0.14/learn/simple-option/setup"},next:{title:"Testing",permalink:"/0.14/learn/simple-option/testing"}},m=[{value:"Messages",id:"messages",children:[{value:"InitMsg",id:"initmsg",children:[]},{value:"HandleMsg",id:"handlemsg",children:[]},{value:"QueryMsg",id:"querymsg",children:[]}]},{value:"State",id:"state",children:[]},{value:"Contract Handlers",id:"contract-handlers",children:[{value:"Init",id:"init",children:[]},{value:"Handle",id:"handle",children:[]},{value:"Query",id:"query",children:[]},{value:"Build",id:"build",children:[]},{value:"Tooling",id:"tooling",children:[]},{value:"Compile",id:"compile",children:[]},{value:"Schema",id:"schema",children:[]}]}],c={toc:m};function p(e){var n=e.components,t=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("iframe",{src:"https://player.vimeo.com/video/457702442",width:"640",height:"360",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:!0}),(0,s.kt)("p",null,"First test if the starter works, and get your eyes used to rust test results:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cargo unit-test\nCompiling proc-macro2 v1.0.24\n  Compiling unicode-xid v0.2.1\n  Compiling syn v1.0.58\n  Compiling serde_derive v1.0.120\n  Compiling serde v1.0.120\n  Compiling ryu v1.0.5\n  Compiling serde_json v1.0.61\n  Compiling schemars v0.7.6\n  Compiling itoa v0.4.7\n  Compiling base64 v0.13.0\n  Compiling quote v1.0.8\n  Compiling serde_derive_internals v0.25.0\n  Compiling schemars_derive v0.7.6\n  Compiling thiserror-impl v1.0.23\n  Compiling cosmwasm-derive v0.13.2\n  Compiling thiserror v1.0.23\n  Compiling serde-json-wasm v0.2.3\n  Compiling cosmwasm-std v0.13.2\n  Compiling cosmwasm-schema v0.13.2\n  Compiling cosmwasm-storage v0.13.2\n  Compiling simple-option v0.8.0 (/home/orkunkl/Workspace/cosmwasm/cosmwasm-examples/simple-option)\n    Finished test [unoptimized + debuginfo] target(s) in 25.42s\n      Running target/debug/deps/simple_option-6787c8970c576a03\n\nrunning 4 tests\ntest contract::tests::proper_initialization ... ok\ntest contract::tests::transfer ... ok\ntest contract::tests::burn ... ok\ntest contract::tests::execute ... ok\n\ntest result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out\n\n")),(0,s.kt)("p",null,"All good."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Timecode ",(0,s.kt)("a",{parentName:"p",href:"https://vimeo.com/457702442#t=39s"},"https://vimeo.com/457702442#t=39s")))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-examples/blob/master/simple-option/src/lib.rs"},"src/lib.rs")," file contains wasm bindings. Wraps smart contract ",(0,s.kt)("em",{parentName:"p"},"(handle, init, query)")," functions around rust functions. If you are not doing advanced wasm tweaking, don't touch it."),(0,s.kt)("h2",{id:"messages"},"Messages"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Timecode ",(0,s.kt)("a",{parentName:"p",href:"https://vimeo.com/457702442#t=1m46s"},"https://vimeo.com/457702442#t=1m46s")))),(0,s.kt)("p",null,"Development begins in ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-examples/blob/master/simple-option/src/msg.rs"},"src/msg.rs")," which contains the input data structures of the smart contract."),(0,s.kt)("h3",{id:"initmsg"},"InitMsg"),(0,s.kt)("p",null,"We will begin with ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-examples/blob/master/simple-option/src/msg.rs"},(0,s.kt)("inlineCode",{parentName:"a"},"InitMsg")),". This struct has the initial values that initializes smart contract from the code and feeds in the data required for logic setup."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\npub struct InitMsg {\n    // owner and creator come from env\n    // collateral comes from env\n    pub counter_offer: Vec<Coin>,\n    pub expires: u64,\n}\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]")," implements specified traits for this structure using macros. More read ",(0,s.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/stable/rust-by-example/trait/derive.html"},"Rust docs / Derive")),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("ul",{parentName:"div"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},"Owner"),", ",(0,s.kt)("em",{parentName:"li"},"creator")," and ",(0,s.kt)("em",{parentName:"li"},"collateral")," comes from message transaction context, meaning owner and creator is the address signed the tx and collateral is funds sent along the message."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},"counter_offer")," is ",(0,s.kt)("a",{parentName:"li",href:"https://www.investopedia.com/terms/s/strikeprice.asp"},"strike price"),".")))),(0,s.kt)("h3",{id:"handlemsg"},"HandleMsg"),(0,s.kt)("p",null,"Contract execution is branched using ",(0,s.kt)("inlineCode",{parentName:"p"},"HandleMsg")," enum. Each field defines a message and content of that message."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\n#[serde(rename_all = "snake_case")]\npub enum HandleMsg {\n    /// Owner can transfer to a new owner\n    Transfer { recipient: HumanAddr },\n    /// Owner can post counter_offer on unexpired option to execute and get the collateral\n    Execute {},\n    /// Burn will release collateral if expired\n    Burn {},\n}\n')),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Canonical and Human Addresses\nCanonical Addresses represent binary format of crypto addresses.\nHuman Addresses on the other hand are great for the UI. They are always a subset of ascii text, and often contain security checks - such as chain-prefix in Bech32, e.g. cosmos1h57760w793q6vh06jsppnqdkc4ejcuyrrjxnke"),(0,s.kt)("p",{parentName:"div"},(0,s.kt)("inlineCode",{parentName:"p"},"canonicalize(humanize(canonical_addr)) == canonical_addr")),(0,s.kt)("p",{parentName:"div"},"For more details: ",(0,s.kt)("a",{parentName:"p",href:"/0.14/architecture/addresses"},"Names and Addresses")))),(0,s.kt)("h3",{id:"querymsg"},"QueryMsg"),(0,s.kt)("p",null,"Smart contract state querying is branched using ",(0,s.kt)("inlineCode",{parentName:"p"},"QueryMsg")," enum. We will implement a smart contract ",(0,s.kt)("inlineCode",{parentName:"p"},"Config")," query later."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\n#[serde(rename_all = "snake_case")]\npub enum QueryMsg {\n    Config {},\n}\n')),(0,s.kt)("h2",{id:"state"},"State"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Timecode ",(0,s.kt)("a",{parentName:"p",href:"https://vimeo.com/457702442#t=7m36s"},"https://vimeo.com/457702442#t=7m36s")))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-examples/blob/master/simple-option/src/state.rs"},"State")," handles state of the database where smart contract data is stored and accessed."),(0,s.kt)("p",null,"You have two options when modeling state:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Singleton"),": contract saves only one instance of the structure using unique db key. We will use this in this tutorial."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Structured store"),": models can be structured and stored dynamically. You can form one-to-one, one-to-many and many-to-many relations with indexing and lookup functionality.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'// configuration instance key. config object will be saved under this key.\npub static CONFIG_KEY: &[u8] = b"config";\n\n// contract state structure, this will be saved.\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\npub struct State {\n    pub creator: HumanAddr,\n    pub owner: HumanAddr,\n    pub collateral: Vec<Coin>,\n    pub counter_offer: Vec<Coin>,\n    pub expires: u64,\n}\n\npub fn config(storage: &mut dyn Storage) -> Singleton<State> {\n    singleton(storage, CONFIG_KEY)\n}\n\npub fn config_read(storage: &dyn Storage) -> ReadonlySingleton<State> {\n    singleton_read(storage, CONFIG_KEY)\n}\n\n')),(0,s.kt)("h2",{id:"contract-handlers"},"Contract Handlers"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Timecode ",(0,s.kt)("a",{parentName:"p",href:"https://vimeo.com/457702442#t=11m12s"},"https://vimeo.com/457702442#t=11m12s")))),(0,s.kt)("p",null,"Lego bricks ",(0,s.kt)("strong",{parentName:"p"},"msgs"),", ",(0,s.kt)("strong",{parentName:"p"},"handler")," and ",(0,s.kt)("strong",{parentName:"p"},"state")," are defined. Now we need to bind them together in ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-examples/blob/master/simple-option/src/contract.rs"},"contract.rs"),"."),(0,s.kt)("h3",{id:"init"},"Init"),(0,s.kt)("p",null,'The init function will be called exactly once, before the contract is executed. It is a "privileged" function in that\nit can set configuration that can never be modified by any other method call. The first line parses the input from raw\nbytes into our contract-defined message. We then check if option is expired, then create the initial state. If expired,\nwe return a generic contract error, otherwise, we store the state and return a success code:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn init(\n    deps: DepsMut,\n    env: Env,\n    info: MessageInfo,\n    msg: InitMsg,\n) -> Result<InitResponse, ContractError> {\n    if msg.expires <= env.block.height {\n        return Err(ContractError::OptionExpired {\n            expired: msg.expires,\n        });\n    }\n\n    let state = State {\n        creator: info.sender.clone(),\n        owner: info.sender.clone(),\n        collateral: info.sent_funds,\n        counter_offer: msg.counter_offer,\n        expires: msg.expires,\n    };\n\n    config(deps.storage).save(&state)?;\n\n    Ok(InitResponse::default())\n}\n")),(0,s.kt)("p",null,"The function is simple as it looks. Option expiration date check, save the state, and return response."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn init(\n    deps: DepsMut,\n    env: Env,\n    info: MessageInfo,\n    msg: InitMsg,\n) -> Result<InitResponse, ContractError> {\n")),(0,s.kt)("p",null,"You will see this signature all over CosmWasm handler functions. Execution context passed in to handler using Deps, which contains Storage, API and Querier functions; Env, which contains block, message and contract info; and msg, well, no explanation needed."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Result<T, ContractError>")," is a type that represents either success (","[",(0,s.kt)("inlineCode",{parentName:"p"},"Ok"),"]",") or failure (","[",(0,s.kt)("inlineCode",{parentName:"p"},"Err"),"]","). If the execution is successful returns ",(0,s.kt)("inlineCode",{parentName:"p"},"T")," type otherwise returns ",(0,s.kt)("inlineCode",{parentName:"p"},"ContractError"),". Useful."),(0,s.kt)("h3",{id:"handle"},"Handle"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Timecode ",(0,s.kt)("a",{parentName:"p",href:"https://vimeo.com/457702442#t=15m55s"},"https://vimeo.com/457702442#t=15m55s")))),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"handle")," method routes messages to functions. It is similar to Cosmos SDK handler design."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn handle(\n    deps: DepsMut,\n    env: Env,\n    info: MessageInfo,\n    msg: HandleMsg,\n) -> Result<HandleResponse, ContractError> {\n    match msg {\n        HandleMsg::Transfer { recipient } => handle_transfer(deps, env, info, recipient),\n        HandleMsg::Execute {} => handle_execute(deps, env, info),\n        HandleMsg::Burn {} => handle_burn(deps, env, info),\n    }\n}\n\n")),(0,s.kt)("h4",{id:"transfer"},"Transfer"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn handle_transfer(\n    deps: DepsMut,\n    _env: Env,\n    info: MessageInfo,\n    recipient: HumanAddr,\n) -> Result<HandleResponse, ContractError> {\n    // ensure msg sender is the owner\n    let mut state = config(deps.storage).load()?;\n    if info.sender != state.owner {\n        return Err(ContractError::Unauthorized {});\n    }\n\n    // set new owner on state\n    state.owner = recipient.clone();\n    config(deps.storage).save(&state)?;\n\n    let mut res = Context::new();\n    res.add_attribute("action", "transfer");\n    res.add_attribute("owner", recipient);\n    Ok(res.into())\n}\n')),(0,s.kt)("h4",{id:"execute"},"Execute"),(0,s.kt)("p",null,"You will see ",(0,s.kt)("inlineCode",{parentName:"p"},"handle_execute")," in plus and example smart contracts, but actually it is just a naming, nothing special.\nMost of the function is same with ",(0,s.kt)("inlineCode",{parentName:"p"},"transfer"),". Just two new things: message fund check and sdk messages in return context."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn handle_execute(\n    deps: DepsMut,\n    env: Env,\n    info: MessageInfo,\n) -> Result<HandleResponse, ContractError> {\n    // ensure msg sender is the owner\n    let state = config(deps.storage).load()?;\n    if info.sender != state.owner {\n        return Err(ContractError::Unauthorized {});\n    }\n\n    // ensure not expired\n    if env.block.height >= state.expires {\n        return Err(ContractError::OptionExpired {\n            expired: state.expires,\n        });\n    }\n\n    // ensure sending proper counter_offer\n    if info.sent_funds != state.counter_offer {\n        return Err(ContractError::CounterOfferMismatch {\n            offer: info.sent_funds,\n            counter_offer: state.counter_offer,\n        });\n    }\n\n    // release counter_offer to creator\n    let mut res = Context::new();\n    res.add_message(BankMsg::Send {\n        from_address: env.contract.address.clone(),\n        to_address: state.creator,\n        amount: state.counter_offer,\n    });\n\n    // release collateral to sender\n    res.add_message(BankMsg::Send {\n        from_address: env.contract.address,\n        to_address: state.owner,\n        amount: state.collateral,\n    });\n\n    // delete the option\n    config(deps.storage).remove();\n\n    res.add_attribute("action", "execute");\n    Ok(res.into())\n}\n')),(0,s.kt)("h3",{id:"query"},"Query"),(0,s.kt)("p",null,"This contracts query method is very simple, only configuration query.\nFor more complex queries check ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-plus/"},"cosmwasm-plus")," contracts.\nIf you are starting to learn from zero, now you have 20 minutes of cosmwasm experience. Go ahead skim plus contracts to see the simplicity."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn query(deps: Deps, _env: Env, msg: QueryMsg) -> StdResult<Binary> {\n    match msg {\n        QueryMsg::Config {} => to_binary(&query_config(deps)?),\n    }\n}\n\nfn query_config(deps: Deps) -> StdResult<ConfigResponse> {\n    let state = config_read(deps.storage).load()?;\n    Ok(state)\n}\n")),(0,s.kt)("h3",{id:"build"},"Build"),(0,s.kt)("p",null,"To simply build the code and see if it works:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cargo build\n")),(0,s.kt)("h3",{id:"tooling"},"Tooling"),(0,s.kt)("p",null,"It is good to keep the same coding style across smart contracts for readability and lint it for high code quality:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"rustup update\nrustup component add clippy rustfmt\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cargo fmt\n")),(0,s.kt)("p",null,"Normally Rust compiler does its job great, leads you to the solution for the errors, shows warnings etc.\nBut it is always good to run linter on the code."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cargo clippy -- -D warnings\n")),(0,s.kt)("h3",{id:"compile"},"Compile"),(0,s.kt)("p",null,"This section compiles key commands from ",(0,s.kt)("a",{parentName:"p",href:"/0.14/getting-started/compile-contract"},"Compiling Contract")," doc. For more detailed read proceed to the documentation."),(0,s.kt)("p",null,"Basic compilation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cargo wasm\n")),(0,s.kt)("p",null,"Optimized compilation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"RUSTFLAGS='-C link-arg=-s' cargo wasm\n")),(0,s.kt)("p",null,"Reproducible and optimized compilation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'docker run --rm -v "$(pwd)":/code \\\n  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \\\n  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \\\n  cosmwasm/rust-optimizer:0.10.7\n')),(0,s.kt)("p",null,"You want to use the command above before deploying to the chain."),(0,s.kt)("h3",{id:"schema"},"Schema"),(0,s.kt)("p",null,'We can also generate JSON Schemas that serve as a guide for anyone trying to use the contract. This is mainly for documentation purposes, but if you click on "Open TypeScript definitions" in the code explorer, you can see how we use those to generate TypeScript bindings.'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cargo schema\n")),(0,s.kt)("p",null,"You can see the generated schemas under ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-examples/tree/master/simple-option/schema"},"simple-option/schema")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"schema\n\u251c\u2500\u2500 config_response.json\n\u251c\u2500\u2500 handle_msg.json\n\u251c\u2500\u2500 init_msg.json\n\u2514\u2500\u2500 query_msg.json\n")),(0,s.kt)("p",null,"Go ahead and explore schemas."))}p.isMDXComponent=!0}}]);
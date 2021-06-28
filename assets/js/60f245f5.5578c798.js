(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4777],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1352:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=["components"],s={sidebar_position:2},l={unversionedId:"learn/hijack-escrow/hack-contract",id:"learn/hijack-escrow/hack-contract",isDocsHomePage:!1,title:"Hack the Contract",description:"Now that you can compile and run tests, let's try to make some changes to the code and you can see if they work. If you didn't do this already in the last section, it is time to clone the examples repo and check out the escrow code:",source:"@site/docs/learn/hijack-escrow/hack-contract.md",sourceDirName:"learn/hijack-escrow",slug:"/learn/hijack-escrow/hack-contract",permalink:"/next/learn/hijack-escrow/hack-contract",editUrl:"https://github.com/CosmWasm/docs/edit/main/docs/learn/hijack-escrow/hack-contract.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/next/learn/hijack-escrow/intro"},next:{title:"Hints",permalink:"/next/learn/hijack-escrow/edit-escrow-hints"}},c=[{value:"A Walk-Through of the Escrow Contract",id:"a-walk-through-of-the-escrow-contract",children:[{value:"Data Structures",id:"data-structures",children:[]},{value:"JSON Format",id:"json-format",children:[]},{value:"Instantiation Logic",id:"instantiation-logic",children:[]},{value:"Execution Logic",id:"execution-logic",children:[]}]},{value:"Adding a New Message",id:"adding-a-new-message",children:[{value:"Adding the Handler",id:"adding-the-handler",children:[]},{value:"Writing a Test",id:"writing-a-test",children:[]}]}],d={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Now that you can compile and run tests, let's try to make some changes to the code and you can see if they work. If you didn't do this already in the last section, it is time to clone the examples repo and check out the escrow code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/CosmWasm/cosmwasm-examples\ncd cosmwasm-examples\ngit fetch --tags\ngit checkout escrow-0.10.0\ncd contracts/escrow\n")),(0,r.kt)("p",null,"Note: This guide is compatible with ",(0,r.kt)("inlineCode",{parentName:"p"},"CosmWasm v0.14.x")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd v0.16.x"),"."),(0,r.kt)("h2",{id:"a-walk-through-of-the-escrow-contract"},"A Walk-Through of the Escrow Contract"),(0,r.kt)("h3",{id:"data-structures"},"Data Structures"),(0,r.kt)("p",null,"There are three key data structures used in the contract - for encoding the instantiation message, for encoding the execution messages, and for storing the contract data. We define all messages in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/msg.rs"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," structs are often in ",(0,r.kt)("inlineCode",{parentName:"p"},"state.rs"),", but if only one then just inline in ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts.rs"),"."),(0,r.kt)("p",null,"All of them must be prefixed with a long ",(0,r.kt)("inlineCode",{parentName:"p"},"derive")," line to add various functionality. Otherwise, it should be pretty clear how the ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," defines the current condition of a contract, and ",(0,r.kt)("inlineCode",{parentName:"p"},"InitMsg")," will provide the initial data to configure said contract. Please note that ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," is the ",(0,r.kt)("em",{parentName:"p"},"only information")," persisted between multiple contract calls. Purpose of these ",(0,r.kt)("inlineCode",{parentName:"p"},"derive")," directives:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Serialize"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Deserialize")," generate methods so the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/serde-rs/json"},(0,r.kt)("inlineCode",{parentName:"a"},"serde-json"))," library can de-serialize them (there is no ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Reflection_(computer_programming)"},"reflection")," in rust)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Clone")," allows you to make a copy of the object (",(0,r.kt)("inlineCode",{parentName:"li"},"msg.clone()"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Debug")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"PartialEq")," are very useful for testing. In particular they allow the use of ",(0,r.kt)("inlineCode",{parentName:"li"},"assert_eq!(expected, msg);")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JsonSchema")," is needed by ",(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/schemars/0.7.0/schemars"},(0,r.kt)("inlineCode",{parentName:"a"},"schemars")),", so we can use ",(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/schemars/0.7.0/schemars/macro.schema_for.html"},(0,r.kt)("inlineCode",{parentName:"a"},"schema_for!"))," to generate the json schema objects (in ",(0,r.kt)("inlineCode",{parentName:"li"},"schema/*.json"),")")),(0,r.kt)("p",null,"From ",(0,r.kt)("inlineCode",{parentName:"p"},"state.rs"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\npub struct State {\n    pub arbiter: Addr,\n    pub recipient: Addr,\n    pub source: Addr,\n    pub end_height: Option<u64>,\n    pub end_time: Option<u64>,\n}\n")),(0,r.kt)("p",null,"From ",(0,r.kt)("inlineCode",{parentName:"p"},"msg.rs"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\npub struct InstantiateMsg {\n    pub arbiter: String,\n    pub recipient: String,\n    /// When end height set and block height exceeds this value, the escrow is expired.\n    /// Once an escrow is expired, it can be returned to the original funder (via "refund").\n    pub end_height: Option<u64>,\n    /// When end time (in seconds since epoch 00:00:00 UTC on 1 January 1970) is set and\n    /// block time exceeds this value, the escrow is expired.\n    /// Once an escrow is expired, it can be returned to the original funder (via "refund").\n    pub end_time: Option<u64>,\n}\n')),(0,r.kt)("p",null,"Note that we use ",(0,r.kt)("inlineCode",{parentName:"p"},"Addr"),", which is a validated address wrapper with some helper functions for storage inside ",(0,r.kt)("inlineCode",{parentName:"p"},"State\n"),", while we use invalidated  ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," address which should be validated by developer, for messages and anything that\ninteracts with the user. There is ",(0,r.kt)("a",{parentName:"p",href:"/next/architecture/addresses"},"more info on addresses here"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Option<u64>")," is a way of telling rust this field may be missing. It may either have a value, like ",(0,r.kt)("inlineCode",{parentName:"p"},"Some(123456)")," or\nbe ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),". This means the init message may omit those fields (or pass them as ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),") and we don't need to use some\nspecial value like ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," to signify disabled."),(0,r.kt)("p",null,"Moving to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecuteMsg")," type, which defines the different contract methods, we make use of a slightly more complex rust construction, the ",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/stable/rust-by-example/custom_types/enum.html"},(0,r.kt)("inlineCode",{parentName:"a"},"enum")),". This is also known as ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Tagged_union"},"a tagged union or sum type"),", and contains a fixed set of defined possible data types, or ",(0,r.kt)("inlineCode",{parentName:"p"},"variants"),", ",(0,r.kt)("em",{parentName:"p"},"exactly one of which must be set"),". We use each ",(0,r.kt)("inlineCode",{parentName:"p"},"variant")," to encode a different method. For example ",(0,r.kt)("inlineCode",{parentName:"p"},"Execute::Refund{}")," is a serializable request to refund the escrow, which is only valid after a timeout."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\n#[serde(rename_all = "snake_case")]\npub enum ExecuteMsg {\n    Approve {\n        // release some coins - if quantity is None, release all coins in balance\n        quantity: Option<Vec<Coin>>,\n    },\n    Refund {},\n}\n')),(0,r.kt)("p",null,"You can see another directive here (",(0,r.kt)("inlineCode",{parentName:"p"},'#[serde(rename_all = "snake_case")]'),"). This ensure the json looks like: ",(0,r.kt)("inlineCode",{parentName:"p"},'{"approve": {"quantity": ...}}')," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},'{"Approve": {"quantity": ...}}'),". This controls the code generated with ",(0,r.kt)("inlineCode",{parentName:"p"},"Serialize")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Deserialize"),". You see how compile-time codegen (via derive and macros) is a corner-stone of rust, and provides much of the functionality provided by runtime reflection in other, more dynamic, languages."),(0,r.kt)("h3",{id:"json-format"},"JSON Format"),(0,r.kt)("p",null,"When a ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecuteMsg")," instance is encoded, it will end up looking like ",(0,r.kt)("inlineCode",{parentName:"p"},'{"approve": {"quantity": [{"amount": "10", "denom": "ATOM"}]}}')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'{"refund": {}}'),". This is also the format we should use client side, when submitting a message body to later be processed by ",(0,r.kt)("inlineCode",{parentName:"p"},"execute"),"."),(0,r.kt)("h3",{id:"instantiation-logic"},"Instantiation Logic"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"instantiate"),' function will be called exactly once, before the contract is executed. It is a "privileged" function in that it can set configuration that can never be modified by any other method call. If you look at this example, the first line parses the input from raw bytes into our contract-defined message. We then create the initial state, and check if it is expired already. If expired, we return a generic contract error, otherwise, we store the state and return a success code:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn instantiate(\n    deps: DepsMut,\n    env: Env,\n    info: MessageInfo,\n    msg: InstantiateMsg,\n) -> Result<Response, ContractError> {\n    let state = State {\n        arbiter: deps.api.addr_validate(&msg.arbiter)?,\n        recipient: deps.api.addr_validate(&msg.recipient)?,\n        source: info.sender,\n        end_height: msg.end_height,\n        end_time: msg.end_time,\n    };\n\n    if state.is_expired(&env) {\n        return Err(ContractError::Expired {\n            end_height: msg.end_height,\n            end_time: msg.end_time,\n        });\n    }\n\n    config(deps.storage).save(&state)?;\n    Ok(Response::default())\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"config")," is defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"state.rs")," and is a helper wrapper for interacting with the underlying ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage"),". It handles prefixing and de/serializing\nfor you automatically, removing some boilerplate. It is completely optional and you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage")," directly as well. We also encourage\nyou to develop other shared libraries for interacting with ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage")," if you want to make certain use cases easier (eg. representing a queue):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn config(storage: &mut dyn Storage) -> Singleton<State> {\n    singleton(storage, CONFIG_KEY)\n}\n")),(0,r.kt)("h3",{id:"execution-logic"},"Execution Logic"),(0,r.kt)("p",null,"Just as ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," is the entry point for instantiating a new contract, ",(0,r.kt)("inlineCode",{parentName:"p"},"handle")," is the entry point for executing the code. Since ",(0,r.kt)("inlineCode",{parentName:"p"},"handle")," takes an ",(0,r.kt)("inlineCode",{parentName:"p"},"enum")," with multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"variants"),", we can't just jump into the business logic, but first start with loading the state, and dispatching the message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn execute(\n    deps: DepsMut,\n    env: Env,\n    info: MessageInfo,\n    msg: ExecuteMsg,\n) -> Result<Response, ContractError> {\n    let state = config_read(deps.storage).load()?;\n    match msg {\n        ExecuteMsg::Approve { quantity } => try_approve(deps, env, state, info, quantity),\n        ExecuteMsg::Refund {} => try_refund(deps, env, info, state),\n    }\n}\n")),(0,r.kt)("p",null,"CosmWasm parses the incoming json into a contract-specific ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecuteMsg")," automatically before calling, assuming a JSON-encoding message. We also see the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"config_read")," to load without any boilerplate. Note the trailing ",(0,r.kt)("inlineCode",{parentName:"p"},"?"),". This works on ",(0,r.kt)("inlineCode",{parentName:"p"},"Result"),' types and means, "If this is an error, return the underlying error. If this is a success, give me the value". It is a very useful shorthand all over rust and replaces the ',(0,r.kt)("inlineCode",{parentName:"p"},"if err != nil { return err }")," boilerplate in Go."),(0,r.kt)("p",null,"You will also see the ",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.30.0/book/2018-edition/ch06-02-match.html"},(0,r.kt)("inlineCode",{parentName:"a"},"match")," statement"),". This is another nice Rust idiom, and allows you to ",(0,r.kt)("inlineCode",{parentName:"p"},"switch")," over multiple patterns. Here we check the multiple variants of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecuteMsg")," enum. Note that if you don't cover all cases, the compiler will refuse to proceed."),(0,r.kt)("p",null,"We pass in ",(0,r.kt)("inlineCode",{parentName:"p"},"deps")," to give the handlers access to runtime callbacks, which provide blockchain-specific logic. In particular, we currently use ",(0,r.kt)("inlineCode",{parentName:"p"},"deps.api")," to validate ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Addr")," in a blockchain-specific manner. Or verify cryptographic signatures with ",(0,r.kt)("inlineCode",{parentName:"p"},"secp256k1_verify,ed25519_verify"),". And we also use\n",(0,r.kt)("inlineCode",{parentName:"p"},"deps.querier")," to query the current balance of the contract."),(0,r.kt)("p",null,"If we now look into the ",(0,r.kt)("inlineCode",{parentName:"p"},"try_approve")," function, we will see how we can respond to a message. We can return an ",(0,r.kt)("inlineCode",{parentName:"p"},"unauthorized")," error if the ",(0,r.kt)("inlineCode",{parentName:"p"},"signer")," is not what we expect, and ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractError")," if our business logic rejects the message. The ",(0,r.kt)("inlineCode",{parentName:"p"},"let amount =")," line shows how we can use pattern matching to use the number of coins present in the msg if provided, or default to the entire balance of the contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn try_approve(\n    deps: DepsMut,\n    env: Env,\n    state: State,\n    info: MessageInfo,\n    quantity: Option<Vec<Coin>>,\n) -> Result<Response, ContractError> {\n    if info.sender != state.arbiter {\n        return Err(ContractError::Unauthorized {});\n    }\n\n    // throws error if state is expired\n    if state.is_expired(&env) {\n        return Err(ContractError::Expired {\n            end_height: state.end_height,\n            end_time: state.end_time,\n        });\n    }\n\n    let amount = if let Some(quantity) = quantity {\n        quantity\n    } else {\n        // release everything\n\n        // Querier guarantees to returns up-to-date data, including funds sent in this handle message\n        // https://github.com/CosmWasm/wasmd/blob/master/x/wasm/internal/keeper/keeper.go#L185-L192\n        deps.querier.query_all_balances(&env.contract.address)?\n    };\n\n    Ok(send_tokens(state.recipient, amount, "approve"))\n}\n')),(0,r.kt)("p",null,"At the end, on success, we want to send some tokens. Cosmwasm contracts cannot call other contracts directly, instead, we create a message to represent our request (",(0,r.kt)("inlineCode",{parentName:"p"},"CosmosMsg::Bank(BankMsg::Send)"),") and return it as our contract ends. This will be parsed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm")," module in go and it will execute and defined actions ",(0,r.kt)("em",{parentName:"p"},"in the same transaction"),". This means, that while we will not get access to the return value, we can be ensured that if the send fails (user specified more coins than were in the escrow), all state changes in this contract would be reverted... just as if we returned ",(0,r.kt)("inlineCode",{parentName:"p"},"unauthorized"),". This is pulled into a helper to make the code clearer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn send_tokens(to_address: Addr, amount: Vec<Coin>, action: &str) -> Response {\n    let attributes = vec![attr("action", action), attr("to", to_address.clone())];\n\n    Response {\n        submessages: vec![],\n        messages: vec![CosmosMsg::Bank(BankMsg::Send {\n            to_address: to_address.into(),\n            amount,\n        })],\n        data: None,\n        attributes,\n    }\n}\n')),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"Env")," encodes a lot of information from the blockchain, essentially providing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Context")," if you are coming from Cosmos SDK. This is validated data and can be trusted to compare any messages against. Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/blob/v0.10.0/packages/std/src/types.rs#L7-L41"},"the standard ",(0,r.kt)("inlineCode",{parentName:"a"},"cosmwasm")," types")," for references to all the available types in the environment."),(0,r.kt)("h2",{id:"adding-a-new-message"},"Adding a New Message"),(0,r.kt)("p",null,"In this example, we will modify this contract to add some more functionality. In particular, let's make a backdoor to the contract. In the form of a ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecuteMsg::Steal")," variant that must be signed by some hard coded ",(0,r.kt)("inlineCode",{parentName:"p"},"THIEF")," address and will release the entire contract balance to an address included in the message. Simple?"),(0,r.kt)("p",null,"Note that this also demonstrates the need to verify the code behind a contract rather than just rely on raw wasm. Since we have a reproducible compilation step (details below), if I show you code I claim to belong to the contract, you can compile it and compare the hash to the hash stored on the blockchain, to verify that this really is the original rust code. We will be adding tooling to automate this step and make it simpler in the coming months, but for now, this example serves to demonstrate why it is important."),(0,r.kt)("h3",{id:"adding-the-handler"},"Adding the Handler"),(0,r.kt)("p",null,"Open up ",(0,r.kt)("inlineCode",{parentName:"p"},"src/msg.rs")," in your ",(0,r.kt)("a",{parentName:"p",href:"./intro#setting-up-your-ide"},"editor of choice")," and let's add another variant to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecuteMsg")," enum, called ",(0,r.kt)("inlineCode",{parentName:"p"},"Steal"),". Remember, it must have a destination address:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/next/learn/hijack-escrow/edit-escrow-hints#executemsg"},"Need a hint?")),(0,r.kt)("p",null,"Now, you can add the message handler. As a quick check, try running ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo wasm")," or look for the compile error in your IDE. Remember what I told you about ",(0,r.kt)("inlineCode",{parentName:"p"},"match"),"? Okay, now, add a function to process the ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecuteMsg::Steal")," variant. For the top level ",(0,r.kt)("inlineCode",{parentName:"p"},"THIEF"),", you can use a placeholder address (we will set this to an address you own before deploying)."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/next/learn/hijack-escrow/edit-escrow-hints#adding-handler"},"Need a hint?")),(0,r.kt)("p",null,"Once you are done, check that it compiles:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cargo wasm\n")),(0,r.kt)("h3",{id:"writing-a-test"},"Writing a Test"),(0,r.kt)("p",null,"We have a number of tests inside of ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts.rs")," that serve as templates, so let's make use of them. You can copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"handle_refund")," test and rename it to ",(0,r.kt)("inlineCode",{parentName:"p"},"handle_steal"),". Remember to include the ",(0,r.kt)("inlineCode",{parentName:"p"},"#[test]")," declaration on top. Now, go in and edit it to test that the THIEF can indeed steal the funds, and no one else can. Make sure our backdoor is working properly before we try to use it."),(0,r.kt)("p",null,"Now, try running ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo unit-test")," and see if your code works as planned. If it fails, try ",(0,r.kt)("inlineCode",{parentName:"p"},"RUST_BACKTRACE=1 cargo unit-test")," to get a full stack trace. Now, isn't that nicer than trying to test Solidity contracts?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./edit-escrow-hints#test-steal"},"See solution here")))}p.isMDXComponent=!0}}]);
(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5741],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return h},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=o,p=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(p,r(r({ref:t},h),{},{components:a})):n.createElement(p,r({ref:t},h))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6419:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return h},default:function(){return u}});var n=a(2122),o=a(9756),i=(a(7294),a(3905)),r=["components"],s={sidebar_position:7},c="Comparison with Solidity Contracts",l={unversionedId:"architecture/smart-contracts",id:"version-0.16/architecture/smart-contracts",isDocsHomePage:!1,title:"Comparison with Solidity Contracts",description:"First of all, the deploy-execute process consists of 3 steps rather than 2. While Ethereum was built around the concept",source:"@site/docs_versioned_docs/version-0.16/03-architecture/07-smart-contracts.md",sourceDirName:"03-architecture",slug:"/architecture/smart-contracts",permalink:"/docs/0.16/architecture/smart-contracts",editUrl:"https://github.com/CosmWasm/docs/edit/main/docs_versioned_docs/version-0.16/03-architecture/07-smart-contracts.md",version:"0.16",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"version-0.16/docsSidebar",previous:{title:"Contract Composition",permalink:"/docs/0.16/architecture/composition"},next:{title:"Contract Semantics",permalink:"/docs/0.16/SEMANTICS"}},h=[{value:"Avoiding Reentrancy Attacks",id:"avoiding-reentrancy-attacks",children:[]},{value:"Resource Limits",id:"resource-limits",children:[]},{value:"Lessons Learned from Ethereum",id:"lessons-learned-from-ethereum",children:[{value:"\u2714\ufe0f Reentrancy",id:"heavy_check_mark-reentrancy",children:[]},{value:"\u2714\ufe0f Arithmetic under/overflows",id:"heavy_check_mark-arithmetic-underoverflows",children:[]},{value:"\u26a0\ufe0f Unexpected Ether",id:"warning-unexpected-ether",children:[]},{value:"\u2714\ufe0f Delegate Call",id:"heavy_check_mark-delegate-call",children:[]},{value:"\u2714\ufe0f Default Visibilities",id:"heavy_check_mark-default-visibilities",children:[]},{value:"\u26a0\ufe0f Entropy Illusion",id:"warning-entropy-illusion",children:[]},{value:"\u2714\ufe0f External Contract Referencing",id:"heavy_check_mark-external-contract-referencing",children:[]},{value:"\u2714\ufe0f Short Address/Parameter Attack",id:"heavy_check_mark-short-addressparameter-attack",children:[]},{value:"\u2714\ufe0f Unchecked CALL Return Values",id:"heavy_check_mark-unchecked-call-return-values",children:[]},{value:"\u26a0\ufe0f Race Conditions/Front Running",id:"warning-race-conditionsfront-running",children:[]},{value:"\u26a0\ufe0f Denial of Service",id:"warning-denial-of-service",children:[]},{value:"\u2714\ufe0f Block Timestamp Manipulation",id:"heavy_check_mark-block-timestamp-manipulation",children:[]},{value:"\u2714\ufe0f Constructors with Care",id:"heavy_check_mark-constructors-with-care",children:[]},{value:"\u2714\ufe0f Uninitialised Storage Pointers",id:"heavy_check_mark-uninitialised-storage-pointers",children:[]},{value:"\u2714\ufe0f Floating Points and Precision",id:"heavy_check_mark-floating-points-and-precision",children:[]},{value:"\u2714\ufe0f Tx.Origin Authentication",id:"heavy_check_mark-txorigin-authentication",children:[]}]}],d={toc:h};function u(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"comparison-with-solidity-contracts"},"Comparison with Solidity Contracts"),(0,i.kt)("p",null,"First of all, the deploy-execute process consists of 3 steps rather than 2. While Ethereum was built around the concept\nof many unique contracts, each possibly custom-made for any bilateral agreement, the reality seems to show that writing\na bug-free contract is harder than originally thought, and a majority are copies of standard templates like\nOpenZepellin. With that in mind, and conscious of the overhead of uploading and validating wasm code, we define the\nfollowing 3 phases of a contract:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Upload Code - Upload some optimized wasm code, no state nor contract address (example Standard ERC20 contract)"),(0,i.kt)("li",{parentName:"ul"},"Instantiate Contract - Instantiate a code reference with some initial state, creates new address (example set token\nname, max issuance, etc for ",(0,i.kt)("em",{parentName:"li"},"my")," ERC20 token)"),(0,i.kt)("li",{parentName:"ul"},"Execute Contract - This may support many different calls, but they are all unprivileged usage of a previously\ninstantiated contract, depends on the contract design (example: Send ERC20 token, grant approval to other contract)")),(0,i.kt)("p",null,"Just like ethereum, contract instantiation and execution is metered and requires gas. Furthermore, both instantiation\nand execution allow the signer to send some tokens to the contract along with the message. Two key differences are that\nsending tokens directly to a contract, eg. via ",(0,i.kt)("inlineCode",{parentName:"p"},"SendMsg"),", while possible, ",(0,i.kt)("em",{parentName:"p"},"does not trigger any contract code"),". This is\na clear design decision to reduce possible attack vectors. It doesn't make anything impossible, but requires all\nexecution of the contract to be ",(0,i.kt)("em",{parentName:"p"},"explicitly requested"),"."),(0,i.kt)("h2",{id:"avoiding-reentrancy-attacks"},"Avoiding Reentrancy Attacks"),(0,i.kt)("p",null,"Another big difference is that we avoid all reentrancy attacks by design. This point deserves an article by itself, but\nin\nshort ",(0,i.kt)("a",{parentName:"p",href:"https://consensys.github.io/smart-contract-best-practices/known_attacks/"},"a large class of exploits in Ethereum is based on this trick"),"\n. The idea is that in the middle of execution of a function on Contract A, it calls a second contract (explicitly or\nimplicitly via send). This transfers control to contract B, which can now execute code, and call into Contract A again.\nNow there are two copies of Contract A running, and unless you are very, very careful about managing state before\nexecuting any remote contract or make very strict gas limits in sub-calls, this can trigger undefined behavior in\nContract A, and a clever hacker can reentrancy this as a basis for exploits, such as the DAO hack."),(0,i.kt)("p",null,"Cosmwasm avoids this completely by preventing any contract from calling another one directly. Clearly we want to allow\ncomposition, but inline function calls to malicious code creates a security nightmare. The approach taken with CosmWasm\nis to allow any contract to ",(0,i.kt)("em",{parentName:"p"},"return")," a list of messages ",(0,i.kt)("em",{parentName:"p"},"to be executed in the same transaction"),'. This means that a\ncontract can request a send to happen after it is finished (eg. release escrow), or call into other contract. If the\nfuture messages fail, then the entire transaction reverts, including updates to the contract\'s state. This allows to\natomic composition and quite a few security guarantees, with the only real downside that you cannot view the results of\nexecuting another contract, rather you can just do "revert on error".'),(0,i.kt)("p",null,"Sometimes we will need information from another contract, and with the 0.8 release, we added synchronous queries to\nother contracts or underlying Cosmos SDK modules. These Queries only have access to a read-only database snapshot and be\nunable to modify state or send messages to other modules, thus avoiding any possible reentrancy concerns."),(0,i.kt)("h2",{id:"resource-limits"},"Resource Limits"),(0,i.kt)("p",null,"Beyond exploits (such as the reentrancy attack), another attack vector for smart contracts is denial of service attacks.\nA malicious actor could upload a contract that ran an infinite loop to halt the chain or write tons of data to fill up\nthe disk. Web Assembly provides a tight sandbox with no default access to the OS, so we only need to worry about\nproviding tight resource limits for the smart contracts. All developers should be aware of these limits."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Memory Usage")," - When instantiating a Wasm VM, it is provided by 32MB of RAM by default. This is to store the byte code\nas well as all memory used by running the process (stack and heap). This should be plenty large for almost any contract,\nbut maybe some complex zero knowledge circuits would hit limits there. It is also small enough to ensure that contracts\nhave minimal impact of memory usage of the blockchain."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"CPU Usage")," - The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wasmerio/wasmer"},"Wasmer Runtime")," that we use, has ability to inject metering logic\ninto the wasm code. It calculates prices for various operations and charges and checks limits before every jump\nstatement (loop, function call, etc), to produce a deterministic gas price regardless of cpu speed, platform, etc.\nBefore executing a contract, a wasm gas limit is set based on remaining Cosmos SDK gas, and gas deducted at the end of\nthe contract (there is a constant multiplier to convert, currently 100 wasm gas to 1 sdk gas). This puts a hard limit on\nany CPU computations as you must pay for the cycles used."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Disk Usage")," - All disk access is via reads and writes on the KVStore. The Cosmos SDK\nalready ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/4ffabb65a5c07dbb7010da397535d10927d298c1/store/types/gas.go#L154-L162"},"enforces gas payments for KVStore access"),"\n. Since all disk access in the contracts is made via callbacks into the SDK, this is charged there. If one were to\nintegrate CosmWasm in another runtime, you would have to make sure to charge for access there as well."),(0,i.kt)("h2",{id:"lessons-learned-from-ethereum"},"Lessons Learned from Ethereum"),(0,i.kt)("p",null,"Ethereum is the grandfather of all blockchain smart contract platforms and has far more usage and real world experience\nthan any other platform. We cannot discount this knowledge, but instead learn from their successes and failures to\nproduce a more robust smart contract platform."),(0,i.kt)("p",null,"They have compiled a list of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sigp/solidity-security-blog"},"all known ethereum attack vectors")," along\nwith mitigation strategies. We shall compare Cosmwasm against this list to see how much of this applies here. Many of\nthese attack vectors are closed by design. A number remain and a section is planned on avoiding the remaining such\nissues."),(0,i.kt)("h3",{id:"heavy_check_mark-reentrancy"},"\u2714\ufe0f ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/sigp/solidity-security-blog#reentrancy"},"Reentrancy")),(0,i.kt)("p",null,"In cosmwasm, we return messages to execute other contracts, in the same atomic operation, but ",(0,i.kt)("em",{parentName:"p"},"after")," the contract has\nfinished. This is based on the actor model and avoid the possibility of reentrancy attacks - there is never volatile\nstate when a contract is called."),(0,i.kt)("h3",{id:"heavy_check_mark-arithmetic-underoverflows"},"\u2714\ufe0f ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/sigp/solidity-security-blog#ouflow"},"Arithmetic under/overflows")),(0,i.kt)("p",null,"Rust allows you to simply set ",(0,i.kt)("inlineCode",{parentName:"p"},"overflow-checks = true")," in\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/reference/manifest.html#the-profile-sections"},"Cargo manifest")," to abort the program\nif any overflow is detected. No way to opt-out of safe math."),(0,i.kt)("h3",{id:"warning-unexpected-ether"},"\u26a0\ufe0f ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/sigp/solidity-security-blog#ether"},"Unexpected Ether")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Bad design pattern")),(0,i.kt)("p",null,"This involves a contract depending on complete control of it's balance. A design pattern that should be avoided in any\ncontract system. In CosmWasm, contracts are not called when tokens are sent to them, but they can query their current\nbalance when they are called. You can note that\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-examples/blob/escrow-0.4.0/escrow/src/contract.rs"},"sample escrow contract"),"\ndoesn't record how much was sent to it during initialization, but\nrather ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-examples/blob/escrow-0.4.0/escrow/src/contract.rs#L83-L92"},"releases the current balance"),"\nwhen a paying out or refunding the amount. This ensures no tokens get stuck."),(0,i.kt)("h3",{id:"heavy_check_mark-delegate-call"},"\u2714\ufe0f ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/sigp/solidity-security-blog#delegatecall"},"Delegate Call")),(0,i.kt)("p",null,"We don't have such Delegate Call logic in CosmWasm. You can import modules, but they are linked together at compile\ntime, which allows them to be tested as a whole, and no subtle entry points inside of a contract's logic."),(0,i.kt)("h3",{id:"heavy_check_mark-default-visibilities"},"\u2714\ufe0f ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/sigp/solidity-security-blog#visibility"},"Default Visibilities")),(0,i.kt)("p",null,"Rather than auto-generating entry points for every function/method in your code (and worse yet, assuming public if not\nspecified), the developer must clearly define a list of messages to be handled and dispatch them to the proper\nfunctions. It is impossible to accidentally expose a function this way."),(0,i.kt)("h3",{id:"warning-entropy-illusion"},"\u26a0\ufe0f ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/sigp/solidity-security-blog#entropy"},"Entropy Illusion")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Planned Fix")),(0,i.kt)("p",null,"The block hashes (and last digits of timestamps) are even more easily manipulated by block proposers in Tendermint, than\nwith miners in Ethereum. They should definitely not be used for randomness. There is work planned to provide a secure\nrandom beacon, and expose this secure source of entropy to smart contracts."),(0,i.kt)("h3",{id:"heavy_check_mark-external-contract-referencing"},"\u2714\ufe0f ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/sigp/solidity-security-blog#contract-reference"},"External Contract Referencing")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Planned Mitigation")),(0,i.kt)("p",null,"If you call a contract with a given ",(0,i.kt)("inlineCode",{parentName:"p"},"HandleMsg"),", this just requires the contract has the specified API, but says nothing\nof the code there. I could upload malicious code with the same API as a desired contract (or a superset of the API), and\nask you to call it - either directly or from a contract. This can be used to steal funds, and in fact\nwe ",(0,i.kt)("a",{parentName:"p",href:"/tutorials/hijack-escrow/hack-contract"},"demo this in the tutorial"),"."),(0,i.kt)("p",null,"There are two mitigations here. The first is that in CosmWasm, you don't need to call out to solidity libraries at\nruntime to deal with size limits, but are encouraged to link all the needed code into one wasm blob. This alone removes\nmost usage of the external contract references."),(0,i.kt)("p",null,"The other mitigation is allowing users to quickly find verified rust source behind the wasm contract on the chain. This\napproach is ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/coinmonks/how-to-verify-and-publish-on-etherscan-52cf25312945#bc72"},"used by etherscan"),",\nwhere developers can publish the original source code, and it will compile the code. If the same bytecode is on chain,\nwe know can prove it came from this rust source. We have built the deterministic build system for rust wasm, and\nhave ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/confio/dont-trust-cosmwasm-verify-db1caac2d335"},"simple tooling to validate the original source code"),"\n. We also ",(0,i.kt)("a",{parentName:"p",href:"https://demonet.wasm.glass/codes"},"released a code explorer")," that allows you to browse contracts and locally\nverify the source code in one command."),(0,i.kt)("h3",{id:"heavy_check_mark-short-addressparameter-attack"},"\u2714\ufe0f ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/sigp/solidity-security-blog#short-address"},"Short Address/Parameter Attack")),(0,i.kt)("p",null,"This is an exploit that takes advantage of the RLP encoding mechanism and fixed 32-byte stack size. It does not apply to\nour type-checking json parser."),(0,i.kt)("h3",{id:"heavy_check_mark-unchecked-call-return-values"},"\u2714\ufe0f ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/sigp/solidity-security-blog#unchecked-calls"},"Unchecked CALL Return Values")),(0,i.kt)("p",null,"CosmWasm does not allow calling other contracts directly, but rather returning message to later be dispatched by a\nrouter. The router will check the result of all messages, and if ",(0,i.kt)("strong",{parentName:"p"},"any")," message in the chain returns an error, the\nentire transaction is aborted, and state changed rolled back. This allows you to safely focus on the success case when\nscheduling calls to other contracts, knowing all state will be rolled back if it does not go as planned."),(0,i.kt)("h3",{id:"warning-race-conditionsfront-running"},"\u26a0\ufe0f ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/sigp/solidity-security-blog#race-conditions"},"Race Conditions/Front Running")),(0,i.kt)("p",null,"This is a general problem with all blockchains. The signed message is gossiped among all nodes before a block is formed.\nA key miner/validator could create another transaction and insert it before yours (maybe delaying yours). This is often\nnot an issue, but shows up quite a bit in distributed exchanges. If there is a standing sell order at 90 and I place a\nbuy order at 100, it would normally just match at 90. However, a miner could insert two transactions between, one to buy\nat 90, then other to sell at 100, then delay your transaction to the end. You would end up accepting their offer at 100\nand they would make a profit of 10 tokens just for doing arbitrage."),(0,i.kt)("p",null,"This is also an issue in high-frequency trading and any system that relies on ordering between clients to determine the\noutcome, just more pronounced in blockchain as the delays are on the order of seconds, not microseconds. For most\napplications this is not an issue, and for decentralized exchanges, there are designs with eg. batch auctions that\neliminate the potential of front running."),(0,i.kt)("h3",{id:"warning-denial-of-service"},"\u26a0\ufe0f ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/sigp/solidity-security-blog#dos"},"Denial of Service")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"limited circumstances")),(0,i.kt)("p",null,"The idea is that if the contract relies on some external user-defined input, it could be set up in a way that it would\nrun out of gas processing it. Many of the cases there should not effect CosmWasm, especially as wasm runs much faster\nand cpu gas limits allow huge amounts of processing in one transaction (including ed25519 signature verification in wasm\nwithout a precompile). However, looping over an user-controlled number of keys in the storage will run out of gas\nquickly."),(0,i.kt)("h3",{id:"heavy_check_mark-block-timestamp-manipulation"},"\u2714\ufe0f ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/sigp/solidity-security-blog#block-timestamp"},"Block Timestamp Manipulation")),(0,i.kt)("p",null,"Tendermint\nprovides ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tendermint/tendermint/blob/master/docs/spec/blockchain/blockchain.md#time-1"},"BFT Timestamps"),"\nin all the blockchain headers. This means that you need a majority of the validators to collude to manipulate the\ntimestamp, and it can be as trusted as the blockchain itself. (That same majority could halt the chain or work on a\nfork)"),(0,i.kt)("h3",{id:"heavy_check_mark-constructors-with-care"},"\u2714\ufe0f ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/sigp/solidity-security-blog#constructors"},"Constructors with Care")),(0,i.kt)("p",null,"This is an idiosyncrasy of the solidity language with constructor naming. It is highly unlikely you would ever\nrename ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," in cosmwasm, and if you did, it would fail to compile rather than producing a backdoor."),(0,i.kt)("h3",{id:"heavy_check_mark-uninitialised-storage-pointers"},"\u2714\ufe0f ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/sigp/solidity-security-blog#storage"},"Uninitialised Storage Pointers")),(0,i.kt)("p",null,"CosmWasm doesn't automatically fill in variables, you must explicitly load them from storage. And rust does not allow\nuninitialized variables anywhere (unless you start writing ",(0,i.kt)("inlineCode",{parentName:"p"},"unsafe")," blocks, and make a special call to access\nuninitialized memory... but then you are asking for trouble). Making storage explicit rather than implicit removes this\nclass of failures."),(0,i.kt)("h3",{id:"heavy_check_mark-floating-points-and-precision"},"\u2714\ufe0f ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/sigp/solidity-security-blog#precision"},"Floating Points and Precision")),(0,i.kt)("p",null,"Both Solidity and CosmWasm have no support for floating point operations, due to possible non-determinism in rounding (\nwhich is CPU dependent). Solidity has no alternative to do integer math and many devs hand-roll integer approximations\nto decimal numbers, which may introduce rounding errors."),(0,i.kt)("p",null,"In CosmWasm, You can import any rust package, and simply pick an appropriate package and use it internally.\nLike ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/rust_decimal/1.0.3/rust_decimal/"},"rust_decimal"),', "a Decimal implementation written in pure Rust\nsuitable for financial calculations that require significant integral and fractional digits with no round-off errors.".\nOr ',(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/fixed/0.5.0/fixed/"},"fixed")," to provide fixed-point decimal math. It supports up to 128-bit numbers,\nwhich is enough for 18 digits before the decimal and 18 afterwards, which should be enough for any use case."),(0,i.kt)("h3",{id:"heavy_check_mark-txorigin-authentication"},"\u2714\ufe0f ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/sigp/solidity-security-blog#tx-origin"},"Tx.Origin Authentication")),(0,i.kt)("p",null,"CosmWasm doesn't expose ",(0,i.kt)("inlineCode",{parentName:"p"},"tx.origin"),", but only the contract or user directly calling the contract\nas ",(0,i.kt)("inlineCode",{parentName:"p"},"params.message.signer"),". This means it is impossible to rely on the wrong authentication, as there is only one value\nto compare."))}u.isMDXComponent=!0}}]);
(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8659],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?o.createElement(m,r(r({ref:t},c),{},{components:n})):o.createElement(m,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6125:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var o=n(2122),a=n(9756),i=(n(7294),n(3905)),r=["components"],s={sidebar_position:1},l={unversionedId:"cw-plus/cw3/spec",id:"version-0.14/cw-plus/cw3/spec",isDocsHomePage:!1,title:"CW3 Spec: MultiSig/Voting Contracts",description:"cw3 is a specification for voting contracts based on CosmWasm.",source:"@site/versioned_docs/version-0.14/cw-plus/cw3/spec.md",sourceDirName:"cw-plus/cw3",slug:"/cw-plus/cw3/spec",permalink:"/0.14/cw-plus/cw3/spec",editUrl:"https://github.com/CosmWasm/docs/edit/main/versioned_docs/version-0.14/cw-plus/cw3/spec.md",version:"0.14",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"CW2 Spec: Contract Info for Migration",permalink:"/0.14/cw-plus/cw2/Spec"},next:{title:"CW3 Fixed Multisig",permalink:"/0.14/cw-plus/cw3/cw3-fixed-spec"}},p=[{value:"Base",id:"base",children:[{value:"Messages",id:"messages",children:[]},{value:"Queries",id:"queries",children:[]}]},{value:"Voter Info",id:"voter-info",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-plus/tree/master/packages/cw3"},"cw3")," is a specification for voting contracts based on CosmWasm.\nIt is an extension of cw1 (which served as an immediate 1 of N multisig).\nIn this case, no key can immediately execute, but only propose\na set of messages for execution. The proposal, subsequent\napprovals, and signature aggregation all happen on chain."),(0,i.kt)("p",null,"There are at least 3 different cases we want to cover in this spec:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"K of N immutible multisig. One key proposes a set of messages,\nafter K-1 others approve it, it can be executed with the\nmultisig address."),(0,i.kt)("li",{parentName:"ul"},"K of N flexible, mutable multisig. Like above, but with\nmultiple contracts. One contract stores the group, which is\nreferenced from multiple multisig contracts (which in turn\nimplement cw3). One cw3 contracts is able to update the\ngroup content (maybe needing 67% vote). Other cw3 contracts\nmay hold tokens, staking rights, etc with various execution\nthresholds, all controlled by one group. (Group interface\nand updating them will be defined in a future spec, likely cw4).")),(0,i.kt)("p",null,"This should fit in this interface (possibly with some\nextensions for pieces, but the usage should look the\nsame externally):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Token weighted voting. People lock tokens in a contract\nfor voting rights. There is a vote threshold to execute\nmessages. The voting set is dynamic. This has a similar\n"propose, approve, execute" flow, but we will need to\nsupport clear YES/NO votes and quora not just absolute\nthresholds.')),(0,i.kt)("p",null,"The common denominator is that they allow you to propose\narbitrary ",(0,i.kt)("inlineCode",{parentName:"p"},"CosmosMsg")," to a contract, and allow a series\nof votes/approvals to determine if it can be executed,\nas well as a final step to execute any approved proposal once."),(0,i.kt)("h2",{id:"base"},"Base"),(0,i.kt)("p",null,"The following interfaces must be implemented for all cw3\ncontracts. Note that updating the members of the voting\ncontract is not contained here (one approach is defined in cw4).\nAlso, how to change the threshold rules (if at all) is not\nstandardized. Those are considered admin tasks, and the common\nAPI is designed for standard usage, as that is where we can\nstandardize the most tooling without limiting more complex\ngovernance controls."),(0,i.kt)("h3",{id:"messages"},"Messages"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Propose{title, description, msgs, earliest, latest}")," - This accepts\n",(0,i.kt)("inlineCode",{parentName:"p"},"Vec<CosmosMsg>")," and creates a new proposal. This will return\nan auto-generated ID in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Data")," field (and the logs) that\ncan be used to reference the proposal later."),(0,i.kt)("p",null,"If the Proposer is a valid voter on the proposal, this will imply a Yes vote by\nthe Proposer for a faster workflow, especially useful in eg. 2 of 3\nor 3 of 5 multisig, we don't need to propose in one block, get result,\nand vote in another block."),(0,i.kt)("p",null,"Earliest and latest are optional and can request the first\nand last height/time that we can try ",(0,i.kt)("inlineCode",{parentName:"p"},"Execute"),". For a vote,\nwe may require at least 2 days to pass, but no more than 7.\nThis is optional and even if set, may be modified by the contract\n(overriding or just enforcing min/max/default values)."),(0,i.kt)("p",null,"Many implementations will want to restrict who can propose.\nMaybe only people in the voting set. Maybe there is some\ndeposit to be made along with the proposal. This is not\nin the spec but left open to the implementation."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Vote{proposal_id, vote}"),' - Given a proposal_id, you can\nvote yes, no, abstain or veto. Each signed may have a\ndifferent "weight" in the voting and they apply their\nentire weight on the vote.'),(0,i.kt)("p",null,"Many contracts (like typical\nmultisig with absolute threshold) may consider veto and\nabstain as no and just count yes votes. Contracts with quora\nmay count abstain towards quora but not yes or no for threshold.\nSome contracts may give extra power to veto rather than a\nsimple no, but this may just act like a normal no vote."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Execute{proposal_id}")," - This will check if the voting\nconditions have passed for the given proposal. If it has\nsucceeded, the proposal is marked as ",(0,i.kt)("inlineCode",{parentName:"p"},"Executed")," and the\nmessages are dispatched. If the messages fail (eg out of gas),\nthis is all reverted and can be tried again later with\nmore gas."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Close{proposal_id}")," - This will check if the voting conditions\nhave failed for the given proposal. If so (eg. time expired\nand insufficient votes), then the proposal is marked ",(0,i.kt)("inlineCode",{parentName:"p"},"Failed"),".\nThis is not strictly necessary, as it will only act when\nit is impossible the contract would ever be executed,\nbut can be triggered to provide some better UI."),(0,i.kt)("h3",{id:"queries"},"Queries"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Threshold{}")," - This returns information on the rules needed\nto declare a contract a success. What percentage of the votes\nand how they are tallied."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Proposal{proposal_id}")," - Returns the information set when\ncreating the proposal, along with the current status."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ListProposals{start_after, limit}")," - Returns the same info\nas ",(0,i.kt)("inlineCode",{parentName:"p"},"Proposal"),", but for all proposals along with pagination.\nStarts at proposal_id 1 and accending."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ReverseProposals{start_before, limit}")," - Returns the same info\nas ",(0,i.kt)("inlineCode",{parentName:"p"},"Proposal"),", but for all proposals along with pagination.\nStarts at latest proposal_id and descending. (Often this\nis what you will want for a UI)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Vote{proposal_id, voter}")," - Returns how the given\nvoter (HumanAddr) voted on the proposal. (May be null)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ListVotes{proposal_id, start_after, limit}")," - Returns the same info\nas ",(0,i.kt)("inlineCode",{parentName:"p"},"Vote"),", but for all votes along with pagination.\nReturns the voters sorted by the voters' address in\nlexographically ascending order."),(0,i.kt)("h2",{id:"voter-info"},"Voter Info"),(0,i.kt)("p",null,"Information on who can vote is contract dependent. But\nwe will work on a common API to display some of this."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Voter { address }")," - returns voting power (weight) of this address, if any"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ListVoters { start_after, limit }")," - list all eligable voters"))}u.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{643:function(e,t,a){"use strict";a.r(t);var n=a(0),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",{attrs:{synopsis:""}},[e._v("GaiaFlex proves the potential of a smart contract container at the heart of the Cosmos Hub.")]),e._v(" "),a("p",[e._v("One of the promises of CosmWasm is to enable flexible smart contract execution on Cosmos Hub. With CosmWasm on the Hub,\nnetwork participants can propose to deploy smart contracts, vote in governance to enable them.")]),e._v(" "),a("p",[e._v("In this section you will learn all the knowledge required to experience smart contract on the hub. If you are interested in smart contract\ndevelopment, digest the "),a("RouterLink",{attrs:{to:"/getting-started/intro.html"}},[e._v("Getting Started")]),e._v(" documentation.")],1),e._v(" "),a("h2",{attrs:{id:"wasmd-authorization-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wasmd-authorization-settings"}},[e._v("#")]),e._v(" Wasmd Authorization Settings")]),e._v(" "),a("p",[e._v("CosmWasm provides on-chain smart contract deployment authorization mechanisms that can be configured many ways:")]),e._v(" "),a("ul",[a("li",[e._v("Free for all, meaning fully without an admin. Anyone can deploy.")]),e._v(" "),a("li",[e._v("Fully permissioned, meaning only an admin can deploy.")]),e._v(" "),a("li",[e._v("By on-chain governance. Deployment of a contract is determined by governance votes.")]),e._v(" "),a("li",[e._v("By owner, contract by contract basis.")])]),e._v(" "),a("h3",{attrs:{id:"enable-governance-proposals-at-compile-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-governance-proposals-at-compile-time"}},[e._v("#")]),e._v(" Enable Governance Proposals at Compile Time")]),e._v(" "),a("p",[e._v("As gov proposals bypass the existing authorization policy they are disabled and require to be enabled at compile time.")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"LVggZ2l0aHViLmNvbS9Db3NtV2FzbS93YXNtZC9hcHAuUHJvcG9zYWxzRW5hYmxlZD10cnVlIC0gZW5hYmxlIGFsbCB4L3dhc20gZ292ZXJuYW5jZSBwcm9wb3NhbHMgKGRlZmF1bHQgZmFsc2UpCi1YIGdpdGh1Yi5jb20vQ29zbVdhc20vd2FzbWQvYXBwLkVuYWJsZVNwZWNpZmljUHJvcG9zYWxzPU1pZ3JhdGVDb250cmFjdCxVcGRhdGVBZG1pbixDbGVhckFkbWluIC0gZW5hYmxlIGEgc3Vic2V0IG9mIHRoZSB4L3dhc20gZ292ZXJuYW5jZSBwcm9wb3NhbCB0eXBlcyAob3ZlcnJpZGVzIFByb3Bvc2Fsc0VuYWJsZWQpCg=="}}),e._v(" "),a("p",[e._v("If you are using "),a("code",[e._v("gaiaflex")]),e._v(" binary executable you don't need to build using flags above since it is already included in\nthe binary build.")]),e._v(" "),a("h3",{attrs:{id:"init-parameters-via-genesis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-parameters-via-genesis"}},[e._v("#")]),e._v(" Init Parameters Via Genesis")]),e._v(" "),a("p",[e._v("Initial authorization configuration is in genesis file:")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7d2FzbSZxdW90OzogewogICAgJnF1b3Q7cGFyYW1zJnF1b3Q7OiB7CiAgICAgICZxdW90O2NvZGVfdXBsb2FkX2FjY2VzcyZxdW90OzogewogICAgICAgICZxdW90O3Blcm1pc3Npb24mcXVvdDs6ICZxdW90O05vYm9keSZxdW90OwogICAgICB9LAogICAgICAmcXVvdDtpbnN0YW50aWF0ZV9kZWZhdWx0X3Blcm1pc3Npb24mcXVvdDs6ICZxdW90O05vYm9keSZxdW90OwogICAgfQp9Cg=="}}),e._v(" "),a("p",[e._v("These configurations in gaiaflex testnet means only governance can upload and init smart contracts.")]),e._v(" "),a("h4",{attrs:{id:"available-configurations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-configurations"}},[e._v("#")]),e._v(" Available configurations")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("code_upload_access")]),e._v(" - who can upload a wasm binary: "),a("code",[e._v("Nobody")]),e._v(", "),a("code",[e._v("Everybody")]),e._v(", "),a("code",[e._v("OnlyAddress")]),e._v(". Needs to be defined in the genesis.\ncan be changed later by governance votes.")]),e._v(" "),a("li",[a("code",[e._v("instantiate_default_permission")]),e._v(" - platform default, who can instantiate a wasm binary when the code owner has not set it")])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);
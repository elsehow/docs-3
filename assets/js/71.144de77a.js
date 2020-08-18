(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{649:function(t,e,n){"use strict";n.r(e);var o=n(0),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"setting-up-environment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-environment"}},[t._v("#")]),t._v(" Setting Up Environment")]),t._v(" "),n("p",[t._v("You need an environment to run contracts. You can either run your node locally or connect to an\nexisting network. For easy testing, long living coral network is online, you can use it to deploy and run your\ncontracts. If you want to setup and run against a local blockchain, "),n("a",{attrs:{href:"#run-local-node-optional"}},[t._v("click\nhere")])]),t._v(" "),n("p",[t._v("To verify testnet is currently running, make sure the following URLs are all working for you:")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://rpc.coralnet.cosmwasm.com/status",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rpc.coralnet.cosmwasm.com/status"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://faucet.coralnet.cosmwasm.com/status",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://faucet.coralnet.cosmwasm.com/status"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://lcd.coralnet.cosmwasm.com/node_info",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://lcd.coralnet.cosmwasm.com/node_info"),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("We have set up two native tokens - "),n("code",[t._v("REEF")]),t._v(" ("),n("code",[t._v("ureef")]),t._v(") for being a validator and "),n("code",[t._v("SHELL")]),t._v(" ("),n("code",[t._v("ushell")]),t._v(") for\npaying fees.\nAvailable frontends:")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://bigdipper.coralnet.cosmwasm.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Big-dipper block explorer"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://coralnet.wasm.glass/#",target:"_blank",rel:"noopener noreferrer"}},[t._v("wasm.glass contract explorer"),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("You can use these to explore txs, addresses, validators and contracts\nfeel free to deploy one pointing to our rpc/lcd servers and we will list it.")]),t._v(" "),n("p",[t._v("You can find more information about other testnets:\n"),n("a",{attrs:{href:"https://github.com/CosmWasm/testnets",target:"_blank",rel:"noopener noreferrer"}},[t._v("CosmWasm/testnets"),n("OutboundLink")],1),t._v(" and "),n("RouterLink",{attrs:{to:"/testnets/testnets.html"}},[t._v("Testnet\nsection")]),t._v(".")],1),t._v(" "),n("p",[t._v("When interacting with network, you can either use "),n("code",[t._v("coral")]),t._v(" which is a GO client or Node REPL. Altough Node REPL is\nrecommended for contract operations, since JSON manipulation is not intuitive with bash/go client.")]),t._v(" "),n("h2",{attrs:{id:"setup-go-cli"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setup-go-cli"}},[t._v("#")]),t._v(" Setup GO CLI")]),t._v(" "),n("p",[t._v("Let's configure "),n("code",[t._v("coral")]),t._v(" exec, point it to testnets, create wallet and ask tokens from faucet:")]),t._v(" "),n("p",[t._v("First source the coral network configurations to the shell:")]),t._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"c291cmNlICZsdDsoY3VybCAtc1NMIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Db3NtV2FzbS90ZXN0bmV0cy9tYXN0ZXIvY29yYWxuZXQvZGVmYXVsdHMuZW52KQo="}}),t._v(" "),n("p",[t._v("Setup the client:")]),t._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y29yYWwgY29uZmlnIGNoYWluLWlkICRDSEFJTl9JRApjb3JhbCBjb25maWcgdHJ1c3Qtbm9kZSB0cnVlCgojIGlmIGNvbm5lY3RpbmcgdG8gbG9jYWwgbm9kZTogY29yYWwgY29uZmlnIG5vZGUgaHR0cDovL2xvY2FsaG9zdDoyNjY1Nwpjb3JhbCBjb25maWcgbm9kZSAkUlBDCmNvcmFsIGNvbmZpZyBvdXRwdXQganNvbgpjb3JhbCBjb25maWcgaW5kZW50IHRydWUKCiMgdGhpcyBpcyBpbXBvcnRhbnQsIHNvIHRoZSBjbGkgcmV0dXJucyBhZnRlciB0aGUgdHggaXMgaW4gYSBibG9jaywKIyBhbmQgc3Vic2VxdWVudCBxdWVyaWVzIHJldHVybiB0aGUgcHJvcGVyIHJlc3VsdHMKY29yYWwgY29uZmlnIGJyb2FkY2FzdC1tb2RlIGJsb2NrCgojIGNoZWNrIHlvdSBjYW4gY29ubmVjdApjb3JhbCBxdWVyeSBzdXBwbHkgdG90YWwKY29yYWwgcXVlcnkgc3Rha2luZyB2YWxpZGF0b3JzCmNvcmFsIHF1ZXJ5IHdhc20gbGlzdC1jb2RlCgojIGFkZCBtb3JlIHdhbGxldHMgZm9yIHRlc3RpbmcKY29yYWwga2V5cyBhZGQgZnJlZAomZ3Q7CnsKICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDtmcmVkJnF1b3Q7LAogICZxdW90O3R5cGUmcXVvdDs6ICZxdW90O2xvY2FsJnF1b3Q7LAogICZxdW90O2FkZHJlc3MmcXVvdDs6ICZxdW90O2NvcmFsMWF2ZHZsNWFqZTN6dDB1YXk0MHVqNmw5eHRxdGxxaGR1dTg0bnFsJnF1b3Q7LAogICZxdW90O3B1YmtleSZxdW90OzogJnF1b3Q7Y29yYWxwdWIxYWRkd25wZXBxdmNqdmVxZXBxMzR4NTlmbm15Z2R5NThhZzd6d3U4Z2VmZ3NwcnE5dGgzOG54enB0cGdzemMzcmt2ZSZxdW90OywKICAmcXVvdDttbmVtb25pYyZxdW90OzogJnF1b3Q7aG9iYnkgYnVua2VyIHJvdGF0ZSBwaWFubyBzYXRvc2hpIHBsYW5ldCBuZXR3b3JrIHZlcmlmeSBlbHNlIG1hcmtldCBzcHJpbmcgdG93YXJkIHBsZWRnZSB0dXJrZXkgdGlwIHNsaW0gd29yZCBqYWd1YXIgY29uZ3Jlc3MgdGh1bWIgZmxhZyBwcm9qZWN0IGNoYWxrIGluc3BpcmUmcXVvdDsKfQoKY29yYWwga2V5cyBhZGQgYm9iCmNvcmFsIGtleXMgYWRkIHRoaWVmCg=="}}),t._v(" "),n("p",[t._v("You need some tokens in your address to interact. If you are using local node you can skip this\nstep. Requesting tokens from faucet:")]),t._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"SlNPTj0kKGpxIC1uIC0tYXJnIGFkZHIgJChjb3JhbCBrZXlzIHNob3cgLWEgZnJlZCkgJ3smcXVvdDt0aWNrZXImcXVvdDs6JnF1b3Q7U0hFTEwmcXVvdDssJnF1b3Q7YWRkcmVzcyZxdW90OzokYWRkcn0nKSAmYW1wOyZhbXA7IGN1cmwgLVggUE9TVCAtLWhlYWRlciAmcXVvdDtDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb24mcXVvdDsgLS1kYXRhICZxdW90OyRKU09OJnF1b3Q7IGh0dHBzOi8vZmF1Y2V0LmNvcmFsbmV0LmNvc213YXNtLmNvbS9jcmVkaXQKSlNPTj0kKGpxIC1uIC0tYXJnIGFkZHIgJChjb3JhbCBrZXlzIHNob3cgLWEgdGhpZWYpICd7JnF1b3Q7dGlja2VyJnF1b3Q7OiZxdW90O1NIRUxMJnF1b3Q7LCZxdW90O2FkZHJlc3MmcXVvdDs6JGFkZHJ9JykgJmFtcDsmYW1wOyBjdXJsIC1YIFBPU1QgLS1oZWFkZXIgJnF1b3Q7Q29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uJnF1b3Q7IC0tZGF0YSAmcXVvdDskSlNPTiZxdW90OyBodHRwczovL2ZhdWNldC5jb3JhbG5ldC5jb3Ntd2FzbS5jb20vY3JlZGl0Cg=="}}),t._v(" "),n("h2",{attrs:{id:"setup-node-repl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setup-node-repl"}},[t._v("#")]),t._v(" Setup Node REPL")]),t._v(" "),n("p",[t._v("Beyond the standard CLI tooling, we have also produced a flexible TypeScript library\n"),n("a",{attrs:{href:"https://github.com/CosmWasm/cosmjs",target:"_blank",rel:"noopener noreferrer"}},[t._v("CosmJS"),n("OutboundLink")],1),t._v(", which runs in Node.js as well as in modern browsers\nand handles queries and submitting transactions. Along with this library, we produced\n"),n("a",{attrs:{href:"https://www.npmjs.com/package/@cosmjs/cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("@cosmjs/cli"),n("OutboundLink")],1),t._v(", which is a super-charged Node console. It\nsupports "),n("code",[t._v("await")]),t._v(", does type checking for helpful error messages, and preloads many CosmJS utilities.\nIf you are comfortable with the Node console, you will probably find this easier and more powerful\nthan the CLI tooling.")]),t._v(" "),n("p",[t._v("Full usage and installation "),n("a",{attrs:{href:"https://github.com/CosmWasm/cosmjs/tree/master/packages/cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("instructions are on the\nREADME"),n("OutboundLink")],1),t._v(", also here are the source codes prepacked with\nnetwork configurations you can use on-the-fly:")]),t._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"IyMgQ09SQUxORVQKbnB4IEBjb3NtanMvY2xpIC0taW5pdCBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vQ29zbVdhc20vdGVzdG5ldHMvbWFzdGVyL2NvcmFsbmV0L2NsaV9oZWxwZXIudHMK"}}),t._v(" "),n("p",[t._v("Using the REPL:")]),t._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Ly8gQ3JlYXRlIG9yIGxvYWQgYWNjb3VudApjb25zdCBtbmVtb25pYyA9IGxvYWRPckNyZWF0ZU1uZW1vbmljKCdmcmVkLmtleScpCm1uZW1vbmljVG9BZGRyZXNzKCdjb3JhbCcsIG1uZW1vbmljKQoKY29uc3QgeyBhZGRyZXNzLCBjbGllbnQgfSA9IGF3YWl0IGNvbm5lY3QobW5lbW9uaWMsIHt9KQphZGRyZXNzCgpjbGllbnQuZ2V0QWNjb3VudCgpCi8vIGlmIGVtcHR5IC0gdGhpcyBvbmx5IHdvcmtzIHdpdGggQ29zbVdhc20KaGl0RmF1Y2V0KGRlZmF1bHRGYXVjZXRVcmwsIGFkZHJlc3MsICdTSEVMTCcpCmNsaWVudC5nZXRBY2NvdW50KCkK"}}),t._v(" "),n("h2",{attrs:{id:"run-local-node-optional"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#run-local-node-optional"}},[t._v("#")]),t._v(" Run Local Node (optional)")]),t._v(" "),n("p",[t._v("If you are interested in running your local network you can use the script below:")]),t._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"IyBpbml0aWFsaXplIHdhc21kIGNvbmZpZ3VyYXRpb24gZmlsZXMKd2FzbWQgaW5pdCBsb2NhbG5ldAoKIyBzZXR1cCBsb2NhbCBub2RlCndhc21jbGkgY29uZmlnIGNoYWluLWlkIGxvY2FsbmV0Cndhc21jbGkgY29uZmlnIHRydXN0LW5vZGUgdHJ1ZQp3YXNtY2xpIGNvbmZpZyBub2RlIGh0dHA6Ly9sb2NhbGhvc3Q6MjY2NTcKd2FzbWNsaSBjb25maWcgb3V0cHV0IGpzb24KCiMgYWRkIHlvdXIgd2FsbGV0IGFkZHJlc3NlcyB0byBnZW5lc2lzCndhc21kIGFkZC1nZW5lc2lzLWFjY291bnQgJCh3YXNtY2xpIGtleXMgc2hvdyAtYSBmcmVkKSAxMDAwMDAwMDAwMHVjb3NtLDEwMDAwMDAwMDAwc3Rha2UKd2FzbWQgYWRkLWdlbmVzaXMtYWNjb3VudCAkKHdhc21jbGkga2V5cyBzaG93IC1hIHRoaWVmKSAxMDAwMDAwMDAwMHVjb3NtLDEwMDAwMDAwMDAwc3Rha2UKCiMgYWRkIGZyZWQncyBhZGRyZXNzIGFzIHZhbGlkYXRvcidzIGFkZHJlc3MKd2FzbWQgZ2VudHggLS1uYW1lIGZyZWQKCiMgY29sbGVjdCBnZW50eHMgdG8gZ2VuZXNpcwp3YXNtZCBjb2xsZWN0LWdlbnR4cwoKIyB2YWxpZGF0ZSB0aGUgZ2VuZXNpcyBmaWxlCndhc21kIHZhbGlkYXRlLWdlbmVzaXMKCiMgcnVuIHRoZSBub2RlCndhc21kIHN0YXJ0Cg=="}})],1)}),[],!1,null,null,null);e.default=a.exports}}]);
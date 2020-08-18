(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{656:function(e,t,a){"use strict";a.r(t);var s=a(0),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"advanced-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-usage"}},[e._v("#")]),e._v(" Advanced Usage")]),e._v(" "),a("p",[e._v("Now that you have gotten the hang of creating and using a CW20 token contract,\nand are starting to appreciate the power and ease of use of the repl over shell\nscripting, let's dig in a bit deeper of some advanced functions you can use")]),e._v(" "),a("h2",{attrs:{id:"interactive-discovery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interactive-discovery"}},[e._v("#")]),e._v(" Interactive Discovery")]),e._v(" "),a("p",[e._v("So far you have been cut-and-pasting commands I have been telling you. But what else\ncan you do with this contract? Luckily Javascript has some nice introspection. And we\nadded some extra bonuses there. Just type "),a("code",[e._v("mine")]),e._v(" in the REPL and see the list of methods:")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Jmd0OyZndDsgbWluZQp7IGNvbnRyYWN0QWRkcmVzczogJ2NvcmFsMTNua2dxcmZ5bXVnNzI0aDhwcHJwZXhxajloNjI5c2EzeXpjcWZrJywKICBiYWxhbmNlOiBbQXN5bmNGdW5jdGlvbjogYmFsYW5jZV0sCiAgYWxsb3dhbmNlOiBbQXN5bmNGdW5jdGlvbjogYWxsb3dhbmNlXSwKICB0b2tlbkluZm86IFtBc3luY0Z1bmN0aW9uOiB0b2tlbkluZm9dLAogIG1pbnRlcjogW0FzeW5jRnVuY3Rpb246IG1pbnRlcl0sCiAgbWludDogW0FzeW5jRnVuY3Rpb246IG1pbnRdLAogIHRyYW5zZmVyOiBbQXN5bmNGdW5jdGlvbjogdHJhbnNmZXJdLAogIGJ1cm46IFtBc3luY0Z1bmN0aW9uOiBidXJuXSwKICBpbmNyZWFzZUFsbG93YW5jZTogW0FzeW5jRnVuY3Rpb246IGluY3JlYXNlQWxsb3dhbmNlXSwKICBkZWNyZWFzZUFsbG93YW5jZTogW0FzeW5jRnVuY3Rpb246IGRlY3JlYXNlQWxsb3dhbmNlXSwKICB0cmFuc2ZlckZyb206IFtBc3luY0Z1bmN0aW9uOiB0cmFuc2ZlckZyb21dIH0K"}}),e._v(" "),a("p",[e._v("But how do I call them? What arguments do they take?\nYou can always go look up the\n"),a("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm-plus/blob/master/contracts/cw20-base/helpers.ts#L151-L167",target:"_blank",rel:"noopener noreferrer"}},[e._v("original helper file on the web"),a("OutboundLink")],1),e._v("\nand see all the types defined there.")]),e._v(" "),a("p",[e._v("But why switch to a browser and get distracted by something else?\nThere is a great "),a("code",[e._v(".type")]),e._v(" operator to show you this without ever leaving the REPL:")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Jmd0OyZndDsgY29uc3QgX2kgPSBtaW5lLmluY3JlYXNlQWxsb3dhbmNlCnVuZGVmaW5lZAomZ3Q7Jmd0OyAudHlwZSBfaQpjb25zdCBfaTogKHJlY2lwaWVudDogc3RyaW5nLCBhbW91bnQ6IHN0cmluZykgPSZndDsgUHJvbWlzZSZsdDtzdHJpbmcmZ3Q7CgomZ3Q7Jmd0OyBjb25zdCBfYSA9IG1pbmUuYWxsb3dhbmNlCnVuZGVmaW5lZAomZ3Q7Jmd0OyAudHlwZSBfYQpjb25zdCBfYTogKG93bmVyOiBzdHJpbmcsIHNwZW5kZXI6IHN0cmluZykgPSZndDsgUHJvbWlzZSZsdDtzdHJpbmcmZ3Q7Cg=="}}),e._v(" "),a("p",[e._v("One note, "),a("code",[e._v(".type")]),e._v(" is a bit finicky and stops at the first dot, so this simpler version\ndoesn't work, just describes the "),a("code",[e._v("mine")]),e._v(" object:")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Jmd0OyZndDsgLnR5cGUgbWluZS5pbmNyZWFzZUFsbG93YW5jZQpjb25zdCBtaW5lOiBDVzIwSW5zdGFuY2UKJmd0OyZndDsgLnR5cGUgbWluZQpjb25zdCBtaW5lOiBDVzIwSW5zdGFuY2UK"}}),e._v(" "),a("p",[e._v("Armed with that knowledge, let's try to add an allowance and query it:")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"bWluZS5pbmNyZWFzZUFsbG93YW5jZShvdGhlciwgJnF1b3Q7NTAwMCZxdW90OykKbWluZS5hbGxvd2FuY2UoY2xpZW50LnNlbmRlckFkZHJlc3MsIG90aGVyKQonNTAwMCcK"}}),e._v(" "),a("h2",{attrs:{id:"multiple-wallets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multiple-wallets"}},[e._v("#")]),e._v(" Multiple Wallets")]),e._v(" "),a("p",[e._v("You know how we keep starting every session with:")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Y29uc3QgY2xpZW50ID0gYXdhaXQgdXNlT3B0aW9ucyhjb3JhbG5ldE9wdGlvbnMpLnNldHVwKFlPVVJfUEFTU1dPUkRfSEVSRSk7Cg=="}}),e._v(" "),a("p",[e._v("What if I told you there was more you could do here? Don't believe me, just explore\nfor yourself:")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Y29uc3QgeyBzZXR1cCB9ID0gdXNlT3B0aW9ucyhjb3JhbG5ldE9wdGlvbnMpOwoudHlwZSBzZXR1cAovLyB0aGlzIGdpdmVzOgpjb25zdCBzZXR1cDogKHBhc3N3b3JkOiBzdHJpbmcsIGZpbGVuYW1lPzogc3RyaW5nKSA9Jmd0OyBQcm9taXNlJmx0O1NpZ25pbmdDb3NtV2FzbUNsaWVudCZndDsK"}}),e._v(" "),a("p",[e._v("Yup... it takes a second argument. You don't HAVE to store your keys in "),a("code",[e._v("~/.coral.key")]),e._v(". That's just\na default. It also means we could make 2 clients using different key files.")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Y29uc3QgY2xpZW50ID0gYXdhaXQgc2V0dXAoWU9VUl9QQVNTV09SRF9IRVJFKQpjb25zdCBwYXJ0bmVyID0gYXdhaXQgc2V0dXAoT1RIRVJfUEFTU1dPUkQsICZxdW90Oy9ob21lL3VzZXIvLmNvcmFsMi5rZXkmcXVvdDspCgovLyBsZXQncyBtYWtlIHN1cmUgdGhleSBhcmUgdW5pcXVlCmNsaWVudC5nZXRBY2NvdW50KCkKcGFydG5lci5nZXRBY2NvdW50KCkKCi8vIGFuZCBtb3ZlIHNvbWUgdG9rZW5zIGFyb3VuZApwYXJ0bmVyLnNlbmRUb2tlbnMoY2xpZW50LnNlbmRlckFkZHJlc3MsIFsgeyBkZW5vbTogJ3VzaGVsbCcsIGFtb3VudDogJzIwMDAwMCcgfV0pCgpjbGllbnQuZ2V0QWNjb3VudCgpCnBhcnRuZXIuZ2V0QWNjb3VudCgpCg=="}}),e._v(" "),a("p",[e._v("This let's us then try more complex use cases with the CW20 contract.\nSending back and forth, "),a("code",[e._v("transferFrom")]),e._v(", "),a("code",[e._v("burnFrom")]),e._v(", etc")]),e._v(" "),a("p",[e._v("That's enough hints from me.\nTime for you to go play with the contract on your own...")])],1)}),[],!1,null,null,null);t.default=o.exports}}]);
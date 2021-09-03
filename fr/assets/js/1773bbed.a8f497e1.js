(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7462],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,v=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return n?a.createElement(v,o(o({ref:t},p),{},{components:n})):a.createElement(v,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6187:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var a=n(2122),r=n(9756),s=(n(7294),n(3905)),o=["components"],i={sidebar_position:3},l="Configuration de l'environnement",u={unversionedId:"lesson-1/environment",id:"lesson-1/environment",isDocsHomePage:!1,title:"Configuration de l'environnement",description:"Vous avez besoin d'un environnement pour ex\xe9cuter les contrats. Vous pouvez soit ex\xe9cuter votre n\u0153ud localement, soit vous connecter \xe0 un r\xe9seau existant. Pour tester facilement, le r\xe9seau pebblenet est en ligne, vous pouvez l'utiliser pour d\xe9ployer et ex\xe9cuter vos contrats.",source:"@site/i18n/fr/docusaurus-plugin-content-docs-dev-academy/current/lesson-1/04-environment.md",sourceDirName:"lesson-1",slug:"/lesson-1/environment",permalink:"/fr/dev-academy/lesson-1/environment",editUrl:"https://crowdin.com/project/cosmwasm-docs/fr",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"devAcademy",previous:{title:"Les bases de Cosmos SDK et CosmWasm",permalink:"/fr/dev-academy/lesson-1/cosmos-sdk-cw"},next:{title:"Exercice",permalink:"/fr/dev-academy/lesson-1/challenge"}},p=[{value:"Gitpod",id:"gitpod",children:[]},{value:"Go",id:"go",children:[]},{value:"Rust",id:"rust",children:[{value:"Installer Rust sous Linux et Mac",id:"installing-rust-in-linux-and-mac",children:[]}]},{value:"wasmd",id:"wasmd",children:[]}],d={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"configuration-de-lenvironnement"},"Configuration de l'environnement"),(0,s.kt)("p",null,"Vous avez besoin d'un environnement pour ex\xe9cuter les contrats. Vous pouvez soit ex\xe9cuter votre n\u0153ud localement, soit vous connecter \xe0 un r\xe9seau existant. Pour tester facilement, le r\xe9seau pebblenet est en ligne, vous pouvez l'utiliser pour d\xe9ployer et ex\xe9cuter vos contrats."),(0,s.kt)("p",null,"Lorsque vous interagissez avec le r\xe9seau, vous pouvez soit utiliser ",(0,s.kt)("inlineCode",{parentName:"p"},"wasmd")," qui est un client Go ou Node REPL. Cela dit, Node REPL est recommand\xe9 pour les op\xe9rations de contrats, car la manipulation de JSON n'est pas intuitive avec le client Shell/Go."),(0,s.kt)("p",null,"Pour l'ensemble du cours, nous utiliserons un testnet public pour simplifier les choses."),(0,s.kt)("h2",{id:"gitpod"},"Gitpod"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.gitpod.io/"},"Gitpod")," est un environnement de d\xe9veloppement en ligne. Nous avons une image gitpod sur laquelle vous pouvez baser vos projets et qui contient toutes les exigences ci-dessous. Gitpod est recommand\xe9 si vous disposez d'une connexion Internet stable. Ajoutez le fichier ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-template/blob/master/.gitpod.yml"},".gitpod.yml")," \xe0 la racine de votre projet puis poussez-le sur GitHub. Apr\xe8s avoir install\xe9 ",(0,s.kt)("a",{parentName:"p",href:"https://www.gitpod.io/extension-activation/"},"l'extension gitpod"),", sur le repo du projet github, il y aura ",(0,s.kt)("inlineCode",{parentName:"p"},"le bouton Gitpod")," qui cr\xe9era un espace de travail sur lequel vous pourrez travailler."),(0,s.kt)("h2",{id:"go"},"Go"),(0,s.kt)("p",null,"Vous pouvez configurer golang en suivant ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/golang/go/wiki#working-with-go"},"la documentation officielle"),". Les derni\xe8res versions de ",(0,s.kt)("inlineCode",{parentName:"p"},"wasmd")," n\xe9cessitent la version de go ",(0,s.kt)("inlineCode",{parentName:"p"},"v1.15"),"."),(0,s.kt)("h2",{id:"rust"},"Rust"),(0,s.kt)("p",null,"En supposant que vous n'avez jamais travaill\xe9 avec Rust, vous devrez d'abord installer des outils. L'approche standard consiste \xe0 utiliser ",(0,s.kt)("inlineCode",{parentName:"p"},"rustup")," pour t\xe9l\xe9charger les d\xe9pendances et g\xe9rer la mise \xe0 jour de plusieurs versions de ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo")," et ",(0,s.kt)("inlineCode",{parentName:"p"},"rustc"),", que vous utiliserez."),(0,s.kt)("h3",{id:"installing-rust-in-linux-and-mac"},"Installer Rust sous Linux et Mac"),(0,s.kt)("p",null,"Tout d'abord, ",(0,s.kt)("a",{parentName:"p",href:"https://rustup.rs/"},"installer rustup"),". Une fois install\xe9, assurez-vous que vous avez la target wasm32 :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"rustup default stable\ncargo version\n# Si celle-ci est inf\xe9rieure \xe0 1.51.0+, update\nrustup update stable\n\nrustup target list --installed\nrustup target add wasm32-unknown-unknown\n")),(0,s.kt)("h2",{id:"wasmd"},"wasmd"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"wasmd")," est l'\xe9pine dorsale de la plateforme CosmWasm. Il s'agit de la mise en \u0153uvre d'une Cosmoszone avec des smart contracts wasm activ\xe9s."),(0,s.kt)("p",null,"Ce code a \xe9t\xe9 fork\xe9 du repo ",(0,s.kt)("inlineCode",{parentName:"p"},"cosmos/gaia")," comme base, puis enrichi de x/wasm et nettoy\xe9 de nombreux fichiers sp\xe9cifiques \xe0 gaia. Cependant, le binaire wasmd devrait fonctionner comme gaiad, \xe0 l'exception de l'ajout du module x/wasm. ."),(0,s.kt)("p",null,"Si vous avez l'intention de d\xe9velopper ou d'\xe9diter un contrat, vous avez besoin de wasmd."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/CosmWasm/wasmd.git\ncd wasmd\n# remplacer la v0.18.0 par la version la plus stable sur https://github.com/CosmWasm/wasmd/releases\ngit checkout v0.18.0\nmake install\n\n# v\xe9rifier l'installation \nwasmd version\n")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Si vous avez des probl\xe8mes ici, v\xe9rifiez votre ",(0,s.kt)("inlineCode",{parentName:"h5"},"PATH"),". ",(0,s.kt)("inlineCode",{parentName:"h5"},"make install")," copiera ",(0,s.kt)("inlineCode",{parentName:"h5"},"wasmd")," dans ",(0,s.kt)("inlineCode",{parentName:"h5"},"$HOME/go/bin")," par d\xe9faut, assurez-vous que cela est configur\xe9 dans votre ",(0,s.kt)("inlineCode",{parentName:"h5"},"PATH")," \xe9galement, ce qui devrait \xeatre le cas en g\xe9n\xe9ral pour compiler du code Go \xe0 partir des sources. :::")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("h2",{parentName:"div",id:"setup-wasmd-and-wallet"},"Configurer wasmd et Wallet"),(0,s.kt)("p",{parentName:"div"},"Configurons ",(0,s.kt)("inlineCode",{parentName:"p"},"wasmd")," exec, pointons-le vers des testnets, cr\xe9ons un portefeuille et demandons des jetons \xe0 faucet :"),(0,s.kt)("p",{parentName:"div"},"Tout d'abord, sourcez les configurations de cosmwasm du r\xe9seau public pebblenet dans le shell :"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"source <(curl -sSL https://raw.githubusercontent.com/CosmWasm/testnets/master/pebblenet-1/defaults.env)\n")),(0,s.kt)("p",{parentName:"div"},"Configurer le client :"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'# ajouter des portefeuilles pour les tests\nwasmd keys add wallet\n>\n{\n  "name" : "wallet",\n  "type" : "local",\n  "address" : "wasm13nt9rxj7v2ly096hm8qsyfjzg5pr7vn5saqd50",\n  "pubkey" : "wasmpub1addwnpepqf4n9afaefugnfztg7udk50duwr4n8p7pwcjlm9tuumtlux5vud6qvfgp9g",\n  "mnemonic" : "hobby bunker rotate piano satoshi planet network verify else market spring toward pledge turkey tip slim word jaguar congress thumb flag project chalk inspire"\n}\n\n')),(0,s.kt)("p",{parentName:"div"},"Vous devez avoir des jetons dans votre adresse pour interagir. Si vous utilisez un n\u0153ud local, vous pouvez sauter cette \xe9tape. Demande de jetons au robinet (faucet) :"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'JSON=$(jq -n --arg addr $(wasmd keys show -a wallet) \'{"denom" : "upebble", "address" :$addr}\') && curl -X POST --header "Content-Type : application/json" --data "$JSON" https://faucet.pebblenet.cosmwasm.com/credit\n')),(0,s.kt)("h2",{parentName:"div",id:"export-wasmd-parameters"},"Exporter les Param\xe8tres de wasmd"),(0,s.kt)("p",{parentName:"div"},"Le client ",(0,s.kt)("inlineCode",{parentName:"p"},"wasmd")," n\xe9cessite d'\xeatre configur\xe9 pour interagir avec diff\xe9rents testnets. Chaque testnet poss\xe8de ses propres endpoints et param\xe8tres syst\xe8me."),(0,s.kt)("p",{parentName:"div"},"La meilleure fa\xe7on de configurer ",(0,s.kt)("inlineCode",{parentName:"p"},"wasmd")," est de configurer les variables d'environnement ci-dessous :"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# bash\nexport NODE="--node $RPC"\nexport TXFLAG="${NODE} --chain-id ${CHAIN_ID} --gas-prices 0.001upebble --gas auto --gas-adjustment 1.3"\n')),(0,s.kt)("p",{parentName:"div"},"or"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# zsh\nexport NODE=(--node $RPC)\nexport TXFLAG=($NODE --chain-id $CHAIN_ID --gas-prices 0.001upebble --gas auto --gas-adjustment 1.3)\n")),(0,s.kt)("p",{parentName:"div"},"If command above throws error, this means your shell is different. If no errors, try running this:"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"wasmd query bank total $NODE\n")),(0,s.kt)("p",{parentName:"div"},"It means that you can now interact with the node you have configured. You can check that your faucet request has been successful by checking the balance of your wallet bank account by trying the command:"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"wasmd query bank balances $(wasmd keys show -a wallet) $NODE\n")),(0,s.kt)("p",{parentName:"div"},"and you can look at the various commands by exploring"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"wasmd help\n")),(0,s.kt)("h2",{parentName:"div",id:"configuration-des-outils-linux"},"Configuration des outils linux"),(0,s.kt)("p",{parentName:"div"},"We will be using few linux tools extensively:"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"apt install jq curl\n")),(0,s.kt)("h2",{parentName:"div",id:"configuration-du-client-js-cli"},"Configuration du client JS CLI"),(0,s.kt)("p",{parentName:"div"},"Other way to use and interact with on-chain contracts is CosmJS interactive client ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmjs/tree/main/packages/cli"},"@cosmjs/cli")),(0,s.kt)("p",{parentName:"div"},"To use it, install ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"node.js 12+")," and ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx")),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"npx @cosmjs/cli@^0.25 --init https://raw.githubusercontent.com/CosmWasm/cosmwasm-plus/master/contracts/cw20-base/helpers.ts\n")),(0,s.kt)("p",{parentName:"div"},"Now you will see an interactive shell popped up."),(0,s.kt)("p",{parentName:"div"},'Code below setups a client that speaks to pebblenet, generates and address and then requests tokens from faucet. "password" is the password of the key file. This key is different from wasmd key generated above'),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'const [addr, client] = await useOptions(pebblenetOptions).setup("password");\nclient.getAccount(addr);\n')),(0,s.kt)("p",{parentName:"div"},"You should see something similar to:"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},"{\n  address: 'wasm1kfaqnxcsz6pwxyv0h468594g6g2drwxfrrwslv',\n  pubkey: null,\n  accountNumber: 326,\n  sequence: 0\n}\n")),(0,s.kt)("h2",{parentName:"div",id:"setting-up-your-ide"},"Configuration de votre IDE"),(0,s.kt)("p",{parentName:"div"},"We need a good IDE for developing rust smart contracts. We recommend Intellij with Rust Plugin."))))}c.isMDXComponent=!0}}]);
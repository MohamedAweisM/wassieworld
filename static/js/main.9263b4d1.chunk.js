(this.webpackJsonpwassieworld=this.webpackJsonpwassieworld||[]).push([[0],{103:function(e,t,n){},104:function(e,t){},107:function(e,t){},128:function(e,t){},129:function(e,t){},151:function(e,t,n){"use strict";n.r(t);var r=n(12),a=n.n(r),i=n(61),c=n.n(i),s=n(25),o=(n(103),n(2)),l=n(11),u=n(1),d=n.n(u),p=n.p+"static/media/discordlogoblack.78884197.png",b=n.p+"static/media/twitterlogoblack.1b7d4334.png",f=n.p+"static/media/wassieworld.d18f3d96.png",h=n(34),m=n.n(h),g=n(4),v=n(8),x=n(16),j=function(){var e,t,n,r=null===(e="https://nameless-young-pine.solana-mainnet.quiknode.pro/ffbc9acee9e4d25ea47ec4420d8da39f00014148/")?void 0:e.toString(),a=null===(t="mainnet-beta")?void 0:t.toString(),i=null===(n="AjWy8DM5yRkJPF6AgZ4sATPxuwx7UmzFbvHB9qouMtdA")?void 0:n.toString();return{envError:r&&i&&a?(i.length<32||i.length>44)&&(console.error("Candy Machine Public Key is invalid. Enter a length in-between 32 and 44 characters"),!0):(r||console.error("RPC URL not populated"),i||console.error("Candy Machine ID not populated"),a||console.error("Environment not populated"),!0),rpcUrl:r,cluster:a,candyMachineId:i}},y=function(){var e=Object(o.a)(d.a.mark((function e(t,n){var r,a,i,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.account.candyMachine.fetch(n);case 2:return r=e.sent,a=r.data.itemsAvailable.toNumber(),i=r.itemsRedeemed.toNumber(),c=a-i,e.abrupt("return",{id:n,program:t,state:{itemsAvailable:a,itemsRedeemed:i,itemsRemaining:c,isSoldOut:0===c,isActive:r.data.goLiveDate.toNumber()<(new Date).getTime()/1e3&&(!r.endSettings||(r.endSettings.endSettingType.date?r.endSettings.number.toNumber()>(new Date).getTime()/1e3:i<r.endSettings.number.toNumber())),goLiveDate:r.data.goLiveDate,treasury:r.wallet,tokenMint:r.tokenMint,gatekeeper:r.data.gatekeeper,endSettings:r.data.endSettings,whitelistMintSettings:r.data.whitelistMintSettings,hiddenSettings:r.data.hiddenSettings,price:r.data.price}});case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),_=n(24),w=n(19);function O(e,t){return k.apply(this,arguments)}function k(){return(k=Object(o.a)(d.a.mark((function e(t,n){var r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.fetchIdl(_.a,n);case 3:return r=e.sent,a=new x.a(r,_.a,n),e.next=7,y(a,t);case 7:return e.abrupt("return",e.sent);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function S(e){return P.apply(this,arguments)}function P(){return(P=Object(o.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.connect({onlyIfTrusted:!0});case 3:return n=e.sent,e.abrupt("return",n.publicKey.toString());case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function W(e,t){return N.apply(this,arguments)}function N(){return(N=Object(o.a)(d.a.mark((function e(t,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new x.c.PublicKey(t),e.prev=1,e.next=4,n.getBalance(r);case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}function K(e,t,n){return R.apply(this,arguments)}function R(){return(R=Object(o.a)(d.a.mark((function e(t,n,r){var a,i,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.getParsedTokenAccountsByOwner(new x.c.PublicKey(t),{programId:w.b});case 3:a=e.sent,i=0;case 5:if(!(i<a.value.length)){e.next=15;break}if(c=a.value[i],s=c.account.data.parsed.info.tokenAmount,!(c.account.data.parsed.info.mint===r.toString()&&s.uiAmount>0)){e.next=12;break}return console.log("Welcome to the whitelist!"),e.abrupt("return",!0);case 12:i++,e.next=5;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})))).apply(this,arguments)}function T(e){return M.apply(this,arguments)}function M(){return(M=Object(o.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.connect();case 3:return n=e.sent,e.abrupt("return",n.publicKey.toString());case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var A=Object(s.b)({key:"user",default:{walletPublicKey:"",userBalance:0,isWhiteListed:!1,solanaExplorerLink:""}}),L=function(){var e=Object(o.a)(d.a.mark((function e(t){var n,r,a,i,c,s,o,l,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.solana,a=t.connection,i=t.candyMachine,c={walletPublicKey:"",userBalance:0,isWhiteListed:!1,solanaExplorerLink:""},e.next=4,S(r);case 4:if(!(s=e.sent)){e.next=11;break}return e.next=8,W(s,a);case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=void 0;case 12:if(o=e.t0,!s){e.next=19;break}return e.next=16,K(s,a,null===i||void 0===i||null===(n=i.state.whitelistMintSettings)||void 0===n?void 0:n.mint);case 16:e.t1=e.sent,e.next=20;break;case 19:e.t1=void 0;case 20:return l=e.t1,u=Object(v.a)(Object(v.a)({walletPublicKey:s},o&&{userBalance:o}),l&&{isWhiteListed:l}),e.abrupt("return",Object(v.a)(Object(v.a)({},c),u));case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=n(48),E=n.n(C),B=n(7),I=function(){var e,t,n=Object(s.c)(A),r=Object(l.a)(n,2),a=r[0],i=(r[1],!(null===a||void 0===a||!a.walletPublicKey));return Object(B.jsxs)("div",{children:[Object(B.jsxs)("div",{className:E.a.addressContainer,children:[Object(B.jsx)("span",{className:i?E.a.greenCircle:E.a.greyCircle}),Object(B.jsx)("span",{className:E.a.address,children:i?"".concat(null===(e=a.walletPublicKey)||void 0===e?void 0:e.slice(0,4),"...").concat(null===(t=a.walletPublicKey)||void 0===t?void 0:t.slice(-4)):"Not connected"})]}),i&&Object(B.jsxs)("div",{className:E.a.balance,children:[(a.userBalance/g.LAMPORTS_PER_SOL).toFixed(2)," SOL"]})]})},F=function(){return Object(B.jsx)("header",{className:m.a.container,children:Object(B.jsxs)("div",{className:m.a.content,children:[Object(B.jsx)("div",{className:m.a.headerLeft,children:Object(B.jsx)("img",{className:m.a.wwLogo,src:f,alt:"Wassie World Logo"})}),Object(B.jsxs)("div",{className:m.a.headerRight,children:[Object(B.jsx)("a",{href:"https://twitter.com/Wassieworld",target:"_blank",rel:"noreferrer",children:Object(B.jsx)("img",{className:m.a.socialIcon,src:b,alt:"Twitter logo"})}),Object(B.jsx)("a",{href:"https://discord.gg/VWKcFRKdjK",target:"_blank",rel:"noreferrer",children:Object(B.jsx)("img",{className:m.a.socialIcon,src:p,alt:"Discord logo"})}),Object(B.jsx)(I,{})]})]})})},D=(n(36),n(37)),U=n.n(D),V=n.p+"static/media/wassie.7181bf93.gif",q=n(94),Y=function(){var e,t=Object(r.useState)(window.solana),n=Object(l.a)(t,2),a=n[0],i=n[1],c=Object(r.useState)(0),s=Object(l.a)(c,2),o=s[0],u=s[1],d=Object(r.useState)(!1),p=Object(l.a)(d,2),b=p[0],f=p[1];return Object(r.useEffect)((function(){return e=!e&&setInterval((function(){var e=window.solana;e&&null!==e&&void 0!==e&&e.isPhantom&&i(e),u((function(e){return e+1}))}),50),a?clearInterval(e):o>10&&(f(!0),clearInterval(e)),function(){return clearInterval(e)}}),[a,o]),{solana:a,solanaFail:b}},z=n(66),J=n(95),G=n(43),Z=n.n(G),H=function(e){var t,n=e.candyMachine,a=e.updateCandyMachine,i=e.connection,c=e.setMintError,u=j().cluster,p=Y().solana,b=Object(s.c)(A),f=Object(l.a)(b,2),h=f[0],m=f[1],y=Object(r.useState)(!1),_=Object(l.a)(y,2),w=_[0],O=_[1],k=null===n||void 0===n?void 0:n.state.price,S=null===n||void 0===n||null===(t=n.state.whitelistMintSettings)||void 0===t?void 0:t.discountPrice,P=null===n||void 0===n?void 0:n.state.isSoldOut,N=null===h||void 0===h?void 0:h.isWhiteListed,R=N?(null===h||void 0===h?void 0:h.userBalance)<S:(null===h||void 0===h?void 0:h.userBalance)<k,M=function(){var e=Object(o.a)(d.a.mark((function e(){var t,r,a,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(p);case 2:if(!(r=e.sent)||!i){e.next=9;break}return e.next=6,W(r,i);case 6:e.t0=e.sent,e.next=10;break;case 9:e.t0=void 0;case 10:if(a=e.t0,!r||!i){e.next=17;break}return e.next=14,K(r,i,null===n||void 0===n||null===(t=n.state.whitelistMintSettings)||void 0===t?void 0:t.mint);case 14:e.t1=e.sent,e.next=18;break;case 17:e.t1=void 0;case 18:c=e.t1,s=Object(v.a)(Object(v.a)({walletPublicKey:r},a&&{userBalance:a}),c&&{isWhiteListed:c}),m(Object(v.a)(Object(v.a)({},h),s));case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(o.a)(d.a.mark((function e(){var t,r,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,O(!0),c(!1),null===n||void 0===n||!n.program||null===h||void 0===h||!h.walletPublicKey){e.next=14;break}return r=x.c.Keypair.generate(),e.next=7,Object(J.a)(n,new x.c.PublicKey(h.walletPublicKey),r);case 7:if(a=e.sent[0],s={err:!0},!a){e.next=13;break}return e.next=12,Object(z.a)(a,3e4,i,"singleGossip",!0);case 12:s=e.sent;case 13:null!==(t=s)&&void 0!==t&&t.err?(console.error("An error occurred"),c(!0)):(console.log("Success"),C(r.publicKey));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),console.error("An error occurred ",e.t0),c(!0);case 20:return e.prev=20,O(!1),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[0,16,20,23]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(o.a)(d.a.mark((function e(t){var r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&(r="devnet"===u?"https://explorer.solana.com/address/".concat(t,"?cluster=devnet"):"https://explorer.solana.com/address/".concat(t),(i=n).state.itemsRedeemed+=1,a(i),m(Object(v.a)(Object(v.a)({},h),{},{solanaExplorerLink:r})),E());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=window.innerWidth>=425?{scalar:1.2,startVelocity:60,particleCount:350,spread:180,origin:{y:-.3}}:{particleCount:200,spread:90,origin:{y:-.5}};Object(q.a)(Object(v.a)(Object(v.a)({},e),{},{angle:270}))},I={soldOut:Z.a.soldOut,getPhantom:Z.a.getPhantom,connectWallet:Z.a.connectWallet,insufficientFunds:Z.a.insufficientFunds,minting:Z.a.minting,mint:Z.a.mint},F={soldOut:"Sold Out!",getPhantom:"Get Phantom",connectWallet:"Connect Wallet",insufficientFunds:"Insufficient Funds \n      (".concat(((N?S:k)/g.LAMPORTS_PER_SOL).toFixed(2)," \n      SOL required)"),minting:"Minting...",mint:"Mint \n      (".concat(((N?S:k)/g.LAMPORTS_PER_SOL).toFixed(2)," \n      SOL)")},D={soldOut:function(){},getPhantom:function(){return window.open("https://phantom.app/","_blank")},connectWallet:M,insufficientFunds:function(){},minting:function(){},mint:L},U=P?"soldOut":p?h.walletPublicKey?R?"insufficientFunds":w?"minting":"mint":"connectWallet":"getPhantom";return Object(B.jsx)("button",{id:"mint-button",className:I[U],onClick:D[U],children:F[U]})},Q=n(96),X=n.n(Q),$=function(e){var t=e.redeemed,n=e.total;return Object(B.jsxs)("p",{className:X.a.mintCount,children:[t," / ",n," claimed"]})},ee=function(e){var t=e.url,n=e.isError;if(!t&&!n)return null;return Object(B.jsx)("span",{style:te.link(n),onClick:function(){n||window.open(t,"_blank")},children:n?"Something went wrong! Please try again.":"Mint successful! Click here to view your Wassie."})},te={link:function(e){return Object(v.a)({margin:"16px 0",color:e?"#d63310":"#4bb543",textDecoration:"none"},!e&&{fontWeight:600,cursor:"pointer"})}},ne=function(e){var t,n,a,i,c,o=e.candyMachine,u=e.updateCandyMachine,d=e.connection,p=Object(r.useState)(!1),b=Object(l.a)(p,2),f=b[0],h=b[1],m=Object(s.d)(A),v=null===o||void 0===o||null===(t=o.state)||void 0===t?void 0:t.itemsRedeemed,x=null===o||void 0===o||null===(n=o.state)||void 0===n?void 0:n.itemsAvailable,j=null===o||void 0===o||null===(a=o.state)||void 0===a?void 0:a.price,y=null===o||void 0===o||null===(i=o.state)||void 0===i||null===(c=i.whitelistMintSettings)||void 0===c?void 0:c.discountPrice,_=((null===m||void 0===m?void 0:m.isWhiteListed)&&y?y:j)/g.LAMPORTS_PER_SOL;return Object(B.jsx)("div",{className:U.a.container,children:Object(B.jsxs)("div",{className:U.a.content,children:[Object(B.jsxs)("div",{className:U.a.headings,children:[Object(B.jsx)("h2",{children:" Public minting now open!"}),Object(B.jsxs)("h3",{children:[" ","Mint your Wassie for just ".concat(_," SOL")," "]})]}),Object(B.jsxs)("div",{className:U.a.hero,children:[Object(B.jsx)("img",{className:U.a.wassieGif,src:V,alt:"Wassie gif"}),Object(B.jsxs)("div",{className:U.a.heroRight,children:[Object(B.jsxs)("p",{className:U.a.description,children:["3,333 Randomly Generated 3D Wassies!",Object(B.jsx)("br",{})," Wassie World is a project focused on providing real life utility for all its holders!"]}),Object(B.jsx)(H,{candyMachine:o,updateCandyMachine:u,connection:d,setMintError:h}),Object(B.jsx)($,{redeemed:v,total:x}),Object(B.jsx)(ee,{url:null===m||void 0===m?void 0:m.solanaExplorerLink,isError:f})]})]})]})})},re=n.p+"static/media/aboutWassie.e5b8e61f.png",ae=n(49),ie=n.n(ae),ce=function(){return Object(B.jsx)("div",{className:ie.a.container,children:Object(B.jsxs)("div",{className:ie.a.content,children:[Object(B.jsx)("img",{className:ie.a.aboutImage,src:re,alt:"about pic"}),Object(B.jsxs)("div",{className:ie.a.about,children:[Object(B.jsx)("h2",{className:ie.a.title,children:" About "}),Object(B.jsxs)("p",{children:["Wassie World is the genesis NFT collection of the Wassie World team. The art features the beloved Wassie, rendered in 3D, and sporting ",Object(B.jsx)("span",{children:"210+ "}),"different, randomly generated traits. The artwork is inspired by various elements from ",Object(B.jsx)("span",{children:"fashion, art, music, sports, and pop culture"}),"."]}),Object(B.jsxs)("p",{children:["The focus of this project is to provide holders with tangible benefits that support ",Object(B.jsx)("span",{children:"mental health, personal growth, education and community"}),"."]}),Object(B.jsxs)("p",{children:["This NFT collection lives on the ",Object(B.jsx)("span",{children:"Solana"})," blockchain and it provides holders with a ",Object(B.jsx)("span",{children:"safe"})," (fully doxxed team), ",Object(B.jsx)("span",{children:"affordable"})," (only 0.66 SOL + extremely low gas fee) and ",Object(B.jsx)("span",{children:"easy"})," (we will walk you through buying process) entry into the NFT space. Join our ",Object(B.jsx)("a",{href:"https://discord.gg/VWKcFRKdjK",target:"_blank",rel:"noreferrer",children:Object(B.jsx)("span",{children:"discord"})})," for more info!"]})]})]})})},se=n.p+"static/media/roadmap_1.d9023cbb.png",oe=n.p+"static/media/roadmap_2.15be9458.png",le=n.p+"static/media/roadmap_3.301f5ccc.png",ue=n.p+"static/media/roadmap_4.a27900cb.png",de=n(31),pe=n.n(de),be=function(){return Object(B.jsx)("div",{className:pe.a.container,children:Object(B.jsx)("div",{className:pe.a.content,children:Object(B.jsxs)("div",{className:pe.a.roadmap,children:[Object(B.jsx)("h2",{className:pe.a.title,children:" Roadmap "}),Object(B.jsx)("img",{className:pe.a.lilyPad,src:se,alt:"genesis"}),Object(B.jsx)("img",{className:pe.a.lilyPad,src:oe,alt:"wassie warriors"}),Object(B.jsx)("img",{className:pe.a.lilyPad,src:le,alt:"wassie wearables"}),Object(B.jsx)("img",{className:pe.a.lilyPad,src:ue,alt:"wassie ponds"})]})})})},fe=n.p+"static/media/brain.9e17be00.svg",he=n.p+"static/media/grey_ticket.f0de8045.svg",me=n.p+"static/media/pencil.d74c0d6b.svg",ge=n.p+"static/media/red_ticket.a42d1e1b.svg",ve=n.p+"static/media/school_bag.44b77e05.svg",xe=n.p+"static/media/unlock.5ef3130e.svg",je=n(32),ye=n.n(je),_e=[{title:"Access to Virtual Seminars",icon:he,desc:"Wassie world will host virtual (for now) seminars for all holders. Various \n      professionals will be keynote speakers from the fields of tech, art and business."},{title:"Wassie Development Workshops",icon:me,desc:"Wassies will be able to partake in free developmental and guided workshops gaining \n      knowledge and education in music production, songwriting, art (both physical and digital), \n      tech and fashion design etc. !"},{title:"Intellectual Property",icon:xe,desc:"Ownership is at the heart of decentralization.  All Wassie holders will have full \n      ownership, licensing and IP rights for each and every wassie they own, with freedom to \n      create, sell and commission their own unique derivatives!"},{title:"Wassie World Events",icon:ge,desc:"We do recognize the metaverse is ever expanding, as a Wassie holder you will have \n      access to Private Wassie Sandbox events and future planned in person events!"},{title:"Wassienomics",icon:ve,desc:"Wassie holders will be both randomly and purposefully selected to receive \n      grants/scholarships to attend and complete various bootcamps, courses and certificates \n      to further their education and careers!"},{title:"Wassie Wellness",icon:fe,desc:"Mental health is of utmost importance today more than ever before in history. Our \n      wassie community will have dedicated initiatives, collaborations and support resources \n      to improve and maintain the mental wellbeing of our community."}],we=function(){return Object(B.jsx)("div",{className:ye.a.container,children:Object(B.jsxs)("div",{className:ye.a.content,children:[Object(B.jsx)("h2",{className:ye.a.title,children:" Utility "}),Object(B.jsx)("div",{className:ye.a.utility,children:_e.map((function(e){return Object(B.jsxs)("div",{className:ye.a.utilityPoint,children:[Object(B.jsxs)("h3",{className:ye.a.subtitle,children:[Object(B.jsx)("img",{className:ye.a.icon,src:e.icon,alt:"".concat(e.title," icon")}),e.title]}),Object(B.jsx)("p",{className:ye.a.description,children:e.desc})]})}))})]})})},Oe=n(68),ke=n.n(Oe),Se=function(){var e=j().envError,t=Y(),n=t.solana,a=t.solanaFail,i=function(){var e=j(),t=e.rpcUrl,n=e.candyMachineId,r=Object(s.e)(A),a=function(){var e=Object(o.a)(d.a.mark((function e(a){var i,c,s,o,l,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={preflightCommitment:"processed"},c=new g.Connection(t),s=new x.c.PublicKey(n),o=new x.b(c,a,i.preflightCommitment),e.next=6,O(s,o);case 6:return l=e.sent,e.next=9,L({solana:a,connection:c,candyMachine:l});case 9:return u=e.sent,r(u),e.abrupt("return",{connection:c,candyMachine:l});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{initializeStore:a}}(),c=i.initializeStore,u=Object(r.useState)(!0),p=Object(l.a)(u,2),b=p[0],f=p[1],h=Object(r.useState)(void 0),m=Object(l.a)(h,2),v=m[0],y=m[1],_=Object(r.useState)(void 0),w=Object(l.a)(_,2),k=w[0],S=w[1];return Object(r.useEffect)((function(){if(b){if(e)return void f(!1);(n||a)&&Object(o.a)(d.a.mark((function e(){var t,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(n);case 2:t=e.sent,r=t.candyMachine,a=t.connection,S(a),y(r);case 7:case"end":return e.stop()}}),e)})))()}}),[n,a,c]),Object(r.useEffect)((function(){k&&v&&f(!1)}),[k,v]),b?Object(B.jsx)("div",{className:ke.a.container,children:Object(B.jsx)("div",{className:ke.a.loading})}):!b&&e?Object(B.jsx)("div",{className:ke.a.container,children:Object(B.jsx)("div",{style:{margin:"auto"},children:"An error occurred. Please check if your environment variables have been populated correctly and redeploy the applcation."})}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(F,{}),Object(B.jsxs)("main",{children:[Object(B.jsx)(ne,{candyMachine:v,updateCandyMachine:function(e){y(e)},connection:k}),Object(B.jsx)(ce,{}),Object(B.jsx)(be,{}),Object(B.jsx)(we,{})]})]})},Pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,152)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};c.a.render(Object(B.jsx)(a.a.StrictMode,{children:Object(B.jsx)(s.a,{children:Object(B.jsx)(Se,{})})}),document.getElementById("root")),Pe()},24:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return c}));var r=n(16),a=new r.c.PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"),i=new r.c.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),c=new r.c.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL")},31:function(e,t,n){e.exports={container:"roadmap_container__3ALQL",content:"roadmap_content__2PNI-",title:"roadmap_title__3phlT",lilyPad:"roadmap_lilyPad__2j6WQ"}},32:function(e,t,n){e.exports={container:"utility_container__3BkAD",content:"utility_content__1xtri",title:"utility_title__2SWNp",utility:"utility_utility__2s1yA",utilityPoint:"utility_utilityPoint__1Vvck",icon:"utility_icon__3mMd7",subtitle:"utility_subtitle__kvFXC",description:"utility_description__VOtJN"}},34:function(e,t,n){e.exports={container:"header_container__SgiTI",content:"header_content__1ge6R",headerLeft:"header_headerLeft__1PHnN",headerRight:"header_headerRight__2TG1T",wwLogo:"header_wwLogo__2R55a",socialIcon:"header_socialIcon__3hL7Y"}},36:function(e,t,n){e.exports={container:"footer_container__3FWUk",content:"footer_content__2utyM",wwLogo:"footer_wwLogo__3JiR2",socialLinks:"footer_socialLinks__3VpGS",socialIcon:"footer_socialIcon__2brBe"}},37:function(e,t,n){e.exports={container:"hero_container__3_Zq3",content:"hero_content__3ig5q",headings:"hero_headings__1-Uta",hero:"hero_hero__3L-Tx",wassieGif:"hero_wassieGif__3lmiv",heroRight:"hero_heroRight__kEtUz",description:"hero_description__2E6rT"}},43:function(e,t,n){e.exports={heroButton:"mintButton_heroButton__1KWpL",getPhantom:"mintButton_getPhantom__2WiJy",connectWallet:"mintButton_connectWallet__1AC8g",mint:"mintButton_mint__d0l0Q",soldOut:"mintButton_soldOut__2ih6_",insufficientFunds:"mintButton_insufficientFunds__wkrXW",minting:"mintButton_minting__Xij_f"}},48:function(e,t,n){e.exports={addressContainer:"walletConnect_addressContainer__3VXgp",address:"walletConnect_address__3CTLh",circle:"walletConnect_circle__2q7FM",greenCircle:"walletConnect_greenCircle__5Ei3m",greyCircle:"walletConnect_greyCircle__2ZwAn",balance:"walletConnect_balance__SucC5",headerButton:"walletConnect_headerButton__1-BKQ"}},49:function(e,t,n){e.exports={container:"about_container__1XVyu",content:"about_content__3Ag7L",aboutImage:"about_aboutImage__3Kqab",about:"about_about__1Cufr",title:"about_title__vRxBd"}},66:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return h}));var r,a=n(13),i=n(2),c=n(1),s=n.n(c),o=n(4);!function(e){e[e.Sequential=0]="Sequential",e[e.Parallel=1]="Parallel",e[e.StopOnFailure=2]="StopOnFailure"}(r||(r={}));var l=function(){var e=Object(i.a)(s.a.mark((function e(t,n,i,c){var l,u,p,b,f,h,m,g,v,x,j,y,_,w,O=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=O.length>4&&void 0!==O[4]?O[4]:r.Parallel,u=O.length>5&&void 0!==O[5]?O[5]:"singleGossip",p=O.length>6&&void 0!==O[6]?O[6]:function(e,t){},b=O.length>7&&void 0!==O[7]?O[7]:function(e,t){return!1},f=O.length>8?O[8]:void 0,h=[],f){e.next=10;break}return e.next=9,t.getRecentBlockhash(u);case 9:f=e.sent;case 10:m=function(e){var t=i[e],r=c[e];if(0===t.length)return"continue";var s=new o.Transaction;t.forEach((function(e){return s.add(e)})),s.recentBlockhash=f.blockhash,s.setSigners.apply(s,[n.publicKey].concat(Object(a.a)(r.map((function(e){return e.publicKey}))))),r.length>0&&s.partialSign.apply(s,Object(a.a)(r)),h.push(s)},g=0;case 12:if(!(g<i.length)){e.next=19;break}if("continue"!==m(g)){e.next=16;break}return e.abrupt("continue",16);case 16:g++,e.next=12;break;case 19:return e.next=21,n.signAllTransactions(h);case 21:v=e.sent,x=[],j={breakEarly:!1,i:0},console.log("Signed txns length",v.length,"vs handed in length",i.length),y=s.a.mark((function e(n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=d({connection:t,signedTransaction:v[n]})).then((function(e){var t=e.txid;e.slot;p(t,n)})).catch((function(e){b(v[n],n),l===r.StopOnFailure&&(j.breakEarly=!0,j.i=n)})),l===r.Parallel){e.next=21;break}return e.prev=3,e.next=6,a;case 6:e.next=19;break;case 8:if(e.prev=8,e.t0=e.catch(3),console.log("Caught failure",e.t0),!j.breakEarly){e.next=19;break}return console.log("Died on ",j.i),e.t1=j.i,e.next=16,Promise.all(x);case 16:return e.t2=e.sent,e.t3={number:e.t1,txs:e.t2},e.abrupt("return",{v:e.t3});case 19:e.next=22;break;case 21:x.push(a);case 22:case"end":return e.stop()}}),e,null,[[3,8]])})),_=0;case 27:if(!(_<v.length)){e.next=35;break}return e.delegateYield(y(_),"t0",29);case 29:if("object"!==typeof(w=e.t0)){e.next=32;break}return e.abrupt("return",w.v);case 32:_++,e.next=27;break;case 35:if(l===r.Parallel){e.next=38;break}return e.next=38,Promise.all(x);case 38:return e.t1=v.length,e.next=41,Promise.all(x);case 41:return e.t2=e.sent,e.abrupt("return",{number:e.t1,txs:e.t2});case 43:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),u=function(){return(new Date).getTime()/1e3};function d(e){return p.apply(this,arguments)}function p(){return(p=Object(i.a)(s.a.mark((function e(t){var n,r,a,c,o,l,d,p,f,m,v,x,j;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.signedTransaction,r=t.connection,a=t.timeout,c=void 0===a?15e3:a,o=n.serialize(),l=u(),d=0,e.next=6,r.sendRawTransaction(o,{skipPreflight:!0});case 6:return p=e.sent,console.log("Started awaiting confirmation for",p),f=!1,Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f||!(u()-l<c)){e.next=6;break}return r.sendRawTransaction(o,{skipPreflight:!0}),e.next=4,g(500);case 4:e.next=0;break;case 6:case"end":return e.stop()}}),e)})))(),e.prev=10,e.next=13,h(p,c,r,"recent",!0);case 13:if(m=e.sent){e.next=16;break}throw new Error("Timed out awaiting confirmation on transaction");case 16:if(!m.err){e.next=19;break}throw console.error(m.err),new Error("Transaction failed: Custom instruction error");case 19:d=(null===m||void 0===m?void 0:m.slot)||0,e.next=47;break;case 22:if(e.prev=22,e.t0=e.catch(10),console.error("Timeout Error caught",e.t0),!e.t0.timeout){e.next=27;break}throw new Error("Timed out awaiting confirmation on transaction");case 27:return v=null,e.prev=28,e.next=31,b(r,n,"single");case 31:v=e.sent.value,e.next=36;break;case 34:e.prev=34,e.t1=e.catch(28);case 36:if(!v||!v.err){e.next=47;break}if(!v.logs){e.next=46;break}x=v.logs.length-1;case 39:if(!(x>=0)){e.next=46;break}if(!(j=v.logs[x]).startsWith("Program log: ")){e.next=43;break}throw new Error("Transaction failed: "+j.slice("Program log: ".length));case 43:--x,e.next=39;break;case 46:throw new Error(JSON.stringify(v.err));case 47:return e.prev=47,f=!0,e.finish(47);case 50:return console.log("Latency",p,u()-l),e.abrupt("return",{txid:p,slot:d});case 52:case"end":return e.stop()}}),e,null,[[10,22,47,50],[28,34]])})))).apply(this,arguments)}function b(e,t,n){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(s.a.mark((function e(t,n,r){var a,i,c,o,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._recentBlockhash(t._disableBlockhashCaching);case 2:return n.recentBlockhash=e.sent,a=n.serializeMessage(),i=n._serialize(a),c=i.toString("base64"),o=[c,{encoding:"base64",commitment:r}],e.next=10,t._rpcRequest("simulateTransaction",o);case 10:if(!(l=e.sent).error){e.next=13;break}throw new Error("failed to simulate transaction: "+l.error.message);case 13:return e.abrupt("return",l.result);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t,n){return m.apply(this,arguments)}function m(){return m=Object(i.a)(s.a.mark((function e(t,n,r){var a,c,o,l,u,d=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=d.length>3&&void 0!==d[3]?d[3]:"recent",c=d.length>4&&void 0!==d[4]&&d[4],o=!1,l={slot:0,confirmations:0,err:null},u=0,e.next=7,new Promise(function(){var e=Object(i.a)(s.a.mark((function e(d,p){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),p({timeout:!0}))}),n);try{u=r.onSignature(t,(function(e,t){o=!0,l={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),p(l)):(console.log("Resolved via websocket",e),d(l))}),a)}catch(b){o=!0,console.error("WS error in setup",t,b)}case 2:if(o||!c){e.next=8;break}return Object(i.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,l=n&&n.value[0],o||(l?l.err?(console.log("REST error for",t,l),o=!0,p(l.err)):l.confirmations?(console.log("REST confirmation for",t,l),o=!0,d(l)):console.log("REST no confirmations for",t,l):console.log("REST null result for",t,l)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,g(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return l=e.sent,r._signatureSubscriptions[u]&&r.removeSignatureListener(u),o=!0,console.log("Returning status",l),e.abrupt("return",l);case 12:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function g(e){return new Promise((function(t){return setTimeout(t,e)}))}},68:function(e,t,n){e.exports={fadeIn:"App_fadeIn__3R-bv",container:"App_container__eSJ6i",loading:"App_loading__3Rsj5","lds-hourglass":"App_lds-hourglass__1Jcvc"}},95:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return p}));var r=n(11),a=n(2),i=n(1),c=n.n(i),s=n(16),o=n(19),l=n(4),u=n(66),d=n(24),p=function(){var e=Object(a.a)(c.a.mark((function e(t,n,a){var i,p,v,x,j,y,_,w,O,k,S,P,W,N,K,R,T;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a.publicKey),e.next=3,b(a.publicKey,n);case 3:if(i=e.sent[0],!t.state.tokenMint){e.next=10;break}return e.next=7,b(t.state.tokenMint,n);case 7:e.t0=e.sent[0],e.next=11;break;case 10:e.t0=n;case 11:return p=e.t0,v=t.id,x=[],j=[a],y=[],e.next=18,m(a.publicKey);case 18:return _=e.sent,e.next=21,h(a.publicKey);case 21:return w=e.sent,e.next=24,g(v);case 24:return O=e.sent,k=Object(r.a)(O,2),S=k[0],P=k[1],e.t1=s.c.SystemProgram,e.t2=n,e.t3=a.publicKey,e.t4=o.a.span,e.next=34,t.program.provider.connection.getMinimumBalanceForRentExemption(o.a.span);case 34:if(e.t5=e.sent,e.t6=o.b,e.t7={fromPubkey:e.t2,newAccountPubkey:e.t3,space:e.t4,lamports:e.t5,programId:e.t6},e.t8=e.t1.createAccount.call(e.t1,e.t7),e.t9=o.c.createInitMintInstruction(o.b,a.publicKey,0,n,n),e.t10=f(i,n,n,a.publicKey),e.t11=o.c.createMintToInstruction(o.b,a.publicKey,i,n,[],1),W=[e.t8,e.t9,e.t10,e.t11],!t.state.whitelistMintSettings){e.next=57;break}return N=new s.c.PublicKey(t.state.whitelistMintSettings.mint),e.next=46,b(N,n);case 46:if(K=e.sent[0],x.push({pubkey:K,isWritable:!0,isSigner:!1}),!t.state.whitelistMintSettings.mode.burnEveryTime){e.next=57;break}return R=s.c.Keypair.generate(),x.push({pubkey:N,isWritable:!0,isSigner:!1}),x.push({pubkey:R.publicKey,isWritable:!1,isSigner:!0}),j.push(R),e.next=55,t.program.provider.connection.getAccountInfo(K);case 55:e.sent&&(W.push(o.c.createApproveInstruction(o.b,K,R.publicKey,n,[],1)),y.push(o.c.createRevokeInstruction(o.b,K,n,[])));case 57:return t.state.tokenMint&&(T=s.c.Keypair.generate(),j.push(T),x.push({pubkey:p,isWritable:!0,isSigner:!1}),x.push({pubkey:T.publicKey,isWritable:!1,isSigner:!0}),W.push(o.c.createApproveInstruction(o.b,p,T.publicKey,n,[],t.state.price.toNumber())),y.push(o.c.createRevokeInstruction(o.b,p,n,[]))),e.t12=W,e.next=61,t.program.instruction.mintNft(P,{accounts:{candyMachine:v,candyMachineCreator:S,payer:n,wallet:t.state.treasury,mint:a.publicKey,metadata:_,masterEdition:w,mintAuthority:n,updateAuthority:n,tokenMetadataProgram:d.c,tokenProgram:o.b,systemProgram:l.SystemProgram.programId,rent:s.c.SYSVAR_RENT_PUBKEY,clock:s.c.SYSVAR_CLOCK_PUBKEY,recentBlockhashes:s.c.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,instructionSysvarAccount:s.c.SYSVAR_INSTRUCTIONS_PUBKEY},remainingAccounts:x.length>0?x:void 0});case 61:return e.t13=e.sent,e.t12.push.call(e.t12,e.t13),e.prev=63,e.next=66,Object(u.b)(t.program.provider.connection,t.program.provider.wallet,[W,y],[j,[]]);case 66:return e.abrupt("return",e.sent.txs.map((function(e){return e.txid})));case 69:e.prev=69,e.t14=e.catch(63),console.log(e.t14);case 72:return e.abrupt("return",[]);case 73:case"end":return e.stop()}}),e,null,[[63,69]])})));return function(t,n,r){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.c.PublicKey.findProgramAddress([n.toBuffer(),o.b.toBuffer(),t.toBuffer()],d.b);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(t,n,r,a){var i=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:s.c.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:o.b,isSigner:!1,isWritable:!1},{pubkey:s.c.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new s.c.TransactionInstruction({keys:i,programId:d.b,data:e.from([])})},h=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.c.PublicKey.findProgramAddress([e.from("metadata"),d.c.toBuffer(),n.toBuffer(),e.from("edition")],d.c);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.c.PublicKey.findProgramAddress([e.from("metadata"),d.c.toBuffer(),n.toBuffer()],d.c);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.c.PublicKey.findProgramAddress([e.from("candy_machine"),n.toBuffer()],d.a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}).call(this,n(10).Buffer)},96:function(e,t,n){e.exports={mintCount:"mintCount_mintCount__35rTK"}}},[[151,1,2]]]);
//# sourceMappingURL=main.9263b4d1.chunk.js.map
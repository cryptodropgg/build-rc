(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[23],{2586:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return X}));var a=n(15),s=n(10),c=n(5),r=n(0),i=n(14),o=n(818),l=n(300),u=n(829),b=n(813),d=n(700),j=n(524),p=n(2547),m=n(822),h=n(810),O=n(817),g=n(833),x=n(835),f=n(836),k=n(837),y=n(825),v=n(2544),w=n(707),S=n(63),I=n(717),$=n(890),E=n(198),B=n(715),P=n(2588),C=n(80),D=n(81),T=n(386),N=n(384),A=n(90),F=n(873),U=n(37),G=n(36),J=n(886),q=n(2546),L=n(1),M=function(e){var t=Object(r.useState)(!0),n=Object(a.a)(t,2),s=n[0],c=n[1],i=Object(r.useState)(!0),o=Object(a.a)(i,2),l=o[0],u=o[1],b=Object(r.useState)("CLAIM"),d=Object(a.a)(b,2),j=d[0],p=d[1],m=Object(q.a)(U.C,"claimRewardsWithToken",{transactionName:"Claim Juice Drop"}),h=m.state,O=m.send;Object(r.useEffect)((function(){Number(e.drop)>1e-5?(c(!1),u(!1)):(c(!0),u(!0))}),[e.drop]),Object(r.useEffect)((function(){"Exception"!==h.status&&"Fail"!==h.status||(l||c(!1),p("CLAIM"),e.openFailedPopup("Failed claim JUICE Drops")),"None"===h.status&&(l||c(!1),p("CLAIM")),"Success"===h.status&&(p("CLAIM"),e.openSuccessPopup("Successful claim JUICE Drops")),"Mining"===h.status&&(c(!0),u(!1),p("PENDING..."))}),[h]);return Object(L.jsx)(y.a,{variant:"contained",color:"primary",style:{width:"50%",marginTop:"0.5rem",maxWidth:"300px"},disabled:s,onClick:function(){O(U.E)},children:j})},W=n(843),z=Object(i.a)(o.a)((function(e){var t=e.theme;return Object(c.a)(Object(c.a)({},t.typography.body2),{},{padding:t.spacing(2),color:t.palette.text.primary,height:"100%"})})),K=Object(i.a)("div")({display:"flex",justifyContent:"left"}),R=Object(i.a)(l.a)((function(e){var t=e.theme;return Object(s.a)({margin:t.spacing(0,1)},t.breakpoints.up("sm"),{margin:t.spacing(0,1.5)})})),V=Object(i.a)(w.a.div)((function(e){e.theme;return{}})),H=new Date,_=Object(i.a)(o.a)((function(e){var t=e.theme;return{width:"100%",border:"solid 1px ".concat(t.palette.divider),background:"none"}}));function X(){var e=Object(I.a)().account,t=Object($.a)(U.B,e),n=Object(r.useState)("0"),s=Object(a.a)(n,2),c=s[0],i=s[1],o=Object(r.useState)(0),q=Object(a.a)(o,2),X=q[0],Q=q[1],Y=Object(r.useState)(0),Z=Object(a.a)(Y,2),ee=Z[0],te=Z[1],ne=Object(r.useState)("0"),ae=Object(a.a)(ne,2),se=ae[0],ce=ae[1],re=Object(r.useState)("0"),ie=Object(a.a)(re,2),oe=ie[0],le=ie[1],ue=Object(r.useState)(!1),be=Object(a.a)(ue,2),de=be[0],je=be[1],pe=Object(E.b)(),me=Object(r.useState)(!1),he=Object(a.a)(me,2),Oe=he[0],ge=he[1],xe=Object(r.useState)({message:"",icon:""}),fe=Object(a.a)(xe,2),ke=fe[0],ye=fe[1],ve=function(){ge(!1)},we=function(e){ye({message:e,icon:"failedWarning.svg",title:"Failed"}),ge(!0)},Se=function(e){ye({message:e,icon:"success.svg",title:"Success"}),ge(!0)};Object(r.useEffect)((function(){i(t?C.a.formatEther(t.toString()):"0")}),[e,t]);var Ie=Object(B.b)([{abi:U.D,address:U.B,method:"timelock",args:[]},{abi:U.D,address:U.B,method:"getRewardsAmount",args:[e]},{abi:U.n,address:U.m,method:"freePeriod",args:[]},{abi:U.D,address:U.B,method:"getRewardsAmountWithToken",args:[U.E,e]}]);Object(r.useEffect)((function(){Ie&&Ie[0]&&Ie[2]&&(Q(Ie[0][0].toNumber()+Ie[2][0].toNumber()),te(Ie[2][0].toNumber())),Ie&&Ie[1]&&Ie[1].amountToClaim&&(Ie[1].amountToClaim.gt(C.a.parseEther("0.000000009"))?ce(C.a.formatEther(Ie[1].amountToClaim.toString())):ce(0)),Ie&&Ie[3]&&Ie[3].amountToClaim&&(Ie[3].amountToClaim.gt(C.a.parseEther("0.000000009"))?le(C.a.formatEther(Ie[3].amountToClaim.toString())):le(0))}),[Ie,e]);var $e=Object(r.useState)(0),Ee=Object(a.a)($e,2),Be=Ee[0],Pe=Ee[1],Ce=Object(r.useState)(0),De=Object(a.a)(Ce,2),Te=De[0],Ne=De[1],Ae=Object(v.a)(W.n,{pollInterval:3e3}).data;Object(r.useEffect)((function(){console.log(Ae),Ae&&Ae.drops&&Ae.drops[0]&&(Pe(Ae.drops[0].totalDrops),Ne(Ae.drops[0].totalJuiceDrops))}),[Ae]);var Fe=Object(P.a)(U.m),Ue=Object($.a)(U.E,U.m),Ge=new Date(1e3*X),Je=new Date(1e3*X),qe=Object(S.a)(),Le=Object(D.a)().themeStretch,Me=0;Me=(new Date).getTime()<=Je.getTime()&&0!==X?(Date.now()-H)/(Je-H)*100:0;var We=Object(T.a)(Je),ze=Me;return Object(r.useEffect)((function(){(new Date).getTime()<=Ge.getTime()-1e3*ee&&0!==X?je(!0):je(!1)}),[H,Ge,pe]),Object(L.jsx)(N.a,{title:"Cryptodrop | Stake",style:{overflow:"hidden"},children:Object(L.jsx)(u.a,{maxWidth:!Le&&"xl",children:Object(L.jsxs)(V,{initial:"initial",animate:"animate",variants:A.h,children:[Object(L.jsx)(w.a.div,{variants:A.d,children:Object(L.jsx)("img",{src:"/static/svg/staking.svg",alt:"",style:{position:"absolute",opacity:"0.15",marginTop:"-1.5rem",marginLeft:"-1.5rem",zIndex:"-1"}})}),Object(L.jsx)(w.a.div,{variants:A.f,children:Object(L.jsx)(l.a,{variant:"h3",component:"h1",paragraph:!0,children:"Staking"})}),e?Object(L.jsx)(w.a.div,{variants:A.f,children:Object(L.jsxs)(b.a,{container:!0,spacing:2,direction:"row",justifyContent:"center",style:{marginBottom:"2rem"},children:[Object(L.jsx)(b.a,{item:!0,xs:12,md:8,lg:8,xl:8,children:Object(L.jsx)(z,{style:{maxWidth:"800px",minHeight:"12rem",margin:"auto",padding:"1.5",backgroundImage:"url(/static/background/DropBanner.png)",backgroundSize:"cover",boxShadow:qe.customShadows.primary,border:"2px solid",borderColor:qe.palette.primary.main},children:Object(L.jsxs)(d.a,{children:[Object(L.jsxs)(d.a,{className:"staking-claim-stack",children:[Object(L.jsxs)(d.a,{className:"claim-juice-stack",children:[Object(L.jsx)(l.a,{variant:"h5",children:"BNB Drop"}),Object(L.jsxs)(d.a,{direction:"row",spacing:1,justifyContent:"flex-start",alignItems:"center",children:[Object(L.jsx)(l.a,{variant:"h4",style:{fontWeight:"normal"},children:Object(G.a)(se)}),Object(L.jsx)("img",{alt:"",src:"/static/icons/ic_bnb.svg",width:20,height:20})]}),Object(L.jsx)(J.a,{drop:se,openSuccessPopup:Se,openFailedPopup:we})]}),Object(L.jsxs)(d.a,{className:"claim-juice-stack",children:[Object(L.jsx)(l.a,{variant:"h5",children:"JUICE Drop"}),Object(L.jsxs)(d.a,{direction:"row",spacing:1,justifyContent:"flex-start",alignItems:"center",children:[Object(L.jsx)(l.a,{variant:"h4",style:{fontWeight:"normal"},children:Object(G.a)(oe)}),Object(L.jsx)("img",{alt:"",src:"/static/icons/ic_juice.svg",width:20,height:20})]}),Object(L.jsx)(M,{drop:oe,openSuccessPopup:Se,openFailedPopup:we})]})]}),0!==ze&&We.days>=0?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(l.a,{variant:"subtitle1",style:{marginTop:"1rem"},children:"Next Drop:"}),Object(L.jsxs)(K,{children:[Object(L.jsxs)("div",{children:[Object(L.jsx)(l.a,{variant:"h6",children:We.hours}),Object(L.jsx)(l.a,{sx:{color:"white",opacity:"0.5",marginTop:"-0.2rem"},children:"Hours"})]}),Object(L.jsx)(R,{variant:"h6",children:":"}),Object(L.jsxs)("div",{children:[Object(L.jsx)(l.a,{variant:"h6",children:We.minutes}),Object(L.jsx)(l.a,{sx:{color:"white",opacity:"0.5",marginTop:"-0.2rem"},children:"Minutes"})]}),Object(L.jsx)(R,{variant:"h6",children:":"}),Object(L.jsxs)("div",{children:[Object(L.jsx)(l.a,{variant:"h6",children:We.seconds}),Object(L.jsx)(l.a,{sx:{color:"white",opacity:"0.5",marginTop:"-0.2rem"},children:"Seconds"})]})]}),Object(L.jsx)(j.a,{sx:{width:"90%",marginTop:"0.5rem"},children:Object(L.jsx)(p.a,{variant:"determinate",value:Me})})]}):"",Object(L.jsx)(j.a,{style:{position:"relative",width:"100%",height:"0"},children:Object(L.jsx)("img",{alt:"",src:"/static/background/coinstack.png",style:{position:"absolute",right:"-3.5rem",bottom:"-3.2rem",width:"8rem",height:"8rem"}})})]})})}),Object(L.jsx)(b.a,{item:!0,xs:12,md:4,lg:4,xl:4,children:Object(L.jsx)(z,{style:{height:"auto",margin:"auto",padding:"1.5",backgroundImage:"url(/static/background/DropInfo.jpg)",backgroundSize:"cover",boxShadow:qe.customShadows.primary,border:"2px solid",borderColor:qe.palette.primary.main},children:Object(L.jsxs)(d.a,{children:[Object(L.jsxs)(l.a,{variant:"h5",style:{marginBottom:"0.5rem"},children:["Drop Info"," ",Object(L.jsx)("span",{role:"img","aria-label":"drop-emoji",children:"\ud83d\udca6"})]}),Object(L.jsx)(_,{children:Object(L.jsxs)(m.a,{children:[Object(L.jsx)(h.a,{children:Object(L.jsxs)(d.a,{children:[Object(L.jsxs)(d.a,{direction:"column",spacing:1,style:{marginBottom:"0.4rem"},children:[Object(L.jsxs)(d.a,{direction:"row",spacing:1,justifyContent:"flex-start",alignItems:"center",children:[Object(L.jsxs)(l.a,{variant:"h5",style:{marginBottom:"-0.3rem"},children:[Object(G.a)(Be)," BNB"]}),Object(L.jsx)("img",{alt:"",src:"/static/icons/ic_bnb.svg",style:{width:"1.25rem",height:"1.25rem",marginLeft:"0.3rem"}})]}),Object(L.jsxs)(d.a,{direction:"row",spacing:1,justifyContent:"flex-start",alignItems:"center",children:[Object(L.jsxs)(l.a,{variant:"h5",style:{marginBottom:"-0.3rem"},children:[Object(G.a)(Te)," JUICE"]}),Object(L.jsx)("img",{alt:"",src:"/static/icons/ic_juice.svg",style:{width:"1.25rem",height:"1.25rem",marginLeft:"0.3rem"}})]})]}),Object(L.jsx)(l.a,{variant:"p",style:{opacity:"0.5"},children:"Total Drop Since Launched"})]})}),Object(L.jsx)(h.a,{children:Object(L.jsxs)(d.a,{children:[Object(L.jsxs)(d.a,{direction:"column",spacing:1,style:{marginBottom:"0.4rem"},children:[Object(L.jsxs)(d.a,{direction:"row",spacing:1,justifyContent:"flex-start",alignItems:"center",children:[Object(L.jsxs)(l.a,{variant:"h5",style:{marginBottom:"-0.3rem"},children:[Fe?Object(G.a)(C.a.formatEther(Fe)):0," BNB"]}),Object(L.jsx)("img",{alt:"",src:"/static/icons/ic_bnb.svg",style:{width:"1.25rem",height:"1.25rem",marginLeft:"0.3rem"}})]}),Object(L.jsxs)(d.a,{direction:"row",spacing:1,justifyContent:"flex-start",alignItems:"center",children:[Object(L.jsxs)(l.a,{variant:"h5",style:{marginBottom:"-0.3rem"},children:[Ue?Object(G.a)(C.a.formatEther(Ue)):0," JUICE"]}),Object(L.jsx)("img",{alt:"",src:"/static/icons/ic_juice.svg",style:{width:"1.25rem",height:"1.25rem",marginLeft:"0.3rem"}})]})]}),Object(L.jsx)(l.a,{variant:"p",style:{opacity:"0.5"},children:"Next Drop Total"})]})})]})})]})})})]})}):"",Object(L.jsx)(w.a.div,{variants:A.f,children:Object(L.jsxs)(b.a,{container:!0,spacing:2,alignItems:"stretch",direction:"row",justifyContent:"flex-start",children:[Object(L.jsx)(b.a,{item:!0,xs:12,md:8,lg:8,xl:8,children:Object(L.jsx)(z,{style:{display:"flex",flexDirection:"column"},children:Object(L.jsx)(F.a,{lockUnstake:de,timeLock:X-ee})})}),Object(L.jsx)(b.a,{item:!0,xs:12,md:4,lg:4,xl:4,children:Object(L.jsxs)(z,{style:{display:"flex",flexDirection:"column",height:"35%",minHeight:"8rem",backgroundImage:"url(/static/background/balance.png)",backgroundSize:"cover"},children:[Object(L.jsx)(l.a,{variant:"h5",children:"Balance"}),Object(L.jsxs)(d.a,{direction:"row",spacing:1,justifyContent:"flex-start",alignItems:"center",children:[Object(L.jsxs)(l.a,{variant:"h4",style:{fontWeight:"normal"},children:[Object(G.a)(c)," $JUICE"]}),Object(L.jsx)("img",{alt:"",src:"/static/icons/ic_juice.svg",width:25,height:25})]})]})})]})}),Object(L.jsxs)(O.a,{open:Oe,onClose:ve,children:[Object(L.jsx)(g.a,{children:ke.title}),Object(L.jsxs)(x.a,{children:[Object(L.jsx)("img",{alt:"",src:"/static/svg/".concat(ke.icon),style:{width:"8rem",margin:"auto",marginTop:"2rem"}}),Object(L.jsx)(f.a,{id:"alert-dialog-description",style:{textAlign:"center",marginTop:"2rem",fontSize:"1.2rem"},children:ke.message})]}),Object(L.jsx)(k.a,{children:Object(L.jsx)(y.a,{onClick:ve,autoFocus:!0,children:"Ok"})})]}),Object(L.jsx)("img",{src:"/static/background/waves.svg",alt:"",style:{position:"fixed",bottom:"0",left:"0",zIndex:"-1",opacity:"0.2",width:"100%",minHeight:"20rem",objectFit:"cover"}})]})})})}},843:function(e,t,n){"use strict";n.d(t,"m",(function(){return v})),n.d(t,"g",(function(){return w})),n.d(t,"l",(function(){return S})),n.d(t,"j",(function(){return I})),n.d(t,"h",(function(){return $})),n.d(t,"k",(function(){return E})),n.d(t,"i",(function(){return B})),n.d(t,"o",(function(){return P})),n.d(t,"p",(function(){return C})),n.d(t,"a",(function(){return D})),n.d(t,"d",(function(){return T})),n.d(t,"b",(function(){return N})),n.d(t,"e",(function(){return A})),n.d(t,"c",(function(){return F})),n.d(t,"f",(function(){return U})),n.d(t,"n",(function(){return G}));var a,s,c,r,i,o,l,u,b,d,j,p,m,h,O,g,x,f,k=n(209),y=n(2574),v=Object(y.a)(a||(a=Object(k.a)(["\n  query GetRounds($perPage: Int!, $skip: Int!) \n    {\n      rounds(first: $perPage, skip: $skip, orderBy: roundID, orderDirection: desc) {\n         id\n         block\n         hash\n         hashMap\n         drawnBy\n         rewards\n         numberOfWinners\n         totalBets\n         roundID\n         tx\n      }\n\n      summaries {\n        totalRounds\n      }\n  }\n"]))),w=Object(y.a)(s||(s=Object(k.a)(['\n  query GetBets($perPage: Int!, $skip: Int!) {\n    bets(first: $perPage, skip: $skip, orderBy: block, orderDirection: desc, where: { type: "Block Hash Game" }) {\n      id\n      betID\n      user {\n        id\n      }\n      amount\n      reward\n      bet\n      hash\n      win\n      block\n      tx\n    }\n\n    summaries {\n      totalBets\n    }\n  }\n']))),S=(Object(y.a)(c||(c=Object(k.a)(["\n  query GetBets($perPage: Int!, $skip: Int!) {\n    bets(first: $perPage, skip: $skip, orderBy: block, orderDirection: desc, where: { isVip: true }) {\n      id\n      betID\n      user {\n        id\n      }\n      amount\n      reward\n      bet\n      hash\n      win\n      block\n      tx\n    }\n\n    summaries {\n      totalBetsVIP\n    }\n  }\n"]))),Object(y.a)(r||(r=Object(k.a)(['\n  query GetBets($perPage: Int!, $skip: Int!) {\n    bets(first: $perPage, skip: $skip, orderBy: block, orderDirection: desc, where: { type: "Two Win Game" }) {\n      id\n      betID\n      user {\n        id\n      }\n      amount\n      reward\n      bet\n      hash\n      win\n      block\n      tx\n    }\n\n    summaries {\n      totalBetsTwoWin\n    }\n  }\n'])))),I=Object(y.a)(i||(i=Object(k.a)(['\n  query GetBets($perPage: Int!, $skip: Int!) {\n    bets(first: $perPage, skip: $skip, orderBy: block, orderDirection: desc, where: { type: "Lucky 888" }) {\n      id\n      betID\n      user {\n        id\n      }\n      amount\n      reward\n      bet\n      hash\n      win\n      block\n      tx\n    }\n\n    summaries {\n      totalBetsLucky888\n    }\n  }\n']))),$=Object(y.a)(o||(o=Object(k.a)(['\n  query GetBets($perPage: Int!, $skip: Int!) {\n    bets(first: $perPage, skip: $skip, orderBy: block, orderDirection: desc, where: { type: "Ape Slots" }) {\n      id\n      betID\n      user {\n        id\n      }\n      amount\n      reward\n      bet\n      hash\n      win\n      block\n      tx\n      mode\n    }\n\n    summaries {\n      totalBetsApeSlots\n    }\n  }\n']))),E=Object(y.a)(l||(l=Object(k.a)(['\n  query GetBets($perPage: Int!, $skip: Int!) {\n    bets(first: $perPage, skip: $skip, orderBy: block, orderDirection: desc, where: { type: "Shell Game" }) {\n      id\n      betID\n      user {\n        id\n      }\n      amount\n      reward\n      bet\n      hash\n      win\n      block\n      tx\n      shell\n    }\n\n    summaries {\n      totalBetsShellGame\n    }\n  }\n']))),B=Object(y.a)(u||(u=Object(k.a)(['\n  query GetBets($perPage: Int!, $skip: Int!) {\n    bets(first: $perPage, skip: $skip, orderBy: block, orderDirection: desc, where: { type: "Envelopes" }) {\n      id\n      betID\n      user {\n        id\n      }\n      amount\n      reward\n      bet\n      hash\n      win\n      block\n      tx\n      envelope\n    }\n\n    summaries {\n      totalBetsEnvelopes\n    }\n  }\n']))),P=Object(y.a)(b||(b=Object(k.a)(["\n  query GetUserBets($perPage: Int!, $skip: Int!, $account: String!) {\n    bets(first: $perPage, skip: $skip, orderBy: block, orderDirection: desc, where: { user: $account }) {\n      id\n      betID\n      amount\n      reward\n      bet\n      hash\n      win\n      block\n      tx\n      type\n      shell\n      envelope\n      mode\n    }\n\n    users(where: { id: $account }) {\n      totalBets\n    }\n  }\n"]))),C=Object(y.a)(d||(d=Object(k.a)(["\n  query GetUserBets($perPage: Int!, $skip: Int!, $account: String!) {\n    tickets(first: $perPage, skip: $skip, orderBy: block, orderDirection: desc, where: { user: $account }) {\n      id\n      block\n      betID\n      user {\n        id\n        totalTickets\n      }\n      \n      round {\n        id\n        hash\n        hashMap\n        rewards\n        numberOfWinners\n        totalBets\n        roundSettled\n      }\n      \n      hash\n      hashMap\n      amount\n      tx\n    }\n\n    users(where: { id: $account }) {\n      totalTickets\n    }\n  }\n"]))),D=Object(y.a)(j||(j=Object(k.a)(['\n  query GetBets($perPage: Int!, $skip: Int!, $status: Boolean!) {\n    bets(\n      first: $perPage\n      skip: $skip\n      orderBy: block\n      orderDirection: desc\n      where: { win: $status, type: "Block Hash Game" }\n    ) {\n      id\n      betID\n      user {\n        id\n      }\n      amount\n      reward\n      bet\n      hash\n      win\n      block\n      tx\n    }\n\n    summaries {\n      totalJackpots\n    }\n  }\n']))),T=(Object(y.a)(p||(p=Object(k.a)(["\n  query GetBets($perPage: Int!, $skip: Int!, $status: Boolean!) {\n    bets(first: $perPage, skip: $skip, orderBy: block, orderDirection: desc, where: { win: $status, isVip: true }) {\n      id\n      betID\n      user {\n        id\n      }\n      amount\n      reward\n      bet\n      hash\n      win\n      block\n      tx\n    }\n\n    summaries {\n      totalJackpotsVIP\n    }\n  }\n"]))),Object(y.a)(m||(m=Object(k.a)(['\n  query GetBets($perPage: Int!, $skip: Int!, $status: Boolean!) {\n    bets(\n      first: $perPage\n      skip: $skip\n      orderBy: block\n      orderDirection: desc\n      where: { win: $status, type: "Lucky 888" }\n    ) {\n      id\n      betID\n      user {\n        id\n      }\n      amount\n      reward\n      bet\n      hash\n      win\n      block\n      tx\n    }\n\n    summaries {\n      totalJackpotsLucky888\n    }\n  }\n'])))),N=Object(y.a)(h||(h=Object(k.a)(['\n  query GetBets($perPage: Int!, $skip: Int!, $status: Boolean!) {\n    bets(\n      first: $perPage\n      skip: $skip\n      orderBy: block\n      orderDirection: desc\n      where: { win: $status, type: "Ape Slots" }\n    ) {\n      id\n      betID\n      user {\n        id\n      }\n      amount\n      reward\n      bet\n      hash\n      win\n      block\n      tx\n    }\n\n    summaries {\n      totalJackpotsApeSlots\n    }\n  }\n']))),A=Object(y.a)(O||(O=Object(k.a)(['\n  query GetBets($perPage: Int!, $skip: Int!, $status: Boolean!) {\n    bets(\n      first: $perPage\n      skip: $skip\n      orderBy: block\n      orderDirection: desc\n      where: { win: $status, type: "Shell Game" }\n    ) {\n      id\n      betID\n      user {\n        id\n      }\n      amount\n      reward\n      bet\n      hash\n      win\n      block\n      tx\n      shell\n    }\n\n    summaries {\n      totalJackpotsShellGame\n    }\n  }\n']))),F=Object(y.a)(g||(g=Object(k.a)(['\n  query GetBets($perPage: Int!, $skip: Int!, $status: Boolean!) {\n    bets(\n      first: $perPage\n      skip: $skip\n      orderBy: block\n      orderDirection: desc\n      where: { win: $status, type: "Envelopes" }\n    ) {\n      id\n      betID\n      user {\n        id\n      }\n      amount\n      reward\n      bet\n      hash\n      win\n      block\n      tx\n      envelope\n    }\n\n    summaries {\n      totalJackpotsEnvelopes\n    }\n  }\n']))),U=Object(y.a)(x||(x=Object(k.a)(['\n  query GetBets($perPage: Int!, $skip: Int!, $status: Boolean!) {\n    bets(\n      first: $perPage\n      skip: $skip\n      orderBy: block\n      orderDirection: desc\n      where: { win: $status, type: "Two Win Game" }\n    ) {\n      id\n      betID\n      user {\n        id\n      }\n      amount\n      reward\n      bet\n      hash\n      win\n      block\n      tx\n    }\n\n    summaries {\n      totalJackpotsTwoWin\n    }\n  }\n']))),G=Object(y.a)(f||(f=Object(k.a)(["\n  query GetDrops {\n    drops(first: 1) {\n      totalDrops\n      totalJuiceDrops\n    }\n  }\n"])))},873:function(e,t,n){"use strict";var a=n(15),s=n(0),c=n(700),r=n(2587),i=n(524),o=n(300),l=n(805),u=n(831),b=n(825),d=n(884),j=n(817),p=n(833),m=n(835),h=n(836),O=n(837),g=n(2566),x=n(2579),f=n(2591),k=n(717),y=n(885),v=n(890),w=n(80),S=n(2581),I=n(37),$=n(2546),E=n(1),B=function(e){var t=Object(s.useState)(!0),n=Object(a.a)(t,2),c=n[0],r=n[1],o=Object(s.useState)(!0),l=Object(a.a)(o,2),u=l[0],d=l[1],j=Object(s.useState)("APPROVE"),p=Object(a.a)(j,2),m=p[0],h=p[1],O=""!==e.value?w.a.parseEther(e.value):S.a.from("0");Object(s.useEffect)((function(){e.account?O.gt(S.a.from("0"))?(r(!1),d(!1)):(r(!0),d(!0)):(d(!0),r(!0))}),[e.value,e.account,e.balance]);var g=Object($.a)(I.s,"approve",{transactionName:"Approve $JUICE"}),x=g.state,f=g.send;Object(s.useEffect)((function(){"Exception"!==x.status&&"Fail"!==x.status||(u||r(!1),e.openFailedPopup("Failed to approve $JUICE"),h("APPROVE")),"None"===x.status&&(u||r(!1),h("APPROVE")),"Success"===x.status&&(h("APPROVE"),e.openSuccessPopup("Successfully approved $JUICE")),"Mining"===x.status&&(r(!0),d(!1),h("PENDING..."))}),[x]);return Object(E.jsx)(i.a,{mt:"auto",style:e.style,children:Object(E.jsx)(b.a,{size:"large",variant:"contained",color:"primary",style:{width:"100%",marginTop:"4rem"},disabled:c,onClick:function(){e.account?(e.setOpen(!1),f(I.B,O)):e.setOpen(!0)},children:m})})},P=function(e){var t=Object(s.useState)(!0),n=Object(a.a)(t,2),c=n[0],r=n[1],o=Object(s.useState)(!0),l=Object(a.a)(o,2),u=l[0],d=l[1],j=Object(s.useState)("STAKE"),p=Object(a.a)(j,2),m=p[0],h=p[1],O=""!==e.value?w.a.parseEther(e.value):S.a.from("0"),g=w.a.parseEther(e.balance);Object(s.useEffect)((function(){O.gt(S.a.from("0"))?(r(!1),d(!1)):(r(!0),d(!0)),e.account?O.gt(g)?(r(!0),d(!0),h("INSUFFICIENT BALANCE")):g.eq(S.a.from("0"))||O.eq(S.a.from("0"))?(r(!0),d(!0)):(r(!1),d(!1),h("STAKE")):(r(!0),d(!0))}),[e.value,e.account,e.balance]);var x=Object($.a)(I.C,"enter",{transactionName:"Stake Drop"}),f=x.state,k=x.send;Object(s.useEffect)((function(){"Exception"!==f.status&&"Fail"!==f.status||(u||r(!1),h("STAKE"),e.openFailedPopup("Failed to stake $JUICE")),"None"===f.status&&(u||r(!1),h("STAKE")),"Success"===f.status&&(h("STAKE"),e.setAmount(""),e.openSuccessPopup("Successfully staked $JUICE")),"Mining"===f.status&&(r(!0),d(!1),h("PENDING..."))}),[f]);return Object(E.jsx)(i.a,{mt:"auto",style:e.style,children:Object(E.jsx)(b.a,{size:"large",variant:"contained",color:"primary",style:{width:"100%",marginTop:"4rem"},disabled:c,onClick:function(){e.account?(e.setOpen(!1),k(O)):e.setOpen(!0)},children:m})})},C=function(e){var t=Object(s.useState)(!0),n=Object(a.a)(t,2),c=n[0],r=n[1],o=Object(s.useState)(!0),l=Object(a.a)(o,2),u=l[0],d=l[1],j=Object(s.useState)("UNSTAKE"),p=Object(a.a)(j,2),m=p[0],h=p[1],O=""!==e.value?w.a.parseEther(e.value):S.a.from("0"),g=w.a.parseEther(e.balance);Object(s.useEffect)((function(){O.gt(S.a.from("0"))?(r(!1),d(!1)):(r(!0),d(!0)),e.account?O.gt(g)?(r(!0),d(!0),h("INSUFFICIENT BALANCE")):g.eq(S.a.from("0"))||O.eq(S.a.from("0"))?(r(!0),d(!0)):(r(!1),d(!1),h("UNSTAKE")):(r(!0),d(!0))}),[e.value,e.account,e.balance]);var x=Object($.a)(I.C,"leave",{transactionName:"Unstake Drop"}),f=x.state,k=x.send;Object(s.useEffect)((function(){"Exception"!==f.status&&"Fail"!==f.status||(u||r(!1),h("UNSTAKE"),e.openFailedPopup("Failed to unstake $JUICE")),"None"===f.status&&(u||r(!1),h("UNSTAKE")),"Success"===f.status&&(h("UNSTAKE"),e.setAmount(""),e.openSuccessPopup("Successfully unstaked $JUICE")),"Mining"===f.status&&(r(!0),d(!1),h("PENDING..."))}),[f]);return Object(E.jsx)(i.a,{mt:"auto",children:Object(E.jsx)(b.a,{size:"large",variant:"contained",color:"primary",style:{width:"100%",marginTop:"4rem"},disabled:c,onClick:function(){e.account?(e.setOpen(!1),k(O)):e.setOpen(!0)},children:m})})},D=n(385),T=n(36),N=[{value:"1",label:"Stake",disabled:!1},{value:"2",label:"Unstake",disabled:!1}];t.a=function(e){var t=Object(k.a)().account,n=Object(s.useState)(void 0),$=Object(a.a)(n,2),A=$[0],F=$[1],U=Object(s.useState)("0"),G=Object(a.a)(U,2),J=G[0],q=G[1],L=Object(s.useState)("0"),M=Object(a.a)(L,2),W=M[0],z=M[1],K=Object(y.a)(I.E,t,I.B),R=Object(v.a)(I.E,t),V=Object(v.a)(I.B,t),H=Object(s.useState)("1"),_=Object(a.a)(H,2),X=_[0],Q=_[1],Y=Object(s.useState)(""),Z=Object(a.a)(Y,2),ee=Z[0],te=Z[1],ne=Object(s.useState)(""),ae=Object(a.a)(ne,2),se=ae[0],ce=ae[1];Object(s.useEffect)((function(){K&&F(K),R&&q(w.a.formatEther(R.toString())),V&&z(w.a.formatEther(V.toString()))}),[K,R,V]);var re=Object(s.useState)(!1),ie=Object(a.a)(re,2),oe=ie[0],le=ie[1],ue=function(){le(!1)},be=Object(s.useState)(!1),de=Object(a.a)(be,2),je=de[0],pe=de[1],me=Object(s.useState)({message:"",icon:""}),he=Object(a.a)(me,2),Oe=he[0],ge=he[1],xe=function(){pe(!1)},fe=function(e){ge({message:e,icon:"failedWarning.svg",title:"Failed"}),pe(!0)},ke=function(e){ge({message:e,icon:"success.svg",title:"Success"}),pe(!0)},ye=new Date(1e3*e.timeLock),ve=("0"+(ye.getMonth()+1)).substr(-2),we=("0"+ye.getDate()).substr(-2),Se=("0"+ye.getHours()).substr(-2),Ie=("0"+ye.getMinutes()).substr(-2),$e=("0"+ye.getSeconds()).substr(-2);return Object(E.jsxs)(c.a,{spacing:3,children:[Object(E.jsxs)(g.a,{value:X,children:[Object(E.jsx)(x.a,{onChange:function(e,t){Q(t)},centered:!0,children:N.map((function(e,t){return Object(E.jsx)(r.a,{label:e.label,value:String(t+1),style:{fontSize:"1.5rem",padding:"0.5rem"}},e.value)}))}),Object(E.jsxs)(i.a,{sx:{p:"2rem",mt:2,width:"100%",borderRadius:1,bgcolor:"grey.5008"},children:[Object(E.jsx)(f.a,{value:String(1),children:Object(E.jsxs)(c.a,{children:[Object(E.jsx)(o.a,{variant:"h4",children:"Stake $JUICE"}),Object(E.jsx)(D.a,{variant:"filled",color:"primary",style:{marginBottom:"1rem",width:"min-content",marginTop:"0.2rem"},children:"1 JUICE = 1 Share"}),Object(E.jsx)(i.a,{sx:{mt:2,mb:2,display:"flex"},children:Object(E.jsx)(l.a,{style:{width:"100%",margin:"auto"},label:"Stake Amount",InputProps:{endAdornment:Object(E.jsx)(u.a,{position:"end",children:Object(E.jsx)(b.a,{variant:"text",onClick:function(e){te(J)},children:"MAX"})})},value:ee,onChange:function(e){return function(e){te(e)}(e.target.value)},type:"number"})}),Object(E.jsx)(d.a,{label:"Max: ".concat(Object(T.a)(J)," $JUICE"),style:{width:"min-content"}}),A&&""!==ee&&!w.a.parseEther(ee).eq(S.a.from("0"))&&A.gte(w.a.parseEther(ee))?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(P,{setOpen:le,value:ee,account:t,balance:J,setAmount:te,openSuccessPopup:ke,openFailedPopup:fe}),Object(E.jsx)(B,{setOpen:le,value:ee,account:t,balance:J,openSuccessPopup:ke,openFailedPopup:fe,style:{display:"none"}})]}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(B,{setOpen:le,value:ee,account:t,balance:J,openSuccessPopup:ke,openFailedPopup:fe}),Object(E.jsx)(P,{style:{display:"none"},setOpen:le,value:ee,account:t,balance:J,setAmount:te,openSuccessPopup:ke,openFailedPopup:fe})]})]})},"1"),Object(E.jsx)(f.a,{value:String(2),children:Object(E.jsx)(c.a,{children:e.lockUnstake?Object(E.jsxs)(o.a,{variant:"h6",children:["'Unstake window will open for 1 hour from ",we,".",ve," at ",Se,":",Ie,":",$e]}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(o.a,{variant:"h4",children:"Unstake $JUICE"}),Object(E.jsx)(D.a,{variant:"filled",color:"primary",style:{marginBottom:"1rem",width:"min-content",marginTop:"0.2rem"},children:"1 $JUICE = 1 Share"}),Object(E.jsx)(i.a,{sx:{mt:2,mb:2,display:"flex"},children:Object(E.jsx)(l.a,{style:{width:"100%",margin:"auto"},label:"Unstake Amount",InputProps:{endAdornment:Object(E.jsx)(u.a,{position:"end",children:Object(E.jsx)(b.a,{variant:"text",onClick:function(e){ce(W)},children:"MAX"})})},type:"number",value:se,onChange:function(e){return function(e){ce(e)}(e.target.value)}})}),Object(E.jsx)(d.a,{label:"Staked: ".concat(Object(T.a)(W)," $JUICE"),style:{width:"min-content"}}),Object(E.jsx)(C,{setOpen:le,value:se,account:t,balance:W,setAmount:ce,openSuccessPopup:ke,openFailedPopup:fe})]})})},"2")]})]}),Object(E.jsxs)(j.a,{open:oe,onClose:ue,children:[Object(E.jsx)(p.a,{children:"Wallet Not Connected"}),Object(E.jsx)(m.a,{children:Object(E.jsx)(h.a,{id:"alert-dialog-description",children:"Connect a wallet first to stake/unstake!"})}),Object(E.jsx)(O.a,{children:Object(E.jsx)(b.a,{onClick:ue,autoFocus:!0,children:"Ok"})})]}),Object(E.jsxs)(j.a,{open:je,onClose:xe,children:[Object(E.jsx)(p.a,{children:Oe.title}),Object(E.jsxs)(m.a,{children:[Object(E.jsx)("img",{alt:"",src:"/static/svg/".concat(Oe.icon),style:{width:"8rem",margin:"auto",marginTop:"2rem"}}),Object(E.jsx)(h.a,{id:"alert-dialog-description",style:{textAlign:"center",marginTop:"2rem",fontSize:"1.2rem"},children:Oe.message})]}),Object(E.jsx)(O.a,{children:Object(E.jsx)(b.a,{onClick:xe,autoFocus:!0,children:"Ok"})})]})]})}},886:function(e,t,n){"use strict";var a=n(15),s=n(0),c=n(825),r=n(2546),i=n(37),o=n(1);t.a=function(e){var t=Object(s.useState)(!0),n=Object(a.a)(t,2),l=n[0],u=n[1],b=Object(s.useState)(!0),d=Object(a.a)(b,2),j=d[0],p=d[1],m=Object(s.useState)("CLAIM"),h=Object(a.a)(m,2),O=h[0],g=h[1],x=Object(r.a)(i.C,"claim",{transactionName:"Claim Drop"}),f=x.state,k=x.send;Object(s.useEffect)((function(){Number(e.drop)>1e-5?(u(!1),p(!1)):(u(!0),p(!0))}),[e.drop]),Object(s.useEffect)((function(){"Exception"!==f.status&&"Fail"!==f.status||(j||u(!1),g("CLAIM"),e.openFailedPopup("Failed to claim BNB drops")),"None"===f.status&&(j||u(!1),g("CLAIM")),"Success"===f.status&&(g("CLAIM"),e.openSuccessPopup("Successfully claimed BNB drops")),"Mining"===f.status&&(u(!0),p(!1),g("PENDING..."))}),[f]);return Object(o.jsx)(c.a,{variant:"contained",color:"primary",style:{width:"50%",marginTop:"0.5rem",maxWidth:"300px"},disabled:l,onClick:function(){k()},children:O})}}}]);
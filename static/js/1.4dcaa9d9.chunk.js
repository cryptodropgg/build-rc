(this.webpackJsonpcryptodrop=this.webpackJsonpcryptodrop||[]).push([[1],{2859:function(e,t,n){"use strict";n.d(t,"a",(function(){return L}));var a=n(2),r=n(19),i=n(9),o=n(12),c=n(301),s=n(0),u=n(973),d=n(699),l=n(401),v=(n(132),n(257)),p=n(78),f=n(824),b=["function nonce() view returns (uint256)","event ExecutionSuccess(bytes32 txHash, uint256 payment)"],m=function(e){return{to:e.to,value:e.value||0,data:e.data||"0x",operation:e.operation||0,safeTxGas:e.safeTxGas||0,baseGas:e.baseGas||0,gasPrice:e.gasPrice||0,gasToken:e.gasToken||p.constants.AddressZero,refundReceiver:e.refundReceiver||p.constants.AddressZero,nonce:e.nonce||0}},g={SafeTx:[{type:"address",name:"to"},{type:"uint256",name:"value"},{type:"bytes",name:"data"},{type:"uint8",name:"operation"},{type:"uint256",name:"safeTxGas"},{type:"uint256",name:"baseGas"},{type:"uint256",name:"gasPrice"},{type:"address",name:"gasToken"},{type:"address",name:"refundReceiver"},{type:"uint256",name:"nonce"}]},h=function(e,t,n){return t=Object.assign(Object.assign({},t),{safeTxGas:0}),p.utils._TypedDataEncoder.hash({verifyingContract:e.address,chainId:n},g,t)},j=function(){var e=Object(i.a)(Object(a.a)().mark((function e(t,n){var r,i,o,c,s,u;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://safe-transaction.".concat(null===(r=Object(f.a)(t))||void 0===r?void 0:r.chainName,".gnosis.io/api/v1/safes/").concat(n,"/all-transactions?limit=1&executed=false&queued=true"));case 3:if((c=e.sent).ok){e.next=6;break}return e.abrupt("return",null);case 6:return e.next=8,c.json();case 8:if(s=e.sent,u=null===(o=null===(i=null===s||void 0===s?void 0:s.results)||void 0===i?void 0:i[0])||void 0===o?void 0:o.nonce){e.next=12;break}return e.abrupt("return",null);case 12:return e.abrupt("return",u);case 15:return e.prev=15,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",void 0);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(i.a)(Object(a.a)().mark((function e(t,n,r,o){var c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=h(n,o,r),e.abrupt("return",new Promise((function(e,r){t.catch((function(e){"Transaction was rejected"===(null===e||void 0===e?void 0:e.message)&&r(e)}));var s=function(){var t=Object(i.a)(Object(a.a)().mark((function t(r,i,u){var d,l,v,p,f;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r!==c){t.next=11;break}return n.removeListener("ExecutionSuccess",s),t.next=4,u.getTransaction();case 4:return d=t.sent,t.next=7,u.getTransactionReceipt();case 7:l=t.sent,e({transaction:d,receipt:l,rejected:!1}),t.next=23;break;case 11:return t.next=13,n.nonce();case 13:if(v=t.sent,!(Number(v)>Number(o.nonce))){t.next=23;break}return n.removeListener("ExecutionSuccess",s),t.next=18,u.getTransaction();case 18:return p=t.sent,t.next=21,u.getTransactionReceipt();case 21:f=t.sent,e({transaction:p,receipt:f,rejected:!0});case 23:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}();n.on("ExecutionSuccess",s)})));case 2:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),O=n(84),N=function(e,t){var n=Object(s.useRef)(void 0);return Object(s.useEffect)((function(){return function(){var e;null===(e=n.current)||void 0===e||e.removeAllListeners()}}),[]),{get:function(){if(e&&t)return n.current&&n.current.removeAllListeners(),n.current=new O.b(e,b,t),n.current}}};function w(e,t,n,a){return y.apply(this,arguments)}function y(){return(y=Object(i.a)(Object(a.a)().mark((function e(t,n,i,o){var c,s,u;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(c=t.estimateGas)[n].apply(c,Object(r.a)(i));case 3:return s=e.sent,u=null===s||void 0===s?void 0:s.mul(o+100).div(100),e.abrupt("return",u);case 8:return e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",void 0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function k(e,t){return T.apply(this,arguments)}function T(){return(T=Object(i.a)(Object(a.a)().mark((function e(t,n){var r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&n){e.next=2;break}return e.abrupt("return",!0);case 2:return e.next=4,t.getCode(n);case 4:return r=e.sent,e.abrupt("return","0x"===r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(e){return(null===e||void 0===e?void 0:e.code)===v.ErrorCode.TRANSACTION_REPLACED&&(null===e||void 0===e?void 0:e.replacement)&&("repriced"===(null===e||void 0===e?void 0:e.reason)||!1===(null===e||void 0===e?void 0:e.cancelled))};var I=n(226),C=n(92),E=function(e,t,n){var a=t&&"privateKey"in t&&t.privateKey,r=t&&"mnemonicPhrase"in t&&t.mnemonicPhrase,i=t&&"json"in t&&t.json,o=t&&"password"in t&&t.password,c=a&&e&&new C.a.Wallet(a,e),s=r&&e&&C.a.Wallet.fromMnemonic(r).connect(e),u=i&&o&&e&&C.a.Wallet.fromEncryptedJsonSync(i,o).connect(e),d=t&&"signer"in t&&t.signer;return c||s||u||d||(n&&"getSigner"in n?n.getSigner():void 0)};function P(e,t,n){if(e.signer)return e;if(t&&"signer"in t)return e.connect(t.signer);if(n)return e.connect(n);throw new TypeError("No signer available in contract, options or library")}function L(e,t,n){var v,p,f,b=Object(u.a)(),g=b.library,h=b.chainId,O=n&&"chainId"in n&&(null===n||void 0===n?void 0:n.chainId)||h,y=function(e,t){var n=Object(s.useState)({status:"None",transactionName:null===t||void 0===t?void 0:t.transactionName}),r=Object(o.a)(n,2),c=r[0],v=r[1],p=Object(d.b)(),f=p.addTransaction,b=p.updateTransaction,g=Object(l.b)().addNotification,h=Object(u.a)(),O=h.library,w=h.account,y=N(w,O),T=Object(s.useCallback)((function(){v((function(e){return{status:"None",transactionName:e.transactionName}}))}),[v]),I=Object(s.useCallback)(function(){var n=Object(i.a)(Object(a.a)().mark((function n(r){var o,c,s,u,d,l,p,h,N,T,I,C,E,P,L,A,G,R,D,F,M,H,_,J,W,q,B,K,Z,z,Q,U,V,X=arguments;return Object(a.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=(X.length>1&&void 0!==X[1]?X[1]:{}).safeTransaction,c=X.length>2?X[2]:void 0,J=function(){var n=Object(i.a)(Object(a.a)().mark((function n(r){var i;return Object(a.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:return v((function(e){return{transactionName:e.transactionName,transaction:r,status:"Mining"}})),f({transaction:Object.assign(Object.assign({},r),{chainId:e}),submittedAt:Date.now(),transactionName:null===t||void 0===t?void 0:t.transactionName}),n.next=6,r.wait();case 6:return i=n.sent,b({transaction:Object.assign(Object.assign({},r),{chainId:e}),receipt:i,transactionName:null===t||void 0===t?void 0:t.transactionName}),v({receipt:i,transaction:r,status:"Success",chainId:e,transactionName:null===t||void 0===t?void 0:t.transactionName}),n.abrupt("return",{transaction:r,receipt:i});case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),W=function(){var n=Object(i.a)(Object(a.a)().mark((function n(r){var i,o,c,s,u,d,l,p,b=arguments;return Object(a.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i=(b.length>1&&void 0!==b[1]?b[1]:{}).safeTransaction,e&&O&&w){n.next=3;break}return n.abrupt("return");case 3:if(v({status:"CollectingSignaturePool",chainId:e,transactionName:null===t||void 0===t?void 0:t.transactionName}),c=y.get()){n.next=7;break}throw new Error("Couldn't create Gnosis Safe contract instance");case 7:return n.next=9,j(e,w);case 9:if(s=n.sent,n.t0=m,n.t1=null!==(o=null===i||void 0===i?void 0:i.to)&&void 0!==o?o:"",n.t2=null===i||void 0===i?void 0:i.value,n.t3=null===i||void 0===i?void 0:i.data,n.t4=null===i||void 0===i?void 0:i.safeTxGas,!s){n.next=19;break}n.t5=s+1,n.next=22;break;case 19:return n.next=21,c.nonce();case 21:n.t5=n.sent;case 22:return n.t6=n.t5,n.t7={to:n.t1,value:n.t2,data:n.t3,safeTxGas:n.t4,nonce:n.t6},u=(0,n.t0)(n.t7),n.next=27,x(r,c,e,u);case 27:return d=n.sent,l=d.transaction,p=d.receipt,d.rejected?(f({transaction:Object.assign(Object.assign({},l),{chainId:e}),receipt:p,submittedAt:Date.now(),transactionName:null===t||void 0===t?void 0:t.transactionName}),v({status:"Fail",transaction:l,receipt:p,errorMessage:"On-chain rejection created",chainId:e,transactionName:null===t||void 0===t?void 0:t.transactionName})):(f({transaction:Object.assign(Object.assign({},l),{chainId:e}),receipt:p,submittedAt:Date.now(),transactionName:null===t||void 0===t?void 0:t.transactionName}),v({receipt:p,transaction:l,status:"Success",chainId:e,transactionName:null===t||void 0===t?void 0:t.transactionName})),n.abrupt("return",{transaction:l,receipt:p});case 33:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),e){n.next=6;break}return n.abrupt("return");case 6:return q=void 0,n.prev=7,v({status:"PendingSignature",chainId:e,transactionName:null===t||void 0===t?void 0:t.transactionName}),(null===t||void 0===t?void 0:t.enablePendingSignatureNotification)&&g({notification:{type:"transactionPendingSignature",submittedAt:Date.now(),transactionName:null===t||void 0===t?void 0:t.transactionName,transactionRequest:c},chainId:e}),n.next=12,k(O,w);case 12:if(n.sent){n.next=21;break}return n.next=16,W(r,{safeTransaction:o});case 16:return B=n.sent,q=null===B||void 0===B?void 0:B.transaction,n.abrupt("return",null===B||void 0===B?void 0:B.receipt);case 21:return n.next=23,r;case 23:return q=n.sent,n.next=26,J(q);case 26:return K=n.sent,q=null===K||void 0===K?void 0:K.transaction,n.abrupt("return",null===K||void 0===K?void 0:K.receipt);case 29:n.next=39;break;case 31:return n.prev=31,n.t0=n.catch(7),Z=parseInt(null!==(N=null!==(p=null!==(d=null===(u=null===(s=n.t0.error)||void 0===s?void 0:s.data)||void 0===u?void 0:u.code)&&void 0!==d?d:null===(l=n.t0.error)||void 0===l?void 0:l.code)&&void 0!==p?p:null===(h=n.t0.data)||void 0===h?void 0:h.code)&&void 0!==N?N:n.t0.code),z=isNaN(Z)?void 0:Z,Q=null!==(E=null===(C=null===(I=null===(T=null===n.t0||void 0===n.t0?void 0:n.t0.error)||void 0===T?void 0:T.data)||void 0===I?void 0:I.originalError)||void 0===C?void 0:C.data)&&void 0!==E?E:null===(P=null===n.t0||void 0===n.t0?void 0:n.t0.error)||void 0===P?void 0:P.data,U=null!==(H=null!==(F=null!==(D=null!==(G=null===(A=null===(L=n.t0.error)||void 0===L?void 0:L.data)||void 0===A?void 0:A.message)&&void 0!==G?G:null===(R=n.t0.error)||void 0===R?void 0:R.message)&&void 0!==D?D:n.t0.reason)&&void 0!==F?F:null===(M=n.t0.data)||void 0===M?void 0:M.message)&&void 0!==H?H:n.t0.message,q?S(n.t0)?(V=0===n.t0.receipt.status?"Fail":"Success",g({notification:{type:"Fail"===V?"transactionFailed":"transactionSucceed",submittedAt:Date.now(),transaction:n.t0.replacement,receipt:n.t0.receipt,transactionName:null===(_=n.t0.replacement)||void 0===_?void 0:_.transactionName,originalTransaction:q},chainId:e}),v((function(t){var a;return Object.assign(Object.assign({},t),{status:V,transaction:n.t0.replacement,originalTransaction:q,receipt:n.t0.receipt,transactionName:null===(a=n.t0.replacement)||void 0===a?void 0:a.transactionName,errorMessage:U,errorCode:z,errorHash:Q,chainId:e})}))):v({status:"Fail",transaction:q,receipt:n.t0.receipt,errorMessage:U,errorCode:z,errorHash:Q,chainId:e,transactionName:null===t||void 0===t?void 0:t.transactionName}):v({status:"Exception",errorMessage:U,errorCode:z,errorHash:Q,chainId:e,transactionName:null===t||void 0===t?void 0:t.transactionName}),n.abrupt("return",void 0);case 39:case"end":return n.stop()}}),n,null,[[7,31]])})));return function(e){return n.apply(this,arguments)}}(),[e,g,null===t||void 0===t?void 0:t.transactionName,O,w]);return{promiseTransaction:I,state:c,resetState:T}}(O,n),T=y.promiseTransaction,C=y.state,L=y.resetState,A=Object(s.useState)(void 0),G=Object(o.a)(A,2),R=G[0],D=G[1],F=Object(c.a)(),M=null!==(f=null!==(p=null!==(v=null===n||void 0===n?void 0:n.gasLimitBufferPercentage)&&void 0!==v?v:null===n||void 0===n?void 0:n.bufferGasLimitPercentage)&&void 0!==p?p:null===F||void 0===F?void 0:F.gasLimitBufferPercentage)&&void 0!==f?f:0,H=Object(I.c)(),_=O&&H[O],J=Object(s.useCallback)(Object(i.a)(Object(a.a)().mark((function i(){var o,c,s,u,d,l,v,p,f,b,m,h,j,x,O=arguments;return Object(a.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!e){a.next=33;break}for(c=e.interface.getFunction(t).inputs.length,s=O.length,u=new Array(s),d=0;d<s;d++)u[d]=O[d];if(l=u.length>c,u.length===c||u.length===c+1){a.next=6;break}throw new Error('Invalid number of arguments for function "'.concat(t,'".'));case 6:if(v=E(_,n,g),p=P(e,n,v),"object"!==typeof(f=l?u[u.length-1]:void 0)||!Object.prototype.hasOwnProperty.call(f,"gasLimit")){a.next=13;break}a.t0=f.gasLimit,a.next=25;break;case 13:return a.next=15,w(p,t,u,M);case 15:if(a.t2=o=a.sent,a.t1=null!==a.t2,!a.t1){a.next=19;break}a.t1=void 0!==o;case 19:if(!a.t1){a.next=23;break}a.t3=o,a.next=24;break;case 23:a.t3=null;case 24:a.t0=a.t3;case 25:return b=a.t0,m=Object.assign({gasLimit:b},f),h=l?u.slice(0,u.length-1):u,a.next=30,T(p[t].apply(p,Object(r.a)(h).concat([m])),{safeTransaction:{to:e.address,value:null===f||void 0===f?void 0:f.value,data:e.interface.encodeFunctionData(t,h),safeTxGas:null!==b&&void 0!==b?b:void 0}});case 30:return(null===(j=a.sent)||void 0===j?void 0:j.logs)&&(x=j.logs.reduce((function(t,n){try{return n.address.toLowerCase()===e.address.toLowerCase()?[].concat(Object(r.a)(t),[e.interface.parseLog(n)]):t}catch(a){return t}}),[]),D(x)),a.abrupt("return",j);case 33:case"end":return a.stop()}}),i)}))),[e,t,n,_,g,M,T]);return{send:J,state:C,events:R,resetState:L}}},92:function(e,t,n){"use strict";var a=n(78);n.d(t,"a",(function(){return a}));try{var r=window;null==r._ethers&&(r._ethers=a)}catch(i){}}}]);
//# sourceMappingURL=1.4dcaa9d9.chunk.js.map
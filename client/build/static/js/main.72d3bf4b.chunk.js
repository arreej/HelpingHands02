(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/menu.b3f49afd.svg"},34:function(e,t,a){e.exports=a.p+"static/media/close.2c5552a1.svg"},41:function(e,t,a){e.exports=a(75)},46:function(e,t,a){},65:function(e,t,a){e.exports=a.p+"static/media/cart.8bf1af37.svg"},71:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),l=a.n(c),o=(a(46),a(5)),i=a(2),u=a.n(i),s=a(4),m=a(1),p=a(3),d=a.n(p);var b=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),l=Object(m.a)(c,2),o=l[0],i=l[1],p=Object(n.useState)(""),b=Object(m.a)(p,2),E=b[0],f=b[1],g=Object(n.useState)(""),h=Object(m.a)(g,2),v=h[0],O=h[1],j=Object(n.useState)(""),x=Object(m.a)(j,2),y=x[0],k=x[1],w=Object(n.useState)(1),C=Object(m.a)(w,2),_=C[0],A=C[1],N=Object(n.useState)(0),S=Object(m.a)(N,2),P=S[0],I=S[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/api/campaigns?limit=".concat(9*_,"&").concat(E,"&").concat(v,"&title[regex]=").concat(y));case 2:t=e.sent,r(t.data.campaigns),I(t.data.result);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o,E,v,y,_]),{campaigns:[a,r],callback:[o,i],category:[E,f],sort:[v,O],search:[y,k],page:[_,A],result:[P,I]}},E=a(6),f=a(14);var g=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(!1),o=Object(m.a)(l,2),i=o[0],p=o[1],b=Object(n.useState)(!1),g=Object(m.a)(b,2),h=g[0],v=g[1],O=Object(n.useState)([]),j=Object(m.a)(O,2),x=j[0],y=j[1],k=Object(n.useState)([]),w=Object(m.a)(k,2),C=w[0],_=w[1];Object(n.useEffect)((function(){e&&function(){var t=Object(s.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get("/user/infor",{headers:{Authorization:e}});case 3:a=t.sent,c(!0),1===a.data.role?p(!0):p(!1),y(a.data.cart),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),alert(t.t0.response.data.msg);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}()()}),[e]);var A=function(){var t=Object(s.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",alert("Please login to continue donating"));case 2:if(!x.every((function(e){return e._id!==a._id}))){t.next=9;break}return y([].concat(Object(f.a)(x),[Object(E.a)(Object(E.a)({},a),{},{quantity:1})])),t.next=7,d.a.patch("/user/addcart",{cart:[].concat(Object(f.a)(x),[Object(E.a)(Object(E.a)({},a),{},{quantity:1})])},{headers:{Authorization:e}});case 7:t.next=10;break;case 9:alert("This campaign has been added to cart.");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{isLogged:[r,c],isAdmin:[i,p],isDonee:[h,v],cart:[x,y],addCart:A,dashboard:[C,_]}};var h=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),l=Object(m.a)(c,2),o=l[0],i=l[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/api/category");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),{categories:[a,r],callback:[o,i]}},v=Object(n.createContext)(),O=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(m.a)(a,2),l=c[0],o=c[1];Object(n.useEffect)((function(){if(localStorage.getItem("firstLogin")){var e=function(){var t=Object(s.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("/user/refresh_token");case 2:a=t.sent,o(a.data.accesstoken),setTimeout((function(){e()}),6e5);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e()}}),[]);var i={token:[l,o],campaignsAPI:b(),userAPI:g(l),categoriesAPI:h()};return r.a.createElement(v.Provider,{value:i},t)},j=a(33),x=a.n(j),y=a(34),k=a.n(y);a(65);var w=function(){var e=Object(n.useContext)(v),t=Object(m.a)(e.userAPI.isLogged,1)[0],a=Object(m.a)(e.userAPI.isAdmin,1)[0],c=(Object(m.a)(e.userAPI.isDonee,1)[0],Object(m.a)(e.userAPI.cart,1)[0],Object(n.useState)(!1)),l=Object(m.a)(c,2),i=l[0],p=l[1],b=function(){var e=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/user/logout");case 2:localStorage.removeItem("firstLogin"),window.location.href="/";case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E={left:i?0:"-100%"};return r.a.createElement("header",null,r.a.createElement("div",{className:"menu",onClick:function(){return p(!i)}},r.a.createElement("img",{src:x.a,alt:"",width:"30"})),r.a.createElement("div",{className:"logo"},r.a.createElement("h1",null,r.a.createElement(o.b,{to:"/"},a?"Admin":"Helping Hands"))),r.a.createElement("ul",{style:E},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},a?"Campaigns":"BROWSE")),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/create_campaign"},"Create Campaign")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/category"},"Categories"))),t?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/dashboard"},"Dashboard")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/",onClick:b},"Logout"))):r.a.createElement("li",null,r.a.createElement(o.b,{to:"/login"},"Login / Register")),r.a.createElement("li",{onClick:function(){return p(!i)}},r.a.createElement("img",{src:k.a,alt:"",width:"30",className:"menu"}))))},C=a(7);var _=function(e){var t=e.campaign,a=e.deleteCampaign,c=Object(n.useContext)(v),l=Object(m.a)(c.userAPI.isAdmin,1)[0],i=c.userAPI.addCart;return r.a.createElement("div",{className:"row_btn"},l?r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{id:"btn_buy",to:"#!",onClick:function(){return a(t._id,t.images.public_id)}},"Delete"),r.a.createElement(o.b,{id:"btn_view",to:"/edit_campaign/".concat(t._id)},"Edit")):r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{id:"btn_buy",to:"#!",onClick:function(){return i(t)}},"Donate"),r.a.createElement(o.b,{id:"btn_view",to:"/detail/".concat(t._id)},"View")))};var A=function(e){var t=e.campaign,a=e.isAdmin,n=e.deleteCampaign,c=e.handleCheck,l=e.isDonee;return r.a.createElement("div",{className:"campaign_card"},l||a&&r.a.createElement("input",{type:"checkbox",checked:t.checked,onChange:function(){return c(t._id)}}),r.a.createElement("img",{src:t.images.url,alt:""}),r.a.createElement("div",{className:"campaign_box"},r.a.createElement("h2",{title:t.title},t.title),r.a.createElement("span",null,"Rs.",t.amount_req),r.a.createElement("p",null,t.description)),r.a.createElement(_,{campaign:t,deleteCampaign:n}))};a(71);var N=function(){return r.a.createElement("div",{className:"load-page"},r.a.createElement("div",{className:"loader"}))};var S=function(){var e=Object(n.useContext)(v),t=Object(m.a)(e.categoriesAPI.categories,1)[0],a=Object(m.a)(e.campaignsAPI.category,2),c=a[0],l=a[1],o=Object(m.a)(e.campaignsAPI.sort,2),i=o[0],u=o[1],s=Object(m.a)(e.campaignsAPI.search,2),p=s[0],d=s[1];return r.a.createElement("div",{className:"filter_menu"},r.a.createElement("div",{className:"row"},r.a.createElement("span",null,"Filters: "),r.a.createElement("select",{name:"category",value:c,onChange:function(e){l(e.target.value),d("")}},r.a.createElement("option",{value:""},"All Campaigns"),t.map((function(e){return r.a.createElement("option",{value:"category="+e._id,key:e._id},e.name)})))),r.a.createElement("input",{type:"text",value:p,placeholder:"Enter your search!",onChange:function(e){return d(e.target.value.toLowerCase())}}),r.a.createElement("div",{className:"row sort"},r.a.createElement("span",null,"Sort By: "),r.a.createElement("select",{value:i,onChange:function(e){return u(e.target.value)}},r.a.createElement("option",{value:""},"Newest"),r.a.createElement("option",{value:"sort=oldest"},"Oldest"),r.a.createElement("option",{value:"sort=-sold"},"Best sales"),r.a.createElement("option",{value:"sort=-amount_req"},"Amount: Hight-Low"),r.a.createElement("option",{value:"sort=amount_req"},"Amount: Low-Hight"))))};var P=function(){var e=Object(n.useContext)(v),t=Object(m.a)(e.campaignsAPI.page,2),a=t[0],c=t[1],l=Object(m.a)(e.campaignsAPI.result,1)[0];return r.a.createElement("div",{className:"load_more"},l<9*a?"":r.a.createElement("button",{onClick:function(){return c(a+1)}},"Load more"))};var I=function(){var e=Object(n.useContext)(v),t=Object(m.a)(e.campaignsAPI.campaigns,2),a=t[0],c=t[1],l=Object(m.a)(e.userAPI.isAdmin,1)[0],o=Object(m.a)(e.token,1)[0],i=Object(m.a)(e.campaignsAPI.callback,2),p=i[0],b=i[1],E=Object(n.useState)(!1),g=Object(m.a)(E,2),h=(g[0],g[1]),O=Object(n.useState)(!1),j=Object(m.a)(O,2),x=j[0],y=j[1],k=function(e){a.forEach((function(t){t._id===e&&(t.checked=!t.checked)})),c(Object(f.a)(a))},w=function(){var e=Object(s.a)(u.a.mark((function e(t,a){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),n=d.a.post("/api/destroy",{public_id:a},{headers:{Authorization:o}}),r=d.a.delete("/api/campaigns/".concat(t),{headers:{Authorization:o}}),e.next=6,n;case 6:return e.next=8,r;case 8:b(!p),h(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,a){return e.apply(this,arguments)}}();return 0===a.length?r.a.createElement("h2",{style:{textAlign:"center",fontSize:"2re"}},"No Campaigns Found"):r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),l&&r.a.createElement("div",{className:"delete-all"},r.a.createElement("span",null,"Select all"),r.a.createElement("input",{type:"checkbox",checked:x,onChange:function(){a.forEach((function(e){e.checked=!x})),c(Object(f.a)(a)),y(!x)}}),r.a.createElement("button",{onClick:function(){a.forEach((function(e){e.checked&&w(e._id,e.images.public_id)}))}},"Delete ALL")),r.a.createElement("div",{className:"campaigns"},a.map((function(e){return r.a.createElement(A,{key:e._id,campaign:e,isAdmin:l,deleteCampaign:w,handleCheck:k})}))),r.a.createElement(P,null),0===a.length&&r.a.createElement(N,null))};var q=function(){var e=Object(C.g)(),t=Object(n.useContext)(v),a=Object(m.a)(t.campaignsAPI.campaigns,1)[0],c=t.userAPI.addCart,l=Object(n.useState)([]),i=Object(m.a)(l,2),u=i[0],s=i[1];return Object(n.useEffect)((function(){e.id&&a.forEach((function(t){t._id===e.id&&s(t)}))}),[e.id,a]),0===u.length?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"detail"},r.a.createElement("img",{src:u.images.url,alt:""}),r.a.createElement("div",{className:"box-detail"},r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,u.title),r.a.createElement("h6",null,"#id: ",u.campaign_id)),r.a.createElement("span",null,"Rs. ",u.amount_req),r.a.createElement("p",null,u.phone_number),r.a.createElement("p",null,u.description),r.a.createElement("p",null,u.content),r.a.createElement("p",null,"Donations Received: ",u.donated),r.a.createElement(o.b,{to:"/cart",className:"cart",onClick:function(){return c(u)}},"Donate Now"))),r.a.createElement("div",null,r.a.createElement("h2",null,"Related campaigns"),r.a.createElement("div",{className:"campaigns"},a.map((function(e){return e.category===u.category?r.a.createElement(A,{key:e._id,campaign:e}):null})))))},D=a(13);var L=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(m.a)(e,2),a=t[0],c=t[1],l=function(e){var t=e.target,n=t.name,r=t.value;c(Object(E.a)(Object(E.a)({},a),{},Object(D.a)({},n,r)))},i=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d.a.post("/user/login",Object(E.a)({},a));case 4:localStorage.setItem("firstLogin",!0),window.location.href="/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"donor-login-page"},r.a.createElement("form",{onSubmit:i},r.a.createElement("h2",null,"Login"),r.a.createElement("input",{type:"email",name:"email",required:!0,placeholder:"Email",value:a.email,onChange:l}),r.a.createElement("input",{type:"password",name:"password",required:!0,autoComplete:"on",placeholder:"Password",value:a.password,onChange:l}),r.a.createElement("div",{className:"row"},r.a.createElement("button",{type:"submit"},"Login"),r.a.createElement(o.b,{to:"/donorRegister"},"Register"))))};var R=function(){var e=Object(n.useState)({name:"",email:"",password:""}),t=Object(m.a)(e,2),a=t[0],c=t[1],l=function(e){var t=e.target,n=t.name,r=t.value;c(Object(E.a)(Object(E.a)({},a),{},Object(D.a)({},n,r)))},i=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d.a.post("/user/donorRegister",Object(E.a)({},a));case 4:localStorage.setItem("firstLogin",!0),window.location.href="/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"donor-login-page"},r.a.createElement("form",{onSubmit:i},r.a.createElement("h2",null,"Register"),r.a.createElement("input",{type:"text",name:"name",required:!0,placeholder:"Name",value:a.name,onChange:l}),r.a.createElement("input",{type:"email",name:"email",required:!0,placeholder:"Email",value:a.email,onChange:l}),r.a.createElement("input",{type:"password",name:"password",required:!0,autoComplete:"on",placeholder:"Password",value:a.password,onChange:l}),r.a.createElement("div",{className:"row"},r.a.createElement("button",{type:"submit"},"Register"),r.a.createElement(o.b,{to:"/login"},"Login"))))};var F=function(){var e=Object(n.useState)({name:"",email:"",password:"",address:"",phone:""}),t=Object(m.a)(e,2),a=t[0],c=t[1],l=function(e){var t=e.target,n=t.name,r=t.value;c(Object(E.a)(Object(E.a)({},a),{},Object(D.a)({},n,r)))},i=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d.a.post("/user/doneeRegister",Object(E.a)({},a));case 4:localStorage.setItem("firstLogin",!0),window.location.href="/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"donee-login-page"},r.a.createElement("form",{onSubmit:i},r.a.createElement("h2",null,"Register"),r.a.createElement("input",{type:"text",name:"name",required:!0,placeholder:"Name",value:a.name,onChange:l}),r.a.createElement("input",{type:"email",name:"email",required:!0,placeholder:"Email",value:a.email,onChange:l}),r.a.createElement("input",{type:"password",name:"password",required:!0,autoComplete:"on",placeholder:"Password",value:a.password,onChange:l}),r.a.createElement("input",{type:"address",name:"address",required:!0,autoComplete:"on",placeholder:"Address",value:a.address,onChange:l}),r.a.createElement("input",{type:"phone",name:"phone",required:!0,autoComplete:"on",placeholder:"Phone Number",value:a.phone,onChange:l,maxLength:"11"}),r.a.createElement("div",{className:"row"},r.a.createElement("button",{type:"submit"},"Register"),r.a.createElement(o.b,{to:"/login"},"Login"))))};var z=function(){var e=Object(n.useContext)(v),t=Object(m.a)(e.userAPI.dashboard,2),a=t[0],c=t[1],l=Object(m.a)(e.userAPI.isAdmin,1)[0],i=Object(m.a)(e.token,1)[0];return Object(n.useEffect)((function(){i&&function(){var e=Object(s.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l){e.next=7;break}return e.next=3,d.a.get("/api/payment",{headers:{Authorization:i}});case 3:t=e.sent,c(t.data),e.next=11;break;case 7:return e.next=9,d.a.get("/user/dashboard",{headers:{Authorization:i}});case 9:a=e.sent,c(a.data);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[i,l,c]),r.a.createElement("div",{className:"dashboard-page"},r.a.createElement("h2",null,"Dashboard"),r.a.createElement("h4",null,"You have ",a.length," donations"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Payment ID"),r.a.createElement("th",null,"Date of Donation"))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.paymentID),r.a.createElement("td",null,new Date(e.createdAt).toLocaleDateString()),r.a.createElement("td",null,r.a.createElement(o.b,{to:"/dashboard/".concat(e._id)},"View")))})))))};var T=function(){var e=Object(n.useContext)(v),t=Object(m.a)(e.userAPI.dashboard,1)[0],a=Object(n.useState)([]),c=Object(m.a)(a,2),l=c[0],o=c[1],i=Object(C.g)();return Object(n.useEffect)((function(){i.id&&t.forEach((function(e){e._id===i.id&&o(e)}))}),[i.id,t]),0===l.length?null:r.a.createElement("div",{className:"dashboard-page"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Address"),r.a.createElement("th",null,"Postal Code"),r.a.createElement("th",null,"Country Code"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,l.address.recipient_name),r.a.createElement("td",null,l.address.line1+" - "+l.address.city),r.a.createElement("td",null,l.address.postal_code),r.a.createElement("td",null,l.address.country_code)))),r.a.createElement("table",{style:{margin:"30px 0px"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Campaigns"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Amount Required"))),r.a.createElement("tbody",null,l.cart.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,r.a.createElement("img",{src:e.images.url,alt:""})),r.a.createElement("td",null,e.title),r.a.createElement("td",null,e.quantity),r.a.createElement("td",null,"$ ",e.amount_req*e.quantity))})))))},U=a(36),B=a(37),X=a(40),Y=a(39),H=a(38),J=a.n(H),W=function(e){Object(X.a)(a,e);var t=Object(Y.a)(a);function a(){return Object(U.a)(this,a),t.apply(this,arguments)}return Object(B.a)(a,[{key:"render",value:function(){var e=this,t=this.props.total;return r.a.createElement(J.a,{env:"sandbox",client:{sandbox:"YOUR-sandbox-APP-ID",production:"YOUR-PRODUCTION-APP-ID"},currency:"USD",total:t,onError:function(e){console.log("Error!",e)},onSuccess:function(t){console.log("The payment was succeeded!",t),e.props.tranSuccess(t)},onCancel:function(e){console.log("The payment was cancelled!",e)},style:{size:"small",color:"blue",shape:"rect",label:"checkout",tagline:!1},stripeKey:"pk_test_51McFcDD7yKPgI5WMU43O629G8qTASLpaWAXkAtD4B2JfukQjTInuHdTX7l1nUtULCd1RoLnjySmurjcbD6NXpbBX00Gpg5ggtr"})}}]),a}(r.a.Component);var G=function(){var e=Object(n.useContext)(v),t=Object(m.a)(e.userAPI.cart,2),a=t[0],c=t[1],l=Object(m.a)(e.token,1)[0],o=Object(n.useState)(0),i=Object(m.a)(o,2),p=i[0],b=i[1];Object(n.useEffect)((function(){!function(){var e=a.reduce((function(e,t){return e+t.amount_req*t.quantity}),0);b(e)}()}),[a]);var E=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.patch("/user/addcart",{cart:t},{headers:{Authorization:l}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return 0===a.length?r.a.createElement("h2",{style:{textAlign:"center",fontSize:"5rem"}},"Cart Empty"):r.a.createElement("div",null,a.map((function(e){return r.a.createElement("div",{className:"detail cart",key:e._id},r.a.createElement("img",{src:e.images.url,alt:""}),r.a.createElement("div",{className:"box-detail"},r.a.createElement("h2",null,e.title),r.a.createElement("h3",null,"Rs. ",e.amount_req*e.quantity),r.a.createElement("p",null,e.description),r.a.createElement("p",null,e.content),r.a.createElement("div",{className:"delete",onClick:function(){return t=e._id,void(window.confirm("Do you want to delete this campaign?")&&(a.forEach((function(e,n){e._id===t&&a.splice(n,1)})),c(Object(f.a)(a)),E(a)));var t}},"X")))})),r.a.createElement("div",{className:"total"},r.a.createElement("h3",null,"Required Total: ",p," Rs."),r.a.createElement(W,null)))};var K=function(){return r.a.createElement("div",null,"404 | Not Found")};var M=function(){var e=Object(n.useContext)(v),t=Object(m.a)(e.categoriesAPI.categories,1)[0],a=Object(n.useState)(""),c=Object(m.a)(a,2),l=c[0],o=c[1],i=Object(m.a)(e.token,1)[0],p=Object(m.a)(e.categoriesAPI.callback,2),b=p[0],E=p[1],f=Object(n.useState)(!1),g=Object(m.a)(f,2),h=g[0],O=g[1],j=Object(n.useState)(""),x=Object(m.a)(j,2),y=x[0],k=x[1],w=function(){var e=Object(s.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!h){e.next=9;break}return e.next=5,d.a.put("/api/category/".concat(y),{name:l},{headers:{Authorization:i}});case 5:a=e.sent,alert(a.data.msg),e.next=13;break;case 9:return e.next=11,d.a.post("/api/category",{name:l},{headers:{Authorization:i}});case 11:n=e.sent,alert(n.data.msg);case 13:O(!1),o(""),E(!b),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(s.a)(u.a.mark((function e(t,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(t),o(a),O(!0);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),_=function(){var e=Object(s.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.delete("/api/category/".concat(t),{headers:{Authorization:i}});case 3:a=e.sent,alert(a.data.msg),E(!b),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"categories"},r.a.createElement("form",{onSubmit:w},r.a.createElement("label",{htmlFor:"category"},"Category"),r.a.createElement("input",{type:"text",name:"category",value:l,required:!0,onChange:function(e){return o(e.target.value)}}),r.a.createElement("button",{type:"submit"},h?"Update":"Create")),r.a.createElement("div",{className:"col"},t.map((function(e){return r.a.createElement("div",{className:"row",key:e._id},r.a.createElement("p",null,e.name),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return C(e._id,e.name)}},"Edit"),r.a.createElement("button",{onClick:function(){return _(e._id)}},"Delete")))}))))},Q={campaign_id:"",title:"",amount_req:0,phone_number:"0",description:"Add a description for your campaign",content:"Enter all the details regarding your case",category:"",_id:""};var V=function(){var e=Object(n.useContext)(v),t=Object(n.useState)(Q),a=Object(m.a)(t,2),c=a[0],l=a[1],o=Object(m.a)(e.categoriesAPI.categories,1)[0],i=Object(n.useState)(!1),p=Object(m.a)(i,2),b=p[0],f=p[1],g=Object(n.useState)(!1),h=Object(m.a)(g,2),O=h[0],j=h[1],x=Object(m.a)(e.userAPI.isAdmin,1)[0],y=Object(m.a)(e.token,1)[0],k=Object(C.f)(),w=Object(C.g)(),_=Object(m.a)(e.campaignsAPI.campaigns,1)[0],A=Object(n.useState)(!1),S=Object(m.a)(A,2),P=S[0],I=S[1],q=Object(m.a)(e.campaignsAPI.callback,2),L=q[0],R=q[1];Object(n.useEffect)((function(){w.id?(I(!0),_.forEach((function(e){e._id===w.id&&(l(e),f(e.images))}))):(I(!1),l(Q),f(!1))}),[w.id,_]);var F=function(){var e=Object(s.a)(u.a.mark((function e(t){var a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,x){e.next=4;break}return e.abrupt("return",alert("You're not an admin"));case 4:if(a=t.target.files[0]){e.next=7;break}return e.abrupt("return",alert("File not exist."));case 7:if(!(a.size>1048576)){e.next=9;break}return e.abrupt("return",alert("Size too large!"));case 9:if("image/jpeg"===a.type||"image/png"===a.type){e.next=11;break}return e.abrupt("return",alert("File format is incorrect."));case 11:return(n=new FormData).append("file",a),j(!0),e.next=16,d.a.post("/api/upload",n,{headers:{"content-type":"multipart/form-data",Authorization:y}});case 16:r=e.sent,j(!1),f(r.data),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 24:case"end":return e.stop()}}),e,null,[[1,21]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,x){e.next=3;break}return e.abrupt("return",alert("You're not an admin"));case 3:return j(!0),e.next=6,d.a.post("/api/destroy",{public_id:b.public_id},{headers:{Authorization:y}});case 6:j(!1),f(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),T=function(e){var t=e.target,a=t.name,n=t.value;l(Object(E.a)(Object(E.a)({},c),{},Object(D.a)({},a,n)))},U=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,x){e.next=4;break}return e.abrupt("return",alert("You're not an admin"));case 4:if(b){e.next=6;break}return e.abrupt("return",alert("No Image Upload"));case 6:if(!P){e.next=11;break}return e.next=9,d.a.put("/api/campaigns/".concat(c._id),Object(E.a)(Object(E.a)({},c),{},{images:b}),{headers:{Authorization:y}});case 9:e.next=13;break;case 11:return e.next=13,d.a.post("/api/campaigns",Object(E.a)(Object(E.a)({},c),{},{images:b}),{headers:{Authorization:y}});case 13:R(!L),k.push("/"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}(),B={display:b?"block":"none"};return r.a.createElement("div",{className:"create_campaign"},r.a.createElement("div",{className:"upload"},r.a.createElement("input",{type:"file",name:"file",id:"file_up",onChange:F}),O?r.a.createElement("div",{id:"file_img"},r.a.createElement(N,null)):r.a.createElement("div",{id:"file_img",style:B},r.a.createElement("img",{src:b?b.url:"",alt:""}),r.a.createElement("span",{onClick:z},"X"))),r.a.createElement("form",{onSubmit:U},r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"campaign_id"},"Campaign ID"),r.a.createElement("input",{type:"text",name:"campaign_id",id:"campaign_id",required:!0,value:c.campaign_id,onChange:T,disabled:P})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",name:"title",id:"title",required:!0,value:c.title,onChange:T})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"amount_req"},"Amount Required"),r.a.createElement("input",{type:"number",name:"amount_req",id:"amount_req",required:!0,value:c.amount_req,onChange:T})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"phone"},"Phone Number"),r.a.createElement("input",{type:"tel",name:"phone_number",id:"phone_number",required:!0,value:c.phone_number,onChange:T})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{type:"text",name:"description",id:"description",required:!0,value:c.description,rows:"5",onChange:T})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"content"},"Content"),r.a.createElement("textarea",{type:"text",name:"content",id:"content",required:!0,value:c.content,rows:"7",onChange:T})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"categories"},"Categories: "),r.a.createElement("select",{name:"category",value:c.category,onChange:T},r.a.createElement("option",{value:""},"Please select a category"),o.map((function(e){return r.a.createElement("option",{value:e._id,key:e._id},e.name)})))),r.a.createElement("button",{type:"submit"},P?"Update":"Create")))};var $=function(){var e=Object(n.useContext)(v),t=Object(m.a)(e.userAPI.isLogged,1)[0],a=Object(m.a)(e.userAPI.isDonee,1)[0],c=Object(m.a)(e.userAPI.isAdmin,1)[0];return r.a.createElement(C.c,null,r.a.createElement(C.a,{path:"/",exact:!0,component:I}),r.a.createElement(C.a,{path:"/detail/:id",exact:!0,component:q}),r.a.createElement(C.a,{path:"/login",exact:!0,component:t?K:L}),r.a.createElement(C.a,{path:"/donorRegister",exact:!0,component:t?K:R}),r.a.createElement(C.a,{path:"/doneeRegister",exact:!0,component:t?a:F}),r.a.createElement(C.a,{path:"/category",exact:!0,component:c?M:K}),r.a.createElement(C.a,{path:"/create_campaign",exact:!0,component:c?V:K}),r.a.createElement(C.a,{path:"/create_campaign",exact:!0,component:a?V:K}),r.a.createElement(C.a,{path:"/edit_campaign/:id",exact:!0,component:c?V:K}),r.a.createElement(C.a,{path:"/dashboard",exact:!0,component:t?z:K}),r.a.createElement(C.a,{path:"/dashboard/:id",exact:!0,component:t?T:K}),r.a.createElement(C.a,{path:"/cart",exact:!0,component:G}),r.a.createElement(C.a,{path:"*",exact:!0,component:K}))};var Z=function(){return r.a.createElement(O,null,r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(w,null),r.a.createElement($,null))))};l.a.render(r.a.createElement(Z,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.72d3bf4b.chunk.js.map
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{149:function(e,t,a){},239:function(e,t,a){},243:function(e,t,a){"use strict";a.r(t);var n=a(17),c=a(0),s=a.n(c),o=a(25),r=a.n(o),i=a(134),l=a(24),d=a(101),j=a(245),h=(a(149),a(80)),u=a.n(h);a(111);function p(e){var t=Object(c.useState)([]),a=Object(d.a)(t,2),s=a[0],o=a[1],r=Object(c.useState)(0),i=Object(d.a)(r,2),l=i[0],h=i[1];return Object(c.useEffect)((function(){var e=localStorage.ishareToken;u.a.get("https://ishareapi.azurewebsites.net/Events/ListEventsById",{params:{id:e}}).then((function(e){var t=e.data;o(t)}))}),[]),Object(n.jsxs)("div",{className:"home",children:[Object(n.jsx)("h1",{children:"Event Report"}),Object(n.jsxs)("div",{className:"wrap",children:[Object(n.jsx)("p",{children:"Tips"}),Object(n.jsxs)("div",{className:"nav",children:[Object(n.jsx)("a",{href:"#",className:0===l?"checked":"",onClick:function(){return h(0)},children:"ITEM1"}),Object(n.jsx)("a",{href:"#",className:1===l?"checked":"",onClick:function(){return h(1)},children:"ITEM2"}),Object(n.jsx)("a",{href:"#",className:2===l?"checked":"",onClick:function(){return h(2)},children:"ITEM3"}),Object(n.jsx)("a",{href:"#",className:3===l?"checked":"",onClick:function(){return h(3)},children:"ITEM4"})]}),Object(n.jsx)(j.a,{bordered:!0,pagination:!1,dataSource:s,columns:[{title:"No.",dataIndex:"id"},{title:"Event Name",dataIndex:"eventName"}]})]})]})}var b=a(129),m=a(130),O=a(141),f=a(137),x=a(131),v=a(132),g=a.n(v),k=a(246),y=a(247),I=a(44),N=(a(239),function(e){Object(O.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).responseFacebook=function(e){n.validLogin(e.name,"0",n.props.history,"ThirdPartyLogin")},n.responseGoogle=function(e){var t=e.profileObj;n.validLogin(t.name,"0",n.props.history,"ThirdPartyLogin")},n.state={username:"",pwd:""},n}return Object(m.a)(a,[{key:"validLogin",value:function(e,t,a,n){u.a.post("https://ishareapi.azurewebsites.net/User/".concat(n),{Username:e,Password:t}).then((function(e){401===e.status?alert(e.data):200===e.status&&(alert("success"),console.log(e.data),localStorage.ishareToken=e.data.id,a.push({pathname:"home"}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{className:"loginform",children:Object(n.jsxs)("div",{className:"loginforminside",children:[Object(n.jsx)("h1",{children:"IShare"}),Object(n.jsxs)(k.a,{className:"",children:[Object(n.jsx)(k.a.Item,{children:Object(n.jsx)(y.a,{placeholder:"Enter your user name",type:"text",onChange:function(t){e.setState({username:t.target.value})}})}),Object(n.jsx)(k.a.Item,{children:Object(n.jsx)(y.a,{placeholder:"Enter your password",type:"password",onChange:function(t){e.setState({pwd:t.target.value})}})}),Object(n.jsx)(I.a,{type:"primary",onClick:function(){e.validLogin(e.state.username,e.state.pwd,e.props.history,"ValidateLogin"),alert()},children:"Login"})]}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{children:Object(n.jsx)(x.GoogleLogin,{clientId:"102184357281-t48ucmknrp1bej38l2mi8di15qd7e0c3.apps.googleusercontent.com",isSignedIn:!1,onSuccess:this.responseGoogle,onFailure:this.responseGoogle})}),Object(n.jsx)("div",{children:Object(n.jsx)(g.a,{appId:"429868371665377",autoLoad:!1,fields:"name,email,picture",callback:this.responseFacebook,cssClass:"my-facebook-button-class",icon:"fa-facebook"})})]})})}}]),a}(c.Component));function E(){return Object(n.jsx)(i.a,{children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",component:N}),Object(n.jsx)(l.a,{exact:!0,path:"/home",component:p})]})})}r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(E,{})}),document.getElementById("root"))}},[[243,1,2]]]);
//# sourceMappingURL=main.b00cf079.chunk.js.map
(window["webpackJsonptodolist-version2"]=window["webpackJsonptodolist-version2"]||[]).push([[0],{27:function(e,t,a){e.exports=a(42)},32:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),i=a.n(c),o=a(5),l=a(6),s=a(8),u=a(7),m=a(9),d=(a(32),a(13)),p=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.brand;return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"navbar-items",style:{fontSize:"2em;"}},e),r.a.createElement("div",{className:"navbar-items"},r.a.createElement(d.b,{to:"/addtodo"},r.a.createElement("i",{class:"fas fa-plus",style:{color:"rgb(32, 35, 42)",fontSize:"1.5em"}}))))}}]),t}(n.Component),b=(a(38),a(26)),h=a(14);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(a,!0).forEach(function(t){Object(h.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var O=r.a.createContext(),E=function(e,t){switch(t.type){case"DELETE_LISTTODO":return v({},e,{items:e.items.filter(function(e){return e.id!==t.payload})});case"ADD_TODO":return v({},e,{items:[t.payload].concat(Object(b.a)(e.items))});default:return e}},y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={items:[],dispatch:function(e){a.setState(function(t){return E(t,e)})}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(O.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),j=O.Consumer,g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onDeleteClick=function(e,t){t({type:"DELETE_LISTTODO",payload:e})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.content,a=t.id,n=t.date,c=t.activities;return r.a.createElement(j,null,function(t){var i=t.dispatch;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Date: ",n," ",r.a.createElement("i",{onClick:e.onDeleteClick.bind(e,a,i),class:"fas fa-trash-alt delete-todos"})),r.a.createElement("ul",null,r.a.createElement("li",{className:"container-inner-list"},"Activities: ",c)),r.a.createElement("form",{action:""},r.a.createElement("label",{htmlFor:""},"Activities completed:"),r.a.createElement("input",{style:{float:"right",padding:"5%"},type:"checkbox"})))})}}]),t}(n.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(j,null,function(e){var t=e.items;return r.a.createElement(r.a.Fragment,null,t.map(function(e){return r.a.createElement(g,{key:e.id,content:e})}))})}}]),t}(n.Component);var D=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"hello world"))},k=(a(39),a(25)),C=a.n(k),A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={date:"",morning:"",afternoon:"",evening:""},a.handleChange=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e,t){t.preventDefault();var n=a.state,r=n.date,c=n.activities;e({type:"ADD_TODO",payload:{id:C()(),date:r,activities:c}}),a.setState({date:"",activities:""}),a.props.history.push("/")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.date,n=t.activities;return r.a.createElement(j,null,function(t){var c=t.dispatch;return r.a.createElement("div",{className:"container-addtodo"},r.a.createElement("h1",null,"Add to Todo"),r.a.createElement("form",{onSubmit:e.handleSubmit.bind(e,c)},r.a.createElement("label",{htmlFor:"date",className:"label-form"}," ","Date:"," ")," ",r.a.createElement("input",{type:"date",name:"date",onChange:e.handleChange,value:a,className:"container-addtodo-inner",required:!0}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"morning",className:"label-form"}," ","Activities:")," ",r.a.createElement("input",{type:"text",placeholder:"Activities",name:"activities",onChange:e.handleChange,value:n,className:"container-addtodo-inner",required:!0}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",value:"AddTodo",className:"btn"},"Submit Activity")))})}}]),t}(n.Component),N=a(10);var S=function(){return r.a.createElement(y,null,r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(p,{brand:"AdDoN",about:"about"}),r.a.createElement(N.c,null,r.a.createElement(N.a,{exact:!0,path:"/",component:w}),r.a.createElement(N.a,{exact:!0,path:"/addtodo",component:A}),r.a.createElement(N.a,{exact:!0,path:"/about",component:D})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.c9d7c984.chunk.js.map
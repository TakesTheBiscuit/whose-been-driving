(this["webpackJsonpwhose-been-driving"]=this["webpackJsonpwhose-been-driving"]||[]).push([[0],{57:function(e,t,a){e.exports=a(69)},62:function(e,t,a){},63:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),i=a.n(r),c=(a(62),a(22)),l=a(52),d=a(35),s=a(105),m=(a(63),a(106)),u=a(102),f=a(108);var h=function(e){var t=e.addTodo,a=Object(n.useState)({id:"",task:"",when:"",completed:!1}),r=Object(d.a)(a,2),i=r[0],l=r[1];return o.a.createElement("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),i.task.trim()&&(t(Object(c.a)({},i,{id:Object(f.a)()})),l(Object(c.a)({},i,{task:"",when:""})),document.getElementById("whoField").focus())}},o.a.createElement(m.a,{label:"Who",type:"text",name:"task",value:i.task,onChange:function(e){l(Object(c.a)({},i,{task:e.target.value}))},id:"whoField",style:{width:"35%"}}),o.a.createElement(m.a,{label:"When",name:"task",value:i.when,onChange:function(e){l(Object(c.a)({},i,{when:e.target.value}))},type:"date",defaultValue:"2017-05-24",InputLabelProps:{shrink:!0},style:{width:"35%"}}),o.a.createElement("div",null,o.a.createElement(u.a,{type:"submit",variant:"outlined",color:"primary",style:{padding:0,marginLeft:10}},"ADD")))},p=a(101),g=a(103),v=a(107),b=a(104),E=a(51),w=a.n(E);var y=function(e){var t=e.todo,a=e.toggleComplete,n=e.removeTodo;return o.a.createElement(g.a,{style:{display:"flex"}},o.a.createElement(v.a,{checked:t.completed,onClick:function(){a(t.id)}}),o.a.createElement(s.a,{variant:"body1",style:{textDecoration:t.completed?"line-through":null}},t.task," on ",t.when?t.when:"?"),o.a.createElement(b.a,{onClick:function(){n(t.id)}},o.a.createElement(w.a,null)))};var k=function(e){var t=e.todos,a=e.removeTodo,n=e.toggleComplete;return o.a.createElement(p.a,null,t.map((function(e){return o.a.createElement(y,{key:e.id,todo:e,removeTodo:a,toggleComplete:n})})))};var O=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-todo-list-todos"));e&&r(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("react-todo-list-todos",JSON.stringify(a))}),[a]),o.a.createElement("div",{className:"App",style:{padding:20}},o.a.createElement(s.a,{style:{padding:16,fontSize:"2rem"},variant:"h1"},"Whose been driving?"),o.a.createElement(s.a,{style:{padding:0,fontSize:"1.15rem",marginBottom:20,marginTop:-15},variant:"h2"},"Serious app by ",o.a.createElement("a",{href:"https://github.com/TakesTheBiscuit/whose-been-driving"},"TakesTheBiscuit")),o.a.createElement(h,{addTodo:function(e){r([e].concat(Object(l.a)(a)))}}),o.a.createElement(k,{todos:a,removeTodo:function(e){r(a.filter((function(t){return t.id!==e})))},toggleComplete:function(e){r(a.map((function(t){return t.id===e?Object(c.a)({},t,{completed:!t.completed}):t})))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.d845431a.chunk.js.map
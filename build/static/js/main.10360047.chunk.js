(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{31:function(t,e,n){t.exports=n(59)},53:function(t,e,n){},59:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(29),l=n.n(r),c=n(18),i=n(7),d=n(8),s=n(10),u=n(9),p=n(12),m=n(1),h=n(14),f=n.n(h),b=(n(53),function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).getItemStyle=function(){return{fontWeight:"bold",color:"blue",backgroundColor:"#e2e2e2",padding:"10px",width:"50%",margin:"auto",marginBottom:"0.5rem",border:"1px solid #ccc",borderRadius:"10px",textDecoration:t.props.todo.completed?"line-through":"none"}},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return a.a.createElement("div",{style:this.getItemStyle()},a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," ","",a.a.createElement("p",null,n),a.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:g},"x"))}}]),n}(o.Component)),g={backgroundColor:"#ff0000",color:"#fff",border:"inset 2px red",borderRadius:"50%",cursor:"pointer",padding:"4px",float:"right",marginTop:"-30px"},y=b,v=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return a.a.createElement(y,{todo:e,key:e.id,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),n}(a.a.Component);var E={backgroundColor:"#222639",color:"#fff",textAlign:"center",padding:"10px",margin:"auto",width:"60%",borderRadius:"12px",marginBottom:"2rem"},x=function(){return a.a.createElement("header",{style:E},a.a.createElement("h1",null,"TO-DO List"),a.a.createElement(p.b,{to:"/",className:"link"},"HOME"),a.a.createElement(p.b,{to:"/about",className:"link"},"ABOUT"))},O=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={title:""},t.onChange=function(e){t.setState({title:e.target.value})},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t}return Object(d.a)(n,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex",width:"50%",margin:"auto",marginBottom:"1rem",border:"3px outset grey",padding:"3px"}},a.a.createElement("input",{type:"text",value:this.state.title,onChange:this.onChange,name:"title",placeholder:"add todo . . .",style:{flex:"10",padding:"3px"}}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),n}(o.Component);function j(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{style:{textAlign:"center"}}," My To-Do List App V 1.0"),a.a.createElement("p",{style:{textAlign:"center",marginTop:"2rem"}},"My First React App, but surely not the last \ud83d\ude09"))}var k=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={todos:[]},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){f.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(n){return t.setState({todos:Object(c.a)(t.state.todos.filter((function(t){return t.id!==e})))})}))},t.addTodo=function(e){f.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then((function(e){return t.setState({todos:[].concat(Object(c.a)(t.state.todos),[e.data])})}))},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;f.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return a.a.createElement(p.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(x,null),a.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(O,{addTodo:t.addTodo}),a.a.createElement(v,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),a.a.createElement(m.a,{path:"/about",component:j}))))}}]),n}(a.a.Component);l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(k,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.10360047.chunk.js.map
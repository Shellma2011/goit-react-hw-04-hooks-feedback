(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{22:function(n,e,t){},23:function(n,e,t){"use strict";t.r(e);var o,a,i,r=t(0),c=t.n(r),s=t(9),d=t.n(s),b=t(4),l=t(2),x=t(3),p=t(1),j=x.a.section(o||(o=Object(l.a)(["\n  padding: 20px;\n  text-align: center;\n\n  text-align: center;\n  width: 400px;\n  margin: 30px auto;\n\n  border: 1px solid grey;\n  border-radius: 2%;\n\n  font-family: 'Helvetica Neue', Helvetica, Arial;\n  background: white;\n  box-shadow: -1px 15px 30px -12px black;\n  z-index: 9999;\n"]))),u=x.a.h2(a||(a=Object(l.a)(["\n  padding: 10px;\n  font-size: 24px;\n  color: #5c6368;\n"])));function h(n){var e=n.title,t=n.children;return Object(p.jsxs)(j,{children:[Object(p.jsx)(u,{children:e}),t]})}var g,f=x.a.button(i||(i=Object(l.a)(["\n  border: 1px solid grey;\n  border-radius: 2%;\n  width: 100px;\n  padding: 5px 15px;\n  background-color: teal;\n  color: #fff;\n  font-weight: 500;\n  margin-left: 5px;\n  margin-right: 5px;\n  font-family: inherit;\n  cursor: pointer;\n  outline: none;\n  box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);\n  transition: box-shadow 250ms linear;\n"]))),O=function(n){var e=n.options,t=n.name,o=n.onLeaveFeedback;return Object(p.jsx)(f,{type:"buttom",name:t,onClick:o,children:e})},m=x.a.p(g||(g=Object(l.a)(["\n  padding: 20px;\n  margin: 0px auto;\n  background-color: teal;\n  border: 1px solid grey;\n  border-radius: 2%;\n  box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);\n  transition: box-shadow 250ms linear;\n  color: white;\n  font-weight: 700;\n"])));var w,k,v=function(n){var e=n.message;return Object(p.jsx)(m,{children:e})},y=x.a.ul(w||(w=Object(l.a)(["\n  list-style-type: none;\n  padding: 0px;\n  margin: 0px;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  color: #5c6368;\n"]))),F=x.a.li(k||(k=Object(l.a)(["\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 400;\n  display: flex;\n\n  :nth-last-child(-n + 2) {\n    background-color: teal;\n    color: white;\n    font-weight: 700;\n    box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);\n    transition: box-shadow 250ms linear;\n  }\n"])));function S(n){var e=n.good,t=n.neutral,o=n.bad,a=n.total,i=n.positivePercentage;return Object(p.jsxs)(y,{children:[Object(p.jsxs)(F,{children:["Good: ",e]}),Object(p.jsxs)(F,{children:["Neutral: ",t]}),Object(p.jsxs)(F,{children:["Bad: ",o]}),Object(p.jsxs)(F,{children:["Total: ",a]}),Object(p.jsxs)(F,{children:["Positive feedback: ",i," %"]})]})}t(22);function L(){var n=Object(r.useState)(0),e=Object(b.a)(n,2),t=e[0],o=e[1],a=Object(r.useState)(0),i=Object(b.a)(a,2),c=i[0],s=i[1],d=Object(r.useState)(0),l=Object(b.a)(d,2),x=l[0],j=l[1],u=function(){return t+c+x},g=t/u*100;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(h,{title:"Please leave feedback",children:[Object(p.jsx)(O,{options:"Good",name:"good",onLeaveFeedback:function(){o((function(n){return n+1}))}}),Object(p.jsx)(O,{options:"Neutral",name:"neutral",onLeaveFeedback:function(){s((function(n){return n+1}))}}),Object(p.jsx)(O,{options:"Bad",name:"bad",onLeaveFeedback:function(){j((function(n){return n+1}))}})]}),Object(p.jsx)(h,{title:"Statistics",children:0===u?Object(p.jsx)(v,{message:"There is no feedback"}):Object(p.jsx)(S,{good:t,neutral:c,bad:x,total:u(),positivePercentage:g()})})]})}d.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(L,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.ff2c82cd.chunk.js.map
(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,t,n){e.exports=n(37)},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),u=n(2),l=n(4),i=function(e){var t=e.text,n=e.value,a=e.handleChange;return r.a.createElement("div",null,t,": ",r.a.createElement("input",{id:t,value:n,onChange:a}))},m=function(e){var t=e.value,n=e.handleChange;return r.a.createElement("div",null,r.a.createElement(i,{text:"filter shown with",value:t,handleChange:n}))},d=function(e){var t=e.newPerson,n=e.handleChange,a=e.submit,o=Object.keys(t).map((function(e){return r.a.createElement(i,{key:e,value:t[e],text:e,handleChange:n})}));return r.a.createElement("form",{onSubmit:a},o,r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},f=function(e){var t=e.peopleToShow,n=e.deletePerson;return r.a.createElement("table",null,r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.number),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return n(e.id)}},"delete")))}))))},s=n(3),h=n.n(s),b="/api/persons",v=function(){return h.a.get(b).then((function(e){return e.data}))},E=function(e){return h.a.post(b,e).then((function(e){return e.data}))},p=function(e){return h.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},w=function(e,t){return h.a.put("".concat(b,"/").concat(e),t).then((function(e){return e.data}))},g=function(e){var t=e.message,n=""===t.text?{}:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return t.error&&(n=Object(u.a)({},n,{color:"red"})),r.a.createElement("div",{style:n},t.text)},j=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)({name:"",number:""}),i=Object(l.a)(c,2),s=i[0],h=i[1],b=Object(a.useState)({showAll:!0,searchValue:""}),j=Object(l.a)(b,2),O=j[0],x=j[1],C=Object(a.useState)({error:!1,text:""}),k=Object(l.a)(C,2),y=k[0],S=k[1];Object(a.useEffect)((function(){v().then((function(e){o(e)}))}),[]);var L=O.showAll?n:n.filter((function(e){return e.name.toLowerCase().includes(O.searchValue.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(g,{message:y}),r.a.createElement(m,{value:O.value,handleChange:function(e){var t=Object(u.a)({},O);""===e.target.value?t.showAll=!0:t.showAll=!1,t.searchValue=e.target.value,x(t)}}),r.a.createElement("h3",null,"add a new"),r.a.createElement(d,{newPerson:s,handleChange:function(e){var t=Object(u.a)({},s);t[e.target.id]=e.target.value,h(t)},submit:function(e){if(e.preventDefault(),n.some((function(e){return e.name.toLowerCase()===s.name.toLowerCase()}))){if(window.confirm("".concat(s.name," is already added to the phonebook, replace the old number with a new one?"))){var t=n.find((function(e){return e.name.toLowerCase()===s.name.toLowerCase()})),a=Object(u.a)({},t,{number:s.number});w(t.id,a).then((function(e){o(n.map((function(t){return t.id===e.id?e:t}))),h({name:"",number:""}),S(Object(u.a)({},y,{text:"Updated ".concat(e.name,"'s number")})),setTimeout((function(){S(Object(u.a)({},y,{text:""}))}),5e3)})).catch((function(e){S({error:!0,text:"Information for ".concat(a.name," has already been removed from server")}),setTimeout((function(){S({error:!1,text:""})}),5e3)}))}}else E(s).then((function(e){o(n.concat(e)),h({name:"",number:""}),S(Object(u.a)({},y,{text:"Added ".concat(e.name)})),setTimeout((function(){S(Object(u.a)({},y,{text:""}))}),5e3)}))}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(f,{peopleToShow:L,deletePerson:function(e){var t=n.find((function(t){return t.id===e}));window.confirm("Delete ".concat(t.name,"?"))&&p(e).then((function(){o(n.filter((function(t){return t.id!==e}))),S(Object(u.a)({},S,{text:"Deleted ".concat(n.find((function(t){return t.id===e})).name)})),setTimeout((function(){S(Object(u.a)({},y,{text:""}))}),5e3)}))}}))};c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ba651ade.chunk.js.map
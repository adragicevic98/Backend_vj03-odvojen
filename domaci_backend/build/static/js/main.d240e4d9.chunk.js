(this["webpackJsonphello-react"]=this["webpackJsonphello-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){e.exports=n(38)},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),o=n.n(l),c=function(e){var t=e.osoba,n=e.urediOsobu,a=e.brisiOsobu;return r.a.createElement("li",null,t.imePrezime," (",t.adresa,")",r.a.createElement("button",{id:"edit",onClick:n},"Uredi"),r.a.createElement("button",{id:"brisi",onClick:a},"Bri\u0161i"))},i=n(4),u=n(2),s=n(3),m=n.n(s),b="http://localhost:3001/api/osobe",f=function(){return m.a.get(b)},d=function(e){return m.a.post(b,e)},E=function(e,t){return m.a.put("".concat(b,"/").concat(e),t)},g=function(e){return m.a.delete("".concat(b,"/").concat(e))},v=(n(14),function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),l=n[0],o=n[1],s=Object(a.useState)(0),m=Object(u.a)(s,2),b=m[0],v=m[1],O=Object(a.useState)([]),j=Object(u.a)(O,2),p=j[0],h=j[1],k=Object(a.useState)(" "),S=Object(u.a)(k,2),P=S[0],z=S[1],C=Object(a.useState)(" "),w=Object(u.a)(C,2),y=w[0],I=w[1],B=Object(a.useState)(!0),D=Object(u.a)(B,2),J=D[0],x=D[1],A=Object(a.useState)(""),F=Object(u.a)(A,2),K=F[0],N=F[1];Object(a.useEffect)((function(){console.log("Effect hook"),f().then((function(e){console.log("Podaci u\u010ditani"),h(e.data)}))}),[]),console.log("Renderirano je",p.length,"objekata");var R=J?p:p.filter((function(e){return e.imePrezime.split(" ")[0]===K}));return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement("b",null,"Adresar")),r.a.createElement("input",{id:"filter",value:K,onChange:function(e){console.log(e.target.value),N(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return x(!J)}},J?"Filtriraj":"Prika\u017ei sve")),r.a.createElement("ul",null,R.map((function(e){return r.a.createElement(c,{key:e.id,osoba:e,urediOsobu:function(){return function(e){o(!0),v(e);var t=p.find((function(t){return t.id===e}));z(t.imePrezime),I(t.adresa)}(e.id)},brisiOsobu:function(){return t=e.id,void g(t).then((function(e){console.log(e),h(p.filter((function(e){return e.id!==t})))}));var t}})}))),r.a.createElement("h2",null,"Novi kontakt"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("Klik",e.target);var t={imePrezime:P,adresa:y,datum:(new Date).toISOString()};if(console.log("uredi",l),l){var n=p.find((function(e){return e.id===b})),a=Object(i.a)(Object(i.a)({},n),{},{imePrezime:P,adresa:y});E(b,a).then((function(e){console.log(e),h(p.map((function(t){return t.id!==b?t:e.data}))),z(""),I(""),o(!1)}))}else d(t).then((function(e){console.log(e),h(p.concat(e.data)),z(""),I("")}))}},r.a.createElement("label",null,"Ime i prezime:"),r.a.createElement("input",{id:"ime",value:P,onChange:function(e){console.log(e.target.value),z(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Email adresa:"),r.a.createElement("input",{id:"email",value:y,onChange:function(e){console.log(e.target.value),I(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Spremi")))});o.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d240e4d9.chunk.js.map
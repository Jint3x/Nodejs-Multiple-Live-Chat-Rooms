(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0Ae4":function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return i}));var o=function(t){""!==t&&location.assign("/chat/".concat(t))},i=function(t){fetch("http://localhost:3000/chat_creation/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t})}),location.assign("/chat/".concat(t))}},"46f9":function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chat_not_found",function(){return e("qA88")}])},"6pId":function(t,n,e){t.exports={missing:"missing_room_missing__1PBRh",create:"missing_room_create__NL1lC"}},Qetd:function(t,n,e){"use strict";var o=Object.assign.bind(Object);t.exports=o,t.exports.default=t.exports},qA88:function(t,n,e){"use strict";e.r(n);var o=e("q1tI"),i=e.n(o),a=e("6pId"),r=e.n(a),c=e("0Ae4"),u=i.a.createElement;function s(){var t=Object(o.useState)(""),n=t[0],e=t[1],i=Object(o.useState)(""),a=i[0],s=i[1];return u("div",{id:r.a.create},u("div",null,u("input",{value:n,onChange:function(t){return e(t.target.value)},placeholder:"Create a chat room"}),u("button",{onClick:function(){Object(c.a)(n)}},"Create")),u("div",null,u("input",{value:a,onChange:function(t){return s(t.target.value)},placeholder:"Join a chat room"}),u("button",{onClick:function(){Object(c.b)(a)}},"Join")))}n.default=function(){return u(i.a.Fragment,null,u("div",{id:r.a.missing},u("img",{src:"https://www.clker.com/cliparts/b/3/7/9/1206573862448734250Arnoud999_Right_or_wrong_3.svg.med.png"}),u("h1",null,"We are sorry but room you tried to enter doesn't exist!")),u(s,null))}}},[["46f9",0,1]]]);
(this["webpackJsonprandom-emote-react"]=this["webpackJsonprandom-emote-react"]||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":"system-theme","name":"default","source":"/"},{"id":"nord-theme","name":"nord","source":"https://github.com/dylanaraps/pywal"},{"id":"solarized-dark-theme","name":"solarized dark","source":"https://github.com/dylanaraps/pywal"}]')},function(e){e.exports=JSON.parse('{"list":["(o _ o)","(>_<)","(\u3063\u02d8\u0329\u256d\u256e\u02d8\u0329)\u3063","(\xd7_\xd7)","(\xd7\ufe4f\xd7)","(\uff0b_\uff0b)","(\u30fb\u30fb;)\u309e","(\u30fb_\u30fb)","( \u0360\xb0 \u035f\u0296 \u0361\xb0)","( \u0ca0 \u0296\u032f \u0ca0)","(\uffe3 \uffe3|||)","(`\u30fc\xb4)","\xaf\\\\_(\u30c4)_/\xaf","\uff3c(\uff3e\u25bd\uff3e)\uff0f","( \xb4 \u25bd ` )","(\uff20\uff3e\u25e1\uff3e)","(\uff03\uffe3\u03c9\uffe3)","\u51f8(\uffe3\u30d8\uffe3)","(\uffe3\u30d8\uffe3)","(\ufe36\ufe39\ufe3a)","=\uff3e\u25cf \u22cf \u25cf\uff3e=","(\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b","(\u261e \u0361\xb0 \u035c\u0296 \u0361\xb0)\u261e"]}')},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(4),i=n.n(r),a=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),r(e),i(e)}))},s=(n(11),n(2)),l=n(5),u=(n(12),n(0));var d=function(){var e=Object(c.useState)(!0),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(c.useRef)(null);function i(e){r.current&&!r.current.contains(e.target)&&o(!0)}Object(c.useEffect)((function(){var e=localStorage.getItem("userTheme");e&&(document.body.className=e)}),[]),Object(c.useEffect)((function(){return document.addEventListener("mousedown",i),function(){document.removeEventListener("mousedown",i)}}),[r]);var a=l.map((function(e){return Object(u.jsx)("p",{onClick:function(){!function(e){localStorage.setItem("userTheme",e),document.body.className=e}(e.id),o(!0)},children:e.name},e.name)}));return Object(u.jsxs)("div",{className:"theme-dropdown",children:[Object(u.jsx)("p",{className:"noselect",onClick:function(){o(!1)},children:"theme"}),n?"":Object(u.jsx)("div",{className:"theme-content",ref:r,children:a})]})},m=function(e){var t=e.titleClicked;return Object(u.jsxs)("div",{className:"app-name",children:[Object(u.jsx)("div",{className:"options"}),Object(u.jsx)("h1",{className:"app-title noselect",onClick:t,children:e.title}),Object(u.jsx)("div",{className:"options",children:Object(u.jsx)(d,{})})]})},j=n(6),b=0,h=j.list;function f(){var e=Math.floor(Math.random()*h.length);return b==e&&(e=e<h.length?e++:e--,b=e),h[e]}function p(e,t){var n=Object(c.useRef)(null),o=Object(c.useState)(f()),r=Object(s.a)(o,2),i=r[0],a=r[1],l=Object(c.useState)("Copy"),d=Object(s.a)(l,2),m=d[0],j=d[1];Object(c.useImperativeHandle)(t,(function(){return{randomEmote:h}}));var b,h=function(){a(f())},p=Object(c.useState)(!0),O=Object(s.a)(p,2),v=O[0],x=O[1],g=Object(u.jsx)("textarea",{id:"emote-copy-area",value:i,ref:n,onChange:function(){},rows:24,cols:80});return Object(u.jsx)("div",{className:"emote-container",onKeyPress:function(e){e.preventDefault()},children:Object(u.jsxs)("div",{className:"emote-copy",onClick:function(){b||(x(!1),b=window.setTimeout((function(){var e,t,c;null===(e=n.current)||void 0===e||e.select(),null===(t=n.current)||void 0===t||t.setSelectionRange(0,99999),document.execCommand("copy"),j("Copied!"),null===(c=n.current)||void 0===c||c.blur(),x(!0),clearTimeout(b)}),10))},onMouseOut:function(){j("Copy")},children:[Object(u.jsx)("span",{id:"emote-display",className:"noselect",children:i}),v?"":g,Object(u.jsx)("span",{className:"emote-tooltip noselect",children:m})]})})}var O=Object(c.forwardRef)(p);function v(e){return Object(u.jsxs)("div",{className:"app-footer noselect",children:[Object(u.jsx)("a",{title:"Github repository link",rel:"noreferrer",target:"_blank",href:e.githublink?e.githublink:"/",children:"Github Repository"}),Object(u.jsx)("span",{children:"|"}),Object(u.jsx)("a",{title:"Github profile link",rel:"noreferrer",target:"_blank",href:e.link,id:"github-link",children:e.name})]})}function x(){var e=Object(c.useRef)(null);return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(m,{title:"./emote",titleClicked:function(){var t;return null===(t=e.current)||void 0===t?void 0:t.randomEmote()}}),Object(u.jsx)(O,{ref:e}),Object(u.jsx)(v,{link:"https://github.com/KTheXIII",name:"2021 \xa9 KTheXIII",githublink:"https://github.com/KTheXIII/emote-reactjs"})]})}i.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),a()}],[[14,1,2]]]);
//# sourceMappingURL=main.f9949ae1.chunk.js.map
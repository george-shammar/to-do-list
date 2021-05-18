(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(645),i=n.n(o)()((function(e){return e[1]}));i.push([e.id,"* { \n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n.projects {\n    width: 25%;\n    background-color: rgb(19, 18, 18);\n    height: 100vh;\n}\n\n.tasks {\n    width: 75%;\n    background-color: rgb(87, 85, 85);\n    height: 100vh;\n}\n\n.color-green {\n    color: rgb(96, 236, 96);\n}\n\n.color-white {\n    color: white;\n}\n\n.color-blue {\n    color: blue;\n}\n\n.project-div:hover {\n    background-color: rgb(87, 85, 85);\n    cursor: pointer;\n}\n\n.bold-text {\n    font-size: 2rem;\n}\n\n.bolden {\n    font-size: 1.5rem;\n}\n\n.show-task {\n    border-radius: 5px;\n    border: 1px solid rgb(96, 236, 96);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.show-project {\n    border-radius: 5px;\n    border: 1px solid rgb(96, 236, 96);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.radio {\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    border: 1px solid;\n    cursor: pointer;\n}\n\n.to-do {\n    font-size: 1rem;\n}\n\n.icons {\n    font-size: 1rem;\n}\n\n.fa-pencil-alt {\n    cursor: pointer;\n}\n\n.fa-trash-alt {\n    cursor: pointer;\n}\n\n.dom-task {\n    border-radius: 5px;\n    border: 1px solid rgb(96, 236, 96);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n",""]);const r=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);o&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},379:(e,t,n)=>{var o,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function c(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},o=[],i=0;i<e.length;i++){var d=e[i],s=t.base?d[0]+t.base:d[0],a=n[s]||0,l="".concat(s," ").concat(a);n[s]=a+1;var u=c(l),p={css:d[1],media:d[2],sourceMap:d[3]};-1!==u?(r[u].references++,r[u].updater(p)):r.push({identifier:l,updater:b(p,t),references:1}),o.push(l)}return o}function s(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var c=i(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var a,l=(a=[],function(e,t){return a[e]=t,a.filter(Boolean).join("\n")});function u(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(t,i);else{var r=document.createTextNode(i),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(r,c[t]):e.appendChild(r)}}function p(e,t,n){var o=n.css,i=n.media,r=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,h=0;function b(e,t){var n,o,i;if(t.singleton){var r=h++;n=m||(m=s(t)),o=u.bind(null,n,r,!1),i=u.bind(null,n,r,!0)}else n=s(t),o=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var i=c(n[o]);r[i].references--}for(var s=d(e,t),a=0;a<n.length;a++){var l=c(n[a]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}n=s}}}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),o=n(426);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const i=(e,t,n,o)=>{o.todos.push({description:e,dueDate:t,priority:n,edit(e,t,n){this.description=e,this.dueDate=t,this.priority=n}})},r=document.getElementById("task-form");r.style.display="none";const c=e=>{let t=0;document.querySelector("#task-div").innerHTML="",e.todos.forEach((n=>{const o=document.createElement("div");o.setAttribute("class","show-task mt-3 pt-1 px-2 mx-2 d-flex"),document.getElementById("task-div").appendChild(o);const i=document.createElement("div");i.setAttribute("class","d-flex");const r=document.createElement("div");r.setAttribute("class","radio color-green mt-1");const d=document.createElement("div");d.setAttribute("class","to-do color-white px-2 pt-1");const s=document.createElement("p"),a=document.createTextNode(n.description);s.appendChild(a),d.appendChild(s),r.id=t,r.addEventListener("click",(()=>{r.style.backgroundColor="rgb(96, 236, 96)",s.style.textDecoration="line-through"})),i.appendChild(r),i.appendChild(d),o.appendChild(i);const l=document.createElement("div");l.setAttribute("class","d-flex icons pt-1");const u=document.createElement("div");u.setAttribute("class","color-white px-2");const p=document.createElement("p"),m=document.createTextNode("Due Date: "+n.dueDate);p.appendChild(m),u.appendChild(p),l.appendChild(u),o.appendChild(l);const h=document.createElement("div"),b=document.createElement("i");b.setAttribute("class","fas fa-pencil-alt color-green px-2"),b.setAttribute("id","pencil-task"),h.appendChild(b),l.appendChild(h);const f=document.createElement("div"),v=document.createElement("i");v.setAttribute("class","fas fa-trash-alt color-green px-2"),f.appendChild(v),l.appendChild(f),f.id=t,f.addEventListener("click",(()=>{e.todos.splice(f.id,1),c(e)}));const y=document.createElement("div");y.setAttribute("class","d-flex color-white dom-task mt-3 pt-1 px-2 mx-2"),y.id=t;const g=document.createElement("div");g.setAttribute("class","px-2 py-2");const x=document.createElement("input");x.setAttribute("class","form-control"),x.setAttribute("type","text"),x.setAttribute("id","dom-description"),x.setAttribute("placeholder",n.description),g.appendChild(x),y.appendChild(g);const E=document.createElement("div");E.setAttribute("class","d-flex");const C=document.createElement("input");C.setAttribute("class","form-control"),C.setAttribute("type","date"),C.setAttribute("id","dom-date"),C.setAttribute("placeholder",n.dueDate);const k=document.createElement("div");k.setAttribute("class","px-2 btn mx-1 btn-success my-1"),k.setAttribute("id","submit-edit");const w=document.createTextNode("Submit");k.appendChild(w);const A=document.createElement("div");A.setAttribute("class","px-2 mx-1 btn btn-warning my-1"),A.setAttribute("id","cancel-button");const B=document.createTextNode("Cancel");A.appendChild(B),E.appendChild(k),E.appendChild(A),E.appendChild(C),y.appendChild(E),o.appendChild(y),y.style.display="none",document.getElementById("pencil-task").onclick=()=>{y.style.display="block"},document.getElementById("cancel-button").onclick=()=>{y.style.display="none"},submitButton.id=t,submitButton.onclick=()=>{const t=document.getElementById("dom-description").value,n=document.getElementById("dom-date").value;e.todos[f.id].edit(t,n,"High"),domListener.style.display="none",c(e)},t++}))},d=(e,t)=>({title:e,description:t,todos:[],edit(e,t){this.title=e,this.description=t}}),s=[],a=document.getElementById("new-project"),l=document.getElementById("project-form");l.style.display="none",document.getElementById("submit").addEventListener("click",(function(){l.style.display="none"}));const u=e=>{document.getElementById(e).addEventListener("click",(function(){(e=>{document.querySelector("#task-container").innerHTML="";let t=h[e];const n=document.createElement("p"),o=document.createTextNode(`Project: ${t.title}`);n.appendChild(o);const d=document.createElement("p"),s=document.createTextNode(`Description: ${t.description}`);d.appendChild(s);const a=document.createElement("div");a.setAttribute("class","color-white px-4 pt-5 bold-text"),a.appendChild(n),a.appendChild(d);const l=document.getElementById("task-container");l.appendChild(a);const u=document.createElement("button");u.setAttribute("class","btn btn-success px-5 mx-4 my-3"),u.setAttribute("id","new-task");const p=document.createTextNode('Add A New "To-Do"');u.appendChild(p),l.appendChild(u),document.getElementById("new-task").onclick=()=>{r.style.display="block"},document.getElementById("submit-task").onclick=()=>{const e=document.getElementById("exampleInputDescription").value,n=document.getElementById("exampleInputDueDate").value;let o;document.querySelector("#high").checked&&(o=high),document.querySelector("#medium").checked&&(o=medium),document.querySelector("#low").checked&&(o=low),i(e,n,o,t),r.style.display="none",c(t)}})(e),c(s[e])}))},p=()=>{let e=0;document.querySelector("#project-container").innerHTML="",s.forEach((t=>{const n=document.createElement("div");n.setAttribute("class","color-white px-4 bolden show-project mx-4 pt-3 mb-2 project-div"),n.setAttribute("id",e);const o=document.createElement("p"),i=document.createTextNode(`${t.title}`);o.appendChild(i),n.appendChild(o),document.getElementById("project-container").appendChild(n),e++})),function(){let e=document.getElementsByClassName("project-div");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(function(){u(this.id)}))}()},m=()=>{const e=document.querySelector(".title").value,t=document.querySelector(".description").value,n=d(e,t);s.push(n),p(),u()},h=s;a.addEventListener("click",(function(){l.style.display="block"})),document.getElementById("submit").addEventListener("click",m)})()})();
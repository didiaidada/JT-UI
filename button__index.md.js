(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{Waql:function(e,t,l){"use strict";l.r(t);var n=l("q1tI"),a=l.n(n),r=l("dEAq"),c=l("Zxc8"),u=l("hKI/"),m=l.n(u);l("WpQk");function d(e,t){return f(e)||s(e,t)||E(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function E(e,t){if(e){if("string"===typeof e)return i(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}function s(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var n,a,r=[],c=!0,u=!1;try{for(l=l.call(e);!(c=(n=l.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(m){u=!0,a=m}finally{try{c||null==l["return"]||l["return"]()}finally{if(u)throw a}}return r}}function f(e){if(Array.isArray(e))return e}var b=function(e){var t=e.children,l=Object(n["useRef"])(),r=Object(n["useState"])(!1),c=d(r,2),u=c[0],o=c[1],E=Object(n["useState"])(!1),i=d(E,2),s=i[0],f=i[1];return Object(n["useEffect"])((function(){var e=l.current,t=m()((function(){o(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":u||void 0,"data-right-folded":s||void 0},a.a.createElement("table",null,t)))},h=b,p=a.a.memo((e=>{var t=e.demos,l=t["button-basic"].component;return a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"button-\u6309\u94ae"},a.a.createElement(r["AnchorLink"],{to:"#button-\u6309\u94ae","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Button \u6309\u94ae"),a.a.createElement("p",null,"JT-UI \u4f9d\u636e\u6309\u94ae\u7684  ",a.a.createElement("code",null,"size")," \u63d0\u4f9b2\u79cd\u7c7b\u578b\u7684\u6309\u94ae\uff0c\u5927\u6309\u94ae\uff08",a.a.createElement("code",null,"big"),"\uff09\u548c\u5c0f\u6309\u94ae\uff08",a.a.createElement("code",null,"default"),"\uff09\u3002"),a.a.createElement("p",null,"\u4f9d\u636e\u6309\u94ae\u7684  ",a.a.createElement("code",null,"type")," \u63d0\u4f9b5\u79cd\u7c7b\u578b\u7684\u6309\u94ae, \u4e3b\u8981\u6309\u94ae\uff08",a.a.createElement("code",null,"primary"),"\uff09\uff0c\u9ed8\u8ba4\u6309\u94ae\uff08",a.a.createElement("code",null,"default"),"\uff09\uff0c\u6b21\u8981\u6309\u94ae\uff08",a.a.createElement("code",null,"minor"),"\uff09\uff0c\u6587\u672c\u6309\u94ae\uff08",a.a.createElement("code",null,"text"),"\uff09\uff0c\u94fe\u63a5\u6309\u94ae\uff08",a.a.createElement("code",null,"link"),"\uff09\u3002"),a.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},a.a.createElement(r["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),a.a.createElement("h3",{id:"\u57fa\u672c\u7528\u6cd5"},a.a.createElement(r["AnchorLink"],{to:"#\u57fa\u672c\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u7528\u6cd5")),a.a.createElement(c["default"],t["button-basic"].previewerProps,a.a.createElement(l,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"api"},a.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"API"),a.a.createElement("p",null,"\u6309\u94ae\u7684\u5c5e\u6027\u8bf4\u660e\u5982\u4e0b\uff1a"),a.a.createElement(h,null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"),a.a.createElement("th",null,"\u7248\u672c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"size"),a.a.createElement("td",null,"\u6309\u94ae\u7684\u5927\u5c0f\uff08 ",a.a.createElement("code",null,"big"),"\u9ad8\u5ea6\u4e3a 40px, ",a.a.createElement("code",null,"default")," \u9ad8\u5ea6\u4e3a32px\uff09"),a.a.createElement("td",null,a.a.createElement("code",null,"big")," |",a.a.createElement("code",null,"default")),a.a.createElement("td",null,a.a.createElement("code",null,"default")),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"type"),a.a.createElement("td",null,"\u8bbe\u7f6e\u6309\u94ae\u7c7b\u578b"),a.a.createElement("td",null,a.a.createElement("code",null,"primary")," | ",a.a.createElement("code",null,"minor")," | ",a.a.createElement("code",null,"link")," | ",a.a.createElement("code",null,"text")," | ",a.a.createElement("code",null,"default")),a.a.createElement("td",null,a.a.createElement("code",null,"default")),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"danger"),a.a.createElement("td",null,"\u8bbe\u7f6e\u5371\u9669\u6309\u94ae"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"false"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"disabled"),a.a.createElement("td",null,"\u6309\u94ae\u5931\u6548\u72b6\u6001"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"false"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"ghost"),a.a.createElement("td",null,"\u5e7d\u7075\u5c5e\u6027\uff0c\u4f7f\u6309\u94ae\u80cc\u666f\u900f\u660e"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"false"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"href"),a.a.createElement("td",null,"\u70b9\u51fb\u8df3\u8f6c\u7684\u5730\u5740\uff0c\u6307\u5b9a\u6b64\u5c5e\u6027 button \u7684\u884c\u4e3a\u548c a \u94fe\u63a5\u4e00\u81f4"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"htmlType"),a.a.createElement("td",null,"\u8bbe\u7f6e ",a.a.createElement("code",null,"button")," \u539f\u751f\u7684 ",a.a.createElement("code",null,"type")," \u503c\uff0c\u53ef\u9009\u503c\u8bf7\u53c2\u8003 ",a.a.createElement(r["Link"],{to:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type"},"HTML \u6807\u51c6")),a.a.createElement("td",null,"string"),a.a.createElement("td",null,a.a.createElement("code",null,"button")),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"icon"),a.a.createElement("td",null,"\u8bbe\u7f6e\u6309\u94ae\u7684\u56fe\u6807\u7ec4\u4ef6"),a.a.createElement("td",null,"ReactNode"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"loading"),a.a.createElement("td",null,"\u8bbe\u7f6e\u6309\u94ae\u8f7d\u5165\u72b6\u6001"),a.a.createElement("td",null,"boolean | ","{"," delay: number ","}"),a.a.createElement("td",null,"false"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"shape"),a.a.createElement("td",null,"\u8bbe\u7f6e\u6309\u94ae\u5f62\u72b6"),a.a.createElement("td",null,a.a.createElement("code",null,"default")," | ",a.a.createElement("code",null,"circle")," | ",a.a.createElement("code",null,"round")),a.a.createElement("td",null,a.a.createElement("code",null,"default")),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"target"),a.a.createElement("td",null,"\u76f8\u5f53\u4e8e a \u94fe\u63a5\u7684 target \u5c5e\u6027\uff0chref \u5b58\u5728\u65f6\u751f\u6548"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"onClick"),a.a.createElement("td",null,"\u70b9\u51fb\u6309\u94ae\u65f6\u7684\u56de\u8c03"),a.a.createElement("td",null,"(event) => void"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)))),a.a.createElement("p",null,"\u652f\u6301\u539f\u751f button \u7684\u5176\u4ed6\u6240\u6709\u5c5e\u6027\u3002"))))}));t["default"]=e=>{var t=a.a.useContext(r["context"]),l=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(p,{demos:l})}},WpQk:function(e,t,l){}}]);
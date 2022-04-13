/*! For license information please see commons-829cd7d039a2c97fb49e.js.LICENSE.txt */
(self.webpackChunkgodested_site=self.webpackChunkgodested_site||[]).push([[351],{9931:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var u in r)n.call(r,u)&&r[u]&&e.push(u);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},4756:function(e){"use strict";e.exports=Object.assign},523:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var u,c,s,l;if(Array.isArray(e)){if((u=e.length)!=a.length)return!1;for(c=u;0!=c--;)if(!i(e[c],a[c]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;for(l=e.entries();!(c=l.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((u=e.length)!=a.length)return!1;for(c=u;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((u=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!i(e[s[c]],a[s[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},5186:function(e,t,r){"use strict";r.d(t,{q:function(){return ye}});var n,o,i,a,u=r(5697),c=r.n(u),s=r(6124),l=r.n(s),f=r(523),p=r.n(f),d=r(1766),h=r(4756),y=r.n(h),g="bodyAttributes",m="htmlAttributes",v="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(b).map((function(e){return b[e]})),"charset"),T="cssText",C="href",E="http-equiv",A="innerHTML",S="itemprop",O="name",k="property",x="rel",L="src",P="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},_="defaultTitle",M="defer",N="encodeSpecialCharacters",D="onChangeClientState",I="titleTemplate",B=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),R=[b.NOSCRIPT,b.SCRIPT,b.STYLE],W="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},F=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},G=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},z=function(e){var t=$(e,b.TITLE),r=$(e,I);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=$(e,_);return t||n||void 0},K=function(e){return $(e,D)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return V({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},Q=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();-1===t.indexOf(c)||r===x&&"canonical"===e[r].toLowerCase()||c===x&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(u)||u!==A&&u!==T&&u!==S||(r=u)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=y()({},n[u],o[u]);n[u]=c}return e}),[]).reverse()},$=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ce(b.BODY,n),ce(b.HTML,o),ue(f,p);var d={baseTag:se(b.BASE,r),linkTags:se(b.LINK,i),metaTags:se(b.META,a),noscriptTags:se(b.NOSCRIPT,u),scriptTags:se(b.SCRIPT,s),styleTags:se(b.STYLE,l)},h={},y={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(y[e]=d[e].oldTags)})),t&&t(),c(e,h,y)},ae=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ce(b.TITLE,t)},ce=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(W),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],s=t[c]||"";r.getAttribute(c)!==s&&r.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var l=i.indexOf(c);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(W):r.getAttribute(W)!==a.join(",")&&r.setAttribute(W,a.join(","))}},se=function(e,t){var r=document.head||document.querySelector(b.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===A)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[n]?"":t[n];r.setAttribute(n,u)}r.setAttribute(W,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[j[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[W]=!0,o=fe(r,n),[d.default.createElement(b.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=le(r),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+G(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+G(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case g:case m:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[W]=!0,n);return Object.keys(t).forEach((function(e){var r=j[e]||e;if(r===A||r===T){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),d.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===A||e===T)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+G(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(b.BASE,t,n),bodyAttributes:pe(g,r,n),htmlAttributes:pe(m,o,n),link:pe(b.LINK,i,n),meta:pe(b.META,a,n),noscript:pe(b.NOSCRIPT,u,n),script:pe(b.SCRIPT,c,n),style:pe(b.STYLE,s,n),title:pe(b.TITLE,{title:f,titleAttributes:p},n)}},he=l()((function(e){return{baseTag:J([C,P],e),bodyAttributes:Z(g,e),defer:$(e,M),encode:$(e,N),htmlAttributes:Z(m,e),linkTags:Q(b.LINK,[x,C],e),metaTags:Q(b.META,[O,w,E,k,S],e),noscriptTags:Q(b.NOSCRIPT,[A],e),onChangeClientState:K(e),scriptTags:Q(b.SCRIPT,[L,A],e),styleTags:Q(b.STYLE,[T],e),title:z(e),titleAttributes:Z(v,e)}}),(function(e){oe&&re(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),ye=(o=he,a=i=function(e){function t(){return Y(this,t),F(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return V({},n,((t={})[r.type]=[].concat(n[r.type]||[],[V({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case b.TITLE:return V({},o,((t={})[n.type]=a,t.titleAttributes=V({},i),t));case b.BODY:return V({},o,{bodyAttributes:V({},i)});case b.HTML:return V({},o,{htmlAttributes:V({},i)})}return V({},o,((r={})[n.type]=V({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=V({},t);return Object.keys(e).forEach((function(t){var n;r=V({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return d.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[B[r]||r]=e[r],t}),t)}(U(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=U(e,["children"]),n=V({},r);return t&&(n=this.mapChildrenToProps(t,n)),d.default.createElement(o,n)},q(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(d.default.Component),i.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);ye.renderStatic=ye.rewind},6124:function(e,t,r){"use strict";var n,o=r(1766),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function l(){c=e(s.map((function(e){return e.props}))),f.canUseDOM?t(c):r&&(c=r(c))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",u),f}}},4937:function(e,t,r){"use strict";r.d(t,{T:function(){return a}});var n=r(5186),o=r(8382),i=r(1766);function a(e){var t=e.title,r=e.rootClassName,a=e.children;return i.createElement(i.Fragment,null,i.createElement(n.q,{title:t,defaultTitle:"@godested",titleTemplate:"%s · @godested"},i.createElement("html",{className:r})),i.createElement(o.f6,null,a))}},8382:function(e,t,r){"use strict";r.d(t,{f6:function(){return p},LW:function(){return T}});var n,o=r(1766),i=r(4168),a=r(5186),u=r(9931),c=r.n(u);!function(e){e[e.Light=0]="Light",e[e.Dark=1]="Dark"}(n||(n={}));var s=r(1766),l=(0,o.createContext)(n.Light),f=(0,o.createContext)(i.noop);function p(e){var t=e.children,r=e.defaultTheme,u=(0,o.useState)(function(e){var t,r;void 0===e&&(e=n.Light);return i.isBrowser&&null!==(t=null!==(r=function(){var e=window.localStorage.getItem("theme");return(0,i.isSomething)(e)?parseInt(e,10):void 0}())&&void 0!==r?r:function(){var e,t;if(null!==(e=(t=window).matchMedia)&&void 0!==e&&e.call(t,"(prefers-color-scheme: dark)").matches)return n.Dark;return}())&&void 0!==t?t:e}(r)),p=u[0],d=u[1],h=(0,o.useState)(void 0),g=h[0],m=h[1];(0,o.useEffect)((function(){return function(e){window.localStorage.setItem("theme",String(e))}(p)}),[p]),(0,o.useEffect)((function(){var e,t,r,o=(e=function(e){d(e)},t=function(t){e(t.matches?n.Dark:n.Light)},(r=window.matchMedia("(prefers-color-scheme: dark)")).addEventListener("change",t),function(){return r.removeEventListener("change",t)});return function(){return o()}}),[]);var v=(0,o.useCallback)((function(e){m("theme_changing"),d(e),setTimeout((function(){return m(void 0)}),parseInt("250",10))}),[d,m]);return s.createElement(l.Provider,{value:p},s.createElement(a.q,null,s.createElement("body",{className:c()(y(p),g)})),s.createElement(f.Provider,{value:v},t))}var d=(0,i.createUseContext)(l),h=(0,i.createUseContext)(f);function y(e){switch(e){case n.Light:return"theme_light";case n.Dark:return"theme_dark";default:return(0,i.assertNever)(e)}}var g=r(1766);function m(){return g.createElement("svg",{viewBox:"0 0 24 24",fill:"none",width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",className:"sun-icon-module--sun-icon--YNrIT"},g.createElement("circle",{cx:"11.9998",cy:"11.9998",r:"5.75375",fill:"currentColor",className:"sun-icon-module--sun-icon__core--dyTd9"}),g.createElement("g",{className:"sun-icon-module--sun-icon__rays--DUVUE"},g.createElement("circle",{cx:"3.08982",cy:"6.85502",r:"1.71143",transform:"rotate(-60 3.08982 6.85502)",fill:"currentColor"}),g.createElement("circle",{cx:"3.0903",cy:"17.1436",r:"1.71143",transform:"rotate(-120 3.0903 17.1436)",fill:"currentColor"}),g.createElement("circle",{cx:"12",cy:"22.2881",r:"1.71143",fill:"currentColor"}),g.createElement("circle",{cx:"20.9101",cy:"17.1436",r:"1.71143",transform:"rotate(-60 20.9101 17.1436)",fill:"currentColor"}),g.createElement("circle",{cx:"20.9101",cy:"6.8555",r:"1.71143",transform:"rotate(-120 20.9101 6.8555)",fill:"currentColor"}),g.createElement("circle",{cx:"12",cy:"1.71143",r:"1.71143",fill:"currentColor"})))}var v=r(1766);function b(){return v.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 50 50",className:"moon-icon-module--icon--ezqcP"},v.createElement("path",{d:"M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z",fill:"currentColor",className:"moon-icon-module--moon-icon--cHwiz"}))}var w=r(1766);function T(e){var t,r=e.className,o=e.invertColors,i=d(),a=h();return w.createElement("button",{type:"button",onClick:function(e){e.preventDefault(),a(i===n.Light?n.Dark:n.Light)},className:c()("theme-toggler-module--theme-toggler--vkSap",(t={},t["theme-toggler-module--theme-toggler_inverted--R4A7Y"]=o,t),r)},i===n.Light?w.createElement(b,null):w.createElement(m,null))}},6974:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n,o,i,a,u=r(5245),c=r(9931),s=r.n(c),l=r(4168),f=r(1766),p=["variant","fontWeight","as","fontColor","inline","italic","children","nowrap","className","innerRef"];function d(e){var t=e.variant,r=void 0===t?d.Variant.ParagraphMD:t,n=e.fontWeight,o=void 0===n?d.Weight.Regular:n,i=e.as,a=void 0===i?function(e){switch(e){case d.Variant.Heading:return"h2";case d.Variant.Title:return"h3";case d.Variant.Caption:return"h4";case d.Variant.ParagraphMD:case d.Variant.ParagraphSM:return"p";default:return(0,l.assertNever)(e)}}(r):i,c=e.fontColor,m=e.inline,v=e.italic,b=e.children,w=e.nowrap,T=e.className,C=e.innerRef,E=(0,u.Z)(e,p),A=a;return f.createElement(A,Object.assign({ref:C,className:s()(T,"typography-module--typography--y4B3O",m&&"typography-module--typography_inline--C-6DG",v&&"typography-module--typography_italic--redSs",w&&"typography-module--typography_no-wrap--ybhr0",(0,l.optionalMap)(c,g),y(o),h(r))},E),b)}function h(e){switch(e){case d.Variant.Heading:return"typography-module--typography_heading--6r2dx";case d.Variant.Title:return"typography-module--typography_title---Rkwp";case d.Variant.Caption:return"typography-module--typography_caption--rLyYV";case d.Variant.ParagraphSM:return"typography-module--typography_paragraph-sm--JSgfe";case d.Variant.ParagraphMD:return"typography-module--typography_paragraph-md--ycS45";default:return(0,l.assertNever)(e)}}function y(e){switch(e){case d.Weight.ExtraLight:return"typography-module--typography_extra-light--yNLGc";case d.Weight.Light:return"typography-module--typography_light--xipwA";case d.Weight.Thin:return"typography-module--typography_thin--YFThk";case d.Weight.Regular:return"typography-module--typography_regular--4r-gn";case d.Weight.Medium:return"typography-module--typography_medium--YiyZM";case d.Weight.DemiBold:return"typography-module--typography_demi-bold--2oWj7";case d.Weight.Bold:return"typography-module--typography_bold--CaL-H";case d.Weight.ExtraBold:return"typography-module--typography_extra-bold--fgYdg";case d.Weight.Black:return"typography-module--typography_black--J29ce";default:return(0,l.assertNever)(e)}}function g(e){switch(e){case d.Color.Black:return"typography-module--typography_black-color--RMUID";case d.Color.DarkGray:return"typography-module--typography_dark-gray-color--Q2knW";case d.Color.Gray:return"typography-module--typography_gray-color--hjrZ0";case d.Color.LightGray:return"typography-module--typography_light-gray-color--q--M6";case d.Color.Accent:return"typography-module--typography_accent-color--Qtf9B";case d.Color.White:return"typography-module--typography_white-color--Yjhwm";default:return(0,l.assertNever)(e)}}n=d||(d={}),function(e){e[e.Heading=0]="Heading",e[e.Title=1]="Title",e[e.Caption=2]="Caption",e[e.ParagraphMD=3]="ParagraphMD",e[e.ParagraphSM=4]="ParagraphSM"}(o||(o={})),n.Variant=o,function(e){e[e.ExtraLight=0]="ExtraLight",e[e.Light=1]="Light",e[e.Thin=2]="Thin",e[e.Regular=3]="Regular",e[e.Medium=4]="Medium",e[e.DemiBold=5]="DemiBold",e[e.Bold=6]="Bold",e[e.ExtraBold=7]="ExtraBold",e[e.Black=8]="Black"}(i||(i={})),n.Weight=i,function(e){e[e.Black=0]="Black",e[e.DarkGray=1]="DarkGray",e[e.Gray=2]="Gray",e[e.LightGray=3]="LightGray",e[e.Accent=4]="Accent",e[e.White=5]="White"}(a||(a={})),n.Color=a},3500:function(e,t,r){"use strict";function n(e,t){throw void 0===t&&(t=""+e),new Error("assertNever: "+t+"; value: "+e)}function o(e,t){if(null==e)throw new Error("assertExists: "+t)}r.d(t,{kP:function(){return o},vE:function(){return n}})},4168:function(e,t,r){"use strict";r.d(t,{Disposable:function(){return l},assertNever:function(){return n.vE},createUseContext:function(){return d},getDateMonth:function(){return s},isBrowser:function(){return h},isNumber:function(){return i},isSomething:function(){return o},noop:function(){return f},optionalMap:function(){return a},unwrap:function(){return u.W}});var n=r(3500);function o(e){return null!=e}var i=function(e){return"number"==typeof e};function a(e,t,r){return o(e)?t(e):r}r(9554);var u=r(5470),c=["January","February","March","April","May","June","July","August","September","October","November","December"];function s(e){return c[e.getMonth()]}var l=function(){function e(){this._disposables=[],this._isDisposed=!1}var t=e.prototype;return t.addDisposable=function(e){return this._disposables.push(e),e},t.dispose=function(){this._isDisposed?console.error("Already disposed"):(this._disposables.forEach((function(e){"function"!=typeof e?e.unsubscribe():e()})),this._isDisposed=!0)},e}(),f=function(){},p=r(1766);function d(e,t){return void 0===t&&(t="createUseContext: useContext("+e.displayName+") must be used within corresponding Provider"),function(){return(0,u.W)((0,p.useContext)(e),t)}}var h="undefined"!=typeof window},9554:function(){},5470:function(e,t,r){"use strict";r.d(t,{W:function(){return o}});var n=r(3500);function o(e,t){return(0,n.kP)(e,t),e}},5245:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=commons-829cd7d039a2c97fb49e.js.map
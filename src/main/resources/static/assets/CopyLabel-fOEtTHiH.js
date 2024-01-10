import{a_ as tt,a$ as et,d as nt,r as N,b0 as rt,o as ot,a as it,b as j,w as A,n as at,e as B,t as V,j as T,N as ut,b1 as ct,l as I,y as st,ah as ft,F as lt,_ as pt}from"./index-v-Xdsu0i.js";import{V as dt}from"./VTooltip-wvsNf8On.js";var H={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(C,S){(function(E,g){C.exports=g()})(tt,function(){return function(){var m={686:function(l,c,t){t.d(c,{default:function(){return q}});var u=t(279),o=t.n(u),s=t(370),y=t.n(s),v=t(817),b=t.n(v);function p(a){try{return document.execCommand(a)}catch{return!1}}var h=function(n){var e=b()(n);return p("cut"),e},d=h;function x(a){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(r,"px"),e.setAttribute("readonly",""),e.value=a,e}var D=function(n,e){var r=x(n);e.container.appendChild(r);var i=b()(r);return p("copy"),r.remove(),i},U=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},r="";return typeof n=="string"?r=D(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?r=D(n.value,e):(r=b()(n),p("copy")),r},R=U;function O(a){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?O=function(e){return typeof e}:O=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(a)}var z=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,r=e===void 0?"copy":e,i=n.container,f=n.target,_=n.text;if(r!=="copy"&&r!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(f!==void 0)if(f&&O(f)==="object"&&f.nodeType===1){if(r==="copy"&&f.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(r==="cut"&&(f.hasAttribute("readonly")||f.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(_)return R(_,{container:i});if(f)return r==="cut"?d(f):R(f,{container:i})},Y=z;function w(a){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?w=function(e){return typeof e}:w=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(a)}function $(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function F(a,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,r.key,r)}}function G(a,n,e){return n&&F(a.prototype,n),e&&F(a,e),a}function X(a,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(n&&n.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),n&&P(a,n)}function P(a,n){return P=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},P(a,n)}function J(a){var n=W();return function(){var r=k(a),i;if(n){var f=k(this).constructor;i=Reflect.construct(r,arguments,f)}else i=r.apply(this,arguments);return K(this,i)}}function K(a,n){return n&&(w(n)==="object"||typeof n=="function")?n:Q(a)}function Q(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function W(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function k(a){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(a)}function M(a,n){var e="data-clipboard-".concat(a);if(n.hasAttribute(e))return n.getAttribute(e)}var Z=function(a){X(e,a);var n=J(e);function e(r,i){var f;return $(this,e),f=n.call(this),f.resolveOptions(i),f.listenClick(r),f}return G(e,[{key:"resolveOptions",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof i.action=="function"?i.action:this.defaultAction,this.target=typeof i.target=="function"?i.target:this.defaultTarget,this.text=typeof i.text=="function"?i.text:this.defaultText,this.container=w(i.container)==="object"?i.container:document.body}},{key:"listenClick",value:function(i){var f=this;this.listener=y()(i,"click",function(_){return f.onClick(_)})}},{key:"onClick",value:function(i){var f=i.delegateTarget||i.currentTarget,_=this.action(f)||"copy",L=Y({action:_,container:this.container,target:this.target(f),text:this.text(f)});this.emit(L?"success":"error",{action:_,text:L,trigger:f,clearSelection:function(){f&&f.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(i){return M("action",i)}},{key:"defaultTarget",value:function(i){var f=M("target",i);if(f)return document.querySelector(f)}},{key:"defaultText",value:function(i){return M("text",i)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(i){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return R(i,f)}},{key:"cut",value:function(i){return d(i)}},{key:"isSupported",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],f=typeof i=="string"?[i]:i,_=!!document.queryCommandSupported;return f.forEach(function(L){_=_&&!!document.queryCommandSupported(L)}),_}}]),e}(o()),q=Z},828:function(l){var c=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function u(o,s){for(;o&&o.nodeType!==c;){if(typeof o.matches=="function"&&o.matches(s))return o;o=o.parentNode}}l.exports=u},438:function(l,c,t){var u=t(828);function o(v,b,p,h,d){var x=y.apply(this,arguments);return v.addEventListener(p,x,d),{destroy:function(){v.removeEventListener(p,x,d)}}}function s(v,b,p,h,d){return typeof v.addEventListener=="function"?o.apply(null,arguments):typeof p=="function"?o.bind(null,document).apply(null,arguments):(typeof v=="string"&&(v=document.querySelectorAll(v)),Array.prototype.map.call(v,function(x){return o(x,b,p,h,d)}))}function y(v,b,p,h){return function(d){d.delegateTarget=u(d.target,b),d.delegateTarget&&h.call(v,d)}}l.exports=s},879:function(l,c){c.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},c.nodeList=function(t){var u=Object.prototype.toString.call(t);return t!==void 0&&(u==="[object NodeList]"||u==="[object HTMLCollection]")&&"length"in t&&(t.length===0||c.node(t[0]))},c.string=function(t){return typeof t=="string"||t instanceof String},c.fn=function(t){var u=Object.prototype.toString.call(t);return u==="[object Function]"}},370:function(l,c,t){var u=t(879),o=t(438);function s(p,h,d){if(!p&&!h&&!d)throw new Error("Missing required arguments");if(!u.string(h))throw new TypeError("Second argument must be a String");if(!u.fn(d))throw new TypeError("Third argument must be a Function");if(u.node(p))return y(p,h,d);if(u.nodeList(p))return v(p,h,d);if(u.string(p))return b(p,h,d);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function y(p,h,d){return p.addEventListener(h,d),{destroy:function(){p.removeEventListener(h,d)}}}function v(p,h,d){return Array.prototype.forEach.call(p,function(x){x.addEventListener(h,d)}),{destroy:function(){Array.prototype.forEach.call(p,function(x){x.removeEventListener(h,d)})}}}function b(p,h,d){return o(document.body,p,h,d)}l.exports=s},817:function(l){function c(t){var u;if(t.nodeName==="SELECT")t.focus(),u=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var o=t.hasAttribute("readonly");o||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),o||t.removeAttribute("readonly"),u=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var s=window.getSelection(),y=document.createRange();y.selectNodeContents(t),s.removeAllRanges(),s.addRange(y),u=s.toString()}return u}l.exports=c},279:function(l){function c(){}c.prototype={on:function(t,u,o){var s=this.e||(this.e={});return(s[t]||(s[t]=[])).push({fn:u,ctx:o}),this},once:function(t,u,o){var s=this;function y(){s.off(t,y),u.apply(o,arguments)}return y._=u,this.on(t,y,o)},emit:function(t){var u=[].slice.call(arguments,1),o=((this.e||(this.e={}))[t]||[]).slice(),s=0,y=o.length;for(s;s<y;s++)o[s].fn.apply(o[s].ctx,u);return this},off:function(t,u){var o=this.e||(this.e={}),s=o[t],y=[];if(s&&u)for(var v=0,b=s.length;v<b;v++)s[v].fn!==u&&s[v].fn._!==u&&y.push(s[v]);return y.length?o[t]=y:delete o[t],this}},l.exports=c,l.exports.TinyEmitter=c}},E={};function g(l){if(E[l])return E[l].exports;var c=E[l]={exports:{}};return m[l](c,c.exports,g),c.exports}return function(){g.n=function(l){var c=l&&l.__esModule?function(){return l.default}:function(){return l};return g.d(c,{a:c}),c}}(),function(){g.d=function(l,c){for(var t in c)g.o(c,t)&&!g.o(l,t)&&Object.defineProperty(l,t,{enumerable:!0,get:c[t]})}}(),function(){g.o=function(l,c){return Object.prototype.hasOwnProperty.call(l,c)}}(),g(686)}().default})})(H);var yt=H.exports;const vt=et(yt);function ht(C,S){const m=new vt(S.target,{text:()=>C});m.on("success",E=>{m.destroy()}),m.on("error",E=>{m.destroy()}),m.onClick(S)}const mt="Copied to clipboard!",gt=nt({__name:"CopyLabel",props:{text:{type:String,default:""}},setup(C){const S=N("Copy"),m=N(!1),E=N("1000"),g=N(!1),l=C,{text:c}=rt(l),t=(u,o)=>{ht(u,o),g.value=!0,m.value=!0,S.value="Copied!",setTimeout(()=>{g.value=!1,S.value="Copy!"},1e3)};return(u,o)=>(ot(),it(lt,null,[j(ct,{modelValue:T(m),"onUpdate:modelValue":o[1]||(o[1]=s=>ut(m)?m.value=s:null),timeout:T(E)},{actions:A(()=>[j(at,{color:"blue",variant:"text",onClick:o[0]||(o[0]=s=>m.value=!1)},{default:A(()=>[B(" Close ")]),_:1})]),default:A(()=>[B(V(mt)+" ")]),_:1},8,["modelValue","timeout"]),j(dt,{location:"bottom"},{activator:A(({props:s})=>[I("span",st({class:[{heartBeat:T(g)===!0},"text"]},s,{onClick:o[2]||(o[2]=ft(y=>t(T(c),y),["stop","prevent"]))}),V(T(c)),17)]),default:A(()=>[I("span",null,V(T(S)),1)]),_:1})],64))}}),Et=pt(gt,[["__scopeId","data-v-6eca565a"]]);export{Et as C,ht as h};

import{j as N,bZ as F,bG as M,b_ as k,g as D,v as U,f as g,r as d,x as b,aM as X}from"./index-JShR_LJD.js";var I;const S=typeof window<"u",Y=e=>typeof e=="string",K=()=>{};S&&((I=window==null?void 0:window.navigator)!=null&&I.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function z(e){return typeof e=="function"?e():N(e)}function Z(e){return e}function A(e){return F()?(M(e),!0):!1}function q(e,t=!0){k()?D(e):t?e():U(e)}function O(e){var t;const n=z(e);return(t=n==null?void 0:n.$el)!=null?t:n}const w=S?window:void 0;function J(...e){let t,n,r,o;if(Y(e[0])||Array.isArray(e[0])?([n,r,o]=e,t=w):[t,n,r,o]=e,!t)return K;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const a=[],s=()=>{a.forEach(i=>i()),a.length=0},l=(i,f,p,v)=>(i.addEventListener(f,p,v),()=>i.removeEventListener(f,p,v)),u=b(()=>[O(t),z(o)],([i,f])=>{s(),i&&a.push(...n.flatMap(p=>r.map(v=>l(i,p,v,f))))},{immediate:!0,flush:"post"}),c=()=>{u(),s()};return A(c),c}function ee(e,t=!1){const n=d(),r=()=>n.value=!!e();return r(),q(r,t),n}const P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T="__vueuse_ssr_handlers__";P[T]=P[T]||{};var E=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,re=(e,t)=>{var n={};for(var r in e)te.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&E)for(var r of E(e))t.indexOf(r)<0&&ne.call(e,r)&&(n[r]=e[r]);return n};function oe(e,t,n={}){const r=n,{window:o=w}=r,a=re(r,["window"]);let s;const l=ee(()=>o&&"ResizeObserver"in o),u=()=>{s&&(s.disconnect(),s=void 0)},c=b(()=>O(e),f=>{u(),l.value&&o&&f&&(s=new ResizeObserver(t),s.observe(f,a))},{immediate:!0,flush:"post"}),i=()=>{u(),c()};return A(i),{isSupported:l,stop:i}}function se(e,t={width:0,height:0},n={}){const{window:r=w,box:o="content-box"}=n,a=g(()=>{var u,c;return(c=(u=O(e))==null?void 0:u.namespaceURI)==null?void 0:c.includes("svg")}),s=d(t.width),l=d(t.height);return oe(e,([u])=>{const c=o==="border-box"?u.borderBoxSize:o==="content-box"?u.contentBoxSize:u.devicePixelContentBoxSize;if(r&&a.value){const i=O(e);if(i){const f=r.getComputedStyle(i);s.value=parseFloat(f.width),l.value=parseFloat(f.height)}}else if(c){const i=Array.isArray(c)?c:[c];s.value=i.reduce((f,{inlineSize:p})=>f+p,0),l.value=i.reduce((f,{blockSize:p})=>f+p,0)}else s.value=u.contentRect.width,l.value=u.contentRect.height},n),b(()=>O(e),u=>{s.value=u?t.width:0,l.value=u?t.height:0}),{width:s,height:l}}var L;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(L||(L={}));var ae=Object.defineProperty,R=Object.getOwnPropertySymbols,ue=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable,C=(e,t,n)=>t in e?ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ce=(e,t)=>{for(var n in t||(t={}))ue.call(t,n)&&C(e,n,t[n]);if(R)for(var n of R(t))le.call(t,n)&&C(e,n,t[n]);return e};const ie={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ce({linear:Z},ie);function he(e,t){const{containerStyle:n,wrapperProps:r,scrollTo:o,calculateRange:a,currentList:s,containerRef:l}="itemHeight"in t?ve(t,e):pe(t,e);return{list:s,scrollTo:o,containerProps:{ref:l,onScroll:()=>{a()},style:n},wrapperProps:r}}function V(e){const t=d(null),n=se(t),r=d([]),o=X(e);return{state:d({start:0,end:10}),source:o,currentList:r,size:n,containerRef:t}}function W(e,t,n){return r=>{if(typeof n=="number")return Math.ceil(r/n);const{start:o=0}=e.value;let a=0,s=0;for(let l=o;l<t.value.length;l++){const u=n(l);if(a+=u,s=l,a>r)break}return s-o}}function $(e,t){return n=>{if(typeof t=="number")return Math.floor(n/t)+1;let r=0,o=0;for(let a=0;a<e.value.length;a++){const s=t(a);if(r+=s,r>=n){o=a;break}}return o+1}}function Q(e,t,n,r,{containerRef:o,state:a,currentList:s,source:l}){return()=>{const u=o.value;if(u){const c=n(e==="vertical"?u.scrollTop:u.scrollLeft),i=r(e==="vertical"?u.clientHeight:u.clientWidth),f=c-t,p=c+i+t;a.value={start:f<0?0:f,end:p>l.value.length?l.value.length:p},s.value=l.value.slice(a.value.start,a.value.end).map((v,h)=>({data:v,index:h+a.value.start}))}}}function B(e,t){return n=>typeof e=="number"?n*e:t.value.slice(0,n).reduce((o,a,s)=>o+e(s),0)}function j(e,t,n){b([e.width,e.height,t],()=>{n()})}function G(e,t){return g(()=>typeof e=="number"?t.value.length*e:t.value.reduce((n,r,o)=>n+e(o),0))}const fe={horizontal:"scrollLeft",vertical:"scrollTop"};function H(e,t,n,r){return o=>{r.value&&(r.value[fe[e]]=n(o),t())}}function pe(e,t){const n=V(t),{state:r,source:o,currentList:a,size:s,containerRef:l}=n,u={overflowX:"auto"},{itemWidth:c,overscan:i=5}=e,f=W(r,o,c),p=$(o,c),v=Q("horizontal",i,p,f,n),h=B(c,o),y=g(()=>h(r.value.start)),_=G(c,o);j(s,t,v);const m=H("horizontal",v,h,l),x=g(()=>({style:{height:"100%",width:`${_.value-y.value}px`,marginLeft:`${y.value}px`,display:"flex"}}));return{scrollTo:m,calculateRange:v,wrapperProps:x,containerStyle:u,currentList:a,containerRef:l}}function ve(e,t){const n=V(t),{state:r,source:o,currentList:a,size:s,containerRef:l}=n,u={overflowY:"auto"},{itemHeight:c,overscan:i=5}=e,f=W(r,o,c),p=$(o,c),v=Q("vertical",i,p,f,n),h=B(c,o),y=g(()=>h(r.value.start)),_=G(c,o);j(s,t,v);const m=H("vertical",v,h,l),x=g(()=>({style:{width:"100%",height:`${_.value-y.value}px`,marginTop:`${y.value}px`}}));return{calculateRange:v,scrollTo:m,containerStyle:u,wrapperProps:x,currentList:a,containerRef:l}}function ge({window:e=w}={}){if(!e)return{x:d(0),y:d(0)};const t=d(e.scrollX),n=d(e.scrollY);return J(e,"scroll",()=>{t.value=e.scrollX,n.value=e.scrollY},{capture:!1,passive:!0}),{x:t,y:n}}export{ge as a,he as u};
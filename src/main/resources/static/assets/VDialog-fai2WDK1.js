import{an as P,bj as y,bP as D,as as S,aS as h,bk as x,r as I,bJ as w,x as v,v as B,f as F,y as f,ay as R,bl as m,b as g,aI as T,bm as O,bX as k}from"./index-RUDlLveH.js";const A=P({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...y({origin:"center center",scrollStrategy:"block",transition:{component:D},zIndex:2400})},"VDialog"),L=S()({name:"VDialog",props:A(),emits:{"update:modelValue":a=>!0},setup(a,b){let{slots:c}=b;const n=h(a,"modelValue"),{scopeId:p}=x(),t=I();function i(l){var r,s;const e=l.relatedTarget,o=l.target;if(e!==o&&((r=t.value)!=null&&r.contentEl)&&((s=t.value)!=null&&s.globalTop)&&![document,t.value.contentEl].includes(o)&&!t.value.contentEl.contains(o)){const u=k(t.value.contentEl);if(!u.length)return;const d=u[0],E=u[u.length-1];e===d?E.focus():d.focus()}}w&&v(()=>n.value&&a.retainFocus,l=>{l?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)},{immediate:!0}),v(n,async l=>{var e,o;await B(),l?(e=t.value.contentEl)==null||e.focus({preventScroll:!0}):(o=t.value.activatorEl)==null||o.focus({preventScroll:!0})});const V=F(()=>f({"aria-haspopup":"dialog","aria-expanded":String(n.value)},a.activatorProps));return R(()=>{const l=m.filterProps(a);return g(m,f({ref:t,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable},a.class],style:a.style},l,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-modal":"true",activatorProps:V.value,role:"dialog"},p),{activator:c.activator,default:function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return g(T,{root:"VDialog"},{default:()=>{var s;return[(s=c.default)==null?void 0:s.call(c,...o)]}})}})}),O({},t)}});export{L as V};

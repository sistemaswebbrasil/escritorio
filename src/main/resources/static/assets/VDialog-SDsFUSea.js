import{ao as P,bk as y,bO as D,at as h,aT as x,bl as S,r as I,bI as T,x as v,v as w,f as B,y as f,az as F,bm as m,b as g,aJ as O,bn as R,bY as k}from"./index-v-Xdsu0i.js";const z=P({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...y({origin:"center center",scrollStrategy:"block",transition:{component:D},zIndex:2400})},"VDialog"),C=h()({name:"VDialog",props:z(),emits:{"update:modelValue":a=>!0},setup(a,b){let{slots:c}=b;const n=x(a,"modelValue"),{scopeId:p}=S(),t=I();function i(l){var r,s;const e=l.relatedTarget,o=l.target;if(e!==o&&((r=t.value)!=null&&r.contentEl)&&((s=t.value)!=null&&s.globalTop)&&![document,t.value.contentEl].includes(o)&&!t.value.contentEl.contains(o)){const u=k(t.value.contentEl);if(!u.length)return;const d=u[0],E=u[u.length-1];e===d?E.focus():d.focus()}}T&&v(()=>n.value&&a.retainFocus,l=>{l?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)},{immediate:!0}),v(n,async l=>{var e,o;await w(),l?(e=t.value.contentEl)==null||e.focus({preventScroll:!0}):(o=t.value.activatorEl)==null||o.focus({preventScroll:!0})});const V=B(()=>f({"aria-haspopup":"dialog","aria-expanded":String(n.value)},a.activatorProps));return F(()=>{const l=m.filterProps(a);return g(m,f({ref:t,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable},a.class],style:a.style},l,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-modal":"true",activatorProps:V.value,role:"dialog"},p),{activator:c.activator,default:function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return g(O,{root:"VDialog"},{default:()=>{var s;return[(s=c.default)==null?void 0:s.call(c,...o)]}})}})}),R({},t)}});export{C as V};

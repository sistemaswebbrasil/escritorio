import{m as g,V as t}from"./VCheckboxBtn-dozI2_ZL.js";import{an as A,aO as F,aP as I,as as U,aS as B,b_ as R,aR as D,f as M,ay as N,aT as O,aU as l,b as u,y as r}from"./index-Ks8zWVSz.js";const S=A({...F(),...I(g(),["inline"])},"VCheckbox"),$=U()({name:"VCheckbox",inheritAttrs:!1,props:S(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,c){let{attrs:d,slots:o}=c;const s=B(e,"modelValue"),{isFocused:n,focus:i,blur:m}=R(e),V=D(),b=M(()=>e.id||`checkbox-${V}`);return N(()=>{const[p,f]=O(d),k=l.filterProps(e),v=t.filterProps(e);return u(l,r({class:["v-checkbox",e.class]},p,k,{modelValue:s.value,"onUpdate:modelValue":a=>s.value=a,id:b.value,focused:n.value,style:e.style}),{...o,default:a=>{let{id:x,messagesId:h,isDisabled:P,isReadonly:y}=a;return u(t,r(v,{id:x.value,"aria-describedby":h.value,disabled:P.value,readonly:y.value},f,{modelValue:s.value,"onUpdate:modelValue":C=>s.value=C,onFocus:i,onBlur:m}),o)}})}),{}}});export{$ as V};

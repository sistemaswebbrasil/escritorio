import{an as f,aA as V,aM as v,as as I,aS as o,f as c,ay as k,aP as x,aN as l,b,y as h}from"./index-Ks8zWVSz.js";const C=f({indeterminate:Boolean,indeterminateIcon:{type:V,default:"$checkboxIndeterminate"},...v({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),P=I()({name:"VCheckboxBtn",props:C(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,s){let{slots:u}=s;const a=o(e,"indeterminate"),n=o(e,"modelValue");function r(t){a.value&&(a.value=!1)}const i=c(()=>a.value?e.indeterminateIcon:e.falseIcon),d=c(()=>a.value?e.indeterminateIcon:e.trueIcon);return k(()=>{const t=x(l.filterProps(e),["modelValue"]);return b(l,h(t,{modelValue:n.value,"onUpdate:modelValue":[m=>n.value=m,r],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:i.value,trueIcon:d.value,"aria-checked":a.value?"mixed":void 0}),u)}),{}}});export{P as V,C as m};

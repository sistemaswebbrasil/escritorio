import{ao as f,aB as V,aN as v,at as I,aT as o,f as c,az as k,aQ as x,aO as l,b,y as h}from"./index-JShR_LJD.js";const C=f({indeterminate:Boolean,indeterminateIcon:{type:V,default:"$checkboxIndeterminate"},...v({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),B=I()({name:"VCheckboxBtn",props:C(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,s){let{slots:u}=s;const a=o(e,"indeterminate"),t=o(e,"modelValue");function r(n){a.value&&(a.value=!1)}const i=c(()=>a.value?e.indeterminateIcon:e.falseIcon),d=c(()=>a.value?e.indeterminateIcon:e.trueIcon);return k(()=>{const n=x(l.filterProps(e),["modelValue"]);return b(l,h(n,{modelValue:t.value,"onUpdate:modelValue":[m=>t.value=m,r],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:i.value,trueIcon:d.value,"aria-checked":a.value?"mixed":void 0}),u)}),{}}});export{B as V,C as m};

import{an as b,ao as p,bn as v,as as y,bo as F,r as V,ay as h,b as R,bm as P}from"./index-YGJtlbDp.js";const k=b({...p(),...v()},"VForm"),D=y()({name:"VForm",props:k(),emits:{"update:modelValue":o=>!0,submit:o=>!0},setup(o,i){let{slots:r,emit:f}=i;const n=F(o),s=V();function l(t){t.preventDefault(),n.reset()}function u(t){const a=t,e=n.validate();a.then=e.then.bind(e),a.catch=e.catch.bind(e),a.finally=e.finally.bind(e),f("submit",a),a.defaultPrevented||e.then(c=>{var m;let{valid:d}=c;d&&((m=s.value)==null||m.submit())}),a.preventDefault()}return h(()=>{var t;return R("form",{ref:s,class:["v-form",o.class],style:o.style,novalidate:!0,onReset:l,onSubmit:u},[(t=r.default)==null?void 0:t.call(r,n)])}),P(n,s)}});export{D as V};
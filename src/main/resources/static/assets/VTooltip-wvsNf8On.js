import{ao as S,aQ as h,bk as O,at as T,aT as x,bl as k,aS as p,f as e,r as w,y as u,az as A,bm as d,b as C,bn as I}from"./index-v-Xdsu0i.js";const R=S({id:String,text:String,...h(O({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),z=T()({name:"VTooltip",props:R(),emits:{"update:modelValue":t=>!0},setup(t,v){let{slots:a}=v;const n=x(t,"modelValue"),{scopeId:g}=k(),f=p(),r=e(()=>t.id||`v-tooltip-${f}`),l=w(),m=e(()=>t.location.split(" ").length>1?t.location:t.location+" center"),V=e(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),b=e(()=>t.transition?t.transition:n.value?"scale-transition":"fade-transition"),y=e(()=>u({"aria-describedby":r.value},t.activatorProps));return A(()=>{const P=d.filterProps(t);return C(d,u({ref:l,class:["v-tooltip",t.class],style:t.style,id:r.value},P,{modelValue:n.value,"onUpdate:modelValue":o=>n.value=o,transition:b.value,absolute:!0,location:m.value,origin:V.value,persistent:!0,role:"tooltip",activatorProps:y.value,_disableGlobalStack:!0},g),{activator:a.activator,default:function(){var c;for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return((c=a.default)==null?void 0:c.call(a,...s))??t.text}})}),I({},l)}});export{z as V};

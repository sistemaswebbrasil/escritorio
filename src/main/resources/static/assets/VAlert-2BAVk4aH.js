import{b$ as D,an as $,aA as L,ao as z,ap as F,aJ as R,aD as w,c0 as E,c1 as O,aB as j,aq as q,ar as G,b3 as H,as as J,aS as K,f as o,at as M,bc as N,au as p,aK as Q,aH as U,c2 as W,c3 as X,aG as Y,c4 as Z,ax as ee,ba as ae,b as t,bg as te,V as le,aI as d,n as ne,y as se}from"./index-RUDlLveH.js";const oe=D("v-alert-title"),re=["success","info","warning","error"],ie=$({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:L,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>re.includes(e)},...z(),...F(),...R(),...w(),...E(),...O(),...j(),...q(),...G(),...H({variant:"flat"})},"VAlert"),ue=J()({name:"VAlert",props:ie(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,v){let{emit:y,slots:a}=v;const r=K(e,"modelValue"),n=o(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),m=o(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:b}=M(e),{colorClasses:f,colorStyles:k,variantClasses:P}=N(m),{densityClasses:V}=p(e),{dimensionStyles:C}=Q(e),{elevationClasses:g}=U(e),{locationStyles:x}=W(e),{positionClasses:S}=X(e),{roundedClasses:_}=Y(e),{textColorClasses:B,textColorStyles:A}=Z(ee(e,"borderColor")),{t:I}=ae(),i=o(()=>({"aria-label":I(e.closeLabel),onClick(s){r.value=!1,y("click:close",s)}}));return()=>{const s=!!(a.prepend||n.value),T=!!(a.title||e.title),h=!!(a.close||e.closable);return r.value&&t(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},b.value,f.value,V.value,g.value,S.value,_.value,P.value,e.class],style:[k.value,C.value,x.value,e.style],role:"alert"},{default:()=>{var c,u;return[te(!1,"v-alert"),e.border&&t("div",{key:"border",class:["v-alert__border",B.value],style:A.value},null),s&&t("div",{key:"prepend",class:"v-alert__prepend"},[a.prepend?t(d,{key:"prepend-defaults",disabled:!n.value,defaults:{VIcon:{density:e.density,icon:n.value,size:e.prominent?44:28}}},a.prepend):t(le,{key:"prepend-icon",density:e.density,icon:n.value,size:e.prominent?44:28},null)]),t("div",{class:"v-alert__content"},[T&&t(oe,{key:"title"},{default:()=>{var l;return[((l=a.title)==null?void 0:l.call(a))??e.title]}}),((c=a.text)==null?void 0:c.call(a))??e.text,(u=a.default)==null?void 0:u.call(a)]),a.append&&t("div",{key:"append",class:"v-alert__append"},[a.append()]),h&&t("div",{key:"close",class:"v-alert__close"},[a.close?t(d,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var l;return[(l=a.close)==null?void 0:l.call(a,{props:i.value})]}}):t(ne,se({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},i.value),null)])]}})}}});export{ue as V};

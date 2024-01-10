import{c0 as L,ao as D,aB as $,ap as z,aq as E,aK as F,aE as R,c1 as w,c2 as O,aC as j,ar as q,as as H,b4 as J,at as K,aT as M,f as o,au as N,bd as p,av as G,aL as Q,aI as U,c3 as W,c4 as X,aH as Y,c5 as Z,ay as ee,bb as ae,b as t,bh as te,V as le,aJ as d,n as ne,y as se}from"./index-jhG6Atar.js";const oe=L("v-alert-title"),re=["success","info","warning","error"],ie=D({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:$,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>re.includes(e)},...z(),...E(),...F(),...R(),...w(),...O(),...j(),...q(),...H(),...J({variant:"flat"})},"VAlert"),ue=K()({name:"VAlert",props:ie(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,v){let{emit:y,slots:a}=v;const r=M(e,"modelValue"),n=o(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),m=o(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:b}=N(e),{colorClasses:f,colorStyles:k,variantClasses:P}=p(m),{densityClasses:V}=G(e),{dimensionStyles:C}=Q(e),{elevationClasses:g}=U(e),{locationStyles:x}=W(e),{positionClasses:S}=X(e),{roundedClasses:_}=Y(e),{textColorClasses:B,textColorStyles:T}=Z(ee(e,"borderColor")),{t:h}=ae(),i=o(()=>({"aria-label":h(e.closeLabel),onClick(s){r.value=!1,y("click:close",s)}}));return()=>{const s=!!(a.prepend||n.value),I=!!(a.title||e.title),A=!!(a.close||e.closable);return r.value&&t(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},b.value,f.value,V.value,g.value,S.value,_.value,P.value,e.class],style:[k.value,C.value,x.value,e.style],role:"alert"},{default:()=>{var c,u;return[te(!1,"v-alert"),e.border&&t("div",{key:"border",class:["v-alert__border",B.value],style:T.value},null),s&&t("div",{key:"prepend",class:"v-alert__prepend"},[a.prepend?t(d,{key:"prepend-defaults",disabled:!n.value,defaults:{VIcon:{density:e.density,icon:n.value,size:e.prominent?44:28}}},a.prepend):t(le,{key:"prepend-icon",density:e.density,icon:n.value,size:e.prominent?44:28},null)]),t("div",{class:"v-alert__content"},[I&&t(oe,{key:"title"},{default:()=>{var l;return[((l=a.title)==null?void 0:l.call(a))??e.title]}}),((c=a.text)==null?void 0:c.call(a))??e.text,(u=a.default)==null?void 0:u.call(a)]),a.append&&t("div",{key:"append",class:"v-alert__append"},[a.append()]),A&&t("div",{key:"close",class:"v-alert__close"},[a.close?t(d,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var l;return[(l=a.close)==null?void 0:l.call(a,{props:i.value})]}}):t(ne,se({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},i.value),null)])]}})}}});export{ue as V};

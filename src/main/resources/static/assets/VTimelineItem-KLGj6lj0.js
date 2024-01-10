import{an as v,ao as m,ap as I,aq as k,ar as z,as as y,at as b,au as P,av as B,aw as R,ax as r,f as S,ay as f,b as t,az as u,aA as h,aB as T,aC as V,aD as _,aE as $,aF as D,aG as w,aH as N,V as j,aI as x,aJ as E,aK as L,aL as q,r as F,x as O}from"./index-peTGnuZv.js";const A=v({align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...m(),...I(),...k(),...z()},"VTimeline"),U=y()({name:"VTimeline",props:A(),setup(e,d){let{slots:i}=d;const{themeClasses:c}=b(e),{densityClasses:s}=P(e),{rtlClasses:o}=B();R({VTimelineDivider:{lineColor:r(e,"lineColor")},VTimelineItem:{density:r(e,"density"),lineInset:r(e,"lineInset")}});const n=S(()=>{const a=e.side?e.side:e.density!=="default"?"end":null;return a&&`v-timeline--side-${a}`}),l=S(()=>{const a=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return a;case"start":return a[0];case"end":return a[1];default:return null}});return f(()=>t(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,l.value,{"v-timeline--inset-line":!!e.lineInset},c.value,s.value,n.value,o.value,e.class],style:[{"--v-timeline-line-thickness":u(e.lineThickness)},e.style]},i)),{}}}),G=v({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:h,iconColor:String,lineColor:String,...m(),...T(),...V(),..._()},"VTimelineDivider"),H=y()({name:"VTimelineDivider",props:G(),setup(e,d){let{slots:i}=d;const{sizeClasses:c,sizeStyles:s}=$(e,"v-timeline-divider__dot"),{backgroundColorStyles:o,backgroundColorClasses:n}=D(r(e,"dotColor")),{roundedClasses:l}=w(e,"v-timeline-divider__dot"),{elevationClasses:a}=N(e),{backgroundColorClasses:C,backgroundColorStyles:g}=D(r(e,"lineColor"));return f(()=>t("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[t("div",{class:["v-timeline-divider__before",C.value],style:g.value},null),!e.hideDot&&t("div",{key:"dot",class:["v-timeline-divider__dot",a.value,l.value,c.value],style:s.value},[t("div",{class:["v-timeline-divider__inner-dot",n.value,l.value],style:o.value},[i.default?t(x,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},i.default):t(j,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),t("div",{class:["v-timeline-divider__after",C.value],style:g.value},null)])),{}}}),J=v({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:h,iconColor:String,lineInset:[Number,String],...m(),...E(),..._(),...T(),...V(),...k()},"VTimelineItem"),M=y()({name:"VTimelineItem",props:J(),setup(e,d){let{slots:i}=d;const{dimensionStyles:c}=L(e),s=q(0),o=F();return O(o,n=>{var l;n&&(s.value=((l=n.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:l.getBoundingClientRect().width)??0)},{flush:"post"}),f(()=>{var n,l;return t("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":u(s.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${u(e.lineInset)})`:u(0)},e.style]},[t("div",{class:"v-timeline-item__body",style:c.value},[(n=i.default)==null?void 0:n.call(i)]),t(H,{ref:o,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:i.icon}),e.density!=="compact"&&t("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((l=i.opposite)==null?void 0:l.call(i))])])}),{}}});export{U as V,M as a};
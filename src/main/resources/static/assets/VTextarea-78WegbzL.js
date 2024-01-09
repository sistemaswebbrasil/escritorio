import{an as p,aO as ee,c8 as te,as as ae,cp as ne,aS as le,b_ as oe,f as V,r as v,aL as ue,br as ie,g as re,x,c5 as se,ay as ce,aT as de,aU as A,ca as fe,b as l,cb as ve,y as I,F as R,a7 as G,bf as xe,cq as me,cc as ge,bm as he,v as S,cd as we,az as ye,bt as Ve}from"./index-RUDlLveH.js";const Fe=p({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...ee(),...te()},"VTextarea"),Pe=ae()({name:"VTextarea",directives:{Intersect:ne},inheritAttrs:!1,props:Fe(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,U){let{attrs:F,emit:M,slots:i}=U;const o=le(e,"modelValue"),{isFocused:f,focus:D,blur:E}=oe(e),O=V(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),$=V(()=>{if(F.maxlength)return F.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function j(t,n){var a,u;!e.autofocus||!t||(u=(a=n[0].target)==null?void 0:a.focus)==null||u.call(a)}const z=v(),m=v(),B=ue(""),g=v(),q=V(()=>e.persistentPlaceholder||f.value||e.active);function C(){var t;g.value!==document.activeElement&&((t=g.value)==null||t.focus()),f.value||D()}function L(t){C(),M("click:control",t)}function J(t){M("mousedown:control",t)}function K(t){t.stopPropagation(),C(),S(()=>{o.value="",we(e["onClick:clear"],t)})}function Q(t){var a;const n=t.target;if(o.value=n.value,(a=e.modelModifiers)!=null&&a.trim){const u=[n.selectionStart,n.selectionEnd];S(()=>{n.selectionStart=u[0],n.selectionEnd=u[1]})}}const c=v(),h=v(+e.rows),P=V(()=>["plain","underlined"].includes(e.variant));ie(()=>{e.autoGrow||(h.value=+e.rows)});function d(){e.autoGrow&&S(()=>{if(!c.value||!m.value)return;const t=getComputedStyle(c.value),n=getComputedStyle(m.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),u=c.value.scrollHeight,w=parseFloat(t.lineHeight),b=Math.max(parseFloat(e.rows)*w+a,parseFloat(n.getPropertyValue("--v-input-control-height"))),k=parseFloat(e.maxRows)*w+a||1/0,s=Ve(u??0,b,k);h.value=Math.floor((s-a)/w),B.value=ye(s)})}re(d),x(o,d),x(()=>e.rows,d),x(()=>e.maxRows,d),x(()=>e.density,d);let r;return x(c,t=>{t?(r=new ResizeObserver(d),r.observe(c.value)):r==null||r.disconnect()}),se(()=>{r==null||r.disconnect()}),ce(()=>{const t=!!(i.counter||e.counter||e.counterValue),n=!!(t||i.details),[a,u]=de(F),{modelValue:w,...b}=A.filterProps(e),k=fe(e);return l(A,I({ref:z,modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":P.value},e.class],style:e.style},a,b,{centerAffix:h.value===1&&!P.value,focused:f.value}),{...i,default:s=>{let{id:y,isDisabled:H,isDirty:N,isReadonly:W,isValid:X}=s;return l(ve,I({ref:m,style:{"--v-textarea-control-height":B.value},onClick:L,onMousedown:J,"onClick:clear":K,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},k,{id:y.value,active:q.value||N.value,centerAffix:h.value===1&&!P.value,dirty:N.value||e.dirty,disabled:H.value,focused:f.value,error:X.value===!1}),{...i,default:Y=>{let{props:{class:T,..._}}=Y;return l(R,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),G(l("textarea",I({ref:g,class:T,value:o.value,onInput:Q,autofocus:e.autofocus,readonly:W.value,disabled:H.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:C,onBlur:E},_,u),null),[[xe("intersect"),{handler:j},null,{once:!0}]]),e.autoGrow&&G(l("textarea",{class:[T,"v-textarea__sizer"],id:`${_.id}-sizer`,"onUpdate:modelValue":Z=>o.value=Z,ref:c,readonly:!0,"aria-hidden":"true"},null),[[me,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:n?s=>{var y;return l(R,null,[(y=i.details)==null?void 0:y.call(i,s),t&&l(R,null,[l("span",null,null),l(ge,{active:e.persistentCounter||f.value,value:O.value,max:$.value},i.counter)])])}:void 0})}),he({},z,m,g)}});export{Pe as V};

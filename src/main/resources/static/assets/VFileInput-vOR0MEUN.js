import{d as Q,o as W,i as X,j as Y,a6 as ee,an as te,aO as ne,bx as le,c8 as ae,as as oe,ba as ue,aS as ie,b_ as se,f as r,c9 as x,r as k,x as re,ay as ce,aT as de,aU as M,ca as fe,b as o,cb as ve,y as g,F as C,cc as pe,bm as me,v as he,cd as ye}from"./index-5UehqYXh.js";import{V as ke}from"./VChip-4-pLF36n.js";const Ie=Q({__name:"AnimationUpload",props:{size:{type:Number,default:500}},setup(e){const i=e;return(V,m)=>(W(),X(Y(ee),{animationLink:"https://assets3.lottiefiles.com/packages/lf20_GxMZME.json",height:i.size,width:i.size},null,8,["height","width"]))}}),ge=te({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(e)},...ne({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>le(e).every(i=>i!=null&&typeof i=="object")},...ae({clearable:!0})},"VFileInput"),Fe=oe()({name:"VFileInput",inheritAttrs:!1,props:ge(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,i){let{attrs:V,emit:m,slots:l}=i;const{t:b}=ue(),a=ie(e,"modelValue"),{isFocused:v,focus:N,blur:$}=se(e),I=r(()=>typeof e.showSize!="boolean"?e.showSize:void 0),F=r(()=>(a.value??[]).reduce((t,n)=>{let{size:c=0}=n;return t+c},0)),S=r(()=>x(F.value,I.value)),h=r(()=>(a.value??[]).map(t=>{const{name:n="",size:c=0}=t;return e.showSize?`${n} (${x(c,I.value)})`:n})),j=r(()=>{var n;const t=((n=a.value)==null?void 0:n.length)??0;return e.showSize?b(e.counterSizeString,t,S.value):b(e.counterString,t)}),z=k(),P=k(),s=k(),D=r(()=>v.value||e.active),w=r(()=>["plain","underlined"].includes(e.variant));function y(){var t;s.value!==document.activeElement&&((t=s.value)==null||t.focus()),v.value||N()}function U(t){A(t)}function E(t){m("mousedown:control",t)}function A(t){var n;(n=s.value)==null||n.click(),m("click:control",t)}function L(t){t.stopPropagation(),y(),he(()=>{a.value=[],ye(e["onClick:clear"],t)})}return re(a,t=>{(!Array.isArray(t)||!t.length)&&s.value&&(s.value.value="")}),ce(()=>{const t=!!(l.counter||e.counter),n=!!(t||l.details),[c,O]=de(V),{modelValue:Ce,...T}=M.filterProps(e),G=fe(e);return o(M,g({ref:z,modelValue:a.value,"onUpdate:modelValue":d=>a.value=d,class:["v-file-input",{"v-file-input--chips":!!e.chips,"v-input--plain-underlined":w.value},e.class],style:e.style,"onClick:prepend":U},c,T,{centerAffix:!w.value,focused:v.value}),{...l,default:d=>{let{id:p,isDisabled:f,isDirty:B,isReadonly:R,isValid:Z}=d;return o(ve,g({ref:P,"prepend-icon":e.prependIcon,onMousedown:E,onClick:A,"onClick:clear":L,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},G,{id:p.value,active:D.value||B.value,dirty:B.value,disabled:f.value,focused:v.value,error:Z.value===!1}),{...l,default:q=>{var _;let{props:{class:H,...J}}=q;return o(C,null,[o("input",g({ref:s,type:"file",readonly:R.value,disabled:f.value,multiple:e.multiple,name:e.name,onClick:u=>{u.stopPropagation(),R.value&&u.preventDefault(),y()},onChange:u=>{if(!u.target)return;const K=u.target;a.value=[...K.files??[]]},onFocus:y,onBlur:$},J,O),null),o("div",{class:H},[!!((_=a.value)!=null&&_.length)&&(l.selection?l.selection({fileNames:h.value,totalBytes:F.value,totalBytesReadable:S.value}):e.chips?h.value.map(u=>o(ke,{key:u,size:"small",color:e.color},{default:()=>[u]})):h.value.join(", "))])])}})},details:n?d=>{var p,f;return o(C,null,[(p=l.details)==null?void 0:p.call(l,d),t&&o(C,null,[o("span",null,null),o(pe,{active:!!((f=a.value)!=null&&f.length),value:j.value},l.counter)])])}:void 0})}),me({},z,P,s)}});export{Fe as V,Ie as _};

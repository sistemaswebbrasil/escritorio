import{an as $,ao as ve,as as ne,bF as me,x as U,ay as ae,b as v,F as q,y as K,bG as Ve,aL as B,br as se,r as N,f as D,bH as he,bt as te,bI as be,v as Se,bJ as pe,aJ as we,bE as ke,aK as Pe,ax as Te,bK as xe,az as X,g as Ce,bL as Ie,aA as Re,bM as De,aP as Ae,bN as Fe,bO as Be,bP as Le,ba as Oe,aS as ie,bQ as _e,bR as Me,O as re,C as Ee,z as He,A as ce,V as de,bS as Ke,aI as Ne,e as Ue,bm as ze,bT as fe,bx as qe}from"./index-5UehqYXh.js";import{V as $e}from"./VCheckboxBtn-3B9J-9Rl.js";import{V as We}from"./VChip-4-pLF36n.js";const je=$({renderless:Boolean,...ve()},"VVirtualScrollItem"),Je=ne()({name:"VVirtualScrollItem",inheritAttrs:!1,props:je(),emits:{"update:height":e=>!0},setup(e,c){let{attrs:n,emit:d,slots:u}=c;const{resizeRef:f,contentRect:y}=me(void 0,"border");U(()=>{var o;return(o=y.value)==null?void 0:o.height},o=>{o!=null&&d("update:height",o)}),ae(()=>{var o,a;return e.renderless?v(q,null,[(o=u.default)==null?void 0:o.call(u,{itemRef:f})]):v("div",K({ref:f,class:["v-virtual-scroll__item",e.class],style:e.style},n),[(a=u.default)==null?void 0:a.call(u)])})}}),Ge=-1,Qe=1,le=100,Xe=$({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function Ye(e,c){const n=Ve(),d=B(0);se(()=>{d.value=parseFloat(e.itemHeight||0)});const u=B(0),f=B(Math.ceil((parseInt(e.height)||n.height.value)/(d.value||16))||1),y=B(0),o=B(0),a=N(),g=N();let R=0;const{resizeRef:A,contentRect:i}=me();se(()=>{A.value=a.value});const b=D(()=>{var t;return a.value===document.documentElement?n.height.value:((t=i.value)==null?void 0:t.height)||parseInt(e.height)||0}),S=D(()=>!!(a.value&&g.value&&b.value&&d.value));let P=Array.from({length:c.value.length}),m=Array.from({length:c.value.length});const T=B(0);let C=-1;function W(t){return P[t]||d.value}const F=be(()=>{const t=performance.now();m[0]=0;const s=c.value.length;for(let V=1;V<=s-1;V++)m[V]=(m[V-1]||0)+W(V-1);T.value=Math.max(T.value,performance.now()-t)},T),j=U(S,t=>{t&&(j(),R=g.value.offsetTop,F.immediate(),L(),~C&&Se(()=>{pe&&window.requestAnimationFrame(()=>{Q(C),C=-1})}))});U(b,(t,s)=>{s&&L()}),he(()=>{F.clear()});function Y(t,s){const V=P[t],k=d.value;d.value=k?Math.min(d.value,s):s,(V!==s||k!==d.value)&&(P[t]=s,F())}function w(t){return t=te(t,0,c.value.length-1),m[t]||0}function J(t){return Ze(m,t)}let _=0,M=0,z=0;function Z(){if(!a.value||!g.value)return;const t=a.value.scrollTop,s=performance.now();s-z>500?(M=Math.sign(t-_),R=g.value.offsetTop):M=t-_,_=t,z=s,L()}function E(){!a.value||!g.value||(M=0,z=0,L())}let G=-1;function L(){cancelAnimationFrame(G),G=requestAnimationFrame(ee)}function ee(){if(!a.value||!b.value)return;const t=_-R,s=Math.sign(M),V=Math.max(0,t-le),k=te(J(V),0,c.value.length),r=t+b.value+le,h=te(J(r)+1,k+1,c.value.length);if((s!==Ge||k<u.value)&&(s!==Qe||h>f.value)){const p=w(u.value)-w(k),I=w(h)-w(f.value);Math.max(p,I)>le?(u.value=k,f.value=h):(k<=0&&(u.value=k),h>=c.value.length&&(f.value=h))}y.value=w(u.value),o.value=w(c.value.length)-w(f.value)}function Q(t){const s=w(t);!a.value||t&&!s?C=t:a.value.scrollTop=s}const l=D(()=>c.value.slice(u.value,f.value).map((t,s)=>({raw:t,index:s+u.value})));return U(c,()=>{P=Array.from({length:c.value.length}),m=Array.from({length:c.value.length}),F.immediate(),L()},{deep:!0}),{containerRef:a,markerRef:g,computedItems:l,paddingTop:y,paddingBottom:o,scrollToIndex:Q,handleScroll:Z,handleScrollend:E,handleItemResize:Y}}function Ze(e,c){let n=e.length-1,d=0,u=0,f=null,y=-1;if(e[n]<c)return n;for(;d<=n;)if(u=d+n>>1,f=e[u],f>c)n=u-1;else if(f<c)y=u,d=u+1;else return f===c?u:d;return y}const et=$({items:{type:Array,default:()=>[]},renderless:Boolean,...Xe(),...ve(),...we()},"VVirtualScroll"),tt=ne()({name:"VVirtualScroll",props:et(),setup(e,c){let{slots:n}=c;const d=ke("VVirtualScroll"),{dimensionStyles:u}=Pe(e),{containerRef:f,markerRef:y,handleScroll:o,handleScrollend:a,handleItemResize:g,scrollToIndex:R,paddingTop:A,paddingBottom:i,computedItems:b}=Ye(e,Te(e,"items"));return xe(()=>e.renderless,()=>{function S(){var T,C;const m=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";f.value===document.documentElement?(document[m]("scroll",o,{passive:!0}),document[m]("scrollend",a)):((T=f.value)==null||T[m]("scroll",o,{passive:!0}),(C=f.value)==null||C[m]("scrollend",a))}Ce(()=>{f.value=Ie(d.vnode.el,!0),S(!0)}),he(S)}),ae(()=>{const S=b.value.map(P=>v(Je,{key:P.index,renderless:e.renderless,"onUpdate:height":m=>g(P.index,m)},{default:m=>{var T;return(T=n.default)==null?void 0:T.call(n,{item:P.raw,index:P.index,...m})}}));return e.renderless?v(q,null,[v("div",{ref:y,class:"v-virtual-scroll__spacer",style:{paddingTop:X(A.value)}},null),S,v("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:X(i.value)}},null)]):v("div",{ref:f,class:["v-virtual-scroll",e.class],onScrollPassive:o,onScrollend:a,style:[u.value,e.style]},[v("div",{ref:y,class:"v-virtual-scroll__container",style:{paddingTop:X(A.value),paddingBottom:X(i.value)}},[S])])}),{scrollToIndex:R}}});function lt(e,c){const n=B(!1);let d;function u(o){cancelAnimationFrame(d),n.value=!0,d=requestAnimationFrame(()=>{d=requestAnimationFrame(()=>{n.value=!1})})}async function f(){await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>{if(n.value){const a=U(n,()=>{a(),o()})}else o()})}async function y(o){var R,A;if(o.key==="Tab"&&((R=c.value)==null||R.focus()),!["PageDown","PageUp","Home","End"].includes(o.key))return;const a=(A=e.value)==null?void 0:A.$el;if(!a)return;(o.key==="Home"||o.key==="End")&&a.scrollTo({top:o.key==="Home"?0:a.scrollHeight,behavior:"smooth"}),await f();const g=a.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(o.key==="PageDown"||o.key==="Home"){const i=a.getBoundingClientRect().top;for(const b of g)if(b.getBoundingClientRect().top>=i){b.focus();break}}else{const i=a.getBoundingClientRect().bottom;for(const b of[...g].reverse())if(b.getBoundingClientRect().bottom<=i){b.focus();break}}}return{onListScroll:u,onListKeydown:y}}const nt=$({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:Re,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...De({itemChildren:!1})},"Select"),at=$({...nt(),...Ae(Fe({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Be({transition:{component:Le}})},"VSelect"),it=ne()({name:"VSelect",props:at(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,c){let{slots:n}=c;const{t:d}=Oe(),u=N(),f=N(),y=N(),o=ie(e,"menu"),a=D({get:()=>o.value,set:l=>{var t;o.value&&!l&&((t=f.value)!=null&&t.ΨopenChildren)||(o.value=l)}}),{items:g,transformIn:R,transformOut:A}=_e(e),i=ie(e,"modelValue",[],l=>R(l===null?[null]:qe(l)),l=>{const t=A(l);return e.multiple?t:t[0]??null}),b=D(()=>typeof e.counterValue=="function"?e.counterValue(i.value):typeof e.counterValue=="number"?e.counterValue:i.value.length),S=Me(),P=D(()=>i.value.map(l=>l.value)),m=B(!1),T=D(()=>a.value?e.closeText:e.openText);let C="",W;const F=D(()=>e.hideSelected?g.value.filter(l=>!i.value.some(t=>t===l)):g.value),j=D(()=>e.hideNoData&&!g.value.length||e.readonly||(S==null?void 0:S.isReadonly.value)),Y=D(()=>{var l;return{...e.menuProps,activatorProps:{...((l=e.menuProps)==null?void 0:l.activatorProps)||{},"aria-haspopup":"listbox"}}}),w=N(),{onListScroll:J,onListKeydown:_}=lt(w,u);function M(l){e.openOnClear&&(a.value=!0)}function z(){j.value||(a.value=!a.value)}function Z(l){var r,h;if(!l.key||e.readonly||S!=null&&S.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(l.key)&&l.preventDefault(),["Enter","ArrowDown"," "].includes(l.key)&&(a.value=!0),["Escape","Tab"].includes(l.key)&&(a.value=!1),l.key==="Home"?(r=w.value)==null||r.focus("first"):l.key==="End"&&((h=w.value)==null||h.focus("last"));const t=1e3;function s(p){const I=p.key.length===1,x=!p.ctrlKey&&!p.metaKey&&!p.altKey;return I&&x}if(e.multiple||!s(l))return;const V=performance.now();V-W>t&&(C=""),C+=l.key.toLowerCase(),W=V;const k=g.value.find(p=>p.title.toLowerCase().startsWith(C));k!==void 0&&(i.value=[k])}function E(l){if(e.multiple){const t=i.value.findIndex(s=>e.valueComparator(s.value,l.value));if(t===-1)i.value=[...i.value,l];else{const s=[...i.value];s.splice(t,1),i.value=s}}else i.value=[l],a.value=!1}function G(l){var t;(t=w.value)!=null&&t.$el.contains(l.relatedTarget)||(a.value=!1)}function L(){var l;m.value&&((l=u.value)==null||l.focus())}function ee(l){m.value=!0}function Q(l){if(l==null)i.value=[];else if(fe(u.value,":autofill")||fe(u.value,":-webkit-autofill")){const t=g.value.find(s=>s.title===l);t&&E(t)}else u.value&&(u.value.value="")}return U(a,()=>{if(!e.hideSelected&&a.value&&i.value.length){const l=F.value.findIndex(t=>i.value.some(s=>e.valueComparator(s.value,t.value)));pe&&window.requestAnimationFrame(()=>{var t;l>=0&&((t=y.value)==null||t.scrollToIndex(l))})}}),ae(()=>{const l=!!(e.chips||n.chip),t=!!(!e.hideNoData||F.value.length||n["prepend-item"]||n["append-item"]||n["no-data"]),s=i.value.length>0,V=re.filterProps(e),k=s||!m.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return v(re,K({ref:u},V,{modelValue:i.value.map(r=>r.props.value).join(", "),"onUpdate:modelValue":Q,focused:m.value,"onUpdate:focused":r=>m.value=r,validationValue:i.externalValue,counterValue:b.value,dirty:s,class:["v-select",{"v-select--active-menu":a.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":i.value.length,"v-select--selection-slot":!!n.selection},e.class],style:e.style,inputmode:"none",placeholder:k,"onClick:clear":M,"onMousedown:control":z,onBlur:G,onKeydown:Z,"aria-label":d(T.value),title:d(T.value)}),{...n,default:()=>v(q,null,[v(Ee,K({ref:f,modelValue:a.value,"onUpdate:modelValue":r=>a.value=r,activator:"parent",contentClass:"v-select__content",disabled:j.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:L},Y.value),{default:()=>[t&&v(He,{ref:w,selected:P.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:r=>r.preventDefault(),onKeydown:_,onFocusin:ee,onScrollPassive:J,tabindex:"-1",color:e.itemColor??e.color},{default:()=>{var r,h,p;return[(r=n["prepend-item"])==null?void 0:r.call(n),!F.value.length&&!e.hideNoData&&(((h=n["no-data"])==null?void 0:h.call(n))??v(ce,{title:d(e.noDataText)},null)),v(tt,{ref:y,renderless:!0,items:F.value},{default:I=>{var ue;let{item:x,index:H,itemRef:O}=I;const oe=K(x.props,{ref:O,key:H,onClick:()=>E(x)});return((ue=n.item)==null?void 0:ue.call(n,{item:x,index:H,props:oe}))??v(ce,K(oe,{role:"option"}),{prepend:ge=>{let{isSelected:ye}=ge;return v(q,null,[e.multiple&&!e.hideSelected?v($e,{key:x.value,modelValue:ye,ripple:!1,tabindex:"-1"},null):void 0,x.props.prependIcon&&v(de,{icon:x.props.prependIcon},null)])}})}}),(p=n["append-item"])==null?void 0:p.call(n)]}})]}),i.value.map((r,h)=>{function p(O){O.stopPropagation(),O.preventDefault(),E(r)}const I={"onClick:close":p,onMousedown(O){O.preventDefault(),O.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},x=l?!!n.chip:!!n.selection,H=x?Ke(l?n.chip({item:r,index:h,props:I}):n.selection({item:r,index:h})):void 0;if(!(x&&!H))return v("div",{key:r.value,class:"v-select__selection"},[l?n.chip?v(Ne,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:r.title}}},{default:()=>[H]}):v(We,K({key:"chip",closable:e.closableChips,size:"small",text:r.title,disabled:r.props.disabled},I),null):H??v("span",{class:"v-select__selection-text"},[r.title,e.multiple&&h<i.value.length-1&&v("span",{class:"v-select__selection-comma"},[Ue(",")])])])})]),"append-inner":function(){var I;for(var r=arguments.length,h=new Array(r),p=0;p<r;p++)h[p]=arguments[p];return v(q,null,[(I=n["append-inner"])==null?void 0:I.call(n,...h),e.menuIcon?v(de,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),ze({isFocused:m,menu:a,select:E},u)}});export{it as V};

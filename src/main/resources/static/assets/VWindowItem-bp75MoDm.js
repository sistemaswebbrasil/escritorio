import{ao as M,aB as ae,ap as N,cC as Se,ar as U,b3 as xe,at as O,aw as re,bF as we,b5 as ce,aM as B,f as y,bE as ne,bI as Ce,x as ve,az as F,b as m,cD as le,V as oe,bY as Te,bs as ke,aQ as pe,cE as ze,c5 as Ve,r as H,n as W,F as Be,y as Y,cF as Ie,cG as Pe,aq as Re,aT as Ee,av as _e,aG as $e,ay as R,ax as Ae,aA as X,cH as Me,as as Oe,cI as de,au as Fe,bb as He,bq as We,a8 as fe,bg as Ge,b8 as Le,cg as De,br as je,be as qe,cJ as Ye,ch as Xe,bj as Ne,cK as Ue,v as Ke}from"./index-jhG6Atar.js";function se(e){const n=Math.abs(e);return Math.sign(e)*(n/((1/.501-2)*(1-n)+1))}function ie(e){let{selectedElement:c,containerSize:n,contentSize:l,isRtl:b,currentScrollOffset:d,isHorizontal:t}=e;const u=t?c.clientWidth:c.clientHeight,a=t?c.offsetLeft:c.offsetTop,s=b&&t?l-a-u:a,h=n+d,v=u+s,S=u*.4;return s<=d?d=Math.max(s-S,0):h<=v&&(d=Math.min(d-(h-v-S),l-n)),d}function Je(e){let{selectedElement:c,containerSize:n,contentSize:l,isRtl:b,isHorizontal:d}=e;const t=d?c.clientWidth:c.clientHeight,u=d?c.offsetLeft:c.offsetTop,a=b&&d?l-u-t/2-n/2:u+t/2-n/2;return Math.min(l-n,Math.max(0,a))}const Qe=Symbol.for("vuetify:v-slide-group"),me=M({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Qe},nextIcon:{type:ae,default:"$next"},prevIcon:{type:ae,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...N(),...Se(),...U(),...xe({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ue=O()({name:"VSlideGroup",props:me(),emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:n}=c;const{isRtl:l}=re(),{displayClasses:b,mobile:d}=we(e),t=ce(e,e.symbol),u=B(!1),a=B(0),s=B(0),h=B(0),v=y(()=>e.direction==="horizontal"),{resizeRef:S,contentRect:C}=ne(),{resizeRef:i,contentRect:V}=ne(),I=y(()=>t.selected.value.length?t.items.value.findIndex(o=>o.id===t.selected.value[0]):-1),E=y(()=>t.selected.value.length?t.items.value.findIndex(o=>o.id===t.selected.value[t.selected.value.length-1]):-1);if(Ce){let o=-1;ve(()=>[t.selected.value,C.value,V.value,v.value],()=>{cancelAnimationFrame(o),o=requestAnimationFrame(()=>{if(C.value&&V.value){const r=v.value?"width":"height";s.value=C.value[r],h.value=V.value[r],u.value=s.value+1<h.value}if(I.value>=0&&i.value){const r=i.value.children[E.value];I.value===0||!u.value?a.value=0:e.centerActive?a.value=Je({selectedElement:r,containerSize:s.value,contentSize:h.value,isRtl:l.value,isHorizontal:v.value}):u.value&&(a.value=ie({selectedElement:r,containerSize:s.value,contentSize:h.value,isRtl:l.value,currentScrollOffset:a.value,isHorizontal:v.value}))}})})}const w=B(!1);let k=0,f=0;function g(o){const r=v.value?"clientX":"clientY";f=(l.value&&v.value?-1:1)*a.value,k=o.touches[0][r],w.value=!0}function x(o){if(!u.value)return;const r=v.value?"clientX":"clientY",z=l.value&&v.value?-1:1;a.value=z*(f+k-o.touches[0][r])}function p(o){const r=h.value-s.value;a.value<0||!u.value?a.value=0:a.value>=r&&(a.value=r),w.value=!1}function G(){S.value&&(S.value[v.value?"scrollLeft":"scrollTop"]=0)}const _=B(!1);function P(o){if(_.value=!0,!(!u.value||!i.value)){for(const r of o.composedPath())for(const z of i.value.children)if(z===r){a.value=ie({selectedElement:z,containerSize:s.value,contentSize:h.value,isRtl:l.value,currentScrollOffset:a.value,isHorizontal:v.value});return}}}function L(o){_.value=!1}function K(o){var r;!_.value&&!(o.relatedTarget&&((r=i.value)!=null&&r.contains(o.relatedTarget)))&&T()}function D(o){i.value&&(v.value?o.key==="ArrowRight"?T(l.value?"prev":"next"):o.key==="ArrowLeft"&&T(l.value?"next":"prev"):o.key==="ArrowDown"?T("next"):o.key==="ArrowUp"&&T("prev"),o.key==="Home"?T("first"):o.key==="End"&&T("last"))}function T(o){var r,z,Z,ee,te;if(i.value)if(!o)(r=Te(i.value)[0])==null||r.focus();else if(o==="next"){const A=(z=i.value.querySelector(":focus"))==null?void 0:z.nextElementSibling;A?A.focus():T("first")}else if(o==="prev"){const A=(Z=i.value.querySelector(":focus"))==null?void 0:Z.previousElementSibling;A?A.focus():T("last")}else o==="first"?(ee=i.value.firstElementChild)==null||ee.focus():o==="last"&&((te=i.value.lastElementChild)==null||te.focus())}function $(o){const r=a.value+(o==="prev"?-1:1)*s.value;a.value=ke(r,0,h.value-s.value)}const ye=y(()=>{let o=a.value>h.value-s.value?-(h.value-s.value)+se(h.value-s.value-a.value):-a.value;a.value<=0&&(o=se(-a.value));const r=l.value&&v.value?-1:1;return{transform:`translate${v.value?"X":"Y"}(${r*o}px)`,transition:w.value?"none":"",willChange:w.value?"transform":""}}),j=y(()=>({next:t.next,prev:t.prev,select:t.select,isSelected:t.isSelected})),q=y(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!d.value;case!0:return u.value||Math.abs(a.value)>0;case"mobile":return d.value||u.value||Math.abs(a.value)>0;default:return!d.value&&(u.value||Math.abs(a.value)>0)}}),J=y(()=>Math.abs(a.value)>0),Q=y(()=>h.value>Math.abs(a.value)+s.value);return F(()=>m(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!v.value,"v-slide-group--has-affixes":q.value,"v-slide-group--is-overflowing":u.value},b.value,e.class],style:e.style,tabindex:_.value||t.selected.value.length?-1:0,onFocus:K},{default:()=>{var o,r,z;return[q.value&&m("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!J.value}],onClick:()=>J.value&&$("prev")},[((o=n.prev)==null?void 0:o.call(n,j.value))??m(le,null,{default:()=>[m(oe,{icon:l.value?e.nextIcon:e.prevIcon},null)]})]),m("div",{key:"container",ref:S,class:"v-slide-group__container",onScroll:G},[m("div",{ref:i,class:"v-slide-group__content",style:ye.value,onTouchstartPassive:g,onTouchmovePassive:x,onTouchendPassive:p,onFocusin:P,onFocusout:L,onKeydown:D},[(r=n.default)==null?void 0:r.call(n,j.value)])]),q.value&&m("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!Q.value}],onClick:()=>Q.value&&$("next")},[((z=n.next)==null?void 0:z.call(n,j.value))??m(le,null,{default:()=>[m(oe,{icon:l.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:t.selected,scrollTo:$,scrollOffset:a,focus:T}}}),he=Symbol.for("vuetify:v-tabs"),Ze=M({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...pe(ze({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),et=O()({name:"VTab",props:Ze(),setup(e,c){let{slots:n,attrs:l}=c;const{textColorClasses:b,textColorStyles:d}=Ve(e,"sliderColor"),t=y(()=>e.direction==="horizontal"),u=B(!1),a=H(),s=H();function h(v){var C,i;let{value:S}=v;if(u.value=S,S){const V=(i=(C=a.value)==null?void 0:C.$el.parentElement)==null?void 0:i.querySelector(".v-tab--selected .v-tab__slider"),I=s.value;if(!V||!I)return;const E=getComputedStyle(V).color,w=V.getBoundingClientRect(),k=I.getBoundingClientRect(),f=t.value?"x":"y",g=t.value?"X":"Y",x=t.value?"right":"bottom",p=t.value?"width":"height",G=w[f],_=k[f],P=G>_?w[x]-k[x]:w[f]-k[f],L=Math.sign(P)>0?t.value?"right":"bottom":Math.sign(P)<0?t.value?"left":"top":"center",D=(Math.abs(P)+(Math.sign(P)<0?w[p]:k[p]))/Math.max(w[p],k[p])||0,T=w[p]/k[p]||0,$=1.5;Ie(I,{backgroundColor:[E,"currentcolor"],transform:[`translate${g}(${P}px) scale${g}(${T})`,`translate${g}(${P/$}px) scale${g}(${(D-1)/$+1})`,"none"],transformOrigin:Array(3).fill(L)},{duration:225,easing:Pe})}}return F(()=>{const v=W.filterProps(e);return m(W,Y({symbol:he,ref:a,class:["v-tab",e.class],style:e.style,tabindex:u.value?0:-1,role:"tab","aria-selected":String(u.value),active:!1},v,l,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":h}),{...n,default:()=>{var S;return m(Be,null,[((S=n.default)==null?void 0:S.call(n))??e.text,!e.hideSlider&&m("div",{ref:s,class:["v-tab__slider",b.value],style:d.value},null)])}})}),{}}});function tt(e){return e?e.map(c=>Me(c)?c:{text:c,value:c}):[]}const at=M({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...me({mandatory:"force"}),...Re(),...U()},"VTabs"),st=O()({name:"VTabs",props:at(),emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:n}=c;const l=Ee(e,"modelValue"),b=y(()=>tt(e.items)),{densityClasses:d}=_e(e),{backgroundColorClasses:t,backgroundColorStyles:u}=$e(R(e,"bgColor"));return Ae({VTab:{color:R(e,"color"),direction:R(e,"direction"),stacked:R(e,"stacked"),fixed:R(e,"fixedTabs"),sliderColor:R(e,"sliderColor"),hideSlider:R(e,"hideSlider")}}),F(()=>{const a=ue.filterProps(e);return m(ue,Y(a,{modelValue:l.value,"onUpdate:modelValue":s=>l.value=s,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},d.value,t.value,e.class],style:[{"--v-tabs-height":X(e.height)},u.value,e.style],role:"tablist",symbol:he}),{default:()=>[n.default?n.default():b.value.map(s=>m(et,Y(s,{key:s.text}),null))]})}),{}}}),ge=Symbol.for("vuetify:v-window"),be=Symbol.for("vuetify:v-window-group"),nt=M({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...N(),...U(),...Oe()},"VWindow"),it=O()({name:"VWindow",directives:{Touch:de},props:nt(),emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:n}=c;const{themeClasses:l}=Fe(e),{isRtl:b}=re(),{t:d}=He(),t=ce(e,be),u=H(),a=y(()=>b.value?!e.reverse:e.reverse),s=B(!1),h=y(()=>{const f=e.direction==="vertical"?"y":"x",x=(a.value?!s.value:s.value)?"-reverse":"";return`v-window-${f}${x}-transition`}),v=B(0),S=H(void 0),C=y(()=>t.items.value.findIndex(f=>t.selected.value.includes(f.id)));ve(C,(f,g)=>{const x=t.items.value.length,p=x-1;x<=2?s.value=f<g:f===p&&g===0?s.value=!0:f===0&&g===p?s.value=!1:s.value=f<g}),We(ge,{transition:h,isReversed:s,transitionCount:v,transitionHeight:S,rootRef:u});const i=y(()=>e.continuous||C.value!==0),V=y(()=>e.continuous||C.value!==t.items.value.length-1);function I(){i.value&&t.prev()}function E(){V.value&&t.next()}const w=y(()=>{const f=[],g={icon:b.value?e.nextIcon:e.prevIcon,class:`v-window__${a.value?"right":"left"}`,onClick:t.prev,ariaLabel:d("$vuetify.carousel.prev")};f.push(i.value?n.prev?n.prev({props:g}):m(W,g,null):m("div",null,null));const x={icon:b.value?e.prevIcon:e.nextIcon,class:`v-window__${a.value?"left":"right"}`,onClick:t.next,ariaLabel:d("$vuetify.carousel.next")};return f.push(V.value?n.next?n.next({props:x}):m(W,x,null):m("div",null,null)),f}),k=y(()=>e.touch===!1?e.touch:{...{left:()=>{a.value?I():E()},right:()=>{a.value?E():I()},start:g=>{let{originalEvent:x}=g;x.stopPropagation()}},...e.touch===!0?{}:e.touch});return F(()=>fe(m(e.tag,{ref:u,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},l.value,e.class],style:e.style},{default:()=>{var f,g;return[m("div",{class:"v-window__container",style:{height:S.value}},[(f=n.default)==null?void 0:f.call(n,{group:t}),e.showArrows!==!1&&m("div",{class:"v-window__controls"},[w.value])]),(g=n.additional)==null?void 0:g.call(n,{group:t})]}}),[[Ge("touch"),k.value]])),{group:t}}}),lt=M({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...N(),...Le(),...De()},"VWindowItem"),ut=O()({name:"VWindowItem",directives:{Touch:de},props:lt(),emits:{"group:selected":e=>!0},setup(e,c){let{slots:n}=c;const l=je(ge),b=qe(e,be),{isBooted:d}=Ye();if(!l||!b)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const t=B(!1),u=y(()=>d.value&&(l.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function a(){!t.value||!l||(t.value=!1,l.transitionCount.value>0&&(l.transitionCount.value-=1,l.transitionCount.value===0&&(l.transitionHeight.value=void 0)))}function s(){var i;t.value||!l||(t.value=!0,l.transitionCount.value===0&&(l.transitionHeight.value=X((i=l.rootRef.value)==null?void 0:i.clientHeight)),l.transitionCount.value+=1)}function h(){a()}function v(i){t.value&&Ke(()=>{!u.value||!t.value||!l||(l.transitionHeight.value=X(i.clientHeight))})}const S=y(()=>{const i=l.isReversed.value?e.reverseTransition:e.transition;return u.value?{name:typeof i!="string"?l.transition.value:i,onBeforeEnter:s,onAfterEnter:a,onEnterCancelled:h,onBeforeLeave:s,onAfterLeave:a,onLeaveCancelled:h,onEnter:v}:!1}),{hasContent:C}=Xe(e,b.isSelected);return F(()=>m(Ue,{transition:S.value,disabled:!d.value},{default:()=>{var i;return[fe(m("div",{class:["v-window-item",b.selectedClass.value,e.class],style:e.style},[C.value&&((i=n.default)==null?void 0:i.call(n))]),[[Ne,b.isSelected.value]])]}})),{groupItem:b}}});export{st as V,et as a,it as b,ut as c,Qe as d,ue as e};

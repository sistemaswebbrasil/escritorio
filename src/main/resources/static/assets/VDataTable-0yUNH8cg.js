import{bq as Ze,an as w,aS as F,f as x,br as ae,bp as O,bs as B,bt as Z,as as _,ba as le,ay as H,b as g,bu as et,az as V,r as D,bv as tt,bw as at,b1 as Se,bx as N,ax as T,by as U,bz as z,aA as fe,bA as lt,bB as nt,aF as rt,bC as ut,F as G,V as st,y as C,n as xe,e as ge,ag as me,t as ot,b5 as ee,bD as j,bE as it,x as ct,j as L,aw as dt,X as ft}from"./index-RUDlLveH.js";import{V as gt}from"./VSelect-BKSYh0lv.js";import{V as mt}from"./VPagination--G7lNM6m.js";import{V as ne}from"./VCheckboxBtn-X4A1T9dB.js";import{m as vt,V as ve}from"./VTable-TA8ATWpd.js";function ye(e,l,a){return Object.keys(e).filter(t=>Ze(t)&&t.endsWith(l)).reduce((t,n)=>(t[n.slice(0,-l.length)]=u=>e[n](u,a(u)),t),{})}const yt=w({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),Pe=Symbol.for("vuetify:data-table-pagination");function bt(e){const l=F(e,"page",void 0,t=>+(t??1)),a=F(e,"itemsPerPage",void 0,t=>+(t??10));return{page:l,itemsPerPage:a}}function ht(e){const{page:l,itemsPerPage:a,itemsLength:t}=e,n=x(()=>a.value===-1?0:a.value*(l.value-1)),u=x(()=>a.value===-1?t.value:Math.min(t.value,n.value+a.value)),c=x(()=>a.value===-1||t.value===0?1:Math.ceil(t.value/a.value));ae(()=>{l.value>c.value&&(l.value=c.value)});function s(d){a.value=d,l.value=1}function r(){l.value=Z(l.value+1,1,c.value)}function i(){l.value=Z(l.value-1,1,c.value)}function o(d){l.value=Z(d,1,c.value)}const f={page:l,itemsPerPage:a,startIndex:n,stopIndex:u,pageCount:c,itemsLength:t,nextPage:r,prevPage:i,setPage:o,setItemsPerPage:s};return O(Pe,f),f}function pt(){const e=B(Pe);if(!e)throw new Error("Missing pagination!");return e}function St(e){const{items:l,startIndex:a,stopIndex:t,itemsPerPage:n}=e;return{paginatedItems:x(()=>n.value<=0?l.value:l.value.slice(a.value,t.value))}}const we=w({prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),be=_()({name:"VDataTableFooter",props:we(),setup(e,l){let{slots:a}=l;const{t}=le(),{page:n,pageCount:u,startIndex:c,stopIndex:s,itemsLength:r,itemsPerPage:i,setItemsPerPage:o}=pt(),f=x(()=>e.itemsPerPageOptions.map(d=>typeof d=="number"?{value:d,title:d===-1?t("$vuetify.dataFooter.itemsPerPageAll"):String(d)}:{...d,title:t(d.title)}));return H(()=>{var d;return g("div",{class:"v-data-table-footer"},[(d=a.prepend)==null?void 0:d.call(a),g("div",{class:"v-data-table-footer__items-per-page"},[g("span",null,[t(e.itemsPerPageText)]),g(gt,{items:f.value,modelValue:i.value,"onUpdate:modelValue":y=>o(Number(y)),density:"compact",variant:"outlined","hide-details":!0},null)]),g("div",{class:"v-data-table-footer__info"},[g("div",null,[t(e.pageText,r.value?c.value+1:0,s.value,r.value)])]),g("div",{class:"v-data-table-footer__pagination"},[g(mt,{modelValue:n.value,"onUpdate:modelValue":y=>n.value=y,density:"comfortable","first-aria-label":e.firstPageLabel,"last-aria-label":e.lastPageLabel,length:u.value,"next-aria-label":e.nextPageLabel,"previous-aria-label":e.prevPageLabel,rounded:!0,"show-first-last-page":!0,"total-visible":e.showCurrentPage?1:0,variant:"plain"},null)])])}),{}}}),re=et({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String]},(e,l)=>{let{slots:a}=l;const t=e.tag??"td";return g(t,{class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding},`v-data-table-column--align-${e.align}`],style:{height:V(e.height),width:V(e.width),left:V(e.fixedOffset||null)}},{default:()=>{var n;return[(n=a.default)==null?void 0:n.call(a)]}})}),xt=w({headers:Array},"DataTable-header"),ke=Symbol.for("vuetify:data-table-headers"),Te={title:"",sortable:!1},Pt={...Te,width:48};function wt(){const l=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).map(a=>({element:a,priority:0}));return{enqueue:(a,t)=>{let n=!1;for(let u=0;u<l.length;u++)if(l[u].priority>t){l.splice(u,0,{element:a,priority:t}),n=!0;break}n||l.push({element:a,priority:t})},size:()=>l.length,count:()=>{let a=0;if(!l.length)return 0;const t=Math.floor(l[0].priority);for(let n=0;n<l.length;n++)Math.floor(l[n].priority)===t&&(a+=1);return a},dequeue:()=>l.shift()}}function te(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!e.children)l.push(e);else for(const a of e.children)te(a,l);return l}function De(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;for(const a of e)a.key&&l.add(a.key),a.children&&De(a.children,l);return l}function kt(e){if(e.key){if(e.key==="data-table-group")return Te;if(["data-table-expand","data-table-select"].includes(e.key))return Pt}}function ue(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e.children?Math.max(l,...e.children.map(a=>ue(a,l+1))):l}function Tt(e){let l=!1;function a(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(u)if(c&&(u.fixed=!0),u.fixed)if(u.children)for(let s=u.children.length-1;s>=0;s--)a(u.children[s],!0);else l?isNaN(+u.width)&&at(`Multiple fixed columns should have a static width (key: ${u.key})`):u.lastFixed=!0,l=!0;else if(u.children)for(let s=u.children.length-1;s>=0;s--)a(u.children[s]);else l=!1}for(let u=e.length-1;u>=0;u--)a(e[u]);function t(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!u)return c;if(u.children){u.fixedOffset=c;for(const s of u.children)c=t(s,c)}else u.fixed&&(u.fixedOffset=c,c+=parseFloat(u.width||"0")||0);return c}let n=0;for(const u of e)n=t(u,n)}function Dt(e,l){const a=[];let t=0;const n=wt(e);for(;n.size()>0;){let c=n.count();const s=[];let r=1;for(;c>0;){const{element:i,priority:o}=n.dequeue(),f=l-t-ue(i);if(s.push({...i,rowspan:f??1,colspan:i.children?te(i).length:1}),i.children)for(const d of i.children){const y=o%1+r/Math.pow(10,t+2);n.enqueue(d,t+f+y)}r+=1,c-=1}t+=1,a.push(s)}return{columns:e.map(c=>te(c)).flat(),headers:a}}function Ie(e){const l=[];for(const a of e){const t={...kt(a),...a},n=t.key??(typeof t.value=="string"?t.value:null),u=t.value??n??null,c={...t,key:n,value:u,sortable:t.sortable??(t.key!=null||!!t.sort),children:t.children?Ie(t.children):void 0};l.push(c)}return l}function It(e,l){const a=D([]),t=D([]),n=D(),u=D();ae(()=>{var p,b,m;const r=(e.headers||Object.keys(e.items[0]??{}).map(v=>({key:v,title:tt(v)}))).slice(),i=De(r);(p=l==null?void 0:l.groupBy)!=null&&p.value.length&&!i.has("data-table-group")&&r.unshift({key:"data-table-group",title:"Group"}),(b=l==null?void 0:l.showSelect)!=null&&b.value&&!i.has("data-table-select")&&r.unshift({key:"data-table-select"}),(m=l==null?void 0:l.showExpand)!=null&&m.value&&!i.has("data-table-expand")&&r.push({key:"data-table-expand"});const o=Ie(r);Tt(o);const f=Math.max(...o.map(v=>ue(v)))+1,d=Dt(o,f);a.value=d.headers,t.value=d.columns;const y=d.headers.flat(1);n.value=y.reduce((v,S)=>(S.sortable&&S.key&&S.sort&&(v[S.key]=S.sort),v),{}),u.value=y.reduce((v,S)=>(S.key&&S.filter&&(v[S.key]=S.filter),v),{})});const c={headers:a,columns:t,sortFunctions:n,filterFunctions:u};return O(ke,c),c}function W(){const e=B(ke);if(!e)throw new Error("Missing headers!");return e}const Vt={showSelectAll:!1,allSelected:()=>[],select:e=>{var t;let{items:l,value:a}=e;return new Set(a?[(t=l[0])==null?void 0:t.value]:[])},selectAll:e=>{let{selected:l}=e;return l}},Ve={showSelectAll:!0,allSelected:e=>{let{currentPage:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,currentPage:a,selected:t}=e;return Ve.select({items:a,value:l,selected:t})}},Fe={showSelectAll:!0,allSelected:e=>{let{allItems:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,allItems:a,selected:t}=e;return Fe.select({items:a,value:l,selected:t})}},Ft=w({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:Se}},"DataTable-select"),Ce=Symbol.for("vuetify:data-table-selection");function Ct(e,l){let{allItems:a,currentPage:t}=l;const n=F(e,"modelValue",e.modelValue,m=>new Set(N(m).map(v=>{var S;return((S=a.value.find(P=>e.valueComparator(v,P.value)))==null?void 0:S.value)??v})),m=>[...m.values()]),u=x(()=>a.value.filter(m=>m.selectable)),c=x(()=>t.value.filter(m=>m.selectable)),s=x(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return Vt;case"all":return Fe;case"page":default:return Ve}});function r(m){return N(m).every(v=>n.value.has(v.value))}function i(m){return N(m).some(v=>n.value.has(v.value))}function o(m,v){const S=s.value.select({items:m,value:v,selected:new Set(n.value)});n.value=S}function f(m){o([m],!r([m]))}function d(m){const v=s.value.selectAll({value:m,allItems:u.value,currentPage:c.value,selected:new Set(n.value)});n.value=v}const y=x(()=>n.value.size>0),p=x(()=>{const m=s.value.allSelected({allItems:u.value,currentPage:c.value});return!!m.length&&r(m)}),b={toggleSelect:f,select:o,selectAll:d,isSelected:r,isSomeSelected:i,someSelected:y,allSelected:p,showSelectAll:s.value.showSelectAll};return O(Ce,b),b}function q(){const e=B(Ce);if(!e)throw new Error("Missing selection!");return e}const Ot=w({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),Oe=Symbol.for("vuetify:data-table-sort");function Bt(e){const l=F(e,"sortBy"),a=T(e,"mustSort"),t=T(e,"multiSort");return{sortBy:l,mustSort:a,multiSort:t}}function _t(e){const{sortBy:l,mustSort:a,multiSort:t,page:n}=e,u=r=>{if(r.key==null)return;let i=l.value.map(f=>({...f}))??[];const o=i.find(f=>f.key===r.key);o?o.order==="desc"?a.value?o.order="asc":i=i.filter(f=>f.key!==r.key):o.order="desc":t.value?i=[...i,{key:r.key,order:"asc"}]:i=[{key:r.key,order:"asc"}],l.value=i,n&&(n.value=1)};function c(r){return!!l.value.find(i=>i.key===r.key)}const s={sortBy:l,toggleSort:u,isSorted:c};return O(Oe,s),s}function At(){const e=B(Oe);if(!e)throw new Error("Missing sort!");return e}function Et(e,l,a,t){const n=le();return{sortedItems:x(()=>a.value.length?Mt(l.value,a.value,n.current.value,{...e.customKeySort,...t==null?void 0:t.value}):l.value)}}function Mt(e,l,a,t){const n=new Intl.Collator(a,{sensitivity:"accent",usage:"sort"});return[...e].sort((u,c)=>{for(let s=0;s<l.length;s++){const r=l[s].key,i=l[s].order??"asc";if(i===!1)continue;let o=U(u.raw,r),f=U(c.raw,r);if(i==="desc"&&([o,f]=[f,o]),t!=null&&t[r]){const d=t[r](o,f);if(!d)continue;return d}if(o instanceof Date&&f instanceof Date)return o.getTime()-f.getTime();if([o,f]=[o,f].map(d=>d!=null?d.toString().toLocaleLowerCase():d),o!==f)return z(o)&&z(f)?0:z(o)?-1:z(f)?1:!isNaN(o)&&!isNaN(f)?Number(o)-Number(f):n.compare(o,f)}return 0})}const Be=w({color:String,sticky:Boolean,multiSort:Boolean,sortAscIcon:{type:fe,default:"$sortAsc"},sortDescIcon:{type:fe,default:"$sortDesc"},...lt()},"VDataTableHeaders"),he=_()({name:"VDataTableHeaders",props:Be(),setup(e,l){let{slots:a}=l;const{toggleSort:t,sortBy:n,isSorted:u}=At(),{someSelected:c,allSelected:s,selectAll:r,showSelectAll:i}=q(),{columns:o,headers:f}=W(),{loaderClasses:d}=nt(e);function y(P,h){if(!(!e.sticky&&!P.fixed))return{position:"sticky",left:P.fixed?V(P.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${h})`:void 0}}function p(P){const h=n.value.find(I=>I.key===P.key);return h?h.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:b,backgroundColorStyles:m}=rt(e,"color"),v=x(()=>({headers:f.value,columns:o.value,toggleSort:t,isSorted:u,sortBy:n.value,someSelected:c.value,allSelected:s.value,selectAll:r,getSortIcon:p})),S=P=>{let{column:h,x:I,y:A}=P;const Q=h.key==="data-table-select"||h.key==="data-table-expand";return g(re,C({tag:"th",align:h.align,class:["v-data-table__th",{"v-data-table__th--sortable":h.sortable,"v-data-table__th--sorted":u(h),"v-data-table__th--fixed":h.fixed},d.value],style:{width:V(h.width),minWidth:V(h.minWidth),...y(h,A)},colspan:h.colspan,rowspan:h.rowspan,onClick:h.sortable?()=>t(h):void 0,fixed:h.fixed,lastFixed:h.lastFixed,noPadding:Q},h.headerProps),{default:()=>{var K;const E=`header.${h.key}`,R={column:h,selectAll:r,isSorted:u,toggleSort:t,sortBy:n.value,someSelected:c.value,allSelected:s.value,getSortIcon:p};return a[E]?a[E](R):h.key==="data-table-select"?((K=a["header.data-table-select"])==null?void 0:K.call(a,R))??(i&&g(ne,{modelValue:s.value,indeterminate:c.value&&!s.value,"onUpdate:modelValue":r},null)):g("div",{class:"v-data-table-header__content"},[g("span",null,[h.title]),h.sortable&&g(st,{key:"icon",class:"v-data-table-header__sort-icon",icon:p(h)},null),e.multiSort&&u(h)&&g("div",{key:"badge",class:["v-data-table-header__sort-badge",...b.value],style:m.value},[n.value.findIndex(X=>X.key===h.key)+1])])}})};H(()=>g(G,null,[a.headers?a.headers(v.value):f.value.map((P,h)=>g("tr",null,[P.map((I,A)=>g(S,{column:I,x:A,y:h},null))])),e.loading&&g("tr",{class:"v-data-table-progress"},[g("th",{colspan:o.value.length},[g(ut,{name:"v-data-table-progress",absolute:!0,active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:a.loader})])])]))}}),$t=w({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),_e=Symbol.for("vuetify:data-table-group");function Lt(e){return{groupBy:F(e,"groupBy")}}function jt(e){const{groupBy:l,sortBy:a}=e,t=D(new Set),n=x(()=>l.value.map(i=>({...i,order:i.order??!1})).concat(a.value));function u(i){return t.value.has(i.id)}function c(i){const o=new Set(t.value);u(i)?o.delete(i.id):o.add(i.id),t.value=o}function s(i){function o(f){const d=[];for(const y of f.items)"type"in y&&y.type==="group"?d.push(...o(y)):d.push(y);return d}return o({type:"group",items:i,id:"dummy",key:"dummy",value:"dummy",depth:0})}const r={sortByWithGroups:n,toggleGroup:c,opened:t,groupBy:l,extractRows:s,isGroupOpen:u};return O(_e,r),r}function Ae(){const e=B(_e);if(!e)throw new Error("Missing group!");return e}function Nt(e,l){if(!e.length)return[];const a=new Map;for(const t of e){const n=U(t.raw,l);a.has(n)||a.set(n,[]),a.get(n).push(t)}return a}function Ee(e,l){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!l.length)return[];const n=Nt(e,l[0]),u=[],c=l.slice(1);return n.forEach((s,r)=>{const i=l[0],o=`${t}_${i}_${r}`;u.push({depth:a,id:o,key:i,value:r,items:c.length?Ee(s,c,a+1,o):s,type:"group"})}),u}function Me(e,l){const a=[];for(const t of e)"type"in t&&t.type==="group"?(t.value!=null&&a.push(t),(l.has(t.id)||t.value==null)&&a.push(...Me(t.items,l))):a.push(t);return a}function Gt(e,l,a){return{flatItems:x(()=>{if(!l.value.length)return e.value;const n=Ee(e.value,l.value.map(u=>u.key));return Me(n,a.value)})}}const Ht=w({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),Rt=_()({name:"VDataTableGroupHeaderRow",props:Ht(),setup(e,l){let{slots:a}=l;const{isGroupOpen:t,toggleGroup:n,extractRows:u}=Ae(),{isSelected:c,isSomeSelected:s,select:r}=q(),{columns:i}=W(),o=x(()=>u([e.item]));return()=>g("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[i.value.map(f=>{var d,y;if(f.key==="data-table-group"){const p=t(e.item)?"$expand":"$next",b=()=>n(e.item);return((d=a["data-table-group"])==null?void 0:d.call(a,{item:e.item,count:o.value.length,props:{icon:p,onClick:b}}))??g(re,{class:"v-data-table-group-header-row__column"},{default:()=>[g(xe,{size:"small",variant:"text",icon:p,onClick:b},null),g("span",null,[e.item.value]),g("span",null,[ge("("),o.value.length,ge(")")])]})}if(f.key==="data-table-select"){const p=c(o.value),b=s(o.value)&&!p,m=v=>r(o.value,v);return((y=a["data-table-select"])==null?void 0:y.call(a,{props:{modelValue:p,indeterminate:b,"onUpdate:modelValue":m}}))??g("td",null,[g(ne,{modelValue:p,indeterminate:b,"onUpdate:modelValue":m},null)])}return g("td",null,null)})])}}),Kt=w({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),$e=Symbol.for("vuetify:datatable:expanded");function zt(e){const l=T(e,"expandOnClick"),a=F(e,"expanded",e.expanded,s=>new Set(s),s=>[...s.values()]);function t(s,r){const i=new Set(a.value);r?i.add(s.value):i.delete(s.value),a.value=i}function n(s){return a.value.has(s.value)}function u(s){t(s,!n(s))}const c={expand:t,expanded:a,expandOnClick:l,isExpanded:n,toggleExpand:u};return O($e,c),c}function Le(){const e=B($e);if(!e)throw new Error("foo");return e}const Ut=w({index:Number,item:Object,cellProps:[Object,Function],onClick:ee(),onContextmenu:ee(),onDblclick:ee()},"VDataTableRow"),Wt=_()({name:"VDataTableRow",props:Ut(),setup(e,l){let{slots:a}=l;const{isSelected:t,toggleSelect:n}=q(),{isExpanded:u,toggleExpand:c}=Le(),{columns:s}=W();H(()=>g("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!(e.onClick||e.onContextmenu||e.onDblclick)}],onClick:e.onClick,onContextmenu:e.onContextmenu,onDblclick:e.onDblclick},[e.item&&s.value.map((r,i)=>{const o=e.item,f=`item.${r.key}`,d={index:e.index,item:o.raw,internalItem:o,value:U(o.columns,r.key),column:r,isSelected:t,toggleSelect:n,isExpanded:u,toggleExpand:c},y=typeof e.cellProps=="function"?e.cellProps({index:d.index,item:d.item,internalItem:d.internalItem,value:d.value,column:r}):e.cellProps,p=typeof r.cellProps=="function"?r.cellProps({index:d.index,item:d.item,internalItem:d.internalItem,value:d.value}):r.cellProps;return g(re,C({align:r.align,fixed:r.fixed,fixedOffset:r.fixedOffset,lastFixed:r.lastFixed,noPadding:r.key==="data-table-select"||r.key==="data-table-expand",width:r.width},y,p),{default:()=>{var b,m;return a[f]?a[f](d):r.key==="data-table-select"?((b=a["item.data-table-select"])==null?void 0:b.call(a,d))??g(ne,{disabled:!o.selectable,modelValue:t([o]),onClick:me(()=>n(o),["stop"])},null):r.key==="data-table-expand"?((m=a["item.data-table-expand"])==null?void 0:m.call(a,d))??g(xe,{icon:u(o)?"$collapse":"$expand",size:"small",variant:"text",onClick:me(()=>c(o),["stop"])},null):ot(d.value)}})})]))}}),je=w({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowProps:[Object,Function],cellProps:[Object,Function]},"VDataTableRows"),pe=_()({name:"VDataTableRows",inheritAttrs:!1,props:je(),setup(e,l){let{attrs:a,slots:t}=l;const{columns:n}=W(),{expandOnClick:u,toggleExpand:c,isExpanded:s}=Le(),{isSelected:r,toggleSelect:i}=q(),{toggleGroup:o,isGroupOpen:f}=Ae(),{t:d}=le();return H(()=>{var y,p;return e.loading&&(!e.items.length||t.loading)?g("tr",{class:"v-data-table-rows-loading",key:"loading"},[g("td",{colspan:n.value.length},[((y=t.loading)==null?void 0:y.call(t))??d(e.loadingText)])]):!e.loading&&!e.items.length&&!e.hideNoData?g("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[g("td",{colspan:n.value.length},[((p=t["no-data"])==null?void 0:p.call(t))??d(e.noDataText)])]):g(G,null,[e.items.map((b,m)=>{var P;if(b.type==="group"){const h={index:m,item:b,columns:n.value,isExpanded:s,toggleExpand:c,isSelected:r,toggleSelect:i,toggleGroup:o,isGroupOpen:f};return t["group-header"]?t["group-header"](h):g(Rt,C({key:`group-header_${b.id}`,item:b},ye(a,":group-header",()=>h)),t)}const v={index:m,item:b.raw,internalItem:b,columns:n.value,isExpanded:s,toggleExpand:c,isSelected:r,toggleSelect:i},S={...v,props:C({key:`item_${b.key??b.index}`,onClick:u.value?()=>{c(b)}:void 0,index:m,item:b,cellProps:e.cellProps},ye(a,":row",()=>v),typeof e.rowProps=="function"?e.rowProps({item:v.item,index:v.index,internalItem:v.internalItem}):e.rowProps)};return g(G,{key:S.props.key},[t.item?t.item(S):g(Wt,S.props,t),s(b)&&((P=t["expanded-row"])==null?void 0:P.call(t,v))])})])}),{}}}),qt=w({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},rowProps:[Object,Function],cellProps:[Object,Function],returnObject:Boolean},"DataTable-items");function Qt(e,l,a,t){const n=e.returnObject?l:j(l,e.itemValue),u=j(l,e.itemSelectable,!0),c=t.reduce((s,r)=>(r.key!=null&&(s[r.key]=j(l,r.value)),s),{});return{type:"item",key:e.returnObject?j(l,e.itemValue):n,index:a,value:n,selectable:u,columns:c,raw:l}}function Xt(e,l,a){return l.map((t,n)=>Qt(e,t,n,a))}function Jt(e,l){return{items:x(()=>Xt(e,e.items,l.value))}}function Yt(e){let{page:l,itemsPerPage:a,sortBy:t,groupBy:n,search:u}=e;const c=it("VDataTable"),s=x(()=>({page:l.value,itemsPerPage:a.value,sortBy:t.value,groupBy:n.value,search:u.value}));let r=null;ct(s,()=>{Se(r,s.value)||((r==null?void 0:r.search)!==s.value.search&&(l.value=1),c.emit("update:options",s.value),r=s.value)},{deep:!0,immediate:!0})}const Zt=(e,l,a)=>e==null||l==null?-1:e.toString().toLocaleLowerCase().indexOf(l.toString().toLocaleLowerCase()),ea=w({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function ta(e,l,a){var s;const t=[],n=(a==null?void 0:a.default)??Zt,u=a!=null&&a.filterKeys?N(a.filterKeys):!1,c=Object.keys((a==null?void 0:a.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return t;e:for(let r=0;r<e.length;r++){const[i,o=i]=N(e[r]),f={},d={};let y=-1;if(l&&!(a!=null&&a.noFilter)){if(typeof i=="object"){const m=u||Object.keys(o);for(const v of m){const S=j(o,v,o),P=(s=a==null?void 0:a.customKeyFilter)==null?void 0:s[v];if(y=P?P(S,l,i):n(S,l,i),y!==-1&&y!==!1)P?f[v]=y:d[v]=y;else if((a==null?void 0:a.filterMode)==="every")continue e}}else y=n(i,l,i),y!==-1&&y!==!1&&(d.title=y);const p=Object.keys(d).length,b=Object.keys(f).length;if(!p&&!b||(a==null?void 0:a.filterMode)==="union"&&b!==c&&!p||(a==null?void 0:a.filterMode)==="intersection"&&(b!==c||!p))continue}t.push({index:r,matches:{...d,...f}})}return t}function aa(e,l,a,t){const n=D([]),u=D(new Map),c=x(()=>t!=null&&t.transform?L(l).map(r=>[r,t.transform(r)]):L(l));ae(()=>{const r=typeof a=="function"?a():L(a),i=typeof r!="string"&&typeof r!="number"?"":String(r),o=ta(c.value,i,{customKeyFilter:{...e.customKeyFilter,...L(t==null?void 0:t.customKeyFilter)},default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),f=L(l),d=[],y=new Map;o.forEach(p=>{let{index:b,matches:m}=p;const v=f[b];d.push(v),y.set(v.value,m)}),n.value=d,u.value=y});function s(r){return u.value.get(r.value)}return{filteredItems:n,filteredMatches:u,getMatches:s}}const la=w({...je(),width:[String,Number],search:String,...Kt(),...$t(),...xt(),...qt(),...Ft(),...Ot(),...Be(),...vt()},"DataTable"),na=w({...yt(),...la(),...ea(),...we()},"VDataTable"),ca=_()({name:"VDataTable",props:na(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0},setup(e,l){let{attrs:a,slots:t}=l;const{groupBy:n}=Lt(e),{sortBy:u,multiSort:c,mustSort:s}=Bt(e),{page:r,itemsPerPage:i}=bt(e),{columns:o,headers:f,sortFunctions:d,filterFunctions:y}=It(e,{groupBy:n,showSelect:T(e,"showSelect"),showExpand:T(e,"showExpand")}),{items:p}=Jt(e,o),b=T(e,"search"),{filteredItems:m}=aa(e,p,b,{transform:M=>M.columns,customKeyFilter:y}),{toggleSort:v}=_t({sortBy:u,multiSort:c,mustSort:s,page:r}),{sortByWithGroups:S,opened:P,extractRows:h,isGroupOpen:I,toggleGroup:A}=jt({groupBy:n,sortBy:u}),{sortedItems:Q}=Et(e,m,S,d),{flatItems:E}=Gt(Q,n,P),R=x(()=>E.value.length),{startIndex:K,stopIndex:X,pageCount:Ne,setItemsPerPage:Ge}=ht({page:r,itemsPerPage:i,itemsLength:R}),{paginatedItems:J}=St({items:E,startIndex:K,stopIndex:X,itemsPerPage:i}),Y=x(()=>h(J.value)),{isSelected:He,select:Re,selectAll:Ke,toggleSelect:ze,someSelected:Ue,allSelected:We}=Ct(e,{allItems:p,currentPage:Y}),{isExpanded:qe,toggleExpand:Qe}=zt(e);Yt({page:r,itemsPerPage:i,sortBy:u,groupBy:n,search:b}),dt({VDataTableRows:{hideNoData:T(e,"hideNoData"),noDataText:T(e,"noDataText"),loading:T(e,"loading"),loadingText:T(e,"loadingText")}});const k=x(()=>({page:r.value,itemsPerPage:i.value,sortBy:u.value,pageCount:Ne.value,toggleSort:v,setItemsPerPage:Ge,someSelected:Ue.value,allSelected:We.value,isSelected:He,select:Re,selectAll:Ke,toggleSelect:ze,isExpanded:qe,toggleExpand:Qe,isGroupOpen:I,toggleGroup:A,items:Y.value.map(M=>M.raw),internalItems:Y.value,groupedItems:J.value,columns:o.value,headers:f.value}));return H(()=>{const M=be.filterProps(e),Xe=he.filterProps(e),Je=pe.filterProps(e),Ye=ve.filterProps(e);return g(ve,C({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},Ye),{top:()=>{var $;return($=t.top)==null?void 0:$.call(t,k.value)},default:()=>{var $,se,oe,ie,ce,de;return t.default?t.default(k.value):g(G,null,[($=t.colgroup)==null?void 0:$.call(t,k.value),g("thead",null,[g(he,Xe,t)]),(se=t.thead)==null?void 0:se.call(t,k.value),g("tbody",null,[(oe=t["body.prepend"])==null?void 0:oe.call(t,k.value),t.body?t.body(k.value):g(pe,C(a,Je,{items:J.value}),t),(ie=t["body.append"])==null?void 0:ie.call(t,k.value)]),(ce=t.tbody)==null?void 0:ce.call(t,k.value),(de=t.tfoot)==null?void 0:de.call(t,k.value)])},bottom:()=>t.bottom?t.bottom(k.value):g(G,null,[g(ft,null,null),g(be,M,{prepend:t["footer.prepend"]})])})}),{}}});export{ca as V,la as a,we as b,Lt as c,Bt as d,bt as e,It as f,jt as g,ht as h,Gt as i,Ct as j,zt as k,Yt as l,yt as m,be as n,he as o,_t as p,pe as q,Jt as u};

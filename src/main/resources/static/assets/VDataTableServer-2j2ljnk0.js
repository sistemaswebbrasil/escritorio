import{ae as Z,af as $,an as ee,as as ae,f as g,ax as s,bp as te,aw as se,ay as oe,b as o,F as re,y as v}from"./index-LbRqvFTT.js";import{m as le,a as ne,b as ue,c as de,d as ce,e as ie,f as pe,u as me,p as ge,g as ve,h as be,i as he,j as Se,k as Pe,l as fe,n as V,o as x,q as _}from"./VDataTable-qfrz0c0D.js";import{V as w}from"./VTable-QBMNnDY3.js";var Te={VITE_API_BASE_URL:"https://api.example.com",BASE_URL:"/",MODE:"pro",DEV:!1,PROD:!0,SSR:!1};const A=Z(),ye=Te.VITE_UNSPLASH_ACCESS_KEY,n=$.create({baseURL:"https://api.unsplash.com",timeout:2e4,headers:{Authorization:"Client-ID "+ye}});n.interceptors.response.use(e=>e,e=>{if(e.response){e.response.status;const i=e.response.data;A.showErrorMessage(i.errors[0])}else A.showErrorMessage("Network Error");return Promise.reject(e)});const _e=e=>n.get("/topics",{params:e}),we=e=>n.get("/search/photos",{params:e}),Ae=e=>n.get("/search/collections",{params:e}),Ie=e=>n.get("/search/users",{params:e}),De=ee({itemsLength:{type:[Number,String],required:!0},...le(),...ne(),...ue()},"VDataTableServer"),Re=ae()({name:"VDataTableServer",props:De(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:expanded":e=>!0,"update:groupBy":e=>!0},setup(e,i){let{attrs:I,slots:a}=i;const{groupBy:u}=de(e),{sortBy:r,multiSort:R,mustSort:B}=ce(e),{page:d,itemsPerPage:p}=ie(e),k=g(()=>parseInt(e.itemsLength,10)),{columns:b,headers:C}=pe(e,{groupBy:u,showSelect:s(e,"showSelect"),showExpand:s(e,"showExpand")}),{items:c}=me(e,b),{toggleSort:h}=ge({sortBy:r,multiSort:R,mustSort:B,page:d}),{opened:L,isGroupOpen:F,toggleGroup:G,extractRows:N}=ve({groupBy:u,sortBy:r}),{pageCount:H,setItemsPerPage:U}=be({page:d,itemsPerPage:p,itemsLength:k}),{flatItems:S}=he(c,u,L),{isSelected:O,select:M,selectAll:j,toggleSelect:q,someSelected:K,allSelected:Y}=Se(e,{allItems:c,currentPage:c}),{isExpanded:z,toggleExpand:W}=Pe(e),P=g(()=>N(c.value));fe({page:d,itemsPerPage:p,sortBy:r,groupBy:u,search:s(e,"search")}),te("v-data-table",{toggleSort:h,sortBy:r}),se({VDataTableRows:{hideNoData:s(e,"hideNoData"),noDataText:s(e,"noDataText"),loading:s(e,"loading"),loadingText:s(e,"loadingText")}});const t=g(()=>({page:d.value,itemsPerPage:p.value,sortBy:r.value,pageCount:H.value,toggleSort:h,setItemsPerPage:U,someSelected:K.value,allSelected:Y.value,isSelected:O,select:M,selectAll:j,toggleSelect:q,isExpanded:z,toggleExpand:W,isGroupOpen:F,toggleGroup:G,items:P.value.map(m=>m.raw),internalItems:P.value,groupedItems:S.value,columns:b.value,headers:C.value}));oe(()=>{const m=V.filterProps(e),J=x.filterProps(e),Q=_.filterProps(e),X=w.filterProps(e);return o(w,v({class:["v-data-table",{"v-data-table--loading":e.loading},e.class],style:e.style},X),{top:()=>{var l;return(l=a.top)==null?void 0:l.call(a,t.value)},default:()=>{var l,f,T,y,D,E;return a.default?a.default(t.value):o(re,null,[(l=a.colgroup)==null?void 0:l.call(a,t.value),o("thead",{class:"v-data-table__thead",role:"rowgroup"},[o(x,v(J,{sticky:e.fixedHeader}),a)]),(f=a.thead)==null?void 0:f.call(a,t.value),o("tbody",{class:"v-data-table__tbody",role:"rowgroup"},[(T=a["body.prepend"])==null?void 0:T.call(a,t.value),a.body?a.body(t.value):o(_,v(I,Q,{items:S.value}),a),(y=a["body.append"])==null?void 0:y.call(a,t.value)]),(D=a.tbody)==null?void 0:D.call(a,t.value),(E=a.tfoot)==null?void 0:E.call(a,t.value)])},bottom:()=>a.bottom?a.bottom(t.value):o(V,m,{prepend:a["footer.prepend"]})})})}});export{Re as V,we as a,Ae as b,_e as g,Ie as s};

import{V as T,b as S}from"./VDataTableServer-yby96iOn.js";import{C as V}from"./CopyLabel-jtDitTvg.js";import{h as U}from"./moment-fFIuWyvF.js";import{d as B,r as u,W as N,o as p,i as h,w as r,b as s,p as P,m as Y,l as t,O as z,j as a,X as F,t as c,E as I,e as w,P as g,a as b,D as C,F as x,q as L,N as R,bl as $}from"./index-RUDlLveH.js";import{V as D}from"./VChip-NHzxVvhF.js";import{V as j}from"./VContainer-XOr508x_.js";import"./VDataTable-0yUNH8cg.js";import"./VSelect-BKSYh0lv.js";import"./VCheckboxBtn-X4A1T9dB.js";import"./VPagination--G7lNM6m.js";import"./VTable-TA8ATWpd.js";import"./VTooltip-85dE-O8Z.js";const A=t("span",null," Unsplash Collections",-1),E={class:"w-25"},M={class:"font-weight-bold"},W={class:"font-weight-bold"},X=["src"],G={class:"text-center"},H={class:"pa-2"},J={class:"d-flex align-center"},pe=B({__name:"CollectionsDataPage",setup(K){const m=u(!0),_=u(0),o=N({query:"cat",page:1,per_page:10}),q=[{title:"ID",key:"id"},{title:"Title",key:"title"},{title:"Owner",key:"user"},{title:"Total",key:"total_photos"},{title:"cover",key:"cover_photo"},{title:"preview",key:"preview_photos"},{title:"link",key:"links"},{title:"tags",key:"tags",width:"300px"},{title:"publish",key:"published_at"}],v=u([]),f=async()=>{m.value=!0;const l=await S(o);v.value=l.data.results.map(e=>({id:e.id,title:e.title,user:e.user,total_photos:e.total_photos,cover_photo:e.cover_photo,preview_photos:e.preview_photos,links:e.links,tags:e.tags,published_at:U(e.published_at).format("YYYY/MM/DD")})),_.value=l.data.total,m.value=!1},O=async i=>{o.query&&(o.per_page=i.itemsPerPage,o.page=i.page,await f())},d=u(!1),y=u(""),k=i=>{y.value=i,d.value=!0};return(i,l)=>(p(),h(j,null,{default:r(()=>[s(L,null,{default:r(()=>[s(P,{class:"font-weight-bold"},{default:r(()=>[A,s(Y),t("div",E,[s(z,{modelValue:a(o).query,"onUpdate:modelValue":l[0]||(l[0]=e=>a(o).query=e),variant:"solo","prepend-inner-icon":"mdi-magnify","onClick:append":f,label:"Search","single-line":"","hide-details":"",clearable:"",density:"compact"},null,8,["modelValue"])])]),_:1}),s(F),t("div",null,[s(T,{headers:q,items:a(v),search:a(o).query,loading:a(m),"items-per-page":a(o).per_page,"items-length":a(_),"item-value":"id","onUpdate:options":O,"fixed-header":"",height:"900"},{item:r(({item:e})=>[t("tr",null,[t("td",null,"# "+c(e.id),1),t("td",M,c(e.title),1),t("td",W,[s(I,{size:"30",class:"mr-2"},{default:r(()=>[t("img",{src:e.user.profile_image.small,alt:"alt"},null,8,X)]),_:2},1024),s(V,{text:e.user.username},null,8,["text"])]),t("td",G,[s(D,{size:"small"},{default:r(()=>[w(c(e.total_photos),1)]),_:2},1024)]),t("td",H,[s(g,{src:e.cover_photo.urls.thumb,height:"100",width:"160",cover:"",class:"rounded-lg v-card--link",onClick:n=>k(e.cover_photo.urls.regular)},null,8,["src","onClick"])]),t("td",null,[t("div",J,[(p(!0),b(x,null,C(e.preview_photos,n=>(p(),h(g,{key:n.id,src:n.urls.thumb,onClick:Q=>k(n.urls.regular),height:"100",width:"60",cover:"",class:"mr-2 rounded-lg v-card--link"},null,8,["src","onClick"]))),128))])]),t("td",null,[s(V,{text:e.links.html},null,8,["text"])]),t("td",null,[(p(!0),b(x,null,C(e.tags,n=>(p(),h(D,{variant:"outlined",color:"grey",size:"small",class:"font-weight-bold mx-1 my-1"},{default:r(()=>[w(c(n.title),1)]),_:2},1024))),256))]),t("td",null,c(e.published_at),1)])]),_:1},8,["items","search","loading","items-per-page","items-length"])])]),_:1}),s($,{modelValue:a(d),"onUpdate:modelValue":l[2]||(l[2]=e=>R(d)?d.value=e:null),"location-strategy":"connected","scroll-strategy":"none"},{default:r(()=>[t("div",{onClick:l[1]||(l[1]=e=>d.value=!1),class:"w-screen h-screen d-flex align-center justify-center"},[s(g,{height:"80%",src:a(y)},null,8,["src"])])]),_:1},8,["modelValue"])]),_:1}))}});export{pe as default};
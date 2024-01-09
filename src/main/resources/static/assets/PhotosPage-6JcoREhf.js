import{d as te,r as L,o as s,i as n,w as e,b as t,m as E,n as _,V as j,e as c,al as ne,j as o,a as v,F as P,D as $,T as _e,L as T,q as g,P as x,l as r,t as u,J as me,K as ge,_ as le,W as w,E as M,y as G,Z as K,as as ve,b7 as ye,bd as ke,ai as Ve,g as be,cj as we,O as xe,a2 as Ce,R as U,N as O,H as Z,S as b,b0 as Pe,af as F,k as $e,p as oe,G as re}from"./index-DifJdLXL.js";import{u as ae,P as Se}from"./PhotoDetailModal-Aj4WDToB.js";import{V as q}from"./VTooltip-0cg16MN_.js";import{B as R,c as N}from"./unsplashConfig-YL7qeu2p.js";import{d as ze,V as Ie,a as Q,b as qe,c as X,e as Y}from"./VWindowItem-cUl01BDS.js";import{V as Te}from"./VDialog-JwdIxwA1.js";import{V as De}from"./VContainer--iNOqRDe.js";import"./install-JAUlnq3L.js";import"./VChip-S1zMHqeR.js";const Ue=y=>(me("data-v-a8b1b40c"),y=y(),ge(),y),Ge=Ue(()=>r("span",null," My favorite ",-1)),Le={key:0,class:"favorite-container pa-3"},je={style:{width:"100px"}},Ae={class:"px-2 flex-fill two-line"},Be=te({__name:"FavoriteCard",setup(y){const i=ae();return L(!1),(S,p)=>(s(),n(g,{class:"mt-2 my-favorite",height:"80vh"},{default:e(()=>[t(ne,{class:"pl-5",density:"compact",color:"primary"},{default:e(()=>[Ge,t(E),t(_,{icon:"",variant:"text"},{default:e(()=>[t(j,null,{default:e(()=>[c("mdi-open-in-new")]),_:1})]),_:1})]),_:1}),o(i).favoriteList.length>0?(s(),v("div",Le,[t(_e,{name:"fade",class:""},{default:e(()=>[(s(!0),v(P,null,$(o(i).favoriteList,h=>(s(),n(g,{key:h.id,class:"d-flex align-center favorite-card mb-3"},{default:e(()=>[r("div",je,[t(x,{"aspect-ratio":1,width:"100",cover:"",src:h.urls.thumb,"lazy-src":h.urls.thumb},null,8,["src","lazy-src"])]),r("div",Ae,u(h.description||h.alt_description),1)]),_:2},1024))),128))]),_:1})])):T("",!0)]),_:1}))}}),Fe=le(Be,[["__scopeId","data-v-a8b1b40c"]]),Re={class:""},Ne={class:"card-top bg-secondary-lighten-1 text-content"},Ee=["src"],Me={class:"flex-fill"},Ke={class:"d-flex px-2"},We=te({__name:"UserCard",props:{user:{}},setup(y){return ae(),w({isShow:!1,timeout:1e3,text:""}),(i,S)=>(s(),v("div",Re,[t(g,{width:"100%",class:"user-card d-flex flex-column justify-space-between"},{default:e(()=>[r("div",Ne,[t(M,{class:"mr-5",size:"avatarSize"},{default:e(()=>[r("img",{src:i.user.profile_image.small,alt:"alt"},null,8,Ee)]),_:1}),r("div",Me,[r("h5",null,u(i.user.name),1),r("h5",null,u(i.user.username),1)]),t(q,{location:"bottom",text:"Add To Collection"},{activator:e(({props:p})=>[t(_,G(p,{icon:"mdi-plus"}),null,16)]),_:1})]),r("div",Ke,[i.user.photos.length>0?(s(),n(x,{height:"100",cover:"",key:i.user.photos[0].id,src:i.user.photos[0].urls.small},null,8,["src"])):T("",!0),i.user.photos.length>1?(s(),n(x,{class:"mx-1",height:"100",cover:"",key:i.user.photos[1].id,src:i.user.photos[1].urls.small},null,8,["src"])):T("",!0),i.user.photos.length>2?(s(),n(x,{height:"100",cover:"",key:i.user.photos[2].id,src:i.user.photos[2].urls.small},null,8,["src"])):T("",!0)]),t(K,null,{default:e(()=>[t(q,{location:"bottom",text:"Profile"},{activator:e(({props:p})=>[t(_,G({color:"primary",variant:"flat",block:""},p,{to:`/apps/unsplash/user/${i.user.username}`}),{default:e(()=>[c(" Profile")]),_:2},1040,["to"])]),_:1})]),_:1})]),_:1})]))}}),He=le(We,[["__scopeId","data-v-a3252f2f"]]),ee=ve()({name:"VSlideGroupItem",props:ye(),emits:{"group:selected":y=>!0},setup(y,i){let{slots:S}=i;const p=ke(y,ze);return()=>{var h;return(h=S.default)==null?void 0:h.call(S,{isSelected:p.isSelected.value,select:p.select,toggle:p.toggle,selectedClass:p.selectedClass.value})}}}),Je={class:"ml-2"},Oe={class:"ml-2"},Ze={class:"ml-2"},Qe=["src"],Xe={class:"pa-2 flex-fill"},Ye=["src"],et={class:"text-accent"},tt={class:"card-top bg-secondary-lighten-1 text-content"},lt=["src"],at={class:"flex-fill"},st=te({__name:"PhotosPage",setup(y){const i=ae(),S=Ve(),p=w({url:R+"search?",query:"blue",perPage:20,page:1}),h=w({url:R+"search/photos?",query:"blue",perPage:20,page:1}),z=w({url:R+"search/collections?",query:"blue",perPage:20,page:1}),I=w({url:R+"search/users?",query:"blue",perPage:20,page:1}),k=w({photos:[],total:0,totalPages:0}),C=w({collections:[],total:0,totalPages:0}),V=w({users:[],total:0,totalPages:0}),A=L([]),D=L(null),W=async()=>{const a=await F.get(`${p.url}page=${p.page}&per_page=${p.perPage}&query=${p.query}`,N);k.photos=a.data.photos.results,k.total=a.data.photos.total,k.totalPages=a.data.photos.total_pages,C.collections=a.data.collections.results,C.total=a.data.collections.total,C.totalPages=a.data.collections.total_pages,V.users=a.data.users.results,V.total=a.data.users.total,V.totalPages=a.data.users.total_pages,A.value=a.data.related_searches,ue()};be(()=>{W()});const ue=()=>{k.photos.forEach(a=>{a.liked_by_user=i.favoriteList.some(d=>d.id===a.id)})},ie=async()=>{h.page++;const a=await F.get(`${h.url}page=${h.page}&per_page=${h.perPage}&query=${h.query}`,N);k.photos.push(...a.data.results)},ce=async()=>{z.page++;const a=await F.get(`${z.url}page=${z.page}&per_page=${z.perPage}&query=${z.query}`,N);C.collections.push(...a.data.results)},de=async()=>{I.page++;const a=await F.get(`${I.url}page=${I.page}&per_page=${I.perPage}&query=${I.query}`,N);V.users.push(...a.data.results)},H=a=>{p.query=a,h.query=a,z.query=a,I.query=a,W()},m=w({isShow:!1,timeout:1e3,text:""}),pe=a=>{a.liked_by_user?(m.text="Removed from your favorite",m.isShow=!0,i.removeFromFavorite(a),a.likes--):(m.text="Added to your favorite",m.isShow=!0,i.addToFavorite(a),a.likes++),a.liked_by_user=!a.liked_by_user},he=a=>{const d=document.createElement("a");d.href=a.links.download+"&force=true",d.download=a.id+".jpg",d.click(),m.text="Downloading now, please wait",m.timeout=2e3,m.isShow=!0,m.timeout=1e3},B=L(!1),se=L(""),fe=a=>{se.value=a,B.value=!0};return(a,d)=>(s(),n(De,{class:"photo-page"},{default:e(()=>[t(ne,{color:"primary"},{default:e(()=>[t(we),t(xe,{modelValue:o(p).query,"onUpdate:modelValue":d[0]||(d[0]=l=>o(p).query=l),"hide-details":"","prepend-inner-icon":"mdi-magnify","single-line":"",placeholder:"Search photos",onKeyup:Ce(W,["enter"])},null,8,["modelValue"]),t(E),t(_,{color:""},{default:e(()=>[c("Go")]),_:1})]),_:1}),t(b,null,{default:e(()=>[t(U,{cols:"12",xl:"10"},{default:e(()=>[t(g,{class:"mt-2"},{default:e(()=>[t(Ie,{modelValue:o(D),"onUpdate:modelValue":d[1]||(d[1]=l=>O(D)?D.value=l:null),"bg-color":"primary"},{default:e(()=>[t(Q,{value:"photos"},{default:e(()=>[t(j,{class:"mr-2"},{default:e(()=>[c("mdi-image-outline")]),_:1}),c(" photos "),r("span",Je,"("+u(o(k).total)+")",1)]),_:1}),t(Q,{value:"collections"},{default:e(()=>[c(" collections"),r("span",Oe,"("+u(o(C).total)+")",1)]),_:1}),t(Q,{value:"users"},{default:e(()=>[t(j,{class:"mr-2"},{default:e(()=>[c("mdi-account-multiple")]),_:1}),c(" users"),r("span",Ze,"("+u(o(V).total)+")",1)]),_:1})]),_:1},8,["modelValue"]),t(Z,null,{default:e(()=>[t(qe,{modelValue:o(D),"onUpdate:modelValue":d[2]||(d[2]=l=>O(D)?D.value=l:null)},{default:e(()=>[t(X,{value:"photos"},{default:e(()=>[o(k).total===0?(s(),n(g,{key:0,"min-height":"80vh",class:"pa-5 d-flex align-center justify-center"},{default:e(()=>[t(x,{src:"https://unsplash-assets.imgix.net/empty-states/photos.png",height:"400"})]),_:1})):(s(),n(g,{key:1,"min-height":"80vh",class:"pa-5"},{default:e(()=>[t(b,null,{default:e(()=>[t(Y,{"show-arrows":""},{default:e(()=>[(s(!0),v(P,null,$(o(A),l=>(s(),n(ee,{key:l.title},{default:e(({isSelected:f})=>[t(_,{class:"ma-2",rounded:"",color:f?"primary":void 0,onClick:J=>H(l.title)},{default:e(()=>[c(u(l.title),1)]),_:2},1032,["color","onClick"])]),_:2},1024))),128))]),_:1})]),_:1}),t(b,null,{default:e(()=>[(s(!0),v(P,null,$(o(k).photos,l=>(s(),n(U,{cols:"12",xl:"2",lg:"3",md:"4",sm:"6",key:l.id},{default:e(()=>[t(g,{width:"100%",class:"info-card photo-card d-flex flex-column",height:"480"},{default:e(()=>[r("div",null,[t(x,{class:"align-end text-white",src:l.urls.small,"lazy-src":l.urls.small,height:"300",cover:"",onClick:f=>fe(l.id)},{placeholder:e(()=>[t(b,{class:"fill-height ma-0",align:"center",justify:"center"},{default:e(()=>[t($e,{indeterminate:"",color:"grey-lighten-5"})]),_:1})]),default:e(()=>[t(oe,{class:"card-title"},{default:e(()=>[t(M,{size:"avatarSize",class:"mr-2"},{default:e(()=>[r("img",{src:l.user.profile_image.small,alt:"alt"},null,8,Qe)]),_:2},1024),c(" "+u(l.user.username),1)]),_:2},1024)]),_:2},1032,["src","lazy-src","onClick"])]),t(re,{class:"mt-5"},{default:e(()=>[r("div",null," size: height:"+u(l.height)+" width:"+u(l.width),1)]),_:2},1024),t(Z,null,{default:e(()=>[c(u(l.alt_description)+" ",1),r("div",null,u(l.download_url),1)]),_:2},1024),t(K,null,{default:e(()=>[t(_,{onClick:f=>pe(l)},{default:e(()=>[l.liked_by_user?(s(),n(j,{key:0,start:"",color:"pink",icon:"mdi-heart",class:"heartBeat"})):(s(),n(j,{key:1,start:"",icon:"mdi-heart-outline"})),c(" Like("+u(l.likes)+") ",1),t(q,{activator:"parent",location:"bottom",class:"",text:l.liked_by_user?"Liked":"Like"},null,8,["text"])]),_:2},1032,["onClick"]),t(E),t(q,{location:"bottom",text:"Download"},{activator:e(({props:f})=>[t(_,G(f,{icon:"mdi-download",onClick:J=>he(l)}),null,16,["onClick"])]),_:2},1024),t(q,{location:"bottom",text:"Add To Collection"},{activator:e(({props:f})=>[t(_,G(f,{icon:"mdi-plus"}),null,16)]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}),o(h).page<o(k).totalPages?(s(),n(_,{key:0,color:"",class:"gradient info mt-5",block:"",size:"large",onClick:ie},{default:e(()=>[c("More Photos...")]),_:1})):T("",!0)]),_:1}))]),_:1}),t(X,{value:"collections"},{default:e(()=>[o(C).total===0?(s(),n(g,{key:0,"min-height":"80vh",class:"pa-5 d-flex align-center justify-center"},{default:e(()=>[t(x,{src:"https://unsplash-assets.imgix.net/empty-states/photos.png",height:"400"})]),_:1})):(s(),n(g,{key:1,"min-height":"80vh",class:"pa-5"},{default:e(()=>[t(b,null,{default:e(()=>[t(Y,{"show-arrows":""},{default:e(()=>[(s(!0),v(P,null,$(o(A),l=>(s(),n(ee,{key:l.title},{default:e(({isSelected:f})=>[t(_,{class:"ma-2",rounded:"",color:f?"primary":void 0,onClick:J=>H(l.title)},{default:e(()=>[c(u(l.title),1)]),_:2},1032,["color","onClick"])]),_:2},1024))),128))]),_:1})]),_:1}),t(b,null,{default:e(()=>[(s(!0),v(P,null,$(o(C).collections,l=>(s(),n(U,{cols:"12",lg:"6",xl:"4",key:l.id},{default:e(()=>[t(g,{class:"info-card collection-card d-flex mt-5",color:"secondary-lighten-1"},{default:e(()=>[t(x,{"max-width":"200","aspect-ratio":"1",cover:"",src:l.cover_photo.urls.small,"lazy-src":l.cover_photo.urls.small,onClick:f=>o(S).push({name:"unsplash-collection",params:{id:l.id}})},null,8,["src","lazy-src","onClick"]),r("div",Xe,[t(oe,null,{default:e(()=>[c(u(l.title),1)]),_:2},1024),t(re,{class:"pt-4"},{default:e(()=>[t(M,{size:"avatarSize"},{default:e(()=>[r("img",{src:l.user.profile_image.small,alt:"alt"},null,8,Ye)]),_:2},1024),c(" "+u(l.user.username),1)]),_:2},1024),t(Z,null,{default:e(()=>[r("div",null,u(l.description),1)]),_:2},1024),t(K,null,{default:e(()=>[r("span",null,u(l.published_at),1),t(E),r("span",et,u(l.total_photos),1)]),_:2},1024)])]),_:2},1024)]),_:2},1024))),128))]),_:1}),o(z).page<o(C).totalPages?(s(),n(_,{key:0,color:"",class:"gradient info mt-5",block:"",size:"large",onClick:ce},{default:e(()=>[c("More Collections...")]),_:1})):T("",!0)]),_:1}))]),_:1}),t(X,{value:"users"},{default:e(()=>[o(V).total===0?(s(),n(g,{key:0,"min-height":"80vh",class:"pa-5 d-flex align-center justify-center"},{default:e(()=>[t(x,{src:"https://unsplash-assets.imgix.net/empty-states/photos.png",height:"400"})]),_:1})):(s(),n(g,{key:1,"min-height":"80vh",class:"pa-5"},{default:e(()=>[t(b,null,{default:e(()=>[t(Y,{"show-arrows":""},{default:e(()=>[(s(!0),v(P,null,$(o(A),l=>(s(),n(ee,{key:l.title},{default:e(({isSelected:f})=>[t(_,{class:"ma-2",rounded:"",color:f?"primary":void 0,onClick:J=>H(l.title)},{default:e(()=>[c(u(l.title),1)]),_:2},1032,["color","onClick"])]),_:2},1024))),128))]),_:1})]),_:1}),t(b,null,{default:e(()=>[(s(!0),v(P,null,$(o(V).users,l=>(s(),n(U,{cols:"12",lg:"3",md:"4",sm:"6",key:l.id},{default:e(()=>[t(g,{width:"100%",class:"info-card user-card d-flex flex-column justify-space-between"},{default:e(()=>[r("div",tt,[t(M,{class:"mr-5",size:"avatarSize"},{default:e(()=>[r("img",{src:l.profile_image.small,alt:"alt"},null,8,lt)]),_:2},1024),r("div",at,[r("h5",null,u(l.name),1),r("h5",null,u(l.username),1)]),t(q,{location:"bottom",text:"Add To Collection"},{activator:e(({props:f})=>[t(_,G(f,{icon:"mdi-plus"}),null,16)]),_:1})]),t(K,null,{default:e(()=>[t(q,{location:"bottom",text:"Add To Collection"},{activator:e(({props:f})=>[t(_,G({color:"primary",variant:"flat",block:""},f,{to:`/apps/unsplash/user/${l.username}`}),{default:e(()=>[c(" Profile")]),_:2},1040,["to"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}),o(I).page<o(V).totalPages?(s(),n(_,{key:0,color:"",class:"gradient info mt-5",block:"",size:"large",onClick:de},{default:e(()=>[c("More Users...")]),_:1})):T("",!0),t(b,null,{default:e(()=>[(s(!0),v(P,null,$(o(V).users,l=>(s(),n(U,{cols:"12",lg:"4",sm:"6",key:l.id},{default:e(()=>[t(He,{user:l},null,8,["user"])]),_:2},1024))),128))]),_:1})]),_:1}))]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(U,{cols:"0",xl:"2"},{default:e(()=>[t(Fe)]),_:1})]),_:1}),t(Pe,{modelValue:o(m).isShow,"onUpdate:modelValue":d[4]||(d[4]=l=>o(m).isShow=l),timeout:o(m).timeout},{actions:e(()=>[t(_,{color:"blue",variant:"text",onClick:d[3]||(d[3]=l=>o(m).isShow=!1)},{default:e(()=>[c(" Close ")]),_:1})]),default:e(()=>[c(u(o(m).text)+" ",1)]),_:1},8,["modelValue","timeout"]),t(Te,{modelValue:o(B),"onUpdate:modelValue":d[5]||(d[5]=l=>O(B)?B.value=l:null)},{default:e(()=>[t(Se,{photoId:o(se)},null,8,["photoId"])]),_:1},8,["modelValue"])]),_:1}))}}),ft=le(st,[["__scopeId","data-v-dfd619db"]]);export{ft as default};

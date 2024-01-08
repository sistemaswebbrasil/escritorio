import{B as v,c as y}from"./unsplashConfig-YL7qeu2p.js";import{d as A,cK as H,f as V,r as d,W as J,o as t,a as m,j as l,i as o,w as e,b as s,S as k,R as x,P as C,l as f,t as w,e as r,V as p,L as B,F as b,D as R,a0 as n,N,H as z,af as P,J as G,K as M,_ as O}from"./index-5UehqYXh.js";import{u as Q,a as X,C as Y}from"./PhotoDetailModal-dBzm93Nh.js";import{V as Z}from"./VContainer-BCpTP6Vi.js";import{V as $,a as S,b as ee,c as D}from"./VWindowItem-cv5jpyz-.js";import{V as se}from"./VChip-4-pLF36n.js";import"./VTooltip-cj1JSSGm.js";import"./VDialog-PWZFw8Se.js";import"./install-JAUlnq3L.js";const te=h=>(G("data-v-516296dc"),h=h(),M(),h),ae={class:"text-h3 font-weight-bold"},le={class:"my-5"},oe={key:0},re=te(()=>f("p",{class:"mb-3"},"Interests",-1)),ue=A({__name:"UserPage",setup(h){Q();const _=H(),j=V(()=>v+"users/"+_.params.username),T=V(()=>v+"users/"+_.params.username+"/photos"),W=V(()=>v+"users/"+_.params.username+"/likes"),E=V(()=>v+"users/"+_.params.username+"/collections"),u=d(null),F=d(null),g=d([]),U=d([]),i=d(null),I=d(!1),K=async()=>{I.value=!0;const L=await P.get(j.value,y),c=await P.get(T.value,y),a=await P.get(W.value,y),q=await P.get(E.value,y);F.value=c.data,u.value=L.data,g.value=a.data,U.value=q.data,I.value=!1};return J({isShow:!1,timeout:1e3,text:""}),K(),(L,c)=>(t(),m(b,null,[l(u)?(t(),o(n,{key:0,class:"profile-sheet"},{default:e(()=>[s(Z,{class:"profile-container"},{default:e(()=>[s(k,null,{default:e(()=>[s(x,{cols:"12",md:"3",class:"pr-5"},{default:e(()=>[s(C,{class:"mx-auto",width:"200",style:{"border-radius":"50%"},src:l(u).profile_image.large},null,8,["src"])]),_:1}),s(x,{cols:"12",md:"9"},{default:e(()=>[f("h1",ae,w(l(u).username),1),f("p",le,[r(" Download free, beautiful high-quality photos curated by "),f("b",null,w(l(u).first_name),1)]),l(u).location?(t(),m("p",oe,[s(p,null,{default:e(()=>[r("mdi-map-marker")]),_:1}),r(w(l(u).location),1)])):B("",!0),re,f("div",null,[(t(!0),m(b,null,R(l(u).tags.aggregated,a=>(t(),o(se,{class:"interest-chip ma-2",color:"primary",label:"",key:a.title},{default:e(()=>[s(p,{start:"",icon:"mdi-bookmark-outline"}),r(" "+w(a.title),1)]),_:2},1024))),128))])]),_:1})]),_:1})]),_:1})]),_:1})):B("",!0),s(n,{class:"mt-5 shadow-1"},{default:e(()=>[s($,{color:"primary",modelValue:l(i),"onUpdate:modelValue":c[0]||(c[0]=a=>N(i)?i.value=a:null),"bg-color":"transparent",sliderColor:"primary"},{default:e(()=>[s(S,{value:"photos"},{default:e(()=>[s(p,{class:"mr-2"},{default:e(()=>[r("mdi-image")]),_:1}),r("Photos")]),_:1}),s(S,{value:"likes"},{default:e(()=>[s(p,{class:"mr-2"},{default:e(()=>[r("mdi-heart")]),_:1}),r("Likes")]),_:1}),s(S,{value:"collections"},{default:e(()=>[s(p,{class:"mr-2"},{default:e(()=>[r("mdi-image")]),_:1}),r("Collections")]),_:1})]),_:1},8,["modelValue"]),s(z,null,{default:e(()=>[s(ee,{modelValue:l(i),"onUpdate:modelValue":c[1]||(c[1]=a=>N(i)?i.value=a:null)},{default:e(()=>[s(D,{value:"photos"},{default:e(()=>[l(g).length>0?(t(),o(n,{key:0,"min-height":"80vh"},{default:e(()=>[s(k)]),_:1})):(t(),o(n,{key:1,"min-height":"80vh",class:"d-flex align-center justify-center"},{default:e(()=>[s(C,{src:"https://unsplash-assets.imgix.net/empty-states/photos.png",height:"400"})]),_:1}))]),_:1}),s(D,{value:"likes"},{default:e(()=>[l(g).length>0?(t(),o(n,{key:0,"min-height":"80vh"},{default:e(()=>[s(k,null,{default:e(()=>[(t(!0),m(b,null,R(l(g),a=>(t(),o(x,{cols:"12",sm:"6",md:"4",lg:"3",key:a.id},{default:e(()=>[s(X,{photo:a},null,8,["photo"])]),_:2},1024))),128))]),_:1})]),_:1})):(t(),o(n,{key:1,"min-height":"80vh",class:"d-flex align-center justify-center"},{default:e(()=>[s(C,{src:"https://unsplash-assets.imgix.net/empty-states/photos.png",height:"400"})]),_:1}))]),_:1}),s(D,{value:"collections",class:"pa-1"},{default:e(()=>[l(U).length>0?(t(),o(n,{key:0,"min-height":"80vh"},{default:e(()=>[s(k,null,{default:e(()=>[(t(!0),m(b,null,R(l(U),a=>(t(),o(x,{cols:"12",sm:"6",lg:"4",key:a.id},{default:e(()=>[s(Y,{collection:a},null,8,["collection"])]),_:2},1024))),128))]),_:1})]),_:1})):(t(),o(n,{key:1,"min-height":"80vh",class:"d-flex align-center justify-center"},{default:e(()=>[s(C,{src:"https://unsplash-assets.imgix.net/empty-states/photos.png",height:"400"})]),_:1}))]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})],64))}}),ge=O(ue,[["__scopeId","data-v-516296dc"]]);export{ge as default};

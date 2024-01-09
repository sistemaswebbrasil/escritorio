import{af as U,U as S,d as x,W as P,o as n,i as f,w as t,b as e,Y as d,e as s,j as o,n as g,H as c,q as V,g as C,r as N,R as b,al as k,N as w,cj as B,am as W,m as A,V as T,p as D,X as G,a as R,D as H,F as M,S as j,P as q}from"./index-QyTbC9lg.js";import{V as _}from"./VTextarea-55_VY4P8.js";import{V as h}from"./VSlider-ns4kUfqV.js";import{V as z,a as I,b as F,c as L}from"./VWindowItem-Q8kzUNof.js";import{V as $}from"./VContainer-3hJRSD_G.js";U.defaults.validateStatus=function(m){return m>=200&&m<300};const y=U.create({baseURL:"/sdApi",timeout:1e5});y.interceptors.request.use();y.interceptors.response.use();const E=m=>y.post("/sdapi/v1/txt2img",m),X=m=>y.post("/sdapi/v1/img2img",m),v=S({id:"stableDiffusion",state:()=>({imgList:[],modelList:[],currentModel:""}),persist:{enabled:!0,strategies:[{storage:localStorage,paths:[""]}]},getters:{},actions:{updateImgList(m){this.imgList=m},updateModelList(m){this.modelList=m}}}),Y=x({__name:"ImageToImage",setup(m){const u=v(),a=P({seed:-1,enable_hr:!1,height:200,negative_prompt:"",prompt:"1cat",width:200,steps:20}),p=async()=>{const r=await E(a);u.updateImgList(r.data.images)};return(r,l)=>(n(),f(V,{height:"800"},{default:t(()=>[e(c,null,{default:t(()=>[e(d,{class:"font-weight-medium my-3"},{default:t(()=>[s("Prompt")]),_:1}),e(_,{modelValue:o(a).prompt,"onUpdate:modelValue":l[0]||(l[0]=i=>o(a).prompt=i),color:"primary",variant:"outlined",density:"compact",type:"text",placeholder:"Prompt","hide-details":""},null,8,["modelValue"]),e(d,{class:"font-weight-medium my-3"},{default:t(()=>[s("Negative Prompt")]),_:1}),e(_,{modelValue:o(a).negative_prompt,"onUpdate:modelValue":l[1]||(l[1]=i=>o(a).negative_prompt=i),color:"primary",variant:"outlined",density:"compact",type:"text",placeholder:"Negative Prompt","hide-details":""},null,8,["modelValue"]),e(d,{class:"font-weight-medium my-3"},{default:t(()=>[s("Width")]),_:1}),e(h,{modelValue:o(a).width,"onUpdate:modelValue":l[2]||(l[2]=i=>o(a).width=i),"thumb-label":"always",max:"2480",step:"10",color:"primary"},null,8,["modelValue"]),e(d,{class:"font-weight-medium my-3"},{default:t(()=>[s("Height")]),_:1}),e(h,{modelValue:o(a).height,"onUpdate:modelValue":l[3]||(l[3]=i=>o(a).height=i),"thumb-label":"always",max:"2480",step:"10",color:"primary"},null,8,["modelValue"]),e(g,{size:"x-large",color:"primary",block:"",onClick:p},{default:t(()=>[s("Generate")]),_:1})]),_:1})]),_:1}))}}),J=x({__name:"TextToImage",setup(m){const u=v(),a=P({seed:-1,enable_hr:!1,height:200,negative_prompt:"",prompt:"1cat",width:200,steps:20}),p=async()=>{const r=await X(a);u.updateImgList(r.data.images)};return(r,l)=>(n(),f(V,{height:"800"},{default:t(()=>[e(c,null,{default:t(()=>[e(d,{class:"font-weight-medium my-3"},{default:t(()=>[s("Prompt")]),_:1}),e(_,{modelValue:o(a).prompt,"onUpdate:modelValue":l[0]||(l[0]=i=>o(a).prompt=i),color:"primary",variant:"outlined",density:"compact",type:"text",placeholder:"Prompt","hide-details":""},null,8,["modelValue"]),e(d,{class:"font-weight-medium my-3"},{default:t(()=>[s("Negative Prompt")]),_:1}),e(_,{modelValue:o(a).negative_prompt,"onUpdate:modelValue":l[1]||(l[1]=i=>o(a).negative_prompt=i),color:"primary",variant:"outlined",density:"compact",type:"text",placeholder:"Negative Prompt","hide-details":""},null,8,["modelValue"]),e(d,{class:"font-weight-medium my-3"},{default:t(()=>[s("Width")]),_:1}),e(h,{modelValue:o(a).width,"onUpdate:modelValue":l[2]||(l[2]=i=>o(a).width=i),"thumb-label":"always",max:"2480",step:"10",color:"primary"},null,8,["modelValue"]),e(d,{class:"font-weight-medium my-3"},{default:t(()=>[s("Height")]),_:1}),e(h,{modelValue:o(a).height,"onUpdate:modelValue":l[3]||(l[3]=i=>o(a).height=i),"thumb-label":"always",max:"2480",step:"10",color:"primary"},null,8,["modelValue"]),e(g,{size:"x-large",color:"primary",block:"",onClick:p},{default:t(()=>[s("Generate")]),_:1})]),_:1})]),_:1}))}}),te=x({__name:"ImageBot",setup(m){const u=v();C(()=>{});const a=N("textToImage");return(p,r)=>(n(),f($,{class:"h-full"},{default:t(()=>[e(j,{class:"h-full"},{default:t(()=>[e(b,{cols:"12",md:"6"},{default:t(()=>[e(V,{class:"h-full"},{default:t(()=>[e(k,{color:"primary"},{extension:t(()=>[e(z,{"fixed-tabs":"",modelValue:o(a),"onUpdate:modelValue":r[0]||(r[0]=l=>w(a)?a.value=l:null),"bg-color":"primary"},{default:t(()=>[e(I,{value:"textToImage"},{default:t(()=>[s("textToImage")]),_:1}),e(I,{value:"imgToImage"},{default:t(()=>[s("imgToImage")]),_:1})]),_:1},8,["modelValue"])]),default:t(()=>[e(B),e(W,null,{default:t(()=>[s("Control Panel")]),_:1}),e(A),e(g,{icon:""},{default:t(()=>[e(T,null,{default:t(()=>[s("mdi-magnify")]),_:1})]),_:1}),e(g,{icon:""},{default:t(()=>[e(T,null,{default:t(()=>[s("mdi-dots-vertical")]),_:1})]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(F,{modelValue:o(a),"onUpdate:modelValue":r[1]||(r[1]=l=>w(a)?a.value=l:null)},{default:t(()=>[e(L,{value:"textToImage"},{default:t(()=>[e(J)]),_:1}),e(L,{value:"imgToImage"},{default:t(()=>[e(Y)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(V,{class:"h-full"},{default:t(()=>[e(D,null,{default:t(()=>[s(" Image Panel ")]),_:1}),e(G),e(c,null,{default:t(()=>[(n(!0),R(M,null,H(o(u).imgList,l=>(n(),f(q,{width:"300",src:l},null,8,["src"]))),256))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{te as default};

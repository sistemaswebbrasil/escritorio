import{B as t,c as e}from"./unsplashConfig-YL7qeu2p.js";import{d,cK as f,f as s,r as h,o as _,a as v,t as w,j as y,af as c}from"./index-DifJdLXL.js";const C={class:""},P=d({__name:"CollectionPage",setup(B){const a=f(),n=s(()=>t+"collections/"+a.params.id),i=s(()=>t+"collections/"+a.params.id+"/photos"),r=s(()=>t+"collections/"+a.params.id+"/similar"),l=h(!1),u=async()=>{l.value=!0,await g(),await m(),await p(),l.value=!1},g=async()=>{await c.get(n.value,e).then(o=>{console.log(o.data)}).catch(o=>{console.log(o)})},m=async()=>{await c.get(i.value,e).then(o=>{console.log(o.data)}).catch(o=>{console.log(o)})},p=async()=>{await c.get(r.value,e).then(o=>{console.log(o.data)}).catch(o=>{console.log(o)})};return u(),(o,S)=>(_(),v("div",C,w(y(a).params.id),1))}});export{P as default};

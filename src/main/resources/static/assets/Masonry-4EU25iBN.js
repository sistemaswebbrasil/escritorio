import{y as n}from"./index-PWBWJyi_.js";import{d as _,g as h,r as g,h as y,a8 as V,o as C,i as w,w as t,b as a,j as v,q as c,P as S,S as T,k as x,p as B,e as r,t as u,G as P,$ as k,n as d,a9 as H}from"./index-JShR_LJD.js";import{V as b}from"./VContainer-_XDME9SZ.js";const M=_({__name:"Masonry",setup(j){h(()=>{m()});const i=g([]),f=l=>{let e=0;return l%3===0?e=480:l%3===1?e=240:e=360,e},m=()=>{i.value=Array.from({length:15},(l,e)=>({id:e+"",url:n.image.animals(void 0,f(e),!0),title:n.lorem.word(),description:n.lorem.text()}))},p=l=>{const e=l.target,s=e.scrollHeight-e.scrollTop-e.clientHeight;console.log(s),s<1&&setTimeout(()=>{},1e3)};return(l,e)=>{const s=y("masonry-wall");return V((C(),w(b,{class:"h-full"},{default:t(()=>[a(c,null,{default:t(()=>[a(s,{items:v(i),"ssr-columns":1,padding:30},{default:t(({item:o})=>[a(c,{class:"ma-3"},{default:t(()=>[a(S,{class:"align-end text-white",src:o.url,"lazy-src":o.url,cover:""},{placeholder:t(()=>[a(T,{class:"fill-height ma-0",align:"center",justify:"center"},{default:t(()=>[a(x,{indeterminate:"",color:"grey-lighten-5"})]),_:1})]),default:t(()=>[a(B,null,{default:t(()=>[r("Title"+u(o.title),1)]),_:2},1024)]),_:2},1032,["src","lazy-src"]),a(P,{class:"pt-4"},{default:t(()=>[r(" The "+u(o.id)+" item ",1)]),_:2},1024),a(k,null,{default:t(()=>[a(d,{color:"primary"},{default:t(()=>[r(" Share ")]),_:1}),a(d,{color:"primary"},{default:t(()=>[r(" Explore ")]),_:1})]),_:1})]),_:2},1024)]),_:1},8,["items"])]),_:1})]),_:1})),[[H,p,void 0,{self:!0}]])}}});export{M as default};

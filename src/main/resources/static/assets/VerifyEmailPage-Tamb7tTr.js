import{d as f,r as e,g as m,a3 as _,o as p,i as h,w as c,b as g,e as x,t as b,j as o,n as y,q as k,l as d}from"./index-LbRqvFTT.js";const V=d("h1",{class:"text-h5 font-weight-bold"},"Please verify the email",-1),I=d("div",{class:"mb-5 text-grey text-caption"}," Please check your email for the link to verify the email. ",-1),i=5,E=f({__name:"VerifyEmailPage",setup(T){const u=e(!1),s=e(!0),n=e(0),t=e(""),a=e(i),l=e(),r=()=>{s.value=!0,n.value++,a.value=i*n.value,l.value=setInterval(()=>{a.value===0?(clearInterval(l.value),t.value="",s.value=!1):(t.value=`( ${a.value} )`,a.value--)},1e3)},v=()=>{r()};return m(()=>{r()}),_(()=>{clearInterval(l.value)}),(B,C)=>(p(),h(k,{class:"pa-5"},{default:c(()=>[V,I,g(y,{class:"text-capitalize",block:"",color:"primary",size:"x-large",loading:o(u),disabled:o(s),onClick:v},{default:c(()=>[x("Re-send email"+b(o(t)),1)]),_:1},8,["loading","disabled"])]),_:1}))}});export{E as default};

import{d,r as x,o as l,i as r,w as t,b as e,e as p,n as u,p as k,X as y,H as b,Z as C,m as h,q as v,j as V,N as g,M as w,A as s,ci as i,z as f,a as B,D as E,F as T,l as c,V as $,h as A,a5 as D,cs as I,_ as S}from"./index-DifJdLXL.js";import{V as L}from"./VDialog-JwdIxwA1.js";import{V as N}from"./VContainer--iNOqRDe.js";const F=d({__name:"EmailCompose",setup(m){const n=x(!1);return(_,o)=>(l(),r(L,{modelValue:V(n),"onUpdate:modelValue":o[2]||(o[2]=a=>g(n)?n.value=a:null),width:"600",location:"bottom"},{activator:t(({props:a})=>[e(u,{color:"#705CF6",block:"",props:a,size:"large",class:"mb-3 text-white",onClick:o[0]||(o[0]=K=>n.value=!0)},{default:t(()=>[p("Write an email")]),_:2},1032,["props"])]),default:t(()=>[e(v,null,{default:t(()=>[e(k,null,{default:t(()=>[p(" 请输入您的API KEY ")]),_:1}),e(y),e(b),e(C,null,{default:t(()=>[e(h),e(u,{block:"",color:"primary",text:"",onClick:o[1]||(o[1]=a=>n.value=!1)},{default:t(()=>[p("关闭")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),z=c("div",{class:"pa-1 mt-2 text-overline text-grey"},"Labels",-1),M=d({__name:"EmailMenu",setup(m){const n=w();return(_,o)=>(l(),r(v,{height:"100%",class:"pa-3"},{default:t(()=>[e(F),e(f,{nav:"",class:"mt-2 pa-0"},{default:t(()=>[e(s,{"prepend-icon":"mdi-inbox",to:"/apps/email/inbox","active-class":"text-primary",link:"",title:"Inbox"},{append:t(()=>[e(i,{color:"primary",content:"12",inline:""})]),_:1}),e(s,{"prepend-icon":"mdi-send-outline",to:"/apps/email/send","active-class":"text-primary",link:"",title:"Send"},{append:t(()=>[e(i,{color:"primary",content:"12",inline:""})]),_:1}),e(s,{"prepend-icon":"mdi-pencil-outline",to:"/apps/email/drafts","active-class":"text-primary",link:"",title:"Drafts"},{append:t(()=>[e(i,{color:"primary",content:"12",inline:""})]),_:1}),e(s,{"prepend-icon":"mdi-star-outline",to:"/apps/email/starred","active-class":"text-primary",link:"",title:"Starred"},{append:t(()=>[e(i,{color:"primary",content:"12",inline:""})]),_:1}),e(s,{"prepend-icon":"mdi-delete-restore",to:"/apps/email/trash","active-class":"text-primary",link:"",title:"Trash"},{append:t(()=>[e(i,{color:"primary",content:"12",inline:""})]),_:1})]),_:1}),z,e(f,{nav:"",class:"mt-2 pa-0"},{default:t(()=>[(l(!0),B(T,null,E(V(n).labels,a=>(l(),r(s,{"active-class":"text-primary",to:`/apps/todo/label/${a.id}`,link:"",title:a.title},{prepend:t(()=>[e($,{color:a.color},{default:t(()=>[p("mdi-label-outline ")]),_:2},1032,["color"])]),_:2},1032,["to","title"]))),256))]),_:1})]),_:1}))}}),j={class:"d-none d-md-block sidebar"},q={class:"main"},H=d({__name:"EmailApp",setup(m){return(n,_)=>{const o=A("router-view");return l(),r(N,{class:"app-container"},{default:t(()=>[c("div",j,[e(M)]),c("div",q,[e(o,null,{default:t(({Component:a})=>[e(D,{name:"fade"},{default:t(()=>[(l(),r(I(a)))]),_:2},1024)]),_:1})])]),_:1})}}}),W=S(H,[["__scopeId","data-v-b84509a3"]]);export{W as default};

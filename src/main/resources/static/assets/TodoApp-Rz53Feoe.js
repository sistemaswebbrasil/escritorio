import{d as C,M as S,o as c,i as p,w as t,b as e,e as n,n as _,A as f,ci as x,j as o,z as h,a as D,D as N,F as z,q as $,l as m,V as k,r as b,f as I,p as U,t as V,m as w,X as v,O as E,a2 as F,y as j,L as K,Z as M,N as O,h as q,a5 as P,cs as R,_ as X}from"./index-YGJtlbDp.js";import{V as Z}from"./VTextarea-tpgQzyfK.js";import{V as G}from"./VSelect-zu4RudQN.js";import{V as L}from"./VChip-HwKUQkLA.js";import{V as H}from"./VDialog-3ai4oPSv.js";import{V as J}from"./VContainer-k-6fJ1dU.js";import"./VCheckboxBtn-fyR1zHzv.js";const Q=m("div",{class:"pa-1 mt-2 text-overline text-grey"},"Labels",-1),W=C({__name:"TodoMenu",setup(T){const i=S();return(r,a)=>(c(),p($,{height:"100%",class:"pa-3"},{default:t(()=>[e(_,{color:"primary",block:"",size:"large",class:"mb-3"},{default:t(()=>[n("Add Task")]),_:1}),e(h,{nav:"",class:"mt-2 pa-0"},{default:t(()=>[e(f,{"prepend-icon":"mdi-calendar-check",to:"/apps/todo/tasks","active-class":"text-primary",link:"",title:"Tasks"},{append:t(()=>[e(x,{color:"primary",content:o(i).getTodoList.length,inline:""},null,8,["content"])]),_:1}),e(f,{"prepend-icon":"mdi-check",to:"/apps/todo/completed","active-class":"text-primary",link:"",title:"Completed"},{append:t(()=>[e(x,{color:"primary",content:o(i).getCompletedTodos.length,inline:""},null,8,["content"])]),_:1})]),_:1}),Q,e(h,{nav:"",class:"mt-2 pa-0"},{default:t(()=>[(c(!0),D(z,null,N(o(i).labels,d=>(c(),p(f,{"active-class":"text-primary",to:`/apps/todo/label/${d.id}`,link:"",title:d.title,key:d.id},{prepend:t(()=>[e(k,{color:d.color},{default:t(()=>[n("mdi-label-outline ")]),_:2},1032,["color"])]),_:2},1032,["to","title"]))),128))]),_:1})]),_:1}))}}),Y={class:"pr-2"},ee=C({__name:"TodoCard",setup(T){const i=S(),r=b(!1),a=b({id:"",title:"",detail:"",tags:[],completed:!1}),d=I(()=>a.value&&!!a.value.id),y=()=>{r.value=!1},g=()=>{a.value&&(d.value?i.updateTodo(a.value):i.addNewTodo(a.value)),y()};return(oe,s)=>(c(),p(H,{modelValue:o(r),"onUpdate:modelValue":s[4]||(s[4]=l=>O(r)?r.value=l:null),width:"600"},{default:t(()=>[e($,null,{default:t(()=>[e(U,{class:"pa-2"},{default:t(()=>[n(V(o(d)?"Edit Task":"Add Task")+" ",1),e(w),e(_,{icon:"",onClick:s[0]||(s[0]=l=>r.value=!1)},{default:t(()=>[e(k,null,{default:t(()=>[n("mdi-close")]),_:1})]),_:1})]),_:1}),e(v),m("div",null,[e(E,{modelValue:o(a).title,"onUpdate:modelValue":s[1]||(s[1]=l=>o(a).title=l),class:"px-2 py-1",solo:"",flat:"",placeholder:"Title",autofocus:"","hide-details":"",onKeyup:F(g,["enter"])},null,8,["modelValue"]),e(v),e(Z,{modelValue:o(a).detail,"onUpdate:modelValue":s[2]||(s[2]=l=>o(a).detail=l),class:"px-2 py-1",variant:"solo",placeholder:"Description","hide-details":""},null,8,["modelValue"]),e(G,{modelValue:o(a).tags,"onUpdate:modelValue":s[3]||(s[3]=l=>o(a).tags=l),class:"px-2 my-3",items:o(i).labels,placeholder:"Labels","item-value":"id","hide-selected":"","hide-details":"",multiple:""},{selection:t(({attrs:l,item:u,parent:A,selected:B})=>[u===Object(u)?(c(),p(L,j({key:0},l,{class:"font-weight-bold",color:u.color,variant:"outlined","input-value":B,label:""}),{default:t(()=>[m("span",Y,V(u.title),1),e(k,{size:"small",onClick:se=>A.selectItem(u)},{default:t(()=>[n("close")]),_:2},1032,["onClick"])]),_:2},1040,["color","input-value"])):K("",!0)]),item:t(({item:l})=>[e(L,{color:l.color,label:"",variant:"outlined",size:"small"},{default:t(()=>[n(V(l.title),1)]),_:2},1032,["color"])]),_:1},8,["modelValue","items"])]),e(v),e(M,{class:"pa-2"},{default:t(()=>[e(_,{variant:"outlined",onClick:y},{default:t(()=>[n("Close")]),_:1}),e(w),e(_,{color:"primary",onClick:g},{default:t(()=>[n("Save")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),te={class:"d-none d-md-block sidebar"},ae={class:"main"},le=C({__name:"TodoApp",setup(T){return(i,r)=>{const a=q("router-view");return c(),p(J,{class:"app-container"},{default:t(()=>[m("div",te,[e(W)]),m("div",ae,[e(a,null,{default:t(({Component:d})=>[e(P,{name:"fade"},{default:t(()=>[(c(),p(R(d)))]),_:2},1024)]),_:1})]),e(ee)]),_:1})}}}),me=X(le,[["__scopeId","data-v-a83d73c0"]]);export{me as default};

import{d as T,o as i,i as B,j as p,a6 as E,ae as K,r as h,f as g,x as L,h as P,a as u,l as n,w as o,F as w,D as U,b as t,L as I,n as x,V as C,e as b,a5 as j,N as G,a0 as R,E as S,q as M,H as q,t as F,J,K as O,_ as W}from"./index-RUDlLveH.js";import{_ as H,a as X}from"./avatar_assistant-N5R35sIJ.js";import{_ as Y}from"./AnimationBot1.vue_vue_type_script_setup_true_lang-fxIjnF08.js";import{r as Q,c as Z}from"./aiUtils-GRLGcJBd.js";import{s as ee}from"./common-k2UJY29s.js";import{W as te}from"./style-qL66iOJt.js";import{u as se}from"./chatGPTStore-DaFFt0ic.js";import{_ as ae}from"./ApiKeyDialog.vue_vue_type_script_setup_true_lang-2Ns-0Ghj.js";import{V as oe}from"./VTooltip-85dE-O8Z.js";import{V as ne}from"./VTextarea-78WegbzL.js";import"./VSelect-BKSYh0lv.js";import"./VCheckboxBtn-X4A1T9dB.js";import"./VChip-NHzxVvhF.js";import"./VDialog-fai2WDK1.js";const re=T({__name:"AnimationChat1",props:{size:{type:Number,default:400}},setup(m){const _=m;return(c,d)=>(i(),B(p(E),{animationLink:"https://assets5.lottiefiles.com/packages/lf20_eYXADRNJPy.json",height:_.size,width:_.size},null,8,["height","width"]))}}),y=m=>(J("data-v-21480318"),m=m(),O(),m),le={class:"chat-bot"},ie={class:"messsage-area"},ce={key:0},de={class:"pa-4 user-message"},pe=y(()=>n("img",{src:H,alt:"alt"},null,-1)),ue={key:1},me={class:"pa-2 pa-md-5 assistant-message"},_e=y(()=>n("img",{src:X,alt:"alt"},null,-1)),he={key:0},fe={class:"pa-6"},ve={class:"message"},ge={key:1,class:"no-message-container"},ye=y(()=>n("h1",{class:"text-h4 text-md-h2 text-blue-lighten-1 font-weight-bold"}," Chat With Me ",-1)),Ve={class:"input-area"},ke=T({__name:"ChatBotV1",setup(m){const _=K(),c=se(),d=h(""),V=g(()=>(console.log("chatGPTStore.propmpt",c.propmpt),[{content:c.propmpt,role:"system"}])),r=h([]),A=g(()=>{if(r.value.length<=10)return[...V.value,...r.value];{const e=r.value.slice(-10);return[...V.value,...e]}}),N=h(!1),k=async()=>{d.value&&(r.value.push({content:d.value,role:"user"}),d.value="",await $())},$=async()=>{var s;const e=c.proxyUrl?c.proxyUrl:"https://openai.wndbac.cn";try{const l=await fetch(`${e}/v1/chat/completions`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${c.getApiKey}`},method:"POST",body:JSON.stringify({messages:A.value,model:c.model,stream:!0})});if(!l.ok){const v=await l.json();_.showErrorMessage(v.error.message);return}const a=(s=l.body)==null?void 0:s.getReader();a||_.showErrorMessage("Cannot read the stream."),r.value.push({content:"",role:"assistant"}),Q(a,r)}catch(l){_.showErrorMessage(l.message)}};L(()=>r.value,e=>{e&&ee(document.querySelector(".message-container"))},{deep:!0});const z=g(()=>{const e=r.value.slice(),s=e[e.length-1],l={...s,content:Z(s.content)};return e[e.length-1]=l,e}),D=e=>{e.key==="Enter"&&(e.altKey||e.shiftKey)?(e.preventDefault(),d.value+=`
`):e.key==="Enter"&&(e.preventDefault(),k())},f=h(1);return(e,s)=>{const l=P("perfect-scrollbar");return i(),u("div",le,[n("div",ie,[p(r).length>0?(i(),B(l,{key:0,class:"message-container"},{default:o(()=>[(i(!0),u(w,null,U(p(z),a=>(i(),u(w,null,[a.role==="user"?(i(),u("div",ce,[n("div",de,[t(S,{class:"ml-4",rounded:"sm",variant:"elevated"},{default:o(()=>[pe]),_:1}),t(M,{class:"gradient gray text-pre-wrap",theme:"dark"},{default:o(()=>[t(q,null,{default:o(()=>[n("b",null,F(a.content),1)]),_:2},1024)]),_:2},1024)])])):(i(),u("div",ue,[n("div",me,[t(S,{class:"d-none d-md-block mr-2 mr-md-4",rounded:"sm",variant:"elevated"},{default:o(()=>[_e]),_:1}),t(M,null,{default:o(()=>[n("div",null,[t(p(te),{modelValue:a.content,"onUpdate:modelValue":v=>a.content=v,class:"font-1",previewOnly:""},null,8,["modelValue","onUpdate:modelValue"])])]),_:2},1024)])]))],64))),256)),p(N)?(i(),u("div",he,[n("div",fe,[n("div",ve,[t(Y,{size:100})])])])):I("",!0)]),_:1})):(i(),u("div",ge,[ye,t(re,{size:300})]))]),n("div",Ve,[t(R,{color:"transparent",elevation:"0",class:"input-panel d-flex align-end pa-1"},{default:o(()=>[t(x,{class:"mb-1",variant:"elevated",icon:"",onClick:s[0]||(s[0]=a=>p(c).configDialog=!0)},{default:o(()=>[t(C,{size:"30",class:"text-primary"},{default:o(()=>[b("mdi-cog-outline")]),_:1}),t(oe,{activator:"parent",location:"top",text:"ChatGPT Config"})]),_:1}),t(j,{name:"fade"},{default:o(()=>[t(ne,{class:"mx-2",color:"primary",type:"text",clearable:"",variant:"solo",ref:"input",modelValue:p(d),"onUpdate:modelValue":s[1]||(s[1]=a=>G(d)?d.value=a:null),placeholder:"Ask Anything","hide-details":"",onKeydown:D,rows:p(f),onFocus:s[2]||(s[2]=a=>f.value=3),onBlur:s[3]||(s[3]=a=>f.value=1)},null,8,["modelValue","rows"])]),_:1}),t(x,{class:"mb-1",color:"primary",variant:"elevated",icon:""},{default:o(()=>[t(C,{onClick:k},{default:o(()=>[b("mdi-send")]),_:1})]),_:1})]),_:1}),t(ae)])])}}}),Ke=W(ke,[["__scopeId","data-v-21480318"]]);export{Ke as default};

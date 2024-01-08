import{_ as ne,a as ie}from"./avatar_assistant-N5R35sIJ.js";import{d as E,o as r,i as h,j as o,a6 as ce,_ as R,a as m,af as re,ae as q,r as k,x as H,g as de,h as J,b as e,w as s,V as $,e as u,n as S,q as x,p as A,m as ue,S as L,R as C,X as P,z as pe,ab as me,l as n,t as y,A as _e,E as I,B as fe,H as O,Y as K,Z as he,F as B,J as X,K as Y,W as ge,D as ve,L as F,a0 as Ve}from"./index-5UehqYXh.js";import{_ as G}from"./AnimationBot1.vue_vue_type_script_setup_true_lang-hWfhA3ir.js";import{W as ye}from"./style-kPcBYRSc.js";import{a as be,u as Z}from"./useSpeechService-UW-ysBiP.js";import{u as Q}from"./chatGPTStore--HRsXksc.js";import{V as ee}from"./VTooltip-cj1JSSGm.js";import{V as Ce}from"./VContainer-BCpTP6Vi.js";import{V as W}from"./VChip-4-pLF36n.js";import{V as ke}from"./VSlider-j-oq0fe6.js";import{V as we}from"./VSelect-SuYkNkX4.js";import{V as Se}from"./VDialog-PWZFw8Se.js";import"./VCheckboxBtn-3B9J-9Rl.js";const xe=E({__name:"AnimationRecording",props:{size:{type:Number,default:500}},setup(t){const c=t;return(a,f)=>(r(),h(o(ce),{animationLink:"https://assets10.lottiefiles.com/packages/lf20_jGOM8KIjDM.json",height:c.size,width:c.size,class:"animation-recording"},null,8,["height","width"]))}}),Re=R(xe,[["__scopeId","data-v-7752c765"]]),ze={},$e={class:"loader"};function Ie(t,c){return r(),m("span",$e)}const De=R(ze,[["render",Ie],["__scopeId","data-v-29ff41fc"]]),Te={},Me={class:"loader"};function Ne(t,c){return r(),m("span",Me)}const Ae=R(Te,[["render",Ne],["__scopeId","data-v-1f4e795e"]]),D=re.create({timeout:1e5});D.interceptors.request.use(t=>{const c=Q();return t.baseURL=c.proxyUrl,t});D.interceptors.response.use(t=>t,t=>{const c=q();if(t.response){t.response.status;const a=t.response.data;c.showErrorMessage(a.error)}else c.showErrorMessage("Network Error");return Promise.reject(t)});const Le=(t,c)=>D.post("/v1/audio/transcriptions",t,{headers:{Authorization:"Bearer "+c}}),Be=(t,c)=>D.post("/v1/chat/completions",t,{headers:{Authorization:"Bearer "+c}}),se=t=>(X("data-v-e90f9cf2"),t=t(),Y(),t),Ee={class:"ml-2 font-weight-bold"},Ue=se(()=>n("img",{src:"https://img.icons8.com/bubbles/50/null/lock-female-user.png"},null,-1)),je=se(()=>n("img",{src:"https://img.icons8.com/bubbles/50/null/user-male.png"},null,-1)),Pe={class:"full-h d-flex align-center"},Ke={class:"text-body-2 text-grey"},Fe={class:"text-body-2 ml-2"},Ge=E({__name:"VoiceConfigDialog",setup(t){const{getVoices:c}=be(),a=Z(),f=k([]),_=b=>{a.updateVoiceInfo(b)},g=k(["ja-JP","en-US","zh-CN","zh-HK"]),w=async()=>{const b=await c();f.value=b.filter(v=>g.value.includes(v.locale));const d=f.value.find(v=>v.shortName===a.speechSynthesisVoiceName);a.updateVoiceInfo(d)};return H(()=>a.voiceConfigDialog,()=>{w()}),de(()=>{w()}),(b,d)=>{const v=J("RecycleScroller");return r(),m(B,null,[e(S,{variant:"elevated",icon:"",onClick:d[0]||(d[0]=l=>o(a).voiceConfigDialog=!0)},{default:s(()=>[e($,{size:"30",class:"text-primary"},{default:s(()=>[u("mdi-cog-outline")]),_:1}),e(ee,{activator:"parent",location:"top",text:"Voice Config"})]),_:1}),e(Se,{modelValue:o(a).voiceConfigDialog,"onUpdate:modelValue":d[5]||(d[5]=l=>o(a).voiceConfigDialog=l),width:"500"},{default:s(()=>[e(x,null,{default:s(()=>[e(A,null,{default:s(()=>[e(ue),e(S,{variant:"flat",icon:"",onClick:d[1]||(d[1]=l=>o(a).voiceConfigDialog=!1)},{default:s(()=>[e($,null,{default:s(()=>[u("mdi-close")]),_:1})]),_:1})]),_:1}),e(Ce,null,{default:s(()=>[e(L,null,{default:s(()=>[e(C,{cols:"12"},{default:s(()=>[e(x,{style:{"border-left":"5px solid #445573"}},{default:s(()=>[e(A,null,{default:s(()=>[u(" Voice Modal ")]),_:1}),e(P),e(pe,{elevation:"1",density:"compact"},{default:s(()=>[e(me,null,{default:s(()=>[n("span",null,"Total "+y(o(f).length)+" Voices",1),n("span",Ee,[u("(Current Modal: "+y(o(a).localName)+" ",1),e(W,{density:"comfortable",class:"d-none d-sm-inline ml-1 font-weight-bold",label:"",size:"small",color:"primary"},{default:s(()=>[u(y(o(a).speechSynthesisLanguage),1)]),_:1}),u(" )")])]),_:1}),e(v,{class:"scroller",items:o(f),"item-size":50,"key-field":"name"},{default:s(({item:l})=>[e(_e,{"active-color":"primary",onClick:j=>_(l),active:l.shortName===o(a).speechSynthesisVoiceName,"three-line":""},{prepend:s(()=>[l.gender===1?(r(),h(I,{key:0,size:"30",color:"red"},{default:s(()=>[Ue]),_:1})):(r(),h(I,{key:1,size:"30",color:"blue"},{default:s(()=>[je]),_:1}))]),append:s(()=>[n("div",Pe,[n("span",Ke,[e(W,{size:"small",class:"font-weight-bold",color:"blue"},{default:s(()=>[u(y(l.locale),1)]),_:2},1024)])])]),default:s(()=>[n("div",null,[e(fe,{class:"font-weight-bold text-primary"},{default:s(()=>[u(y(l.localName)+" ",1),n("span",Fe,"("+y(l.shortName)+")",1)]),_:2},1024)])]),_:2},1032,["onClick","active"])]),_:1},8,["items"])]),_:1})]),_:1})]),_:1}),e(C,{cols:"12"},{default:s(()=>[e(x,{style:{"border-left":"5px solid #445573"}},{default:s(()=>[e(A,null,{default:s(()=>[u(" Voice Config ")]),_:1}),e(P),e(O,null,{default:s(()=>[e(L,{class:"align-center"},{default:s(()=>[e(C,{cols:"12",sm:"2",class:"pb-sm-3 pb-0"},{default:s(()=>[e(K,{class:"font-weight-medium"},{default:s(()=>[u("Rate")]),_:1})]),_:1}),e(C,{cols:"12",sm:"10"},{default:s(()=>[e(ke,{modelValue:o(a).voiceRate,"onUpdate:modelValue":d[2]||(d[2]=l=>o(a).voiceRate=l),"thumb-label":"always",min:.1,max:2,step:.1,"hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),e(L,{class:"align-center mb-3"},{default:s(()=>[e(C,{cols:"12",sm:"2",class:"pb-sm-3 pb-0"},{default:s(()=>[e(K,{class:"font-weight-medium"},{default:s(()=>[u("Emotion")]),_:1})]),_:1}),e(C,{cols:"12",sm:"10"},{default:s(()=>[e(we,{modelValue:o(a).voiceEmotion,"onUpdate:modelValue":d[3]||(d[3]=l=>o(a).voiceEmotion=l),variant:"outlined","hide-details":"",density:"compact",items:o(a).styleList},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(he,null,{default:s(()=>[e(S,{color:"primary",block:"",onClick:d[4]||(d[4]=l=>o(a).voiceConfigDialog=!1)},{default:s(()=>[u("Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}}),We=R(Ge,[["__scopeId","data-v-e90f9cf2"]]),U=t=>(X("data-v-ac54d978"),t=t(),Y(),t),qe={class:"chat-bot"},He={class:"messsage-area"},Je={key:0},Oe={class:"pa-5 user-message"},Xe=U(()=>n("img",{src:ne,alt:"alt"},null,-1)),Ye={key:1},Ze={class:"pa-5 assistant-message"},Qe=U(()=>n("img",{src:ie,alt:"alt"},null,-1)),es={key:0},ss={class:"pa-6"},ts={class:"message"},as={key:1,class:"no-message-container"},os=U(()=>n("h1",{style:{color:"#4d5271"},class:"text-h3 text-md-h2 font-weight-bold"}," Talk With Me ",-1)),ls={class:"input-area"},ns={class:"panel-left"},is={class:"panel-center"},cs={class:"panel-right"},rs=E({__name:"VoiceBot",setup(t){const c=q(),a=Z(),f=Q(),_=k([{content:"想象我们是朋友,和我进行轻松有趣的对话。我们可以聊天天气、音乐、电影、运动或者日常生活等话题。请尽情地与我互动并回应我的问题,让我们像朋友一样自然地交流。并且我会多种语言,我会用不同的语言跟你交流,比如说我当前的问题是中文时,希望你下个回答用中文,我当前的问题是英文时,你的下个回答用英文,我当前的问题是日语时,你的下个回答是日语",role:"system"}]),g=k(""),w=k(!1),b=async()=>{g.value&&(_.value.push({content:g.value,role:"user"}),p.isRecording=!1,p.isResponse=!0,await d(),g.value="")},d=async()=>{try{const i=await Be({messages:_.value,model:"gpt-3.5-turbo",temperature:1,n:1},f.getApiKey);w.value=!1,_.value.push({content:i.data.choices[0].message.content,role:"assistant"}),p.isResponse=!1,a.ssmlToSpeak(i.data.choices[0].message.content)}catch(i){p.isResponse=!1,c.showErrorMessage(i.message)}},v=()=>{const i=document.querySelector(".message-container");setTimeout(()=>{i==null||i.scrollTo({top:i==null?void 0:i.scrollHeight})},100)};H(()=>_.value,i=>{i&&v()},{deep:!0});const l=k(),j=async()=>{navigator.mediaDevices.getUserMedia({audio:!0}).then(i=>{l.value=new MediaRecorder(i);const T=[];l.value.start(),p.isRecording=!0,l.value.ondataavailable=z=>{T.push(z.data)},l.value.onstop=async z=>{const V=new Blob(T,{type:"audio/wav"}),M=new File([V],"recording.wav",{type:"audio/wav"}),N=new FormData;N.append("file",M),N.append("model","whisper-1");const oe=await Le(N,f.getApiKey);g.value=oe.data.text,i.getTracks().forEach(le=>le.stop()),g.value?b():p.isRecording=!1}}).catch(i=>{c.showErrorMessage(i.message)})},te=()=>{l.value&&(l.value.stop(),p.isRecording=!1,p.isResponse=!0)},p=ge({isRecording:!1,isResponse:!1}),ae=()=>{_.value=[{content:"想象我们是朋友,和我进行轻松有趣的对话。我们可以聊天天气、音乐、电影、运动或者日常生活等话题。请尽情地与我互动并回应我的问题,让我们像朋友一样自然地交流。并且我会多种语言,我会用不同的语言跟你交流,比如说我当前的问题是中文时,希望你下个回答用中文,我当前的问题是英文时,你的下个回答用英文,我当前的问题是日语时,你的下个回答是日语",role:"system"}]};return(i,T)=>{const z=J("perfect-scrollbar");return r(),m("div",qe,[n("div",He,[o(_).length>1?(r(),h(z,{key:0,class:"message-container"},{default:s(()=>[(r(!0),m(B,null,ve(o(_),V=>(r(),m(B,null,[V.role==="user"?(r(),m("div",Je,[n("div",Oe,[e(I,{class:"ml-4",rounded:"lg",variant:"elevated"},{default:s(()=>[Xe]),_:1}),e(x,{class:"gradient gray rounded-xl rounded-be-0",theme:"dark"},{default:s(()=>[e(O,null,{default:s(()=>[n("b",null,y(V.content),1)]),_:2},1024)]),_:2},1024)])])):V.role==="assistant"?(r(),m("div",Ye,[n("div",Ze,[e(I,{class:"mr-4",rounded:"sm",variant:"elevated"},{default:s(()=>[Qe]),_:1}),e(x,{class:"rounded-xl rounded-bs-0"},{default:s(()=>[n("div",null,[e(o(ye),{modelValue:V.content,"onUpdate:modelValue":M=>V.content=M,previewOnly:""},null,8,["modelValue","onUpdate:modelValue"])])]),_:2},1024)])])):F("",!0)],64))),256)),o(w)?(r(),m("div",es,[n("div",ss,[n("div",ts,[e(G,{size:100})])])])):F("",!0)]),_:1})):(r(),m("div",as,[os,e(G,{size:300})]))]),n("div",ls,[e(Ve,{class:"input-panel",height:"100"},{default:s(()=>[n("div",ns,[e(We)]),n("div",is,[o(p).isRecording?(r(),h(Re,{key:0,onClick:te,size:140})):o(p).isResponse?(r(),h(Ae,{key:1})):o(a).isPlaying?(r(),h(De,{key:2})):(r(),h(S,{key:3,size:"x-large",icon:"",variant:"elevated",class:"gradient gray",onClick:j},{default:s(()=>[e($,{size:"30"},{default:s(()=>[u("mdi-microphone")]),_:1})]),_:1}))]),n("div",cs,[e(S,{icon:"",variant:"elevated",onClick:ae},{default:s(()=>[e($,{size:"30",class:"text-primary"},{default:s(()=>[u("mdi-broom")]),_:1}),e(ee,{activator:"parent",location:"top",text:"Clear"})]),_:1})])]),_:1})])])}}}),ks=R(rs,[["__scopeId","data-v-ac54d978"]]);export{ks as default};

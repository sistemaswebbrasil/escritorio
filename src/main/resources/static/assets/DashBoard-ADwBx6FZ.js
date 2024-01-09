import{h as A}from"./moment-fFIuWyvF.js";import{c as Y,d as x,o as n,a as r,t as d,b as e,w as a,e as v,V as S,u as ee,f as z,r as y,g as w,h as D,i as j,j as f,k as T,l as t,m as E,n as V,p as te,q as g,s as ae,v as se,x as le,y as oe,z as ne,A as G,B as H,C as re,F as $,D as C,I as J,E as O,G as ie,H as ce,J as K,K as q,_ as B,L,M as de,N as ue,O as me,T as pe,P as he,Q as Z,R as k,S as I}from"./index-DifJdLXL.js";import{u as _e,T as fe,R as ve}from"./echarts-_ocOtpJs.js";import{V as ge,a as ye}from"./VTimelineItem-23ezPM0u.js";import{V as M}from"./VChip-S1zMHqeR.js";import{C as P}from"./CopyLabel-cVoGBoX1.js";import{V as Q}from"./VTable-UIY0psg2.js";import{V as xe}from"./VCheckboxBtn-hhe9RXPU.js";import{_ as be}from"./BarChart1.vue_vue_type_script_setup_true_lang-nkyK-L1C.js";import"./install-JAUlnq3L.js";import"./VTooltip-0cg16MN_.js";const N=(l,o)=>{const{currency:c}=Y;let m;return m=o||c.currency,ke(l,m)},ke=(l,o)=>{try{const c=$e(l,o.decimalDigits,o.decimalSeparator,o.thousandsSeparator);if(o.currencySymbol){const m=o.currencySymbolNumberOfSpaces>0?" ".repeat(o.currencySymbolNumberOfSpaces):"";let h=[c,m,o.currencySymbol];return o.currencySymbolPosition==="left"&&(h=h.reverse()),h.join("")}else return c}catch{return l}},$e=(l,o,c,m)=>{if(isNaN(l))return l;const h=l<0;h&&(l=l*-1);let _=[];_=l.toFixed(o||0).toString().split(".");const p=[];for(let s=_[0].length;s>0;s-=3)p.unshift(_[0].substring(Math.max(0,s-3),s));return _[0]=p.join(m||","),(h?"-":"")+_.join(c||".")},Ce={key:0},we={key:1,class:"text-success"},Te={key:2,class:"error--text"},Se=x({__name:"PercentTrend",props:{value:{type:Number,default:0}},setup(l){return(o,c)=>(n(),r("span",null,[l.value===0?(n(),r("span",Ce,d(l.value)+"% ",1)):l.value>0?(n(),r("span",we,[e(S,{small:"",color:"success"},{default:a(()=>[v("mdi-arrow-top-right")]),_:1}),v(" "+d(l.value)+"% ",1)])):(n(),r("span",Te,[e(S,{small:"",color:"error"},{default:a(()=>[v("mdi-arrow-bottom-right")]),_:1}),v(" "+d(Math.abs(l.value))+"% ",1)]))]))}}),Ve={key:0,class:"d-flex flex-grow-1 align-center justify-center"},Le={key:1,class:"d-flex flex-column flex-grow-1"},Pe={class:"font-weight-bold"},De={class:"d-flex flex-column flex-grow-1"},je={class:"pa-2"},Ee={class:"text-h4"},Ie={class:"text-primary mt-1"},Ne={class:"px-2 pb-2"},Ae={class:"title mb-1 font-weight-bold"},ze={class:"d-flex align-center"},Oe={class:"text-h4"},Be={class:"d-flex flex-column text-right"},Me={class:"font-weight-bold"},Fe={class:"text-caption"},Re=x({__name:"SalesCard",props:{value:{type:Number,default:0},percentage:{type:Number,default:0},percentageLabel:{type:String,default:"vs. last week"},series:{type:Array,default:()=>[{name:"Sales",data:[11,32,45,13]}]},xaxis:{type:Object,default:()=>({type:"category",categories:["2018-09-19T00:00:00.000Z","2018-09-20T00:00:00.000Z","2018-09-22T00:00:00.000Z","2018-09-23T00:00:00.000Z"]})},label:{type:String,default:"dashboard.sales"},actionLabel:{type:String,default:"View Report"},options:{type:Object,default:()=>({})}},setup(l){const o=s=>s?A(s).format("D MMM"):"",c=l,{themes:m,current:h}=ee(),_=z(()=>{const s=h.value.dark?m.value.dark.colors.primary:m.value.light.colors.primary;return{chart:{height:120,type:"area",sparkline:{enabled:!0},animations:{speed:400}},series:c.series,colors:[s],fill:{type:"solid",colors:[s],opacity:.15},stroke:{curve:"smooth",width:2},xaxis:c.xaxis,tooltip:{followCursor:!0,theme:"dark",custom:function({ctx:u,series:i,seriesIndex:b,dataPointIndex:R,w:U}){const X=U.config.series[b].name;return`<div class="rounded-lg pa-1 text-caption">
                <div class="font-weight-bold">${o(U.globals.categoryLabels[R])}</div>
                <div>${i[b][R]} ${X}</div>
              </div>`}},...c.options}}),p=y(!0);return w(()=>{setTimeout(()=>{p.value=!1},1e3)}),(s,u)=>{const i=D("apexchart");return n(),j(g,{class:"d-flex flex-grow-1 bg-primary-darken-4 pa-3",theme:"dark"},{default:a(()=>[f(p)?(n(),r("div",Ve,[e(T,{indeterminate:"",color:"primary"})])):(n(),r("div",Le,[e(te,{class:"d-flex"},{default:a(()=>[t("div",Pe,d(s.$t(l.label)),1),e(E),e(V,{variant:"text",color:"primary",class:"font-weight-bold",onClick:u[0]||(u[0]=b=>s.$emit("action-clicked"))},{default:a(()=>[v(d(l.actionLabel),1)]),_:1})]),_:1}),t("div",De,[t("div",je,[t("div",Ee,d(f(N)(12145.49)),1),t("div",Ie,d(f(N)(4275.21))+" "+d(s.$t("dashboard.lastweek")),1)]),e(E),t("div",Ne,[t("div",Ae,d(s.$t("dashboard.weeklySales")),1),t("div",ze,[t("div",Oe,d(f(N)(l.value)),1),e(E),t("div",Be,[t("div",Me,[e(Se,{value:l.percentage},null,8,["value"])]),t("div",Fe,d(l.percentageLabel),1)])])])]),e(i,{type:"area",height:"120",options:f(_),series:l.series},null,8,["options","series"])]))]),_:1})}}}),Ue=x({__name:"PieChart1",setup(l){const o=ae(),c=y([{value:335,name:"Direct"},{value:310,name:"Email"},{value:274,name:"Union Ads"},{value:235,name:"Video Ads"},{value:400,name:"Search Engine"}]),m=z(()=>({backgroundColor:o.darkTheme?"#1E293B":"#FFF",tooltip:{trigger:"item"},visualMap:{show:!1,min:80,max:600,inRange:{colorLightness:[0,1]}},series:[{name:"Access From",type:"pie",radius:"75%",center:["50%","50%"],data:c.value,roseType:"radius",label:{color:"rgba(255, 255, 255, 0.3)"},labelLine:{lineStyle:{color:"rgba(255, 255, 255, 0.3)"},smooth:.2,length:10,length2:20},itemStyle:{color:"#03a9f4",shadowBlur:100,shadowColor:"rgba(0, 0, 0, 0.2)"},animationType:"scale",animationEasing:"elasticOut",animationDelay:function(s){return Math.random()*200}}]})),h=y(null),{setOption:_,showLoading:p}=_e(h,!0,!0,ve.SVGRenderer,fe.Dark);return w(()=>{se(()=>{p(),_(m.value)})}),le(()=>m.value,s=>{_(s)},{deep:!0}),(s,u)=>(n(),j(g,{color:"transparent",height:"360"},{default:a(()=>[t("div",{ref_key:"chartEl",ref:h,style:{width:"100%",height:"100%"}},null,512)]),_:1}))}}),Ge={key:0,class:"h-full d-flex flex-grow-1 align-center justify-center"},He={key:1},Je=t("h6",{class:"text-h6 d-flex align-center font-weight-bold"},[t("span",{class:"pa-5"},"Pie")],-1),Ze=x({__name:"SourcesCard",setup(l){return(o,c)=>o.loading?(n(),r("div",Ge,[e(T,{indeterminate:"",color:"primary"})])):(n(),r("div",He,[Je,e(g,{class:"",variant:"flat"},{default:a(()=>[e(Ue)]),_:1})]))}}),W=l=>(K("data-v-10adf60c"),l=l(),q(),l),Ke={key:0,class:"h-full d-flex flex-grow-1 align-center justify-center"},qe={key:1},Qe={class:"text-h6 pa-5 d-flex align-center"},We=W(()=>t("span",{class:"flex-fill font-weight-bold"},"Github Activity",-1)),Xe=W(()=>t("span",null," Refresh",-1)),Ye=["src"],et={class:"mb-1"},tt={class:"text-h6 font-weight-bold"},at={class:"ml-2 text-grey"},st={class:"text-body-2"},lt=["innerHTML"],ot=x({__name:"ActivityCard",setup(l){const o=y(!1);y("yangjiakai");const c=y([{id:"29003260817",type:"PushEvent",user:"yangjiakai",avatar:"https://avatars.githubusercontent.com/u/35951244?",repo:"yangjiakai/lux-admin-vuetify3",content:"<p>Update Dashboard View</p><br/><div><span class='mr-1'>✅</span> Add PieChart1</div>",action:"Commit",created_at:"2023-05-12T14:06:59Z"}]),m=[{id:"29003260817",type:"PushEvent",user:"yangjiakai",avatar:"https://avatars.githubusercontent.com/u/35951244?",repo:"yangjiakai/lux-admin-vuetify3",content:"<p> Update Dashboard View</p><br/><div><span class='mr-1'>✅</span> Add PieChart1</div><div><span class='mr-1'>✅</span> Add PieChart2</div><div><span class='mr-1'>✅</span> Update ActivityCard,SalesCard,SOurcesCard</div>",action:"Commit",created_at:"2023-05-12T14:06:59Z"},{id:"29003260817",type:"PushEvent",user:"yangjiakai",avatar:"https://avatars.githubusercontent.com/u/35951244?",repo:"yangjiakai/lux-admin-vuetify3",content:"<p>Update ChatBot</p><br/><div><span class='mr-1'>✅</span> Chatbot1 Add Stream</div><div><span class='mr-1'>✅</span> Add ScrollToBottom Common Method</div>",action:"Commit",created_at:"2023-05-11T14:06:59Z"}],h=async()=>{o.value=!0,c.value=m,setTimeout(()=>{o.value=!1},1e3)},_=p=>p.type==="PushEvent"?"green":p.type==="IssuesEvent"?"red":"blue";return w(()=>{h()}),(p,s)=>{const u=D("perfect-scrollbar");return f(o)?(n(),r("div",Ke,[e(T,{indeterminate:"",color:"primary"})])):(n(),r("div",qe,[t("h6",Qe,[We,e(re,{location:"bottom end",transition:"slide-x-transition"},{activator:a(({props:i})=>[e(V,oe(i,{size:"small",variant:"text",icon:"mdi-dots-vertical",rounded:"",color:"primary",class:"my-n2"}),null,16)]),default:a(()=>[e(ne,{density:"compact"},{default:a(()=>[e(G,{onClick:s[0]||(s[0]=i=>p.$emit("edit"))},{default:a(()=>[e(H,{class:"d-inline-flex align-center"},{default:a(()=>[e(f(J),{icon:"flat-color-icons:refresh",rotate:2,horizontalFlip:!0,verticalFlip:!0,class:"mr-1"}),Xe]),_:1})]),_:1}),e(G,{onClick:s[1]||(s[1]=i=>p.$emit("delete"))},{default:a(()=>[e(H,{class:"d-inline-flex align-center"},{default:a(()=>[e(f(J),{icon:"icon-park:clear-format",rotate:2,horizontalFlip:!0,verticalFlip:!0,inline:!0,class:"mr-1"}),v(" Clear")]),_:1})]),_:1})]),_:1})]),_:1})]),e(u,{class:"timeline-container"},{default:a(()=>[e(ge,{class:"time-line text-body-2",density:"compact",side:"end","truncate-line":"start"},{default:a(()=>[(n(!0),r($,null,C(f(c),i=>(n(),j(ye,{key:i.id,size:"small"},{icon:a(()=>[e(O,null,{default:a(()=>[t("img",{src:i.avatar},null,8,Ye)]),_:2},1024)]),opposite:a(()=>[t("span",null,d(f(A)(i.created_at).format("MM,DD hh:mm")),1)]),default:a(()=>[t("div",et,[t("span",tt,d(i.user),1),t("span",at,d(f(A)(i.created_at).format("MM,DD hh:mm")),1)]),e(g,{"max-width":"500"},{default:a(()=>[e(ie,{class:"pt-4"},{default:a(()=>[e(M,{color:_(i),size:"small",label:"",class:"mr-2 font-weight-bold"},{default:a(()=>[t("span",null,d(i.type),1)]),_:2},1032,["color"]),t("span",st,d(i.repo),1)]),_:2},1024),e(ce,null,{default:a(()=>[t("div",{innerHTML:i.content},null,8,lt)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]))}}}),nt=B(ot,[["__scopeId","data-v-10adf60c"]]),rt={key:0,class:"h-full d-flex flex-grow-1 align-center justify-center"},it={key:1},ct=t("h6",{class:"text-h6 px-5 pt-5 d-flex align-center font-weight-bold"},[t("span",{class:"flex-fill font-weight-bold"},"Table")],-1),dt={class:"font-weight-bold"},ut={class:"d-flex align-center py-2"},mt=["src"],pt={class:"ml-1"},ht={class:"font-weight-bold"},_t={class:"text-caption"},ft={class:"font-weight-bold"},vt={key:0},gt=t("span",null,"Pending",-1),yt={key:1},xt=t("span",null,"Paid",-1),bt=x({__name:"TableCard",setup(l){const o=y(!0),c=[{text:"Order Id",align:"start",value:"id"},{text:"User",sortable:!1,value:"user"},{text:"Date",value:"date"},{text:"Company",value:"company"},{text:"Amount",value:"amount"},{text:"Status",value:"status"},{text:"",sortable:!1,align:"right",value:"action"}],m=[{id:"2837",user:{name:"John Simon",email:"johnsimon@blobhill.com",avatar:"https://i.pravatar.cc/150?img=1"},date:"2020-05-10",company:"BlobHill",amount:52877,status:"PAID"},{id:"2838",user:{name:"Greg Cool J",email:"cool@caprimooner.com",avatar:"https://i.pravatar.cc/150?img=2"},date:"2020-05-11",company:"Caprimooner",amount:2123,status:"PENDING"},{id:"2839",user:{name:"Samantha Bush",email:"bush@catloveisstilllove.com",avatar:"https://i.pravatar.cc/150?img=3"},date:"2020-05-11",company:"CatLovers",amount:12313,status:"PENDING"},{id:"2840",user:{name:"Ben Howard",email:"ben@indiecoolers.com",avatar:"https://i.pravatar.cc/150?img=4"},date:"2020-05-12",company:"IndieCoolers",amount:9873,status:"PAID"},{id:"2841",user:{name:"Jack Candy",email:"jack@candylooove.com",avatar:"https://i.pravatar.cc/150?img=5"},date:"2020-05-13",company:"CandyLooove",amount:29573,status:"PAID"}],h=_=>{};return w(()=>{setTimeout(()=>{o.value=!1},1e3)}),(_,p)=>{const s=D("perfect-scrollbar");return f(o)?(n(),r("div",rt,[e(T,{indeterminate:"",color:"primary"})])):(n(),r("div",it,[ct,e(s,{style:{height:"400px"}},{default:a(()=>[e(Q,{class:"pa-3"},{default:a(()=>[t("thead",null,[t("tr",null,[(n(),r($,null,C(c,u=>t("th",{key:u.text},d(u.text),1)),64))])]),t("tbody",null,[(n(),r($,null,C(m,u=>t("tr",{key:u.id},[t("td",dt,[e(P,{text:`# ${u.id}`},null,8,["text"])]),t("td",null,[t("div",ut,[e(O,{size:"40",class:"elevation-1 grey lighten-3"},{default:a(()=>[t("img",{src:u.user.avatar},null,8,mt)]),_:2},1024),t("div",pt,[t("div",ht,d(u.user.name),1),t("div",_t,[e(P,{text:u.user.email},null,8,["text"])])])])]),t("td",null,d(u.date),1),t("td",null,d(u.company),1),t("td",null,d(u.amount),1),t("td",ft,[u.status==="PENDING"?(n(),r("div",vt,[e(S,{size:"small",color:"warning"},{default:a(()=>[v("mdi-circle-medium")]),_:1}),gt])):L("",!0),u.status==="PAID"?(n(),r("div",yt,[e(S,{size:"small",color:"success"},{default:a(()=>[v("mdi-circle-medium")]),_:1}),xt])):L("",!0)]),t("td",null,[e(V,{size:"small",variant:"text",icon:"mdi-open-in-new",onClick:i=>h(u)},null,8,["onClick"])])])),64))])]),_:1})]),_:1})]))}}}),F=l=>(K("data-v-3d0e8ecc"),l=l(),q(),l),kt={key:0,class:"h-full d-flex flex-grow-1 align-center justify-center"},$t={key:1},Ct=F(()=>t("h6",{class:"text-h6 font-weight-bold pa-5 d-flex align-center"},[t("span",{class:"flex-fill"},"Ticket")],-1)),wt={class:"font-weight-bold"},Tt={class:"font-weight-bold"},St={key:0,class:"text-secondary"},Vt=F(()=>t("span",null,"Closed",-1)),Lt={key:1,class:"text-success"},Pt=F(()=>t("span",null,"Open",-1)),Dt=x({__name:"TicketsCard",setup(l){const o=y(!0),c=[{text:"Ticket Id",align:"start",value:"id"},{text:"User",sortable:!1,value:"user"},{text:"Priority",value:"priority"},{text:"Status",value:"status"},{text:"Create Date",value:"date"},{text:"",sortable:!1,align:"right",value:"action"}],m=[{id:"423",user:{name:"John Simon",email:"johnsimon@blobhill.com",avatar:"https://i.pravatar.cc/150?img=1"},date:"2020-05-10",priority:"Low",status:"OPEN"},{id:"424",user:{name:"Greg Cool J",email:"cool@caprimooner.com",avatar:"https://i.pravatar.cc/150?img=2"},date:"2020-05-11",priority:"High",status:"CLOSED"},{id:"425",user:{name:"Samantha Bush",email:"bush@catloveisstilllove.com",avatar:"https://i.pravatar.cc/150?img=3"},date:"2020-05-11",priority:"Low",status:"CLOSED"},{id:"426",user:{name:"Ben Howard",email:"ben@indiecoolers.com",avatar:"https://i.pravatar.cc/150?img=4"},date:"2020-05-12",priority:"Low",status:"OPEN"},{id:"427",user:{name:"Jack Candy",email:"jack@candylooove.com",avatar:"https://i.pravatar.cc/150?img=5"},date:"2020-05-13",priority:"High",status:"OPEN"}],h=_=>{};return w(()=>{setTimeout(()=>{o.value=!1},1e3)}),(_,p)=>f(o)?(n(),r("div",kt,[e(T,{indeterminate:"",color:"primary"})])):(n(),r("div",$t,[Ct,e(Q,{class:"pa-3"},{default:a(()=>[t("thead",null,[t("tr",null,[(n(),r($,null,C(c,s=>t("th",{class:"text-left",key:s.text},d(s.text),1)),64))])]),t("tbody",null,[(n(),r($,null,C(m,s=>t("tr",{key:s.id},[t("td",wt,[e(P,{text:`# ${s.id}`},null,8,["text"])]),t("td",null,[e(P,{text:s.user.email},null,8,["text"])]),t("td",null,[e(M,{size:"small",color:s.priority==="High"?"pink":"primary",class:"font-weight-bold"},{default:a(()=>[v(d(s.priority),1)]),_:2},1032,["color"])]),t("td",Tt,[s.status==="CLOSED"?(n(),r("div",St,[e(S,{size:"small",color:"secondary"},{default:a(()=>[v("mdi-circle-medium")]),_:1}),Vt])):L("",!0),s.status==="OPEN"?(n(),r("div",Lt,[e(S,{size:"small",color:"success"},{default:a(()=>[v("mdi-circle-medium")]),_:1}),Pt])):L("",!0)]),t("td",null,d(s.date),1),t("td",null,[e(V,{elevation:"4",variant:"elevated",size:"small",onClick:u=>h(s)},{default:a(()=>[v(" Open Text ")]),_:2},1032,["onClick"])])])),64))])]),_:1})]))}}),jt=B(Dt,[["__scopeId","data-v-3d0e8ecc"]]),Et={key:0,class:"h-full d-flex flex-grow-1 align-center justify-center"},It={key:1},Nt={class:"todo-item d-flex align-center pa-5"},At={class:"flex-fill mx-5"},zt=x({__name:"TodoCard",setup(l){const o=de(),c=y(!0);w(()=>{setTimeout(()=>{c.value=!1},1e3)});const m=y(""),h=z(()=>o.getTodoList.filter(p=>p.title.toLowerCase().includes(m.value.toLowerCase()))),_=p=>{const s=o.labels.find(u=>u.id===p);return s?s.color:""};return(p,s)=>{const u=D("perfect-scrollbar");return f(c)?(n(),r("div",Et,[e(T,{indeterminate:"",color:"primary"})])):(n(),r("div",It,[e(me,{clearable:"",variant:"solo",class:"elevation-1 ma-3","hide-details":"","prepend-inner-icon":"mdi-magnify",placeholder:"Filter Tasks",modelValue:f(m),"onUpdate:modelValue":s[0]||(s[0]=i=>ue(m)?m.value=i:null)},null,8,["modelValue"]),e(u,{class:"todo-list"},{default:a(()=>[e(pe,{name:"fade"},{default:a(()=>[(n(!0),r($,null,C(f(h),i=>(n(),r("div",{key:i.id},[t("div",Nt,[t("div",null,[e(xe,{modelValue:i.completed,"onUpdate:modelValue":b=>i.completed=b,color:"primary",class:"pe-2"},null,8,["modelValue","onUpdate:modelValue"])]),e(O,{size:"40"},{default:a(()=>[e(he,{src:"https://avatars.githubusercontent.com/u/35951244?v=4",alt:"alt"})]),_:1}),t("div",At,[t("div",{class:Z(["font-weight-bold",i.completed?"text-decoration-line-through":""])},d(i.title),3),t("div",{class:Z(i.completed?"text-decoration-line-through":"")},d(i.detail),3),t("div",null,[(n(!0),r($,null,C(i.tags,b=>(n(),j(M,{size:"x-small",variant:"outlined",class:"mr-1 mt-1",color:_(b)},{default:a(()=>[v(d(b),1)]),_:2},1032,["color"]))),256))])]),e(V,{icon:"mdi-delete-outline",variant:"text",onClick:b=>f(o).deleteTodoById(i.id)},null,8,["onClick"])])]))),128))]),_:1})]),_:1})]))}}}),Ot=B(zt,[["__scopeId","data-v-b73a5550"]]),Bt={key:0,class:"h-full d-flex flex-grow-1 align-center justify-center"},Mt={key:1},Ft=t("h6",{class:"text-h6 d-flex align-center font-weight-bold"},[t("span",{class:"pa-5"},"Chart")],-1),Rt=x({__name:"ChartCard",setup(l){const o=y(!0);return w(()=>{setTimeout(()=>{o.value=!1},1e3)}),(c,m)=>o.value?(n(),r("div",Bt,[e(T,{indeterminate:"",color:"primary"})])):(n(),r("div",Mt,[Ft,e(g,{variant:"flat"},{default:a(()=>[e(be)]),_:1})]))}}),Ut={class:"pa-5"},ta=x({__name:"DashBoard",setup(l){return(o,c)=>(n(),r("div",Ut,[e(I,{class:"flex-0",dense:""},{default:a(()=>[e(k,{cols:"12",xl:"4"},{default:a(()=>[e(g,{class:"card-shadow",height:"420"},{default:a(()=>[e(Re,{value:1837.32,class:"h-100",percentage:3.2,style:{"min-height":"380px"},"percentage-label":o.$t("dashboard.lastweek"),"action-label":o.$t("dashboard.viewReport")},null,8,["percentage-label","action-label"])]),_:1})]),_:1}),e(k,{cols:"12",md:"6",xl:"4"},{default:a(()=>[e(g,{class:"card-shadow",height:"420"},{default:a(()=>[e(nt)]),_:1})]),_:1}),e(k,{cols:"12",md:"6",xl:"4"},{default:a(()=>[e(g,{class:"card-shadow h-full",height:"420"},{default:a(()=>[e(Ze)]),_:1})]),_:1})]),_:1}),e(I,{class:"card-shadow flex-grow-0",dense:""},{default:a(()=>[e(k,{cols:"12",xl:"6"},{default:a(()=>[e(g,{class:"card-shadow",height:"420"},{default:a(()=>[e(bt)]),_:1})]),_:1}),e(k,{cols:"12",xl:"6"},{default:a(()=>[e(g,{class:"card-shadow",height:"420"},{default:a(()=>[e(Rt)]),_:1})]),_:1})]),_:1}),e(I,{class:"card-shadow flex-grow-0",dense:""},{default:a(()=>[e(k,{cols:"12",xl:"6"},{default:a(()=>[e(g,{class:"card-shadow",height:"420"},{default:a(()=>[e(Ot)]),_:1})]),_:1}),e(k,{cols:"12",xl:"6"},{default:a(()=>[e(g,{class:"card-shadow",height:"420"},{default:a(()=>[e(jt)]),_:1})]),_:1})]),_:1})]))}});export{ta as default};

import{_ as y}from"./FeatureCard.vue_vue_type_script_setup_true_lang-J-q5Ikav.js";import{u as g,T as w,R as C,e as d}from"./echarts-C8_BWoOq.js";import{d as p,f as D,r as S,g as x,v as V,x as k,o as h,i as f,w as r,l as B,q as M,b as m}from"./index-5UehqYXh.js";import{V as R}from"./VContainer-BCpTP6Vi.js";import"./install-JAUlnq3L.js";const T=p({__name:"WaterDropChart1",setup(u){let o=+new Date,e=[],s=[];for(let t=0;t<20;t++){let a=new Date(o+=864e5);[a.getFullYear(),a.getMonth()+1,a.getDate()].join("-");let c=Math.random()*200,b=Math.random()*200;s.push(c),e.push(b+c)}const l=D(()=>({backgroundColor:"#0F224C",series:[{name:"line",type:"line",smooth:!0,showAllSymbol:!0,symbol:"emptyCircle",symbolSize:15,data:e},{name:"bar",type:"bar",barWidth:10,itemStyle:{borderRadius:5,color:new d.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#14c8d4"},{offset:1,color:"#43eec6"}])},data:s},{name:"line",type:"bar",barGap:"-100%",barWidth:10,itemStyle:{color:new d.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(20,200,212,0.5)"},{offset:.2,color:"rgba(20,200,212,0.2)"},{offset:1,color:"rgba(20,200,212,0)"}])},z:-12,data:e},{name:"dotted",type:"pictorialBar",symbol:"rect",itemStyle:{color:"#0f375f"},symbolRepeat:!0,symbolSize:[12,4],symbolMargin:1,z:-10,data:e}]})),n=S(null),{setOption:i,showLoading:_}=g(n,!0,!0,C.SVGRenderer,w.Light);return x(()=>{V(()=>{_(),i(l.value)})}),k(()=>l.value,t=>{i(t)},{deep:!0}),(t,a)=>(h(),f(M,{height:"360"},{default:r(()=>[B("div",{ref_key:"chartEl",ref:n,style:{width:"100%",height:"100%"}},null,512)]),_:1}))}}),E=p({__name:"EchartOthers",setup(u){return(o,e)=>(h(),f(R,{class:""},{default:r(()=>[m(y,{title:"WaterDropChart"},{default:r(()=>[m(T)]),_:1})]),_:1}))}});export{E as default};

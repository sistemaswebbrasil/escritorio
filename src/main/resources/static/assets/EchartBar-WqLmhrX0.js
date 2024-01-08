import{_ as u}from"./BarChart1.vue_vue_type_script_setup_true_lang-7SqDJQlG.js";import{u as f,T as d,R as h,e as x}from"./echarts-C8_BWoOq.js";import{d as s,f as _,r as y,g as v,v as g,x as w,o as n,i,w as l,l as c,q as A,b as o}from"./index-5UehqYXh.js";import{V as b}from"./VContainer-BCpTP6Vi.js";import"./install-JAUlnq3L.js";const k=c("h1",{class:"text-h5 my-5"},"Control Panel",-1),C=s({__name:"BarChart2",setup(p){const a=_(()=>({title:{text:"Rainfall vs Evaporation",subtext:"Fake Data"},tooltip:{trigger:"axis"},legend:{data:["Rainfall","Evaporation"]},toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!0,xAxis:[{type:"category",data:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}],yAxis:[{type:"value"}],series:[{name:"Rainfall",type:"bar",data:[2,4.9,7,23.2,25.6,76.7,135.6,162.2,32.6,20,6.4,3.3],markPoint:{data:[{type:"max",name:"Max"},{type:"min",name:"Min"}]},markLine:{data:[{type:"average",name:"Avg"}]}},{name:"Evaporation",type:"bar",data:[2.6,5.9,9,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6,2.3],markPoint:{data:[{name:"Max",value:182.2,xAxis:7,yAxis:183},{name:"Min",value:2.3,xAxis:11,yAxis:3}]},itemStyle:{color:new x.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#2378f7"},{offset:.7,color:"#2378f7"},{offset:1,color:"#83bff6"}])},markLine:{data:[{type:"average",name:"Avg"}]}}]})),e=y(null),{setOption:t,showLoading:m}=f(e,!0,!0,h.SVGRenderer,d.Light);return v(()=>{g(()=>{m(),t(a.value)})}),w(()=>a.value,r=>{t(r)},{deep:!0}),(r,M)=>(n(),i(A,{class:"ma-5 pa-5"},{default:l(()=>[c("div",{ref_key:"chartEl",ref:e,style:{width:"100%",height:"800px"}},null,512),k]),_:1}))}}),L=s({__name:"EchartBar",setup(p){return(a,e)=>(n(),i(b,null,{default:l(()=>[o(u),o(C)]),_:1}))}});export{L as default};

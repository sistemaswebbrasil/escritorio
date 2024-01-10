import{p as s}from"./plantuml-Xv9kFk7F.js";import{_ as l}from"./FeatureCard.vue_vue_type_script_setup_true_lang-AFcqdQ40.js";import{d as r,o as n,a as c,D as i,F as p,b as a,w as o,P as d,j as u}from"./index-jhG6Atar.js";import{V as m}from"./VContainer-Jy1yEOM6.js";const D=r({__name:"PlantumlObject",setup(f){const e=[{name:"Object Diagram - Basic",size:"35vh",data:`
left to right direction
' Horizontal lines: -->, <--, <-->
' Vertical lines: ->, <-, <->

map Kick.Off {
}
map task.1 {
    Start => End
}
map task.2 {
    Start => End
}
map task.3 {
    Start => End
}
map task.4 {
    Start => End
}
map task.5 {
    Start => End
}
Kick.Off --> task.1 : Label 1
Kick.Off --> task.2 : Label 2
Kick.Off --> task.3 : Label 3
task.1 --> task.4
task.2 --> task.4
task.3 --> task.4
task.4 --> task.5 : Label 4
`},{name:"Object Diagram - Deployment",size:"20vh",data:`
cloud cloud1
cloud cloud2
cloud cloud3
cloud cloud4
cloud cloud5
cloud1 -0- cloud2
cloud1 -0)- cloud3
cloud1 -(0- cloud4
cloud1 -(0)- cloud5

`},{name:"Object Diagram - Port",size:"65vh",data:`
[i]
node node {
  portin p1
  portin p2
  portin p3
  portout po1
  portout po2
  portout po3
  file f1
}
[o]

i --> p1
i --> p2
i --> p3
p1 --> f1
p2 --> f1
po1 --> o
po2 --> o
po3 --> o
f1 --> po1
`}];return(k,_)=>(n(),c(p,null,i(e,t=>a(m,null,{default:o(()=>[a(l,{title:t.name},{default:o(()=>[a(d,{src:u(s)(t.data),width:"100vw","max-height":t.size,contain:"",attrs:"props"},null,8,["src","max-height"])]),_:2},1032,["title"])]),_:2},1024)),64))}});export{D as default};

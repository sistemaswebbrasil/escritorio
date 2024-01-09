import{p as r}from"./plantuml-xUp4Yyq3.js";import{_ as n}from"./FeatureCard.vue_vue_type_script_setup_true_lang-1KvjxIcw.js";import{d as i,o as s,a as c,D as l,F as u,b as e,w as a,P as p,j as d}from"./index-RUDlLveH.js";import{V as m}from"./VContainer-XOr508x_.js";const g=i({__name:"PlantumlSequence",setup(F){const t=[{name:"Sequence Diagram - Basic",size:"25vh",data:`
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response

Alice -> Bob: Another authentication Request
Alice <-- Bob: Another authentication Response
`},{name:"Sequence Diagram - Activation",size:"45vh",data:`
alice -> bob ++ : hello
bob -> bob ++ : self call
bob -> bib ++  #005500 : hello
bob -> george ** : create
return done
return rc
bob -> george !! : delete
return success
`},{name:"Sequence Diagram - Colorful, Twisted",size:"40vh",data:`
skinparam handwritten true

skinparam sequence {
ArrowColor DeepSkyBlue
ActorBorderColor DeepSkyBlue
LifeLineBorderColor blue
LifeLineBackgroundColor #A9DCDF

ParticipantBorderColor DeepSkyBlue
ParticipantBackgroundColor DodgerBlue
ParticipantFontName Impact
ParticipantFontSize 17
ParticipantFontColor #A9DCDF

ActorBackgroundColor aqua
ActorFontColor DeepSkyBlue
ActorFontSize 17
ActorFontName Aapex
}

actor User
participant "First Class" as A
participant "Second Class" as B
participant "Last Class" as C

User -> A: DoWork
activate A

A -> B: Create Request
activate B

B -> C: DoWork
activate C
C --> B: WorkDone
destroy C

B --> A: Request Created
deactivate B

A --> User: Done
deactivate A

`},{name:"Sequence Diagram - Complex",size:"50vh",data:`

participant Participant as Foo
actor       Actor       as Foo1
boundary    Boundary    as Foo2
control     Control     as Foo3
entity      Entity      as Foo4
database    Database    as Foo5
collections Collections as Foo6
queue       Queue       as Foo7
Foo -> Foo1 : To actor 
Foo -> Foo2 : To boundary
Foo -> Foo3 : To control
group My own label [My own label 2]
Foo -> Foo4 : To entity
Foo -> Foo5 : To database
end
Foo -> Foo6 : To collections
Foo -> Foo7: To queue

`}];return(C,b)=>(s(),c(u,null,l(t,o=>e(m,null,{default:a(()=>[e(n,{title:o.name},{default:a(()=>[e(p,{src:d(r)(o.data),width:"100vw","max-height":o.size,contain:"",attrs:"props"},null,8,["src","max-height"])]),_:2},1032,["title"])]),_:2},1024)),64))}});export{g as default};

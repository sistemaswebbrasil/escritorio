import{p as t}from"./plantuml-K38k2-ia.js";import{_ as r}from"./FeatureCard.vue_vue_type_script_setup_true_lang-H3HlJZoQ.js";import{d as n,o as l,a as d,D as o,F as g,b as e,w as s,P as h,j as m}from"./index-v-Xdsu0i.js";import{V as c}from"./VContainer-Uh9yoGuz.js";const f=n({__name:"PlantumlTiming",setup(w){const a=[{name:"Timing Diagram - Basic",size:"45vh",data:`
    @startuml
clock   "Clock_0"   as C0 with period 50
clock   "Clock_1"   as C1 with period 50 pulse 15 offset 10
binary  "Binary"  as B
concise "Concise" as C
robust  "Robust"  as R
analog  "Analog"  as A


@0
C is Idle
R is Idle
A is 0

@100
B is high
C is Waiting
R is Processing
A is 3

@300
R is Waiting
A is 1
@enduml

`},{name:"Timing Diagram - Binary",size:"15vh",data:`
    @startuml
clock "Clock" as C with period 2
binary "Enable" as EN

@0
EN is low
@1
EN is high
@3
EN is low
@5
EN is {low,high}
@10
EN is low
@enduml

`},{name:"Timing Diagram - Highlighted ",size:"25vh",data:`
    @startuml
robust "Web Browser" as WB
concise "Web User" as WU

@0
WU is Idle
WB is Idle

@100
WU -> WB : URL
WU is Waiting #LightCyan;line:Aqua

@200
WB is Proc.

@300
WU -> WB@350 : URL2
WB is Waiting

@+200
WU is ok

@+200
WB is Idle

highlight 200 to 450 #Gold;line:DimGrey : This is my caption
highlight 600 to 700 : This is another\\nhighlight
@enduml

`},{name:"Timing Diagram - Digital ",size:"35vh",data:`

    @startuml
scale 5 as 150 pixels

clock clk with period 1
binary "enable" as en
binary "R/W" as rw
binary "data Valid" as dv
concise "dataBus" as db
concise "address bus" as addr

@6 as :write_beg
@10 as :write_end

@15 as :read_beg
@19 as :read_end


@0
en is low
db is "0x0"
addr is "0x03f"
rw is low
dv is 0

@:write_beg-3
 en is high
@:write_beg-2
 db is "0xDEADBEEF"
@:write_beg-1
dv is 1
@:write_beg
rw is high


@:write_end
rw is low
dv is low
@:write_end+1
rw is low
db is "0x0"
addr is "0x23"

@12
dv is high
@13 
db is "0xFFFF"

@20
en is low
dv is low
@21 
db is "0x0"

highlight :write_beg to :write_end #Gold:Write
highlight :read_beg to :read_end #lightBlue:Read

db@:write_beg-1 <-> @:write_end : setup time
db@:write_beg-1 -> addr@:write_end+1 : hold
@enduml

`}];return(_,b)=>(l(),d(g,null,o(a,i=>e(c,null,{default:s(()=>[e(r,{title:i.name},{default:s(()=>[e(h,{src:m(t)(i.data),width:"100vw","max-height":i.size,contain:"",attrs:"props"},null,8,["src","max-height"])]),_:2},1032,["title"])]),_:2},1024)),64))}});export{f as default};

import{V as k,s as V}from"./VDataTableServer-C8yqHssr.js";import{C as v}from"./CopyLabel-Zjam_dJG.js";import{d as b,r as d,W as w,o as x,a as C,b as l,w as a,p as U,m as q,O as T,j as r,X as N,H as z,l as e,E as A,t as o,e as p,V as D,q as S}from"./index-5UehqYXh.js";import{V as u}from"./VChip-4-pLF36n.js";import"./VDataTable-_y6ecxC-.js";import"./VSelect-SuYkNkX4.js";import"./VCheckboxBtn-3B9J-9Rl.js";import"./VPagination-BIiim5gb.js";import"./VTable-wNN-DjdN.js";import"./VTooltip-cj1JSSGm.js";const B={class:""},H=e("span",null," Unsplash Users",-1),L={class:"font-weight-bold"},O=["src"],P={class:"text-center"},E={class:"text-center"},R=["href"],Z=b({__name:"DataTablePage",setup(j){const i=d(!0),_=d(0),s=w({query:"cat",page:1,per_page:25}),g=[{title:"用户名",key:"username"},{title:"头像",key:"avatar"},{title:"用户id",key:"id"},{title:"全名",key:"name"},{title:"位置",key:"location",width:"200px"},{title:"是否可用",key:"for_hire",align:"center"},{title:"收藏数",key:"total_collections"},{title:"喜欢数",key:"total_likes"},{title:"照片数",key:"total_photos"},{title:"接受条款",key:"accepted_tos",align:"center"},{title:"作品集",key:"portfolio_url"}],m=d([]),f=async()=>{i.value=!0;const c=await V(s);m.value=c.data.results.map(t=>({id:t.id,avatar:t.profile_image.small,username:t.username,name:t.name,location:t.location,for_hire:t.for_hire,total_collections:t.total_collections,total_likes:t.total_likes,total_photos:t.total_photos,accepted_tos:t.accepted_tos,portfolio_url:t.portfolio_url})),_.value=c.data.total,i.value=!1},h=async n=>{s.per_page=n.itemsPerPage,s.page=n.page,await f()},y=n=>n>400?"red":n>200?"orange":"grey";return(n,c)=>(x(),C("div",B,[l(S,null,{default:a(()=>[l(U,{class:"font-weight-bold"},{default:a(()=>[H,l(q),l(T,{modelValue:r(s).query,"onUpdate:modelValue":c[0]||(c[0]=t=>r(s).query=t),variant:"solo",class:"elevation-1","append-icon":"mdi-magnify","onClick:append":f,label:"Search","single-line":"","hide-details":"",clearable:""},null,8,["modelValue"])]),_:1}),l(N),l(z,null,{default:a(()=>[l(k,{headers:g,items:r(m),search:r(s).query,loading:r(i),"items-per-page":r(s).per_page,"items-length":r(_),"item-value":"id","onUpdate:options":h},{item:a(({item:t})=>[e("tr",null,[e("td",L,[l(v,{text:t.columns.username},null,8,["text"])]),e("td",null,[l(A,{size:"30"},{default:a(()=>[e("img",{src:t.columns.avatar,alt:"alt"},null,8,O)]),_:2},1024)]),e("td",null,o(t.columns.id),1),e("td",null,o(t.columns.name),1),e("td",null,o(t.columns.location),1),e("td",P,[l(u,{size:"small",color:t.columns.for_hire?"blue":"grey",class:"font-weight-bold"},{default:a(()=>[p(o(t.columns.for_hire?"Hire":"No Hire"),1)]),_:2},1032,["color"])]),e("td",null,o(t.columns.total_collections),1),e("td",null,[l(u,{size:"small",color:y(t.columns.total_likes),class:"font-weight-bold"},{default:a(()=>[p(o(t.columns.total_likes),1)]),_:2},1032,["color"])]),e("td",null,o(t.columns.total_photos),1),e("td",E,[l(u,{size:"small",color:t.columns.accepted_tos?"green":"pink",class:"font-weight-bold"},{default:a(()=>[l(D,{start:"",icon:t.columns.accepted_tos?"mdi-security ":"mdi-close-octagon"},null,8,["icon"]),p(" "+o(t.columns.accepted_tos?"Accepted":"Not Accepted"),1)]),_:2},1032,["color"])]),e("td",null,[e("a",{href:t.columns.portfolio_url,target:"_blank"},o(t.columns.portfolio_url),9,R)])])]),_:1},8,["items","search","loading","items-per-page","items-length"])]),_:1})]),_:1})]))}});export{Z as default};

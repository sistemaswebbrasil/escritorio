import{d as W,a1 as B,r as l,h as G,o as C,a as F,b as o,w as s,p as T,G as D,e as r,H as K,j as e,N as y,O as P,a2 as S,n as w,t as i,l as g,L as O,q as R,F as U,I as $}from"./index-peTGnuZv.js";import{V as A}from"./VForm-MkxcQjtg.js";const M=g("span",{class:"flex-fill"}," Welcome ",-1),j={class:"text-grey text-center text-caption font-weight-bold text-uppercase my-5"},H={key:0,class:"error--text my-2"},J={class:"mt-5 text-center"},Q={class:"text-center mt-6"},ee=W({__name:"SigninPage",setup(X){const p=B(),v=l(!1),d=l(!1),V=l(),c=l("admin@escritorio.com"),m=l("Senha@123"),u=l(!0),f=l(!1),b=async()=>{const{valid:a}=await V.value.validate();if(a)try{v.value=!0,d.value=!0,await p.loginWithEmailAndPassword(c.value,m.value)}catch{console.log("Deu erro na api"),u.value=!1}finally{v.value=!1,d.value=!1,u.value=!1}},I=()=>{p.loginWithGoogle()},q=l([a=>!!a||"E-mail is required",a=>/.+@.+\..+/.test(a)||"E-mail must be valid"]),z=l([a=>!!a||"Password is required",a=>a&&a.length<=10||"Password must be less than 10 characters"]),E=l(!1),L=l(""),h=l(!1),x=l(""),_=()=>{h.value=!1,x.value=""},N=()=>{alert(p.isLoggedIn)};return(a,t)=>{const k=G("router-link");return C(),F(U,null,[o(R,{color:"white",class:"pa-3 ma-3",elevation:"3"},{default:s(()=>[o(T,{class:"my-4 text-h4"},{default:s(()=>[M]),_:1}),o(D,null,{default:s(()=>[r("Sign in to your account")]),_:1}),o(K,null,{default:s(()=>[o(A,{ref_key:"refLoginForm",ref:V,class:"text-left",modelValue:e(u),"onUpdate:modelValue":t[3]||(t[3]=n=>y(u)?u.value=n:null),"lazy-validation":""},{default:s(()=>[o(P,{ref:"refEmail",modelValue:e(c),"onUpdate:modelValue":t[0]||(t[0]=n=>y(c)?c.value=n:null),required:"",error:e(h),label:a.$t("login.email"),density:"default",variant:"underlined",color:"primary","bg-color":"#fff",rules:e(q),name:"email",outlined:"",validateOn:"blur",placeholder:"403474473@qq.com",onKeyup:S(b,["enter"]),onChange:_},null,8,["modelValue","error","label","rules"]),o(P,{ref:"refPassword",modelValue:e(m),"onUpdate:modelValue":t[1]||(t[1]=n=>y(m)?m.value=n:null),"append-inner-icon":e(f)?"mdi-eye":"mdi-eye-off",type:e(f)?"text":"password",error:e(h),"error-messages":e(x),label:a.$t("login.password"),placeholder:"sfm12345",density:"default",variant:"underlined",color:"primary","bg-color":"#fff",rules:e(z),name:"password",outlined:"",validateOn:"blur",onChange:_,onKeyup:S(b,["enter"]),"onClick:appendInner":t[2]||(t[2]=n=>f.value=!e(f))},null,8,["modelValue","append-inner-icon","type","error","error-messages","label","rules"]),o(w,{loading:e(v),disabled:e(d),block:"",size:"x-large",color:"primary",onClick:b,class:"mt-2"},{default:s(()=>[r(i(a.$t("login.button")),1)]),_:1},8,["loading","disabled"]),g("div",j,i(a.$t("login.orsign")),1),o(w,{class:"mb-2 text-capitalize",color:"white",elevation:"1",block:"",size:"x-large",onClick:I,disabled:e(d)},{default:s(()=>[o(e($),{icon:"logos:google-icon",class:"mr-3 my-2"}),r(" Google ")]),_:1},8,["disabled"]),o(w,{class:"mb-2 lighten-2 text-capitalize",elevation:"1",color:"white",block:"",size:"x-large",disabled:e(d),onClick:N},{default:s(()=>[o(e($),{icon:"logos:facebook",class:"mr-3"}),r(" Facebook ")]),_:1},8,["disabled"]),e(E)?(C(),F("div",H,i(e(L)),1)):O("",!0),g("div",J,[o(k,{class:"text-primary",to:"/auth/forgot-password"},{default:s(()=>[r(i(a.$t("login.forgot")),1)]),_:1})])]),_:1},8,["modelValue"])]),_:1})]),_:1}),g("div",Q,[r(i(a.$t("login.noaccount"))+" ",1),o(k,{to:"/auth/signup",class:"text-primary font-weight-bold"},{default:s(()=>[r(i(a.$t("login.create")),1)]),_:1})])],64)}}});export{ee as default};

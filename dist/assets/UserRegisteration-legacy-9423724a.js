System.register(["./axios-legacy-24b06a60.js","./index-legacy-11011bee.js","./login-legacy-60d51794.js"],(function(e,l){"use strict";var a,u,t,n,o,s,c,d,r,i,v,f,p,m,g,_,h,w,b,y,x,V,k,C,E;return{setters:[e=>{a=e.a},e=>{u=e.d,t=e.r,n=e.u,o=e.a,s=e.c,c=e.w,d=e.b,r=e.o,i=e.e,v=e.f,f=e.D,p=e.E,m=e.G,g=e.g,_=e.H,h=e.J,w=e.h,b=e.n,y=e.t,x=e.j,V=e.k,k=e.l,C=e.m},e=>{E=e.u}],execute:function(){const l={class:"flex-center"};e("default",u({__name:"UserRegisteration",setup(e){const u=t(""),R=t(""),U=t(""),j=t(""),P=t(""),S=t(""),A=t(""),I=t(""),T=n(),z=E().get("csrftoken");function D(){/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(u.value)?P.value="":P.value="Invalid email format"}function G(){R.value.length<8?S.value="Password must be at least 8 characters long":S.value=""}function F(){U.value!==R.value?A.value="Passwords do not match!":A.value=""}function H(){return u.value&&R.value&&U.value&&j.value&&!P.value&&!S.value&&!A.value&&!I.value}async function J(){if(H())try{const e=await a.post("http://localhost:8000/signup/",{email:u.value,password:R.value,reenter_password:U.value,role:j.value});console.log("Registration successful",e),T.push("/login")}catch(e){console.error("An error occurred.",e.response)}}return z&&(a.defaults.headers.common["X-CSRFToken"]=z),(e,a)=>{const t=o("ion-img"),n=o("ion-text"),E=o("ion-select-option"),T=o("ion-select");return r(),s(d(C),null,{default:c((()=>[i(d(k),null,{default:c((()=>[v("div",l,[i(d(f),{class:"ion-no-margin"},{default:c((()=>[i(d(p),null,{default:c((()=>[i(d(m),{class:"card-title"},{default:c((()=>[g("Curacao "),i(t,{class:"login-image",src:"../public/Curacao.png"})])),_:1})])),_:1}),i(d(_),null,{default:c((()=>[i(d(h),null,{default:c((()=>[i(d(w),{modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=e=>u.value=e),label:"Email","label-placement":"floating",placeholder:"Enter text",type:"email",class:b({"is-invalid":P.value}),onChange:D},null,8,["modelValue","class"]),P.value?(r(),s(n,{key:0,color:"danger",class:"wrap-text"},{default:c((()=>[g(y(P.value),1)])),_:1})):x("",!0)])),_:1}),i(d(h),null,{default:c((()=>[i(d(w),{modelValue:R.value,"onUpdate:modelValue":a[1]||(a[1]=e=>R.value=e),label:"Password","label-placement":"floating",placeholder:"Enter text",type:"password",class:b({"is-invalid":S.value}),onChange:G},null,8,["modelValue","class"]),S.value?(r(),s(n,{key:0,color:"danger",class:"wrap-text"},{default:c((()=>[g(y(S.value),1)])),_:1})):x("",!0)])),_:1}),i(d(h),null,{default:c((()=>[i(d(w),{modelValue:U.value,"onUpdate:modelValue":a[2]||(a[2]=e=>U.value=e),label:"Re-enter password","label-placement":"floating",placeholder:"Enter text",type:"password",class:b({"is-invalid":A.value}),onChange:F},null,8,["modelValue","class"]),A.value?(r(),s(n,{key:0,color:"danger",class:"wrap-text"},{default:c((()=>[g(y(A.value),1)])),_:1})):x("",!0)])),_:1}),i(d(h),null,{default:c((()=>[i(T,{modelValue:j.value,"onUpdate:modelValue":a[3]||(a[3]=e=>j.value=e),label:"Select an option","label-placement":"floating",class:b({"is-invalid":I.value}),onIonChange:a[4]||(a[4]=e=>{j.value=e.detail.value,j.value?I.value="":I.value="Please select an option"})},{default:c((()=>[i(E,{value:"developer"},{default:c((()=>[g("Developer")])),_:1}),i(E,{value:"admin"},{default:c((()=>[g("Admin")])),_:1}),i(E,{value:"technician"},{default:c((()=>[g("Technician")])),_:1})])),_:1},8,["modelValue","class"]),I.value?(r(),s(n,{key:0,color:"danger",class:"wrap-text"},{default:c((()=>[g(y(I.value),1)])),_:1})):x("",!0)])),_:1}),i(d(V),{class:"login-button",size:"default",onClick:J,disabled:!H()},{default:c((()=>[g("REGISTER")])),_:1},8,["disabled"])])),_:1})])),_:1})])])),_:1})])),_:1})}}}))}}}));
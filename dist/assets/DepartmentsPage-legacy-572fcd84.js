System.register(["./index-legacy-11011bee.js","./SaveCancelButtons.vue_vue_type_script_setup_true_lang-legacy-cae343f7.js","./PageNameLogoHeader.vue_vue_type_script_setup_true_lang-legacy-f1eda337.js","./axios-legacy-8bd01447.js","./axios-legacy-24b06a60.js"],(function(e,l){"use strict";var a,t,u,n,o,r,s,c,d,i,_,v,m,p,g,f,y,V,h;return{setters:[e=>{a=e.d,t=e.r,u=e.c,n=e.w,o=e.b,r=e.o,s=e.e,c=e.q,d=e.s,i=e.v,_=e.h,v=e.A,m=e.C,p=e.g,g=e.l,f=e.m},e=>{y=e._},e=>{V=e._},e=>{h=e.g},null],execute:function(){e("default",a({__name:"DepartmentsPage",setup(e){const l=t(),a=t();async function j(){try{const e=await h.post("/departments/",{department:l.value,status:a.value[0]});console.log(e.data)}catch(e){console.error(e)}}return(e,t)=>(r(),u(o(f),null,{default:n((()=>[s(V,{"page-name":"Departments"}),s(o(g),null,{default:n((()=>[s(o(c),{fixed:!0},{default:n((()=>[s(o(d),null,{default:n((()=>[s(o(i),null,{default:n((()=>[s(o(_),{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),class:"ion-margin-vertical",label:"DEPARTMENT",fill:"outline",placeholder:"Enter the department name"},null,8,["modelValue"]),s(o(v),{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value=e),class:"ion-margin-vertical",label:"STATUS",fill:"outline",interface:"popover",placeholder:"Active or Inactive?"},{default:n((()=>[s(o(m),null,{default:n((()=>[p("Active")])),_:1}),s(o(m),null,{default:n((()=>[p("Inactive")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),s(y,{onOnSave:j})])),_:1})])),_:1})])),_:1}))}}))}}}));

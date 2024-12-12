import{L as h}from"./Logo2-Dki--5bN.js";import{B as w}from"./BaseError-DHc_fB5i.js";import{_ as T}from"./SignUp_Navbar-wzy4DCPZ.js";import{_ as g}from"./BaseInputField-CueDg02B.js";import{B as p}from"./BaseLabel-B_QUgRxg.js";import{B as q}from"./BaseOptionDefaultField-ChIC6DxL.js";import{_ as k,a as C}from"./BaseSelectField-0xnRKzRz.js";import{T as j,L as I}from"./Toast-aYdHTg1b.js";import{u as Q,c as y,r as c}from"./index-DdfTu6JV.js";import{k as V,l as O,r as N,c as $,s as u,p as f,a as t,b as n,u as l,w as a,d as W,F as x,h as Y,i as z,o as d,e as o,t as m,I as L,g as P}from"./index-B8R3md61.js";const G={class:"2xl:p-10 2xs:p-0"},H={class:"bg-white h-full w-full flex flex-col mt-5 items-center space-y-2 border-2 border-gray-300 p-10 rounded-md"},J=["src"],K={class:"w-96 p-6 rounded-lg shadow-lg text-start space-y-6 overflow-y-auto border-2 border-[#608C54]"},X={class:"relative"},Z={class:"relative"},me={__name:"Sign-Up",setup(ee){const _=Y(),U=z(),B=V(()=>_.state.showLoading.state),E=V(()=>_.state.roleDropdown.data),S=V(()=>_.state.securityDropdown.data);_.dispatch("getRoleDropdown"),_.dispatch("getSecurityDropdown");const r=O({first_name:"",last_name:"",middle_name:"",password:"",password_confirmation:"",email:"",role:"",security_question_id:"",security_answer:""}),v=N(!1),M=()=>{v.value=!v.value},b=N(!1),R=()=>{b.value=!b.value},D=V(()=>({first_name:{required:y.withMessage("First Name is required",c)},last_name:{required:y.withMessage("Last Name is required",c)},password:{required:y.withMessage("Password is required",c)},password_confirmation:{required:y.withMessage("Password Confirmation is required",c)},email:{required:y.withMessage("Email Address is required",c)},role:{required:y.withMessage("Role is required",c)},security_question_id:{required:y.withMessage("Question is required",c)},security_answer:{required:y.withMessage("Answer is required",c)}})),i=Q(D,r);async function A(){console.log("account",r),await i.value.$validate()&&await _.dispatch("createUser",r).then(e=>{e.isSuccess==!0&&U.push({name:"Page_2"})})}return(F,e)=>(d(),$(x,null,[B.value?(d(),u(I,{key:0,class:"loading"})):f("",!0),t(j),n("div",null,[t(T),n("div",G,[n("div",H,[n("img",{src:l(h),alt:"Logo2",class:"h-16 mb-2"},null,8,J),n("div",K,[e[20]||(e[20]=n("h2",{class:"text-xl font-semibold text-[#608C54]"},"Create an Account",-1)),n("div",null,[t(p,{class:"font-semibold"},{default:a(()=>e[9]||(e[9]=[o("First Name")])),_:1}),t(g,{modelValue:r.first_name,"onUpdate:modelValue":e[0]||(e[0]=s=>r.first_name=s),placeholder:"Enter First Name"},null,8,["modelValue"]),l(i).first_name.$error?(d(),u(w,{key:0},{default:a(()=>[o(m(l(i).first_name.$errors[0].$message),1)]),_:1})):f("",!0),t(p,{class:"font-semibold"},{default:a(()=>e[10]||(e[10]=[o("Last Name")])),_:1}),t(g,{modelValue:r.last_name,"onUpdate:modelValue":e[1]||(e[1]=s=>r.last_name=s),placeholder:"Enter Last Name"},null,8,["modelValue"]),l(i).last_name.$error?(d(),u(w,{key:1},{default:a(()=>[o(m(l(i).last_name.$errors[0].$message),1)]),_:1})):f("",!0),t(p,{class:"font-semibold"},{default:a(()=>e[11]||(e[11]=[o("Middle Name")])),_:1}),t(g,{modelValue:r.middle_name,"onUpdate:modelValue":e[2]||(e[2]=s=>r.middle_name=s),placeholder:"Enter Middle Name"},null,8,["modelValue"]),n("div",X,[t(p,{class:"font-semibold"},{default:a(()=>e[12]||(e[12]=[o("Password")])),_:1}),t(g,{modelValue:r.password,"onUpdate:modelValue":e[3]||(e[3]=s=>r.password=s),type:v.value?"text":"password",placeholder:"Enter Your Password"},null,8,["modelValue","type"]),n("button",{type:"button",class:"absolute right-3 top-12 transform -translate-y-1/2 text-gray-500 items-center justify-center",onClick:M},[t(l(L),{icon:v.value?"ic:twotone-visibility-off":"ic:twotone-visibility"},null,8,["icon"])]),l(i).password.$error?(d(),u(w,{key:0},{default:a(()=>[o(m(l(i).password.$errors[0].$message),1)]),_:1})):f("",!0)]),n("div",Z,[t(p,{class:"font-semibold"},{default:a(()=>e[13]||(e[13]=[o("Re-enter password")])),_:1}),t(g,{modelValue:r.password_confirmation,"onUpdate:modelValue":e[4]||(e[4]=s=>r.password_confirmation=s),type:b.value?"text":"password",placeholder:"Re-enter password"},null,8,["modelValue","type"]),n("button",{type:"button",class:"absolute right-3 top-12 transform -translate-y-1/2 text-gray-500 items-center justify-center",onClick:R},[t(l(L),{icon:b.value?"ic:twotone-visibility-off":"ic:twotone-visibility"},null,8,["icon"])]),l(i).password_confirmation.$error?(d(),u(w,{key:0},{default:a(()=>[o(m(l(i).password_confirmation.$errors[0].$message),1)]),_:1})):f("",!0)]),t(p,{class:"font-semibold"},{default:a(()=>e[14]||(e[14]=[o("Email Address")])),_:1}),t(g,{modelValue:r.email,"onUpdate:modelValue":e[5]||(e[5]=s=>r.email=s),placeholder:"Enter email"},null,8,["modelValue"]),l(i).email.$error?(d(),u(w,{key:2},{default:a(()=>[o(m(l(i).email.$errors[0].$message),1)]),_:1})):f("",!0),t(p,{class:"font-semibold"},{default:a(()=>e[15]||(e[15]=[o("Select your type")])),_:1}),t(k,{modelValue:r.role,"onUpdate:modelValue":e[6]||(e[6]=s=>r.role=s)},{default:a(()=>[t(q,null,{default:a(()=>e[16]||(e[16]=[o("Select your type")])),_:1}),(d(!0),$(x,null,P(E.value,s=>(d(),u(C,{key:s.id,value:s.id},{default:a(()=>[o(m(s.role),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),l(i).role.$error?(d(),u(w,{key:3},{default:a(()=>[o(m(l(i).role.$errors[0].$message),1)]),_:1})):f("",!0),t(p,null,{default:a(()=>e[17]||(e[17]=[o("Select Question")])),_:1}),t(k,{modelValue:r.security_question_id,"onUpdate:modelValue":e[7]||(e[7]=s=>r.security_question_id=s)},{default:a(()=>[t(q,null,{default:a(()=>e[18]||(e[18]=[o("Select your question")])),_:1}),(d(!0),$(x,null,P(S.value,s=>(d(),u(C,{key:s.id,value:s.id},{default:a(()=>[o(m(s.question),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),l(i).security_question_id.$error?(d(),u(w,{key:4},{default:a(()=>[o(m(l(i).security_question_id.$errors[0].$message),1)]),_:1})):f("",!0),t(p,null,{default:a(()=>e[19]||(e[19]=[o("Answer:")])),_:1}),t(g,{class:"mt-3",modelValue:r.security_answer,"onUpdate:modelValue":e[8]||(e[8]=s=>r.security_answer=s),placeholder:"Enter your answer"},null,8,["modelValue"]),l(i).security_answer.$error?(d(),u(w,{key:5},{default:a(()=>[o(m(l(i).security_answer.$errors[0].$message),1)]),_:1})):f("",!0)]),n("button",{onClick:A,class:"w-full py-2 bg-[#608C54] text-white text-sm font-medium rounded-full hover:bg-[#4e7344] transition duration-200"},"Continue"),e[21]||(e[21]=W('<div class="text-xs space-y-2"><p>By creating an account, you agree to Pagsasaka <span class="text-[#608C54]">Conditions of Use</span> and <span class="text-[#608C54]">Privacy Notice.</span></p><hr class="w-full mx-auto border-t-2 border-[#608C54]"><p>Want to be part of Logistics? <br> Email us now and apply <span class="text-[#608C54]">Pagsasaka@gmail.com.</span></p><hr class="w-full mx-auto border-t-2 border-[#608C54]"><p>Already have an account?<a href="/login" class="text-[#608C54] hover:underline"> Sign in</a></p></div>',1))]),e[22]||(e[22]=n("div",{class:"text-xs"},[n("h1",null,"Pagsasaka. All Rights Reserved.")],-1))])])])],64))}};export{me as default};

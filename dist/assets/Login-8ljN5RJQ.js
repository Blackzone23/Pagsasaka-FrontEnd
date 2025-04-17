import{o as i,c as L,b as e,u as a,L as I,A as x,D as P,f as S,E as f,l as w,a as t,M,w as u,d as N,F as j,i as q,j as C,e as m,t as v,J as D}from"./index-DITtJx53.js";import{T as R,L as U}from"./Toast-CON0Qnhu.js";import{B as h}from"./BaseLabel-C_eLoLgN.js";import{u as T,B as _,c,r as b,e as G}from"./BaseError-CaTBdoDV.js";import{_ as y}from"./BaseInputField-9_3MsT9X.js";/* empty css                                                              */const A={class:"bg-[#285a19] text-white"},J={class:"container mx-auto flex items-center py-2"},Y={href:"/",class:"flex items-center"},z=["src"],H={__name:"Login_Navbar",setup($){return(r,n)=>(i(),L("nav",A,[e("div",J,[e("a",Y,[e("img",{src:a(I),alt:"Logo",class:"h-20"},null,8,z)]),n[0]||(n[0]=e("h1",{class:"text-lg font-bold"},"Log In",-1))])]))}},K="/assets/Farmer6-BUEjBcPg.png",O={class:"2xl:p-10 2xs:p-0 md:p-5"},Q={class:"h-full flex items-center justify-center border-2 border-gray-300 rounded-lg p-6 shadow-lg"},W={class:"w-full max-w-5xl flex shadow-lg rounded-lg overflow-hidden"},X={class:"hidden 2xl:block"},Z=["src"],ee={class:"2xl:w-1/2 2xs:w-[700px] lg:w-[1000px] 2xl:p-8 2xs:p-6 md:p-4 lg:p-8 bg-white border-gray-200 border-2"},se={class:"mb-4"},te={class:"mb-6"},ae={class:"relative"},ue={__name:"Login",setup($){const r=q(),n=C(),V=x(()=>r.state.showLoading.state);x(()=>r.state.isLoggedIn.value);const o=P({email:"",password:""}),d=S(!1),B=()=>{d.value=!d.value},E=g=>g.includes("@gmail.com"),k=x(()=>({email:{required:c.withMessage("Email is required",b),email:c.withMessage("Invalid email address",G),mustGoogleEmail:c.withMessage("Your email must be a valid google email",E)},password:{required:c.withMessage("Password is required",b)}})),l=T(k,o);async function F(){await l.value.$validate()&&await r.dispatch("login",o).then(s=>{s.isSuccess==!0&&(r.commit("setIsLoggedIn",!0),sessionStorage.setItem("isLoggedIn","true"),n.push({name:"Farmer_Dashboard"}))})}return(g,s)=>(i(),L(j,null,[V.value?(i(),f(U,{key:0,class:"loading"})):w("",!0),t(R),e("div",null,[t(H),e("div",O,[e("div",Q,[e("div",W,[e("div",X,[e("img",{src:a(K),alt:"Logo2",class:"h-full mb-2"},null,8,Z)]),e("div",ee,[s[5]||(s[5]=e("h2",{class:"2xl:text-2xl 2xs:text-lg font-semibold text-[#608C54] mb-6"},"Login",-1)),e("form",{onSubmit:M(F,["prevent"])},[e("div",se,[t(h,null,{default:u(()=>s[2]||(s[2]=[m("Email")])),_:1}),t(y,{modelValue:o.email,"onUpdate:modelValue":s[0]||(s[0]=p=>o.email=p),placeholder:"Phone number / Username / Email"},null,8,["modelValue"]),a(l).email.$error?(i(),f(_,{key:0},{default:u(()=>[m(v(a(l).email.$errors[0].$message),1)]),_:1})):w("",!0)]),e("div",te,[t(h,null,{default:u(()=>s[3]||(s[3]=[m("Password")])),_:1}),e("div",ae,[t(y,{type:d.value?"text":"password",modelValue:o.password,"onUpdate:modelValue":s[1]||(s[1]=p=>o.password=p),class:"w-full",placeholder:"Password"},null,8,["type","modelValue"]),e("button",{type:"button",onClick:B,class:"absolute right-3 2xl:top-5 md:top-6 2xs:top-6 lg:top-5 transform -translate-y-1/2 items-center justify-center cursor-pointer"},[t(a(D),{icon:d.value?"mdi:eye-off":"mdi:eye",class:"text-gray-400"},null,8,["icon"])]),a(l).password.$error?(i(),f(_,{key:0},{default:u(()=>[m(v(a(l).password.$errors[0].$message),1)]),_:1})):w("",!0)])]),s[4]||(s[4]=e("div",{class:"text-center"},[e("button",{type:"submit",class:"2xl:w-52 2xs:w-28 md:w-44 text-center items-center justify-center py-2 bg-[#285a19] text-white text-sm font-medium rounded-full hover:bg-[#4e7344] transition duration-200"}," Login ")],-1))],32),s[6]||(s[6]=N('<div class="text-xs mt-4"><a href="/page3" class="text-[#0000FF] hover:text-blue-500 transition duration-200">Forgot Password</a></div><div class="flex items-center space-x-4"><hr class="flex-grow border-t border-gray-300"><span class="text-gray-500">or</span><hr class="flex-grow border-t border-gray-300"></div><div class="mt-4 text-xs text-center"><p>Don&#39;t have an account? <a href="/signup" class="text-[#608C54] hover:underline">Sign up</a></p></div>',3))])])])])])],64))}};export{ue as default};

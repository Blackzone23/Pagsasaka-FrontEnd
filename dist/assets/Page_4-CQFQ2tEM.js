import{L as h}from"./Logo2-Dki--5bN.js";import{_ as p}from"./SignUp_Navbar-DQK9iTPn.js";import{r as m,x as g,o as d,c,p as b,v as f,b as s,t as v,m as y,a as u,u as V,F as C,g as w,d as _,h as S,i as k}from"./index-Dszylw3T.js";const B={class:"flex items-center space-x-2"},$=["id","value","disabled"],F=["for"],N={__name:"BaseCheckBox",props:{modelValue:Boolean,id:{type:String,default:()=>`checkbox-${Math.random().toString(36).substr(2,9)}`},label:String,value:[String,Number,Boolean],disabled:Boolean},emits:["update:modelValue","change"],setup(a,{emit:n}){const i=a,r=n,l=m(i.modelValue);g(()=>i.modelValue,e=>{l.value=e});function t(e){const o=e.target.checked;r("update:modelValue",o),r("change",o)}return(e,o)=>(d(),c("div",B,[b(s("input",{id:a.id,type:"checkbox",value:a.value,"onUpdate:modelValue":o[0]||(o[0]=x=>l.value=x),disabled:a.disabled,class:"w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500",onChange:t},null,40,$),[[f,l.value]]),a.label?(d(),c("label",{key:0,for:a.id,class:"text-xs font-medium text-gray-700 cursor-pointer"},v(a.label),9,F)):y("",!0)]))}},L={class:"2xl:p-10 2xs:p-0 md:p-5"},P={class:"border-2 border-gray-300 rounded-lg bg-white p-10 shadow-lg"},U={class:"bg-white min-h-screen flex flex-col items-center space-y-2"},A=["src"],D={class:"w-96 p-10 rounded-lg shadow-lg text-start space-y-6 border-2 border-[#608C54]"},M={class:"space-y-3"},Y={__name:"Page_4",setup(a){S(),k();const n=m([]),i=["Seeds and Saplings","Fruits","Vagetables","Raw materials","Processed","Flowers & Plants"];function r(l,t){t?n.value.push(l):n.value=n.value.filter(e=>e!==l)}return(l,t)=>(d(),c("div",null,[u(p),s("div",L,[s("div",P,[s("div",U,[s("img",{src:V(h),alt:"Logo2",class:"h-16 mb-2"},null,8,A),s("div",D,[t[1]||(t[1]=s("h2",{class:"text-xl font-semibold text-[#608C54]"},"Create an Account",-1)),t[2]||(t[2]=s("div",{class:"text-center flex flex-col text-xs space-y-4"},[s("h1",{class:"font-semibold text-sm"},"What product category you will sell"),s("p",null,"Selecting the correct category for your product ensures optimal placement and visibility within our platform’s algorithm")],-1)),s("div",M,[t[0]||(t[0]=s("h2",{class:"text-xs font-semibold text-[#608C54]"},"Select Categories",-1)),(d(),c(C,null,w(i,e=>u(N,{key:e,id:`category-${e}`,label:e,value:e,modelValue:n.value.includes(e),"onUpdate:modelValue":o=>r(e,o)},null,8,["id","label","value","modelValue","onUpdate:modelValue"])),64))]),t[3]||(t[3]=_('<div class="text-xs text-start"><p><span class="text-[#FF0000]">Note:</span> You may select up to three categories. Listing products outside of your chosen categories may lead to account restrictions</p></div><a href="/page5" class="w-full py-2 bg-[#608C54] text-white text-sm font-medium rounded-full hover:bg-[#4e7344] transition duration-200 text-center block"> Continue </a><div class="text-xs text-center"><p>Already have an account?<a href="/login" class="text-[#608C54] hover:underline">Sign in</a></p></div>',3))])])])])]))}};export{Y as default};
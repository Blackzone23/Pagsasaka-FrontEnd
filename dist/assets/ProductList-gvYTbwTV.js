import{B as b}from"./BaseLabel-Auf5LPAM.js";import{T as w,L as v}from"./Toast-B1bnSa4A.js";import{q as d,f as _,g as L,c as l,y as k,p as u,a as i,b as t,u as C,w as B,F as p,h as D,i as V,j as N,o as a,I as R,e as S,t as O}from"./index-BTxKm87V.js";const P={class:"bg-[#608C54] shadow p-4 flex justify-between items-center text-white"},T={class:"flex items-center space-x-4"},j={class:"flex space-x-2"},A={class:"relative"},E={key:0,class:"absolute right-0 mt-2 bg-white shadow-lg rounded p-2 w-48"},F={class:"overflow-x-auto p-10"},I={class:"min-w-full bg-white"},$={class:"px-4 py-2"},q={class:"px-4 py-2 text-center"},M=["onClick"],K={__name:"ProductList",setup(W){const o=V(),g=N(),x=d(()=>o.state.showLoading.state),f=d(()=>o.state.Rider.productList.data);function c(){o.dispatch("Rider/getDeliveryList")}async function h(s){if(s)try{(await o.dispatch("Rider/claimedProduct",{id:s})).isSuccess&&c()}catch(e){console.error("Error claiming product:",e)}}const n=_(!1);function m(){n.value=!n.value}const y=async()=>{try{(await o.dispatch("logout")).isSuccess&&g.push({name:"Login"})}catch(s){console.error("Logout error:",s)}};return L(()=>{c()}),(s,e)=>(a(),l(p,null,[x.value?(a(),k(v,{key:0,class:"loading"})):u("",!0),i(w),t("div",null,[t("header",P,[e[2]||(e[2]=t("h1",{class:"text-xl font-bold"},"Welcome to List of Orders",-1)),t("div",T,[t("div",j,[t("div",A,[i(C(R),{icon:"uil:setting",width:"24",height:"24",style:{color:"white"},onClick:m}),n.value?(a(),l("div",E,[e[1]||(e[1]=t("button",{class:"w-full text-left px-4 py-2 text-sm text-black"},"Account Info",-1)),t("button",{class:"w-full text-left px-4 py-2 text-sm text-black",onClick:e[0]||(e[0]=r=>y())},"Logout")])):u("",!0)])])])]),t("div",F,[i(b,{class:"text-xl font-semibold"},{default:B(()=>e[3]||(e[3]=[S("List of Orders to be Deliver")])),_:1}),t("table",I,[e[4]||(e[4]=t("thead",null,[t("tr",{class:"bg-gray-100"},[t("th",{class:"px-4 py-2 text-start"},"Orders"),t("th",{class:"px-4 py-2 text-end"},"Actions")])],-1)),t("tbody",null,[(a(!0),l(p,null,D(f.value,r=>(a(),l("tr",{key:r.id,class:"hover:bg-gray-50"},[t("td",$,O(r.product_name),1),t("td",q,[t("button",{onClick:z=>h(r.id),class:"text-white bg-green-600 hover:bg-green-500 px-5 rounded-lg text-sm"},"Claim",8,M)])]))),128))])])])])],64))}};export{K as default};

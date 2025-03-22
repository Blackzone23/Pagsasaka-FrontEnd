import{T as v,L as y}from"./Toast-B1bnSa4A.js";import{f as e,c,y as k,p as u,a as o,b as t,u as l,t as n,w as j,F as B,i as L,j as P,o as a,I as d,e as S}from"./index-BTxKm87V.js";import{B as A}from"./BaseLabel-Auf5LPAM.js";const C={class:"flex h-screen bg-gray-100"},N={class:"flex-1 flex flex-col"},O={class:"bg-[#608C54] shadow p-4 flex justify-between items-center text-white"},V={class:"flex items-center space-x-4"},D={class:"flex space-x-2"},F={class:"relative"},I={key:0,class:"absolute right-0 mt-2 bg-white shadow-lg rounded p-2 w-48"},T={class:"grid grid-cols-1 lg:grid-cols-2 gap-4 p-2"},M={class:"bg-white shadow-lg rounded-lg p-4"},E={class:"text-xl font-bold mt-2"},R={class:"bg-white shadow-lg rounded-lg p-4"},W={class:"text-xl font-bold mt-2"},$={class:"col-span-2 bg-white shadow-lg rounded-lg p-4 h-96 flex flex-col justify-between"},q={class:"flex justify-around"},z={class:"flex flex-col justify-center items-center text-center"},G={class:"bg-green-200 p-4 rounded-full"},H={class:"text-2xl font-bold"},J={class:"flex flex-col justify-center items-center text-center"},K={class:"bg-green-200 p-4 rounded-full"},Q={class:"text-2xl font-bold"},U={class:"flex flex-col justify-center items-center text-center"},X={class:"bg-green-200 p-4 rounded-full"},Y={class:"text-2xl font-bold"},lt={__name:"Farmer_Dashboard",setup(Z){const f=L(),x=P();e(500);const g=e(2),h=e(0),p=e(4),m=e(2),b=e(1);e(1e3),e(!1),e(!1),e(""),e(""),e([{amount:500,date:"2024-11-30"},{amount:200,date:"2024-11-28"}]);const r=e(!1),_=()=>{r.value=!r.value},w=async()=>{try{(await f.dispatch("logout")).isSuccess&&x.push({name:"Login"})}catch(i){console.error("Logout error:",i)}};return(i,s)=>(a(),c(B,null,[i.showLoading?(a(),k(y,{key:0,class:"loading"})):u("",!0),o(v),t("div",C,[t("div",N,[t("header",O,[s[2]||(s[2]=t("h1",{class:"text-xl font-bold"},"Welcome, Farmers Dashboard",-1)),t("div",V,[t("div",D,[t("div",F,[o(l(d),{icon:"uil:setting",width:"24",height:"24",style:{color:"white"},onClick:_}),r.value?(a(),c("div",I,[s[1]||(s[1]=t("button",{class:"w-full text-left px-4 py-2 text-sm text-black"},"Account Info",-1)),t("button",{class:"w-full text-left px-4 py-2 text-sm text-black",onClick:s[0]||(s[0]=tt=>w())},"Logout")])):u("",!0)])])])]),t("div",T,[t("div",M,[s[3]||(s[3]=t("h3",{class:"font-semibold text-lg"},"Open Orders",-1)),t("p",E,n(g.value),1),o(l(d),{icon:"dashicons:arrow-down",width:"32",height:"32",style:{color:"#276d22"}})]),t("div",R,[s[4]||(s[4]=t("h3",{class:"font-semibold text-lg"},"Buyers Message",-1)),t("p",W,n(h.value),1),o(l(d),{icon:"dashicons:arrow-down",width:"32",height:"32",style:{color:"#276d22"}})]),t("div",$,[o(A,{class:"text-xl font-bold"},{default:j(()=>s[5]||(s[5]=[S("Product")])),_:1}),t("div",q,[t("div",z,[t("div",G,[o(l(d),{icon:"solar:box-bold",width:"36",height:"36",style:{color:"#276d22"}})]),s[6]||(s[6]=t("p",{class:"text-lg font-semibold mt-2"},"Out of Stock Product",-1)),t("p",H,n(b.value),1)]),t("div",J,[t("div",K,[o(l(d),{icon:"solar:box-bold",width:"36",height:"36",style:{color:"#276d22"}})]),s[7]||(s[7]=t("p",{class:"text-lg font-semibold mt-2"},"All Products",-1)),t("p",Q,n(p.value),1)]),t("div",U,[t("div",X,[o(l(d),{icon:"mdi:gift",width:"36",height:"36",style:{color:"#276d22"}})]),s[8]||(s[8]=t("p",{class:"text-lg font-semibold mt-2"},"Newly Added Products",-1)),t("p",Y,n(m.value),1)])]),s[9]||(s[9]=t("div",{class:"flex justify-center mt-4"},[t("a",{href:"/product",class:"px-4 py-2 rounded-lg text-sky-700 text-sm hover:text-sky-200"}," Add Stock ")],-1))])])])])],64))}};export{lt as default};

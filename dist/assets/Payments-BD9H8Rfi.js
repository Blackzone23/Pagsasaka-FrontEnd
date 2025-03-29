import{T as I,L as V}from"./Toast-DjabdXza.js";import{_ as T}from"./BaseSearchField-DIig70KP.js";import{A as u,f as p,c as i,M as S,J as x,a as s,b as t,u as a,e as d,F as g,h as F,i as M,j as P,o as l,K as r,t as c}from"./index-CdF1xhyq.js";const q={class:"w-full"},B={class:"bg-[#608C54] shadow p-4 flex justify-between items-center text-white"},D={class:"flex items-center space-x-4"},G={class:"relative"},N={key:0,class:"absolute right-0 mt-2 bg-white shadow-lg rounded p-2 w-48"},A={class:"container mx-auto p-4"},E={class:"flex flex-wrap items-center gap-4 mb-4"},j={class:"mb-3 space-y-3"},R={class:"overflow-x-auto"},$={class:"w-full border-collapse border border-gray-300 rounded-md min-w-[600px]"},J={class:"bg-gray-300 text-xs sm:text-sm md:text-md"},K={class:"px-3 sm:px-4 py-2 text-left border-b border-gray-300"},z={class:"px-3 sm:px-4 py-2 text-left border-b border-gray-300"},H={class:"px-3 sm:px-4 py-2 text-left border-b border-gray-300"},O={class:"px-3 sm:px-4 py-2 text-left border-b border-gray-300"},Q={class:"px-3 sm:px-4 py-2"},U={class:"px-3 sm:px-4 py-2"},W={class:"px-3 sm:px-4 py-2"},X={class:"text-blue-500"},Y={class:"px-3 sm:px-4 py-2"},ot={__name:"Payments",setup(Z){const h=M(),b=P(),y=u(()=>h.state.showLoading.state),f=p([{date:"10/19/2024",invoiceId:"T00000000001",paymentMethod:"GCash",gcashLastFour:"2212",amount:"124.00"},{date:"10/19/2024",invoiceId:"T00000000001",paymentMethod:"GCash",gcashLastFour:"2212",amount:"124.00"},{date:"10/19/2024",invoiceId:"T00000000001",paymentMethod:"GCash",gcashLastFour:"2212",amount:"124.00"}]),w=p(""),_=u(()=>f.value.filter(n=>n.invoiceId.includes(w.value))),v=()=>{window.location.reload()},k=()=>{console.log("Exporting CSV...")},m=p(!1),C=()=>{m.value=!m.value},L=async()=>{try{(await h.dispatch("logout")).isSuccess&&b.push({name:"Login"})}catch(n){console.error("Logout error:",n)}};return(n,e)=>(l(),i(g,null,[y.value?(l(),S(V,{key:0,class:"loading"})):x("",!0),s(I),t("div",q,[t("header",B,[e[2]||(e[2]=t("h1",{class:"text-lg sm:text-xl 2xl:ml-0 md:ml-10 2xs:ml-10 font-bold"},"Payment Transaction",-1)),t("div",D,[t("div",G,[s(a(r),{icon:"uil:setting",width:"24",height:"24",style:{color:"white"},onClick:C}),m.value?(l(),i("div",N,[e[1]||(e[1]=t("a",{href:"/seller-profile",class:"block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100"}," Account Info ",-1)),t("button",{class:"block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100",onClick:e[0]||(e[0]=o=>L())}," Logout")])):x("",!0)])])]),t("div",A,[t("div",E,[t("button",{onClick:v,class:"bg-[#608C54] py-2 px-4 sm:px-6 text-white rounded-md flex items-center gap-1 hover:bg-gray-700 transition"},[s(a(r),{icon:"material-symbols-light:refresh",width:"20",height:"20"}),e[3]||(e[3]=t("span",{class:"hidden sm:inline"},"Refresh",-1))]),t("button",{onClick:k,class:"bg-gray-300 py-2 px-4 rounded-md text-sm sm:text-base hover:bg-gray-400 transition"}," Export to CSV ")]),t("div",j,[s(T,{placeholder:"Search Payment",class:"w-full md:w-1/2"}),e[4]||(e[4]=t("p",{class:"text-xs sm:text-sm md:text-base"},"View the payment history here. It might take some time for payments to appear in the portal.",-1))]),t("div",R,[t("table",$,[t("thead",null,[t("tr",J,[t("th",K,[e[5]||(e[5]=d(" Date ")),s(a(r),{icon:"marketeq:up-down-arrow",width:"16",height:"16"})]),t("th",z,[e[6]||(e[6]=d(" Invoice ID ")),s(a(r),{icon:"marketeq:up-down-arrow",width:"16",height:"16"})]),t("th",H,[e[7]||(e[7]=d(" Payment Method ")),s(a(r),{icon:"marketeq:up-down-arrow",width:"16",height:"16"})]),t("th",O,[e[8]||(e[8]=d("Amount ")),s(a(r),{icon:"marketeq:up-down-arrow",width:"16",height:"16"})])])]),t("tbody",null,[(l(!0),i(g,null,F(_.value,o=>(l(),i("tr",{key:o.invoiceId,class:"border-b border-gray-200 hover:bg-gray-200 text-xs sm:text-sm"},[t("td",Q,c(o.date),1),t("td",U,c(o.invoiceId),1),t("td",W,[t("span",X,"GCash ****"+c(o.gcashLastFour),1)]),t("td",Y,"₱"+c(o.amount),1)]))),128))])])])])])],64))}};export{ot as default};

import{T as V,L as T}from"./Toast-CON0Qnhu.js";import{_ as S}from"./BaseSearchField-PkV1gQds.js";import{A as h,f as u,c as i,E as F,l as x,a as o,b as t,u as a,e as d,F as g,h as P,i as D,j as q,o as l,J as r,t as c}from"./index-DITtJx53.js";/* empty css                                                              */const B={class:"h-screen w-full"},E={class:"bg-[#285a19] shadow p-4 flex justify-between items-center text-white"},G={class:"flex items-center space-x-4"},M={class:"relative inline-block text-left"},N={class:"flex items-center space-x-2"},j=["src"],A={key:0,class:"absolute right-0 z-50 mt-2 w-48 bg-white rounded shadow-lg"},R={class:"container mx-auto p-4"},z={class:"flex flex-wrap items-center gap-4 mb-4"},J={class:"mb-3 space-y-3"},$={class:"overflow-x-auto"},H={class:"w-full border-collapse border border-gray-300 rounded-md min-w-[600px]"},K={class:"bg-gray-300 text-xs sm:text-sm md:text-md"},O={class:"px-3 sm:px-4 py-2 text-left border-b border-gray-300"},Q={class:"px-3 sm:px-4 py-2 text-left border-b border-gray-300"},U={class:"px-3 sm:px-4 py-2 text-left border-b border-gray-300"},W={class:"px-3 sm:px-4 py-2 text-left border-b border-gray-300"},X={class:"px-3 sm:px-4 py-2"},Y={class:"px-3 sm:px-4 py-2"},Z={class:"px-3 sm:px-4 py-2"},tt={class:"text-blue-500"},et={class:"px-3 sm:px-4 py-2"},lt={__name:"Payments",setup(st){const m=D(),b=q(),y=h(()=>m.state.showLoading.state),f=h(()=>{var s;return((s=m.state.userData.data)==null?void 0:s.user)||{}}),w=u([{date:"10/19/2024",invoiceId:"T00000000001",paymentMethod:"GCash",gcashLastFour:"2212",amount:"124.00"},{date:"10/19/2024",invoiceId:"T00000000001",paymentMethod:"GCash",gcashLastFour:"2212",amount:"124.00"},{date:"10/19/2024",invoiceId:"T00000000001",paymentMethod:"GCash",gcashLastFour:"2212",amount:"124.00"}]),_=u(""),v=h(()=>w.value.filter(s=>s.invoiceId.includes(_.value))),k=()=>{window.location.reload()},C=()=>{console.log("Exporting CSV...")},p=u(!1),L=()=>{p.value=!p.value},I=async()=>{try{(await m.dispatch("logout")).isSuccess&&b.push({name:"Login"})}catch(s){console.error("Logout error:",s)}};return(s,e)=>(l(),i(g,null,[y.value?(l(),F(T,{key:0,class:"loading"})):x("",!0),o(V),t("div",B,[t("header",E,[e[1]||(e[1]=t("h1",{class:"text-lg sm:text-xl 2xl:ml-0 md:ml-10 2xs:ml-10 font-bold"},"Payment Transaction",-1)),t("div",G,[t("div",M,[t("div",N,[t("img",{src:f.value.avatar,alt:"Profile",class:"w-10 h-10 rounded-full object-cover shadow-md"},null,8,j),o(a(r),{icon:"uil:setting",width:"24",height:"24",class:"cursor-pointer text-white",onClick:L})]),p.value?(l(),i("div",A,[e[0]||(e[0]=t("a",{href:"/seller-profile",class:"block px-4 py-2 text-sm text-black hover:bg-gray-100"}," Account Info ",-1)),t("button",{onClick:I,class:"block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100"}," Logout ")])):x("",!0)])])]),t("div",R,[t("div",z,[t("button",{onClick:k,class:"bg-[#608C54] py-2 px-4 sm:px-6 text-white rounded-md flex items-center gap-1 hover:bg-gray-700 transition"},[o(a(r),{icon:"material-symbols-light:refresh",width:"20",height:"20"}),e[2]||(e[2]=t("span",{class:"hidden sm:inline"},"Refresh",-1))]),t("button",{onClick:C,class:"bg-gray-300 py-2 px-4 rounded-md text-sm sm:text-base hover:bg-gray-400 transition"}," Export to CSV ")]),t("div",J,[o(S,{placeholder:"Search Payment",class:"w-full md:w-1/2"}),e[3]||(e[3]=t("p",{class:"text-xs sm:text-sm md:text-base"},"View the payment history here. It might take some time for payments to appear in the portal.",-1))]),t("div",$,[t("table",H,[t("thead",null,[t("tr",K,[t("th",O,[e[4]||(e[4]=d(" Date ")),o(a(r),{icon:"marketeq:up-down-arrow",width:"16",height:"16"})]),t("th",Q,[e[5]||(e[5]=d(" Invoice ID ")),o(a(r),{icon:"marketeq:up-down-arrow",width:"16",height:"16"})]),t("th",U,[e[6]||(e[6]=d(" Payment Method ")),o(a(r),{icon:"marketeq:up-down-arrow",width:"16",height:"16"})]),t("th",W,[e[7]||(e[7]=d("Amount ")),o(a(r),{icon:"marketeq:up-down-arrow",width:"16",height:"16"})])])]),t("tbody",null,[(l(!0),i(g,null,P(v.value,n=>(l(),i("tr",{key:n.invoiceId,class:"border-b border-gray-200 hover:bg-gray-200 text-xs sm:text-sm"},[t("td",X,c(n.date),1),t("td",Y,c(n.invoiceId),1),t("td",Z,[t("span",tt,"GCash ****"+c(n.gcashLastFour),1)]),t("td",et,"₱"+c(n.amount),1)]))),128))])])])])])],64))}};export{lt as default};

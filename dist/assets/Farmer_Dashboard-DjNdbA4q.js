import{r as o,c as i,b as t,a as s,u as d,m as p,t as l,n as E,w as u,F as $,g as z,h as H,i as T,o as r,I as n,e as x}from"./index-Cp1gMUic.js";import{B as g}from"./BaseLabel-OpQYIxLX.js";import{_ as w}from"./BaseInputField-DNkNney0.js";const U={class:"flex h-screen bg-gray-100"},G={class:"flex-1 flex flex-col"},R={class:"bg-[#608C54] shadow p-4 flex justify-between items-center text-white"},Y={class:"flex items-center space-x-4"},q={class:"flex space-x-2"},J={class:"relative"},K={key:0,class:"absolute right-0 mt-2 bg-white shadow-lg rounded p-2 w-48"},Q={class:"grid grid-cols-2 lg:grid-cols-4 gap-4 p-4"},X={class:"bg-white shadow-lg rounded-lg p-4"},Z={class:"text-xl font-bold mt-2"},tt={class:"bg-white shadow-lg rounded-lg p-4"},et={class:"text-xl font-bold mt-2"},st={class:"bg-white shadow-lg rounded-lg p-4"},ot={class:"text-xl font-bold mt-2"},lt={class:"bg-white shadow-lg rounded-lg p-4"},dt={class:"text-xl font-bold mt-2"},nt={key:0,class:"fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 transition-all duration-500"},at={class:"bg-white rounded-lg p-5 w-1/3"},it={class:"text-end"},rt={key:0},ct={class:"mt-6 overflow-y-auto max-h-60"},ut={class:"list-none p-0"},xt={class:"col-span-2 bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-6"},gt={class:"flex items-center justify-center text-center space-x-16"},ft={class:"flex flex-col items-center text-center"},ht={class:"bg-green-200 p-4 rounded-full"},mt={class:"text-2xl font-bold"},pt={class:"flex flex-col items-center text-center"},bt={class:"bg-green-200 p-4 rounded-full"},wt={class:"text-2xl font-bold"},vt={class:"col-span-2 bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-4"},yt={class:"flex flex-col justify-center items-center text-center flex-grow"},_t={class:"bg-green-200 p-4 rounded-full"},kt={class:"text-2xl font-bold"},St={__name:"Farmer_Dashboard",setup(Ct){const v=H(),y=T(),_=o(500),k=o(2),C=o(0),P=o(4),V=o(2),N=o(1),S=o(1e3),c=o(!1),F=o(!1),f=o(""),b=o(""),W=o([{amount:500,date:"2024-11-30"},{amount:200,date:"2024-11-28"}]),A=()=>{c.value=!c.value},B=()=>{c.value=!1},D=()=>{},j=()=>{},I=()=>{alert(`Confirmed withdrawal of ₱ ${f.value}`)},h=o(!1),L=()=>{h.value=!h.value},M=async()=>{try{(await v.dispatch("logout")).isSuccess&&y.push({name:"Login"})}catch(m){console.error("Logout error:",m)}};return(m,e)=>(r(),i("div",U,[t("div",G,[t("header",R,[e[4]||(e[4]=t("h1",{class:"text-xl font-bold"},"Welcome, Farmers Dashboard",-1)),t("div",Y,[t("div",q,[t("div",J,[s(d(n),{icon:"uil:setting",width:"24",height:"24",style:{color:"white"},onClick:L}),h.value?(r(),i("div",K,[e[3]||(e[3]=t("button",{class:"w-full text-left px-4 py-2 text-sm text-black"},"Account Info",-1)),t("button",{class:"w-full text-left px-4 py-2 text-sm text-black",onClick:e[0]||(e[0]=a=>M())},"Logout")])):p("",!0)])])])]),t("div",Q,[t("div",X,[e[5]||(e[5]=t("h3",{class:"font-semibold text-lg"},"Total Sales",-1)),t("p",Z,"₱ "+l(_.value.toFixed(2)),1)]),t("div",tt,[e[6]||(e[6]=t("h3",{class:"font-semibold text-lg"},"Open Orders",-1)),t("p",et,l(k.value),1),s(d(n),{icon:"dashicons:arrow-down",width:"32",height:"32",style:{color:"#276d22"}})]),t("div",st,[e[7]||(e[7]=t("h3",{class:"font-semibold text-lg"},"Buyers Message",-1)),t("p",ot,l(C.value),1),s(d(n),{icon:"dashicons:arrow-down",width:"32",height:"32",style:{color:"#276d22"}})]),t("div",lt,[e[12]||(e[12]=t("h1",{class:"font-semibold text-lg"},"Your Balance",-1)),t("p",dt,"₱ "+l(S.value.toFixed(2)),1),t("button",{onClick:A,class:"focus:outline-none"},[s(d(n),{icon:"dashicons:arrow-down",width:"32",height:"32",style:E({color:"#276d22",transform:c.value?"rotate(180deg)":"rotate(0deg)"})},null,8,["style"])]),c.value?(r(),i("div",nt,[t("div",at,[t("div",it,[t("button",{class:"text-gray-500 hover:text-gray-700",onClick:B},[s(d(n),{icon:"fontisto:close",width:"1.2rem",height:"1.2rem",style:{color:"#5D5F5D"}})])]),F.value?p("",!0):(r(),i("div",rt,[s(g,{class:"font-semibold text-xl"},{default:u(()=>e[8]||(e[8]=[x("Withdrawal")])),_:1}),e[10]||(e[10]=t("p",{class:"text-gray-600 text-sm"},"Enter the amount you'd like to withdraw:",-1)),s(w,{modelValue:f.value,"onUpdate:modelValue":e[1]||(e[1]=a=>f.value=a),class:"border rounded-lg p-2 w-full mt-2",placeholder:"₱ Enter amount",onInput:D},null,8,["modelValue"]),s(g,{class:"font-semibold text-xl mt-4"},{default:u(()=>e[9]||(e[9]=[x("Gcash Number")])),_:1}),s(w,{modelValue:b.value,"onUpdate:modelValue":e[2]||(e[2]=a=>b.value=a),class:"border rounded-lg p-2 w-full mt-2",placeholder:"Enter phone number",onInput:j},null,8,["modelValue"]),t("div",{class:"mt-4 flex justify-end"},[t("button",{onClick:I,class:"bg-[#608C54] text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-300 transition"}," Confirm Withdrawal ")])])),s(g,{class:"font-semibold text-lg"},{default:u(()=>e[11]||(e[11]=[x("Withdrawal History")])),_:1}),t("div",ct,[t("ul",ut,[(r(!0),i($,null,z(W.value,(a,O)=>(r(),i("li",{key:O,class:"border-b py-2 text-sm"},[t("p",null,"₱ "+l(a.amount.toFixed(2))+" - "+l(a.date),1)]))),128))])])])])):p("",!0)]),t("div",xt,[s(g,{class:"text-lg font-bold"},{default:u(()=>e[13]||(e[13]=[x("Product")])),_:1}),t("div",gt,[t("div",ft,[t("div",ht,[s(d(n),{icon:"solar:box-bold",width:"36",height:"36",style:{color:"#276d22"}})]),e[14]||(e[14]=t("p",{class:"text-lg font-semibold mt-2"},"All Products",-1)),t("p",mt,l(P.value),1)]),t("div",pt,[t("div",bt,[s(d(n),{icon:"mdi:gift",width:"36",height:"36",style:{color:"#276d22"}})]),e[15]||(e[15]=t("p",{class:"text-lg font-semibold mt-2"},"Newly Added Products",-1)),t("p",wt,l(V.value),1)])]),e[16]||(e[16]=t("a",{href:"/product",class:"text-end px-4 py-2 rounded-lg text-sky-700 text-sm hover:text-sky-200"}," Add New Product ",-1))]),t("div",vt,[s(g,{class:"text-lg font-bold"},{default:u(()=>e[17]||(e[17]=[x("Product")])),_:1}),t("div",yt,[t("div",_t,[s(d(n),{icon:"solar:box-bold",width:"36",height:"36",style:{color:"#276d22"}})]),e[18]||(e[18]=t("p",{class:"text-lg font-semibold mt-2"},"Out of Stock Product",-1)),t("p",kt,l(N.value),1)]),e[19]||(e[19]=t("a",{href:"/product",class:"text-end px-4 py-2 rounded-lg text-sky-700 text-sm hover:text-sky-200"}," Add Stock ",-1))])])])]))}};export{St as default};

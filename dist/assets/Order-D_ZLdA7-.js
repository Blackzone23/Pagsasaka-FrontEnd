import{B as r}from"./BaseLabel-DGUwW8bf.js";import{_}from"./BaseCheckBox-CWvlQHAR.js";import{f as c,c as a,b as t,a as o,u as k,J as m,F as g,h,w as i,d as M,i as P,j as V,o as n,K as T,k as z,t as l,e as u}from"./index-CdF1xhyq.js";const $={class:"bg-[#608C54] shadow p-4 flex justify-between items-center text-white"},E={class:"flex items-center space-x-4"},F={class:"flex space-x-2"},Y={class:"relative"},q={key:0,class:"absolute right-0 mt-2 bg-white shadow-lg rounded p-2 w-48"},J={class:"mt-4"},K={class:"flex justify-center border-b border-gray-200"},Q=["onClick"],R={class:"mt-4 p-4"},G={key:0},H={class:"mt-5"},W={class:"hidden lg:flex items-center justify-center py-2 space-x-2 border-2 border-gray-300 rounded-md pb-5 text-xs sm:text-sm md:text-base"},X={class:"flex items-center space-x-2 w-1/6 pl-3"},Z={class:"mt-5 overflow-y-auto max-h-64"},tt={class:"flex items-center w-full sm:w-1/6"},et={class:"ml-3 text-sm"},st={class:"text-sm w-full sm:w-1/6"},lt={class:"w-full sm:w-1/6 flex justify-center"},ot=["src"],at={class:"text-sm w-full sm:w-1/6"},nt={class:"text-xs w-full sm:w-1/6"},dt={class:"text-xs flex flex-col space-y-2 w-full sm:w-1/6"},rt={key:0,class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},it={class:"bg-white rounded-lg p-6 w-96 shadow-lg"},ut={class:"flex justify-end space-x-4"},ct={key:1,class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},mt={class:"bg-white rounded-lg p-6 w-96 shadow-lg"},pt={class:"flex justify-end space-x-4"},xt={key:1},ft={class:"overflow-x-auto mt-5"},bt={class:"min-w-full table-auto border-collapse"},yt={class:"px-4 py-2 text-sm"},gt={class:"px-4 py-2 text-sm"},ht={class:"px-4 py-2 text-sm"},vt={class:"px-4 py-2 text-sm"},St={__name:"Order",setup(wt){const S=P(),N=V(),v=["Unshipped","Cancelled"],p=c(v[0]),x=c(!1);function D(){x.value=!x.value}const B=c([{daysAgo:2,orderDate:"10/28/2024",time:"11:04 am UTC",orderId:"123-123-123123",buyerName:"Norman Cruz",address:"Los Angeles blk 14 lot 3 Longos, Malolos City, Bulacan, North Luzon, 3000",phone:"09123123123",itemSubtotal:"800.00",shipByDate:"Nov 3 2024 to Nov 5 2024",deliverByDate:"Nov 12 2024 to Nov 15 2024",carrier:"Standard (Light Parcel) LBC"}]);c({orderId:"",shipByDate:"",deliverByDate:"",orderDate:"",time:"",carrier:"",buyerName:"",address:"",phone:"",itemSubtotal:0});const w=[{id:1,name:"Shipment A",created:"2024-12-01",lastUpdate:"2024-12-02",unitStatus:"Cancelled"},{id:2,name:"Shipment B",created:"2024-12-03",lastUpdate:"2024-12-04",unitStatus:"Cancelled"},{id:3,name:"Shipment C",created:"2024-12-05",lastUpdate:"2024-12-06",unitStatus:"Cancelled"},{id:4,name:"Shipment D",created:"2024-12-07",lastUpdate:"2024-12-08",unitStatus:"Cancelled"},{id:5,name:"Shipment E",created:"2024-12-09",lastUpdate:"2024-12-10",unitStatus:"Cancelled"}],j=w.filter(d=>d.unitStatus==="Cancelled").length,f=c(!1),L=()=>{f.value=!0};function U(){f.value=!1}const b=c(!1),A=()=>{b.value=!0};function I(){b.value=!1}const O=async()=>{try{(await S.dispatch("logout")).isSuccess&&N.push({name:"Login"})}catch(d){console.error("Logout error:",d)}};return(d,e)=>(n(),a("div",null,[t("header",$,[e[4]||(e[4]=t("h1",{class:"text-lg sm:text-xl 2xl:ml-0 md:ml-10 2xs:ml-10 font-bold"},"Order Transaction",-1)),t("div",E,[t("div",F,[t("div",Y,[o(k(T),{icon:"uil:setting",width:"24",height:"24",style:{color:"white"},onClick:D}),x.value?(n(),a("div",q,[e[3]||(e[3]=t("a",{href:"/seller-profile",class:"block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100"}," Account Info ",-1)),t("button",{class:"block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100",onClick:e[0]||(e[0]=s=>O())}," Logout")])):m("",!0)])])])]),t("div",J,[t("div",K,[(n(),a(g,null,h(v,s=>t("button",{key:s,class:z(["px-4 py-2 focus:outline-none",p.value===s?"border-b-2 border-[#608C54] text-[#608C54]":"text-gray-600"]),onClick:C=>p.value=s},l(s),11,Q)),64))]),t("div",R,[p.value==="Unshipped"?(n(),a("div",G,[o(r,{class:"text-xl font-bold"},{default:i(()=>e[5]||(e[5]=[u("Order:")])),_:1}),e[19]||(e[19]=M('<div class="flex flex-col md:flex-row items-center md:justify-between space-y-2 md:space-y-0 border-2 border-gray-300 rounded-md p-4 text-sm"><h1 class="text-center md:text-left">Action on Selected</h1><div class="flex flex-wrap justify-center md:justify-end space-x-2 2xs:gap-2"><button class="border-2 border-gray-300 py-2 px-4 hover:bg-gray-200 rounded-full"> Print Packing Slip(s) </button><button class="border-2 border-gray-300 py-2 px-4 hover:bg-gray-200 rounded-full"> Confirm Shipment(s) </button></div></div>',1)),t("div",H,[t("div",W,[t("div",X,[o(_,{class:"mt-2"}),o(r,{class:"text-black"},{default:i(()=>e[6]||(e[6]=[u("Order Date")])),_:1})]),o(r,{class:"text-black w-1/6"},{default:i(()=>e[7]||(e[7]=[u("Order Details")])),_:1}),o(r,{class:"text-black w-1/6"},{default:i(()=>e[8]||(e[8]=[u("Image")])),_:1}),o(r,{class:"text-black w-1/6"},{default:i(()=>e[9]||(e[9]=[u("Product Name")])),_:1}),o(r,{class:"text-black w-1/6"},{default:i(()=>e[10]||(e[10]=[u("Customer Option")])),_:1}),o(r,{class:"text-black w-1/6"},{default:i(()=>e[11]||(e[11]=[u("Action")])),_:1})]),t("div",Z,[(n(!0),a(g,null,h(B.value,(s,C)=>(n(),a("div",{key:C,class:"border-2 border-gray-300 mt-5 p-4 flex flex-col sm:flex-row items-center sm:space-x-5 space-y-4 sm:space-y-0"},[t("div",tt,[o(_),t("div",et,[t("p",null,l(s.daysAgo)+" Days ago",1),t("p",null,l(s.orderDate),1),t("p",null,l(s.time),1)])]),t("div",st,[e[12]||(e[12]=t("h1",{class:"font-bold"},"Order ID:",-1)),t("p",null,l(s.orderId),1),e[13]||(e[13]=t("h1",{class:"font-bold"},"Buyer Name:",-1)),t("p",null,l(s.buyerName),1)]),t("div",lt,[t("img",{src:s.image,alt:"Order Image",class:"w-[80px] h-[50px] sm:w-[100px] sm:h-[50px]"},null,8,ot)]),t("div",at,[t("p",null,l(s.productName),1),t("p",null,"Quantity: "+l(s.quantity),1),t("p",null,"Item Subtotal: ₱"+l(s.itemSubtotal),1)]),t("div",nt,[t("p",null,"Ship by: "+l(s.shipByDate),1),t("p",null,"Deliver by: "+l(s.deliverByDate),1),t("p",null,"Carrier: "+l(s.carrier),1)]),t("div",dt,[t("button",{onClick:L,class:"bg-[#608C54] py-2 px-4 text-white rounded-md w-full"}," Confirm Shipment "),f.value?(n(),a("div",rt,[t("div",it,[e[14]||(e[14]=t("h2",{class:"text-lg font-semibold mb-4"},"Confirm Shipment",-1)),e[15]||(e[15]=t("p",{class:"text-gray-700 mb-6"},"Are you sure you want to confirm this shipment?",-1)),t("div",ut,[t("button",{onClick:e[1]||(e[1]=(...y)=>d.confirmShipment&&d.confirmShipment(...y)),class:"bg-[#608C54] text-white px-4 py-2 rounded-md"},"Yes"),t("button",{onClick:U,class:"bg-gray-300 text-gray-700 px-4 py-2 rounded-md"},"Cancel")])])])):m("",!0),e[18]||(e[18]=t("button",{class:"py-2 px-4 rounded-md border-2 border-gray-300 w-full"}," Print Packing Slip ",-1)),t("button",{onClick:A,class:"bg-red-500 py-2 px-4 rounded-md w-full"}," Cancel Order "),b.value?(n(),a("div",ct,[t("div",mt,[e[16]||(e[16]=t("h2",{class:"text-lg font-semibold mb-4"},"Cancel Shipment",-1)),e[17]||(e[17]=t("p",{class:"text-gray-700 mb-6"},"Are you sure you want to cancel this shipment?",-1)),t("div",pt,[t("button",{onClick:e[2]||(e[2]=(...y)=>d.cancelShipment&&d.cancelShipment(...y)),class:"bg-red-900 text-white px-4 py-2 rounded-md"},"Yes"),t("button",{onClick:I,class:"bg-gray-300 text-gray-700 px-4 py-2 rounded-md"},"Cancel")])])])):m("",!0)])]))),128))])])])):m("",!0),p.value==="Cancelled"?(n(),a("div",xt,[o(r,{class:"text-lg font-bold"},{default:i(()=>[u(l(k(j))+" Cancelled",1)]),_:1}),e[21]||(e[21]=t("p",null,"The lists here are set to be automatically deleted after 30 days.",-1)),t("div",ft,[t("table",bt,[e[20]||(e[20]=t("thead",{class:"bg-gray-200"},[t("tr",null,[t("th",{class:"px-4 py-2 text-left text-sm font-semibold text-gray-700"},"Shipment Name"),t("th",{class:"px-4 py-2 text-left text-sm font-semibold text-gray-700"},"Created"),t("th",{class:"px-4 py-2 text-left text-sm font-semibold text-gray-700"},"Last Update"),t("th",{class:"px-4 py-2 text-left text-sm font-semibold text-gray-700"},"Unit Status")])],-1)),t("tbody",null,[(n(),a(g,null,h(w,s=>t("tr",{key:s.id,class:"border-t hover:bg-gray-100"},[t("td",yt,l(s.name),1),t("td",gt,l(s.created),1),t("td",ht,l(s.lastUpdate),1),t("td",vt,l(s.unitStatus),1)])),64))])])])])):m("",!0)])])]))}};export{St as default};

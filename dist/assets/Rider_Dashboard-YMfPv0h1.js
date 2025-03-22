import{f as a,g as _,c as l,b as t,a as v,u as w,p as y,e as r,t as o,F as c,h as p,i as k,j as D,o as n,I as C}from"./index-BTxKm87V.js";const I={class:"bg-[#608C54] shadow p-4 flex justify-between items-center text-white"},O={class:"flex items-center space-x-4"},S={class:"flex space-x-2"},V={class:"relative"},B={key:0,class:"absolute right-0 mt-2 bg-white shadow-lg rounded p-2 w-48"},L={class:"flex h-96 bg-gray-100"},N={class:"flex-1 p-6"},R={class:"grid grid-cols-1 md:grid-cols-3 gap-4"},T={class:"bg-white p-4 shadow rounded-lg"},F={class:"font-bold"},j={class:"font-bold"},A={class:"font-bold"},E={class:"bg-white p-4 shadow rounded-lg"},J={class:"text-blue-500"},M={class:"mt-6 bg-white p-4 shadow rounded-lg"},P={class:"w-full border-collapse border border-gray-300"},W={class:"border p-2"},U={class:"border p-2"},$={class:"border p-2 text-green-500"},G={__name:"Rider_Dashboard",setup(q){const g=k(),h=D(),d=a(!1);function b(){d.value=!d.value}a({name:"John Doe",status:"Online",profileImage:"https://via.placeholder.com/100"});const i=a({today:"",week:"",month:""}),m=a([{id:1234,status:"Pending"},{id:1235,status:"Pending"}]),f=a([{id:1220,customer:"Alice Smith",status:"Delivered"},{id:1219,customer:"Bob Johnson",status:"Delivered"}]);_(()=>{console.log("Fetching data...")});const x=async()=>{try{(await g.dispatch("logout")).isSuccess&&h.push({name:"Login"})}catch(u){console.error("Logout error:",u)}};return(u,s)=>(n(),l("div",null,[t("header",I,[s[2]||(s[2]=t("h1",{class:"text-xl font-bold"},"Welcome to Rider Dashboard",-1)),t("div",O,[t("div",S,[t("div",V,[v(w(C),{icon:"uil:setting",width:"24",height:"24",style:{color:"white"},onClick:b}),d.value?(n(),l("div",B,[s[1]||(s[1]=t("button",{class:"w-full text-left px-4 py-2 text-sm text-black"},"Account Info",-1)),t("button",{class:"w-full text-left px-4 py-2 text-sm text-black",onClick:s[0]||(s[0]=e=>x())},"Logout")])):y("",!0)])])])]),t("div",L,[t("main",N,[t("div",R,[t("div",T,[s[6]||(s[6]=t("h3",{class:"text-lg font-semibold mb-2"},"Earnings",-1)),t("p",null,[s[3]||(s[3]=r("Today: ")),t("span",F,o(i.value.today),1)]),t("p",null,[s[4]||(s[4]=r("This Week: ")),t("span",j,o(i.value.week),1)]),t("p",null,[s[5]||(s[5]=r("This Month: ")),t("span",A,o(i.value.month),1)])]),t("div",E,[s[7]||(s[7]=t("h3",{class:"text-lg font-semibold mb-2"},"Upcoming Orders",-1)),t("ul",null,[(n(!0),l(c,null,p(m.value,e=>(n(),l("li",{key:e.id,class:"mb-1"},[r(" Order #"+o(e.id)+" - ",1),t("span",J,o(e.status),1)]))),128))])])]),t("div",M,[s[9]||(s[9]=t("h3",{class:"text-lg font-semibold mb-4"},"Recent Deliveries",-1)),t("table",P,[s[8]||(s[8]=t("thead",null,[t("tr",{class:"bg-gray-200"},[t("th",{class:"border text-start p-2"},"Order ID"),t("th",{class:"border text-start p-2"},"Customer"),t("th",{class:"border text-start p-2"},"Status")])],-1)),t("tbody",null,[(n(!0),l(c,null,p(f.value,e=>(n(),l("tr",{key:e.id},[t("td",W,"#"+o(e.id),1),t("td",U,o(e.customer),1),t("td",$,o(e.status),1)]))),128))])])])])])]))}};export{G as default};

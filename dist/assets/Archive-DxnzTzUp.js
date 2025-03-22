import{f as n,c as o,b as t,a as u,u as p,p as i,F as v,h as f,o as r,I as b,t as l}from"./index-BTxKm87V.js";const m={class:"bg-[#608C54] shadow p-4 flex justify-between items-center text-white"},_={class:"flex items-center space-x-4"},w={class:"flex space-x-2"},A={class:"relative"},C={key:0,class:"absolute right-0 mt-2 bg-white shadow-lg rounded p-2 w-48"},k={key:0,class:"flex justify-center items-center h-96"},P={class:"bg-white p-6 rounded-lg shadow-lg w-96 flex flex-col justify-center items-center border-2 border-gray-300"},B={class:"bg-[#608C54] px-[165px] py-6"},V={class:"mt-4 text-sm text-center space-y-5"},L={key:1,class:"mt-10"},N={class:"p-5"},j={class:"w-full bg-white shadow-lg rounded-lg border-2 border-gray-300"},I={class:"w-full table-auto mt-4"},S={class:"px-4 py-2 border-b"},D={class:"px-4 py-2 border-b"},F={class:"px-4 py-2 border-b"},$={class:"px-4 py-2 border-b"},z={__name:"Archive",setup(E){const d=n(!1),h=n([{name:"Product 1",category:"Category A",dateArchived:"2024-11-01"},{name:"Product 2",category:"Category B",dateArchived:"2024-11-05"},{name:"Product 3",category:"Category C",dateArchived:"2024-11-10"},{name:"Product 4",category:"Category A",dateArchived:"2024-11-12"},{name:"Product 5",category:"Category B",dateArchived:"2024-11-15"}]),a=n(!1),x=()=>{a.value=!a.value},y=async()=>{try{(await store.dispatch("logout")).isSuccess&&router.push({name:"Login"})}catch(c){console.error("Logout error:",c)}};return(c,e)=>(r(),o("div",null,[t("header",m,[e[3]||(e[3]=t("h1",{class:"text-xl font-bold"},"Archive",-1)),t("div",_,[t("div",w,[t("div",A,[u(p(b),{icon:"uil:setting",width:"24",height:"24",style:{color:"white"},onClick:x}),a.value?(r(),o("div",C,[e[2]||(e[2]=t("button",{class:"w-full text-left px-4 py-2 text-sm text-black"},"Account Info",-1)),t("button",{class:"w-full text-left px-4 py-2 text-sm text-black",onClick:e[0]||(e[0]=s=>y())},"Logout")])):i("",!0)])])])]),t("div",null,[d.value?i("",!0):(r(),o("div",k,[t("div",P,[t("div",B,[u(p(b),{icon:"bx:archive-in",width:"52",height:"52",style:{color:"#fff"}})]),t("div",V,[e[4]||(e[4]=t("h1",{class:"text-2xl font-bold"},"Products",-1)),e[5]||(e[5]=t("p",null,"118 Archive",-1)),t("button",{onClick:e[1]||(e[1]=s=>d.value=!0),class:"text-blue-500 hover:underline"},"View all")])])])),d.value?(r(),o("div",L,[t("div",N,[t("div",j,[e[8]||(e[8]=t("h2",{class:"text-2xl font-bold text-center mt-4"},"Archived Products",-1)),t("table",I,[e[7]||(e[7]=t("thead",null,[t("tr",{class:"bg-gray-200"},[t("th",{class:"px-4 py-2 border-b"},"Product Name"),t("th",{class:"px-4 py-2 border-b"},"Created at"),t("th",{class:"px-4 py-2 border-b"},"Status"),t("th",{class:"px-4 py-2 border-b"},"Amount"),t("th",{class:"px-4 py-2 border-b"},"Action")])],-1)),t("tbody",null,[(r(!0),o(v,null,f(h.value,(s,g)=>(r(),o("tr",{key:g,class:"text-center"},[t("td",S,l(s.name),1),t("td",D,l(s.category),1),t("td",F,l(s.dateArchived),1),t("td",$,l(s.dateArchived),1),e[6]||(e[6]=t("td",{class:"px-4 py-2 border-b"},null,-1))]))),128))])])])])])):i("",!0)])]))}};export{z as default};

import{r as c,c as o,b as t,a as i,u,x as n,F as y,g as x,o as r,I as b,t as l}from"./index-Cbn5xpgP.js";const g={class:"bg-[#608C54] shadow p-4 flex justify-between items-center text-white"},v={class:"flex items-center space-x-4"},f={class:"flex space-x-2"},m={class:"relative"},_={key:0,class:"absolute right-0 mt-2 bg-white shadow-lg rounded p-2 w-48"},w={key:0,class:"flex justify-center items-center h-96"},A={class:"bg-white p-6 rounded-lg shadow-lg w-96 flex flex-col justify-center items-center border-2 border-gray-300"},C={class:"bg-[#608C54] px-[165px] py-6"},k={class:"mt-4 text-sm text-center space-y-5"},P={key:1,class:"mt-10"},B={class:"p-5"},V={class:"w-full bg-white shadow-lg rounded-lg border-2 border-gray-300"},N={class:"w-full table-auto mt-4"},j={class:"px-4 py-2 border-b"},D={class:"px-4 py-2 border-b"},F={class:"px-4 py-2 border-b"},I={class:"px-4 py-2 border-b"},$={__name:"Archive",setup(L){const d=c(!1),h=c([{name:"Product 1",category:"Category A",dateArchived:"2024-11-01"},{name:"Product 2",category:"Category B",dateArchived:"2024-11-05"},{name:"Product 3",category:"Category C",dateArchived:"2024-11-10"},{name:"Product 4",category:"Category A",dateArchived:"2024-11-12"},{name:"Product 5",category:"Category B",dateArchived:"2024-11-15"}]);return(a,e)=>(r(),o("div",null,[t("header",g,[e[2]||(e[2]=t("h1",{class:"text-xl font-bold"},"Archive",-1)),t("div",v,[t("div",f,[t("div",m,[i(u(b),{icon:"uil:setting",width:"24",height:"24",style:{color:"white"},onClick:a.toggleDropdown},null,8,["onClick"]),a.dropdownVisible?(r(),o("div",_,[t("button",{class:"w-full text-left px-4 py-2 text-sm text-black",onClick:e[0]||(e[0]=s=>a.logout())},"Logout")])):n("",!0)])])])]),t("div",null,[d.value?n("",!0):(r(),o("div",w,[t("div",A,[t("div",C,[i(u(b),{icon:"bx:archive-in",width:"52",height:"52",style:{color:"#fff"}})]),t("div",k,[e[3]||(e[3]=t("h1",{class:"text-2xl font-bold"},"Products",-1)),e[4]||(e[4]=t("p",null,"118 Archive",-1)),t("button",{onClick:e[1]||(e[1]=s=>d.value=!0),class:"text-blue-500 hover:underline"},"View all")])])])),d.value?(r(),o("div",P,[t("div",B,[t("div",V,[e[7]||(e[7]=t("h2",{class:"text-2xl font-bold text-center mt-4"},"Archived Products",-1)),t("table",N,[e[6]||(e[6]=t("thead",null,[t("tr",{class:"bg-gray-200"},[t("th",{class:"px-4 py-2 border-b"},"Product Name"),t("th",{class:"px-4 py-2 border-b"},"Created at"),t("th",{class:"px-4 py-2 border-b"},"Status"),t("th",{class:"px-4 py-2 border-b"},"Amount"),t("th",{class:"px-4 py-2 border-b"},"Action")])],-1)),t("tbody",null,[(r(!0),o(y,null,x(h.value,(s,p)=>(r(),o("tr",{key:p,class:"text-center"},[t("td",j,l(s.name),1),t("td",D,l(s.category),1),t("td",F,l(s.dateArchived),1),t("td",I,l(s.dateArchived),1),e[5]||(e[5]=t("td",{class:"px-4 py-2 border-b"},null,-1))]))),128))])])])])])):n("",!0)])]))}};export{$ as default};

import{k as J,r as f,l as K,c as u,b as t,a as o,u as c,m as h,s as C,t as b,w as l,d as Q,F as g,g as y,p as A,N as D,h as W,i as X,o as r,I as m,e as a}from"./index-D4ktlHjy.js";import{B as i}from"./BaseLabel-B5YFyAHF.js";import{_ as v}from"./BaseInputField-O4dG67WA.js";import{B as S}from"./BaseOptionDefaultField-CkJAKGor.js";import{_ as j,a as B}from"./BaseSelectField-v_l8y8LE.js";import{B as I}from"./BaseRadioButton-BhwhuPnY.js";/* empty css                                                                        */const Z={class:"flex h-screen bg-gray-100"},ee={class:"flex-1 flex flex-col"},te={class:"bg-[#608C54] shadow p-4 flex justify-between items-center text-white"},se={class:"flex items-center space-x-4"},oe={class:"flex space-x-2"},le={class:"relative"},de={key:0,class:"absolute right-0 mt-2 bg-white shadow-lg rounded p-2 w-48"},ae={class:"p-4 flex flex-col gap-4 mt-8"},ie={class:"flex items-center space-x-4 justify-end"},ne={class:"space-x-4 items-center flex"},re={key:0,class:"fixed inset-0 flex items-center justify-center"},ue={class:"bg-white rounded-lg w-[800px] p-6 border-4 border-gray-300 flex"},ce={class:"w-1/2 pr-4 mt-3"},me={class:"flex items-center justify-between"},pe={class:"flex flex-col mt-2"},fe={class:"flex space-x-4 mt-2"},be={class:"flex flex-col"},xe={class:"flex flex-col"},ge={class:"w-1/2 pl-4 border-l border-gray-300"},ye={class:"text-end"},ve={class:"mb-4"},he={class:"items-center flex text-xs mt-2 text-gray-500 space-x-2"},we={class:"flex space-x-5"},_e={key:1,class:"fixed inset-0 flex items-center justify-center"},ke={class:"bg-white rounded-lg w-[800px] p-6 border-4 border-gray-300 flex"},Pe={class:"w-1/2 pr-4 mt-3"},Ce={class:"flex items-center justify-between"},Ve={class:"flex flex-col mt-2"},Ae={class:"flex space-x-4 mt-2"},De={class:"flex flex-col"},Se={class:"flex flex-col"},je={class:"w-1/2 pl-4 border-l border-gray-300"},Be={class:"text-end"},Ie={class:"mb-4"},Me={class:"mb-4"},Ue={class:"h-40 w-full border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md"},Ne={class:"grid grid-cols-3 gap-2"},Te=["onChange"],$e={class:"items-center flex text-xs mt-2 text-gray-500 space-x-2"},Le={class:"flex space-x-5"},Fe={class:"mt-6 flex justify-end space-x-2 text-xs"},Oe={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"},Ee={class:"bg-white p-6 rounded-lg shadow-lg w-96 text-center"},qe={class:"flex justify-center"},He={class:"w-full"},Re={class:"overflow-xs-auto"},Ye={class:"w-full"},ze={class:"bg-gray-200 text-sm text-start"},Ge={class:"p-4 w-10"},Je={class:"p-4 flex items-center space-x-4"},Ke=["src"],Qe={class:"px-4 py-2"},We={class:"px-4 py-2"},Xe={class:"px-4 py-2 font-bold"},Ze={class:"px-4 py-2 space-x-2 text-end"},et=["onClick"],tt=["onClick"],ct={__name:"Product",setup(st){const M=W(),U=X();J({first_name:"",last_name:""});const w=f(!1),N=()=>{w.value=!0},T=()=>{w.value=!1,clearValues()},n=f({productType:"",productName:"",description:"",amount:null,stocks:null,mainImage:null,thumbnails:[],visibility:"Published"}),_=f(!1),$=()=>{_.value=!0};function L(){_.value=!1}function F(d){const e=d.target.files[0];n.value.mainImage=e}function O(d){return e=>{const s=e.target.files[0];n.value.thumbnails[d]=s}}const V=f([{id:1,name:"Product A",createdAt:"2024-11-01",status:"Active",amount:"$100",image:"https://via.placeholder.com/50"},{id:2,name:"Product B",createdAt:"2024-11-05",status:"Inactive",amount:"$200",image:"https://via.placeholder.com/50"},{id:3,name:"Product C",createdAt:"2024-11-10",status:"Active",amount:"$150",image:"https://via.placeholder.com/50"},{id:3,name:"Product C",createdAt:"2024-11-10",status:"Active",amount:"$150",image:"https://via.placeholder.com/50"}]),x=f(!1),E=K(()=>x.value?V.value.filter(d=>d.isDraft):V.value),q=()=>{x.value=!x.value},k=f(!1),H=()=>{k.value=!0},R=()=>{k.value=!1},Y=()=>{console.log("Item deleted!"),closeDeleteModal()},P=f(!1),z=()=>{P.value=!P.value},G=async()=>{try{(await M.dispatch("logout")).isSuccess&&U.push({name:"Login"})}catch(d){console.error("Logout error:",d)}};return(d,e)=>(r(),u("div",Z,[t("div",ee,[t("header",te,[e[11]||(e[11]=t("h1",{class:"text-xl font-bold"},"Product",-1)),t("div",se,[t("div",oe,[o(c(m),{icon:"gridicons:bell",width:"24",height:"24",style:{color:"white"}}),t("div",le,[o(c(m),{icon:"uil:setting",width:"24",height:"24",style:{color:"white"},onClick:z}),P.value?(r(),u("div",de,[t("button",{class:"w-full text-left px-4 py-2 text-sm text-black",onClick:e[0]||(e[0]=s=>G())},"Logout")])):h("",!0)])])])]),t("main",ae,[t("div",ie,[t("div",ne,[t("button",{class:"px-4 py-2 bg-[#608C54] text-white rounded-md text-sm flex items-center space-x-2",onClick:q},[x.value?(r(),C(c(m),{key:0,icon:"oui:return-key",width:"20",height:"20",style:{color:"white"}})):(r(),C(c(m),{key:1,icon:"material-symbols:drafts",width:"20",height:"20",style:{color:"white"}})),t("span",null,b(x.value?"Back to Product List":"Saved Drafts"),1)]),t("button",{class:"px-4 py-2 bg-[#608C54] text-white rounded-md text-sm",onClick:N}," + Add New Product ")])]),w.value?(r(),u("div",re,[t("div",ue,[t("div",ce,[t("div",me,[o(i,{class:"font-bold text-2xl"},{default:l(()=>e[12]||(e[12]=[a("Add New Product")])),_:1})]),t("div",pe,[o(i,{class:"font-semibold"},{default:l(()=>e[13]||(e[13]=[a("Product Type:")])),_:1}),o(j,null,{default:l(()=>[o(S,null,{default:l(()=>e[14]||(e[14]=[a("Category")])),_:1}),o(B)]),_:1}),o(i,{class:"mt-4 font-semibold"},{default:l(()=>e[15]||(e[15]=[a("Product Name:")])),_:1}),o(v,{placeholder:"Ex. Sibuyas"}),o(i,{class:"mt-4 font-semibold"},{default:l(()=>e[16]||(e[16]=[a("Description")])),_:1}),o(v,{class:"rounded-lg border-gray-500 shadow-md pb-20",placeholder:"Type the description"})]),t("div",fe,[t("div",be,[o(i,{for:"amount",class:"text-sm font-semibold"},{default:l(()=>e[17]||(e[17]=[a("Amount")])),_:1}),e[18]||(e[18]=t("input",{id:"amount",type:"number",class:"border border-gray-400 rounded-md w-32 h-10 text-center focus:outline-none focus:ring-1 focus:ring-teal-500"},null,-1))]),t("div",xe,[o(i,{for:"stocks",class:"text-sm font-semibold"},{default:l(()=>e[19]||(e[19]=[a("Stocks")])),_:1}),e[20]||(e[20]=t("input",{id:"stocks",type:"number",class:"border border-gray-400 rounded-md w-32 h-10 text-center focus:outline-none focus:ring-1 focus:ring-teal-500"},null,-1))])])]),t("div",ge,[t("div",ye,[t("button",{class:"text-gray-500 hover:text-gray-700",onClick:T},[o(c(m),{icon:"fontisto:close",width:"1.2rem",height:"1.2rem",style:{color:"#5D5F5D"}})])]),t("div",ve,[o(i,{class:"text-lg font-semibold"},{default:l(()=>e[21]||(e[21]=[a("Product Type")])),_:1})]),e[24]||(e[24]=Q('<div class="mb-4"><div class="h-40 w-full border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md"><span class="text-gray-400">Upload Main Image</span><input type="file" accept="image/*" class="absolute opacity-0 cursor-pointer"></div></div><div class="grid grid-cols-3 gap-2"><div class="h-20 border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md"><span class="text-gray-400">+</span><input type="file" accept="image/*" class="absolute opacity-0 cursor-pointer"></div><div class="h-20 border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md"><span class="text-gray-400">+</span><input type="file" accept="image/*" class="absolute opacity-0 cursor-pointer"></div><div class="h-20 border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md"><span class="text-gray-400">+</span><input type="file" accept="image/*" class="absolute opacity-0 cursor-pointer"></div></div>',2)),t("div",he,[o(c(m),{icon:"cuida:alert-outline",width:"24",height:"24",style:{color:"#ec0404"}}),e[22]||(e[22]=t("p",null,"You need at least 3 images. Pay attention to the quality of the pictures you add",-1))]),t("div",null,[o(i,{class:"font-bold"},{default:l(()=>e[23]||(e[23]=[a("Visibility")])),_:1}),t("div",we,[(r(),u(g,null,y(["Published","Schedule","Hidden"],s=>o(I,{key:s,name:"tinIdOption",label:s,value:s,modelValue:d.tinIdSelected,"onUpdate:modelValue":e[1]||(e[1]=p=>d.tinIdSelected=p),class:"text-xs"},null,8,["label","value","modelValue"])),64))])]),e[25]||(e[25]=t("div",{class:"mt-6 flex justify-end space-x-2 text-xs"},[t("button",{type:"submit",class:"px-2 py-2 bg-white border-2 rounded-md hover:bg-gray-400"}," Save as Draft "),t("button",{type:"submit",class:"px-6 py-2 bg-[#007C80] text-white rounded-md hover:bg-gray-400"}," Publish ")],-1))])])])):h("",!0),_.value?(r(),u("div",_e,[t("div",ke,[t("div",Pe,[t("div",Ce,[o(i,{class:"font-bold text-2xl"},{default:l(()=>e[26]||(e[26]=[a("Update Product")])),_:1})]),t("div",Ve,[o(i,{class:"font-semibold"},{default:l(()=>e[27]||(e[27]=[a("Product Type:")])),_:1}),o(j,{modelValue:n.value.productType,"onUpdate:modelValue":e[2]||(e[2]=s=>n.value.productType=s)},{default:l(()=>[o(S,null,{default:l(()=>e[28]||(e[28]=[a("Category")])),_:1}),(r(!0),u(g,null,y(d.categories,(s,p)=>(r(),C(B,{key:p},{default:l(()=>[a(b(s),1)]),_:2},1024))),128))]),_:1},8,["modelValue"]),o(i,{class:"mt-4 font-semibold"},{default:l(()=>e[29]||(e[29]=[a("Product Name:")])),_:1}),o(v,{modelValue:n.value.productName,"onUpdate:modelValue":e[3]||(e[3]=s=>n.value.productName=s),placeholder:"Ex. Sibuyas"},null,8,["modelValue"]),o(i,{class:"mt-4 font-semibold"},{default:l(()=>e[30]||(e[30]=[a("Description")])),_:1}),o(v,{class:"rounded-lg border-gray-500 shadow-md pb-20",modelValue:n.value.description,"onUpdate:modelValue":e[4]||(e[4]=s=>n.value.description=s),placeholder:"Type the description"},null,8,["modelValue"])]),t("div",Ae,[t("div",De,[o(i,{for:"amount",class:"text-sm font-semibold"},{default:l(()=>e[31]||(e[31]=[a("Amount")])),_:1}),A(t("input",{id:"amount","onUpdate:modelValue":e[5]||(e[5]=s=>n.value.amount=s),type:"number",class:"border border-gray-400 rounded-md w-32 h-10 text-center focus:outline-none focus:ring-1 focus:ring-teal-500"},null,512),[[D,n.value.amount]])]),t("div",Se,[o(i,{for:"stocks",class:"text-sm font-semibold"},{default:l(()=>e[32]||(e[32]=[a("Stocks")])),_:1}),A(t("input",{id:"stocks","onUpdate:modelValue":e[6]||(e[6]=s=>n.value.stocks=s),type:"number",class:"border border-gray-400 rounded-md w-32 h-10 text-center focus:outline-none focus:ring-1 focus:ring-teal-500"},null,512),[[D,n.value.stocks]])])])]),t("div",je,[t("div",Be,[t("button",{class:"text-gray-500 hover:text-gray-700",onClick:L},[o(c(m),{icon:"fontisto:close",width:"1.2rem",height:"1.2rem",style:{color:"#5D5F5D"}})])]),t("div",Ie,[o(i,{class:"text-lg font-semibold"},{default:l(()=>e[33]||(e[33]=[a("Product Type")])),_:1})]),t("div",Me,[t("div",Ue,[e[34]||(e[34]=t("span",{class:"text-gray-400"},"Upload Main Image",-1)),t("input",{type:"file",accept:"image/*",onChange:F,class:"absolute opacity-0 cursor-pointer"},null,32)])]),t("div",Ne,[(r(!0),u(g,null,y(n.value.thumbnails,(s,p)=>(r(),u("div",{key:p,class:"h-20 border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md"},[e[35]||(e[35]=t("span",{class:"text-gray-400"},"+",-1)),t("input",{type:"file",accept:"image/*",onChange:ot=>O(p),class:"absolute opacity-0 cursor-pointer"},null,40,Te)]))),128))]),t("div",$e,[o(c(m),{icon:"cuida:alert-outline",width:"24",height:"24",style:{color:"#ec0404"}}),e[36]||(e[36]=t("p",null,"You need at least 3 images. Pay attention to the quality of the pictures you add",-1))]),t("div",null,[o(i,{class:"font-bold"},{default:l(()=>e[37]||(e[37]=[a("Visibility")])),_:1}),t("div",Le,[(r(),u(g,null,y(["Published","Schedule","Hidden"],s=>o(I,{key:s,name:"tinIdOption",label:s,value:s,modelValue:n.value.visibility,"onUpdate:modelValue":e[7]||(e[7]=p=>n.value.visibility=p),class:"text-xs"},null,8,["label","value","modelValue"])),64))])]),t("div",Fe,[t("button",{onClick:e[8]||(e[8]=(...s)=>d.saveAsDraft&&d.saveAsDraft(...s)),class:"px-2 py-2 bg-white border-2 rounded-md hover:bg-gray-400"}," Save as Draft "),t("button",{onClick:e[9]||(e[9]=(...s)=>d.publishProduct&&d.publishProduct(...s)),class:"px-6 py-2 bg-[#007C80] text-white rounded-md hover:bg-gray-400"}," Publish ")])])])])):h("",!0),t("div",null,[k.value?(r(),u("div",Oe,[t("div",Ee,[t("div",qe,[o(c(m),{icon:"material-symbols:delete-outline",width:"50",height:"50",style:{color:"#ff0000"}})]),e[38]||(e[38]=t("p",{class:"text-sm text-gray-600 mt-4"},"Are you sure you want to delete this item? This action cannot be undone",-1)),t("div",{class:"flex gap-2 mt-4"},[t("button",{class:"bg-[#608C54] text-white px-14 py-2 rounded hover:bg-gray-400",onClick:R}," Cancel "),t("button",{class:"bg-red-500 text-white px-14 py-2 rounded hover:bg-red-600",onClick:Y}," Delete ")])])])):h("",!0)]),t("div",He,[t("div",Re,[t("table",Ye,[t("thead",null,[t("tr",ze,[t("th",Ge,[o(v,{type:"checkbox",modelValue:d.selectAll,"onUpdate:modelValue":e[10]||(e[10]=s=>d.selectAll=s),onChange:d.toggleSelectAll},null,8,["modelValue","onChange"])]),e[39]||(e[39]=t("th",{class:"px-4 py-3 text-left"},"Product",-1)),e[40]||(e[40]=t("th",{class:"px-4 py-3 text-left"},"Created at",-1)),e[41]||(e[41]=t("th",{class:"px-4 py-3 text-left"},"Status",-1)),e[42]||(e[42]=t("th",{class:"px-4 py-3 text-left"},"Amount",-1)),e[43]||(e[43]=t("th",{class:"px-4 py-3 text-end"},"Action",-1))])]),t("tbody",null,[(r(!0),u(g,null,y(E.value,s=>(r(),u("tr",{key:s.id,class:"border-b hover:bg-gray-100 text-sm"},[e[44]||(e[44]=t("td",{class:"p-4"},[t("input",{type:"checkbox"})],-1)),t("td",Je,[t("img",{src:s.image,alt:"Product Image",class:"w-12 h-12 rounded-md"},null,8,Ke),t("span",null,b(s.name),1)]),t("td",Qe,b(s.createdAt),1),t("td",We,b(s.status),1),t("td",Xe,b(s.amount),1),t("td",Ze,[t("button",{class:"text-blue-500 hover:text-blue-700",onClick:p=>$(s.id)},[o(c(m),{icon:"lucide:pencil-line",width:"1.2rem",height:"1.2rem",style:{color:"#578CCB"}})],8,et),t("button",{class:"text-red-500 hover:text-red-700",onClick:p=>H(s.id)},[o(c(m),{icon:"octicon:trash-24",width:"1.2rem",height:"1.2rem",style:{color:"#DA3B64"}})],8,tt)])]))),128))])])])])])])]))}};export{ct as default};

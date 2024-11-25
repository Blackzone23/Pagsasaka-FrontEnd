import{q as H,r as f,j as R,c as u,a as s,b as t,u as c,x as k,t as x,w as o,e as Y,F as y,g,k as P,m as V,y as A,h as z,i as G,o as r,I as m,d}from"./index-nVQMwTsH.js";import{_ as J}from"./UserDashBoard_Navbar-CRE-ygtK.js";import{B as i}from"./BaseLabel-tZM6BbCK.js";import{_ as v}from"./BaseInputField-CiEqqQpC.js";import{B as D}from"./BaseOptionDefaultField-BsvWCBmz.js";import{_ as j,a as S}from"./BaseSelectField-34xIuTvx.js";import{B}from"./BaseRadioButton-CfhgfkkT.js";import"./Logo-C9hB9-jB.js";const K={class:"flex h-screen bg-gray-100"},Q={class:"flex-1 flex flex-col"},W={class:"bg-[#608C54] shadow p-4 flex justify-between items-center text-white"},X={class:"flex items-center space-x-4"},Z={class:"flex space-x-2"},ee={class:"p-4 flex flex-col gap-4 mt-10"},te={class:"flex items-center space-x-4 justify-end"},se={class:"space-x-4 items-center flex"},le={key:0,class:"fixed inset-0 flex items-center justify-center"},oe={class:"bg-white rounded-lg w-[800px] p-6 border-4 border-gray-300 flex"},de={class:"w-1/2 pr-4 mt-3"},ae={class:"flex items-center justify-between"},ie={class:"flex flex-col mt-2"},ne={class:"flex space-x-4 mt-2"},re={class:"flex flex-col"},ue={class:"flex flex-col"},ce={class:"w-1/2 pl-4 border-l border-gray-300"},me={class:"text-end"},pe={class:"mb-4"},fe={class:"items-center flex text-xs mt-2 text-gray-500 space-x-2"},xe={class:"flex space-x-5"},be={key:1,class:"fixed inset-0 flex items-center justify-center"},ye={class:"bg-white rounded-lg w-[800px] p-6 border-4 border-gray-300 flex"},ge={class:"w-1/2 pr-4 mt-3"},ve={class:"flex items-center justify-between"},he={class:"flex flex-col mt-2"},we={class:"flex space-x-4 mt-2"},_e={class:"flex flex-col"},ke={class:"flex flex-col"},Pe={class:"w-1/2 pl-4 border-l border-gray-300"},Ce={class:"text-end"},Ve={class:"mb-4"},Ae={class:"mb-4"},De={class:"h-40 w-full border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md"},je={class:"grid grid-cols-3 gap-2"},Se=["onChange"],Be={class:"items-center flex text-xs mt-2 text-gray-500 space-x-2"},Ie={class:"flex space-x-5"},Me={class:"mt-6 flex justify-end space-x-2 text-xs"},Ue={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"},Te={class:"bg-white p-6 rounded-lg shadow-lg w-96 text-center"},Ne={class:"flex justify-center"},$e={class:"w-full"},Fe={class:"overflow-xs-auto"},Oe={class:"w-full"},Le={class:"bg-gray-200 text-sm text-start"},qe={class:"p-4 w-10"},Ee={class:"p-4 flex items-center space-x-4"},He=["src"],Re={class:"px-4 py-2"},Ye={class:"px-4 py-2"},ze={class:"px-4 py-2 font-bold"},Ge={class:"px-4 py-2 space-x-2 text-end"},Je=["onClick"],Ke=["onClick"],at={__name:"Product",setup(Qe){z(),G(),H({first_name:"",last_name:""});const h=f(!1),I=()=>{h.value=!0},M=()=>{h.value=!1,clearValues()},n=f({productType:"",productName:"",description:"",amount:null,stocks:null,mainImage:null,thumbnails:[],visibility:"Published"}),w=f(!1),U=()=>{w.value=!0};function T(){w.value=!1}function N(a){const e=a.target.files[0];n.value.mainImage=e}function $(a){return e=>{const l=e.target.files[0];n.value.thumbnails[a]=l}}const C=f([{id:1,name:"Product A",createdAt:"2024-11-01",status:"Active",amount:"$100",image:"https://via.placeholder.com/50"},{id:2,name:"Product B",createdAt:"2024-11-05",status:"Inactive",amount:"$200",image:"https://via.placeholder.com/50"},{id:3,name:"Product C",createdAt:"2024-11-10",status:"Active",amount:"$150",image:"https://via.placeholder.com/50"},{id:3,name:"Product C",createdAt:"2024-11-10",status:"Active",amount:"$150",image:"https://via.placeholder.com/50"}]),b=f(!1),F=R(()=>b.value?C.value.filter(a=>a.isDraft):C.value),O=()=>{b.value=!b.value},_=f(!1),L=()=>{_.value=!0},q=()=>{_.value=!1},E=()=>{console.log("Item deleted!"),closeDeleteModal()};return(a,e)=>(r(),u("div",K,[s(J),t("div",Q,[t("header",W,[e[10]||(e[10]=t("h1",{class:"text-xl font-bold"},"Product List",-1)),t("div",X,[t("div",Z,[s(c(m),{icon:"gridicons:bell",width:"24",height:"24",style:{color:"white"}}),s(c(m),{icon:"uil:setting",width:"24",height:"24",style:{color:"white"}})])])]),t("main",ee,[t("div",te,[t("div",se,[t("button",{class:"px-4 py-2 bg-[#608C54] text-white rounded-md text-sm flex items-center space-x-2",onClick:O},[b.value?(r(),k(c(m),{key:0,icon:"oui:return-key",width:"20",height:"20",style:{color:"white"}})):(r(),k(c(m),{key:1,icon:"material-symbols:drafts",width:"20",height:"20",style:{color:"white"}})),t("span",null,x(b.value?"Back to Product List":"Saved Drafts"),1)]),t("button",{class:"px-4 py-2 bg-[#608C54] text-white rounded-md text-sm",onClick:I}," + Add New Product ")])]),h.value?(r(),u("div",le,[t("div",oe,[t("div",de,[t("div",ae,[s(i,{class:"font-bold text-2xl"},{default:o(()=>e[11]||(e[11]=[d("Add New Product")])),_:1})]),t("div",ie,[s(i,{class:"font-semibold"},{default:o(()=>e[12]||(e[12]=[d("Product Type:")])),_:1}),s(j,null,{default:o(()=>[s(D,null,{default:o(()=>e[13]||(e[13]=[d("Category")])),_:1}),s(S)]),_:1}),s(i,{class:"mt-4 font-semibold"},{default:o(()=>e[14]||(e[14]=[d("Product Name:")])),_:1}),s(v,{placeholder:"Ex. Sibuyas"}),s(i,{class:"mt-4 font-semibold"},{default:o(()=>e[15]||(e[15]=[d("Description")])),_:1}),s(v,{class:"rounded-lg border-gray-500 shadow-md pb-20",placeholder:"Type the description"})]),t("div",ne,[t("div",re,[s(i,{for:"amount",class:"text-sm font-semibold"},{default:o(()=>e[16]||(e[16]=[d("Amount")])),_:1}),e[17]||(e[17]=t("input",{id:"amount",type:"number",class:"border border-gray-400 rounded-md w-32 h-10 text-center focus:outline-none focus:ring-1 focus:ring-teal-500"},null,-1))]),t("div",ue,[s(i,{for:"stocks",class:"text-sm font-semibold"},{default:o(()=>e[18]||(e[18]=[d("Stocks")])),_:1}),e[19]||(e[19]=t("input",{id:"stocks",type:"number",class:"border border-gray-400 rounded-md w-32 h-10 text-center focus:outline-none focus:ring-1 focus:ring-teal-500"},null,-1))])])]),t("div",ce,[t("div",me,[t("button",{class:"text-gray-500 hover:text-gray-700",onClick:M},[s(c(m),{icon:"fontisto:close",width:"1.2rem",height:"1.2rem",style:{color:"#5D5F5D"}})])]),t("div",pe,[s(i,{class:"text-lg font-semibold"},{default:o(()=>e[20]||(e[20]=[d("Product Type")])),_:1})]),e[23]||(e[23]=Y('<div class="mb-4"><div class="h-40 w-full border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md"><span class="text-gray-400">Upload Main Image</span><input type="file" accept="image/*" class="absolute opacity-0 cursor-pointer"></div></div><div class="grid grid-cols-3 gap-2"><div class="h-20 border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md"><span class="text-gray-400">+</span><input type="file" accept="image/*" class="absolute opacity-0 cursor-pointer"></div><div class="h-20 border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md"><span class="text-gray-400">+</span><input type="file" accept="image/*" class="absolute opacity-0 cursor-pointer"></div><div class="h-20 border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md"><span class="text-gray-400">+</span><input type="file" accept="image/*" class="absolute opacity-0 cursor-pointer"></div></div>',2)),t("div",fe,[s(c(m),{icon:"cuida:alert-outline",width:"24",height:"24",style:{color:"#ec0404"}}),e[21]||(e[21]=t("p",null,"You need at least 3 images. Pay attention to the quality of the pictures you add",-1))]),t("div",null,[s(i,{class:"font-bold"},{default:o(()=>e[22]||(e[22]=[d("Visibility")])),_:1}),t("div",xe,[(r(),u(y,null,g(["Published","Schedule","Hidden"],l=>s(B,{key:l,name:"tinIdOption",label:l,value:l,modelValue:a.tinIdSelected,"onUpdate:modelValue":e[0]||(e[0]=p=>a.tinIdSelected=p),class:"text-xs"},null,8,["label","value","modelValue"])),64))])]),e[24]||(e[24]=t("div",{class:"mt-6 flex justify-end space-x-2 text-xs"},[t("button",{type:"submit",class:"px-2 py-2 bg-white border-2 rounded-md hover:bg-gray-400"}," Save as Draft "),t("button",{type:"submit",class:"px-6 py-2 bg-[#007C80] text-white rounded-md hover:bg-gray-400"}," Publish ")],-1))])])])):P("",!0),w.value?(r(),u("div",be,[t("div",ye,[t("div",ge,[t("div",ve,[s(i,{class:"font-bold text-2xl"},{default:o(()=>e[25]||(e[25]=[d("Update Product")])),_:1})]),t("div",he,[s(i,{class:"font-semibold"},{default:o(()=>e[26]||(e[26]=[d("Product Type:")])),_:1}),s(j,{modelValue:n.value.productType,"onUpdate:modelValue":e[1]||(e[1]=l=>n.value.productType=l)},{default:o(()=>[s(D,null,{default:o(()=>e[27]||(e[27]=[d("Category")])),_:1}),(r(!0),u(y,null,g(a.categories,(l,p)=>(r(),k(S,{key:p},{default:o(()=>[d(x(l),1)]),_:2},1024))),128))]),_:1},8,["modelValue"]),s(i,{class:"mt-4 font-semibold"},{default:o(()=>e[28]||(e[28]=[d("Product Name:")])),_:1}),s(v,{modelValue:n.value.productName,"onUpdate:modelValue":e[2]||(e[2]=l=>n.value.productName=l),placeholder:"Ex. Sibuyas"},null,8,["modelValue"]),s(i,{class:"mt-4 font-semibold"},{default:o(()=>e[29]||(e[29]=[d("Description")])),_:1}),s(v,{class:"rounded-lg border-gray-500 shadow-md pb-20",modelValue:n.value.description,"onUpdate:modelValue":e[3]||(e[3]=l=>n.value.description=l),placeholder:"Type the description"},null,8,["modelValue"])]),t("div",we,[t("div",_e,[s(i,{for:"amount",class:"text-sm font-semibold"},{default:o(()=>e[30]||(e[30]=[d("Amount")])),_:1}),V(t("input",{id:"amount","onUpdate:modelValue":e[4]||(e[4]=l=>n.value.amount=l),type:"number",class:"border border-gray-400 rounded-md w-32 h-10 text-center focus:outline-none focus:ring-1 focus:ring-teal-500"},null,512),[[A,n.value.amount]])]),t("div",ke,[s(i,{for:"stocks",class:"text-sm font-semibold"},{default:o(()=>e[31]||(e[31]=[d("Stocks")])),_:1}),V(t("input",{id:"stocks","onUpdate:modelValue":e[5]||(e[5]=l=>n.value.stocks=l),type:"number",class:"border border-gray-400 rounded-md w-32 h-10 text-center focus:outline-none focus:ring-1 focus:ring-teal-500"},null,512),[[A,n.value.stocks]])])])]),t("div",Pe,[t("div",Ce,[t("button",{class:"text-gray-500 hover:text-gray-700",onClick:T},[s(c(m),{icon:"fontisto:close",width:"1.2rem",height:"1.2rem",style:{color:"#5D5F5D"}})])]),t("div",Ve,[s(i,{class:"text-lg font-semibold"},{default:o(()=>e[32]||(e[32]=[d("Product Type")])),_:1})]),t("div",Ae,[t("div",De,[e[33]||(e[33]=t("span",{class:"text-gray-400"},"Upload Main Image",-1)),t("input",{type:"file",accept:"image/*",onChange:N,class:"absolute opacity-0 cursor-pointer"},null,32)])]),t("div",je,[(r(!0),u(y,null,g(n.value.thumbnails,(l,p)=>(r(),u("div",{key:p,class:"h-20 border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md"},[e[34]||(e[34]=t("span",{class:"text-gray-400"},"+",-1)),t("input",{type:"file",accept:"image/*",onChange:We=>$(p),class:"absolute opacity-0 cursor-pointer"},null,40,Se)]))),128))]),t("div",Be,[s(c(m),{icon:"cuida:alert-outline",width:"24",height:"24",style:{color:"#ec0404"}}),e[35]||(e[35]=t("p",null,"You need at least 3 images. Pay attention to the quality of the pictures you add",-1))]),t("div",null,[s(i,{class:"font-bold"},{default:o(()=>e[36]||(e[36]=[d("Visibility")])),_:1}),t("div",Ie,[(r(),u(y,null,g(["Published","Schedule","Hidden"],l=>s(B,{key:l,name:"tinIdOption",label:l,value:l,modelValue:n.value.visibility,"onUpdate:modelValue":e[6]||(e[6]=p=>n.value.visibility=p),class:"text-xs"},null,8,["label","value","modelValue"])),64))])]),t("div",Me,[t("button",{onClick:e[7]||(e[7]=(...l)=>a.saveAsDraft&&a.saveAsDraft(...l)),class:"px-2 py-2 bg-white border-2 rounded-md hover:bg-gray-400"}," Save as Draft "),t("button",{onClick:e[8]||(e[8]=(...l)=>a.publishProduct&&a.publishProduct(...l)),class:"px-6 py-2 bg-[#007C80] text-white rounded-md hover:bg-gray-400"}," Publish ")])])])])):P("",!0),t("div",null,[_.value?(r(),u("div",Ue,[t("div",Te,[t("div",Ne,[s(c(m),{icon:"material-symbols:delete-outline",width:"50",height:"50",style:{color:"#ff0000"}})]),e[37]||(e[37]=t("p",{class:"text-sm text-gray-600 mt-4"},"Are you sure you want to delete this item? This action cannot be undone",-1)),t("div",{class:"flex gap-2 mt-4"},[t("button",{class:"bg-[#608C54] text-white px-14 py-2 rounded hover:bg-gray-400",onClick:q}," Cancel "),t("button",{class:"bg-red-500 text-white px-14 py-2 rounded hover:bg-red-600",onClick:E}," Delete ")])])])):P("",!0)]),t("div",$e,[t("div",Fe,[t("table",Oe,[t("thead",null,[t("tr",Le,[t("th",qe,[s(v,{type:"checkbox",modelValue:a.selectAll,"onUpdate:modelValue":e[9]||(e[9]=l=>a.selectAll=l),onChange:a.toggleSelectAll},null,8,["modelValue","onChange"])]),e[38]||(e[38]=t("th",{class:"px-4 py-3 text-left"},"Product",-1)),e[39]||(e[39]=t("th",{class:"px-4 py-3 text-left"},"Created at",-1)),e[40]||(e[40]=t("th",{class:"px-4 py-3 text-left"},"Status",-1)),e[41]||(e[41]=t("th",{class:"px-4 py-3 text-left"},"Amount",-1)),e[42]||(e[42]=t("th",{class:"px-4 py-3 text-end"},"Action",-1))])]),t("tbody",null,[(r(!0),u(y,null,g(F.value,l=>(r(),u("tr",{key:l.id,class:"border-b hover:bg-gray-100 text-sm"},[e[43]||(e[43]=t("td",{class:"p-4"},[t("input",{type:"checkbox"})],-1)),t("td",Ee,[t("img",{src:l.image,alt:"Product Image",class:"w-12 h-12 rounded-md"},null,8,He),t("span",null,x(l.name),1)]),t("td",Re,x(l.createdAt),1),t("td",Ye,x(l.status),1),t("td",ze,x(l.amount),1),t("td",Ge,[t("button",{class:"text-blue-500 hover:text-blue-700",onClick:p=>U(l.id)},[s(c(m),{icon:"lucide:pencil-line",width:"1.2rem",height:"1.2rem",style:{color:"#578CCB"}})],8,Je),t("button",{class:"text-red-500 hover:text-red-700",onClick:p=>L(l.id)},[s(c(m),{icon:"octicon:trash-24",width:"1.2rem",height:"1.2rem",style:{color:"#DA3B64"}})],8,Ke)])]))),128))])])])])])])]))}};export{at as default};

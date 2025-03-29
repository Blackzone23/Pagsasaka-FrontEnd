import{A as U,f as k,D as K,g as ve,c as f,M as g,J as c,a as l,b as t,u as i,w as o,E as G,H as Q,F as q,h as M,t as n,i as _e,j as he,o as d,K as $,e as r}from"./index-CdF1xhyq.js";import{T as we,L as ke}from"./Toast-DjabdXza.js";import{B as m}from"./BaseLabel-DGUwW8bf.js";import{_ as S}from"./BaseInputField-CWwqOWX_.js";import{B as I}from"./BaseOptionDefaultField-Dw3yNOsI.js";import{_ as R,a as C}from"./BaseSelectField-UfVCv2tL.js";import{_ as W}from"./BaseRadioButton-BYk81zGF.js";import{B as b}from"./BaseError-COxap1kt.js";import"./lodash-Dwr3hxpL.js";import{u as X,c as v,r as _}from"./index-DVl0PdT0.js";const $e={class:"flex h-screen bg-gray-100"},Pe={class:"flex-1 flex flex-col"},Ve={class:"bg-[#608C54] shadow p-4 flex justify-between items-center text-white"},Ue={class:"flex items-center space-x-4"},qe={class:"flex space-x-2"},Ce={class:"relative"},Me={key:0,class:"absolute right-0 mt-2 bg-white shadow-lg rounded p-2 w-48"},De={class:"p-4 flex flex-col gap-4 mt-8"},je={key:0,class:"fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-40"},Se={class:"bg-white rounded-lg 2xl:w-[900px] 2xs:w-[400px] md:w-[700px] p-4 border-4 border-gray-300 flex flex-col 2xl:h-[650px] 2xs:h-[500px] 2xs:overflow-y-auto"},Le={class:"flex justify-between items-center"},Ie={class:"flex flex-col md:flex-row mt-4 gap-6"},Re={class:"md:w-1/2 space-y-4"},Te={class:"flex flex-col 2xs:flex-col md:flex-row md:space-x-4"},Ne={class:"flex flex-col"},Ae={class:"relative"},Be={class:"absolute left-1 2xl:top-3 md:top-4 lg:top-2 2xs:top-4 xs:top-4 text-gray-500 flex items-center"},Fe={class:"flex flex-col"},Ee={class:"flex flex-col"},Oe={class:"md:w-1/2 space-y-4"},ze={class:"h-40 border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md relative"},Ye={key:0,class:"text-gray-400"},He=["src"],Je={class:"grid grid-cols-3 gap-2"},Ke=["src"],Ge={key:0,class:"h-20 border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md relative"},Qe={class:"items-center flex text-xs text-gray-500 space-x-2"},We={class:"flex space-x-5"},Xe={key:1,class:"fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-40"},Ze={class:"bg-white rounded-lg 2xl:w-[900px] 2xs:w-[400px] md:w-[700px] p-4 border-4 border-gray-300 flex flex-col 2xl:h-[650px] 2xs:h-[500px] 2xs:overflow-y-auto"},et={class:"flex justify-between items-center"},tt={class:"flex flex-col md:flex-row mt-4 gap-6"},st={class:"md:w-1/2 space-y-4"},ot={class:"flex flex-col 2xs:flex-col md:flex-row md:space-x-4"},lt={class:"flex flex-col"},rt={class:"relative"},it={class:"absolute left-1 2xl:top-2 lg:top-2 2xs:top-4 text-gray-500 flex items-center"},dt={class:"flex flex-col"},at={class:"flex flex-col"},ut={class:"md:w-1/2 space-y-4"},nt={class:"h-40 border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md relative"},ct={key:0,class:"text-gray-400"},pt=["src"],mt={class:"grid grid-cols-3 gap-2"},ft=["src"],gt={key:0,class:"h-20 border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md relative"},xt={class:"items-center flex text-xs text-gray-500 space-x-2"},yt={class:"flex space-x-5"},bt={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"},vt={class:"bg-white p-6 rounded-lg shadow-lg w-96 text-center"},_t={class:"flex justify-center"},ht={class:"w-full overflow-x-auto"},wt={class:"min-h-96"},kt={class:"w-full table-auto"},$t={class:"p-2 sm:p-4 flex items-center space-x-2 gap-2"},Pt=["src"],Vt={class:"hidden sm:table-cell"},Ut={class:"px-2 sm:px-4 py-2"},qt={class:"px-2 sm:px-4 py-2"},Ct={class:"px-2 sm:px-4 py-2"},Mt={class:"px-2 sm:px-4 py-2 flex items-center space-x-2 justify-end"},Dt=["onClick"],jt=["onClick"],St={class:"mt-10 mr-4 flex justify-end text-xs"},Lt=["disabled"],It={class:"py-2 px-4 bg-gray-100 flex text-xs items-center border-l border-r border-gray-300"},Rt=["disabled"],Kt={__name:"Product",setup(Tt){const h=_e(),Z=he(),ee=U(()=>h.state.showLoading.state),O=U(()=>h.state.User.product.data),z=U(()=>h.state.User.categoryDropdown.data),P=U(()=>h.state.currentPage),T=U(()=>h.state.totalPages);k([]);async function D(){await h.dispatch("User/getProductList",{currentPage:P.value})}h.dispatch("User/getCategoryDropdown");const u=K({category_id:"",product_name:"",description:"",price:"",stocks:"",unit:"",product_img:[],visibility:""}),N=k(!1),te=()=>{N.value=!0},Y=()=>{N.value=!1,xe()},se=U(()=>({category_id:{required:v.withMessage("Category name is required",_)},product_name:{required:v.withMessage("Product Name is required",_)},description:{required:v.withMessage("Description is required",_)},price:{required:v.withMessage("Price is required",_)},stocks:{required:v.withMessage("Stocks is required",_)},unit:{required:v.withMessage("unit is required",_)},product_img:{required:v.withMessage("3 Product Image is required",_)},visibility:{required:v.withMessage("Visibility is required",_)}})),x=X(se,u);async function oe(){if(await x.value.$validate()){const e=new FormData;e.append("category_id",u.category_id),e.append("product_name",u.product_name),e.append("description",u.description),e.append("price",u.price),e.append("stocks",u.stocks),e.append("unit",u.unit),e.append("visibility",u.visibility),u.product_img.forEach((s,w)=>{e.append(`product_img[${w}]`,s)}),await h.dispatch("User/createProduct",e).then(s=>{s.isSuccess==!0&&(Y(),D())})}}const le=p=>{const e=p.target.files[0];e&&(u.product_img.splice(0,1,e),V.value=URL.createObjectURL(e))},re=p=>{const e=p.target.files[0];e&&u.product_img.length<4&&(u.product_img.push(e),j.value.push(URL.createObjectURL(e)))},V=k(null),j=k([]),a=K({id:"",category_id:"",product_name:"",description:"",price:"",stocks:"",unit:"",product_img:[],visibility:""}),A=k(!1),ie=p=>{const e=O.value.find(s=>s.id===p);e&&(a.id=e.id,a.category_id=e.category_id,a.product_name=e.product_name,a.description=e.description,a.price=e.price,a.stocks=e.stocks,a.unit=e.unit,a.product_img=e.product_img,a.visibility=e.visibility,console.log(a.visibility),V.value=e.product_img[0]||"",j.value=e.product_img.slice(1)||[],A.value=!0)};function H(){A.value=!1}function de(p){const e=p.target.files[0];if(e){const s=new FileReader;s.onload=()=>{V.value=s.result},s.readAsDataURL(e),a.product_img[0]=e}}function ae(p){const e=p.target.files[0];if(e){const s=new FileReader;s.onload=()=>{j.value.push(s.result)},s.readAsDataURL(e),a.product_img.push(e)}}const ue=U(()=>({category_id:{required:v.withMessage("Category name is required",_)},product_name:{required:v.withMessage("Product Name is required",_)},description:{required:v.withMessage("Description is required",_)},price:{required:v.withMessage("Price is required",_)},stocks:{required:v.withMessage("Stocks is required",_)},unit:{required:v.withMessage("unit is required",_)},product_img:{required:v.withMessage("3 Product Image is required",_)},visibility:{required:v.withMessage("Visibility is required",_)}})),y=X(ue,a);async function ne(){await y.value.$validate()&&await h.dispatch("User/updateProduct",a).then(e=>{e.isSuccess==!0&&(H(),D())})}const B=k(!1),F=k(null),ce=p=>{F.value=p,B.value=!0},J=()=>{B.value=!1};async function pe(){F.value!=""&&await h.dispatch("User/deleteProduct",F.value).then(p=>{p.isSuccess&&(J(),D())})}const me=k(!1);U(()=>me.value?products.value.filter(p=>p.isDraft):products.value);const L=p=>{const e=p.target;e.value=e.value.replace(/[^0-9]/g,"")};function fe(){P.value>1&&(h.commit("setCurrentPage",P.value-1),D())}function ge(){P.value<T.value&&(h.commit("setCurrentPage",P.value+1),D())}k(!1);function xe(){u.category_id="",u.product_name="",u.description="",u.price="",u.stocks="",u.unit="",u.product_img=[],u.visibility="",a.category_id="",a.product_name="",a.description="",a.price="",a.stocks="",a.unit="",a.product_img=[],a.visibility="",V.value=null,j.value=[],x.value.$reset(),y.value.$reset()}const E=k(!1),ye=()=>{E.value=!E.value},be=async()=>{try{(await h.dispatch("logout")).isSuccess&&Z.push({name:"Login"})}catch(p){console.error("Logout error:",p)}};return ve(()=>{D()}),(p,e)=>(d(),f(q,null,[ee.value?(d(),g(ke,{key:0,class:"loading"})):c("",!0),l(we),t("div",$e,[t("div",Pe,[t("header",Ve,[e[16]||(e[16]=t("h1",{class:"text-lg sm:text-xl 2xl:ml-0 md:ml-10 2xs:ml-10 font-bold"},"List of Products",-1)),t("div",Ue,[t("div",qe,[t("div",Ce,[l(i($),{icon:"uil:setting",width:"24",height:"24",style:{color:"white"},onClick:ye}),E.value?(d(),f("div",Me,[e[15]||(e[15]=t("a",{href:"/seller-profile",class:"block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100"}," Account Info ",-1)),t("button",{class:"block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100",onClick:e[0]||(e[0]=s=>be())}," Logout")])):c("",!0)])])])]),t("main",De,[t("div",{class:"flex items-center space-x-4 justify-end"},[t("div",{class:"space-x-4 items-center flex"},[t("button",{class:"px-4 py-2 bg-[#608C54] text-white rounded-md text-sm",onClick:te}," + Add New Product ")])]),N.value?(d(),f("div",je,[t("div",Se,[t("div",Le,[l(m,{class:"font-bold text-2xl"},{default:o(()=>e[17]||(e[17]=[r("Add New Product")])),_:1}),t("button",{class:"text-gray-500 hover:text-gray-700",onClick:Y},[l(i($),{icon:"fontisto:close",width:"1.2rem",height:"1.2rem",style:{color:"#5D5F5D"}})])]),t("div",Ie,[t("div",Re,[l(m,{class:"font-semibold"},{default:o(()=>e[18]||(e[18]=[r("Product Type:")])),_:1}),l(R,{modelValue:u.category_id,"onUpdate:modelValue":e[1]||(e[1]=s=>u.category_id=s)},{default:o(()=>[l(I,null,{default:o(()=>e[19]||(e[19]=[r("Select Category")])),_:1}),(d(!0),f(q,null,M(z.value,s=>(d(),g(C,{key:s.id,value:s.id},{default:o(()=>[r(n(s.category_name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),i(x).category_id.$error?(d(),g(b,{key:0},{default:o(()=>[r(n(i(x).category_id.$errors[0].$message),1)]),_:1})):c("",!0),l(m,{class:"font-semibold"},{default:o(()=>e[20]||(e[20]=[r("Product Name:")])),_:1}),l(S,{modelValue:u.product_name,"onUpdate:modelValue":e[2]||(e[2]=s=>u.product_name=s),placeholder:"Ex. Sibuyas"},null,8,["modelValue"]),i(x).product_name.$error?(d(),g(b,{key:1},{default:o(()=>[r(n(i(x).product_name.$errors[0].$message),1)]),_:1})):c("",!0),l(m,{class:"font-semibold"},{default:o(()=>e[21]||(e[21]=[r("Description:")])),_:1}),G(t("textarea",{"onUpdate:modelValue":e[3]||(e[3]=s=>u.description=s),class:"rounded-lg text-sm border-gray-500 shadow-md p-3 w-full h-28 resize-none",placeholder:"Type the description"},null,512),[[Q,u.description]]),i(x).description.$error?(d(),g(b,{key:2},{default:o(()=>[r(n(i(x).description.$errors[0].$message),1)]),_:1})):c("",!0),t("div",Te,[t("div",Ne,[l(m,{class:"text-sm font-semibold"},{default:o(()=>e[22]||(e[22]=[r("Price:")])),_:1}),t("div",Ae,[t("span",Be,[l(i($),{icon:"fa6-solid:peso-sign",width:"16",height:"16",style:{color:"#000"}})]),l(S,{modelValue:u.price,"onUpdate:modelValue":e[4]||(e[4]=s=>u.price=s),class:"pl-8 border border-gray-400 rounded-md w-full text-center focus:outline-none focus:ring-1 focus:ring-teal-500",onInput:L},null,8,["modelValue"])]),i(x).price.$error?(d(),g(b,{key:0},{default:o(()=>[r(n(i(x).price.$errors[0].$message),1)]),_:1})):c("",!0)]),t("div",Fe,[l(m,{class:"text-sm font-semibold"},{default:o(()=>e[23]||(e[23]=[r("Stocks:")])),_:1}),l(S,{modelValue:u.stocks,"onUpdate:modelValue":e[5]||(e[5]=s=>u.stocks=s),class:"border border-gray-400 rounded-md w-full text-center focus:outline-none focus:ring-1 focus:ring-teal-500",onInput:L},null,8,["modelValue"]),i(x).stocks.$error?(d(),g(b,{key:0},{default:o(()=>[r(n(i(x).stocks.$errors[0].$message),1)]),_:1})):c("",!0)]),t("div",Ee,[l(m,{class:"text-sm font-semibold"},{default:o(()=>e[24]||(e[24]=[r("Unit:")])),_:1}),l(R,{modelValue:u.unit,"onUpdate:modelValue":e[6]||(e[6]=s=>u.unit=s)},{default:o(()=>[l(I,null,{default:o(()=>e[25]||(e[25]=[r("Select type")])),_:1}),l(C,{value:"kg"},{default:o(()=>e[26]||(e[26]=[r("kg")])),_:1}),l(C,{value:"net"},{default:o(()=>e[27]||(e[27]=[r("net")])),_:1}),l(C,{value:"box"},{default:o(()=>e[28]||(e[28]=[r("box")])),_:1})]),_:1},8,["modelValue"]),i(x).unit.$error?(d(),g(b,{key:0},{default:o(()=>[r(n(i(x).unit.$errors[0].$message),1)]),_:1})):c("",!0)])])]),t("div",Oe,[l(m,{class:"text-lg font-semibold"},{default:o(()=>e[29]||(e[29]=[r("Product Image")])),_:1}),l(m,{class:"font-semibold"},{default:o(()=>e[30]||(e[30]=[r("Main Image")])),_:1}),t("div",ze,[V.value?(d(),f("img",{key:1,src:V.value,class:"h-full w-full object-cover rounded-md"},null,8,He)):(d(),f("span",Ye,"Upload Main Image")),t("input",{type:"file",accept:"image/*",class:"absolute inset-0 opacity-0 cursor-pointer",onChange:le},null,32)]),i(x).product_img.$error?(d(),g(b,{key:0},{default:o(()=>[r(n(i(x).product_img.$errors[0].$message),1)]),_:1})):c("",!0),l(m,{class:"font-semibold"},{default:o(()=>e[31]||(e[31]=[r("Thumbnails")])),_:1}),t("div",Je,[(d(!0),f(q,null,M(j.value,(s,w)=>(d(),f("div",{key:w,class:"h-20 border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md relative"},[t("img",{src:s,class:"h-full w-full object-cover rounded-md"},null,8,Ke)]))),128)),u.product_img.length<4?(d(),f("div",Ge,[e[32]||(e[32]=t("span",{class:"text-gray-400"},"+",-1)),t("input",{type:"file",accept:"image/*",class:"absolute inset-0 opacity-0 cursor-pointer",onChange:re},null,32)])):c("",!0)]),i(x).product_img.$error?(d(),g(b,{key:1},{default:o(()=>[r(n(i(x).product_img.$errors[0].$message),1)]),_:1})):c("",!0),t("div",Qe,[l(i($),{icon:"cuida:alert-outline",width:"24",height:"24",style:{color:"#ec0404"}}),e[33]||(e[33]=t("p",null,"You need at least 3 images. Pay attention to the quality of the pictures you add.",-1))]),l(m,{class:"font-bold"},{default:o(()=>e[34]||(e[34]=[r("Visibility")])),_:1}),t("div",We,[(d(),f(q,null,M(["Published","Schedule"],s=>l(W,{key:s,name:"visibility",label:s,value:s,modelValue:u.visibility,"onUpdate:modelValue":e[7]||(e[7]=w=>u.visibility=w),class:"text-xs"},null,8,["label","value","modelValue"])),64))]),i(x).visibility.$error?(d(),g(b,{key:2},{default:o(()=>[r(n(i(x).visibility.$errors[0].$message),1)]),_:1})):c("",!0)])]),t("div",{class:"mt-6 flex justify-end space-x-2 text-xs"},[e[35]||(e[35]=t("button",{type:"submit",class:"px-2 py-2 bg-white border-2 rounded-md hover:bg-gray-400"}," Save as Draft ",-1)),t("button",{onClick:oe,class:"px-6 py-2 bg-[#007C80] text-white rounded-md hover:bg-gray-400"}," Publish ")])])])):c("",!0),A.value?(d(),f("div",Xe,[t("div",Ze,[t("div",et,[l(m,{class:"font-bold text-2xl"},{default:o(()=>e[36]||(e[36]=[r("Update Product")])),_:1}),t("button",{class:"text-gray-500 hover:text-gray-700",onClick:H},[l(i($),{icon:"fontisto:close",width:"1.2rem",height:"1.2rem",style:{color:"#5D5F5D"}})])]),t("div",tt,[t("div",st,[l(m,{class:"font-semibold"},{default:o(()=>e[37]||(e[37]=[r("Product Type:")])),_:1}),l(R,{modelValue:a.category_id,"onUpdate:modelValue":e[8]||(e[8]=s=>a.category_id=s)},{default:o(()=>[l(I,null,{default:o(()=>e[38]||(e[38]=[r("Select Category")])),_:1}),(d(!0),f(q,null,M(z.value,s=>(d(),g(C,{key:s.id,value:s.id},{default:o(()=>[r(n(s.category_name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),i(y).category_id.$error?(d(),g(b,{key:0},{default:o(()=>[r(n(i(y).category_id.$errors[0].$message),1)]),_:1})):c("",!0),l(m,{class:"font-semibold"},{default:o(()=>e[39]||(e[39]=[r("Product Name:")])),_:1}),l(S,{modelValue:a.product_name,"onUpdate:modelValue":e[9]||(e[9]=s=>a.product_name=s),placeholder:"Ex. Sibuyas"},null,8,["modelValue"]),i(y).product_name.$error?(d(),g(b,{key:1},{default:o(()=>[r(n(i(y).product_name.$errors[0].$message),1)]),_:1})):c("",!0),l(m,{class:"font-semibold"},{default:o(()=>e[40]||(e[40]=[r("Description:")])),_:1}),G(t("textarea",{"onUpdate:modelValue":e[10]||(e[10]=s=>a.description=s),class:"rounded-lg text-sm border-gray-500 shadow-md p-3 w-full h-28 resize-none",placeholder:"Type the description"},null,512),[[Q,a.description]]),i(y).description.$error?(d(),g(b,{key:2},{default:o(()=>[r(n(i(y).description.$errors[0].$message),1)]),_:1})):c("",!0),t("div",ot,[t("div",lt,[l(m,{class:"text-sm font-semibold"},{default:o(()=>e[41]||(e[41]=[r("Price:")])),_:1}),t("div",rt,[t("span",it,[l(i($),{icon:"fa6-solid:peso-sign",width:"16",height:"16",style:{color:"#000"}})]),l(S,{modelValue:a.price,"onUpdate:modelValue":e[11]||(e[11]=s=>a.price=s),class:"pl-8 border border-gray-400 rounded-md w-full text-center focus:outline-none focus:ring-1 focus:ring-teal-500",onInput:L},null,8,["modelValue"])]),i(y).price.$error?(d(),g(b,{key:0},{default:o(()=>[r(n(i(y).price.$errors[0].$message),1)]),_:1})):c("",!0)]),t("div",dt,[l(m,{class:"text-sm font-semibold"},{default:o(()=>e[42]||(e[42]=[r("Stocks:")])),_:1}),l(S,{modelValue:a.stocks,"onUpdate:modelValue":e[12]||(e[12]=s=>a.stocks=s),class:"border border-gray-400 rounded-md w-full text-center focus:outline-none focus:ring-1 focus:ring-teal-500",onInput:L},null,8,["modelValue"]),i(y).stocks.$error?(d(),g(b,{key:0},{default:o(()=>[r(n(i(y).stocks.$errors[0].$message),1)]),_:1})):c("",!0)]),t("div",at,[l(m,{class:"text-sm font-semibold"},{default:o(()=>e[43]||(e[43]=[r("Unit:")])),_:1}),l(R,{modelValue:a.unit,"onUpdate:modelValue":e[13]||(e[13]=s=>a.unit=s)},{default:o(()=>[l(I,null,{default:o(()=>e[44]||(e[44]=[r("Select type")])),_:1}),l(C,{value:"kg"},{default:o(()=>e[45]||(e[45]=[r("kg")])),_:1}),l(C,{value:"net"},{default:o(()=>e[46]||(e[46]=[r("net")])),_:1}),l(C,{value:"box"},{default:o(()=>e[47]||(e[47]=[r("box")])),_:1})]),_:1},8,["modelValue"]),i(y).unit.$error?(d(),g(b,{key:0},{default:o(()=>[r(n(i(y).unit.$errors[0].$message),1)]),_:1})):c("",!0)])])]),t("div",ut,[l(m,{class:"text-lg font-semibold"},{default:o(()=>e[48]||(e[48]=[r("Product Image")])),_:1}),l(m,{class:"font-semibold"},{default:o(()=>e[49]||(e[49]=[r("Main Image")])),_:1}),t("div",nt,[V.value?(d(),f("img",{key:1,src:V.value,class:"h-full w-full object-cover rounded-md"},null,8,pt)):(d(),f("span",ct,"Upload Main Image")),t("input",{type:"file",accept:"image/*",class:"absolute inset-0 opacity-0 cursor-pointer",onChange:de},null,32)]),i(y).product_img.$error?(d(),g(b,{key:0},{default:o(()=>[r(n(i(y).product_img.$errors[0].$message),1)]),_:1})):c("",!0),l(m,{class:"font-semibold"},{default:o(()=>e[50]||(e[50]=[r("Thumbnails")])),_:1}),t("div",mt,[(d(!0),f(q,null,M(j.value,(s,w)=>(d(),f("div",{key:w,class:"h-20 border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md relative"},[t("img",{src:s,class:"h-full w-full object-cover rounded-md"},null,8,ft)]))),128)),a.product_img.length<4?(d(),f("div",gt,[e[51]||(e[51]=t("span",{class:"text-gray-400"},"+",-1)),t("input",{type:"file",accept:"image/*",class:"absolute inset-0 opacity-0 cursor-pointer",onChange:ae},null,32)])):c("",!0)]),i(y).product_img.$error?(d(),g(b,{key:1},{default:o(()=>[r(n(i(y).product_img.$errors[0].$message),1)]),_:1})):c("",!0),t("div",xt,[l(i($),{icon:"cuida:alert-outline",width:"24",height:"24",style:{color:"#ec0404"}}),e[52]||(e[52]=t("p",null,"You need at least 3 images. Pay attention to the quality of the pictures you add.",-1))]),l(m,{class:"font-bold"},{default:o(()=>e[53]||(e[53]=[r("Visibility")])),_:1}),t("div",yt,[(d(),f(q,null,M(["Published","Schedule"],s=>l(W,{key:s,name:"visibility",label:s,value:s,modelValue:a.visibility,"onUpdate:modelValue":e[14]||(e[14]=w=>a.visibility=w),class:"text-xs"},null,8,["label","value","modelValue"])),64))]),i(y).visibility.$error?(d(),g(b,{key:2},{default:o(()=>[r(n(i(y).visibility.$errors[0].$message),1)]),_:1})):c("",!0)])]),t("div",{class:"mt-6 flex justify-end space-x-2 text-xs"},[e[54]||(e[54]=t("button",{type:"submit",class:"px-2 py-2 bg-white border-2 rounded-md hover:bg-gray-400"}," Save as Draft ",-1)),t("button",{onClick:ne,class:"px-6 py-2 bg-[#007C80] text-white rounded-md hover:bg-gray-400"}," Update ")])])])):c("",!0),t("div",null,[B.value?(d(),f("div",bt,[t("div",vt,[t("div",_t,[l(i($),{icon:"material-symbols:delete-outline",width:"50",height:"50",style:{color:"#ff0000"}})]),e[55]||(e[55]=t("p",{class:"text-sm text-gray-600 mt-4"},"Are you sure you want to delete this item? This action cannot be undone",-1)),t("div",{class:"flex gap-2 mt-4"},[t("button",{class:"bg-[#608C54] text-white px-14 py-2 rounded hover:bg-gray-400",onClick:J}," Cancel "),t("button",{class:"bg-red-500 text-white px-14 py-2 rounded hover:bg-red-600",onClick:pe}," Delete ")])])])):c("",!0)]),t("div",ht,[t("div",wt,[t("table",kt,[e[56]||(e[56]=t("thead",{class:"bg-gray-200 text-xs sm:text-sm"},[t("tr",null,[t("th",{class:"px-2 sm:px-4 py-2 sm:py-3 text-left"},"Product"),t("th",{class:"px-2 sm:px-4 py-2 sm:py-3 text-left"},"Description"),t("th",{class:"px-2 sm:px-4 py-2 sm:py-3 text-left"},"Stocks"),t("th",{class:"px-2 sm:px-4 py-2 sm:py-3 text-left"},"Price"),t("th",{class:"px-2 sm:px-4 py-2 sm:py-3 text-end"},"Action")])],-1)),t("tbody",null,[(d(!0),f(q,null,M(O.value,s=>(d(),f("tr",{key:s.id,class:"border-b hover:bg-gray-100 2xl:text-sm 2xs:text-xs"},[t("td",$t,[t("img",{src:s.product_img[0],class:"w-10 h-10 sm:w-12 sm:h-12"},null,8,Pt),t("span",Vt,n(s.product_name),1)]),t("td",Ut,n(s.description),1),t("td",qt,n(s.stocks)+" "+n(s.unit),1),t("td",Ct,"₱"+n(s.price),1),t("td",Mt,[t("button",{class:"text-blue-500 hover:text-blue-700",onClick:w=>ie(s.id)},[l(i($),{icon:"lucide:pencil-line",width:"1rem",height:"1rem",class:"sm:w-5 sm:h-5"})],8,Dt),t("button",{class:"text-red-500 hover:text-red-700",onClick:w=>ce(s.id)},[l(i($),{icon:"octicon:trash-24",width:"1rem",height:"1rem",class:"sm:w-5 sm:h-5"})],8,jt)])]))),128))])])])])]),t("div",St,[t("button",{type:"button",class:"py-2 px-4 bg-gray-100 rounded-tl-lg rounded-bl-lg hover:bg-gray-200 text-gray-600",onClick:fe,disabled:P.value===1},"Prev",8,Lt),t("span",It,n(P.value)+" of "+n(T.value),1),t("button",{type:"button",class:"py-2 px-4 bg-gray-100 rounded-tr-lg rounded-br-lg hover:bg-gray-200 text-gray-600",onClick:ge,disabled:P.value===T.value},"Next",8,Rt)])])])],64))}};export{Kt as default};

import{r as u,c as r,a as t,b as l,u as x,e as s,w as n,F as k,g as B,p as C,m as N,v as V,h as F,i as D,o as f,I as y}from"./index-B8R3md61.js";import{_ as T}from"./SignUp_Navbar-wzy4DCPZ.js";import{B as a}from"./BaseLabel-B_QUgRxg.js";import{_ as g}from"./BaseInputField-CueDg02B.js";import{B as v}from"./BaseOptionDefaultField-ChIC6DxL.js";import{_ as w,a as o}from"./BaseSelectField-0xnRKzRz.js";import{_ as $}from"./BaseRadioButton-DCnifag3.js";const P={class:"flex items-center justify-end space-x-3 p-2 2xl:text-sm 2xs:text-xs"},S={class:"p-5 w-full md:w-1/2"},U={class:"border-2 border-gray-300 rounded-lg bg-white p-8 shadow-lg"},Y={class:"space-y-3 2xl:text-sm 2xs:text-xs"},L={class:"flex space-x-4"},j={key:0,class:"mt-4"},A={class:"flex space-y-4 gap-3"},E={class:"flex items-center gap-2 mt-5"},K={__name:"Page_6",setup(O){F(),D();const i=u(null),m=u(null),p=u(!1);function b(_){}function c(){m.value.click()}return(_,e)=>(f(),r("div",null,[t(T),l("div",P,[t(x(y),{icon:"cuida:alert-outline",width:"2rem",height:"2rem",style:{color:"black"}}),e[2]||(e[2]=l("p",null,[s("Please ensure your business type selection is correct. "),l("br"),l("span",{class:"text-[#FF0000]"},"An incorrect selection may affect the status of your account")],-1))]),l("div",S,[l("div",U,[t(a,{class:"text-2xl font-bold"},{default:n(()=>e[3]||(e[3]=[s("Business information")])),_:1}),l("div",null,[t(a,null,{default:n(()=>e[4]||(e[4]=[s("Your Business name")])),_:1}),t(g,{placeholder:"Enter Your Business Name"}),t(a,null,{default:n(()=>e[5]||(e[5]=[s("Business type")])),_:1}),t(w,null,{default:n(()=>[t(v,{class:"w-1/2"},{default:n(()=>e[6]||(e[6]=[s("Select an entity type")])),_:1}),t(o,null,{default:n(()=>e[7]||(e[7]=[s("dadawdawd")])),_:1}),t(o,null,{default:n(()=>e[8]||(e[8]=[s("dadawdawd")])),_:1}),t(o,null,{default:n(()=>e[9]||(e[9]=[s("dadawdawd")])),_:1})]),_:1}),t(a,null,{default:n(()=>e[10]||(e[10]=[s("Business location")])),_:1}),t(w,null,{default:n(()=>[t(v,null,{default:n(()=>e[11]||(e[11]=[s("Select a Location")])),_:1}),t(o,null,{default:n(()=>e[12]||(e[12]=[s("dadawdawd")])),_:1}),t(o,null,{default:n(()=>e[13]||(e[13]=[s("dadawdawd")])),_:1}),t(o,null,{default:n(()=>e[14]||(e[14]=[s("dadawdawd")])),_:1})]),_:1}),l("div",null,[t(a,null,{default:n(()=>e[15]||(e[15]=[s("Do you have Tin-ID?")])),_:1}),l("div",Y,[l("div",L,[(f(),r(k,null,B(["Yes","No"],d=>t($,{key:d,name:"tinIdOption",label:d,value:d,modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=I=>i.value=I)},null,8,["label","value","modelValue"])),64))]),i.value==="Yes"?(f(),r("div",j,[t(a,null,{default:n(()=>e[16]||(e[16]=[s("Taxpayer Identification Number (TIN)")])),_:1}),t(g,{placeholder:"TIN-ID Number"}),l("div",A,[t(a,null,{default:n(()=>e[17]||(e[17]=[s("Certificate of Registration")])),_:1}),l("button",{onClick:c,class:"bg-gray-200 p-2 2xl:w-40 2xs:w-20 flex items-center justify-center gap-2 rounded-full text-center text-xs"},[t(x(y),{icon:"material-symbols:upload-file-sharp",width:"1.2rem",height:"1.2rem",style:{color:"black"}}),e[18]||(e[18]=s(" Upload "))]),l("input",{type:"file",ref_key:"fileInput",ref:m,onChange:b,class:"hidden"},null,544)])])):C("",!0),l("div",E,[N(l("input",{type:"checkbox","onUpdate:modelValue":e[1]||(e[1]=d=>p.value=d),class:"h-4 w-4 border border-gray-300 rounded-sm"},null,512),[[V,p.value]]),e[19]||(e[19]=l("p",{class:"text-gray-600 text-xs items-center"},"I confirm my business location and type are correct, and I understand that this information cannot be changed later. By clicking “Agree and Continue,” you consent to the collection and use of your personal information as outlined in this Privacy Policy.",-1))]),e[20]||(e[20]=l("div",{class:"mt-3 text-center"},[l("a",{href:"/page7",class:"2xl:px-32 2xs:px-20 md:px-16 py-2 bg-[#608C54] text-white 2xl:text-sm 2xs:text-xs rounded-md hover:bg-gray-400 transition"}," Continue ")],-1))])])])])])]))}};export{K as default};
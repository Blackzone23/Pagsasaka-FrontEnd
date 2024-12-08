import{B as C}from"./BaseLabel-OpQYIxLX.js";import{_ as k}from"./Footer-DPexPDYo.js";import{_ as P}from"./Market_NavBar-xq0FQycD.js";import{r as c,l as m,c as o,a,b as e,w as S,u as f,t as s,F as x,g as G,d as j,j as h,m as y,o as i,e as q,I as g}from"./index-Cp1gMUic.js";import{_ as d}from"./BaseInputField-DNkNney0.js";const D={class:"h-screen"},B={class:"p-5"},F={class:"flex items-center space-x-4 border-2 border-[#608C54] py-5 p-2 rounded-md shadow-md"},N={class:"mt-10 min-h-screen mx-auto p-6 bg-white shadow-md border-2 border-[#608C54] rounded-lg"},V={class:"flex justify-between items-center mb-4 border-b pb-2"},$={class:"flex items-center space-x-2"},O={class:"overflow-y-auto h-96 border rounded-md p-4"},I={class:"flex space-x-4"},K=["src","alt"],L={class:"font-semibold"},z={class:"text-sm text-gray-500"},A={class:"flex space-x-20 items-center"},E={class:"border-t grid grid-cols-3 gap-6 mb-6 mt-3"},T={class:"col-span-2 pt-5"},U={class:"flex space-x-4"},M={class:"mt-4 space-y-4"},Q={key:0,class:"space-y-3"},H={key:1,class:"space-y-3"},J={class:"border-t pt-4 mb-6"},R={class:"flex justify-between text-sm mb-2"},W={class:"flex justify-between text-sm mb-2"},X={class:"flex justify-between text-lg font-bold"},ae={__name:"Checkout",setup(Y){const r=c({name:"Norman Cruz",contact:"(+63) 9143 143 6196",address:"Los Angeles City Pampanga, blk 143 lot 619"}),u=c([{name:"Salad package",variant:"500 Grams",image:"https://via.placeholder.com/100",unitPrice:390,quantity:2},{name:"Fruit basket",variant:"1 KG",image:"https://via.placeholder.com/100",unitPrice:520,quantity:1},{name:"Fruit basket",variant:"1 KG",image:"https://via.placeholder.com/100",unitPrice:520,quantity:1},{name:"Fruit basket",variant:"1 KG",image:"https://via.placeholder.com/100",unitPrice:520,quantity:1}]),n=c(!1),p=m(()=>u.value.reduce((v,t)=>v+t.unitPrice*t.quantity,0)),b=m(()=>u.value.length*50),_=m(()=>p.value+b.value);return(v,t)=>(i(),o(x,null,[a(P),e("div",D,[e("div",B,[a(C,{class:"text-3xl font-bold"},{default:S(()=>t[2]||(t[2]=[q("Check out")])),_:1}),e("div",F,[a(f(g),{icon:"lsicon:location-outline",width:"24",height:"24",style:{color:"#276d22"}}),t[3]||(t[3]=e("p",{class:"ml-2"},"Delivery address",-1)),e("p",null,s(r.value.name),1),e("p",null,s(r.value.contact),1),e("p",null,s(r.value.address),1)]),e("div",N,[e("div",V,[e("div",$,[a(f(g),{icon:"streamline:store-1",width:"28",height:"28",style:{color:"#276d22"}}),t[4]||(t[4]=e("h2",{class:"text-xl font-bold"},"Product ordered",-1))]),t[5]||(t[5]=e("div",{class:"flex space-x-4 text-gray-600 text-sm"},[e("p",null,"Unit price"),e("p",null,"Quantity"),e("p",null,"Item subtotal")],-1))]),e("div",O,[(i(!0),o(x,null,G(u.value,(l,w)=>(i(),o("div",{key:w,class:"flex items-center justify-between mb-6"},[e("div",I,[e("img",{src:l.image,alt:l.name,class:"w-24 h-24 rounded-md object-cover"},null,8,K),e("div",null,[e("h3",L,s(l.name),1),e("p",z,"Variants: "+s(l.variant),1)])]),e("div",A,[e("p",null,"₱"+s(l.unitPrice),1),e("p",null,s(l.quantity),1),e("p",null,"₱"+s(l.unitPrice*l.quantity),1)])]))),128))]),e("div",E,[t[7]||(t[7]=j('<div class="col-span-1 pt-5"><h3 class="font-semibold mb-2">Billing address</h3><div class="space-y-2"><label class="flex items-center space-x-2"><input type="radio" name="billing" class="form-radio"><span>Same as shipping address</span></label><label class="flex items-center space-x-2"><input type="radio" name="billing" class="form-radio"><span>Use a different billing address</span></label></div></div>',1)),e("div",T,[t[6]||(t[6]=e("h3",{class:"font-semibold mb-2"},"Payment method",-1)),e("div",U,[e("button",{onClick:t[0]||(t[0]=l=>n.value="GCash"),class:h(["px-4 py-2 border rounded-md focus:outline-none",n.value==="GCash"?"bg-[#608C54] text-white":"bg-white text-black"])}," GCash ",2),e("button",{onClick:t[1]||(t[1]=l=>n.value="COD"),class:h(["px-4 py-2 border rounded-md focus:outline-none",n.value==="COD"?"bg-[#608C54] text-white":"bg-white text-black"])}," COD ",2)]),e("div",M,[n.value==="GCash"?(i(),o("div",Q,[a(d,{type:"text",placeholder:"Phone number",class:"w-full px-4 py-2 border rounded-md focus:outline-none"}),a(d,{type:"text",placeholder:"Account name",class:"w-full px-4 py-2 border rounded-md focus:outline-none"}),a(d,{type:"email",placeholder:"Email",class:"w-full px-4 py-2 border rounded-md focus:outline-none"})])):y("",!0),n.value==="COD"?(i(),o("div",H,[a(d,{type:"text",placeholder:"Full name",class:"w-full px-4 py-2 border rounded-md focus:outline-none"}),a(d,{type:"text",placeholder:"Delivery instructions",class:"w-full px-4 py-2 border rounded-md focus:outline-none"})])):y("",!0)])])]),e("div",J,[e("div",R,[t[8]||(t[8]=e("span",null,"Merchandise Subtotal",-1)),e("span",null,"₱"+s(p.value),1)]),e("div",W,[t[9]||(t[9]=e("span",null,"Shipping Subtotal",-1)),e("span",null,"₱"+s(b.value),1)]),e("div",X,[t[10]||(t[10]=e("span",null,"Total Payment",-1)),e("span",null,"₱"+s(_.value),1)])]),t[11]||(t[11]=e("div",{class:"text-right"},[e("button",{class:"bg-[#608C54] text-white px-6 py-2 rounded-md hover:bg-gray-300"}," Place order ")],-1))])]),a(k)])],64))}};export{ae as default};

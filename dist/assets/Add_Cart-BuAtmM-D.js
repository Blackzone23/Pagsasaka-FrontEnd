import{_}from"./BaseCheckBox-DRwj7cwq.js";import{_ as V}from"./Market_NavBar-BNp-m_Ck.js";import{_ as F}from"./Footer-C2ILfAWa.js";import{_ as S}from"./BaseInputField-CueDg02B.js";import{_ as q,r as g,k as i,c as d,a as r,b as e,e as w,u as P,t as o,F as v,g as U,o as u,I as A}from"./index-B8R3md61.js";import"./Toast-aYdHTg1b.js";import"./BaseSearchField-De3t1fZB.js";import"./lodash-Cl9ZtcbN.js";const $={class:"p-6 w-full h-full"},T={class:"flex justify-between items-center mb-4"},B={class:"text-lg font-bold text-[#608C54] flex items-center"},D={class:"grid grid-cols-7 gap-4 items-center bg-gray-100 p-3 text-sm font-medium border-t border-b border-gray-300"},N={class:"col-span-1 text-green-600"},z={class:"col-span-1 text-green-600"},I={class:"flex items-center col-span-1"},j=["src"],E={class:"col-span-3 flex flex-col"},G={class:"font-semibold"},J={class:"text-gray-500 text-sm"},Q={class:"col-span-1 items-center"},L={class:"col-span-1 items-center"},O={class:"col-span-1 items-center"},R={class:"flex items-center text-sm text-white space-x-2"},H=["onClick"],K=["onClick"],M={class:"mt-2 font-semibold"},W={class:"col-span-1 text-center space-x-3"},X=["onClick"],Y={class:"flex justify-between items-center p-4 border-t border-gray-300 mt-4"},Z={class:"flex items-center space-x-4"},ee={class:"text-right space-y-1"},te={class:"font-bold"},se={__name:"Add_Cart",setup(le){const a=g([{id:1,seller:"Janromil Dela Cruz",buyer:"NormanCruz123",product:{name:"Salad package",variant:"500 Grams",unitPrice:390,shippingFee:20,quantity:2},image:"https://via.placeholder.com/100",selected:!1},{id:2,seller:"Janromil Dela Cruz",buyer:"NormanCruz123",product:{name:"Fruit Basket",variant:"1 kg",unitPrice:450,shippingFee:30,quantity:1},image:"https://via.placeholder.com/100",selected:!1}]),c=g(!1);function x(){a.value.forEach(s=>{s.selected=c.value})}function b(s){return(s.product.quantity*s.product.unitPrice+s.product.shippingFee).toFixed(2)}function y(s){const t=a.value.find(l=>l.id===s);t&&t.product.quantity++}function h(s){const t=a.value.find(l=>l.id===s);t&&t.product.quantity>1&&t.product.quantity--}function C(s){a.value=a.value.filter(t=>t.id!==s)}const p=i(()=>a.value.filter(s=>s.selected).reduce((s,t)=>s+t.product.unitPrice*t.product.quantity,0)),m=i(()=>a.value.filter(s=>s.selected).reduce((s,t)=>s+t.product.shippingFee,0)),k=i(()=>p.value+m.value),f=i(()=>a.value.filter(s=>s.selected).length);return(s,t)=>(u(),d(v,null,[r(V),e("div",$,[e("div",T,[e("h2",B,[t[1]||(t[1]=w(" Add to cart ")),t[2]||(t[2]=e("span",{class:"ml-2 w-24 border-dotted border-b-2 border-[#608C54]"},null,-1)),r(P(A),{icon:"bitcoin-icons:cart-filled",width:"24",height:"24",style:{color:"#608C54"}})])]),e("div",D,[t[3]||(t[3]=e("p",{class:"col-span-1"},"Seller",-1)),e("p",N,o(s.seller),1),t[4]||(t[4]=e("p",{class:"col-span-1"},"Buyer",-1)),e("p",z,o(s.buyer),1),t[5]||(t[5]=e("p",{class:"col-span-1 text-gray-500"},"Unit Price",-1)),t[6]||(t[6]=e("p",{class:"col-span-1 text-gray-500"},"Shipping fee",-1)),t[7]||(t[7]=e("p",{class:"col-span-1 text-gray-500"},"Actions",-1))]),(u(!0),d(v,null,U(a.value,l=>(u(),d("div",{key:l.id,class:"grid grid-cols-7 gap-4 items-center p-4 border-b border-gray-300"},[e("div",I,[r(_,{modelValue:l.selected,"onUpdate:modelValue":n=>l.selected=n},null,8,["modelValue","onUpdate:modelValue"]),e("img",{src:l.image,alt:"Product",class:"w-16 h-16 rounded-lg ml-4"},null,8,j)]),e("div",E,[e("h3",G,o(l.product.name),1),e("p",J,"Variants: "+o(l.product.variant),1)]),e("div",Q,[e("p",null,"₱"+o(l.product.unitPrice),1)]),e("div",L,[e("p",null,"₱"+o(l.product.shippingFee),1)]),e("div",O,[e("div",R,[e("button",{onClick:n=>h(l.id),class:"px-3 py-1 bg-[#608C54] rounded-full"},"-",8,H),r(S,{modelValue:l.product.quantity,"onUpdate:modelValue":n=>l.product.quantity=n,class:"w-12 text-center border rounded"},null,8,["modelValue","onUpdate:modelValue"]),e("button",{onClick:n=>y(l.id),class:"px-3 py-1 bg-[#608C54] rounded-full"},"+",8,K)]),e("p",M,"₱"+o(b(l)),1)]),e("div",W,[e("button",{onClick:n=>C(l.id),class:"text-red-500"},"Delete",8,X),t[8]||(t[8]=e("button",{class:"text-blue-500"},"Find Similar",-1))])]))),128)),e("div",Y,[e("div",Z,[r(_,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=l=>c.value=l),onChange:x},null,8,["modelValue"]),e("p",null,"Select All ("+o(f.value)+")",1),t[9]||(t[9]=e("button",{class:"text-red-500"},"Delete",-1)),t[10]||(t[10]=e("p",{class:"text-gray-500"},"Remove inactive products",-1))]),e("div",ee,[e("p",null,"Unit Price: ₱"+o(p.value),1),e("p",null,"Shipping Fee: ₱"+o(m.value),1),e("p",te,"Total ("+o(f.value)+" item): ₱"+o(k.value),1)])]),t[11]||(t[11]=e("div",{class:"text-end"},[e("a",{href:"/checkout",class:"bg-[#608C54] text-white px-6 py-2 rounded-lg"},"Check Out")],-1))]),r(F)],64))}},pe=q(se,[["__scopeId","data-v-6ac37573"]]);export{pe as default};
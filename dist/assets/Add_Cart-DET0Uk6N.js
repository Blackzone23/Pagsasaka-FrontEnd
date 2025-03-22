import{q as r,g as C,f as V,c as u,a as c,b as e,e as k,u as w,d as q,F as _,h as $,t as n,i as A,o as p,I as S}from"./index-BTxKm87V.js";import{_ as U}from"./Market_NavBar-Bptbrnti.js";import{_ as N}from"./Footer-Dbq3aEF2.js";import{_ as f}from"./BaseCheckBox-CE1Hk_7c.js";import{_ as P}from"./BaseInputField-0Ny3TAgW.js";import"./Toast-B1bnSa4A.js";import"./BaseSearchField-Dsgu8hgp.js";import"./lodash-BJSjjTHy.js";const T={class:"p-6 w-full h-full"},j={class:"flex justify-between items-center mb-4"},B={class:"text-lg font-bold text-[#608C54] flex items-center"},D={class:"flex items-center col-span-2"},E=["src"],L={class:"ml-4"},Q={class:"font-semibold"},F={class:"text-gray-500 text-sm"},G={class:"col-span-1 text-center"},M={class:"col-span-1 text-center"},O={class:"flex items-center justify-center text-sm text-white space-x-2"},z=["onClick"],H=["onClick"],J={class:"col-span-1 text-center"},K={class:"col-span-1 text-end space-x-3"},R=["onClick"],W={class:"flex justify-between items-center p-4 border-t border-gray-300 mt-4"},X={class:"flex items-center space-x-4"},Y={class:"text-right space-y-1"},Z={class:"font-bold"},de={__name:"Add_Cart",setup(I){const d=A(),l=r(()=>d.state.Consumer.cartItem.data);C(()=>{d.dispatch("Consumer/getCartList")});const i=V(!1);function x(){l.value.forEach(o=>{o.selected=i.value})}function g(o){const t=l.value.find(s=>s.id===o);t&&t.quantity++}function v(o){const t=l.value.find(s=>s.id===o);t&&t.quantity>1&&t.quantity--}function h(o){d.dispatch("Consumer/removeCartItem",o)}function b(){l.value.filter(t=>t.selected).map(t=>t.id).forEach(t=>d.dispatch("Consumer/removeCartItem",t))}const y=r(()=>l.value.filter(o=>o.selected).reduce((o,t)=>o+t.price*t.quantity,0)),m=r(()=>l.value.filter(o=>o.selected).length);return(o,t)=>(p(),u(_,null,[c(U),e("div",T,[e("div",j,[e("h2",B,[t[1]||(t[1]=k(" Add to cart ")),t[2]||(t[2]=e("span",{class:"ml-2 w-24 border-dotted border-b-2 border-[#608C54]"},null,-1)),c(w(S),{icon:"bitcoin-icons:cart-filled",width:"24",height:"24",style:{color:"#608C54"}})])]),t[3]||(t[3]=q('<div class="grid grid-cols-6 gap-10 items-center bg-gray-100 p-3 text-sm font-medium border-t border-b border-gray-300"><p class="col-span-2 text-gray-500">Product</p><p class="col-span-1 text-gray-500 text-center">Unit Price</p><p class="col-span-1 text-gray-500 text-center">Quantity</p><p class="col-span-1 text-gray-500 text-center">Total Price</p><p class="col-span-1 text-gray-500 text-end">Actions</p></div>',1)),(p(!0),u(_,null,$(l.value,s=>(p(),u("div",{key:s.id,class:"grid grid-cols-6 gap-4 items-center p-4 border-b border-gray-300"},[e("div",D,[c(f,{modelValue:s.selected,"onUpdate:modelValue":a=>s.selected=a,class:"mr-2"},null,8,["modelValue","onUpdate:modelValue"]),e("img",{src:s.product_img[0],alt:"Product",class:"w-16 h-16 rounded-lg"},null,8,E),e("div",L,[e("h3",Q,n(s.product_name),1),e("p",F,"Variants: "+n(s.unit),1)])]),e("div",G,[e("p",null,"₱"+n(s.price),1)]),e("div",M,[e("div",O,[e("button",{onClick:a=>v(s.id),class:"px-3 py-1 bg-[#608C54] rounded-full"},"-",8,z),c(P,{modelValue:s.quantity,"onUpdate:modelValue":a=>s.quantity=a,class:"w-13 text-center border rounded"},null,8,["modelValue","onUpdate:modelValue"]),e("button",{onClick:a=>g(s.id),class:"px-3 py-1 bg-[#608C54] rounded-full"},"+",8,H)])]),e("div",J,[e("p",null,"₱"+n(s.price*s.quantity),1)]),e("div",K,[e("button",{onClick:a=>h(s.id),class:"text-red-500"},"Delete",8,R)])]))),128)),e("div",W,[e("div",X,[c(f,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=s=>i.value=s),onChange:x},null,8,["modelValue"]),e("p",null,"Select All ("+n(m.value)+")",1),e("button",{onClick:b,class:"text-red-500"},"Delete")]),e("div",Y,[e("p",Z,"Total ("+n(m.value)+" items): ₱"+n(y.value),1)])]),t[4]||(t[4]=e("div",{class:"text-end"},[e("a",{href:"/checkout",class:"bg-[#608C54] text-white px-6 py-2 rounded-lg"},"Check Out")],-1))]),c(N)],64))}};export{de as default};

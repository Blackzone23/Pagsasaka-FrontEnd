import{_ as P}from"./Market_NavBar-C-FsvrBr.js";import{M as b}from"./MVegetable-CvJb8BiA.js";import{B as v}from"./BaseLabel-DL7XHgkI.js";import{B as R}from"./BaseOptionDefaultField-C3eRZK7J.js";import{_ as D,a as f}from"./BaseSelectField-C8uaAccZ.js";import{_ as F}from"./Footer-1sak0tyD.js";import{k as y,r as w,l as $,c as _,a as e,b as s,u as o,w as d,t as a,e as n,d as x,j as A,F as N,g as j,o as k,I as i}from"./index-B2mT2DWT.js";import"./Logo-C9hB9-jB.js";const E={class:"p-5"},O={class:"flex h-full w-full border-2 border-gray-300 p-5 rounded-md"},T={class:"w-1/2 flex justify-center mt-12"},V=["src"],I={class:"w-1/2 items-center mt-5"},L={class:"flex items-center mt-2"},Q={class:"mt-2 text-xs"},z={class:"flex items-center"},q={class:"space-y-3 mt-1"},W={class:"flex space-x-4 text-lg"},G={class:"font-semibold"},H={class:"flex space-x-4 text-lg"},J={class:"font-semibold"},U={class:"flex space-x-4 text-lg"},K={class:"font-semibold"},Y={class:"flex space-x-4 text-lg"},X={class:"font-semibold"},Z={class:"flex items-center space-x-4 mt-2"},ss={class:"flex items-center border border-gray-300 rounded-full p-1"},ts={class:"font-bold mx-4"},es={class:"p-4"},os={class:"h-full p-5 flex items-center border-2 border-gray-300 space-x-3 w-full rounded-md"},as={class:"flex items-center space-x-3"},is=["src"],ls={class:"flex flex-col text-md text-gray-600"},ns={class:"text-xs"},ds={class:"mt-3 flex space-x-2"},rs={class:"flex gap-1 px-4 py-2 bg-[#608C54] text-white text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors"},cs={href:"/shop",class:"flex gap-1 px-4 py-2 bg-white text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors border border-gray-300"},ps={class:"p-4"},us={class:"h-full w-full flex border-2 border-gray-300 p-2 rounded-md"},ms={class:"space-y-4 flex-1"},fs={class:"flex items-center gap-4"},xs=["src"],hs={class:"w-[600px]"},gs={class:"font-bold"},bs={class:"text-sm text-gray-500"},vs={class:"ml-auto flex items-center space-x-1"},ys={class:"text-gray-500 hover:text-gray-800"},ws={class:"text-gray-500 hover:text-gray-800"},_s={class:"mt-2 text-gray-700"},ks={class:"w-72 ml-1"},Ns={__name:"Market_Page1",setup(Ss){const r=y({to:"New York, USA",fee:"$20.00",weight:"2kg",stock:"133"}),c=w(1);function S(){c.value<r.stock&&c.value++}function C(){c.value>1&&c.value--}const h=y({name:"Janromil Dela Cruz",lastActive:new Date(Date.now()-5*60*1e3)}),M=$(()=>{const g=new Date,t=new Date(h.lastActive),l=g-t,u=Math.floor(l/(1e3*60)),m=Math.floor(l/(1e3*60*60));return u<1?"Active now":u<60?`${u} minutes ago`:m<24?`${m} hours ago`:`${Math.floor(m/24)} days ago`}),B=[{id:1,image:"https://via.placeholder.com/50",name:"Ace Tayson",date:"24-10-2023",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{id:2,image:"https://via.placeholder.com/50",name:"Ivor Pacute",date:"24-10-2023",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{id:3,image:"https://via.placeholder.com/50",name:"Robbie14369",date:"24-10-2023",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}],p=w(!1);return(g,t)=>(k(),_("div",null,[e(P),s("div",E,[s("div",O,[s("div",T,[s("img",{src:o(b),alt:"Placeholder Image",class:"rounded-lg shadow-lg h-[400px] w-[600px]"},null,8,V)]),s("div",I,[e(v,{class:"text-4xl font-bold"},{default:d(()=>t[1]||(t[1]=[n("Salad package")])),_:1}),s("div",L,[e(o(i),{icon:"mdi:star",class:"w-6 h-6 text-yellow-400"}),e(o(i),{icon:"mdi:star",class:"w-6 h-6 text-yellow-400"}),e(o(i),{icon:"mdi:star",class:"w-6 h-6 text-yellow-400"}),e(o(i),{icon:"mdi:star",class:"w-6 h-6 text-yellow-400"}),e(o(i),{icon:"mdi:star-outline",class:"w-6 h-6 text-gray-400"}),t[2]||(t[2]=s("span",{class:"ml-2 text-xs text-black"},"(4.0)",-1))]),s("div",Q,[t[12]||(t[12]=s("p",{class:"text-lg font-semibold text-black"},"₱390",-1)),s("div",z,[t[3]||(t[3]=s("p",null,"Free & Easy Returns Enjoy Free Return",-1)),e(o(i),{icon:"fluent:book-question-mark-20-filled",width:"24",height:"24",style:{color:"black"}})]),s("div",q,[t[10]||(t[10]=s("h1",{class:"font-bold text-lg"},"Shipping",-1)),s("div",W,[t[4]||(t[4]=s("h2",null,"Shipping To:",-1)),s("span",G,a(r.to),1)]),s("div",H,[t[5]||(t[5]=s("h2",null,"Shipping Fee:",-1)),s("span",J,a(r.fee),1)]),s("div",U,[t[6]||(t[6]=s("h2",null,"Weight:",-1)),s("span",K,a(r.weight),1)]),e(v,{class:"font-poppins font-bold"},{default:d(()=>t[7]||(t[7]=[n("Min Order Quantity 1 KG")])),_:1}),s("div",Y,[t[8]||(t[8]=s("h2",null,"Stock:",-1)),s("span",X,a(r.stock),1)]),s("div",Z,[t[9]||(t[9]=s("h2",{class:"font-bold"},"Quantity:",-1)),s("div",ss,[s("button",{class:"bg-[#608C54] hover:bg-gray-300 text-white font-bold py-1 px-2 rounded-full",onClick:C},"- "),s("span",ts,a(c.value),1),s("button",{class:"bg-[#608C54] hover:bg-gray-300 text-white font-bold py-1 px-2 rounded-full",onClick:S},"+ ")])]),t[11]||(t[11]=s("div",{class:"flex space-x-16 items-center p-8 text-lg"},[s("button",{class:"bg-white text-black font-bold py-2 px-6 border border-gray-200 rounded shadow hover:shadow-lg transition-shadow duration-300"}," Add to Cart "),s("button",{class:"bg-[#608C54] text-white font-bold py-2 px-6 rounded hover:bg-[#4e7343] transition-colors duration-300"}," Buy Now ")],-1))])])])])]),s("div",es,[s("div",os,[s("div",as,[s("img",{src:o(b),alt:"Placeholder Image",class:"w-16 h-16 rounded-full border border-gray-500"},null,8,is),s("div",ls,[s("span",null,a(h.name),1),s("span",ns,a(M.value),1),s("div",ds,[s("button",rs,[e(o(i),{icon:"mdi:chat",width:"20",height:"20",style:{color:"white"}}),t[13]||(t[13]=n(" Chat Now "))]),s("a",cs,[e(o(i),{icon:"bx:store",width:"20",height:"20",style:{color:"black"}}),t[14]||(t[14]=n(" View Shop "))])])])]),t[15]||(t[15]=x('<div class="border-l border-gray-300 h-20 mx-8"></div><div class="flex-1 grid grid-cols-3 gap-4 items-center text-gray-600 text-center ml-auto"><div><h1 class="text-md font-semibold">Rating</h1><span class="text-xs">4.5</span></div><div><h1 class="text-md font-semibold">Products</h1><span class="text-xs">2</span></div><div><h1 class="text-md font-semibold">Response Rate</h1><span class="text-xs">56%</span></div><div><h1 class="text-md font-semibold">Response Time</h1><span class="text-xs">Within Hours</span></div><div><h1 class="text-md font-semibold">Joined</h1><span class="text-xs">4 months ago</span></div><div><h1 class="text-md font-semibold">Followers</h1><span class="text-xs">123</span></div></div>',2))])]),t[22]||(t[22]=x('<div class="p-5"><div class="h-full w-full space-y-10 border-2 p-5 border-gray-300 rounded-md"><h1 class="text-lg font-semibold">Product Specifications</h1><div class="flex space-x-4"><h1>Category:</h1><span>Pagsasaka&gt;Farming Supply&gt;Pagsasaka Box</span></div><div class="flex space-x-4"><h1>Stock:</h1><span>133</span></div><div class="flex space-x-4"><h1>Ships From</h1><span>Quezon City, Metro Manila</span></div><h1 class="text-lg font-semibold">Product Description</h1><p class="text-md">Our Salad Pack is not just packed with fiber and essential nutrients—it’s also incredibly quick and easy to prepare. Whether you’re a busy professional, a fitness enthusiast, or just someone looking to make healthy eating more convenient, this pack is designed to simplify your life without compromising on nutrition. <br> Perfect for anyone seeking ease in their meals, it’s versatile enough to be enjoyed in various ways. Subscribers love using it as a nutritious main salad, a light and refreshing snack, or even mixed into their breakfast smoothies for an extra kick of greens. No matter how you incorporate it into your day, it’s sure to enhance your healthy eating routine.<br> Each pack weighs 500 grams and includes a mix of 2 to 3 varieties of our freshest herb and salad greens. To add a touch of vibrance and flavor, we top it off with a sprinkling of fruit, citrus, or raw vegetables, giving you a fresh, flavorful addition to any meal. Everything in the pack is designed to be eaten raw, making meal prep not only healthy but effortless.</p></div></div>',1)),s("div",ps,[s("div",us,[t[21]||(t[21]=s("div",{class:"w-[500px] h-52 bg-white p-4 rounded-lg shadow-md mr-4 border-2 border-gray-300"},[s("h2",{class:"font-semibold"},"Total Reviews"),s("h1",{class:"text-5xl"},"5.0")],-1)),s("div",ms,[s("div",{class:A([p.value?"max-h-96 overflow-y-auto":"","space-y-4 bg-white shadow rounded p-4 border-2 border-gray-300 transition-all"])},[(k(),_(N,null,j(B,l=>s("div",{key:l.id,class:"bg-white shadow rounded p-4 border-2 border-gray-300"},[s("div",fs,[s("img",{src:l.image,alt:"",class:"w-12 h-12 rounded-full object-cover"},null,8,xs),s("div",hs,[s("h3",gs,a(l.name),1),s("p",bs,a(l.date),1)]),s("div",vs,[s("button",ys,[e(o(i),{icon:"mdi:bookmark-outline",class:"w-6 h-6"})]),s("button",ws,[e(o(i),{icon:"mdi:alert-circle-outline",class:"w-6 h-6"})])])]),s("p",_s,a(l.text),1)])),64))],2),s("button",{onClick:t[0]||(t[0]=l=>p.value=!p.value),class:"bg-[#608C54] text-white py-2 px-4 rounded shadow hover:bg-gray-600 transition mt-2"},a(p.value?"Collapse Reviews":"See More Reviews"),1)]),s("div",ks,[e(D,null,{default:d(()=>[e(R,{class:"text-center"},{default:d(()=>t[16]||(t[16]=[n("Most Relevant")])),_:1}),e(f,{class:"text-center"},{default:d(()=>t[17]||(t[17]=[n("Option 1")])),_:1}),e(f,{class:"text-center"},{default:d(()=>t[18]||(t[18]=[n("Option 2")])),_:1}),e(f,{class:"text-center"},{default:d(()=>t[19]||(t[19]=[n("Option 3")])),_:1})]),_:1}),t[20]||(t[20]=x('<div class="text-sm mt-2 space-y-2"><p class="bg-gray-200 px-3 py-1 rounded">Easy to understand</p><p class="bg-gray-200 px-3 py-1 rounded">User friendly</p><p class="bg-gray-200 px-3 py-1 rounded">Good experience</p><p class="bg-gray-200 px-3 py-1 rounded">Amazing</p></div>',1))])])]),t[23]||(t[23]=s("div",{class:"p-4"},[s("div",{class:"h-full w-full border-2 border-gray-300 p-4 rounded-md"},[s("h1",{class:"text-3xl font-bold"},"Best sellers in this month")])],-1)),e(F)]))}};export{Ns as default};

import{T as A,L as B}from"./Toast-D7cmJDno.js";import{_ as N}from"./Market_NavBar-DaeSh93o.js";import{B as V}from"./BaseLabel-CKDmy2Zk.js";import{_ as j}from"./Footer-DcTf1yaY.js";import"./lodash-B-OeRdRS.js";import{D as g,f as y,g as P,H as $,c as p,K as F,p as I,a,b as t,F as h,h as w,u as n,t as o,e as i,d as E,k as q,i as H,j as Q,o as d,w as z,I as f}from"./index-BNdDstM4.js";import"./BaseSearchField-0VazUzGS.js";const J="/assets/MVegetable-DCNAYixI.png",W={class:"p-5"},K={class:"flex flex-wrap gap-6"},O={class:"w-full md:w-1/2 flex justify-center"},U=["src"],Y={class:"w-full md:w-1/2 mt-5"},G={class:"mt-2 text-sm md:text-base"},X={class:"text-lg font-semibold text-black"},Z={class:"mt-3"},tt={class:"text-lg"},et={class:"flex items-center space-x-4 mt-3"},st={class:"flex items-center border border-gray-300 rounded-full p-1"},ot={class:"font-bold mx-4"},at={class:"flex flex-wrap gap-3 items-center mt-4"},it=["onClick"],lt={class:"p-4"},nt={class:"h-full p-5 flex flex-col md:flex-row items-center border-2 border-gray-300 rounded-md space-y-5 md:space-y-0 md:space-x-5 w-full"},dt={class:"flex flex-col md:flex-row items-center space-x-3 w-full md:w-auto"},rt=["src"],ct={class:"flex flex-col text-md text-gray-600 text-center md:text-left"},mt={class:"font-semibold"},ut={class:"text-xs"},pt={class:"mt-3 flex flex-wrap gap-2 justify-center md:justify-start"},ft={class:"flex items-center gap-1 px-4 py-2 bg-[#608C54] text-white text-sm font-medium rounded-lg hover:bg-gray-600 transition"},xt={href:"/shop",class:"flex items-center gap-1 px-4 py-2 bg-white text-sm font-medium rounded-lg hover:bg-gray-300 transition border border-gray-300"},gt={class:"p-4"},ht={class:"border-2 border-gray-300 p-4 rounded-md"},bt={class:"flex items-center gap-4"},vt=["src"],yt={class:"font-bold"},wt={class:"text-sm text-gray-500"},_t={class:"mt-2 text-gray-700"},Bt={__name:"Market_Page1",setup(kt){const r=H(),b=Q(),_=g(()=>r.state.showLoading.state),k=g(()=>r.state.Consumer.productItem.productItemInfo);function C(){r.dispatch("Consumer/getItemListInfo",sessionStorage.getItem("ItemInfo"))}const l=y(1),L=()=>{l.value++},R=()=>{l.value>1&&l.value--},S=async m=>{try{await r.dispatch("Consumer/getAddToCart",{id:m,quantity:l.value}),b.push("/cart")}catch(e){console.error("Error adding to cart:",e)}};function M(){b.push("/checkout")}P(()=>{C()});const v=$({name:"Janromil Dela Cruz",lastActive:new Date(Date.now()-5*60*1e3)}),D=g(()=>{const m=new Date,e=new Date(v.lastActive),s=m-e,u=Math.floor(s/(1e3*60)),x=Math.floor(s/(1e3*60*60));return u<1?"Active now":u<60?`${u} minutes ago`:x<24?`${x} hours ago`:`${Math.floor(x/24)} days ago`}),T=[{id:1,image:"https://via.placeholder.com/50",name:"Ace Tayson",date:"24-10-2023",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{id:2,image:"https://via.placeholder.com/50",name:"Ivor Pacute",date:"24-10-2023",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{id:3,image:"https://via.placeholder.com/50",name:"Robbie14369",date:"24-10-2023",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{id:3,image:"https://via.placeholder.com/50",name:"Robbie14369",date:"24-10-2023",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}],c=y(!1);return(m,e)=>(d(),p(h,null,[_.value?(d(),F(B,{key:0,class:"loading"})):I("",!0),a(A),t("div",null,[a(N),t("div",W,[t("div",K,[(d(!0),p(h,null,w(k.value,s=>(d(),p("div",{key:s.id,class:"flex flex-col md:flex-row w-full border-2 border-gray-300 p-5 rounded-md"},[t("div",O,[t("img",{src:s.product_img[0],alt:"Product Image",class:"rounded-lg shadow-lg w-full max-w-md h-auto md:h-[400px]"},null,8,U)]),t("div",Y,[a(V,{class:"text-2xl md:text-4xl font-bold"},{default:z(()=>[i(o(s.product_name),1)]),_:2},1024),t("div",G,[t("p",X,"₱"+o(s.price),1),e[7]||(e[7]=t("p",{class:"mt-2"},"Free & Easy Returns Enjoy Free Return",-1)),t("div",Z,[e[3]||(e[3]=t("h1",{class:"font-bold text-lg"},"Shipping",-1)),t("div",tt,[t("p",null,[e[1]||(e[1]=t("span",{class:"font-semibold"},"Stock:",-1)),i(" "+o(s.stocks),1)]),t("p",null,[e[2]||(e[2]=t("span",{class:"font-semibold"},"Unit:",-1)),i(" "+o(s.unit),1)])])]),t("div",et,[e[4]||(e[4]=t("h2",{class:"font-bold text-lg"},"Quantity:",-1)),t("div",st,[t("button",{class:"bg-[#608C54] text-white font-bold py-1 px-2 rounded-full",onClick:R}," - "),t("span",ot,o(l.value),1),t("button",{class:"bg-[#608C54] text-white font-bold py-1 px-2 rounded-full",onClick:L}," + ")])]),t("div",at,[t("button",{onClick:u=>S(s.id),class:"bg-[#608C54] text-white font-bold px-4 py-2 hover:bg-[#4e7343] rounded flex items-center gap-2"},[a(n(f),{icon:"lineicons:cart-2",width:"24",height:"24",style:{color:"#fff"}}),e[5]||(e[5]=i(" Add to Cart "))],8,it),t("button",{onClick:M,class:"bg-[#608C54] text-white font-bold py-2 px-5 rounded hover:bg-[#4e7343] flex items-center gap-2"},[a(n(f),{icon:"icon-park-twotone:buy",width:"24",height:"24",style:{color:"#fff"}}),e[6]||(e[6]=i(" Buy Now "))])])])])]))),128))])]),t("div",lt,[t("div",nt,[t("div",dt,[t("img",{src:n(J),alt:"Placeholder Image",class:"w-16 h-16 rounded-full border border-gray-500"},null,8,rt),t("div",ct,[t("span",mt,o(v.name),1),t("span",ut,o(D.value),1),t("div",pt,[t("button",ft,[a(n(f),{icon:"mdi:chat",width:"20",height:"20",style:{color:"white"}}),e[8]||(e[8]=i(" Chat Now "))]),t("a",xt,[a(n(f),{icon:"bx:store",width:"20",height:"20",style:{color:"black"}}),e[9]||(e[9]=i(" View Shop "))])])])]),e[10]||(e[10]=E('<div class="hidden md:block border-l border-gray-300 h-20"></div><div class="w-full md:flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 items-center text-gray-600 text-center"><div><h1 class="text-md font-semibold">Rating</h1><span class="text-xs">4.5</span></div><div><h1 class="text-md font-semibold">Products</h1><span class="text-xs">2</span></div><div><h1 class="text-md font-semibold">Response Rate</h1><span class="text-xs">56%</span></div><div><h1 class="text-md font-semibold">Response Time</h1><span class="text-xs">Within Hours</span></div><div><h1 class="text-md font-semibold">Joined</h1><span class="text-xs">4 months ago</span></div><div><h1 class="text-md font-semibold">Followers</h1><span class="text-xs">123</span></div></div>',2))])]),e[13]||(e[13]=t("div",{class:"p-5"},[t("div",{class:"border-2 p-5 border-gray-300 rounded-md"},[t("h1",{class:"text-lg font-semibold"},"Product Description"),t("p",{class:"text-md leading-relaxed"}," Our Salad Pack is packed with fiber and essential nutrients—quick and easy to prepare. Whether you’re a busy professional, a fitness enthusiast, or just someone looking to make healthy eating more convenient, this pack is designed to simplify your life without compromising nutrition. ")])],-1)),t("div",gt,[t("div",ht,[e[11]||(e[11]=t("h2",{class:"text-lg font-semibold"},"Total Reviews",-1)),e[12]||(e[12]=t("div",{class:"text-5xl"},"5.0",-1)),t("div",{class:q([c.value?"max-h-96 overflow-y-auto":"","mt-4"])},[(d(),p(h,null,w(T,s=>t("div",{key:s.id,class:"p-4 border-2 border-gray-300 rounded-md"},[t("div",bt,[t("img",{src:s.image,alt:"",class:"w-12 h-12 rounded-full object-cover"},null,8,vt),t("div",null,[t("h3",yt,o(s.name),1),t("p",wt,o(s.date),1)])]),t("p",_t,o(s.text),1)])),64))],2),t("button",{onClick:e[0]||(e[0]=s=>c.value=!c.value),class:"bg-[#608C54] text-white py-2 px-4 rounded shadow hover:bg-gray-600 transition mt-2"},o(c.value?"Collapse Reviews":"See More Reviews"),1)])]),a(j)])],64))}};export{Bt as default};

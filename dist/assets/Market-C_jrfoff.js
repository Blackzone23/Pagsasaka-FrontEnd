import{_ as C}from"./Footer-xrwfK4yV.js";import{_ as B,M as D}from"./Market_NavBar-D9N0iMjD.js";import{B as g}from"./BaseLabel-tZM6BbCK.js";import{_ as c}from"./BaseInputField-CiEqqQpC.js";import{_ as A,r as p,j,c as i,a as o,b as e,u as n,d as l,w as m,e as E,k as F,F as w,g as k,o as d,I as b,t as f}from"./index-nVQMwTsH.js";import"./Logo-C9hB9-jB.js";const S="/assets/Mfarmer-owAHeeum.png",U="/assets/MVegetable2-DSBKkXq7.png",H="/assets/MVegetable3-DIntSoSw.png",L="/assets/MVegetable4-BT3Qye1f.png",N={class:"relative"},$=["src"],G={class:"absolute inset-0 flex items-center p-48"},T={class:"bg-white shadow-lg rounded-md w-96 h-72 border-4 text-center relative"},O={key:0,class:"fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"},R={class:"bg-white shadow-lg rounded-md w-[800px] border-4 relative"},q={class:"flex justify-between p-8 space-x-4"},z={class:"flex-1 text-sm space-y-4 text-start"},K={class:"flex-1 text-xs flex flex-col items-center space-y-4"},Q={class:"flex flex-col bg-green-100 p-8 space-y-6 rounded-md max-h-[500px] overflow-y-auto"},W={class:"text-start space-y-4 text-gray-500"},X={class:"text-start space-y-4 text-gray-500"},J={class:"flex items-center space-x-4 p-8 bg-white"},Y={class:"flex space-x-4 items-center"},Z=["disabled"],ee={class:"relative flex space-x-4"},te=["src"],se=["disabled"],ae={class:"bg-gray-100 min-h-screen p-4"},oe={class:"flex flex-col md:flex-row"},le={class:"w-full md:w-1/4 bg-white shadow-md rounded-lg p-4 mb-4 md:mb-0"},re={class:"space-y-2 bg-white shadow-md rounded-lg p-4"},ie={class:"border border-gray-300 rounded-lg p-4"},ne={class:"mb-4 text-xs"},de={class:"border border-gray-300 rounded-lg p-4"},ue={class:"mb-4 text-xs"},ge={class:"w-full md:w-3/4"},ce={class:"bg-white shadow-md rounded-lg p-4"},pe={class:"mb-4 items-center"},me=["disabled"],be={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"},fe=["src"],ve={class:"text-gray-700"},xe={class:"text-lg font-semibold mt-2"},he={class:"text-yellow-500"},ye={class:"text-gray-500 text-sm"},we={__name:"Market",setup(ke){const v=p(!1),x=p([D,U,H,L]),r=p(0),_=j(()=>x.value.slice(r.value,r.value+2)),V=()=>{r.value+2<x.value.length&&r.value++},P=()=>{r.value>0&&r.value--},a=p({name:"",image:null,price:"",rating:"",location:""}),h=p([]),M=y=>{const t=y.target.files[0];if(t){const s=new FileReader;s.onload=u=>{a.value.image=u.target.result},s.readAsDataURL(t)}},I=()=>{a.value.name.trim()&&a.value.image&&a.value.price&&a.value.rating&&a.value.location.trim()&&(h.value.push({...a.value}),a.value={name:"",image:null,price:"",rating:"",location:""})};return(y,t)=>(d(),i("div",null,[o(B),e("div",N,[e("img",{src:n(S),alt:"",class:"w-full h-auto object-cover"},null,8,$),e("div",G,[e("div",T,[t[18]||(t[18]=e("h1",{class:"text-center text-3xl font-semibold py-2"},"Pagsasaka Box",-1)),t[19]||(t[19]=e("p",{class:"text-center text-sm py-2 text-gray-500"},[l(" This month’s Pagsasaka Box connects "),e("br"),l(" consumers and farmers, featuring seasonal "),e("br"),l(" produce, livestock, sustainable farming "),e("br"),l(" practices, and essential tools for efficient, local "),e("br"),l(" sourcing. ")],-1)),e("button",{onClick:t[0]||(t[0]=s=>v.value=!0),class:"px-2 mt-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition text-sm"}," Open Pagsasaka Box "),v.value?(d(),i("div",O,[e("div",R,[e("button",{onClick:t[1]||(t[1]=s=>v.value=!1),class:"absolute top-2 right-2 text-gray-400 hover:text-gray-600"},[o(n(b),{icon:"fontisto:close",width:"1.2rem",height:"1.2rem",style:{color:"#5D5F5D"}})]),e("div",q,[e("div",z,[o(g,{class:"text-2xl font-semibold"},{default:m(()=>t[6]||(t[6]=[l("Pagsasaka Box")])),_:1}),t[7]||(t[7]=e("p",{class:"text-gray-500"}," Our CSA packages feature a selection of fresh, locally-grown produce that varies with the seasons. ",-1)),t[8]||(t[8]=e("p",{class:"text-gray-500"}," Each week or month, you’ll receive a mix of vegetables, fruits, herbs, and occasionally eggs or grains. ",-1)),t[9]||(t[9]=e("p",{class:"text-gray-500"}," Please note that the specific items may change based on weather conditions and seasonal availability, ensuring you enjoy the freshest options while supporting local agriculture. Thank you for supporting your local farmers! ",-1))]),e("div",K,[e("div",Q,[e("div",W,[o(g,{class:"text-2xl font-semibold"},{default:m(()=>t[10]||(t[10]=[l("Weekly Package (500 PHP)")])),_:1}),t[11]||(t[11]=E('<p data-v-b70e9fb2>a. Vegetables: 1 kg of tomatoes</p><p data-v-b70e9fb2>500 grams of eggplant</p><p data-v-b70e9fb2>500 grams of kangkong (water spinach)</p><p data-v-b70e9fb2>500 grams of carrots</p><p data-v-b70e9fb2>1 small head of cabbage</p><p data-v-b70e9fb2>b. Fruits: 1 kg of bananas</p><p data-v-b70e9fb2>500 grams of seasonal mangoes or papayas</p><p data-v-b70e9fb2>c. Herbs: 1 bunch of fresh herbs (e.g., basil or cilantro)</p><p data-v-b70e9fb2>d. Additional Item: 5-6 pieces of farm-fresh eggs</p><div class="mt-8" data-v-b70e9fb2><a href="/page7" class="px-4 py-2 bg-[#DAA520] text-sm text-white rounded-md hover:bg-gray-400 transition" data-v-b70e9fb2> Grab it now! </a></div>',10))]),e("div",X,[o(g,{class:"text-2xl font-semibold"},{default:m(()=>t[12]||(t[12]=[l("Monthly Package (1,000 PHP)")])),_:1}),t[13]||(t[13]=e("p",null,"a. Vegetables: 2 kg of assorted vegetables (e.g., 1 kg of tomatoes, 500 grams of eggplant, 500 grams of bell peppers, 1 kg of leafy greens, 1 small head of cabbage)",-1)),t[14]||(t[14]=e("p",null,"b. Fruits: 2 kg of seasonal fruits (e.g., 1 kg of mangoes, 1 kg of bananas)",-1)),t[15]||(t[15]=e("p",null,"c. Herbs: 1 bunch of fresh herbs (e.g., basil or cilantro)",-1)),t[16]||(t[16]=e("p",null,"d. Additional Item: 5-6 pieces of farm-fresh eggs, 500 grams of local rice",-1)),t[17]||(t[17]=e("div",{class:"mt-8"},[e("a",{href:"/page7",class:"px-4 py-2 bg-[#DAA520] text-sm text-white rounded-md hover:bg-gray-400 transition"}," Grab it now! ")],-1))])])])])])])):F("",!0)])])]),e("div",J,[t[21]||(t[21]=e("div",{class:"w-1/3"},[e("h2",{class:"text-2xl font-bold"},"Grab this now"),e("p",{class:"mt-2 text-gray-600"}," Explore our curated selection of high-quality goods, featuring fresh produce, artisanal items, and everyday essentials, all while supporting local farmers and communities. ")],-1)),e("div",Y,[e("button",{onClick:P,disabled:r.value===0,class:"px-4 py-2 rounded-lg disabled:opacity-50"},[o(n(b),{icon:"ei:arrow-left",width:"56",height:"56",style:{color:"black"}})],8,Z),e("div",ee,[(d(!0),i(w,null,k(_.value,(s,u)=>(d(),i("div",{key:u,class:"relative group w-72 h-72 rounded-lg overflow-hidden"},[e("img",{src:s,alt:"Carousel Image",class:"w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"},null,8,te),t[20]||(t[20]=e("div",{class:"absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"},[e("a",{href:"/marketpage1",class:"px-4 py-2 text-white bg-green-500 rounded-lg"}," View Product ")],-1))]))),128))]),e("button",{onClick:V,disabled:r.value+2>=x.value.length,class:"px-4 py-2 rounded-lg disabled:opacity-50"},[o(n(b),{icon:"ei:arrow-right",width:"56",height:"56",style:{color:"black"}})],8,se)])]),e("div",ae,[e("div",oe,[e("div",le,[e("div",re,[e("div",ie,[e("div",ne,[o(n(b),{icon:"mdi-light:truck",width:"52",height:"52",style:{color:"#346a3d"}}),o(g,{class:"block text-lg font-medium text-gray-700"},{default:m(()=>t[22]||(t[22]=[l("Delivery every day ")])),_:1}),t[23]||(t[23]=e("div",null,[e("p",null,"Learn More on our"),e("a",{href:"/delivery-guide",class:"px-4 py-2 text-[#608C54] hover:underline"},"Delivery Guide")],-1))])]),e("div",de,[e("div",ue,[o(n(b),{icon:"ix:box-open",width:"52",height:"52",style:{color:"#346a3d"}}),o(g,{class:"block text-lg font-medium text-gray-700"},{default:m(()=>t[24]||(t[24]=[l("Delivery every day ")])),_:1}),t[25]||(t[25]=e("div",null,[e("p",null,[l("Check out our"),e("a",{href:"/pagsasaka-box",class:"px-4 py-2 text-[#608C54] hover:underline"},"Pagsasaka Box"),l("to view this week's produce.")])],-1))])])])]),e("div",ge,[e("div",ce,[t[26]||(t[26]=e("h1",{class:"text-xl font-bold mb-4"},"Products",-1)),e("div",null,[e("div",pe,[o(c,{modelValue:a.value.name,"onUpdate:modelValue":t[2]||(t[2]=s=>a.value.name=s),type:"text",placeholder:"Enter product name",class:"border p-2 rounded w-full"},null,8,["modelValue"]),o(c,{type:"file",accept:"image/*",onChange:M,class:"border rounded w-full mt-2"}),o(c,{modelValue:a.value.price,"onUpdate:modelValue":t[3]||(t[3]=s=>a.value.price=s),type:"number",placeholder:"Enter price",class:"border p-2 rounded w-full mt-2"},null,8,["modelValue"]),o(c,{modelValue:a.value.rating,"onUpdate:modelValue":t[4]||(t[4]=s=>a.value.rating=s),type:"number",placeholder:"Enter rating (1-5)",class:"border p-2 rounded w-full mt-2"},null,8,["modelValue"]),o(c,{modelValue:a.value.location,"onUpdate:modelValue":t[5]||(t[5]=s=>a.value.location=s),type:"text",placeholder:"Enter location",class:"border p-2 rounded w-full mt-2"},null,8,["modelValue"]),e("button",{onClick:I,class:"mt-2 bg-blue-500 text-white py-2 px-4 rounded",disabled:!a.value.image},"Post Product",8,me)]),e("div",be,[(d(!0),i(w,null,k(h.value,(s,u)=>(d(),i("div",{key:u,class:"border p-4 rounded shadow"},[e("img",{src:s.image,alt:"Product Image",class:"w-full h-40 object-cover rounded"},null,8,fe),e("p",ve,"Price: ₱"+f(s.price),1),e("p",xe,f(s.name),1),e("p",he,"Rating: "+f(s.rating)+" ★",1),e("p",ye,"Location: "+f(s.location),1)]))),128))])])])])])]),o(C)]))}},Be=A(we,[["__scopeId","data-v-b70e9fb2"]]);export{Be as default};

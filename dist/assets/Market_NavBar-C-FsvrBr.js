import{o as a,c as l,a as t,u as d,I as h,b as e,L as u,h as m,i as f,r as p,q as x,d as c,m as g}from"./index-B2mT2DWT.js";import{L as v}from"./Logo-C9hB9-jB.js";const _={class:"relative flex items-center md:w-[600px] sm:w-[400px] 2xs:w-[200px] border-none p-0 z-10"},w=["value"],b={__name:"BaseSearchField",props:{modelValue:{type:String,default:""}},setup(r){return(o,n)=>(a(),l("span",_,[t(d(h),{icon:"iconamoon:search",class:"z-20 w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"}),e("input",u({value:r.modelValue,onInput:n[0]||(n[0]=s=>o.$emit("update:modelValue",s.target.value))},o.$attrs,{class:"inputText inputLayout pl-3 md:h-10 md:text-sm 2xs:h-10 xs:text-lg z-5"}),null,16,w)]))}},y={class:"bg-[#608C54] text-white p-2"},k={class:"bg-[#608C54] text-white"},S={class:"container mx-auto flex justify-between items-center 2xl:text-sm 2xs:text-xs p-4"},L={class:"flex items-center space-x-4"},N={href:"#",class:"hidden md:inline"},V={href:"#",class:"hidden md:inline"},C={key:0,class:"bg-[#608C54] md:hidden flex flex-col space-y-3 px-4 py-2 text-sm"},$={class:"flex space-x-3"},B={href:"#"},I={href:"#"},F={class:"flex items-center justify-center mt-2 space-y-2"},q={class:"text-2xl font-bold"},z={href:"/market",class:"flex items-center"},M=["src"],j={class:"flex items-center space-x-2"},A={href:"#",class:"text-white hover:underline"},O={__name:"Market_NavBar",setup(r){m(),f();const o=p(!1);return(n,s)=>{const i=x("Icon");return a(),l("div",y,[e("div",k,[e("div",S,[e("div",L,[s[1]||(s[1]=e("a",{href:"/about",class:"hover:underline hidden md:inline"},"About",-1)),s[2]||(s[2]=e("span",{class:"hidden md:inline"},"|",-1)),s[3]||(s[3]=e("span",{class:"hidden md:inline"},"Follow us on",-1)),e("a",N,[t(i,{icon:"ic:twotone-facebook",width:"20",height:"20",style:{color:"white"}})]),e("a",V,[t(i,{icon:"mage:instagram-circle",width:"20",height:"20",style:{color:"white"}})])]),e("button",{class:"md:hidden",onClick:s[0]||(s[0]=H=>o.value=!o.value),"aria-label":"Toggle Menu"},[t(i,{icon:"cil:hamburger-menu",width:"24",height:"24",style:{color:"white"}})]),s[4]||(s[4]=c('<div class="hidden md:flex items-center space-x-4"><a href="#" class="hover:underline"><i class="fas fa-bell"></i> Notifications </a><a href="#" class="hover:underline"><i class="fas fa-question-circle"></i> Help </a><a href="/signup" class="hover:underline">Sign up</a><a href="/login" class="hover:underline">Login</a></div>',1))]),o.value?(a(),l("div",C,[s[5]||(s[5]=e("a",{href:"/about",class:"hover:underline"},"About",-1)),s[6]||(s[6]=e("a",{href:"#",class:"hover:underline"},"Farming Seller",-1)),s[7]||(s[7]=e("span",null,"Follow us on:",-1)),e("div",$,[e("a",B,[t(i,{icon:"ic:twotone-facebook",width:"20",height:"20",style:{color:"white"}})]),e("a",I,[t(i,{icon:"mage:instagram-circle",width:"20",height:"20",style:{color:"white"}})])]),s[8]||(s[8]=c('<a href="#" class="hover:underline"><i class="fas fa-bell"></i> Notifications </a><a href="#" class="hover:underline"><i class="fas fa-question-circle"></i> Help </a><a href="/signup" class="hover:underline">Sign up</a><a href="/login" class="hover:underline">Login</a>',4))])):g("",!0)]),e("div",F,[e("div",q,[e("a",z,[e("img",{src:d(v),alt:"Logo",class:"2xl:h-20 2xs:h-14"},null,8,M)])]),e("div",j,[t(b,{placeholder:"Search..."}),e("a",A,[t(i,{icon:"bx:cart",width:"35",height:"35",style:{color:"white"}})])])])])}}};export{O as _};

import{h as m,i as c,r as d,m as r,o as u,c as x,b as t,u as p,a as s,j as f,w as n,e as l}from"./index-B2BJpPcw.js";import{L as b}from"./Logo-C9hB9-jB.js";const v={class:"bg-[#608C54] text-white"},_={class:"container mx-auto flex justify-between items-center px-2 py-2"},g=["src"],N={__name:"HomeNavbar",setup(k){m(),c();const o=d(!1);return(y,e)=>{const i=r("Icon"),a=r("router-link");return u(),x("nav",v,[t("div",_,[t("div",null,[t("img",{src:p(b),alt:"Logo",class:"2xl:h-20 2xs:h-14"},null,8,g)]),t("button",{onClick:e[0]||(e[0]=h=>o.value=!o.value),class:"md:hidden flex items-center focus:outline-none"},[s(i,{icon:"material-symbols:menu-rounded",width:"30",height:"30"})]),t("div",{class:f([["md:flex md:items-center md:space-x-10 font-bold transition-all duration-300",o.value?"block":"hidden"],"absolute md:static top-16 left-0 w-full md:w-auto bg-[#608C54] md:bg-transparent md:space-y-0 space-y-3 md:px-0 px-4 z-10"])},[s(a,{to:{name:"Home"},class:"hover:text-gray-300 block md:inline","active-class":"text-gray-400"},{default:n(()=>e[1]||(e[1]=[l(" Home ")])),_:1}),s(a,{to:{name:"About"},class:"hover:text-gray-300 block md:inline","active-class":"text-gray-400"},{default:n(()=>e[2]||(e[2]=[l(" About ")])),_:1}),s(a,{to:{name:"Market"},class:"hover:text-gray-300 block md:inline","active-class":"text-gray-400"},{default:n(()=>e[3]||(e[3]=[l(" Market ")])),_:1})],2)])])}}};export{N as _};
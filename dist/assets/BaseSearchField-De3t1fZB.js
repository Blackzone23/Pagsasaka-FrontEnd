import{o,c as r,a as n,u as l,I as p,b as u,P as m}from"./index-B8R3md61.js";const c={class:"relative flex items-center md:w-[600px] sm:w-[400px] 2xs:w-[200px] border-none p-0 z-10"},i=["value"],x={__name:"BaseSearchField",props:{modelValue:{type:String,default:""}},setup(a){return(e,t)=>(o(),r("span",c,[n(l(p),{icon:"iconamoon:search",class:"z-20 w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"}),u("input",m({value:a.modelValue,onInput:t[0]||(t[0]=s=>e.$emit("update:modelValue",s.target.value))},e.$attrs,{class:"inputText inputLayout pl-3 md:h-10 md:text-sm 2xs:h-10 xs:text-lg z-5"}),null,16,i)]))}};export{x as _};
import{r,x as m,o as n,c as d,p as b,v as h,b as g,t as x,m as v}from"./index-Cp1gMUic.js";const f={class:"flex items-center space-x-2"},k=["id","value","disabled"],V=["for"],p={__name:"BaseCheckBox",props:{modelValue:Boolean,id:{type:String,default:()=>`checkbox-${Math.random().toString(36).substr(2,9)}`},label:String,value:[String,Number,Boolean],disabled:Boolean},emits:["update:modelValue","change"],setup(e,{emit:c}){const o=e,s=c,l=r(o.modelValue);m(()=>o.modelValue,t=>{l.value=t});function i(t){const a=t.target.checked;s("update:modelValue",a),s("change",a)}return(t,a)=>(n(),d("div",f,[b(g("input",{id:e.id,type:"checkbox",value:e.value,"onUpdate:modelValue":a[0]||(a[0]=u=>l.value=u),disabled:e.disabled,class:"w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500",onChange:i},null,40,k),[[h,l.value]]),e.label?(n(),d("label",{key:0,for:e.id,class:"text-xs font-medium text-gray-700 cursor-pointer"},x(e.label),9,V)):v("",!0)]))}};export{p as _};

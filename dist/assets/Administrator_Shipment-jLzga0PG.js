import{B as v}from"./BaseLabel-Auf5LPAM.js";import{_ as g,a as b}from"./BaseSelectField-DLTcYptA.js";import{f as m,q as y,c as d,b as e,a as n,u as R,p as x,w as o,F as f,h as _,t as i,r as M,o as l,I as z,e as u,k as N,y as S}from"./index-BTxKm87V.js";const X={class:"flex h-screen bg-gray-100"},Y={class:"flex-1 flex flex-col"},G={class:"bg-[#608C54] shadow p-4 flex justify-between items-center text-white"},H={class:"flex items-center space-x-4"},J={class:"flex space-x-2"},K={class:"relative"},Q={key:0,class:"absolute right-0 mt-2 bg-white shadow-lg rounded p-2 w-48"},W={class:"p-5"},Z={class:"flex justify-end mb-4"},tt={key:0,class:"border-2 border-gray-300 p-10 rounded-md"},et={class:"text-center font-bold"},st={class:"border-b"},lt={class:"flex justify-center space-x-10 text-sm font-medium"},at=["onClick"],ot={key:0,class:"absolute bottom-0 left-0 right-0 h-1 bg-green-600"},dt={class:"mt-3"},nt={class:"space-y-3"},ut={class:"text-lg"},it={class:"flex space-x-4 mb-4"},rt={class:"w-full"},ct={class:"overflow-x-auto"},pt={class:"w-full"},vt={class:"px-4 py-2"},mt={class:"px-4 py-2"},xt={class:"px-4 py-2"},ft={class:"px-4 py-2"},_t={class:"px-4 py-2 text-end"},bt={key:1,class:"border-2 border-gray-300 p-10 rounded-md"},yt={class:"text-center font-bold"},ht={class:"mt-5"},gt={class:"border-b"},kt={class:"flex justify-center space-x-10 text-sm font-medium"},Ut=["onClick"],St={key:0,class:"absolute bottom-0 left-0 right-0 h-1 bg-green-600"},wt={class:"mt-3"},Ct={class:"space-y-3"},Tt={class:"text-lg"},Vt={class:"flex space-x-4 mb-4"},Nt={class:"w-full"},Lt={class:"overflow-x-auto"},Ft={class:"w-full"},Bt={class:"bg-gray-300 text-sm"},Dt={key:0,class:"px-4 py-2 text-end"},At={key:1,class:"px-4 py-2 text-end"},Ot={class:"px-4 py-2"},qt={class:"px-4 py-2"},Et={class:"px-4 py-2"},It={class:"px-4 py-2"},$t={key:0,class:"px-4 py-2 text-end"},jt={key:1,class:"px-4 py-2 text-end"},Xt={__name:"Administrator_Shipment",setup(Pt){const k=m("myOrders"),w=[{name:"toShip",label:"To Ship"},{name:"shipping",label:"Shipping"},{name:"completed",label:"Completed"}],h=m("toShip"),C=m([{id:1,name:"Salad Package",created:"Nov 3, 2024",lastUpdated:"Nov 4, 2024",shipTo:"TEB9",status:"In Progress",tab:"toShip"},{id:2,name:"Fruit Basket",created:"Nov 2, 2024",lastUpdated:"Nov 5, 2024",shipTo:"TXB8",status:"Shipped",tab:"shipping"},{id:3,name:"Salad Package",created:"Nov 3, 2024",lastUpdated:"Nov 6, 2024",shipTo:"TEB9",status:"Closed",tab:"completed"}]),r=m({lastUpdated:"",status:""}),L=y(()=>C.value.filter(a=>{const t=a.tab===h.value,c=!r.value.lastUpdated||a.lastUpdated===r.value.lastUpdated,s=!r.value.status||a.status===r.value.status;return t&&c&&s})),F=y(()=>[...new Set(C.value.map(a=>a.lastUpdated))]),B=y(()=>[...new Set(C.value.map(a=>a.status))]),D=a=>{var t;return((t=w.find(c=>c.name===a))==null?void 0:t.label)||""},A=[{name:"tocancel",label:"To Cancel"},{name:"cancelled",label:"Cancelled"}],p=m("tocancel"),T=m([{id:1,name:"Salad Package",created:"Nov 3, 2024",lastUpdated:"Nov 4, 2024",status:"change of mind",tab:"tocancel"},{id:2,name:"Fruit Basket",created:"Nov 2, 2024",lastUpdated:"Nov 5, 2024",status:"approved",tab:"cancelled"}]),U=m({lastUpdated:"",status:""}),O=y(()=>T.value.filter(a=>{const t=a.tab===p.value,c=!r.value.lastUpdated||a.lastUpdated===r.value.lastUpdated,s=!r.value.status||a.status===r.value.status;return t&&c&&s})),q=y(()=>[...new Set(T.value.map(a=>a.lastUpdated))]),E=y(()=>[...new Set(T.value.map(a=>a.status))]),I=a=>{var t;return((t=w.find(c=>c.name===a))==null?void 0:t.label)||""},V=m(!1),$=()=>{V.value=!V.value},j=async()=>{try{(await store.dispatch("logout")).isSuccess&&router.push({name:"Login"})}catch(a){console.error("Logout error:",a)}};return(a,t)=>{const c=M("BaseOptionDefaultField");return l(),d("div",X,[e("div",Y,[e("header",G,[t[6]||(t[6]=e("h1",{class:"text-xl font-bold"},"Shipment",-1)),e("div",H,[e("div",J,[e("div",K,[n(R(z),{icon:"uil:setting",width:"24",height:"24",style:{color:"white"},onClick:$}),V.value?(l(),d("div",Q,[e("button",{class:"w-full text-left px-4 py-2 text-sm text-black",onClick:t[0]||(t[0]=s=>j())},"Logout")])):x("",!0)])])])]),e("div",W,[e("div",Z,[n(g,{modelValue:k.value,"onUpdate:modelValue":t[1]||(t[1]=s=>k.value=s),class:"w-48"},{default:o(()=>[n(b,{value:"myOrders"},{default:o(()=>t[7]||(t[7]=[u("My Orders")])),_:1}),n(b,{value:"cancellation"},{default:o(()=>t[8]||(t[8]=[u("Cancellation")])),_:1})]),_:1},8,["modelValue"])]),k.value==="myOrders"?(l(),d("div",tt,[e("div",et,[n(v,{class:"text-2xl"},{default:o(()=>t[9]||(t[9]=[u("MY ORDERS")])),_:1})]),e("div",st,[e("div",lt,[(l(),d(f,null,_(w,s=>e("button",{key:s.name,onClick:P=>h.value=s.name,class:N(["px-4 py-2 relative",h.value===s.name?"text-green-600 font-bold":"text-black"])},[u(i(s.label)+" ",1),h.value===s.name?(l(),d("div",ot)):x("",!0)],10,at)),64))]),e("div",dt,[e("div",nt,[n(v,{class:"text-xl font-bold text-black"},{default:o(()=>t[10]||(t[10]=[u("Shipping tracing event")])),_:1}),t[11]||(t[11]=e("p",{class:"text-xs"}," This page provides details on all the shipments you are working on and those you have sent to logistics ",-1)),e("h2",ut,i(D(h.value)),1)]),e("div",it,[e("div",null,[n(v,{class:"block text-sm font-medium mb-1",for:"lastUpdatedFilter"},{default:o(()=>t[12]||(t[12]=[u("Last Updated")])),_:1}),n(g,{id:"lastUpdatedFilter",modelValue:r.value.lastUpdated,"onUpdate:modelValue":t[2]||(t[2]=s=>r.value.lastUpdated=s)},{default:o(()=>[n(c,null,{default:o(()=>t[13]||(t[13]=[u("All")])),_:1}),(l(!0),d(f,null,_(F.value,s=>(l(),S(b,{key:s,value:s},{default:o(()=>[u(i(s),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),e("div",null,[n(v,{class:"block text-sm font-medium mb-1",for:"statusFilter"},{default:o(()=>t[14]||(t[14]=[u("Status")])),_:1}),n(g,{id:"statusFilter",modelValue:r.value.status,"onUpdate:modelValue":t[3]||(t[3]=s=>r.value.status=s),class:"border border-gray-300 rounded px-3 py-2 text-sm"},{default:o(()=>[n(c,{value:""},{default:o(()=>t[15]||(t[15]=[u("All")])),_:1}),(l(!0),d(f,null,_(B.value,s=>(l(),S(b,{key:s,value:s},{default:o(()=>[u(i(s),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])]),e("div",rt,[e("div",ct,[e("table",pt,[t[16]||(t[16]=e("thead",null,[e("tr",{class:"bg-gray-300 text-sm"},[e("th",{class:"px-4 py-2 text-left"},"Shipment Name"),e("th",{class:"px-4 py-2 text-left"},"Created"),e("th",{class:"px-4 py-2 text-left"},"Last Updated"),e("th",{class:"px-4 py-2 text-left"},"Ship To"),e("th",{class:"px-4 py-2 text-end"},"Status")])],-1)),e("tbody",null,[(l(!0),d(f,null,_(L.value,s=>(l(),d("tr",{key:s.id,class:"even:bg-gray-50 text-sm"},[e("td",vt,i(s.name),1),e("td",mt,i(s.created),1),e("td",xt,i(s.lastUpdated),1),e("td",ft,i(s.shipTo),1),e("td",_t,i(s.status),1)]))),128))])])])])])])])):k.value==="cancellation"?(l(),d("div",bt,[e("div",yt,[n(v,{class:"text-2xl"},{default:o(()=>t[17]||(t[17]=[u("CANCELLATION")])),_:1})]),e("div",ht,[e("div",gt,[e("div",kt,[(l(),d(f,null,_(A,s=>e("button",{key:s.name,onClick:P=>p.value=s.name,class:N(["px-4 py-2 relative",p.value===s.name?"text-green-600 font-bold":"text-black"])},[u(i(s.label)+" ",1),p.value===s.name?(l(),d("div",St)):x("",!0)],10,Ut)),64))]),e("div",wt,[e("div",Ct,[n(v,{class:"text-xl font-bold text-black"},{default:o(()=>t[18]||(t[18]=[u("Shipping tracing event")])),_:1}),t[19]||(t[19]=e("p",{class:"text-xs"}," This page provides details on all the shipments you are working on and those you have sent to logistics ",-1)),e("h2",Tt,i(I(p.value)),1)]),e("div",Vt,[e("div",null,[n(v,{class:"block text-sm font-medium mb-1",for:"lastUpdatedFilter"},{default:o(()=>t[20]||(t[20]=[u("Last Updated")])),_:1}),n(g,{id:"lastUpdatedFilter",modelValue:U.value.lastUpdated,"onUpdate:modelValue":t[4]||(t[4]=s=>U.value.lastUpdated=s)},{default:o(()=>[n(c,null,{default:o(()=>t[21]||(t[21]=[u("All")])),_:1}),(l(!0),d(f,null,_(q.value,s=>(l(),S(b,{key:s,value:s},{default:o(()=>[u(i(s),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),e("div",null,[n(v,{class:"block text-sm font-medium mb-1",for:"statusFilter"},{default:o(()=>t[22]||(t[22]=[u("Status")])),_:1}),n(g,{id:"statusFilter",modelValue:U.value.status,"onUpdate:modelValue":t[5]||(t[5]=s=>U.value.status=s),class:"border border-gray-300 rounded px-3 py-2 text-sm"},{default:o(()=>[n(c,{value:""},{default:o(()=>t[23]||(t[23]=[u("All")])),_:1}),(l(!0),d(f,null,_(E.value,s=>(l(),S(b,{key:s,value:s},{default:o(()=>[u(i(s),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])]),e("div",Nt,[e("div",Lt,[e("table",Ft,[e("thead",null,[e("tr",Bt,[t[24]||(t[24]=e("th",{class:"px-4 py-2 text-left"},"Shipment Name",-1)),t[25]||(t[25]=e("th",{class:"px-4 py-2 text-left"},"Created",-1)),t[26]||(t[26]=e("th",{class:"px-4 py-2 text-left"},"Last Updated",-1)),t[27]||(t[27]=e("th",{class:"px-4 py-2 text-left"},"Status",-1)),p.value!=="cancelled"?(l(),d("th",Dt,"Action")):x("",!0),p.value==="cancelled"?(l(),d("th",At,"Reason")):x("",!0)])]),e("tbody",null,[(l(!0),d(f,null,_(O.value,s=>(l(),d("tr",{key:s.id,class:"even:bg-gray-50 text-sm"},[e("td",Ot,i(s.name),1),e("td",qt,i(s.created),1),e("td",Et,i(s.lastUpdated),1),e("td",It,i(s.status),1),p.value!=="cancelled"?(l(),d("td",$t,i(s.action),1)):x("",!0),p.value==="cancelled"?(l(),d("td",jt,i(s.reason),1)):x("",!0)]))),128))])])])])])])])])):x("",!0)])])])}}};export{Xt as default};

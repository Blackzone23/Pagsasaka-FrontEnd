import{g as Y,q as ie,s as ee,x as K,y as te,z as de,A as ue,B as ce,C as W,D as C,E,G as pe,u as P,_ as me,H as fe,f as j,c as p,a as b,b as e,w as z,l as k,J as I,e as y,F as N,h as $,t as x,v as xe,m as ge,p as H,i as ve,j as he,r as q,o as m,I as O,k as B}from"./index-CtqyadYs.js";import{_ as be}from"./Footer-DQzMlFBA.js";import{_ as ye}from"./Market_NavBar-RlkjTteA.js";import{B as X}from"./BaseLabel-C5r02AFf.js";import{_ as we}from"./BaseSearchField-BQ-7U8pu.js";import"./lodash-DgvqSbiq.js";import"./Toast-CdemwyP1.js";const _e="/assets/Mfarmer-owAHeeum.png";function ke(o){return ue()?(ce(o),!0):!1}const F=new WeakMap,Ce=(...o)=>{var l;const i=o[0],d=(l=K())==null?void 0:l.proxy;if(d==null&&!te())throw new Error("injectLocal must be called in setup");return d&&F.has(d)&&i in F.get(d)?F.get(d)[i]:de(...o)},Me=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ie=Object.prototype.toString,Se=o=>Ie.call(o)==="[object Object]";function Z(o){return o.endsWith("rem")?Number.parseFloat(o)*16:Number.parseFloat(o)}function G(o){return Array.isArray(o)?o:[o]}function Ve(o){return K()}function je(o,l=!0,i){Ve()?Y(o,i):l?o():ie(o)}function Pe(o,l,i){return ee(o,l,{...i,immediate:!0})}const Q=Me?window:void 0;function We(o){var l;const i=E(o);return(l=i==null?void 0:i.$el)!=null?l:i}function R(...o){const l=[],i=()=>{l.forEach(n=>n()),l.length=0},d=(n,r,u,c)=>(n.addEventListener(r,u,c),()=>n.removeEventListener(r,u,c)),g=C(()=>{const n=G(E(o[0])).filter(r=>r!=null);return n.every(r=>typeof r!="string")?n:void 0}),M=Pe(()=>{var n,r;return[(r=(n=g.value)==null?void 0:n.map(u=>We(u)))!=null?r:[Q].filter(u=>u!=null),G(E(g.value?o[1]:o[0])),G(P(g.value?o[2]:o[1])),E(g.value?o[3]:o[2])]},([n,r,u,c])=>{if(i(),!(n!=null&&n.length)||!(r!=null&&r.length)||!(u!=null&&u.length))return;const h=Se(c)?{...c}:c;l.push(...n.flatMap(a=>r.flatMap(w=>u.map(_=>d(a,w,_,h)))))},{flush:"post"}),v=()=>{M(),i()};return ke(i),v}function Ee(){const o=W(!1),l=K();return l&&Y(()=>{o.value=!0},l),o}function Te(o){const l=Ee();return C(()=>(l.value,!!o()))}const Le=Symbol("vueuse-ssr-width");function He(){const o=te()?Ce(Le,null):null;return typeof o=="number"?o:void 0}function Ne(o,l={}){const{window:i=Q,ssrWidth:d=He()}=l,g=Te(()=>i&&"matchMedia"in i&&typeof i.matchMedia=="function"),M=W(typeof d=="number"),v=W(),n=W(!1),r=u=>{n.value=u.matches};return pe(()=>{if(M.value){M.value=!g.value;const u=E(o).split(",");n.value=u.some(c=>{const h=c.includes("not all"),a=c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),w=c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let _=!!(a||w);return a&&_&&(_=d>=Z(a[1])),w&&_&&(_=d<=Z(w[1])),h?!_:_});return}g.value&&(v.value=i.matchMedia(E(o)),n.value=v.value.matches)}),R(v,"change",r,{passive:!0}),C(()=>n.value)}function $e(o={}){const{window:l=Q,initialWidth:i=Number.POSITIVE_INFINITY,initialHeight:d=Number.POSITIVE_INFINITY,listenOrientation:g=!0,includeScrollbar:M=!0,type:v="inner"}=o,n=W(i),r=W(d),u=()=>{if(l)if(v==="outer")n.value=l.outerWidth,r.value=l.outerHeight;else if(v==="visual"&&l.visualViewport){const{width:h,height:a,scale:w}=l.visualViewport;n.value=Math.round(h*w),r.value=Math.round(a*w)}else M?(n.value=l.innerWidth,r.value=l.innerHeight):(n.value=l.document.documentElement.clientWidth,r.value=l.document.documentElement.clientHeight)};u(),je(u);const c={passive:!0};if(R("resize",u,c),l&&v==="visual"&&l.visualViewport&&R(l.visualViewport,"resize",u,c),g){const h=Ne("(orientation: portrait)");ee(h,()=>u())}return{width:n,height:r}}const Oe={class:"relative"},Ye=["src"],Ae={class:"flex items-center space-x-4 2xl:p-8 2xs:p-4 bg-green-900"},De=["src"],Ue={class:"absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"},ze=["onClick"],Be={class:"bg-gray-100 min-h-screen p-4"},Fe={class:"flex flex-col md:flex-row"},Ge={class:"w-full md:w-1/4 bg-white shadow-md rounded-lg p-4 mb-4 md:mb-0"},Re={class:"space-y-2 bg-white shadow-md rounded-lg p-4"},Ke={class:"border border-gray-300 rounded-lg p-4"},Qe={class:"mb-4 text-xs"},Je={class:"border border-gray-300 flex flex-col rounded-lg p-4"},qe={class:"mb-4 text-xs"},Xe={class:"block mb-2"},Ze={class:"block mb-2"},et={class:"block mb-2"},tt={class:"block mb-2"},st={class:"block mb-2"},ot={class:"block mb-2"},lt={class:"block mb-2"},nt={class:"block mb-2"},at={class:"p-4 mt-12"},rt={class:"grid grid-cols-3 gap-4"},it=["src"],dt={class:"absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"},ut=["onClick"],ct={class:"p-2"},pt={class:"text-sm font-semibold"},mt={class:"text-xs font-semibold"},ft={class:"text-red-500 font-bold text-sm"},xt={key:0,class:"text-gray-600 text-xs mt-2"},gt={class:"mt-10 mr-4 flex justify-center text-sm"},vt=["disabled"],ht={class:"py-2 px-4 bg-gray-100 flex text-sm items-center border-l border-r border-gray-300"},bt=["disabled"],yt={class:"h-full w-full p-10"},wt={class:"max-w-4xl mx-auto p-4 border-2 border-green-500 rounded-lg"},_t={class:"flex items-center mb-6"},kt={class:"mr-6 hidden sm:block"},Ct={class:"p-4"},Mt={key:0,class:"fixed bottom-4 right-4 2xl:w-[900px] xs:w-[450px] 2xs:w-[410px] 2xl:h-[85vh] 2xs:h-[70vh] bg-white rounded-lg shadow-lg flex flex-col border z-50"},It={class:"p-4 border-b rounded-sm bg-gray-100 flex justify-between items-center"},St={class:"flex flex-1 overflow-hidden"},Vt={class:"w-1/3 bg-white border-r border-gray-300 p-4 flex flex-col"},jt={class:"flex"},Pt={class:"mt-3 flex-1 overflow-auto"},Wt=["onClick"],Et=["src"],Tt={class:"flex-1"},Lt={class:"font-semibold"},Ht={class:"text-xs text-gray-500 truncate hidden sm:block"},Nt={key:0,class:"text-xs bg-red-500 text-white px-2 py-1 rounded-full"},$t={class:"w-full flex flex-col"},Ot={key:0,class:"flex-1 flex items-center justify-center text-gray-400"},Yt={key:1,class:"flex flex-col flex-1"},At={class:"p-4 border-b text-lg font-bold flex justify-between items-center bg-gray-100"},Dt={class:"flex-1 bg-gray-50 p-5 overflow-auto space-y-4 2xl:text-sm 2xs:text-xs"},Ut={key:0,class:"w-8 h-8 rounded-full bg-gray-300"},zt={class:"text-xs"},Bt={class:"text-xs mt-1 text-black"},Ft={key:1,class:"w-8 h-8 rounded-full bg-gray-300"},Gt={class:"p-4 border-t bg-white flex items-center"},Rt={__name:"Market",setup(o){const{width:l}=$e(),i=C(()=>l.value>=1536?5:l.value>=1280?4:l.value>=1024?3:l.value>=768?4:l.value>=640?3:(l.value>=480,1)),d=ve(),g=he(),M=C(()=>d.state.Consumer.productItem.data),v=C(()=>d.state.Consumer.moreProduct.data),n=C(()=>d.state.currentPage),r=C(()=>d.state.totalPages);function u(){d.dispatch("Consumer/getItemList")}Y(()=>{u()});async function c(f){sessionStorage.setItem("ItemInfo",f),g.push({name:"Market_Page1"})}async function h(){await d.dispatch("Consumer/getMoreList",{currentPage:n.value})}Y(()=>{h()});const a=fe({all:!0,vegetable:!1,seed:!1,grains:!1,soil:!1,fruits:!1,pelletes:!1,process:!1});C(()=>{let f=products.value;if(!a.all){const t=Object.keys(a).filter(V=>a[V]&&V!=="all");t.length>0&&(f=f.filter(V=>t.includes(V.category)))}return f.slice((n.value-1)*itemsPerPage,n.value*itemsPerPage)});function w(){n.value>1&&(d.commit("setCurrentPage",n.value-1),h())}function _(){n.value<r.value&&(d.commit("setCurrentPage",n.value+1),h())}const se=()=>{a.all?Object.keys(a).forEach(f=>{a[f]=!0}):Object.keys(a).forEach(f=>{a[f]=!1})},S=f=>{Object.keys(a).forEach(t=>{t!==f&&t!=="all"&&(a[t]=!1)}),a.all=!1};j({name:"",image:null,price:"",rating:"",location:""});const A=j(!1),T=j(""),D=j(null),oe=()=>{A.value=!0},le=()=>{A.value=!1},ne=j([{name:"cpx_mall",message:"[Shop AI Assistant] Hello!",unread:null},{name:"junseven89",message:"Unsupported message",unread:2},{name:"trxph",message:"Hi, thanks for following!",unread:21},{name:"Demasia",message:"Hello dear friend...",unread:3},{name:"sportsclubph",message:"Hi, thanks for browsing!",unread:3},{name:"sportsclubph",message:"Hi, thanks for browsing!",unread:3},{name:"sportsclubph",message:"Hi, thanks for browsing!",unread:3},{name:"sportsclubph",message:"Hi, thanks for browsing!",unread:3}]),U=j([]),ae=f=>{D.value=f,U.value=[{sender:f.name,text:"Hello, how can I assist you?",time:"10:30 AM"},{sender:"You",text:"I want to check my order.",time:"10:32 AM"}]},J=()=>{T.value.trim()&&(U.value.push({sender:"You",text:T.value,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),T.value="")};return(f,t)=>{const V=q("n-carousel"),re=q("n-rate");return m(),p("div",null,[b(ye),e("div",Oe,[e("img",{src:P(_e),alt:"",class:"object-fill 2xl:h-[500px] md:h-[300px] 2xs:h-[320px] 2xl:w-full 2xs:w-full"},null,8,Ye)]),e("div",Ae,[t[16]||(t[16]=e("div",{class:"w-1/3"},[e("h2",{class:"2xl:text-2xl 2xs:text-sm xl:text-2xl lg:text-2xl font-bold text-white"},"Grab this now"),e("p",{class:"mt-2 2xl:text-lg 2xs:text-xs lg:text-lg xl:text-lg text-gray-300"}," Explore our curated selection of high-quality goods, featuring fresh produce, artisanal items, and everyday essentials, all while supporting local farmers and communities. ")],-1)),b(V,{"slides-per-view":i.value,"space-between":10,loop:!1,draggable:"","show-arrow":""},{default:z(()=>[(m(!0),p(N,null,$(M.value,s=>(m(),p("div",{key:s.id,class:"border-2 border-[#608C54] relative group w-20 h-20 sm:w-32 xl:w-48 sm:h-32 md:w-32 md:h-32 xl:h-48 lg:w-56 lg:h-56 2xs:w-56 2xs:h-56 rounded-lg overflow-hidden"},[e("img",{src:s.product_img[0],alt:"Carousel Image",class:"w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"},null,8,De),e("div",Ue,[e("button",{onClick:L=>c(s.id),class:"px-2 py-1 2xl:px-4 md:px-2 2xl:py-2 text-xs sm:text-sm md:text-xs text-white bg-green-500 rounded-lg"}," View Product ",8,ze)])]))),128))]),_:1},8,["slides-per-view"])]),e("div",Be,[e("div",Fe,[e("div",Ge,[e("div",Re,[e("div",Ke,[e("div",Qe,[b(P(O),{icon:"mdi-light:truck",width:"52",height:"52",style:{color:"#346a3d"}}),b(X,{class:"block text-lg font-medium text-gray-700"},{default:z(()=>t[17]||(t[17]=[y("Delivery every day ")])),_:1}),t[18]||(t[18]=e("div",null,[e("p",null,"Learn More on our"),e("a",{href:"/delivery-guide",class:"px-4 py-2 text-[#608C54] hover:underline"},"Delivery Guide")],-1))])]),e("div",Je,[b(X,{class:"font-bold"},{default:z(()=>t[19]||(t[19]=[y("Product Type")])),_:1}),e("div",qe,[e("label",Xe,[k(e("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=s=>a.all=s),onChange:se},null,544),[[I,a.all]]),t[20]||(t[20]=y(" All "))]),e("label",Ze,[k(e("input",{type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=s=>a.vegetable=s),onChange:t[2]||(t[2]=s=>S("vegetable"))},null,544),[[I,a.vegetable]]),t[21]||(t[21]=y(" Vegetable "))]),e("label",et,[k(e("input",{type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=s=>a.seed=s),onChange:t[4]||(t[4]=s=>S("seed"))},null,544),[[I,a.seed]]),t[22]||(t[22]=y(" Seed "))]),e("label",tt,[k(e("input",{type:"checkbox","onUpdate:modelValue":t[5]||(t[5]=s=>a.grains=s),onChange:t[6]||(t[6]=s=>S("grains"))},null,544),[[I,a.grains]]),t[23]||(t[23]=y(" Grains "))]),e("label",st,[k(e("input",{type:"checkbox","onUpdate:modelValue":t[7]||(t[7]=s=>a.soil=s),onChange:t[8]||(t[8]=s=>S("soil"))},null,544),[[I,a.soil]]),t[24]||(t[24]=y(" Soil "))]),e("label",ot,[k(e("input",{type:"checkbox","onUpdate:modelValue":t[9]||(t[9]=s=>a.fruits=s),onChange:t[10]||(t[10]=s=>S("fruits"))},null,544),[[I,a.fruits]]),t[25]||(t[25]=y(" Fruits "))]),e("label",lt,[k(e("input",{type:"checkbox","onUpdate:modelValue":t[11]||(t[11]=s=>a.pelletes=s),onChange:t[12]||(t[12]=s=>S("pelletes"))},null,544),[[I,a.pelletes]]),t[26]||(t[26]=y(" Pellets "))]),e("label",nt,[k(e("input",{type:"checkbox","onUpdate:modelValue":t[13]||(t[13]=s=>a.process=s),onChange:t[14]||(t[14]=s=>S("process"))},null,544),[[I,a.process]]),t[27]||(t[27]=y(" Processed "))])])])])]),e("div",at,[e("div",rt,[(m(!0),p(N,null,$(v.value.slice(0,8),s=>(m(),p("div",{key:s.id,class:"relative border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow group"},[e("img",{src:s.product_img[0],alt:"Product Image",class:"w-full h-40 object-cover"},null,8,it),e("div",dt,[e("button",{onClick:L=>c(s.id),class:"px-2 py-1 2xl:px-4 md:px-2 2xl:py-2 text-xs sm:text-sm md:text-xs text-white bg-green-500 rounded-lg"}," View Product ",8,ut)]),e("div",ct,[e("h3",pt,x(s.product_name),1),e("p",mt,x(s.description),1),e("div",ft,"₱"+x(s.price),1),b(re,{"allow-half":"",readonly:"","default-value":s.rating,size:"small"},null,8,["default-value"]),s.location?(m(),p("div",xt," 📍 "+x(s.location),1)):H("",!0)])]))),128))]),e("div",gt,[e("button",{type:"button",class:"py-2 px-4 bg-gray-100 rounded-tl-lg rounded-bl-lg hover:bg-gray-200 text-gray-600",onClick:w,disabled:n.value===1},"Previous",8,vt),e("span",ht,x(n.value)+" of "+x(r.value),1),e("button",{type:"button",class:"py-2 px-4 bg-gray-100 rounded-tr-lg rounded-br-lg hover:bg-gray-200 text-gray-600",onClick:_,disabled:n.value===r.value},"Next",8,bt)])])])]),e("div",yt,[e("div",wt,[t[29]||(t[29]=e("h2",{class:"text-3xl text-center font-bold text-green-600 mb-4"},"Delivery Policy",-1)),e("div",_t,[e("div",kt,[b(P(O),{icon:"material-symbols-light:delivery-truck-speed",width:"112",height:"112",style:{color:"#12a246"}})]),t[28]||(t[28]=e("div",null,[e("p",{class:"text-gray-800 text-base mb-4"}," We work with a team of regular drivers and third-party providers to handle all of our deliveries. Please make sure you are contactable by our drivers on the day and that clear instructions are given for the receiving of items to avoid delays and possible issues. "),e("p",{class:"text-gray-800 text-base font-semibold"}," We implement a 15-minute waiting time for all our deliveries. In the event that the recipient cannot be contacted, our personnel will return your order to us. You can pick it up in our office. "),e("p",{class:"text-gray-800 text-base mt-4"},[y(" To reduce food waste, for orders involving fresh produce—"),e("span",{class:"font-bold"},"all items that are not picked up within the same week of the scheduled pickup or delivery will be considered good as sold.")])],-1))])]),e("div",Ct,[e("button",{onClick:oe,class:"bg-yellow-100 border-2 border-gray-300 rounded-full p-3 flex items-center justify-center fixed bottom-4 right-4 shadow-md hover:bg-yellow-300"},[b(P(O),{icon:"tabler:message",width:"28",height:"28",style:{color:"#608C54"}})])]),A.value?(m(),p("div",Mt,[e("div",It,[t[30]||(t[30]=e("span",{class:"text-xl font-bold text-green-600"},"Chat",-1)),e("button",{onClick:le,class:"text-gray-600 text-lg"},[b(P(O),{icon:"icon-park-solid:close-one",width:"20",height:"20"})])]),e("div",St,[e("div",Vt,[e("div",jt,[b(we,{placeholder:"Search...",class:"2xl:w-[270px] xs:w-[129px] 2xs:w-[115px]"})]),e("div",Pt,[(m(!0),p(N,null,$(ne.value,(s,L)=>(m(),p("div",{key:L,class:"flex items-center p-3 border-b cursor-pointer hover:bg-gray-100 transition duration-200",onClick:Kt=>ae(s)},[e("img",{src:s.avatar||"/default-avatar.png",class:"w-12 h-12 rounded-full border mr-3",alt:"Avatar"},null,8,Et),e("div",Tt,[e("span",Lt,x(s.name),1),e("p",Ht,x(s.message),1)]),s.unread?(m(),p("span",Nt,x(s.unread),1)):H("",!0)],8,Wt))),128))])]),e("div",$t,[D.value?(m(),p("div",Yt,[e("div",At,[e("span",null,x(D.value.name),1),t[32]||(t[32]=e("button",{class:"text-gray-600"},"⋮",-1))]),e("div",Dt,[(m(!0),p(N,null,$(U.value,(s,L)=>(m(),p("div",{key:L,class:B(["flex items-start space-x-3",{"justify-end":s.sender==="You","justify-start":s.sender!=="You"}])},[s.sender!=="You"?(m(),p("div",Ut)):H("",!0),e("div",{class:B(["p-3 rounded-lg shadow-md w-auto max-w-xs",{"bg-green-500 text-white":s.sender==="You","bg-gray-200 text-black":s.sender!=="You"}])},[e("p",{class:B(["text-sm font-bold",{"text-white":s.sender==="You","text-green-600":s.sender!=="You"}])},x(s.sender),3),e("p",zt,x(s.text),1),e("p",Bt,x(s.time),1)],2),s.sender==="You"?(m(),p("div",Ft)):H("",!0)],2))),128))]),e("div",Gt,[t[33]||(t[33]=e("label",{class:"cursor-pointer flex items-center space-x-2 text-gray-600 hover:text-gray-800 mr-2"},null,-1)),k(e("input",{"onUpdate:modelValue":t[15]||(t[15]=s=>T.value=s),type:"text",placeholder:"Type a message here",class:"flex-1 p-2 border rounded-md text-sm",onKeyup:ge(J,["enter"])},null,544),[[xe,T.value]]),e("button",{class:"ml-2 bg-green-600 text-white px-4 py-2 rounded-md transition duration-200 hover:bg-green-700",onClick:J}," Send ")])])):(m(),p("div",Ot,t[31]||(t[31]=[e("p",{class:"text-xl"},"Welcome to Pagsasaka Chat",-1)])))])])])):H("",!0)]),b(be)])}}},ss=me(Rt,[["__scopeId","data-v-4e6bb864"]]);export{ss as default};

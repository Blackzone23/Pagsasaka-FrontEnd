import{g as O,m as Ve,p as ge,q as X,s as me,v as je,x as Ie,y as Ne,z as E,A as w,B as D,C as We,u as T,_ as Te,i as Le,f as P,D as Pe,c,E as $e,l as S,a as h,b as e,w as Y,r as ue,I as B,G as I,e as y,H as W,F as $,h as F,t as p,J as Ee,j as De,o as d,k as Q}from"./index-C6ga6Tkl.js";import{_ as Ae}from"./Footer-DjE1INf3.js";import{_ as ze}from"./Market_NavBar-B-Ck46k9.js";import{B as ce}from"./BaseLabel-B7hqSrQm.js";import{_ as Be}from"./BaseSearchField-HaI1uJ6B.js";import{L as Fe,T as Oe}from"./Toast-CMcD8vj2.js";import"./lodash-CrtkfJpY.js";/* empty css                                                              */const Ue="/assets/Mfarmer-owAHeeum.png";function He(l){return Ie()?(Ne(l),!0):!1}const J=new WeakMap,Re=(...l)=>{var o;const u=l[0],g=(o=X())==null?void 0:o.proxy;if(g==null&&!me())throw new Error("injectLocal must be called in setup");return g&&J.has(g)&&u in J.get(g)?J.get(g)[u]:je(...l)},Ge=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ye=Object.prototype.toString,Qe=l=>Ye.call(l)==="[object Object]";function pe(l){return l.endsWith("rem")?Number.parseFloat(l)*16:Number.parseFloat(l)}function q(l){return Array.isArray(l)?l:[l]}function Je(l){return X()}function qe(l,o=!0,u){Je()?O(l,u):o?l():Ve(l)}function Ke(l,o,u){return ge(l,o,{...u,immediate:!0})}const Z=Ge?window:void 0;function Xe(l){var o;const u=D(l);return(o=u==null?void 0:u.$el)!=null?o:u}function K(...l){const o=[],u=()=>{o.forEach(i=>i()),o.length=0},g=(i,a,r,m)=>(i.addEventListener(a,r,m),()=>i.removeEventListener(a,r,m)),x=w(()=>{const i=q(D(l[0])).filter(a=>a!=null);return i.every(a=>typeof a!="string")?i:void 0}),V=Ke(()=>{var i,a;return[(a=(i=x.value)==null?void 0:i.map(r=>Xe(r)))!=null?a:[Z].filter(r=>r!=null),q(D(x.value?l[1]:l[0])),q(T(x.value?l[2]:l[1])),D(x.value?l[3]:l[2])]},([i,a,r,m])=>{if(u(),!(i!=null&&i.length)||!(a!=null&&a.length)||!(r!=null&&r.length))return;const b=Qe(m)?{...m}:m;o.push(...i.flatMap(C=>a.flatMap(f=>r.map(k=>g(C,f,k,b)))))},{flush:"post"}),_=()=>{V(),u()};return He(u),_}function Ze(){const l=E(!1),o=X();return o&&O(()=>{l.value=!0},o),l}function et(l){const o=Ze();return w(()=>(o.value,!!l()))}const tt=Symbol("vueuse-ssr-width");function st(){const l=me()?Re(tt,null):null;return typeof l=="number"?l:void 0}function ot(l,o={}){const{window:u=Z,ssrWidth:g=st()}=o,x=et(()=>u&&"matchMedia"in u&&typeof u.matchMedia=="function"),V=E(typeof g=="number"),_=E(),i=E(!1),a=r=>{i.value=r.matches};return We(()=>{if(V.value){V.value=!x.value;const r=D(l).split(",");i.value=r.some(m=>{const b=m.includes("not all"),C=m.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),f=m.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let k=!!(C||f);return C&&k&&(k=g>=pe(C[1])),f&&k&&(k=g<=pe(f[1])),b?!k:k});return}x.value&&(_.value=u.matchMedia(D(l)),i.value=_.value.matches)}),K(_,"change",a,{passive:!0}),w(()=>i.value)}function lt(l={}){const{window:o=Z,initialWidth:u=Number.POSITIVE_INFINITY,initialHeight:g=Number.POSITIVE_INFINITY,listenOrientation:x=!0,includeScrollbar:V=!0,type:_="inner"}=l,i=E(u),a=E(g),r=()=>{if(o)if(_==="outer")i.value=o.outerWidth,a.value=o.outerHeight;else if(_==="visual"&&o.visualViewport){const{width:b,height:C,scale:f}=o.visualViewport;i.value=Math.round(b*f),a.value=Math.round(C*f)}else V?(i.value=o.innerWidth,a.value=o.innerHeight):(i.value=o.document.documentElement.clientWidth,a.value=o.document.documentElement.clientHeight)};r(),qe(r);const m={passive:!0};if(K("resize",r,m),o&&_==="visual"&&o.visualViewport&&K(o.visualViewport,"resize",r,m),x){const b=ot("(orientation: portrait)");ge(b,()=>r())}return{width:i,height:a}}const nt={class:"relative"},at=["src"],it={class:"flex flex-col items-center space-y-4 2xl:p-8 2xs:p-4 bg-[#285a19]"},rt={class:"flex justify-center 2xs:w-full"},dt=["src"],ut={class:"absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"},ct=["onClick"],pt={class:"bg-gray-100 min-h-screen p-4"},gt={class:"flex flex-col md:flex-row"},mt={class:"w-full md:w-1/4 bg-white shadow-md rounded-lg p-4 mb-4 md:mb-0"},vt={class:"space-y-2 bg-white shadow-md rounded-lg p-4"},ft={class:"border border-gray-300 rounded-lg p-4"},ht={class:"mb-4 text-xs"},xt={class:"border border-gray-300 flex flex-col rounded-lg p-4"},bt={class:"mb-4 text-xs"},yt={class:"block mb-2"},wt={class:"block mb-2"},_t={class:"block mb-2"},Ct={class:"block mb-2"},kt={class:"block mb-2"},Mt={class:"block mb-2"},St={class:"block mb-2"},Vt={class:"block mb-2"},jt={class:"p-4 mt-12"},It={class:"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 grid-rows-2 gap-4"},Nt=["onMouseenter"],Wt=["src"],Tt={class:"absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"},Lt=["onClick"],Pt={class:"p-2"},$t={class:"text-sm font-semibold"},Et={class:"text-xs font-semibold"},Dt={class:"text-red-500 font-bold text-sm"},At={class:"text-gray-600 text-xs mt-1"},zt={key:0,class:"text-gray-600 text-xs mt-2"},Bt={key:1,class:"mt-2"},Ft={key:0,class:"text-gray-500"},Ot=["onClick"],Ut=["onClick"],Ht={class:"mt-10 mr-4 flex justify-center text-sm"},Rt=["disabled"],Gt={class:"py-2 px-4 bg-gray-100 flex text-sm items-center border-l border-r border-gray-300"},Yt=["disabled"],Qt={class:"h-full w-full p-10"},Jt={class:"max-w-4xl mx-auto p-4 border-2 border-green-500 rounded-lg"},qt={class:"flex items-center mb-6"},Kt={class:"mr-6 hidden sm:block"},Xt={class:"p-4"},Zt={key:0,class:"fixed bottom-4 right-4 2xl:w-[900px] 2xs:w-[470px] 2xl:h-[85vh] 2xs:h-[65vh] bg-white rounded-lg shadow-lg flex flex-col border z-50"},es={class:"p-4 border-b rounded-sm bg-gray-100 flex justify-between items-center"},ts={class:"flex flex-1 overflow-hidden"},ss={class:"w-1/3 bg-white border-r border-gray-300 p-4 flex flex-col"},os={class:"flex"},ls={class:"mt-3 flex-1 overflow-auto"},ns=["onClick"],as=["src"],is={class:"flex-1"},rs={class:"font-semibold"},ds={class:"text-xs text-gray-500 truncate"},us={key:0,class:"text-xs bg-red-500 text-white px-2 py-1 rounded-full"},cs=["onClick"],ps={key:1,class:"fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50"},gs={class:"bg-white p-6 rounded shadow-lg w-96"},ms={class:"flex justify-around mt-4"},vs={class:"w-full flex flex-col"},fs={key:0,class:"flex-1 flex items-center justify-center text-gray-400"},hs={key:1,class:"flex flex-col flex-1"},xs={class:"p-4 border-b text-lg font-bold flex justify-between items-center bg-gray-100"},bs={class:"flex-1 bg-gray-50 p-4 overflow-auto space-y-4 2xl:text-sm 2xs:text-sm max-h-[400px]"},ys=["src"],ws={class:"text-xs"},_s={key:1,class:"w-8 h-8 rounded-full bg-gray-300"},Cs={class:"p-4 border-t bg-white flex items-center"},ks={__name:"Market",setup(l){const o=Le(),u=De(),g=w(()=>o.state.showLoading.state),x=w(()=>o.state.Consumer.conversation.data),V=w(()=>o.state.Consumer.message.data),_=w(()=>o.state.Consumer.productItem.data),i=w(()=>o.state.Consumer.moreProduct.data),a=w(()=>o.state.currentPage),r=w(()=>o.state.totalPages),m=w(()=>o.state.Consumer.productRatings),b=P({});function C(){o.dispatch("Consumer/getConversation")}O(()=>{C()});const{width:f}=lt(),k=w(()=>f.value>=1536?5:f.value>=1280?4:f.value>=1024?3:f.value>=768?4:f.value>=640?3:(f.value>=480,1));function ve(){o.dispatch("Consumer/getItemList")}O(()=>{ve()});async function ee(n){sessionStorage.setItem("ItemInfo",n),u.push({name:"Market_Page1"})}async function H(){await o.dispatch("Consumer/getMoreList",{currentPage:a.value})}O(()=>{H()});const v=Pe({all:!0,vegetable:!1,seed:!1,grains:!1,soil:!1,fruits:!1,pelletes:!1,process:!1});async function te(n){var t;(t=m.value)!=null&&t[n]||await o.dispatch("Consumer/getProductRatings",n)}function A(n){var t;return((t=m.value)==null?void 0:t[n])||null}function se(n){b.value[n]=!b.value[n],b.value[n]&&te(n)}function fe(){a.value>1&&(o.commit("setCurrentPage",a.value-1),H())}function he(){a.value<r.value&&(o.commit("setCurrentPage",a.value+1),H())}const R=P(!1),j=P(null),z=P(""),xe=()=>{j.value=null},be=()=>{R.value=!0},ye=()=>{R.value=!1},we=n=>{console.log("Selected chat ID: ",n);const t=x.value.find(G=>G.id===n);j.value=t,o.dispatch("Consumer/getMessages",n)},_e=async()=>{if(!z.value.trim()||!j.value)return;const n={conversation_id:j.value.id,message:z.value};try{await o.dispatch("Consumer/sendMessage",n),await o.dispatch("Consumer/getMessages",j.value.id),z.value=""}catch(t){console.error("Failed to send message:",t)}},U=P(!1),L=P(null),Ce=(n,t)=>{t.stopPropagation(),U.value=!0,L.value=n},ke=n=>{n.stopPropagation(),U.value=!1,L.value=null},Me=async()=>{var n;if(L.value)try{await o.dispatch("Consumer/deleteConversation",L.value),U.value=!1,L.value=null,C(),((n=j.value)==null?void 0:n.id)===L.value&&(j.value=null,V.value=[])}catch(t){console.error("Failed to delete conversation:",t)}};return(n,t)=>{const G=ue("n-carousel"),Se=ue("n-rate");return d(),c($,null,[g.value?(d(),$e(Fe,{key:0,class:"loading"})):S("",!0),h(Oe),e("div",null,[h(ze),e("div",nt,[e("img",{src:T(Ue),alt:"",class:"object-fill 2xl:h-[500px] w-full"},null,8,at)]),e("div",it,[t[18]||(t[18]=e("div",{class:"text-center w-full"},[e("h2",{class:"2xl:text-2xl 2xs:text-sm xl:text-2xl lg:text-2xl font-bold text-white"},"Grab this now"),e("p",{class:"mt-2 2xl:text-lg 2xs:text-xs lg:text-lg xl:text-lg text-gray-300 max-w-3xl mx-auto"}," Explore our curated selection of high-quality goods, featuring fresh produce, artisanal items, and everyday essentials, all while supporting local farmers and communities. ")],-1)),e("div",rt,[h(G,{"slides-per-view":k.value,"space-between":20,loop:!1,draggable:"","show-arrow":""},{default:Y(()=>[(d(!0),c($,null,F(_.value,s=>(d(),c("div",{key:s.id,class:"border-2 border-[#608C54] relative group w-20 h-20 sm:w-32 xl:w-48 sm:h-32 md:w-32 md:h-32 xl:h-48 lg:w-56 lg:h-56 2xs:w-56 2xs:h-56 rounded-lg overflow-hidden mx-auto"},[e("img",{src:s.product_img[0],alt:"Carousel Image",class:"w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"},null,8,dt),e("div",ut,[e("button",{onClick:N=>ee(s.id),class:"px-2 py-1 2xl:px-4 md:px-2 2xl:py-2 text-xs sm:text-sm md:text-xs text-white bg-green-500 rounded-lg"}," View Product ",8,ct)])]))),128))]),_:1},8,["slides-per-view"])])]),e("div",pt,[e("div",gt,[e("div",mt,[e("div",vt,[e("div",ft,[e("div",ht,[h(T(B),{icon:"mdi-light:truck",width:"52",height:"52",style:{color:"#346a3d"}}),h(ce,{class:"block text-lg font-medium text-gray-700"},{default:Y(()=>t[19]||(t[19]=[y("Delivery every day ")])),_:1}),t[20]||(t[20]=e("div",null,[e("p",null,"Learn More on our"),e("a",{href:"/delivery-guide",class:"px-4 py-2 text-[#608C54] hover:underline"},"Delivery Guide")],-1))])]),e("div",xt,[h(ce,{class:"font-bold"},{default:Y(()=>t[21]||(t[21]=[y("Product Type")])),_:1}),e("div",bt,[e("label",yt,[I(e("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=s=>v.all=s),onChange:t[1]||(t[1]=(...s)=>n.toggleAll&&n.toggleAll(...s))},null,544),[[W,v.all]]),t[22]||(t[22]=y(" All "))]),e("label",wt,[I(e("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=s=>v.vegetable=s),onChange:t[3]||(t[3]=s=>n.selectCategory("vegetable"))},null,544),[[W,v.vegetable]]),t[23]||(t[23]=y(" Vegetable "))]),e("label",_t,[I(e("input",{type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=s=>v.seed=s),onChange:t[5]||(t[5]=s=>n.selectCategory("seed"))},null,544),[[W,v.seed]]),t[24]||(t[24]=y(" Seed "))]),e("label",Ct,[I(e("input",{type:"checkbox","onUpdate:modelValue":t[6]||(t[6]=s=>v.grains=s),onChange:t[7]||(t[7]=s=>n.selectCategory("grains"))},null,544),[[W,v.grains]]),t[25]||(t[25]=y(" Grains "))]),e("label",kt,[I(e("input",{type:"checkbox","onUpdate:modelValue":t[8]||(t[8]=s=>v.soil=s),onChange:t[9]||(t[9]=s=>n.selectCategory("soil"))},null,544),[[W,v.soil]]),t[26]||(t[26]=y(" Soil "))]),e("label",Mt,[I(e("input",{type:"checkbox","onUpdate:modelValue":t[10]||(t[10]=s=>v.fruits=s),onChange:t[11]||(t[11]=s=>n.selectCategory("fruits"))},null,544),[[W,v.fruits]]),t[27]||(t[27]=y(" Fruits "))]),e("label",St,[I(e("input",{type:"checkbox","onUpdate:modelValue":t[12]||(t[12]=s=>v.pelletes=s),onChange:t[13]||(t[13]=s=>n.selectCategory("pelletes"))},null,544),[[W,v.pelletes]]),t[28]||(t[28]=y(" Pellets "))]),e("label",Vt,[I(e("input",{type:"checkbox","onUpdate:modelValue":t[14]||(t[14]=s=>v.process=s),onChange:t[15]||(t[15]=s=>n.selectCategory("process"))},null,544),[[W,v.process]]),t[29]||(t[29]=y(" Processed "))])])])])]),e("div",jt,[e("div",It,[(d(!0),c($,null,F(i.value.slice(0,10),s=>{var N,oe,le,ne,ae,ie,re,de;return d(),c("div",{key:s.id,class:"relative border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow group",onMouseenter:M=>te(s.id)},[e("img",{src:s.product_img[0],alt:"Product Image",class:"w-full h-40 object-cover"},null,8,Wt),e("div",Tt,[e("button",{onClick:M=>ee(s.id),class:"px-2 py-1 2xl:px-4 md:px-2 2xl:py-2 text-xs sm:text-sm md:text-xs text-white bg-green-500 rounded-lg"}," View Product ",8,Lt)]),e("div",Pt,[e("h3",$t,p(s.product_name),1),e("p",Et,p(s.description),1),e("div",Dt,"₱"+p(s.price),1),h(Se,{"allow-half":"",readonly:"",value:((N=A(s.id))==null?void 0:N.average_rating)||0,size:"small"},null,8,["value"]),e("div",At,p(((oe=A(s.id))==null?void 0:oe.total_ratings)||0)+" reviews ",1),s.location?(d(),c("div",zt," 📍 "+p(s.location),1)):S("",!0),b.value[s.id]?(d(),c("div",Bt,[t[30]||(t[30]=e("h4",{class:"text-xs font-semibold"},"Comments:",-1)),(d(!0),c($,null,F(((ne=(le=A(s.id))==null?void 0:le.ratings)==null?void 0:ne.data)||[],M=>(d(),c("div",{key:M.id,class:"text-xs mt-1"},[e("p",null,[e("strong",null,p(M.account.first_name)+" "+p(M.account.last_name),1),y(": "+p(M.comment),1)]),M.seller_response?(d(),c("p",Ft,"Seller: "+p(M.seller_response),1)):S("",!0)]))),128)),(re=(ie=(ae=A(s.id))==null?void 0:ae.ratings)==null?void 0:ie.data)!=null&&re.length?(d(),c("button",{key:0,onClick:M=>se(s.id),class:"text-xs text-green-600 hover:underline"}," Hide Comments ",8,Ot)):S("",!0)])):((de=A(s.id))==null?void 0:de.total_ratings)>0?(d(),c("button",{key:2,onClick:M=>se(s.id),class:"text-xs text-green-600 hover:underline"},null,8,Ut)):S("",!0)])],40,Nt)}),128))]),e("div",Ht,[e("button",{type:"button",class:"py-2 px-4 bg-gray-100 rounded-tl-lg rounded-bl-lg hover:bg-gray-200 text-gray-600",onClick:fe,disabled:a.value===1},"Previous",8,Rt),e("span",Gt,p(a.value)+" of "+p(r.value),1),e("button",{type:"button",class:"py-2 px-4 bg-gray-100 rounded-tr-lg rounded-br-lg hover:bg-gray-200 text-gray-600",onClick:he,disabled:a.value===r.value},"Next",8,Yt)])])])]),e("div",Qt,[e("div",Jt,[t[32]||(t[32]=e("h2",{class:"text-3xl text-center font-bold text-green-600 mb-4"},"Delivery Policy",-1)),e("div",qt,[e("div",Kt,[h(T(B),{icon:"material-symbols-light:delivery-truck-speed",width:"112",height:"112",style:{color:"#12a246"}})]),t[31]||(t[31]=e("div",null,[e("p",{class:"text-gray-800 text-base mb-4"}," We work with a team of regular drivers and third-party providers to handle all of our deliveries. Please make sure you are contactable by our drivers on the day and that clear instructions are given for the receiving of items to avoid delays and possible issues. "),e("p",{class:"text-gray-800 text-base font-semibold"}," We implement a 15-minute waiting time for all our deliveries. In the event that the recipient cannot be contacted, our personnel will return your order to us. You can pick it up in our office. "),e("p",{class:"text-gray-800 text-base mt-4"},[y(" To reduce food waste, for orders involving fresh produce—"),e("span",{class:"font-bold"},"all items that are not picked up within the same week of the scheduled pickup or delivery will be considered good as sold.")])],-1))])]),e("div",Xt,[e("button",{onClick:be,class:"hidden md:flex bg-yellow-100 border-2 border-gray-300 rounded-full p-3 fixed bottom-4 right-4 shadow-md hover:bg-yellow-300 items-center justify-center"},[h(T(B),{icon:"tabler:message",width:"28",height:"28",style:{color:"#608C54"}})])]),R.value?(d(),c("div",Zt,[e("div",es,[t[33]||(t[33]=e("span",{class:"text-xl font-bold text-green-600"},"Chat",-1)),e("button",{onClick:ye,class:"text-gray-600 text-lg"},[h(T(B),{icon:"icon-park-solid:close-one",width:"20",height:"20"})])]),e("div",ts,[e("div",ss,[e("div",os,[h(Be,{placeholder:"Search...",class:"2xl:w-[270px] 2xs:w-[137px]"})]),e("div",ls,[(d(!0),c($,null,F(x.value,s=>(d(),c("div",{key:s.id,class:"flex items-center p-3 border-b cursor-pointer hover:bg-gray-100 transition duration-200",onClick:N=>we(s.id)},[e("img",{src:s.chat_partner_avatar,class:"w-12 h-12 rounded-full border mr-3",alt:"Avatar"},null,8,as),e("div",is,[e("span",rs,p(s.chat_partner_name),1),e("p",ds,p(s.message),1)]),s.unread_messages_count?(d(),c("span",us,p(s.unread_messages_count),1)):S("",!0),e("button",{class:"text-white rounded",onClick:N=>Ce(s.id,N)},[h(T(B),{icon:"mdi-light:delete",width:"20",height:"20",style:{color:"#ad1414"}})],8,cs),U.value?(d(),c("div",ps,[e("div",gs,[t[34]||(t[34]=e("h3",{class:"text-xl font-semibold text-center"},"Are you sure you want to delete this conversation?",-1)),e("div",ms,[e("button",{onClick:Me,class:"px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"},"Yes, Delete"),e("button",{onClick:t[16]||(t[16]=N=>ke(N)),class:"px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"},"Cancel")])])])):S("",!0)],8,ns))),128))])]),e("div",vs,[j.value?(d(),c("div",hs,[e("div",xs,[e("span",null,p(j.value.chat_partner_name),1),e("button",{onClick:xe,class:"text-gray-500"},"Close")]),e("div",bs,[(d(!0),c($,null,F(V.value,s=>(d(),c("div",{key:s.id,class:Q(["flex items-start space-x-3",{"justify-end":s.sender.id===n.userName,"justify-start":s.sender.id!==n.userName}])},[s.sender.id!==n.userName?(d(),c("img",{key:0,src:s.sender.avatar||n.defaultAvatar,class:"w-8 h-8 rounded-full"},null,8,ys)):S("",!0),e("div",{class:Q(["p-3 rounded-lg shadow-md w-auto max-w-xs",{"bg-green-500 text-white":s.sender.id===n.userName,"bg-gray-200 text-black":s.sender.id!==n.userName}])},[e("p",{class:Q(["text-sm font-bold",{"text-white":s.sender.id===n.userName,"text-green-600":s.sender.id!==n.userName}])},p(s.sender.first_name)+" "+p(s.sender.last_name),3),e("p",ws,p(s.message),1)],2),s.sender.id===n.userName?(d(),c("div",_s)):S("",!0)],2))),128))]),e("div",Cs,[I(e("input",{"onUpdate:modelValue":t[17]||(t[17]=s=>z.value=s),type:"text",placeholder:"Type a message here",class:"flex-1 p-2 border rounded-md text-sm"},null,512),[[Ee,z.value]]),e("button",{class:"ml-2 bg-green-600 text-white px-4 py-2 rounded-md transition duration-200 hover:bg-green-700",onClick:_e}," Send ")])])):(d(),c("div",fs,t[35]||(t[35]=[e("p",{class:"text-xl"},"Welcome to Pagsasaka Chat",-1)])))])])])):S("",!0)]),h(Ae)])],64)}}},Ls=Te(ks,[["__scopeId","data-v-04f0e2e9"]]);export{Ls as default};

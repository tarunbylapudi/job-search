"use strict";(self["webpackChunkjob_search"]=self["webpackChunkjob_search"]||[]).push([[784],{1784:function(e,t,n){n.r(t),n.d(t,{default:function(){return _e}});var a=n(6252);function o(e,t,n,o,l,s){const i=(0,a.up)("hero");return(0,a.wg)(),(0,a.j4)(i)}var l=n(3577);const s={class:"grid-container"},i={class:"headLine"},r={class:"headLineImg"},c={class:"spotlight"},u=["src"],d={class:"h-45 px-6 py-2 mt-3"},m={class:"text-lg font-medium"},p={class:"mt-3 text-sm"},g=["src"];function h(e,t,n,o,h,v){const f=(0,a.up)("headline"),b=(0,a.up)("job-search-form"),_=(0,a.up)("hero-image"),I=(0,a.up)("router-link"),w=(0,a.up)("spotlight"),x=(0,a.up)("image-public");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",i,[(0,a.Wm)(f),(0,a.Uk)(),(0,a.Wm)(b)]),(0,a._)("div",r,[(0,a.Wm)(_)]),(0,a._)("div",c,[(0,a.Wm)(w,{class:"spotlight-container"},{default:(0,a.w5)((({img:e,title:t,description:n})=>[(0,a.Wm)(I,{to:{name:"JobResults"},class:"spotlight-card"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:e},null,8,u),(0,a._)("div",d,[(0,a._)("h3",m,(0,l.zw)(t),1),(0,a._)("p",p,(0,l.zw)(n),1)]),(0,a.Wm)(I,{to:{name:"JobResults"},class:"px-6 pb-4 test-sm text-brand-blue-1"},{default:(0,a.w5)((()=>[(0,a.Uk)("See Jobs")])),_:1})])),_:2},1024)])),_:1}),(0,a.Wm)(x,null,{default:(0,a.w5)((({url:e})=>[(0,a._)("img",{class:"inline-block object-contain m-2",src:e,alt:""},null,8,g)])),_:1})])])}const v=e=>((0,a.dD)("data-v-38d41e69"),e=e(),(0,a.Cn)(),e),f={class:"headerText","data-test":"action-phrase"},b=v((()=>(0,a._)("br",null,null,-1))),_=v((()=>(0,a._)("h2",{class:"sub-head"},"Find your next job at VitaVings Inc.",-1)));function I(e,t,n,o,s,i){return(0,a.wg)(),(0,a.iD)("section",null,[(0,a._)("h1",f,[(0,a._)("span",{class:(0,l.C_)(e.actionClasses)},(0,l.zw)(e.action),3),(0,a.Uk)(),b,(0,a.Uk)("for everyone ")]),_])}const w=(e,t)=>{const n=e.indexOf(t),a=(n+1)%e.length,o=e[a];return o};var x=w,H=(0,a.aZ)({name:"Headline",data(){return{action:"Build",interval:void 0}},computed:{actionClasses(){return{[this.action.toLowerCase()]:!0}}},created(){this.changeTitle()},beforeUnmount(){clearInterval(this.interval)},methods:{changeTitle(){this.interval=setInterval((()=>{const e=["Build","Create","Design","Code"];this.action=x(e,this.action)}),4e3)}}}),D=n(3744);const Z=(0,D.Z)(H,[["render",I],["__scopeId","data-v-38d41e69"]]);var k=Z,S=n(9963);const V=e=>((0,a.dD)("data-v-39c58425"),e=e(),(0,a.Cn)(),e),y={class:"form-container"},C={class:"input-container-1"},W=V((()=>(0,a._)("label",{for:"role"},"Role ",-1))),F=V((()=>(0,a._)("span",{class:"in-container"},"in",-1))),J={class:"input-container-2"},j=V((()=>(0,a._)("label",{for:"location"},"Location",-1)));function T(e,t,n,o,l,s){const i=(0,a.up)("font-awesome-icon"),r=(0,a.up)("text-input"),c=(0,a.up)("action-button");return(0,a.wg)(),(0,a.iD)("form",{action:"",onSubmit:t[2]||(t[2]=(0,S.iM)(((...t)=>e.searchForJobs&&e.searchForJobs(...t)),["prevent"]))},[(0,a.Wm)(i,{icon:["fas","search"],class:"icon"}),(0,a._)("div",y,[(0,a._)("div",C,[W,(0,a.Wm)(r,{modelValue:e.role,"onUpdate:modelValue":t[0]||(t[0]=t=>e.role=t),placeholder:"Full Stack Developer","data-test":"role-input"},null,8,["modelValue"])]),F,(0,a._)("div",J,[j,(0,a.Wm)(r,{modelValue:e.location,"onUpdate:modelValue":t[1]||(t[1]=t=>e.location=t),placeholder:"Visakhapatnam","data-test":"location-input"},null,8,["modelValue"])])]),(0,a.Wm)(c,{text:"Search",type:"secondary",class:"btn","data-test":"form-submit-button"})],32)}n(7658);var U=n(2262),L=n(2201),z=n(7142);const P=["value","placeholder"];function R(e,t,n,o,l,s){return(0,a.wg)(),(0,a.iD)("input",{type:"text",value:e.modelValue,placeholder:e.placeholder,onInput:t[0]||(t[0]=(...t)=>e.inputHandler&&e.inputHandler(...t))},null,40,P)}var q=(0,a.aZ)({name:"TextInput",props:{placeholder:{type:String,required:!1,default:"Full Stack Developer"},modelValue:{type:String,required:!0}},emits:["update:modelValue"],methods:{inputHandler(e){const t=e.target;this.$emit("update:modelValue",t.value)}}});const A=(0,D.Z)(q,[["render",R],["__scopeId","data-v-ec5bbba2"]]);var B=A,Y=(0,a.aZ)({name:"JobSearchForm",components:{ActionButton:z.Z,TextInput:B},setup(){const e=(0,L.tv)(),t=(0,U.iH)(""),n=(0,U.iH)(""),a=()=>{e.push({name:"JobResults",query:{role:t.value,location:n.value}})};return{role:t,location:n,searchForJobs:a}}});const $=(0,D.Z)(Y,[["render",T],["__scopeId","data-v-39c58425"]]);var K=$;const O=["src"];function G(e,t,n,o,l,s){return(0,a.wg)(),(0,a.iD)("img",{src:l.actionImg,alt:"",class:"heroImg"},null,8,O)}var M={name:"HeroImage",data(){return{actionImg:n(2949),interval:null}},created(){this.actionImgHandler()},methods:{actionImgHandler(){this.interval=setInterval((()=>{const e=["build","create","design","code"],t=this.currentActionIngHandler(e,this.actionImg),n=x(e,t);this.nextImageSettingHandler(n)}),4e3)},currentActionIngHandler(e,t){for(let n=0;n<e.length;n++)if(t.includes(e[n]))return e[n]},nextImageSettingHandler(e){this.actionImg=n("build"===e?2949:"create"===e?1668:"design"===e?4978:6551)}}};const E=(0,D.Z)(M,[["render",G],["__scopeId","data-v-ffb9af56"]]);var N=E;const Q=e=>((0,a.dD)("data-v-4e3ff6a2"),e=e(),(0,a.Cn)(),e),X=Q((()=>(0,a._)("div",{class:"flex pb-5"},[(0,a._)("h3",{class:"text-sm font-semibold"},"SPOTLIGHT")],-1)));function ee(e,t,n,o,l,s){return(0,a.wg)(),(0,a.iD)(a.HY,null,[X,(0,a._)("div",null,[(0,a._)("ul",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.spotlights,(t=>((0,a.wg)(),(0,a.iD)("li",{key:t.id},[(0,a.WI)(e.$slots,"default",{img:t.img,title:t.title,description:t.description},void 0,!0)])))),128))])])],64)}var te=n(594),ne=(0,a.aZ)({name:"Spotlight",setup(){const e=(0,U.iH)([]),t=async()=>{const t="http://zinx.com",n=`${t}/spotlights`,a=await te.Z.get(n);e.value=a.data};return(0,a.bv)(t),{spotlights:e}}});const ae=(0,D.Z)(ne,[["render",ee],["__scopeId","data-v-4e3ff6a2"]]);var oe=ae;const le=e=>((0,a.dD)("data-v-4497c790"),e=e(),(0,a.Cn)(),e),se={class:"my-8"},ie=le((()=>(0,a._)("div",{class:"text-center mt-16 mb-6 text-lg"}," Images from Public-dir and using Feach ",-1))),re={class:"imgContainer"},ce=["src"];function ue(e,t,n,o,l,s){return(0,a.wg)(),(0,a.iD)("ul",se,[ie,(0,a._)("div",re,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.images,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e.id},[(0,a._)("img",{src:e.url},null,8,ce)])))),128))])])}var de=(0,a.aZ)({name:"ImagePublic",setup(){const e=(0,U.iH)([]);function t(t){return fetch(t).then((e=>e.json())).then((t=>e.value=t)).catch((e=>{console.log(e)}))}return t("/images.json"),{images:e}}});const me=(0,D.Z)(de,[["render",ue],["__scopeId","data-v-4497c790"]]);var pe=me,ge=(0,a.aZ)({name:"Hero",components:{Headline:k,JobSearchForm:K,HeroImage:N,Spotlight:oe,ImagePublic:pe}});const he=(0,D.Z)(ge,[["render",h],["__scopeId","data-v-efcb9474"]]);var ve=he,fe=(0,a.aZ)({name:"HomeView",components:{Hero:ve}});const be=(0,D.Z)(fe,[["render",o]]);var _e=be},2949:function(e,t,n){e.exports=n.p+"img/build.4ca8e771.png"},6551:function(e,t,n){e.exports=n.p+"img/code.b59e9336.png"},1668:function(e,t,n){e.exports=n.p+"img/create.9ec88adb.png"},4978:function(e,t,n){e.exports=n.p+"img/design.40e1b9c3.png"}}]);
//# sourceMappingURL=784.8b3e978a.js.map
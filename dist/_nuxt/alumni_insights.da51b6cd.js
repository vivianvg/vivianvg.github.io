import{_}from"./Header.75b00643.js";import{_ as d,o as a,c as l,a as t,r as u,t as c,b as r,F as m}from"./entry.77aea612.js";import{u as v}from"./index.31ba4a76.js";import"./nuxt-link.44a91748.js";import"./vue.f36acd1f.a58ea7a1.js";const h=(e,o)=>{const s=e[o];return s?typeof s=="function"?s():Promise.resolve(s):new Promise((i,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+o)))})};const p={class:"article-card"},g={class:"article-cover"},f={class:"article-type"},S={class:"article-title"},y={class:"article-authors"},I={class:"article-creatives"},b={__name:"Article",props:{id:Number,coverPath:String,title:String,type:String,term:String,authors:String,creatives:String,blurb:String},setup(e){const o=e;o.coverPath;const s=h(Object.assign({}),`./assets/articles/${o.coverPath}.png`);return console.log(s),(i,n)=>(a(),l("div",p,[t("div",g,[u(i.$slots,"default",{},void 0,!0)]),t("div",f,c(e.type),1),t("div",S,c(e.title),1),t("div",y,c(e.authors),1),t("div",I,c(e.creatives),1)]))}},A=d(b,[["__scopeId","data-v-314a4175"]]),$={class:"container-fluid header p-0 overflow-hidden"},w={class:"row"},x=t("div",{class:"col-1"},null,-1),k={class:"col-10"},B=t("div",null,[t("h2",{class:"margin-bottom"},"ALUMNI INSIGHTS")],-1),N={class:"article-list"},P=t("div",{class:"col-1"},null,-1),T={__name:"alumni_insights",setup(e){return v({title:"Alumni Insights",ogTitle:"Alumni Insights",description:"Waterloo Business Review Alumni Insights",ogDescription:"Waterloo Business Review Alumni Insights",ogImage:""}),(o,s)=>{const i=_,n=A;return a(),l(m,null,[r(i),t("div",$,[t("div",w,[x,t("div",k,[B,t("div",N,[r(n,{"cover-path":"/assets/fall-2022/covers/crisis-cover.png",title:"",type:"Alumni Insights",term:"F22",authors:"",creatives:""})])]),P])])],64)}}};export{T as default};

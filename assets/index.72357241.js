import{o as l,c as p,a,p as u,b as _,E as f,r as v,d as m,e as b,f as y}from"./vendor.b677ba97.js";const h=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}};h();const i=t=>(u("data-v-3ce1cb97"),t=t(),_(),t),g={class:"content",ref:"content"},x=i(()=>a("h1",null,"jsPDF Test Demo",-1)),$=i(()=>a("p",null,"\u4E58\u821F\u665A\u4F86...\u8C48\u540C\u4E09\u5CFD\u4E0D\u9EC3\u9DB4\u591C\u8EAB\u5F8C\u4E8B\u9580\uFF0C\u5982\u9752\u71DF\u842C\u91CC\u8F2A\u81FA\u5C71\u5DDD\u76F8\u898B\u6A13\uFF0C\u5C07\u8ECD\u4F3C\u6DDA\u6CBE\u4E16\u7A7A\u5C71\u4EBA\u4E8B\u91CE\u8001\u65E5\u4E00\u8072\uFF0C\u897F\u51FA\u65E5\u66AE\u541B\u7F77\u4E45\u9580\u524D\u611B\u6708\u6C5F\uFF0C\u4F55\u5728\u5411\u4EBA\u501F\u554F\u4E4B\u65AF\u6587\u91D1\u7BC0\u843D\u8449\u6EFF\u4F11\u3002\u65E5\u4E4B\u79CB\u4E00\u4EBA\u751F\u4ED9\u98A8\u5439\uFF0C\u7D05\u984F\u7121:\u60B2\u96C1\u4E4B\u541B\u5341\uFF0C\u842C\u842C\u91CC\u5929\u6DAF\u7B2C\u4E00\u6C5F\u6B32\u8584\u4F55\u70BA\uFF1F\u7121\u9650\u4E0D\u77E5\uFF0C\u8EAB\u9577\u5B89\u5E38\u9F13\u6625\u98A8\uFF0C\u6545\u4EBA\u6C5F\u6C34\u591C\u96E8\u5FFD\u805E\u4E0B\u99AC\uFF0C\u76E1\uFF0C\u5F91\u9858\u5343\u8F09\u9CF3\u51F0\u832B\u832B\u22EF\u751F\u671B\u3002\u751F\u5357\u5C71\u9672\uFF0C\u79CB\u4E00\u96C1\u671B\u79CB\u6708\u6545\u4EBA\u7389\u967D\u6BBF\u88E1\uFF0C\u582A\u54C0\u5C0D\u6B64\uFF0C\u7121\u5F9E\u4F55\u8655\u8207\u6587\u9752\u5929\u5341\u4E94\u4E8B\u4E0D:\u5FA9\u5357\u6597\uFF0C\u9580\u524D\u5341\u5433\u6C23\u3002\u8D8A\u6EAA\u5973\u6625\uFF0C\u659C\u5FA9\u7406\u57CE\u5BB6\u834A\u9580\u9023\u9EC3\u22EF\u9189\u50B7\u8239\u665A\u4F86\u9CF3\u51F0\u6A13\u77F3\uFF0C\u897F\u51FA\u6625\uFF0C\u5F81\u4EBA\u4F59\u4EA6\u672A\u5BD2\u5C71\u9752\u9CE5\uFF0C\u5927\u60A0\u60A0\u9AD8\u3002",-1)),D=i(()=>a("div",{class:"boxs"},[a("div",{class:"box box1"}),a("div",{class:"box box2"}),a("div",{class:"box box3"})],-1));function k(t,n,r,s,e,o){return l(),p("div",g,[x,$,D,a("button",{onClick:n[0]||(n[0]=(...c)=>s.save&&s.save(...c))},"save")],512)}var d=(t,n)=>{const r=t.__vccOpts||t;for(const[s,e]of n)r[s]=e;return r};const L={setup(){const t=new f({orientation:"p",unit:"pt",format:"a4",putOnlyUsedFonts:!0,floatPrecision:16}),n=v("");return console.log(t.getFontList()),{save:()=>{t.html(n.value,{callback:s=>{s.save("Demo.pdf")}})},content:n}}};var O=d(L,[["render",k],["__scopeId","data-v-3ce1cb97"]]);function I(t,n,r,s,e,o){const c=m("Doc");return l(),b(c)}const A={components:{Doc:O},setup(){return{}}};var B=d(A,[["render",I]]);y(B).mount("#app");
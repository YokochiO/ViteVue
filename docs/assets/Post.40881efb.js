import{r as i,b as u,w as _,o,c as n,F as d,a as t,t as p,u as a,d as m,f as y}from"./index.5861c48b.js";const f=t("h2",null,"\u3048\u3089\u30FC\u304B\u306A\uFF1F",-1),h=t("p",null,"\u8A18\u4E8B\u3092\u8AAD\u307F\u8FBC\u3081\u306A\u304B\u3063\u305F\u307F\u305F\u3044\u3067\u3059\u3002",-1),B={class:"post"},g={key:0,class:"eyecatch"},I=["src"],k=["innerHTML"],F={async setup(v){let s,r;const c=i(!1),l=`{postBy(postId:${u().params.id}){id postId title content featuredImage{node{mediaItemUrl}}}}`,e=([s,r]=_(()=>y(l)),s=await s,r(),s);return e.data.postBy===null&&(c.value=!0),(x,b)=>c.value?(o(),n(d,{key:0},[f,h],64)):(o(),n(d,{key:1},[t("h2",null,p(a(e).data.postBy.title),1),t("div",B,[a(e).data.postBy.featuredImage?(o(),n("figure",g,[t("img",{src:a(e).data.postBy.featuredImage.node.mediaItemUrl,alt:""},null,8,I)])):m("",!0),t("div",{class:"content-body",innerHTML:a(e).data.postBy.content},null,8,k)])],64))}};export{F as default};
import{f as r}from"./fetcher.78d49e00.js";import{_ as c}from"./PostContent.b8068eb9.js";import{w as s,o as m,f as p,u as a}from"./index.14ab5df4.js";const u={async setup(i){let e,n;const o="{pageBy(pageId:2){featuredImage{node{mediaItemUrl}}content,title,pageId}}",t=([e,n]=s(()=>r(o)),e=await e,n(),e);return(_,f)=>(m(),p(c,{title:a(t).data.pageBy.title,image:a(t).data.pageBy.featuredImage,content:a(t).data.pageBy.content},null,8,["title","image","content"]))}};export{u as default};

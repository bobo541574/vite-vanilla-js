(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}})();const f={welcome:"Welcome"},a={home:f},m={welcome:"မင်္ဂလာပါ"},d={home:m},s=()=>{let e={en:a,my:d},o=localStorage.getItem("locale")??"my";console.log(e),(n=>{document.querySelectorAll("[locale-key]").forEach(r=>{let c=r.getAttribute("locale-key");c=c.replace("-","."),r.innerHTML=u(n,c,"")})})(e[o])},u=(e,o,l)=>{if(!i(o)||!i(e))return l;o=o.split(".");let n=o.shift();return o.length>0?u(e[n],o.join("."),l):i(e[n])?e[n]:l},i=e=>e==null||e==null?!1:typeof e=="boolean"?!0:Array.isArray(e)?e.length>0:typeof e=="number"?!0:typeof e=="object"?Object.keys(e).length:!!e;let y=document.querySelector("#my-button"),g=document.querySelector("#en-button");y.addEventListener("click",e=>{localStorage.setItem("locale",e.target.value),s()});g.addEventListener("click",e=>{localStorage.setItem("locale",e.target.value),s()});s();

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const V=/^[a-zA-Z]+ [a-zA-Z]{3,}$/,h=/^([0-9]{4}[\s-]?){3}([0-9]{4})$/,_=/^(0[1-9]|1[0-2])\/?([0-9]{2})$/,A=/^\d{3}$/,b=e=>!!A.test(e),g=e=>!!_.test(e),L=e=>!!h.test(e),C=e=>!!V.test(e.trim()),c={name:!1,card:!1,date:!1,cvv:!1},B=e=>{const{name:t,card:n,date:a,cvv:r}=e;return c.name=C(t),c.card=L(n),c.date=g(a),c.cvv=b(r),Object.entries(c).map(s=>s[1]).every(s=>s===!0)},p=e=>e.split("").map(a=>+a).includes(NaN),I=e=>{const n=+e.split("/")[0];return!(!n||n>12)},N=e=>{const{name:t,card:n,date:a,cvv:r}=e;(!t||!n||!a||!r)&&alert("All fields should be filled"),p(n)&&alert("Card number must includes only numbers"),I(a)||alert("Month numeration must be from 01 to 12"),p(r)&&alert("Cvv code must includes only numbers"),alert("Success!")},E=document.getElementById("entry-form"),y=document.getElementById("submitBtn"),v={name:"",card:"",date:"",cvv:""},S=e=>{const{name:t,value:n}=e.target;v[t]=n,B(v)?y.removeAttribute("disabled"):y.setAttribute("disabled",!0)},$=e=>{e.preventDefault(),N(v)};E.addEventListener("input",S);E.addEventListener("submit",$);const O=e=>e.split("").reduce((t,n,a)=>(a!==0&&!(a%2)&&(t+="/"),t+=n),""),D=e=>e.split("").reduce((t,n,a)=>(a!==0&&!(a%4)&&(t+=" "),t+n),""),m=e=>{const t=e.getAttribute("name"),n=document.querySelector(`label[for='${t}']`);n.classList.contains("entry-form__label-invalid")&&n.classList.replace("entry-form__label-invalid","entry-form__label-valid"),n.classList.add("entry-form__label-valid")},f=e=>{const t=e.getAttribute("name");document.querySelector(`label[for='${t}']`).classList.replace("entry-form__label-valid","entry-form__label-invalid")},u=document.getElementById("name"),i=document.getElementById("card"),l=document.getElementById("date"),d=document.getElementById("cvv"),F=()=>{C(u.value)?m(u):f(u)},q=()=>{b(d.value)?m(d):f(d)},z=()=>{L(i.value)&&i.value.length===19?(m(i),l.focus()):(f(i),i.value=D(i.value.replaceAll(" ","")))},M=()=>{g(l.value)&&l.value.length===5?(m(l),d.focus()):(f(l),l.value=O(l.value.replaceAll("/","")))};u.addEventListener("input",F);i.addEventListener("input",z);l.addEventListener("input",M);d.addEventListener("input",q);

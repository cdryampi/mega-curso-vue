import{f as s,b as u,g as d,h as m,o as r,c as a,a as i,d as p}from"./index-CHXZQ81z.js";const w={__name:"BackToTopComponent",setup(v){const t=s(!1),o=s(0),n=()=>{o.value=window.scrollY,t.value=o.value>300},c=()=>{window.scrollTo({top:0,behavior:"smooth"})};return u(()=>{const l=document.documentElement.scrollHeight-window.innerHeight;return`${Math.min(o.value/l*100,100)}%`}),d(()=>{window.addEventListener("scroll",n)}),m(()=>{window.removeEventListener("scroll",n)}),(l,e)=>(r(),a("div",null,[t.value?(r(),a("div",{key:0,class:"fixed bottom-4 right-4 bg-black text-white rounded-full w-12 h-12 flex items-center justify-center text-lx cursor-pointer transition-opacity duration-300 hover:bg-[#E99401]",onClick:c},e[0]||(e[0]=[i("span",null,"↑",-1)]))):p("",!0),e[1]||(e[1]=i("div",{class:"fixed top-0 left-0 h-1 bg-black transition-all duration-300 z-50"},null,-1))]))}};export{w as default};

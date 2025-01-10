import{b as v,o as s,c as n,a as t,d as o,F as k,r as y,t as l,e as b}from"./index-BBqNYuZU.js";const _="/mega-curso-vue/guitarrala-vue/img/logo.svg",f="/mega-curso-vue/guitarrala-vue/img/carrito.png",$={class:"py-5 header"},C={class:"container-xl"},w={class:"row justify-content-center justify-content-md-between"},x={class:"col-md-6 a mt-5 d-flex align-items-start justify-content-end"},j={id:"carrito",class:"bg-white p-3"},q={key:0,class:"text-center"},N={key:1,class:"w-100 table"},T=["src"],V={class:"fw-bold"},A={class:"flex align-items-start gap-4"},B=["onClick"],E=["onClick","disabled"],F=["onClick"],P={key:2,class:"text-end"},D={class:"fw-bold"},H={class:"row mt-5"},I={class:"col-md-6 text-center text-md-start pt-5"},L={class:"display-2 fw-bold"},M={class:"mt-5 fs-5 text-white"},O={class:"text-primary fs-1 fw-black"},S=["disabled"],X=["src","alt"],z=["alt"],K={__name:"HeaderComponent",props:{carrito:Array,guitarra_principal:Object,required:!0},emits:["agregar-carrito","vaciar-carrito","eliminar-item","quitar-producto"],setup(e,{emit:G}){const h=e,p=v(()=>h.carrito.reduce((r,a)=>r+a.precio*a.stock,0));return(r,a)=>{var c,d,g,u;return s(),n("header",$,[t("div",C,[t("div",w,[a[6]||(a[6]=t("div",{class:"col-8 col-md-3"},[t("a",{href:"/index.html"},[t("img",{class:"img-fluid",src:_,alt:"imagen logo"})])],-1)),t("nav",x,[t("div",{class:"carrito",onMouseover:a[1]||(a[1]=(...i)=>r.calcularTotal&&r.calcularTotal(...i))},[a[5]||(a[5]=t("img",{class:"img-fluid",src:f,alt:"imagen carrito"},null,-1)),t("div",j,[((c=e.carrito)==null?void 0:c.length)===0?(s(),n("p",q," El carrito esta vacio ")):o("",!0),((d=e.carrito)==null?void 0:d.length)>0?(s(),n("table",N,[a[3]||(a[3]=t("thead",null,[t("tr",null,[t("th",null,"Imagen"),t("th",null,"Nombre"),t("th",null,"Precio"),t("th",null,"Cantidad"),t("th")])],-1)),t("tbody",null,[(s(!0),n(k,null,y(e.carrito,i=>(s(),n("tr",{key:i.id},[t("td",null,[t("img",{class:"img-fluid",src:`./img/${i.imagen}.jpg`,alt:"imagen guitarra"},null,8,T)]),t("td",null,l(i.nombre),1),t("td",V,l(i.precio)+" €",1),t("td",A,[t("button",{type:"button",class:"btn btn-dark",onClick:m=>r.$emit("quitar-producto",i)}," - ",8,B),b(" "+l(i.stock)+" ",1),t("button",{type:"button",class:"btn btn-dark",onClick:m=>r.$emit("agregar-carrito",i),disabled:i.bloqueado}," + ",8,E)]),t("td",null,[t("button",{class:"btn btn-danger",type:"button",onClick:m=>r.$emit("eliminar-item",i)}," X ",8,F)])]))),128))])])):o("",!0),((g=e.carrito)==null?void 0:g.length)>0?(s(),n("p",P,[a[4]||(a[4]=b(" Total pagar: ")),t("span",D,l(p.value)+"€",1)])):o("",!0),((u=e.carrito)==null?void 0:u.length)>0?(s(),n("button",{key:3,class:"btn btn-dark w-100 mt-3 p-2",onClick:a[0]||(a[0]=i=>r.$emit("vaciar-carrito"))}," Vaciar Carrito ")):o("",!0)])],32)])]),t("div",H,[t("div",I,[t("h1",L,l(e.guitarra_principal.nombre),1),t("p",M,l(e.guitarra_principal.descripcion),1),t("p",O,l(e.guitarra_principal.precio)+" € ",1),t("button",{type:"button",class:"btn fs-4 bg-primary text-white py-2 px-5",onClick:a[2]||(a[2]=i=>r.$emit("agregar-carrito",e.guitarra_principal)),disabled:e.guitarra_principal.bloqueado}," Agregar al Carrito ",8,S)])])]),t("img",{class:"header-guitarra",src:`./img/${e.guitarra_principal.imagen}.png`,alt:`imagen de +${e.guitarra_principal.nombre}`},null,8,X),t("img",{class:"header-guitarra-secondary",src:"./img/header_guitarra.png",alt:`imagen de +${e.guitarra_principal.nombre}`},null,8,z)])}}};export{K as default};

import{o as s,c as o,a as t,t as e}from"./index-CHXZQ81z.js";const c={class:"col-4"},l=["src","alt"],n={class:"col-8"},d={class:"text-black fs-4 fw-bold text-uppercase"},g={class:"fw-black text-primary fs-3"},u=["disabled"],f={__name:"GuitarraComponent",props:{guitarra:Object,required:!0},emits:["agregar-carrito"],setup(a){return(i,r)=>(s(),o("div",{class:"col-md-6 col-lg-4 my-4 row align-items-center",key:a.guitarra.id},[t("div",c,[t("img",{class:"img-fluid",src:`./img/${a.guitarra.imagen}.jpg`,alt:`imagen de +${a.guitarra.nombre}`},null,8,l)]),t("div",n,[t("h3",d,e(a.guitarra.nombre),1),t("p",null,e(a.guitarra.descripcion),1),t("p",g,e(a.guitarra.precio)+" €",1),t("button",{type:"button",class:"btn btn-dark w-100",onClick:r[0]||(r[0]=m=>i.$emit("agregar-carrito",a.guitarra)),disabled:a.guitarra.bloqueado}," Agregar al Carrito ",8,u)])]))}};export{f as default};
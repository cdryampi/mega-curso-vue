// Manipulación de Elementos del DOM en JavaScript
// El DOM (Document Object Model) es la representación estructurada de un documento HTML que podemos manipular usando JavaScript.

// **1. Acceder a un elemento del DOM**
const heading = document.querySelector(".heading"); // Selecciona el primer elemento con la clase "heading"

// Modificar el contenido de texto
heading.textContent = "Nuevo Heading"; // Cambia el texto del elemento

// Mostrar el elemento en la consola
console.log("%cElemento Heading:", "color: blue; font-weight: bold;", heading);

// **2. Acceder a varios elementos del DOM**
const links = document.querySelectorAll("a"); // Selecciona todos los elementos `<a>`

// Iterar sobre los enlaces y mostrar su texto
links.forEach((link) => {
  console.log(
    "%cTexto del enlace:",
    "color: green; font-weight: bold;",
    link.textContent
  );
});

// **3. Modificar atributos de un elemento**
const primerLink = document.querySelector("a"); // Selecciona el primer enlace
primerLink.href = "https://www.example.com"; // Cambia el atributo href
primerLink.target = "_blank"; // Abre el enlace en una nueva pestaña

console.log(
  "%cPrimer enlace modificado:",
  "color: teal; font-weight: bold;",
  primerLink
);

// **4. Agregar clases a un elemento**
heading.classList.add("nuevo-clase"); // Añade una clase
console.log(
  "%cClases del heading:",
  "color: orange; font-weight: bold;",
  heading.classList
);

// **5. Crear y agregar un nuevo elemento**
const nuevoParrafo = document.createElement("p"); // Crear un elemento `<p>`
nuevoParrafo.textContent = "Este es un nuevo párrafo agregado al DOM."; // Añadir texto
nuevoParrafo.classList.add("nuevo-parrafo"); // Añadir clase

document.body.appendChild(nuevoParrafo); // Agregar al final del `<body>`
console.log(
  "%cNuevo párrafo añadido al DOM:",
  "color: purple; font-weight: bold;",
  nuevoParrafo
);

// **6. Eliminar un elemento**
const eliminarElemento = document.querySelector(".heading");
eliminarElemento.remove(); // Elimina el elemento del DOM
console.log("%cElemento eliminado del DOM:", "color: red; font-weight: bold;");

// **7. Resumen**
console.log(
  "%cResumen: \n1. Usa `querySelector` y `querySelectorAll` para seleccionar elementos. \n2. Modifica texto y atributos usando `.textContent` y propiedades como `.href`. \n3. Crea elementos con `createElement` y agrégalos al DOM con `appendChild`. \n4. Usa `.remove()` para eliminar elementos.",
  "color: navy; font-weight: bold;"
);

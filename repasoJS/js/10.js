// Manipulación de Arrays en JavaScript

// **1. Declaración inicial**
const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
console.log("%cArray inicial:", "color: blue; font-weight: bold;", tecnologias);

// **2. Agregar elementos**
// `push` agrega un elemento al final
tecnologias.push("Angular");
console.log(
  "%cDespués de push ('Angular'):",
  "color: green; font-weight: bold;",
  tecnologias
);

// `unshift` agrega un elemento al inicio
tecnologias.unshift("Vue.js");
console.log(
  "%cDespués de unshift ('Vue.js'):",
  "color: green; font-weight: bold;",
  tecnologias
);

// **3. Spread Operator**
// Crear una copia del array y agregar nuevos elementos
const lenguajes = [...tecnologias, "Python", "Java", "C#"];
console.log(
  "%cNuevo array con Spread Operator:",
  "color: teal; font-weight: bold;",
  lenguajes
);

// **4. Eliminar elementos**
// `splice` elimina un elemento desde una posición específica
tecnologias.splice(2, 1); // Elimina el elemento en la posición 2
console.log(
  "%cDespués de splice (posición 2):",
  "color: orange; font-weight: bold;",
  tecnologias
);

// **5. Filtrar elementos**
// `filter` crea un nuevo array con elementos que cumplen una condición

// Ejemplo 1: Filtrar 'HTML'
const html = tecnologias.filter((tecnologia) => tecnologia === "HTML");
console.log("%cFiltrar 'HTML':", "color: purple; font-weight: bold;", html);

// Ejemplo 2: Filtrar tecnologías que no sean 'CSS'
const sinCSS = tecnologias.filter((tecnologia) => tecnologia !== "CSS");
console.log("%cSin 'CSS':", "color: purple; font-weight: bold;", sinCSS);

// Ejemplo 3: Filtrar tecnologías que incluyan la letra 'a'
const conLetraA = tecnologias.filter((tecnologia) =>
  tecnologia.toLowerCase().includes("a")
);
console.log(
  "%cTecnologías con 'a':",
  "color: purple; font-weight: bold;",
  conLetraA
);

// Ejemplo 4: Filtrar por longitud del nombre
const nombresCortos = tecnologias.filter(
  (tecnologia) => tecnologia.length <= 4
);
console.log(
  "%cTecnologías con nombre corto (<= 4 letras):",
  "color: purple; font-weight: bold;",
  nombresCortos
);

// **6. Resumen**
console.log(
  "%cResumen: \n1. Usa `push` y `unshift` para agregar elementos. \n2. Usa `splice` para eliminar elementos desde una posición específica. \n3. Usa `filter` para crear un nuevo array con elementos que cumplan condiciones específicas.",
  "color: teal; font-weight: bold;"
);

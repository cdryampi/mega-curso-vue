// Introducción a los Arrays en JavaScript
// Un array es una colección de elementos ordenados que puede almacenar cualquier tipo de dato (string, number, object, etc.).

// **1. Declaración de un array**
const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

// Mostrar el array completo en forma de tabla
console.table(tecnologias);

// **2. Acceso a elementos**
// Los arrays usan índices (empezando desde 0) para acceder a los elementos.

console.log(
  "%cPrimer elemento:",
  "color: blue; font-weight: bold;",
  tecnologias[0]
); // HTML
console.log(
  "%cÚltimo elemento:",
  "color: green; font-weight: bold;",
  tecnologias[tecnologias.length - 1]
); // Node.js

// **3. Métodos comunes de arrays**
// Los arrays tienen métodos integrados para realizar operaciones como agregar, eliminar, buscar y ordenar elementos.

// 3.1. Agregar elementos
tecnologias.push("TypeScript"); // Agrega al final
console.log(
  "%cDespués de push:",
  "color: teal; font-weight: bold;",
  tecnologias
);

tecnologias.unshift("Python"); // Agrega al inicio
console.log(
  "%cDespués de unshift:",
  "color: teal; font-weight: bold;",
  tecnologias
);

// 3.2. Eliminar elementos
tecnologias.pop(); // Elimina el último
console.log(
  "%cDespués de pop:",
  "color: orange; font-weight: bold;",
  tecnologias
);

tecnologias.shift(); // Elimina el primero
console.log(
  "%cDespués de shift:",
  "color: orange; font-weight: bold;",
  tecnologias
);

// 3.3. Encontrar un elemento
const index = tecnologias.indexOf("React"); // Devuelve el índice de "React"
console.log("%cÍndice de 'React':", "color: purple; font-weight: bold;", index);

// 3.4. Eliminar un elemento específico
tecnologias.splice(index, 1); // Elimina "React" (1 elemento desde el índice encontrado)
console.log(
  "%cDespués de eliminar 'React':",
  "color: red; font-weight: bold;",
  tecnologias
);

// 3.5. Crear una copia del array sin modificar el original
const nuevasTecnologias = [...tecnologias, "GraphQL"];
console.log(
  "%cArray original:",
  "color: navy; font-weight: bold;",
  tecnologias
);
console.log(
  "%cArray copiado con nuevas tecnologías:",
  "color: navy; font-weight: bold;",
  nuevasTecnologias
);

// **4. Iterar sobre un array**
// Usando un bucle `for` tradicional
console.log(
  "%cIteración con for tradicional:",
  "color: blue; font-weight: bold;"
);
for (let i = 0; i < tecnologias.length; i++) {
  console.log(tecnologias[i]);
}

// Usando el método `forEach`
console.log("%cIteración con forEach:", "color: green; font-weight: bold;");
tecnologias.forEach((tecnologia, index) =>
  console.log(`Índice ${index}: ${tecnologia}`)
);

// **5. Métodos avanzados**
// 5.1. Map: Crea un nuevo array aplicando una transformación a cada elemento.
const tecnologiasEnMayusculas = tecnologias.map((tecnologia) =>
  tecnologia.toUpperCase()
);
console.log(
  "%cArray en mayúsculas (map):",
  "color: teal; font-weight: bold;",
  tecnologiasEnMayusculas
);

// 5.2. Filter: Crea un nuevo array filtrando elementos según una condición.
const tecnologiasFiltradas = tecnologias.filter(
  (tecnologia) => tecnologia !== "CSS"
);
console.log(
  "%cArray filtrado (sin 'CSS'):",
  "color: orange; font-weight: bold;",
  tecnologiasFiltradas
);

// **6. Resumen**
console.log(
  "%cResumen: \n1. Los arrays son colecciones ordenadas. \n2. Métodos comunes incluyen push, pop, map y filter. \n3. Usa el spread operator para crear copias sin modificar el original.",
  "color: purple; font-weight: bold;"
);

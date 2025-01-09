// Destructuring de Arrays en JavaScript
// El destructuring permite extraer elementos de un array y asignarlos a variables de manera sencilla.

// **1. Declaración inicial**
const tecnologias = ["JavaScript", "React", "Node.js", "MongoDB", "Express.js"];

// Mostrar el array completo
console.log(
  "%cArray original:",
  "color: blue; font-weight: bold;",
  tecnologias
);

// **2. Destructuring básico**
// Extraer el primer elemento y el segundo, y el resto de los elementos en otro array

const [js, react, ...otros] = tecnologias;

// Mostrar las variables extraídas
console.log("%cPrimer elemento (js):", "color: green; font-weight: bold;", js); // JavaScript
console.log(
  "%cSegundo elemento (react):",
  "color: green; font-weight: bold;",
  react
); // React
console.log(
  "%cOtros elementos (otros):",
  "color: teal; font-weight: bold;",
  otros
); // ["Node.js", "MongoDB", "Express.js"]

// **3. Extraer elementos específicos**
// Saltar elementos usando comas

const [, , , mongo, express] = tecnologias;

// Mostrar los elementos específicos extraídos
console.log(
  "%cCuarto elemento (mongo):",
  "color: orange; font-weight: bold;",
  mongo
); // MongoDB
console.log(
  "%cQuinto elemento (express):",
  "color: orange; font-weight: bold;",
  express
); // Express.js

// **4. Uso práctico**
// 4.1. Extraer datos iniciales y el resto para uso separado

const [frontend, framework, ...backend] = tecnologias;

console.log(
  "%cFrontend principal (frontend):",
  "color: purple; font-weight: bold;",
  frontend
); // JavaScript
console.log(
  "%cFramework principal (framework):",
  "color: purple; font-weight: bold;",
  framework
); // React
console.log(
  "%cTecnologías backend (backend):",
  "color: navy; font-weight: bold;",
  backend
); // ["Node.js", "MongoDB", "Express.js"]

// **5. Uso combinado**
// Combinar destructuring con otros métodos, como `filter`

const [primero, segundo, ...filtrados] = tecnologias.filter((tech) =>
  tech.includes("e")
);

console.log(
  "%cPrimera tecnología con 'e':",
  "color: magenta; font-weight: bold;",
  primero
); // React
console.log(
  "%cSegunda tecnología con 'e':",
  "color: magenta; font-weight: bold;",
  segundo
); // Node.js
console.log(
  "%cResto de tecnologías filtradas:",
  "color: magenta; font-weight: bold;",
  filtrados
); // ["Express.js"]

// **6. Resumen**
console.log(
  "%cResumen: \n1. Usa destructuring para extraer elementos de un array. \n2. Usa el operador de propagación (...) para obtener el resto de los elementos. \n3. Puedes combinar destructuring con métodos como filter para un manejo más avanzado.",
  "color: teal; font-weight: bold;"
);

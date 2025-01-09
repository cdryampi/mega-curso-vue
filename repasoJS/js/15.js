// Arrow Functions en JavaScript
// Las Arrow Functions son una forma más concisa de escribir funciones introducida en ES6.
// Se caracterizan por su sintaxis compacta y el comportamiento especial del contexto `this`.

// **1. Ejemplo básico**
// Declaramos una Arrow Function para sumar dos números.
const sumar = (a, b) => a + b;

// Llamada a la función
console.log("%cSuma de 2 + 3:", "color: blue; font-weight: bold;", sumar(2, 3)); // 5

// **2. Sintaxis de Arrow Functions**
// Las Arrow Functions tienen varias formas de sintaxis dependiendo del número de parámetros y del cuerpo de la función:

// 2.1. Sin parámetros
const saludar = () => "Hola, Mundo!";
console.log("%cSaludo:", "color: green; font-weight: bold;", saludar()); // Hola, Mundo!

// 2.2. Un solo parámetro (sin paréntesis)
const cuadrado = (x) => x * x;
console.log("%cCuadrado de 4:", "color: teal; font-weight: bold;", cuadrado(4)); // 16

// 2.3. Múltiples parámetros (requieren paréntesis)
const multiplicar = (a, b) => a * b;
console.log(
  "%cMultiplicación de 3 * 5:",
  "color: purple; font-weight: bold;",
  multiplicar(3, 5)
); // 15

// 2.4. Cuerpo de función más largo (requiere llaves y `return`)
const restar = (a, b) => {
  const resultado = a - b;
  return resultado;
};
console.log(
  "%cResta de 10 - 4:",
  "color: orange; font-weight: bold;",
  restar(10, 4)
); // 6

// **3. Ejercicio práctico**
// Filtrar elementos de un array usando Arrow Functions.
const tecnologia = ["JavaScript", "PHP", "Python", "Ruby"];
console.log("%cArray original:", "color: navy; font-weight: bold;", tecnologia);

// Filtramos para excluir "PHP"
const tecnologia2 = tecnologia.filter((tec) => tec !== "PHP");
console.log(
  "%cArray filtrado (sin 'PHP'):",
  "color: magenta; font-weight: bold;",
  tecnologia2
); // ["JavaScript", "Python", "Ruby"]

// **4. Ventajas de las Arrow Functions**
// 4.1. Sintaxis compacta
// 4.2. No enlazan su propio contexto `this`, lo que las hace útiles para callbacks en objetos y clases.

// **5. Ejemplo avanzado**
// Usar Arrow Functions en métodos encadenados.
const tecnologiasMayusculas = tecnologia
  .filter((tec) => tec.includes("y"))
  .map((tec) => tec.toUpperCase());
console.log(
  "%cTecnologías con 'y' en mayúsculas:",
  "color: green; font-weight: bold;",
  tecnologiasMayusculas
); // ["JAVASCRIPT", "PYTHON"]

// **6. Resumen**
console.log(
  "%cResumen: \n1. Usa Arrow Functions para escribir funciones de manera más compacta. \n2. Son ideales para callbacks y métodos encadenados. \n3. Tienen un comportamiento especial con el contexto `this`.",
  "color: teal; font-weight: bold;"
);

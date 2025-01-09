// Function Expression en JavaScript
// Una Function Expression es una función asignada a una variable. No se eleva (no tiene hoisting) como una Function Declaration.

// **1. Declaración básica**
// Declaramos una función que suma dos números y la asignamos a una constante.
const sumar = function (a, b) {
  return a + b;
};

// **2. Llamada a la función**
// Llamamos a la función y mostramos el resultado.

console.log("%cSuma de 2 + 3:", "color: blue; font-weight: bold;", sumar(2, 3)); // 5

// **3. Diferencias entre Function Declaration y Function Expression**
// A diferencia de las Function Declarations, las Function Expressions no tienen hoisting.
// Esto significa que no puedes llamar a la función antes de definirla.

// Descomenta las siguientes líneas para observar el error:
// console.log(restar(10, 5)); // Error: Cannot access 'restar' before initialization
const restar = function (a, b) {
  return a - b;
};
console.log(
  "%cResta de 10 - 5:",
  "color: green; font-weight: bold;",
  restar(10, 5)
); // 5

// **4. Función anónima**
// Una Function Expression puede ser anónima (sin nombre), como en los ejemplos anteriores.
// También puedes asignar una función nombrada para facilitar la depuración.

const multiplicar = function multiplicarNumeros(a, b) {
  return a * b;
};
console.log(
  "%cMultiplicación de 4 * 5:",
  "color: purple; font-weight: bold;",
  multiplicar(4, 5)
); // 20

// **5. Usos prácticos**
// 5.1. Usar Function Expressions como callbacks

const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(function (numero) {
  return numero * numero;
});
console.log(
  "%cCuadrados de los números [1, 2, 3, 4, 5]:",
  "color: orange; font-weight: bold;",
  cuadrados
); // [1, 4, 9, 16, 25]

// **6. Resumen**
console.log(
  "%cResumen: \n1. Una Function Expression es asignada a una variable. \n2. No soporta hoisting, por lo que no puede llamarse antes de definirse. \n3. Son útiles para funciones anónimas y callbacks.",
  "color: navy; font-weight: bold;"
);

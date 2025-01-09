// Funciones con Function Declaration en JavaScript
// Las funciones declaradas tienen un comportamiento especial: son "hoisted", lo que significa que pueden ser llamadas antes de ser definidas.

// **1. Función básica**
// Declaración de una función que suma dos números.
function sumar(a, b) {
  return a + b;
}

// **2. Parámetros por defecto**
// Declaramos una función con un parámetro opcional que tiene un valor por defecto.
function saludar(nombre = "visitante") {
  return `Hola ${nombre}`;
}

// **3. Parámetros indefinidos con el operador rest**
// Declaramos una función que acepta un número indefinido de parámetros utilizando el operador `...`.
function sumar2(a, b, ...c) {
  let resultado = a + b;
  c.forEach(function (n) {
    resultado += n;
  });
  return resultado;
}

// **4. Llamadas a las funciones**
// Llamamos a las funciones y mostramos los resultados.

console.log(
  "%cSuma básica (2 + 3):",
  "color: blue; font-weight: bold;",
  sumar(2, 3)
); // 5

console.log(
  "%cSaludo con nombre (Juan):",
  "color: green; font-weight: bold;",
  saludar("Juan")
); // Hola Juan

console.log(
  "%cSaludo sin nombre (parámetro por defecto):",
  "color: green; font-weight: bold;",
  saludar()
); // Hola visitante

console.log(
  "%cSuma con parámetros indefinidos (1, 2, 3, 4, 5):",
  "color: purple; font-weight: bold;",
  sumar2(1, 2, 3, 4, 5)
); // 15

// **5. Ejemplo avanzado con parámetros indefinidos**
// Usando `sumar2` para sumar un array de números.

const numeros = [10, 20, 30, 40, 50];
console.log(
  "%cSuma de un array con parámetros indefinidos:",
  "color: orange; font-weight: bold;",
  sumar2(...numeros)
); // 150

// **6. Explicaciones adicionales**
// 6.1. Hoisting
// Las funciones declaradas pueden ser llamadas antes de ser definidas, gracias al "hoisting".

console.log(
  "%cLlamada antes de la definición (hoisting):",
  "color: teal; font-weight: bold;",
  resta(10, 5)
);

function resta(a, b) {
  return a - b;
} // Esto funciona debido al hoisting.

// **7. Resumen**
console.log(
  "%cResumen: \n1. Usa parámetros por defecto para manejar valores opcionales. \n2. Usa el operador rest (...) para aceptar un número indefinido de parámetros. \n3. Las funciones declaradas soportan hoisting, lo que permite llamarlas antes de su definición.",
  "color: navy; font-weight: bold;"
);

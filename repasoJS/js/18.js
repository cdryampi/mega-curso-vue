// Operadores de comparación en JavaScript
// Los operadores de comparación se utilizan para evaluar condiciones y devuelven un valor booleano (true o false).

const numero1 = 20;
const numero2 = "20";

// **1. Operador de igualdad (==)**
// Compara los valores sin considerar el tipo de dato.
// Esto puede llevar a resultados inesperados debido a la conversión implícita de tipos.

console.log(
  "%cCon == (igualdad):",
  "color: blue; font-weight: bold;",
  numero1 == numero2
); // true (se convierten implícitamente al mismo tipo)

// **2. Operador de igualdad estricta (===)**
// Compara los valores y los tipos de dato. No realiza conversión implícita.

console.log(
  "%cCon === (igualdad estricta):",
  "color: green; font-weight: bold;",
  numero1 === numero2
); // false (los tipos son diferentes: número vs string)

// **3. Operadores de desigualdad**
// 3.1. Desigualdad simple (!=)
console.log(
  "%cCon != (desigualdad):",
  "color: orange; font-weight: bold;",
  numero1 != numero2
); // false (los valores son iguales después de la conversión)

// 3.2. Desigualdad estricta (!==)
console.log(
  "%cCon !== (desigualdad estricta):",
  "color: red; font-weight: bold;",
  numero1 !== numero2
); // true (los tipos son diferentes)

// **4. Comparación entre números**
const numero3 = 30;

console.log(
  "%c¿20 es mayor que 30?:",
  "color: purple; font-weight: bold;",
  numero1 > numero3
); // false
console.log(
  "%c¿20 es menor o igual a 30?:",
  "color: purple; font-weight: bold;",
  numero1 <= numero3
); // true

// **5. Casos prácticos**
// 5.1. Comparar valores en un array
const numeros = [10, 20, 30, 40];

const existeNumero = numeros.includes(numero1);
console.log(
  "%c¿El número 20 está en el array?:",
  "color: navy; font-weight: bold;",
  existeNumero
); // true

// 5.2. Filtrar valores por condición
const mayoresDe15 = numeros.filter((num) => num > 15);
console.log(
  "%cNúmeros mayores de 15:",
  "color: teal; font-weight: bold;",
  mayoresDe15
); // [20, 30, 40]

// **6. Resumen**
console.log(
  "%cResumen: \n1. Usa `==` solo si quieres comparar valores ignorando el tipo. \n2. Usa `===` para comparar tanto el valor como el tipo. \n3. Para desigualdad, usa `!=` o `!==` según la situación.",
  "color: navy; font-weight: bold;"
);

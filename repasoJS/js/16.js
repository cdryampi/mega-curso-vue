// Array Methods con Arrow Functions en JavaScript
// Los métodos de arrays junto con Arrow Functions hacen que la manipulación de datos sea más eficiente y legible.

// **1. Declaración inicial**
const tecnologia = ["JavaScript", "PHP", "Python", "Ruby"];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(
  "%cArray de tecnologías:",
  "color: blue; font-weight: bold;",
  tecnologia
);
console.log("%cArray de números:", "color: green; font-weight: bold;", numeros);

// **2. includes()**
// Verifica si un elemento está en el array.

let resultado = tecnologia.includes("PHP");
console.log(
  "%c¿El array incluye 'PHP'?:",
  "color: purple; font-weight: bold;",
  resultado
); // true

// **3. findIndex()**
// Devuelve el índice del primer elemento que cumple con la condición.

resultado = tecnologia.findIndex((tec) => tec === "PHP");
console.log("%cÍndice de 'PHP':", "color: teal; font-weight: bold;", resultado); // 1

// **4. some()**
// Verifica si al menos un elemento cumple con la condición.

resultado = numeros.some((num) => num > 5);
console.log(
  "%c¿Algún número es mayor que 5?:",
  "color: orange; font-weight: bold;",
  resultado
); // true

// **5. find()**
// Devuelve el primer elemento que cumple con la condición.

resultado = tecnologia.find((tec) => tec === "PHP");
console.log(
  "%cPrimer elemento encontrado ('PHP'):",
  "color: navy; font-weight: bold;",
  resultado
); // PHP

// **6. every()**
// Verifica si todos los elementos cumplen con la condición.

resultado = numeros.every((num) => num > 5);
console.log(
  "%c¿Todos los números son mayores que 5?:",
  "color: red; font-weight: bold;",
  resultado
); // false

// **7. reduce()**
// Reduce los elementos del array a un único valor acumulado.

resultado = numeros.reduce((total, num) => total + num, 0);
console.log(
  "%cSuma de todos los números:",
  "color: magenta; font-weight: bold;",
  resultado
); // 55

// **8. filter()**
// Crea un nuevo array con los elementos que cumplen con la condición.

resultado = numeros.filter((num) => num > 5);
console.log(
  "%cNúmeros mayores que 5:",
  "color: green; font-weight: bold;",
  resultado
); // [6, 7, 8, 9, 10]

// **9. Ejemplo avanzado**
// Encadenar métodos para realizar operaciones más complejas.
// Filtramos números mayores que 5, los multiplicamos por 2 y los sumamos.

const sumaDoble = numeros
  .filter((num) => num > 5)
  .map((num) => num * 2)
  .reduce((total, num) => total + num, 0);

console.log(
  "%cSuma de números > 5, multiplicados por 2:",
  "color: teal; font-weight: bold;",
  sumaDoble
); // 90

// **10. Resumen**
console.log(
  "%cResumen: \n1. Usa includes() para verificar existencia. \n2. Usa find() y findIndex() para buscar elementos específicos. \n3. Usa some() y every() para verificar condiciones parciales o totales. \n4. Usa reduce() y filter() para cálculos avanzados.",
  "color: navy; font-weight: bold;"
);

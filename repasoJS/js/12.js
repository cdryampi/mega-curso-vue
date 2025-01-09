// Iteradores de Arrays en JavaScript
// Este tutorial muestra cómo usar los iteradores más comunes: `forEach` y `map`.

// **1. Declaración inicial**
const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JavaScript"];
console.log("%cArray inicial:", "color: blue; font-weight: bold;", pendientes);

// **2. Iteración con forEach**
// `forEach` ejecuta una función para cada elemento del array, pero no devuelve un nuevo array.

console.log("%cIteración con forEach:", "color: green; font-weight: bold;");
pendientes.forEach((pendiente, index) => {
  console.log(`${index}: ${pendiente}`);
});

// **3. Iteración con map**
// `map` ejecuta una función para cada elemento del array y devuelve un nuevo array con los resultados.

console.log("%cIteración con map:", "color: teal; font-weight: bold;");
const nuevosPendientes = pendientes.map((pendiente) => {
  console.log(pendiente); // Similar a forEach, pero map devuelve un nuevo array.
  return pendiente.toUpperCase(); // Como ejemplo, convertimos los elementos a mayúsculas.
});

// Mostrar el nuevo array creado por map
console.log(
  "%cNuevo array creado con map:",
  "color: purple; font-weight: bold;",
  nuevosPendientes
);

// **4. Diferencia entre forEach y map**
// `forEach` no devuelve un nuevo array; solo itera sobre el array existente.
// `map` crea un nuevo array basado en la función que se ejecuta sobre cada elemento.

const arrayForEach = pendientes.forEach((pendiente) => {
  return pendiente; // Itera, pero no devuelve nada.
});

const arrayMap = pendientes.map((pendiente) => {
  return pendiente; // Devuelve un nuevo array con los mismos elementos.
});

console.log(
  "%cResultado de forEach:",
  "color: orange; font-weight: bold;",
  arrayForEach
); // undefined, porque forEach no devuelve un array.
console.log(
  "%cResultado de map:",
  "color: orange; font-weight: bold;",
  arrayMap
); // Devuelve un nuevo array idéntico a pendientes.

// **5. Casos prácticos**
// 5.1. Uso de forEach para mostrar elementos en un índice específico.
console.log("%cUso práctico con forEach:", "color: navy; font-weight: bold;");
pendientes.forEach((pendiente, index) => {
  if (index % 2 === 0) {
    console.log(`Índice ${index}: ${pendiente}`);
  }
});

// 5.2. Uso de map para transformar un array.
const tareasCompletas = pendientes.map((pendiente, index) => {
  return `${index + 1}. ${pendiente} - COMPLETADO`;
});
console.log(
  "%cTareas marcadas como completadas:",
  "color: darkgreen; font-weight: bold;",
  tareasCompletas
);

// **6. Resumen**
console.log(
  "%cResumen: \n1. Usa forEach para iterar sobre un array sin necesidad de modificarlo. \n2. Usa map para crear un nuevo array basado en el array original. \n3. Map es útil para transformaciones, mientras que forEach es solo para ejecución.",
  "color: teal; font-weight: bold;"
);

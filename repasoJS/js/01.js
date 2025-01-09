// Variables con let y const en JavaScript
// En este tutorial aprenderás las diferencias entre let y const, cómo usarlas correctamente y sus alcances (scope).

// **1. Declarar e inicializar con let**
// let permite declarar variables que pueden ser reasignadas más adelante.

let cliente = "Yampi"; // Declarar e inicializar con let
console.log("%cCliente inicial:", "color: blue; font-weight: bold;", cliente);

// Reasignamos la variable
cliente = "Juan";
console.log(
  "%cCliente después de reasignar:",
  "color: green; font-weight: bold;",
  cliente
);

// **2. Declarar e inicializar con const**
// const se usa para declarar variables cuyo valor no se puede reasignar.
// Nota: Las variables const deben ser inicializadas al momento de declararlas.

const pais = "Perú"; // Declarar e inicializar con const
console.log("%cPaís:", "color: purple; font-weight: bold;", pais);

// Intentar reasignar una constante genera un error (descomentar para probar):
// pais = "España"; // Error: Assignment to constant variable

// **3. Scope de bloque**
// Tanto let como const tienen un alcance limitado al bloque donde se declaran.

function mostrarCliente() {
  let cliente = "Pedro"; // Declarar e inicializar una variable con let dentro de una función
  console.log(
    "%cCliente dentro de la función:",
    "color: orange; font-weight: bold;",
    cliente
  );
}

mostrarCliente(); // Llamar a la función

// La variable cliente fuera de la función no se ve afectada
console.log(
  "%cCliente fuera de la función:",
  "color: blue; font-weight: bold;",
  cliente
);

// **4. Ejemplo práctico de scope de bloque**
if (true) {
  let edad = 29; // Declarar con let dentro de un bloque
  console.log(
    "%cEdad dentro del bloque:",
    "color: purple; font-weight: bold;",
    edad
  );
}

// Intentar acceder a la variable fuera del bloque genera un error (descomentar para probar):
// console.log(edad); // Error: edad is not defined

// **5. Resumen**
console.log(
  "%cResumen: \n1. let permite reasignación, const no. \n2. Ambas tienen scope de bloque. \n3. const debe inicializarse al declarar.",
  "color: teal; font-weight: bold;"
);

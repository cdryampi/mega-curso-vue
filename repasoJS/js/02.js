// Repaso de las variables con const en JavaScript
// Este tutorial explica las reglas y usos de las variables declaradas con const.

// **1. Declarar e inicializar con const**
// const se utiliza para declarar variables cuyo valor no se puede reasignar.

const cliente = "Yampi"; // Declarar e inicializar con const
console.log("%cCliente inicial:", "color: blue; font-weight: bold;", cliente);

// Intentar reasignar una variable const genera un error (descomentar para probar):
// cliente = "Juan"; // Error: Assignment to constant variable

// **2. Scope de bloque**
// Al igual que let, const tiene un alcance limitado al bloque donde se declara.

function changeClient() {
  const cliente = "Pedro"; // Declarar una variable con const dentro de una función
  console.log(
    "%cCliente dentro de la función:",
    "color: orange; font-weight: bold;",
    cliente
  );
}

changeClient(); // Llamar a la función

// La variable cliente fuera de la función no se ve afectada
console.log(
  "%cCliente fuera de la función:",
  "color: blue; font-weight: bold;",
  cliente
);

// **3. Uso recomendado**
// Se recomienda usar const siempre que sea posible para:
// - Variables que no cambiarán de valor.
// - Declarar funciones.

// Ejemplo 1: Constantes matemáticas
const PI = 3.14159; // Constante matemática
console.log("%cValor de PI:", "color: purple; font-weight: bold;", PI);

// Ejemplo 2: Declarar funciones como constantes
const saludar = (nombre) => `Hola, ${nombre}!`;
console.log("%cSaludo:", "color: teal; font-weight: bold;", saludar("Yampi"));

// **4. Ejemplo práctico**
// Usando const para garantizar que ciertos valores no cambien

const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
console.log(
  "%cDías de la semana:",
  "color: green; font-weight: bold;",
  diasSemana
);

// Aunque no se puede reasignar el array, sí podemos modificar su contenido.
diasSemana.push("Sábado");
console.log(
  "%cDías de la semana después de agregar Sábado:",
  "color: green; font-weight: bold;",
  diasSemana
);

// Intentar reasignar el array genera un error (descomentar para probar):
// diasSemana = ["Domingo"]; // Error: Assignment to constant variable

// **5. Resumen**
console.log(
  "%cResumen: \n1. const no permite reasignación. \n2. Tiene scope de bloque. \n3. Se recomienda usarlo para valores que no cambian.",
  "color: teal; font-weight: bold;"
);

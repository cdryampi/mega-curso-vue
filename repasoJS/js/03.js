// Tipos de datos en JavaScript
// En este tutorial aprenderás sobre los tipos de datos más comunes en JavaScript y cómo usarlos.

// **1. Variables dinámicas**
// En JavaScript, las variables son dinámicas, lo que significa que su tipo de dato se asigna automáticamente según el valor.
// No es necesario especificar el tipo de dato al declarar una variable.

// **2. Tipos de datos primitivos**
// Los tipos de datos primitivos en JavaScript son inmutables y no son objetos: string, number, boolean, null, undefined y symbol.

// **2.1. String**
// Representa texto. Se puede definir con comillas simples o dobles.

let nombre = "Juan";
console.log(
  "%cTipo de dato: String",
  "color: blue; font-weight: bold;",
  nombre
);

// **2.2. Number**
// Representa números enteros o decimales.

let numero = 10;
console.log(
  "%cTipo de dato: Number",
  "color: green; font-weight: bold;",
  numero
);

// **2.3. Boolean**
// Representa valores de verdad: true o false.

let verdadero = true;
let falso = false;
console.log(
  "%cTipo de dato: Boolean",
  "color: orange; font-weight: bold;",
  verdadero
);

// **2.4. Null**
// Representa la ausencia de valor.

let nulo = null;
console.log("%cTipo de dato: Null", "color: purple; font-weight: bold;", nulo);

// **2.5. Undefined**
// Representa una variable declarada pero no inicializada.

let indefinido;
console.log(
  "%cTipo de dato: Undefined",
  "color: red; font-weight: bold;",
  indefinido
);

// **2.6. Symbol**
// Representa identificadores únicos.

let simbolo = Symbol("simbolo");
console.log(
  "%cTipo de dato: Symbol",
  "color: teal; font-weight: bold;",
  simbolo
);

// **3. Tipos de datos complejos**
// Los tipos de datos complejos incluyen objetos, arrays, funciones y fechas. Estos son mutables.

// **3.1. Object**
// Representa un conjunto de pares clave-valor.

let objeto = {
  nombre: "Juan",
  edad: 30,
};
console.log(
  "%cTipo de dato: Object",
  "color: brown; font-weight: bold;",
  objeto
);

// **3.2. Array**
// Es un tipo especial de objeto que almacena múltiples valores.

let colores = ["rojo", "verde", "azul"];
console.log(
  "%cTipo de dato: Array (Object)",
  "color: magenta; font-weight: bold;",
  colores
);

// **3.3. Function**
// Representa una función, que también es un objeto.

let sumar = function (a, b) {
  return a + b;
};
console.log(
  "%cTipo de dato: Function",
  "color: navy; font-weight: bold;",
  sumar(2, 3)
);

// **3.4. Date**
// Representa fechas y horas.

let fecha = new Date();
console.log(
  "%cTipo de dato: Date (Object)",
  "color: darkgreen; font-weight: bold;",
  fecha
);

// **4. typeof**
// typeof devuelve el tipo de dato de una variable.

console.log("%cTipo de 'nombre':", "color: blue;", typeof nombre); // string
console.log("%cTipo de 'numero':", "color: green;", typeof numero); // number
console.log("%cTipo de 'verdadero':", "color: orange;", typeof verdadero); // boolean
console.log("%cTipo de 'nulo':", "color: purple;", typeof nulo); // object (peculiaridad de JS)
console.log("%cTipo de 'indefinido':", "color: red;", typeof indefinido); // undefined
console.log("%cTipo de 'objeto':", "color: brown;", typeof objeto); // object
console.log("%cTipo de 'simbolo':", "color: teal;", typeof simbolo); // symbol
console.log("%cTipo de 'colores':", "color: magenta;", typeof colores); // object
console.log("%cTipo de 'sumar':", "color: navy;", typeof sumar); // function
console.log("%cTipo de 'fecha':", "color: darkgreen;", typeof fecha); // object

// **5. Resumen**
console.log(
  "%cResumen: \n1. Los tipos de datos primitivos son inmutables. \n2. Los datos complejos como objetos y arrays son mutables. \n3. typeof es útil para verificar tipos.",
  "color: teal; font-weight: bold;"
);

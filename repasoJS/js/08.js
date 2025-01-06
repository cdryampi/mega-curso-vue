// Template Strings o Concatenación de Strings en JavaScript
// Las Template Strings ofrecen una forma más legible y moderna de construir cadenas de texto.

// **1. Variables iniciales**
const cliente = "Juan";
const saldo = 400;

// **2. Concatenación normal**
// Utiliza el operador `+` para combinar cadenas y valores.
console.log(
  "%cConcatenación normal (con +):",
  "color: blue; font-weight: bold;",
  "El cliente " + cliente + " tiene un saldo de " + saldo + " dólares"
);

// También se puede usar `,` para combinar múltiples argumentos en `console.log`.
console.log(
  "%cConcatenación normal (con ,):",
  "color: blue; font-weight: bold;",
  "El cliente ",
  cliente,
  " tiene un saldo de ",
  saldo,
  " dólares"
);

// **3. Template Strings**
// Usan comillas invertidas (``) y permiten incluir variables dentro de `${}`.

console.log(
  "%cTemplate String:",
  "color: green; font-weight: bold;",
  `El cliente ${cliente} tiene un saldo de ${saldo} dólares`
);

// **4. Ejemplo con un objeto**
const producto = {
  nombre: "Televisor",
  precio: 300,
  disponible: true,
};

// Concatenación normal
console.log(
  "%cConcatenación normal (con +):",
  "color: orange; font-weight: bold;",
  "El producto " +
    producto.nombre +
    " tiene un precio de " +
    producto.precio +
    " y está disponible: " +
    producto.disponible
);

// Template Strings
console.log(
  "%cTemplate String:",
  "color: teal; font-weight: bold;",
  `El producto ${producto.nombre} tiene un precio de ${producto.precio} y está disponible: ${producto.disponible}`
);

// **5. Comparación y ventajas**
console.log(
  "%cVentajas de Template Strings: \n1. Más legibles y claras. \n2. No necesitas concatenar manualmente con +. \n3. Puedes incluir expresiones dentro de ${}.",
  "color: purple; font-weight: bold;"
);

// **6. Ejemplo avanzado**
// Puedes incluir expresiones directamente dentro de las Template Strings.

const descuento = 50;
console.log(
  "%cEjemplo con expresión:",
  "color: navy; font-weight: bold;",
  `El producto ${producto.nombre} con un descuento de $${descuento} costará $${
    producto.precio - descuento
  }.`
);

// **7. Resumen**
console.log(
  "%cResumen: \n1. Usar Template Strings mejora la legibilidad. \n2. Es especialmente útil con objetos y expresiones complejas.",
  "color: teal; font-weight: bold;"
);

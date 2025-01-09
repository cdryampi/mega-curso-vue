// Destructuring de objetos: Caso con 2 o más objetos
// El destructuring permite extraer valores de un objeto y asignarlos a variables.
// También podemos renombrar las variables al extraer, sin afectar el objeto original.

// **1. Declaración de objetos**
const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

const cliente = {
  nombre: "Juan",
  apellido: "De la Torre",
  saldo: 500,
};

// Mostramos los objetos
console.log("%cObjeto producto:", "color: blue; font-weight: bold;", producto);
console.log("%cObjeto cliente:", "color: green; font-weight: bold;", cliente);

// **2. Destructuring básico**
// Extraemos la propiedad `nombre` del objeto `producto`.

const { nombre } = producto;
console.log(
  "%cNombre del producto (destructuring):",
  "color: orange; font-weight: bold;",
  nombre
);

// **3. Renombrar variables al destructurar**
// Podemos renombrar las variables al extraer para evitar conflictos de nombres.

const { nombre: nombreProducto } = producto;
const { nombre: nombreCliente } = cliente;

console.log(
  "%cNombre del producto (renombrado):",
  "color: teal; font-weight: bold;",
  nombreProducto
);
console.log(
  "%cNombre del cliente (renombrado):",
  "color: purple; font-weight: bold;",
  nombreCliente
);

// **4. Destructuring de múltiples propiedades**
// Extraemos varias propiedades al mismo tiempo.

const { precio, disponible } = producto;
console.log(
  "%cPrecio del producto:",
  "color: brown; font-weight: bold;",
  precio
);
console.log(
  "%cDisponibilidad del producto:",
  "color: brown; font-weight: bold;",
  disponible
);

// **5. Combinación de destructuring y variables**
// Creamos un nuevo objeto combinando propiedades de ambos objetos.

const nuevoObjeto = {
  ...producto,
  cliente: `${cliente.nombre} ${cliente.apellido}`,
};
console.log(
  "%cNuevo objeto combinado:",
  "color: navy; font-weight: bold;",
  nuevoObjeto
);

// **6. Resumen**
console.log(
  "%cResumen: \n1. El destructuring permite extraer valores de un objeto. \n2. Podemos renombrar las variables extraídas. \n3. El destructuring facilita trabajar con múltiples propiedades.",
  "color: teal; font-weight: bold;"
);

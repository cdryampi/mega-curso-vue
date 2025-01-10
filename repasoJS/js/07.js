// Unir dos objetos en JavaScript
// Este tutorial muestra cómo unir dos objetos, destacando las mejores prácticas para evitar modificar los originales.

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

// Mostramos los objetos originales
console.log("%cObjeto producto:", "color: blue; font-weight: bold;", producto);
console.log("%cObjeto cliente:", "color: green; font-weight: bold;", cliente);

// **2. Forma no recomendada: Object.assign**
// Object.assign combina los objetos, pero modifica el objeto original.

const resultado = Object.assign(cliente, producto); // Modifica `cliente`
console.log(
  "%cResultado con Object.assign (modifica cliente):",
  "color: red; font-weight: bold;",
  resultado
);
console.log(
  "%cCliente después de Object.assign:",
  "color: orange; font-weight: bold;",
  cliente
); // Cliente ha sido modificado, lo cual no es deseable.

// **3. Forma recomendada: Spread Operator**
// Usar el spread operator (`...`) es la mejor práctica. No modifica los objetos originales.

const nuevoObjeto = { ...cliente, ...producto }; // Crea un nuevo objeto
console.log(
  "%cNuevo objeto combinado (spread):",
  "color: purple; font-weight: bold;",
  nuevoObjeto
);

// **4. Consideraciones al combinar objetos**
// Si las claves de los objetos son iguales, el valor del último objeto sobreescribe los anteriores.

console.log(
  "%cNota: La clave 'nombre' fue sobreescrita al combinar cliente y producto.",
  "color: teal; font-weight: bold;"
);

// **5. Casos de uso**
// Este enfoque es útil al trabajar con APIs o estructuras complejas, donde no queremos modificar los datos originales.

const datosCombinados = { ...cliente, producto: { ...producto } };
console.log(
  "%cDatos combinados (anidando producto dentro de cliente):",
  "color: navy; font-weight: bold;",
  datosCombinados
);

// **6. Resumen**
console.log(
  "%cResumen: \n1. Usar Object.assign puede modificar el objeto original. \n2. Usar el spread operator es más seguro y no altera los objetos originales.",
  "color: teal; font-weight: bold;"
);

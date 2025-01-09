// Uso de ECMAScript Modules (ESM)
// ECMAScript Modules permiten dividir el código en partes reutilizables que se pueden importar y exportar entre archivos.

// **1. Importación de funciones**
// Importamos las funciones definidas en el archivo `funciones.js` ubicado en la carpeta `modules`.
import { sumar, restar, multiplicar, dividir } from "./modules/funciones.js";

// **2. Uso de las funciones importadas**
// Realizamos operaciones utilizando las funciones importadas y mostramos los resultados en la consola.
console.log(
  "%cResultados de las operaciones:",
  "color: blue; font-weight: bold;"
);
console.log("Suma (2 + 3):", sumar(2, 3)); // 5
console.log("Resta (2 - 3):", restar(2, 3)); // -1
console.log("Multiplicación (2 * 3):", multiplicar(2, 3)); // 6
console.log("División (2 / 3):", dividir(2, 3)); // 0.666...

// **3. Nota importante**
// Asegúrate de que:
// - El archivo `funciones.js` esté correctamente ubicado en la carpeta `modules`.
// - Estés ejecutando el código en un entorno que soporte ESM (navegador moderno o Node.js con `"type": "module"` en `package.json`).

// Calculadora: Funciones de operaciones básicas

/**
 * Función para sumar dos números
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} - Resultado de la suma
 */
function sumar(a, b) {
  return a + b;
}

/**
 * Función para restar dos números
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} - Resultado de la resta
 */
function restar(a, b) {
  return a - b;
}

/**
 * Función para multiplicar dos números
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} - Resultado de la multiplicación
 */
function multiplicar(a, b) {
  return a * b;
}

/**
 * Función para dividir dos números
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} - Resultado de la división
 * @throws {Error} - Lanza un error si el divisor es 0
 */
function dividir(a, b) {
  if (b === 0) throw new Error("No se puede dividir por cero");
  return a / b;
}

// **1. Exportar funciones individualmente**
export { sumar, restar, multiplicar, dividir };

// **2. Exportar un objeto con todas las funciones**
const calculadora = {
  sumar,
  restar,
  multiplicar,
  dividir,
};

export default calculadora;

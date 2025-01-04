// tipos de datos de JS
// las variables en JS son dinamicas y no se especifica el tipo de dato que se va a guardar en la variable(implicito)
// los tipos de datos más comunes son: string, number, boolean, null, undefined, object, symbol
// string: texto, number: numero, boolean: true o false, null: nulo, undefined: indefinido, object: objeto, symbol: simbolo
// todas las variables en JS son objetos, excepto los tipos de datos primitivos: string, number, boolean, null, undefined, symbol
// los tipos de datos primitivos son inmutables, es decir, no se pueden modificar una vez creados (string, number, boolean, null, undefined, symbol)
// otros tipos más avanzados de datos son: array, function, object, date, etc (object)

let cliente; // undefined
cliente = "Juan"; // string
console.log(cliente);

cliente = 123; // number
console.log(cliente);

cliente = true; // boolean
console.log(cliente);

cliente = null; // null
console.log(cliente);

let numero1,
  numero2,
  numero3 = [1, 2, 3]; // otra forma de declarar variables en una sola linea y asignarles valores tomando en cuenta que el valor de numero1 y numero2 es undefined

console.log(numero1, numero2, numero3);

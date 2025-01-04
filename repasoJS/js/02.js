// repaso de las variables con cosnt
// las variables con const no se pueden reasignar
// las variables con const deben tener un valor inicial
// las variables con const tienen un scope de bloque (solo se pueden usar en el bloque donde se declaran).
// se recomienda usar const siempre que sea posible cuando se declaren variables que no van a cambiar de valor
// se suele usar const para declarar funciones y variables

const cliente = "Yampi"; // declarar e inicializar una variable con const

// cliente = "Juan"; // reasignar una variable con const

console.log(cliente); // imprimir una variable con const

function changeclient() {
  const cliente = "Pedro"; // declarar e inicializar una variable con const en una funcion
  console.log(cliente); // imprimir una variable con const en una funcion
}

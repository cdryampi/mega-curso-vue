// variables con let y const
// let y const son las nuevas formas de declarar variables en JS
// let se puede reasignar, const no se puede reasignar
// las variables con let se pueden iniciar sin valor, las variables con const deben tener un valor inicial
// las variables con let y const tienen un scope de bloque (solo se pueden usar en el bloque donde se declaran).

let cliente = "Yampi"; // declarar e inicializar una variable con let

cliente = "Juan"; // reasignar una variable con let

console.log(cliente); // imprimir una variable con let

function changeclient() {
  let cliente = "Pedro"; // declarar e inicializar una variable con let en una funcion
  console.log(cliente); // imprimir una variable con let en una funcion
}

changeclient(); // llamar a la funcion

// Manipulación de objetos en JavaScript
// En este tutorial aprenderás cómo modificar, copiar, congelar, sellar y explorar objetos en JavaScript.

// Utilizaremos un objeto de prueba llamado "musica" para los ejemplos.

const musica = {
  banda: "Metallica",
  genero: "Heavy Metal",
  canciones: ["Master of Puppets", "Seek & Destroy", "Enter Sandman"],
};

// Introducción: Modificación de propiedades
// Podemos reasignar valores a las propiedades de un objeto.

console.log("%cObjeto inicial:", "color: blue; font-weight: bold;", musica);

// Cambiamos las propiedades directamente:
musica.banda = "Iron Maiden";
musica.genero = "Rock";
musica.canciones = ["The Trooper", "Fear of the Dark", "Hallowed be thy Name"];

console.log(
  "%cObjeto después de modificar propiedades:",
  "color: green; font-weight: bold;",
  musica
);

// Congelación de objetos con Object.freeze()
// Un objeto congelado no permite añadir, eliminar ni modificar propiedades.

Object.freeze(musica);
console.log(
  "%c¿Está congelado el objeto? %s",
  "color: purple; font-weight: bold;",
  Object.isFrozen(musica)
);

// Intentamos modificar el objeto congelado (esto no tendrá efecto).
musica.banda = "AC/DC";
musica.nuevaPropiedad = "Prueba";

console.log(
  "%cDespués de intentar modificar el objeto congelado:",
  "color: red; font-weight: bold;",
  musica
);

// Copiar objetos para crear uno "descongelado"
// Usamos el operador spread para crear un nuevo objeto basado en el anterior.

const musicaDescongelada = { ...musica, banda: "AC/DC" };

console.log(
  "%cNuevo objeto basado en el anterior:",
  "color: orange; font-weight: bold;",
  musicaDescongelada
);

// Sellar objetos con Object.seal()
// Un objeto sellado no permite añadir ni eliminar propiedades, pero sí modificar las existentes.

Object.seal(musicaDescongelada);
console.log(
  "%c¿Está sellado el objeto? %s",
  "color: purple; font-weight: bold;",
  Object.isSealed(musicaDescongelada)
);

// Modificamos una propiedad del objeto sellado.
musicaDescongelada.banda = "Black Sabbath";

console.log(
  "%cObjeto después de modificar propiedades en un objeto sellado:",
  "color: green; font-weight: bold;",
  musicaDescongelada
);

// Métodos útiles para trabajar con objetos
console.log(
  "%cPropiedades del objeto (Object.keys):",
  "color: blue; font-weight: bold;",
  Object.keys(musicaDescongelada)
);

console.log(
  "%cValores del objeto (Object.values):",
  "color: blue; font-weight: bold;",
  Object.values(musicaDescongelada)
);

console.log(
  "%cPares clave-valor del objeto (Object.entries):",
  "color: blue; font-weight: bold;",
  Object.entries(musicaDescongelada)
);

// Comparación: eliminar propiedades con delete vs. spread operator

// Usando delete (forma antigua)
delete musicaDescongelada.canciones;
console.log(
  "%cDespués de eliminar 'canciones' con delete:",
  "color: red; font-weight: bold;",
  musicaDescongelada
);

// Usando spread operator (forma moderna)
const { genero, ...musicaSinGenero } = musicaDescongelada;
console.log(
  "%cNuevo objeto sin la propiedad 'genero':",
  "color: orange; font-weight: bold;",
  musicaSinGenero
);

// Copia profunda de objetos con Object.assign()
const copiaMusica = Object.assign({}, musicaSinGenero);
console.log(
  "%cCopia del objeto usando Object.assign:",
  "color: orange; font-weight: bold;",
  copiaMusica
);

// Conclusión
console.log(
  "%c¡Explora más sobre objetos en la documentación oficial de MDN! 😊",
  "color: purple; font-weight: bold;"
);

// Objetos en JavaScript
// Un objeto es una colección de propiedades y métodos que se acceden a través de claves (keys).
// Para definir un objeto, utilizamos llaves {}. Podemos acceder a las propiedades usando el punto (.) o corchetes ([]).

// **1. Crear un objeto**
const cliente = {
  nombre: "Juan",
  edad: 30,
  email: "juan30@gmail.com",
};

console.log("%cObjeto completo:", "color: blue; font-weight: bold;", cliente);
console.log(
  "%cPropiedad 'nombre':",
  "color: green; font-weight: bold;",
  cliente.nombre
);
console.log(
  "%cPropiedad 'edad':",
  "color: green; font-weight: bold;",
  cliente.edad
);
console.log(
  "%cPropiedad 'email':",
  "color: green; font-weight: bold;",
  cliente.email
);

// **2. Acceso a propiedades**
// Acceso con el punto (.) y corchetes ([]):
console.log(
  "%cAcceso con corchetes:",
  "color: orange; font-weight: bold;",
  cliente["nombre"]
);

// **3. Destructuring de objetos**
// Extraemos propiedades de un objeto para crear variables.

let { nombre, edad, email } = cliente;
console.log(
  "%cDestructuring - Nombre:",
  "color: purple; font-weight: bold;",
  nombre
);
console.log(
  "%cDestructuring - Edad:",
  "color: purple; font-weight: bold;",
  edad
);
console.log(
  "%cDestructuring - Email:",
  "color: purple; font-weight: bold;",
  email
);

// **4. Object Literal Enhacement**
// Una forma de simplificar la creación de objetos utilizando valores implícitos o explícitos.

// Ejemplo explícito:
const banda = "Metallica";
const genero = "Heavy Metal";
const canciones = ["Master of Puppets", "Seek & Destroy", "Enter Sandman"];

const musica = {
  banda: banda,
  genero: genero,
  canciones: canciones,
};

console.log("%cObjeto explícito:", "color: teal; font-weight: bold;", musica);

// Ejemplo implícito:
const musica2 = { banda, genero, canciones };
console.log("%cObjeto implícito:", "color: teal; font-weight: bold;", musica2);

// **5. Comparación de formas explícitas e implícitas**
// Forma explícita (declarando clave y valor manualmente)
const musica3 = {
  banda: "Metallica",
  genero: "Heavy Metal",
  canciones: ["Master of Puppets", "Seek & Destroy", "Enter Sandman"],
};
console.log("%cForma explícita:", "color: navy; font-weight: bold;", musica3);

// Forma implícita (cuando clave y variable tienen el mismo nombre)
const musica4 = { banda, genero, canciones };
console.log("%cForma implícita:", "color: navy; font-weight: bold;", musica4);

// **6. Casos de uso de Object Literal Enhacement**
// Este enfoque es útil cuando las claves del objeto son iguales a los nombres de las variables que quieres asignar.

// Ejemplo más restrictivo:
const album = {
  titulo: "Ride the Lightning",
  anio: 1984,
  banda, // Utiliza la variable 'banda' previamente definida
};
console.log("%cCaso restrictivo:", "color: maroon; font-weight: bold;", album);

// **7. Resumen**
console.log(
  "%cResumen: \n1. Los objetos son colecciones de pares clave-valor. \n2. Usa destructuring para extraer propiedades. \n3. Object Literal Enhacement simplifica la creación de objetos.",
  "color: teal; font-weight: bold;"
);

// Modificación de texto en el DOM en JavaScript
// Manipular el texto de elementos en el DOM es una tarea común en aplicaciones dinámicas.

// **1. Modificar el texto de un encabezado**
const heading = document.querySelector(".heading"); // Selecciona el primer elemento con la clase "heading"

// Cambiamos el texto del encabezado
heading.textContent = "Nuevo Texto para el Heading";
console.log(
  "%cTexto del heading modificado:",
  "color: blue; font-weight: bold;",
  heading.textContent
);

// **2. Modificar el valor de un campo de entrada**
const inputNombre = document.querySelector("#nombre"); // Selecciona el campo de entrada con el ID "nombre"

// Asignamos un valor al campo
inputNombre.value = "Hola Mundo";
console.log(
  "%cValor del input modificado:",
  "color: green; font-weight: bold;",
  inputNombre.value
);

// **3. Modificar el texto de múltiples enlaces**
const enlaces = document.querySelectorAll("a"); // Selecciona todos los elementos `<a>`

// Iteramos sobre cada enlace y actualizamos su texto
enlaces.forEach((enlace, index) => {
  enlace.textContent = `Enlace ${index + 1}`; // Asignamos un nuevo texto indicando el índice
  console.log(
    `%cTexto modificado para enlace ${index + 1}:`,
    "color: purple; font-weight: bold;",
    enlace.textContent
  );
});

// **4. Caso práctico: Agregar prefijo a los textos**
// Añadimos un prefijo al texto de cada enlace.
enlaces.forEach((enlace) => {
  enlace.textContent = `🔗 ${enlace.textContent}`;
});
console.log(
  "%cTexto de los enlaces con prefijo agregado:",
  "color: orange; font-weight: bold;",
  enlaces
);

// **5. Resumen**
console.log(
  "%cResumen: \n1. Usa `.textContent` para modificar el texto de elementos como encabezados y enlaces. \n2. Usa `.value` para modificar el contenido de campos de entrada. \n3. Itera sobre elementos con `querySelectorAll` y `forEach` para realizar cambios masivos.",
  "color: navy; font-weight: bold;"
);

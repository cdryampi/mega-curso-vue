// Eventos en JavaScript - Inputs
// Los eventos en campos de entrada permiten interactuar dinámicamente con los datos que los usuarios ingresan.

// **1. Selección inicial de elementos del DOM**
const nombre = document.querySelector("#nombre"); // Campo de texto para el nombre
const password = document.querySelector("#password"); // Campo de texto para la contraseña

// **2. Evento `input` en el campo de nombre**
// Actualizamos el texto del encabezado a medida que el usuario escribe.

nombre.addEventListener("input", (e) => {
  const heading = document.querySelector(".heading"); // Seleccionamos el encabezado
  heading.textContent = e.target.value; // Actualizamos el texto con el valor del input
  console.log(
    "%cTexto del heading actualizado:",
    "color: blue; font-weight: bold;",
    heading.textContent
  );
});

// **3. Evento `input` en el campo de contraseña**
// Mostramos brevemente la contraseña escrita antes de ocultarla.

password.addEventListener("input", (e) => {
  e.target.type = "text"; // Cambiamos el tipo a texto para mostrar la contraseña
  console.log(
    "%cContraseña visible temporalmente:",
    "color: orange; font-weight: bold;",
    e.target.value
  );

  // Ocultamos la contraseña después de 1 segundo
  setTimeout(() => {
    e.target.type = "password";
    console.log(
      "%cContraseña oculta nuevamente:",
      "color: green; font-weight: bold;"
    );
  }, 1000);
});

// **4. Ejemplo práctico: Validación en tiempo real**
// Validamos que el campo de nombre no esté vacío.
nombre.addEventListener("blur", () => {
  if (nombre.value.trim() === "") {
    alert("El campo de nombre no puede estar vacío.");
    nombre.focus(); // Enfocamos nuevamente en el campo de texto
  }
});

// **5. Resumen**
console.log(
  "%cResumen: \n1. Usa el evento `input` para detectar cambios en tiempo real. \n2. Combina `input` con `setTimeout` para efectos temporales como la ocultación de contraseñas. \n3. Usa el evento `blur` para validar campos cuando pierden el enfoque.",
  "color: navy; font-weight: bold;"
);

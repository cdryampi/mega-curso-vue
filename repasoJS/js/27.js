// Eventos en JavaScript - Submit
// El evento `submit` se utiliza para manejar el envío de formularios en aplicaciones web.

const formulario = document.querySelector("#formulario"); // Seleccionamos el formulario por su ID

// **1. Evento `submit` en el formulario**
formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // Evitamos que el formulario se envíe y recargue la página por defecto

  // **2. Recuperar valores de los campos**
  const nombre = document.querySelector("#nombre").value.trim(); // Obtenemos y limpiamos el valor del campo nombre
  const password = document.querySelector("#password").value.trim(); // Obtenemos y limpiamos el valor del campo contraseña

  // **3. Validaciones de campos**
  if (nombre === "" || password === "") {
    console.log(
      "%cError: Los campos están vacíos",
      "color: red; font-weight: bold;"
    );
    return; // Detenemos la ejecución si hay campos vacíos
  }

  // **4. Procesar y mostrar datos**
  console.log(
    "%cDatos enviados:",
    "color: blue; font-weight: bold;",
    `Nombre: ${nombre}, Contraseña: ${password}`
  );
  console.log(
    "%cFormulario enviado exitosamente.",
    "color: green; font-weight: bold;"
  );
});

// **5. Validación visual de campos vacíos**
document.querySelector("#formulario").addEventListener("submit", (e) => {
  const inputs = document.querySelectorAll("#formulario input"); // Seleccionamos todos los inputs del formulario

  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      input.style.borderColor = "red"; // Cambiamos el borde del campo a rojo si está vacío
      console.log(
        `%cError: El campo "${input.name}" está vacío.`,
        "color: orange; font-weight: bold;"
      );
    } else {
      input.style.borderColor = "green"; // Cambiamos el borde a verde si tiene valor
    }
  });
});

// **6. Resumen**
console.log(
  "%cResumen: \n1. Usa `submit` para manejar el envío de formularios. \n2. Usa `e.preventDefault()` para evitar la recarga de la página. \n3. Realiza validaciones para garantizar que los campos no estén vacíos. \n4. Proporciona retroalimentación visual a los usuarios.",
  "color: navy; font-weight: bold;"
);

// Validación de Formularios en JavaScript
// Este script maneja validaciones en el formulario y muestra alertas dinámicamente.

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita que el formulario recargue la página

  // **1. Eliminar alertas previas**
  const alertas = document.querySelector(".alerta");
  alertas?.remove();

  // **2. Crear una alerta dinámica**
  const alerta = document.createElement("div");
  alerta.classList.add(
    "alerta",
    "bg-red-500",
    "text-white",
    "text-center",
    "font-bold",
    "uppercase",
    "p-3"
  );

  // **3. Obtener los valores de los campos**
  const nombre = document.querySelector("#nombre").value.trim();
  const password = document.querySelector("#password").value.trim();

  // **4. Validaciones**
  if (nombre === "" || password === "") {
    // Validación de campos vacíos
    mostrarAlerta(alerta, formulario, "Todos los campos son obligatorios");
    return;
  }

  if (password.length < 6) {
    // Validación de longitud mínima de la contraseña
    mostrarAlerta(
      alerta,
      formulario,
      "La contraseña debe tener al menos 6 caracteres"
    );
    return;
  }

  // **5. Formulario válido**
  alerta.textContent = "Formulario enviado correctamente";
  alerta.classList.remove("bg-red-500");
  alerta.classList.add("bg-green-500");
  formulario.appendChild(alerta);
  setTimeout(() => alerta.remove(), 3000);
});

/**
 * Función para mostrar alertas dinámicas
 * @param {HTMLElement} alerta - El elemento de alerta
 * @param {HTMLElement} formulario - El formulario donde se mostrará la alerta
 * @param {string} mensaje - El mensaje a mostrar en la alerta
 */
function mostrarAlerta(alerta, formulario, mensaje) {
  alerta.textContent = mensaje;
  formulario.appendChild(alerta);
  setTimeout(() => alerta.remove(), 3000);
}

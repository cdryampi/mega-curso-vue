// Fetch API con Async/Await
// Este script consulta una API, procesa los datos de manera asíncrona y maneja errores con bloques try-catch-finally.

const url = "https://jsonplaceholder.typicode.com/comments";

/**
 * Función para obtener datos de una API usando async/await
 * @param {string} url - La URL de la API que se desea consultar.
 */
const obtenerDatos = async (url) => {
  try {
    console.log(
      "%cIniciando consulta a la API...",
      "color: blue; font-weight: bold;"
    );

    // **1. Realizar la consulta con fetch**
    const response = await fetch(url);

    // Verificar si la respuesta es válida
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    // **2. Convertir la respuesta a JSON**
    const data = await response.json();
    console.log("%cDatos obtenidos:", "color: green; font-weight: bold;", data);

    // **3. Mostrar los datos en el DOM**
    mostrarHTML(data);
  } catch (error) {
    console.error(
      "%cError al consultar la API:",
      "color: red; font-weight: bold;",
      error
    );
  } finally {
    console.log("%cProceso terminado.", "color: teal; font-weight: bold;");
  }
};

/**
 * Función para mostrar los datos obtenidos en el DOM
 * @param {Array} comentarios - Lista de comentarios obtenidos de la API.
 */
const mostrarHTML = (comentarios) => {
  const contenido = document.querySelector("#content");

  if (!contenido) {
    console.error("El contenedor '#content' no existe en el DOM.");
    return;
  }

  // Limpiar contenido previo
  contenido.innerHTML = "";

  comentarios.forEach((comentario) => {
    const div = document.createElement("div");
    div.classList.add(
      "bg-gray-100",
      "p-3",
      "m-3",
      "rounded",
      "shadow-md",
      "text-wrap"
    );

    div.innerHTML = `
      <h3 class="font-bold text-lg">${comentario.email}</h3>
      <p class="text-sm">${comentario.body}</p>
    `;
    contenido.appendChild(div);
  });
};

// **Inicio de la consulta a la API**
obtenerDatos(url);

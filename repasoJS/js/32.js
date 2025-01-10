// Múltiples Fetch con Async/Await
// Este script realiza múltiples solicitudes a la API y procesa sus respuestas de forma simultánea.

const url1 = "https://jsonplaceholder.typicode.com/comments";
const url2 = "https://jsonplaceholder.typicode.com/photos";

/**
 * Función para realizar múltiples solicitudes con Fetch usando Promise.all
 * @param {string} url1 - Primera URL a consultar
 * @param {string} url2 - Segunda URL a consultar
 */
async function fetchData(url1, url2) {
  try {
    console.log(
      "%cIniciando solicitudes...",
      "color: blue; font-weight: bold;"
    );

    // Realizar múltiples solicitudes simultáneamente
    const [respuesta1, respuesta2] = await Promise.all([
      fetch(url1),
      fetch(url2),
    ]);

    // Verificar si las respuestas son válidas
    if (!respuesta1.ok)
      throw new Error(`Error en la respuesta 1: ${respuesta1.status}`);
    if (!respuesta2.ok)
      throw new Error(`Error en la respuesta 2: ${respuesta2.status}`);

    // Convertir las respuestas a JSON
    const [data1, data2] = await Promise.all([
      respuesta1.json(),
      respuesta2.json(),
    ]);

    console.log(
      "%cDatos de la primera solicitud:",
      "color: green; font-weight: bold;",
      data1
    );
    console.log(
      "%cDatos de la segunda solicitud:",
      "color: teal; font-weight: bold;",
      data2
    );

    // Mostrar los datos en el DOM
    mostrarHTML(data1, data2);
  } catch (error) {
    console.error(
      "%cError en las solicitudes:",
      "color: red; font-weight: bold;",
      error
    );
  } finally {
    console.log("%cProceso terminado.", "color: purple; font-weight: bold;");
  }
}

/**
 * Función para mostrar los datos obtenidos en el DOM
 * @param {Array} data1 - Datos de la primera solicitud
 * @param {Array} data2 - Datos de la segunda solicitud
 */
function mostrarHTML(data1, data2) {
  const contenido = document.querySelector("#content");

  if (!contenido) {
    console.error("El contenedor '#content' no existe en el DOM.");
    return;
  }

  // Limpiar contenido previo
  contenido.innerHTML = "";

  // Mostrar datos de la primera solicitud
  const comentariosDiv = document.createElement("div");
  comentariosDiv.innerHTML = `<h2 class="text-lg font-bold mb-3">Comentarios</h2>`;
  data1.slice(0, 5).forEach((comentario) => {
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
    comentariosDiv.appendChild(div);
  });
  contenido.appendChild(comentariosDiv);

  // Mostrar datos de la segunda solicitud
  const fotosDiv = document.createElement("div");
  fotosDiv.innerHTML = `<h2 class="text-lg font-bold mb-3">Fotos</h2>`;
  data2.slice(0, 5).forEach((foto) => {
    const div = document.createElement("div");
    div.classList.add("m-3");
    div.innerHTML = `
      <img src="${foto.thumbnailUrl}" alt="${foto.title}" class="rounded shadow-md" />
      <p class="text-sm mt-2">${foto.title}</p>
    `;
    fotosDiv.appendChild(div);
  });
  contenido.appendChild(fotosDiv);
}

// **Inicio de las solicitudes**
fetchData(url1, url2);

// Fetch API con promises

const url = "https://jsonplaceholder.typicode.com/comments";

const consultarAPI = (url) => {
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => mostrarHTML(resultado))
    .catch((error) => console.log(error))
    .finally(() => console.log("Proceso finalizado"));
};

const mostrarHTML = (comentarios) => {
  const contenido = document.querySelector("#content");
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
            <h3>${comentario.email}</h3>
            <p>${comentario.body}</p>
        `;
    contenido.appendChild(div);
  });
};

consultarAPI(url);

// Eventos en JavaScript - Clicks
// Los eventos permiten interactuar con los elementos del DOM cuando ocurre una acción específica, como un clic.

// **1. Declaración inicial**
const heading = document.querySelector(".heading"); // Selecciona el primer elemento con la clase "heading"
const enlaces = document.querySelectorAll("a"); // Selecciona todos los elementos `<a>`

// **2. Evento click en un encabezado**
// Cambiamos el texto del heading al hacer clic.
heading.addEventListener("click", () => {
  heading.textContent = "Nuevo Texto para el Heading";
  console.log("%cClick en el heading", "color: blue; font-weight: bold;");
});

// **3. Evento doble clic (dblclick) en un encabezado**
// Cambiamos el texto del heading al hacer doble clic.
heading.addEventListener("dblclick", () => {
  heading.textContent = "Texto para el Heading (Doble Click)";
  console.log("%cDoble clic en el heading", "color: green; font-weight: bold;");
});

// **4. Evento click en múltiples enlaces**
// Iteramos sobre cada enlace para agregar un evento de clic.
enlaces.forEach((enlace, index) => {
  enlace.addEventListener("click", (e) => {
    e.preventDefault(); // Evita la acción predeterminada del enlace
    enlace.textContent = `Enlace ${index + 1} - Click`;
    console.log(
      `%cClick en enlace ${index + 1}:`,
      "color: purple; font-weight: bold;"
    );
    console.log(e); // Muestra el objeto del evento
  });
});

// **5. Uso de `e` (objeto del evento)**
// Muestra información del evento cuando haces clic en el primer enlace.
enlaces[0].addEventListener("click", (e) => {
  console.log("%cInformación del evento:", "color: orange; font-weight: bold;");
  console.log("Tipo de evento:", e.type);
  console.log("Elemento objetivo:", e.target);
  console.log("Coordenadas del clic (X, Y):", e.clientX, e.clientY);
});

// **6. Caso práctico: Cambiar el color del enlace al hacer clic**
enlaces.forEach((enlace) => {
  enlace.addEventListener("click", () => {
    enlace.style.color = "red"; // Cambia el color del texto del enlace
  });
});

// **7. Resumen**
console.log(
  "%cResumen: \n1. Usa `addEventListener` para agregar eventos a elementos del DOM. \n2. El evento `click` se dispara cuando el usuario hace clic en un elemento. \n3. Usa `e.preventDefault()` para evitar acciones predeterminadas. \n4. Puedes usar el objeto del evento (`e`) para obtener detalles adicionales como tipo, objetivo y posición.",
  "color: navy; font-weight: bold;"
);

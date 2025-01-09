// Optional Chaining (Encadenamiento Opcional) en JavaScript
// Introducido en ES11, el encadenamiento opcional (`?.`) simplifica el acceso a propiedades anidadas
// evitando errores cuando alguna propiedad intermedia es `null` o `undefined`.

// **1. Declaración inicial**
const alumno = {
  nombre: "Juan",
  clase: "Programación 1",
  aprovado: true,
};

console.log(
  "%cDatos del alumno inicial:",
  "color: blue; font-weight: bold;",
  alumno
);

// **2. Caso de uso con API simulada**
// Supongamos que los datos del examen se agregan de forma asincrónica.

setTimeout(() => {
  alumno.examenes = {
    examen1: 10,
    examen2: 9,
    examen3: 8,
  };
  console.log(
    "%cNota del primer examen (usando optional chaining):",
    "color: green; font-weight: bold;",
    alumno?.examenes?.examen1 // Acceso seguro
  );
}, 3000);

// **3. Acceso antes de optional chaining**
// Antes de ES11, debíamos verificar manualmente cada nivel para evitar errores.
if (alumno.examenes && alumno.examenes.examen1) {
  console.log(
    "%cNota del primer examen (antes de optional chaining):",
    "color: orange; font-weight: bold;",
    alumno.examenes.examen1
  );
} else {
  console.log(
    "%cPropiedad no definida (antes de optional chaining).",
    "color: red; font-weight: bold;"
  );
}

// **4. Uso práctico del encadenamiento opcional**
// Verificar múltiples niveles de propiedades sin errores:
console.log(
  "%cPropiedad inexistente (sin error):",
  "color: purple; font-weight: bold;",
  alumno?.notas?.examenFinal // `undefined`, sin lanzar error
);

// **5. Ejemplo avanzado**
// 5.1. Usar encadenamiento opcional con llamadas a funciones.
alumno.obtenerPromedio?.(); // No genera error si la función no está definida.

alumno.obtenerPromedio = function () {
  return (
    (this.examenes?.examen1 + this.examenes?.examen2 + this.examenes?.examen3) /
    3
  );
};
console.log(
  "%cPromedio del alumno (con optional chaining):",
  "color: teal; font-weight: bold;",
  alumno.obtenerPromedio?.()
);

// **6. Usar optional chaining con arrays**
// Verificar elementos en un array anidado:
const estudiantes = [
  { nombre: "Ana", cursos: { programación: true } },
  { nombre: "Luis" },
];
console.log(
  "%cAna está inscrita en programación:",
  "color: green; font-weight: bold;",
  estudiantes[0]?.cursos?.programación // true
);
console.log(
  "%cLuis está inscrito en programación:",
  "color: green; font-weight: bold;",
  estudiantes[1]?.cursos?.programación // undefined
);

// **7. Resumen**
console.log(
  "%cResumen: \n1. Usa `?.` para acceder a propiedades anidadas de forma segura. \n2. Ideal para datos que pueden ser `undefined` o `null`. \n3. Simplifica el código al evitar verificaciones manuales.",
  "color: navy; font-weight: bold;"
);

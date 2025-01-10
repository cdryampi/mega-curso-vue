// Scope o Alcance en JavaScript
// El "scope" define el contexto donde una variable es accesible. En JavaScript, existen diferentes tipos de scope.

// **1. Declaración inicial**
let precio = 100;

function descuento() {
  // Variable `precio` dentro del scope de la función
  let precio = 300;
  return precio * 0.2;
}

// **2. Ejecución**
console.log(
  "%cResultado del descuento (scope local):",
  "color: green; font-weight: bold;",
  descuento()
); // 60
console.log(
  "%cPrecio fuera de la función (scope global):",
  "color: blue; font-weight: bold;",
  precio
); // 100

// **3. Tipos de Scope**
// 3.1. Scope Global
// Las variables declaradas fuera de funciones o bloques están en el scope global.
let globalVariable = "Soy global";
console.log(
  "%cVariable global:",
  "color: teal; font-weight: bold;",
  globalVariable
);

// 3.2. Scope Local
// Las variables declaradas dentro de una función solo son accesibles en esa función.
function ejemploScopeLocal() {
  let localVariable = "Soy local";
  console.log(
    "%cVariable local dentro de la función:",
    "color: purple; font-weight: bold;",
    localVariable
  );
}
ejemploScopeLocal();
// console.log(localVariable); // Descomenta para ver el error: localVariable is not defined

// **4. Bloques y Scope con let/const**
// Las variables declaradas con `let` o `const` tienen un alcance de bloque.

if (true) {
  let bloqueLet = "Scope de bloque con let";
  const bloqueConst = "Scope de bloque con const";
  console.log(
    "%cDentro del bloque:",
    "color: orange; font-weight: bold;",
    bloqueLet
  );
  console.log(
    "%cDentro del bloque:",
    "color: orange; font-weight: bold;",
    bloqueConst
  );
}
// console.log(bloqueLet); // Descomenta para ver el error: bloqueLet is not defined
// console.log(bloqueConst); // Descomenta para ver el error: bloqueConst is not defined

// **5. Hoisting**
// Las variables declaradas con `var` se "elevan" al principio del contexto, pero no con `let` o `const`.

function ejemploHoisting() {
  console.log(
    "%cVariable con var antes de declaración:",
    "color: red; font-weight: bold;",
    miVar
  ); // undefined
  var miVar = "Soy una variable con var";

  // let y const no se elevan de la misma forma
  // console.log(miLet); // Descomenta para ver el error: Cannot access 'miLet' before initialization
  let miLet = "Soy una variable con let";
}
ejemploHoisting();

// **6. Ejemplo avanzado: Shadowing**
// Una variable puede "ocultar" otra del scope superior si tiene el mismo nombre.
let shadowing = "Soy global";

function ejemploShadowing() {
  let shadowing = "Soy local";
  console.log(
    "%cDentro de la función:",
    "color: magenta; font-weight: bold;",
    shadowing
  );
}
ejemploShadowing();
console.log(
  "%cFuera de la función:",
  "color: magenta; font-weight: bold;",
  shadowing
);

// **7. Resumen**
console.log(
  "%cResumen: \n1. Scope Global: accesible en todo el programa. \n2. Scope Local: accesible solo dentro de una función. \n3. let/const tienen scope de bloque. \n4. var tiene hoisting y scope de función.",
  "color: navy; font-weight: bold;"
);

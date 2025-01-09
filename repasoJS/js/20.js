// Operadores Ternarios en JavaScript
// La sintaxis de un operador ternario es: `(condición) ? expresiónSiVerdadero : expresiónSiFalso`.
// Son ideales para condiciones simples y concisas.

// **1. Declaración inicial**
const disponible = 300;
const total = 200;
const tarjeta = true;

// **2. Ejemplo básico con ternarios**
disponible >= total && tarjeta
  ? console.log("%cPuedes pagar", "color: green; font-weight: bold;")
  : console.log("%cNo puedes pagar", "color: red; font-weight: bold;");

// **3. Anidación de operadores ternarios**
// Ejemplo con varias condiciones anidadas.
disponible >= total
  ? console.log(
      "%cTienes efectivo suficiente",
      "color: blue; font-weight: bold;"
    )
  : tarjeta
  ? console.log("%cTienes tarjeta", "color: orange; font-weight: bold;")
  : console.log("%cNo puedes pagar", "color: red; font-weight: bold;");

// **4. Comparación con if-else**
// Aunque los operadores ternarios son útiles, a veces es mejor usar `if-else` para mejorar la legibilidad.

if (disponible >= total) {
  console.log(
    "%cTienes efectivo suficiente",
    "color: blue; font-weight: bold;"
  );
} else if (tarjeta) {
  console.log("%cTienes tarjeta", "color: orange; font-weight: bold;");
} else {
  console.log("%cNo puedes pagar", "color: red; font-weight: bold;");
}

// **5. Casos prácticos**
// Ejemplo 1: Mensaje basado en el saldo disponible.
const saldoMensaje =
  disponible >= total
    ? "Efectivo suficiente para pagar."
    : "Saldo insuficiente para pagar.";
console.log(
  "%cSaldo mensaje:",
  "color: teal; font-weight: bold;",
  saldoMensaje
);

// Ejemplo 2: Definir un valor basado en una condición.
const metodoPago =
  disponible >= total ? "efectivo" : tarjeta ? "tarjeta" : "ninguno";
console.log(
  "%cMétodo de pago seleccionado:",
  "color: navy; font-weight: bold;",
  metodoPago
);

// **6. Resumen**
console.log(
  "%cResumen: \n1. Usa operadores ternarios para condiciones simples. \n2. Para múltiples condiciones o lógica compleja, prefiere `if-else` por legibilidad. \n3. Puedes usar ternarios para asignar valores directamente.",
  "color: purple; font-weight: bold;"
);

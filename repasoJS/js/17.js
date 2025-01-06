// Condicionales en JavaScript
// Los condicionales se usan para ejecutar diferentes bloques de código basados en condiciones.

// **1. Ejemplo básico**
const puntaje = 1000;

// Condicional básico con `if-else`
if (puntaje === 1000) {
  console.log(
    "%cEl puntaje es igual a 1000",
    "color: green; font-weight: bold;"
  );
} else {
  console.log(
    "%cEl puntaje no es igual a 1000",
    "color: red; font-weight: bold;"
  );
}

// **2. Uso de operadores de comparación**
// `===` compara valor y tipo, mientras que `==` compara solo valor.

const retirar = 50;

if (retirar == "50") {
  console.log(
    "%cCon ==: Retirar es igual a 50 (compara solo el valor)",
    "color: teal; font-weight: bold;"
  );
}

if (retirar === "50") {
  console.log(
    "%cCon ===: Retirar es igual a 50 (compara valor y tipo)",
    "color: teal; font-weight: bold;"
  );
} else {
  console.log(
    "%cCon ===: Retirar NO es igual a 50 (valor o tipo no coinciden)",
    "color: red; font-weight: bold;"
  );
}

// **3. Condicional anidado**
// Usar condicionales dentro de otros condicionales.

if (puntaje >= 1000) {
  if (retirar <= 100) {
    console.log(
      "%cPuntaje suficiente y retiro permitido.",
      "color: green; font-weight: bold;"
    );
  } else {
    console.log(
      "%cPuntaje suficiente, pero el retiro excede el límite.",
      "color: orange; font-weight: bold;"
    );
  }
} else {
  console.log(
    "%cPuntaje insuficiente para realizar operaciones.",
    "color: red; font-weight: bold;"
  );
}

// **4. Operador ternario**
// Una forma más corta de escribir condicionales.

const mensaje =
  puntaje >= 1000
    ? "El puntaje es suficiente."
    : "El puntaje no es suficiente.";
console.log("%cOperador ternario:", "color: blue; font-weight: bold;", mensaje);

// **5. Switch-case**
// Usar switch para manejar múltiples casos.

const metodoPago = "tarjeta";

switch (metodoPago) {
  case "efectivo":
    console.log(
      "%cHas seleccionado pagar con efectivo.",
      "color: green; font-weight: bold;"
    );
    break;
  case "tarjeta":
    console.log(
      "%cHas seleccionado pagar con tarjeta.",
      "color: teal; font-weight: bold;"
    );
    break;
  case "paypal":
    console.log(
      "%cHas seleccionado pagar con PayPal.",
      "color: purple; font-weight: bold;"
    );
    break;
  default:
    console.log(
      "%cMétodo de pago no reconocido.",
      "color: red; font-weight: bold;"
    );
    break;
}

// **6. Resumen**
console.log(
  "%cResumen: \n1. Usa `if-else` para condicionales básicos. \n2. Usa `===` para comparar valor y tipo. \n3. Usa el operador ternario para condiciones simples. \n4. Usa `switch` para manejar múltiples casos.",
  "color: navy; font-weight: bold;"
);

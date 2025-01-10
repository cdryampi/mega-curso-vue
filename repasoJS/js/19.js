// Operadores lógicos || (OR) y && (AND) en JavaScript
// Los operadores lógicos permiten evaluar múltiples condiciones en una expresión.

// **1. Declaración inicial**
const disponible = 100;
const total = 200;
const tarjeta = true;

// **2. Operador lógico OR (||)**
// El operador OR evalúa a `true` si al menos una de las condiciones es verdadera.

if (disponible > total || tarjeta) {
  console.log(
    "%cResultado con OR (||): Puedes pagar.",
    "color: green; font-weight: bold;"
  );
} else {
  console.log(
    "%cResultado con OR (||): Fondos insuficientes.",
    "color: red; font-weight: bold;"
  );
}

// **3. Operador lógico AND (&&)**
// El operador AND evalúa a `true` solo si todas las condiciones son verdaderas.

if (disponible > total && tarjeta) {
  console.log(
    "%cResultado con AND (&&): Puedes pagar.",
    "color: green; font-weight: bold;"
  );
} else {
  console.log(
    "%cResultado con AND (&&): Fondos insuficientes.",
    "color: red; font-weight: bold;"
  );
}

// **4. Usando OR y AND combinados**
// Combinamos ambos operadores en una expresión más compleja.

if ((disponible > total || tarjeta) && total <= 500) {
  console.log(
    "%cCombinación de OR y AND: Puedes pagar.",
    "color: teal; font-weight: bold;"
  );
} else {
  console.log(
    "%cCombinación de OR y AND: Fondos insuficientes.",
    "color: red; font-weight: bold;"
  );
}

// **5. Casos prácticos**
// Ejemplo 1: Acceso a un sitio web
const usuario = true;
const admin = false;

if (usuario || admin) {
  console.log(
    "%cAcceso permitido: Usuario o Administrador.",
    "color: green; font-weight: bold;"
  );
} else {
  console.log(
    "%cAcceso denegado: No eres Usuario ni Administrador.",
    "color: red; font-weight: bold;"
  );
}

// Ejemplo 2: Validación completa
const contrasena = true;
const dobleAutenticacion = false;

if (contrasena && dobleAutenticacion) {
  console.log(
    "%cAcceso seguro: Contraseña y doble autenticación verificadas.",
    "color: green; font-weight: bold;"
  );
} else {
  console.log(
    "%cAcceso inseguro: Falta alguna validación.",
    "color: orange; font-weight: bold;"
  );
}

// **6. Resumen**
console.log(
  "%cResumen: \n1. Usa OR (||) si una condición verdadera es suficiente. \n2. Usa AND (&&) si todas las condiciones deben ser verdaderas. \n3. Combina OR y AND para expresiones más complejas.",
  "color: navy; font-weight: bold;"
);

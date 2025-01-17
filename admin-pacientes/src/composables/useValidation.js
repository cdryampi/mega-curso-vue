import { ref } from "vue";

export function useValidation() {
  // Funcion para validar minimamente los campos del formulario de "nombre de paciente, nombre de mascota, email y sistomas"
  const errors = ref({
    nombre: null,
    mascota: null,
    email: null,
    sintomas: null,
  });

  const validateNombre = (value, inputname) => {
    // Si el valor es igual a un string vacio, entonces el campo es obligatorio
    if (value === "") {
      errors.value[inputname] = "El campo es obligatorio";
      return false;
    } else {
      errors.value[inputname] = null;
    }
    // devolver el mismo valor que recibimos pero sin espacios en blanco y en minusculas.
    return value.trim().toLowerCase();
  };
  const validateEmail = (value, inputname) => {
    // Expresion regular para validar un email
    const re = /\S+@\S+\.\S+/;
    if (!re.test(value)) {
      errors.value[inputname] = "Email no valido";
      return false;
    } else {
      errors.value[inputname] = null;
    }
    // devolver el mismo valor que recibimos pero sin espacios en blanco
    return value.trim();
  };

  const validateTextarea = (value, inputname) => {
    if (value === "") {
      errors.value[inputname] = "El campo es obligatorio";
      return false;
    } else {
      errors.value[inputname] = null;
    }
    // devolver el mismo valor que recibimos pero sin espacios en blanco
    return value.trim();
  };

  const validateDate = (value, inputname) => {
    // valida si la fecha es mayor a la fecha actual
    const date = new Date();
    const dateValue = new Date(value);
    if (dateValue < date) {
      errors.value[inputname] = "Fecha no valida";
      return false;
    } else {
      errors.value[inputname] = null;
    }
    // devolver el mismo valor que recibimos pero sin espacios en blanco
    return value.trim();
  };

  return {
    errors,
    validateNombre,
    validateEmail,
    validateTextarea,
    validateDate,
  };
}

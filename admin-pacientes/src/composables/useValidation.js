import { ref, reactive } from "vue";

export function useValidation() {
  // Estado de errores reactivo
  const errors = ref({
    nombre: null,
    mascota: null,
    email: null,
    sintomas: null,
    fecha: null,
  });

  // Limpiar todos los errores
  const clearErrors = () => {
    Object.keys(errors.value).forEach((key) => {
      errors.value[key] = null;
    });
  };

  // Limpiar error específico
  const clearError = (inputName) => {
    errors.value[inputName] = null;
  };

  // Validar campos de texto (nombre, mascota)
  const validateNombre = (value, inputName) => {
    if (!value || value.trim() === "") {
      errors.value[inputName] = "Este campo es obligatorio";
      return false;
    }

    if (value.trim().length < 2) {
      errors.value[inputName] = "Debe tener al menos 2 caracteres";
      return false;
    }

    if (value.trim().length > 50) {
      errors.value[inputName] = "No puede exceder 50 caracteres";
      return false;
    }

    errors.value[inputName] = null;
    return value.trim();
  };

  // Validar email
  const validateEmail = (value, inputName) => {
    if (!value || value.trim() === "") {
      errors.value[inputName] = "El email es obligatorio";
      return false;
    }

    // Expresión regular más robusta para email
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!emailRegex.test(value.trim())) {
      errors.value[inputName] = "Ingresa un email válido";
      return false;
    }

    errors.value[inputName] = null;
    return value.trim().toLowerCase();
  };

  // Validar textarea (síntomas)
  const validateTextarea = (value, inputName) => {
    if (!value || value.trim() === "") {
      errors.value[inputName] = "Este campo es obligatorio";
      return false;
    }

    if (value.trim().length < 10) {
      errors.value[inputName] = "Debe describir los síntomas con al menos 10 caracteres";
      return false;
    }

    if (value.trim().length > 500) {
      errors.value[inputName] = "La descripción no puede exceder 500 caracteres";
      return false;
    }

    errors.value[inputName] = null;
    return value.trim();
  };

  // Validar fecha
  const validateDate = (value, inputName) => {
    if (!value) {
      errors.value[inputName] = "La fecha es obligatoria";
      return false;
    }

    const inputDate = new Date(value);
    const today = new Date();

    // Resetear horas para comparar solo fechas
    today.setHours(0, 0, 0, 0);
    inputDate.setHours(0, 0, 0, 0);

    // Validar que la fecha no sea inválida
    if (isNaN(inputDate.getTime())) {
      errors.value[inputName] = "Fecha inválida";
      return false;
    }

    // Validar que la fecha no sea anterior a hoy
    if (inputDate < today) {
      errors.value[inputName] = "La fecha no puede ser anterior a hoy";
      return false;
    }

    // Validar que la fecha no sea muy lejana en el futuro (máximo 1 año)
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    if (inputDate > maxDate) {
      errors.value[inputName] = "La fecha no puede ser superior a un año";
      return false;
    }

    errors.value[inputName] = null;
    return value;
  };

  // Validar todo el formulario
  const validateForm = (formData) => {
    let isValid = true;
    const validatedData = {};

    // Validar nombre de la mascota
    const mascotaResult = validateNombre(formData.nombreMascota, "mascota");
    if (mascotaResult === false) isValid = false;
    else validatedData.nombreMascota = mascotaResult;

    // Validar nombre del propietario
    const nombreResult = validateNombre(formData.nombrePropietario, "nombre");
    if (nombreResult === false) isValid = false;
    else validatedData.nombrePropietario = nombreResult;

    // Validar email
    const emailResult = validateEmail(formData.email, "email");
    if (emailResult === false) isValid = false;
    else validatedData.email = emailResult;

    // Validar fecha
    const fechaResult = validateDate(formData.fechaAlta, "fecha");
    if (fechaResult === false) isValid = false;
    else validatedData.fechaAlta = fechaResult;

    // Validar síntomas
    const sintomasResult = validateTextarea(formData.sintomas, "sintomas");
    if (sintomasResult === false) isValid = false;
    else validatedData.sintomas = sintomasResult;

    return {
      isValid,
      data: isValid ? validatedData : null,
    };
  };

  // Verificar si hay errores
  const hasErrors = () => {
    return Object.values(errors.value).some((error) => error !== null);
  };

  return {
    errors,
    clearErrors,
    clearError,
    validateNombre,
    validateEmail,
    validateTextarea,
    validateDate,
    validateForm,
    hasErrors,
  };
}

<script setup>
// Importaciones de Vue
import HeaderComponent from "./components/HeaderComponent.vue";
import FormularioComponent from "./components/FormularioComponent.vue";
import ListaPacientesComponent from "./components/ListaPacientesComponent.vue";
import PopUpComponent from "./components/PopUpComponent.vue";
// Importaciones de los componentes personalizados
import { useValidation } from "./composables/useValidation";

// Importaciones de los datos de las citas
import citas from "./data/citas.js";
import { ref, reactive, onMounted } from "vue";

const pacientes = ref([]);
const paciente = reactive({
  nombreMascota: "",
  nombrePropietario: "",
  email: "",
  fechaAlta: "",
  sintomas: ""
});

const {
  errors,
  validateNombre,
  validateEmail,
  validateTextarea,
  validateDate,
} = useValidation();


const popupAltas = ref(false);

citas.forEach((cita) => {
  pacientes.value.push(cita);
});

const openClosePopup = () => {
  popupAltas.value = !popupAltas.value;
};

const enviarFormulario = () => {
  // Validar los campos del formulario
  if (
    !validateNombre(paciente.nombreMascota, "mascota") ||
    !validateNombre(paciente.nombrePropietario, "propietario") ||
    !validateEmail(paciente.email, "email") ||
    !validateTextarea(paciente.sintomas, "sintomas") ||
    !validateDate(paciente.fechaAlta, "fecha")
  ) {
    return;
  }
  // añaadir el id al objeto y añadir al array de altasClientes
  pacientes.push({
    id: altasClientes.length + 1,
    nombreMascota: paciente.nombreMascota,
    nombrePropietario: paciente.nombrePropietario,
    email: paciente.email,
    fechaAlta: paciente.fechaAlta,
    sintomas: paciente.sintomas,
  });

  paciente.nombreMascota = "";
  paciente.nombrePropietario = "";
  paciente.email = "";
  paciente.fechaAlta = "";
  paciente.sintomas = "";
  console.log("Formulario enviado");
  openClosePopup();
};

const eliminarCliente = (id) => {
  const index = pacientes.value.findIndex((cita) => cita.id === id);
  pacientes.value.splice(index, 1);
  console.log("Cliente eliminado");
};

onMounted(() => {
  pacientes.value = citas;
  console.log("Pacientes:", pacientes.value);
});
</script>

<template>
  <div class="container mx-auto mt-20">
    <HeaderComponent />
    <div class="md_w-1/2 md:h-screen overflow-y-scroll" v-if="!pacientes.length">
        <h2 class="text-2xl text-center font-bold mb-6">Administra tus pacientes</h2>
        <div  class="text-center text-gray-500">
          <p class="text-lg">
            No hay pacientes registrados. Utiliza el formulario a la izquierda para agregar nuevos pacientes.
          </p>
        </div>
    </div>
    
    <div class="mt-12 md:flex">
      <div class="container md:mx-auto mt-20 md:flex gap-20">
        <FormularioComponent
          v-model:nombreMascota="paciente.nombreMascota"
          v-model:nombrePropietario="paciente.nombrePropietario"
          v-model:email="paciente.email"
          v-model:fechaAlta="paciente.fechaAlta"
          v-model:sintomas="paciente.sintomas"
          :errors="errors"
          @enviar-formulario="enviarFormulario"
        />
        <ListaPacientesComponent
          :altasClientes="pacientes"
          @eliminar-cliente="eliminarCliente"
        />
      </div>


    </div>
  </div>
  <!-- Popup cuando se da de alta un cliente-->
  <PopUpComponent
    :popupAltas="popupAltas"
    @open-close-popup="openClosePopup"
  />
</template>

<style scoped></style>

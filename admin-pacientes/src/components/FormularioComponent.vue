<template>
  <div class="container md:mx-auto mt-20 md:flex gap-20">
    <div class="md:w-1/2" data-aos="fade-right">
      <h2 class="font-black text-3xl text-center">Seguimiento de pacientes</h2>
      <p class="text-center tex-lg mb-10">
        Añade pacientes y
        <span class="text-indigo-600 font-bold">adminístralos</span>
      </p>
      <form
        class="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        @submit.prevent="enviarFormulario"
      >
        <!-- nombre mascota, nombre propietario, email, alta, síntomas, registrar paciente -->

        <!-- Inicio del input del nombre de la mascota -->
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            id="nombre-mascota"
            name="nombre-mascota"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-theme appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=""
            required
            v-model="formulario.nombreMascota"
          />
          <label
            for="nombre-mascota"
            class="peer-focus:font-medium absolute text-sm text-primary dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:font-bolder peer-focus:dark:text-theme peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nombre de la mascota
          </label>
          <AlertaComponent v-if="errors.mascota" :alertMsg="errors.mascota" />
        </div>
        <!-- Fin del input del nombre de la mascota -->

        <!-- Inicio del input de nombre del propietario -->
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            id="nombre-propietario"
            name="nombre-propietario"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-theme appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=""
            required
            v-model="formulario.nombrePropietario"
          />
          <label
            for="nombre-propietario"
            class="peer-focus:font-medium absolute text-sm text-primary dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:font-bolder peer-focus:dark:text-theme peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nombre del propietario
          </label>
          <AlertaComponent v-if="errors.nombre" :alertMsg="errors.nombre" />
        </div>
        <!-- Fin del input de nombre del propietario -->
        <!-- Inicio del input del email -->
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="email"
            id="email"
            name="email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-theme appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=""
            required
            v-model="formulario.email"
          />
          <label
            for="email"
            class="peer-focus:font-medium absolute text-sm text-primary dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:font-bolder peer-focus:dark:text-theme peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
          <AlertaComponent v-if="errors.email" :alertMsg="errors.email" />
        </div>
        <!-- Fin del input del email -->
        <!-- Inicio del input de la fecha de alta -->
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="date"
            id="fecha-alta"
            name="fecha-alta"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-theme appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=""
            required
            v-model="formulario.fechaAlta"
          />
          <label
            for="fecha-alta"
            class="peer-focus:font-medium absolute text-sm text-primary dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:font-bolder peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Fecha de alta
          </label>
          <AlertaComponent v-if="errors.fecha" :alertMsg="errors.fecha" />
        </div>
        <!-- Fin del input de la fecha de alta -->
        <!-- Inicio del input de los síntomas -->
        <div class="relative z-0 w-full mb-5 group">
          <textarea
            id="sintomas"
            name="sintomas"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-theme appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=""
            required
            v-model="formulario.sintomas"
          ></textarea>
          <label
            for="sintomas"
            class="peer-focus:font-medium absolute text-sm text-primary dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:font-bolder peer-focus:dark:text-theme peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Síntomas
          </label>
          <AlertaComponent v-if="errors.sintomas" :alertMsg="errors.sintomas" />
        </div>
        <!-- Fin del input de los síntomas -->
        <!-- Inicio del botón de registrar paciente -->
        <button
          type="submit"
          class="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 w-full rounded-lg focus:outline-none focus:shadow-outline"
        >
          Registrar paciente
        </button>
      </form>
    </div>
    <div class="md:w-1/2" data-aos="fade-left">
      <h2 class="font-black text-3xl text-center">Listado de pacientes</h2>
      <ul class="mt-10">
        <li
          v-for="cita in altasClientes"
          :key="cita.id"
          class="bg-white shadow-md rounded-lg py-5 px-5 mb-5 flex justify-between transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          <div class="w1/2">
            <p class="font-bold text-lg">
              Nombre de la mascota: {{ cita.nombreMascota }}
            </p>
            <p class="text-sm">
              Nombre del propietario: {{ cita.nombrePropietario }}
            </p>
            <p class="text-sm">Email: {{ cita.email }}</p>
            <p class="text-sm">Fecha de alta: {{ cita.fechaAlta }}</p>
            <p class="text-sm">Síntomas: {{ cita.sintomas }}</p>
          </div>
          <div class="w1/2 mt-10">
            <button
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              @click="eliminarCliente(cita.id)"
            >
              Eliminar
            </button>
          </div>
        </li>
      </ul>
    </div>
    <!-- Popup cuando se da de alta un cliente-->
    <PopUpComponent
      :popupAltas="popupAltas"
      @open-close-popup="openClosePopup"
    />
  </div>
</template>

<script setup>
// importaciones de Vue
import { ref, reactive } from "vue";
// importaciones de los componenentes personalizados
import { useValidation } from "../composables/useValidation";
import AlertaComponent from "./AlertaComponent.vue";
import PopUpComponent from "./PopUpComponent.vue";
// importaciones de los datos de las citas
import citas from "../data/citas.js";

const {
  errors,
  validateNombre,
  validateEmail,
  validateTextarea,
  validateDate,
} = useValidation();

const formulario = reactive({
  nombreMascota: "",
  nombrePropietario: "",
  email: "",
  fechaAlta: "",
  sintomas: "",
});

const popupAltas = ref(false);

const altasClientes = reactive([]);

citas.forEach((cita) => {
  altasClientes.push(cita);
});

const openClosePopup = () => {
  popupAltas.value = !popupAltas.value;
};

const enviarFormulario = () => {
  if (
    !validateNombre(formulario.nombreMascota, "mascota") ||
    !validateNombre(formulario.nombrePropietario, "propietario") ||
    !validateEmail(formulario.email, "email") ||
    !validateTextarea(formulario.sintomas, "sintomas") ||
    !validateDate(formulario.fechaAlta, "fecha")
  ) {
    return;
  }
  // añaadir el id al objeto y añadir al array de altasClientes
  altasClientes.push({
    id: altasClientes.length + 1,
    nombreMascota: formulario.nombreMascota,
    nombrePropietario: formulario.nombrePropietario,
    email: formulario.email,
    fechaAlta: formulario.fechaAlta,
    sintomas: formulario.sintomas,
  });

  formulario.nombrePropietario = "";
  formulario.nombreMascota = "";
  formulario.email = "";
  formulario.fechaAlta = "";
  formulario.sintomas = "";
  console.log("Formulario enviado");
  openClosePopup();
};

const eliminarCliente = (id) => {
  const index = altasClientes.findIndex((cita) => cita.id === id);
  altasClientes.splice(index, 1);
  console.log("Cliente eliminado");
};
</script>

<style></style>

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
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-theme appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=""
            :value="nombreMascota"
            required
            @input="$emit('update:nombre-mascota', $event.target.value)"
          />
          <label
            for="nombre-mascota"
            class="peer-focus:font-medium absolute text-sm text-primary dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:font-bolder peer-focus:dark:text-theme peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nombre de la mascota
          </label>
          <AlertaComponent v-if="errors?.mascota" :alertMsg="errors?.mascota" />
        </div>
        <!-- Fin del input del nombre de la mascota -->

        <!-- Inicio del input de nombre del propietario -->
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            id="nombre-propietario"
            name="nombre-propietario"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-theme appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=""
            :value="nombrePropietario"
            required
            @input="$emit('update:nombre-propietario', $event.target.value)"
          />
          <label
            for="nombre-propietario"
            class="peer-focus:font-medium absolute text-sm text-primary dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:font-bolder peer-focus:dark:text-theme peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nombre del propietario
          </label>
          <AlertaComponent v-if="errors?.nombre" :alertMsg="errors?.nombre" />
        </div>
        <!-- Fin del input de nombre del propietario -->
        <!-- Inicio del input del email -->
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="email"
            id="email"
            name="email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-theme appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=""
            :value="email"
            required
            @input="$emit('update:email', $event.target.value)"
          />
          <label
            for="email"
            class="peer-focus:font-medium absolute text-sm text-primary dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:font-bolder peer-focus:dark:text-theme peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
          <AlertaComponent v-if="errors?.email" :alertMsg="errors?.email" />
        </div>
        <!-- Fin del input del email -->
        <!-- Inicio del input de la fecha de alta -->
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="date"
            id="fecha-alta"
            name="fecha-alta"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-theme appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=""
            :value="fechaAlta"
            required
            @input="$emit('update:fecha-alta', $event.target.value)"
          />
          <label
            for="fecha-alta"
            class="peer-focus:font-medium absolute text-sm text-primary dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:font-bolder peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Fecha de alta
          </label>
          <AlertaComponent v-if="errors?.fecha" :alertMsg="errors?.fecha" />
        </div>
        <!-- Fin del input de la fecha de alta -->
        <!-- Inicio del input de los síntomas -->
        <div class="relative z-0 w-full mb-5 group">
          <textarea
            id="sintomas"
            name="sintomas"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-theme appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=""
            :value="sintomas"
            required
            @input="$emit('update:sintomas', $event.target.value)"
          ></textarea>
          <label
            for="sintomas"
            class="peer-focus:font-medium absolute text-sm text-primary dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:font-bolder peer-focus:dark:text-theme peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Síntomas
          </label>
          <AlertaComponent v-if="errors?.sintomas" :alertMsg="errors?.sintomas" />
        </div>
        <!-- Fin del input de los síntomas -->
        <!-- Inicio del botón de registrar paciente -->
        <button
          type="submit"
          class="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 w-full rounded-lg focus:outline-none focus:shadow-outline"
          @click="$emit('enviar-formulario')"
        >
          Registrar paciente
        </button>
      </form>
    </div>

  </div>
</template>

<script setup>
// importaciones de Vue

// importaciones de los componenentes personalizados

import AlertaComponent from "./AlertaComponent.vue";

// importaciones de los datos de las citas


defineEmits([
  'update:nombre-mascota',
  'update:nombre-propietario',
  'update:email',
  'update:fecha-alta',
  'update:sintomas',
  'enviar-formulario'
]);

const props = defineProps({
  nombreMascota: String,
  nombrePropietario: String,
  email: String,
  fechaAlta: String,
  sintomas: String
});

</script>

<style></style>

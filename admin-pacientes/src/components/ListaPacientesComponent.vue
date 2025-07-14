<template>
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
                @click="$emit('eliminar-cliente', cita.id)"              
            >
              Eliminar
            </button>
          </div>
        </li>
      </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
defineEmits(["eliminar-cliente"]);

const props = defineProps(
    {
        altasClientes: {
        type: Array,
        required: true
        }
    }
)
const altasClientes = ref([]);

onMounted(() => {
    altasClientes.value = props.altasClientes;
    console.log("Altas clientes:", altasClientes.value);
});

</script>

<style lang="" scoped>

</style>
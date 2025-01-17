<template>
  <div
    class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50"
    v-if="popupAltas"
  >
    <div class="bg-white p-5 rounded-lg w-1/2">
      <h2 class="font-bold text-2xl text-center">Cliente dado de alta</h2>
      <p class="text-center mt-5">
        El cliente se ha dado de alta correctamente
      </p>
      <button
        class="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline mt-5"
        @click="$emit('open-close-popup', false)"
      >
        Cerrar
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  popupAltas: Boolean,
  required: true,
});

defineEmits(["open-close-popup"]);
</script>

<style></style>

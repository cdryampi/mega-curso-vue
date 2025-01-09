<template>
  <!-- INICIO DE GUITARRA -->
  <div class="col-md-6 col-lg-4 my-4 row align-items-center" :key="guitarra.id">
    <div class="col-4">
      <img
        class="img-fluid"
        :src="`./img/${guitarra.imagen}.jpg`"
        :alt="`imagen de +${guitarra.nombre}`"
      />
    </div>
    <div class="col-8">
      <h3 class="text-black fs-4 fw-bold text-uppercase">
        {{ guitarra.nombre }}
      </h3>
      <p>
        {{ guitarra.descripcion }}
      </p>
      <p class="fw-black text-primary fs-3">{{ guitarra.precio }} €</p>
      <button
        type="button"
        class="btn btn-dark w-100"
        @click="$emit('agregar-carrito', guitarra)"
        :disabled="guitarra.bloqueado"
      >
        Agregar al Carrito
      </button>
    </div>
  </div>
  <!-- FIN DE LA CARD DE GUITARRA -->
</template>

<script setup>
const props = defineProps({
  guitarra: Object,
  required: true,
});

defineEmits(["agregar-carrito"]);
</script>

<style></style>

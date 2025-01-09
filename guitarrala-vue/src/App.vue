<script setup>
import { onMounted } from "vue";
import { db } from "./data/guitarras";
import { useCarrito } from "./composables/useCarrrito";
import GuitarraComponent from "./components/GuitarraComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

const { data, agregarCarrito, eliminarCarrito, vaciarCarrito, quitarProducto } =
  useCarrito(db);

onMounted(() => {
  data.guitarra_principal =
    data.guitarras[Math.floor(Math.random() * data.guitarras.length)];
});
</script>

<template>
  <div>
    <HeaderComponent
      :carrito="data.carrito"
      :guitarra_principal="data.guitarra_principal"
      @agregar-carrito="agregarCarrito"
      @vaciar-carrito="vaciarCarrito"
      @eliminar-item="eliminarCarrito"
      @quitar-producto="quitarProducto"
    />

    <main class="container-xl mt-5">
      <h2 class="text-center">Nuestra Colección</h2>

      <div class="row mt-5">
        <GuitarraComponent
          v-for="guitarra in data.guitarras"
          :guitarra="guitarra"
          :key="guitarra.id"
          @agregar-carrito="agregarCarrito"
        />
      </div>
    </main>

    <FooterComponent />
  </div>
</template>

<style scoped></style>

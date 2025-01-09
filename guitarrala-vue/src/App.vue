<script setup>
import { defineAsyncComponent, onMounted, ref } from "vue";
import { db } from "./data/guitarras";
import { useCarrito } from "./composables/useCarrrito";

const GuitarraComponent = defineAsyncComponent(() =>
  import("./components/GuitarraComponent.vue")
);
const HeaderComponent = defineAsyncComponent(() =>
  import("./components/HeaderComponent.vue")
);
const FooterComponent = defineAsyncComponent(() =>
  import("./components/FooterComponent.vue")
);
const BackToTopComponent = defineAsyncComponent(() =>
  import("./components/BackToTopComponent.vue")
);
const LoadingSpinnerComponent = defineAsyncComponent(() =>
  import("./components/LoadingSpinnerComponent.vue")
);

const { data, agregarCarrito, eliminarCarrito, vaciarCarrito, quitarProducto } =
  useCarrito(db);

const isLoading = ref(true);

onMounted(() => {
  data.guitarra_principal =
    data.guitarras[Math.floor(Math.random() * data.guitarras.length)];

  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>

<template>
  <div class="w-h-screen">
    <div v-if="isLoading" class="flex justify-center items-center min-h-screen">
      <LoadingSpinnerComponent />
    </div>
    <div v-else>
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
      <BackToTopComponent />
      <FooterComponent />
    </div>
  </div>
</template>

<style scoped></style>

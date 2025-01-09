<script setup>
import { defineAsyncComponent, onMounted, ref, watch } from "vue";
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

const guardarLocalStorange = () => {
  try {
    const carritoString = JSON.stringify(data.carrito);
    localStorage.setItem("carrito", carritoString);
  } catch (error) {
    console.error("Error al guardar en localStorage", error);
  }
};

watch(
  () => data.carrito,
  (nuevoCarrito) => {
    guardarLocalStorange();
  },
  { deep: true }
);

onMounted(() => {
  data.guitarra_principal =
    data.guitarras[Math.floor(Math.random() * data.guitarras.length)];

  const carritoStorage = localStorage.getItem("carrito");
  if (carritoStorage) {
    try {
      const carritoParseado = JSON.parse(carritoStorage);
      data.carrito = carritoParseado;

      carritoParseado.forEach((item) => {
        const guitarra = data.guitarras.find((g) => g.id === item.id);
        if (guitarra) {
          guitarra.stock -= item.stock;
          if (guitarra.stock <= 0) {
            guitarra.bloqueado = true;
          } else {
            guitarra.bloqueado = false;
          }
        }
      });
    } catch (error) {
      console.error("Error al parsear el carrito del localStorage", error);
      localStorage.removeItem("carrito");
    }
  }
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
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

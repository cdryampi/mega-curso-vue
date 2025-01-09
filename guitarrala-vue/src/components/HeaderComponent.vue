<template>
  <header class="py-5 header">
    <div class="container-xl">
      <div class="row justify-content-center justify-content-md-between">
        <div class="col-8 col-md-3">
          <a href="index.html">
            <img class="img-fluid" src="/img/logo.svg" alt="imagen logo" />
          </a>
        </div>
        <nav
          class="col-md-6 a mt-5 d-flex align-items-start justify-content-end"
        >
          <div class="carrito" @mouseover="calcularTotal">
            <img
              class="img-fluid"
              src="/img/carrito.png"
              alt="imagen carrito"
            />

            <div id="carrito" class="bg-white p-3">
              <p v-if="carrito?.length === 0" class="text-center">
                El carrito esta vacio
              </p>
              <table class="w-100 table" v-if="carrito?.length > 0">
                <thead>
                  <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="producto in carrito" :key="producto.id">
                    <td>
                      <img
                        class="img-fluid"
                        :src="`/img/${producto.imagen}.jpg`"
                        alt="imagen guitarra"
                      />
                    </td>
                    <td>{{ producto.nombre }}</td>
                    <td class="fw-bold">{{ producto.precio }} €</td>
                    <td class="flex align-items-start gap-4">
                      <button
                        type="button"
                        class="btn btn-dark"
                        @click="$emit('quitar-producto', producto)"
                      >
                        -
                      </button>
                      {{ producto.stock }}
                      <button
                        type="button"
                        class="btn btn-dark"
                        @click="$emit('agregar-carrito', producto)"
                        :disabled="producto.bloqueado"
                      >
                        +
                      </button>
                    </td>
                    <td>
                      <button
                        class="btn btn-danger"
                        type="button"
                        @click="$emit('eliminar-item', producto)"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <p class="text-end" v-if="carrito?.length > 0">
                Total pagar: <span class="fw-bold">{{ totalAPagar }}€</span>
              </p>
              <button
                class="btn btn-dark w-100 mt-3 p-2"
                v-if="carrito?.length > 0"
                @click="$emit('vaciar-carrito')"
              >
                Vaciar Carrito
              </button>
            </div>
          </div>
        </nav>
      </div>
      <!--.row-->

      <div class="row mt-5">
        <div class="col-md-6 text-center text-md-start pt-5">
          <h1 class="display-2 fw-bold">{{ guitarra_principal.nombre }}</h1>
          <p class="mt-5 fs-5 text-white">
            {{ guitarra_principal.descripcion }}
          </p>
          <p class="text-primary fs-1 fw-black">
            {{ guitarra_principal.precio }} €
          </p>
          <button
            type="button"
            class="btn fs-4 bg-primary text-white py-2 px-5"
            @click="$emit('agregar-carrito', guitarra_principal)"
            :disabled="guitarra_principal.bloqueado"
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
    <img
      class="header-guitarra"
      :src="`/img/${guitarra_principal.imagen}.png`"
      :alt="`imagen de +${guitarra_principal.nombre}`"
    />
    <img
      class="header-guitarra-secondary"
      :src="`/img/header_guitarra.png`"
      :alt="`imagen de +${guitarra_principal.nombre}`"
    />
  </header>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  carrito: Array,
  guitarra_principal: Object,
  required: true,
});

const emit = defineEmits([
  "agregar-carrito",
  "vaciar-carrito",
  "eliminar-item",
  "quitar-producto",
]);

const totalAPagar = computed(() => {
  return props.carrito.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );
});
</script>

<style scoped></style>

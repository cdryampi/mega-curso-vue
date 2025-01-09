<template>
  <div>
    <div
      v-if="isVisible"
      class="fixed bottom-4 right-4 bg-black text-white rounded-full w-12 h-12 flex items-center justify-center text-lx cursor-pointer transition-opacity duration-300 hover:bg-[#E99401]"
      @click="scrollToTop"
    >
      <span>↑</span>
    </div>
    <div
      class="fixed top-0 left-0 h-1 bg-black transition-all duration-300 z-50"
    ></div>
  </div>
</template>

<script setup>
// importación de funciones y variables
import { ref, onMounted, onUnmounted, computed } from "vue";

const isVisible = ref(false);
const scrollPosition = ref(0);

// funcion que calcula la posición del scroll
const handleScroll = () => {
  scrollPosition.value = window.scrollY;
  isVisible.value = scrollPosition.value > 300;
};

// funcion que envia al usuario al inicio de la página
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// funcion que calcula el porcentaje de scroll
const scrollPercentage = computed(() => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentageValue = Math.min(
    (scrollPosition.value / maxScroll) * 100,
    100
  );
  return `${scrollPercentageValue}%`;
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style></style>

<template>
  <p class="text-red-500 text-xs italic">
    {{ props.alertMsg }}
  </p>
</template>

<script setup>
const props = defineProps({
  alertMsg: String,
  required: true,
});
</script>

<style></style>

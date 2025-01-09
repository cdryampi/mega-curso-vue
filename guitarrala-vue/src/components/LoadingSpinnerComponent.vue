<template>
  <div
    class="flex justify-center justify-items-center place-items-center h-screen bg-white"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 150 150"
      width="150"
      height="150"
    >
      <!-- Cuerpo de la guitarra -->
      <ellipse
        cx="75"
        cy="90"
        rx="40"
        ry="60"
        fill="#E99401"
        stroke="#000"
        stroke-width="2"
      />

      <!-- Boca de la guitarra -->
      <circle cx="75" cy="90" r="12" fill="#000" />

      <!-- Mástil de la guitarra -->
      <rect
        x="65"
        y="10"
        width="20"
        height="80"
        fill="#8B4513"
        stroke="#000"
        stroke-width="2"
      />

      <!-- Clavijero de la guitarra -->
      <rect
        x="65"
        y="0"
        width="20"
        height="10"
        fill="#8B4513"
        stroke="#000"
        stroke-width="2"
      />

      <!-- Cuerdas de la guitarra -->
      <line x1="75" y1="10" x2="75" y2="90" stroke="#FFF" stroke-width="1" />
      <line x1="70" y1="10" x2="70" y2="90" stroke="#FFF" stroke-width="1" />
      <line x1="80" y1="10" x2="80" y2="90" stroke="#FFF" stroke-width="1" />
      <line x1="73" y1="10" x2="73" y2="90" stroke="#FFF" stroke-width="1" />
      <line x1="77" y1="10" x2="77" y2="90" stroke="#FFF" stroke-width="1" />
    </svg>
    <p
      class="font-extrabold text-primary tracking-widest text-3xl anime animate-bounce"
    >
      GuitarraCat
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

<template>
  <section
    class="hero-image flex justify-center items-center flex-col h-screen w-full"
    v-editable="blok"
  >
    <h1 class="text-white text-4xl text-center bg-gray-800 p-2">
      {{ blok.headline }}
    </h1>
    <h2 class="text-white text-3xl mt-4 text-center bg-gray-800 p-2">
      {{ blok.subheadline }}
    </h2>
  </section>
</template>

<script setup>
defineProps({
  blok: {
    type: Object,
    default: () => {},
  },
})
</script>

<style lang="css" scoped>
.hero-image {
  background: url('~/assets/img/hero.jpg') no-repeat;
  background-size: cover;
  z-index: -1;
}
</style>

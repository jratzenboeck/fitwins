<template>
  <section class="text-center" v-editable="blok">
    <h1 class="text-2xl py-4">{{ blok.headline }}</h1>
    <img
      :src="blok.profile_picture.filename"
      :alt="blok.profile_picture.alt"
      class="inline-block rounded-full w-48 h-auto"
    />
    <p class="my-4 italic text-lg">{{ blok.description }}</p>
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

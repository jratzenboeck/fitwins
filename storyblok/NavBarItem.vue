<template>
  <nuxt-link :to="blok.route">{{ blok.name }}</nuxt-link>
</template>

<script setup>
defineProps({
  blok: {
    type: Object,
    default: () => {},
  },
})
</script>

<template>
  <header class="flex justify-between p-4 bg-gray-600 text-white shadow-lg" v-editable="blok">
    <h3>{{ blok.logo }}</h3>
    <nav class="inline-block">
      <component
        :is="navItem.component"
        v-for="(navItem, index) in blok.nav_items"
        :key="navItem._uid"
        :blok="navItem"
        :class="{ 'mr-4': index < blok.nav_items.length - 1 }"
      />
    </nav>
  </header>
</template>

<script setup>
defineProps({ blok: Object })
</script>

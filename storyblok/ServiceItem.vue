<template>
  <section
    class="lg:flex max-w-screen-lg m-auto p-4 md:flex-wrap"
    :class="{ 'lg:flex-row-reverse': blok.reverse }"
  >
    <div class="lg:w-1/2">
      <h3 class="text-2xl">{{ blok.headline }}</h3>
      <article class="my-4 pr-4">{{ blok.description }}</article>
      <nuxt-link
        :to="blok.detail_page"
        class="inline-block p-4 border rounded-lg hover:shadow-xl bg-gray-700 text-white"
        >Mehr erfahren</nuxt-link
      >
    </div>
    <div class="lg:w-1/2 mt-4" :class="{ 'pr-4': blok.reverse }">
      <img :src="blok.image.filename" :alt="blok.image.alt" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServiceItem',
  props: {
    blok: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped></style>

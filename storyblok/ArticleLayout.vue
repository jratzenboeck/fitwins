<template>
  <article class="px-4 py-8" v-editable="blok">
    <h1 class="text-4xl">{{ blok.headline }}</h1>
    <div class="lg:flex my-4">
      <section
        class="prose max-w-none my-4 lg:flex-1 lg:mr-8 lg:prose-lg"
        v-html="articleBody"
      ></section>
      <section class="lg:flex-1">
        <div
          v-for="(articleImage, index) in blok.images"
          :key="index"
          class="mb-4"
        >
          <img
            :src="articleImage.image.filename"
            :alt="articleImage.image.alt"
            class="rounded-xl shadow-xl"
          />
        </div>
      </section>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
defineProps({
  blok: {
    type: Object,
    default: () => {},
  },
})
const articleBody = computed(() => {
  return this.$storyapi.richTextResolver.render(this.blok.body)
})
</script>

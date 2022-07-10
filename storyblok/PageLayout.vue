<template>
  <div v-editable="blok">
    <StoryblokComponent
      v-for="subBlok in blok.body"
      :key="subBlok._uid"
      :blok="subBlok"
    />
    <FooterSection />
  </div>
</template>

<script setup>
defineProps({
  blok: {
    type: Object,
    required: true,
  },
})
</script>

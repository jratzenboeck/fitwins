import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        ['@storyblok/nuxt', { accessToken: 'CIm3AbF0lFfFnceWjie52Att' }],
        '@nuxtjs/tailwindcss'
    ],
})

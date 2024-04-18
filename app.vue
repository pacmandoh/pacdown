<script setup lang="ts">
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/icon.png' }
  ],
  htmlAttrs: {
    lang: 'zh'
  }
})

useSeoMeta({
  ogSiteName: 'PacDown: md online for PacDocs',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <AppHeader v-show="!useFullScreen().isFullScreen.value" />

  <UMain>
    <NuxtPage />
  </UMain>
</template>

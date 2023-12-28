<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImage({
  component: 'Landing',
  title: page.value.title,
  description: page.value.description
})

const vditorContent = `
# 欢迎使用 \`PacDown\` 在线 Markdown 编辑器
`
const style = {
  container: 'fixed overflow-hidden top-0 bottom-0 left-0 right-0 border-[1.5px] dark:border-[1px] border-gray-300 dark:border-gray-700 rounded-lg mt-[calc(var(--header-height)+1rem)] mx-4 sm:mx-8 md:mx-12 xl:mx-20 2xl:mx-24 lg:mx-16 mb-6 lg:mb-8'
}
</script>

<template>
  <div :class="style.container">
    <Vditor :content="vditorContent" />
  </div>
</template>

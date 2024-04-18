<script setup lang="ts">
const links = [{
  label: '开始写作',
  to: '/',
  icon: 'i-simple-icons-markdown',
  exactHash: true
}, {
  label: '特性',
  to: '/feature',
  icon: 'i-heroicons-cube-transparent',
  exactHash: true
}, {
  label: '关于',
  to: '/about',
  icon: 'i-heroicons-question-mark-circle',
  exactHash: true
}]

const { toggle, isFullscreen } = useFullscreen()
const fullscreenIcon = computed(() => isFullscreen.value ? 'i-ph-arrows-in-bold' : 'i-ph-arrows-out-bold')
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <div class="flex flex-row gap-1 items-center justify-center">
        <Logo />
        <div>Pac<span class="text-primary-500 dark:text-primary-400">Down</span></div>
        <UBadge label="beta" variant="subtle" class="mb-0.5" />
      </div>
    </template>

    <template #right>
      <UTooltip :text="$colorMode.preference === 'dark' ? '切换为日间模式' : '切换为暗色模式'">
        <UColorModeButton />
      </UTooltip>

      <UTooltip text="GitHub">
        <UButton
          icon="i-simple-icons-github"
          to="https://github.com/pacmandoh/PacDown"
          target="_blank"
          v-bind="($ui.button.secondary as any)"
          aria-label="My GitHub"
        />
      </UTooltip>

      <UTooltip text="PacGPTs">
        <UButton
          icon="i-simple-icons-openai"
          to="https://chatgpt.crybabyaq.love/"
          target="_blank"
          v-bind="($ui.button.secondary as any)"
          aria-label="ChatGPT and Gemini Pro"
        />
      </UTooltip>

      <UTooltip text="全屏">
        <UButton
          :icon="fullscreenIcon"
          v-bind="($ui.button.secondary as any)"
          aria-label="Enter Fullscreen"
          @click="toggle()"
        />
      </UTooltip>
    </template>

    <template #panel>
      <UAsideLinks :links="links" />

      <UDivider class="my-6" />

      <UButton label="Sign in" color="white" block class="mb-3" />
      <UButton label="Get started" block />
    </template>
  </UHeader>
</template>

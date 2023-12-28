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

</script>

<template>
  <UHeader :links="links">
    <template #logo>
      PacDown <UBadge label="beta" variant="subtle" class="mb-0.5" />
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

      <UTooltip text="全屏">
        <UButton
          icon="i-ph-arrows-out-duotone"
          to="https://github.com/pacmandoh/PacDown"
          target="_blank"
          v-bind="($ui.button.secondary as any)"
          aria-label="My GitHub"
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

<script setup lang="ts">
import { isDark } from '~/composables'

useHead({
  title: 'Quartz',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
})
</script>

<template>
  <TokenEditor />
  <RouterView />
</template>

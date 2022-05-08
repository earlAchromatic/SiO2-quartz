<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <main>
    <div>
      <div class="i-carbon-warning" />
    </div>
    <RouterView />
    <div>
      <button @click="router.back()">
        {{ t('button.back') }}
      </button>
    </div>
  </main>
</template>

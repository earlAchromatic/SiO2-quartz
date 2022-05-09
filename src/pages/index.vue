<route lang="yaml">
meta:
  layout: home
</route>

<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const { t } = useI18n()
</script>

<template>
  <Cluster :space="'--space-s'">
    <input
      id="input"
      v-model="name"
      class="SiO2-w-12"
      :placeholder="t('intro.whats-your-name')"
      :aria-label="t('intro.whats-your-name')"
      type="text"
      autocomplete="false"
      @keydown.enter="go"
    >
    <label hidden for="input">{{ t('intro.whats-your-name') }}</label>

    <button
      :disabled="!name"
      @click="go"
    >
      {{ t('button.go') }}
    </button>
  </Cluster>
</template>


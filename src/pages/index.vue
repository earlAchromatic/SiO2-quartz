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
  <div>
    <img class="SiO2-width-xl" src="/7006889-treasure-hunter/png/049-crystals.png">
  </div>
  <p>
    <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
      Quartz <sup>SiO<sub>2</sub></sup>
    </a>
  </p>
  <p>
    <em>{{ t('intro.desc') }}</em>
  </p>

  <div />

  <input
    id="input"
    v-model="name"
    :placeholder="t('intro.whats-your-name')"
    :aria-label="t('intro.whats-your-name')"
    type="text"
    autocomplete="false"
    @keydown.enter="go"
  >
  <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

  <div>
    <button
      :disabled="!name"
      @click="go"
    >
      {{ t('button.go') }}
    </button>
  </div>
</template>


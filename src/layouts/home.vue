<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <Hero class="flow">
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
    <RouterView />
    <Footer />
    <div class="">
      [Home Layout]
    </div>
  </Hero>
</template>

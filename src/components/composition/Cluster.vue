<script setup lang="ts">
const props = defineProps({ space: String })
const clusterGap = computed(()=>`var(${props.space}, 1rem)`)
</script>

<template>
  <div class="cluster">
    <slot />
  </div>
</template>

<style>
.cluster {
  display: flex;
  flex-wrap: wrap;
  gap: v-bind(clusterGap);
  justify-content: flex-start;
  align-items: center;
}
</style>

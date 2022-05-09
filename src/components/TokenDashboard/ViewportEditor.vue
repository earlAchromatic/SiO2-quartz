<script setup lang="ts">

const viewportMax = ref()
const viewportMin = ref()
const emits = defineEmits([
  'sendViewportData',
])

const handleUpdate = (evt) => {
  emits('sendViewportData', evt)
}
</script>

<template>
  <div>
    <fieldset>
      <label for="">Viewport Min</label>
      <input v-model="viewportMin" type="text" placeholder="360" @change="handleUpdate(viewportMin)">
      <label for="">Viewport Max</label>
      <input v-model="viewportMax" type="text" placeholder="1120" @change="handleUpdate(viewportMax)">
    </fieldset>
  </div>
</template>

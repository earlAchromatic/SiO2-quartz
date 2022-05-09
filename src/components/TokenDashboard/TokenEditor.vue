<script setup lang="ts">
const handleEvent = async (evt) => {
  const resource = '/api/write-token'
  await fetch(resource, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ Title: 'Jacob' }),
  })
    .then(res => console.log(res))
    .catch(e => console.error(e))
}

const handleNewData = (evt) => {
  console.log('got new dat')
  console.log(evt)
}

const hidden = ref(false)
</script>

<template>
  <div class="token-editor flow" :show="hidden">
    <Cluster class="" :space="'--space-m'">
      <h3>TokeniZr</h3>
      <div class="i-carbon-arrows-horizontal" @click="hidden = !hidden" />
    </Cluster>
    <ViewportEditor class="wrapper" @send-viewport-data="handleNewData" />
    <ColorEditor class="wrapper" />
    <FontEditor class="wrapper" />
    <SpaceEditor class="wrapper" />
    <div class="wrapper center">
      <button @click="handleEvent">
        Send Data
      </button>
    </div>
  </div>
</template>

<style>
.token-editor {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  background: var(--color-dark);
  transition: all 0.3s ease-in-out;
  color: var(--color-light);
  width: 20rem;
  border-right: 1px black solid;
  overflow-y: auto;
  font-size: var(--size-step-0);
  z-index: 100;
}

.token-editor[show=false] {
  left: -18rem;
  transition: all 0.3s ease-in-out;
}

.token-editor>*:first-child {
  justify-content: space-between;
}

.token-editor h3{
  padding: var(--space-xs);
  padding-bottom: 0;
}

input, select {
  width: 100%
}

</style>

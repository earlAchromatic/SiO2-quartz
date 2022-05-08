<template>
  <section>
    <slot />
  </section>
</template>

<style scoped>
    section {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        --flow-space: var(--space-s);
    }
</style>

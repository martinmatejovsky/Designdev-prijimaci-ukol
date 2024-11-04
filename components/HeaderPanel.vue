<script setup lang="ts">
const props = defineProps<{
  title: string,
}>()
</script>

<template>
  <header class="c-header-panel text-center">
    <h1 class="c-header-panel__heading">{{ title }}</h1>

    <slot />
  </header>
</template>

<style scoped lang="scss">
.c-header-panel {
  margin-top: 3.75rem;
  margin-bottom: 2.5rem;
  font-weight: 800;
}

.c-header-panel__heading {
  margin-bottom: 2.5rem;
}
</style>
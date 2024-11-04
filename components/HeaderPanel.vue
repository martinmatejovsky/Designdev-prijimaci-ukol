<script setup lang="ts">
defineProps(['title']);
</script>

<template>
  <header class="c-header-panel d-flex flex-column text-center">
    <h1 class="c-header-panel__heading">{{ title }}</h1>
    <slot />
  </header>
</template>

<style scoped lang="scss">
@import '../assets/scss/colors';
@import '../assets/scss/global-variables';

.c-header-panel {
  margin-bottom: 2.5rem;
}

.c-header-panel__heading {
  margin-bottom: 2rem;
  font-weight: 800;

  @media (min-width: $breakpoint-md) {
    margin-bottom: 3.5rem;
  }
}
</style>
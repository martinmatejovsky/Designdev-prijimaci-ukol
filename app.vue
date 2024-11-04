<script setup lang="ts">
import Index from "~/pages/index.vue";
</script>

<template>
  <div class="app-container container">
    <Index />
  </div>
</template>

<style lang="scss">
@import "./assets/scss/colors.scss";
@import "./assets/scss/global-variables.scss";

.app-container {
  margin-top: 2.75rem;
  margin-bottom: 2rem;

  @media (min-width: $breakpoint-md) {
    margin-top: 3.75rem;
    margin-bottom: 5rem;
  }
}
</style>
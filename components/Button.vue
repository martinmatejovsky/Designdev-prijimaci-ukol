<script setup lang="ts">

const props = withDefaults(defineProps<{
  text?: string,
  type?: "reset" | "submit" | "button" | undefined,
  disabled?: boolean,
  additionalClasses?: string,
}>(), {
  type: 'button',
  disabled: false
})

</script>

<template>
  <button :type="props.type" :class="`c-button p-2 text-white rounded-3 ${additionalClasses}`" :disabled="disabled">
    {{ props.text }}
  </button>
</template>

<style scoped lang="scss">
@import '../assets/scss/colors.scss';

.c-button {
  background: radial-gradient(100% 246.25% at 100% 50%, $col-button-primary-light, $col-button-primary);
  border: 0 none;
  transition: background 0.5s ease;

  &:hover {
    background: radial-gradient(100% 246.25% at 100% 50%, $col-button-primary-light-hover, $col-button-primary-hover);
  }

  &:disabled {
    background: radial-gradient(100% 246.25% at 100% 50%, $col-button-primary-light-disabled, $col-button-primary-disabled);
  }
}
</style>
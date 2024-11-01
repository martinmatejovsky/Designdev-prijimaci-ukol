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
  position: relative;
  z-index: 1;
  background: radial-gradient(100% 246.25% at 100% 50%, $col-button-primary-light, $col-button-primary);
  border: 0 none;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(100% 100.25% at 100% 50%, $col-button-primary-light-hover, $col-button-primary-hover);
    opacity: 0;
    transition: opacity 0.3s;
    z-index: -1;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
  }

  &:disabled {
    background: radial-gradient(100% 246.25% at 100% 50%, $col-button-primary-light-disabled, $col-button-primary-disabled);
    pointer-events: none;
  }
}
</style>
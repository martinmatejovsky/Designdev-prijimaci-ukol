<script setup lang="ts">
const props = defineProps<{
  modelValue: String;
  buttonList: Array<String>;
}>();
</script>

<template>
  <div
    class="c-radio-buttons flex-column flex-sm-row btn-group gap-1 gap-sm-4 rounded-3 fw-bold"
    role="group"
    aria-label="Basic radio toggle button group"
  >
    <template v-for="button in buttonList" :key="button">
      <input
        type="radio"
        :value="modelValue"
        class="c-radio-buttons__input btn-check"
        name="btnRadio"
        :id="`radio-${button}`"
        @input="$emit('update:modelValue', button)"
        :checked="modelValue === button"
      />
      <label
        class="c-radio-buttons__label d-flex align-items-center px-4 text-center justify-content-center rounded-3"
        :for="`radio-${button}`"
      >
        <span>{{ button }}</span>
      </label>
    </template>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/colors.scss";
@import "../assets/scss/global-variables.scss";

.c-radio-buttons {
  box-shadow: inset 0 0 0 1px $col-input-brd;
}

.c-radio-buttons__label {
  height: 40px;
  min-width: 148px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba($col-button-secondary, 10%);
  }

  .c-radio-buttons__input:focus-visible + & {
    outline: 2px solid $col-black;
    outline-offset: 2px;
  }
}

.c-radio-buttons__input:checked + .c-radio-buttons__label {
  background: radial-gradient(
    100% 513.85% at 0% 66.67%,
    $col-button-secondary 0%,
    $col-button-secondary-light 100%
  );
  box-shadow: $box-shadow;
  color: $col-white;
}
</style>

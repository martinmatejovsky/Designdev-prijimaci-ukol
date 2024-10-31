<script setup lang="ts">

const props = defineProps<{
  rating: number | null,
}>()

const starClassObject = function(iteration: number) {
  return iteration <= stars ? '--active' : '--inactive'
}

const stars = props.rating ? Math.ceil(props.rating) : 0

</script>

<template>
  <div class="c-rating-panel">
    <div v-if="stars > 0" class="d-flex align-items-center column-gap-1" :aria-label="`Rating: ${rating} out of 5.`">
      <div v-for="i in 5" :key="i" :class="`c-rating-panel__star ${starClassObject(i)}`" aria-hidden="true" />
      <span class="c-rating-panel__mark ms-2">{{ rating }}</span>
    </div>

    <span v-else class="text-muted">No rating yet</span>
  </div>
</template>

<style scoped lang="scss">
.c-rating-panel__star {
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  background-position: center;

  &.--active {
    background-image: url('~/assets/icons/rating-star-active.svg');
  }

  &.--inactive {
    background-image: url('~/assets/icons/rating-star-inactive.svg');
  }
}

.c-rating-panel__mark {
  font-weight: 500;
}
</style>
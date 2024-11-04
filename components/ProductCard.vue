<script setup lang="ts">

import { type Product } from '~/assets/interfaces'

const props = defineProps<{
  product: Product
}>()

const orderClick = () => {
  console.log('Ordering product:', props.product.name)
}

</script>

<template>
  <article class="c-product-card d-flex flex-column h-100 rounded-4 overflow-hidden">
    <div class="c-product-card__image d-flex align-items-center justify-content-center overflow-hidden rounded-4">
      <img v-if="product.image"
        :src="product.image.src"
        :alt="product.image.alt ?? product.name"
           class="c-product-card__photo w-100 h-100"
      />
    </div>

    <div class="c-product-card__body d-flex flex-column p-3 row-gap-2 row-gap-md-3">
      <h2 class="c-product-card__name fs-4">{{ product.name }}</h2>

      <p v-if="product.description" class="c-product-card__description">{{ product.description }}</p>

      <RatingPanel :rating="product.rating" />

      <a v-if="product.reviews > 0" class="c-product-card__reviews" href="#">
        {{ product.reviews }}
        {{ product.reviews > 1 ? 'reviews' : 'review' }}
      </a>
      <span v-else class="text-muted">No reviews yet</span>

      <span class="c-product-card__price fs-4">
        {{ product.currency }}{{ product.price }}
      </span>
    </div>

    <div class="c-product-card__footer mt-auto px-3 pb-3">
      <Button
        :disabled="product.onStock === 0"
        :text="product.onStock ? 'Add to cart' : 'Out of stock'"
        additional-classes="w-100"
        @click="orderClick"
      />
    </div>
  </article>
</template>

<style scoped lang="scss">
@import '../assets/scss/colors.scss';
@import '../assets/scss/global-variables.scss';

.c-product-card {
  box-shadow: $box-shadow;

  @media (min-width: $breakpoint-md) {
    min-height: 600px;
  }
}

.c-product-card__body > * {
  margin-bottom: 0;
}

.c-product-card__name{
  font-weight: 700;
}

.c-product-card__description {
  font-size: 1.125rem;
  font-weight: 500;
}

.c-product-card__image {
  background: radial-gradient(102.89% 88.03% at 117.2% 102.58%, #FFFBF2 0%, #F8F3E9 0.01%, #FFFFFF 100%);
  box-shadow: $box-shadow;
  aspect-ratio: 3 / 2;

  @media (min-width: $breakpoint-sm) {
    aspect-ratio: 1 / 1;
  }
}

.c-product-card__reviews,
.c-product-card__price{
  font-weight: 700;
}

.c-product-card__photo {
  object-fit: contain;
}
</style>
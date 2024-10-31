<script setup lang="ts">
import { type Product } from '~/assets/interfaces'

// properties
const props = defineProps<{
  product: Product
}>()

// methods
const orderClick = () => {
  console.log('Ordering product:', props.product.name)
}
</script>

<template>
  <article class="c-product-card mh-100 rounded-3 overflow-hidden">
    <div class="c-product-card__image d-flex align-items-center justify-content-center overflow-hidden rounded-3">
      <img v-if="product.image"
        :src="product.image.src"
        :alt="product.image.alt"
           class="c-product-card__photo mw-100 mh-100"
      />
    </div>

    <div class="c-product-card__body d-flex flex-column p-3">
      <h2 class="c-product-card__name fs-4">{{ product.name }}</h2>

      <p v-if="product.description" class="c-product-card__description">{{ product.description }}</p>

      <a v-if="product.reviews > 0" class="c-product-card__reviews mb-3" href="#">
        {{ product.reviews }}
        {{ product.reviews > 1 ? 'reviews' : 'review' }}
      </a>
      <span v-else class="c-product-card__no-reviews mb-3">No reviews yet</span>

      <span class="c-product-card__price fs-4 mb-3">
        {{ product.currency }}{{ product.price }}
      </span>

      <button type="button" class="btn btn-primary" :disabled="product.onStock == 0" @click="orderClick">
        Add to cart
      </button>
    </div>
  </article>
</template>

<style scoped lang="scss">
@import '../assets/scss/colors.scss';
@import '../assets/scss/global-variables.scss';

.c-product-card {
  box-shadow: $box-shadow;
}

.c-product-card__name{
  font-weight: 700;
}

.c-product-card__description {
  font-size: 1.125rem;
}

.c-product-card__image {
  background: radial-gradient(102.89% 88.03% at 117.2% 102.58%, #FFFBF2 0%, #F8F3E9 0.01%, #FFFFFF 100%);
  box-shadow: $box-shadow;
  aspect-ratio: 1 / 1;
}

.c-product-card__reviews,
.c-product-card__price{
  font-weight: 700;
}

.c-product-card__photo {
  object-fit: cover;
}
</style>
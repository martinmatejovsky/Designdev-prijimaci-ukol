<script setup lang="ts">
import {type Product, Suitability} from "assets/interfaces";
import ProductCard from "../components/ProductCard.vue";
import RadioSwitchButtons from "~/components/RadioButtons.vue";
import AlertStripe from "~/components/AlertStripe.vue";

const { data: products } = await useFetch<Product[]>('/api/products')

let suitableAudience = ref<Suitability>(Suitability.dogs)

let productsByUser = computed(() => {
  if(!products.value) return []

  return products.value.filter(product => product.suitableFor.includes(suitableAudience.value))
})
</script>

<template>
  <HeaderPanel title="The Fab 4">
    <nav class="navigation-main">
      <RadioSwitchButtons v-model="suitableAudience" :buttonList="Object.values(Suitability)" />
    </nav>

    <AlertStripe>
      <p>Buy multiples original canine or human products</p>
    </AlertStripe>
  </HeaderPanel>

  <main>
    <div class="products-showroom row row-gap-4 mx-auto">
      <div v-for="product in productsByUser" :key="product.id" class="col-sm-6 col-lg-4 col-xl-3">
        <ProductCard :product="product" />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import '../assets/scss/colors';
@import '../assets/scss/global-variables';

.navigation-main {
  &:not(:last-child) {
    margin-bottom: 1.5rem;

    @media (min-width: $breakpoint-md) {
      margin-bottom: 2.5rem;
    }
  }
}

.products-showroom {
  max-width: 1176px;
}
</style>
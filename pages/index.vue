<script setup lang="ts">
import {type Product, Suitability} from "assets/interfaces";
import ProductCard from "../components/ProductCard.vue";
import RadioSwitchButtons from "~/components/RadioButtons.vue";

const { data: products } = await useFetch<Product[]>('/api/products')

let suitableAudience = ref<Suitability>(Suitability.dogs)

let productsByUser = computed(() => {
  if(!products.value) return []

  return products.value.filter(product => product.suitableFor.includes(suitableAudience.value))
})
</script>

<template>
  <header>
    <h1>The Fab 4</h1>
    <nav></nav>
  </header>

  <main>
    <div class="row row-gap-4">
      <div v-for="product in productsByUser" :key="product.id" class="col-sm-6 col-lg-4 col-xl-3">
        <ProductCard :product="product" />
      </div>
    </div>
  </main>
</template>
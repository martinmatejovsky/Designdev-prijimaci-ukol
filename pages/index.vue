<script setup lang="ts">
import ProductCard from "../components/ProductCard.vue";
import {type Product} from "assets/interfaces";

const { data: products } = await useFetch<Product[]>('/api/products')
</script>

<template>
  <header>
    <h1>The Fab 4</h1>
    <nav></nav>
  </header>

  <main>
    <div class="row row-gap-4">
      <div v-for="product in products" :key="product.id" class="col-sm-6 col-lg-4 col-xl-3">
        <ProductCard :product="product" />
      </div>
    </div>
  </main>
</template>
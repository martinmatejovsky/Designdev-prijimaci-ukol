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
  <HeaderPanel title="The Fab 4">
    <RadioSwitchButtons v-model="suitableAudience" :buttonList="Object.values(Suitability)" />

<!--    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">-->
<!--      <template v-for="audience in Object.values(Suitability)" :key="audience">-->
<!--        <input-->
<!--            v-model="suitableAudience"-->
<!--            type="radio"-->
<!--            :value="audience"-->
<!--            class="btn-check"-->
<!--            name="btnRadio"-->
<!--            :id="`radio-${audience}`"-->
<!--          >-->
<!--        <label class="btn btn-outline-secondary" :for="`radio-${audience}`">{{ audience }}</label>-->
<!--      </template>-->
<!--    </div>-->
  </HeaderPanel>

  <main>
    <div class="row row-gap-4">
      <div v-for="product in productsByUser" :key="product.id" class="col-sm-6 col-lg-4 col-xl-3">
        <ProductCard :product="product" />
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import AlertStripe from "~/components/AlertStripe.vue";
import RadioButtons from "~/components/RadioButtons.vue";
import { type Product, Suitability } from "assets/interfaces";

let products = ref<Product[] | null>(null);
let suitableAudience = ref<Suitability>(Suitability.dogs);
let productsLoaded = ref(false);

let productsByUser = computed(() => {
  if (!products.value) return [];
  return products.value.filter((product: Product) =>
    product.suitableFor.includes(suitableAudience.value),
  );
});

// Use onBeforeMount to initiate fetching earlier in the lifecycle
onMounted(async () => {
  try {
    products.value = await $fetch<Product[]>("/api/products");
  } catch (error) {
    console.error("Failed to fetch products", error);
  } finally {
    productsLoaded.value = true;
  }
});
</script>

<template>
  <HeaderPanel title="The Fab 4">
    <nav v-if="productsByUser" class="navigation-main">
      <RadioButtons
        v-model="suitableAudience"
        :buttonList="Object.values(Suitability)"
      />
    </nav>

    <AlertStripe>
      <p>Buy multiples original canine or human products</p>
    </AlertStripe>
  </HeaderPanel>

  <main>
    <div class="products-showroom row row-gap-4 mx-auto">
      <div v-if="!productsLoaded" class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div
        v-else-if="productsByUser.length > 0"
        v-for="product in productsByUser"
        :key="product.id"
        class="col-sm-6 col-lg-4 col-xl-3"
      >
        <ProductCard :product="product" />
      </div>

      <div
        v-else
        class="d-flex justify-content-center align-items-center text-muted"
      >
        <p>No products found for this selection.</p>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import "../assets/scss/colors";
@import "../assets/scss/global-variables";

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

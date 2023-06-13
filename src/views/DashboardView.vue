<script setup>
import { useProductStore } from "../stores/product.store";
import CardProduct from "../components/CardProduct.vue";
import SearchProduct from "../components/SearchProduct.vue";

const productStore = useProductStore();
</script>

<template>
  <main class="my-28">
    <SearchProduct />
    <div class="flex flex-wrap gap-5 my-10">
      <CardProduct
        :product="product"
        v-for="product in productStore.products"
        :key="product.id"
      />
    </div>
  </main>
</template>

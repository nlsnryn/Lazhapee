<script setup>
import { storeToRefs } from "pinia";
import { defineProps, onMounted, ref } from "vue";
import { useProductStore } from "../stores/product.store";
import ProductSkeleton from "../components/ProductSkeleton.vue";

const productStore = useProductStore();
const isLoading = ref(false);
const { product } = storeToRefs(productStore);

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

onMounted(async () => {
  isLoading.value = true;
  await new Promise((res) => setTimeout(res, 1000));
  await productStore.getProduct(props.id);
  isLoading.value = false;
});
</script>

<template>
  <div v-if="isLoading" class="skeleton">
    <ProductSkeleton />
  </div>
  <main
    v-else
    class="grid justify-items-center items-center min-h-screen mt-20 mb-10 sm:mt-0 sm:mb-0"
  >
    <div class="flex flex-col md:flex-row gap-10">
      <div>
        <img :src="product.image" alt="Product Image" class="w-80 h-auto" />
      </div>
      <div class="dark:text-whiteColor max-w-md text-primary">
        <h1 class="text-3xl">{{ product.title }}</h1>
        <h2 class="text-xl capitalize text-blue-700 dark:text-greenColor">
          {{ product.category }}
        </h2>
        <p class="text-sm uppercase mt-5">
          {{ product.description }}
        </p>
        <h2 class="text-2xl mt-5">${{ product.price }}</h2>

        <div class="flex gap-5 mt-10">
          <button
            class="bg-blue-700 dark:bg-greenColor text-whiteColor px-4 py-2 rounded-lg cursor-pointer uppercase text-sm hover:-translate-y-2 transition-all duration-150"
          >
            Add to cart
          </button>
          <button
            class="bg-blue-700 dark:bg-greenColor text-whiteColor px-4 py-2 rounded-lg cursor-pointer uppercase text-sm hover:-translate-y-2 transition-all duration-150"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

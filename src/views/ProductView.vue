<script setup>
import { storeToRefs } from "pinia";
import { defineProps, onMounted, reactive, ref } from "vue";
import { useProductStore } from "../stores/product.store";
import { useCartStore } from "../stores/cart.store";
import ProductSkeleton from "../components/partials/ProductSkeleton.vue";
import DeleteModal from "../components/partials/DeleteModal.vue";
import router from "../router/index";
import DefaultButton from "../components/DefaultButton.vue";

const productStore = useProductStore();
const cartStore = useCartStore();
const isLoading = ref(false);
const { product } = storeToRefs(productStore);
const stars = ref([1, 2, 3, 4, 5]);
const isCheckOut = ref(false);

function checkOut() {
  isCheckOut.value = !isCheckOut.value;

  if (!isCheckOut.value) {
    router.push({ name: "products" });
  }
}

function addCart() {
  const cart = reactive({
    id: product.value.id,
    title: product.value.title,
    price: product.value.price,
    image: product.value.image,
    quantity: 1,
  });
  cartStore.addItemToCart(cart);
}

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
        <div class="flex items-center mt-2.5 mb-5">
          <svg
            v-for="(star, index) in stars"
            :key="index"
            aria-hidden="true"
            class="w-5 h-5"
            :class="{
              'text-yellow-300': product.rating && product.rating.rate >= star,
              'text-gray-300': product.rating && product.rating.rate < star,
            }"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>First star</title>
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
          <span
            class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
            >{{ product.rating && product.rating.rate }}</span
          >
        </div>
        <h2 class="text-2xl mt-5">${{ product.price }}</h2>

        <div class="flex gap-5 mt-10">
          <default-button
            @click="addCart()"
            class="px-4 py-2 rounded-lg uppercase text-sm"
            >Add to cart</default-button
          >
          <default-button
            @click="checkOut()"
            class="px-4 py-2 rounded-lg uppercase text-sm"
          >
            Buy Now
          </default-button>
        </div>
      </div>
    </div>
    <DeleteModal :checkOut="isCheckOut" @close-modal="checkOut()"
      ><h1 class="text-primary dark:text-whiteColor">
        You successfully checkout! Wait for the delivery!
      </h1></DeleteModal
    >
  </main>
</template>

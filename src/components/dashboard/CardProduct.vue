<script setup>
import { defineProps, ref } from "vue";
import { RouterLink } from "vue-router";

const stars = ref([1, 2, 3, 4, 5]);
const props = defineProps({
  product: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <div
    class="w-full flex flex-col items-stretch justify-between max-w-sm xs:max-w-[200px] lg:max-w-[240px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <div>
      <img
        class="p-8 rounded-t-lg w-full h-60 object-contain"
        :src="product.image"
        alt="product image"
      />
    </div>
    <div class="px-5 pb-5 self-auto">
      <div>
        <a href="#">
          <h5
            class="text-xl xs:text-sm font-semibold tracking-tight text-gray-900 dark:text-white"
          >
            {{ product.title }}
          </h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
          <svg
            v-for="(star, index) in stars"
            :key="index"
            aria-hidden="true"
            class="w-5 h-5"
            :class="{
              'text-yellow-300': product.rating.rate >= star,
              'text-gray-300': product.rating.rate < star,
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
            class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
            >{{ product.rating.rate }}</span
          >
        </div>
      </div>
      <div class="flex items-center justify-between">
        <span
          class="text-3xl xs:text-sm lg:text-lg font-bold text-gray-900 dark:text-white"
          >${{ product.price }}</span
        >
        <router-link
          :to="{ name: 'product', params: { id: product.id } }"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm xs:px-3 xs:py-1 px-5 py-2.5 text-center dark:bg-greenColor dark:hover:bg-green-800 transition-all duration-200 dark:focus:ring-greenColor"
        >
          More info
        </router-link>
      </div>
    </div>
  </div>
</template>

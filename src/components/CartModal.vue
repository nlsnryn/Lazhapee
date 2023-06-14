<script setup>
import { storeToRefs } from "pinia";
import { defineProps, defineEmits, computed } from "vue";
import { useCartStore } from "../stores/cart.store";
const cartStore = useCartStore();
const { total } = storeToRefs(cartStore);

const totalDivPosition = computed(() => {
  if (cartStore.cartItems.length >= 6 || cartStore.cartItems.length >= 4) {
    return "sticky bottom-0 w-full bg-whiteColor dark:primary border-t-2 dark:border-t-0";
  } else {
    return "absolute left-0 right-0 bottom-0 w-full bg-whiteColor dark:bg-primary border-t-2 dark:border-t-0";
  }
});

defineEmits(["close-modal"]);
defineProps({
  activeModal: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    v-show="activeModal"
    class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 px-8"
  >
    <div
      v-if="activeModal"
      class="bg-whiteColor dark:bg-primary absolute right-0 top-0 bottom-0 max-w-xs overflow-y-auto overflow-x-hidden transition-all"
    >
      <slot />

      <!-- Total Button -->
      <div :class="totalDivPosition">
        <div class="flex flex-row justify-between items-center dark:bg-primary">
          <h1
            class="text-blue-700 dark:text-whiteColor font-medium text-xl w-3/5 text-center px-5"
          >
            <span class="text-sm font-medium">Total</span> ${{ total }}
          </h1>
          <button
            class="bg-blue-700 dark:bg-greenColor text-whiteColor w-2/5 py-2 text-sm font-medium"
          >
            Checkout
          </button>
        </div>
      </div>
      <a
        v-if="activeModal"
        @click="$emit('close-modal')"
        class="text-primary dark:text-whiteColor hover:text-blue-700 dark:hover:text-greenColor duration-150 text-2xl cursor-pointer absolute top-3 right-5"
      >
        <i class="fa-solid fa-xmark"></i>
      </a>
    </div>
  </div>
</template>

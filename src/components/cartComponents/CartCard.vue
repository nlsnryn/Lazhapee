<script setup>
import { defineProps, ref } from "vue";
import { useCartStore } from "../../stores/cart.store";
import DeleteModal from "../partials/DeleteModal.vue";

const showDeleteModal = ref(false);
const cartStore = useCartStore();

defineProps({
  cart: {
    type: Object,
    default: () => {},
  },
});

function deleteModal(id, quantity) {
  if (quantity <= 1) {
    showDeleteModal.value = !showDeleteModal.value;
  } else {
    cartStore.minusQuantity(id);

    if (!quantity) {
      showDeleteModal.value = !showDeleteModal.value;
    }
  }
}
</script>

<template>
  <div
    class="flex items-center py-3 bg-whiteColor border border-gray-100 shadow flex-row w-full max-w-[320px] dark:border-gray-700 dark:bg-gray-800"
  >
    <div class="w-2/5">
      <img class="object-cover h-auto w-48 p-5" :src="cart.image" alt="" />
    </div>
    <div
      class="text-primary dark:text-whiteColor flex flex-col leading-normal w-3/5"
    >
      <h1 class="text-sm mb-1 font-medium">
        {{ cart.title }}
      </h1>
      <h2 class="text-sm mb-4 font-medium">$ {{ cart.price }}</h2>
      <div class="flex flex-row gap-1 items-center">
        <button
          @click="deleteModal(cart.id, cart.quantity)"
          class="text-sm bg-blue-700 dark:bg-greenColor px-2 text-whiteColor rounded-sm"
        >
          -
        </button>
        <button
          class="text-sm bg-blue-700 dark:bg-greenColor px-2 text-whiteColor rounded-sm"
        >
          {{ cart.quantity }}
        </button>
        <button
          @click="cartStore.addQuantity(cart.id)"
          class="text-sm bg-blue-700 dark:bg-greenColor px-2 text-whiteColor rounded-sm"
        >
          +
        </button>
      </div>
    </div>
    <DeleteModal
      :deleteModal="showDeleteModal"
      @close-modal="deleteModal()"
      @delete-location="cartStore.minusQuantity(cart.id)"
      ><h1 class="text-sm">Do you want to remove this product?</h1></DeleteModal
    >
  </div>
</template>

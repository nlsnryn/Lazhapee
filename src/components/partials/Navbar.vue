<script setup>
import { initFlowbite } from "flowbite";
import DarkMode from "../DarkMode.vue";
import { RouterLink } from "vue-router";
import { useAuthStore } from "../../stores/auth.store";
import { useCartStore } from "../../stores/cart.store";
import { useRouter } from "vue-router";
import { onMounted, ref, computed } from "vue";
import CartModal from "../cartComponents/CartModal.vue";
import CartCard from "../cartComponents/CartCard.vue";

const router = useRouter();
const authStore = useAuthStore();
const cartStore = useCartStore();
const isShowModal = ref(false);

const sortedCartItems = computed(() => {
  // Copy the cart items array and sort it in descending order
  // return [...cartStore.cartItems].sort((a, b) => a.index - b.index).reverse();
  return cartStore.cartItems.slice().reverse();
});

function toggleModal() {
  isShowModal.value = !isShowModal.value;

  if (isShowModal.value) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
}

onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <nav
    class="bg-white border-gray-200 dark:bg-primary fixed top-0 right-0 left-0 z-50"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative"
    >
      <div class="flex items-center">
        <DarkMode />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-greenColor text-primary"
          ><router-link :to="{ name: 'index' }">Lazhapee</router-link></span
        >
      </div>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        class="hidden md:block md:w-auto absolute top-12 right-0 left-0 mx-auto md:relative md:mx-0 md:top-0 w-11/12"
        id="navbar-default"
      >
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-primary dark:border-gray-700"
        >
          <li>
            <a @click="router.push({ name: 'products' })" class="alink">
              All Products
            </a>
          </li>
          <li>
            <a
              v-if="authStore.isAuthenticated()"
              @click="toggleModal()"
              class="relative alink"
            >
              <span
                class="absolute text-xs top-0 -left-3 text-whiteColor bg-blue-700 dark:bg-red-500 rounded-full hover:text-whiteColor p-0.5"
                >{{ cartStore.cartItems.length }}</span
              >
              Cart
            </a>
          </li>
          <li v-if="!authStore.isAuthenticated()">
            <a @click="router.push({ name: 'login' })" class="alink">
              Log In
            </a>
          </li>
          <li v-else>
            <a @click="authStore.logout()" class="alink"> Logout </a>
          </li>
        </ul>
      </div>
    </div>

    <CartModal :activeModal="isShowModal" @close-modal="toggleModal()">
      <main class="text-primary dark:text-whiteColor my-4">
        <h1
          class="text-xl font-medium text-blue-700 dark:text-greenColor ml-5 mr-32"
        >
          Lazhaping Cart
        </h1>
        <div class="flex gap-3 flex-wrap mt-20">
          <CartCard
            v-for="items in sortedCartItems"
            :key="items.id"
            :cart="items"
          />
        </div>
      </main>
    </CartModal>
  </nav>
</template>

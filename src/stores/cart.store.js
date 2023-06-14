import { get } from "@vueuse/core";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

const useCartStore = defineStore("cart", () => {
  const cartItems = ref([]);
  const total = ref(0);

  function addItemToCart(newItem) {
    const itemFiltered = cartItems.value.find((item) => item.id === newItem.id);

    if (itemFiltered) {
      addQuantity(itemFiltered.id);
      return;
    }

    cartItems.value.push(newItem);
    getTotalPrice();
  }

  function getTotalPrice() {
    total.value = 0;
    cartItems.value.forEach((item) => {
      total.value += item.price * item.quantity;
    });
    total.value = parseFloat(total.value.toFixed(2));
  }

  function addQuantity(id) {
    const item = cartItems.value.find((item) => item.id === id);

    if (item) {
      item.quantity += 1;
      getTotalPrice();
    }
  }

  function minusQuantity(id) {
    const item = cartItems.value.find((item) => item.id === id);

    if (item) {
      if (item.quantity >= 2) {
        item.quantity -= 1;
        getTotalPrice();
      } else {
        cartItems.value = cartItems.value.filter((item) => item.id !== id);
        getTotalPrice();
      }
    }
  }

  return {
    cartItems,
    total,
    addItemToCart,
    addQuantity,
    minusQuantity,
  };
});

export { useCartStore };

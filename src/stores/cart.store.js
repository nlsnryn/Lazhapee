import { defineStore } from "pinia";
import { ref, computed } from "vue";
import router from "../router/index";

const useCartStore = defineStore("cart", () => {
  const cartItems = ref([]);

  const total = computed(() => {
    let total = 0;
    cartItems.value.forEach((item) => {
      total += item.price * item.quantity;
    });
    return parseFloat(total.toFixed(2));
  });

  const isCheckOut = ref(false);

  function addItemToCart(newItem) {
    const itemFiltered = cartItems.value.find((item) => item.id === newItem.id);

    if (itemFiltered) {
      addQuantity(itemFiltered.id);
      return;
    }

    cartItems.value.push(newItem);
  }

  // function getTotalPrice() {
  //   total.value = 0;
  //   cartItems.value.forEach((item) => {
  //     total.value += item.price * item.quantity;
  //   });
  //   total.value = parseFloat(total.value.toFixed(2));
  // }

  function addQuantity(id) {
    const item = cartItems.value.find((item) => item.id === id);

    if (item) {
      item.quantity += 1;
    }
  }

  function minusQuantity(id) {
    const item = cartItems.value.find((item) => item.id === id);

    if (item) {
      if (item.quantity >= 2) {
        item.quantity -= 1;
      } else {
        cartItems.value = cartItems.value.filter((item) => item.id !== id);
      }
    }
  }

  function checkOut() {
    if (!total.value) {
      return;
    }

    if (cartItems.value.length >= 1) {
      isCheckOut.value = !isCheckOut.value;
      cartItems.value = [];
      total.value = 0;
      router.push({ name: "products" });
    } else {
      isCheckOut.value = !isCheckOut.value;
    }
  }

  return {
    cartItems,
    total,
    isCheckOut,
    checkOut,
    addItemToCart,
    addQuantity,
    minusQuantity,
  };
});

export { useCartStore };

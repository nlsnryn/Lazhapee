import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

const useProductStore = defineStore("product", () => {
  const products = computed(() =>
    searchProduct.value.filter((product) =>
      product.title.toLowerCase().includes(query.value.toLowerCase())
    )
  );

  const searchProduct = ref([]);
  const product = ref([]);
  const query = ref("");

  async function getProducts() {
    const response = await axios.get("https://fakestoreapi.com/products");
    searchProduct.value = response.data;
  }

  async function getProduct(id) {
    const response = await axios.get("https://fakestoreapi.com/products/" + id);
    product.value = response.data;
  }

  getProducts();
  return {
    getProducts,
    getProduct,
    products,
    product,
    query,
    searchProduct,
  };
});

export { useProductStore };

import { defineStore } from "pinia";
import {
  getCredentials,
  setCredentials,
  removeCredentials,
} from "../helper/LocalStorage";
import { ref } from "vue";
import axios from "axios";
import router from "../router";

const useAuthStore = defineStore("auth", () => {
  const credentials = ref(getCredentials());
  const users = ref([]);
  const generate = ref({});

  async function fetchUsers() {
    const response = await axios.get("https://fakestoreapi.com/users");
    users.value = response.data;
  }

  async function generateAccount() {
    let randomNumber = Math.floor(Math.random() * 10);
    generate.value = users.value[randomNumber];
  }

  async function login(form) {
    const response = await axios.post(
      "https://fakestoreapi.com/auth/login",
      JSON.stringify(form),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { token } = response.data;

    const user = users.value.find((user) => user.username === form.username);

    if (!token || !user) {
      return;
    }

    //set credentials
    setCredentials(token, user);

    //update credentials
    credentials.value.token = token;
    credentials.value.user = user;

    router.push({ name: "products" });
  }

  const isAuthenticated = () =>
    !!credentials.value.token && !!credentials.value.user;

  async function logout() {
    removeCredentials();
    credentials.value.token = "";
    credentials.value.user = "";
    router.push({ name: "login" });
  }

  fetchUsers();
  return {
    login,
    isAuthenticated,
    users,
    generate,
    generateAccount,
    logout,
  };
});

export { useAuthStore };

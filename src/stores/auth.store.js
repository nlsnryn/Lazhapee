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

  async function fetchUsers() {
    const response = await axios.get("https://fakestoreapi.com/users");
    users.value = response.data;
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

    router.push({ name: "dashboard" });
  }

  const isAuthenticated = () =>
    !!credentials.value.token && !!credentials.value.user;

  async function register(form) {
    await axios.post("https://fakestoreapi.com/users", JSON.stringify(form), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Registered successfully");
  }

  fetchUsers();
  return {
    login,
    isAuthenticated,
    register,
  };
});

export { useAuthStore };

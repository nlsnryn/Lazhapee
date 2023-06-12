<script setup>
import { RouterLink } from "vue-router";
import { reactive, ref, onMounted } from "vue";
import { useAuthStore } from "../../stores/auth.store";

const account = ref({});
const rememberMe = ref(false);
const form = reactive({
  username: "",
  password: "",
});

function generateForm() {
  authStore.generateAccount();
  account.value = authStore.generate;
  form.username = account.value.username;
  form.password = account.value.password;
}

function handleSubmit() {
  authStore.login(form);

  if (rememberMe.value) {
    localStorage.setItem("username", form.username);
    localStorage.setItem("password", form.password);
  }
}

const authStore = useAuthStore();

onMounted(() => {
  if (localStorage.getItem("username") && localStorage.getItem("password")) {
    form.username = localStorage.getItem("username");
    form.password = localStorage.getItem("password");
    rememberMe.value = true;
  }
});
</script>

<template>
  <main class="grid justify-items-center items-center min-h-screen">
    <form
      @submit.prevent="handleSubmit()"
      class="max-w-md w-10/12 sm:w-full p-0 sm:p-10 border-0 sm:border-2 rounded-2xl border-gray-600 mx-auto"
    >
      <h1
        class="text-primary dark:text-whiteColor font-medium text-2xl tracking-tight mb-8"
      >
        Generate account and Log In
      </h1>
      <div class="mb-6">
        <label
          for="username"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-whiteColor"
          >Your username</label
        >
        <input
          type="text"
          id="username"
          v-model="form.username"
          class="disabled bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-whiteColor dark:focus:ring-greenColor dark:focus:border-greenColor"
          disabled
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-whiteColor"
          >Your password</label
        >
        <input
          type="password"
          id="password"
          v-model="form.password"
          class="disabled bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-whiteColor dark:focus:ring-greenColor dark:focus:border-greenColor"
          disabled
          required
        />
      </div>
      <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input
            id="rememberMe"
            type="checkbox"
            v-model="rememberMe"
            class="w-4 h-4 border dark:focus:bg-greenColor border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-greenColor dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
          />
        </div>
        <label
          for="remember"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Remember me</label
        >
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-greenColor dark:hover:bg-greenColor dark:focus:ring-greenColor"
      >
        Log In
      </button>
      <h1 class="text-primary dark:text-whiteColor text-sm mt-5">
        Don't have an account?
        <span class="text-blue-700 dark:text-greenColor cursor-pointer"
          ><button type="button" @click="generateForm()">
            Generate account
          </button></span
        >
      </h1>
    </form>
  </main>
</template>

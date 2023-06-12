<script setup>
import { RouterLink } from "vue-router";
import { reactive } from "vue";
import { useAuthStore } from "../../stores/auth.store";

const form = reactive({
  username: "",
  password: "",
});

const authStore = useAuthStore();
</script>

<template>
  <main class="grid justify-items-center items-center min-h-screen">
    <form
      @submit.prevent="authStore.login(form)"
      class="max-w-md w-10/12 sm:w-full p-0 sm:p-10 border-0 sm:border-2 rounded-2xl border-gray-600 mx-auto"
    >
      <h1
        class="text-primary dark:text-whiteColor font-medium text-2xl tracking-tight mb-8"
      >
        Login
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
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-whiteColor dark:focus:ring-greenColor dark:focus:border-greenColor"
          placeholder="nelson_06"
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
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-whiteColor dark:focus:ring-greenColor dark:focus:border-greenColor"
          required
        />
      </div>
      <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
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
        Submit
      </button>
      <h1 class="text-primary dark:text-whiteColor text-sm mt-5">
        New to Lazhapee?
        <span class="text-blue-700 dark:text-greenColor cursor-pointer"
          ><router-link to="/register">Sign up</router-link></span
        >
      </h1>
    </form>
  </main>
</template>

<script setup>
import { reactive } from "vue";
import { RouterLink } from "vue-router";
import { useAuthStore } from "../../stores/auth.store";

const authStore = useAuthStore();

const form = reactive({
  firstname: "",
  lastname: "",
  username: "",
  phone: "",
  address: {
    city: "",
    street: "",
  },
  password: "",
  email: "",
});
</script>

<template>
  <main class="flex justify-center items-center min-h-screen mt-20">
    <form
      @submit.prevent="authStore.register(form)"
      class="max-w-2xl w-10/12 sm:w-full md:p-5 md:border-2 rounded-2xl border-gray-600 mx-auto py-5"
    >
      <h1
        class="text-primary dark:text-whiteColor font-medium text-2xl tracking-tight mb-8"
      >
        Create an account
      </h1>
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >First name</label
          >
          <input
            type="text"
            id="first_name"
            v-model="form.firstname"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-greenColor dark:focus:border-greenColor"
            placeholder="John"
            required
          />
        </div>
        <div>
          <label
            for="last_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Last name</label
          >
          <input
            type="text"
            id="last_name"
            v-model="form.lastname"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-greenColor dark:focus:border-greenColor"
            placeholder="Doe"
            required
          />
        </div>
        <div>
          <label
            for="username"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Username</label
          >
          <input
            type="text"
            id="username"
            v-model="form.username"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-greenColor dark:focus:border-greenColor"
            placeholder="johndoe"
            required
          />
        </div>
        <div>
          <label
            for="phone"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Phone number</label
          >
          <input
            type="tel"
            id="phone"
            v-model="form.phone"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-greenColor dark:focus:border-greenColor"
            placeholder="09305782942"
            required
          />
        </div>
        <div>
          <label
            for="street"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Street Address</label
          >
          <input
            type="text"
            id="street"
            v-model="form.address.street"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-greenColor dark:focus:border-greenColor"
            placeholder="154 Lopez Jaena"
            required
          />
        </div>
        <div>
          <label
            for="city"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >City</label
          >
          <input
            type="text"
            id="city"
            v-model="form.address.city"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-greenColor dark:focus:border-greenColor"
            placeholder="Binangonan"
            required
          />
        </div>
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Email address</label
        >
        <input
          type="email"
          id="email"
          v-model="form.email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-greenColor dark:focus:border-greenColor"
          placeholder="john.doe@company.com"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Password</label
        >
        <input
          type="password"
          id="password"
          name="password"
          v-model="form.password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-greenColor dark:focus:border-greenColor"
          placeholder="•••••••••"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="confirm_password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Confirm password</label
        >
        <input
          type="password"
          id="confirm_password"
          name="confirm_password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-greenColor dark:focus:border-greenColor"
          placeholder="•••••••••"
          required
        />
      </div>
      <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-greenColor dark:focus:bg-greenColor dark:ring-offset-gray-800"
          />
        </div>
        <label
          for="remember"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >I agree with the
          <a href="#" class="text-blue-600 hover:underline dark:text-greenColor"
            >terms and conditions</a
          >.</label
        >
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-greenColor dark:focus:ring-greenColor"
      >
        Submit
      </button>
      <h1 class="text-primary dark:text-whiteColor text-sm mt-5">
        Have an account?
        <span class="text-blue-700 dark:text-greenColor cursor-pointer"
          ><router-link to="/login">Login</router-link></span
        >
      </h1>
    </form>
  </main>
</template>

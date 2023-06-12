<script setup>
import { initFlowbite } from "flowbite";
import DarkMode from "./DarkMode.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <nav
    class="bg-white border-gray-200 dark:bg-primary fixed top-0 right-0 left-0"
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
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-primary hover:bg-blue-700 dark:hover:bg-greenColor hover:text-white md:hover:bg-transparent md:hover:text-blue-700 md:hover:dark:bg-transparent rounded md:bg-transparent md:text-primary md:p-0 dark:text-white md:dark:text-whiteColor md:hover:dark:text-greenColor hover:dark:text-whiteColor"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-primary hover:bg-blue-700 dark:hover:bg-greenColor hover:text-white md:hover:bg-transparent md:hover:text-blue-700 md:hover:dark:bg-transparent rounded md:bg-transparent md:text-primary md:p-0 dark:text-white md:dark:text-whiteColor md:hover:dark:text-greenColor hover:dark:text-whiteColor"
              >About</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-primary hover:bg-blue-700 dark:hover:bg-greenColor hover:text-white md:hover:bg-transparent md:hover:text-blue-700 md:hover:dark:bg-transparent rounded md:bg-transparent md:text-primary md:p-0 dark:text-white md:dark:text-whiteColor md:hover:dark:text-greenColor hover:dark:text-whiteColor"
              >Services</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-primary hover:bg-blue-700 dark:hover:bg-greenColor hover:text-white md:hover:bg-transparent md:hover:text-blue-700 md:hover:dark:bg-transparent rounded md:bg-transparent md:text-primary md:p-0 dark:text-white md:dark:text-whiteColor md:hover:dark:text-greenColor hover:dark:text-whiteColor"
              >Pricing</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-primary hover:bg-blue-700 dark:hover:bg-greenColor hover:text-white md:hover:bg-transparent md:hover:text-blue-700 md:hover:dark:bg-transparent rounded md:bg-transparent md:text-primary md:p-0 dark:text-white md:dark:text-whiteColor md:hover:dark:text-greenColor hover:dark:text-whiteColor"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

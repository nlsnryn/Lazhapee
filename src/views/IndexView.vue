<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="grid justify-items-center items-center min-h-screen">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-blue-700 dark:text-greenColor text-5xl font-medium mb-2">
        Lazhapee
      </h1>
      <h2 class="text-primary dark:text-whiteColor text-3xl font-medium mb-6">
        E-Commerce Website
      </h2>
      <p
        class="text-primary dark:text-whiteColor text-lg tracking-tighter max-w-2xl mx-auto"
      >
        Welcome to Lazhapee, your one-stop online shopping destination for all
        your needs. With our cutting-edge e-commerce website, we bring you an
        unrivaled shopping experience right at your fingertips. Lazhapee has it
        all.
      </p>

      <div
        class="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-10"
      >
        <RouterLink :to="{ name: 'login' }" class="button px-4 py-2 rounded-lg"
          >Login your account</RouterLink
        >
      </div>
    </div>
  </main>
</template>

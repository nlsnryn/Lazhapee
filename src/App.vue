<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <main class="w-10/12 lg:w-full max-w-7xl mx-auto">
    <header>
      <Navbar />
    </header>

    <RouterView />
  </main>
</template>

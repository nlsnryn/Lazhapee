<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import DarkMode from "./components/DarkMode.vue";
</script>

<template>
  <main class="max-w-7xl mx-auto">
    <header>
      <Navbar />
    </header>

    <RouterView />
  </main>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <p>isDark:{{ isDark }}</p>
  <button @click="toggleDark()" class="px-4 py-2 bg-whiteColor rounded">
    Dark Mode
  </button>
</template>

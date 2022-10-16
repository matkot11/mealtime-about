<template>
  <NavbarComponent />
  <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";
import NavbarComponent from "@/components/NavbarComponent.vue";
</script>

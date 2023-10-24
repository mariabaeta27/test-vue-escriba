<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div id="body">
    <NavBar />
    <RouterView />
  </div>
</template>

<style scoped>
#body {
  height: 100vh;
  display: flex;
}
</style>

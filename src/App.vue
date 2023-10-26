<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBarComponent from './components/NavBarComponent.vue'
</script>

<template>
  <div id="body">
    <NavBarComponent />
    <RouterView />
  </div>
</template>

<style scoped>
div {
  height: 100vh;
  display: flex;
  width: 100%;
}
</style>

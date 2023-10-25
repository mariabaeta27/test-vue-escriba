<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <header class="title">
    <h1>{{ text }}</h1>
  </header>
</template>

<style scoped>
h1 {
  color: #3fb984;
  text-shadow: 2px -2px 10px rgb(235, 238, 235);
  text-align: center;
  padding: 1rem;
}
</style>

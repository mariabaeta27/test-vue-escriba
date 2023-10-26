<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <button class="custom-button" type="submit">
    <p>{{ text }}</p>
  </button>
</template>

<style scoped>
.custom-button {
  border-radius: 5px;
  color: #3fb984;
  padding: 5px;
  margin: 10px;
  display: flex;
  background-color: #2d5e61;
}
.icon {
  height: 15px;
  margin-left: 5px;
  color: #3fb984;
}
</style>

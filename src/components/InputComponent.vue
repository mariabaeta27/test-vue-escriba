<script setup lang="ts">
defineProps<{
  type: string
  placeholder: string
}>()
</script>

<template>
  <input :type="type" :placeholder="placeholder" />
</template>

<style scoped>
input {
  border: 1px solid #3fb984;
  padding: 3px;
  border-radius: 5px;
  margin-right: 5px;
  width: auto;
}
</style>

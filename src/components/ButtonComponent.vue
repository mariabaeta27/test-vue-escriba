<script setup lang="ts">
defineProps<{
  text: string
  icon?: boolean
}>()
</script>

<template>
  <button class="custom-button">
    <p>{{ text }}</p>
    <span v-if="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="icon"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </span>
  </button>
</template>

<style>
.custom-button {
  border-radius: 5px;
  color: #3fb984;
  padding: 5px;
  margin: 10px;
  display: flex;
}
.icon {
  height: 15px;
  margin-left: 5px;
  color: #3fb984;
}
</style>

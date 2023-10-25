<script setup lang="ts">
import InputComponent from '../InputComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
// defineProps<{}>()
</script>

<template>
  <div class="filter">
    <InputComponent />
    <ButtonComponent text="Filtrar" />
  </div>
</template>

<style>
.filter {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

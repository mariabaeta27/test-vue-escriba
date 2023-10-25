<script setup lang="ts">
import InputComponent from '../InputComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
// defineProps<{}>()
</script>

<template>
  <form class="filter">
    <!-- Implementar logica do form -->
    <InputComponent :type="'text'" placeholder="Filtar Usuários" />
    <ButtonComponent text="Filtrar" />
  </form>
</template>

<style scoped>
.filter {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

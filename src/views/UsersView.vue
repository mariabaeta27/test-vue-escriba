<script setup lang="ts">
import TitleComponent from '../components/TitleComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import FilterComponent from '@/components/Filter/FilterComponent.vue'
</script>

<template>
  <div class="body-users">
    <TitleComponent text="Lista de Usuários" />
    <FilterComponent />
    <div class="add-button">
      <!-- Implementar lógica do botão de adicionar mais usuários -->
      <ButtonComponent text="Adicionar" :icon="true" />
    </div>
    <div class="table">Table</div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .body-users {
    display: flex;
    flex-direction: column;
  }

  .add-button {
    display: flex;
    justify-content: end;
    padding: 10px;
  }

  .table {
    border: 1px solid;
  }
}
</style>

<script setup lang="ts">
import TitleComponent from '../components/TitleComponent.vue'
import { UserPlusIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="body-users">
    <TitleComponent text="Lista de Usuários" />
    <!-- Criar component de filtro -->
    <div class="filter">
      <!-- Criar componente de input -->
      <input type="text" />
      <!-- Criar componente de button -->
      <button><p>Filtrar</p></button>
    </div>
    <div class="add-button">
      <!-- Criar componente de button -->
      <button>
        <p>Adicionar</p>
        <UserPlusIcon class="icon" />
      </button>
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

  .filter {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    border: 1px solid #3fb984;
    padding: 3px;
    border-radius: 5px;
    margin-right: 5px;
    width: auto;
  }

  button {
    border-radius: 5px;
    color: #3fb984;
    padding: 5px;
    margin: 10px;
    display: flex;
  }

  .add-button {
    display: flex;
    justify-content: end;
    padding: 10px;
  }
  .icon {
    height: 15px;
    margin-left: 5px;
  }
  .table {
    border: 1px solid;
  }
}
</style>

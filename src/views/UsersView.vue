<script setup lang="ts">
import TitleComponent from '../components/TitleComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import FilterComponent from '@/components/Filter/FilterComponent.vue'
import TableComponent from '@/components/Table/TableComponent.vue'
import type { InterfaceBodyTableUser, InterfaceUser } from '@/types'
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const users = computed(() => store.getters.formatUsers)
</script>

<template>
  <div class="body-users">
    <TitleComponent text="Lista de Usuários" />
    <FilterComponent />
    <div class="add-button">
      <!-- Implementar lógica do botão de adicionar mais usuários -->
      <ButtonComponent text="Adicionar" :icon="true" />
    </div>
    <TableComponent :body="users" />
  </div>
</template>

<style scoped>
.body-users {
  display: flex;
  flex-direction: column;
}

.add-button {
  display: flex;
  justify-content: end;
  padding: 10px;
}
</style>

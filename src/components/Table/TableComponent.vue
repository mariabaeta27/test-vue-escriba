<script setup lang="ts">
import type { InterfaceUser } from '@/types'
import { PencilIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useStore } from 'vuex'
const store = useStore()

const emits = defineEmits(['showModal'])

defineProps<{
  body: InterfaceUser[]
}>()

const deleteUser = (id: number) => {
  store.dispatch('deleteUser', id)
}
const editUser = (id: number) => {
  emits('showModal')
  store.dispatch('setUserId', id)
}
</script>

<template>
  <div>
    <div v-if="!body" class="empty-users">
      <h3>Não há registro de usuários</h3>
    </div>

    <div v-if="body && body.length === 0" class="empty-users">
      <h3>Não há usuários cadastrados</h3>
    </div>

    <table class="table" v-if="body && body.length !== 0">
      <thead>
        <th class="cell-id">ID</th>
        <th>Nome</th>
        <th>Documento</th>
        <th>Data de nascimento</th>
        <th class="cell-actions">Ações</th>
      </thead>
      <tbody>
        <tr v-for="item in body" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.nome }}</td>
          <td>{{ item.cpf }}</td>
          <td>{{ item.dataNascimento }}</td>
          <td class="actions" :data-testid="item.nome">
            <button>
              <PencilIcon class="icon" v-on:click="editUser(item.id)" />
            </button>
            <button v-on:click="deleteUser(item.id)">
              <XMarkIcon class="icon" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.empty-users {
  text-align: center;
  padding: 1rem;
}
.table {
  width: 100%;
  margin-right: 10px;
  border-spacing: 0 8px;
}
.table,
th,
td {
  border-collapse: collapse;
  padding: 10px;
  text-align: left;
  text-align: center;
}
th {
  background-color: #3fb984;
}
div {
  margin-right: 15px;
}
.actions {
  display: flex;
  justify-content: start;
}
.actions button {
  margin-right: 10px;
  border: #3fb984 1px solid;
  padding: 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}

.icon {
  height: 20px;
  color: #3fb984;
}

.cell-id {
  width: 10px; /* Defina o tamanho desejado */
}
.cell-actions {
  width: 30px;
}
</style>

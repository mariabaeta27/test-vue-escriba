<script setup lang="ts">
import { PencilIcon, XMarkIcon } from '@heroicons/vue/24/outline'

// defineProps<{
//   type: string
//   placeholder: string
// }>()
</script>

<template>
  <div>
    <table class="table">
      <thead>
        <th class="cell-id">ID</th>
        <th>Nome</th>
        <th>Documento</th>
        <th>Data de nascimento</th>
        <th class="cell-actions">Ações</th>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Maria</td>
          <td>XXXXXXXX</td>
          <td>xx/xx/xx</td>
          <td class="actions">
            <button>
              <PencilIcon class="icon" />
            </button>
            <button>
              <XMarkIcon class="icon" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
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

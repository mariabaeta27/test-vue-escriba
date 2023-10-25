<script setup lang="ts"></script>

<template>
  <thead>
    <th class="cell-id">ID</th>
    <th>Nome</th>
    <th>Documento</th>
    <th>Data de nascimento</th>
    <th class="cell-actions">Ações</th>
  </thead>
</template>

<style scoped>
th {
  border-collapse: collapse;
  padding: 10px;
  text-align: left;
  text-align: center;
  background-color: #3fb984;
}
.cell-id {
  width: 10px;
}
.cell-actions {
  width: 30px;
}
</style>

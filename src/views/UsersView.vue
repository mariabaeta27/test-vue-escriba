<script setup lang="ts">
import TitleComponent from '@/components/TitleComponent.vue'
import FilterComponent from '@/components/Filter/FilterComponent.vue'
import TableComponent from '@/components/Table/TableComponent.vue'
import ModalComponent from '@/components/ModalComponent.vue'
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const users = computed(() => store.getters.formatUsers)

onMounted(async () => {
  await store.dispatch('getUsers')
})

const data = ref({
  isModalVisible: false,
  textModal: '',
  idUser: 0
})

const showModal = () => {
  data.value.isModalVisible = true
}

const closedModal = () => {
  data.value.isModalVisible = false
  data.value.textModal = ''
  data.value.idUser = 0
}
</script>

<template>
  <div class="body-users">
    <TitleComponent text="Lista de Usuários" />
    <FilterComponent />
    <div class="add-button">
      <button @click="showModal" class="custom-button" type="button">Adicionar</button>
    </div>
    <TableComponent :body="users" @showModal="showModal" />
    <ModalComponent
      v-if="data.isModalVisible"
      @close="closedModal"
      :text="data.textModal"
      :userId="data.idUser"
    />
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
.custom-button {
  border-radius: 5px;
  color: #3fb984;
  padding: 5px;
  margin: 10px;
  display: flex;
  background-color: #2d5e61;
  width: auto;
}
</style>

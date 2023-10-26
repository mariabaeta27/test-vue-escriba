<script setup lang="ts">
import TitleComponent from '@/components/TitleComponent.vue'
import FilterComponent from '@/components/Filter/FilterComponent.vue'
import TableComponent from '@/components/Table/TableComponent.vue'
import ModalComponent from '@/components/ModalComponent.vue'
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const users = computed(() => store.getters.formatUsers)
const message = computed(() => store.getters.getMessage)
const errorMessage = computed(() => store.getters.getErrorMessage)

const closeAfterTimeout = () => {
  setTimeout(() => {
    clearErrorMessage()
    clearMessage()
  }, 10000)
}

onMounted(async () => {
  await store.dispatch('getUsers')
  closeAfterTimeout()
})

const data = ref({
  isModalVisible: false,
  textModal: '',
  idUser: 0
})

const showModal = () => {
  data.value.isModalVisible = true
  store.commit('clearMessage')
  store.commit('clearErrorMessage')
}

const closedModal = () => {
  data.value.isModalVisible = false
  data.value.textModal = ''
  data.value.idUser = 0
}

const clearErrorMessage = () => {
  store.commit('clearErrorMessage')
}

const clearMessage = () => {
  store.commit('clearMessage')
}
</script>

<template>
  <div class="body-users">
    <TitleComponent text="Lista de Usuários" />
    <FilterComponent />
    <div class="add-button">
      <button data-testid="addUser" @click="showModal" class="custom-button" type="button">
        Adicionar
      </button>
    </div>

    <TableComponent :body="users" @showModal="showModal" />
    <ModalComponent
      v-if="data.isModalVisible"
      @close="closedModal"
      :text="data.textModal"
      :userId="data.idUser"
    />

    <div v-if="errorMessage" class="custom-alert error" data-testid="alert-error">
      {{ errorMessage }}
      <button @click="clearErrorMessage" class="close-button button-message-error">x</button>
    </div>

    <div v-if="message" class="custom-alert message" data-testid="alert-message">
      {{ message }}
      <button @click="clearMessage" class="close-button button-message">x</button>
    </div>
  </div>
</template>

<style scoped>
.custom-alert {
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin: 5px 0;
  position: fixed;
  top: 0;
  right: 0;
  width: 30%;
  text-align: center;
}

.error {
  background-color: rgba(244, 67, 54, 0.7);
}
.message {
  background-color: rgba(63, 185, 132, 0.7);
}

.button-message {
  color: #3fb984;
}

.button-message-error {
  color: #f44336;
  background-color: #f44336;
}
.close-button {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 3px;
  background-color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 5px;
  margin-top: 1px;
}
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

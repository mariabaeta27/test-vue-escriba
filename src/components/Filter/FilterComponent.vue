<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'

import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const data = ref({
  text: ''
})
const submitForm = (event: Event) => {
  event.preventDefault()

  store.dispatch('getUsers', data.value.text)
}

const clearInput = () => {
  data.value.text = ''
  store.dispatch('getUsers')
}
</script>

<template>
  <form class="filter" @submit="submitForm">
    <div class="input">
      <input placeholder="Filtar Usuários" v-model="data.text" />
      <button class="clear" type="button" @click="clearInput">
        <p>X</p>
      </button>
    </div>
    <ButtonComponent text="Filtrar" />
  </form>
</template>

<style scoped>
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
.clear {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  border: none;
  background: transparent;
  outline: none;
}

.input {
  position: relative;
  width: 200px;
}

.submit-line input {
  width: 100%;
}
</style>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { cpf } from 'cpf-cnpj-validator'
import { useStore } from 'vuex'
const emits = defineEmits(['close'])
const store = useStore()

const id = computed(() => store.getters.setUserId)
const user = computed(() => store.getters.getUser)

defineProps<{
  text: string
  userId: number
}>()

onMounted(async () => {
  if (id.value) {
    await store.dispatch('getUser')
    data.value.nome = user.value.nome
    data.value.cpf = user.value.cpf
    data.value.dataNascimento = user.value.dataNascimento
  }
})

const data = ref({
  nome: '',
  cpf: '',
  dataNascimento: ''
})

const submitForm = (event: Event) => {
  event.preventDefault
  store.dispatch('manageUser', {
    nome: data.value.nome,
    cpf: cpf.format(data.value.cpf),
    dataNascimento: data.value.dataNascimento
  })
  emits('close')
}

const closeModal = () => {
  ;(data.value.nome = ''), (data.value.cpf = ''), (data.value.dataNascimento = '')
  emits('close')
  store.dispatch('setUserId', '')
}
</script>

<template>
  <div class="modal">
    <div class="modal-content">
      <header>
        <h1>{{ `${!id ? 'Novo' : 'Editar'} Usuários` }}</h1>
      </header>
      <form class="modal-content-inputs" @submit="submitForm">
        <label for="">Nome</label>
        <input class="input" v-model="data.nome" required placeholder="Digite aqui o nome" />
        <label for="">Documento</label>
        <input class="input" v-model="data.cpf" placeholder="Digite aqui o CPF" />
        <label for="">Data de nascimento</label>
        <input class="input" v-model="data.dataNascimento" type="date" required />
        <footer>
          <button class="custom-button" type="submit">
            {{ !id ? 'Adicionar' : 'Editar' }}
          </button>
          <button @click="closeModal" class="custom-button" type="button">Fechar</button>
        </footer>
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 4px;
  width: 400px;
}

.modal-content-inputs {
  display: flex;
  flex-direction: column;
}

.input {
  border: 1px solid #3fb984;
  padding: 3px;
  border-radius: 5px;
  margin-right: 5px;
  width: auto;
  margin: 0.5rem 0;
}

.modal-content-inputs label {
  color: #3fb984;
}
header {
  margin-bottom: 2rem;
}
h1 {
  text-align: center;
  color: #3fb984;
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
footer {
  display: flex;
  justify-content: center;
}
</style>

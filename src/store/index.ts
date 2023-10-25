import { createStore } from 'vuex'
import { users } from './modules'
import { routes } from './modules'
import type { InterfaceBodyTableUser, InterfaceUser } from '@/types'

const store = createStore({
  state: {
    users,
    routes
  },
  getters: {
    formatUsers({ users }) {
      const bodyTable: InterfaceBodyTableUser[] = []
      users.map((user: InterfaceUser) => {
        const data: InterfaceBodyTableUser = {
          id: {
            children: user.id
          },
          nome: {
            children: user.nome
          },
          cpf: {
            children: user.cpf
          },
          dataNascimento: {
            children: user.dataNascimento
          }
        }
        console.log(data)
        bodyTable.push(data)
      })
      return bodyTable
    }
  },
  mutations: {},
  actions: {}
})

export default store

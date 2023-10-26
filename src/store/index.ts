import { createStore } from 'vuex'

import { routes } from './modules'
import { format } from 'date-fns'
import type { InterfaceUser } from '@/types'

import axios from 'axios'

const store = createStore({
  state: {
    users: [],
    filteredUsers: [],
    status: '',
    error: '',
    routes
  },
  getters: {
    formatUsers({ users }) {
      return users?.map((user: InterfaceUser) => ({
        ...user,
        dataNascimento: format(new Date(user.dataNascimento), 'dd/MM/yyyy')
      }))
    },
    getFilteredUsers: (state) => state.filteredUsers
  },
  mutations: {
    GET_USERS(state, users) {
      state.users = users
    },
    ERROR(state, error) {
      state.error = error
    },
    SET_STATUS(state, status) {
      state.status = status
    }
  },
  actions: {
    async getUsers({ commit }, userName) {
      try {
        const { data, statusText } = await axios.get('http://localhost:3000/pessoas')

        const users = userName
          ? data.filter((user: InterfaceUser) =>
              user.nome.toLowerCase().includes(userName.toLowerCase())
            )
          : data

        commit('GET_USERS', users)
        commit('SET_STATUS', statusText)
      } catch (error) {
        commit('ERROR', 'Ops! Ocorreu o seguinte erro: Não foi possivel retornar os usuários')
      }
    },
    async deleteUser({ commit }, id) {
      try {
        await axios.delete(`http://localhost:3000/pessoas/${id}`)
        commit('SET_STATUS', 'OK')
      } catch (error) {
        commit('ERROR', 'Ops! Ocorreu o seguinte erro: Não foi possivel deletar esse usuário')
      }
    }
  }
})

export default store

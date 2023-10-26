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
    async getUsers({ commit }) {
      try {
        const users = await axios.get('http://localhost:3000/pessoas')
        commit('GET_USERS', users.data)
        commit('SET_STATUS', users.statusText)
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
    },

    async filterUsers({ commit, state }, name) {
      let filteredUsers

      if (!name) {
        const users = await axios.get(`http://localhost:3000/pessoas/}`)
        filteredUsers = users.data
      } else {
        filteredUsers = state.users.filter((user: InterfaceUser) =>
          user.nome.toLowerCase().includes(name.toLowerCase())
        )
      }

      commit('GET_USERS', filteredUsers)
    }
  }
})

export default store

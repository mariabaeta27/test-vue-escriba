import { createStore } from 'vuex'

import { routes } from './modules'
import { format } from 'date-fns'
import type { InterfaceUser } from '@/types'

import { cpf } from 'cpf-cnpj-validator'

import axios from 'axios'

const store = createStore({
  state: {
    users: [],
    status: '',
    error: '',
    idUser: '',
    routes,
    user: ''
  },
  getters: {
    formatUsers({ users }) {
      return users?.map((user: InterfaceUser) => ({
        ...user,
        dataNascimento: format(new Date(user.dataNascimento), 'dd/MM/yyyy')
      }))
    },
    setUserId({ idUser }) {
      return idUser && idUser !== '' ? idUser : null
    },

    getUser({ user }) {
      return user
    }
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
    },

    GET_USER_ID(state, id) {
      state.idUser = id
    },
    GET_USER(state, data) {
      state.user = data
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
    },

    async getUser({ commit, state }) {
      try {
        const { data, statusText } = await axios.get(
          `http://localhost:3000/pessoas/${state.idUser}`
        )

        commit('GET_USER', data)
        commit('SET_STATUS', statusText)
      } catch (error) {
        commit('ERROR', 'Ops! Ocorreu o seguinte erro: Não foi possivel retornar os usuários')
      }
    },

    async manageUser({ commit, state }, user: InterfaceUser) {
      console.log(user)

      try {
        const documentIsValid = cpf.isValid(user.cpf)
        console.log(documentIsValid)
        if (!documentIsValid) {
          throw new Error('Ops! Ocorreu o seguinte erro: Cpf informado é inválido')
        }
        !state.idUser
          ? await axios.post('http://localhost:3000/pessoas/', user)
          : await axios.put(`http://localhost:3000/pessoas/${state.idUser}`, user)
      } catch (error) {
        console.log()
        commit('ERROR', error)
      }
      commit('GET_USER_ID', '')
    },

    setUserId({ commit }, id) {
      console.log(id)
      commit('GET_USER_ID', id)
    }
  }
})

export default store

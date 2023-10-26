import { createStore } from 'vuex'

import { routes } from './modules'

import type { InterfaceUser } from '@/types'

import { cpf } from 'cpf-cnpj-validator'

import axios from 'axios'

import moment from 'moment'

const store = createStore({
  state: {
    users: [],
    message: '',
    errorMessage: '',
    idUser: '',
    routes,
    user: ''
  },
  getters: {
    formatUsers({ users }) {
      return users?.map((user: InterfaceUser) => ({
        ...user,
        dataNascimento: moment(user.dataNascimento).format('DD/MM/YYYY')
      }))
    },
    setUserId({ idUser }) {
      return idUser && idUser !== '' ? idUser : null
    },

    getUser({ user }) {
      return user
    },
    getMessage({ message }) {
      return message
    },
    getErrorMessage({ errorMessage }) {
      return errorMessage
    }
  },
  mutations: {
    GET_USERS(state, users) {
      state.users = users
    },
    ERROR(state, error) {
      state.errorMessage = error
    },

    GET_USER_ID(state, id) {
      state.idUser = id
    },
    GET_USER(state, data) {
      state.user = data
    },
    MESSAGE(state, message) {
      state.message = message
    },
    clearErrorMessage(state) {
      state.errorMessage = ''
    },
    clearMessage(state) {
      state.message = ''
    }
  },
  actions: {
    async getUsers({ commit }, userName) {
      try {
        const { data } = await axios.get('http://localhost:3000/pessoas')

        const users = userName
          ? data.filter((user: InterfaceUser) =>
              user.nome.toLowerCase().includes(userName.toLowerCase())
            )
          : data

        commit('GET_USERS', users)
      } catch (error) {
        commit('ERROR', 'Ops! Ocorreu o seguinte erro: Não foi possivel retornar os usuários')
        commit('GET_USERS', null)
      }
    },

    async deleteUser({ commit }, id) {
      try {
        await axios.delete(`http://localhost:3000/pessoas/${id}`)

        const { data } = await axios.get('http://localhost:3000/pessoas')
        commit('GET_USERS', data)
        commit('MESSAGE', 'Sucesso! Usuário deletado.')
      } catch (error) {
        commit('ERROR', 'Ops! Ocorreu o seguinte erro: Não foi possivel deletar esse usuário')
      }
    },

    async getUser({ commit, state }) {
      try {
        const { data } = await axios.get(`http://localhost:3000/pessoas/${state.idUser}`)
        commit('GET_USER', data)
      } catch (error) {
        commit('ERROR', 'Ops! Ocorreu o seguinte erro: Não foi possivel retornar os usuários')
      }
    },

    async manageUser({ commit, state }, user: InterfaceUser) {
      try {
        const documentIsValid = cpf.isValid(user.cpf)
        if (!documentIsValid) {
          throw new Error('Ops! Ocorreu o seguinte erro: Cpf informado é inválido')
        }
        !state.idUser
          ? await axios.post('http://localhost:3000/pessoas/', user)
          : await axios.put(`http://localhost:3000/pessoas/${state.idUser}`, user)

        const { data } = await axios.get('http://localhost:3000/pessoas')

        commit('MESSAGE', !state.idUser ? 'Sucesso! Usuário criado.' : 'Sucesso! Usuário editado.')

        commit('GET_USERS', data)
      } catch (error) {
        commit('ERROR', error)
      }

      commit('GET_USER_ID', '')
    },

    setUserId({ commit }, id) {
      commit('GET_USER_ID', id)
    }
  }
})

export default store

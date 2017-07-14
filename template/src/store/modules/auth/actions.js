import api from '@/api'
import {LOGIN_SUCCESS, LOGIN_FAIL} from './types'

const actions = {
  login ({commit}, data) {
    return api.post('/login', data)
      .then((res) => {
        commit(LOGIN_SUCCESS, res)
      })
      .catch((res) => {
        commit(LOGIN_FAIL, res.response)
      })
  },
  getLoginUser ({commit}, data) {
    return api.get('/accounts', {params: {id: 'me'}})
      .then((res) => {
        commit(LOGIN_SUCCESS, res.data)
      })
      .catch((res) => {
        console.log(res)
      })
  }
}

export default actions

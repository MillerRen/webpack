import {LOGIN_SUCCESS, LOGIN_FAIL} from './types'

const mutations = {
  [LOGIN_SUCCESS] (state, data) {
    state.account = data
  },
  [LOGIN_FAIL] (state, data) {
    state.account = null
  }
}

export default mutations

export const TOAST = 'TOAST'
export const TOAST_DELAY = 3000

const toast = {
  state: {
    message: {}
  },
  getters: {
    message (state) {
      return state.message
    }
  },
  actions: {
    toast ({commit}, message) {
      commit(TOAST, message)
      var timer = setTimeout(() => {
        commit(TOAST, {})
        clearTimeout(timer)
      }, TOAST_DELAY)
    }
  },
  mutations: {
    [TOAST] (state, message) {
      state.message = message
    }
  }
}

export default toast

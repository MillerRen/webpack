import Vue from 'vue'

export const POPUP = 'POPUP'
export const CLOSE_POPUP = 'CLOSE_POPUP'

const popup = {
  state: {
    modalComponent: {}
  },
  getters: {
    modalComponent (state) {
      return state.modalComponent
    }
  },
  actions: {
    popup ({commit, state}, options) {
      if (state.modalComponent.component) return
      var promise = new Promise((resolve, reject) => {
        options.resolve = resolve
        options.reject = reject
      })
      commit(POPUP, options)
      return promise
    },
    closePopup ({commit}) {
      commit(CLOSE_POPUP)
    },
    registerModal ({commit}, options) {
      Vue.component(options.name) || Vue.component(options.name, options.component)
    }
  },
  mutations: {
    [POPUP] (state, options) {
      state.modalComponent = options
    },
    [CLOSE_POPUP] (state, options) {
      state.modalComponent.component = ''
    }
  }
}

export default popup

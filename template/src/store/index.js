import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
  },
  state: {
  },
  getters: {
  },
  actions: {
  },
  mutations: {
  },
  strict: false,
  plugins: debug ? [createLogger()] : []
})

export default store

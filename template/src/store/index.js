import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import auth from './modules/auth'
import toast from './modules/toast'
import popup from './modules/popup'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    auth,
    toast,
    popup
  },
  strict: false, // 方便表单操作
  plugins: debug ? [createLogger()] : []
})

export default store

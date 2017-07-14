// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueValidator from 'vee-validate'
import App from './App'
import router from './router'
import store from './store'
import './components'
import './directives'

Vue.config.productionTip = false
Vue.use(VueValidator, {})

/* eslint-disable no-new */
new Vue({
  el: 'app',
  router,
  store,
  components: { App }
})

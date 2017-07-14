import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
import Main from '@/layouts/Main'
import account from './account'
import auth from './auth'
import home from './home'
import work from './work'
import crm from './crm'
import apps from './apps'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        header: Header,
        default: Main,
        footer: Footer
      },
      children: [
        home,
        account,
        work,
        crm,
        apps
      ]
    },
    auth
  ]
})

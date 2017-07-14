<template>
  <nav class="navbar navbar-default navbar-static-top">
    <div class="container-fluid">
       <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav module-link">
        <router-link to="accounts" tag="li" active-class="active">
        <a>accounts</a>
        </router-link>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li v-if="!account">
          <router-link :to="{name: 'login'}">
            <a href="">login</a>
          </router-link>
        </li>
        <li class="dropdown" v-dropdown="'open'" v-if="account">
        <a>{{account.name}} <span class="caret"></span></a>
        <ul class="dropdown-menu">
            <li><a href="#">升级说明</a></li>
            <li><a href="#">profile</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">退出</a></li>
          </ul>
        </li>
      </ul>
      
    </div>
    </div>
  </nav>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'navbar',
  data () {
    return {
      dropdown: false
    }
  },
  computed: {
    ...mapGetters({
      'account': 'account'
    })
  },
  methods: {
    ...mapActions({
      getLoginUser: 'getLoginUser'
    })
  },
  created () {
    this.getLoginUser()
  }
}
</script>
<style scoped>
.container-fluid {
  padding-left: 20px;
  padding-right: 20px;
}
</style>

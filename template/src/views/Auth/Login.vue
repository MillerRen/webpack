<template>
  <div class="login">
    <div class="panel panel-default">
      <div class="panel-heading">登录</div>
      <div class="panel-body">
        <form class="form" @submit.prevent="onSubmit">
          <form-group :err="errors.first('name')">
            <input type="text" class="form-control" placeholder="用户名" name="name" v-model="form.name" v-validate="'required|email'">
          </form-group>
          <form-group :err="errors.first('password')">
            <input type="text" class="form-control" placeholder="密码" name="password" v-model="form.password" v-validate="'required'">
          </form-group>
          <div class="form-group">
            <button class="btn btn-primary btn-block">登录</button>
          </div>
        </form>
      </div>
      <div class="panel-footer"></div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  data () {
    return {
      form: {
        name: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      'account': 'account'
    })
  },
  methods: {
    ...mapActions({
      login: 'login',
      popup: 'popup'
    }),
    onSubmit (e) {
      this.login(this.form)
        .then((res) => {
          if (!this.account) return
          this.$router.push({name: 'home'})
        })
    }
  }
}
</script>
<style scoped>
.login {
  width: 30%;
  margin: 10% auto;
}
</style>

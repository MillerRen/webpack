<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
    <toastr></toastr>
    <modal></modal>
  </div>
</template>

<script>
import Toastr from '@/components/Toastr'
import Modal from '@/components/Modal'

export default {
  name: 'app',
  components: {
    Toastr,
    Modal
  }
}
</script>

<style lang="less">
@import '~animate.css/animate.css';
@import '~bootstrap/less/bootstrap.less';
@import './theme/default.less';
</style>

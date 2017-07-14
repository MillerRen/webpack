<template>
  <div class="toastr" v-show="message.statusText">
    <div class="message alert alert-warning">{{message.statusText}}</div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      'message': 'message'
    })
  }
}
</script>
<style>
.toastr {
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  text-align: center;
}
.message {
  display: inline-block;
}
</style>

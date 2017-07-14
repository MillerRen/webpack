<template>
  <main class="main">
    <transition name="fade" enter-active-class="fadeIn" leave-active-class="fadeOut" mode="out-in">
    <router-view class="animated"></router-view>
    </transition>
  </main>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
    }
  }
}
</script>

<style>

</style>

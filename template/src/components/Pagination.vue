<template>
<ul class="pagination">
  <li v-for="i in pages" :class="{active: i==page}"><a href="">{{i}}</a></li>
</ul>
</template>
<script>
export default {
  props: {
    total: {
      type: Number,
      default: 1
    },
    page: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    }
  },
  computed: {
    pages () {
      return Math.ceil(this.total / this.pageSize)
    }
  }
}
</script>
<style scoped>
</style>

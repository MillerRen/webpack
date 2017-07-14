<template>
  <div class="popup">
  {{options.content}}
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: Object
    }
  },
  methods: {
    getValue () {
      return true
    }
  }
}
</script>
<style></style>

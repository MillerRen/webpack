<template>
  <div class="progress" v-show="progress>0">
    <div class="progress-bar" :class="'progress-bar-'+type" :style="{width: progress+'%'}">
      <span class="progress-text" v-if="showText">{{progress+'%'}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'success'
    },
    progress: {
      type: Number,
      default: 0
    },
    showText: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
.progress-bar {
  min-width: 2em;
}
</style>

<template>
  <div class="form-group has-feedback" :class="{'has-error':err}">
    <slot></slot>
    <p class="help-block">{{err}}</p>
    <p class="has-error">
      <span class="glyphicon form-control-feedback" aria-hidden="true" :class="{'warning-sign': err}"></span>
    </p>
  </div>
</template>
<script>
export default {
  name: 'FormGroup',
  props: {
    err: {
      type: String
    }
  }
}
</script>
<style></style>

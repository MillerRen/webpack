<template>
  <div class="modal fade in" v-show="options.component">
    <div class="modal-backdrop fade in"></div>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header" v-show="options.title">
          <button type="button" class="close" aria-label="Close" @click="close(false)">
            <span aria-hidden="true">×</span>
          </button>
          <h4 class="modal-title">{{options.title}}</h4>
        </div>
        <div class="modal-body">
          <component :is="options.component" :options="options" @change="onChange" ref="component"></component>
        </div>
        <div class="modal-footer">
          <button class="btn btn-success" @click="close(true)">确定</button>
          <button class="btn btn-cancel" @click="close(false)">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import Popup from '@/components/Popup'
export default {
  name: 'Modal',
  components: {
    Popup
  },
  computed: {
    ...mapGetters({
      'options': 'modalComponent'
    })
  },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    ...mapActions({
      popup: 'popup',
      closePopup: 'closePopup'
    }),
    show () {
      this.showModal = true
    },
    close (result) {
      if (!result) {
        return this.closePopup() && this.options.reject()
      }
      if (!this.$refs.component.getValue) {
        return this.closePopup() && this.options.resolve()
      }
      var value = this.$refs.component.getValue()
      if (value) {
        return this.closePopup() && this.options.resolve(value)
      }
    },
    onChange (value) {
      console.log(value)
    }
  }
}
</script>
<style scoped>
.modal {
  display: block;
}
.modal-backdrop {
  z-index: -1;
}
</style>

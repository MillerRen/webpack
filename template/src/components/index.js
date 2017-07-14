import Vue from 'vue'
import FormGroup from '@/components/FormGroup'
const Uploader = r => require.ensure([], () => r(require('@/components/Uploader')))

Vue.component('FormGroup', FormGroup)
Vue.component('Uploader', Uploader)

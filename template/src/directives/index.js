import Vue from 'vue'
import {directive as clickaway} from 'vue-clickaway'
import dropdown from './dropdown'

Vue.directive('click-away', clickaway)
Vue.directive('dropdown', dropdown)

import axios from 'axios'
import store from '@/store'

export const BASE_URL = '/api'

axios.defaults.baseURL = BASE_URL

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  // Do something with response error
  store.dispatch('toast', error.response)
  return Promise.reject(error)
})

if (process.env.NODE_ENV !== 'production') {
  require('./mock')
}

export default axios

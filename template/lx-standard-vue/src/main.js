import Vue from 'vue'
import App from './App.vue'
import api from '@cores/api'
import router from '@cores/router'
import store from '@cores/store'
// import './assets/styles/sls/index.scss'

Vue.config.productionTip = false
Vue.use(api)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


const env = process.env.VUE_APP_ENV
const packageName = process.env.VUE_PACK_VERSION
if (env !== 'development') {
  console.log(`%c[package]-${packageName}`, 'color:#4e6ef2; font-weight: bold;')
}
console.log(`%c[ENV] ${env}`, 'color:#4e6ef2; font-weight: bold;')

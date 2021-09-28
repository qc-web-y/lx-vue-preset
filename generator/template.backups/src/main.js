import Vue from 'vue'
import App from './App.vue'
import api from '@cores/api'
import router from '@cores/router'
import store from '@cores/store'
import {log} from '@cores/utils/lxTools'

Vue.config.productionTip = false
Vue.use(api)
Vue.prototype.$log = log

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const env = process.env.VUE_APP_ENV
const packageName = process.env.VUE_PACK_VERSION
if (env !== 'development') {
  log.magenta(`[package]-${packageName}`)
}
log.magenta(`[env]-${env}`)

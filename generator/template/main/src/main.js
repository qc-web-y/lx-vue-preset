import Vue from 'vue'
import App from './App.vue'
import service from './service'
import router from './router'
import {log} from '@/utils/lx.utils.tools'

Vue.config.productionTip = false
Vue.use(service)
Vue.prototype.$log = log

new Vue({
  router,
  <%_ if (options.vuex) { _%>
  store,
  <%_ } _%>
  render: h => h(App)
}).$mount('#app')

const env = process.env.VUE_APP_ENV
const packageName = process.env.VUE_PACK_VERSION
if (env !== 'development') {
  log.magenta(`[package]-${packageName}`)
}
log.magenta(`[env]-${env}`)

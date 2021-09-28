import Vue from 'vue'
import App from './App.vue'
import model from './model'
import router from './router'
import store from './controller/store'
import {log} from '@/utils/lx.utils.tools'
<%_ if (options.cssPrecompile === 'sass') %>
import './assets/styles/sls/index.scss'
<%_ } %>

Vue.config.productionTip = false
Vue.use(model)
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

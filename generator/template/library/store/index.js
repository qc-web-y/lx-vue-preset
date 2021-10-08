/**
 * 【Lx.Cores】VUEX 使用
 * @author linxin
 * @since 2021.09.23
 * @suggest 不建议修改
 */
import Vue from 'vue'
import Vuex from 'vuex'
import lxModuleIn from '@/utils/lx.utils.import'

Vue.use(Vuex)

const isDev = process.env.VUE_APP_ENV === 'development'
const storeFiles = require.context('./modules', true, /_\S*\.js/)
const storeModules = lxModuleIn(storeFiles, 'object', 'underlineHead')

const store = new Vuex.Store({
  modules: storeModules
})

if (isDev) {
  console.groupCollapsed('%c[VUEX] --vm.$store--↓↓↓', 'color:#41b883;')

  console.groupCollapsed(`%cvm.$store.state`, 'color:#fe7300;')
  Object.keys(store.state).forEach(m => {
    const item = {}
    for (let i in store.state[m]) {
      item[i] = store.state[m][i]
    }
    console.log(m, item)
  })
  console.groupEnd()

  console.groupCollapsed('%cvm.$store.dispatch', 'color:#fe7300;')
  Object.keys(store._actions).forEach((s, i) => console.info(`${i + 1}: `, s))
  console.groupEnd()

  console.groupEnd()
}

export default store

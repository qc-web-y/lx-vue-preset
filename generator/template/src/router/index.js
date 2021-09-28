/**
 * 【Lx.Cores】路由生成
 * @author linxin
 * @since 2021.09.23
 * @suggest 可修改 LxRouter options配置项
 */
import LxRouter from './lx.cores.router'
import lxModuleIn from '@/utils/lx.utils.import'
<% if (options.authenMode !== 'no') { %>
import {sessions} from '@/utils/lx.utils.storage'
<% } %>

const routeFiles = require.context('./routes/', true, /_\S*\.js/)
const routeArry = lxModuleIn(routeFiles, 'array', 'underlineHead')


/**
 * @method LxRouter(options)
 * @todo 可根据实际业务场景进行配置
 * @summary 路由实例生成，可传options对象参数进行配置，详细options配置参数说明:
 * @param {String} env    系统环境，默认: process.env.VUE_APP_ENV
 * @param {String} mode   路由模式，默认: 'hash'
 * @param {String} base   路由base，默认: process.env.BASE_URL || '/'
 * @param {Array}  routes 路由routes列表，默认: []
 * @param {Function} scrollBehavior 路由scrollBehavior，默认: () => ({y: 0})
 * @param {Function} beforeEach     路由beforeEach守卫
 * @param {Function} afterEach      路由afterEach守卫
 *
 * @const {Object}  router 需要添加至VUE实例化配置的路由对象
 * @const {Boolean} isDev  是否开发环境
 */
const {router, isDev} = new LxRouter({
  routes: routeArry,
  <% if (options.authenMode !== 'no') { %>
  beforeEach (to, from, next) {
    if (to.meta.isAuthen) {
      const authenField = process.env.VUE_AXIOS_AUTHEN
      const authenToken = sessions.get(authenField)
      if (!authenToken) return next('/login')
    }
  }
  <% } %>
})


if (isDev) {
  console.groupCollapsed('%c[Router] --vm.$router--↓↓↓', 'color:#41b883;')
  const routeObj = routeArry.reduce((obj, s) => {
    obj[s.name] = {
      path: s.path,
      meta: JSON.stringify(s.meta || {})
    }
    return obj
  }, {})
  console.table(routeObj)
  console.groupEnd()
}

export default router

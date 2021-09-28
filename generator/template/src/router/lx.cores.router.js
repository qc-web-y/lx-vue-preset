/**
 * 【Lx.Cores】vue-router 路由封装
 * @author linxin
 * @since 2021.09.23
 * @suggest 尽量不修改源代码，如需配置可通过 './index.js' 进行修改
 */

import Vue from 'vue'
import Router from 'vue-router'
import {isFunction} from '@/utils/lx.utils.tools'

const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}
Vue.use(Router)

const defaultOptions = {
  env: process.env.VUE_APP_ENV,
  mode: 'hash',
  base: process.env.BASE_URL || '/',
  scrollBehavior: () => ({y: 0}),
  beforeEach: null,
  afterEach: null,
  routes: []
}

export default class LxRouter {
  constructor (options) {
    this.options = Object.assign({}, defaultOptions, options)
    this.isDev = this.options.env === 'development'
    this.router

    this.#initRouter.call(this)
  }

  #initRouter () {
    const {mode, base, scrollBehavior, beforeEach, afterEach, routes} = this.options
    const router = new Router({
      mode,
      base,
      scrollBehavior,
      routes
    })

    router.beforeEach((to, from, next) => {
      LxRouter.beforeEach({to, from, next}, beforeEach)
    })
    router.afterEach((to, from, next) => {
      LxRouter.afterEach({to, from, next}, afterEach)
    })

    this.router = router
  }

  static beforeEach ({to, from, next}, beforeEach) {
    // 拦截上一页面所有axios请求
    window.__axiosPromiseArr.forEach((ele, index) => {
      ele.cancel()
      window.__axiosPromiseArr.splice(index, 1)
    })

    // 关闭上一页面所有请求loading
    const loadingMap = window.__axiosLxLoading
    if (loadingMap.size) {
      for (let k of loadingMap.keys()) {
        const loading = loadingMap.get(k)
        if (!loading) return
        loading.close()
        loadingMap.delete(k)
      }
    }

    isFunction(beforeEach) && beforeEach(to, from, next)

    return next()
  }

  static afterEach ({to, from, next}, afterEach) {
    isFunction(afterEach) && afterEach(to, from, next)
  }
}

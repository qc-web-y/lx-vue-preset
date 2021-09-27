/**
 * 【Lx.Cores】axios 请求封装
 * @author linxin
 * @since 2021.09.23
 * @suggest 不建议修改，如需配置可通过 './index.js' 进行修改
 */

import axios from 'axios'
import lxLoading from '@cores/utils/lxLoading'
import lxModuleIn from '@cores/utils/lxModuleIn'
import {isFunction} from '@cores/utils/lxTools'

const defaultOptions = {
  env: process.env.VUE_APP_ENV,
  baseUrl: process.env.BASE_URL || '/',
  timeout: 30000,
  loading: true,
  request: null,
  response: null,
  onErrorTips: null
}

export class LxAxios {
  constructor(options) {
    this.options = Object.assign({}, defaultOptions, options)
    this.isDev = this.options.env === 'development'
    this.service
    window.__axiosLxLoading = new Map()
    window.__axiosPromiseArr = []

    this.#initRequest.call(this)
  }

  #initRequest () {
    const opts = this.options

    const service = axios.create({
      baseURL: opts.baseUrl,
      timeout: opts.timeout
    })

    service.interceptors.request.use(config => {
      // 处理请求URL
      const {correctUrl, baseURL} = LxAxios.getRequestUrl(config.url)
      if(correctUrl) config.url = correctUrl
      if(baseURL) config.baseURL = baseURL

      // 开启请求loading
      if(opts.loading && config.loading !== false) {
        const loading = lxLoading.open()
        window.__axiosLxLoading.set(config.url, loading)
      }

      // 为路由跳转拦截上一页面请求做准备
      config.cancelToken = new axios.CancelToken(cancel => window.__axiosPromiseArr.push({cancel}))

      // 私有独立处理request config
      if (isFunction(opts.request)) {
        config = Object.assign({}, config,opts.request(config))
      }

      return config
    }, error => {
      console.error('axios error', error)
      return error
    })

    service.interceptors.response.use(({config, status, data}) => {
      // 关闭请求loading
      LxAxios.onCloseAxiosLoading(config.url)

      // 私有独立处理response data
      if (isFunction(opts.response)) {
        data = Object.assign({}, data, opts.response(data))
      }

      return data

    }, error => {

      let requestUrl
      if(error && error.response) {
        // 获取请求url，以备loading关闭使用
        const config = error.response.config
        if(config) requestUrl = config.url

        // 错误处理机制
        const status = error.response.status
        if(status && isFunction(opts.onErrorTips)) {
          opts.onErrorTips(status, error)
        }
      }

      // 关闭请求loading
      LxAxios.onCloseAxiosLoading(requestUrl)

      return error
    })

    this.service = service
  }

  static getRequestUrl (url) {
    let correctUrl, baseURL
    const privatePrefix = (url.match(/^{([A-z]|[0-9])+}/) || [null])[0]
    if(privatePrefix) {
      correctUrl = url.replace(privatePrefix, '')
      baseURL = '/' + privatePrefix.replace(/({|})/g,'')
    }
    return {correctUrl, baseURL}
  }

  static onCloseAxiosLoading (url) {
    const loadingMap = window.__axiosLxLoading
    if(loadingMap.size === 0) return

    function closeItem(url){
      const loading = loadingMap.get(url)
      if(!loading) return
      loading.close()
      loadingMap.delete(url)
      if (LxAxios.isDev) console.log('\x1B[32m%s\x1B[39m', `[${url}]-loading已关闭！`)
    }

    function closeAll(){
      for (let url of loadingMap.keys()) {
        closeItem(url)
      }
    }

    url ? closeItem(url) : closeAll()
  }
}

export function createApi (apiFiles, request) {
  const apiList = lxModuleIn(apiFiles, 'object', 'underlineHead')
  const apiRequest = {}

  Object.keys(apiList).forEach(mItem => {
    const m = apiList[mItem]
    apiRequest[mItem] = {}

    Object.keys(m).map(aItem => {
      const aDefine = m[aItem]
      apiRequest[mItem][aItem] = function (data) {
        const method = aDefine.method.toLowerCase()
        const aCurrent = Object.assign({}, aDefine, {
          method,
          params: method === 'get' && data,
          data: method === 'post' && data
        })
        return request(aCurrent)
      }
    })
  })

  return {api: apiRequest, list: apiList}
}

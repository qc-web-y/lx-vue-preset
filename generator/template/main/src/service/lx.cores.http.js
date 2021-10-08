/**
 * 【Lx.Cores】axios 请求封装
 * @author linxin
 * @since 2021.09.23
 * @suggest 不建议修改，如需配置可通过 './index.js' 进行修改
 */

import axios from 'axios'
import lxLoading from '@/utils/lx.utils.loading'
import lxModuleIn from '@/utils/lx.utils.import'
import {isFunction, log} from '@/utils/lx.utils.tools'
<%_ if (options.authenMode !== 'no') { _%>
import {sessions} from '@/utils/lx.utils.storage'
<%_ } _%>

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
  constructor (options) {
    this.options = Object.assign({}, defaultOptions, options)
    this.isDev = this.options.env === 'development'
    this.service
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
      const optionItem = Object.assign({}, opts, config)

      // 处理请求URL
      const {correctUrl, baseURL} = LxAxios.getRequestUrl(optionItem.url)
      if (correctUrl) optionItem.url = correctUrl
      if (baseURL) optionItem.baseURL = baseURL

      // 开启请求loading
      if (optionItem.loading !== false) lxLoading.open()

      // 为路由跳转拦截上一页面请求做准备
      optionItem.cancelToken = new axios.CancelToken(cancel => window.__axiosPromiseArr.push({cancel}))

      <%_ if (options.authenMode === 'headers') { _%>
      // 添加请求头鉴权字段
      const authenField = process.env.VUE_AXIOS_AUTHEN
      optionItem.headers[authenField] = sessions.get(authenField)
      <%_ } _%>

      <%_ if (options.authenMode === 'params') { _%>
      // 添加请求传参鉴权字段
      const authenField = process.env.VUE_AXIOS_AUTHEN
      const arg = (function (method) {
        switch(method) {
          case 'get': return 'params'
          case 'post': return 'data'
        }
      })(optionItem.method)
      optionItem[arg][authenField] = sessions.get(authenField)
      <%_ } _%>

      // 私有独立处理request config
      if (isFunction(opts.request)) {
        optionItem = Object.assign({}, optionItem, opts.request(optionItem))
      }

      return optionItem
    }, error => {
      console.error('axios error', error)
      return error
    })

    service.interceptors.response.use(({config, status, data}) => {
      const optionItem = Object.assign({}, opts, config)

      // 关闭请求loading
      if(optionItem.loading !== false) loading.close()

      // 私有独立处理response data
      if (isFunction(opts.response)) {
        data = Object.assign({}, data, opts.response(data))
      }

      console.log('status', status)

      return data

    }, error => {
      if (error && error.response) {
        // 关闭请求loading
        if(error.response.config) {
          const optionItem = Object.assign({}, opts, error.response.config)
          if(optionItem.loading !== false) loading.close()
        }

        // 错误处理机制
        const status = error.response.status
        if (status && isFunction(opts.onErrorTips)) {
          opts.onErrorTips(status, error)
        }
      } else {
        loading.closeAll()
      }

      return error
    })

    this.service = service
  }

  static getRequestUrl (url) {
    let baseURL, correctUrl
    const privatePrefix = (url.match(/^{([A-z]|[0-9])+}/) || [null])[0]
    if (privatePrefix) {
      correctUrl = url.replace(privatePrefix, '')
      baseURL = '/' + privatePrefix.replace(/({|})/g, '')
    }
    return {correctUrl, baseURL}
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

/**
 * 【Lx.Cores】API 生成
 * @author linxin
 * @since 2021.09.23
 * @suggest 可修改 LxAxios options配置项
 */
import {LxAxios, createApi} from '@cores/api/LxApi'
import {onHttpErrTips} from '@app'

export default {
  install: function (Vue) {
    /**
     * @method LxAxios(options)
     * @todo 可根据实际业务场景进行配置
     * @summary 创建axios service，可传options对象参数进行配置，详细options配置参数说明:
     * @param {String}   env         系统环境，默认: process.env.VUE_APP_ENV
     * @param {String}   baseUrl     基础URL，默认: '/'
     * @param {Number}   timeout     请求超时，默认: 30000
     * @param {Boolean}  loading     自动开关请求loading，默认: true
     * @param {Function} request     request config配置修改，接收参数原始配置对象，需返回修改后的配置对象
     * @param {Function} response    response data数据修改，接收参数原始响应数据，需返回修改后的响应数据
     * @param {Function} onErrorTips response error提示处理机制
     *
     * @const {Object}  service axios请求服务实例对象
     * @const {Boolean} isDev   是否开发环境
     */
    const {service, isDev} = new LxAxios({
      onErrorTips: onHttpErrTips
    })


    const apiFiles = require.context('../../api/', true, /_\S*\.js/)
    const {api, list} = createApi(apiFiles,service)

    Vue.prototype.$api = api

    if(isDev) {
      console.groupCollapsed('%c[API] --vm.$api--↓↓↓', 'color:#41b883;')
      for(let module in list) {
        console.info(`%cvm.$api.${module}`, 'color:#41b883;')
        console.table(list[module])
      }
      console.groupEnd()
    }
  }
}

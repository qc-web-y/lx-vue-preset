import Vue from 'vue'
import loadingVue from './index.vue'

const LoadingConstructor = Vue.extend(loadingVue)
let instance

const initInstance = () => {
  const instance = new LoadingConstructor({
    el: document.createElement('div')
  })
  document.body.appendChild(instance.$el)
  return instance
}

const Loading = {
  open: function () {
    if (!instance) instance = initInstance()
    instance.open()
    return instance
  }
}

export default Loading

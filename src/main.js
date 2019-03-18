import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import './styles/normalize.css'


import ElementUI from 'element-ui'   // element-ui
import 'element-ui/lib/theme-chalk/index.css' // element-ui样式
Vue.use(ElementUI)  // 挂载element-ui

import './icons/iconfont.css'  //引入iconfont

import './styles/index.less'  //公共样式

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

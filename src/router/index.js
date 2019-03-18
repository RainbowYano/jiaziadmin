import Vue from 'vue'
import Router from 'vue-router'
import layout from '../views/layout/index.vue'

import { Message } from 'element-ui'

Vue.use(Router)

const constantRoutes = [{
  path: '/login',
  name:'login',
  component: () => import('@/views/login/index.vue')
},{
  path:'/',
  name:"homepage",
  component:layout
}]

const router =  new Router({
  // mode: 'history', //后端支持可开
  // base: process.env.BASE_URL,
  routes: constantRoutes,
  scrollBehavior: () => ({
    y: 0
  }),

})



import {getToken} from '../utils/auth.js'  //从cookie中获取token
import store from '../store/index.js'

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  if(getToken()) { 
    // console.log(2222)                           // 本地有token
    if(to.path == '/login') {                 // 本地有token，且要去往login页面，则直接跳转到首页
      next({ path: '/' })
    } else {                                  // 本地有token，且要去往login以外，则判断是否已经拉取用户信息，
      if(!store.getters.permission){  
        console.log(111)               //没有获取用户信息，去拉取
        store.dispatch('GetUserInfo').then((newRoutes) =>{
          console.log(newRoutes)
          router.addRoutes(newRoutes)
          next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 
        }).catch(err => {
          store.dispatch('FedLogOut').then(() => {
            Message.error(err)
            next({ path: '/' })
          })
        })
      } else {                                           //已经拉取用户信息，直接下一步
        next()
      }
    }

  } else {                                  //本地没token
    if (whiteList.indexOf(to.path) !== -1) { // 在登录的白名单中
      next()
    } else {
      next('/login');
    }
  }

})

export default router

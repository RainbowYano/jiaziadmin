// import router from './router/index.js'
// import store from './store/index.js'
// import {getToken} from './utils/auth.js'  //从cookie中获取token

// const whiteList = ['/login'] // 不重定向白名单
// router.beforeEach((to, from, next) => {
//   // console.log(3333)
//   if(getToken()) { 
//     // console.log(2222)                           // 本地有token
//     if(to.path == '/login') {                 // 本地有token，且要去往login页面，则直接跳转到首页
//       next({ path: '/' })
//     } else {                                  // 本地有token，且要去往login以外，则判断是否已经拉取用户信息，
//       if(!store.getters.permission){  
//         console.log(111)                //没有获取用户信息，去拉取
//         store.dispatch('GetUserInfo').then(() =>{

//         })
//       } else {                                           //已经拉取用户信息，直接下一步
//         next()
//       }
//     }

//   } else {                                  //本地没token
//     if (whiteList.indexOf(to.path) !== -1) { // 在登录的白名单中
//       next()
//     } else {
//       next('/login');
//     }
//   }

// })


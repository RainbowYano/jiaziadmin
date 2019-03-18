import {getToken, setToken, removeToken} from '@/utils/auth'
import {login,getUserInfo} from '@/api/login'
import {formatRoutesByComponentPath} from '@/utils/route.js'
const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    permission: false,       // false:路由表没拉取；true：路由表已经获取
    permissionRouter:''

  },
  mutations: {
    SET_TOKEN: (state,token) => state.token = token,
    SET_NAME: (state,name) => state.name = name,
    SET_AVAATAR: (state,avatar) => state.avatar = avatar,
    SET_PERMISSION: (state,permission) => state.permission = permission,
    SET_PERMISSIONROUTER: (state,permissionRouter) => state.permissionRouter = permissionRouter

  },
  actions: {
    // 登陆
    Login({commit,state},userInfo){
      const username = userInfo.username.trim()
      return new Promise((resolve,reject) => {
        login(username,userInfo.password).then(res => {
          var resData = res.data.data
          // console.log(res.data.data)
          setToken(resData.token)
          commit('SET_TOKEN',resData.token)
          resolve()
        })
      })
    },


    // 拉取用户信息
    GetUserInfo({commit,state}){
      return new Promise((resolve,reject) => {
        getUserInfo().then(res => {
          const newRoutes = res.data
          formatRoutesByComponentPath(newRoutes)
          // console.log(newRoutes)
          commit('SET_PERMISSION',true)
          commit('SET_PERMISSIONROUTER',newRoutes)
          resolve(newRoutes)
        }).catch(error => {
          reject(error)
        })
      })
    },


    //前端退出
    FedLogOut({commit,state}){
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }

  }
}

export default user

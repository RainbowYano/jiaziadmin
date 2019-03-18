import request from '../utils/request'

// 登录
export function login(username, password) {
  return request({
    url: '/login',
    method:'get',
    params: {
      username,
      password
    }
  })
}
//获取左侧菜单栏
export function getMenu() {
  return request({
    url: '/menu',
    method:'get'
  })
}

// 获取用户信息及路由表
export function getUserInfo() {
  return request({
    url: '/routes',
    method:'get'
  })
}

import Cookie from 'js-cookie'
const TokenKey = 'jiazi_admin_token'

export function getToken(){
  return Cookie.get(TokenKey)
}

export function setToken(token){
  return Cookie.set(TokenKey,token)
}

export function removeToken(){
  return Cookie.remove(TokenKey)
}



const getters = {
    token:state => state.user.token,
    name:state => state.user.name,
    avatar:state => state.user.avatar,
    permission:state => state.user.permission,
}

export default getters

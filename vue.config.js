module.exports = {
  devServer: {
    proxy: { // proxy在这里是vue-cli3的写法，在vue-cli2中为proxyTable
      '^/api': {
        target: 'https://easy-mock.com/mock/5c8cc312a76c216c5b477c3e/jiazi',
        secure: false, // 若接口地址为https需配置这个
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}

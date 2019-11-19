// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import iView from 'iview'
import './assets/iconfont/iconfont.css'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.timeout = 5000

Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(iView)

// // http request 请求拦截器，有token值则配置上token值
// axios.interceptors.request.use(
//   config => {
//       if (token) { // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
//           config.headers.Authorization = token
//       }
//       return config
//   },
//   err => {
//       return Promise.reject(err)
//   })

// // http response 服务器响应拦截器，这里拦截401错误，并重新跳入登录页重新获取token
// axios.interceptors.response.use(
//   response => {
//       return response
//   },
//   error => {
//       if (error.response) {
//           switch (error.response.status) {
//               case 401:
//                   // 这里写清除token的代码
//                   router.replace({
//                       path: 'login',
//                       query: {redirect: router.currentRoute.fullPath} // 登录成功后跳入浏览的当前页面
//                   })
//           }
//       }
//       return Promise.reject(error.response.data)
//   })

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  render: h => h(App)
})

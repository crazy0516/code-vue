// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import Moment from 'moment'
import '../config/rem'
// import Rem from 'rem'
// Vue.use(Rem)

Vue.config.productionTip = false

// 使用mint-ui引用全部的组件
import Mint from 'mint-ui'
Vue.use(Mint)

import 'mint-ui/lib/style.css'

// 全局的css样式
import '../static/css/global.css'

// 配置公共的 url
Axios.defaults.baseURL = 'https://elm.cangdu.org'

// Axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8'
// Axios.defaults.baseURL = '/api'  //反向代理关键代码

// 配置 axios
Vue.prototype.$axios = Axios;

// 注册全局的导航栏组件
import Navbar from '@/components/Common/Navbar'
Vue.component(Navbar.name, Navbar)

// 自定义 moment 全局过滤器
Vue.filter('serverTime', (data, formatStr) => {
  // moment.js的语法
  return Moment(data).format(formatStr);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import axios from 'axios'
import App from './App'
import router from './router/index'
import store from './vuex/index'

//引入 滑动加载插件
// import MeScroll from './assets/js/mescroll.m.js'

Vue.prototype.$http = axios

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')

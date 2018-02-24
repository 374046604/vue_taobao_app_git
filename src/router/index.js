import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import download from '@/components/download'
import tianmao from '@/components/tianmao'
import login from '@/components/login'
import test from '@/components/test'
import bannerList from '@/components/bannerList'
import goodMores from '@/components/goodMores'
import myTaobao from '@/components/myTaobao'
import selectObj from '@/components/selectObj'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/download',
      name: 'download',
      component: download
    },
    {
      path: '/goodMores',
      name: 'goodMores',
      component: goodMores
    },
    {
      path: '/myTaobao',
      name: 'myTaobao',
      component: myTaobao
    },
    {
      path: '/tianmao',
      name: 'tianmao',
      component: tianmao
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/bannerList',
      name: 'bannerList',
      component: bannerList
    },
    {
      path: '/selectObj',
      name: 'selectObj',
      component: selectObj
    },

  ]
})

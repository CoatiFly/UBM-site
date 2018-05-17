import Vue from 'vue'
import Router from 'vue-router'

import Index from '../pages/index' // 首页
import Contact from '../pages/contact' // 关于我们
import Press from '../pages/press' // 新闻
import Products from '../pages/products' // 展品列表
import Visit from '../pages/visit' // 暂时没确定
import Exhibitiors from '../pages/exhibitiors' // 展商名单
import Speakers from '../pages/speakers' // 演讲嘉宾
import Sessions from '../pages/sessions' // 会议日程
import Travel from '../pages/travel' // 商旅服务
import Supporters from '../pages/supporters' // 支持机构

Vue.use(Router)

let router = new Router({
  routes: [{
      path: '/',
      redirect: '/index' // 默认路由重定向
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/press',
      name: 'Press',
      component: Press
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/visit',
      name: 'Visit',
      component: Visit
    },
    {
      path: '/exhibitiors',
      name: 'Exhibitiors',
      component: Exhibitiors
    },
    {
      path: '/speakers',
      name: 'Speakers',
      component: Speakers
    },
    {
      path: '/sessions',
      name: 'Sessions',
      component: Sessions
    },
    {
      path: '/travel',
      name: 'Travel',
      component: Travel
    },
    {
      path: '/supporters',
      name: 'Supporters',
      component: Supporters
    }
  ]
})


export default router

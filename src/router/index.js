import Vue from 'vue'
import Router from 'vue-router'

import Index from '../pages/index' // 首页
import Contact from '../pages/contact' // 关于我们
import Press from '../pages/press' // 新闻
import Products from '../pages/products' // 展品列表
// import vbox from '../pages/vbox' // v盒监控

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
    }
  ]
})


export default router

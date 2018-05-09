import Vue from 'vue'
import Router from 'vue-router'

import Index from '../pages/index' // 登录页面
// import index from '../pages/index' // 主页
// import warning from '../pages/warning' // 故障&警告
// import process from '../pages/process' // 流程监控
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
    }
  ]
})


export default router

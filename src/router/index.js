import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index.js';

import Index from '../pages/index' // 首页
import Contact from '../pages/contact' // 关于我们
import Press from '../pages/press' // 新闻列表
import Products from '../pages/products' // 展品列表
import Exhibitiors from '../pages/exhibitiors' // 展商名单
import Speakers from '../pages/speakers' // 演讲嘉宾
import Sessions from '../pages/sessions' // 会议日程
import Travel from '../pages/travel' // 商旅服务
import Awards from '../pages/awards' // 奖项展示
import Supporters from '../pages/supporters' // 支持机构
import Stand from '../pages/stand' // 展位预定
import Register from '../pages/register' // 注册页面
import News from '../pages/news' // 新闻详情
import Gallery from '../pages/gallery' // 相册
import Plan from '../pages/plan' // 展位图
import Sponsor from '../pages/sponsor' // 成为赞助商
import Visit from '../pages/visit' // 为何参观
import Exhibit from '../pages/exhibit' // 为何参展

Vue.use(Router)

let router = new Router({
    mode: 'hash', // "hash" | "history" 
    routes: [{
            path: '/',
            redirect: '/index' // 默认路由重定向
        },
        {
            path: '/index',
            name: 'Index',
            component: Index,
            meta: {
                zhTitle: '首页',
                enTitle: 'Index'
            }
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact,
            meta: {
                zhTitle: '联系我们',
                enTitle: 'Contact'
            }
        },
        {
            path: '/press',
            name: 'Press',
            component: Press,
            meta: {
                zhTitle: '新闻列表',
                enTitle: 'Press'
            }            
        },
        {
            path: '/products',
            name: 'Products',
            component: Products,
            meta: {
                zhTitle: '展品列表',
                enTitle: 'Products'
            }
        },
        {
            path: '/exhibitiors',
            name: 'Exhibitiors',
            component: Exhibitiors,
            meta: {
                zhTitle: '展商列表',
                enTitle: 'Exhibitiors'
            }
        },
        {
            path: '/speakers',
            name: 'Speakers',
            component: Speakers,
            meta: {
                zhTitle: '演讲嘉宾',
                enTitle: 'Speakers'
            }
        },
        {
            path: '/sessions',
            name: 'Sessions',
            component: Sessions,
            meta: {
                zhTitle: '会议日程',
                enTitle: 'Sessions'
            }
        },
        {
            path: '/travel',
            name: 'Travel',
            component: Travel,
            meta: {
                zhTitle: '商旅服务',
                enTitle: 'Travel'
            }
        },
        {
            path: '/supporters',
            name: 'Supporters',
            component: Supporters,
            meta: {
                zhTitle: '支持机构',
                enTitle: 'Supporters'
            } 
        },
        {
            path: '/stand',
            name: 'Stand',
            component: Stand,
            meta: {
                zhTitle: '展位预定',
                enTitle: 'Stand'
            }     
        },
        {
            path: '/awards',
            name: 'Awards',
            component: Awards,
            meta: {
                zhTitle: '荣誉',
                enTitle: 'Awards'
            }   
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
            meta: {
                zhTitle: '观众预登记',
                enTitle: 'Register'
            }
        },
        {
            path: '/news/:newsId',
            name: 'News',
            component: News,
            meta: {
                zhTitle: '新闻详情',
                enTitle: 'News'
            }
        },
        {
            path: '/gallery',
            name: 'Gallery',
            component: Gallery,
            meta: {
                zhTitle: '精彩瞬间',
                enTitle: 'Gallery'
            } 
        },
        {
            path: '/plan',
            name: 'Plan',
            component: Plan
        },
        {
            path: '/sponsor',
            name: 'Sponsor',
            component: Sponsor
        },
        {
            path: '/visit',
            name: 'Visit',
            component: Visit,
            meta: {
                zhTitle: '为何参观',
                enTitle: 'Visit'
            } 
        },
        {
            path: '/exhibit',
            name: 'Exhibit',
            component: Exhibit,
            meta: {
                zhTitle: '为何参展',
                enTitle: 'Exhibit'
            } 
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        return { x: 0, y: 0 }
    }
})
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    let language = store.state.language;
    let title = '';
    if (to.meta) {
        language == 'en' ?  title = to.meta.enTitle + " | SIGN CHINA 2018 | September 19-21 | Shanghai, China"
        : title = to.meta.zhTitle + " | 第十六届上海国际广告标识展 SIGN CHINA 2018";
        document.title = title ;
    }
    next();
})

export default router
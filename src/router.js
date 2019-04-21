import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contactus from './views/contactUs/contactUs.vue'
import newHtml from './views/newHtml/index.vue'
import news from './views/news/news.vue'
import newDetail from './views/news/newDetail.vue'
import enlist from './views/enlist/enlist.vue'
import condition from './views/condition/condition.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: newHtml
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/contactus',
            component: Contactus
        },
        {
            path: '/newhtml',
            component: newHtml
        },
        {
            path: '/news',
            component: news,
            // children: [
            //     {
            //         path: 'newsDetail',
            //         name: 'newDetail',
            //         component: newDetail
            //     }
            // ]
        },
        {
            path: '/newsDetails',
            name: 'newDetail',
            component: newDetail
        },
        {
            path: '/enlist',
            name: 'enlist',
            component: enlist
        },
        {
            // 学院概况
            path: '/condition',
            name: 'condition',
            component: condition
        }
    ]
})

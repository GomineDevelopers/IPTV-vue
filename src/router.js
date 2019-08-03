import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BackHome from './views/BackHome.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/backhome',
      name: 'backhome',
      component: BackHome,
      children: [
        //为后台数据报告页添加二级路由
        { path: '/backhome/datatotal', name: "datatotal", component: () => import('@/views/backviews/DataTotal') },
        { path: '/backhome/userlifecycle', name: "userlifecycle", component: () => import('@/views/backviews/UserLifecycle') },
        { path: '/backhome/userviewingbehavior', name: "userviewingbehavior", component: () => import('@/views/backviews/UserViewingBehavior') },
        { path: '/backhome/periodicreport', name: "periodicreport", component: () => import('@/views/backviews/PeriodicReport') },
        { path: '/backhome/epg', name: "epg", component: () => import('@/views/backviews/EPG') },
        { path: '/backhome/valueaddedtotal', name: "valueaddedtotal", component: () => import('@/views/backviews/valueadded/ValueAddedTotal') },
        { path: '/backhome/vip', name: "vip", component: () => import('@/views/backviews/valueadded/VIP') },
        { path: '/backhome/hottopicscontrol', name: "hottopicscontrol", component: () => import('@/views/backviews/HotTopicsControl') },
        { path: '/backhome/dataintegrity', name: "dataintegrity", component: () => import('@/views/backviews/dataaudit/DataIntegrity') },
        { path: '/backhome/abnormalvalue', name: "abnormalvalue", component: () => import('@/views/backviews/dataaudit/AbnormalValue') },
        { path: '/backhome/datatrend', name: "datatrend", component: () => import('@/views/backviews/dataaudit/DataTrend') },
        { path: '/backhome/programsearching', name: "programsearching", component: () => import('@/views/backviews/ProgramSearching') },
        { path: '/', redirect: '/backhome/datatotal' }, //二级路由默认首页为数据总览页
      ]
    }
  ]
})
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BackHome from './views/BackHome.vue'
import MyTest from './views/MyTest.vue'

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
      // name: 'backhome',
      component: BackHome,
      children: [
        //为后台数据报告页添加二级路由
        { path: '/backhome/datatotal', name: "datatotal", component: () => import('@/views/backviews/DataTotal') },
        { path: '/backhome/userlifecycle', name: "userlifecycle", component: () => import('@/views/backviews/UserLifecycle') },
        { path: '/backhome/userviewingbehavior', name: "userviewingbehavior", component: () => import('@/views/backviews/UserViewingBehavior') },
        {
          path: '/backhome/periodicreport',
          //name: "periodicreport",
          component: () => import('@/views/backviews/PeriodicReport'),
          children: [
            { path: '/backhome/periodicreport/G_TVUserActiveDayReport', name: "G_TVUserActiveDayReport", component: () => import('@/views/backviews/periodicreport/G_TVUserActiveDayReport') },
            { path: '/backhome/periodicreport/G_TVUserViewingDayReport', name: "G_TVUserViewingDayReport", component: () => import('@/views/backviews/periodicreport/G_TVUserViewingDayReport') },
            { path: '/backhome/periodicreport/MarketOperationalWeekReport', name: "MarketOperationalWeekReport", component: () => import('@/views/backviews/periodicreport/MarketOperationalWeekReport') },
            { path: '/backhome/periodicreport/OperationalWeekReport', name: "OperationalWeekReport", component: () => import('@/views/backviews/periodicreport/OperationalWeekReport') },
            { path: '/backhome/periodicreport/G_TVUserViewingWeekReport', name: "G_TUserViewingWeekReport", component: () => import('@/views/backviews/periodicreport/G_TVUserViewingWeekReport') },
            { path: '/backhome/periodicreport/VIPAddMonthReport', name: "VIPAddMonthReport", component: () => import('@/views/backviews/periodicreport/VIPAddMonthReport') },
            { path: '/backhome/periodicreport/G_TVUserViewingMonthReport', name: "G_TVUserViewingMonthReport", component: () => import('@/views/backviews/periodicreport/G_TVUserViewingMonthReport') },
            { path: '/backhome/periodicreport/SpecialZoneReport', name: "SpecialZoneReport", component: () => import('@/views/backviews/periodicreport/SpecialZoneReport') },
            { path: '/', redirect: '/backhome/periodicreport/SpecialZoneReport' }, //定期报告下三级路由默认首页
          ]
        },
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
    },
    {
      path: '/mytest',
      name: 'mytest',
      component: MyTest
    },
  ]
})
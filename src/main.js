import Vue from 'vue'
import App from './App.vue'
import router from './router'

import $ from 'jquery'
import '@/utils/page.js'
import '@/utils/element_ui.js';

Vue.prototype.$jquery = $

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

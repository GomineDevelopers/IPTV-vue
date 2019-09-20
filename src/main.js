import Vue from 'vue'
import App from './App.vue'
import router from './router'

import $ from 'jquery'
import '@/utils/page.js'
import '@/utils/element_ui.js'

Vue.prototype.$ = $

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import axios from 'axios'
Vue.prototype.$http = axios;

Vue.config.productionTip = false

import store from '@/store'

// import { mapGetters } from "vuex";

import { commonTools } from '@/utils/common'
Vue.prototype.$commonTools = commonTools


import { get_user_permissions } from "@/api/api_main";

// var routerform = [
//   // '/backhome/datatotal',
//   // '/backhome/userlifecycle',
//   // '/backhome/userviewingbehavior',
//   // '/backhome/periodicreport',
//   // '/backhome/epg',

//   // '/backhome/valueaddedtotal',
//   // '/backhome/vip',

//   // '/backhome/hottopicscontrol',

//   // '/backhome/dataintegrity',
//   // '/backhome/abnormalvalue',
//   // '/backhome/datatrend',

//   // '/backhome/programsearching',

//   // '/backhome/authoritymanagement',

//   // '/backhome/bigscreenmanagement',
// ];

var ifFirstLogin = false;
var type0 = 0; // 无权限（登录跳转 + url跳转）
var type1 = 1; // 有权限（url跳转）
var type3 = 3; // 有权限（登录跳转） =》 用else
var current_topath = null;

// 路由处理
function jumpStatus(authority_arr, topath, frompath, next) {
  console.log("~~~~~~jumpStatus:")
  // console.log(authority_arr)
  console.log(topath)
  console.log(frompath)



  if (frompath == '/login') {
    function ManageLoginToPath(id, path) {
      // console.log("~~~ManageLoginToPath");
      // console.log(id);
      // console.log(path);
      let m_return_status;
      let m_return_path = "";
      if (authority_arr.indexOf(id) > -1) {
        m_return_status = false;
        m_return_path = path;
      }
      else {
        m_return_status = true;
      }
      return {
        status: m_return_status,
        path: m_return_path
      };
    }
    let count = 0;
    let length = 11;
    let t_id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let t_path = [
      '/backhome',
      '/backhome/userlifecycle',
      '/backhome/userviewingbehavior',
      '/backhome/periodicreport',
      '/backhome/epg',
      '/backhome/valueaddedtotal',
      '/backhome/hottopicscontrol',
      '/backhome/dataintegrity',
      '/backhome/programsearching',
      '/backhome/authoritymanagement',
      '/backhome/bigscreenmanagement'
    ]
    let my_return = true;
    // if (topath == path) {
    //   next()
    // } else {
    //   next(path)
    // }
    let temp_type = null;
    LoginTo_Manage(LoginTo_Manage);
    function LoginTo_Manage(callback) {
      if (count < length) {
        my_return = ManageLoginToPath(t_id[count], t_path[count])
        console.log(count);
        console.log(my_return);
        count++;
        if (my_return.status) {
          callback(LoginTo_Manage);
        }
        else {
          ifFirstLogin = true;
          console.log("ifFirstLogin = true;");
          temp_type = type3;
          if (topath == my_return.path) {
            next()
          } else {
            next(my_return.path);
          }
          return type3;
        }
      } else {
        console.log("over~~");
        // next("/");
      }
    }
    if (temp_type == null) {
      return type0;
    }
    else if (temp_type == type3) {
      return type3;
    }


  }
  else {
    if (authority_arr.indexOf(1) > -1) {
      if (topath == '/backhome' || topath == '/backhome/' || topath == '/backhome/datatotal') {
        current_topath = topath;
        return type1;
      }
    }
    if (authority_arr.indexOf(2) > -1 && topath == '/backhome/userlifecycle') {
      current_topath = topath;
      return type1;
    }
    if (authority_arr.indexOf(3) > -1 && topath == '/backhome/userviewingbehavior') {
      current_topath = topath;
      return type1;
    }
    if (authority_arr.indexOf(4) > -1) {
      if (topath == '/backhome/periodicreport' ||
        topath == '/backhome/periodicreport/' ||
        topath == '/backhome/periodicreport/G_TVUserActiveDayReport' ||
        topath == '/backhome/periodicreport/G_TVUserViewingDayReport' ||
        topath == '/backhome/periodicreport/MarketOperationalWeekReport' ||
        topath == '/backhome/periodicreport/OperationalWeekReport' ||
        topath == '/backhome/periodicreport/G_TVUserViewingWeekReport' ||
        topath == '/backhome/periodicreport/VIPAddMonthReport' ||
        topath == '/backhome/periodicreport/G_TVUserViewingMonthReport' ||
        topath == '/backhome/periodicreport/SpecialZoneReport') {
        current_topath = topath;
        return type1;
      }
    }
    if (authority_arr.indexOf(5) > -1 && topath == '/backhome/epg') {
      current_topath = topath;
      return type1;
    }
    if (authority_arr.indexOf(6) > -1) {
      if (topath == '/backhome/valueaddedtotal' || topath == '/backhome/vip') {
        current_topath = topath;
        return type1;
      }
    }
    if (authority_arr.indexOf(7) > -1 && topath == '/backhome/hottopicscontrol') {
      current_topath = topath;
      return type1;
    }
    if (authority_arr.indexOf(8) > -1) {
      if (topath == '/backhome/dataintegrity' || topath == '/backhome/abnormalvalue' || topath == '/backhome/datatrend') {
        current_topath = topath;
        return type1;
      }
    }
    if (authority_arr.indexOf(9) > -1 && topath == '/backhome/programsearching') {
      current_topath = topath;
      return type1;
    }
    if (authority_arr.indexOf(10) > -1 && topath == '/backhome/authoritymanagement') {
      current_topath = topath;
      return type1;
    }
    if (authority_arr.indexOf(11) > -1 && topath == '/backhome/bigscreenmanagement') {
      current_topath = topath;
      return type1;
    }
    return type0;
  }
}


// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

router.beforeEach((to, from, next) => {
  setTimeout(function () {

    console.log("------------------ from :" + from.path)
    console.log("------------------ to :" + to.path)


    // store
    //   .dispatch("init_all_option")
    //   .then(function (response) {
    //     console.log(response);
    //     next();
    //   })
    //   .catch(function (error) {
    //     console.info(error);
    //   });
    let ifTest = true;
    if (ifTest) {
      store
        .dispatch("set_ifTest", ifTest)
        .then(function (res) {
          next();

        })
        .catch(function (error) {
          console.info(error);
        });

    }
    else {

      let topath = to.path;
      let frompath = from.path;
      // console.log("~~~~to.path");
      // console.log(topath);
      console.log("ifFirstLogin: " + ifFirstLogin);
      // 登录
      if (topath == '/login') {
        commonTools.delCookie("user_token");
      }
      if (ifFirstLogin) {
        next()
      }
      if (topath == '/' || topath == '/login' || topath == '/noauthority' || topath == '/404') {
        next()
      }
      else {
        let token = commonTools.getCookie('user_token')
        if (!token) {        // 没有token
          // console.log("!token")
          if (topath === '/login') {
            next()
          } else {
            next('/login')
          }
        } // if (!token)
        else if (token) {

          store.dispatch("get_current_authority")
            .then(function (response) {
              if (response.length == 0) {  // 刷新初始化为空情况
                console.log("有 - current_authority");
                let token = commonTools.getCookie("user_token");
                let newToken = token.replace('"', "").replace('"', "");

                get_user_permissions(newToken)
                  .then(function (response) {
                    // console.log(response);
                    let m_data = response.data.data;
                    let length = m_data.length;
                    let i;
                    let temp = [];
                    for (i = 0; i < length; i++) {
                      temp.push(m_data[i].id);
                    }
                    let temp_authorizationChoose = [];
                    temp_authorizationChoose = temp;
                    store
                      .dispatch("set_current_authority", temp_authorizationChoose)
                      .then(function (res) {
                        let status = jumpStatus(temp, topath, frompath, next);
                        console.log("~~~~status");
                        console.log(status);
                        setTimeout(function () {
                          if (status == type0) {  // url直接跳转-无权限 
                            next('/noauthority')
                          }
                          else if (status == type1) {  // url直接跳转-有权限
                            if (topath == current_topath) {
                              next()
                            } else {
                              next(current_topath);
                            }
                          }
                          else if (status == type3) {  // 登录页=》跳转第一个权限页
                            // do nothing.
                          }
                        }, 100)
                      })
                      .catch(function (error) {
                        console.info(error);
                      });
                  })
                  .catch(function (error) {
                    console.info(error);
                  });
              }
              else {  // 非刷新情况-直接跳转
                console.log("无 - current_authority");
                let status = jumpStatus(response, topath, frompath, next);
                console.log("~~~~status");
                console.log(status);
                setTimeout(function () {
                  if (status == type0) {  // url直接跳转-无权限 
                    next('/noauthority')
                  }
                  else if (status == type1) {  // url直接跳转-有权限
                    if (topath == current_topath) {
                      next()
                    } else {
                      next(current_topath);
                    }
                  }
                  else if (status == type3) {  // 登录页=》跳转第一个权限页
                    // do nothing.
                  }
                }, 100)
              }
              next()

            });

          // next() 

        }
      }
    }

  }, 100)

})


new Vue({
  router,
  commonTools,
  store,
  // mapGetters,
  render: h => h(App)
}).$mount('#app')



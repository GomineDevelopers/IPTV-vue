<template>
  <div class="MyTest">
    <br />

    <button @click="test_login">fgw test_login</button>

    <!-- // //////////////////////// G+TV用户收视日报表 -->
    <br />

    <button @click="users_daliyReport">users_daliyReport</button>
    <button @click="users_daliyReport_operators">users_daliyReport_operators</button>
    <!-- // //////////////////////// G+TV用户发展活跃日报表 -->
    <br />

    <button @click="liveUsers_daliyReport">liveUsers_daliyReport</button>
    <button @click="liveUsers_daliyReport_operators">liveUsers_daliyReport_operators</button>
    <!-- // //////////////////////// 贵州广电新媒体G+TV移动运营数据周报 -->
    <br />
    <button @click="users_mobileReport">users_mobileReport</button>
    <!-- <button @click="users_mobileReport_operators">users_mobileReport_operators</button> -->

    <!-- // //////////////////////// G+TV月度用户收视行为分析报告 -->
    <br />
    <button @click="users_monthActiveReport">users_monthActiveReport</button>
    <button @click="users_monthActiveReport_range">users_monthActiveReport_range</button>
    <button @click="users_monthActiveReport_operators">users_monthActiveReport_operators</button>

    <!-- // //////////////////////// 用户收视行为周报 -->
    <br />
    <button @click="users_weekActiveReport">users_weekActiveReport</button>
    <button @click="users_weekActiveReport_operators">users_weekActiveReport_operators</button>

    <!-- // //////////////////////// 市场业务运营数据分析周报 -->
    <br />
    <button @click="users_marketReport">users_marketReport</button>
    <button @click="users_marketReport_operators">users_marketReport_operators</button>

    <!-- // //////////////////////// 电信VIP增值业务专项分析 -->
    <br />
    <button @click="users_vipReport">users_vipReport</button>
    <button @click="users_vipReport_operators">users_vipReport_operators</button>

    <!-- // //////////////////////// 专区数据报告 -->
    <br />
    <!-- <button @click="users_subReport_single">users_subReport_single</button> -->
    <button @click="users_subReport">users_subReport</button>
    <button @click="users_subReport_operators">users_subReport_operators</button>

    <!-- // //////////////////////// 用户收视行为 -->
    <br />
    <button @click="userAction_top">userAction_top</button>
    <button @click="userAction">userAction</button>
    <button @click="userAction_programs">userAction_programs</button>
    <button @click="userAction_operator">userAction_operator</button>
    <!-- // //////////////////////// 热点控制 -->
    <br />

    <button @click="hot_top">hot_top</button>
    <!-- // //////////////////////// 总体数据展示 -->
    <br />

    <button @click="areaCode">areaCode</button>
    <button @click="users_total">users_total</button>
    <!-- // //////////////////////// 增值业务 -->
    <br />

    <button @click="increment">increment</button>
    <button @click="increment_programs_list">increment_programs_list</button>
    <button @click="increment_operators">increment_operators</button>
    <!-- // //////////////////////// 用户生命周期 -->
    <br />

    <button @click="userLives">userLives</button>
    <button @click="userLives_operators">userLives_operators</button>
    <button @click="userLives_areaCode">userLives_areaCode</button>
    <!-- // //////////////////////// 节目搜索 -->
    <br />

    <button @click="program_search">program_search</button>
    <!-- // //////////////////////// vip -->
    <br />

    <button @click="vip_operators">vip_operators</button>
    <button @click="vip_increment">vip_increment</button>
    <button @click="vip_programs_list">vip_programs_list</button>
    <button @click="vip_areaCode">vip_areaCode</button>
    <button @click="vip_increment_get">vip_increment_get</button>
    <!-- // //////////////////////// epg -->
    <br />

    <button @click="epg">epg</button>
    <button @click="epg_programs">epg_programs</button>
    <!-- <button @click="epg_operators">epg_operators</button> -->
    <!-- // //////////////////////// 大屏页面 -->
    <br />

    <button @click="media_watch_total">media_watch_total</button>
    <button @click="media_watch">media_watch</button>
    <button @click="media_content">media_content</button>
    <button @click="demands_location">demands_location</button>
    <button @click="demands_week_duration">demands_week_duration</button>
    <button @click="demands_week">demands_week</button>
    <button @click="demands_special">demands_special</button>
    <button @click="demands_VipProgramTop">demands_VipProgramTop</button>
    <button @click="demandProgramTop">demandProgramTop</button>
    <button @click="purchasePrd">purchasePrd</button>
    <button @click="broadcast_demand">broadcast_demand</button>
    <button @click="broadcast_review">broadcast_review</button>
    <button @click="users_basic">users_basic</button>
    <button @click="broadcast_onlive">broadcast_onlive</button>
    <button @click="users_subscribe">users_subscribe</button>
    <button @click="users_activationRate">users_activationRate</button>
    <button @click="users_retention">users_retention</button>
    <!-- // //////////////////////// 用户 -->
    
    <br />

    <button @click="login">login</button>
    <!-- <button @click="register">register</button> -->

    <div id="echartsTESTUA" :style="{width: '14vw',height: '14vw'}"></div>
  </div>
</template>

<script>
// import "@/vendor/Blob";
// import "@/vendor/Export2Excel";
// import Vue from "vue";
import {
  test_login,
  // //////////////////////// G+TV用户收视日报表
  users_daliyReport,
  users_daliyReport_operators,
  // //////////////////////// G+TV用户发展活跃日报表
  liveUsers_daliyReport,
  liveUsers_daliyReport_operators,
  // //////////////////////// 贵州广电新媒体G+TV移动运营数据周报
  users_mobileReport,
  // users_mobileReport_operators,
  // //////////////////////// G+TV月度用户收视行为分析报告
  users_monthActiveReport,
  users_monthActiveReport_range,
  users_monthActiveReport_operators,

  // //////////////////////// 用户收视行为周报
  users_weekActiveReport,
  users_weekActiveReport_operators,

  // //////////////////////// 市场业务运营数据分析周报
  users_marketReport,
  users_marketReport_operators,

  // //////////////////////// 电信VIP增值业务专项分析
  users_vipReport,
  users_vipReport_operators,

  // //////////////////////// 专区数据报告
  // users_subReport_single,
  users_subReport,
  users_subReport_operators,

  // //////////////////////// 用户收视行为
  userAction_top,
  userAction,
  userAction_programs,
  userAction_operator,
  // //////////////////////// 热点控制
  hot_top,
  // //////////////////////// 总体数据展示
  areaCode,
  users_total,
  // //////////////////////// 增值业务
  increment,
  increment_programs_list,
  increment_operators,
  // //////////////////////// 用户生命周期
  userLives,
  userLives_operators,
  userLives_areaCode,
  // //////////////////////// 节目搜索
  program_search,

  // //////////////////////// vip
  vip_operators,
  vip_increment,
  vip_programs_list,
  vip_areaCode,
  vip_increment_get,
  // //////////////////////// epg
  epg,
  epg_programs,
  // epg_operators,
  // //////////////////////// 大屏页面
  media_watch_total,
  media_watch,
  media_content,
  demands_location,
  demands_week_duration,
  demands_week,
  demands_special,
  demands_VipProgramTop,
  demandProgramTop,
  purchasePrd,
  broadcast_demand,
  broadcast_review,
  users_basic,
  broadcast_onlive,
  users_subscribe,
  users_activationRate,
  users_retention,
  // //////////////////////// 用户
  login
  // register
} from "@/api/api_main";

import { commonTools } from "@/utils/test";

export default {
  name: "MyTest",
  data() {
    return {
      list: [
        {
          name: "韩版设计时尚风衣大",
          number: "MPM00112",
          salePrice: "￥999.00",
          stocknums: 3423,
          salesnums: 3423,
          sharenums: 3423
        },
        {
          name: "韩版设计时尚风衣大",
          number: "MPM00112",
          salePrice: "￥999.00",
          stocknums: 3423,
          salesnums: 3423,
          sharenums: 3423
        }
      ],
      goodsItems: ["商品名称", "商品货号", "售价", "库存", "销量", "分享"]
    };
  },
  mounted() {
    this.drawLine();

    // api 测试
  },
  methods: {
    // //////////////////////// G+TV用户收视日报表
    test_login() {
      console.log("test_login");
      test_login()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    users_daliyReport() {
      console.log("users_daliyReport");

      let temp = {
        //  operator: String(["移动", "联通", "电信"]),
        operator: String(["移动"]),
        start: "2019-07-01",
        end: "2019-07-01"
      };

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("operator", temp.operator);
      formData.append("start", temp.start);
      formData.append("end", temp.end);

      users_daliyReport(formData)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    users_daliyReport_operators() {
      console.log("users_daliyReport_operators");

      users_daliyReport_operators()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    // //////////////////////// G+TV用户发展活跃日报表

    liveUsers_daliyReport() {
      console.log("liveUsers_daliyReport");
      let temp = {
        operator: String(["移动", "联通", "电信"]),
        start: "2019-07-12",
        end: "2019-07-31"
      };

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("operator", temp.operator);
      formData.append("start", temp.start);
      formData.append("end", temp.end);

      liveUsers_daliyReport(formData)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    liveUsers_daliyReport_operators() {
      console.log("liveUsers_daliyReport_operators");
      liveUsers_daliyReport_operators()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    // //////////////////////// 贵州广电新媒体G+TV移动运营数据周报
    users_mobileReport() {
      console.log("users_mobileReport");
      let temp = {
        operator: String(["联通", "移动"]),
        start: "2019-07-03",
        end: "2019-07-03"
      };
      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("operator", temp.operator);
      formData.append("start", temp.start);
      formData.append("end", temp.end);

      users_mobileReport(formData)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    // users_mobileReport_operators() {
    //   console.log("users_mobileReport_operators");
    //   users_mobileReport_operators()
    //     .then(function(response) {
    //       console.log(response);
    //     })
    //     .catch(function(error) {
    //       console.info(error);
    //     });
    // },

    // //////////////////////// G+TV月度用户收视行为分析报告
    users_monthActiveReport() {
      console.log("users_monthActiveReport");
      let temp = {
        operator: String(["联通", "移动"]),
        start: "2019-07-01",
        end: "2019-07-01"
      };
      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("operator", temp.operator);
      formData.append("start", temp.start);
      formData.append("end", temp.end);

      users_monthActiveReport(formData)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    users_monthActiveReport_range() {
      console.log("users_monthActiveReport_range");
      let temp = {
        operator: String(["移动", "联通", "电信"]),
        start: "26week",
        end: "26week"
      };
      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("operator", temp.operator);
      formData.append("start", temp.start);
      formData.append("end", temp.end);

      users_monthActiveReport_range(formData)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    // 暂时不用
    users_monthActiveReport_operators() {
      console.log("users_monthActiveReport_operators");
      users_monthActiveReport_operators()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    // //////////////////////// 用户收视行为周报
    users_weekActiveReport() {
      console.log("users_weekActiveReport");
      let temp = {
        operator: String(["移动", "联通", "电信"]),
        start: "2019-07-01",
        end: "2019-07-07"
      };
      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("operator", temp.operator);
      formData.append("start", temp.start);
      formData.append("end", temp.end);

      users_weekActiveReport(formData)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    users_weekActiveReport_operators() {
      // 删了！
      console.log("users_weekActiveReport_operators");
      users_weekActiveReport_operators()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    // //////////////////////// 市场业务运营数据分析周报
    users_marketReport() {
      console.log("users_marketReport");
      users_marketReport()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    users_marketReport_operators() {
      console.log("users_marketReport_operators");
      users_marketReport_operators()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    // //////////////////////// 电信VIP增值业务专项分析
    users_vipReport() {
      console.log("users_vipReport");
      let temp = {
        operator: String(["移动", "联通", "电信"]),
        start: "2019-07-01",
        end: "2019-07-31"
      };

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("operator", temp.operator);
      formData.append("start", temp.start);
      formData.append("end", temp.end);
      users_vipReport(formData)
        .then(function(response) {
          console.log(response);
          console.log(response.data.responses[0].aggregations.ti.buckets);

          // 第一个 - 点播用户数
          // responses: Array(1)
          // 0:
          // aggregations:
          // ti:
          // buckets: Array(15)
          // 0:
          // demand_user_num:
          // value: 34027
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    users_vipReport_operators() {
      console.log("users_vipReport_operators");
      users_vipReport_operators()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    // //////////////////////// 专区数据报告

    // users_subReport_single() {
    //   console.log("users_subReport_single");
    //   console.log(String(["联通", "移动"]));
    //   let temp = {
    //     // operator: "联通",
    //     // operator: ['联通','移动'],
    //     // operator: "联通,移动",
    //     // operator: JSON.stringify(["联通", "移动"]),
    //     operator: String(["联通", "移动"]),

    //     start: "2019-07-15",
    //     end: "2019-07-15"
    //   };

    //   var formData = new FormData();
    //   var formData = new window.FormData();
    //   formData.append("operator", temp.operator);
    //   formData.append("start", temp.start);
    //   formData.append("end", temp.end);

    //   users_subReport_single(formData)
    //     .then(function(response) {
    //       console.log(response);
    //     })
    //     .catch(function(error) {
    //       console.info(error);
    //     });
    // },

    users_subReport() {
      console.log("users_subReport");
      let temp = {
        // operator: "联通",
        // operator: ['联通','移动'],
        // operator: "联通,移动",
        // operator: JSON.stringify(["联通", "移动"]),
        operator: String(["移动", "联通", "电信"]),

        start: "2019-07-01",
        end: "2019-07-01"
      };

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("operator", temp.operator);
      formData.append("start", temp.start);
      formData.append("end", temp.end);

      users_subReport(formData)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    users_subReport_operators() {
      console.log("users_subReport_operators");
      users_subReport_operators()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    // //////////////////////// 用户收视行为
    userAction_top() {
      console.log("userAction_top");
      userAction_top()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },

    userAction() {
      console.log("userAction");

      let temp = {
        area: "all",
        operator: "all",
        method: 0,
        list: "all",
        start: "2019-07-12",
        end: "2019-07-31"
      };

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("area", temp.area);
      formData.append("operator", temp.operator);
      formData.append("method", temp.method);
      formData.append("list", temp.list);
      formData.append("start", temp.start);
      formData.append("end", temp.end);

      userAction(formData)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    userAction_programs() {
      console.log("userAction_programs");
      userAction_programs()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    userAction_operator() {
      console.log("userAction_operator");
      userAction_operator()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    // //////////////////////// 热点控制

    hot_top() {
      console.log("hot_top");
      hot_top()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    // //////////////////////// 总体数据展示

    areaCode() {
      console.log("areaCode");
      areaCode()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    users_total() {
      console.log("users_total");

      let data = {
        start: "2019-07-03",
        end: "2019-07-03"
      };

      users_total(data)
        .then(function(response) {
          console.log(response);
          console.log(response.data.responses[0].aggregations.ac.buckets);
          console.log(
            response.data.responses[0].aggregations.ac.buckets[0].key
          );
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    // //////////////////////// 增值业务

    increment() {
      console.log("increment");

      let temp = {
        operator: "all",
        list: "all",
        start: "2019-07-12",
        end: "2019-07-31"
      };

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("operator", temp.operator);
      formData.append("list", temp.list);
      formData.append("start", temp.start);
      formData.append("end", temp.end);

      increment(formData)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    increment_programs_list() {
      console.log("increment_programs_list");
      increment_programs_list()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    increment_operators() {
      console.log("increment_operators");
      increment_operators()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    // //////////////////////// 用户生命周期

    userLives() {
      console.log("userLives");
      let temp = {
        area: "all",
        operator: "all",
        start: "2019-07-12",
        end: "2019-07-31"
      };

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("area", temp.area);
      formData.append("operator", temp.operator);
      formData.append("start", temp.start);
      formData.append("end", temp.end);

      userLives(formData)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    userLives_operators() {
      console.log("userLives_operators");
      userLives_operators()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    userLives_areaCode() {
      console.log("userLives_areaCode");
      userLives_areaCode()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    // //////////////////////// 节目搜索

    program_search() {
      console.log("program_search");

      var myDateTest = new Date();
      console.log(myDateTest);
      var tempDT = commonTools.dateFormat(myDateTest);
      console.log(tempDT);
      console.log(typeof tempDT); // string

      var myDateTest2 = new Date();
      var tempDT2 = commonTools.getWeek_m(myDateTest);
      console.log(tempDT2);
      console.log(typeof tempDT2); // string

      var myDateTest3 = new Date();
      var tempDT3 = commonTools.getWeek_y(myDateTest);
      console.log(tempDT3);
      console.log(typeof tempDT3); // string

      let index = 1;
      for (let i of commonTools.createWeeks(2018)) {
        let start = i[0],
          end = i[1];
        console.log(
          `第${commonTools.formatDig(index++)}周 ${commonTools.formatDate(
            start
          )}-${commonTools.formatDate(end)}`
        );
      }
      console.log("~~~~~~~~~~~~~~~~~~~A");

      let index2 = 1;
      for (let i of commonTools.createWeeks(2018)) {
        let start = i[0],
          end = i[1];
        console.log(
          `第${commonTools.formatDig(index2++)}周 ${commonTools.formatDate2(
            start
          )}-${commonTools.formatDate2(end)}`
        );
      }
      console.log("~~~~~~~~~~~~~~~~~~~A2");

      let index3 = 1;
      for (let i of commonTools.createWeeks(2018)) {
        let start = i[0],
          end = i[1];
        console.log(
          `第${commonTools.formatDig(index3++)}周 ${commonTools.formatDate3(
            start
          )}-${commonTools.formatDate3(end)}`
        );
      }

      console.log("~~~~~~~~~~~~~~~~~~~A3");

      // js获取当前月后面12个月所有月份
      // var dataArr = [];
      // var data = new Date();
      // var year = data.getFullYear();
      // data.setMonth(data.getMonth() + 1, 1); //获取到当前月份,设置月份
      // for (var i = 0; i < 12; i++) {
      //   data.setMonth(data.getMonth() - 1); //每次循环一次 月份值减1
      //   var m = data.getMonth() + 1;
      //   m = m < 10 ? "0" + m : m;
      //   dataArr.push(data.getFullYear() + "-" + m);
      // }
      // console.log(dataArr);

      //传入年份和月份 获取该年对应月份的天数
      let time_m = commonTools.getMonthDays(2019, 8);
      console.log("time_m： " + time_m);

      // 传入年份 获取1~12月的日期范围
      let time_y = commonTools.getMonthDays_y(2019);
      console.log("time_y： " + time_y.firstDay);
      console.log("time_y： " + time_y.lastDay);
      // console.log("time_y： " + time_y);

      // 下面的转换有问题！
      // console.log(new Date(Date.UTC(2019, 1, 1)));
      // console.log(new Date(Date.UTC(2019, 1, 31)));
      // console.log(new Date(Date.UTC(2019, 2, 1)));
      // console.log(new Date(Date.UTC(2019, 1, 28)));

      // console.log(new Date(96, 1, 2, 3, 4, 5));
      // console.log(Date.UTC(96, 1, 2, 3, 4, 5));
      // console.log(new Date(2019, 1-1, 31-1));
      // console.log(Date.UTC(2019, 1-1, 31-1));
      //  时间计算是： 年2019-0 月份一-1 日期31-0

      console.log("~~~~~~~~~~~~~~~~~~~B");

      var utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
      var utcDate2 = new Date(Date.UTC(0, 0, 0, 0, 0, 0));
      console.log(typeof Date.UTC(96, 1, 2, 3, 4, 5)); // > "number"
      console.log(typeof utcDate1); // > "object"
      console.log(typeof utcDate1.toUTCString()); // > "string"
      console.log(Date.UTC(96, 1, 2, 3, 4, 5)); // > 823230245000
      console.log(utcDate1); // > Fri Feb 02 1996 11:04:05 GMT+0800 (中国标准时间)
      console.log(utcDate1.toUTCString()); // > "Fri, 02 Feb 1996 03:04:05 GMT"
      // expected output: Fri, 02 Feb 1996 03:04:05 GMT

      console.log(utcDate2.toUTCString()); // > "Sun, 31 Dec 1899 00:00:00 GMT"
      // expected output: Sun, 31 Dec 1899 00:00:00 GMT

      // Date.UTC(year,month,day,hours,minutes,seconds,ms)
      var timeUTC = Date.UTC(2005, 7, 8);
      console.log(timeUTC);
      var timeUTC2 = Date.UTC(2019, 8, 19);
      console.log(timeUTC2);
      var timeUTC3 = Date.UTC(2019, 8, 19, 12);
      console.log(timeUTC3);

      var timeUTC4 = Date.UTC(2019, 6, 1);
      console.log("timeUTC4：" + timeUTC4);

      var myDate = new Date();
      myDate.getYear(); //获取当前年份(2位)
      myDate.getFullYear(); //获取完整的年份(4位,1970-????)
      myDate.getMonth(); //获取当前月份(0-11,0代表1月)
      myDate.getDate(); //获取当前日(1-31)
      myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
      myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)
      myDate.getHours(); //获取当前小时数(0-23)
      myDate.getMinutes(); //获取当前分钟数(0-59)
      myDate.getSeconds(); //获取当前秒数(0-59)
      myDate.getMilliseconds(); //获取当前毫秒数(0-999)
      myDate.toLocaleDateString(); //获取当前日期
      var mytime = myDate.toLocaleTimeString(); //获取当前时间
      myDate.toLocaleString(); //获取日期与时间

      console.log(myDate);
      console.log(mytime);
      console.log(typeof myDate);
      console.log(typeof mytime);

      // ////////////////

      let temp = {
        programName: "白发", // string 格式
        UTC: "1561939200000" // datetime 格式
      };

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("programName", temp.programName);
      formData.append("UTC", temp.UTC);

      program_search(formData)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    // //////////////////////// vip

    vip_operators() {
      console.log("vip_operators");
      vip_operators()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    vip_increment() {
      console.log("vip_increment");

      let temp = {
        area: "all", // 地区码，all和贵州省地级市代码
        operator: "all", // 运营商列表：根据用户收视行为运营商api为准的列表单，all为全部运营商
        method: 0, // 播放方式：0-总体，1-直播，2-点播，3-回看
        list: "all", // 节目列表：根据栏目api为准的列表单，all为全部节目
        start: "2019-07-12",
        end: "2019-07-31",
        increment: "少儿包" // 增值包选项 如 少儿包
      };

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("area", temp.area);
      formData.append("operator", temp.operator);
      formData.append("method", temp.method);
      formData.append("list", temp.list);
      formData.append("start", temp.start);
      formData.append("end", temp.end);
      formData.append("increment", temp.increment);

      vip_increment(formData)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    vip_programs_list() {
      console.log("vip_programs_list");
      vip_programs_list()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    vip_areaCode() {
      console.log("vip_areaCode");
      vip_areaCode()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    vip_increment_get() {
      console.log("vip_increment_get");
      vip_increment_get()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    // //////////////////////// epg

    epg() {
      console.log("epg");

      let temp = {
        operator: "移动",
        list: "少儿",
        start: "2019-07-15",
        end: "2019-07-15",
        ver: "2.0"
      };

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("operator", temp.operator);
      formData.append("list", temp.list);
      formData.append("start", temp.start);
      formData.append("end", temp.end);
      formData.append("ver", temp.ver);

      epg(formData)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    epg_programs() {
      console.log("epg_programs");
      epg_programs()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    // epg_operators() {
    //   console.log("epg_operators");
    //   epg_operators()
    //     .then(function(response) {
    //       console.log(response);
    //     })
    //     .catch(function(error) {
    //       console.info(error);
    //     });
    // },
    // //////////////////////// 大屏页面

    media_watch_total() {
      // console.log("media_watch_total");
      let data = {
        start: "2019-07-02",
        end: "2019-07-02",
        operator: String(["移动", "联通", "电信"])
      };
      media_watch_total(data)
        .then(function(response) {
          console.log(response);
          console.log(
            response.data.responses[0].aggregations.watch_user_num.value
          );
          console.log(response.data.responses[0].aggregations.watch_freq.value);
          console.log(
            response.data.responses[0].aggregations.watch_freq_family.value
          );
        })
        .catch(function(error) {
          console.info(error);
        });
      // 需要计算环比率
      // （观看时长 - 上期观看时长） / 上期观看时长
      // 需要俩接口  2019-07-01 - 2019-07-02
    },
    media_watch() {
      console.log("media_watch");
      media_watch()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    media_content() {
      console.log("media_content");
      media_content()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    demands_location() {
      console.log("demands_location");
      demands_location()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    demands_week_duration() {
      console.log("demands_week_duration");
      demands_week_duration()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    demands_week() {
      console.log("demands_week");
      demands_week()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    demands_special() {
      console.log("demands_special");
      demands_special()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    demands_VipProgramTop() {
      console.log("demands_VipProgramTop");
      let data = {
        start: "2019-07-01",
        end: "2019-07-01",
        operator: String(["移动", "联通", "电信"])
      };
      demands_VipProgramTop(data)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    demandProgramTop() {
      console.log("demandProgramTop");
      let data = {
        start: "2019-07-01",
        end: "2019-07-01",
        operator: String(["移动", "联通", "电信"])
      };
      demandProgramTop(data)
        .then(function(response) {
          console.log(response);

          console.log(
            response.data.responses[0].hits.hits[0]._source.programname
          ); // 名称
          console.log(
            response.data.responses[0].hits.hits[0]._source.demand_freq
          ); // 热度
          console.log(
            response.data.responses[0].hits.hits[0]._source.rank_demand_freq
          ); //排名

          console.log;
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    purchasePrd() {
      console.log("purchasePrd");
      purchasePrd()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    broadcast_demand() {
      console.log("broadcast_demand");
      let data = {
        start: "2019-07-03",
        end: "2019-07-03",
        operator: String(["移动", "联通", "电信"])
      };
      broadcast_demand(data)
        .then(function(response) {
          console.log(response);

          console.log(response.data.responses[0].aggregations.demand_user_num);
          console.log(response.data.responses[0].aggregations.demand_freq);
          console.log(
            response.data.responses[0].aggregations.watch_freq_family
          );
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    broadcast_review() {
      console.log("broadcast_review");
      let data = {
        start: "2019-07-02",
        end: "2019-07-02",
        operator: String(["移动", "联通", "电信"])
      };
      broadcast_review(data)
        .then(function(response) {
          console.log(response);
          console.log(
            response.data.responses[0].aggregations.watch_user_num.value
          );
          console.log(response.data.responses[0].aggregations.watch_freq.value);
          console.log(
            response.data.responses[0].aggregations.watch_freq_family.value
          );
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    users_basic() {
      console.log("users_basic");
      // 日累计=day，截止日期=now
      let date = "day";
      users_basic(date)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    broadcast_onlive() {
      console.log("broadcast_onlive");
      // 总体数据query参数：直播=0，点播=1，回看=2
      let func = "0";
      let data = {
        start: "2019-07-03",
        end: "2019-07-03",
        operator: String(["移动", "联通", "电信"])
      };
      broadcast_onlive(data)
        .then(function(response) {
          console.log(response);
          console.log(response.data.responses[0].aggregations.onlive_user_num);
          console.log(response.data.responses[0].aggregations.onlive_freq);
          console.log(
            response.data.responses[0].aggregations.watch_freq_family
          );
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    users_subscribe() {
      console.log("users_subscribe");
      let data = {
        // operator: String(["移动", "联通", "电信"]),
        operator: String(["移动"]),
        start: "2019-07-01",
        end: "2019-07-01"
      };
      console.log(String(["移动"]));
      console.log(String(["移动", "联通", "电信"]));
      // data:
      // responses: Array(1)
      // 0:
      // aggregations:
      // value_added_service_package:
      // buckets: Array(10)
      // 0: {key: "少儿VIP", doc_count: 11, new_paid_num: {…}, new_income: {…}}
      users_subscribe(data)
        .then(function(response) {
          console.log(response);
          console.log(
            response.data.responses[0].aggregations.value_added_service_package
              .buckets.length
          );
          let buckets =
            response.data.responses[0].aggregations.value_added_service_package
              .buckets;
          let length = buckets.length;
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    users_activationRate() {
      console.log("users_activationRate");
      // 24小时激活和48小时激活率（0=24小时激活，1=48小时激活）
      let hours = 0;
      users_activationRate(hours)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    users_retention() {
      console.log("users_retention");
      // 七天留存和三十天留存（0=7天，1=30天留存率）

      let date = 0;

      users_retention(date)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    // //////////////////////// 用户

    login() {
      console.log("login");

      let temp = {
        email: "xxx@gmail.com",
        password: "123413415",
        captcha: "1341"
      };

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("email", temp.email);
      formData.append("password", temp.password);
      formData.append("captcha", temp.captcha);

      login(formData)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    register() {
      console.log("register");
      let temp = {
        email: "xxx@gmail.com",
        password: "123413415",
        confirmed_password: "1341313"
      };

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("email", temp.email);
      formData.append("password", temp.password);
      formData.append("confirmed_password", temp.confirmed_password);

      register(formData)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },

    // ///////////////////////////

    formatJson(filterVal, jsonData) {
      //   let temp1 = [55, 66];
      //   let k ;
      //   let temp2 = temp1.map(v => k);
      //   console.log(temp2);
      return jsonData.map(v => filterVal.map(j => v[j]));
      // return "";
    },
    export2Excel() {
      console.log("~~export2Excel");
      require.ensure([], () => {
        const { export_json_to_excel } = require("../vendor/Export2Excel");
        const tHeader = [
          "商品名称",
          "商品货号",
          "售价",
          "库存",
          "销量",
          "分享"
        ];
        const filterVal = [
          "name",
          "number",
          "salePrice",
          "stocknums",
          "salesnums",
          "sharenums"
        ];
        // const list = this.goodsItems;
        const list = this.list;
        console.log(list);
        console.log(filterVal);
        const data = this.formatJson(filterVal, list);
        console.log(tHeader);
        console.log(data);
        export_json_to_excel(tHeader, data, "商品管理列表");
      });
    },
    drawLine() {
      var myChart = this.$echarts.init(document.getElementById("echartsTESTUA"));
      let vm = this;
      var option = {
        title: {
          text: "",
          subtext: "",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
            myTool1: {
              show: true,
              title: "自定义扩展方法1",
              icon: "image://http://echarts.baidu.com/images/favicon.png",
              onclick: function() {
                // alert("myToolHandler1");
                vm.export2Excel();
              }
            }
          }
        },
        series: [
          {
            type: "pie",
            radius: "55%",
            center: ["45%", "50%"],
            selectedMode: "single",
            color: ["#FCB84F", "#F97E6F"],

            label: {
              normal: {
                formatter: "{b}:\n {d}%" // 只显示百分比
              }
            },
            labelLine: {
              normal: {
                smooth: 0.2,
                length: 1
              }
            },
            data: [{ value: 23, name: "订购" }, { value: 77, name: "未订购" }],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };

      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  }
};
</script>

<style >
.MyTest {
  text-align: left;
}
</style>


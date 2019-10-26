<template>
  <div class="G_TUserViewingWeekReport height_auto">
    <!-- 收视行为开始 -->
    <el-row class="viewing_behavior_report">
      <el-col class="height_auto viewing_behavior_report_body">
        <el-row class="periodic_report_title m_textalign_c">G+TV用户收视行为周报</el-row>
        <el-row class="viewing_behavior_report_left">
          <!-- ■■■■■■■■■■ 1 用户发展与活跃数据 -->
          <el-row id="module1">
            <!-- <com-UVWR-m1 :data_m1="data_m1"></com-UVWR-m1> -->
            <com-UVWR-m1
              v-bind:api_data_m1="api_data_m1"
              v-bind:api_data_m1_range="api_data_m1_range"
              v-bind:api_data_m2="api_data_m2"
              v-bind:api_data_m3="api_data_m3"
              v-bind:api_data_m4="api_data_m4"
              v-bind:api_data_m2_range="api_data_m2_range"
              v-bind:api_data_m3_range="api_data_m3_range"
              v-bind:api_data_m4_range="api_data_m4_range"
            ></com-UVWR-m1>
          </el-row>

          <!-- ■■■■■■■■■■ 2 移动侧节目收视与页面热度 -->
          <el-row v-show="ifModuleydShow" id="module2">
            <com-UVWR-m2
              v-bind:api_data_m2="api_data_m2"
              v-bind:api_data_m2_range="api_data_m2_range"
            ></com-UVWR-m2>
          </el-row>

          <!-- ■■■■■■■■■■ 3 联通侧节目收视与页面热度 -->
          <el-row v-show="ifModuleltShow" id="module3">
            <com-UVWR-m3
              v-bind:api_data_m3="api_data_m3"
              v-bind:api_data_m3_range="api_data_m3_range"
            ></com-UVWR-m3>
          </el-row>

          <!-- ■■■■■■■■■■ 4 电信侧节目收视与页面热度 -->
          <el-row v-show="ifModuledxShow" id="module4">
            <com-UVWR-m4
              v-bind:api_data_m4="api_data_m4"
              v-bind:api_data_m4_range="api_data_m4_range"
            ></com-UVWR-m4>
          </el-row>

          <!-- ■■■■■■■■■■ 5 本土原创节目点播数据 -->
          <el-row id="module5">
            <com-UVWR-m5
              v-bind:api_data_m1="api_data_m1"
              v-bind:api_data_m1_range="api_data_m1_range"
              v-bind:api_data_m2="api_data_m2"
              v-bind:api_data_m2_range="api_data_m2_range"
              v-bind:api_data_m3="api_data_m3"
              v-bind:api_data_m3_range="api_data_m3_range"
              v-bind:api_data_m4="api_data_m4"
              v-bind:api_data_m4_range="api_data_m4_range"
            ></com-UVWR-m5>
          </el-row>
        </el-row>
      </el-col>

      <!-- 右侧导航开始 -->
      <el-col class="viewing_behavior_nav height_auto">
        <el-row>
          <a
            href="javascript:void(0)"
            class="anchor_link1 avtive_link"
            @click="goAnchor('#module1')"
          >用户发展与活跃数据</a>
        </el-row>
        <el-row v-show="ifModuleydShow">
          <a
            href="javascript:void(0)"
            class="anchor_link2"
            @click="goAnchor('#module2')"
          >移动侧节目收视与页面热度</a>
        </el-row>
        <el-row v-show="ifModuleltShow">
          <a
            href="javascript:void(0)"
            class="anchor_link3"
            @click="goAnchor('#module3')"
          >联通侧节目收视与页面热度</a>
        </el-row>
        <el-row v-show="ifModuledxShow">
          <a
            href="javascript:void(0)"
            class="anchor_link4"
            @click="goAnchor('#module4')"
          >电信侧节目收视与页面热度</a>
        </el-row>
        <el-row>
          <a href="javascript:void(0)" class="anchor_link5" @click="goAnchor('#module5')">本土原创节目点播数据</a>
        </el-row>
      </el-col>
      <!-- 右侧导航结束 -->
    </el-row>
    <!-- 收视行为结束 -->
  </div>
</template>
<script>
import "@/styles/common_2.css";

import UVWR_m1 from "@/views/backviews_pr/GT_UVWR/UVWR_m1";
import UVWR_m2 from "@/views/backviews_pr/GT_UVWR/UVWR_m2";
import UVWR_m3 from "@/views/backviews_pr/GT_UVWR/UVWR_m3";
import UVWR_m4 from "@/views/backviews_pr/GT_UVWR/UVWR_m4";
import UVWR_m5 from "@/views/backviews_pr/GT_UVWR/UVWR_m5";

import { mapGetters } from "vuex";
import { users_weekActiveReport } from "@/api/api_main";
import { commonTools } from "@/utils/test";
import { timeout } from "q";

export default {
  name: "G_TUserViewingWeekReport", //G+TV用户收视行为周报
  components: {
    "com-UVWR-m1": UVWR_m1,
    "com-UVWR-m2": UVWR_m2,
    "com-UVWR-m3": UVWR_m3,
    "com-UVWR-m4": UVWR_m4,
    "com-UVWR-m5": UVWR_m5
  },
  watch: {
    PR_operator(newValue, oldValue) {
      this.api_data_set();
      let vm = this;
      // excel 处理
      vm.Excel_data_manage();
    },
    PR_week(newValue, oldValue) {
      // console.log("当前选择时间为", newValue)
      this.api_data_set();
      let vm = this;
      // excel 处理
      vm.Excel_data_manage();
    }
  },
  computed: {
    ...mapGetters(["PR_operator", "PR_week", "PR_Report_index"]),
    ifModuleydShow: {
      get: function() {
        let vm = this;
        if (vm.PR_operator == null || vm.PR_operator.length == 0) {
          return true;
        } else {
          if (vm.PR_operator.indexOf("移动") > -1) {
            return true;
          }
        }
        return false;
      },
      set: function(newValue) {}
    },
    ifModuleltShow: {
      get: function() {
        let vm = this;
        if (vm.PR_operator == null || vm.PR_operator.length == 0) {
          return true;
        } else {
          if (vm.PR_operator.indexOf("联通") > -1) {
            return true;
          }
        }
        return false;
      },
      set: function(newValue) {}
    },
    ifModuledxShow: {
      get: function() {
        let vm = this;
        if (vm.PR_operator == null || vm.PR_operator.length == 0) {
          return true;
        } else {
          if (vm.PR_operator.indexOf("电信") > -1) {
            return true;
          }
        }
        return false;
      },
      set: function(newValue) {}
    }
  },
  data() {
    return {
      // 数据分发到子级组件
      // 1 5 处理1~3个运营商聚合的数据，  2 3 4 处理 单个运营商数据
      api_data_m1: null, //single/part/all
      api_data_m1_range: null,
      api_data_m2: null, //yd
      api_data_m2_range: null, //yd（周对比）
      api_data_m3: null, //lt
      api_data_m3_range: null, //lt（周对比）
      api_data_m4: null, //dx
      api_data_m4_range: null, //dx（周对比）
      api_data_m5: null //single/part/all
      // updateDoor: true
      // WeekFormat: null
    };
  },
  mounted() {
    //监听滚动事件
    $(".viewing_behavior_report_left").scroll(function(event) {
      let scrollTopHeight = $(".viewing_behavior_report_left").scrollTop();
      // console.log(scrollTopHeight)
      if (0 <= scrollTopHeight) {
        $(".anchor_link1")
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      }
      if (4000 <= scrollTopHeight) {
        $(".anchor_link2")
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      }
      if (8000 <= scrollTopHeight) {
        $(".anchor_link3")
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      }
      if (12100 <= scrollTopHeight) {
        $(".anchor_link4")
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      }
      if (16100 <= scrollTopHeight) {
        $(".anchor_link5")
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      }
    });
    // api 数据处理 - by 运营商
    this.api_data_set();
    let vm = this;
    // excel 处理
    vm.Excel_data_manage();
  },
  methods: {
    Excel_data_manage() {
      console.log("Excel_data_manage - 5");
      let vm = this;
      setTimeout(function() {
        if (vm.PR_Report_index == 5) {
          let temp_titleArr = [];
          let temp_DataArr = [];
          // /// 临时
          temp_titleArr.push(["title1"]);
          temp_titleArr.push(["title2"]);
          temp_titleArr.push(["title3"]);

          temp_DataArr.push([
            ["运营商", "移动", "联通", "电信555555555555555"],
            ["平均", 1, 2, 3]
          ]);
          temp_DataArr.push([
            ["运营商", "移动", "联通", "电信", "测试22"],
            ["平均", 1, 2, 3, 4]
          ]);
          temp_DataArr.push([
            ["运营商", "移动", "联通", "电信", "测试33"],
            ["平均", 1, 2, 3, 4]
          ]);
          // ///
          vm.$store
            .dispatch("set_PR_Excel_titleArr", temp_titleArr)
            .then(function(response_title) {
              console.log(response_title);
              vm.$store
                .dispatch("set_PR_Excel_dataArr", temp_DataArr)
                .then(function(response_dataArr) {
                  console.log(response_dataArr);
                  // 设置excel按钮下载状态 - 开
                  vm.$store
                    .dispatch("set_PR_excel_ifCanDownload", true)
                    .then(function(response_dataArr) {
                      console.log("下载开");

                    })
                    .catch(function(error) {
                      console.info(error);
                    });
                })
                .catch(function(error) {
                  console.info(error);
                });
            })
            .catch(function(error) {
              console.info(error);
            });
        }
      }, 5000);
    },
    // api 数据处理 - by 运营商
    api_data_set() {
      let vm = this;
      if (vm.PR_operator == null || vm.PR_operator.length == 0) {
        let temp_operator = ["移动", "联通", "电信"];
        vm.users_weekActiveReport("all", temp_operator, "weekRange");
        vm.users_weekActiveReport("all", temp_operator, "week");

        vm.users_weekActiveReport("yd", ["移动"], "week");
        vm.users_weekActiveReport("yd", ["移动"], "weekRange");
        vm.users_weekActiveReport("lt", ["联通"], "week");
        vm.users_weekActiveReport("lt", ["联通"], "weekRange");
        vm.users_weekActiveReport("dx", ["电信"], "week");
        vm.users_weekActiveReport("dx", ["电信"], "weekRange");
      } else {
        let count = vm.PR_operator.length;
        if (count == 3) {
          // 执行 1+3个
          vm.users_weekActiveReport("all", vm.PR_operator, "weekRange");
          vm.users_weekActiveReport("all", vm.PR_operator, "week");
          vm.users_weekActiveReport("yd", ["移动"], "week");
          vm.users_weekActiveReport("yd", ["移动"], "weekRange");
          vm.users_weekActiveReport("lt", ["联通"], "week");
          vm.users_weekActiveReport("lt", ["联通"], "weekRange");
          vm.users_weekActiveReport("dx", ["电信"], "week");
          vm.users_weekActiveReport("dx", ["电信"], "weekRange");
        }
        if (count == 2) {
          // 执行 1+2个
          if (vm.PR_operator.indexOf("移动") > -1) {
            vm.users_weekActiveReport("yd", ["移动"], "week");
            vm.users_weekActiveReport("yd", ["移动"], "weekRange");
          }
          if (vm.PR_operator.indexOf("联通") > -1) {
            vm.users_weekActiveReport("lt", ["联通"], "week");
            vm.users_weekActiveReport("yd", ["联通"], "weekRange");
          }
          if (vm.PR_operator.indexOf("电信") > -1) {
            vm.users_weekActiveReport("dx", ["电信"], "week");
            vm.users_weekActiveReport("yd", ["电信"], "weekRange");
          }
          vm.users_weekActiveReport("part", vm.PR_operator, "weekRange");
          vm.users_weekActiveReport("part", vm.PR_operator, "week");
        }
        if (count == 1) {
          // 执行 1个
          if (vm.PR_operator.indexOf("移动") > -1) {
            vm.users_weekActiveReport("yd", ["移动"], "week");
            vm.users_weekActiveReport("yd", ["移动"], "weekRange");
            vm.users_weekActiveReport("all", ["移动"], "weekRange");
            vm.users_weekActiveReport("all", ["移动"], "week");
          }
          if (vm.PR_operator.indexOf("联通") > -1) {
            vm.users_weekActiveReport("lt", ["联通"], "week");
            vm.users_weekActiveReport("lt", ["联通"], "weekRange");
            vm.users_weekActiveReport("all", ["联通"], "weekRange");
            vm.users_weekActiveReport("all", ["联通"], "week");
          }
          if (vm.PR_operator.indexOf("电信") > -1) {
            vm.users_weekActiveReport("dx", ["电信"], "week");
            vm.users_weekActiveReport("dx", ["电信"], "weekRange");
            vm.users_weekActiveReport("all", ["电信"], "weekRange");
            vm.users_weekActiveReport("all", ["电信"], "week");
          }
        }
      }
    },
    users_weekActiveReport(type, m_PR_operator, wee_type) {
      let vm = this;
      let tempOperatorArr = m_PR_operator;
      // console.log("~~~~~");
      // console.log(tempOperatorArr);
      let temp_time = commonTools.split_WeeksDays_byDWwr(vm.PR_week); //本周时间
      // console.log("本周时间temp_time：", temp_time)
      // vm.WeekFormat = WeekFormat
      let temp;
      if (wee_type == "week") {
        temp = {
          operator: String([tempOperatorArr]),
          start: temp_time.week_day_start,
          end: temp_time.week_day_end
          // start: "2019-06-10",
          // end: "2019-06-16"    //暂定这一周
        };
      }
      // console.log("temp!!!!!!!!!!!!!!!!!!!!!!!!!", temp)
      let last_week = commonTools.currentDay_7daysAgoRange(
        temp_time.week_day_start
      ); //获取上周的时间
      // console.log("last_week", last_week)
      //上一周的数据
      if (wee_type == "weekRange") {
        temp = {
          operator: String([tempOperatorArr]),
          start: last_week.start,
          end: last_week.end
          // start: "2019-06-03",
          // end: "2019-06-09"    //暂定这一周
        };
      }
      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("operator", temp.operator);
      formData.append("start", temp.start);
      formData.append("end", temp.end);

      users_weekActiveReport(formData)
        .then(function(response) {
          // console.log("users_weekActiveReport");
          // console.log("~~~~~:" + type);
          // console.log(response);
          // ▲▲▲▲ 5个模块的数据传入类型
          // 1 - single x 3 + all/part
          // 2 - single yd
          // 3 - single lt
          // 4 - single dx
          // 5 - all/part
          if (wee_type == "week") {
            switch (type) {
              case "all":
                vm.api_data_m1 = response;
                vm.api_data_m5 = response;
                break;
              case "part":
                vm.api_data_m1 = response;
                vm.api_data_m5 = response;
                break;
              case "yd":
                vm.api_data_m2 = response;
                break;
              case "lt":
                vm.api_data_m3 = response;
                break;
              case "dx":
                vm.api_data_m4 = response;
                break;
              default:
                console.log("none!");
            }
          }
          if (wee_type == "weekRange") {
            switch (type) {
              case "all":
                vm.api_data_m1_range = response;
                // vm.api_data_m5 = response;
                break;
              case "part":
                vm.api_data_m1_range = response;
                // vm.api_data_m5 = response;
                break;
              case "yd":
                vm.api_data_m2_range = response;
                // vm.api_data_m2 = response;
                break;
              case "lt":
                vm.api_data_m3_range = response;
                // vm.api_data_m3 = response;
                break;
              case "dx":
                vm.api_data_m4_range = response;
                // vm.api_data_m4 = response;
                break;
              default:
                console.log("none!");
            }
          }
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    //点击锚点实现左侧滚动
    goAnchor(selector) {
      let scrollDiv = document.querySelector(".viewing_behavior_report_left"); //外层滚动容器元素
      var anchor = document.querySelector(selector); // 参数为要跳转到的元素id
      scrollDiv.scrollTop = anchor.offsetTop;
      $(".viewing_behavior_nav a").on("click", function() {
        $(this)
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      });
    }
  }
};
</script>
<style scoped>
.viewing_behavior_report {
  height: 720px;
  margin: 14px 0px;
  display: -webkit-flex;
  display: flex;
}
.viewing_behavior_report_body {
  flex: 1;
  height: 100%;
}
.viewing_behavior_report_left {
  height: calc(100% - 50px);
  padding-bottom: 40px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
/*webkit内核*/
.viewing_behavior_report_left::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
/*o内核*/
.viewing_behavior_report_left .-o-scrollbar {
  -moz-appearance: none !important;
  background: rgba(0, 255, 0, 0) !important;
}
/*IE10,IE11,IE12*/
.viewing_behavior_report_left {
  -ms-scroll-chaining: chained;
  -ms-overflow-style: none;
  -ms-content-zooming: zoom;
  -ms-scroll-rails: none;
  -ms-content-zoom-limit-min: 100%;
  -ms-content-zoom-limit-max: 500%;
  -ms-scroll-snap-points-x: snapList(100%, 200%, 300%, 400%, 500%);
  -ms-overflow-style: none;
  overflow: auto;
}

.viewing_behavior_nav {
  width: 220px;
}
.viewing_behavior_nav {
  padding-left: 20px;
  text-align: left;
}
.viewing_behavior_nav .el-row {
  margin-bottom: 12px;
}
.viewing_behavior_nav a {
  font-size: 14px;
  color: #333;
  text-decoration: none;
}
.viewing_behavior_nav .avtive_link {
  color: #ff6123;
}
.G_TUserViewingWeekReport {
  text-align: left;
}
</style>
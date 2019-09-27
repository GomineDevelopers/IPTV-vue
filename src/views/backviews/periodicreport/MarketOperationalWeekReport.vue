<template>
  <div class="MarketOperationalWeekReport height_auto">
    <!-- 市场业务运营数据分析周报 -->
    <el-row class="viewing_behavior_report">
      <el-row class="periodic_report_title m_textalign_c">市场业务运营数据分析周报</el-row>

      <!-- /////////////MOWR_1 -->
      <el-row class="model_title">
        <span class="title_border_left"></span>周用户发展情况
      </el-row>
      <com-MOWR-m1 v-bind:m1_data="m1_data" class="m_marginbottom_pxA"></com-MOWR-m1>
      <!-- /////////////MOWR_2 -->
      <el-row class="model_title">
        <span class="title_border_left"></span>24小时新增用户激活率
      </el-row>
      <com-MOWR-m2 v-bind:m2_data="m2_data" class="m_marginbottom_pxA"></com-MOWR-m2>
      <!-- /////////////MOWR_3 -->
      <el-row v-show="ifFormRowShow_yd" class="model_title">
        <span class="title_border_left"></span>运营商各市（州）24小时新增激活情况（移动）
      </el-row>
      <com-MOWR-m3 v-bind:m3_data="m3_data" v-show="ifFormRowShow_yd" class="m_marginbottom_pxA"></com-MOWR-m3>
      <!-- /////////////MOWR_5 -->
      <el-row v-show="ifFormRowShow_lt" class="model_title">
        <span class="title_border_left"></span>运营商各市（州）24小时新增激活情况（联通）
      </el-row>
      <com-MOWR-m5 v-bind:m4_data="m4_data" v-show="ifFormRowShow_lt" class="m_marginbottom_pxA"></com-MOWR-m5>
      <!-- /////////////MOWR_4 -->
      <el-row v-show="ifFormRowShow_dx" class="model_title">
        <span class="title_border_left"></span>运营商各市（州）24小时新增激活情况（电信）
      </el-row>
      <com-MOWR-m4 v-bind:m5_data="m5_data" v-show="ifFormRowShow_dx" class="m_marginbottom_pxA"></com-MOWR-m4>
      <!-- /////////////MOWR_6 -->
      <el-row class="model_title">
        <span class="title_border_left"></span>停机用户变化情况
      </el-row>
      <com-MOWR-m6 v-bind:m6_data="m6_data" class="m_marginbottom_pxA"></com-MOWR-m6>
      <!-- /////////////MOWR_7 -->
      <el-row class="model_title">
        <span class="title_border_left"></span>销、停机用户变化情况
      </el-row>
      <com-MOWR-m7 v-bind:m7_data="m7_data" class="m_marginbottom_pxA"></com-MOWR-m7>
      <!-- /////////////MOWR_8 -->
      <el-row v-show="ifFormRowShow_dx" class="model_title">
        <span class="title_border_left"></span>电信增值业务周发展情况
      </el-row>
      <com-MOWR-m8 v-bind:m8_data="m8_data" v-show="ifFormRowShow_dx" class="m_marginbottom_pxA"></com-MOWR-m8>
    </el-row>

    <!-- 市场业务运营数据分析周报 -->
  </div>
</template>
<script>
import "@/styles/common_2.css";

import MOWR_m1 from "@/views/backviews_pr/MOWR/MOWR_m1";
import MOWR_m2 from "@/views/backviews_pr/MOWR/MOWR_m2";
import MOWR_m3 from "@/views/backviews_pr/MOWR/MOWR_m3";
import MOWR_m4 from "@/views/backviews_pr/MOWR/MOWR_m4";
import MOWR_m5 from "@/views/backviews_pr/MOWR/MOWR_m5";
import MOWR_m6 from "@/views/backviews_pr/MOWR/MOWR_m6";
import MOWR_m7 from "@/views/backviews_pr/MOWR/MOWR_m7";
import MOWR_m8 from "@/views/backviews_pr/MOWR/MOWR_m8";

import { mapGetters } from "vuex";
import { commonTools } from "@/utils/test";
import { users_marketReport } from "@/api/api_main";

export default {
  name: "MarketOperationalWeekReport", //市场业务运营数据分析周报
  components: {
    "com-MOWR-m1": MOWR_m1,
    "com-MOWR-m2": MOWR_m2,
    "com-MOWR-m3": MOWR_m3,
    "com-MOWR-m4": MOWR_m4,
    "com-MOWR-m5": MOWR_m5,
    "com-MOWR-m6": MOWR_m6,
    "com-MOWR-m7": MOWR_m7,
    "com-MOWR-m8": MOWR_m8
  },
  data() {
    return {
      api_data_yd_w: null,
      api_data_lt_w: null,
      api_data_dx_w: null,
      api_data_yd_wd: null,
      api_data_lt_wd: null,
      api_data_dx_wd: null,
      m1_data: null,
      m2_data: null,
      m3_data: null,
      m4_data: null,
      m5_data: null,
      m6_data: null,
      m7_data: null,
      m8_data: null
    };
  },
  watch: {
    PR_operator(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.refresh_api_data("yd", "week");
        vm.refresh_api_data("lt", "week");
        vm.refresh_api_data("dx", "week");
        vm.refresh_api_data("yd", "week_days");
        vm.refresh_api_data("lt", "week_days");
        vm.refresh_api_data("dx", "week_days");
        // 数据统一处理 - 给对应的m?传入相应处理好的data!
        setTimeout(function() {
          vm.modulesDataManage();
        }, 100);
      }, 100);
    },
    PR_week(newValue, oldValue) {
      let vm = this;
      console.log("PR_week: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data("yd", "week");
        vm.refresh_api_data("lt", "week");
        vm.refresh_api_data("dx", "week");
        vm.refresh_api_data("yd", "week_days");
        vm.refresh_api_data("lt", "week_days");
        vm.refresh_api_data("dx", "week_days");
        setTimeout(function() {
          vm.modulesDataManage();
        }, 100);
      }, 100);
    }
  },
  // ▲▲▲▲ 8个模块的数据传入类型
  // (该日报只涉及单独运营商数据，不涉及混合运营商数据)
  // (涉及 week 和 week_days 时间类型)
  // 1 - single x 3
  // 2 - single x 3
  // 3 - single yd
  // 4 - single lt
  // 5 - single dx
  // 6 - single x 3
  // 7 - single x 3
  // 8 - single dx
  methods: {
    modulesDataManage() {
      // 根据6种数据类型 - 设置好 m1_m8的各数据，再分别传入
      // api_data_yd_w
      // api_data_lt_w
      // api_data_dx_w
      // api_data_yd_wd
      // api_data_lt_wd
      // api_data_dx_wd

      // m1
      // m2
      // m3
      // m4
      // m5
      // m6
      // m7
      // m8
      
    },
    refresh_api_data(operator_type, week_type) {
      this.users_marketReport(operator_type, week_type);
    },
    users_marketReport(operator_type, week_type) {
      // console.log("users_marketReport");
      let vm = this;
      if (vm.PR_week == "" || vm.PR_week == null || vm.PR_week == undefined) {
        return;
      }
      // let temp_operator = commonTools.operatorConvert(vm.PR_operator);
      let temp_time = commonTools.split_WeeksDays_byDWwr(vm.PR_week);
      let temp;
      function temp_manage(m_operator_type, m_operator) {
        if (operator_type == m_operator_type) {
          if (week_type == "week") {
            temp = {
              operator: String([m_operator]),
              year: temp_time.year,
              start: temp_time.week,
              end: temp_time.week
            };
          }
          if (week_type == "week_days") {
            temp = {
              operator: String([m_operator]),
              year: temp_time.year,
              start: temp_time.week_day_start,
              end: temp_time.week_day_end
            };
          }
        }
      }
      temp_manage("yd", "移动");
      temp_manage("lt", "联通");
      temp_manage("dx", "电信");

      console.log("~~~~~~~~~~~~~~~~~~~ temp  users_marketReport");
      console.log(temp);
      // var formData = new FormData();
      // var formData = new window.FormData();
      // formData.append("operator", temp.operator);
      // formData.append("start", temp.start);
      // formData.append("end", temp.end);
      // formData.append("year", temp.year);

      // users_marketReport(formData)
      //   .then(function(response) {
      //     console.log(response);
      //     if (week_type == "week") {
      //       switch (operator_type) {
      //         case "yd":
      //           vm.api_data_yd_w = response;
      //           break;
      //         case "lt":
      //           vm.api_data_lt_w = response;
      //           break;
      //         case "dx":
      //           vm.api_data_dx_w = response;
      //           break;
      //         default:
      //           console.log("none!");
      //       }
      //     }
      //     if (week_type == "week_days") {
      //       switch (operator_type) {
      //         case "yd":
      //           vm.api_data_yd_wd = response;
      //           break;
      //         case "lt":
      //           vm.api_data_lt_wd = response;
      //           break;
      //         case "dx":
      //           vm.api_data_dx_wd = response;
      //           break;
      //         default:
      //           console.log("none!");
      //       }
      //     }
      //   })
      //   .catch(function(error) {
      //     console.info(error);
      //   });
    }
  },
  computed: {
    ...mapGetters(["PR_operator", "PR_week"]),
    ifFormRowShow_yd: {
      get: function() {
        if (this.PR_operator == null || this.PR_operator.length == 0) {
          return true;
        } else {
          if (this.PR_operator.indexOf("移动") > -1) {
            return true;
          }
        }
        return false;
      },
      set: function(newValue) {}
    },
    ifFormRowShow_lt: {
      get: function() {
        if (this.PR_operator == null || this.PR_operator.length == 0) {
          return true;
        } else {
          if (this.PR_operator.indexOf("联通") > -1) {
            return true;
          }
        }
        return false;
      },
      set: function(newValue) {}
    },
    ifFormRowShow_dx: {
      get: function() {
        if (this.PR_operator == null || this.PR_operator.length == 0) {
          return true;
        } else {
          if (this.PR_operator.indexOf("电信") > -1) {
            return true;
          }
        }
        return false;
      },
      set: function(newValue) {}
    }
  },

  mounted() {}
};
</script>
<style scoped>
.viewing_behavior_report {
  height: 500px;
  margin: 14px 0px;
}

.MarketOperationalWeekReport {
  text-align: left;
}
</style>
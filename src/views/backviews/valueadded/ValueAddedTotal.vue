<template>
  <div class="value_added_total">
    <!-- 条件筛选开始 -->
    <el-row class="value_added_option_select epg">
      <el-row class="model_title">
        <span class="title_border_left"></span>条件筛选
      </el-row>
      <el-row class="chart_body back_white">
        <option-select-valueAdd></option-select-valueAdd>
      </el-row>
    </el-row>
    <!-- 条件筛选结束 -->

    <!-- 用户转化开始 -->
    <el-row class="user_conversion">
      <el-row class="model_title">
        <span class="title_border_left"></span>用户转化
      </el-row>
      <el-row class="chart_body back_white">
        <el-col class="height_auto" :span="12">
          <line-chart-single :lineData="newUserTotal"></line-chart-single>
        </el-col>
        <el-col class="height_auto" :span="12">
          <line-chart-single-prop :lineData="newPayingUsersProportion"></line-chart-single-prop>
        </el-col>
      </el-row>
    </el-row>
    <!-- 用户转化结束 -->

    <!-- 订购用户开始 -->
    <el-row class="subscribers">
      <el-row class="model_title">
        <span class="title_border_left"></span>订购用户
      </el-row>
      <el-row class="chart_body back_white">
        <el-col class="height_auto" :span="8">
          <!-- 订购用户 -->
          <bar-chart-single :chartData="subscribersData"></bar-chart-single>
        </el-col>
        <el-col class="height_auto" :span="8">
          <!-- 分包用户 -->
          <bar-chart-single :chartData="subcontractUserData"></bar-chart-single>
        </el-col>
        <el-col class="height_auto" :span="8">
          <!-- 分包收入 -->
          <bar-chart-single :chartData="subcontractIncomeData"></bar-chart-single>
        </el-col>
      </el-row>
    </el-row>
    <!-- 订购用户结束 -->
  </div>
</template>
<script>
import OptionSelectValueAdd from "@/views/backcoms/valueaddedtotal/OptionSelectValueAdd"; //数据总览条件筛选
import LineChartSingle from "@/views/backcoms/commoncomponents/LineChartSingle"; //单数据折线图组件（新增用户概览）
import LineChartSingleProp from "@/views/backcoms/commoncomponents/LineChartSingleProp"; //单数据折线图Y轴显示百分比组件（新增付费用户百分比）
import BarChartSingle from "@/views/backcoms/commoncomponents/BarChartSingle"; //单数据折线图Y轴显示百分比组件（新增付费用户百分比）

import { mapGetters } from "vuex";
import { commonTools } from "@/utils/test";
import { increment } from "@/api/api_main";

export default {
  name: "ValueAddedTotal", //增值业务总览
  computed: {
    ...mapGetters([
      "ADD_ALL_operator",
      "ADD_ALL_programa",
      "ADD_ALL_week",
      "ADD_ALL_month",
      "ADD_ALL_time_type"
    ])
  },
  watch: {
    ADD_ALL_operator(newValue, oldValue) {
      let vm = this;
      console.log("ADD_ALL_operator: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data();
      }, 100);
    },
    ADD_ALL_programa(newValue, oldValue) {
      let vm = this;
      console.log("ADD_ALL_programa: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data();
      }, 100);
    },
    ADD_ALL_week(newValue, oldValue) {
      let vm = this;
      console.log("ADD_ALL_week: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data();
      }, 100);
    },
    ADD_ALL_month(newValue, oldValue) {
      let vm = this;
      console.log("ADD_ALL_month: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data();
      }, 100);
    },
    ADD_ALL_time_type(newValue, oldValue) {
      let vm = this;
      console.log("ADD_ALL_time_type: " + newValue);
    }
  },
  methods: {
    refresh_api_data() {
      this.increment(this.ADD_ALL_time_type);
    },
    increment(time_type) {
      console.log("increment");
      let vm = this;

      let temp_operator = commonTools.operatorConvert(vm.ADD_ALL_operator);
      let temp_programa = commonTools.programaConvert(vm.ADD_ALL_programa);

      let temp = {
        operator: null,
        // list: null,
        start: null,
        end: null
      };

      if (time_type == 1) {
        // 时间类型-1-周
        // console.log("~~~~~week:" + vm.ADD_ALL_week);
        let temp_time = commonTools.split_yearAtime(vm.ADD_ALL_week);
        temp = {
          operator: String(temp_operator),
          // list: String(temp_programa),
          start: temp_time.time,
          end: temp_time.time,
          year: temp_time.year
        };
        // console.log("~~~~time_type:" + time_type);
        console.log("~~~~~1:");
        console.log(temp);
      }
      if (time_type == 2) {
        // 时间类型-2-月
        // console.log("~~~~~month:" + vm.ADD_ALL_month);
        let temp_time = commonTools.split_yearAtime(vm.ADD_ALL_month);
        console.log(temp_time);

        temp = {
          operator: String(temp_operator),
          // list: String(temp_programa),
          start: temp_time.time,
          end: temp_time.time,
          year: temp_time.year
        };
        // console.log("~~~~time_type:" + time_type);
        console.log("~~~~~2:");
        console.log(temp);
      }

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
    }
  },

  components: {
    "option-select-valueAdd": OptionSelectValueAdd,
    "line-chart-single": LineChartSingle,
    "line-chart-single-prop": LineChartSingleProp,
    "bar-chart-single": BarChartSingle
  },
  data() {
    return {
      //新增用户概览数据
      newUserTotal: {
        title: "新增用户概览（户）",
        id: "newUserTotal",
        color: "#FF6123",
        data: [
          ["product", "15日", "16日", "17日", "18日", "19日", "20日", "21日"],
          ["新增用户", 140, 170, 180, 200, 234, 240, 259]
        ]
      },
      //新增付费用户占比
      newPayingUsersProportion: {
        title: "新增付费用户占比",
        id: "newPayingUsers_ADD_ALL",
        color: "#5E70F1",
        data: [
          ["product", "15日", "16日", "17日", "18日", "19日", "20日", "21日"],
          ["新增用户占比", 3, 4, 3, 7, 9, 5, 8]
        ]
      },
      //订购用户数据
      subscribersData: {
        title: "订购用户",
        id: "subscribersUser",
        color: ["#FF6123", "#FFAA89"],
        data: [
          ["product", "订购用户数（数）", "收入（元）"],
          ["15日", 4330, 1563],
          ["16日", 8300, 1457],
          ["17日", 8600, 1896],
          ["18日", 7242, 1457],
          ["19日", 4337, 1123],
          ["20日", 8310, 1245],
          ["21日", 8665, 1234]
        ]
      },
      //分包用户数据
      subcontractUserData: {
        title: "分包用户",
        id: "subcontractUser",
        color: ["#FF6123", "#f97d4c", "#FFAA89"],
        data: [
          ["product", "欢乐家庭包（户）", "少儿包（户）", "影视包（户）"],
          ["15日", 4330, 3563, 3337],
          ["16日", 8300, 6457, 2330],
          ["17日", 8600, 7896, 1457],
          ["18日", 7242, 5457, 4310],
          ["19日", 4337, 1123, 3665],
          ["20日", 8310, 5245, 4234],
          ["21日", 8665, 7234, 2234]
        ]
      },
      //分包收入数据
      subcontractIncomeData: {
        title: "分包收入",
        id: "subcontractIncome",
        color: ["#FF6123", "#f97d4c", "#FFAA89"],
        data: [
          ["product", "欢乐家庭包（户）", "少儿包（户）", "影视包（户）"],
          ["15日", 4330, 3563, 2337],
          ["16日", 8300, 6457, 1330],
          ["17日", 8600, 7896, 2457],
          ["18日", 7242, 5457, 3310],
          ["19日", 4337, 1123, 1665],
          ["20日", 8310, 5245, 2234],
          ["21日", 8665, 7234, 1234]
        ]
      }
    };
  }
};
</script>
<style scoped>
.value_added_option_select {
  height: 250px;
}
/* 用户转化开始 */
.user_conversion {
  height: 422px;
  margin: 14px 0px;
}
/* 用户转化结束 */

/* 订购用户开始 */
.subscribers {
  height: 422px;
  margin-bottom: 50px;
}
/* 订购用户结束*/

/* 增值业务——总览页面自适应开始 */
@media (max-width: 1450px) {
  .user_conversion .el-col-12 {
    width: 100%;
    height: 362px;
  }
  .subscribers .el-col-8 {
    width: 100%;
    height: 372px;
  }
  .user_conversion,
  .subscribers {
    height: auto;
  }
}
</style>

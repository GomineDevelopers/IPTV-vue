<template>
  <div class="user_viewing_behavior">
    <!-- 条件筛选开始 -->
    <el-row class="option_select">
      <el-row class="model_title">
        <span class="title_border_left"></span>条件筛选
      </el-row>
      <!-- <el-row class="chart_body back_white">条件.......</el-row> -->
      <el-row class="chart_body back_white">
        <com-optionselectUVB></com-optionselectUVB>
      </el-row>
    </el-row>
    <!-- 条件筛选结束 -->

    <!-- 收视行为开始 -->
    <el-row class="viewing_behavior">
      <el-row class="model_title">
        <span class="title_border_left"></span>收视行为
      </el-row>
      <el-row class="chart_body back_white">
        <el-row class="select_option_content">
          <span>选择指标：</span>
          <el-select v-model="targetOption" placeholder="请选择">
            <el-option v-for="(item,index) in target" :key="index+'c'" :label="item" :value="item"></el-option>
          </el-select>
        </el-row>
        <el-col class="height_auto chart_height" :span="12">
          <el-col class="height_auto" :span="12">
            <!-- 地区饼图 -->
            <pie-charts :chartData="regionData"></pie-charts>
          </el-col>
          <el-col class="height_auto" :span="12">
            <!-- 运营商柱状图 -->
            <bar-charts-stack :chartData="operatorData"></bar-charts-stack>
          </el-col>
        </el-col>
        <el-col class="height_auto chart_height" :span="12">
          <el-col class="height_auto" :span="12">
            <pie-charts :chartData="playData"></pie-charts>
          </el-col>
          <el-col class="height_auto" :span="12">
            <!-- 运营商柱状图 -->
            <bar-chart-single :chartData="columnData"></bar-chart-single>
          </el-col>
        </el-col>
      </el-row>
    </el-row>
    <!-- 收视行为结束 -->

    <!-- 收视TOP开始 -->
    <el-row class="viewing_top15">
      <el-row class="model_title">
        <span class="title_border_left"></span>收视TOP15
      </el-row>
      <el-row class="chart_body back_white viewing_top15_list">
        <user-viewing-behavior-top :viewingTopList="viewingTopList"></user-viewing-behavior-top>
      </el-row>
    </el-row>
    <!-- 收视TOP结束 -->
  </div>
</template>
<script>
import UserViewingBehaviorTOP from "@/views/backcoms/userviewingbehavior/UserViewingBehaviorTOP"; //收视TOP组件
import OptionSelectUVB from "@/views/backcoms/userviewingbehavior/OptionSelectUVB"; // 条件筛选
import PieCharts from "@/views/backcoms/commoncomponents/PieCharts"; //公用饼图
import BarChartsStack from "@/views/backcoms/commoncomponents/BarChartsStack"; //公用柱状图堆叠
import BarChartSingle from "@/views/backcoms/commoncomponents/BarChartSingle"; //公用柱状图单个

import { mapGetters } from "vuex";
import { commonTools } from "@/utils/test";
import { userAction } from "@/api/api_main";

export default {
  name: "UserViewingBehavior", //用户收视行为
  computed: {
    ...mapGetters([
      "UVB_region",
      "UVB_operator",
      "UVB_playmode",
      "UVB_programa",
      "UVB_contenttype",
      "UVB_day",
      "UVB_week",
      "UVB_picker",
      "UVB_time_type"
    ])
  },
  watch: {
    UVB_region(newValue, oldValue) {
      let vm = this;
      console.log("UVB_region: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data();
      }, 100);
    },
    UVB_operator(newValue, oldValue) {
      let vm = this;
      console.log("UVB_operator: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data();
      }, 100);
    },
    UVB_playmode(newValue, oldValue) {
      let vm = this;
      console.log("UVB_playmode: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data();
      }, 100);
    },
    UVB_programa(newValue, oldValue) {
      let vm = this;
      console.log("UVB_programa: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data();
      }, 100);
    },
    UVB_contenttype(newValue, oldValue) {
      let vm = this;
      console.log("UVB_contenttype: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data();
      }, 100);
    },
    UVB_day(newValue, oldValue) {
      let vm = this;
      console.log("UVB_day: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data();
      }, 100);
    },
    UVB_week(newValue, oldValue) {
      let vm = this;
      console.log("UVB_week: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data();
      }, 100);
    },
    UVB_picker(newValue, oldValue) {
      let vm = this;
      console.log("UVB_picker: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data();
      }, 100);
    },
    UVB_time_type(newValue, oldValue) {
      let vm = this;
      console.log("UVB_time_type: " + newValue);
    }
  },
  methods: {
    refresh_api_data() {
      this.userAction(this.UVB_time_type);
    },
    userAction(time_type) {
      let vm = this;
      console.log("userAction");

      let temp_region = commonTools.acConvert(vm.UVB_region);
      let temp_operator = commonTools.operatorConvert(vm.UVB_operator);
      let temp_playmode = commonTools.playmodeConvert(vm.UVB_playmode);
      let temp_programa = commonTools.programaConvert(vm.UVB_programa);

      let temp_contenttype = commonTools.contenttypeConvert(vm.UVB_contenttype);
      console.log("temp_contenttype:" + temp_contenttype);
      // ▲▲▲ 接口再增加 contenttype  ---暂定  contenttype  --alex

      // let temp = {
      //   area: null,
      //   operator: null,
      //   method: null,
      //   list: null,
      //   start: null,
      //   end: null
      // };
      let temp = {
        area: null,
        operator: null,
        method: null,
        list: null,
        contenttype: null,
        start: null,
        end: null
      };
      if (time_type == 1) {
        // 时间类型-1-天
        // console.log("~~~~~day:" + vm.UVB_day);
        temp = {
          area: String(temp_region),
          operator: String(temp_operator),
          method: String(temp_playmode),
          list: String(temp_programa),
          contenttype: String(temp_contenttype),
          start: vm.UVB_day,
          end: vm.UVB_day
        };
        // console.log("~~~~time_type:" + time_type);
        console.log("~~~~~1:");
        console.log(temp);
      }
      if (time_type == 2) {
        // 时间类型-2-周
        // console.log("~~~~~week:" + vm.UVB_week);
        let temp_time = commonTools.split_yearAtime(vm.UVB_week);
        temp = {
          area: String(temp_region),
          operator: String(temp_operator),
          method: String(temp_playmode),
          list: String(temp_programa),
          contenttype: String(temp_contenttype),
          start: temp_time.time,
          end: temp_time.time,
          year: temp_time.year
        };
        // console.log("~~~~time_type:" + time_type);
        console.log("~~~~~2:");
        console.log(temp);
      }
      if (time_type == 3) {
        // 时间类型-3-范围
        console.log("~~~~~picker:" + vm.UVB_picker);
        console.log(typeof vm.UVB_picker);
        let temp_time = commonTools.split_picker(vm.UVB_picker);
        console.log(temp_time);
        temp = {
          area: String(temp_region),
          operator: String(temp_operator),
          method: String(temp_playmode),
          list: String(temp_programa),
          contenttype: String(temp_contenttype),
          start: temp_time.start,
          end: temp_time.end
        };
        // console.log("~~~~time_type:" + time_type);
        console.log("~~~~~3:");
        console.log(temp);
      }

      // var formData = new FormData();
      // var formData = new window.FormData();
      // formData.append("area", temp.area);
      // formData.append("operator", temp.operator);
      // formData.append("method", temp.method);
      // formData.append("list", temp.list);
      // formData.append("start", temp.start);
      // formData.append("end", temp.end);

      // userAction(formData)
      //   .then(function(response) {
      //     console.log(response);
      //   })
      //   .catch(function(error) {
      //     console.info(error);
      //   });
    }
  },
  components: {
    "user-viewing-behavior-top": UserViewingBehaviorTOP,
    "com-optionselectUVB": OptionSelectUVB,
    "pie-charts": PieCharts,
    "bar-charts-stack": BarChartsStack,
    "bar-chart-single": BarChartSingle
  },
  data() {
    return {
      targetOption: "", //存放选择的指标
      //选择指标数据
      target: ["观看次数", "观看时长", "户均收视次数", "次均收视次数"],
      //地区数据
      regionData: {
        title: "地区",
        id: "regionChart",
        color: [
          "#B37CF4",
          "#DADEEA ",
          "#CEF1ED",
          "#FCB84F",
          "#7ECDF4",
          "#A9CCDC",
          "#5E70F1",
          "#F97E6F",
          "#4ADBC7"
        ],
        data: [
          { value: 1335, name: "贵阳" },
          { value: 810, name: "遵义" },
          { value: 648, name: "安顺" },
          { value: 148, name: "黔南" },
          { value: 108, name: "黔东南" },
          { value: 248, name: "铜仁" },
          { value: 535, name: "毕节" },
          { value: 234, name: "六盘水" },
          { value: 348, name: "黔西南" }
        ]
      },
      //运营商数据
      operatorData: {
        title: "运营商",
        id: "operatorChart",
        color: ["#FF6123", "#FF8859", "#FFAA89"],
        data: [
          ["product", "移动", "联通", "电信"],
          ["贵阳", 43.3, 85.8, 93.7],
          ["遵义", 83.1, 73.4, 55.1],
          ["安顺", 43.3, 85.8, 93.7],
          ["黔南", 83.1, 73.4, 55.1],
          ["黔东南", 86.4, 65.2, 82.5],
          ["铜仁", 72.4, 53.9, 39.1],
          ["毕节", 86.4, 65.2, 82.5],
          ["六盘水", 43.3, 85.8, 93.7],
          ["黔西南", 72.4, 53.9, 39.1]
        ]
      },
      //播放数据
      playData: {
        title: "播放",
        id: "playChart",
        color: ["#B37CF4", "#F97E6F ", "#A9CCDC"],
        data: [
          { value: 535, name: "直播" },
          { value: 348, name: "点播" },
          { value: 410, name: "回看" }
        ]
      },
      columnData: {
        title: "栏目",
        id: "columnChart",
        color: ["#FF6123"],
        data: [
          ["product", "观看数"],
          ["贵阳", 43.3],
          ["遵义", 83.1],
          ["安顺", 43.3],
          ["黔南", 83.1],
          ["黔东南", 86.4],
          ["铜仁", 72.4],
          ["毕节", 86.4],
          ["六盘水", 43.3],
          ["黔西南", 72.4]
        ]
      },
      //收视时长TOP
      viewingTopList: {
        id: "userViewingBehavior",
        data: [
          {
            topNum: 1,
            programName: "疯狂的外星人",
            programSource: "电影",
            hot: "90%",
            playNum: "12.3"
          },
          {
            topNum: 2,
            programName: "熊出没.原始",
            programSource: "少儿",
            hot: "85%",
            playNum: "11.2"
          },
          {
            topNum: 3,
            programName: "流浪地球",
            programSource: "电影",
            hot: "83%",
            playNum: "10.3"
          },
          {
            topNum: 4,
            programName: "人间.喜剧",
            programSource: "电影",
            hot: "80%",
            playNum: "10.1"
          },
          {
            topNum: 5,
            programName: "白发",
            programSource: "电视剧",
            hot: "78%",
            playNum: "9.5"
          },
          {
            topNum: 6,
            programName: "反贪风暴",
            programSource: "电影",
            hot: "73%",
            playNum: "9.2"
          },
          {
            topNum: 7,
            programName: "一出好戏",
            programSource: "电影",
            hot: "70%",
            playNum: "9.0"
          },
          {
            topNum: 8,
            programName: "拜托了冰箱",
            programSource: "综艺",
            hot: "68%",
            playNum: "8.7"
          },
          {
            topNum: 9,
            programName: "极限挑战",
            programSource: "真人秀",
            hot: "64%",
            playNum: "8.5"
          },
          {
            topNum: 10,
            programName: "陈情令",
            programSource: "电视剧",
            hot: "60%",
            playNum: "8.0"
          },
          {
            topNum: 11,
            programName: "反贪风暴",
            programSource: "电影",
            hot: "56%",
            playNum: "7.5"
          },
          {
            topNum: 12,
            programName: "一出好戏",
            programSource: "电影",
            hot: "53%",
            playNum: "7.0"
          },
          {
            topNum: 13,
            programName: "拜托了冰箱",
            programSource: "综艺",
            hot: "50%",
            playNum: "6.8"
          },
          {
            topNum: 14,
            programName: "极限挑战",
            programSource: "真人秀",
            hot: "45%",
            playNum: "6.3"
          },
          {
            topNum: 15,
            programName: "陈情令",
            programSource: "电视剧",
            hot: "40%",
            playNum: "6.0"
          }
        ]
      }
    };
  }
};
</script>
<style scoped>
.option_select {
  /* height: 342px; */
  height: 374px;
}
.viewing_behavior {
  height: 500px;
  margin: 14px 0px;
}
.viewing_top15 {
  height: 520px;
  margin-bottom: 50px;
}
.select_option_content {
  height: 40px;
  text-align: left;
  font-size: 14px;
  color: #333;
}
.select_option_content span {
  font-weight: bold;
}
.chart_height {
  height: calc(100% - 40px);
}

/* 用户收视行为页自适应开始 */
@media (max-width: 1450px) {
  .viewing_behavior .chart_height.el-col-12 {
    width: 100%;
    height: 360px;
  }
  .viewing_behavior {
    height: auto;
  }
}
</style>



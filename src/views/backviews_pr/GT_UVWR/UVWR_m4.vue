
<template>
  <div class="UVWR_m4">
    <!-- ///////////////////////// M -->
    <el-row class="model_title">
      <span class="title_border_left"></span>电信侧各市州G+TV一周用户发展活跃情况
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <el-row class>
        <el-col :span="12">
          <p class="m_common_sm_title_font">在册用户数与新增在册用户数（户）</p>
          <!-- 条形图 -->
          <bar-list-chart :barListData="GT_UVWR1_M1"></bar-list-chart>
        </el-col>
        <el-col :span="12">
          <p class="m_common_sm_title_font">用户占比</p>
          <!-- 饼图 -->
          <many-pie-chart :pieData="GT_UVWR1_M2"></many-pie-chart>
          <span class="m_common_content_font">注：由内而外分别是新增在册用户数、在册用户数</span>
        </el-col>
      </el-row>
    </el-row>

    <!-- ///////////////////////// N -->
    <el-row class="model_title">
      <span class="title_border_left"></span>三大基础功能收视数据（电信）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <el-row class>
        <el-col :span="12">
          <p class="m_common_sm_title_font">一周总体观看数据</p>
          <!-- 饼图 -->
          <many-pie-chart2 :pieData="GT_UVWR1_N1"></many-pie-chart2>
          <span class="m_common_content_font">注：由内而外分别是观看用户数、观看次数、观看总时长</span>
        </el-col>
        <el-col :span="12">
          <p class="m_common_sm_title_font">三大基础功能观看用户数每日走势（户）</p>
          <!-- 曲线图 -->
          <line-dotted-chart :lineData="GT_UVWR1_N2"></line-dotted-chart>
        </el-col>
      </el-row>
    </el-row>

    <!-- ///////////////////////// O -->
    <el-row class="model_title">
      <span class="title_border_left"></span>电视直播频道分组收视数据（电信）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 条形图x3 -->
      <el-row class>
        <el-col :span="8">
          <p class="m_common_sm_title_font">分组频道直播用户数（万户）</p>
          <bar-chart-single :chartData="GT_UVWR1_O1"></bar-chart-single>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">分组频道直播次数（万次）</p>
          <bar-chart-single :chartData="GT_UVWR1_O2"></bar-chart-single>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">分组频道直播收视时长（万小时）</p>
          <bar-chart-single :chartData="GT_UVWR1_O3"></bar-chart-single>
        </el-col>
      </el-row>
    </el-row>
    <!-- ///////////////////////// P -->
    <el-row class="model_title">
      <span class="title_border_left"></span>电视直播本地频道、节目收视数据（电信）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 列表&条形图 -->
      <!-- 曲线图 -->
      <!-- 条形图 -->
      <el-row class>
        <el-col :span="12">
          <p class="m_common_sm_title_font">本地频道收视规模排名（万户）</p>
          <bar-list-chart2 :barListData="GT_UVWR1_P1"></bar-list-chart2>
        </el-col>
        <el-col :span="12">
          <div class="m_init_div m_width_80 m_padding_l_4">
            <p class="m_common_sm_title_font">轮播频道每日收视走势（户）</p>
            <smooth-line-chart :smoothLineData="GT_UVWR1_P2"></smooth-line-chart>
          </div>
          <div class="m_init_div m_width_80 m_padding_l_4">
            <p class="m_common_sm_title_font">本地自办节目TOP5（万小时）</p>
            <bar-chart-single :chartData="GT_UVWR1_P3"></bar-chart-single>
          </div>
        </el-col>
      </el-row>
    </el-row>
    <!-- ///////////////////////// Q -->
    <el-row class="model_title">
      <span class="title_border_left"></span>各类型节目点播数据（电信）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 横向条形图x3 -->
      <el-row class>
        <el-col :span="8">
          <p class="m_common_sm_title_font">点播用户数（万户）</p>
          <bar-list-chart :barListData="GT_UVWR1_Q1"></bar-list-chart>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">点播次数（万次）</p>
          <bar-list-chart :barListData="GT_UVWR1_Q2"></bar-list-chart>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">点播时长（万小时）</p>
          <bar-list-chart :barListData="GT_UVWR1_Q3"></bar-list-chart>
        </el-col>
      </el-row>
    </el-row>

    <!-- ///////////////////////// R -->
    <el-row class="model_title">
      <span class="title_border_left"></span>主要栏目点击和播放数据（电信）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 横向条形图x3 -->
      <el-row class>
        <el-col :span="8">
          <p class="m_common_sm_title_font">页面点击用户数（万户）</p>
          <bar-list-chart :barListData="GT_UVWR1_R1"></bar-list-chart>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">页面点击次数（万次）</p>
          <bar-list-chart :barListData="GT_UVWR1_R2"></bar-list-chart>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">页面播放时长（万小时）</p>
          <bar-list-chart :barListData="GT_UVWR1_R3"></bar-list-chart>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import Vue from 'vue'
import { commonTools } from "@/utils/test";
import { mapGetters } from "vuex";
import BarListChart from "@/views/backcoms/commoncomponents2/BarListChart_Change"; //排名柱状图
import BarListChart2 from "@/views/backcoms/commoncomponents2/BarListChart_Change2"; //排名柱状图

import ManyPieChart from "@/views/backcoms/commoncomponents2/ManyPieChart_Change"; //整体收拾行为分析（2个空心饼图组成的图表）
import ManyPieChart2 from "@/views/backcoms/commoncomponents2/ManyPieChart_Change2"; //整体收拾行为分析（3个空心饼图组成的图表）
import LineDottedChart from "@/views/backcoms/commoncomponents2/LineDottedChart_Change"; //4月新增在册用户数组件（折线图含虚线）
import BarChartSingle from "@/views/backcoms/commoncomponents2/BarChartSingle_Change"; //（空心）饼图组件
import SmoothLineChart from "@/views/backcoms/commoncomponents2/SmoothLineChart_Change"; //平滑曲线折线图组件

export default {
  name: "UVWR_m4",
  components: {
    "bar-chart-single": BarChartSingle,
    "bar-list-chart": BarListChart,
    "bar-list-chart2": BarListChart2,
    "many-pie-chart": ManyPieChart,
    "many-pie-chart2": ManyPieChart2,
    "line-dotted-chart": LineDottedChart,
    "smooth-line-chart": SmoothLineChart
  },
  props: ["api_data_m4", "api_data_m4_range"],
  computed: {
    ...mapGetters(["PR_week"]),
  },
  watch: {
    api_data_m4(newValue, oldValue) {
      // console.log("api_data_m4 - 电信专项数据", newValue)
      let vm = this;
      //设置本周与上周时间（0603——0609  0610-0616）
      let temp_time = commonTools.split_WeeksDays_byDWwr(this.PR_week);
      let WeekFormat = commonTools.weekDaysShowFormat_AndBeforeWeek(
        temp_time.week_day_start,
        temp_time.week_day_end
      );
      let beforeWeekFormat = WeekFormat.beforeWeekFormat;  //上周时间
      let currentWeekFormat = WeekFormat.currentWeekFormat; // 本周时间

      ////////// 三大基础功能收视数据（移动） 一周总体观看数据  GT_UVWR1_H1
      // 内-》外 1-》3 用户数 次数 总时长

      //在册用户数与新增在册用户数（户）
      let register_and_new_num = newValue.data.responses[0].aggregations.ac.buckets
      let register_num_temp = []
      let new_num_temp = []
      register_and_new_num.forEach((value, index) => {
        if (index < 9) {
          //console.log(commonTools.acConvert_Single(value.key), value.register_num.value, value.new_num.value)
          //在册用户数与新增在册用户数（户）
          Vue.set(vm.GT_UVWR1_M1.data[9 - index], 0, commonTools.acConvert_Single(value.key))
          Vue.set(vm.GT_UVWR1_M1.data[9 - index], 1, value.register_num.value)
          Vue.set(vm.GT_UVWR1_M1.data[9 - index], 2, value.new_num.value)

          //在册用户占比
          register_num_temp.push({
            name: commonTools.acConvert_Single(value.key),
            value: value.register_num.value
          })
          //新增用户占比
          new_num_temp.push({
            name: commonTools.acConvert_Single(value.key),
            value: value.new_num.value
          })
        }
      })
      vm.GT_UVWR1_M2.content[0].data = register_num_temp
      vm.GT_UVWR1_M2.content[1].data = new_num_temp
      // console.log("GT_UVWR1_M2", vm.GT_UVWR1_M2.content)

      //三大基础功能收视数据（电信）
      //一周总体观看数据
      let onlive1 = newValue.data.responses[3].aggregations.onlive_user_num.value;
      let onlive2 = newValue.data.responses[3].aggregations.onlive_freq.value;
      let onlive3 = newValue.data.responses[3].aggregations.onlive_dur.value;
      let demand1 = newValue.data.responses[4].aggregations.demand_user_num.value;
      let demand2 = newValue.data.responses[4].aggregations.demand_freq.value;
      let demand3 = newValue.data.responses[4].aggregations.demand_dur.value;
      let watch1 = newValue.data.responses[5].aggregations.watch_user_num.value;
      let watch2 = newValue.data.responses[5].aggregations.watch_freq.value;
      let watch3 = newValue.data.responses[5].aggregations.watch_dur.value;
      let content = [
        {
          title: "观看总时长",
          data: [
            { value: onlive3, name: "直播" },
            { value: demand3, name: "点播" },
            { value: watch3, name: "回看" }
          ]
        },
        {
          title: "观看次数",
          data: [
            { value: onlive2, name: "直播" },
            { value: demand2, name: "点播" },
            { value: watch2, name: "回看" }
          ]
        },
        {
          title: "观看用户数",
          data: [
            { value: onlive1, name: "直播" },
            { value: demand1, name: "点播" },
            { value: watch1, name: "回看" }
          ]
        }
      ];
      vm.GT_UVWR1_N1.content = content;

      //三大基础功能观看用户数每日走势（万户）
      let week_user_temp = [
        ["product",], ["直播",], ["点播",], ["回看",], ["开机用户数",]
      ]
      let open_num = newValue.data.responses[6].aggregations.statistical_granularity.buckets  //一周开机用户数
      let onlive_num = newValue.data.responses[7].aggregations.statistical_granularity.buckets  //一周直播观看用户
      let demand_num = newValue.data.responses[8].aggregations.statistical_granularity.buckets  //一周点播观看用户
      let watch_num = newValue.data.responses[9].aggregations.statistical_granularity.buckets  //一周回看观看用户
      open_num.forEach((value, index) => {
        // console.log("一周开机用户数", value.key, value.open_num.value)
        let setDate = new Date(value.key)
        let setdateYear = (setDate.getFullYear()) + "年"
        let setDateMonth = (setDate.getMonth() + 1) + "月"
        let setDateDay = (setDate.getDate()) + '日'
        let weekDate = setDateMonth + setDateDay
        week_user_temp[0].push(weekDate)
        week_user_temp[4].push(value.open_num.value)
      })
      onlive_num.forEach((value, index) => {
        week_user_temp[1].push(value.onlive_user_num.value)
      })
      demand_num.forEach((value, index) => {
        week_user_temp[2].push(value.demand_user_num.value)
      })
      watch_num.forEach((value, index) => {
        week_user_temp[3].push(value.watch_user_num.value)
      })
      vm.GT_UVWR1_N2.data = week_user_temp

      //电视直播频道分组收视数据（移动）
      let onlive_data = newValue.data.responses[10].aggregations.channel_flag.buckets
      // vm.GT_UVWR1_I1.data[0].push(beforeWeekFormat, currentWeekFormat)
      Vue.set(vm.GT_UVWR1_O1.data[0], 1, beforeWeekFormat)
      Vue.set(vm.GT_UVWR1_O1.data[0], 2, currentWeekFormat)
      Vue.set(vm.GT_UVWR1_O2.data[0], 1, beforeWeekFormat)
      Vue.set(vm.GT_UVWR1_O2.data[0], 2, currentWeekFormat)
      Vue.set(vm.GT_UVWR1_O3.data[0], 1, beforeWeekFormat)
      Vue.set(vm.GT_UVWR1_O3.data[0], 2, currentWeekFormat)
      onlive_data.forEach((value, index) => {
        switch (value.key) {
          case '央视':
            Vue.set(vm.GT_UVWR1_O1.data[1], 2, Number((value.onlive_user_num.value / 10000).toFixed(1)))
            Vue.set(vm.GT_UVWR1_O2.data[1], 2, Number((value.onlive_freq.value / 10000).toFixed(1)))
            Vue.set(vm.GT_UVWR1_O3.data[1], 2, Number((value.onlive_dur.value / 10000).toFixed(1)))
            break;
          case '卫视':
            Vue.set(vm.GT_UVWR1_O1.data[2], 2, Number((value.onlive_user_num.value / 10000).toFixed(1)))
            Vue.set(vm.GT_UVWR1_O2.data[2], 2, Number((value.onlive_freq.value / 10000).toFixed(1)))
            Vue.set(vm.GT_UVWR1_O3.data[2], 2, Number((value.onlive_dur.value / 10000).toFixed(1)))
            break;
          case '本地':
            Vue.set(vm.GT_UVWR1_O1.data[3], 2, Number((value.onlive_user_num.value / 10000).toFixed(1)))
            Vue.set(vm.GT_UVWR1_O2.data[3], 2, Number((value.onlive_freq.value / 10000).toFixed(1)))
            Vue.set(vm.GT_UVWR1_O3.data[3], 2, Number((value.onlive_dur.value / 10000).toFixed(1)))
            break;
          case '轮播':
            Vue.set(vm.GT_UVWR1_O1.data[4], 2, Number((value.onlive_user_num.value / 10000).toFixed(1)))
            Vue.set(vm.GT_UVWR1_O2.data[4], 2, Number((value.onlive_freq.value / 10000).toFixed(1)))
            Vue.set(vm.GT_UVWR1_O3.data[4], 2, Number((value.onlive_dur.value / 10000).toFixed(1)))
            break;
        }
      })

      //各类型节目点播数据（移动）
      //点播用户数TOP20
      let demand_top = newValue.data.responses[11].aggregations.channel.buckets
      Vue.set(vm.GT_UVWR1_P1.data[0], 1, currentWeekFormat)
      Vue.set(vm.GT_UVWR1_P1.data[0], 2, beforeWeekFormat)
      demand_top.forEach((value, index) => {
        if (index < 20) {
          // console.log(value.key, Number((value.onlive_user_num.value / 10000).toFixed(1)))
          Vue.set(vm.GT_UVWR1_P1.data[20 - index], 0, value.key)
          Vue.set(vm.GT_UVWR1_P1.data[20 - index], 1, Number((value.onlive_user_num.value / 10000).toFixed(1)))
        }
      })

      //轮播频道每日收视走势（户）
      let lunbo_top = newValue.data.responses[12].aggregations.channel.buckets
      let week_time_data = lunbo_top[0].statistical_granularity.buckets
      let week_time_temp = [["product"], [], [], [], [], []]
      week_time_data.forEach((value, index) => {
        let setDate = new Date(value.key)
        let setdateYear = (setDate.getFullYear()) + "年"
        let setDateMonth = (setDate.getMonth() + 1) + "月"
        let setDateDay = (setDate.getDate()) + '日'
        let weekDate = setDateMonth + setDateDay
        week_time_temp[0].push(weekDate)
      })
      lunbo_top.forEach((value, index) => {
        if (index < 5) {
          week_time_temp[index + 1].push(value.key)
          value.statistical_granularity.buckets.forEach((value2, index2) => {
            week_time_temp[index + 1].push(value2.onlive_user_num.value)
          })
        }
      });
      vm.GT_UVWR1_P2.data = week_time_temp

      //本地自办节目top5
      let local_program = newValue.data.responses[13].aggregations.channel.buckets
      Vue.set(vm.GT_UVWR1_P3.data[0], 1, beforeWeekFormat)
      Vue.set(vm.GT_UVWR1_P3.data[0], 2, currentWeekFormat)
      local_program.forEach((value, index) => {
        if (index < 5) {
          Vue.set(vm.GT_UVWR1_P3.data[index + 1], 0, value.key)
          Vue.set(vm.GT_UVWR1_P3.data[index + 1], 2, Number((value.onlive_dur.value / 10000).toFixed(1)))
        }
      });


      //主要栏目点击和播放数据
      //页面点击用户数
      let program_click_data = newValue.data.responses[15].aggregations.ti.buckets
      Vue.set(vm.GT_UVWR1_R1.data[0], 1, currentWeekFormat)
      Vue.set(vm.GT_UVWR1_R1.data[0], 2, beforeWeekFormat)
      Vue.set(vm.GT_UVWR1_R2.data[0], 1, currentWeekFormat)
      Vue.set(vm.GT_UVWR1_R2.data[0], 2, beforeWeekFormat)
      program_click_data.forEach((value, index) => {
        if (index < 10) {
          // console.log('页面点击和播放时长数据', value.key, value.click_user_num.value)
          Vue.set(vm.GT_UVWR1_R1.data[10 - index], 0, value.key)
          Vue.set(vm.GT_UVWR1_R1.data[10 - index], 1, Number((value.click_user_num.value / 10000).toFixed(1)))
          Vue.set(vm.GT_UVWR1_R2.data[10 - index], 0, value.key)
          Vue.set(vm.GT_UVWR1_R2.data[10 - index], 1, Number((value.click_freq.value / 10000).toFixed(1)))
        }
      })

      //页面播放时长（万小时）
      let program_play_data = newValue.data.responses[16].aggregations.ti.buckets
      Vue.set(vm.GT_UVWR1_R3.data[0], 1, currentWeekFormat)
      Vue.set(vm.GT_UVWR1_R3.data[0], 2, beforeWeekFormat)  //
      program_play_data.forEach((value, index) => {
        if (index < 10) {
          // console.log('页面点击和播放时长数据', value.key, value.demand_dur.value)
          Vue.set(vm.GT_UVWR1_R3.data[10 - index], 0, value.key)
          Vue.set(vm.GT_UVWR1_R3.data[10 - index], 1, Number((value.demand_dur.value / 10000).toFixed(1)))
        }
      })

    },
    //电信上周数据
    api_data_m4_range(newValue, oldValue) {
      // console.log("电信上周数据", newValue)
      let vm = this
      //电视直播频道分组收视数据（移动）
      let onlive_data = newValue.data.responses[10].aggregations.channel_flag.buckets  //分组频道直播数据
      onlive_data.forEach((value, index) => {
        switch (value.key) {
          case '央视':
            Vue.set(vm.GT_UVWR1_O1.data[1], 1, Number((value.onlive_user_num.value / 10000).toFixed(1)))
            Vue.set(vm.GT_UVWR1_O2.data[1], 1, Number((value.onlive_freq.value / 10000).toFixed(1)))
            Vue.set(vm.GT_UVWR1_O3.data[1], 1, Number((value.onlive_dur.value / 10000).toFixed(1)))
            break;
          case '卫视':
            Vue.set(vm.GT_UVWR1_O1.data[2], 1, Number((value.onlive_user_num.value / 10000).toFixed(1)))
            Vue.set(vm.GT_UVWR1_O2.data[2], 1, Number((value.onlive_freq.value / 10000).toFixed(1)))
            Vue.set(vm.GT_UVWR1_O3.data[2], 1, Number((value.onlive_dur.value / 10000).toFixed(1)))
            break;
          case '本地':
            Vue.set(vm.GT_UVWR1_O1.data[3], 1, Number((value.onlive_user_num.value / 10000).toFixed(1)))
            Vue.set(vm.GT_UVWR1_O2.data[3], 1, Number((value.onlive_freq.value / 10000).toFixed(1)))
            Vue.set(vm.GT_UVWR1_O3.data[3], 1, Number((value.onlive_dur.value / 10000).toFixed(1)))
            break;
          case '轮播':
            Vue.set(vm.GT_UVWR1_O1.data[4], 1, Number((value.onlive_user_num.value / 10000).toFixed(1)))
            Vue.set(vm.GT_UVWR1_O2.data[4], 1, Number((value.onlive_freq.value / 10000).toFixed(1)))
            Vue.set(vm.GT_UVWR1_O3.data[4], 1, Number((value.onlive_dur.value / 10000).toFixed(1)))
            break;
        }
      })

      //本地频道收视规模排名（万户）
      let demand_top = newValue.data.responses[11].aggregations.channel.buckets
      demand_top.forEach((value, index) => {
        if (index < 20) {
          // console.log(value.key, Number((value.onlive_user_num.value / 10000).toFixed(1)))
          Vue.set(vm.GT_UVWR1_P1.data[20 - index], 2, Number((value.onlive_user_num.value / 10000).toFixed(1)))
        }
      })

      //本地自办节目TOP5（万小时）
      let local_program = newValue.data.responses[13].aggregations.channel.buckets
      local_program.forEach((value, index) => {
        if (index < 5) {
          Vue.set(vm.GT_UVWR1_P3.data[index + 1], 1, Number((value.onlive_dur.value / 10000).toFixed(1)))
        }
      });



      //主要栏目点击和播放数据
      //页面点击用户数
      let program_click_data = newValue.data.responses[15].aggregations.ti.buckets
      program_click_data.forEach((value, index) => {
        if (index < 10) {
          Vue.set(vm.GT_UVWR1_R1.data[10 - index], 2, Number((value.click_user_num.value / 10000).toFixed(1)))
          Vue.set(vm.GT_UVWR1_R2.data[10 - index], 2, Number((value.click_freq.value / 10000).toFixed(1)))
        }
      })

      //页面播放时长（万小时）
      let program_play_data = newValue.data.responses[16].aggregations.ti.buckets
      program_play_data.forEach((value, index) => {
        if (index < 10) {
          Vue.set(vm.GT_UVWR1_R3.data[10 - index], 2, Number((value.demand_dur.value / 10000).toFixed(1)))
        }
      })

    }
  },
  methods: {
    returnFloat(value) {
      // 保留两位小数
      var value = Math.round(parseFloat(value) * 100) / 100;
      var xsd = value.toString().split(".");
      if (xsd.length == 1) {
        value = value.toString() + ".00";
        return value;
      }
      if (xsd.length > 1) {
        if (xsd[1].length < 2) {
          value = value.toString() + "0";
        }
        return value;
      }
    },
    //冒泡排序 -- 从序数index几开始 （反向）
    sortArr(arr, index) {
      for (var i = 0; i < arr.length - 1; i++) {
        //决定每一轮比较多少次
        for (var j = index; j < arr.length - i - 1; j++) {
          if (arr[j][1] < arr[j + 1][1]) {
            // 判断第二位
            var tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
          }
        }
      }
      return arr;
    },
    //冒泡排序 -- 从序数index几开始
    sortArrZ(arr, index) {
      for (var i = 0; i < arr.length - 1; i++) {
        //决定每一轮比较多少次
        for (var j = index; j < arr.length - i - 1; j++) {
          if (arr[j][1] > arr[j + 1][1]) {
            // 判断第二位
            var tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
          }
        }
      }
      return arr;
    }
  },
  mounted() {
    let vm = this;

  },

  data() {
    return {
      GT_UVWR1_M1: {
        title: "",
        id: "GT_UVWR1_M1",
        height: "height:500px;",
        color: ["#5B9BD5", "#FFC000"],
        data: [
          ["product", "在册用户数", "新增在册用户数"],
          [], [], [], [], [], [], [], [], []
          // ["遵义", 152, 111],
          // ["贵阳", 242, 222],
          // ["黔东南", 485, 433],
          // ["毕节", 717, 777],
          // ["黔南", 733, 656],
          // ["铜仁", 894, 888],
          // ["六盘水", 928, 854],
          // ["黔西南", 937, 999],
          // ["安顺", 1324, 1111]
        ]
      },
      GT_UVWR1_M2: {
        title: "",
        id: "GT_UVWR1_M2",
        color: [
          "#5B9BD5",
          "#FFC000",
          "#ED7D31",
          "#9DC3E6",
          "#FFD966",
          "#F4B183",
          "#DEEBF7",
          "#FFF2CC",
          "#FBE5D6"
        ],
        content: [
          {
            title: "在册用户数",
            data: [
              // { value: 535, name: "遵义" },
              // { value: 410, name: "贵阳" },
              // { value: 348, name: "黔东南" },
              // { value: 410, name: "毕节" },
              // { value: 410, name: "黔南" },
              // { value: 410, name: "铜仁" },
              // { value: 410, name: "六盘水" },
              // { value: 410, name: "黔西南" },
              // { value: 410, name: "安顺" }
            ]
          },
          {
            title: "新增在册用户数",
            data: [
              // { value: 535, name: "遵义" },
              // { value: 410, name: "贵阳" },
              // { value: 348, name: "黔东南" },
              // { value: 410, name: "毕节" },
              // { value: 410, name: "黔南" },
              // { value: 410, name: "铜仁" },
              // { value: 410, name: "六盘水" },
              // { value: 410, name: "黔西南" },
              // { value: 410, name: "安顺" }
            ]
          }
        ]
      },
      GT_UVWR1_N1: {
        title: "",
        id: "GT_UVWR1_N1",
        color: ["#C2DEAE", "#5B9BD5", "#FFC000"],
        content: [
          // {
          //   title: "观看用户数",
          //   data: [
          //     { value: 535, name: "直播" },
          //     { value: 410, name: "点播" },
          //     { value: 348, name: "回看" }
          //   ]
          // },
          // {
          //   title: "观看次数",
          //   data: [
          //     { value: 535, name: "直播" },
          //     { value: 410, name: "点播" },
          //     { value: 348, name: "回看" }
          //   ]
          // },
          // {
          //   title: "观看总时长",
          //   data: [
          //     { value: 535, name: "直播" },
          //     { value: 410, name: "点播" },
          //     { value: 348, name: "回看" }
          //   ]
          // }
        ]
      },
      GT_UVWR1_N2: {
        title: "",
        id: "GT_UVWR1_N2",
        color: ["#70AD47", "#5B9BD5", "#A6A6A6", "#FFC000"],
        data: [
          // [
          //   "product",
          //   "4月1日",
          //   "4月2日",
          //   "4月3日",
          //   "4月4日",
          //   "4月5日",
          //   "4月6日",
          //   "4月7日"
          // ],
          // ["直播", 11.7, 11.8, 11.1, 10.9, 10.8, 11.2, 10.8],
          // ["点播", 20.4, 20.3, 20.2, 20.1, 20.8, 20.1, 20.2],
          // ["开机用户数", 32.9, 31.9, 31.5, 31.4, 31.2, 30.8, 30.7],
          // ["回看", 0.9, 1.1, 0.7, 1.2, 1.3, 0.7, 0.8]
        ]
      },
      GT_UVWR1_O1: {
        data: [
          ["product",],
          ["央视",],
          ["卫视",],
          ["本地",],
          ["轮播",]
          // ["product", "0520-0526", "0527-0602"],
          // ["央视", 48.0, 48.1],
          // ["卫视", 154.2, 157.4],
          // ["本地", 60.1, 65.0],
          // ["轮播", 15.1, 16.0]
        ],
        title: "",
        id: "GT_UVWR1_O1",
        color: ["#E7E6E6", "#A9D18E"],
        ifYaxisShow: true,
        ifLegendShow: true,
        m_barWidth: "12"
      },
      GT_UVWR1_O2: {
        data: [
          ["product",],
          ["央视",],
          ["卫视",],
          ["本地",],
          ["轮播",]
          // ["product", "0520-0526", "0527-0602"],
          // ["央视", 48.0, 48.1],
          // ["卫视", 154.2, 157.4],
          // ["本地", 60.1, 65.0],
          // ["轮播", 15.1, 16.0]
        ],
        title: "",
        id: "GT_UVWR1_O2",
        color: ["#E7E6E6", "#5B9BD5"],
        ifYaxisShow: true,
        ifLegendShow: true,
        m_barWidth: "12"
      },
      GT_UVWR1_O3: {
        data: [
          ["product",],
          ["央视",],
          ["卫视",],
          ["本地",],
          ["轮播",]
          // ["product", "0520-0526", "0527-0602"],
          // ["央视", 48.0, 48.1],
          // ["卫视", 154.2, 157.4],
          // ["本地", 60.1, 65.0],
          // ["轮播", 15.1, 16.0]
        ],
        title: "",
        id: "GT_UVWR1_O3",
        color: ["#E7E6E6", "#FFC000"],
        ifYaxisShow: true,
        ifLegendShow: true,
        m_barWidth: "12"
      },
      GT_UVWR1_P1: {
        title: "",
        id: "GT_UVWR1_P1",
        height: "height:720px;",
        color: ["#A9D18E", "#EDEDED"],
        data: [
          ["product",],
          [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
          // ["product", "0527-0602", "0520-0526"],
          // ["贵州卫视", 20, 20],
          // ["贵州-2 公共频道", 18, 18],
          // ["贵州-3 影视文艺频道", 15, 15],
          // ["贵州-4 大众生活频道", 17, 17],
          // ["贵州-5 法制频道", 16, 16],
          // ["华语影院", 14, 14],
          // ["贵阳-4 都市频道", 13, 13],
          // ["贵州-6 科教健康频道", 12, 12],
          // ["贵州-7 经济频道", 11.5, 11.5],
          // ["谍战剧场", 10, 10],
          // ["贵阳-3 法制频道", 9.2, 9.2],
          // ["海外佳片", 8.8, 8.8],
          // ["贵阳-2 经济生活频道", 8.0, 8.0],
          // ["贵阳-1 新闻综合频道", 7.7, 7.7],
          // ["都市剧场", 5.5, 5.5],
          // ["动画乐园", 3.3, 3.3],
          // ["六盘水-2", 2.2, 2.2],
          // ["贵州移动电视", 2.1, 2.1],
          // ["六盘水-1", 1.8, 1.8],
          // ["黔西南-综合", 1.4, 1.4],
          // ["贵阳-5 旅游生活频道", 0.8, 0.8],
          // ["黔西南-公共", 0.7, 0.7]
        ]
      },
      GT_UVWR1_P2: {
        title: "",
        id: "GT_UVWR1_P2",
        color: ["#70AD47", "#FFCCCC ", "#5B9BD5", "#FFC000", "#ED7D31"],
        data: [
          // [
          //   "product",
          //   "6月24日",
          //   "6月25日",
          //   "6月26日",
          //   "6月27日",
          //   "6月28日",
          //   "6月29日",
          //   "6月30日"
          // ],
          // ["谍战剧场", 12140, 12370, 12800, 12200, 12234, 12640, 12859],
          // ["华语影院", 41400, 41700, 41800, 42000, 42340, 42400, 42590],
          // ["海外佳片", 52140, 52170, 52580, 52400, 52534, 52640, 52759],
          // ["都市剧场", 21140, 22170, 25280, 24200, 25234, 22640, 22759],
          // ["动画乐园", 32140, 32170, 32580, 32400, 32534, 32640, 32759]
        ]
      },
      GT_UVWR1_P3: {
        data: [
          ["product",], [], [], [], [], []
          // ["product", "0520-0526", "0527-0602"],
          // ["百姓关注 贵州-2", 48.0, 48.1],
          // ["贵州新闻联播 贵州卫视", 154.2, 157.4],
          // ["第二放映室 贵州-2", 60.1, 65.0],
          // ["非常友茗堂 贵州-2", 15.1, 16.0],
          // ["牌王争霸 贵州-4", 15.1, 16.0]
        ],
        title: "",
        id: "GT_UVWR1_P3",
        color: ["#E7E6E6", "#5B9BD5"],
        ifYaxisShow: false,
        ifLegendShow: true,
        m_barWidth: "40%"
      },
      GT_UVWR1_Q1: {
        title: "",
        id: "GT_UVWR1_Q1",
        height: "height:600px;",
        color: ["#A9D18E", "#EDEDED"],
        data: [
          // ["product", "0527-0602", "0520-0526"],
          // ["少儿", 20, 20],
          // ["电影", 18, 18],
          // ["热剧", 15, 15],
          // ["游戏", 17, 17],
          // ["动漫", 16, 16],
          // ["综艺", 14, 14],
          // ["纪实", 13, 13],
          // ["音乐", 12, 12],
          // ["体育", 11.5, 11.5],
          // ["资讯", 10, 10]
        ]
      },
      GT_UVWR1_Q2: {
        title: "",
        id: "GT_UVWR1_Q2",
        height: "height:600px;",
        color: ["#5B9BD5", "#EDEDED"],
        data: [
          // ["product", "0527-0602", "0520-0526"],
          // ["少儿", 20, 20],
          // ["电影", 18, 18],
          // ["热剧", 15, 15],
          // ["游戏", 17, 17],
          // ["动漫", 16, 16],
          // ["综艺", 14, 14],
          // ["纪实", 13, 13],
          // ["音乐", 12, 12],
          // ["体育", 11.5, 11.5],
          // ["资讯", 10, 10]
        ]
      },
      GT_UVWR1_Q3: {
        title: "",
        id: "GT_UVWR1_Q3",
        height: "height:600px;",
        color: ["#FFC000", "#EDEDED"],
        data: [
          // ["product", "0527-0602", "0520-0526"],
          // ["少儿", 20, 20],
          // ["电影", 18, 18],
          // ["热剧", 15, 15],
          // ["游戏", 17, 17],
          // ["动漫", 16, 16],
          // ["综艺", 14, 14],
          // ["纪实", 13, 13],
          // ["音乐", 12, 12],
          // ["体育", 11.5, 11.5],
          // ["资讯", 10, 10]
        ]
      },
      GT_UVWR1_R1: {
        title: "",
        id: "GT_UVWR1_R1",
        height: "height:600px;",
        color: ["#A9D18E", "#EDEDED"],
        data: [
          ["product",], [], [], [], [], [], [], [], [], [], []
          // ["product", "0527-0602", "0520-0526"],
          // ["少儿", 20, 20],
          // ["电影", 18, 18],
          // ["热剧", 15, 15],
          // ["游戏", 17, 17],
          // ["动漫", 16, 16],
          // ["综艺", 14, 14],
          // ["纪实", 13, 13],
          // ["音乐", 12, 12],
          // ["体育", 11.5, 11.5],
          // ["资讯", 10, 10]
        ]
      },
      GT_UVWR1_R2: {
        title: "",
        id: "GT_UVWR1_R2",
        height: "height:600px;",
        color: ["#5B9BD5", "#EDEDED"],
        data: [
          ["product",], [], [], [], [], [], [], [], [], [], []
          // ["product", "0527-0602", "0520-0526"],
          // ["少儿", 20, 20],
          // ["电影", 18, 18],
          // ["热剧", 15, 15],
          // ["游戏", 17, 17],
          // ["动漫", 16, 16],
          // ["综艺", 14, 14],
          // ["纪实", 13, 13],
          // ["音乐", 12, 12],
          // ["体育", 11.5, 11.5],
          // ["资讯", 10, 10]
        ]
      },
      GT_UVWR1_R3: {
        title: "",
        id: "GT_UVWR1_R3",
        height: "height:600px;",
        color: ["#FFC000", "#EDEDED"],
        data: [
          ["product",], [], [], [], [], [], [], [], [], [], []
          // ["product", "0527-0602", "0520-0526"],
          // ["少儿", 20, 20],
          // ["电影", 18, 18],
          // ["热剧", 15, 15],
          // ["游戏", 17, 17],
          // ["动漫", 16, 16],
          // ["综艺", 14, 14],
          // ["纪实", 13, 13],
          // ["音乐", 12, 12],
          // ["体育", 11.5, 11.5],
          // ["资讯", 10, 10]
        ]
      }
    };
  }
};
</script>

<style scoped>
</style>


<style >
.UVWR_m4 .analysis_of_viewing1 span {
  font-size: 12px;
  color: red;
}
</style>
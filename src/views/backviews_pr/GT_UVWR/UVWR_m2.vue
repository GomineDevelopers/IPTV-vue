<template>
  <div class="UVWR_m2">
    <!-- ///////////////////////// G -->
    <el-row class="model_title">
      <span class="title_border_left"></span>移动侧各市州G+TV一周用户发展活跃情况
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <el-row class>
        <el-col :span="12">
          <p class="m_common_sm_title_font">在册用户数与新增在册用户数（户）</p>
          <!-- 条形图 -->
          <bar-list-chart :barListData="GT_UVWR1_G1"></bar-list-chart>
        </el-col>
        <el-col :span="12">
          <p class="m_common_sm_title_font">用户占比</p>
          <!-- 饼图 -->
          <many-pie-chart :pieData="GT_UVWR1_G2"></many-pie-chart>
          <span class="m_common_content_font">注：由内而外分别是新增在册用户数、在册用户数</span>
        </el-col>
      </el-row>
      <!-- <p class="m_common_content_font">移动用户一周新增在册用户数31,643户，较前一周增加1,795户，增幅6.0%。</p> -->
      <!-- <p>黔西南州用户数超越安顺市，摆脱副班长的位置。贵阳、毕节、铜仁、黔西南新增用户占比高于在册用户占比，上周用户增速高于平均水平。</p> -->
    </el-row>

    <!-- ///////////////////////// H -->
    <el-row class="model_title">
      <span class="title_border_left"></span>三大基础功能收视数据（移动）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <el-row class>
        <el-col :span="12">
          <p class="m_common_sm_title_font">一周总体观看数据</p>
          <!-- 饼图 -->
          <many-pie-chart2 :pieData="GT_UVWR1_H1"></many-pie-chart2>
          <span class="m_common_content_font">注：由内而外分别是观看用户数、观看次数、观看总时长</span>
        </el-col>
        <el-col :span="12">
          <p class="m_common_sm_title_font">三大基础功能观看用户数每日走势（户）</p>
          <!-- 曲线图 -->
          <line-dotted-chart :lineData="GT_UVWR1_H2"></line-dotted-chart>
        </el-col>
      </el-row>
    </el-row>

    <!-- ///////////////////////// I -->
    <el-row class="model_title">
      <span class="title_border_left"></span>电视直播频道分组收视数据（移动）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 条形图x3 -->
      <el-row class>
        <el-col :span="8">
          <p class="m_common_sm_title_font">分组频道直播用户数（万户）</p>
          <bar-chart-single :chartData="GT_UVWR1_I1"></bar-chart-single>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">分组频道直播次数（万次）</p>
          <bar-chart-single :chartData="GT_UVWR1_I2"></bar-chart-single>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">分组频道直播收视时长（小时）</p>
          <bar-chart-single :chartData="GT_UVWR1_I3"></bar-chart-single>
        </el-col>
      </el-row>
    </el-row>
    <!-- ///////////////////////// J -->
    <el-row class="model_title">
      <span class="title_border_left"></span>电视直播本地频道、节目收视数据（移动）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 列表&条形图 -->
      <!-- 曲线图 -->
      <!-- 条形图 -->
      <el-row class>
        <el-col :span="12">
          <p class="m_common_sm_title_font">本地频道收视规模排名（万户）</p>
          <bar-list-chart2 :barListData="GT_UVWR1_J1"></bar-list-chart2>
        </el-col>
        <el-col :span="12">
          <div class="m_init_div m_width_80 m_padding_l_4">
            <p class="m_common_sm_title_font">轮播频道每日收视走势（户）</p>
            <smooth-line-chart :smoothLineData="GT_UVWR1_J2"></smooth-line-chart>
          </div>
          <div class="m_init_div m_width_80 m_padding_l_4">
            <p class="m_common_sm_title_font">本地自办节目TOP5（万小时）</p>
            <bar-chart-single :chartData="GT_UVWR1_J3"></bar-chart-single>
          </div>
        </el-col>
      </el-row>
    </el-row>
    <!-- ///////////////////////// K -->
    <el-row class="model_title">
      <span class="title_border_left"></span>各类型节目点播数据（移动）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 横向条形图x3 -->
      <el-row class>
        <el-col :span="8">
          <p class="m_common_sm_title_font">点播用户数（万户）</p>
          <bar-list-chart :barListData="GT_UVWR1_K1"></bar-list-chart>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">点播次数（万次）</p>
          <bar-list-chart :barListData="GT_UVWR1_K2"></bar-list-chart>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">点播时长（万小时）</p>
          <bar-list-chart :barListData="GT_UVWR1_K3"></bar-list-chart>
        </el-col>
      </el-row>
    </el-row>

    <!-- ///////////////////////// L -->
    <el-row class="model_title">
      <span class="title_border_left"></span>主要栏目点击和播放数据（移动）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 横向条形图x3 -->
      <el-row class>
        <el-col :span="8">
          <p class="m_common_sm_title_font">页面点击用户数（万户）</p>
          <bar-list-chart :barListData="GT_UVWR1_L1"></bar-list-chart>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">页面点击次数（万次）</p>
          <bar-list-chart :barListData="GT_UVWR1_L2"></bar-list-chart>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">页面播放时长（万小时）</p>
          <bar-list-chart :barListData="GT_UVWR1_L3"></bar-list-chart>
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
import BarChartSingle from "@/views/backcoms/commoncomponents2/BarChartSingle_Change";
import SmoothLineChart from "@/views/backcoms/commoncomponents2/SmoothLineChart_Change"; //平滑曲线折线图组件

export default {
  name: "UVWR_m2",
  components: {
    "bar-chart-single": BarChartSingle,
    "bar-list-chart": BarListChart,
    "bar-list-chart2": BarListChart2,
    "many-pie-chart": ManyPieChart,
    "many-pie-chart2": ManyPieChart2,
    "line-dotted-chart": LineDottedChart,
    "smooth-line-chart": SmoothLineChart
  },
  props: ["api_data_m2", "api_data_m2_range"],
  computed: {
    ...mapGetters(["PR_week", "PR_operator","PR_Report_index"]),
  },
  watch: {
    PR_operator(newValue, oldValue) {
      let vm = this;
      // excel 处理
      vm.Excel_data_manage();
    },
    PR_week(newValue, oldValue) {
      let vm = this;
      // excel 处理
      vm.Excel_data_manage();
    },
    //本周数据
    api_data_m2(newValue, oldValue) {
      console.log("api_data_m2 - 移动专项数据(本周)", newValue)
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

      try {
        //在册用户数与新增在册用户数（户）
        let register_and_new_num = newValue.data.responses[0].aggregations.ac.buckets
        let register_num_temp = []
        let new_num_temp = []
        register_and_new_num.forEach((value, index) => {
          if (index < 9) {
            // console.log(commonTools.acConvert_Single(value.key), value.register_num.buckets[0].register_num.value, value.new_num.value)
            //在册用户数与新增在册用户数（户）
            Vue.set(vm.GT_UVWR1_G1.data[9 - index], 0, commonTools.acConvert_Single(value.key))
            Vue.set(vm.GT_UVWR1_G1.data[9 - index], 1, value.register_num.buckets[0].register_num.value)
            Vue.set(vm.GT_UVWR1_G1.data[9 - index], 2, value.new_num.value)

            //在册用户占比
            register_num_temp.push({
              name: commonTools.acConvert_Single(value.key),
              value: value.register_num.buckets[0].register_num.value
            })
            //新增用户占比
            new_num_temp.push({
              name: commonTools.acConvert_Single(value.key),
              value: value.new_num.value
            })
          }
        })
        vm.GT_UVWR1_G2.content[0].data = register_num_temp
        vm.GT_UVWR1_G2.content[1].data = new_num_temp
        // console.log("GT_UVWR1_G2", vm.GT_UVWR1_G2.content)
      } catch (error) {
        console.log(error);
      }

      try {
        //三大基础功能收视数据（移动）
        //一周总体观看数据
        //直播
        let onlive1 = newValue.data.responses[3].aggregations.onlive_user_num.value;
        let onlive2 = newValue.data.responses[3].aggregations.onlive_freq.value;
        let onlive3 = newValue.data.responses[3].aggregations.onlive_dur.value;
        //点播
        let demand1 = newValue.data.responses[4].aggregations.demand_user_num.value;
        let demand2 = newValue.data.responses[4].aggregations.demand_freq.value;
        let demand3 = newValue.data.responses[4].aggregations.demand_dur.value;
        //回看
        let watch1 = newValue.data.responses[5].aggregations.watch_user_num.value;
        let watch2 = newValue.data.responses[5].aggregations.watch_freq.value;
        let watch3 = newValue.data.responses[5].aggregations.watch_dur.value;
        let content = [
          {
            title: "观看总时长",
            data: [
              { value: (onlive3 / 3600).toFixed(2), name: "直播" },
              { value: (demand3 / 3600).toFixed(2), name: "点播" },
              { value: (watch3 / 3600).toFixed(2), name: "回看" }
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
        vm.GT_UVWR1_H1.content = content;
        // console.log("一周总体观看数据", vm.GT_UVWR1_H1.content)
      } catch (error) {
        console.log(error);
      }

      try {
        //三大基础功能观看用户数每日走势（万户）
        let week_user_temp = [
          ["product",], ["直播",], ["点播",], ["回看"], ["开机用户数",]
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
        // console.log("一周直播数据", week_user_temp)
        vm.GT_UVWR1_H2.data = week_user_temp
        // console.log("vm.GT_UVWR1_H2", vm.GT_UVWR1_H2)
      } catch (error) {
        console.log(error);
      }

      try {
        //电视直播频道分组收视数据（移动）
        let onlive_data = newValue.data.responses[10].aggregations.channel_flag.buckets
        // vm.GT_UVWR1_I1.data[0].push(beforeWeekFormat, currentWeekFormat)
        Vue.set(vm.GT_UVWR1_I1.data[0], 1, beforeWeekFormat)
        Vue.set(vm.GT_UVWR1_I1.data[0], 2, currentWeekFormat)
        Vue.set(vm.GT_UVWR1_I2.data[0], 1, beforeWeekFormat)
        Vue.set(vm.GT_UVWR1_I2.data[0], 2, currentWeekFormat)
        Vue.set(vm.GT_UVWR1_I3.data[0], 1, beforeWeekFormat)
        Vue.set(vm.GT_UVWR1_I3.data[0], 2, currentWeekFormat)
        onlive_data.forEach((value, index) => {
          switch (value.key) {
            case '央视':
              Vue.set(vm.GT_UVWR1_I1.data[1], 2, Number((value.onlive_user_num.value / 10000).toFixed(1)))
              Vue.set(vm.GT_UVWR1_I2.data[1], 2, Number((value.onlive_freq.value / 10000).toFixed(1)))
              Vue.set(vm.GT_UVWR1_I3.data[1], 2, Number((value.onlive_dur.value / 3600).toFixed(1)))
              break;
            case '卫视':
              Vue.set(vm.GT_UVWR1_I1.data[2], 2, Number((value.onlive_user_num.value / 10000).toFixed(1)))
              Vue.set(vm.GT_UVWR1_I2.data[2], 2, Number((value.onlive_freq.value / 10000).toFixed(1)))
              Vue.set(vm.GT_UVWR1_I3.data[2], 2, Number((value.onlive_dur.value / 3600).toFixed(1)))
              break;
            case '本地':
              Vue.set(vm.GT_UVWR1_I1.data[3], 2, Number((value.onlive_user_num.value / 10000).toFixed(1)))
              Vue.set(vm.GT_UVWR1_I2.data[3], 2, Number((value.onlive_freq.value / 10000).toFixed(1)))
              Vue.set(vm.GT_UVWR1_I3.data[3], 2, Number((value.onlive_dur.value / 3600).toFixed(1)))
              break;
            case '轮播':
              Vue.set(vm.GT_UVWR1_I1.data[4], 2, Number((value.onlive_user_num.value / 10000).toFixed(1)))
              Vue.set(vm.GT_UVWR1_I2.data[4], 2, Number((value.onlive_freq.value / 10000).toFixed(1)))
              Vue.set(vm.GT_UVWR1_I3.data[4], 2, Number((value.onlive_dur.value / 3600).toFixed(1)))
              break;
          }
        })
        // console.log('vm.GT_UVWR1_I1', vm.GT_UVWR1_I1.data)
      } catch (error) {
        console.log(error);
      }

      try {
        //本地频道收视规模排名
        let demand_top = newValue.data.responses[11].aggregations.channel.buckets
        Vue.set(vm.GT_UVWR1_J1.data[0], 1, currentWeekFormat)
        Vue.set(vm.GT_UVWR1_J1.data[0], 2, beforeWeekFormat)
        demand_top.forEach((value, index) => {
          if (index < 15) {
            // console.log(value.key, Number((value.onlive_user_num.value / 10000).toFixed(1)))
            Vue.set(vm.GT_UVWR1_J1.data[15 - index], 0, value.key)
            Vue.set(vm.GT_UVWR1_J1.data[15 - index], 1, Number((value.onlive_user_num.value / 10000).toFixed(1)))
          }
        })
      } catch (error) {
        console.log(error);
      }

      try {
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
        vm.GT_UVWR1_J2.data = week_time_temp
        // console.log('vm.GT_UVWR1_J2.data', vm.GT_UVWR1_J2.data)
      } catch (error) {
        console.log(error);
      }

      try {
        //本地自办节目top5(万小时)
        let local_program = newValue.data.responses[13].aggregations.channel.buckets
        Vue.set(vm.GT_UVWR1_J3.data[0], 1, beforeWeekFormat)
        Vue.set(vm.GT_UVWR1_J3.data[0], 2, currentWeekFormat)
        local_program.forEach((value, index) => {
          if (index < 5) {
            // console.log(value)
            Vue.set(vm.GT_UVWR1_J3.data[index + 1], 0, value.key)
            Vue.set(vm.GT_UVWR1_J3.data[index + 1], 2, Number((value.onlive_dur.value / 10000 / 3600).toFixed(1)))
          }
        });
      } catch (error) {
        console.log(error);
      }

      try {
        ///////////// 补
        //各类型节目点播数据
        //点播用户数（万户）  点播次数（万次）  点播时长（万小时）
        //各类型节目点播数据
        let demand_user_data = newValue.data.responses[14].aggregations.program_type.buckets
        Vue.set(vm.GT_UVWR1_K1.data[0], 1, currentWeekFormat)
        Vue.set(vm.GT_UVWR1_K1.data[0], 2, beforeWeekFormat)
        Vue.set(vm.GT_UVWR1_K2.data[0], 1, currentWeekFormat)
        Vue.set(vm.GT_UVWR1_K2.data[0], 2, beforeWeekFormat)
        Vue.set(vm.GT_UVWR1_K3.data[0], 1, currentWeekFormat)
        Vue.set(vm.GT_UVWR1_K3.data[0], 2, beforeWeekFormat)

        demand_user_data.forEach((value, index) => {
          if (index < 10) {
            // console.log(value.key, value.demand_user_num.value, value.demand_freq.value, value.demand_dur.value)
            Vue.set(vm.GT_UVWR1_K1.data[10 - index], 0, value.key)
            Vue.set(vm.GT_UVWR1_K1.data[10 - index], 1, Number((value.demand_user_num.value / 10000).toFixed(1)))

            Vue.set(vm.GT_UVWR1_K2.data[10 - index], 0, value.key)
            Vue.set(vm.GT_UVWR1_K2.data[10 - index], 1, Number((value.demand_freq.value / 10000).toFixed(1)))

            Vue.set(vm.GT_UVWR1_K3.data[10 - index], 0, value.key)
            Vue.set(vm.GT_UVWR1_K3.data[10 - index], 1, Number((value.demand_dur.value / 10000 / 3600).toFixed(1)))
          }
        })
      } catch (error) {
        console.log(error);
      }

      try {
        //主要栏目点击和播放数据
        //页面点击用户数
        let program_click_data = newValue.data.responses[15].aggregations.ti.buckets
        Vue.set(vm.GT_UVWR1_L1.data[0], 1, currentWeekFormat)
        Vue.set(vm.GT_UVWR1_L1.data[0], 2, beforeWeekFormat)
        Vue.set(vm.GT_UVWR1_L2.data[0], 1, currentWeekFormat)
        Vue.set(vm.GT_UVWR1_L2.data[0], 2, beforeWeekFormat)
        program_click_data.forEach((value, index) => {
          if (index < 10) {
            // console.log('页面点击和播放时长数据', value.key, value.click_user_num.value)
            Vue.set(vm.GT_UVWR1_L1.data[10 - index], 0, value.key)
            Vue.set(vm.GT_UVWR1_L1.data[10 - index], 1, Number((value.click_user_num.value / 10000).toFixed(1)))
            Vue.set(vm.GT_UVWR1_L2.data[10 - index], 0, value.key)
            Vue.set(vm.GT_UVWR1_L2.data[10 - index], 1, Number((value.click_freq.value / 10000).toFixed(1)))
          }
        })
      } catch (error) {
        console.log(error);
      }

      try {
        //页面播放时长（万小时）
        let program_play_data = newValue.data.responses[16].aggregations.ti.buckets
        Vue.set(vm.GT_UVWR1_L3.data[0], 1, currentWeekFormat)
        Vue.set(vm.GT_UVWR1_L3.data[0], 2, beforeWeekFormat)
        program_play_data.forEach((value, index) => {
          if (index < 10) {
            // console.log('页面点击和播放时长数据', value.key, value.demand_dur.value)
            Vue.set(vm.GT_UVWR1_L3.data[10 - index], 0, value.key)
            Vue.set(vm.GT_UVWR1_L3.data[10 - index], 1, Number((value.demand_dur.value / 10000 / 3600).toFixed(1)))
          }
        })
      } catch (error) {
        console.log(error);
      }

    },

    //上周数据
    api_data_m2_range(newValue, oldValue) {
      // console.log("移动上周数据", newValue)
      let vm = this
      try {
        //电视直播频道分组收视数据（移动）
        let onlive_data = newValue.data.responses[10].aggregations.channel_flag.buckets  //分组频道直播数据
        onlive_data.forEach((value, index) => {
          switch (value.key) {
            case '央视':
              Vue.set(vm.GT_UVWR1_I1.data[1], 1, Number((value.onlive_user_num.value / 10000).toFixed(1)))
              Vue.set(vm.GT_UVWR1_I2.data[1], 1, Number((value.onlive_freq.value / 10000).toFixed(1)))
              Vue.set(vm.GT_UVWR1_I3.data[1], 1, Number((value.onlive_dur.value / 10000).toFixed(1)))
              break;
            case '卫视':
              Vue.set(vm.GT_UVWR1_I1.data[2], 1, Number((value.onlive_user_num.value / 10000).toFixed(1)))
              Vue.set(vm.GT_UVWR1_I2.data[2], 1, Number((value.onlive_freq.value / 10000).toFixed(1)))
              Vue.set(vm.GT_UVWR1_I3.data[2], 1, Number((value.onlive_dur.value / 10000).toFixed(1)))
              break;
            case '本地':
              Vue.set(vm.GT_UVWR1_I1.data[3], 1, Number((value.onlive_user_num.value / 10000).toFixed(1)))
              Vue.set(vm.GT_UVWR1_I2.data[3], 1, Number((value.onlive_freq.value / 10000).toFixed(1)))
              Vue.set(vm.GT_UVWR1_I3.data[3], 1, Number((value.onlive_dur.value / 10000).toFixed(1)))
              break;
            case '轮播':
              Vue.set(vm.GT_UVWR1_I1.data[4], 1, Number((value.onlive_user_num.value / 10000).toFixed(1)))
              Vue.set(vm.GT_UVWR1_I2.data[4], 1, Number((value.onlive_freq.value / 10000).toFixed(1)))
              Vue.set(vm.GT_UVWR1_I3.data[4], 1, Number((value.onlive_dur.value / 10000).toFixed(1)))
              break;
          }
        })
      } catch (error) {
        console.log(error);
      }

      try {
        //本地频道收视规模排名（万户）
        let demand_top = newValue.data.responses[11].aggregations.channel.buckets
        setTimeout(() => {
          let live_temp = vm.GT_UVWR1_J1.data
          live_temp.forEach((value, index) => {
            if (index > 0) {
              Vue.set(vm.GT_UVWR1_J1.data[index], 2, 0)
              // console.log("本周收视规模排名--", value)
              demand_top.forEach((value2, index2) => {
                if (value2.key == value[0]) {
                  // console.log(value2.key, value2.onlive_user_num.value)
                  Vue.set(vm.GT_UVWR1_J1.data[index], 2, (value2.onlive_user_num.value / 10000).toFixed(1))
                }
              })
            }
          })
        }, 500)
      } catch (error) {
        console.log(error);
      }

      try {
        //本地自办节目TOP5（万小时）
        let local_program = newValue.data.responses[13].aggregations.channel.buckets
        setTimeout(() => {
          let live_temp = vm.GT_UVWR1_J3.data
          live_temp.forEach((value, index) => {
            if (index > 0) {
              Vue.set(vm.GT_UVWR1_J3.data[index], 1, 0)
              // console.log("本地自办节目TOP5本周--", value)
              local_program.forEach((value2, index2) => {
                if (value2.key == value[0]) {
                  // console.log(value2.key, value2.onlive_dur.value)
                  Vue.set(vm.GT_UVWR1_J3.data[index], 1, (value2.onlive_dur.value / 10000 / 3600).toFixed(1))
                }
              })
            }
          })
        }, 500)
      } catch (error) {
        console.log(error);
      }

      try {
        //各类型节目点播数据    点播用户数（万户）    
        let demand_user_data = newValue.data.responses[14].aggregations.program_type.buckets
        setTimeout(() => {
          let live_temp = vm.GT_UVWR1_K1.data
          live_temp.forEach((value, index) => {
            if (index > 0) {
              Vue.set(vm.GT_UVWR1_K1.data[index], 2, 0)
              // console.log("页面点击用户数本周", value)
              demand_user_data.forEach((value2, index2) => {
                if (value2.key == value[0]) {
                  // console.log(value2.key, value2.demand_user_num.value)
                  Vue.set(vm.GT_UVWR1_K1.data[index], 2, (value2.demand_user_num.value / 10000).toFixed(1))
                }
              })
            }
          })
        }, 500)

        //点播次数（万次）上周
        setTimeout(() => {
          let live_temp = vm.GT_UVWR1_K2.data
          live_temp.forEach((value, index) => {
            if (index > 0) {
              Vue.set(vm.GT_UVWR1_K2.data[index], 2, 0)
              // console.log("页面点击用户数本周", value)
              demand_user_data.forEach((value2, index2) => {
                if (value2.key == value[0]) {
                  // console.log(value2.key, value2.demand_freq.value)
                  Vue.set(vm.GT_UVWR1_K2.data[index], 2, (value2.demand_freq.value / 10000).toFixed(1))
                }
              })
            }
          })
        }, 500)

        //点播时长（万小时）上周
        setTimeout(() => {
          let live_temp = vm.GT_UVWR1_K3.data
          live_temp.forEach((value, index) => {
            if (index > 0) {
              Vue.set(vm.GT_UVWR1_K3.data[index], 2, 0)
              // console.log("页面点击用户数本周", value)
              demand_user_data.forEach((value2, index2) => {
                if (value2.key == value[0]) {
                  // console.log(value2.key, value2.demand_dur.value)
                  Vue.set(vm.GT_UVWR1_K3.data[index], 2, (value2.demand_dur.value / 10000 / 3600).toFixed(1))
                }
              })
            }
          })
        }, 500)
      } catch (error) {
        console.log(error);
      }

      try {
        //主要栏目点击和播放数据
        //页面点击用户数
        let program_click_data = newValue.data.responses[15].aggregations.ti.buckets
        setTimeout(() => {
          let live_temp = vm.GT_UVWR1_L1.data
          live_temp.forEach((value, index) => {
            if (index > 0) {
              Vue.set(vm.GT_UVWR1_L1.data[index], 2, 0)
              // console.log("页面点击用户数本周--", value)
              program_click_data.forEach((value2, index2) => {
                if (value2.key == value[0]) {
                  // console.log(value2.key, value2.click_user_num.value)
                  Vue.set(vm.GT_UVWR1_L1.data[index], 2, Number((value2.click_user_num.value / 10000).toFixed(1)))
                }
              })
            }
          })
        }, 500)

        setTimeout(() => {
          let live_temp = vm.GT_UVWR1_L2.data
          live_temp.forEach((value, index) => {
            if (index > 0) {
              Vue.set(vm.GT_UVWR1_L2.data[index], 2, 0)
              // console.log("页面点击次数本周--", value)
              program_click_data.forEach((value2, index2) => {
                if (value2.key == value[0]) {
                  // console.log(value2.key, value2.click_freq.value)
                  Vue.set(vm.GT_UVWR1_L2.data[index], 2, Number((value2.click_freq.value / 10000).toFixed(1)))
                }
              })
            }
          })
        }, 500)
      } catch (error) {
        console.log(error);
      }

      try {
        //页面播放时长（万小时）
        let program_play_data = newValue.data.responses[16].aggregations.ti.buckets
        setTimeout(() => {
          let live_temp = vm.GT_UVWR1_L3.data
          live_temp.forEach((value, index) => {
            if (index > 0) {
              Vue.set(vm.GT_UVWR1_L3.data[index], 2, 0)
              // console.log("页面播放时长本周--", value)
              program_play_data.forEach((value2, index2) => {
                if (value2.key == value[0]) {
                  // console.log(value2.key, value2.demand_dur.value)
                  Vue.set(vm.GT_UVWR1_L3.data[index], 2, Number((value2.demand_dur.value / 10000 / 3600).toFixed(1)))
                }
              })
            }
          })
        }, 500)
      } catch (error) {
        console.log(error);
      }

      setTimeout(() => {
        // title_arr = [["各运营商在册用户数（户）"],["各运营商新增在册用户数（户）"],[""]];
        // data_arr = [
        //   [["运营商", "移动", "联通", "电信"], ["占比", , ,]]
        //   [["运营商", "移动", "联通", "电信"], ["平均"]],
        //   [["运营商", "移动", "联通", "电信"], ["平均"]]
        // ];
        let data_temp = [[], []]
        let data_temp1 = [[], []]
        vm.GT_UVWR1_G2.content.forEach((value, index) => {
          // title_temp.push(value.title)
          if (index == 0) {
            value.data.forEach((value2, index2) => {
              data_temp[0].push(value2.name)
              data_temp[1].push(value2.value)
            })
          }
          else if (index == 1) {
            value.data.forEach((value2, index2) => {
              data_temp1[0].push(value2.name)
              data_temp1[1].push(value2.value)
            })
          }
        })

        // let title_temp = []
        let H1_data_temp = [[], []]
        let H1_data_temp1 = [[], []]
        let H1_data_temp2 = [[], []]
        vm.GT_UVWR1_H1.content.forEach((value, index) => {
          // title_temp.push(value.title)
          if (index == 0) {
            value.data.forEach((value2, index2) => {
              H1_data_temp[0].push(value2.name)
              H1_data_temp[1].push(value2.value)
            })
          }
          else if (index == 1) {
            value.data.forEach((value2, index2) => {
              H1_data_temp1[0].push(value2.name)
              H1_data_temp1[1].push(value2.value)
            })
          }

          else if (index == 2) {
            value.data.forEach((value2, index2) => {
              H1_data_temp2[0].push(value2.name)
              H1_data_temp2[1].push(value2.value)
            })
          }
        })

        let title_arr = []
        let data_arr = []   //activeDayReportTotalData
        title_arr.push(
          ["移动在册用户数与新增在册用户数（户）"],
          [vm.GT_UVWR1_G2.content[0].title],
          [vm.GT_UVWR1_G2.content[1].title]
          [vm.GT_UVWR1_H1.content[0].title],
          [vm.GT_UVWR1_H1.content[1].title],
          [vm.GT_UVWR1_H1.content[2].title],
          ["移动三大基础功能观看用户数每日走势（户）"],   //
          ["移动分组频道直播用户数（万户）"],   //
          ["移动分组频道直播次数（万次）"],   //
          ["移动分组频道直播收视时长（小时）"],   //
          ["移动本地频道收视规模排名（万户）"],   //
          ["移动轮播频道每日收视走势（户）"],  //
          ["移动本地自办节目TOP5（万小时）"],   //
          ["移动点播用户数（万户）"],  //
          ["移动点播次数（万次）"],  //
          ["移动点播时长（万小时）"],  //
          ["移动页面点击用户数（万户"], //
          ["移动页面点击次数（万次）"], //
          ["移动页面播放时长（万小时）"], //
        )
        data_arr.push(
          vm.GT_UVWR1_G1.data,
          // vm.GT_UVWR1_G2.content,   //此处格式为{value: , name: }，需做处理
          data_temp,
          data_temp1,
          // vm.GT_UVWR1_H1.content,   //此处格式为{value: , name: }，需做处理
          H1_data_temp,
          H1_data_temp1,
          H1_data_temp2,
          vm.GT_UVWR1_H2.data,
          vm.GT_UVWR1_I1.data,
          vm.GT_UVWR1_I2.data,
          vm.GT_UVWR1_I3.data,
          vm.GT_UVWR1_J1.data,
          vm.GT_UVWR1_J2.data,
          vm.GT_UVWR1_J3.data,
          vm.GT_UVWR1_K1.data,
          vm.GT_UVWR1_K2.data,
          vm.GT_UVWR1_K3.data,
          vm.GT_UVWR1_L1.data,
          vm.GT_UVWR1_L2.data,
          vm.GT_UVWR1_L3.data,
        )

      }, 4000);
    }
  },
  methods: {
    Excel_data_manage() {
      console.log("Excel_data_manage - 5 - m2");
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
            ["运营商", "移动", "联通", "电信555555555555555.222"],
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

          // /// 实际

          // ///

          vm.$store
            .dispatch("set_PR_Excel_titleArr", temp_titleArr)
            .then(function(response_title) {
              console.log(response_title);
              vm.$store
                .dispatch("set_PR_Excel_dataArr", temp_DataArr)
                .then(function(response_dataArr) {
                  console.log(response_dataArr);
                })
                .catch(function(error) {
                  console.info(error);
                });
            })
            .catch(function(error) {
              console.info(error);
            });
        }
      }, 5400); //m2: 5000 + 200 * 2
    },
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
      GT_UVWR1_G1: {
        title: "",
        id: "GT_UVWR1_G1",
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
      GT_UVWR1_G2: {
        title: "",
        id: "GT_UVWR1_G2",
        color: ["#5B9BD5", "#FFC000", "#ED7D31", "#9DC3E6", "#FFD966", "#F4B183", "#DEEBF7", "#FFF2CC", "#FBE5D6"],
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
      GT_UVWR1_H1: {
        title: "",
        id: "GT_UVWR1_H1",
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
      GT_UVWR1_H2: {
        title: "",
        id: "GT_UVWR1_H2",
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
      GT_UVWR1_I1: {
        data: [
          ["product",],
          ["央视",],
          ["卫视",],
          ["本地",],
          ["轮播",]
          // ["product", "0520-0526", "0527-0602"],
          // ["央视", 48.0, 48.1],
          // ["卫视", 154.2, 157.4],
          // ["地方", 60.1, 65.0],
          // ["轮播", 15.1, 16.0]
        ],
        title: "",
        id: "GT_UVWR1_I1",
        color: ["#E7E6E6", "#A9D18E"],
        ifYaxisShow: true,
        ifLegendShow: true,
        m_barWidth: "12"
      },
      GT_UVWR1_I2: {
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
        id: "GT_UVWR1_I2",
        color: ["#E7E6E6", "#5B9BD5"],
        ifYaxisShow: true,
        ifLegendShow: true,
        m_barWidth: "12"
      },
      GT_UVWR1_I3: {
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
        id: "GT_UVWR1_I3",
        color: ["#E7E6E6", "#FFC000"],
        ifYaxisShow: true,
        ifLegendShow: true,
        m_barWidth: "12"
      },
      GT_UVWR1_J1: {
        title: "",
        id: "GT_UVWR1_J1",
        height: "height:720px;",
        color: ["#A9D18E", "#EDEDED"],
        data: [
          ["product",],
          [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
          //注：次数原本是TOP20，由于数据不足的原因，此处排TOP15
          // [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
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
      GT_UVWR1_J2: {
        //api 暂且error
        title: "",
        id: "GT_UVWR1_J2",
        color: ["#70AD47", "#FFCCCC ", "#5B9BD5", "#FFC000", "#ED7D31"],
        data: [
          // ["product","6月24日","6月25日","6月26日","6月27日","6月28日","6月29日","6月30日"],
          // ["谍战剧场", 12140, 12370, 12800, 12200, 12234, 12640, 12859],
          // ["华语影院", 41400, 41700, 41800, 42000, 42340, 42400, 42590],
          // ["海外佳片", 52140, 52170, 52580, 52400, 52534, 52640, 52759],
          // ["都市剧场", 21140, 22170, 25280, 24200, 25234, 22640, 22759],
          // ["动画乐园", 32140, 32170, 32580, 32400, 32534, 32640, 32759]
        ]
      },
      GT_UVWR1_J3: {
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
        id: "GT_UVWR1_J3",
        color: ["#E7E6E6", "#5B9BD5"],
        ifYaxisShow: false,
        ifLegendShow: true,
        m_barWidth: "30%"
      },
      GT_UVWR1_K1: {
        title: "",
        id: "GT_UVWR1_K1",
        height: "height:600px;",
        color: ["#A9D18E", "#EDEDED"],
        data: [
          ["product", ,], [], [], [], [], [], [], [], [], [], []
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
      GT_UVWR1_K2: {
        title: "",
        id: "GT_UVWR1_K2",
        height: "height:600px;",
        color: ["#5B9BD5", "#EDEDED"],
        data: [
          ["product", ,], [], [], [], [], [], [], [], [], [], []
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
      GT_UVWR1_K3: {
        title: "",
        id: "GT_UVWR1_K3",
        height: "height:600px;",
        color: ["#FFC000", "#EDEDED"],
        data: [
          ["product", ,], [], [], [], [], [], [], [], [], [], []
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
      GT_UVWR1_L1: {
        title: "",
        id: "GT_UVWR1_L1",
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
      GT_UVWR1_L2: {
        title: "",
        id: "GT_UVWR1_L2",
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
      GT_UVWR1_L3: {
        title: "",
        id: "GT_UVWR1_L3",
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
.UVWR_m2 .analysis_of_viewing1 span {
  font-size: 12px;
  color: red;
}
</style>
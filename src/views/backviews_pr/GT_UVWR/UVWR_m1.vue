<template>
  <div class="UVWR_m1">
    <!-- ///////////////////////// A -->
    <el-row class="model_title">
      <span class="title_border_left"></span>G+TV用户发展数据
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <el-row :gutter="100">
        <el-col :span="8">
          <!-- 柱状图 -->
          <p class="m_common_sm_title_font">平台累计在册用户数总览（万户）</p>
          <div class="m_common_echarts_styleA" id="GT_UVWR1_A1"></div>
          <!-- <p class="m_margin_0a m_common_content_font">
            截至2019年6月3日凌晨，平台累计 在册用户数
            <span class="font_color_r">2,133,546</span>户，较前一周增长
            <span class="font_color_r">2.0%</span>，增速回落0.5个百分点。
          </p>-->
        </el-col>

        <el-col :span="8">
          <!-- 饼图 -->
          <p class="m_common_sm_title_font">各大运营商在册用户数总览（万户）</p>
          <!-- <pie-center-label :chartData="GT_UVWR1_A2"></pie-center-label> -->
          <numberOfRegisteredUsers :fillinData="GT_UVWR1_A2"></numberOfRegisteredUsers>
          <!-- <p class="m_margin_0a m_common_content_font">
            移动在册用户
            <span class="font_color_r">1,162,381</span>户，较前一周增长 2.5%，增速提升0.1个百分点。 电信在册用户
            <span class="font_color_r">594,456</span>户，较前一周增长3.9%， 增速提升0.1个百分点。 联通在册用户
            <span class="font_color_r">376,709</span>户，较前一周减少9,533 户。
          </p>-->
        </el-col>
        <el-col :span="8">
          <!-- 柱状图 -->
          <p class="m_common_sm_title_font">新增、停机、销户用户数总览（户）</p>
          <div class="m_common_echarts_styleA" id="GT_UVWR1_A3"></div>
          <!-- <p
            class="m_margin_0a m_common_content_font"
          >周新增60,798户，较前一周增加8.6%。 周停机12,369户，较前一周增加969.1%， 较上月同期（0426-0502）增长108.9%。 周销户21,165户，较前一周增长247.5%， 较上月同期增长39.6%。</p>-->
        </el-col>
      </el-row>
      <div class="m_init_div m_width_25 m_padding_l_4"></div>
      <div class="m_init_div m_width_25 m_padding_l_4"></div>
      <div class="m_init_div m_width_25 m_padding_l_4"></div>
    </el-row>
    <!-- ///////////////////////// B -->
    <el-row class="model_title">
      <span class="title_border_left"></span>各市州G+TV用户发展数据
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 饼图 -->
      <div class="m_init_div m_width_40">
        <p class="m_common_sm_title_font">各市州在册用户占比（万户）</p>
        <pie-center-label :chartData="GT_UVWR1_B1"></pie-center-label>
        <!-- <numberOfRegisteredUsers :fillinData="GT_UVWR1_B1"></numberOfRegisteredUsers> -->
      </div>

      <!-- 柱状图 + 折线图 -->
      <div class="m_init_div m_width_40 m_padding_l_5">
        <p class="m_common_sm_title_font">各大运营商各市州一周新增在册用户数（万户）</p>
        <bar-charts-stack :chartData="GT_UVWR1_B2"></bar-charts-stack>
      </div>
      <p class="m_margin_0a m_common_content_font">上周在册用户净增40,899户，增量下滑19.3%。</p>
      <!-- <p
        class="m_margin_0a m_common_content_font"
      >各市州平均增速2.8%，环比提升0.2个百分点。毕节市增速3.7%最高，环比提升0.7个百分点；安顺市增速2.0%最低，环比提升0.4个百分点。</p>-->
    </el-row>
    <!-- ///////////////////////// C -->
    <el-row class="model_title">
      <span class="title_border_left"></span>G+TV一周用户增减数据
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 饼图x3 -->
      <el-row>
        <el-col :span="8">
          <p class="m_common_sm_title_font">新增用户占比（万户）</p>
          <!-- <pie-center-label :chartData="GT_UVWR1_C1"></pie-center-label> -->
          <numberOfRegisteredUsers :fillinData="GT_UVWR1_C1"></numberOfRegisteredUsers>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">停机用户占比（户）</p>
          <!-- <pie-center-label :chartData="GT_UVWR1_C2"></pie-center-label> -->
          <numberOfRegisteredUsers :fillinData="GT_UVWR1_C2"></numberOfRegisteredUsers>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">销户用户占比（户）</p>
          <!-- <pie-center-label :chartData="GT_UVWR1_C3"></pie-center-label> -->
          <numberOfRegisteredUsers :fillinData="GT_UVWR1_C3"></numberOfRegisteredUsers>
        </el-col>
      </el-row>

      <!-- 曲线图x3 -->
      <el-row>
        <el-col :span="8">
          <p class="m_common_sm_title_font">新增用户数走势（万户）</p>
          <smooth-line-chart :smoothLineData="GT_UVWR1_C4"></smooth-line-chart>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">停机用户数走势（户）</p>
          <smooth-line-chart :smoothLineData="GT_UVWR1_C5"></smooth-line-chart>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">销户用户数走势（户）</p>
          <smooth-line-chart :smoothLineData="GT_UVWR1_C6"></smooth-line-chart>
        </el-col>
      </el-row>

      <!-- <p
        class="m_margin_0a m_common_content_font"
      >*注：停机、销户数据统计时间为2019年6月3日24:00（不同时间点统计，停机数和销户数会有所区别）。</p>-->
    </el-row>
    <!-- ///////////////////////// D -->
    <el-row class="model_title">
      <span class="title_border_left"></span>开机活跃数据
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <el-row class>
        <el-col :span="10">
          <p class="m_common_sm_title_font">各运营商一周开机率</p>
          <bar-chart-single2 :chartData="GT_UVWR1_D1"></bar-chart-single2>
        </el-col>
        <el-col :span="14">
          <p class="m_common_sm_title_font">各市州一周开机率</p>
          <bar-charts-stack3 :chartData="GT_UVWR1_D2"></bar-charts-stack3>
        </el-col>
      </el-row>
    </el-row>
    <!-- ///////////////////////// E -->
    <el-row class="model_title">
      <span class="title_border_left"></span>一周直播节目收视TOP15（百万小时）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 列表&条线图x3 -->
      <el-row>
        <el-col :span="8" v-show="ifModuleydShow">
          <p class="m_common_sm_title_font">移动</p>
          <bar-list-chart :barListData="GT_UVWR1_E1"></bar-list-chart>
        </el-col>
        <el-col :span="8" v-show="ifModuleltShow">
          <p class="m_common_sm_title_font">联通</p>
          <bar-list-chart :barListData="GT_UVWR1_E2"></bar-list-chart>
        </el-col>
        <el-col :span="8" v-show="ifModuledxShow">
          <p class="m_common_sm_title_font">电信</p>
          <bar-list-chart :barListData="GT_UVWR1_E3"></bar-list-chart>
        </el-col>
      </el-row>
    </el-row>
    <!-- ///////////////////////// F -->
    <el-row class="model_title">
      <span class="title_border_left"></span>一周点播节目TOP15（万次）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 列表&条线图x3 -->
      <el-row>
        <el-col :span="8">
          <p class="m_common_sm_title_font" v-show="ifModuleydShow">移动</p>
          <bar-list-chart :barListData="GT_UVWR1_F1"></bar-list-chart>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font" v-show="ifModuleltShow">联通</p>
          <bar-list-chart :barListData="GT_UVWR1_F2"></bar-list-chart>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font" v-show="ifModuledxShow">电信</p>
          <bar-list-chart :barListData="GT_UVWR1_F3"></bar-list-chart>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import Vue from 'vue'
import { commonTools } from "@/utils/test";
import pie_center_label from "@/views/backcoms/commoncomponents2/pie_center_label"; //（空心）饼图组件
import numberOfRegisteredUsers from "@/views/backcoms/commoncomponents2/numberOfRegisteredUsers_Change"; //在册用户数

import BarChartSingle from "@/views/backcoms/commoncomponents2/BarChartSingle_Change";
import BarChartSingle2 from "@/views/backcoms/commoncomponents2/BarChartSingle_Change2";

import BarChartsStack from "@/views/backcoms/commoncomponents2/BarChartsStack_Change"; //公用柱状图堆叠
import SmoothLineChart from "@/views/backcoms/commoncomponents2/SmoothLineChart_Change"; //平滑曲线折线图组件
import BarListChart from "@/views/backcoms/commoncomponents2/BarListChart_Change"; //排名柱状图

import BarChartsStack3 from "@/views/backcoms/commoncomponents2/BarChartsStack_Change3"; // 公用柱状图堆叠3 - 左侧Y轴百分比

import { mapGetters } from "vuex";
import { debuglog } from 'util';

export default {
  name: "UVWR_m1",
  components: {
    numberOfRegisteredUsers: numberOfRegisteredUsers,
    "bar-chart-single": BarChartSingle,
    "bar-chart-single2": BarChartSingle2,
    "pie-center-label": pie_center_label,
    "bar-charts-stack": BarChartsStack,
    "bar-charts-stack3": BarChartsStack3,
    "smooth-line-chart": SmoothLineChart,
    "bar-list-chart": BarListChart
  },
  props: ["api_data_m1", "api_data_m2", "api_data_m3", "api_data_m4", "api_data_m1_range", "api_data_m2_range", "api_data_m3_range", "api_data_m4_range"],
  mounted() {
    let vm = this;
    setTimeout(function () {
      vm.render();
      vm.render2();
    }, 300);
  },
  watch: {
    //上周数据
    api_data_m1_range(newValue, oldValue) {
      // 在这里获取上期week的数据
      console.log("混合数据上周数据")
      let last_week_data = newValue.data.responses  //上周总数据
      console.log("last_week_data", last_week_data)

      //设置本周与上周时间（0603——0609  0610-0616）
      let temp_time = commonTools.split_WeeksDays_byDWwr(this.PR_week);
      let WeekFormat = commonTools.weekDaysShowFormat_AndBeforeWeek(
        temp_time.week_day_start,
        temp_time.week_day_end
      );
      let beforeWeekFormat = WeekFormat.beforeWeekFormat;  //上周时间
      let currentWeekFormat = WeekFormat.currentWeekFormat; // 本周时间

      // let register_num = last_week_data[0].aggregations.register_num.value    //平台累计在册用户数总览
      let register_num = last_week_data[0].aggregations.register_num.buckets[0].register_num.value   //平台累计在册用户数总览
      Vue.set(this.GT_UVWR1_A1.date, 0, beforeWeekFormat)
      Vue.set(this.GT_UVWR1_A1.data, 0, (register_num / 10000).toFixed(2))

      //各大运营商各市州上周新增在册用户数
      let last_newadd_num_arr = []  //存放上周新增用户
      let last_newadd_num_total = last_week_data[0].aggregations.ac.buckets
      last_newadd_num_total.forEach((value, index) => {
        // console.log("各州市在册用户占比", value, index)
        if (index < 9) {
          last_newadd_num_arr.push({
            value: (value.new_num.value),
            name: commonTools.acConvert_Single(value.key)
          })
        }
      })
      this.last_newadd_num_arr = last_newadd_num_arr  //存入上周新增用户数
      // console.log("上周新增数据", last_newadd_num_arr)
    },
    //本周数据
    api_data_m1(newValue, oldValue) {
      let vm = this
      // console.log("混合数据模块一api_data_m1 - newValue");
      let blendedDataModule = vm.api_data_m1.data.responses  //总的混合数据
      // console.log("模块一，G+tv用户发展数据（本周）", blendedDataModule);

      //G+tv用户发展数据
      let dataMudule_1 = blendedDataModule[0].aggregations

      //设置本周与上周时间（0603——0609  0610-0616）
      let temp_time = commonTools.split_WeeksDays_byDWwr(vm.PR_week);
      let WeekFormat = commonTools.weekDaysShowFormat_AndBeforeWeek(
        temp_time.week_day_start,
        temp_time.week_day_end
      );
      let beforeWeekFormat = WeekFormat.beforeWeekFormat;  //上周时间
      let currentWeekFormat = WeekFormat.currentWeekFormat; // 本周时间

      // let register_num_total = blendedDataModule[0].aggregations.register_num.value  //平台累计在册用户数总览
      let register_num_total = blendedDataModule[0].aggregations.register_num.buckets[0].register_num.value  //平台累计在册用户数总览
      Vue.set(this.GT_UVWR1_A1.date, 1, currentWeekFormat)
      Vue.set(this.GT_UVWR1_A1.data, 1, (register_num_total / 10000).toFixed(2))

      let temp = []
      temp.push(String(dataMudule_1.new_num.value))
      temp.push(String(dataMudule_1.downtime_user_num.value))
      temp.push(String(dataMudule_1.unsub_user_num.value))
      vm.GT_UVWR1_A3.data2 = temp  //新增，停机，销户用户数
      // console.log('新增，停机，销户', vm.GT_UVWR1_A3)
      setTimeout(function () {
        vm.render();
        vm.render2();
      }, 300);

      //各州市在册用户占比
      let dataMudule_2 = blendedDataModule[0].aggregations.ac.buckets
      let temp2 = []  //各州市在册用户占比temp
      let current_newadd_num_arr = []  //存放本周各地区新增的用户
      dataMudule_2.forEach((value, index) => {
        // console.log("各州市在册用户占比", value, index)
        if (index < 9) {
          temp2.push({
            value: (value.register_num.buckets[0].register_num.value / 10000).toFixed(2),
            name: commonTools.acConvert_Single(value.key)
          })

          //本周新增用户数
          current_newadd_num_arr.push({
            value: (value.new_num.value),
            name: commonTools.acConvert_Single(value.key)
          })
        }
      })
      vm.GT_UVWR1_B1.m_data2 = temp2  //各州市在册用户占比数据渲染
      // console.log("各州市在册用户占比数据渲染", vm.GT_UVWR1_B1)

      vm.current_newadd_num_arr = current_newadd_num_arr  //存入本周新增用户数
      setTimeout(() => {
        // console.log("本周新增用户数", vm.current_newadd_num_arr)
        // console.log("上周新增用户数", vm.last_newadd_num_arr)
        if (vm.current_newadd_num_arr == null || vm.last_newadd_num_arr == null) {
          console.log("数据异常！")
        } else {
          console.log("开始计算增速")
          //计算增速（本周新增用户 - 上周新增用户） / 上期新增用户
          vm.current_newadd_num_arr.forEach((value, index) => {
            // console.log(value.name, index)
            if (value.name == vm.last_newadd_num_arr[index].name) {
              // console.log(value.name)
              let newadd_rate = ((value.value - vm.last_newadd_num_arr[index].value) / vm.last_newadd_num_arr[index].value) * 100
              Vue.set(vm.GT_UVWR1_B2.data[index + 1], 4, newadd_rate.toFixed(2))
              // console.log(newadd_rate)
            }
          })
        }
      }, 1000)

      //各州市一周开机率

    },
    //移动数据(本周)
    api_data_m2(newValue, oldValue) {
      // console.log("移动数据模块二api_data_m2 - newValue");
      // console.log(newValue);
      //////////////////// E1
      let vm = this;
      let buckets = newValue.data.responses[1].aggregations.programname.buckets;
      let data_yd = newValue.data.responses  //总的移动数据
      let userBuckets = newValue.data.responses[0].aggregations;  //移动在册用户数据总览

      //设置本周与上周时间（0603——0609  0610-0616）
      let temp_time = commonTools.split_WeeksDays_byDWwr(this.PR_week);
      let WeekFormat = commonTools.weekDaysShowFormat_AndBeforeWeek(
        temp_time.week_day_start,
        temp_time.week_day_end
      );
      let beforeWeekFormat = WeekFormat.beforeWeekFormat;  //上周时间
      let currentWeekFormat = WeekFormat.currentWeekFormat; // 本周时间

      //各大运营商在册用户数总览
      Vue.set(vm.GT_UVWR1_A2.data[1], 1, (userBuckets.register_num.buckets[0].register_num.value / 10000).toFixed())
      // console.log("vm.GT_UVWR1_A2移动运营商", vm.GT_UVWR1_A2)

      //各大运营商各市州一周新增在册用户数（户）
      let dataMudule_2 = data_yd[0].aggregations.ac.buckets
      dataMudule_2.forEach((value, index) => {
        if (index < 9) {
          // console.log("一周新增在册用户数temp", value, index)
          let open_rate = ((value.open_num.value / value.register_num.buckets[0].register_num.value) * 100).toFixed(4)
          switch (value.key) {
            case '851':
              Vue.set(vm.GT_UVWR1_B2.data[1], 1, (value.new_num.value / 10000).toFixed(2))
              Vue.set(vm.GT_UVWR1_D2.data[1], 1, Number(open_rate))
              break;
            case '852':
              Vue.set(vm.GT_UVWR1_B2.data[2], 1, (value.new_num.value / 10000).toFixed(2))
              Vue.set(vm.GT_UVWR1_D2.data[2], 1, Number(open_rate))
              break;
            case '853':
              Vue.set(vm.GT_UVWR1_B2.data[3], 1, (value.new_num.value / 10000).toFixed(2))
              Vue.set(vm.GT_UVWR1_D2.data[3], 1, Number(open_rate))
              break;
            case '854':
              Vue.set(vm.GT_UVWR1_B2.data[4], 1, (value.new_num.value / 10000).toFixed(2))
              Vue.set(vm.GT_UVWR1_D2.data[4], 1, Number(open_rate))
              break;
            case '855':
              Vue.set(vm.GT_UVWR1_B2.data[5], 1, (value.new_num.value / 10000).toFixed(2))
              Vue.set(vm.GT_UVWR1_D2.data[5], 1, Number(open_rate))
              break;
            case '856':
              Vue.set(vm.GT_UVWR1_B2.data[6], 1, (value.new_num.value / 10000).toFixed(2))
              Vue.set(vm.GT_UVWR1_D2.data[6], 1, Number(open_rate))
              break;
            case '857':
              Vue.set(vm.GT_UVWR1_B2.data[7], 1, (value.new_num.value / 10000).toFixed(2))
              Vue.set(vm.GT_UVWR1_D2.data[7], 1, Number(open_rate))
              break;
            case '858':
              Vue.set(vm.GT_UVWR1_B2.data[8], 1, (value.new_num.value / 10000).toFixed(2))
              Vue.set(vm.GT_UVWR1_D2.data[8], 1, Number(open_rate))
              break;
            case '859':
              Vue.set(vm.GT_UVWR1_B2.data[9], 1, (value.new_num.value / 10000).toFixed(2))
              Vue.set(vm.GT_UVWR1_D2.data[9], 1, Number(open_rate))
              break;
            default:
              break;
          }
        }
      })
      // console.log('vm.GT_UVWR1_D2.data', vm.GT_UVWR1_D2.data)
      // console.log("一周新增在册用户数", vm.GT_UVWR1_B2)

      //G+TV一周用户增减数据
      //新增用户占比(移动))
      Vue.set(vm.GT_UVWR1_C1.data[1], 1, (userBuckets.new_num.value / 10000).toFixed(2))
      //停机用户占比
      Vue.set(vm.GT_UVWR1_C2.data[1], 1, (userBuckets.downtime_user_num.value))
      //销户
      Vue.set(vm.GT_UVWR1_C3.data[1], 1, (userBuckets.unsub_user_num.value))

      //移动用户数走势（户）
      let user_list_all = userBuckets.statistical_granularity.buckets
      let new_add_user_array = []   //新增用户
      let downtime_user_array = []  //停机用户
      let unsub_user_array = []  //销户用户
      // console.log("移动用户数走势",new_add_user_list)
      let new_add_user_temp1 = ["product",]
      let new_add_user_temp2 = ["移动",]
      let downtime_user_temp1 = ["product",]
      let downtime_user_temp2 = ["移动",]
      let unsub_user_array_temp1 = ["product",]
      let unsub_user_array_temp2 = ["移动",]
      user_list_all.forEach((value, index) => {
        let setDate = new Date(value.key)
        let setdateYear = (setDate.getFullYear()) + "年"
        let setDateMonth = (setDate.getMonth() + 1) + "月"
        let setDateDay = (setDate.getDate()) + '日'
        let weekDate = setDateMonth + setDateDay
        new_add_user_temp1.push(weekDate)
        new_add_user_temp2.push((value.new_num.value / 10000).toFixed(2))
        downtime_user_temp1.push(weekDate)
        downtime_user_temp2.push(value.downtime_user_num.value)
        unsub_user_array_temp1.push(weekDate)
        unsub_user_array_temp2.push(value.unsub_user_num.value)
      })
      //移动用户数走势
      Vue.set(vm.GT_UVWR1_C4.data, 0, new_add_user_temp1)
      Vue.set(vm.GT_UVWR1_C4.data, 1, new_add_user_temp2)
      //停机用户
      Vue.set(vm.GT_UVWR1_C5.data, 0, downtime_user_temp1)
      Vue.set(vm.GT_UVWR1_C5.data, 1, downtime_user_temp2)
      //销户用户
      Vue.set(vm.GT_UVWR1_C6.data, 0, unsub_user_array_temp1)
      Vue.set(vm.GT_UVWR1_C6.data, 1, unsub_user_array_temp2)

      //移动本周开机率
      let current_open_num = userBuckets.open_num.value
      let current_register_num = userBuckets.register_num.buckets[0].register_num.value
      let current_open_rate = (current_open_num / current_register_num) * 100
      Vue.set(vm.GT_UVWR1_D1.data[0], 1, beforeWeekFormat)
      Vue.set(vm.GT_UVWR1_D1.data[0], 2, currentWeekFormat)
      Vue.set(vm.GT_UVWR1_D1.data[1], 2, current_open_rate.toFixed(2))
      // console.log("本周开机率", current_open_rate)

      //移动一周直播节目TOP15
      Vue.set(vm.GT_UVWR1_E1.data[0], 1, currentWeekFormat)
      Vue.set(vm.GT_UVWR1_E1.data[0], 2, beforeWeekFormat)
      buckets.forEach((value, index) => {
        let program = value.key
        let program_name = value.channel.buckets[0].key
        if (index < 15) {
          Vue.set(vm.GT_UVWR1_E1.data[15 - index], 0, program + '—' + program_name)
          Vue.set(vm.GT_UVWR1_E1.data[15 - index], 1, (value.onlive_dur.value / 1000000).toFixed(1))
        }
      })
      // console.log("移动一周直播节目TOP15", vm.GT_UVWR1_E1.data)

      //移动一周点播节目TOP15
      let order_paly_data = newValue.data.responses[2].aggregations.program_type.buckets;
      Vue.set(vm.GT_UVWR1_F1.data[0], 1, currentWeekFormat)
      Vue.set(vm.GT_UVWR1_F1.data[0], 2, beforeWeekFormat)
      // console.log("order_paly_data", order_paly_data)
      order_paly_data.forEach((value, index) => {
        let program = value.programname.buckets[0].key
        let program_name = value.key
        if (index < 15) {
          // console.log("value", index, program + '—' + program_name, value.demand_freq.value)
          Vue.set(vm.GT_UVWR1_F1.data[15 - index], 0, program + '—' + program_name)
          Vue.set(vm.GT_UVWR1_F1.data[15 - index], 1, (value.demand_freq.value / 10000).toFixed(1))
        }
      })
      console.log("移动一周点播vm.GT_UVWR1_F1.data-----", vm.GT_UVWR1_F1.data)

    },
    //联通数据（本周）
    api_data_m3(newValue, oldValue) {
      // console.log("联通数据模块三api_data_m3 - newValue");
      // console.log(newValue);
      let vm = this;
      let data_lt = newValue.data.responses  //总的联通数据
      let buckets = newValue.data.responses[1].aggregations.programname.buckets;

      let userBuckets = newValue.data.responses[0].aggregations;  //联通在册用户数据总览
      Vue.set(vm.GT_UVWR1_A2.data[1], 2, (userBuckets.register_num.buckets[0].register_num.value / 10000).toFixed(2))
      // console.log("vm.GT_UVWR1_A2联通", vm.GT_UVWR1_A2)

      //设置本周与上周时间（0603——0609  0610-0616）
      let temp_time = commonTools.split_WeeksDays_byDWwr(this.PR_week);
      let WeekFormat = commonTools.weekDaysShowFormat_AndBeforeWeek(
        temp_time.week_day_start,
        temp_time.week_day_end
      );
      let beforeWeekFormat = WeekFormat.beforeWeekFormat;  //上周时间
      let currentWeekFormat = WeekFormat.currentWeekFormat; // 本周时间

      //各大运营商各市州一周新增在册用户数（户）
      let dataMudule_2 = data_lt[0].aggregations.ac.buckets
      dataMudule_2.forEach((value, index) => {
        //（本期新增用户 - 上期新增用户） / 上期新增用户
        // let current_new_add_register_num = value.new_num.value  //本期新增
        if (index < 9) {
          // console.log("一周新增在册用户数temp", value, index)
          let open_rate = ((value.open_num.value / value.register_num.buckets[0].register_num.value) * 100).toFixed(4)
          switch (value.key) {
            case '851':
              Vue.set(vm.GT_UVWR1_B2.data[1], 2, (value.new_num.value / 10000).toFixed(2))
              Vue.set(vm.GT_UVWR1_D2.data[1], 2, Number(open_rate))
              break;
            case '852':
              Vue.set(vm.GT_UVWR1_B2.data[2], 2, (value.new_num.value / 10000).toFixed(2))
              Vue.set(vm.GT_UVWR1_D2.data[2], 2, Number(open_rate))
              break;
            case '853':
              Vue.set(vm.GT_UVWR1_B2.data[3], 2, (value.new_num.value / 10000).toFixed(2))
              Vue.set(vm.GT_UVWR1_D2.data[3], 2, Number(open_rate))
              break;
            case '854':
              Vue.set(vm.GT_UVWR1_B2.data[4], 2, (value.new_num.value / 10000).toFixed(2))
              Vue.set(vm.GT_UVWR1_D2.data[4], 2, Number(open_rate))
              break;
            case '855':
              Vue.set(vm.GT_UVWR1_B2.data[5], 2, (value.new_num.value / 10000).toFixed(2))
              Vue.set(vm.GT_UVWR1_D2.data[5], 2, Number(open_rate))
              break;
            case '856':
              Vue.set(vm.GT_UVWR1_B2.data[6], 2, (value.new_num.value / 10000).toFixed(2))
              Vue.set(vm.GT_UVWR1_D2.data[6], 2, Number(open_rate))
              break;
            case '857':
              Vue.set(vm.GT_UVWR1_B2.data[7], 2, (value.new_num.value / 10000).toFixed(2))
              Vue.set(vm.GT_UVWR1_D2.data[7], 2, Number(open_rate))
              break;
            case '858':
              Vue.set(vm.GT_UVWR1_B2.data[8], 2, (value.new_num.value / 10000).toFixed(2))
              Vue.set(vm.GT_UVWR1_D2.data[8], 2, Number(open_rate))
              break;
            case '859':
              Vue.set(vm.GT_UVWR1_B2.data[9], 2, (value.new_num.value / 10000).toFixed(2))
              Vue.set(vm.GT_UVWR1_D2.data[9], 2, Number(open_rate))
              break;
            default:
              break;
          }
        }
      })

      //G+TV一周用户增减数据
      //新增用户占比(联通)
      Vue.set(vm.GT_UVWR1_C1.data[1], 2, (userBuckets.new_num.value / 10000).toFixed(2))
      //停机用户占比
      Vue.set(vm.GT_UVWR1_C2.data[1], 2, (userBuckets.downtime_user_num.value))
      // console.log("联通停机用户", userBuckets.downtime_user_num.value)
      //销户
      Vue.set(vm.GT_UVWR1_C3.data[1], 2, (userBuckets.unsub_user_num.value))

      //联通用户数走势（户）
      let user_list_all = userBuckets.statistical_granularity.buckets
      let new_add_user_array = []   //新增用户
      let downtime_user_array = []  //停机用户
      let unsub_user_array = []  //销户用户
      let new_add_user_temp1 = ["product",]
      let new_add_user_temp2 = ["联通",]
      let downtime_user_temp1 = ["product",]
      let downtime_user_temp2 = ["联通",]
      let unsub_user_array_temp1 = ["product",]
      let unsub_user_array_temp2 = ["联通",]
      user_list_all.forEach((value, index) => {
        let setDate = new Date(value.key)
        let setdateYear = (setDate.getFullYear()) + "年"
        let setDateMonth = (setDate.getMonth() + 1) + "月"
        let setDateDay = (setDate.getDate()) + '日'
        let weekDate = setDateMonth + setDateDay
        new_add_user_temp1.push(weekDate)
        new_add_user_temp2.push((value.new_num.value / 10000).toFixed(2))
        downtime_user_temp1.push(weekDate)
        downtime_user_temp2.push(value.downtime_user_num.value)
        unsub_user_array_temp1.push(weekDate)
        unsub_user_array_temp2.push(value.unsub_user_num.value)
      })
      //联通用户数走势
      Vue.set(vm.GT_UVWR1_C4.data, 0, new_add_user_temp1)
      Vue.set(vm.GT_UVWR1_C4.data, 2, new_add_user_temp2)
      //停机用户
      Vue.set(vm.GT_UVWR1_C5.data, 0, downtime_user_temp1)
      Vue.set(vm.GT_UVWR1_C5.data, 2, downtime_user_temp2)
      //销户用户
      Vue.set(vm.GT_UVWR1_C6.data, 0, unsub_user_array_temp1)
      Vue.set(vm.GT_UVWR1_C6.data, 2, unsub_user_array_temp2)

      //联通本周开机率
      let current_open_num = userBuckets.open_num.value
      let current_register_num = userBuckets.register_num.buckets[0].register_num.value
      let current_open_rate = (current_open_num / current_register_num) * 100
      Vue.set(vm.GT_UVWR1_D1.data[2], 2, current_open_rate.toFixed(2))

      //联通用户本周直播节目收视TOP15
      Vue.set(vm.GT_UVWR1_E2.data[0], 1, currentWeekFormat)
      Vue.set(vm.GT_UVWR1_E2.data[0], 2, beforeWeekFormat)
      buckets.forEach((value, index) => {
        let program = value.key
        let program_name = value.channel.buckets[0].key
        if (index < 15) {
          // console.log("联通本周收视数据top15", value)
          Vue.set(vm.GT_UVWR1_E2.data[15 - index], 0, program + '—' + program_name)
          Vue.set(vm.GT_UVWR1_E2.data[15 - index], 1, (value.onlive_dur.value / 1000000).toFixed(1))
        }
      })
      // console.log(vm.GT_UVWR1_E1.data)

      //联通一周点播节目TOP15
      let order_paly_data = newValue.data.responses[2].aggregations.program_type.buckets;
      Vue.set(vm.GT_UVWR1_F2.data[0], 1, currentWeekFormat)
      Vue.set(vm.GT_UVWR1_F2.data[0], 2, beforeWeekFormat)
      // console.log("order_paly_data", order_paly_data)
      order_paly_data.forEach((value, index) => {
        let program = value.programname.buckets[0].key
        let program_name = value.key
        if (index < 15) {
          // console.log("value", index, program + '—' + program_name, value.demand_freq.value)
          Vue.set(vm.GT_UVWR1_F2.data[15 - index], 0, program + '—' + program_name)
          Vue.set(vm.GT_UVWR1_F2.data[15 - index], 1, (value.demand_freq.value / 10000).toFixed(1))
        }
      })

    },
    //电信数据（本周）
    api_data_m4(newValue, oldValue) {
      // console.log("电信数据模块四api_data_m4 - newValue");
      // console.log(newValue);
      let vm = this;
      let data_dx = newValue.data.responses  //总的移动数据
      let buckets = newValue.data.responses[1].aggregations.programname.buckets;

      let userBuckets = newValue.data.responses[0].aggregations;  //电信在册用户数据总览
      Vue.set(vm.GT_UVWR1_A2.data[1], 3, (userBuckets.register_num.buckets[0].register_num.value / 10000).toFixed(2))
      // console.log("电信", vm.GT_UVWR1_A2)

      //设置本周与上周时间（0603——0609  0610-0616）
      let temp_time = commonTools.split_WeeksDays_byDWwr(this.PR_week);
      let WeekFormat = commonTools.weekDaysShowFormat_AndBeforeWeek(
        temp_time.week_day_start,
        temp_time.week_day_end
      );
      let beforeWeekFormat = WeekFormat.beforeWeekFormat;  //上周时间
      let currentWeekFormat = WeekFormat.currentWeekFormat; // 本周时间

      //各大运营商各市州一周新增在册用户数（户）
      let dataMudule_2 = data_dx[0].aggregations.ac.buckets
      dataMudule_2.forEach((value, index) => {
        //（本期新增用户 - 上期新增用户） / 上期新增用户
        // let current_new_add_register_num = value.new_num.value  //本期新增
        if (index < 9) {
          // console.log("一周新增在册用户数temp", value, index)
          let open_rate = ((value.open_num.value / value.register_num.buckets[0].register_num.value) * 100).toFixed(4)
          switch (value.key) {
            case '851':
              Vue.set(vm.GT_UVWR1_B2.data[1], 3, (value.new_num.value / 10000).toFixed(2))
              Vue.set(vm.GT_UVWR1_D2.data[1], 3, Number(open_rate))
              break;
            case '852':
              Vue.set(vm.GT_UVWR1_B2.data[2], 3, (value.new_num.value / 10000).toFixed(2))
              Vue.set(vm.GT_UVWR1_D2.data[2], 3, Number(open_rate))
              break;
            case '853':
              Vue.set(vm.GT_UVWR1_B2.data[3], 3, (value.new_num.value / 10000).toFixed(2))
              Vue.set(vm.GT_UVWR1_D2.data[3], 3, Number(open_rate))
              break;
            case '854':
              Vue.set(vm.GT_UVWR1_B2.data[4], 3, (value.new_num.value / 10000).toFixed(2))
              Vue.set(vm.GT_UVWR1_D2.data[4], 3, Number(open_rate))
              break;
            case '855':
              Vue.set(vm.GT_UVWR1_B2.data[5], 3, (value.new_num.value / 10000).toFixed(2))
              Vue.set(vm.GT_UVWR1_D2.data[5], 3, Number(open_rate))
              break;
            case '856':
              Vue.set(vm.GT_UVWR1_B2.data[6], 3, (value.new_num.value / 10000).toFixed(2))
              Vue.set(vm.GT_UVWR1_D2.data[6], 3, Number(open_rate))
              break;
            case '857':
              Vue.set(vm.GT_UVWR1_B2.data[7], 3, (value.new_num.value / 10000).toFixed(2))
              Vue.set(vm.GT_UVWR1_D2.data[7], 3, Number(open_rate))
              break;
            case '858':
              Vue.set(vm.GT_UVWR1_B2.data[8], 3, (value.new_num.value / 10000).toFixed(2))
              Vue.set(vm.GT_UVWR1_D2.data[8], 3, Number(open_rate))
              break;
            case '859':
              Vue.set(vm.GT_UVWR1_B2.data[9], 3, (value.new_num.value / 10000).toFixed(2))
              Vue.set(vm.GT_UVWR1_D2.data[9], 3, Number(open_rate))
              break;
            default:
              break;
          }
        }
      })

      //G+TV一周用户增减数据
      //新增用户占比(电信))
      Vue.set(vm.GT_UVWR1_C1.data[1], 3, (userBuckets.new_num.value / 10000).toFixed(2))
      //停机用户占比
      Vue.set(vm.GT_UVWR1_C2.data[1], 3, (userBuckets.downtime_user_num.value))
      // console.log("电信停机用户", userBuckets.downtime_user_num.value)
      //销户
      Vue.set(vm.GT_UVWR1_C3.data[1], 3, (userBuckets.unsub_user_num.value))

      //电信用户数走势（户）
      let user_list_all = userBuckets.statistical_granularity.buckets
      let new_add_user_array = []   //新增用户
      let downtime_user_array = []  //停机用户
      let unsub_user_array = []  //销户用户
      let new_add_user_temp1 = ["product",]
      let new_add_user_temp2 = ["电信",]
      let downtime_user_temp1 = ["product",]
      let downtime_user_temp2 = ["电信",]
      let unsub_user_array_temp1 = ["product",]
      let unsub_user_array_temp2 = ["电信",]
      user_list_all.forEach((value, index) => {
        let setDate = new Date(value.key)
        let setdateYear = (setDate.getFullYear()) + "年"
        let setDateMonth = (setDate.getMonth() + 1) + "月"
        let setDateDay = (setDate.getDate()) + '日'
        let weekDate = setDateMonth + setDateDay
        new_add_user_temp1.push(weekDate)
        new_add_user_temp2.push((value.new_num.value / 10000).toFixed(2))
        downtime_user_temp1.push(weekDate)
        downtime_user_temp2.push(value.downtime_user_num.value)
        unsub_user_array_temp1.push(weekDate)
        unsub_user_array_temp2.push(value.unsub_user_num.value)
      })
      //电信用户数走势
      Vue.set(vm.GT_UVWR1_C4.data, 0, new_add_user_temp1)
      Vue.set(vm.GT_UVWR1_C4.data, 3, new_add_user_temp2)
      //停机用户
      Vue.set(vm.GT_UVWR1_C5.data, 0, downtime_user_temp1)
      Vue.set(vm.GT_UVWR1_C5.data, 3, downtime_user_temp2)
      //销户用户
      Vue.set(vm.GT_UVWR1_C6.data, 0, unsub_user_array_temp1)
      Vue.set(vm.GT_UVWR1_C6.data, 3, unsub_user_array_temp2)

      //电信本周开机率
      let current_open_num = userBuckets.open_num.value
      let current_register_num = userBuckets.register_num.buckets[0].register_num.value
      let current_open_rate = (current_open_num / current_register_num) * 100
      Vue.set(vm.GT_UVWR1_D1.data[3], 2, current_open_rate.toFixed(2))

      //电信用户本周直播节目收视TOP15
      Vue.set(vm.GT_UVWR1_E3.data[0], 1, currentWeekFormat)
      Vue.set(vm.GT_UVWR1_E3.data[0], 2, beforeWeekFormat)
      buckets.forEach((value, index) => {
        let program = value.key
        let program_name = value.channel.buckets[0].key
        if (index < 15) {
          // console.log("移动本周收视数据top15", value)
          Vue.set(vm.GT_UVWR1_E3.data[15 - index], 0, program + '—' + program_name)
          Vue.set(vm.GT_UVWR1_E3.data[15 - index], 1, (value.onlive_dur.value / 10000000).toFixed(1))
        }
      })

      //电信一周点播节目TOP15
      let order_paly_data = newValue.data.responses[2].aggregations.program_type.buckets;
      Vue.set(vm.GT_UVWR1_F3.data[0], 1, currentWeekFormat)
      Vue.set(vm.GT_UVWR1_F3.data[0], 2, beforeWeekFormat)
      // console.log("order_paly_data", order_paly_data)
      order_paly_data.forEach((value, index) => {
        let program = value.programname.buckets[0].key
        let program_name = value.key
        if (index < 15) {
          // console.log("value", index, program + '—' + program_name, value.demand_freq.value)
          Vue.set(vm.GT_UVWR1_F3.data[15 - index], 0, program + '—' + program_name)
          Vue.set(vm.GT_UVWR1_F3.data[15 - index], 1, (value.demand_freq.value / 10000).toFixed(1))
        }
      })
    },
    //移动数据（上周）
    api_data_m2_range(newValue, oldValue) {
      let vm = this
      // console.log("移动数据（上周）", newValue)
      let buckets = newValue.data.responses[1].aggregations.programname.buckets
      let userBuckets = newValue.data.responses[0].aggregations

      let current_open_num = userBuckets.open_num.value
      let current_register_num = userBuckets.register_num.buckets[0].register_num.value
      let current_open_rate = (current_open_num / current_register_num) * 100
      Vue.set(vm.GT_UVWR1_D1.data[1], 1, current_open_rate.toFixed(2))

      //移动直播top15
      setTimeout(() => {
        let live_temp = vm.GT_UVWR1_E1.data
        live_temp.forEach((value, index) => {
          if (index > 0) {
            Vue.set(vm.GT_UVWR1_E1.data[index], 2, 0)
            // console.log("移动本周直播数据--", value)
            buckets.forEach((value2, index2) => {
              let program = value2.key
              let program_name = value2.channel.buckets[0].key
              let program_full = program + '—' + program_name
              if (program_full == value[0]) {
                // console.log(program_full, value2.onlive_dur.value)
                Vue.set(vm.GT_UVWR1_E1.data[index], 2, (value2.onlive_dur.value / 1000000).toFixed(1))
              }
            })
          }
        })
      }, 500)
      // console.log("移动~~~~~~~~", vm.GT_UVWR1_E1.data)

      //移动点播top15
      let order_paly_data = newValue.data.responses[2].aggregations.program_type.buckets
      setTimeout(() => {
        let demand_temp = vm.GT_UVWR1_F1.data
        demand_temp.forEach((value, index) => {
          if (index > 0) {
            Vue.set(vm.GT_UVWR1_F1.data[index], 2, 0)
            // console.log("本周点播", value)
            order_paly_data.forEach((value2, index2) => {
              let program = value2.programname.buckets[0].key
              let program_name = value2.key
              let program_full = program + '—' + program_name
              if (program_full == value[0]) {
                // console.log("上周点播value2", program + '—' + program_name, value2.demand_freq.value)
                Vue.set(vm.GT_UVWR1_F1.data[index], 2, (value2.demand_freq.value / 10000).toFixed(1))
              }
            })
          }
        })
      })
      // console.log("vm.GT_UVWR1_F1.data", vm.GT_UVWR1_F1.data)
    },
    //联通数据（上周）
    api_data_m3_range(newValue, oldValue) {
      // console.log("联通上周", newValue)
      let vm = this
      let buckets = newValue.data.responses[1].aggregations.programname.buckets;
      let userBuckets = newValue.data.responses[0].aggregations;  //联通数据

      //联通上周开机率
      let current_open_num = userBuckets.open_num.value
      let current_register_num = userBuckets.register_num.buckets[0].register_num.value
      let current_open_rate = (current_open_num / current_register_num) * 100
      Vue.set(vm.GT_UVWR1_D1.data[2], 1, current_open_rate.toFixed(2))

      //联通直播 top15
      setTimeout(() => {
        let live_temp = vm.GT_UVWR1_E2.data
        live_temp.forEach((value, index) => {
          if (index > 0) {
            Vue.set(vm.GT_UVWR1_E2.data[index], 2, 0)
            // console.log("联通本周直播数据--", value)
            buckets.forEach((value2, index2) => {
              let program = value2.key
              let program_name = value2.channel.buckets[0].key
              let program_full = program + '—' + program_name
              if (program_full == value[0]) {
                // console.log(program_full,index, value2.onlive_dur.value)
                Vue.set(vm.GT_UVWR1_E2.data[index], 2, (value2.onlive_dur.value / 1000000).toFixed(1))
              }
            })
          }
        })
      }, 500)

      //联通点播top15
      let order_paly_data = newValue.data.responses[2].aggregations.program_type.buckets
      setTimeout(() => {
        let demand_temp = vm.GT_UVWR1_F2.data
        demand_temp.forEach((value, index) => {
          if (index > 0) {
            Vue.set(vm.GT_UVWR1_F2.data[index], 2, 0)
            // console.log("本周点播", value)
            order_paly_data.forEach((value2, index2) => {
              let program = value2.programname.buckets[0].key
              let program_name = value2.key
              let program_full = program + '—' + program_name
              if (program_full == value[0]) {
                // console.log("上周点播value2", program + '—' + program_name, value2.demand_freq.value)
                Vue.set(vm.GT_UVWR1_F2.data[index], 2, (value2.demand_freq.value / 10000).toFixed(1))
              }
            })
          }
        })
      })
    },
    //电信数据（上周）
    api_data_m4_range(newValue, oldValue) {
      // console.log("电信数据（上周）", newValue)
      let vm = this
      let buckets = newValue.data.responses[1].aggregations.programname.buckets;
      let userBuckets = newValue.data.responses[0].aggregations;  //电信数据总览
      //联通上周开机率
      let current_open_num = userBuckets.open_num.value
      let current_register_num = userBuckets.register_num.buckets[0].register_num.value
      let current_open_rate = (current_open_num / current_register_num) * 100
      Vue.set(vm.GT_UVWR1_D1.data[3], 1, current_open_rate.toFixed(2))

      //电信直播top15
      setTimeout(() => {
        let live_temp = vm.GT_UVWR1_E3.data
        live_temp.forEach((value, index) => {
          if (index > 0) {
            Vue.set(vm.GT_UVWR1_E3.data[index], 2, 0)
            // console.log("电信本周直播数据--", value)
            buckets.forEach((value2, index2) => {
              let program = value2.key
              let program_name = value2.channel.buckets[0].key
              let program_full = program + '—' + program_name
              if (program_full == value[0]) {
                // console.log(program_full, index2, value2.onlive_dur.value)
                Vue.set(vm.GT_UVWR1_E3.data[index], 2, (value2.onlive_dur.value / 1000000).toFixed(1))
              }
            })
          }
        })
      }, 500)

      //电信点播top15
      let order_paly_data = newValue.data.responses[2].aggregations.program_type.buckets
      setTimeout(() => {
        let demand_temp = vm.GT_UVWR1_F3.data
        demand_temp.forEach((value, index) => {
          if (index > 0) {
            Vue.set(vm.GT_UVWR1_F3.data[index], 2, 0)
            console.log("本周点播", value)
            order_paly_data.forEach((value2, index2) => {
              let program = value2.programname.buckets[0].key
              let program_name = value2.key
              let program_full = program + '—' + program_name
              if (program_full == value[0]) {
                console.log("上周点播value2", program + '—' + program_name, value2.demand_freq.value)
                Vue.set(vm.GT_UVWR1_F3.data[index], 2, (value2.demand_freq.value / 10000).toFixed(1))
              }
            })
          }
        })
      })
      // order_paly_data.forEach((value, index) => {
      //   if (index < 15) {
      //     let program = value.programname.buckets[0].key
      //     let program_name = value.key
      //     // console.log("value", index, program + '—' + program_name, value.demand_freq.value)
      //     Vue.set(vm.GT_UVWR1_F3.data[15 - index], 2, (value.demand_freq.value / 10000).toFixed(1))
      //   }
      // })
    },
  },
  computed: {
    ...mapGetters(["PR_operator", "PR_week"]),
    ifModuleydShow: {
      get: function () {
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
      set: function (newValue) { }
    },
    ifModuleltShow: {
      get: function () {
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
      set: function (newValue) { }
    },
    ifModuledxShow: {
      get: function () {
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
      set: function (newValue) { }
    }
  },
  data() {
    return {
      current_newadd_num_arr: null, //各大运营商各市州本周新增在册用户数
      last_newadd_num_arr: null, //各大运营商各市州上周新增在册用户数
      GT_UVWR1_A1: {
        id: "GT_UVWR1_A1",
        title: "",
        date: [],
        data: [],
        color: ["#EDEDED", "#ED7D31"]
        // date: ["0520-0526", "0527-0602"],
        // data: ["209.4", "213.4"],
      },
      //各大运营商在册用户数总览
      GT_UVWR1_A2: {
        title: "",
        height: "height:300px;",
        id: "GT_UVWR1_A2",
        color: ["#ED7D31", "#5B9BD5", "#FFC000"],
        data: [["运营商", "移动", "联通", "电信"], ["占比",]],
        label_formatter: "{c}\n{d}%"
      },
      //新增、停机、销户用户数总览
      GT_UVWR1_A3: {
        id: "GT_UVWR1_A3",
        title: "",
        data: ["新增用户数", "停机用户数", "销户用户数"],
        data2: [],
        color: ["#5B9BD5", "#FFC000", "#ED7D31"],
      },
      GT_UVWR1_B1: {
        title: "",
        id: "GT_UVWR1_B1",
        height: "height:500px;",
        m_data: ["贵阳", "遵义", "黔东南", "毕节", "黔南", "铜仁", "六盘水", "安顺", "黔西南"],
        m_color: ["#5B9BD5", "#FFC000", "#ED7D31", "#9DC3E6", "#FFD966", "#F4B183", "#DEEBF7", "#FFF2CC", "#FBE5D6"],
        // m_data2: [
        //   { value: 116.4, name: "贵阳" },
        //   { value: 59.7, name: "遵义" },
        //   { value: 32.4, name: "黔东南" },
        //   { value: 32.4, name: "毕节" },
        //   { value: 32.4, name: "黔南" },
        //   { value: 32.4, name: "铜仁" },
        //   { value: 32.4, name: "六盘水" },
        //   { value: 32.4, name: "安顺" },
        //   { value: 32.4, name: "黔西南" }
        // ],
        m_data2: [],
        label_formatter: "{b}\n{c}\n{d}%",
        legend_show: false
      },
      GT_UVWR1_B2: {
        title: "",
        id: "GT_UVWR1_B2",
        color: ["#5B9BD5", "#FFC000", "#ED7D31", "#BFBFBF"],
        data: [
          ["product", "移动", "联通", "电信", "增速"],
          ["贵阳",],
          ["遵义",],
          ["安顺",],
          ["黔南",],
          ["黔东南",],
          ["铜仁",],
          ["毕节",],
          ["六盘水",],
          ["黔西南",]

          // ["贵阳", 43.3, 85.8, 93.7, 2.7],
          // ["遵义", 83.1, 73.4, 55.1, 3.5],
          // ["安顺", 86.4, 65.2, 82.5, 2.3],
          // ["黔南", 72.4, 53.9, 39.1, 2.6],
          // ["黔东南", 43.3, 85.8, 93.7, 3.0],
          // ["铜仁", 83.1, 73.4, 55.1, 3.2],
          // ["毕节", 86.4, 65.2, 82.5, 2.3],
          // ["六盘水", 72.4, 53.9, 39.1, 3.6],
          // ["黔西南", 43.3, 85.8, 93.7, 2.8]
        ]
      },
      GT_UVWR1_C1: {
        title: "",
        height: "height:300px;",
        id: "GT_UVWR1_C1",
        color: ["#ED7D31", "#5B9BD5", "#FFC000"],
        // data: [["运营商", "移动", "联通", "电信"], ["占比", 116.4, 32.4, 59.7]],
        data: [["运营商", "移动", "联通", "电信"], ["占比",]],
        label_formatter: "{c}\n{d}%"
      },
      GT_UVWR1_C2: {
        title: "",
        height: "height:300px;",
        id: "GT_UVWR1_C2",
        color: ["#ED7D31", "#5B9BD5", "#FFC000"],
        // data: [["运营商", "移动", "联通", "电信"], ["占比", 100, 20, 10]],
        data: [["运营商", "移动", "联通", "电信"], ["占比",]],
        label_formatter: "{c}\n{d}%"
      },
      GT_UVWR1_C3: {
        title: "",
        height: "height:300px;",
        id: "GT_UVWR1_C3",
        color: ["#ED7D31", "#5B9BD5", "#FFC000"],
        // data: [["运营商", "移动", "联通", "电信"], ["占比", 100, 0, 0]],
        data: [["运营商", "移动", "联通", "电信"], ["占比",]],
        label_formatter: "{c}\n{d}%"
      },
      GT_UVWR1_C4: {
        title: "",
        id: "GT_UVWR1_C4",
        color: ["#5B9BD4", "#EC7C30 ", "#FFC000"],
        data: [
          // ["product", "6月24日", "6月25日", "6月26日", "6月27日", "6月28日", "6月29日", "6月30日", "7月1日", "7月2日", "7月3日", "7月4日"],
          // ["移动", 2140, 2370, 2800, 2200, 2234, 2640, 2859, 2140, 2670, 2580, 3800],
          // ["联通", 1400, 1700, 1800, 2000, 2340, 2400, 2590, 3040, 3070, 3800, 3200],
          // ["电信", 2140, 2170, 2580, 2400, 2534, 2640, 2759, 2640, 2270, 9880, 4200]
        ]
      },
      GT_UVWR1_C5: {
        title: "",
        id: "GT_UVWR1_C5",
        color: ["#5B9BD4", "#EC7C30 ", "#FFC000"],
        data: [
          // ["product", "6月24日", "6月25日", "6月26日", "6月27日", "6月28日", "6月29日", "6月30日", "7月1日", "7月2日", "7月3日", "7月4日"],
          // ["移动", 2140, 2370, 2800, 2200, 2234, 2640, 2859, 2140, 2670, 2580, 3800],
          // ["联通", 1400, 1700, 1800, 2000, 2340, 2400, 2590, 3040, 3070, 3800, 3200],
          // ["电信", 2140, 2170, 2580, 2400, 2534, 2640, 2759, 2640, 2270, 9880, 4200]
        ]
      },
      GT_UVWR1_C6: {
        title: "",
        id: "GT_UVWR1_C6",
        color: ["#5B9BD4", "#EC7C30 ", "#FFC000"],
        data: [
          // ["product", "6月24日", "6月25日", "6月26日", "6月27日", "6月28日", "6月29日", "6月30日", "7月1日", "7月2日", "7月3日", "7月4日"],
          // ["移动", 2140, 2370, 2800, 2200, 2234, 2640, 2859, 2140, 2670, 2580, 3800],
          // ["联通", 1400, 1700, 1800, 2000, 2340, 2400, 2590, 3040, 3070, 3800, 3200],
          // ["电信", 2140, 2170, 2580, 2400, 2534, 2640, 2759, 2640, 2270, 9880, 4200]
        ]
      },
      GT_UVWR1_D1: {
        title: "",
        id: "GT_UVWR1_D1",
        height: "height:300px;",
        color: ["#EDEDED", "#5B9BD5"],
        ifYaxisShow: true,
        ifLegendShow: true,
        m_barWidth: "20%",
        data: [
          ["product",],
          ["移动",],
          ["联通",],
          ["电信",]
        ]
        // data: [
        //   ["product", "0520-0526", "0527-0602"],
        //   ["移动", 48.0, 48.1],
        //   ["联通", 54.2, 57.4],
        //   ["电信", 20.1, 20.0]
        // ]
      },
      GT_UVWR1_D2: {
        title: "",
        id: "GT_UVWR1_D2",
        color: ["#5B9BD5", "#ED7D31", "#FFC000"],
        data: [
          ["product", "移动", "联通", "电信"],
          ["贵阳",],
          ["遵义",],
          ["安顺",],
          ["黔南",],
          ["黔东南",],
          ["铜仁",],
          ["毕节",],
          ["六盘水",],
          ["黔西南",]
          // ["贵阳", 23.3, 25.8, 23.7],
          // ["遵义", 23.3, 35.8, 23.7],
          // ["毕节", 23.3, 25.8, 23.7],
          // ["铜仁", 23.3, 15.8, 23.7],
          // ["六盘水", 23.3, 25.8, 23.7],
          // ["黔南", 23.3, 25.8, 23.7],
          // ["黔东南", 23.3, 35.8, 23.7],
          // ["黔西南", 23.3, 25.8, 23.7],
          // ["安顺", 23.3, 15.8, 23.7]
        ]
      },

      GT_UVWR1_E1: {
        title: "",
        id: "GT_UVWR1_E1",
        height: "height:800px;",
        color: ["#5B9BD5", "#EDEDED"],
        data: [
          ["product",],
          [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
          // ["product", "0527-0602", "0520-0526"],
          // ["CCTV-13-新闻直播间", 152, 111],
          // ["贵州卫视-铁核桃之无间风云", 242, 222],
          // ["贵州卫视-绝地枪王II松花江上的枪声", 485, 433],
          // ["贵州卫视-孤雁", 717, 777],
          // ["谍战剧场-信者无敌", 733, 656],
          // ["贵州-2-百姓关注", 894, 888],
          // ["谍战剧场-女人的抗战", 928, 854],
          // ["贵州卫视-情谜睡美人", 937, 999],
          // ["贵州卫视-二十四道拐", 1324, 1111],
          // ["贵州卫视-贵州新闻联播", 1621, 1230],
          // ["贵州卫视-中央台新闻联播", 1685, 1111],
          // ["CCTV-4-中国新闻", 2588, 2222],
          // ["湖南卫视-筑梦情缘", 3068, 3131],
          // ["CCTV-12-普法栏目组", 4350, 4333],
          // ["浙江卫视-我的真朋友", 9692, 8888]
        ]
      },
      GT_UVWR1_E2: {
        title: "",
        id: "GT_UVWR1_E2",
        height: "height:800px;",
        color: ["#ED7D31", "#EDEDED"],
        data: [
          ["product",],
          [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
          // ["product", "0527-0602", "0520-0526"],
          // ["CCTV-13-新闻直播间", 152, 111],
          // ["贵州卫视-铁核桃之无间风云", 242, 222],
          // ["贵州卫视-绝地枪王II松花江上的枪声", 485, 433],
          // ["贵州卫视-孤雁", 717, 777],
          // ["谍战剧场-信者无敌", 733, 656],
          // ["贵州-2-百姓关注", 894, 888],
          // ["谍战剧场-女人的抗战", 928, 854],
          // ["贵州卫视-情谜睡美人", 937, 999],
          // ["贵州卫视-二十四道拐", 1324, 1111],
          // ["贵州卫视-贵州新闻联播", 1621, 1230],
          // ["贵州卫视-中央台新闻联播", 1685, 1111],
          // ["CCTV-4-中国新闻", 2588, 2222],
          // ["湖南卫视-筑梦情缘", 3068, 3131],
          // ["CCTV-12-普法栏目组", 4350, 4333],
          // ["浙江卫视-我的真朋友", 9692, 8888]
        ]
      },
      GT_UVWR1_E3: {
        title: "",
        id: "GT_UVWR1_E3",
        height: "height:800px;",
        color: ["#FFC000", "#EDEDED"],
        data: [
          ["product",],
          [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
          // ["product", "0527-0602", "0520-0526"],
          // ["CCTV-13-新闻直播间", 152, 111],
          // ["贵州卫视-铁核桃之无间风云", 242, 222],
          // ["贵州卫视-绝地枪王II松花江上的枪声", 485, 433],
          // ["贵州卫视-孤雁", 717, 777],
          // ["谍战剧场-信者无敌", 733, 656],
          // ["贵州-2-百姓关注", 894, 888],
          // ["谍战剧场-女人的抗战", 928, 854],
          // ["贵州卫视-情谜睡美人", 937, 999],
          // ["贵州卫视-二十四道拐", 1324, 1111],
          // ["贵州卫视-贵州新闻联播", 1621, 1230],
          // ["贵州卫视-中央台新闻联播", 1685, 1111],
          // ["CCTV-4-中国新闻", 2588, 2222],
          // ["湖南卫视-筑梦情缘", 3068, 3131],
          // ["CCTV-12-普法栏目组", 4350, 4333],
          // ["浙江卫视-我的真朋友", 9692, 8888]
        ]
      },
      GT_UVWR1_F1: {
        title: "",
        id: "GT_UVWR1_F1",
        height: "height:800px;",
        color: ["#5B9BD5", "#EDEDED"],
        data: [
          ["product",],
          [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
          // ["product", "0527-0602", "0520-0526"],
          // ["CCTV-13-新闻直播间", 152, 111],
          // ["贵州卫视-铁核桃之无间风云", 242, 222],
          // ["贵州卫视-绝地枪王II松花江上的枪声", 485, 433],
          // ["贵州卫视-孤雁", 717, 777],
          // ["谍战剧场-信者无敌", 733, 656],
          // ["贵州-2-百姓关注", 894, 888],
          // ["谍战剧场-女人的抗战", 928, 854],
          // ["贵州卫视-情谜睡美人", 937, 999],
          // ["贵州卫视-二十四道拐", 1324, 1111],
          // ["贵州卫视-贵州新闻联播", 1621, 1230],
          // ["贵州卫视-中央台新闻联播", 1685, 1111],
          // ["CCTV-4-中国新闻", 2588, 2222],
          // ["湖南卫视-筑梦情缘", 3068, 3131],
          // ["CCTV-12-普法栏目组", 4350, 4333],
          // ["浙江卫视-我的真朋友", 9692, 8888]
        ]
      },
      GT_UVWR1_F2: {
        title: "",
        id: "GT_UVWR1_F2",
        height: "height:800px;",
        color: ["#ED7D31", "#EDEDED"],
        data: [
          ["product",],
          [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
          // ["product", "0527-0602", "0520-0526"],
          // ["CCTV-13-新闻直播间", 152, 111],
          // ["贵州卫视-铁核桃之无间风云", 242, 222],
          // ["贵州卫视-绝地枪王II松花江上的枪声", 485, 433],
          // ["贵州卫视-孤雁", 717, 777],
          // ["谍战剧场-信者无敌", 733, 656],
          // ["贵州-2-百姓关注", 894, 888],
          // ["谍战剧场-女人的抗战", 928, 854],
          // ["贵州卫视-情谜睡美人", 937, 999],
          // ["贵州卫视-二十四道拐", 1324, 1111],
          // ["贵州卫视-贵州新闻联播", 1621, 1230],
          // ["贵州卫视-中央台新闻联播", 1685, 1111],
          // ["CCTV-4-中国新闻", 2588, 2222],
          // ["湖南卫视-筑梦情缘", 3068, 3131],
          // ["CCTV-12-普法栏目组", 4350, 4333],
          // ["浙江卫视-我的真朋友", 9692, 8888]
        ]
      },
      GT_UVWR1_F3: {
        title: "",
        id: "GT_UVWR1_F3",
        height: "height:800px;",
        color: ["#FFC000", "#EDEDED"],
        data: [
          ["product",],
          [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
          // ["product", "0527-0602", "0520-0526"],
          // ["CCTV-13-新闻直播间", 152, 111],
          // ["贵州卫视-铁核桃之无间风云", 242, 222],
          // ["贵州卫视-绝地枪王II松花江上的枪声", 485, 433],
          // ["贵州卫视-孤雁", 717, 777],
          // ["谍战剧场-信者无敌", 733, 656],
          // ["贵州-2-百姓关注", 894, 888],
          // ["谍战剧场-女人的抗战", 928, 854],
          // ["贵州卫视-情谜睡美人", 937, 999],
          // ["贵州卫视-二十四道拐", 1324, 1111],
          // ["贵州卫视-贵州新闻联播", 1621, 1230],
          // ["贵州卫视-中央台新闻联播", 1685, 1111],
          // ["CCTV-4-中国新闻", 2588, 2222],
          // ["湖南卫视-筑梦情缘", 3068, 3131],
          // ["CCTV-12-普法栏目组", 4350, 4333],
          // ["浙江卫视-我的真朋友", 9692, 8888]
        ]
      }
    };
  },

  methods: {
    //冒泡排序 -- 从序数index几开始
    sortArr(arr, index) {
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
    },
    // 保留两位小数
    returnFloat(value) {
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
    /**参数说明：
     * 根据长度截取先使用字符串，超长部分追加…
     * str 对象字符串
     * len 目标字节长度
     * 返回值： 处理结果字符串
     */
    cutString(str, len) {
      //length属性读出来的汉字长度为1
      if (str.length * 2 <= len) {
        return str;
      }
      var strlen = 0;
      var s = "";
      for (var i = 0; i < str.length; i++) {
        s = s + str.charAt(i);
        if (str.charCodeAt(i) > 128) {
          strlen = strlen + 2;
          if (strlen >= len) {
            return s.substring(0, s.length - 1) + "...";
          }
        } else {
          strlen = strlen + 1;
          if (strlen >= len) {
            return s.substring(0, s.length - 2) + "...";
          }
        }
      }
      return s;
    },
    api_data_set() {
      console.log("~~~~~api_data_m1");
      console.log(this.api_data_m1);
    },
    render() {
      let vm = this;
      var myChart = this.$echarts.init(
        document.getElementById(vm.GT_UVWR1_A1.id)
      );
      var option = {
        title: {
          text: "",
          textStyle: {
            //设置主标题风格
            Color: "#333333", //设置主标题字体颜色
            fontStyle: "", //主标题文字风格
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: "normal"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        //图表自带工具
        toolbox: {
          show: true,
          top: "5%",
          right: "6%",
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "2%",
          right: "2%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: vm.GT_UVWR1_A1.date,
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                color: "rgba(0,0,0,0.65)" //设置横坐标轴线颜色
              }
            }
          }
        ],
        yAxis: [
          {
            axisLabel: {
              formatter: function () {
                return ""; // 隐藏Y左边数据
              }
            },
            // 刻度线的设置
            splitLine: {
              show: false
            },
            axisLine: {
              show: false, //Y轴不显示
              lineStyle: {
                color: "rgba(0,0,0,0.65)" //设置横坐标轴线颜色
              }
            },
            axisLabel: {
              //横坐标类目文字
              show: false
            },
            axisTick: {
              show: false //设置坐标轴刻度不显示
            }
          }
        ],
        series: [
          {
            name: "",
            type: "bar",
            barWidth: "40%",
            data: vm.GT_UVWR1_A1.data,
            itemStyle: {
              normal: {
                //每根柱子颜色设置
                color: function (params) {
                  let colorList = vm.GT_UVWR1_A1.color;
                  return colorList[params.dataIndex];
                },
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "black",
                    fontSize: 16
                  }
                }
              }
            }
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    render2() {
      let vm = this;
      var myChart = this.$echarts.init(
        document.getElementById(vm.GT_UVWR1_A3.id)
      );
      var option = {
        title: {
          text: "",
          textStyle: {
            //设置主标题风格
            Color: "#333333", //设置主标题字体颜色
            fontStyle: "", //主标题文字风格
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: "normal"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        //图表自带工具
        toolbox: {
          show: true,
          top: "5%",
          right: "6%",
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "2%",
          right: "2%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: vm.GT_UVWR1_A3.data,
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                color: "rgba(0,0,0,0.65)" //设置横坐标轴线颜色
              }
            }
          }
        ],
        yAxis: [
          {
            axisLabel: {
              formatter: function () {
                return ""; // 隐藏Y左边数据
              }
            },
            // 刻度线的设置
            splitLine: {
              show: false
            },
            axisLine: {
              show: false, //Y轴不显示
              lineStyle: {
                color: "rgba(0,0,0,0.65)" //设置横坐标轴线颜色
              }
            },
            axisLabel: {
              //横坐标类目文字
              show: false
            },
            axisTick: {
              show: false //设置坐标轴刻度不显示
            }
          }
        ],
        series: [
          {
            name: "",
            type: "bar",
            barWidth: "40%",
            // data: ["65453", "12356", "21235"],
            data: vm.GT_UVWR1_A3.data2,
            itemStyle: {
              normal: {
                //每根柱子颜色设置
                color: function (params) {
                  let colorList = vm.GT_UVWR1_A3.color;
                  return colorList[params.dataIndex];
                },
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "black",
                    fontSize: 16
                  }
                }
              }
            }
          }
        ]
      };
      myChart.clear();
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  }
};
</script>

<style scoped>
.font_color_r {
  color: #bf0000;
  font-weight: bold;
}
</style>

<style >
.UVWR_m1 .GT_UVWR1_A1 {
  display: inline-block;
  height: 300px;
  width: 100%;
}
.UVWR_m1 .GT_UVWR1_A2 {
  display: inline-block;
  height: 300px;
  width: 100%;
}
.UVWR_m1 .GT_UVWR1_A3 {
  display: inline-block;
  height: 300px;
  width: 100%;
}

.UVWR_m1 .GT_UVWR1_B1 {
  display: inline-block;
  height: 300px;
  width: 100%;
}
.UVWR_m1 .GT_UVWR1_B2 {
  display: inline-block;
  height: 300px;
  width: 100%;
}
</style>
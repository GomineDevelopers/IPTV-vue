<template>
  <div class="height_auto">
    <!-- G+TV月度用户收视行为报告开始 -->
    <el-row class="viewing_behavior_report">
      <el-col class="height_auto monthly_report_left">
        <el-row class="periodic_report_title">G+TV月度用户收视行为报告</el-row>
        <el-row class="monthly_report_body">
          <!-- 模块一 用户发展数据概览开始 -->
          <!-- G+TV用户发展数据概览开始 -->
          <el-row id="user_development_data">
            <el-row class="model_title">
              <span class="title_border_left"></span>G+TV用户发展数据概览
            </el-row>
            <el-row class="G_TV_user_dev_data back_white">
              <el-col class="height_auto" :span="10">
                <line-chart-single :lineData="G_TVUserData"></line-chart-single>
              </el-col>
              <el-col class="height_auto" :span="14">
                <bar-list-chart-stack :barListData="NewUserComparisonData"></bar-list-chart-stack>
              </el-col>
            </el-row>
          </el-row>
          <!-- G+TV用户发展数据概览结束 -->

          <!-- G+TV各运营商侧用户发展数据概览开始 -->
          <el-row>
            <el-row class="model_title">
              <span class="title_border_left"></span>G+TV各运营商侧用户发展数据概览
            </el-row>
            <el-row class="G_TV_user_dev_data back_white">
              <el-col class="height_auto" :span="8">
                <!-- 在册用户总数 -->
                <line-chart-single :lineData="registeredUsersData"></line-chart-single>
              </el-col>
              <el-col class="height_auto" :span="8">
                <!-- 月新增在册用户对比 -->
                <line-chart-single :lineData="monthNewRegUserData"></line-chart-single>
              </el-col>
              <el-col class="height_auto" :span="8">
                <!-- 月销户用户对比 -->
                <line-chart-single :lineData="monthCancellationUserData"></line-chart-single>
              </el-col>
            </el-row>
          </el-row>
          <!-- G+TV各运营商侧用户发展数据概览结束 -->

          <!-- G+TV7月分地区用户发展数据概览开始 -->
          <el-row>
            <el-row class="model_title">
              <span class="title_border_left"></span>G+TV分地区用户发展数据概览
            </el-row>
            <el-row class="G_TV_user_dev_data back_white">
              <el-col class="height_auto" :span="24">
                <line-chart-single :lineData="G_TVRegionUserData"></line-chart-single>
              </el-col>
            </el-row>
          </el-row>
          <!-- G+TV7月分地区用户发展数据概览结束 -->

          <!-- G+TV7月各周用户发展数据开始 -->
          <el-row>
            <el-row class="model_title">
              <span class="title_border_left"></span>G+TV各周用户发展数据
              <!-- <span class="title_border_left"></span>G+TV7月各周用户发展数据 -->
            </el-row>
            <el-row class="G_TV_user_dev_data back_white">
              <el-col class="height_auto" :span="24">
                <line-chart-single :lineData="weekNewUserData"></line-chart-single>
              </el-col>
            </el-row>
          </el-row>
          <!-- G+TV7月各周用户发展数据结束 -->

          <!-- G+TV各周分地区用户发展数据概览开始 -->
          <el-row>
            <el-row class="model_title">
              <span class="title_border_left"></span>G+TV各周分地区用户发展数据概览
            </el-row>
            <el-row class="week_region_data back_white">
              <el-col class="height_auto" v-show="ifModuleydShow" :span="8">
                <!-- 移动侧7月各市州新增在册用户数 -->
                <bar-list-chart-stack :barListData="mobileNewUserData"></bar-list-chart-stack>
              </el-col>
              <el-col class="height_auto" v-show="ifModuleltShow" :span="8">
                <!-- 联通侧7月各市州新增在册用户数 -->
                <el-row class="unicornNewUserChart height_auto">
                  <bar-list-chart-stack :barListData="unicornNewUserData"></bar-list-chart-stack>
                </el-row>
                <!-- <el-row class="unicornNewUserTable">
              <table class="gridtable">
                <tr v-for="(item,index) in unicornTableData" :key="index+'c'">
                  <th>{{item.name}}</th>
                  <th>{{item.data1}}</th>
                  <th>{{item.data2}}</th>
                  <th>{{item.data3}}</th>
                  <th>{{item.data4}}</th>
                  <th>{{item.data5}}</th>
                  <th>{{item.data6}}</th>
                  <th>{{item.data7}}</th>
                  <th>{{item.data8}}</th>
                  <th>{{item.data9}}</th>
                </tr>
              </table>
                </el-row>-->
              </el-col>
              <el-col class="height_auto" v-show="ifModuledxShow" :span="8">
                <!-- 电信侧7月各市州新增在册用户数 -->
                <bar-list-chart-stack :barListData="telecomNewUserData"></bar-list-chart-stack>
              </el-col>
            </el-row>
          </el-row>
          <!-- G+TV各周分地区用户发展数据概览结束 -->

          <!-- G+TV 7月每日用户发展数据开始 -->
          <el-row>
            <el-row class="model_title">
              <span class="title_border_left"></span>G+TV本月每日用户发展数据
              <!-- <span class="title_border_left"></span>G+TV7月每日用户发展数据 -->
            </el-row>
            <el-row class="everyday_user_develop back_white">
              <el-col class="height_auto" :span="24">
                <line-dotted-chart :lineData="everyDayUserData"></line-dotted-chart>
              </el-col>
            </el-row>
          </el-row>
          <!-- G+TV 7月每日用户发展数据结束 -->
          <!-- 模块一 用户发展数据概览结束 -->

          <!-- 模块二 运营数据概览开始 -->
          <!-- 开机活跃数据开始 -->
          <el-row id="operational_data">
            <el-row class="model_title">
              <span class="title_border_left"></span>开机活跃数据
            </el-row>
            <el-row class="everyday_user_develop back_white">
              <el-col class="height_auto" :span="12">
                <line-chart-single-prop :lineData="monthPowerActivityData"></line-chart-single-prop>
              </el-col>
              <el-col class="height_auto" :span="12">
                <line-chart-single-prop :lineData="areaPowerActivityData"></line-chart-single-prop>
              </el-col>
            </el-row>
          </el-row>
          <!-- 开机活跃数据结束 -->

          <!-- 日开机活跃数据开始 -->
          <el-row>
            <el-row class="model_title">
              <span class="title_border_left"></span>日开机活跃数据
            </el-row>
            <el-row class="everyday_user_develop back_white">
              <el-col class="height_auto" :span="24">
                <every-power-activity :lineData="everyPowerActivityData"></every-power-activity>
              </el-col>
            </el-row>
          </el-row>
          <!-- 日开机活跃数据结束 -->

          <!-- 整体收视行为分析开始 -->
          <el-row>
            <el-row class="model_title">
              <span class="title_border_left"></span>整体收视行为分析
            </el-row>
            <el-row class="analysis_of_viewing back_white">
              <el-row class="analysis_of_viewing1">
                <el-col class="height_auto" :span="8">
                  <many-pie-chart :pieData="usingTheUser"></many-pie-chart>
                  <!-- <span>注：由内而外分别是4月、5月、6月、7月</span> -->
                </el-col>
                <el-col class="height_auto" :span="8">
                  <many-pie-chart :pieData="usingTheTime"></many-pie-chart>
                  <!-- <span>注：由内而外分别是4月、5月、6月、7月</span> -->
                </el-col>
                <el-col class="height_auto" :span="8">
                  <many-pie-chart :pieData="usingTheDuration"></many-pie-chart>
                  <!-- <span>注：由内而外分别是4月、5月、6月、7月</span> -->
                </el-col>
              </el-row>
              <el-row class="analysis_of_viewing2">
                <el-col class="height_auto" :span="24">
                  <monthly-total-viewing :lineData="monthlyTotalViewingData"></monthly-total-viewing>
                  <span>注：总体收视数据为直播数据+点播数据+回看数据</span>
                </el-col>
              </el-row>
            </el-row>
          </el-row>
          <!-- 整体收视行为分析结束 -->

          <!-- 直播收视行为分析开始 -->
          <el-row>
            <el-row class="model_title">
              <span class="title_border_left"></span>直播收视行为分析
            </el-row>
            <el-row class="analysis_of_viewing back_white">
              <el-row class="analysis_of_viewing1">
                <el-col class="height_auto" :span="8">
                  <many-pie-chart :pieData="liveViewingDurationData"></many-pie-chart>
                  <!-- <span>注：由内而外分别是4月、5月、6月、7月</span> -->
                </el-col>
                <el-col class="height_auto" :span="8">
                  <many-pie-chart :pieData="liveViewingUserData"></many-pie-chart>
                  <!-- <span>注：由内而外分别是4月、5月、6月、7月</span> -->
                </el-col>
                <el-col class="height_auto" :span="8">
                  <many-pie-chart :pieData="liveViewingTimesData"></many-pie-chart>
                  <!-- <span>注：由内而外分别是4月、5月、6月、7月</span> -->
                </el-col>
              </el-row>
              <el-row class="analysis_of_viewing2">
                <el-col class="height_auto" :span="24">
                  <monthly-total-viewing :lineData="monthlyTotalViewingData2"></monthly-total-viewing>
                  <span>注：直播收视数据为移动侧+联通侧+电信侧数据总数据</span>
                </el-col>
              </el-row>
            </el-row>
          </el-row>
          <!-- 直播收视行为分析结束 -->

          <!-- 7月各周直播收视日数据开始 -->
          <el-row>
            <el-row class="model_title">
              <!-- <span class="title_border_left"></span>7月各周直播收视日数据 -->
              <span class="title_border_left"></span>本月各周直播收视日数据
            </el-row>
            <el-row class="analysis_of_viewing back_white">
              <el-row class="analysis_of_viewing1">
                <el-col class="height_auto" :span="8">
                  <many-pie-chart :pieData="weekLiveViewUserData"></many-pie-chart>
                  <span>注：由内而外分别是7月第1周、7月第2周、7月第3周、7月第4周</span>
                </el-col>
                <el-col class="height_auto" :span="8">
                  <many-pie-chart :pieData="weekLiveViewTimesData"></many-pie-chart>
                  <span>注：由内而外分别是7月第1周、7月第2周、7月第3周、7月第4周</span>
                </el-col>
                <el-col class="height_auto" :span="8">
                  <many-pie-chart :pieData="weekliveViewDurationData"></many-pie-chart>
                  <span>注：由内而外分别是7月第1周、7月第2周、7月第3周、7月第4周</span>
                </el-col>
              </el-row>
              <el-row class="analysis_of_viewing2">
                <el-col class="height_auto" :span="24">
                  <monthly-total-viewing :lineData="weekliveViewingData"></monthly-total-viewing>
                  <span>注：各周直播收视数据为移动侧+联通侧+电信侧数据总数据&nbsp;&nbsp;&nbsp;单位：十万户</span>
                </el-col>
              </el-row>
            </el-row>
          </el-row>
          <!-- 7月各周直播收视日数据结束 -->

          <!-- 直播收视行为分析开始 -->
          <el-row>
            <el-row class="model_title">
              <span class="title_border_left"></span>直播收视行为分析
            </el-row>
            <el-row class="live_viewing_data back_white">
              <el-col class="height_auto" :span="8">
                <live-view-behavior-analysis :barListData="liveViewerData"></live-view-behavior-analysis>
              </el-col>
              <el-col class="height_auto" :span="8">
                <live-view-behavior-analysis :barListData="liveViewTimesData"></live-view-behavior-analysis>
              </el-col>
              <el-col class="height_auto" :span="8">
                <live-view-behavior-analysis :barListData="liveViewTimesData2"></live-view-behavior-analysis>
              </el-col>
              <span>注：当前排名为移动侧+联通侧+电信侧数据总排名</span>
            </el-row>
          </el-row>
          <!-- 直播收视行为分析结束 -->

          <!-- 本地直播及轮播频道用户收视行为分析开始 -->
          <el-row>
            <el-row class="model_title">
              <span class="title_border_left"></span>本地直播及轮播频道用户收视行为分析
            </el-row>
            <el-row class="localityLiveAndCarousel back_white">
              <el-col class="height_auto" :span="8" v-show="ifModuleydShow">
                <live-view-behavior-analysis :barListData="mobileLiveViewerData"></live-view-behavior-analysis>
              </el-col>
              <el-col class="height_auto" :span="8" v-show="ifModuleltShow">
                <live-view-behavior-analysis :barListData="unicornLiveViewerData"></live-view-behavior-analysis>
              </el-col>
              <el-col class="height_auto" :span="8" v-show="ifModuledxShow">
                <live-view-behavior-analysis :barListData="telecomLiveViewerData"></live-view-behavior-analysis>
              </el-col>
              <span>单位：万户</span>
            </el-row>
          </el-row>
          <!-- 本地直播及轮播频道用户收视行为分析结束 -->

          <!-- 整体点播收视行为分析开始 -->
          <el-row>
            <el-row class="model_title">
              <span class="title_border_left"></span>整体点播收视行为分析
            </el-row>
            <el-row class="overall_demand back_white">
              <el-col class="height_auto" :span="12">
                <monthly-total-viewing :lineData="monthlyDemandViewingData"></monthly-total-viewing>
                <span>注：点播收视数据为移动侧+联通侧+电信侧数据总数据</span>
              </el-col>
              <el-col class="height_auto" :span="12">
                <monthly-total-viewing :lineData="weekDemandViewingData"></monthly-total-viewing>
                <span>单位：百万</span>
              </el-col>
            </el-row>
          </el-row>
          <!-- 整体点播收视行为分析结束 -->

          <!-- 各类型节目点播收视行为分析开始 -->
          <el-row>
            <el-row class="model_title">
              <span class="title_border_left"></span>各类型节目点播收视行为分析
            </el-row>
            <el-row class="type_program_data back_white">
              <el-col class="height_auto" :span="8">
                <type-program-chart :chartData="demandUserNumData"></type-program-chart>
              </el-col>
              <el-col class="height_auto" :span="8">
                <type-program-chart :chartData="demandTimesData"></type-program-chart>
              </el-col>
              <el-col class="height_auto" :span="8">
                <type-program-chart :chartData="demandDurationData"></type-program-chart>
              </el-col>
            </el-row>
          </el-row>
          <!-- 各类型节目点播收视行为分析结束 -->

          <!-- 各栏目热力数据概览开始 -->
          <el-row>
            <el-row class="model_title">
              <span class="title_border_left"></span>各栏目热力数据概览
            </el-row>
            <el-row class="type_program_data back_white">
              <el-col class="height_auto" :span="12">
                <type-program-chart :chartData="programPageClickUserData"></type-program-chart>
              </el-col>
              <el-col class="height_auto" :span="12">
                <type-program-chart :chartData="programPageClickNumData"></type-program-chart>
              </el-col>
            </el-row>
          </el-row>
          <!-- 各栏目热力数据概览结束 -->

          <!-- 点播收视行为分析开始 -->
          <el-row>
            <el-row class="model_title">
              <span class="title_border_left"></span>点播收视行为分析
            </el-row>
            <el-row class="localityLiveAndCarousel back_white">
              <el-col class="height_auto" :span="8">
                <live-view-behavior-analysis :barListData="demandUserNumData2"></live-view-behavior-analysis>
              </el-col>
              <el-col class="height_auto" :span="8">
                <live-view-behavior-analysis :barListData="demandTimesData2"></live-view-behavior-analysis>
              </el-col>
              <el-col class="height_auto" :span="8">
                <live-view-behavior-analysis :barListData="demandDurationData2"></live-view-behavior-analysis>
              </el-col>
            </el-row>
          </el-row>
          <!-- 点播收视行为分析结束 -->

          <!-- 付费用户收视行为分析开始 -->
          <el-row>
            <el-row class="model_title">
              <span class="title_border_left"></span>付费用户收视行为分析
            </el-row>
            <el-row class="paying_user_div back_white">
              <el-col class="height_auto" :span="10">
                <type-program-chart :chartData="newAddUserData"></type-program-chart>
              </el-col>
              <el-col class="height_auto" :span="14">
                <live-view-behavior-analysis :barListData="payingUserData"></live-view-behavior-analysis>
              </el-col>
            </el-row>
          </el-row>
          <!-- 付费用户收视行为分析结束 -->

          <!-- 本土原创节目收视行为分析开始 -->
          <el-row>
            <el-row class="model_title">
              <span class="title_border_left"></span>本土原创节目收视行为分析
            </el-row>
            <el-row class="local_originality back_white">
              <el-col class="height_auto" :span="12">
                <bar-chart-single :chartData="monthDemandData"></bar-chart-single>
              </el-col>
              <el-col class="height_auto" :span="12">
                <smooth-line-chart :smoothLineData="originalProgramsDemandData"></smooth-line-chart>
              </el-col>
            </el-row>
          </el-row>
          <!-- 本土原创节目收视行为分析结束 -->

          <!-- 重点专题及活动数据概览开始 -->
          <el-row>
            <el-row class="model_title">
              <span class="title_border_left"></span>重点专题及活动数据概览
            </el-row>
            <el-row class="key_project back_white">
              <el-col class="height_auto" :span="8" v-show="ifModuleydShow">
                <live-view-behavior-analysis :barListData="mobileKeyProjectData"></live-view-behavior-analysis>
              </el-col>
              <el-col class="height_auto" :span="8" v-show="ifModuleltShow">
                <live-view-behavior-analysis :barListData="unicornKeyProjectData"></live-view-behavior-analysis>
              </el-col>
              <el-col class="height_auto" :span="8" v-show="ifModuledxShow">
                <live-view-behavior-analysis :barListData="telecomKeyProjectData"></live-view-behavior-analysis>
              </el-col>
            </el-row>
          </el-row>
          <!-- 重点专题及活动数据概览结束 -->
          <!-- 模块二 运营数据概览结束 -->
        </el-row>
      </el-col>

      <!-- 右侧导航开始 -->
      <el-col class="monthly_nav height_auto">
        <el-row>
          <a
            href="javascript:void(0)"
            class="anchor_link1 avtive_link"
            @click="goAnchor('#user_development_data')"
          >用户发展数据概览</a>
        </el-row>
        <el-row>
          <a
            href="javascript:void(0)"
            class="anchor_link2"
            @click="goAnchor('#operational_data')"
          >运营数据概览</a>
        </el-row>
      </el-col>
      <!-- 右侧导航结束 -->
    </el-row>
    <!-- G+TV月度用户收视行为报告结束 -->
  </div>
</template>
<script>
import LineChartSingle from "@/views/backcoms/commoncomponents/LineChartSingle"; //单数据折线图组件
import BarListChartStack from "@/views/backcoms/commoncomponents/BarListChartStack"; //排名柱状图
import LineDottedChart from "@/views/backcoms/G_TVuserviewingmonthreport/LineDottedChart"; //7月新增在册用户数组件（折线图含虚线）
import LineChartSingleProp from "@/views/backcoms/commoncomponents/LineChartSingleProp"; //单数据折线图组件（百分比）
import EveryPowerActivity from "@/views/backcoms/G_TVuserviewingmonthreport/EveryPowerActivity"; //7月新增在册用户数组件（折线图含虚线）
import ManyPieChart from "@/views/backcoms/G_TVuserviewingmonthreport/ManyPieChart"; //整体收拾行为分析（多个空心饼图组成的图表）
import MonthlyTotalViewing from "@/views/backcoms/G_TVuserviewingmonthreport/MonthlyTotalViewing"; //
import LiveViewBehaviorAnalysis from "@/views/backcoms/G_TVuserviewingmonthreport/LiveViewBehaviorAnalysis"; //TOP排名（柱状图列表）
import TypeProgramChart from "@/views/backcoms/G_TVuserviewingmonthreport/TypeProgramChart"; //柱状图加折线图图表组件
import BarChartSingle from "@/views/backcoms/commoncomponents/BarChartSingle"; //柱状图
import SmoothLineChart from "@/views/backcoms/commoncomponents/SmoothLineChart"; //平滑曲线折线图组件

import Vue from "vue";
import { mapGetters } from "vuex";
import {
  // users_monthActiveReport_range,
  users_monthActiveReport
} from "@/api/api_main";
import { commonTools } from "@/utils/test";

export default {
  name: "G_TVUserViewingMonthReport", //G+TV月度用户收视行为报告
  components: {
    "line-chart-single": LineChartSingle,
    "bar-list-chart-stack": BarListChartStack,
    "line-dotted-chart": LineDottedChart,
    "line-chart-single-prop": LineChartSingleProp,
    "every-power-activity": EveryPowerActivity,
    "many-pie-chart": ManyPieChart,
    "monthly-total-viewing": MonthlyTotalViewing,
    "live-view-behavior-analysis": LiveViewBehaviorAnalysis,
    "type-program-chart": TypeProgramChart,
    "bar-chart-single": BarChartSingle,
    "smooth-line-chart": SmoothLineChart
  },
  computed: {
    ...mapGetters(["PR_operator", "PR_month", "PR_Report_index"]),
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
  watch: {
    PR_operator(newValue, oldValue) {
      console.log("~~~~!!!!!PR_operator");
      let vm = this;
      setTimeout(function () {
        try {
          // // vm.api_data_set("mixture", "month"); // mixture - 混合数据类型(单月)
          // vm.api_data_set("mixture", "month_range"); // mixture - 混合数据类型（多月）
          // vm.api_data_set("mixture", "week"); // mixture - 混合数据类型（每月分周）

          vm.api_data_set("mixture", "month_range"); // mixture - 混合数据类型（多月）
          vm.api_data_set("mixture", "week"); // mixture - 混合数据类型（单月分周）
          vm.api_data_set("mixture", "day");

          vm.api_data_set("single", "month_range"); // single - 单运营商数据类型（多月）
          vm.api_data_set("single", "week"); // single - 单运营商数据类型（单月分周）
          vm.api_data_set("single", "day"); // single - 单运营商数据类型（单月分天）
        } catch (error) {
          console.log(error);
        }

        console.log("~~~~excel 处理");
        // excel 处理
        vm.Excel_data_manage();
      }, 100);
    },
    PR_month(newValue, oldValue) {
      let vm = this;
      console.log("PR_month: " + newValue);

      //数据初始化(很重要)
      vm.weekNewUserData.data = [["运营商"], ["移动"], ["联通"], ["电信"]];
      vm.registeredUsersData.data = [["运营商"], ["移动"], ["联通"], ["电信"]];
      vm.monthNewRegUserData.data = [["运营商"], ["移动"], ["联通"], ["电信"]];
      vm.monthCancellationUserData.data = [
        ["运营商"],
        ["移动"],
        ["联通"],
        ["电信"]
      ];
      vm.everyDayUserData.data = [["运营商"], ["移动"], ["联通"], ["电信"]];
      vm.monthPowerActivityData.data = [
        ["name"],
        ["移动"],
        ["联通"],
        ["电信"],
        ["总开机率"]
      ];
      vm.areaPowerActivityData.data = [
        ["product"],
        ["移动"],
        ["联通"],
        ["电信"],
        ["总开机活跃率"]
      ];

      setTimeout(function () {
        try {
          // vm.api_data_set("mixture", "month"); // mixture - 混合数据类型(单月)
          vm.api_data_set("mixture", "month_range"); // mixture - 混合数据类型（多月）
          vm.api_data_set("mixture", "week"); // mixture - 混合数据类型（单月分周）
          vm.api_data_set("mixture", "day");

          vm.api_data_set("single", "month_range"); // single - 单运营商数据类型（多月）
          vm.api_data_set("single", "week"); // single - 单运营商数据类型（单月分周）
          vm.api_data_set("single", "day"); // single - 单运营商数据类型（单月分天）
        } catch (error) {
          console.log(error);
        }
        console.log("~~~~excel 处理");
        // excel 处理
        vm.Excel_data_manage();
      }, 100);
    }
  },

  mounted() {
    //监听滚动事件
    $(".monthly_report_body").scroll(function (event) {
      let scrollTopHeight = $(".monthly_report_body").scrollTop();
      // let user_development_data = document.querySelector('#user_development_data').offsetTop
      // let operational_data = document.querySelector('#operational_data').offsetTop
      if (0 <= scrollTopHeight) {
        $(".anchor_link1")
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      }
      if (3300 <= scrollTopHeight) {
        $(".anchor_link2")
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      }
    });

    let vm = this;
    // api 数据处理 - by 运营商
    setTimeout(function () {
      try {
        // vm.api_data_set("mixture", "month"); // mixture - 混合数据类型（单月）
        vm.api_data_set("mixture", "month_range"); // mixture - 混合数据类型（单月）
        vm.api_data_set("mixture", "week"); // mixture - 混合数据类型（单月分周）

        vm.api_data_set("single", "month_range"); // single - 单独运营商数据类型（by 运营商）多月
        vm.api_data_set("single", "week"); // single - 单运营商数据类型（单月分周）
        vm.api_data_set("single", "day"); // single - 单运营商数据类型（单月分天）
      } catch (error) {
        console.log(error);
      }
      // excel 处理
      vm.Excel_data_manage();
    }, 100);
  },
  methods: {
    Excel_data_manage() {
      console.log("Excel_data_manage - 7");
      let vm = this;
      vm.$store
        .dispatch("set_PR_excel_ifCanDownload", false)
        .then(function (response_dataArr) {
          console.log("下载关");
        })
        .catch(function (error) {
          console.info(error);
        });
      setTimeout(function () {
        if (vm.PR_Report_index == 7) {
          let temp_titleArr = [];
          let temp_DataArr = [];
          // /// 临时
          // temp_titleArr.push(["title1"]);
          // temp_titleArr.push(["title2"]);
          // temp_titleArr.push(["title3"]);

          // temp_DataArr.push([
          //   ["运营商", "移动", "联通", "电信7777777"],
          //   ["平均", 1, 2, 3]
          // ]);
          // temp_DataArr.push([
          //   ["运营商", "移动", "联通", "电信", "测试22"],
          //   ["平均", 1, 2, 3, 4]
          // ]);
          // temp_DataArr.push([
          //   ["运营商", "移动", "联通", "电信", "测试33"],
          //   ["平均", 1, 2, 3, 4]
          // ]);
          // ///

          // /// 实际
          let title_arr = [];
          let data_arr = [];
          try {
            //处理格式为{value,name的数组}
            //三大基础功能使用用户占比
            let usingTheUser_titleArr = [];
            let usingTheUser_dataArr = [];
            vm.usingTheUser.content.forEach((value, index) => {
              usingTheUser_titleArr.push([value.title]);
              usingTheUser_dataArr.push([[], []]);
              value.data.forEach((value2, index2) => {
                usingTheUser_dataArr[index][0].push(value2.name);
                usingTheUser_dataArr[index][1].push(value2.value);
              });
            });

            //usingTheTime三大基础功能使用次数占比
            let usingTheTime_titleArr = [];
            let usingTheTime_dataArr = [];
            vm.usingTheTime.content.forEach((value, index) => {
              usingTheTime_titleArr.push([value.title]);
              usingTheTime_dataArr.push([[], []]);
              value.data.forEach((value2, index2) => {
                usingTheTime_dataArr[index][0].push(value2.name);
                usingTheTime_dataArr[index][1].push(value2.value);
              });
            });

            //usingTheDuration三大基础功能使用时长占比
            let usingTheDuration_titleArr = [];
            let usingTheDuration_dataArr = [];
            vm.usingTheDuration.content.forEach((value, index) => {
              usingTheDuration_titleArr.push([value.title]);
              usingTheDuration_dataArr.push([[], []]);
              value.data.forEach((value2, index2) => {
                usingTheDuration_dataArr[index][0].push(value2.name);
                usingTheDuration_dataArr[index][1].push(value2.value);
              });
            });

            //liveViewingDurationData直播观看时长数据
            let liveViewingDurationData_titleArr = [];
            let liveViewingDurationData_dataArr = [];
            vm.liveViewingDurationData.content.forEach((value, index) => {
              liveViewingDurationData_titleArr.push([value.title]);
              liveViewingDurationData_dataArr.push([[], []]);
              value.data.forEach((value2, index2) => {
                liveViewingDurationData_dataArr[index][0].push(value2.name);
                liveViewingDurationData_dataArr[index][1].push(value2.value);
              });
            });
            //liveViewingUserData 直播观看用户数据
            let liveViewingUserData_titleArr = [];
            let liveViewingUserData_dataArr = [];
            vm.liveViewingUserData.content.forEach((value, index) => {
              liveViewingUserData_titleArr.push([value.title]);
              liveViewingUserData_dataArr.push([[], []]);
              value.data.forEach((value2, index2) => {
                liveViewingUserData_dataArr[index][0].push(value2.name);
                liveViewingUserData_dataArr[index][1].push(value2.value);
              });
            });
            //liveViewingTimesData 直播观看次数数据
            let liveViewingTimesData_titleArr = [];
            let liveViewingTimesData_dataArr = [];
            vm.liveViewingTimesData.content.forEach((value, index) => {
              liveViewingTimesData_titleArr.push([value.title]);
              liveViewingTimesData_dataArr.push([[], []]);
              value.data.forEach((value2, index2) => {
                liveViewingTimesData_dataArr[index][0].push(value2.name);
                liveViewingTimesData_dataArr[index][1].push(value2.value);
              });
            });

            //weekLiveViewUserData 各周直播收视用户数
            let weekLiveViewUserData_titleArr = [];
            let weekLiveViewUserData_dataArr = [];
            vm.weekLiveViewUserData.content.forEach((value, index) => {
              weekLiveViewUserData_titleArr.push([value.title]);
              weekLiveViewUserData_dataArr.push([[], []]);
              value.data.forEach((value2, index2) => {
                weekLiveViewUserData_dataArr[index][0].push(value2.name);
                weekLiveViewUserData_dataArr[index][1].push(value2.value);
              });
            });

            //weekLiveViewTimesData各周直播收视次数
            let weekLiveViewTimesData_titleArr = [];
            let weekLiveViewTimesData_dataArr = [];
            vm.weekLiveViewTimesData.content.forEach((value, index) => {
              weekLiveViewTimesData_titleArr.push([value.title]);
              weekLiveViewTimesData_dataArr.push([[], []]);
              value.data.forEach((value2, index2) => {
                weekLiveViewTimesData_dataArr[index][0].push(value2.name);
                weekLiveViewTimesData_dataArr[index][1].push(value2.value);
              });
            });

            //weekliveViewDurationData
            let weekliveViewDurationData_titleArr = [];
            let weekliveViewDurationData_dataArr = [];
            vm.weekliveViewDurationData.content.forEach((value, index) => {
              weekliveViewDurationData_titleArr.push([value.title]);
              weekliveViewDurationData_dataArr.push([[], []]);
              value.data.forEach((value2, index2) => {
                weekliveViewDurationData_dataArr[index][0].push(value2.name);
                weekliveViewDurationData_dataArr[index][1].push(value2.value);
              });
            });

            title_arr.push(
              [vm.G_TVUserData.title],
              [vm.NewUserComparisonData.title],
              [vm.registeredUsersData.title],
              [vm.monthNewRegUserData.title],
              [vm.monthCancellationUserData.title],
              [vm.G_TVRegionUserData.title],
              [vm.weekNewUserData.title],
              [vm.mobileNewUserData.title],
              [vm.unicornNewUserData.title],
              [vm.telecomNewUserData],
              [vm.everyDayUserData.title],
              [vm.monthPowerActivityData.title],
              [vm.areaPowerActivityData.title],
              [vm.everyPowerActivityData.data],

              ...usingTheUser_titleArr, //此处数据格式待处理
              ...usingTheTime_titleArr, //此处数据格式待处理
              ...usingTheDuration_titleArr, //此处数据格式待处理

              [vm.monthlyTotalViewingData.title],

              ...liveViewingDurationData_titleArr, //此处数据格式待处理
              ...liveViewingUserData_titleArr, //此处数据格式待处理
              ...liveViewingTimesData_titleArr, //此处数据格式待处理

              [vm.monthlyTotalViewingData2.title],

              ...weekLiveViewUserData_titleArr, //此处数据格式待处理
              ...weekLiveViewTimesData_titleArr, //此处数据格式待处理
              ...weekliveViewDurationData_titleArr, //此处数据格式待处理

              [vm.weekliveViewingData.title],
              [vm.liveViewerData.title],
              [vm.liveViewTimesData.title],
              [vm.liveViewTimesData2.title],
              [vm.mobileLiveViewerData.title],
              [vm.unicornLiveViewerData.title],
              [vm.telecomLiveViewerData.title],
              [vm.monthlyDemandViewingData.title],
              [vm.weekDemandViewingData.title],
              [vm.demandUserNumData.title],
              [vm.demandTimesData.title],
              [vm.demandDurationData.title],
              [vm.programPageClickUserData.title],
              [vm.programPageClickNumData.title],
              [vm.demandUserNumData2.title],
              [vm.demandTimesData2.title],
              [vm.demandDurationData2.title],
              [vm.newAddUserData.title],
              [vm.payingUserData.title],
              [vm.monthDemandData.data],
              [vm.originalProgramsDemandData.title],
              [vm.mobileKeyProjectData.data],
              [vm.unicornKeyProjectData],
              [vm.telecomKeyProjectData.data]
            );

            data_arr.push(
              vm.G_TVUserData.data,
              vm.NewUserComparisonData.data,
              vm.registeredUsersData.data,
              vm.monthNewRegUserData.data,
              vm.monthCancellationUserData.data,
              vm.G_TVRegionUserData.data,
              vm.weekNewUserData.data,
              vm.mobileNewUserData.data,
              vm.unicornNewUserData.data,
              vm.telecomNewUserData.data,
              vm.everyDayUserData.data,
              vm.monthPowerActivityData.data,
              vm.areaPowerActivityData.data,
              vm.everyPowerActivityData.data,

              ...usingTheUser_dataArr, //此处数据格式待处理
              ...usingTheTime_dataArr, //此处数据格式待处理
              ...usingTheDuration_dataArr, //此处数据格式待处理

              vm.monthlyTotalViewingData.data,

              ...liveViewingDurationData_dataArr, //此处数据格式待处理
              ...liveViewingUserData_dataArr, //此处数据格式待处理
              ...liveViewingTimesData_dataArr, //此处数据格式待处理

              vm.monthlyTotalViewingData2.data,

              ...weekLiveViewUserData_dataArr, //此处数据格式待处理
              ...weekLiveViewTimesData_dataArr, //此处数据格式待处理
              ...weekliveViewDurationData_dataArr, //此处数据格式待处理

              vm.weekliveViewingData.data,
              vm.liveViewerData.data,
              vm.liveViewTimesData.data,
              vm.liveViewTimesData2.data,
              vm.mobileLiveViewerData.data,
              vm.unicornLiveViewerData.data,
              vm.telecomLiveViewerData.data,
              vm.monthlyDemandViewingData.data,
              vm.weekDemandViewingData.data,
              vm.demandUserNumData.data,
              vm.demandTimesData.data,
              vm.demandDurationData.data,
              vm.programPageClickUserData.data,
              vm.programPageClickNumData.data,
              vm.demandUserNumData2.data,
              vm.demandTimesData2.data,
              vm.demandDurationData2.data,
              vm.newAddUserData.data,
              vm.payingUserData.data,
              vm.monthDemandData.data,
              vm.originalProgramsDemandData.data,
              vm.mobileKeyProjectData.data,
              vm.unicornKeyProjectData.data,
              vm.telecomKeyProjectData.data
            );
          } catch (error) {
            console.log(error);
          }
          // ///
          temp_titleArr = title_arr;
          temp_DataArr = data_arr;

          if (temp_titleArr.length == 0 || temp_DataArr.length == 0) {
            console.log("请选择时间！");
            return;
          }
          vm.$store
            .dispatch("set_PR_Excel_titleArr_firstM1", temp_titleArr)
            .then(function (response_title) {
              console.log(response_title);
              vm.$store
                .dispatch("set_PR_Excel_dataArr_firstM1", temp_DataArr)
                .then(function (response_dataArr) {
                  console.log(response_dataArr);
                  // 设置excel按钮下载状态 - 开
                  vm.$store
                    .dispatch("set_PR_excel_ifCanDownload", true)
                    .then(function (response_dataArr) {
                      console.log("下载开");
                    })
                    .catch(function (error) {
                      console.info(error);
                    });
                })
                .catch(function (error) {
                  console.info(error);
                });
            })
            .catch(function (error) {
              console.info(error);
            });
        }
      }, 3000);
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
    // api 数据处理 - by 运营商
    api_data_set(datatype, timetype) {
      let vm = this;
      // datatype - single (单运营商  yd lt dx ) mixture（混合运营商  yd lt dx混合 ）   ---
      // timetype - month(6month~7month)    week(当月的如 40week~43week)    day (2019-10-01 ~ 2019-10-31)
      // split_MonthDays_byDWMMr
      if (datatype == "mixture") {
        // 混合数据类型 -- 只执行一次
        if (vm.PR_operator == null || vm.PR_operator.length == 0) {
          let temp_operator = ["移动", "联通", "电信"];
          vm.users_monthActiveReport_new(
            "all",
            temp_operator,
            datatype,
            timetype
          );
        } else {
          let count = vm.PR_operator.length;
          if (count == 3 || count == 2) {
            vm.users_monthActiveReport_new(
              "all",
              vm.PR_operator,
              datatype,
              timetype
            );
          }
          if (count == 1) {
            if (vm.PR_operator.indexOf("移动") > -1) {
              vm.users_monthActiveReport_new(
                "yd",
                ["移动"],
                datatype,
                timetype
              );
            }
            if (vm.PR_operator.indexOf("联通") > -1) {
              vm.users_monthActiveReport_new(
                "lt",
                ["联通"],
                datatype,
                timetype
              );
            }
            if (vm.PR_operator.indexOf("电信") > -1) {
              vm.users_monthActiveReport_new(
                "dx",
                ["电信"],
                datatype,
                timetype
              );
            }
          }
        }
      } else if (datatype == "single") {
        // 单独数据类型 -- 执行三次
        vm.users_monthActiveReport_new("yd", ["移动"], datatype, timetype);
        vm.users_monthActiveReport_new("lt", ["联通"], datatype, timetype);
        vm.users_monthActiveReport_new("dx", ["电信"], datatype, timetype);
      }
    },

    //新增
    users_monthActiveReport_new(type, m_PR_operator, datatype, timetype) {
      let vm = this;
      let tempOperatorArr = m_PR_operator;
      let temp_time = commonTools.split_MonthDays_byDWMMr(vm.PR_month);
      // console.log("时间处理temp_time", temp_time)
      let start;
      let end;
      let year = temp_time.year;
      //// 时间引入
      if (
        vm.PR_month == null ||
        vm.PR_month == undefined ||
        vm.PR_month == ""
      ) {
        return;
      }

      if (timetype == "month_range") {
        // start = "3month";
        // end = "6month";
        start = temp_time.monthsRange_start;
        end = temp_time.monthsRange_end;
      }
      if (timetype == "month") {
        // start = "6month";
        // end = "6month";
        start = temp_time.month;
        end = temp_time.month;
      }
      if (timetype == "week") {
        // start = "26week";
        // start = "29week"; // --之前的问题点 - 跨week接不上
        // end = "29week";
        start = temp_time.month_week_start;
        end = temp_time.month_week_end;
      }
      if (timetype == "day") {
        // start = "2019-07-01";
        // end = "2019-07-31";
        start = temp_time.month_day_start;
        end = temp_time.month_day_end;
      }
      let temp = {
        operator: String([tempOperatorArr]),
        start: start,
        end: end, // 暂定这一周
        year: year
      };
      console.log("~~~~~~~~~~~~~~~~~设置请求  temp");
      console.log(temp);

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("operator", temp.operator);
      formData.append("start", temp.start);
      formData.append("end", temp.end);
      formData.append("year", temp.year);

      users_monthActiveReport(formData)
        .then(response => {
          //////////////////////// 统一使用点
          let responses0 = response.data.responses[0];
          let responses1 = response.data.responses[1];
          let responses2 = response.data.responses[2];
          let responses3 = response.data.responses[3];
          let responses4 = response.data.responses[4];
          let responses5 = response.data.responses[5];
          let responses6 = response.data.responses[6];
          let responses7 = response.data.responses[7];
          let responses8 = response.data.responses[8];
          let responses9 = response.data.responses[9];
          let responses10 = response.data.responses[10];
          let responses11 = response.data.responses[11];
          let responses12 = response.data.responses[12];
          let responses13 = response.data.responses[13];
          let responses14 = response.data.responses[14];
          let responses15 = response.data.responses[15];
          let responses16 = response.data.responses[16];
          let responses17 = response.data.responses[17];
          let responses18 = response.data.responses[18];
          let responses19 = response.data.responses[19];
          let responses20 = response.data.responses[20];
          // let responses21 = response.data.responses[21];

          ////////////////////////

          //混合单月数据
          // if (datatype == "mixture" && timetype == "month") {
          //   console.log("混合单月数据", response.data.responses)
          //   let mixture_month_data = response.data.responses
          // }

          //混合多月数据
          if (datatype == "mixture" && timetype == "month_range") {
            console.log("混合多月数据", response.data.responses);

            let vm = this;
            try {
              vm.G_TVUserData.data = [];
              let mixture_month_range_data = response.data.responses; //总的混合多月数据

              //G+TV用户发展数据概览
              //G+TV用户发展情况
              let registe_and_new_num =
                mixture_month_range_data[0].aggregations.statistical_granularity
                  .buckets;
              let registe_and_new_num_temp = [
                ["用户"],
                ["在册用户数(万户）"],
                ["新增在册用户数（万户）"]
              ];
              registe_and_new_num.forEach((value, index) => {
                // console.log("G+TV用户发展情况", value)
                let data_month = commonTools.format_monthToChinese(value.key);
                registe_and_new_num_temp[0].push(data_month);
                registe_and_new_num_temp[1].push(
                  Number((value.register_num.value / 10000).toFixed(2))
                );
                registe_and_new_num_temp[2].push(
                  Number((value.new_num.value / 10000).toFixed(2))
                );
              });
              // console.log("registe_and_new_num_temp", registe_and_new_num_temp)
              vm.G_TVUserData.data = registe_and_new_num_temp;
            } catch (error) {
              console.log(error);
            }

            //各州市本月新增在册用户数
            try {
              vm.NewUserComparisonData.data = [];
              let mixture_month_range_data = response.data.responses;
              let new_num_user_comparison =
                mixture_month_range_data[0].aggregations.ac.buckets;
              let new_num_user_temp = [
                ["地区"],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                []
              ];
              new_num_user_comparison.forEach((value, index) => {
                if (value.key != "other") {
                  // console.log(commonTools.acConvert_Single(value.key))
                  new_num_user_temp[9 - index].push(
                    commonTools.acConvert_Single(value.key)
                  );
                  // Vue.set(vm.NewUserComparisonData.data[0], index + 1, commonTools.acConvert_Single(value.key))
                  value.statistical_granularity.buckets.forEach(
                    (value2, index2) => {
                      // console.log(value2.key, value2.open_num.value)
                      //设置月份（只执行一次）
                      if (index == 0) {
                        let data_month = commonTools.format_monthToChinese(
                          value2.key
                        );
                        new_num_user_temp[0].push(data_month);
                      }
                      new_num_user_temp[9 - index].push(
                        Number((value2.new_num.value / 10000).toFixed(2))
                      );
                      // Vue.set(vm.NewUserComparisonData.data[index + 1], index2 + 1, (Number(value2.new_num.value / 10000).toFixed(1)))
                    }
                  );
                }
              });
              vm.NewUserComparisonData.data = new_num_user_temp;
            } catch (error) {
              console.log(error);
            }
            //总开机活跃数据
            try {
              let mixture_month_range_data = response.data.responses; //总的混合多月数据

              let open_num_data =
                mixture_month_range_data[0].aggregations.statistical_granularity
                  .buckets;
              open_num_data.forEach((value, index) => {
                // console.log(value.key, value.open_num.value, value.register_num.value)
                let open_rate = (
                  (value.open_num.value / value.register_num.value) *
                  100
                ).toFixed(2);
                Vue.set(
                  vm.monthPowerActivityData.data[0],
                  index + 1,
                  commonTools.format_monthToChinese(value.key)
                );
                Vue.set(
                  vm.monthPowerActivityData.data[4],
                  index + 1,
                  Number(open_rate)
                );
              });
            } catch (error) {
              console.log(error);
              Vue.set(vm.monthPowerActivityData.data, 0, ["name"]);
              Vue.set(vm.monthPowerActivityData.data, 4, ["总开机率"]);
            }
            //各州市一个月开机活跃数据
            try {
              let mixture_month_range_data = response.data.responses; //总的混合多月数据

              let ac_open_num_data =
                mixture_month_range_data[0].aggregations.ac.buckets;
              ac_open_num_data.forEach((value, index) => {
                if (value.key != "other") {
                  //commonTools.acConvert_Single(value.key)
                  Vue.set(
                    vm.areaPowerActivityData.data[0],
                    index + 1,
                    commonTools.acConvert_Single(value.key)
                  );
                  let ac_month_open_num = value.statistical_granularity.buckets;
                  let open_num_length =
                    value.statistical_granularity.buckets.length;
                  vm.areaPowerActivityData.title =
                    "各市州" +
                    commonTools.format_monthToChinese(
                      ac_month_open_num[open_num_length - 1].key
                    ) +
                    "开机活跃率";
                  let open_rate = (
                    (ac_month_open_num[open_num_length - 1].open_num.value /
                      ac_month_open_num[open_num_length - 1].register_num
                        .value) *
                    100
                  ).toFixed(2);
                  Vue.set(
                    vm.areaPowerActivityData.data[4],
                    index + 1,
                    Number(open_rate)
                  );
                }
              });
            } catch (error) {
              console.log(error);
              Vue.set(vm.areaPowerActivityData.data, 0, ["name"]);
              Vue.set(vm.areaPowerActivityData.data, 4, ["总开机活跃率"]);
            }
            // /////////////// 整体收视行为分析 responses1 2 3(注意顺序对应) row9 上+下
            // /////////////// 直播收视行为分析 responses2  row10 下

            // vm.usingTheUser;
            // vm.usingTheTime;
            // vm.usingTheDuration;

            // usingTheUser;
            // usingTheTimes;
            // usingTheDuration;
            // 直播onlive =》 回看watch =》 点播demand
            // 用户user 次数freq 时长dur
            try {
              let buckets9_demand =
                responses1.aggregations.statistical_granularity.buckets;
              let buckets9_onlive =
                responses2.aggregations.statistical_granularity.buckets;
              let buckets9_watch =
                responses3.aggregations.statistical_granularity.buckets;

              let length_9 = buckets9_demand.length; //月的长度
              let i_9;

              // 注： q1 -  直播 onlive
              // 注： q2 -  回看 watch
              // 注： q3 -  点播 demand

              let q1_u = [];
              let q1_f = [];
              let q1_d = [];
              let q2_u = [];
              let q2_f = [];
              let q2_d = [];
              let q3_u = [];
              let q3_f = [];
              let q3_d = [];

              let td2 = [];

              let temp_usingTheUser_content = [];
              let temp_usingTheTime_content = [];
              let temp_usingTheDuration_content = [];

              for (i_9 = 0; i_9 < length_9; i_9++) {
                // 月个数
                temp_usingTheUser_content.push({
                  title:
                    commonTools.format_monthToChinese(
                      buckets9_demand[i_9].key
                    ) + "三大基础功能使用用户占比",
                  data: [
                    { value: 0, name: "直播" },
                    { value: 0, name: "回看" },
                    { value: 0, name: "点播" }
                  ]
                });
                temp_usingTheTime_content.push({
                  title:
                    commonTools.format_monthToChinese(
                      buckets9_demand[i_9].key
                    ) + "三大基础功能使用次数占比",
                  data: [
                    { value: 0, name: "直播" },
                    { value: 0, name: "回看" },
                    { value: 0, name: "点播" }
                  ]
                });
                temp_usingTheDuration_content.push({
                  title:
                    commonTools.format_monthToChinese(
                      buckets9_demand[i_9].key
                    ) + "三大基础功能使用时长占比",
                  data: [
                    { value: 0, name: "直播" },
                    { value: 0, name: "回看" },
                    { value: 0, name: "点播" }
                  ]
                });
              } // for

              let temp_monthlyTotalViewingData = [];
              for (let i_temp_m = 0; i_temp_m < 4; i_temp_m++) {
                temp_monthlyTotalViewingData.push([]);
              }
              temp_monthlyTotalViewingData[0].push("product");
              temp_monthlyTotalViewingData[1].push("观看次数（百万次）");
              temp_monthlyTotalViewingData[2].push("观看时长数（百万小时）");
              temp_monthlyTotalViewingData[3].push("观看用户数（百万户）");

              // /////////// 直播 （freq dur user_num）
              // x 月直播收视数据
              let temp_monthlyTotalViewingData2 = [
                ["product"],
                ["直播观看次数（百万次）"],
                ["直播观看时长数（百万小时）"],
                ["直播观看用户数（百万户）"]
              ];

              for (i_9 = 0; i_9 < length_9; i_9++) {
                // 月个数
                q1_u.push(buckets9_onlive[i_9].onlive_user_num.value);
                q1_f.push(buckets9_onlive[i_9].onlive_freq.value);
                q1_d.push(buckets9_onlive[i_9].onlive_dur.value);

                q2_u.push(buckets9_watch[i_9].watch_user_num.value);
                q2_f.push(buckets9_watch[i_9].watch_freq.value);
                q2_d.push(buckets9_watch[i_9].watch_dur.value);

                q3_u.push(buckets9_demand[i_9].demand_user_num.value);
                q3_f.push(buckets9_demand[i_9].demand_freq.value);
                q3_d.push(buckets9_demand[i_9].demand_dur.value);

                temp_usingTheUser_content[i_9].data = [
                  { value: q1_u[i_9], name: "直播" },
                  { value: q2_u[i_9], name: "回看" },
                  { value: q3_u[i_9], name: "点播" }
                ];
                temp_usingTheTime_content[i_9].data = [
                  { value: q1_f[i_9], name: "直播" },
                  { value: q2_f[i_9], name: "回看" },
                  { value: q3_f[i_9], name: "点播" }
                ];
                temp_usingTheDuration_content[i_9].data = [
                  { value: q1_d[i_9], name: "直播" },
                  { value: q2_d[i_9], name: "回看" },
                  { value: q3_d[i_9], name: "点播" }
                ];
                // x 月总体收视数据
                let freq2 = vm.returnFloat(
                  (
                    (parseFloat(q1_f[i_9]) +
                      parseFloat(q2_f[i_9]) +
                      parseFloat(q3_f[i_9])) /
                    100 /
                    10000
                  ).toFixed(2)
                );
                let dur2 = vm.returnFloat(
                  (
                    (parseFloat(q1_d[i_9]) +
                      parseFloat(q2_d[i_9]) +
                      parseFloat(q3_d[i_9])) /
                    100 /
                    10000 /
                    60
                  ).toFixed(2)
                ); // 观看时长计时 - 秒 =》百万小时
                let user_num2 = vm.returnFloat(
                  (
                    (parseFloat(q1_u[i_9]) +
                      parseFloat(q2_u[i_9]) +
                      parseFloat(q3_u[i_9])) /
                    100 /
                    10000
                  ).toFixed(2)
                );

                temp_monthlyTotalViewingData[0].push(
                  commonTools.format_monthToChinese(buckets9_demand[i_9].key)
                );
                temp_monthlyTotalViewingData[1].push(freq2);
                temp_monthlyTotalViewingData[2].push(dur2);
                temp_monthlyTotalViewingData[3].push(user_num2);

                temp_monthlyTotalViewingData2[0].push(
                  commonTools.format_monthToChinese(buckets9_demand[i_9].key)
                );
                temp_monthlyTotalViewingData2[1].push(
                  vm.returnFloat(parseFloat(q1_f[i_9]) / 100 / 10000).toFixed(2)
                );
                temp_monthlyTotalViewingData2[2].push(
                  vm.returnFloat(parseFloat(q1_d[i_9]) / 100 / 10000).toFixed(2)
                );
                temp_monthlyTotalViewingData2[3].push(
                  vm.returnFloat(parseFloat(q1_u[i_9]) / 100 / 10000).toFixed(2)
                );
              } // for

              // console.log("▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲!!!!!!");
              // console.log(temp_usingTheUser_content);
              // console.log(temp_usingTheTime_content);
              // console.log(temp_usingTheDuration_content);
              // console.log(temp_monthlyTotalViewingData);
              // console.log(temp_monthlyTotalViewingData2);

              vm.usingTheUser.content = temp_usingTheUser_content;
              vm.usingTheTime.content = temp_usingTheTime_content;
              vm.usingTheDuration.content = temp_usingTheDuration_content;
              vm.monthlyTotalViewingData.data = temp_monthlyTotalViewingData;
              vm.monthlyTotalViewingData2.data = temp_monthlyTotalViewingData2;
            } catch (error) {
              console.log(error);
              vm.usingTheUser.content = [];
              vm.usingTheTime.content = [];
              vm.usingTheDuration.content = [];
              vm.monthlyTotalViewingData.data = [];
              vm.monthlyTotalViewingData2.data = [];
            }

            // /////////////// responses9 over

            // ////////////////// 直播收视行为分析 row12 left/middle/right responses5~7
            // 直播频道观看用户数排名（万户）
            // mobileLiveViewerData
            // rw_olv responses2

            // 本月（先） 上月（后） （结构类似：移动运营数据周报-央视频道-排名）
            try {
              let buckets_12 =
                responses5.aggregations.statistical_granularity.buckets; // 1 5 un
              let buckets_12_2 =
                responses6.aggregations.statistical_granularity.buckets; // 2 6 dur
              let buckets_12_3 =
                responses7.aggregations.statistical_granularity.buckets; // 3 7 freq
              let length_12 = buckets_12.length; // 默认两月 - 2
              let i_12;
              let temp_data_12_un = []; // 5
              let temp_data_12_fr = []; // 7
              let temp_data_12_dur = []; // 6

              temp_data_12_un.push(["product", "本月", "上月"]);
              temp_data_12_fr.push(["product", "本月", "上月"]);
              temp_data_12_dur.push(["product", "本月", "上月"]);

              let top20_length_12 = 20;
              if (buckets_12[0].channel.buckets.length < 20) {
                top20_length_12 = buckets_12[0].channel.buckets.length;
              }
              for (i_12 = 0; i_12 < top20_length_12; i_12++) {
                temp_data_12_un.push([]);
                temp_data_12_fr.push([]);
                temp_data_12_dur.push([]);
              }
              let month_index_current = length_12 - 1; // 倒数第一个
              // if (length_12 == 1) {
              // month_index_current = 0;
              // }
              // 本月
              for (i_12 = 0; i_12 < top20_length_12; i_12++) {
                // 一
                Vue.set(
                  temp_data_12_un[top20_length_12 - i_12],
                  0,
                  buckets_12[month_index_current].channel.buckets[i_12].key
                );
                Vue.set(
                  temp_data_12_un[top20_length_12 - i_12],
                  1,
                  commonTools.returnFloat_2(
                    buckets_12[month_index_current].channel.buckets[i_12]
                      .onlive_user_num.value /
                    100 /
                    10000
                  )
                );
                // 二   // 3 7 freq
                Vue.set(
                  temp_data_12_fr[top20_length_12 - i_12],
                  0,
                  buckets_12_3[month_index_current].channel.buckets[i_12].key
                );
                Vue.set(
                  temp_data_12_fr[top20_length_12 - i_12],
                  1,
                  commonTools.returnFloat_2(
                    buckets_12_3[month_index_current].channel.buckets[i_12]
                      .onlive_freq.value /
                    100 /
                    10000
                  )
                );
                // 三  // 2 6 dur
                Vue.set(
                  temp_data_12_dur[top20_length_12 - i_12],
                  0,
                  buckets_12_2[month_index_current].channel.buckets[i_12].key
                );
                Vue.set(
                  temp_data_12_dur[top20_length_12 - i_12],
                  1,
                  commonTools.returnFloat_2(
                    buckets_12_2[month_index_current].channel.buckets[i_12]
                      .onlive_dur.value /
                    100 /
                    10000 /
                    60
                  )
                );
              }
              if (length_12 > 1) {
                // ////// 上月
                let buckets_child_12_2 =
                  responses5.aggregations.statistical_granularity.buckets[
                    length_12 - 2
                  ].channel.buckets;
                let buckets_child_12_2_2 =
                  responses6.aggregations.statistical_granularity.buckets[
                    length_12 - 2
                  ].channel.buckets;
                let buckets_child_12_2_3 =
                  responses7.aggregations.statistical_granularity.buckets[
                    length_12 - 2
                  ].channel.buckets;
                let top20_length_12_week2_all = buckets_child_12_2.length; // n个
                let i_12_2;
                function Return_KeyValue_12_un(key) {
                  let value;
                  for (
                    i_12_2 = 0;
                    i_12_2 < top20_length_12_week2_all;
                    i_12_2++
                  ) {
                    if (buckets_child_12_2[i_12_2].key == key) {
                      value = commonTools.returnFloat_2(
                        buckets_child_12_2[i_12_2].onlive_user_num.value /
                        100 /
                        10000
                      );
                      break;
                    }
                  }
                  return value;
                }
                function Return_KeyValue_12_fr(key) {
                  // 3 7 freq
                  let value;
                  for (
                    i_12_2 = 0;
                    i_12_2 < top20_length_12_week2_all;
                    i_12_2++
                  ) {
                    if (buckets_child_12_2_3[i_12_2].key == key) {
                      value = commonTools.returnFloat_2(
                        buckets_child_12_2_3[i_12_2].onlive_freq.value /
                        100 /
                        10000
                      );
                      break;
                    }
                  }
                  return value;
                }
                function Return_KeyValue_12_dur(key) {
                  // 2 6 dur
                  let value;
                  for (
                    i_12_2 = 0;
                    i_12_2 < top20_length_12_week2_all;
                    i_12_2++
                  ) {
                    if (buckets_child_12_2_2[i_12_2].key == key) {
                      //
                      value = commonTools.returnFloat_2(
                        buckets_child_12_2_2[i_12_2].onlive_dur.value /
                        100 /
                        10000 /
                        60
                      );
                      break;
                    }
                  }
                  return value;
                }
                // 遍历 本月（先）top 15的key
                for (i_12 = 0; i_12 < top20_length_12; i_12++) {
                  Vue.set(
                    temp_data_12_un[top20_length_12 - i_12],
                    2,
                    Return_KeyValue_12_un(
                      temp_data_12_un[top20_length_12 - i_12][0]
                    )
                  );
                  Vue.set(
                    temp_data_12_fr[top20_length_12 - i_12],
                    2,
                    Return_KeyValue_12_fr(
                      temp_data_12_fr[top20_length_12 - i_12][0]
                    )
                  );
                  Vue.set(
                    temp_data_12_dur[top20_length_12 - i_12],
                    2,
                    Return_KeyValue_12_dur(
                      temp_data_12_dur[top20_length_12 - i_12][0]
                    )
                  );
                }
              }

              vm.liveViewerData.data = temp_data_12_un;
              vm.liveViewTimesData.data = temp_data_12_fr;
              vm.liveViewTimesData2.data = temp_data_12_dur;
            } catch (error) {
              console.log(error);
              vm.liveViewerData.data = [];
              vm.liveViewTimesData.data = [];
              vm.liveViewTimesData2.data = [];
            }

            // /////////////// 整体点播收视行为分析 row14 responses1   left
            try {
              // month   rw_dm  responses1
              let buckets14_demand =
                responses1.aggregations.statistical_granularity.buckets;
              let length_14 = buckets14_demand.length; //月的长度
              let i_14;
              // 注： q1 -  直播 onlive
              // 注： q2 -  回看 watch
              // 注： q3 -  点播 demand
              let q3_u_14 = [];
              let q3_f_14 = [];
              let q3_d_14 = [];
              let temp_monthlyDemandViewingData = [
                ["product"],
                ["点播观看次数（百万次）"],
                ["点播观看时长数（百万小时）"],
                ["点播观看用户数（百万户）"]
              ];
              for (i_14 = 0; i_14 < length_14; i_14++) {
                q3_u_14.push(buckets14_demand[i_14].demand_user_num.value);
                q3_f_14.push(buckets14_demand[i_14].demand_freq.value);
                q3_d_14.push(buckets14_demand[i_14].demand_dur.value);
                temp_monthlyDemandViewingData[0].push(
                  commonTools.format_monthToChinese(buckets14_demand[i_14].key)
                );
                temp_monthlyDemandViewingData[1].push(
                  vm.returnFloat(
                    parseFloat(q3_f_14[i_14] / 1000 / 10000).toFixed(2)
                  )
                );
                temp_monthlyDemandViewingData[2].push(
                  vm.returnFloat(
                    (parseFloat(q3_d_14[i_14]) / 1000 / 10000 / 60).toFixed(2)
                  )
                );
                temp_monthlyDemandViewingData[3].push(
                  vm.returnFloat(
                    (parseFloat(q3_u_14[i_14]) / 1000 / 10000).toFixed(2)
                  )
                );
              } // for
              vm.monthlyDemandViewingData.data = temp_monthlyDemandViewingData;
            } catch (error) {
              console.log(error);
              vm.monthlyDemandViewingData.data = [];
            }
            // //////////////// 各类型节目点播收视行为分析 row15  responses8 9 10   demand
            // 结构类似：移动运营周报-主要栏目点击次数（万次） (row6 )   responses 14
            // 上月（显示先） 本月（显示后）
            // responses8  demand_user_num
            // responses9  demand_dur
            // responses10 demand_freq

            try {
              let buckets_15 =
                responses8.aggregations.statistical_granularity.buckets;
              let buckets_15_dur =
                responses9.aggregations.statistical_granularity.buckets;
              let buckets_15_fr =
                responses10.aggregations.statistical_granularity.buckets;
              let length_15 = buckets_15.length; // 月的长度

              let i_15;

              let month_index_15 = length_15 - 1;
              // if(length_15 == 1){
              //   month_index_15 = 0;
              // }
              let buckets_15_1 =
                buckets_15[month_index_15].program_type.buckets;
              let buckets_15_1_dur =
                buckets_15_dur[month_index_15].program_type.buckets;
              let buckets_15_1_fr =
                buckets_15_fr[month_index_15].program_type.buckets;

              let length_15_1 = buckets_15_1.length; // 以本月为主
              if (length_15_1 > 10) {
                length_15_1 = 10;
              }
              let temp_data_15 = [];
              temp_data_15.push(["product", "本月", "上月", "环比"]);
              let temp_data_15_dur = [];
              temp_data_15_dur.push(["product", "本月", "上月", "环比"]);
              let temp_data_15_fr = [];
              temp_data_15_fr.push(["product", "本月", "上月", "环比"]);
              for (i_15 = 0; i_15 < length_15_1; i_15++) {
                temp_data_15.push([]);
                temp_data_15_dur.push([]);
                temp_data_15_fr.push([]);
              }
              // 本月 - 虽然上月（先） 但以 本月从大到小排列
              for (i_15 = 0; i_15 < length_15_1; i_15++) {
                Vue.set(temp_data_15[i_15 + 1], 0, buckets_15_1[i_15].key); // ▲ 0
                Vue.set(temp_data_15[i_15 + 1], 1,
                  commonTools.returnFloat_2(buckets_15_1[i_15].demand_user_num.value / 10000)
                ); // ▲ 1
                Vue.set(
                  temp_data_15_dur[i_15 + 1],
                  0,
                  buckets_15_1_dur[i_15].key
                ); // ▲ 0
                Vue.set(
                  temp_data_15_dur[i_15 + 1],
                  1,
                  commonTools.returnFloat_2(buckets_15_1_dur[i_15].demand_dur.value / 10000 / 60)
                ); // ▲ 1
                Vue.set(
                  temp_data_15_fr[i_15 + 1],
                  0,
                  buckets_15_1_fr[i_15].key
                ); // ▲ 0
                Vue.set(
                  temp_data_15_fr[i_15 + 1],
                  1,
                  commonTools.returnFloat_2(buckets_15_1_fr[i_15].demand_freq.value / 10000)
                ); // ▲ 1
              }

              // 上月
              if (length_15 > 1) {
                let buckets_15_0 =
                  responses8.aggregations.statistical_granularity.buckets[
                    length_15 - 2
                  ].program_type.buckets;
                let buckets_15_0_dur =
                  responses9.aggregations.statistical_granularity.buckets[
                    length_15 - 2
                  ].program_type.buckets;
                let buckets_15_0_fr =
                  responses10.aggregations.statistical_granularity.buckets[
                    length_15 - 2
                  ].program_type.buckets;
                let length_15_0 = buckets_15_0.length; // length_15_0
                let i_15_2;
                function Return_KeyValue_15(key) {
                  let value;
                  for (i_15_2 = 0; i_15_2 < length_15_0; i_15_2++) {
                    if (buckets_15_0[i_15_2].key == key) {
                      // console.log(buckets_15_0[i_15_2].key);
                      value = commonTools.returnFloat_2(buckets_15_0[i_15_2].demand_user_num.value / 10000);
                      break;
                    }
                  }
                  return value;
                }
                function Return_KeyValue_15_dur(key) {
                  let value;
                  for (i_15_2 = 0; i_15_2 < length_15_0; i_15_2++) {
                    if (buckets_15_0_dur[i_15_2].key == key) {
                      // console.log(buckets_15_0[i_15_2].key);
                      value = commonTools.returnFloat_2(buckets_15_0_dur[i_15_2].demand_dur.value / 10000 / 60);
                      break;
                    }
                  }
                  return value;
                }
                function Return_KeyValue_15_fr(key) {
                  let value;
                  for (i_15_2 = 0; i_15_2 < length_15_0; i_15_2++) {
                    if (buckets_15_0_fr[i_15_2].key == key) {
                      // console.log(buckets_15_0[i_15_2].key);
                      value = commonTools.returnFloat_2(buckets_15_0_fr[i_15_2].demand_freq.value / 10000);
                      break;
                    }
                  }
                  return value;
                }
                for (i_15 = 0; i_15 < length_15_1; i_15++) {
                  // length_15_1
                  Vue.set(
                    temp_data_15[i_15 + 1],
                    2,
                    Return_KeyValue_15(temp_data_15[i_15 + 1][0])
                  ); // ▲ 2
                  Vue.set(
                    temp_data_15_dur[i_15 + 1],
                    2,
                    Return_KeyValue_15_dur(temp_data_15_dur[i_15 + 1][0])
                  ); // ▲ 2
                  Vue.set(
                    temp_data_15_fr[i_15 + 1],
                    2,
                    Return_KeyValue_15_fr(temp_data_15_fr[i_15 + 1][0])
                  ); // ▲ 2
                }
                // 环比 第4位置 即3
                // 环比算法  （本期数值-上期数值）/上期数值
                for (i_15 = 0; i_15 < length_15_1; i_15++) {
                  // length_15_1
                  Vue.set(
                    temp_data_15[i_15 + 1],
                    3,
                    (
                      (temp_data_15[i_15 + 1][2] - temp_data_15[i_15 + 1][1]) /
                      temp_data_15[i_15 + 1][1]
                    ).toFixed(2)
                  ); // ▲ 3
                  Vue.set(
                    temp_data_15_dur[i_15 + 1],
                    3,
                    (
                      (temp_data_15_dur[i_15 + 1][2] -
                        temp_data_15_dur[i_15 + 1][1]) /
                      temp_data_15_dur[i_15 + 1][1]
                    ).toFixed(2)
                  ); // ▲ 3
                  Vue.set(
                    temp_data_15_fr[i_15 + 1],
                    3,
                    (
                      (temp_data_15_fr[i_15 + 1][2] -
                        temp_data_15_fr[i_15 + 1][1]) /
                      temp_data_15_fr[i_15 + 1][1]
                    ).toFixed(2)
                  ); // ▲ 3
                }
              }
              vm.demandUserNumData.data = temp_data_15; // un
              vm.demandDurationData.data = temp_data_15_dur; // dur
              vm.demandTimesData.data = temp_data_15_fr; // fr

              // console.log("~~~~~~~~!!!!!!");
              // console.log(temp_data_15);
            } catch (error) {
              console.log(error);
              vm.demandUserNumData.data = [];
              vm.demandDurationData.data = [];
              vm.demandTimesData.data = [];
            }

            // //////////////// 各栏目热力数据概览 row16  responses11 12 demand
            // 结构类似：各栏目热力数据概览 row15
            // 上月（显示先） 本月（显示后）
            // programPageClickUserData  left  click_user_num responses12
            // programPageClickNumData   right click_freq     responses11

            try {
              // programPageClickNumData right click_freq
              let buckets_16 =
                responses11.aggregations.statistical_granularity.buckets;
              // programPageClickUserData  left  click_user_num
              let buckets_16_cun =
                responses12.aggregations.statistical_granularity.buckets;
              let length_16 = buckets_16.length; // 月的长度

              let i_16;

              let month_index_16 = length_16 - 1;
              // if(length_16 == 1){
              //   month_index_16 = 0;
              // }
              let buckets_16_1 = buckets_16[month_index_16].ti.buckets;
              let buckets_16_1_cun = buckets_16_cun[month_index_16].ti.buckets;

              let length_16_1 = buckets_16_1.length; // 以本月为主
              let temp_data_16 = [];
              temp_data_16.push(["product", "本月", "上月", "环比"]);
              let temp_data_16_cun = [];
              temp_data_16_cun.push(["product", "本月", "上月", "环比"]);

              for (i_16 = 0; i_16 < length_16_1; i_16++) {
                temp_data_16.push([]);
                temp_data_16_cun.push([]);
              }
              // 本月 - 虽然上月（先） 但以 本月从大到小排列
              for (i_16 = 0; i_16 < length_16_1; i_16++) {
                Vue.set(temp_data_16[i_16 + 1], 0, buckets_16_1[i_16].key); // ▲ 0
                Vue.set(
                  temp_data_16[i_16 + 1],
                  1,
                  buckets_16_1[i_16].click_freq.value
                ); // ▲ 1
                Vue.set(
                  temp_data_16_cun[i_16 + 1],
                  0,
                  buckets_16_1_cun[i_16].key
                ); // ▲ 0
                Vue.set(
                  temp_data_16_cun[i_16 + 1],
                  1,
                  buckets_16_1_cun[i_16].click_user_num.value
                ); // ▲ 1
              }

              // 上月
              if (length_16 > 1) {
                let buckets_16_0 =
                  responses11.aggregations.statistical_granularity.buckets[
                    length_16 - 2
                  ].ti.buckets;
                let buckets_16_0_cun =
                  responses12.aggregations.statistical_granularity.buckets[
                    length_16 - 2
                  ].ti.buckets;
                let length_16_0 = buckets_16_0.length; // length_16_0
                let i_16_2;
                function Return_KeyValue_16(key) {
                  let value;
                  for (i_16_2 = 0; i_16_2 < length_16_0; i_16_2++) {
                    if (buckets_16_0[i_16_2].key == key) {
                      // console.log(buckets_16_0[i_16_2].key);
                      value = buckets_16_0[i_16_2].click_freq.value;
                      break;
                    }
                  }
                  return value;
                }
                function Return_KeyValue_16_cun(key) {
                  let value;
                  for (i_16_2 = 0; i_16_2 < length_16_0; i_16_2++) {
                    if (buckets_16_0_cun[i_16_2].key == key) {
                      // console.log(buckets_16_0[i_16_2].key);
                      value = buckets_16_0_cun[i_16_2].click_user_num.value;
                      break;
                    }
                  }
                  return value;
                }
                for (i_16 = 0; i_16 < length_16_1; i_16++) {
                  // length_16_1
                  Vue.set(
                    temp_data_16[i_16 + 1],
                    2,
                    Return_KeyValue_16(temp_data_16[i_16 + 1][0])
                  ); // ▲ 2
                  Vue.set(
                    temp_data_16_cun[i_16 + 1],
                    2,
                    Return_KeyValue_16_cun(temp_data_16_cun[i_16 + 1][0])
                  ); // ▲ 2
                }
                // 环比 第4位置 即3
                // 环比算法  （本期数值-上期数值）/上期数值
                for (i_16 = 0; i_16 < length_16_1; i_16++) {
                  // length_16_1
                  Vue.set(
                    temp_data_16[i_16 + 1],
                    3,
                    (
                      (temp_data_16[i_16 + 1][2] - temp_data_16[i_16 + 1][1]) /
                      temp_data_16[i_16 + 1][1]
                    ).toFixed(2)
                  ); // ▲ 3
                  Vue.set(
                    temp_data_16_cun[i_16 + 1],
                    3,
                    (
                      (temp_data_16_cun[i_16 + 1][2] -
                        temp_data_16_cun[i_16 + 1][1]) /
                      temp_data_16_cun[i_16 + 1][1]
                    ).toFixed(2)
                  ); // ▲ 3
                }
              }

              vm.programPageClickNumData.data = temp_data_16;
              vm.programPageClickUserData.data = temp_data_16_cun;
              // console.log("~~~~~~~~!!!!!!");
              // console.log(temp_data_16);
            } catch (error) {
              console.log(error);
              vm.programPageClickNumData.data = [];
              vm.programPageClickUserData.data = [];
            }

            // ////////////////// 点播收视行为分析 row17 left/middle/right responses13~15
            // 结构类似： 直播收视行为分析 row12 left/middle/right responses5~7
            // 点播频道观看用户数排名（万户）
            // 本月（先） 上月（后）

            try {
              let buckets_17 =
                responses13.aggregations.statistical_granularity.buckets; // 1 13 un
              let buckets_17_2 =
                responses14.aggregations.statistical_granularity.buckets; // 2 14 freq
              let buckets_17_3 =
                responses15.aggregations.statistical_granularity.buckets; // 3 15 dur
              let length_17 = buckets_17.length; // 默认两月 - 2
              let i_17;
              let temp_data_17_un = []; // 13
              let temp_data_17_fr = []; // 14
              let temp_data_17_dur = []; // 15

              temp_data_17_un.push(["product", "本月", "上月"]);
              temp_data_17_fr.push(["product", "本月", "上月"]);
              temp_data_17_dur.push(["product", "本月", "上月"]);

              let top20_length_17 = 20;
              if (buckets_17[0].program_type.buckets.length < 20) {
                top20_length_17 = buckets_17[0].program_type.buckets.length;
              }
              for (i_17 = 0; i_17 < top20_length_17; i_17++) {
                temp_data_17_un.push([]);
                temp_data_17_fr.push([]);
                temp_data_17_dur.push([]);
              }
              let month_index_current = length_17 - 1;
              // if (length_17 == 1) {
              //   month_index_current = 0;
              // }
              // 本月
              for (i_17 = 0; i_17 < top20_length_17; i_17++) {
                // 一
                Vue.set(
                  temp_data_17_un[top20_length_17 - i_17],
                  0,
                  buckets_17[month_index_current].program_type.buckets[i_17].key
                );
                Vue.set(
                  temp_data_17_un[top20_length_17 - i_17],
                  1,
                  commonTools.returnFloat_2(
                    buckets_17[month_index_current].program_type.buckets[i_17]
                      .demand_user_num.value /
                    100 /
                    10000
                  )
                );
                // 二   // 2 6 dur
                Vue.set(
                  temp_data_17_fr[top20_length_17 - i_17],
                  0,
                  buckets_17_2[month_index_current].program_type.buckets[i_17]
                    .key
                );
                Vue.set(
                  temp_data_17_fr[top20_length_17 - i_17],
                  1,
                  commonTools.returnFloat_2(
                    buckets_17_2[month_index_current].program_type.buckets[i_17]
                      .demand_freq.value /
                    100 /
                    10000
                  )
                );
                // 三  // 3 7 freq
                Vue.set(
                  temp_data_17_dur[top20_length_17 - i_17],
                  0,
                  buckets_17_3[month_index_current].program_type.buckets[i_17]
                    .key
                );
                Vue.set(
                  temp_data_17_dur[top20_length_17 - i_17],
                  1,
                  commonTools.returnFloat_2(
                    buckets_17_3[month_index_current].program_type.buckets[i_17]
                      .demand_dur.value /
                    100 /
                    10000 /
                    60
                  )
                );
              }
              if (length_17 > 1) {
                // ////// 上月
                let buckets_child_17_2 =
                  responses13.aggregations.statistical_granularity.buckets[
                    length_17 - 2
                  ].program_type.buckets;
                let buckets_child_17_2_2 =
                  responses14.aggregations.statistical_granularity.buckets[
                    length_17 - 2
                  ].program_type.buckets;
                let buckets_child_17_2_3 =
                  responses15.aggregations.statistical_granularity.buckets[
                    length_17 - 2
                  ].program_type.buckets;
                let top20_length_17_week2_all = buckets_child_17_2.length; // n个
                let i_17_2;
                function Return_KeyValue_17_un(key) {
                  let value;
                  for (
                    i_17_2 = 0;
                    i_17_2 < top20_length_17_week2_all;
                    i_17_2++
                  ) {
                    if (buckets_child_17_2[i_17_2].key == key) {
                      value = commonTools.returnFloat_2(
                        buckets_child_17_2[i_17_2].demand_user_num.value /
                        10 /
                        10000
                      );
                      break;
                    }
                  }
                  return value;
                }
                function Return_KeyValue_17_fr(key) {
                  // 3 7 freq
                  let value;
                  for (
                    i_17_2 = 0;
                    i_17_2 < top20_length_17_week2_all;
                    i_17_2++
                  ) {
                    if (buckets_child_17_2_2[i_17_2].key == key) {
                      // 2
                      value = commonTools.returnFloat_2(
                        buckets_child_17_2_2[i_17_2].demand_freq.value / // 2
                        10 /
                        10000
                      );
                      break;
                    }
                  }
                  return value;
                }
                function Return_KeyValue_17_dur(key) {
                  // 2 6 dur
                  let value;
                  for (
                    i_17_2 = 0;
                    i_17_2 < top20_length_17_week2_all;
                    i_17_2++
                  ) {
                    if (buckets_child_17_2_3[i_17_2].key == key) {
                      // 3
                      //
                      value = commonTools.returnFloat_2(
                        buckets_child_17_2_3[i_17_2].demand_dur.value / // 3
                        10 /
                        10000 /
                        60
                      );
                      break;
                    }
                  }
                  return value;
                }
                // 遍历 本月（先）top 15的key
                for (i_17 = 0; i_17 < top20_length_17; i_17++) {
                  Vue.set(
                    temp_data_17_un[top20_length_17 - i_17],
                    2,
                    Return_KeyValue_17_un(
                      temp_data_17_un[top20_length_17 - i_17][0]
                    )
                  );
                  Vue.set(
                    temp_data_17_fr[top20_length_17 - i_17],
                    2,
                    Return_KeyValue_17_fr(
                      temp_data_17_fr[top20_length_17 - i_17][0]
                    )
                  );
                  Vue.set(
                    temp_data_17_dur[top20_length_17 - i_17],
                    2,
                    Return_KeyValue_17_dur(
                      temp_data_17_dur[top20_length_17 - i_17][0]
                    )
                  );
                }
              }

              vm.demandUserNumData2.data = temp_data_17_un;
              vm.demandTimesData2.data = temp_data_17_fr;
              vm.demandDurationData2.data = temp_data_17_dur;
            } catch (error) {
              console.log(error);
              vm.demandUserNumData2.data = [];
              vm.demandTimesData2.data = [];
              vm.demandDurationData2.data = [];
            }

            // //////////////// 付费用户收视行为分析 row18 left  responses16
            // 新增在册用户转化对比
            // 结构类似：各栏目热力数据概览 row16  responses11 12 demand
            // 上月（显示先） 本月（显示后）

            try {
              let buckets_18 =
                responses16.aggregations.statistical_granularity.buckets;
              let length_18 = buckets_18.length; // 月的长度
              let i_18;

              let temp_data_18 = [];
              temp_data_18.push([
                "product",
                "新增付费用户数",
                "新增在册用户数",
                "新增在册用户转化率"
              ]);
              // 新增在册用户转化率 = 新增用户中付费用户数/新增用户

              for (i_18 = 0; i_18 < length_18; i_18++) {
                temp_data_18.push([]);
              }
              for (i_18 = 0; i_18 < length_18; i_18++) {
                temp_data_18[i_18 + 1].push(
                  commonTools.format_monthToChinese(buckets_18[i_18].key)
                );
                temp_data_18[i_18 + 1].push(
                  buckets_18[i_18].new_paid_num.value
                );
                temp_data_18[i_18 + 1].push(buckets_18[i_18].new_num.value);
                temp_data_18[i_18 + 1].push(
                  (
                    buckets_18[i_18].new_paid_num.value /
                    buckets_18[i_18].new_num.value
                  ).toFixed(2)
                );
              }

              vm.newAddUserData.data = temp_data_18;
            } catch (error) {
              console.log(error);
              vm.newAddUserData.data = [];
            }

            // //////////////// 付费用户收视行为分析 row18 right  responses17
            // 引导用户付费内容排名
            // 结构类似： row13 responses5 left yd
            try {
              let buckets_18b =
                responses17.aggregations.statistical_granularity.buckets;
              let length_18b = buckets_18b.length;
              let i_18b;
              let temp_data_18b_npn = [];

              temp_data_18b_npn.push(["product", "新增订购用户"]);

              let top20_length_18b = 20;
              if (buckets_18b[0].programname.buckets.length < 20) {
                top20_length_18b = buckets_18b[0].programname.buckets.length;
              }
              for (i_18b = 0; i_18b < top20_length_18b; i_18b++) {
                temp_data_18b_npn.push([]);
              }
              let month_index_current = length_18b - 1; // 倒数第一个
              // if (length_18b == 1) {
              // month_index_current = 0;
              // }
              // 本月
              for (i_18b = 0; i_18b < top20_length_18b; i_18b++) {
                // 一
                Vue.set(
                  temp_data_18b_npn[top20_length_18b - i_18b],
                  0,
                  "(" +
                  buckets_18b[month_index_current].programname.buckets[i_18b]
                    .program_type.buckets[0].key +
                  ")" +
                  buckets_18b[month_index_current].programname.buckets[i_18b]
                    .key
                );
                Vue.set(
                  temp_data_18b_npn[top20_length_18b - i_18b],
                  1,
                  buckets_18b[month_index_current].programname.buckets[i_18b]
                    .new_paid_num.value
                );
              }

              vm.payingUserData.data = temp_data_18b_npn;
            } catch (error) {
              console.log(error);
              vm.payingUserData.data = [];
            }

            // //////////////// 本土原创节目收视行为分析 row19 left  responses18
            // 原创节目月点播数据 mixture month
            // 类似结构：  row14 responses1 left
            try {
              let buckets19_demand =
                responses18.aggregations.statistical_granularity.buckets;
              let length_19 = buckets19_demand.length; //月的长度
              let i_19;
              // 注： q1 -  直播 onlive
              // 注： q2 -  回看 watch
              // 注： q3 -  点播 demand
              let q3_u_19 = [];
              let q3_f_19 = [];
              let q3_d_19 = [];
              let temp_monthDemandData = [
                ["product"],
                ["点播用户数（万户）"],
                ["点播次数（万次）"],
                ["点播时长（万小时）"]
              ];
              for (i_19 = 0; i_19 < length_19; i_19++) {
                q3_u_19.push(buckets19_demand[i_19].demand_user_num.value);
                q3_f_19.push(buckets19_demand[i_19].demand_freq.value);
                q3_d_19.push(buckets19_demand[i_19].demand_dur.value);
                temp_monthDemandData[0].push(
                  commonTools.format_monthToChinese(buckets19_demand[i_19].key)
                );
                temp_monthDemandData[1].push(
                  vm.returnFloat((parseFloat(q3_f_19[i_19]) / 10000).toFixed(2))
                );
                temp_monthDemandData[2].push(
                  vm.returnFloat(
                    (parseFloat(q3_d_19[i_19]) / 10000 / 60).toFixed(2)
                  )
                );
                temp_monthDemandData[3].push(
                  vm.returnFloat((parseFloat(q3_u_19[i_19]) / 10000).toFixed(2))
                );
              } // for
              vm.monthDemandData.data = temp_monthDemandData;
            } catch (error) {
              console.log(error);
              vm.monthDemandData.data = [];
            }
          } // mixture month

          //混合单月分周数据
          if (datatype == "mixture" && timetype == "week") {
            console.log("混合 单月分周数据", response.data.responses);

            // /////////////// 本月各周直播收视日数据 responses2  row11 下
            // 结构类似：直播收视行为分析 responses2  row10 下 （row9结构）
            try {
              let buckets9_onlive =
                responses2.aggregations.statistical_granularity.buckets;

              // 注： q1 -  直播 onlive
              // 注： q2 -  回看 watch
              // 注： q3 -  点播 demand

              let q1_u = [];
              let q1_f = [];
              let q1_d = [];

              let length_9 = buckets9_onlive.length; //月的长度
              let i_9;
              // x 月直播收视数据
              let temp_weekliveViewingData = [
                ["product"],
                ["直播观看次数（十万次）"],
                ["直播观看时长数（十万小时）"],
                ["直播观看用户数（十万户）"]
              ];

              for (i_9 = 0; i_9 < length_9; i_9++) {
                // 月个数
                q1_u.push(buckets9_onlive[i_9].onlive_user_num.value);
                q1_f.push(buckets9_onlive[i_9].onlive_freq.value);
                q1_d.push(buckets9_onlive[i_9].onlive_dur.value);

                temp_weekliveViewingData[0].push(
                  commonTools.format_weekToChinese(buckets9_onlive[i_9].key)
                );
                temp_weekliveViewingData[1].push(
                  vm.returnFloat(
                    (parseFloat(q1_f[i_9]) / 10 / 10000).toFixed(2)
                  )
                );
                temp_weekliveViewingData[2].push(
                  vm.returnFloat(
                    (parseFloat(q1_d[i_9]) / 10 / 10000).toFixed(2)
                  )
                );
                temp_weekliveViewingData[3].push(
                  vm.returnFloat(
                    (parseFloat(q1_u[i_9]) / 10 / 10000).toFixed(2)
                  )
                );
              } // for
              vm.weekliveViewingData.data = temp_weekliveViewingData;
            } catch (error) {
              console.log(error);
              vm.weekliveViewingData.data = [];
            }

            // /////////////// 整体点播收视行为分析 row14 responses1   right
            // week   rw_dm  responses1
            try {
              let buckets14_demand =
                responses1.aggregations.statistical_granularity.buckets;
              let length_14 = buckets14_demand.length; //月长度
              let i_14;
              // 注： q1 -  直播 onlive
              // 注： q2 -  回看 watch
              // 注： q3 -  点播 demand
              let q3_u_14 = [];
              let q3_f_14 = [];
              let q3_d_14 = [];
              let temp_weekDemandViewingData = [
                ["product"],
                ["点播观看次数（百万次）"],
                ["点播观看时长数（百万小时）"],
                ["点播观看用户数（百万户）"]
              ];
              for (i_14 = 0; i_14 < length_14; i_14++) {
                q3_u_14.push(buckets14_demand[i_14].demand_user_num.value);
                q3_f_14.push(buckets14_demand[i_14].demand_freq.value);
                q3_d_14.push(buckets14_demand[i_14].demand_dur.value);
                temp_weekDemandViewingData[0].push(
                  commonTools.format_weekToChinese(buckets14_demand[i_14].key)
                );
                temp_weekDemandViewingData[1].push(
                  vm.returnFloat(
                    (parseFloat(q3_f_14[i_14]) / 1000 / 10000).toFixed(2)
                  )
                );
                temp_weekDemandViewingData[2].push(
                  vm.returnFloat(
                    (parseFloat(q3_d_14[i_14]) / 1000 / 10000 / 60).toFixed(2)
                  )
                );
                temp_weekDemandViewingData[3].push(
                  vm.returnFloat(
                    (parseFloat(q3_u_14[i_14]) / 1000 / 10000).toFixed(2)
                  )
                );
              } // for
              vm.weekDemandViewingData.data = temp_weekDemandViewingData;
            } catch (error) {
              console.log(error);
              vm.weekDemandViewingData.data = [];
            }
          }
          //混合单月多天数据
          if (datatype == "mixture" && timetype == "day") {
            console.log("混合 单月多天数据", response.data.responses);

            try {
              // //////////////////// 日开机活跃数据  row8 responses0 -- everyPowerActivityData 1
              // ▲▲ 注意 总开机活跃(temp_8_4) 看  mixture_day
              let temp_8_4 = [];
              let buckets_8 =
                responses0.aggregations.statistical_granularity.buckets;
              let length_8 = buckets_8.length;
              let i_8;
              temp_8_4.push("总开机活跃");
              for (i_8 = 0; i_8 < length_8; i_8++) {
                temp_8_4.push(
                  (
                    buckets_8[i_8].open_num.value / buckets_8[i_8].new_num.value
                  ).toFixed(2)
                );
              }
              // console.log("~~~~~~~~~~~!!!!!!temp_8_4");
              // console.log(temp_8_4);
              Vue.set(vm.everyPowerActivityData.data, 4, temp_8_4);
            } catch (error) {
              console.log(error);
              Vue.set(vm.everyPowerActivityData.data, 4, []);
            }
          }

          //运营商 - 多月
          if (datatype == "single" && timetype == "month_range") {
            // console.log("单个运营商多月数据", response.data.responses)
            if (type == "yd") {
              console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
              console.log("移动 单个运营商多月数据", tempOperatorArr);
              console.log(response.data.responses);

              let vm = this;
              let totle_data = response.data.responses;
              //G+TV各运营商侧用户发展数据概览
              let user_develop_data =
                totle_data[0].aggregations.statistical_granularity.buckets; //register_num
              //数据初始化 (注意：必须初始化)
              user_develop_data.forEach((value, index) => {
                // console.log(value.key, "在册" + value.register_num.value, "新增" + value.new_num.value, "销户" + value.unsub_user_num.value)
                let data_month = commonTools.format_monthToChinese(value.key);
                Vue.set(vm.registeredUsersData.data[0], index + 1, data_month);
                Vue.set(
                  vm.registeredUsersData.data[1],
                  index + 1,
                  Number((value.register_num.value / 1000000).toFixed(2))
                );

                //月新增在册用户对比  monthNewRegUserData
                Vue.set(vm.monthNewRegUserData.data[0], index + 1, data_month);
                Vue.set(
                  vm.monthNewRegUserData.data[1],
                  index + 1,
                  Number((value.new_num.value / 10000).toFixed(2))
                );

                //月销户用户对比  monthCancellationUserData
                Vue.set(
                  vm.monthCancellationUserData.data[0],
                  index + 1,
                  data_month
                );
                Vue.set(
                  vm.monthCancellationUserData.data[1],
                  index + 1,
                  Number((value.unsub_user_num.value / 10000).toFixed(2))
                );
              });
              // console.log("vm.monthCancellationUserData.data移动", vm.monthCancellationUserData.data)

              //G+TV本月分地区用户发展数据概览
              //本月各州市新增在册用户数
              try {
                let city_new_num_data = totle_data[0].aggregations.ac.buckets;
                city_new_num_data.forEach((value, index) => {
                  if (value.key != "other") {
                    // console.log(commonTools.acConvert_Single(value.key))
                    Vue.set(
                      vm.G_TVRegionUserData.data[0],
                      index + 1,
                      commonTools.acConvert_Single(value.key)
                    );
                    let length = value.statistical_granularity.buckets.length;
                    let new_num_arry = value.statistical_granularity.buckets;
                    // console.log(new_num_arry[length - 1].key, new_num_arry[length - 1].new_num.value)
                    Vue.set(
                      vm.G_TVRegionUserData.data[1],
                      index + 1,
                      Number(
                        (
                          new_num_arry[length - 1].new_num.value / 10000
                        ).toFixed(2)
                      )
                    );
                    vm.G_TVRegionUserData.title =
                      commonTools.format_monthToChinese(
                        new_num_arry[length - 1].key
                      ) + "各市州新增在册用户数（万户）";
                  }
                });
              } catch (error) {
                console.log(error);
                Vue.set(vm.G_TVRegionUserData.data, 0, ["name"]);
                Vue.set(vm.G_TVRegionUserData.data, 1, ["总开机活跃率"]);
              }

              //开机活跃数据
              try {
                let open_num_data =
                  totle_data[0].aggregations.statistical_granularity.buckets;
                open_num_data.forEach((value, index) => {
                  let open_rate = (
                    (value.open_num.value / value.register_num.value) *
                    100
                  ).toFixed(2);
                  // Vue.set(vm.monthPowerActivityData.data[0], index + 1, commonTools.format_monthToChinese(value.key))
                  Vue.set(
                    vm.monthPowerActivityData.data[1],
                    index + 1,
                    Number(open_rate)
                  );
                });
              } catch (error) {
                console.log(error);
                Vue.set(vm.monthPowerActivityData.data, 1, ["移动"]);
              }

              //各州市一个月开机活跃数据
              try {
                let ac_open_num_data = totle_data[0].aggregations.ac.buckets;
                ac_open_num_data.forEach((value, index) => {
                  if (value.key != "other") {
                    let ac_month_open_num =
                      value.statistical_granularity.buckets;
                    let open_num_length =
                      value.statistical_granularity.buckets.length;
                    let open_rate = (
                      (ac_month_open_num[open_num_length - 1].open_num.value /
                        ac_month_open_num[open_num_length - 1].register_num
                          .value) *
                      100
                    ).toFixed(2);
                    Vue.set(
                      vm.areaPowerActivityData.data[1],
                      index + 1,
                      Number(open_rate)
                    );
                  }
                });
              } catch (error) {
                console.log(error);
                Vue.set(vm.areaPowerActivityData.data, 1, ["移动"]);
              }

              // /////////////// 直播收视行为分析 responses 2  row10 上  yd
              // liveViewingDurationData liveViewingUserData liveViewingTimesData
              try {
                let buckets_10 =
                  responses2.aggregations.statistical_granularity.buckets;
                let length_10 = buckets_10.length;
                let i_10;
                let onlive_dur_yd = [];
                let onlive_usernum_yd = [];
                let onlive_freq_yd = [];
                let temp_liveViewingDurationData_content = [];
                let temp_liveViewingUserData_content = [];
                let temp_liveViewingTimesData_content = [];

                // vm.liveViewingDurationData.content = []; // 在移动处初始化
                // vm.liveViewingUserData.content = [];     // 在移动处初始化
                // vm.liveViewingTimesData.content = [];    // 在移动处初始化
                for (i_10 = 0; i_10 < length_10; i_10++) {
                  temp_liveViewingDurationData_content.push({
                    title:
                      commonTools.format_monthToChinese(buckets_10[i_10].key) +
                      "直播观看时长数据",
                    data: []
                  });
                  temp_liveViewingUserData_content.push({
                    title:
                      commonTools.format_monthToChinese(buckets_10[i_10].key) +
                      "直播观看用户数据",
                    data: []
                  });
                  temp_liveViewingTimesData_content.push({
                    title:
                      commonTools.format_monthToChinese(buckets_10[i_10].key) +
                      "直播观看次数数据",
                    data: []
                  });
                }
                setTimeout(function () {
                  vm.liveViewingDurationData.content = temp_liveViewingDurationData_content;
                  vm.liveViewingUserData.content = temp_liveViewingUserData_content;
                  vm.liveViewingTimesData.content = temp_liveViewingTimesData_content;

                  for (i_10 = 0; i_10 < length_10; i_10++) {
                    onlive_usernum_yd.push(
                      buckets_10[i_10].onlive_user_num.value
                    );
                    onlive_freq_yd.push(buckets_10[i_10].onlive_freq.value);
                    onlive_dur_yd.push(buckets_10[i_10].onlive_dur.value);

                    Vue.set(vm.liveViewingDurationData.content[i_10].data, 0, {
                      value: onlive_dur_yd[i_10],
                      name: "移动"
                    });
                    Vue.set(vm.liveViewingUserData.content[i_10].data, 0, {
                      value: onlive_usernum_yd[i_10],
                      name: "移动"
                    });
                    Vue.set(vm.liveViewingTimesData.content[i_10].data, 0, {
                      value: onlive_freq_yd[i_10],
                      name: "移动"
                    });
                  }
                }, 500); // 移动延时500ms // 联通延时 500ms 电信延时1000ms
              } catch (error) {
                console.log(error);
                vm.liveViewingDurationData.content = [];
                vm.liveViewingUserData.content = [];
                vm.liveViewingTimesData.content = [];
              }
              // console.log("▲▲▲▲▲▲▲▲▲▲▲▲▲▲");
              // console.log(temp_liveViewingDurationData_content);
              // console.log(temp_liveViewingUserData_content);
              // console.log(temp_liveViewingTimesData_content);

              // 之后的联通 电信的数据要 慢一拍set！

              // //////////////// 重点专题及活动数据概览 row20 right  responses19 yd
              // 类似结构：row18 right  responses17
              try {
                let buckets_20zt =
                  responses19.aggregations.statistical_granularity.buckets;
                let length_20zt = buckets_20zt.length;
                let i_20zt;
                let temp_data_20zt_cf = [];

                temp_data_20zt_cf.push(["product", "点击次数（万）"]);

                let top20_length_20zt = 20;
                if (
                  buckets_20zt[0].special_or_activity_name.buckets.length < 20
                ) {
                  top20_length_20zt =
                    buckets_20zt[0].special_or_activity_name.buckets.length;
                }
                for (i_20zt = 0; i_20zt < top20_length_20zt; i_20zt++) {
                  temp_data_20zt_cf.push([]);
                }
                let month_index_current = length_20zt - 1; // 倒数第一个
                // if (length_20zt == 1) {
                // month_index_current = 0;
                // }
                // 本月
                function ManageSpecialKey(buckets) {
                  let key;
                  if (buckets.length == 0) {
                    key = "推荐";
                  } else {
                    key = buckets[0].key;
                  }
                  return key;
                }
                for (i_20zt = 0; i_20zt < top20_length_20zt; i_20zt++) {
                  // 一
                  Vue.set(
                    temp_data_20zt_cf[top20_length_20zt - i_20zt],
                    0,
                    "(" +
                    ManageSpecialKey(
                      buckets_20zt[month_index_current]
                        .special_or_activity_name.buckets[i_20zt].ti.buckets
                    ) +
                    ")" +
                    buckets_20zt[month_index_current].special_or_activity_name
                      .buckets[i_20zt].key
                  );
                  Vue.set(
                    temp_data_20zt_cf[top20_length_20zt - i_20zt],
                    1,
                    commonTools.returnFloat_1(
                      buckets_20zt[month_index_current].special_or_activity_name
                        .buckets[i_20zt].click_freq.value / 10000
                    )
                  );
                }
                vm.mobileKeyProjectData.data = temp_data_20zt_cf;
              } catch (error) {
                console.log(error);
                vm.mobileKeyProjectData.data = [];
              }
            } else if (type == "lt") {
              console.log("联通 单个运营商多月数据", tempOperatorArr);
              console.log(response.data.responses);

              let vm = this;
              let totle_data = response.data.responses;
              //G+TV各运营商侧用户发展数据概览
              let user_develop_data =
                totle_data[0].aggregations.statistical_granularity.buckets; //register_num
              user_develop_data.forEach((value, index) => {
                // console.log(value.key, "在册" + value.register_num.value, "新增" + value.new_num.value, "销户" + value.unsub_user_num.value)
                let data_month = commonTools.format_monthToChinese(value.key);
                Vue.set(vm.registeredUsersData.data[0], index + 1, data_month);
                Vue.set(
                  vm.registeredUsersData.data[2],
                  index + 1,
                  Number((value.register_num.value / 1000000).toFixed(2))
                );

                //月新增在册用户对比  monthNewRegUserData
                Vue.set(vm.monthNewRegUserData.data[0], index + 1, data_month);
                Vue.set(
                  vm.monthNewRegUserData.data[2],
                  index + 1,
                  Number((value.new_num.value / 10000).toFixed(2))
                );

                //月销户用户对比  monthCancellationUserData
                Vue.set(
                  vm.monthCancellationUserData.data[0],
                  index + 1,
                  data_month
                );
                Vue.set(
                  vm.monthCancellationUserData.data[2],
                  index + 1,
                  Number((value.unsub_user_num.value / 10000).toFixed(2))
                );
              });
              // console.log("vm.monthCancellationUserData.data联通", vm.monthCancellationUserData.data)

              //G+TV本月分地区用户发展数据概览
              //本月各州市新增在册用户数
              let city_new_num_data = totle_data[0].aggregations.ac.buckets;
              city_new_num_data.forEach((value, index) => {
                if (value.key != "other") {
                  Vue.set(
                    vm.G_TVRegionUserData.data[0],
                    index + 1,
                    commonTools.acConvert_Single(value.key)
                  );
                  let length = value.statistical_granularity.buckets.length;
                  let new_num_arry = value.statistical_granularity.buckets;
                  Vue.set(
                    vm.G_TVRegionUserData.data[2],
                    index + 1,
                    Number(
                      (new_num_arry[length - 1].new_num.value / 10000).toFixed(2)
                    )
                  );
                }
              });

              //开机活跃数据
              try {
                let open_num_data =
                  totle_data[0].aggregations.statistical_granularity.buckets;
                open_num_data.forEach((value, index) => {
                  let open_rate = (
                    (value.open_num.value / value.register_num.value) *
                    100
                  ).toFixed(2);
                  Vue.set(
                    vm.monthPowerActivityData.data[2],
                    index + 1,
                    Number(open_rate)
                  );
                });
              } catch (error) {
                console.log(error);
                Vue.set(vm.monthPowerActivityData.data, 2, ["联通"]);
              }
              //各州市一个月开机活跃数据
              try {
                let ac_open_num_data = totle_data[0].aggregations.ac.buckets;
                ac_open_num_data.forEach((value, index) => {
                  if (value.key != "other") {
                    let ac_month_open_num =
                      value.statistical_granularity.buckets;
                    let open_num_length =
                      value.statistical_granularity.buckets.length;
                    let open_rate = (
                      (ac_month_open_num[open_num_length - 1].open_num.value /
                        ac_month_open_num[open_num_length - 1].register_num
                          .value) *
                      100
                    ).toFixed(2);
                    Vue.set(
                      vm.areaPowerActivityData.data[2],
                      index + 1,
                      Number(open_rate)
                    );
                  }
                });
              } catch (error) {
                console.log(error);
                Vue.set(vm.areaPowerActivityData.data, 2, ["联通"]);
              }

              // /////////////// 直播收视行为分析 responses 2  row10 上  lt
              // liveViewingDurationData liveViewingUserData liveViewingTimesData
              try {
                let buckets_10 =
                  responses2.aggregations.statistical_granularity.buckets;
                let length_10 = buckets_10.length;
                let i_10;
                let onlive_dur_yd = [];
                let onlive_usernum_yd = [];
                let onlive_freq_yd = [];
                let temp_liveViewingDurationData_content = [];
                let temp_liveViewingUserData_content = [];
                let temp_liveViewingTimesData_content = [];

                setTimeout(function () {
                  for (i_10 = 0; i_10 < length_10; i_10++) {
                    onlive_usernum_yd.push(
                      buckets_10[i_10].onlive_user_num.value
                    );
                    onlive_freq_yd.push(buckets_10[i_10].onlive_freq.value);
                    onlive_dur_yd.push(buckets_10[i_10].onlive_dur.value);

                    Vue.set(vm.liveViewingDurationData.content[i_10].data, 1, {
                      value: onlive_dur_yd[i_10],
                      name: "联通"
                    });
                    Vue.set(vm.liveViewingUserData.content[i_10].data, 1, {
                      value: onlive_usernum_yd[i_10],
                      name: "联通"
                    });
                    Vue.set(vm.liveViewingTimesData.content[i_10].data, 1, {
                      value: onlive_freq_yd[i_10],
                      name: "联通"
                    });
                  }
                }, 1000); // 联通延时 500ms 电信延时1000ms
              } catch (error) {
                console.log(error);
                vm.liveViewingDurationData.content = [];
                vm.liveViewingUserData.content = [];
                vm.liveViewingTimesData.content = [];
              }

              // //////////////// 重点专题及活动数据概览 row20 right  responses19 lt
              // 类似结构：row18 right  responses17
              try {
                let buckets_20zt =
                  responses19.aggregations.statistical_granularity.buckets;
                let length_20zt = buckets_20zt.length;
                let i_20zt;
                let temp_data_20zt_cf = [];

                temp_data_20zt_cf.push(["product", "点击次数（万）"]);

                let top20_length_20zt = 20;
                if (
                  buckets_20zt[0].special_or_activity_name.buckets.length < 20
                ) {
                  top20_length_20zt =
                    buckets_20zt[0].special_or_activity_name.buckets.length;
                }
                for (i_20zt = 0; i_20zt < top20_length_20zt; i_20zt++) {
                  temp_data_20zt_cf.push([]);
                }
                let month_index_current = length_20zt - 1; // 倒数第一个
                // if (length_20zt == 1) {
                // month_index_current = 0;
                // }
                // 本月
                function ManageSpecialKey(buckets) {
                  let key;
                  if (buckets.length == 0) {
                    key = "推荐";
                  } else {
                    key = buckets[0].key;
                  }
                  return key;
                }
                for (i_20zt = 0; i_20zt < top20_length_20zt; i_20zt++) {
                  // 一
                  Vue.set(
                    temp_data_20zt_cf[top20_length_20zt - i_20zt],
                    0,
                    "(" +
                    ManageSpecialKey(
                      buckets_20zt[month_index_current]
                        .special_or_activity_name.buckets[i_20zt].ti.buckets
                    ) +
                    ")" +
                    buckets_20zt[month_index_current].special_or_activity_name
                      .buckets[i_20zt].key
                  );
                  Vue.set(
                    temp_data_20zt_cf[top20_length_20zt - i_20zt],
                    1,
                    commonTools.returnFloat_1(
                      buckets_20zt[month_index_current].special_or_activity_name
                        .buckets[i_20zt].click_freq.value / 10000
                    )
                  );
                }
                vm.unicornKeyProjectData.data = temp_data_20zt_cf;
              } catch (error) {
                console.log(error);
                vm.unicornKeyProjectData.data = [];
              }
            } else if (type == "dx") {
              console.log("电信 单个运营商多月数据", tempOperatorArr);
              console.log(response.data.responses);

              let vm = this;
              let totle_data = response.data.responses;
              //G+TV各运营商侧用户发展数据概览
              let user_develop_data =
                totle_data[0].aggregations.statistical_granularity.buckets; //register_num
              user_develop_data.forEach((value, index) => {
                // console.log(value.key, "在册" + value.register_num.value, "新增" + value.new_num.value, "销户" + value.unsub_user_num.value)
                Vue.set(
                  vm.registeredUsersData.data[3],
                  index + 1,
                  Number((value.register_num.value / 1000000).toFixed(2))
                );
                //月新增在册用户对比  monthNewRegUserData
                Vue.set(
                  vm.monthNewRegUserData.data[3],
                  index + 1,
                  Number((value.new_num.value / 10000).toFixed(2))
                );
                //月销户用户对比  monthCancellationUserData
                Vue.set(
                  vm.monthCancellationUserData.data[3],
                  index + 1,
                  Number((value.unsub_user_num.value / 10000).toFixed(2))
                );
              });
              // console.log("vm.monthCancellationUserData.data电信", vm.monthCancellationUserData.data)

              //G+TV本月分地区用户发展数据概览
              //本月各州市新增在册用户数
              let city_new_num_data = totle_data[0].aggregations.ac.buckets;
              city_new_num_data.forEach((value, index) => {
                if (value.key != "other") {
                  // console.log(commonTools.acConvert_Single(value.key))
                  Vue.set(
                    vm.G_TVRegionUserData.data[0],
                    index + 1,
                    commonTools.acConvert_Single(value.key)
                  );
                  let length = value.statistical_granularity.buckets.length;
                  let new_num_arry = value.statistical_granularity.buckets;
                  Vue.set(
                    vm.G_TVRegionUserData.data[3],
                    index + 1,
                    Number(
                      (new_num_arry[length - 1].new_num.value / 10000).toFixed(2)
                    )
                  );
                }
              });
              // console.log("vm.G_TVRegionUserData.data", vm.G_TVRegionUserData.data)

              //开机活跃数据
              try {
                let open_num_data =
                  totle_data[0].aggregations.statistical_granularity.buckets;
                open_num_data.forEach((value, index) => {
                  let open_rate = (
                    (value.open_num.value / value.register_num.value) *
                    100
                  ).toFixed(2);
                  Vue.set(
                    vm.monthPowerActivityData.data[3],
                    index + 1,
                    Number(open_rate)
                  );
                });
                // console.log("vm.monthPowerActivityData.data", vm.monthPowerActivityData.data)
              } catch (error) {
                console.log(error);
                Vue.set(vm.monthPowerActivityData.data, 3, ["电信"]);
              }

              //各州市一个月开机活跃数据
              try {
                let ac_open_num_data = totle_data[0].aggregations.ac.buckets;
                ac_open_num_data.forEach((value, index) => {
                  if (value.key != "other") {
                    let ac_month_open_num =
                      value.statistical_granularity.buckets;
                    let open_num_length =
                      value.statistical_granularity.buckets.length;
                    let open_rate = (
                      (ac_month_open_num[open_num_length - 1].open_num.value /
                        ac_month_open_num[open_num_length - 1].register_num
                          .value) *
                      100
                    ).toFixed(2);
                    Vue.set(
                      vm.areaPowerActivityData.data[3],
                      index + 1,
                      Number(open_rate)
                    );
                  }
                });
              } catch (error) {
                console.log(error);
                Vue.set(vm.areaPowerActivityData.data, 3, ["电信"]);
              }

              // //////////////// 重点专题及活动数据概览 row20 right  responses19 dx
              // 类似结构：row18 right  responses17
              try {
                let buckets_20zt =
                  responses19.aggregations.statistical_granularity.buckets;
                let length_20zt = buckets_20zt.length;
                let i_20zt;
                let temp_data_20zt_cf = [];

                temp_data_20zt_cf.push(["product", "点击次数（万）"]);

                let top20_length_20zt = 20;
                if (
                  buckets_20zt[0].special_or_activity_name.buckets.length < 20
                ) {
                  top20_length_20zt =
                    buckets_20zt[0].special_or_activity_name.buckets.length;
                }
                for (i_20zt = 0; i_20zt < top20_length_20zt; i_20zt++) {
                  temp_data_20zt_cf.push([]);
                }
                let month_index_current = length_20zt - 1; // 倒数第一个
                // if (length_20zt == 1) {
                // month_index_current = 0;
                // }
                // 本月
                function ManageSpecialKey(buckets) {
                  let key;
                  if (buckets.length == 0) {
                    key = "推荐";
                  } else {
                    key = buckets[0].key;
                  }
                  return key;
                }
                for (i_20zt = 0; i_20zt < top20_length_20zt; i_20zt++) {
                  // 一
                  Vue.set(
                    temp_data_20zt_cf[top20_length_20zt - i_20zt],
                    0,
                    "(" +
                    ManageSpecialKey(
                      buckets_20zt[month_index_current]
                        .special_or_activity_name.buckets[i_20zt].ti.buckets
                    ) +
                    ")" +
                    buckets_20zt[month_index_current].special_or_activity_name
                      .buckets[i_20zt].key
                  );
                  Vue.set(
                    temp_data_20zt_cf[top20_length_20zt - i_20zt],
                    1,
                    commonTools.returnFloat_1(
                      buckets_20zt[month_index_current].special_or_activity_name
                        .buckets[i_20zt].click_freq.value / 10000
                    )
                  );
                }
                vm.telecomKeyProjectData.data = temp_data_20zt_cf;
              } catch (error) {
                console.log(error);
                vm.telecomKeyProjectData.data = [];
              }
            }

            // /////////////// 直播收视行为分析 responses 2  row10 上  dx
            // liveViewingDurationData liveViewingUserData liveViewingTimesData
            try {
              let buckets_10 =
                responses2.aggregations.statistical_granularity.buckets;
              let length_10 = buckets_10.length;
              let i_10;
              let onlive_dur_yd = [];
              let onlive_usernum_yd = [];
              let onlive_freq_yd = [];
              let temp_liveViewingDurationData_content = [];
              let temp_liveViewingUserData_content = [];
              let temp_liveViewingTimesData_content = [];

              setTimeout(function () {
                for (i_10 = 0; i_10 < length_10; i_10++) {
                  onlive_usernum_yd.push(
                    buckets_10[i_10].onlive_user_num.value
                  );
                  onlive_freq_yd.push(buckets_10[i_10].onlive_freq.value);
                  onlive_dur_yd.push(buckets_10[i_10].onlive_dur.value);
                  Vue.set(vm.liveViewingDurationData.content[i_10].data, 2, {
                    value: onlive_dur_yd[i_10],
                    name: "电信"
                  });
                  Vue.set(vm.liveViewingUserData.content[i_10].data, 2, {
                    value: onlive_usernum_yd[i_10],
                    name: "电信"
                  });
                  Vue.set(vm.liveViewingTimesData.content[i_10].data, 2, {
                    value: onlive_freq_yd[i_10],
                    name: "电信"
                  });
                }
              }, 1000); // 联通延时 500ms 电信延时1000ms
            } catch (error) {
              console.log(error);
              vm.liveViewingDurationData.content = [];
              vm.liveViewingUserData.content = [];
              vm.liveViewingTimesData.content = [];
            }
          }

          //运营商 - 一月分周
          if (datatype == "single" && timetype == "week") {

            if (type == "yd") {
              console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
              console.log("移动 单运营商一月分周", tempOperatorArr);
              console.log(response.data.responses);

              let vm = this;
              let single_week_data = response.data.responses; //总数据

              //G+TV本月各周用户发展数据
              let week_user_develop =
                single_week_data[0].aggregations.statistical_granularity
                  .buckets;
              week_user_develop.forEach((value, index) => {
                // console.log(value.key, value.new_num.value)
                let week_data = commonTools.format_weekToChinese(value.key);
                Vue.set(vm.weekNewUserData.data[0], index + 1, week_data);
                Vue.set(
                  vm.weekNewUserData.data[1],
                  index + 1,
                  Number((value.new_num.value / 10000).toFixed(2))
                );
              });

              //G+TV各周分地区用户发展数据概览
              let week_area_data = single_week_data[0].aggregations.ac.buckets;
              let week_area_temp = [
                ["时间"],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                []
              ];
              week_area_data.forEach((value, index) => {
                if (value.key != "other") {
                  // console.log(commonTools.acConvert_Single(value.key))
                  week_area_temp[9 - index].push(
                    commonTools.acConvert_Single(value.key)
                  );
                  value.statistical_granularity.buckets.forEach(
                    (value2, index2) => {
                      // console.log(value2.key, value2.new_num.value)
                      //设置月份（只执行一次）
                      if (index == 0) {
                        let data_week = commonTools.format_weekToChinese(
                          value2.key
                        );
                        week_area_temp[0].push(data_week);
                      }
                      week_area_temp[9 - index].push(
                        Number((value2.new_num.value / 1000).toFixed(2))
                      );
                      // Vue.set(vm.NewUserComparisonData.data[index + 1], index2 + 1, (Number(value2.open_num.value / 10000).toFixed(1)))
                    }
                  );
                }
              });
              vm.mobileNewUserData.data = week_area_temp;
              // console.log("vm.mobileNewUserData.data", vm.mobileNewUserData.data)

              // /////////////// 直播收视行为分析 responses 2  row11 上  yd
              // 结构同 分month - single：yd lt dx
              // weekLiveViewUserData  onlive_user_num
              // weekLiveViewTimesData  onlive_freq
              // weekliveViewDurationData onlive_dur

              let i_10;
              let buckets_10;
              let length_10;
              let onlive_dur_yd = [];
              let onlive_usernum_yd = [];
              let onlive_freq_yd = [];
              try {
                buckets_10 =
                  responses2.aggregations.statistical_granularity.buckets;
                length_10 = buckets_10.length;
                onlive_dur_yd = [];
                onlive_usernum_yd = [];
                onlive_freq_yd = [];
                let temp_weekLiveViewUserData_content = [];
                let temp_weekLiveViewTimesData_content = [];
                let temp_weekliveViewDurationData_content = [];

                // vm.weekLiveViewUserData.content = []; // 在移动处初始化
                // vm.weekLiveViewTimesData.content = [];     // 在移动处初始化
                // vm.weekliveViewDurationData.content = [];    // 在移动处初始化
                for (i_10 = 0; i_10 < length_10; i_10++) {
                  temp_weekLiveViewUserData_content.push({
                    title:
                      commonTools.format_weekToChinese(buckets_10[i_10].key) +
                      "直播收视用户数",
                    data: []
                  });
                  temp_weekLiveViewTimesData_content.push({
                    title:
                      commonTools.format_weekToChinese(buckets_10[i_10].key) +
                      "直播收视次数",
                    data: []
                  });
                  temp_weekliveViewDurationData_content.push({
                    title:
                      commonTools.format_weekToChinese(buckets_10[i_10].key) +
                      "直播收视时长",
                    data: []
                  });
                }
                setTimeout(function () {
                  vm.weekLiveViewUserData.content = temp_weekLiveViewUserData_content;
                  vm.weekLiveViewTimesData.content = temp_weekLiveViewTimesData_content;
                  vm.weekliveViewDurationData.content = temp_weekliveViewDurationData_content;

                  for (i_10 = 0; i_10 < length_10; i_10++) {
                    onlive_usernum_yd.push(
                      buckets_10[i_10].onlive_user_num.value
                    );
                    onlive_freq_yd.push(buckets_10[i_10].onlive_freq.value);
                    onlive_dur_yd.push(buckets_10[i_10].onlive_dur.value);

                    Vue.set(vm.weekLiveViewUserData.content[i_10].data, 0, {
                      value: onlive_usernum_yd[i_10],
                      name: "移动"
                    });
                    Vue.set(vm.weekLiveViewTimesData.content[i_10].data, 0, {
                      value: onlive_freq_yd[i_10],
                      name: "移动"
                    });
                    Vue.set(vm.weekliveViewDurationData.content[i_10].data, 0, {
                      value: onlive_dur_yd[i_10],
                      name: "移动"
                    });
                  }
                  console.log("■■■■■■■■■■■■■■■■■■■■■■■■■");
                  console.log(vm.weekLiveViewUserData);
                  console.log(vm.weekLiveViewTimesData);
                  console.log(vm.weekliveViewDurationData);

                }, 500); // 移动延时 1 // 联通/电信延时 2
              } catch (error) {
                console.log(error);
                vm.weekLiveViewUserData.content = [];
                vm.weekLiveViewTimesData.content = [];
                vm.weekliveViewDurationData.content = [];
              }

              // //////////////// 本土原创节目收视行为分析 row19 right  responses18 yd
              // 原创节目月点播数据 single week
              // 类似结构：  row14 responses1 left
              try {
                let buckets19_demand =
                  responses18.aggregations.statistical_granularity.buckets;
                let length_19 = buckets19_demand.length; //月的长度
                let i_19;
                // 注： q1 -  直播 onlive
                // 注： q2 -  回看 watch
                // 注： q3 -  点播 demand
                let q3_f_19 = [];
                let temp_monthDemandData = [["product"], ["移动"]];
                for (i_19 = 0; i_19 < length_19; i_19++) {
                  q3_f_19.push(buckets19_demand[i_19].demand_freq.value);
                  temp_monthDemandData[0].push(
                    commonTools.format_weekToChinese(buckets19_demand[i_19].key)
                  );
                  temp_monthDemandData[1].push(
                    vm.returnFloat(parseFloat(q3_f_19[i_19]))
                  );
                } // for
                Vue.set(
                  vm.originalProgramsDemandData.data,
                  0,
                  temp_monthDemandData[0]
                );
                Vue.set(
                  vm.originalProgramsDemandData.data,
                  1,
                  temp_monthDemandData[1]
                );
              } catch (error) {
                console.log(error);
                Vue.set(vm.originalProgramsDemandData.data, 0, []);
                Vue.set(vm.originalProgramsDemandData.data, 1, []);
              }
            } else if (type == "lt") {

              console.log("联通 单运营商一月分周", tempOperatorArr);
              console.log(response.data.responses);

              let vm = this;
              let single_week_data = response.data.responses; //总数据
              try {
                //G+TV本月各周用户发展数据
                let week_user_develop =
                  single_week_data[0].aggregations.statistical_granularity
                    .buckets;
                week_user_develop.forEach((value, index) => {
                  // console.log(value.key, value.new_num.value)
                  let week_data = commonTools.format_weekToChinese(value.key);
                  Vue.set(vm.weekNewUserData.data[0], index + 1, week_data);
                  Vue.set(
                    vm.weekNewUserData.data[2],
                    index + 1,
                    Number((value.new_num.value / 10000).toFixed(2))
                  );
                });

                //G+TV各周分地区用户发展数据概览
                let week_area_data =
                  single_week_data[0].aggregations.ac.buckets;
                let week_area_temp = [
                  ["时间"],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  []
                ];
                week_area_data.forEach((value, index) => {
                  if (value.key != "other") {
                    // console.log(commonTools.acConvert_Single(value.key))
                    week_area_temp[9 - index].push(
                      commonTools.acConvert_Single(value.key)
                    );
                    value.statistical_granularity.buckets.forEach(
                      (value2, index2) => {
                        // console.log(value2.key, value2.new_num.value)
                        //设置月份（只执行一次）
                        if (index == 0) {
                          let data_week = commonTools.format_weekToChinese(
                            value2.key
                          );
                          week_area_temp[0].push(data_week);
                        }
                        week_area_temp[9 - index].push(
                          Number((value2.new_num.value / 1000).toFixed(2))
                        );
                        // Vue.set(vm.NewUserComparisonData.data[index + 1], index2 + 1, (Number(value2.open_num.value / 10000).toFixed(1)))
                      }
                    );
                  }
                });
                vm.unicornNewUserData.data = week_area_temp;
                console.log("■■■■■■■■■■■■■■■■■■■■1");
                console.log(week_area_temp);
                console.log(week_area_temp);
              } catch (error) {
                console.log(error);
              }

              // //////////////// 本土原创节目收视行为分析 row19 right  responses18 lt
              // 原创节目月点播数据 single week
              // 类似结构：  row14 responses1 left
              try {
                let buckets19_demand =
                  responses18.aggregations.statistical_granularity.buckets;
                let length_19 = buckets19_demand.length; //月的长度
                let i_19;
                // 注： q1 -  直播 onlive
                // 注： q2 -  回看 watch
                // 注： q3 -  点播 demand
                let q3_f_19 = [];
                let temp_monthDemandData = [["联通"]];
                for (i_19 = 0; i_19 < length_19; i_19++) {
                  q3_f_19.push(buckets19_demand[i_19].demand_freq.value);
                  temp_monthDemandData[0].push(
                    vm.returnFloat(parseFloat(q3_f_19[i_19]))
                  );
                } // for
                Vue.set(
                  vm.originalProgramsDemandData.data,
                  2,
                  temp_monthDemandData[0]
                );
              } catch (error) {
                console.log(error);
                Vue.set(vm.originalProgramsDemandData.data, 2, []);
              }
            } else if (type == "dx") {
              console.log("电信 单运营商一月分周", tempOperatorArr);
              console.log(response.data.responses);

              let vm = this;
              let single_week_data = response.data.responses; //总数据

              try {
                //G+TV本月各周用户发展数据
                let week_user_develop =
                  single_week_data[0].aggregations.statistical_granularity
                    .buckets;
                week_user_develop.forEach((value, index) => {
                  // console.log(value.key, value.new_num.value)
                  let week_data = commonTools.format_weekToChinese(value.key);
                  Vue.set(vm.weekNewUserData.data[0], index + 1, week_data);
                  Vue.set(
                    vm.weekNewUserData.data[3],
                    index + 1,
                    Number((value.new_num.value / 10000).toFixed(2))
                  );
                });
                // console.log("vm.weekNewUserData.data", vm.weekNewUserData.data)

                //G+TV各周分地区用户发展数据概览
                let week_area_data =
                  single_week_data[0].aggregations.ac.buckets;
                let week_area_temp = [
                  ["时间"],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  []
                ];
                week_area_data.forEach((value, index) => {
                  if (value.key != "other") {
                    // console.log(commonTools.acConvert_Single(value.key))
                    week_area_temp[9 - index].push(
                      commonTools.acConvert_Single(value.key)
                    );
                    value.statistical_granularity.buckets.forEach(
                      (value2, index2) => {
                        // console.log(value2.key, value2.new_num.value)
                        //设置月份（只执行一次）
                        if (index == 0) {
                          let data_week = commonTools.format_weekToChinese(
                            value2.key
                          );
                          week_area_temp[0].push(data_week);
                        }
                        week_area_temp[9 - index].push(
                          Number((value2.new_num.value / 1000).toFixed(2))
                        );
                        // Vue.set(vm.NewUserComparisonData.data[index + 1], index2 + 1, (Number(value2.open_num.value / 10000).toFixed(1)))
                      }
                    );
                  }
                });
                vm.telecomNewUserData.data = week_area_temp;
              } catch (error) {
                console.log(error);
              }
              // //////////////// 本土原创节目收视行为分析 row19 right  responses18 dx
              // 原创节目月点播数据 single week
              // 类似结构：  row14 responses1 left
              try {
                let buckets19_demand =
                  responses18.aggregations.statistical_granularity.buckets;
                let length_19 = buckets19_demand.length; //月的长度
                let i_19;
                // 注： q1 -  直播 onlive
                // 注： q2 -  回看 watch
                // 注： q3 -  点播 demand
                let q3_f_19 = [];
                let temp_monthDemandData = [["电信"]];
                for (i_19 = 0; i_19 < length_19; i_19++) {
                  q3_f_19.push(buckets19_demand[i_19].demand_freq.value);
                  temp_monthDemandData[0].push(
                    vm.returnFloat(parseFloat(q3_f_19[i_19]))
                  );
                } // for
                Vue.set(
                  vm.originalProgramsDemandData.data,
                  3,
                  temp_monthDemandData[0]
                );
              } catch (error) {
                console.log(error);
                Vue.set(vm.originalProgramsDemandData.data, 3, []);
              }
            }
          }

          ////运营商 - 一月分天
          if (datatype == "single" && timetype == "day") {
            if (type == "yd") {
              console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
              console.log("移动 单运营商一月分天", tempOperatorArr);
              console.log(response.data.responses);
              let vm = this;
              let single_day_data = response.data.responses;

              //G+TV本月每日用户发展数据  //每月日新增在册用户数
              let day_new_num_data =
                single_day_data[0].aggregations.statistical_granularity.buckets;
              day_new_num_data.forEach((value, index) => {
                // console.log(value.key, value.new_num.value)
                let setDate = new Date(value.key);
                let setdateYear = setDate.getFullYear() + "年";
                let setDateMonth = setDate.getMonth() + 1 + "月";
                let setDateDay = setDate.getDate() + "日";
                let dayDate = setDateMonth + setDateDay;
                // console.log(dayDate)
                vm.everyDayUserData.title =
                  setDateMonth + "日新增在册用户数（千户）";
                Vue.set(vm.everyDayUserData.data[0], index + 1, dayDate);
                Vue.set(
                  vm.everyDayUserData.data[1],
                  index + 1,
                  Number((value.new_num.value / 1000).toFixed(2))
                );
              });

              // //////////////////// 日开机活跃数据  row8 responses0 -- everyPowerActivityData 1
              // ▲▲ 注意 总开机活跃(temp_8_4) 看  mixture_day
              // 开机率 = 开机用户/新增用户  = open_num/new_num
              try {
                let temp_8_0 = [];
                let temp_8_1 = [];
                let buckets_8 =
                  responses0.aggregations.statistical_granularity.buckets;
                let length_8 = buckets_8.length;
                let i_8;
                temp_8_0.push("product");
                temp_8_1.push("移动");
                for (i_8 = 0; i_8 < length_8; i_8++) {
                  temp_8_0.push(
                    commonTools.format_dateToChineseMD(buckets_8[i_8].key)
                  );
                  temp_8_1.push(
                    (
                      buckets_8[i_8].open_num.value /
                      buckets_8[i_8].new_num.value
                    ).toFixed(2)
                  );
                }
                // console.log("~~~~~~~~~~~!!!!!!temp_8_0 temp_8_1");
                // console.log(temp_8_0);
                // console.log(temp_8_1);
                Vue.set(vm.everyPowerActivityData.data, 0, temp_8_0);
                Vue.set(vm.everyPowerActivityData.data, 1, temp_8_1);
              } catch (error) {
                console.log(error);
                Vue.set(vm.everyPowerActivityData.data, 0, []);
                Vue.set(vm.everyPowerActivityData.data, 1, []);
              }
              // /////////////////// 本地直播及轮播频道用户收视行为分析 row13 responses5 left yd
              // 结构类似 row12
              try {
                let buckets_13 =
                  responses5.aggregations.statistical_granularity.buckets;
                let length_13 = buckets_13.length; // 默认两月 - 2
                let i_13;
                let temp_data_13_un = [];

                temp_data_13_un.push(["product", "本月", "上月"]);

                let top20_length_13 = 20;
                if (buckets_13[0].channel.buckets.length < 20) {
                  top20_length_13 = buckets_13[0].channel.buckets.length;
                }
                for (i_13 = 0; i_13 < top20_length_13; i_13++) {
                  temp_data_13_un.push([]);
                }
                let month_index_current = length_13 - 1; // 倒数第一个
                // if (length_13 == 1) {
                // month_index_current = 0;
                // }
                // 本月
                for (i_13 = 0; i_13 < top20_length_13; i_13++) {
                  // 一
                  Vue.set(
                    temp_data_13_un[top20_length_13 - i_13],
                    0,
                    buckets_13[month_index_current].channel.buckets[i_13].key
                  );
                  Vue.set(
                    temp_data_13_un[top20_length_13 - i_13],
                    1,
                    commonTools.returnFloat_2(
                      buckets_13[month_index_current].channel.buckets[i_13]
                        .onlive_user_num.value / 10000
                    )
                  );
                }
                // ////// 上月
                if (length_13 > 1) {
                  let buckets_child_13_2 =
                    responses5.aggregations.statistical_granularity.buckets[
                      length_13 - 2
                    ].channel.buckets;
                  let top20_length_13_week2_all = buckets_child_13_2.length; // n个
                  let i_13_2;
                  function Return_KeyValue_13_un(key) {
                    let value;
                    for (
                      i_13_2 = 0;
                      i_13_2 < top20_length_13_week2_all;
                      i_13_2++
                    ) {
                      if (buckets_child_13_2[i_13_2].key == key) {
                        value = commonTools.returnFloat_2(
                          buckets_child_13_2[i_13_2].onlive_user_num.value /
                          10000
                        );
                        break;
                      }
                    }
                    return value;
                  }
                  // 遍历 本月（先）top 15的key
                  for (i_13 = 0; i_13 < top20_length_13; i_13++) {
                    Vue.set(
                      temp_data_13_un[top20_length_13 - i_13],
                      2,
                      Return_KeyValue_13_un(
                        temp_data_13_un[top20_length_13 - i_13][0]
                      )
                    );
                  }
                }
                vm.mobileLiveViewerData.data = temp_data_13_un;
              } catch (error) {
                console.log(error);
                vm.mobileLiveViewerData.data = [];
              }
            } // yd

            if (type == "lt") {
              console.log("联通 单运营商一月分天", tempOperatorArr);
              console.log(response.data.responses);

              let vm = this;
              let single_day_data = response.data.responses;

              //G+TV本月每日用户发展数据  //每月日新增在册用户数
              let day_new_num_data =
                single_day_data[0].aggregations.statistical_granularity.buckets;
              day_new_num_data.forEach((value, index) => {
                Vue.set(
                  vm.everyDayUserData.data[2],
                  index + 1,
                  Number((value.new_num.value / 1000).toFixed(2))
                );
              });

              // //////////////////// 日开机活跃数据  row8 responses0 -- everyPowerActivityData 2
              try {
                let temp_8_2 = [];
                let buckets_8 =
                  responses0.aggregations.statistical_granularity.buckets;
                let length_8 = buckets_8.length;
                let i_8;
                temp_8_2.push("联通");
                for (i_8 = 0; i_8 < length_8; i_8++) {
                  temp_8_2.push(
                    (
                      buckets_8[i_8].open_num.value /
                      buckets_8[i_8].new_num.value
                    ).toFixed(2)
                  );
                }
                // console.log("~~~~~~~~~~~!!!!!!temp_8_2");
                // console.log(temp_8_2);
                Vue.set(vm.everyPowerActivityData.data, 2, temp_8_2);
              } catch (error) {
                console.log(error);
                Vue.set(vm.everyPowerActivityData.data, 2, []);
              }
              // /////////////// 直播收视行为分析 responses 2  row11 上  lt
              // 结构同 分month - single：yd lt dx
              // weekLiveViewUserData  onlive_user_num
              // weekLiveViewTimesData  onlive_freq
              // weekliveViewDurationData onlive_dur
              let buckets_10;
              let length_10;
              let i_10;
              try {
                buckets_10 =
                  responses2.aggregations.statistical_granularity.buckets;
                length_10 = buckets_10.length;
                let onlive_dur_yd = [];
                let onlive_usernum_yd = [];
                let onlive_freq_yd = [];

                setTimeout(function () {
                  for (i_10 = 0; i_10 < length_10; i_10++) {
                    onlive_usernum_yd.push(
                      buckets_10[i_10].onlive_user_num.value
                    );
                    onlive_freq_yd.push(buckets_10[i_10].onlive_freq.value);
                    onlive_dur_yd.push(buckets_10[i_10].onlive_dur.value);
                  }
                  for (i_10 = 0; i_10 < length_10; i_10++) {
                    Vue.set(vm.weekLiveViewUserData.content[i_10].data, 1, {
                      value: onlive_usernum_yd[i_10],
                      name: "联通"
                    });
                    Vue.set(vm.weekLiveViewTimesData.content[i_10].data, 1, {
                      value: onlive_freq_yd[i_10],
                      name: "联通"
                    });
                    Vue.set(vm.weekliveViewDurationData.content[i_10].data, 1, {
                      value: onlive_dur_yd[i_10],
                      name: "联通"
                    });
                  }
                  console.log("■■■■■■■■■■■■■■■■■■■■■■■■■");
                  console.log(vm.weekLiveViewUserData);
                  console.log(vm.weekLiveViewTimesData);
                  console.log(vm.weekliveViewDurationData);
                }, 1000);  // 移动延时 1 // 联通/电信延时 2
              } catch (error) {
                console.log(error);
                for (i_10 = 0; i_10 < length_10; i_10++) {
                  onlive_usernum_yd.push(
                    0
                  );
                  onlive_freq_yd.push(0);
                  onlive_dur_yd.push(0);
                }
                for (i_10 = 0; i_10 < length_10; i_10++) {

                  Vue.set(vm.weekLiveViewUserData.content[i_10].data, 1, {
                    value: onlive_usernum_yd[i_10],
                    name: "联通"
                  });
                  Vue.set(vm.weekLiveViewTimesData.content[i_10].data, 1, {
                    value: onlive_freq_yd[i_10],
                    name: "联通"
                  });
                  Vue.set(vm.weekliveViewDurationData.content[i_10].data, 1, {
                    value: onlive_dur_yd[i_10],
                    name: "联通"
                  });
                }
                // vm.weekLiveViewUserData.content = [];
                // vm.weekLiveViewTimesData.content = [];
                // vm.weekliveViewDurationData.content = [];
              }

              // /////////////////// 本地直播及轮播频道用户收视行为分析 row13 left lt
              // 结构类似 row12
              try {
                let buckets_13 =
                  responses5.aggregations.statistical_granularity.buckets;
                let length_13 = buckets_13.length; // 默认两月 - 2
                let i_13;
                let temp_data_13_un = [];

                temp_data_13_un.push(["product", "本月", "上月"]);

                let top20_length_13 = 20;
                if (buckets_13[0].channel.buckets.length < 20) {
                  top20_length_13 = buckets_13[0].channel.buckets.length;
                }
                for (i_13 = 0; i_13 < top20_length_13; i_13++) {
                  temp_data_13_un.push([]);
                }
                let month_index_current = length_13 - 1;
                // if (length_13 == 1) {
                // month_index_current = 0;
                // }
                // 本月
                for (i_13 = 0; i_13 < top20_length_13; i_13++) {
                  // 一
                  Vue.set(
                    temp_data_13_un[top20_length_13 - i_13],
                    0,
                    buckets_13[month_index_current].channel.buckets[i_13].key
                  );
                  Vue.set(
                    temp_data_13_un[top20_length_13 - i_13],
                    1,
                    commonTools.returnFloat_2(
                      buckets_13[month_index_current].channel.buckets[i_13]
                        .onlive_user_num.value / 10000
                    )
                  );
                }
                // ////// 上月
                if (length_13 > 1) {
                  let buckets_child_13_2 =
                    responses5.aggregations.statistical_granularity.buckets[
                      length_13 - 2
                    ].channel.buckets;
                  let top20_length_13_week2_all = buckets_child_13_2.length; // n个
                  let i_13_2;
                  function Return_KeyValue_13_un(key) {
                    let value;
                    for (
                      i_13_2 = 0;
                      i_13_2 < top20_length_13_week2_all;
                      i_13_2++
                    ) {
                      if (buckets_child_13_2[i_13_2].key == key) {
                        value = commonTools.returnFloat_2(
                          buckets_child_13_2[i_13_2].onlive_user_num.value /
                          10000
                        );
                        break;
                      }
                    }
                    return value;
                  }
                  // 遍历 本月（先）top 15的key
                  for (i_13 = 0; i_13 < top20_length_13; i_13++) {
                    Vue.set(
                      temp_data_13_un[top20_length_13 - i_13],
                      2,
                      Return_KeyValue_13_un(
                        temp_data_13_un[top20_length_13 - i_13][0]
                      )
                    );
                  }
                }
                vm.unicornLiveViewerData.data = temp_data_13_un;
              } catch (error) {
                console.log(error);
                vm.unicornLiveViewerData.data = [];
              }
            }
            if (type == "dx") {
              console.log("电信 单运营商一月分天", tempOperatorArr);
              console.log(response.data.responses);

              let vm = this;
              let single_day_data = response.data.responses;

              //G+TV本月每日用户发展数据  //每月日新增在册用户数
              let day_new_num_data =
                single_day_data[0].aggregations.statistical_granularity.buckets;
              day_new_num_data.forEach((value, index) => {
                Vue.set(
                  vm.everyDayUserData.data[3],
                  index + 1,
                  Number((value.new_num.value / 1000).toFixed(2))
                );
              });

              // /////////////// 直播收视行为分析 responses 2  row11 上  dx
              // 结构同 分month - single：yd lt dx
              // weekLiveViewUserData  onlive_user_num
              // weekLiveViewTimesData  onlive_freq
              // weekliveViewDurationData onlive_dur
              let buckets_10;
              let length_10;
              let i_10;
              let onlive_dur_yd = [];
              let onlive_usernum_yd = [];
              let onlive_freq_yd = [];
              try {
                buckets_10 =
                  responses2.aggregations.statistical_granularity.buckets;
                length_10 = buckets_10.length;
                onlive_dur_yd = [];
                onlive_usernum_yd = [];
                onlive_freq_yd = [];

                setTimeout(function () {
                  for (i_10 = 0; i_10 < length_10; i_10++) {
                    onlive_usernum_yd.push(
                      buckets_10[i_10].onlive_user_num.value
                    );
                    onlive_freq_yd.push(buckets_10[i_10].onlive_freq.value);
                    onlive_dur_yd.push(buckets_10[i_10].onlive_dur.value);

                    Vue.set(vm.weekLiveViewUserData.content[i_10].data, 2, {
                      value: onlive_usernum_yd[i_10],
                      name: "电信"
                    });
                    Vue.set(vm.weekLiveViewTimesData.content[i_10].data, 2, {
                      value: onlive_freq_yd[i_10],
                      name: "电信"
                    });
                    Vue.set(vm.weekliveViewDurationData.content[i_10].data, 2, {
                      value: onlive_dur_yd[i_10],
                      name: "电信"
                    });
                  }
                  console.log("■■■■■■■■■■■■■■■■■■■■■■■■■");
                  console.log(vm.weekLiveViewUserData);
                  console.log(vm.weekLiveViewTimesData);
                  console.log(vm.weekliveViewDurationData);
                }, 1000);  // 移动延时 1 // 联通/电信延时 2
              } catch (error) {
                console.log(error);
                onlive_dur_yd = [];
                onlive_usernum_yd = [];
                onlive_freq_yd = [];
                for (i_10 = 0; i_10 < length_10; i_10++) {
                  onlive_usernum_yd.push(
                    buckets_10[i_10].onlive_user_num.value
                  );
                  onlive_freq_yd.push(buckets_10[i_10].onlive_freq.value);
                  onlive_dur_yd.push(buckets_10[i_10].onlive_dur.value);
                }
                for (i_10 = 0; i_10 < length_10; i_10++) {
                  Vue.set(vm.weekLiveViewUserData.content[i_10].data, 2, {
                    value: onlive_usernum_yd[i_10],
                    name: "电信"
                  });
                  Vue.set(vm.weekLiveViewTimesData.content[i_10].data, 2, {
                    value: onlive_freq_yd[i_10],
                    name: "电信"
                  });
                  Vue.set(vm.weekliveViewDurationData.content[i_10].data, 2, {
                    value: onlive_dur_yd[i_10],
                    name: "电信"
                  });
                }
                // vm.weekLiveViewUserData.content = [];
                // vm.weekLiveViewTimesData.content = [];
                // vm.weekliveViewDurationData.content = [];
              }

              // /////////////////// 本地直播及轮播频道用户收视行为分析 row13 left dx
              // 结构类似 row12
              try {
                let buckets_13 =
                  responses5.aggregations.statistical_granularity.buckets;
                let length_13 = buckets_13.length; // 默认两月 - 2
                let i_13;
                let temp_data_13_un = [];

                temp_data_13_un.push(["product", "本月", "上月"]);

                let top20_length_13 = 20;
                if (buckets_13[0].channel.buckets.length < 20) {
                  top20_length_13 = buckets_13[0].channel.buckets.length;
                }
                for (i_13 = 0; i_13 < top20_length_13; i_13++) {
                  temp_data_13_un.push([]);
                }
                let month_index_current = length_13 - 1;
                // if (length_13 == 1) {
                // month_index_current = 0;
                // }
                // 本月
                for (i_13 = 0; i_13 < top20_length_13; i_13++) {
                  // 一
                  Vue.set(
                    temp_data_13_un[top20_length_13 - i_13],
                    0,
                    buckets_13[month_index_current].channel.buckets[i_13].key
                  );
                  Vue.set(
                    temp_data_13_un[top20_length_13 - i_13],
                    1,
                    commonTools.returnFloat_2(
                      buckets_13[month_index_current].channel.buckets[i_13]
                        .onlive_user_num.value / 10000
                    )
                  );
                }
                // ////// 上月
                if (length_13 > 1) {
                  let buckets_child_13_2 =
                    responses5.aggregations.statistical_granularity.buckets[
                      length_13 - 2
                    ].channel.buckets;
                  let top20_length_13_week2_all = buckets_child_13_2.length; // n个
                  let i_13_2;
                  function Return_KeyValue_13_un(key) {
                    let value;
                    for (
                      i_13_2 = 0;
                      i_13_2 < top20_length_13_week2_all;
                      i_13_2++
                    ) {
                      if (buckets_child_13_2[i_13_2].key == key) {
                        value = commonTools.returnFloat_2(
                          buckets_child_13_2[i_13_2].onlive_user_num.value /
                          10000
                        );
                        break;
                      }
                    }
                    return value;
                  }
                  // 遍历 本月（先）top 15的key
                  for (i_13 = 0; i_13 < top20_length_13; i_13++) {
                    Vue.set(
                      temp_data_13_un[top20_length_13 - i_13],
                      2,
                      Return_KeyValue_13_un(
                        temp_data_13_un[top20_length_13 - i_13][0]
                      )
                    );
                  }
                }

                vm.telecomLiveViewerData.data = temp_data_13_un;
              } catch (error) {
                console.log(error);
                vm.telecomLiveViewerData.data = [];
              }
            }

            // //////////////////// 日开机活跃数据  row8 responses0 -- everyPowerActivityData 3
            try {
              let temp_8_3 = [];
              let buckets_8 =
                responses0.aggregations.statistical_granularity.buckets;
              let length_8 = buckets_8.length;
              let i_8;
              temp_8_3.push("电信");
              for (i_8 = 0; i_8 < length_8; i_8++) {
                temp_8_3.push(
                  (
                    buckets_8[i_8].open_num.value / buckets_8[i_8].new_num.value
                  ).toFixed(2)
                );
              }
              // console.log("~~~~~~~~~~~!!!!!!temp_8_3");
              // console.log(temp_8_3);
              Vue.set(vm.everyPowerActivityData.data, 3, temp_8_3);
            } catch (error) {
              console.log(error);
              Vue.set(vm.everyPowerActivityData.data, 3, []);
            }
          }
        })
        .catch(error => {
          console.info(error);
        });
    },

    //点击锚点实现左侧滚动
    goAnchor(selector) {
      let scrollDiv = document.querySelector(".monthly_report_body"); //外层滚动容器元素
      var anchor = document.querySelector(selector); // 参数为要跳转到的元素id
      scrollDiv.scrollTop = anchor.offsetTop;
      $(".monthly_nav a").on("click", function () {
        $(this)
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      });
    }
  },
  data() {
    return {
      //G+TV用户发展情况数据
      G_TVUserData: {
        title: "G+TV用户发展情况",
        id: "G_TVUseroVerview",
        color: ["#5B9BD4", "#FF6123"],
        data: [
          // ["product", "4月", "5月", "6月", "7月"],
          // ["在册用户数(万户）", 144.4, 146.4, 169.6, 191.6],
          // ["新增在册用户数（万户）", 26.7, 16.4, 25.0, 23.8]
        ]
      },

      // 各州市7月新增在册用户数对比（万户）
      NewUserComparisonData: {
        title: "各州市近几月新增在册用户数对比（万户）",
        id: "newUserComparison",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4", "#FFC000"],
        data: [
          // ["product", "4月", "5月", "6月", "7月"],
          // ["安顺", 2.0, 1.0, 1.6, 1.7],
          // ["黔西南", 1.9, 1.2, 1.5, 1.8],
          // ["六盘水", 2.3, 2.3, 1.7, 2.3],
          // ["铜仁", 2.9, 1.5, 2.2, 2.3],
          // ["黔东南", 3.6, 1.2, 2.1, 2.5],
          // ["黔南", 2.9, 1.8, 2.6, 2.4],
          // ["毕节", 2.5, 2.0, 2.7, 2.8],
          // ["遵义", 4.9, 2.9, 5.0, 4.0],
          // ["贵阳", 4.1, 2.7, 5.3, 5.0]
        ]
      },

      //在册用户总数数据
      registeredUsersData: {
        title: "在册用户总数（百万户）",
        id: "registeredUsers_UVMR",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4"],
        data: [
          ["运营商"],
          ["移动"],
          ["联通"],
          ["电信"]
          // ["product", "4月", "5月", "6月", "7月"],
          // ["移动", 82.2, 83.4, 94.7, 103.6],
          // ["联通", 35.8, 35.9, 36.9, 38.0],
          // ["电信", 26.1, 27.0, 36.9, 49.7]
        ]
      },

      // 月新增在册用户对比
      monthNewRegUserData: {
        title: "月新增在册用户对比（万户）",
        id: "monthNewRegUser_UVMR",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4"],
        data: [
          ["运营商"],
          ["移动"],
          ["联通"],
          ["电信"]
          // ["product", "4月", "5月", "6月", "7月"],
          // ["移动", 82.2, 83.4, 94.7, 103.6],
          // ["联通", 35.8, 35.9, 36.9, 38.0],
          // ["电信", 26.1, 27.0, 36.9, 49.7]
        ]
      },

      // 月销户用户对比
      monthCancellationUserData: {
        title: "月销户用户对比（万户）",
        id: "monthCancellationUser_UVMR",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4"],
        data: [
          ["运营商"],
          ["移动"],
          ["联通"],
          ["电信"]
          // ["product", "4月", "5月", "6月", "7月"],
          // ["移动", 82.2, 83.4, 94.7, 103.6],
          // ["联通", 35.8, 35.9, 36.9, 38.0],
          // ["电信", 26.1, 27.0, 36.9, 49.7]
        ]
      },

      // G+TV7月分地区用户发展数据概览
      G_TVRegionUserData: {
        // title: "本月各市州新增在册用户数（万户）",
        id: "G_TVRegionUser",
        color: ["#EC7C30", "#FFC000", "#6FAC46"],
        data: [
          ["运营商"],
          ["移动"],
          ["联通"],
          ["电信"]
          // ["product", "贵阳", "遵义", "毕节", "黔南", "铜仁", "六盘水", "黔东南", "安顺", "黔西南"],
          // ["移动", 1.7, 1.8, 1.1, 0.9, 0.9, 0.8, 1.2, 0.8, 0.9],
          // ["联通", 0.4, 0.3, 0.2, 0.1, 0.1, 0.8, 0.1, 0.2, 0.1],
          // ["电信", 2.9, 1.9, 1.5, 1.4, 1.2, 0.8, 0.8, 0.7, 0.6]
        ]
      },

      // 7月每周新增在册用户数
      weekNewUserData: {
        title: "每周新增在册用户数（万户）",
        id: "weekNewUser",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4"],
        data: [
          ["运营商", "", "", "", ""],
          ["移动"],
          ["联通"],
          ["电信"]
          // ["product", "7月第一周", "7月第二周", "7月第三周", "7月第四周"],
          // ["移动", 1.6, 2.2, 2.7, 3.0],
          // ["联通", 0.4, 0.4, 0.3, 0.3],
          // ["电信", 2.1, 2.8, 2.8, 3.2]
        ]
      },

      // 移动侧本月各市州新增在册用户数（千户）
      mobileNewUserData: {
        // title: "移动侧各市州新增在册用户数（千户）",
        title: "移动侧各市州新增在册用户数（千户）",
        id: "mobileNewUser",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4", "#FFC000"],
        data: [
          // ["时间", "7月第一周", "7月第二周", "7月第三周", "7月第四周"],
          // ["安顺", 1.6, 2.0, 2.5, 2.0],
          // ["黔西南", 1.9, 1.8, 2.3, 2.1],
          // ["铜仁", 1.3, 2.2, 2.3, 2.1],
          // ["黔南", 1.5, 2.0, 3.2, 3.6],
          // ["毕节", 1.7, 2.2, 2.8, 3.6],
          // ["黔东南", 1.5, 2.0, 3.4, 3.6],
          // ["贵阳", 2.7, 3.6, 4.2, 5.1],
          // ["遵义", 2.5, 3.9, 4.7, 5.3],
          // ["六盘水", 7.5, 7.5, 7.5, 2.8]
        ]
      },

      // 联通侧本月各市州新增在册用户数（千户）
      unicornNewUserData: {
        title: "联通侧各市州新增在册用户数（千户）",
        id: "unicornNewUser",
        color: ["#EC7C30", "#FFC000", "#6FAC46", "#9E470E"],
        data: [
          // ["时间", "7月第一周", "7月第二周", "7月第三周", "7月第四周"],
          // ["安顺", 1.6, 2.0, 2.5, 2.0],
          // ["黔西南", 1.9, 1.8, 2.3, 2.1],
          // ["铜仁", 1.3, 2.2, 2.3, 2.1],
          // ["黔南", 1.5, 2.0, 3.2, 3.6],
          // ["毕节", 1.7, 2.2, 2.8, 3.6],
          // ["黔东南", 1.5, 2.0, 3.4, 3.6],
          // ["贵阳", 2.7, 3.6, 4.2, 5.1],
          // ["遵义", 2.5, 3.9, 4.7, 5.3],
          // ["六盘水", 7.5, 7.5, 7.5, 2.8]
        ]
      },
      // 电信侧本月各市州新增在册用户数（千户）
      telecomNewUserData: {
        title: "电信侧各市州新增在册用户数（千户）",
        id: "telecomNewUser",
        color: ["#6FAC46", "#4471C4", "#FFC000", "#43682B"],
        data: [
          // ["时间", "7月第一周", "7月第二周", "7月第三周", "7月第四周"],
          // ["安顺", 1.6, 2.0, 2.5, 2.0],
          // ["黔西南", 1.9, 1.8, 2.3, 2.1],
          // ["铜仁", 1.3, 2.2, 2.3, 2.1],
          // ["黔南", 1.5, 2.0, 3.2, 3.6],
          // ["毕节", 1.7, 2.2, 2.8, 3.6],
          // ["黔东南", 1.5, 2.0, 3.4, 3.6],
          // ["贵阳", 2.7, 3.6, 4.2, 5.1],
          // ["遵义", 2.5, 3.9, 4.7, 5.3],
          // ["六盘水", 7.5, 7.5, 7.5, 2.8]
        ]
      },
      // 联通表格数据  (暂时未用到)
      unicornTableData: [
        {
          name: "",
          data1: "黔东南",
          data2: "黔南",
          data3: "黔西南",
          data4: "铜仁",
          data5: "毕节",
          data6: "安顺",
          data7: "遵义",
          data8: "贵阳",
          data9: "六盘水"
        },
        {
          name: "7月第一周",
          data1: 0.1,
          data2: 0.3,
          data3: 0.3,
          data4: 0.3,
          data5: 0.3,
          data6: 0.5,
          data7: 0.7,
          data8: 0.9,
          data9: 7.5
        },
        {
          name: "7月第二周",
          data1: 0.1,
          data2: 0.2,
          data3: 0.3,
          data4: 0.3,
          data5: 0.4,
          data6: 0.4,
          data7: 0.6,
          data8: 0.9,
          data9: 7.5
        },
        {
          name: "7月第三周",
          data1: 0.1,
          data2: 0.2,
          data3: 0.3,
          data4: 0.3,
          data5: 0.4,
          data6: 0.4,
          data7: 0.6,
          data8: 0.9,
          data9: 7.5
        },
        {
          name: "7月第四周",
          data1: 0.1,
          data2: 0.3,
          data3: 0.3,
          data4: 0.3,
          data5: 0.3,
          data6: 0.5,
          data7: 0.7,
          data8: 0.9,
          data9: 7.5
        }
      ],

      // G+TV7月每日用户发展数据
      everyDayUserData: {
        // title: "7月日新增在册用户数（千户）",
        title: "",
        id: "everyDayUser",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4", "#FFC000"],
        data: [
          ["运营商"],
          ["移动"],
          ["联通"],
          ["电信"]
          // [
          //   "product",
          //   "7月1日", "7月2日", "7月3日", "7月4日", "7月5日", "7月6日", "7月7日", "7月8日", "7月9日", "7月10日",
          //   "7月11日", "7月12日", "7月13日", "7月14日", "7月15日", "7月16日", "7月17日", "7月18日", "7月19日", "7月20日",
          //   "7月21日", "7月22日", "7月23日", "7月24日", "7月25日", "7月26日", "7月27日", "7月28日", "7月29日", "7月30日"
          // ],
          // [
          //   "移动",
          //   1.7, 1.8, 1.1, 0.9, 0.8, 1.2, 0.8, 0.9, 1.2, 1.7,
          //   1.8, 1.1, 0.9, 0.9, 0.8, 1.2, 0.8, 0.9, 1.2, 1.7,
          //   1.8, 1.1, 0.9, 0.9, 0.8, 1.2, 0.8, 0.9, 5.6
          // ],
          // [
          //   "联通",
          //   0.4, 0.3, 0.2, 0.1, 0.8, 0.1, 0.2, 0.1, 0.8, 0.4,
          //   0.3, 0.2, 0.1, 0.1, .8, 0.1, 0.2, 0.1, 0.8, 0.4,
          //   0.3, 0.2, 0.1, 0.1, 0.8, 0.1, 0.2, 0.1, 0.7
          // ],
          // [
          //   "电信",
          //   2.9, 1.9, 1.5, 1.4, 1.2, 0.8, 0.7, 0.6, 0.9, 2.9,
          //   1.9, 1.5, 1.4, 1.2, 0.8, 0.8, 0.7, 0.6, 0.9, 2.9,
          //   1.9, 1.5, 1.4, 1.2, 0.8, 0.8, .7, 0.6, 5.4
          // ],
          // [
          //   "线性（移动）",
          //   2.0, 2.2, 2.4, 2.6, 3.0, 3.2, 3.4, 3.6, 3.8, 4.0,
          //   4.2, 4.4, 4.6, 4.8, 5.0, 5.2, 5.4, 5.5, 5.7, 5.8,
          //   5.9, 6.0, 6.2, 6.4, 6.6, 6.8, 7.0, 7.2, 7.4
          // ]
        ]
      },

      //开机活跃数据
      //移动、电信、联通侧月开机活跃率数据
      monthPowerActivityData: {
        title: "移动、电信、联通侧月开机活跃率",
        id: "monthPowerActivity",
        color: ["#5B9BD4", "#FFC000", "#A4A4A4", "#D48265"],
        data: [
          ["name"],
          ["移动"],
          ["联通"],
          ["电信"],
          ["总开机率"]
          // ["product", "4月", "5月", "6月", "7月"],
          // ["移动", 82.2, 83.4, 94.7, 89.6],
          // ["联通", 35.8, 35.9, 36.9, 38.0],
          // ["电信", 26.1, 27.0, 36.9, 49.7],
          // ["总开机率", 58.8, 61.9, 59.7, 56.1]
        ]
      },
      //各市州7月开机活跃率
      areaPowerActivityData: {
        // title: "各市州7月开机活跃率",
        title: "",
        id: "areaPowerActivity",
        color: ["#5B9BD4", "#FFC000", "#A4A4A4", "#D48265"],
        data: [
          ["name"],
          ["移动"],
          ["联通"],
          ["电信"],
          ["总开机活跃率"]
          // ["product","贵阳","遵义","六盘水","铜仁","黔南","安顺","毕节","黔东南","黔西南"],
          // ["移动", 82.2, 83.4, 94.7, 89.6, 82.2, 83.4, 94.7, 89.6, 83.4],
          // ["联通", 35.8, 35.9, 36.9, 38.0, 35.8, 35.9, 36.9, 38.0, 35.8],
          // ["电信", 26.1, 27.0, 36.9, 49.7, 26.1, 27.0, 36.9, 49.7, 27.0],
          // ["总开机活跃率", 58.8, 61.9, 59.7, 56.1, 58.8, 61.9, 59.7, 56.1, 61.9]
        ]
      },

      // 日开机活跃数据
      everyPowerActivityData: {
        title: "日开机活跃率",
        id: "everyPowerActivity",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4", "#FFC000"],
        data: [
          // [
          //   "product",
          //   "7月1日",
          //   "7月2日",
          //   "7月3日",
          //   "7月4日",
          //   "7月5日",
          //   "7月6日",
          //   "7月7日",
          //   "7月8日",
          //   "7月9日",
          //   "7月10日",
          //   "7月11日",
          //   "7月12日",
          //   "7月13日",
          //   "7月14日",
          //   "7月15日",
          //   "7月16日",
          //   "7月17日",
          //   "7月18日",
          //   "7月19日",
          //   "7月20日",
          //   "7月21日",
          //   "7月22日",
          //   "7月23日",
          //   "7月24日",
          //   "7月25日",
          //   "7月26日",
          //   "7月27日",
          //   "7月28日",
          //   "7月29日",
          //   "7月30日"
          // ],
          // [
          //   "移动",
          //   1.7,
          //   1.8,
          //   1.1,
          //   0.9,
          //   0.8,
          //   1.2,
          //   0.8,
          //   0.9,
          //   1.2,
          //   1.7,
          //   1.8,
          //   1.1,
          //   0.9,
          //   0.9,
          //   0.8,
          //   1.2,
          //   0.8,
          //   0.9,
          //   1.2,
          //   1.7,
          //   1.8,
          //   1.1,
          //   0.9,
          //   0.9,
          //   0.8,
          //   1.2,
          //   0.8,
          //   0.9,
          //   5.6
          // ],
          // [
          //   "联通",
          //   0.4,
          //   0.3,
          //   0.2,
          //   0.1,
          //   0.8,
          //   0.1,
          //   0.2,
          //   0.1,
          //   0.8,
          //   0.4,
          //   0.3,
          //   0.2,
          //   0.1,
          //   0.1,
          //   0.8,
          //   0.1,
          //   0.2,
          //   0.1,
          //   0.8,
          //   0.4,
          //   0.3,
          //   0.2,
          //   0.1,
          //   0.1,
          //   0.8,
          //   0.1,
          //   0.2,
          //   0.1,
          //   0.7
          // ],
          // [
          //   "电信",
          //   2.9,
          //   1.9,
          //   1.5,
          //   1.4,
          //   1.2,
          //   0.8,
          //   0.7,
          //   0.6,
          //   0.9,
          //   2.9,
          //   1.9,
          //   1.5,
          //   1.4,
          //   1.2,
          //   0.8,
          //   0.8,
          //   0.7,
          //   0.6,
          //   0.9,
          //   2.9,
          //   1.9,
          //   1.5,
          //   1.4,
          //   1.2,
          //   0.8,
          //   0.8,
          //   0.7,
          //   0.6,
          //   5.4
          // ],
          // [
          //   "总开机活跃",
          //   2.0,
          //   2.2,
          //   2.4,
          //   2.6,
          //   3.0,
          //   3.2,
          //   3.4,
          //   3.6,
          //   3.8,
          //   4.0,
          //   4.2,
          //   4.4,
          //   4.6,
          //   4.8,
          //   5.0,
          //   5.2,
          //   5.4,
          //   5.5,
          //   5.7,
          //   5.8,
          //   5.9,
          //   6.0,
          //   6.2,
          //   6.4,
          //   6.6,
          //   6.8,
          //   7.0,
          //   7.2,
          //   7.4
          // ]
        ]
      },

      //7月三大基础功能使用用户占比
      usingTheUser: {
        title: "月三大基础功能使用用户占比",
        id: "usingTheUser",
        color: ["#B4CFA8", "#6FAC46", "#5B8E39"],
        content: [
          // {
          //   title: "7月三大基础功能使用用户占比",
          //   data: [
          //     { value: 535, name: "直播" },
          //     { value: 410, name: "回看" },
          //     { value: 348, name: "点播" }
          //   ]
          // }
          // {
          //   title: "6月三大基础功能使用用户占比",
          //   data: [
          //     { value: 535, name: "直播" },
          //     { value: 410, name: "回看" },
          //     { value: 348, name: "点播" }
          //   ]
          // },
          // {
          //   title: "5月三大基础功能使用用户占比",
          //   data: [
          //     { value: 535, name: "直播" },
          //     { value: 410, name: "回看" },
          //     { value: 348, name: "点播" }
          //   ]
          // },
          // {
          //   title: "4月三大基础功能使用用户占比",
          //   data: [
          //     { value: 535, name: "直播" },
          //     { value: 410, name: "回看" },
          //     { value: 348, name: "点播" }
          //   ]
          // }
        ]
      },

      //7月三大基础功能使用次数占比
      usingTheTime: {
        title: "月三大基础功能使用次数占比",
        id: "usingTheTimes",
        color: ["#878787", "#A4A4A4", "#CACACA"],
        content: [
          // {
          // title: "7月三大基础功能使用次数占比",
          // data: [
          // { value: 535, name: "直播" },
          // { value: 410, name: "回看" },
          // { value: 348, name: "点播" }
          // ]
          // }
          // {
          //   title: "6月三大基础功能使用次数占比",
          //   data: [
          //     { value: 535, name: "直播" },
          //     { value: 410, name: "回看" },
          //     { value: 348, name: "点播" }
          //   ]
          // },
          // {
          //   title: "5月三大基础功能使用次数占比",
          //   data: [
          //     { value: 535, name: "直播" },
          //     { value: 410, name: "回看" },
          //     { value: 348, name: "点播" }
          //   ]
          // },
          // {
          //   title: "4月三大基础功能使用次数占比",
          //   data: [
          //     { value: 535, name: "直播" },
          //     { value: 410, name: "回看" },
          //     { value: 348, name: "点播" }
          //   ]
          // }
        ]
      },
      //7月三大基础功能使用次数占比
      usingTheDuration: {
        title: "月三大基础功能使用时长占比",
        id: "usingTheDuration",
        color: ["#D29E00", "#FFC000", "#FFD99D"],
        content: [
          // {
          // title: "7月三大基础功能使用时长占比",
          // data: [
          // { value: 535, name: "直播" },
          // { value: 410, name: "回看" },
          // { value: 348, name: "点播" }
          // ]
          // }
          // {
          //   title: "6月三大基础功能使用时长占比",
          //   data: [
          //     { value: 535, name: "直播" },
          //     { value: 410, name: "回看" },
          //     { value: 348, name: "点播" }
          //   ]
          // },
          // {
          //   title: "5月三大基础功能使用时长占比",
          //   data: [
          //     { value: 535, name: "直播" },
          //     { value: 410, name: "回看" },
          //     { value: 348, name: "点播" }
          //   ]
          // },
          // {
          //   title: "4月三大基础功能使用时长占比",
          //   data: [
          //     { value: 535, name: "直播" },
          //     { value: 410, name: "回看" },
          //     { value: 348, name: "点播" }
          //   ]
          // }
        ]
      },

      // 7月总体收视数据
      monthlyTotalViewingData: {
        title: "月总体收视数据",
        id: "monthlyTotalViewing",
        color: ["#EC7C30", "#A4A4A4", "#5B9BD4"],
        data: [
          // ["product", "4月", "5月", "6月", "7月"],
          // ["观看次数（百万次）", 103.1, 102.2, 90.5, 104.8],
          // ["观看时长数（百万小时）", 99.3, 110.0, 106.2, 126.9],
          // ["观看用户数（百万户）", 1.4, 1.6, 1.5, 1.7]
        ]
      },

      // 直播观看时长数据
      liveViewingDurationData: {
        title: "月直播观看时长数据",
        id: "liveViewingDuration",
        color: ["#F4B8A3", "#EC7C30", "#C46627"],
        content: [
          // {
          //   title: "7月直播观看时长数据",
          //   data: [
          //     { value: 535, name: "移动" },
          //     { value: 410, name: "联通" },
          //     { value: 348, name: "电信" }
          //   ]
          // }
          // {
          //   title: "6月直播观看时长数据",
          //   data: [
          //     { value: 535, name: "移动" },
          //     { value: 410, name: "联通" },
          //     { value: 348, name: "电信" }
          //   ]
          // },
          // {
          //   title: "5月直播观看时长数据",
          //   data: [
          //     { value: 535, name: "移动" },
          //     { value: 410, name: "联通" },
          //     { value: 348, name: "电信" }
          //   ]
          // },
          // {
          //   title: "4月直播观看时长数据",
          //   data: [
          //     { value: 535, name: "移动" },
          //     { value: 410, name: "联通" },
          //     { value: 348, name: "电信" }
          //   ]
          // }
        ]
      },
      //直播观看用户数据
      liveViewingUserData: {
        title: "月直播观看用户数据",
        id: "liveViewingUser",
        color: ["#878787", "#A4A4A4", "#CACACA"],
        content: [
          // {
          // title: "7月直播观看用户数据",
          // data: [
          // { value: 535, name: "移动" },
          // { value: 410, name: "联通" },
          // { value: 348, name: "电信" }
          // ]
          // }
          // {
          //   title: "6月直播观看用户数据",
          //   data: [
          //     { value: 535, name: "移动" },
          //     { value: 410, name: "联通" },
          //     { value: 348, name: "电信" }
          //   ]
          // },
          // {
          //   title: "5月直播观看用户数据",
          //   data: [
          //     { value: 535, name: "移动" },
          //     { value: 410, name: "联通" },
          //     { value: 348, name: "电信" }
          //   ]
          // },
          // {
          //   title: "4月直播观看用户数据",
          //   data: [
          //     { value: 535, name: "移动" },
          //     { value: 410, name: "联通" },
          //     { value: 348, name: "电信" }
          //   ]
          // }
        ]
      },
      // 直播观看次数数据
      liveViewingTimesData: {
        title: "月直播观看次数数据",
        id: "liveViewingTimes",
        color: ["#D29E00", "#FFC000", "#FFD99F"],
        content: [
          // {
          // title: "7月直播观看次数数据",
          // data: [
          // { value: 535, name: "移动" },
          // { value: 410, name: "联通" },
          // { value: 348, name: "电信" }
          // ]
          // }
          // {
          //   title: "6月直播观看次数数据",
          //   data: [
          //     { value: 535, name: "移动" },
          //     { value: 410, name: "联通" },
          //     { value: 348, name: "电信" }
          //   ]
          // },
          // {
          //   title: "5月直播观看次数数据",
          //   data: [
          //     { value: 535, name: "移动" },
          //     { value: 410, name: "联通" },
          //     { value: 348, name: "电信" }
          //   ]
          // },
          // {
          //   title: "4月直播观看次数数据",
          //   data: [
          //     { value: 535, name: "移动" },
          //     { value: 410, name: "联通" },
          //     { value: 348, name: "电信" }
          //   ]
          // }
        ]
      },
      // 7月直播收视数据
      monthlyTotalViewingData2: {
        title: "月直播收视数据",
        id: "monthlyTotalViewing2",
        color: ["#EC7C30", "#A4A4A4", "#5B9BD4"],
        data: [
          // ["product", "4月", "5月", "6月", "7月"],
          // ["直播观看次数（百万次）", 103.1, 102.2, 90.5, 104.8],
          // ["直播观看时长数（百万小时）", 99.3, 110.0, 106.2, 126.9],
          // ["直播观看用户数（百万户）", 0.6, 0.7, 0.7, 0.8]
        ]
      },

      // 7月各周直播收视用户数
      weekLiveViewUserData: {
        title: "当月各周直播收视用户数",
        id: "weekLiveViewUser",
        color: ["#F4B8A3", "#EC7C30", "#C46627"],
        content: [
          // {
          //   title: "7月第1周直播收视用户数",
          //   data: [
          //     { value: 535, name: "移动" },
          //     { value: 410, name: "联通" },
          //     { value: 348, name: "电信" }
          //   ]
          // },
          // {
          //   title: "7月第2周直播收视用户数",
          //   data: [
          //     { value: 535, name: "移动" },
          //     { value: 410, name: "联通" },
          //     { value: 348, name: "电信" }
          //   ]
          // },
          // {
          //   title: "7月第3周直播收视用户数",
          //   data: [
          //     { value: 535, name: "移动" },
          //     { value: 410, name: "联通" },
          //     { value: 348, name: "电信" }
          //   ]
          // },
          // {
          //   title: "7月第4周直播收视用户数",
          //   data: [
          //     { value: 535, name: "移动" },
          //     { value: 410, name: "联通" },
          //     { value: 348, name: "电信" }
          //   ]
          // }
        ]
      },
      //7月各周直播收视次数
      weekLiveViewTimesData: {
        title: "当月各周直播收视次数",
        id: "weekLiveViewTimes",
        color: ["#5B8E39", "#6FAC46", "#B4CFA8"],
        content: [
          // {
          //   title: "7月第1周直播收视次数",
          //   data: [
          //     { value: 535, name: "移动" },
          //     { value: 410, name: "联通" },
          //     { value: 348, name: "电信" }
          //   ]
          // },
          // {
          //   title: "7月第2周直播收视次数",
          //   data: [
          //     { value: 535, name: "移动" },
          //     { value: 410, name: "联通" },
          //     { value: 348, name: "电信" }
          //   ]
          // },
          // {
          //   title: "7月第3周直播收视次数",
          //   data: [
          //     { value: 535, name: "移动" },
          //     { value: 410, name: "联通" },
          //     { value: 348, name: "电信" }
          //   ]
          // },
          // {
          //   title: "7月第4周直播收视次数",
          //   data: [
          //     { value: 535, name: "移动" },
          //     { value: 410, name: "联通" },
          //     { value: 348, name: "电信" }
          //   ]
          // }
        ]
      },
      //7月各周直播收视时长
      weekliveViewDurationData: {
        title: "当月各周直播收视时长",
        id: "weekliveViewDuration",
        color: ["#D29E00", "#FFC000", "#FFD99F"],
        content: [
          // {
          //   title: "7月第1周直播收视时长",
          //   data: [
          //     { value: 535, name: "移动" },
          //     { value: 410, name: "联通" },
          //     { value: 348, name: "电信" }
          //   ]
          // },
          // {
          //   title: "7月第2周直播收视时长",
          //   data: [
          //     { value: 535, name: "移动" },
          //     { value: 410, name: "联通" },
          //     { value: 348, name: "电信" }
          //   ]
          // },
          // {
          //   title: "7月第3周直播收视时长",
          //   data: [
          //     { value: 535, name: "移动" },
          //     { value: 410, name: "联通" },
          //     { value: 348, name: "电信" }
          //   ]
          // },
          // {
          //   title: "7月第4周直播收视时长",
          //   data: [
          //     { value: 535, name: "移动" },
          //     { value: 410, name: "联通" },
          //     { value: 348, name: "电信" }
          //   ]
          // }
        ]
      },
      // 7月各周直播收视数据
      weekliveViewingData: {
        title: "当月各周直播收视数据",
        id: "weekliveViewing",
        color: ["#EC7C30", "#A4A4A4", "#5B9BD4"],
        data: [
          // ["product", "7月第一周", "7月第二周", "7月第三周", "7月第四周"],
          // ["直播观看次数（十万次）", 103.1, 102.2, 90.5, 104.8],
          // ["直播观看时长数（十万小时）", 99.3, 110.0, 106.2, 126.9],
          // ["直播观看用户数（十万户）", 0.6, 0.7, 0.7, 0.8]
        ]
      },

      //直播频道观看用户数排名（万户）
      liveViewerData: {
        title: "直播频道观看用户数排名（万户）",
        id: "liveViewer",
        color: ["#5b9bd4", "#A4A4A4"],
        data: [
          // ["product", "本月", "上月"],
          // ["山东卫视（高清）", 18.8, 18.0],
          // ["江苏卫视（高清", 19.1, 17.5],
          // ["CCTV-2 财经", 20.0, 18.6],
          // ["贵州-7 经济频道", 20.0, 17.2],
          // ["贵州-6 科教健康频道", 20.2, 16.7],
          // ["CCTV-15 音乐", 17.9, 16.1],
          // ["浙江卫视（高清）", 18.8, 18.0],
          // ["CCTV-4 中文国际（高清）", 19.1, 17.5],
          // ["CCTV-10 科教", 20.0, 18.6],
          // ["CCTV-7 军事农业", 20.0, 17.2],
          // ["CCTV-14 少儿", 20.2, 16.7],
          // ["贵州-5 法制频道", 20.4, 17.3],
          // ["CCTV-12 社会与法", 20.8, 17.6],
          // ["湖南卫视（高清）", 20.8, 17.2],
          // ["CCTV-13 新闻", 21.4, 19.0],
          // ["贵州-4 大众生活频道", 24.9, 32.0],
          // ["贵州-3 影视文艺频道", 26.2, 22.3],
          // ["CCTV-1 综合（高清）", 37.2, 28.7],
          // ["贵州-2 公共频道", 38.1, 34.6],
          // ["贵州卫视（高清）", 56.3, 37.1]
        ]
      },
      //直播频道观看次数排名
      liveViewTimesData: {
        title: "直播频道观看次数排名(百万次)",
        id: "liveViewTimes",
        color: ["#EC7C30", "#FFC000"],
        data: [
          // ["product", "本月", "上月"],
          // ["山东卫视（高清）", 18.8, 18.0],
          // ["江苏卫视（高清", 19.1, 17.5],
          // ["CCTV-2 财经", 20.0, 18.6],
          // ["贵州-7 经济频道", 20.0, 17.2],
          // ["贵州-6 科教健康频道", 20.2, 16.7],
          // ["CCTV-15 音乐", 17.9, 16.1],
          // ["浙江卫视（高清）", 18.8, 18.0],
          // ["CCTV-4 中文国际（高清）", 19.1, 17.5],
          // ["CCTV-10 科教", 20.0, 18.6],
          // ["CCTV-7 军事农业", 20.0, 17.2],
          // ["CCTV-14 少儿", 20.2, 16.7],
          // ["贵州-5 法制频道", 20.4, 17.3],
          // ["CCTV-12 社会与法", 20.8, 17.6],
          // ["湖南卫视（高清）", 20.8, 17.2],
          // ["CCTV-13 新闻", 21.4, 19.0],
          // ["贵州-4 大众生活频道", 24.9, 32.0],
          // ["贵州-3 影视文艺频道", 26.2, 22.3],
          // ["CCTV-1 综合（高清）", 37.2, 28.7],
          // ["贵州-2 公共频道", 38.1, 34.6],
          // ["贵州卫视（高清）", 56.3, 37.1]
        ]
      },
      //直播频道观看次数排名
      liveViewTimesData2: {
        title: "直播频道观看次数排名（百万小时）",
        id: "liveViewTimes2",
        color: ["#E2AA00", "#FFDE85"],
        data: [
          // ["product", "本月", "上月"],
          // ["山东卫视（高清）", 18.8, 18.0],
          // ["江苏卫视（高清", 19.1, 17.5],
          // ["CCTV-2 财经", 20.0, 18.6],
          // ["贵州-7 经济频道", 20.0, 17.2],
          // ["贵州-6 科教健康频道", 20.2, 16.7],
          // ["CCTV-15 音乐", 17.9, 16.1],
          // ["浙江卫视（高清）", 18.8, 18.0],
          // ["CCTV-4 中文国际（高清）", 19.1, 17.5],
          // ["CCTV-10 科教", 20.0, 18.6],
          // ["CCTV-7 军事农业", 20.0, 17.2],
          // ["CCTV-14 少儿", 20.2, 16.7],
          // ["贵州-5 法制频道", 20.4, 17.3],
          // ["CCTV-12 社会与法", 20.8, 17.6],
          // ["湖南卫视（高清）", 20.8, 17.2],
          // ["CCTV-13 新闻", 21.4, 19.0],
          // ["贵州-4 大众生活频道", 24.9, 32.0],
          // ["贵州-3 影视文艺频道", 26.2, 22.3],
          // ["CCTV-1 综合（高清）", 37.2, 28.7],
          // ["贵州-2 公共频道", 38.1, 34.6],
          // ["贵州卫视（高清）", 56.3, 37.1]
        ]
      },

      //直播频道观看用户数排名（移动）
      mobileLiveViewerData: {
        title: "直播频道观看用户数排名（移动）",
        id: "mobileLiveViewer",
        color: ["#5b9bd4", "#A4A4A4"],
        data: [
          // ["product", "本月", "上月"],
          // ["山东卫视（高清）", 18.8, 18.0],
          // ["江苏卫视（高清", 19.1, 17.5],
          // ["CCTV-2 财经", 20.0, 18.6],
          // ["贵州-7 经济频道", 20.0, 17.2],
          // ["贵州-6 科教健康频道", 20.2, 16.7],
          // ["CCTV-15 音乐", 17.9, 16.1],
          // ["浙江卫视（高清）", 18.8, 18.0],
          // ["CCTV-4 中文国际（高清）", 19.1, 17.5],
          // ["CCTV-10 科教", 20.0, 18.6],
          // ["CCTV-7 军事农业", 20.0, 17.2],
          // ["CCTV-14 少儿", 20.2, 16.7],
          // ["贵州-5 法制频道", 20.4, 17.3],
          // ["CCTV-12 社会与法", 20.8, 17.6],
          // ["湖南卫视（高清）", 20.8, 17.2],
          // ["CCTV-13 新闻", 21.4, 19.0],
          // ["贵州-4 大众生活频道", 24.9, 32.0],
          // ["贵州-3 影视文艺频道", 26.2, 22.3],
          // ["CCTV-1 综合（高清）", 37.2, 28.7],
          // ["贵州-2 公共频道", 38.1, 34.6],
          // ["贵州卫视（高清）", 56.3, 37.1]
        ]
      },
      //直播频道观看用户数排名（联通）
      unicornLiveViewerData: {
        title: "直播频道观看用户数排名（联通）",
        id: "unicornLiveViewer",
        color: ["#EC7C30", "#FFC000"],
        data: [
          // ["product", "本月", "上月"],
          // ["山东卫视（高清）", 18.8, 18.0],
          // ["江苏卫视（高清", 19.1, 17.5],
          // ["CCTV-2 财经", 20.0, 18.6],
          // ["贵州-7 经济频道", 20.0, 17.2],
          // ["贵州-6 科教健康频道", 20.2, 16.7],
          // ["CCTV-15 音乐", 17.9, 16.1],
          // ["浙江卫视（高清）", 18.8, 18.0],
          // ["CCTV-4 中文国际（高清）", 19.1, 17.5],
          // ["CCTV-10 科教", 20.0, 18.6],
          // ["CCTV-7 军事农业", 20.0, 17.2],
          // ["CCTV-14 少儿", 20.2, 16.7],
          // ["贵州-5 法制频道", 20.4, 17.3],
          // ["CCTV-12 社会与法", 20.8, 17.6],
          // ["湖南卫视（高清）", 20.8, 17.2],
          // ["CCTV-13 新闻", 21.4, 19.0],
          // ["贵州-4 大众生活频道", 24.9, 32.0],
          // ["贵州-3 影视文艺频道", 26.2, 22.3],
          // ["CCTV-1 综合（高清）", 37.2, 28.7],
          // ["贵州-2 公共频道", 38.1, 34.6],
          // ["贵州卫视（高清）", 56.3, 37.1]
        ]
      },
      //直播频道观看用户数排名（电信）
      telecomLiveViewerData: {
        title: "直播频道观看用户数排名（电信）",
        id: "telecomLiveViewer",
        color: ["#E2AA00", "#FFDE85"],
        data: [
          // ["product", "本月", "上月"],
          // ["山东卫视（高清）", 18.8, 18.0],
          // ["江苏卫视（高清", 19.1, 17.5],
          // ["CCTV-2 财经", 20.0, 18.6],
          // ["贵州-7 经济频道", 20.0, 17.2],
          // ["贵州-6 科教健康频道", 20.2, 16.7],
          // ["CCTV-15 音乐", 17.9, 16.1],
          // ["浙江卫视（高清）", 18.8, 18.0],
          // ["CCTV-4 中文国际（高清）", 19.1, 17.5],
          // ["CCTV-10 科教", 20.0, 18.6],
          // ["CCTV-7 军事农业", 20.0, 17.2],
          // ["CCTV-14 少儿", 20.2, 16.7],
          // ["贵州-5 法制频道", 20.4, 17.3],
          // ["CCTV-12 社会与法", 20.8, 17.6],
          // ["湖南卫视（高清）", 20.8, 17.2],
          // ["CCTV-13 新闻", 21.4, 19.0],
          // ["贵州-4 大众生活频道", 24.9, 32.0],
          // ["贵州-3 影视文艺频道", 26.2, 22.3],
          // ["CCTV-1 综合（高清）", 37.2, 28.7],
          // ["贵州-2 公共频道", 38.1, 34.6],
          // ["贵州卫视（高清）", 56.3, 37.1]
        ]
      },

      // 7月点播收视数据
      monthlyDemandViewingData: {
        title: "月点播收视数据",
        id: "monthlyDemandViewing",
        color: ["#FFC000", "#6FAC46", "#EC7C30"],
        data: [
          // ["product", "4月", "5月", "6月", "7月"],
          // ["点播观看次数", 103.1, 102.2, 90.5, 104.8],
          // ["点播观看时长数", 99.3, 110.0, 106.2, 126.9],
          // ["点播观看用户数", 1.4, 1.6, 1.5, 1.7]
        ]
      },
      // 7月各周点播收视数据
      weekDemandViewingData: {
        title: "当月各周点播收视数据",
        id: "weekDemandViewing",
        color: ["#EC7C30", "#A4A4A4", "#5B9BD4"],
        data: [
          // ["product", "4月", "5月", "6月", "7月"],
          // ["直播收视次数", 103.1, 102.2, 90.5, 104.8],
          // ["直播收视时长", 99.3, 110.0, 106.2, 126.9],
          // ["直播收视用户数", 1.4, 1.6, 1.5, 1.7]
        ]
      },

      //点播用户数
      demandUserNumData: {
        title: "点播用户数（万户）",
        id: "demandUserNum",
        color: ["#EC7C30", "#FFC000", "#6FAC46"],
        data: [
          // ["product", "本月", "上月", "环比"],
          // ["少儿", 43300, 13563, 11.38],
          // ["电影", 83000, 16457, 2.21],
          // ["游戏", 76000, 17096, 13.33],
          // ["热剧", 66000, 57896, 28.84],
          // ["动漫", 86080, 17096, 12.68],
          // ["综艺", 56000, 27896, 32.26],
          // ["纪实", 36000, 15896, 19.31],
          // ["音乐", 26000, 12896, 36.71],
          // ["体育", 66000, 7896, 1.22],
          // ["资讯", 16000, 17896, 13.33]
        ]
      },
      //点播次数环比
      demandTimesData: {
        title: "点播次数环比（万次）",
        id: "demandTimes",
        color: ["#D29E00", "#FFC000", "#FFD99F"],
        data: [
          // ["product", "本月", "上月", "环比"],
          // ["少儿", 43300, 13563, 11.38],
          // ["电影", 83000, 16457, 2.21],
          // ["游戏", 76000, 17096, 13.33],
          // ["热剧", 66000, 57896, 28.84],
          // ["动漫", 86080, 17096, 12.68],
          // ["综艺", 56000, 27896, 32.26],
          // ["纪实", 36000, 15896, 19.31],
          // ["音乐", 26000, 12896, 36.71],
          // ["体育", 66000, 7896, 1.22],
          // ["资讯", 16000, 17896, 13.33]
        ]
      },
      //点播时长环比
      demandDurationData: {
        title: "点播时长环比（万小时）",
        id: "demandDuration",
        color: ["#ACC5E4", "#5B9BD4", "#497EAF"],
        data: [
          // ["product", "本月", "上月", "环比"],
          // ["少儿", 43300, 13563, 11.38],
          // ["电影", 83000, 16457, 2.21],
          // ["游戏", 76000, 17096, 13.33],
          // ["热剧", 66000, 57896, 28.84],
          // ["动漫", 86080, 17096, 12.68],
          // ["综艺", 56000, 27896, 32.26],
          // ["纪实", 36000, 15896, 19.31],
          // ["音乐", 26000, 12896, 36.71],
          // ["体育", 66000, 7896, 1.22],
          // ["资讯", 16000, 17896, 13.33]
        ]
      },

      //主要栏目页面点击用户数对比
      programPageClickUserData: {
        title: "主要栏目页面点击用户数对比",
        id: "programPageClickUser",
        color: ["#EC7C30", "#FFC000", "#6FAC46"],
        data: [
          // ["product", "本月", "上月", "环比"],
          // ["少儿", 43300, 13563, 11.38],
          // ["电影", 83000, 16457, 2.21],
          // ["游戏", 76000, 17096, 13.33],
          // ["热剧", 66000, 57896, 28.84],
          // ["动漫", 86080, 17096, 12.68],
          // ["综艺", 56000, 27896, 32.26],
          // ["纪实", 36000, 15896, 19.31],
          // ["音乐", 26000, 12896, 36.71],
          // ["体育", 66000, 7896, 1.22],
          // ["资讯", 16000, 17896, 13.33]
        ]
      },
      //主要栏目页面点击次数对比
      programPageClickNumData: {
        title: "主要栏目页面点击次数对比",
        id: "programPageClickNum",
        color: ["#ACC5E4", "#5B9BD4", "#497EAF"],
        data: [
          // ["product", "本月", "上月", "环比"],
          // ["少儿", 43300, 13563, 11.38],
          // ["电影", 83000, 16457, 2.21],
          // ["游戏", 76000, 17096, 13.33],
          // ["热剧", 66000, 57896, 28.84],
          // ["动漫", 86080, 17096, 12.68],
          // ["综艺", 56000, 27896, 32.26],
          // ["纪实", 36000, 15896, 19.31],
          // ["音乐", 26000, 12896, 36.71],
          // ["体育", 66000, 7896, 1.22],
          // ["资讯", 16000, 17896, 13.33]
        ]
      },

      // 点播用户数对比（万户）
      demandUserNumData2: {
        title: "点播用户数对比（万户）",
        id: "demandUserNum2",
        color: ["#5B9BD4", "#EC7C30"],
        data: [
          // ["product", "本月", "上月"],
          // ["（电视剧）封神演义", 18.8, 18.0],
          // ["（电视剧）新白娘子传奇2019", 19.1, 17.5],
          // ["（电影）飞驰人生", 20.0, 18.6],
          // ["（电视剧）青春斗", 20.0, 17.2],
          // ["（少儿）猪猪侠之竞球小英雄第二部", 20.2, 16.7],
          // ["（少儿）熊出没之探险日记 第二季", 17.9, 16.1],
          // ["（电视剧）招摇", 18.8, 18.0],
          // ["（电视剧）黄河英雄", 19.1, 17.5],
          // ["（电视剧）夜空中最闪亮的星", 20.0, 18.6],
          // ["（综艺）王牌对王牌 第四季", 20.0, 17.2],
          // ["（少儿）汪汪队立大功 第四季", 20.2, 16.7],
          // ["（电影）狂暴凶狮", 20.4, 17.3],
          // ["（通灵妃）通灵妃", 20.8, 17.6],
          // ["湖南卫视（高清）", 20.8, 17.2],
          // ["（电影）绿毛怪格林奇（原声版）", 21.4, 19.0],
          // ["（电影）钢铁飞龙之奥特曼崛起", 24.9, 32.0],
          // ["（少儿）宝宝巴士启蒙音乐剧之汽车家族", 26.2, 22.3],
          // ["（电视剧）推手", 37.2, 28.7],
          // ["（动漫）猫妖的诱惑", 38.1, 34.6],
          // ["（少儿）假面骑士时王", 56.3, 37.1]
        ]
      },
      // 点播次数对比（十万次）
      demandTimesData2: {
        title: "点播次数对比（十万次）",
        id: "demandTimes2",
        color: ["#EC7C30", "#FFC000"],
        data: [
          // ["product", "本月", "上月"],
          // ["（电视剧）封神演义", 18.8, 18.0],
          // ["（电视剧）新白娘子传奇2019", 19.1, 17.5],
          // ["（电影）飞驰人生", 20.0, 18.6],
          // ["（电视剧）青春斗", 20.0, 17.2],
          // ["（少儿）猪猪侠之竞球小英雄第二部", 20.2, 16.7],
          // ["（少儿）熊出没之探险日记 第二季", 17.9, 16.1],
          // ["（电视剧）招摇", 18.8, 18.0],
          // ["（电视剧）黄河英雄", 19.1, 17.5],
          // ["（电视剧）夜空中最闪亮的星", 20.0, 18.6],
          // ["（综艺）王牌对王牌 第四季", 20.0, 17.2],
          // ["（少儿）汪汪队立大功 第四季", 20.2, 16.7],
          // ["（电影）狂暴凶狮", 20.4, 17.3],
          // ["（通灵妃）通灵妃", 20.8, 17.6],
          // ["湖南卫视（高清）", 20.8, 17.2],
          // ["（电影）绿毛怪格林奇（原声版）", 21.4, 19.0],
          // ["（电影）钢铁飞龙之奥特曼崛起", 24.9, 32.0],
          // ["（少儿）宝宝巴士启蒙音乐剧之汽车家族", 26.2, 22.3],
          // ["（电视剧）推手", 37.2, 28.7],
          // ["（动漫）猫妖的诱惑", 38.1, 34.6],
          // ["（少儿）假面骑士时王", 56.3, 37.1]
        ]
      },
      // 点播时长对比（十万小时）
      demandDurationData2: {
        title: "点播时长对比（十万小时）",
        id: "demandDuration2",
        color: ["#6FAC46", "#4471C4"],
        data: [
          // ["product", "本月", "上月"],
          // ["（电视剧）封神演义", 18.8, 18.0],
          // ["（电视剧）新白娘子传奇2019", 19.1, 17.5],
          // ["（电影）飞驰人生", 20.0, 18.6],
          // ["（电视剧）青春斗", 20.0, 17.2],
          // ["（少儿）猪猪侠之竞球小英雄第二部", 20.2, 16.7],
          // ["（少儿）熊出没之探险日记 第二季", 17.9, 16.1],
          // ["（电视剧）招摇", 18.8, 18.0],
          // ["（电视剧）黄河英雄", 19.1, 17.5],
          // ["（电视剧）夜空中最闪亮的星", 20.0, 18.6],
          // ["（综艺）王牌对王牌 第四季", 20.0, 17.2],
          // ["（少儿）汪汪队立大功 第四季", 20.2, 16.7],
          // ["（电影）狂暴凶狮", 20.4, 17.3],
          // ["（通灵妃）通灵妃", 20.8, 17.6],
          // ["湖南卫视（高清）", 20.8, 17.2],
          // ["（电影）绿毛怪格林奇（原声版）", 21.4, 19.0],
          // ["（电影）钢铁飞龙之奥特曼崛起", 24.9, 32.0],
          // ["（少儿）宝宝巴士启蒙音乐剧之汽车家族", 26.2, 22.3],
          // ["（电视剧）推手", 37.2, 28.7],
          // ["（动漫）猫妖的诱惑", 38.1, 34.6],
          // ["（少儿）假面骑士时王", 56.3, 37.1]
        ]
      },

      // 付费用户收视行为分析开始
      // 新增在册用户转化对比
      newAddUserData: {
        title: "新增在册用户转化对比",
        id: "newAddUser",
        color: ["#EC7C30", "#FFC000", "#6FAC46"],
        data: [
          // ["product", "新增付费用户数", "新增在册用户数", "新增在册用户转化率"],
          // ["6月", 6300, 13563, 6.1],
          // ["7月", 8000, 16457, 5.7]
        ]
      },
      // 引导用户付费内容排名
      payingUserData: {
        title: "引导用户付费内容排名",
        id: "payingUser",
        color: ["#5B9BD4"],
        data: [
          //   ["product", "本月"],
          //   ["（电视剧）封神演义", 78],
          //   ["（电视剧）新白娘子传奇2019", 91],
          //   ["（电影）飞驰人生", 98],
          //   ["（电视剧）青春斗", 101],
          //   ["（少儿）猪猪侠之竞球小英雄第二部", 150],
          //   ["（少儿）熊出没之探险日记 第二季", 179],
          //   ["（电视剧）招摇", 188],
          //   ["（电视剧）黄河英雄", 191],
          //   ["（电视剧）夜空中最闪亮的星", 285],
          //   ["（综艺）王牌对王牌 第四季", 302],
          //   ["（少儿）汪汪队立大功 第四季", 340],
          //   ["（电影）狂暴凶狮", 396],
          //   ["（通灵妃）通灵妃", 400],
          //   ["湖南卫视（高清）", 452],
          //   ["（电影）绿毛怪格林奇（原声版）", 465],
          //   ["（电影）钢铁飞龙之奥特曼崛起", 480],
          //   ["（少儿）宝宝巴士启蒙音乐剧之汽车家族", 506],
          //   ["（电视剧）推手", 527],
          //   ["（动漫）猫妖的诱惑", 538],
          //   ["（少儿）假面骑士时王", 560]
        ]
      },

      // 本土原创节目收视行为分析
      // 原创节目7月点播数据
      monthDemandData: {
        title: "原创节目月点播数据",
        id: "monthDemand",
        color: ["#ccc", "#5B9BD4"],
        data: [
          // ["product", "6月", "7月"],
          // ["点播用户数（万户）", 4330, 13563],
          // ["点播次数（万次）", 8300, 16457],
          // ["点播时长（万小时）", 4330, 16457]
        ]
      },
      // 原创节目7月点播次数走势（次)
      originalProgramsDemandData: {
        title: "原创节目月点播次数走势（次)",
        id: "originalProgramsDemand",
        color: ["#5B9BD4", "#EC7C30 ", "#FFC000"],
        data: [
          // ["product", "第一周", "第二周", "第三周", "第四周"],
          // ["移动", 20140, 22370, 22800, 19200],
          // ["联通", 2140, 12170, 2580, 2400],
          // ["电信", 1400, 1700, 1800, 2000]
          [],
          [],
          [],
          []
        ]
      },

      // 重点专题及活动数据概览
      //移动
      mobileKeyProjectData: {
        title: "移动",
        id: "mobileKeyProject",
        color: ["#5B9BD4"],
        data: [
          // ["product", "点击次数（万次）"],
          // ["（电视剧）封神演义", 78],
          // ["（电视剧）新白娘子传奇2019", 91],
          // ["（电影）飞驰人生", 98],
          // ["（电视剧）青春斗", 101],
          // ["（少儿）猪猪侠之竞球小英雄第二部", 150],
          // ["（少儿）熊出没之探险日记 第二季", 179],
          // ["（电视剧）招摇", 188],
          // ["（电视剧）黄河英雄", 191],
          // ["（电视剧）夜空中最闪亮的星", 285],
          // ["（综艺）王牌对王牌 第四季", 302],
          // ["（少儿）汪汪队立大功 第四季", 340],
          // ["（电影）狂暴凶狮", 396],
          // ["（通灵妃）通灵妃", 400],
          // ["湖南卫视（高清）", 452],
          // ["（电影）绿毛怪格林奇（原声版）", 465],
          // ["（电影）钢铁飞龙之奥特曼崛起", 480],
          // ["（少儿）宝宝巴士启蒙音乐剧之汽车家族", 506],
          // ["（电视剧）推手", 527],
          // ["（动漫）猫妖的诱惑", 538],
          // ["（少儿）假面骑士时王", 560]
        ]
      },
      // 联通
      unicornKeyProjectData: {
        title: "联通",
        id: "unicornKeyProject",
        color: ["#EC7C30"],
        data: [
          // ["product", "点击次数（万次）"],
          // ["（电视剧）封神演义", 78],
          // ["（电视剧）新白娘子传奇2019", 91],
          // ["（电影）飞驰人生", 98],
          // ["（电视剧）青春斗", 101],
          // ["（少儿）猪猪侠之竞球小英雄第二部", 150],
          // ["（少儿）熊出没之探险日记 第二季", 179],
          // ["（电视剧）招摇", 188],
          // ["（电视剧）黄河英雄", 191],
          // ["（电视剧）夜空中最闪亮的星", 285],
          // ["（综艺）王牌对王牌 第四季", 302],
          // ["（少儿）汪汪队立大功 第四季", 340],
          // ["（电影）狂暴凶狮", 396],
          // ["（通灵妃）通灵妃", 400],
          // ["湖南卫视（高清）", 452],
          // ["（电影）绿毛怪格林奇（原声版）", 465],
          // ["（电影）钢铁飞龙之奥特曼崛起", 480],
          // ["（少儿）宝宝巴士启蒙音乐剧之汽车家族", 506],
          // ["（电视剧）推手", 527],
          // ["（动漫）猫妖的诱惑", 538],
          // ["（少儿）假面骑士时王", 560]
        ]
      },
      // 电信
      telecomKeyProjectData: {
        title: "电信",
        id: "telecomKeyProject",
        color: ["#FFC000"],
        data: [
          // ["product", "点击次数（万次）"],
          // ["（电视剧）封神演义", 78],
          // ["（电视剧）新白娘子传奇2019", 91],
          // ["（电影）飞驰人生", 98],
          // ["（电视剧）青春斗", 101],
          // ["（少儿）猪猪侠之竞球小英雄第二部", 150],
          // ["（少儿）熊出没之探险日记 第二季", 179],
          // ["（电视剧）招摇", 188],
          // ["（电视剧）黄河英雄", 191],
          // ["（电视剧）夜空中最闪亮的星", 285],
          // ["（综艺）王牌对王牌 第四季", 302],
          // ["（少儿）汪汪队立大功 第四季", 340],
          // ["（电影）狂暴凶狮", 396],
          // ["（通灵妃）通灵妃", 400],
          // ["湖南卫视（高清）", 452],
          // ["（电影）绿毛怪格林奇（原声版）", 465],
          // ["（电影）钢铁飞龙之奥特曼崛起", 480],
          // ["（少儿）宝宝巴士启蒙音乐剧之汽车家族", 506],
          // ["（电视剧）推手", 527],
          // ["（动漫）猫妖的诱惑", 538],
          // ["（少儿）假面骑士时王", 560]
        ]
      }
    };
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
.monthly_report_left {
  flex: 1;
  height: 100%;
}
.monthly_report_body {
  height: calc(100% - 50px);
  padding-bottom: 40px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
/*webkit内核*/
.monthly_report_body::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
/*o内核*/
.monthly_report_body .-o-scrollbar {
  -moz-appearance: none !important;
  background: rgba(0, 255, 0, 0) !important;
}
/*IE10,IE11,IE12*/
.monthly_report_body {
  -ms-scroll-chaining: chained;
  -ms-overflow-style: none;
  -ms-content-zooming: zoom;
  -ms-scroll-rails: none;
  -ms-content-zoom-limit-min: 100%;
  -ms-content-zoom-limit-max: 500%;
  -ms-scroll-snap-type: proximity;
  -ms-scroll-snap-points-x: snapList(100%, 200%, 300%, 400%, 500%);
  -ms-overflow-style: none;
  overflow: auto;
}

.monthly_nav {
  width: 220px;
}
.monthly_nav {
  padding-left: 20px;
  text-align: left;
}
.monthly_nav .el-row {
  margin-bottom: 12px;
}
.monthly_nav a {
  font-size: 14px;
  color: #333;
  text-decoration: none;
}
.monthly_nav .avtive_link {
  color: #ff6123;
}

/* G+TV用户发展数据概览开始 */
.G_TV_user_dev_data {
  height: 500px;
  margin-bottom: 14px;
}
/* G+TV用户发展数据概览结束 */

.week_region_data {
  height: 500px;
  margin-bottom: 14px;
}
/* .unicornNewUserChart {
  height: 460px;
} */
.unicornNewUserTable {
  height: 250px;
}
.unicornNewUserTable table.gridtable {
  width: 90%;
  height: 200px;
  margin: 0 auto;
  font-family: verdana, arial, sans-serif;
  font-size: 11px;
  color: #666;
  border-width: 1px;
  border-color: #ccc;
  border-collapse: collapse;
}
.unicornNewUserTable table.gridtable th {
  border-width: 1px;
  padding: 4px 8px;
  border-style: solid;
  border-color: #ccc;
}
.unicornNewUserTable table.gridtable td {
  border-width: 1px;
  padding: 1px 8px;
  border-style: solid;
  border-color: #ccc;
}

/*  */
.everyday_user_develop {
  height: 500px;
  margin-bottom: 14px;
}

/* 整体收视行为分析 */
.analysis_of_viewing {
  height: 990px;
  margin-bottom: 14px;
}
.analysis_of_viewing .analysis_of_viewing1 {
  height: 500px;
}
.analysis_of_viewing1 span,
.analysis_of_viewing2 span,
.live_viewing_data span,
.localityLiveAndCarousel span,
.overall_demand span {
  font-size: 12px;
  color: red;
}
.analysis_of_viewing .analysis_of_viewing2 {
  height: 440px;
  padding-top: 70px;
}

/* 直播收视行为分析开始 */
.live_viewing_data,
.localityLiveAndCarousel {
  height: 830px;
  padding-bottom: 60px;
  margin-bottom: 14px;
}

/* 整体点播收视行为 */
.overall_demand {
  height: 450px;
  padding-bottom: 60px;
  margin-bottom: 14px;
}

.type_program_data {
  height: 500px;
  padding-bottom: 60px;
  margin-bottom: 14px;
}
.paying_user_div {
  height: 800px;
  margin-bottom: 14px;
}
.local_originality {
  height: 400px;
  margin-bottom: 14px;
}
.key_project {
  height: 800px;
  margin-bottom: 30px;
}
</style>
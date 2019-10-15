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
              <span class="title_border_left"></span>G+TV本月分地区用户发展数据概览
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
              <span class="title_border_left"></span>G+TV本月各周用户发展数据
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

import Vue from 'vue'
import { mapGetters } from "vuex";
import {
  users_monthActiveReport_range,
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
  watch: {
    PR_operator(newValue, oldValue) {
      let vm = this;
      setTimeout(function () {
        // vm.api_data_set("mixture", "month"); // mixture - 混合数据类型(单月)
        vm.api_data_set("mixture", "month_range"); // mixture - 混合数据类型（多月）
        vm.api_data_set("mixture", "week"); // mixture - 混合数据类型（每月分周）

      }, 100);
    },
    PR_month(newValue, oldValue) {
      let vm = this;
      console.log("PR_month: " + newValue);
      setTimeout(function () {
        // vm.api_data_set("mixture", "month"); // mixture - 混合数据类型(单月)
        vm.api_data_set("mixture", "month_range"); // mixture - 混合数据类型（多月）
        vm.api_data_set("mixture", "week"); // mixture - 混合数据类型（单月分周）  

        vm.api_data_set("single", "month_range"); // single - 单运营商数据类型（多月）
        vm.api_data_set("single", "week"); // single - 单运营商数据类型（单月分周）
      }, 100);
    }
  },
  computed: {
    ...mapGetters(["PR_operator", "PR_month"]),
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

    // api 数据处理 - by 运营商
    // this.api_data_set("mixture", "month"); // mixture - 混合数据类型（单月）
    this.api_data_set("mixture", "month_range"); // mixture - 混合数据类型（单月）
    this.api_data_set("mixture", "week"); // mixture - 混合数据类型（单月分周）

    this.api_data_set("single", "month_range"); // single - 单独运营商数据类型（by 运营商）多月
    this.api_data_set("single", "week"); // single - 单运营商数据类型（单月分周）
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
          vm.users_monthActiveReport_new("all", temp_operator, datatype, timetype);
          // vm.users_monthActiveReport_range(
          //   "all",
          //   temp_operator,
          //   datatype,
          //   timetype
          // );
        } else {
          let count = vm.PR_operator.length;
          if (count == 3) {
            vm.users_monthActiveReport_new(
              "all",
              vm.PR_operator,
              datatype,
              timetype
            );
            // vm.users_monthActiveReport_range(
            //   "all",
            //   vm.PR_operator,
            //   datatype,
            //   timetype
            // );
          }
          if (count == 1) {
            if (vm.PR_operator.indexOf("移动") > -1) {
              vm.users_monthActiveReport_new("yd", ["移动"], datatype, timetype);
              // vm.users_monthActiveReport_range(
              //   "yd",
              //   ["移动"],
              //   datatype,
              //   timetype
              // );
            }
            if (vm.PR_operator.indexOf("联通") > -1) {
              vm.users_monthActiveReport_new("lt", ["联通"], datatype, timetype);
              // vm.users_monthActiveReport_range(
              //   "lt",
              //   ["联通"],
              //   datatype,
              //   timetype
              // );
            }
            if (vm.PR_operator.indexOf("电信") > -1) {
              vm.users_monthActiveReport_new("dx", ["电信"], datatype, timetype);
              // vm.users_monthActiveReport_range(
              //   "dx",
              //   ["电信"],
              //   datatype,
              //   timetype
              // );
            }
          }
        }
      } else if (datatype == "single") {
        // 单独数据类型 -- 执行三次
        vm.users_monthActiveReport_new("yd", ["移动"], datatype, timetype);
        vm.users_monthActiveReport_new("lt", ["联通"], datatype, timetype);
        vm.users_monthActiveReport_new("dx", ["电信"], datatype, timetype);
        // vm.users_monthActiveReport_range("yd", ["移动"], datatype, timetype);
        // vm.users_monthActiveReport_range("lt", ["联通"], datatype, timetype);
        // vm.users_monthActiveReport_range("dx", ["电信"], datatype, timetype);
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
      let year = temp_time.year
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
        .then((response) => {
          //混合单月数据
          // if (datatype == "mixture" && timetype == "month") {
          //   console.log("混合单月数据", response.data.responses)
          //   let mixture_month_data = response.data.responses
          // }

          //混合多月数据
          if (datatype == "mixture" && timetype == "month_range") {
            console.log("混合多月数据", response.data.responses)
            let vm = this
            let mixture_month_range_data = response.data.responses  //总的混合多月数据

            //G+TV用户发展数据概览
            //G+TV用户发展情况     //
            let registe_and_new_num = mixture_month_range_data[0].aggregations.statistical_granularity.buckets
            let registe_and_new_num_temp = [
              ["product",],
              ["在册用户数(万户）",],
              ["新增在册用户数（万户）",]
            ]
            registe_and_new_num.forEach((value, index) => {
              // console.log("G+TV用户发展情况", value)
              let data_month = commonTools.format_monthToChinese(value.key)
              registe_and_new_num_temp[0].push(data_month)
              registe_and_new_num_temp[1].push((value.register_num.value / 10000).toFixed(1))
              registe_and_new_num_temp[2].push((value.new_num.value / 10000).toFixed(1))
            })
            // console.log("registe_and_new_num_temp", registe_and_new_num_temp)
            vm.G_TVUserData.data = registe_and_new_num_temp

            //各州市本月新增在册用户数
            let new_num_user_comparison = mixture_month_range_data[0].aggregations.ac.buckets
            let new_num_user_temp = [
              ["product",],
              [], [], [], [], [], [], [], [], []
            ]
            new_num_user_comparison.forEach((value, index) => {
              if (value.key != 'other') {
                // console.log(commonTools.acConvert_Single(value.key))
                new_num_user_temp[9 - index].push(commonTools.acConvert_Single(value.key))
                // Vue.set(vm.NewUserComparisonData.data[0], index + 1, commonTools.acConvert_Single(value.key))
                value.statistical_granularity.buckets.forEach((value2, index2) => {
                  // console.log(value2.key, value2.open_num.value)
                  //设置月份（只执行一次）
                  if (index == 0) {
                    let data_month = commonTools.format_monthToChinese(value2.key)
                    new_num_user_temp[0].push(data_month)
                  }
                  new_num_user_temp[9 - index].push((value2.open_num.value / 10000).toFixed(1))
                  // Vue.set(vm.NewUserComparisonData.data[index + 1], index2 + 1, (Number(value2.open_num.value / 10000).toFixed(1)))
                })
              }
            })
            vm.NewUserComparisonData.data = new_num_user_temp

          }
          //混合单月分周数据
          if (datatype == "mixture" && timetype == "week") {
            // console.log("混合单月分周数据", response.data.responses)
          }
          //混合单月多天数据
          if (datatype == "mixture" && timetype == "day") {
            // console.log("混合单月多天数据", response.data.responses)
          }

          //运营商 - 多月
          if (datatype == "single" && timetype == "month_range") {
            // console.log("单个运营商多月数据", response.data.responses)
            if (type == 'yd') {
              console.log("单个运营商多月数据", tempOperatorArr)
              console.log(response.data.responses)

              let vm = this
              let totle_data = response.data.responses
              //G+TV各运营商侧用户发展数据概览   
              let user_develop_data = totle_data[0].aggregations.statistical_granularity.buckets   //register_num
              //数据初始化 (注意：必须初始化)
              vm.registeredUsersData.data = [
                ["product",], ["移动",], ["联通",], ["电信",]
              ];
              vm.monthNewRegUserData.data = [
                ["product",], ["移动",], ["联通",], ["电信",]
              ];
              vm.monthCancellationUserData.data = [
                ["product",], ["移动",], ["联通",], ["电信",]
              ];
              user_develop_data.forEach((value, index) => {
                // console.log(value.key, "在册" + value.register_num.value, "新增" + value.new_num.value, "销户" + value.unsub_user_num.value)
                let data_month = commonTools.format_monthToChinese(value.key)
                Vue.set(vm.registeredUsersData.data[0], index + 1, data_month)
                Vue.set(vm.registeredUsersData.data[1], index + 1, (value.register_num.value / 1000000).toFixed(1))

                //月新增在册用户对比  monthNewRegUserData
                Vue.set(vm.monthNewRegUserData.data[0], index + 1, data_month)
                Vue.set(vm.monthNewRegUserData.data[1], index + 1, (value.new_num.value / 10000).toFixed(1))

                //月销户用户对比  monthCancellationUserData
                Vue.set(vm.monthCancellationUserData.data[0], index + 1, data_month)
                Vue.set(vm.monthCancellationUserData.data[1], index + 1, (value.unsub_user_num.value / 10000).toFixed(1))
              })
              // console.log("vm.monthCancellationUserData.data移动", vm.monthCancellationUserData.data)

              // let temp_data = [];
              // temp_data.push(["product"]);
              // temp_data.push(["移动"]);
              // for (let i_test = 0; i_test < user_develop_data.length; i_test++) { 
              //   Vue.set(temp_data[0], i_test + 1, user_develop_data[i_test].key + '月')
              //   Vue.set(temp_data[1], i_test + 1, (user_develop_data[i_test].unsub_user_num.value / 10000).toFixed(1))
              // }
              // console.log(temp_data);
              // vm.monthCancellationUserData.data = [];
              // vm.monthCancellationUserData.data.push(temp_data[0]);
              // vm.monthCancellationUserData.data.push(temp_data[1]);

              //G+TV本月分地区用户发展数据概览
              //本月各州市新增在册用户数
              let city_new_num_data = totle_data[0].aggregations.ac.buckets
              city_new_num_data.forEach((value, index) => {
                if (value.key != 'other') {
                  // console.log(commonTools.acConvert_Single(value.key))
                  Vue.set(vm.G_TVRegionUserData.data[0], index + 1, commonTools.acConvert_Single(value.key))
                  let length = value.statistical_granularity.buckets.length
                  let new_num_arry = value.statistical_granularity.buckets
                  // console.log(new_num_arry[length - 1].key, new_num_arry[length - 1].new_num.value)
                  Vue.set(vm.G_TVRegionUserData.data[1], index + 1, (Number(new_num_arry[length - 1].new_num.value / 10000).toFixed(1)))
                }
              })

            } else if (type == 'lt') {
              console.log("单个运营商多月数据", tempOperatorArr)
              console.log(response.data.responses)

              let vm = this
              let totle_data = response.data.responses
              //G+TV各运营商侧用户发展数据概览
              let user_develop_data = totle_data[0].aggregations.statistical_granularity.buckets   //register_num
              user_develop_data.forEach((value, index) => {
                // console.log(value.key, "在册" + value.register_num.value, "新增" + value.new_num.value, "销户" + value.unsub_user_num.value)
                let data_month = commonTools.format_monthToChinese(value.key)
                Vue.set(vm.registeredUsersData.data[0], index + 1, data_month)
                Vue.set(vm.registeredUsersData.data[2], index + 1, (value.register_num.value / 1000000).toFixed(1))

                //月新增在册用户对比  monthNewRegUserData
                Vue.set(vm.monthNewRegUserData.data[0], index + 1, data_month)
                Vue.set(vm.monthNewRegUserData.data[2], index + 1, (value.new_num.value / 10000).toFixed(1))

                //月销户用户对比  monthCancellationUserData
                Vue.set(vm.monthCancellationUserData.data[0], index + 1, data_month)
                Vue.set(vm.monthCancellationUserData.data[2], index + 1, (value.unsub_user_num.value / 10000).toFixed(1))
              })
              // console.log("vm.monthCancellationUserData.data联通", vm.monthCancellationUserData.data)

              //G+TV本月分地区用户发展数据概览
              //本月各州市新增在册用户数
              let city_new_num_data = totle_data[0].aggregations.ac.buckets
              city_new_num_data.forEach((value, index) => {
                if (value.key != 'other') {
                  Vue.set(vm.G_TVRegionUserData.data[0], index + 1, commonTools.acConvert_Single(value.key))
                  let length = value.statistical_granularity.buckets.length
                  let new_num_arry = value.statistical_granularity.buckets
                  Vue.set(vm.G_TVRegionUserData.data[2], index + 1, (Number(new_num_arry[length - 1].new_num.value / 10000).toFixed(1)))
                }
              })

            } else if (type == 'dx') {
              console.log("单个运营商多月数据", tempOperatorArr)
              console.log(response.data.responses)

              let vm = this
              let totle_data = response.data.responses
              //G+TV各运营商侧用户发展数据概览
              let user_develop_data = totle_data[0].aggregations.statistical_granularity.buckets   //register_num
              user_develop_data.forEach((value, index) => {
                // console.log(value.key, "在册" + value.register_num.value, "新增" + value.new_num.value, "销户" + value.unsub_user_num.value)
                Vue.set(vm.registeredUsersData.data[3], index + 1, (value.register_num.value / 1000000).toFixed(1))
                //月新增在册用户对比  monthNewRegUserData
                Vue.set(vm.monthNewRegUserData.data[3], index + 1, (value.new_num.value / 10000).toFixed(1))
                //月销户用户对比  monthCancellationUserData
                Vue.set(vm.monthCancellationUserData.data[3], index + 1, (value.unsub_user_num.value / 10000).toFixed(1))
              })
              // console.log("vm.monthCancellationUserData.data电信", vm.monthCancellationUserData.data)

              //G+TV本月分地区用户发展数据概览
              //本月各州市新增在册用户数
              let city_new_num_data = totle_data[0].aggregations.ac.buckets
              city_new_num_data.forEach((value, index) => {
                if (value.key != 'other') {
                  // console.log(commonTools.acConvert_Single(value.key))
                  Vue.set(vm.G_TVRegionUserData.data[0], index + 1, commonTools.acConvert_Single(value.key))
                  let length = value.statistical_granularity.buckets.length
                  let new_num_arry = value.statistical_granularity.buckets
                  Vue.set(vm.G_TVRegionUserData.data[3], index + 1, (Number(new_num_arry[length - 1].new_num.value / 10000).toFixed(1)))
                }
              })
              // console.log("vm.G_TVRegionUserData.data", vm.G_TVRegionUserData.data)

            }
          }

          //运营商 - 一月分周
          if (datatype == "single" && timetype == "week") {
            if (type == 'yd') {
              console.log("单运营商一月分周", tempOperatorArr)
              console.log(response.data.responses)
              let vm = this
              let single_week_data = response.data.responses  //总数据

              //G+TV本月各周用户发展数据
              let week_user_develop = single_week_data[0].aggregations.statistical_granularity.buckets
              //   weekNewUserData: {
                // title: "本月每周新增在册用户数（万户）",
                // id: "weekNewUser",
                // color: ["#5B9BD4", "#EC7C30", "#A4A4A4"],
                // data: [
                //   ["product", "", "", "", ""],
                //   ["移动", ],
                //   ["联通",],
                //   ["电信",]
          // ["product", "7月第一周", "7月第二周", "7月第三周", "7月第四周"],
          // ["移动", 1.6, 2.2, 2.7, 3.0],
          // ["联通", 0.4, 0.4, 0.3, 0.3],
          // ["电信", 2.1, 2.8, 2.8, 3.2]
              week_user_develop.forEach((value, index) => {
                console.log(value.key, value.new_num.value)
              })

            } else if (type == 'lt') {
              console.log("单运营商一月分周", tempOperatorArr)
              console.log(response.data.responses)

            } else if (type == 'dx') {
              console.log("单运营商一月分周", tempOperatorArr)
              console.log(response.data.responses)

            }
          }

        })
        .catch((error) => {
          console.info(error);
        })

    },

    users_monthActiveReport(type, m_PR_operator, datatype, timetype) {
      let vm = this;
      let tempOperatorArr = m_PR_operator;
      let start;
      let end;

      //// 时间引入
      if (
        vm.PR_month == null ||
        vm.PR_month == undefined ||
        vm.PR_month == ""
      ) {
        return;
      }
      // if (timetype == "week") {
      //   start = "26week";
      //   start = "29week";
      // }
      // if (timetype == "month") {
      //   start = "2019-07-01";
      //   end = "2019-07-31";
      // }
      let temp_time = commonTools.split_MonthDays_byDWMMr(vm.PR_month);

      if (timetype == "week") {
        // start = "26week";
        // start = "29week"; // --之前的问题点 - 跨week接不上
        // end = "29week";
        start = temp_time.month_week_start;
        end = temp_time.month_week_end;
      }
      if (timetype == "month") {
        // start = "2019-07-01";
        // end = "2019-07-31";
        start = temp_time.month_day_start;
        end = temp_time.month_day_end;
      }
      let temp = {
        operator: String([tempOperatorArr]),
        start: start,
        end: end // 暂定这一周
      };
      console.log("~~~~~~~~~~~~~~~~~  temp");
      console.log(temp);

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("operator", temp.operator);
      formData.append("start", temp.start);
      formData.append("end", temp.end);

      users_monthActiveReport(formData)
        .then(function (response) {
          if (datatype == "mixture" && timetype == "month") {
            // //////////////////

            //  用户 次数 时长
            let data1 = [];
            let data2 = [];
            let data3 = [];
            let temp1 = [];
            let temp2 = [];
            let temp3 = [];
            // console.log("~~~!!!");
            // console.log(response);
            let bucketsXX =
              response.data.responses[0].aggregations.channel.buckets;
            // console.log(response.data.responses[0].aggregations.channel);
            let lengthXX = bucketsXX.length;
            let iXX;
            data1.push(["product", "本月", "上月"]);
            data2.push(["product", "本月", "上月"]);
            data3.push(["product", "本月", "上月"]);

            for (iXX = 0; iXX < lengthXX; iXX++) {
              temp1 = [];
              temp2 = [];
              temp3 = [];
              temp1.push(bucketsXX[iXX].key);
              temp1.push(bucketsXX[iXX].onlive_user_num.value);
              temp1.push(bucketsXX[iXX].onlive_user_num.value); // ▲▲▲ 临时
              temp2.push(bucketsXX[iXX].key);
              temp2.push(bucketsXX[iXX].onlive_freq.value);
              temp2.push(bucketsXX[iXX].onlive_freq.value); // ▲▲▲ 临时
              temp3.push(bucketsXX[iXX].key);
              temp3.push(bucketsXX[iXX].onlive_dur.value);
              temp3.push(bucketsXX[iXX].onlive_dur.value); // ▲▲▲ 临时
              data1.push(temp1);
              data2.push(temp2);
              data3.push(temp3);
            }

            vm.liveViewerData.data = data1;
            vm.liveViewTimesData.data = data2;
            vm.liveViewTimesData2.data = data3;
            console.log("~~~~~~~~~~~~~~~~~~!@#!@#!#");
            console.log(data1);
            console.log(data2);
            console.log(data3);
          }
          if (datatype == "single" && timetype == "month") {
            if (type == "yd") {
              // //////////////////

              let data1 = [];
              let temp1 = [];
              console.log("~~~!!!11111");
              console.log(response);
              let bucketsXX =
                response.data.responses[0].aggregations.channel.buckets;
              console.log(response.data.responses[0].aggregations.channel);
              let lengthXX = bucketsXX.length;
              let iXX;
              data1.push(["product", "本月", "上月"]);

              for (iXX = 0; iXX < lengthXX; iXX++) {
                temp1 = [];
                temp1.push(bucketsXX[iXX].key);
                temp1.push(bucketsXX[iXX].onlive_user_num.value);
                temp1.push(bucketsXX[iXX].onlive_user_num.value); // ▲▲▲ 临时
                data1.push(temp1);
              }

              vm.mobileLiveViewerData.data = data1;
            }
            if (type == "lt") {
              // //////////////////

              let data1 = [];
              let temp1 = [];
              // console.log("~~~!!!");
              // console.log(response);
              let bucketsXX =
                response.data.responses[0].aggregations.channel.buckets;
              // console.log(response.data.responses[0].aggregations.channel);
              let lengthXX = bucketsXX.length;
              let iXX;
              data1.push(["product", "本月", "上月"]);

              for (iXX = 0; iXX < lengthXX; iXX++) {
                temp1 = [];
                temp1.push(bucketsXX[iXX].key);
                temp1.push(bucketsXX[iXX].onlive_user_num.value);
                temp1.push(bucketsXX[iXX].onlive_user_num.value); // ▲▲▲ 临时
                data1.push(temp1);
              }

              vm.unicornLiveViewerData.data = data1;
            }
            if (type == "dx") {
              // //////////////////

              let data1 = [];
              let temp1 = [];
              // console.log("~~~!!!");
              // console.log(response);
              let bucketsXX =
                response.data.responses[0].aggregations.channel.buckets;
              // console.log(response.data.responses[0].aggregations.channel);
              let lengthXX = bucketsXX.length;
              let iXX;
              data1.push(["product", "本月", "上月"]);

              for (iXX = 0; iXX < lengthXX; iXX++) {
                temp1 = [];
                temp1.push(bucketsXX[iXX].key);
                temp1.push(bucketsXX[iXX].onlive_user_num.value);
                temp1.push(bucketsXX[iXX].onlive_user_num.value); // ▲▲▲ 临时
                data1.push(temp1);
              }
              vm.telecomLiveViewerData.data = data1;
            }
          }

          switch (type) {
            case "all":
              break;
            case "part":
              break;
            case "yd":
              break;
            case "lt":
              break;
            case "dx":
              break;
            default:
              console.log("none!");
          }
        })
        .catch(function (error) {
          console.info(error);
        });
    },
    users_monthActiveReport_range(type, m_PR_operator, datatype, timetype) {
      console.log("users_monthActiveReport_range");
      let vm = this;
      let tempOperatorArr = m_PR_operator;
      let start;
      let end;
      if (timetype == "week") {
        start = "26week";
        start = "29week";
      }
      if (timetype == "month") {
        start = "2019-07-01";
        end = "2019-07-31";
      }
      let temp = {
        operator: String([tempOperatorArr]),
        start: start,
        end: end // 暂定这一周
      };
      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("operator", temp.operator);
      formData.append("start", temp.start);
      formData.append("end", temp.end);

      users_monthActiveReport_range(formData)
        .then(function (response) {
          if (datatype == "mixture" && timetype == "month") {
            // usingTheUser;
            // usingTheTimes;
            // usingTheDuration;
            // 直播onlive =》 回看watch =》 点播demand
            // 用户user 次数freq 时长dur
            let q1_u;
            let q1_f;
            let q1_d;
            let q2_u;
            let q2_f;
            let q2_d;
            let q3_u;
            let q3_f;
            let q3_d;
            console.log("~~~~~~~~~xxx");
            console.log(response);
            console.log(response.data);
            console.log(response.data.responses[0].aggregations.item);
            console.log(
              response.data.responses[0].aggregations.item.buckets[0]
            );
            console.log(
              response.data.responses[0].aggregations.item.buckets[0]
                .onlive_user_num
            );
            q1_u =
              response.data.responses[0].aggregations.item.buckets[0]
                .onlive_user_num.value;
            q1_f =
              response.data.responses[0].aggregations.item.buckets[0]
                .onlive_freq.value;
            q1_d =
              response.data.responses[0].aggregations.item.buckets[0].onlive_dur
                .value;
            console.log("~~~~~~~~~xxx2");

            q2_u =
              response.data.responses[1].aggregations.item.buckets[0]
                .demand_user_num.value;
            q2_f =
              response.data.responses[1].aggregations.item.buckets[0]
                .demand_freq.value;
            q2_d =
              response.data.responses[1].aggregations.item.buckets[0].demand_dur
                .value;
            console.log("~~~~~~~~~xxx3");

            q3_u =
              response.data.responses[2].aggregations.item.buckets[0]
                .watch_user_num.value;
            q3_f =
              response.data.responses[2].aggregations.item.buckets[0].watch_freq
                .value;
            q3_d =
              response.data.responses[2].aggregations.item.buckets[0].watch_dur
                .value;

            vm.usingTheUser.content[0].data = [
              { value: q1_u, name: "直播" },
              { value: q2_u, name: "回看" },
              { value: q3_u, name: "点播" }
            ];
            vm.usingTheTime.content[0].data = [
              { value: q1_f, name: "直播" },
              { value: q2_f, name: "回看" },
              { value: q3_f, name: "点播" }
            ];
            vm.usingTheDuration.content[0].data = [
              { value: q1_d, name: "直播" },
              { value: q2_d, name: "回看" },
              { value: q3_d, name: "点播" }
            ];
            // x 月总体收视数据
            let td2 = [];
            let freq2 = vm.returnFloat(
              (parseFloat(q1_f) + parseFloat(q2_f) + parseFloat(q3_f)) /
              100 /
              10000
            );
            let dur2 = vm.returnFloat(
              (parseFloat(q1_d) + parseFloat(q2_d) + parseFloat(q3_d)) /
              100 /
              10000 /
              3600
            ); // 观看时长计时 - 秒 =》百万小时
            let user_num2 = vm.returnFloat(
              (parseFloat(q1_u) + parseFloat(q2_u) + parseFloat(q3_u)) /
              100 /
              10000
            );
            td2.push(["product", "7月"]);
            td2.push(["观看次数（百万次）", freq2]);
            td2.push(["观看时长数（百万小时）", dur2]);
            td2.push(["观看用户数（百万户）", user_num2]);
            vm.monthlyTotalViewingData.data = td2;
            console.log(vm.monthlyTotalViewingData);

            /////////// 直播 （freq dur user_num）
            // x 月直播收视数据
            vm.monthlyTotalViewingData2.data = [
              ["product", "7月"],
              [
                "直播观看次数（百万次）",
                vm.returnFloat(parseFloat(q1_f) / 100 / 10000)
              ],
              [
                "直播观看时长数（百万小时）",
                vm.returnFloat(parseFloat(q1_d) / 100 / 10000)
              ],
              [
                "直播观看用户数（百万户）",
                vm.returnFloat(parseFloat(q1_u) / 100 / 10000)
              ]
            ];
          }
          if (datatype == "single" && timetype == "month") {
            // /////////// liveViewingDurationData  liveViewingUserData liveViewingTimesData

            if (type == "yd") {
              let onlive_dur_yd;
              let onlive_usernum_yd;
              let onlive_freq_yd;
              onlive_usernum_yd =
                response.data.responses[0].aggregations.item.buckets[0]
                  .onlive_user_num.value;
              onlive_freq_yd =
                response.data.responses[0].aggregations.item.buckets[0]
                  .onlive_freq.value;
              onlive_dur_yd =
                response.data.responses[0].aggregations.item.buckets[0]
                  .onlive_dur.value;
              vm.liveViewingDurationData.content[0].data.push({
                value: onlive_dur_yd,
                name: "移动"
              });
              vm.liveViewingUserData.content[0].data.push({
                value: onlive_usernum_yd,
                name: "移动"
              });
              vm.liveViewingTimesData.content[0].data.push({
                value: onlive_freq_yd,
                name: "移动"
              });
            }
            if (type == "lt") {
              let onlive_dur_lt;
              let onlive_usernum_lt;
              let onlive_freq_lt;
              onlive_usernum_lt =
                response.data.responses[0].aggregations.item.buckets[0]
                  .onlive_user_num.value;
              onlive_freq_lt =
                response.data.responses[0].aggregations.item.buckets[0]
                  .onlive_freq.value;
              onlive_dur_lt =
                response.data.responses[0].aggregations.item.buckets[0]
                  .onlive_dur.value;
              vm.liveViewingDurationData.content[0].data.push({
                value: onlive_dur_lt,
                name: "联通"
              });
              vm.liveViewingUserData.content[0].data.push({
                value: onlive_usernum_lt,
                name: "联通"
              });
              vm.liveViewingTimesData.content[0].data.push({
                value: onlive_freq_lt,
                name: "联通"
              });
            }
            if (type == "dx") {
              let onlive_dur_dx;
              let onlive_usernum_dx;
              let onlive_freq_dx;
              onlive_usernum_dx =
                response.data.responses[0].aggregations.item.buckets[0]
                  .onlive_user_num.value;
              onlive_freq_dx =
                response.data.responses[0].aggregations.item.buckets[0]
                  .onlive_freq.value;
              onlive_dur_dx =
                response.data.responses[0].aggregations.item.buckets[0]
                  .onlive_dur.value;

              vm.liveViewingDurationData.content[0].data.push({
                value: onlive_dur_dx,
                name: "电信"
              });
              vm.liveViewingUserData.content[0].data.push({
                value: onlive_usernum_dx,
                name: "电信"
              });
              vm.liveViewingTimesData.content[0].data.push({
                value: onlive_freq_dx,
                name: "电信"
              });
            }
            // console.log("~~~~!!!! sss");
            // console.log(vm.liveViewingDurationData);
            // console.log(vm.liveViewingUserData);
            // console.log(vm.liveViewingTimesData);

            // ///////////
          }
          if (datatype == "mixture" && timetype == "week") {
          }
          if (datatype == "single" && timetype == "week") {
            // weekLiveViewUser
            // weekLiveViewTimes
            // weekliveViewDuration
            // response.data.responses[0].aggregations.item.buckets[0];
            //      0 1 2 3(onlive demand watch watch)          0 1 2 3(26~29week)
            //    .key     .onlive_dur.value  .onlive_freq.value   .onlive_user_num.value

            console.log("~~~~~~~~~~~!!!!~~~a0");

            // if (type == "yd") {
            //   let onlive_dur_yd_w1;
            //   let onlive_usernum_yd_w1;
            //   let onlive_freq_yd_w1;
            //   let onlive_dur_yd_w2;
            //   let onlive_usernum_yd_w2;
            //   let onlive_freq_yd_w2;
            //   let onlive_dur_yd_w3;
            //   let onlive_usernum_yd_w3;
            //   let onlive_freq_yd_w3;
            //   let onlive_dur_yd_w4;
            //   let onlive_usernum_yd_w4;
            //   let onlive_freq_yd_w4;
            //   console.log("~~~~~~~~~~~!!!!~~~a1");
            //   console.log(response)
            //   console.log(response.data.responses[0].aggregations.item.buckets)
            //   onlive_usernum_yd_w1 =
            //     response.data.responses[0].aggregations.item.buckets[0]
            //       .onlive_user_num.value;
            //   // onlive_usernum_yd_w2 =
            //   //   response.data.responses[0].aggregations.item.buckets[1]
            //   //     .onlive_user_num.value;
            //   // onlive_usernum_yd_w3 =
            //   //   response.data.responses[0].aggregations.item.buckets[2]
            //   //     .onlive_user_num.value
            //   // onlive_usernum_yd_w4 =
            //   //   response.data.responses[0].aggregations.item.buckets[3]
            //   //     .onlive_user_num.value;
            //   // console.log("~~~~~~~~~~~!!!!~~~a2");

            //   onlive_freq_yd_w1 =
            //     response.data.responses[0].aggregations.item.buckets[0]
            //       .onlive_freq.value;
            //   // onlive_freq_yd_w2 =
            //   //   response.data.responses[0].aggregations.item.buckets[1]
            //   //     .onlive_freq.value;
            //   // onlive_freq_yd_w3 =
            //   //   response.data.responses[0].aggregations.item.buckets[2]
            //   //     .onlive_freq.value;
            //   // onlive_freq_yd_w4 =
            //   //   response.data.responses[0].aggregations.item.buckets[3]
            //   //     .onlive_freq.value;
            //   // console.log("~~~~~~~~~~~!!!!~~~a3");

            //   onlive_dur_yd_w1 =
            //     response.data.responses[0].aggregations.item.buckets[0].onlive_dur
            //       .value;
            //   // onlive_dur_yd_w2 =
            //   //   response.data.responses[0].aggregations.item.buckets[1].onlive_dur
            //   //     .value;
            //   // onlive_dur_yd_w3 =
            //   //   response.data.responses[0].aggregations.item.buckets[2].onlive_dur
            //   //     .value;
            //   // onlive_dur_yd_w4 =
            //   //   response.data.responses[0].aggregations.item.buckets[3].onlive_dur
            //   //     .value;
            //   // console.log("~~~~~~~~~~~!!!!~~~a4");

            //   vm.weekliveViewDuration.content[0].data.push({
            //     value: onlive_dur_yd_w1,
            //     name: "移动"
            //   });
            //   // vm.weekliveViewDuration.content[1].data.push({
            //   //   value: onlive_dur_yd_w2,
            //   //   name: "移动"
            //   // });
            //   // vm.weekliveViewDuration.content[2].data.push({
            //   //   value: onlive_dur_yd_w3,
            //   //   name: "移动"
            //   // });
            //   // vm.weekliveViewDuration.content[3].data.push({
            //   //   value: onlive_dur_yd_w4,
            //   //   name: "移动"
            //   // });

            //   vm.weekLiveViewUser.content[0].data.push({
            //     value: onlive_usernum_yd_w1,
            //     name: "移动"
            //   });
            //   // vm.weekLiveViewUser.content[1].data.push({
            //   //   value: onlive_usernum_yd_w2,
            //   //   name: "移动"
            //   // });
            //   // vm.weekLiveViewUser.content[2].data.push({
            //   //   value: onlive_usernum_yd_w3,
            //   //   name: "移动"
            //   // });
            //   // vm.weekLiveViewUser.content[3].data.push({
            //   //   value: onlive_usernum_yd_w4,
            //   //   name: "移动"
            //   // });

            //   vm.weekLiveViewTimes.content[0].data.push({
            //     value: onlive_freq_yd_w1,
            //     name: "移动"
            //   });
            //   // vm.weekLiveViewTimes.content[1].data.push({
            //   //   value: onlive_freq_yd_w2,
            //   //   name: "移动"
            //   // });
            //   // vm.weekLiveViewTimes.content[2].data.push({
            //   //   value: onlive_freq_yd_w3,
            //   //   name: "移动"
            //   // });
            //   // vm.weekLiveViewTimes.content[3].data.push({
            //   //   value: onlive_freq_yd_w4,
            //   //   name: "移动"
            //   // });
            // }

            // // if (type == "lt") {
            // //   let onlive_dur_lt_w1;
            // //   let onlive_usernum_lt_w1;
            // //   let onlive_freq_lt_w1;
            // //   let onlive_dur_lt_w2;
            // //   let onlive_usernum_lt_w2;
            // //   let onlive_freq_lt_w2;
            // //   let onlive_dur_lt_w3;
            // //   let onlive_usernum_lt_w3;
            // //   let onlive_freq_lt_w3;
            // //   let onlive_dur_lt_w4;
            // //   let onlive_usernum_lt_w4;
            // //   let onlive_freq_lt_w4;

            // //   onlive_usernum_lt_w1 =
            // //     response.data.responses[0].aggregations.item.buckets[0]
            // //       .onlive_user_num.value;
            // //   onlive_usernum_lt_w2 =
            // //     response.data.responses[0].aggregations.item.buckets[1]
            // //       .onlive_user_num.value;
            // //   onlive_usernum_lt_w3 =
            // //     response.data.responses[0].aggregations.item.buckets[2]
            // //       .onlive_user_num.value;
            // //   onlive_usernum_lt_w4 =
            // //     response.data.responses[0].aggregations.item.buckets[3]
            // //       .onlive_user_num.value;

            // //   onlive_freq_lt_w1 =
            // //     response.data.responses[0].aggregations.item.buckets[0]
            // //       .onlive_freq.value;
            // //   onlive_freq_lt_w2 =
            // //     response.data.responses[0].aggregations.item.buckets[1]
            // //       .onlive_freq.value;
            // //   onlive_freq_lt_w3 =
            // //     response.data.responses[0].aggregations.item.buckets[2]
            // //       .onlive_freq.value;
            // //   onlive_freq_lt_w4 =
            // //     response.data.responses[0].aggregations.item.buckets[3]
            // //       .onlive_freq.value;

            // //   onlive_dur_lt_w1 =
            // //     response.data.responses[0].aggregations.item.buckets[0].onlive_dur
            // //       .value;
            // //   onlive_dur_lt_w2 =
            // //     response.data.responses[0].aggregations.item.buckets[1].onlive_dur
            // //       .value;
            // //   onlive_dur_lt_w3 =
            // //     response.data.responses[0].aggregations.item.buckets[2].onlive_dur
            // //       .value;
            // //   onlive_dur_lt_w4 =
            // //     response.data.responses[0].aggregations.item.buckets[3].onlive_dur
            // //       .value;

            // //   vm.weekliveViewDuration.content[0].data.push({
            // //     value: onlive_dur_lt_w1,
            // //     name: "联通"
            // //   });
            // //   vm.weekliveViewDuration.content[1].data.push({
            // //     value: onlive_dur_lt_w2,
            // //     name: "联通"
            // //   });
            // //   vm.weekliveViewDuration.content[2].data.push({
            // //     value: onlive_dur_lt_w3,
            // //     name: "联通"
            // //   });
            // //   vm.weekliveViewDuration.content[3].data.push({
            // //     value: onlive_dur_lt_w4,
            // //     name: "联通"
            // //   });

            // //   vm.weekLiveViewUser.content[0].data.push({
            // //     value: onlive_usernum_lt_w1,
            // //     name: "联通"
            // //   });
            // //   vm.weekLiveViewUser.content[1].data.push({
            // //     value: onlive_usernum_lt_w2,
            // //     name: "联通"
            // //   });
            // //   vm.weekLiveViewUser.content[2].data.push({
            // //     value: onlive_usernum_lt_w3,
            // //     name: "联通"
            // //   });
            // //   vm.weekLiveViewUser.content[3].data.push({
            // //     value: onlive_usernum_lt_w4,
            // //     name: "联通"
            // //   });

            // //   vm.weekLiveViewTimes.content[0].data.push({
            // //     value: onlive_freq_lt_w1,
            // //     name: "联通"
            // //   });
            // //   vm.weekLiveViewTimes.content[1].data.push({
            // //     value: onlive_freq_lt_w2,
            // //     name: "联通"
            // //   });
            // //   vm.weekLiveViewTimes.content[2].data.push({
            // //     value: onlive_freq_lt_w3,
            // //     name: "联通"
            // //   });
            // //   vm.weekLiveViewTimes.content[3].data.push({
            // //     value: onlive_freq_lt_w4,
            // //     name: "联通"
            // //   });
            // // }

            // // if (type == "dx") {
            // //   let onlive_dur_dx_w1;
            // //   let onlive_usernum_dx_w1;
            // //   let onlive_freq_dx_w1;
            // //   let onlive_dur_dx_w2;
            // //   let onlive_usernum_dx_w2;
            // //   let onlive_freq_dx_w2;
            // //   let onlive_dur_dx_w3;
            // //   let onlive_usernum_dx_w3;
            // //   let onlive_freq_dx_w3;
            // //   let onlive_dur_dx_w4;
            // //   let onlive_usernum_dx_w4;
            // //   let onlive_freq_dx_w4;

            // //   onlive_usernum_dx_w1 =
            // //     response.data.responses[0].aggregations.item.buckets[0]
            // //       .onlive_user_num.value;
            // //   onlive_usernum_dx_w2 =
            // //     response.data.responses[0].aggregations.item.buckets[1]
            // //       .onlive_user_num.value;
            // //   onlive_usernum_dx_w3 =
            // //     response.data.responses[0].aggregations.item.buckets[2]
            // //       .onlive_user_num.value;
            // //   onlive_usernum_dx_w4 =
            // //     response.data.responses[0].aggregations.item.buckets[3]
            // //       .onlive_user_num.value;

            // //   onlive_freq_dx_w1 =
            // //     response.data.responses[0].aggregations.item.buckets[0]
            // //       .onlive_freq.value;
            // //   onlive_freq_dx_w2 =
            // //     response.data.responses[0].aggregations.item.buckets[1]
            // //       .onlive_freq.value;
            // //   onlive_freq_dx_w3 =
            // //     response.data.responses[0].aggregations.item.buckets[2]
            // //       .onlive_freq.value;
            // //   onlive_freq_dx_w4 =
            // //     response.data.responses[0].aggregations.item.buckets[3]
            // //       .onlive_freq.value;

            // //   onlive_dur_dx_w1 =
            // //     response.data.responses[0].aggregations.item.buckets[0].onlive_dur
            // //       .value;
            // //   onlive_dur_dx_w2 =
            // //     response.data.responses[0].aggregations.item.buckets[1].onlive_dur
            // //       .value;
            // //   onlive_dur_dx_w3 =
            // //     response.data.responses[0].aggregations.item.buckets[2].onlive_dur
            // //       .value;
            // //   onlive_dur_dx_w4 =
            // //     response.data.responses[0].aggregations.item.buckets[3].onlive_dur
            // //       .value;

            // //   vm.weekliveViewDuration.content[0].data.push({
            // //     value: onlive_dur_dx_w1,
            // //     name: "电信"
            // //   });
            // //   vm.weekliveViewDuration.content[1].data.push({
            // //     value: onlive_dur_dx_w2,
            // //     name: "电信"
            // //   });
            // //   vm.weekliveViewDuration.content[2].data.push({
            // //     value: onlive_dur_dx_w3,
            // //     name: "电信"
            // //   });
            // //   vm.weekliveViewDuration.content[3].data.push({
            // //     value: onlive_dur_dx_w4,
            // //     name: "电信"
            // //   });

            // //   vm.weekLiveViewUser.content[0].data.push({
            // //     value: onlive_usernum_dx_w1,
            // //     name: "电信"
            // //   });
            // //   vm.weekLiveViewUser.content[1].data.push({
            // //     value: onlive_usernum_dx_w2,
            // //     name: "电信"
            // //   });
            // //   vm.weekLiveViewUser.content[2].data.push({
            // //     value: onlive_usernum_dx_w3,
            // //     name: "电信"
            // //   });
            // //   vm.weekLiveViewUser.content[3].data.push({
            // //     value: onlive_usernum_dx_w4,
            // //     name: "电信"
            // //   });

            // //   vm.weekLiveViewTimes.content[0].data.push({
            // //     value: onlive_freq_dx_w1,
            // //     name: "电信"
            // //   });
            // //   vm.weekLiveViewTimes.content[1].data.push({
            // //     value: onlive_freq_dx_w2,
            // //     name: "电信"
            // //   });
            // //   vm.weekLiveViewTimes.content[2].data.push({
            // //     value: onlive_freq_dx_w3,
            // //     name: "电信"
            // //   });
            // //   vm.weekLiveViewTimes.content[3].data.push({
            // //     value: onlive_freq_dx_w4,
            // //     name: "电信"
            // //   });
            // // }
          }
          switch (type) {
            case "all":
              break;
            case "part":
              break;
            case "yd":
              break;
            case "lt":
              break;
            case "dx":
              break;
            default:
              console.log("none!");
          }
        })
        .catch(function (error) {
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
          ["product",],
          ["移动",],
          ["联通",],
          ["电信",]
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
          // ["product", "4月", "5月", "6月", "7月"],
          // ["移动", 82.2, 83.4, 94.7, 103.6],
          // ["联通", 35.8, 35.9, 36.9, 38.0],
          // ["电信", 26.1, 27.0, 36.9, 49.7]
        ]
      },

      // G+TV7月分地区用户发展数据概览
      G_TVRegionUserData: {
        title: "本月各市州新增在册用户数（万户）",
        id: "G_TVRegionUser",
        color: ["#EC7C30", "#FFC000", "#6FAC46"],
        data: [
          ["product",],
          ["移动",],
          ["联通",],
          ["电信",]
          // ["product", "贵阳", "遵义", "毕节", "黔南", "铜仁", "六盘水", "黔东南", "安顺", "黔西南"],
          // ["移动", 1.7, 1.8, 1.1, 0.9, 0.9, 0.8, 1.2, 0.8, 0.9],
          // ["联通", 0.4, 0.3, 0.2, 0.1, 0.1, 0.8, 0.1, 0.2, 0.1],
          // ["电信", 2.9, 1.9, 1.5, 1.4, 1.2, 0.8, 0.8, 0.7, 0.6]
        ]
      },

      // 7月每周新增在册用户数
      weekNewUserData: {
        title: "本月每周新增在册用户数（万户）",
        id: "weekNewUser",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4"],
        data: [
          ["product", "", "", "", ""],
          ["移动",],
          ["联通",],
          ["电信",]
          // ["product", "7月第一周", "7月第二周", "7月第三周", "7月第四周"],
          // ["移动", 1.6, 2.2, 2.7, 3.0],
          // ["联通", 0.4, 0.4, 0.3, 0.3],
          // ["电信", 2.1, 2.8, 2.8, 3.2]
        ]
      },

      // 移动侧7月各市州新增在册用户数（千户）
      mobileNewUserData: {
        title: "移动侧本月各市州新增在册用户数（千户）",
        id: "mobileNewUser",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4", "#FFC000"],
        data: [
          ["product", "7月第一周", "7月第二周", "7月第三周", "7月第四周"],
          ["安顺", 1.6, 2.0, 2.5, 2.0],
          ["黔西南", 1.9, 1.8, 2.3, 2.1],
          ["铜仁", 1.3, 2.2, 2.3, 2.1],
          ["黔南", 1.5, 2.0, 3.2, 3.6],
          ["毕节", 1.7, 2.2, 2.8, 3.6],
          ["黔东南", 1.5, 2.0, 3.4, 3.6],
          ["贵阳", 2.7, 3.6, 4.2, 5.1],
          ["遵义", 2.5, 3.9, 4.7, 5.3],
          ["六盘水", 7.5, 7.5, 7.5, 2.8]
        ]
      },

      // 联通侧7月各市州新增在册用户数（千户）
      unicornNewUserData: {
        title: "联通侧本月各市州新增在册用户数（千户）",
        id: "unicornNewUser",
        color: ["#EC7C30", "#FFC000", "#6FAC46", "#9E470E"],
        data: [
          ["product", "7月第一周", "7月第二周", "7月第三周", "7月第四周"],
          ["安顺", 1.6, 2.0, 2.5, 2.0],
          ["黔西南", 1.9, 1.8, 2.3, 2.1],
          ["铜仁", 1.3, 2.2, 2.3, 2.1],
          ["黔南", 1.5, 2.0, 3.2, 3.6],
          ["毕节", 1.7, 2.2, 2.8, 3.6],
          ["黔东南", 1.5, 2.0, 3.4, 3.6],
          ["贵阳", 2.7, 3.6, 4.2, 5.1],
          ["遵义", 2.5, 3.9, 4.7, 5.3],
          ["六盘水", 7.5, 7.5, 7.5, 2.8]
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

      // 电信侧7月各市州新增在册用户数（千户）
      telecomNewUserData: {
        title: "电信侧7月各市州新增在册用户数（千户）",
        id: "telecomNewUser",
        color: ["#6FAC46", "#4471C4", "#FFC000", "#43682B"],
        data: [
          ["product", "7月第一周", "7月第二周", "7月第三周", "7月第四周"],
          ["安顺", 1.6, 2.0, 2.5, 2.0],
          ["黔西南", 1.9, 1.8, 2.3, 2.1],
          ["铜仁", 1.3, 2.2, 2.3, 2.1],
          ["黔南", 1.5, 2.0, 3.2, 3.6],
          ["毕节", 1.7, 2.2, 2.8, 3.6],
          ["黔东南", 1.5, 2.0, 3.4, 3.6],
          ["贵阳", 2.7, 3.6, 4.2, 5.1],
          ["遵义", 2.5, 3.9, 4.7, 5.3],
          ["六盘水", 7.5, 7.5, 7.5, 2.8]
        ]
      },

      // G+TV7月每日用户发展数据
      everyDayUserData: {
        title: "7月日新增在册用户数（千户）",
        id: "everyDayUser",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4", "#FFC000"],
        data: [
          [
            "product",
            "7月1日",
            "7月2日",
            "7月3日",
            "7月4日",
            "7月5日",
            "7月6日",
            "7月7日",
            "7月8日",
            "7月9日",
            "7月10日",
            "7月11日",
            "7月12日",
            "7月13日",
            "7月14日",
            "7月15日",
            "7月16日",
            "7月17日",
            "7月18日",
            "7月19日",
            "7月20日",
            "7月21日",
            "7月22日",
            "7月23日",
            "7月24日",
            "7月25日",
            "7月26日",
            "7月27日",
            "7月28日",
            "7月29日",
            "7月30日"
          ],
          [
            "移动",
            1.7,
            1.8,
            1.1,
            0.9,
            0.8,
            1.2,
            0.8,
            0.9,
            1.2,
            1.7,
            1.8,
            1.1,
            0.9,
            0.9,
            0.8,
            1.2,
            0.8,
            0.9,
            1.2,
            1.7,
            1.8,
            1.1,
            0.9,
            0.9,
            0.8,
            1.2,
            0.8,
            0.9,
            5.6
          ],
          [
            "联通",
            0.4,
            0.3,
            0.2,
            0.1,
            0.8,
            0.1,
            0.2,
            0.1,
            0.8,
            0.4,
            0.3,
            0.2,
            0.1,
            0.1,
            0.8,
            0.1,
            0.2,
            0.1,
            0.8,
            0.4,
            0.3,
            0.2,
            0.1,
            0.1,
            0.8,
            0.1,
            0.2,
            0.1,
            0.7
          ],
          [
            "电信",
            2.9,
            1.9,
            1.5,
            1.4,
            1.2,
            0.8,
            0.7,
            0.6,
            0.9,
            2.9,
            1.9,
            1.5,
            1.4,
            1.2,
            0.8,
            0.8,
            0.7,
            0.6,
            0.9,
            2.9,
            1.9,
            1.5,
            1.4,
            1.2,
            0.8,
            0.8,
            0.7,
            0.6,
            5.4
          ]
          // [
          //   "线性（移动）",
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

      //开机活跃数据
      //移动、电信、联通侧月开机活跃率数据
      monthPowerActivityData: {
        title: "移动、电信、联通侧月开机活跃率",
        id: "monthPowerActivity",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4", "#FFC000"],
        data: [
          ["product", "4月", "5月", "6月", "7月"],
          ["移动", 82.2, 83.4, 94.7, 89.6],
          ["联通", 35.8, 35.9, 36.9, 38.0],
          ["电信", 26.1, 27.0, 36.9, 49.7],
          ["总开机率", 58.8, 61.9, 59.7, 56.1]
        ]
      },
      //各市州7月开机活跃率
      areaPowerActivityData: {
        title: "各市州7月开机活跃率",
        id: "areaPowerActivity",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4", "#FFC000"],
        data: [
          [
            "product",
            "贵阳",
            "遵义",
            "六盘水",
            "铜仁",
            "黔南",
            "安顺",
            "毕节",
            "黔东南",
            "黔西南"
          ],
          ["移动", 82.2, 83.4, 94.7, 89.6, 82.2, 83.4, 94.7, 89.6, 83.4],
          ["联通", 35.8, 35.9, 36.9, 38.0, 35.8, 35.9, 36.9, 38.0, 35.8],
          ["电信", 26.1, 27.0, 36.9, 49.7, 26.1, 27.0, 36.9, 49.7, 27.0],
          ["总开机活跃率", 58.8, 61.9, 59.7, 56.1, 58.8, 61.9, 59.7, 56.1, 61.9]
        ]
      },

      // 日开机活跃数据
      everyPowerActivityData: {
        title: "日开机活跃率",
        id: "everyPowerActivity",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4", "#FFC000"],
        data: [
          [
            "product",
            "7月1日",
            "7月2日",
            "7月3日",
            "7月4日",
            "7月5日",
            "7月6日",
            "7月7日",
            "7月8日",
            "7月9日",
            "7月10日",
            "7月11日",
            "7月12日",
            "7月13日",
            "7月14日",
            "7月15日",
            "7月16日",
            "7月17日",
            "7月18日",
            "7月19日",
            "7月20日",
            "7月21日",
            "7月22日",
            "7月23日",
            "7月24日",
            "7月25日",
            "7月26日",
            "7月27日",
            "7月28日",
            "7月29日",
            "7月30日"
          ],
          [
            "移动",
            1.7,
            1.8,
            1.1,
            0.9,
            0.8,
            1.2,
            0.8,
            0.9,
            1.2,
            1.7,
            1.8,
            1.1,
            0.9,
            0.9,
            0.8,
            1.2,
            0.8,
            0.9,
            1.2,
            1.7,
            1.8,
            1.1,
            0.9,
            0.9,
            0.8,
            1.2,
            0.8,
            0.9,
            5.6
          ],
          [
            "联通",
            0.4,
            0.3,
            0.2,
            0.1,
            0.8,
            0.1,
            0.2,
            0.1,
            0.8,
            0.4,
            0.3,
            0.2,
            0.1,
            0.1,
            0.8,
            0.1,
            0.2,
            0.1,
            0.8,
            0.4,
            0.3,
            0.2,
            0.1,
            0.1,
            0.8,
            0.1,
            0.2,
            0.1,
            0.7
          ],
          [
            "电信",
            2.9,
            1.9,
            1.5,
            1.4,
            1.2,
            0.8,
            0.7,
            0.6,
            0.9,
            2.9,
            1.9,
            1.5,
            1.4,
            1.2,
            0.8,
            0.8,
            0.7,
            0.6,
            0.9,
            2.9,
            1.9,
            1.5,
            1.4,
            1.2,
            0.8,
            0.8,
            0.7,
            0.6,
            5.4
          ],
          [
            "总开机活跃",
            2.0,
            2.2,
            2.4,
            2.6,
            3.0,
            3.2,
            3.4,
            3.6,
            3.8,
            4.0,
            4.2,
            4.4,
            4.6,
            4.8,
            5.0,
            5.2,
            5.4,
            5.5,
            5.7,
            5.8,
            5.9,
            6.0,
            6.2,
            6.4,
            6.6,
            6.8,
            7.0,
            7.2,
            7.4
          ]
        ]
      },

      //7月三大基础功能使用用户占比
      usingTheUser: {
        title: "7月三大基础功能使用用户占比",
        id: "usingTheUser",
        color: ["#B4CFA8", "#6FAC46", "#5B8E39"],
        content: [
          {
            title: "7月三大基础功能使用用户占比",
            data: [
              // { value: 535, name: "直播" },
              // { value: 410, name: "回看" },
              // { value: 348, name: "点播" }
            ]
          }
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
        title: "7月三大基础功能使用次数占比",
        id: "usingTheTimes",
        color: ["#878787", "#A4A4A4", "#CACACA"],
        content: [
          {
            title: "7月三大基础功能使用次数占比",
            data: [
              { value: 535, name: "直播" },
              { value: 410, name: "回看" },
              { value: 348, name: "点播" }
            ]
          }
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
        title: "7月三大基础功能使用时长占比",
        id: "usingTheDuration",
        color: ["#D29E00", "#FFC000", "#FFD99D"],
        content: [
          {
            title: "7月三大基础功能使用时长占比",
            data: [
              // { value: 535, name: "直播" },
              // { value: 410, name: "回看" },
              // { value: 348, name: "点播" }
            ]
          }
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
        title: "7月总体收视数据",
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
        title: "直播观看时长数据",
        id: "liveViewingDuration",
        color: ["#F4B8A3", "#EC7C30", "#C46627"],
        content: [
          {
            title: "7月直播观看时长数据",
            data: [
              // { value: 535, name: "移动" },
              // { value: 410, name: "联通" },
              // { value: 348, name: "电信" }
            ]
          }
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
        title: "直播观看用户数据",
        id: "liveViewingUser",
        color: ["#878787", "#A4A4A4", "#CACACA"],
        content: [
          {
            title: "7月直播观看用户数据",
            data: [
              // { value: 535, name: "移动" },
              // { value: 410, name: "联通" },
              // { value: 348, name: "电信" }
            ]
          }
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
        title: "直播观看次数数据",
        id: "liveViewingTimes",
        color: ["#D29E00", "#FFC000", "#FFD99F"],
        content: [
          {
            title: "7月直播观看次数数据",
            data: [
              // { value: 535, name: "移动" },
              // { value: 410, name: "联通" },
              // { value: 348, name: "电信" }
            ]
          }
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
        title: "7月直播收视数据",
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
        title: "7月各周直播收视用户数",
        id: "weekLiveViewUser",
        color: ["#F4B8A3", "#EC7C30", "#C46627"],
        content: [
          {
            title: "7月第1周直播收视用户数",
            data: [
              { value: 535, name: "移动" },
              { value: 410, name: "联通" },
              { value: 348, name: "电信" }
            ]
          },
          {
            title: "7月第2周直播收视用户数",
            data: [
              { value: 535, name: "移动" },
              { value: 410, name: "联通" },
              { value: 348, name: "电信" }
            ]
          },
          {
            title: "7月第3周直播收视用户数",
            data: [
              { value: 535, name: "移动" },
              { value: 410, name: "联通" },
              { value: 348, name: "电信" }
            ]
          },
          {
            title: "7月第4周直播收视用户数",
            data: [
              { value: 535, name: "移动" },
              { value: 410, name: "联通" },
              { value: 348, name: "电信" }
            ]
          }
        ]
      },
      //7月各周直播收视次数
      weekLiveViewTimesData: {
        title: "7月各周直播收视次数",
        id: "weekLiveViewTimes",
        color: ["#5B8E39", "#6FAC46", "#B4CFA8"],
        content: [
          {
            title: "7月第1周直播收视次数",
            data: [
              { value: 535, name: "移动" },
              { value: 410, name: "联通" },
              { value: 348, name: "电信" }
            ]
          },
          {
            title: "7月第2周直播收视次数",
            data: [
              { value: 535, name: "移动" },
              { value: 410, name: "联通" },
              { value: 348, name: "电信" }
            ]
          },
          {
            title: "7月第3周直播收视次数",
            data: [
              { value: 535, name: "移动" },
              { value: 410, name: "联通" },
              { value: 348, name: "电信" }
            ]
          },
          {
            title: "7月第4周直播收视次数",
            data: [
              { value: 535, name: "移动" },
              { value: 410, name: "联通" },
              { value: 348, name: "电信" }
            ]
          }
        ]
      },
      //7月各周直播收视时长
      weekliveViewDurationData: {
        title: "7月各周直播收视时长",
        id: "weekliveViewDuration",
        color: ["#D29E00", "#FFC000", "#FFD99F"],
        content: [
          {
            title: "7月第1周直播收视时长",
            data: [
              { value: 535, name: "移动" },
              { value: 410, name: "联通" },
              { value: 348, name: "电信" }
            ]
          },
          {
            title: "7月第2周直播收视时长",
            data: [
              { value: 535, name: "移动" },
              { value: 410, name: "联通" },
              { value: 348, name: "电信" }
            ]
          },
          {
            title: "7月第3周直播收视时长",
            data: [
              { value: 535, name: "移动" },
              { value: 410, name: "联通" },
              { value: 348, name: "电信" }
            ]
          },
          {
            title: "7月第4周直播收视时长",
            data: [
              { value: 535, name: "移动" },
              { value: 410, name: "联通" },
              { value: 348, name: "电信" }
            ]
          }
        ]
      },
      // 7月各周直播收视数据
      weekliveViewingData: {
        title: "7月直播收视数据",
        id: "weekliveViewing",
        color: ["#EC7C30", "#A4A4A4", "#5B9BD4"],
        data: [
          ["product", "7月第一周", "7月第二周", "7月第三周", "7月第四周"],
          ["直播观看次数（十万次）", 103.1, 102.2, 90.5, 104.8],
          ["直播观看时长数（十万小时）", 99.3, 110.0, 106.2, 126.9],
          ["直播观看用户数（十万户）", 0.6, 0.7, 0.7, 0.8]
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
        title: "7月点播收视数据",
        id: "monthlyDemandViewing",
        color: ["#FFC000", "#6FAC46", "#EC7C30"],
        data: [
          ["product", "4月", "5月", "6月", "7月"],
          ["点播观看次数", 103.1, 102.2, 90.5, 104.8],
          ["点播观看时长数", 99.3, 110.0, 106.2, 126.9],
          ["点播观看用户数", 1.4, 1.6, 1.5, 1.7]
        ]
      },
      // 7月各周点播收视数据
      weekDemandViewingData: {
        title: "7月各周点播收视数据",
        id: "weekDemandViewing",
        color: ["#EC7C30", "#A4A4A4", "#5B9BD4"],
        data: [
          ["product", "4月", "5月", "6月", "7月"],
          ["直播收视次数", 103.1, 102.2, 90.5, 104.8],
          ["直播收视时长", 99.3, 110.0, 106.2, 126.9],
          ["直播收视用户数", 1.4, 1.6, 1.5, 1.7]
        ]
      },

      //点播用户数
      demandUserNumData: {
        title: "点播用户数",
        id: "demandUserNum",
        color: ["#EC7C30", "#FFC000", "#6FAC46"],
        data: [
          ["product", "本月", "上月", "环比"],
          ["少儿", 43300, 13563, 11.38],
          ["电影", 83000, 16457, 2.21],
          ["游戏", 76000, 17096, 13.33],
          ["热剧", 66000, 57896, 28.84],
          ["动漫", 86080, 17096, 12.68],
          ["综艺", 56000, 27896, 32.26],
          ["纪实", 36000, 15896, 19.31],
          ["音乐", 26000, 12896, 36.71],
          ["体育", 66000, 7896, 1.22],
          ["资讯", 16000, 17896, 13.33]
        ]
      },
      //点播次数环比
      demandTimesData: {
        title: "点播次数环比",
        id: "demandTimes",
        color: ["#D29E00", "#FFC000", "#FFD99F"],
        data: [
          ["product", "本月", "上月", "环比"],
          ["少儿", 43300, 13563, 11.38],
          ["电影", 83000, 16457, 2.21],
          ["游戏", 76000, 17096, 13.33],
          ["热剧", 66000, 57896, 28.84],
          ["动漫", 86080, 17096, 12.68],
          ["综艺", 56000, 27896, 32.26],
          ["纪实", 36000, 15896, 19.31],
          ["音乐", 26000, 12896, 36.71],
          ["体育", 66000, 7896, 1.22],
          ["资讯", 16000, 17896, 13.33]
        ]
      },
      //点播时长环比
      demandDurationData: {
        title: "点播时长环比",
        id: "demandDuration",
        color: ["#ACC5E4", "#5B9BD4", "#497EAF"],
        data: [
          ["product", "本月", "上月", "环比"],
          ["少儿", 43300, 13563, 11.38],
          ["电影", 83000, 16457, 2.21],
          ["游戏", 76000, 17096, 13.33],
          ["热剧", 66000, 57896, 28.84],
          ["动漫", 86080, 17096, 12.68],
          ["综艺", 56000, 27896, 32.26],
          ["纪实", 36000, 15896, 19.31],
          ["音乐", 26000, 12896, 36.71],
          ["体育", 66000, 7896, 1.22],
          ["资讯", 16000, 17896, 13.33]
        ]
      },

      //主要栏目页面点击用户数对比
      programPageClickUserData: {
        title: "主要栏目页面点击用户数对比",
        id: "programPageClickUser",
        color: ["#EC7C30", "#FFC000", "#6FAC46"],
        data: [
          ["product", "本月", "上月", "环比"],
          ["少儿", 43300, 13563, 11.38],
          ["电影", 83000, 16457, 2.21],
          ["游戏", 76000, 17096, 13.33],
          ["热剧", 66000, 57896, 28.84],
          ["动漫", 86080, 17096, 12.68],
          ["综艺", 56000, 27896, 32.26],
          ["纪实", 36000, 15896, 19.31],
          ["音乐", 26000, 12896, 36.71],
          ["体育", 66000, 7896, 1.22],
          ["资讯", 16000, 17896, 13.33]
        ]
      },
      //主要栏目页面点击次数对比
      programPageClickNumData: {
        title: "主要栏目页面点击次数对比",
        id: "programPageClickNum",
        color: ["#ACC5E4", "#5B9BD4", "#497EAF"],
        data: [
          ["product", "本月", "上月", "环比"],
          ["少儿", 43300, 13563, 11.38],
          ["电影", 83000, 16457, 2.21],
          ["游戏", 76000, 17096, 13.33],
          ["热剧", 66000, 57896, 28.84],
          ["动漫", 86080, 17096, 12.68],
          ["综艺", 56000, 27896, 32.26],
          ["纪实", 36000, 15896, 19.31],
          ["音乐", 26000, 12896, 36.71],
          ["体育", 66000, 7896, 1.22],
          ["资讯", 16000, 17896, 13.33]
        ]
      },

      // 点播用户数对比（万户）
      demandUserNumData2: {
        title: "点播用户数对比（万户）",
        id: "demandUserNum2",
        color: ["#5B9BD4", "#EC7C30"],
        data: [
          ["product", "本月", "上月"],
          ["（电视剧）封神演义", 18.8, 18.0],
          ["（电视剧）新白娘子传奇2019", 19.1, 17.5],
          ["（电影）飞驰人生", 20.0, 18.6],
          ["（电视剧）青春斗", 20.0, 17.2],
          ["（少儿）猪猪侠之竞球小英雄第二部", 20.2, 16.7],
          ["（少儿）熊出没之探险日记 第二季", 17.9, 16.1],
          ["（电视剧）招摇", 18.8, 18.0],
          ["（电视剧）黄河英雄", 19.1, 17.5],
          ["（电视剧）夜空中最闪亮的星", 20.0, 18.6],
          ["（综艺）王牌对王牌 第四季", 20.0, 17.2],
          ["（少儿）汪汪队立大功 第四季", 20.2, 16.7],
          ["（电影）狂暴凶狮", 20.4, 17.3],
          ["（通灵妃）通灵妃", 20.8, 17.6],
          ["湖南卫视（高清）", 20.8, 17.2],
          ["（电影）绿毛怪格林奇（原声版）", 21.4, 19.0],
          ["（电影）钢铁飞龙之奥特曼崛起", 24.9, 32.0],
          ["（少儿）宝宝巴士启蒙音乐剧之汽车家族", 26.2, 22.3],
          ["（电视剧）推手", 37.2, 28.7],
          ["（动漫）猫妖的诱惑", 38.1, 34.6],
          ["（少儿）假面骑士时王", 56.3, 37.1]
        ]
      },
      // 点播次数对比（十万次）
      demandTimesData2: {
        title: "点播次数对比（十万次）",
        id: "demandTimes2",
        color: ["#EC7C30", "#FFC000"],
        data: [
          ["product", "本月", "上月"],
          ["（电视剧）封神演义", 18.8, 18.0],
          ["（电视剧）新白娘子传奇2019", 19.1, 17.5],
          ["（电影）飞驰人生", 20.0, 18.6],
          ["（电视剧）青春斗", 20.0, 17.2],
          ["（少儿）猪猪侠之竞球小英雄第二部", 20.2, 16.7],
          ["（少儿）熊出没之探险日记 第二季", 17.9, 16.1],
          ["（电视剧）招摇", 18.8, 18.0],
          ["（电视剧）黄河英雄", 19.1, 17.5],
          ["（电视剧）夜空中最闪亮的星", 20.0, 18.6],
          ["（综艺）王牌对王牌 第四季", 20.0, 17.2],
          ["（少儿）汪汪队立大功 第四季", 20.2, 16.7],
          ["（电影）狂暴凶狮", 20.4, 17.3],
          ["（通灵妃）通灵妃", 20.8, 17.6],
          ["湖南卫视（高清）", 20.8, 17.2],
          ["（电影）绿毛怪格林奇（原声版）", 21.4, 19.0],
          ["（电影）钢铁飞龙之奥特曼崛起", 24.9, 32.0],
          ["（少儿）宝宝巴士启蒙音乐剧之汽车家族", 26.2, 22.3],
          ["（电视剧）推手", 37.2, 28.7],
          ["（动漫）猫妖的诱惑", 38.1, 34.6],
          ["（少儿）假面骑士时王", 56.3, 37.1]
        ]
      },
      // 点播时长对比（十万小时）
      demandDurationData2: {
        title: "点播时长对比（十万小时）",
        id: "demandDuration2",
        color: ["#6FAC46", "#4471C4"],
        data: [
          ["product", "本月", "上月"],
          ["（电视剧）封神演义", 18.8, 18.0],
          ["（电视剧）新白娘子传奇2019", 19.1, 17.5],
          ["（电影）飞驰人生", 20.0, 18.6],
          ["（电视剧）青春斗", 20.0, 17.2],
          ["（少儿）猪猪侠之竞球小英雄第二部", 20.2, 16.7],
          ["（少儿）熊出没之探险日记 第二季", 17.9, 16.1],
          ["（电视剧）招摇", 18.8, 18.0],
          ["（电视剧）黄河英雄", 19.1, 17.5],
          ["（电视剧）夜空中最闪亮的星", 20.0, 18.6],
          ["（综艺）王牌对王牌 第四季", 20.0, 17.2],
          ["（少儿）汪汪队立大功 第四季", 20.2, 16.7],
          ["（电影）狂暴凶狮", 20.4, 17.3],
          ["（通灵妃）通灵妃", 20.8, 17.6],
          ["湖南卫视（高清）", 20.8, 17.2],
          ["（电影）绿毛怪格林奇（原声版）", 21.4, 19.0],
          ["（电影）钢铁飞龙之奥特曼崛起", 24.9, 32.0],
          ["（少儿）宝宝巴士启蒙音乐剧之汽车家族", 26.2, 22.3],
          ["（电视剧）推手", 37.2, 28.7],
          ["（动漫）猫妖的诱惑", 38.1, 34.6],
          ["（少儿）假面骑士时王", 56.3, 37.1]
        ]
      },

      // 付费用户收视行为分析开始
      // 新增在册用户转化对比
      newAddUserData: {
        title: "主要栏目页面点击用户数对比",
        id: "newAddUser",
        color: ["#EC7C30", "#FFC000", "#6FAC46"],
        data: [
          ["product", "新增付费用户数", "新增在册用户数", "新增在册用户转化率"],
          ["6月", 6300, 13563, 6.1],
          ["7月", 8000, 16457, 5.7]
        ]
      },
      // 引导用户付费内容排名
      payingUserData: {
        title: "点播用户数对比（万户）",
        id: "payingUser",
        color: ["#5B9BD4"],
        data: [
          ["product", "本月"],
          ["（电视剧）封神演义", 78],
          ["（电视剧）新白娘子传奇2019", 91],
          ["（电影）飞驰人生", 98],
          ["（电视剧）青春斗", 101],
          ["（少儿）猪猪侠之竞球小英雄第二部", 150],
          ["（少儿）熊出没之探险日记 第二季", 179],
          ["（电视剧）招摇", 188],
          ["（电视剧）黄河英雄", 191],
          ["（电视剧）夜空中最闪亮的星", 285],
          ["（综艺）王牌对王牌 第四季", 302],
          ["（少儿）汪汪队立大功 第四季", 340],
          ["（电影）狂暴凶狮", 396],
          ["（通灵妃）通灵妃", 400],
          ["湖南卫视（高清）", 452],
          ["（电影）绿毛怪格林奇（原声版）", 465],
          ["（电影）钢铁飞龙之奥特曼崛起", 480],
          ["（少儿）宝宝巴士启蒙音乐剧之汽车家族", 506],
          ["（电视剧）推手", 527],
          ["（动漫）猫妖的诱惑", 538],
          ["（少儿）假面骑士时王", 560]
        ]
      },

      // 本土原创节目收视行为分析
      // 原创节目7月点播数据
      monthDemandData: {
        title: "原创节目7月点播数据",
        id: "monthDemand",
        color: ["#ccc", "#5B9BD4"],
        data: [
          ["product", "6月", "7月"],
          ["点播用户数（万户）", 4330, 13563],
          ["点播次数（万次）", 8300, 16457],
          ["点播时长（万小时）", 4330, 16457]
        ]
      },
      // 原创节目7月点播次数走势（次)
      originalProgramsDemandData: {
        title: "原创节目7月点播次数走势（次)",
        id: "originalProgramsDemand",
        color: ["#5B9BD4", "#EC7C30 ", "#FFC000"],
        data: [
          ["product", "第一周", "第二周", "第三周", "第四周"],
          ["移动", 20140, 22370, 22800, 19200],
          ["联通", 2140, 12170, 2580, 2400],
          ["电信", 1400, 1700, 1800, 2000]
        ]
      },

      // 重点专题及活动数据概览
      //移动
      mobileKeyProjectData: {
        title: "移动",
        id: "mobileKeyProject",
        color: ["#5B9BD4"],
        data: [
          ["product", "点击次数（万次）"],
          ["（电视剧）封神演义", 78],
          ["（电视剧）新白娘子传奇2019", 91],
          ["（电影）飞驰人生", 98],
          ["（电视剧）青春斗", 101],
          ["（少儿）猪猪侠之竞球小英雄第二部", 150],
          ["（少儿）熊出没之探险日记 第二季", 179],
          ["（电视剧）招摇", 188],
          ["（电视剧）黄河英雄", 191],
          ["（电视剧）夜空中最闪亮的星", 285],
          ["（综艺）王牌对王牌 第四季", 302],
          ["（少儿）汪汪队立大功 第四季", 340],
          ["（电影）狂暴凶狮", 396],
          ["（通灵妃）通灵妃", 400],
          ["湖南卫视（高清）", 452],
          ["（电影）绿毛怪格林奇（原声版）", 465],
          ["（电影）钢铁飞龙之奥特曼崛起", 480],
          ["（少儿）宝宝巴士启蒙音乐剧之汽车家族", 506],
          ["（电视剧）推手", 527],
          ["（动漫）猫妖的诱惑", 538],
          ["（少儿）假面骑士时王", 560]
        ]
      },
      // 联通
      unicornKeyProjectData: {
        title: "联通",
        id: "unicornKeyProject",
        color: ["#EC7C30"],
        data: [
          ["product", "点击次数（万次）"],
          ["（电视剧）封神演义", 78],
          ["（电视剧）新白娘子传奇2019", 91],
          ["（电影）飞驰人生", 98],
          ["（电视剧）青春斗", 101],
          ["（少儿）猪猪侠之竞球小英雄第二部", 150],
          ["（少儿）熊出没之探险日记 第二季", 179],
          ["（电视剧）招摇", 188],
          ["（电视剧）黄河英雄", 191],
          ["（电视剧）夜空中最闪亮的星", 285],
          ["（综艺）王牌对王牌 第四季", 302],
          ["（少儿）汪汪队立大功 第四季", 340],
          ["（电影）狂暴凶狮", 396],
          ["（通灵妃）通灵妃", 400],
          ["湖南卫视（高清）", 452],
          ["（电影）绿毛怪格林奇（原声版）", 465],
          ["（电影）钢铁飞龙之奥特曼崛起", 480],
          ["（少儿）宝宝巴士启蒙音乐剧之汽车家族", 506],
          ["（电视剧）推手", 527],
          ["（动漫）猫妖的诱惑", 538],
          ["（少儿）假面骑士时王", 560]
        ]
      },
      // 电信
      telecomKeyProjectData: {
        title: "电信",
        id: "telecomKeyProject",
        color: ["#FFC000"],
        data: [
          ["product", "点击次数（万次）"],
          ["（电视剧）封神演义", 78],
          ["（电视剧）新白娘子传奇2019", 91],
          ["（电影）飞驰人生", 98],
          ["（电视剧）青春斗", 101],
          ["（少儿）猪猪侠之竞球小英雄第二部", 150],
          ["（少儿）熊出没之探险日记 第二季", 179],
          ["（电视剧）招摇", 188],
          ["（电视剧）黄河英雄", 191],
          ["（电视剧）夜空中最闪亮的星", 285],
          ["（综艺）王牌对王牌 第四季", 302],
          ["（少儿）汪汪队立大功 第四季", 340],
          ["（电影）狂暴凶狮", 396],
          ["（通灵妃）通灵妃", 400],
          ["湖南卫视（高清）", 452],
          ["（电影）绿毛怪格林奇（原声版）", 465],
          ["（电影）钢铁飞龙之奥特曼崛起", 480],
          ["（少儿）宝宝巴士启蒙音乐剧之汽车家族", 506],
          ["（电视剧）推手", 527],
          ["（动漫）猫妖的诱惑", 538],
          ["（少儿）假面骑士时王", 560]
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
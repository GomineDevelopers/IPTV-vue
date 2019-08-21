<template>
  <div class="height_auto">
    <el-row class="viewing_behavior_report">
      <el-row class="periodic_report_title">G+TV月度用户收视行为报告</el-row>

      <!-- G+TV用户发展数据概览开始 -->
      <el-row>
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

      <!-- G+TV4月分地区用户发展数据概览开始 -->
      <el-row>
        <el-row class="model_title">
          <span class="title_border_left"></span>G+TV4月分地区用户发展数据概览
        </el-row>
        <el-row class="G_TV_user_dev_data back_white">
          <el-col class="height_auto" :span="24">
            <line-chart-single :lineData="G_TVRegionUserData"></line-chart-single>
          </el-col>
        </el-row>
      </el-row>
      <!-- G+TV4月分地区用户发展数据概览结束 -->

      <!-- G+TV4月各周用户发展数据开始 -->
      <el-row>
        <el-row class="model_title">
          <span class="title_border_left"></span>G+TV4月各周用户发展数据
        </el-row>
        <el-row class="G_TV_user_dev_data back_white">
          <el-col class="height_auto" :span="24">
            <line-chart-single :lineData="weekNewUserData"></line-chart-single>
          </el-col>
        </el-row>
      </el-row>
      <!-- G+TV4月各周用户发展数据结束 -->

      <!-- G+TV各周分地区用户发展数据概览开始 -->
      <el-row>
        <el-row class="model_title">
          <span class="title_border_left"></span>G+TV各周分地区用户发展数据概览
        </el-row>
        <el-row class="week_region_data back_white">
          <el-col class="height_auto" :span="8">
            <!-- 移动侧4月各市州新增在册用户数 -->
            <bar-list-chart-stack :barListData="mobileNewUserData"></bar-list-chart-stack>
          </el-col>
          <el-col class="height_auto" :span="8">
            <!-- 联通侧4月各市州新增在册用户数 -->
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
          <el-col class="height_auto" :span="8">
            <!-- 电信侧4月各市州新增在册用户数 -->
            <bar-list-chart-stack :barListData="telecomNewUserData"></bar-list-chart-stack>
          </el-col>
        </el-row>
      </el-row>
      <!-- G+TV各周分地区用户发展数据概览结束 -->

      <!-- G+TV 4月每日用户发展数据开始 -->
      <el-row>
        <el-row class="model_title">
          <span class="title_border_left"></span>G+TV4月每日用户发展数据
        </el-row>
        <el-row class="everyday_user_develop back_white">
          <el-col class="height_auto" :span="24">
            <line-dotted-chart :lineData="everyDayUserData"></line-dotted-chart>
          </el-col>
        </el-row>
      </el-row>
      <!-- G+TV 4月每日用户发展数据结束 -->

      <!-- 开机活跃数据开始 -->
      <el-row>
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
              <span>注：由内而外分别是1月、2月、3月、4月</span>
            </el-col>
            <el-col class="height_auto" :span="8">
              <many-pie-chart :pieData="usingTheTime"></many-pie-chart>
              <span>注：由内而外分别是1月、2月、3月、4月</span>
            </el-col>
            <el-col class="height_auto" :span="8">
              <many-pie-chart :pieData="usingTheDuration"></many-pie-chart>
              <span>注：由内而外分别是1月、2月、3月、4月</span>
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
              <span>注：由内而外分别是1月、2月、3月、4月</span>
            </el-col>
            <el-col class="height_auto" :span="8">
              <many-pie-chart :pieData="liveViewingUserData"></many-pie-chart>
              <span>注：由内而外分别是1月、2月、3月、4月</span>
            </el-col>
            <el-col class="height_auto" :span="8">
              <many-pie-chart :pieData="liveViewingTimesData"></many-pie-chart>
              <span>注：由内而外分别是1月、2月、3月、4月</span>
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

      <!-- 四月各周直播收视日数据开始 -->
      <el-row>
        <el-row class="model_title">
          <span class="title_border_left"></span>四月各周直播收视日数据
        </el-row>
        <el-row class="analysis_of_viewing back_white">
          <el-row class="analysis_of_viewing1">
            <el-col class="height_auto" :span="8">
              <many-pie-chart :pieData="weekLiveViewUserData"></many-pie-chart>
              <span>注：由内而外分别是4月第1周、4月第2周、4月第3周、4月第4周</span>
            </el-col>
            <el-col class="height_auto" :span="8">
              <many-pie-chart :pieData="weekLiveViewTimesData"></many-pie-chart>
              <span>注：由内而外分别是4月第1周、4月第2周、4月第3周、4月第4周</span>
            </el-col>
            <el-col class="height_auto" :span="8">
              <many-pie-chart :pieData="weekliveViewDurationData"></many-pie-chart>
              <span>注：由内而外分别是4月第1周、4月第2周、4月第3周、4月第4周</span>
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
      <!-- 四月各周直播收视日数据结束 -->

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
          <el-col class="height_auto" :span="8">
            <live-view-behavior-analysis :barListData="mobileLiveViewerData"></live-view-behavior-analysis>
          </el-col>
          <el-col class="height_auto" :span="8">
            <live-view-behavior-analysis :barListData="unicornLiveViewerData"></live-view-behavior-analysis>
          </el-col>
          <el-col class="height_auto" :span="8">
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
            <bar-chart-single :chartData="clickNumData"></bar-chart-single>
          </el-col>
        </el-row>
      </el-row>
    </el-row>
  </div>
</template>
<script>
import LineChartSingle from '@/views/backcoms/commoncomponents/LineChartSingle'  //单数据折线图组件（新增用户概览）
import BarListChartStack from "@/views/backcoms/commoncomponents/BarListChartStack"  //排名柱状图
import LineDottedChart from "@/views/backcoms/G_TVuserviewingmonthreport/LineDottedChart"  //4月新增在册用户数组件（折线图含虚线）
import LineChartSingleProp from '@/views/backcoms/commoncomponents/LineChartSingleProp'  //单数据折线图组件（百分比）
import EveryPowerActivity from "@/views/backcoms/G_TVuserviewingmonthreport/EveryPowerActivity"  //4月新增在册用户数组件（折线图含虚线）
import ManyPieChart from "@/views/backcoms/G_TVuserviewingmonthreport/ManyPieChart"  //整体收拾行为分析（多个空心饼图组成的图表）
import MonthlyTotalViewing from "@/views/backcoms/G_TVuserviewingmonthreport/MonthlyTotalViewing"  //整体收拾行为分析（多个空心饼图组成的图表）
import LiveViewBehaviorAnalysis from "@/views/backcoms/G_TVuserviewingmonthreport/LiveViewBehaviorAnalysis"  //整体收拾行为分析（多个空心饼图组成的图表）
import TypeProgramChart from "@/views/backcoms/G_TVuserviewingmonthreport/TypeProgramChart"  //整体收拾行为分析（多个空心饼图组成的图表）
import BarChartSingle from '@/views/backcoms/commoncomponents/BarChartSingle'  //柱状图

export default {
  name: 'G_TVUserViewingMonthReport',  //G+TV月度用户收视行为报告
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
    'bar-chart-single': BarChartSingle,
  },
  data() {
    return {
      //G+TV用户发展情况数据
      G_TVUserData: {
        title: "G+TV用户发展情况",
        id: "G_TVUseroVerview",
        color: ["#5B9BD4", "#FF6123",],
        data: [
          ['product', '1月', '2月', '3月', '4月'],
          ['在册用户数(万户）', 144.4, 146.4, 169.6, 191.6],
          ['新增在册用户数（万户）', 26.7, 16.4, 25.0, 23.8]
        ]
      },

      // 各州市1-4月新增在册用户数对比（万户）
      NewUserComparisonData: {
        title: "各州市1-4月新增在册用户数对比（万户）",
        id: 'newUserComparison',
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4", "#FFC000"],
        data: [
          ['product', '1月', '2月', '3月', '4月'],
          ['安顺', 2.0, 1.0, 1.6, 1.7],
          ['黔西南', 1.9, 1.2, 1.5, 1.8],
          ['六盘水', 2.3, 2.3, 1.7, 2.3],
          ['铜仁', 2.9, 1.5, 2.2, 2.3],
          ['黔东南', 3.6, 1.2, 2.1, 2.5],
          ['黔南', 2.9, 1.8, 2.6, 2.4],
          ['毕节', 2.5, 2.0, 2.7, 2.8],
          ['遵义', 4.9, 2.9, 5.0, 4.0],
          ['贵阳', 4.1, 2.7, 5.3, 5.0],
        ]
      },

      //在册用户总数数据
      registeredUsersData: {
        title: "在册用户总数（万户）",
        id: "registeredUsers",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4"],
        data: [
          ['product', '1月', '2月', '3月', '4月'],
          ['移动', 82.2, 83.4, 94.7, 103.6],
          ['联通', 35.8, 35.9, 36.9, 38.0],
          ['电信', 26.1, 27.0, 36.9, 49.7],
        ]
      },

      // 月新增在册用户对比
      monthNewRegUserData: {
        title: "月新增在册用户对比（万户）",
        id: "monthNewRegUser",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4"],
        data: [
          ['product', '1月', '2月', '3月', '4月'],
          ['移动', 82.2, 83.4, 94.7, 103.6],
          ['联通', 35.8, 35.9, 36.9, 38.0],
          ['电信', 26.1, 27.0, 36.9, 49.7],
        ]
      },

      // 月销户用户对比
      monthCancellationUserData: {
        title: "月销户用户对比（万户）",
        id: "monthCancellationUser",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4"],
        data: [
          ['product', '1月', '2月', '3月', '4月'],
          ['移动', 82.2, 83.4, 94.7, 103.6],
          ['联通', 35.8, 35.9, 36.9, 38.0],
          ['电信', 26.1, 27.0, 36.9, 49.7],
        ]
      },

      // G+TV4月分地区用户发展数据概览
      G_TVRegionUserData: {
        title: "4月各市州新增在册用户数（万户）",
        id: "G_TVRegionUser",
        color: ["#EC7C30", "#FFC000", "#6FAC46"],
        data: [
          ['product', '贵阳', '遵义', '毕节', '黔南', '铜仁', '六盘水', '黔东南', '安顺', '黔西南',],
          ['移动', 1.7, 1.8, 1.1, 0.9, 0.9, 0.8, 1.2, 0.8, 0.9],
          ['联通', 0.4, 0.3, 0.2, 0.1, 0.1, 0.8, 0.1, 0.2, 0.1],
          ['电信', 2.9, 1.9, 1.5, 1.4, 1.2, 0.8, 0.8, 0.7, 0.6],
        ]
      },

      // 4月每周新增在册用户数
      weekNewUserData: {
        title: "4月每周新增在册用户数（万户）",
        id: "weekNewUser",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4"],
        data: [
          ['product', '4月第一周', '4月第二周', '四月第三周', '四月第四周'],
          ['移动', 1.6, 2.2, 2.7, 3.0],
          ['联通', 0.4, 0.4, 0.3, 0.3],
          ['电信', 2.1, 2.8, 2.8, 3.2],
        ]
      },

      // 移动侧4月各市州新增在册用户数（千户）
      mobileNewUserData: {
        title: "移动侧4月各市州新增在册用户数（千户）",
        id: 'mobileNewUser',
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4", "#FFC000"],
        data: [
          ['product', '4月第一周', '4月第二周', '4月第三周', '4月第四周'],
          ['安顺', 1.6, 2.0, 2.5, 2.0],
          ['黔西南', 1.9, 1.8, 2.3, 2.1],
          ['铜仁', 1.3, 2.2, 2.3, 2.1],
          ['黔南', 1.5, 2.0, 3.2, 3.6],
          ['毕节', 1.7, 2.2, 2.8, 3.6],
          ['黔东南', 1.5, 2.0, 3.4, 3.6],
          ['贵阳', 2.7, 3.6, 4.2, 5.1],
          ['遵义', 2.5, 3.9, 4.7, 5.3],
          ['六盘水', 7.5, 7.5, 7.5, 2.8],
        ]
      },

      // 联通侧4月各市州新增在册用户数（千户）
      unicornNewUserData: {
        title: "联通侧4月各市州新增在册用户数（千户）",
        id: 'unicornNewUser',
        color: ["#EC7C30", "#FFC000", "#6FAC46", "#9E470E"],
        data: [
          ['product', '4月第一周', '4月第二周', '4月第三周', '4月第四周'],
          ['安顺', 1.6, 2.0, 2.5, 2.0],
          ['黔西南', 1.9, 1.8, 2.3, 2.1],
          ['铜仁', 1.3, 2.2, 2.3, 2.1],
          ['黔南', 1.5, 2.0, 3.2, 3.6],
          ['毕节', 1.7, 2.2, 2.8, 3.6],
          ['黔东南', 1.5, 2.0, 3.4, 3.6],
          ['贵阳', 2.7, 3.6, 4.2, 5.1],
          ['遵义', 2.5, 3.9, 4.7, 5.3],
          ['六盘水', 7.5, 7.5, 7.5, 2.8],
        ]
      },

      // 联通表格数据  (暂时未用到)
      unicornTableData: [
        {
          name: '',
          data1: '黔东南',
          data2: '黔南',
          data3: '黔西南',
          data4: '铜仁',
          data5: '毕节',
          data6: '安顺',
          data7: '遵义',
          data8: '贵阳',
          data9: '六盘水',
        }, {
          name: '4月第一周',
          data1: 0.1,
          data2: 0.3,
          data3: 0.3,
          data4: 0.3,
          data5: 0.3,
          data6: 0.5,
          data7: 0.7,
          data8: 0.9,
          data9: 7.5,
        }, {
          name: '4月第二周',
          data1: 0.1,
          data2: 0.2,
          data3: 0.3,
          data4: 0.3,
          data5: 0.4,
          data6: 0.4,
          data7: 0.6,
          data8: 0.9,
          data9: 7.5,
        }, {
          name: '4月第三周',
          data1: 0.1,
          data2: 0.2,
          data3: 0.3,
          data4: 0.3,
          data5: 0.4,
          data6: 0.4,
          data7: 0.6,
          data8: 0.9,
          data9: 7.5,
        }, {
          name: '4月第四周',
          data1: 0.1,
          data2: 0.3,
          data3: 0.3,
          data4: 0.3,
          data5: 0.3,
          data6: 0.5,
          data7: 0.7,
          data8: 0.9,
          data9: 7.5,
        }
      ],

      // 电信侧4月各市州新增在册用户数（千户）
      telecomNewUserData: {
        title: "电信侧4月各市州新增在册用户数（千户）",
        id: 'telecomNewUser',
        color: ["#6FAC46", "#4471C4", "#FFC000", "#43682B"],
        data: [
          ['product', '4月第一周', '4月第二周', '4月第三周', '4月第四周'],
          ['安顺', 1.6, 2.0, 2.5, 2.0],
          ['黔西南', 1.9, 1.8, 2.3, 2.1],
          ['铜仁', 1.3, 2.2, 2.3, 2.1],
          ['黔南', 1.5, 2.0, 3.2, 3.6],
          ['毕节', 1.7, 2.2, 2.8, 3.6],
          ['黔东南', 1.5, 2.0, 3.4, 3.6],
          ['贵阳', 2.7, 3.6, 4.2, 5.1],
          ['遵义', 2.5, 3.9, 4.7, 5.3],
          ['六盘水', 7.5, 7.5, 7.5, 2.8],
        ]
      },

      // G+TV4月每日用户发展数据
      everyDayUserData: {
        title: "4月日新增在册用户数（千户）",
        id: "everyDayUser",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4", "#FFC000"],
        data: [
          [
            'product',
            '4月1日', '4月2日', '4月3日', '4月4日', '4月5日', '4月6日', '4月7日', '4月8日', '4月9日', '4月10日',
            '4月11日', '4月12日', '4月13日', '4月14日', '4月15日', '4月16日', '4月17日', '4月18日', '4月19日', '4月20日',
            '4月21日', '4月22日', '4月23日', '4月24日', '4月25日', '4月26日', '4月27日', '4月28日', '4月29日', '4月30日',
          ],
          ['移动',
            1.7, 1.8, 1.1, 0.9, 0.8, 1.2, 0.8, 0.9, 1.2,
            1.7, 1.8, 1.1, 0.9, 0.9, 0.8, 1.2, 0.8, 0.9, 1.2,
            1.7, 1.8, 1.1, 0.9, 0.9, 0.8, 1.2, 0.8, 0.9, 5.6,
          ],
          ['联通',
            0.4, 0.3, 0.2, 0.1, 0.8, 0.1, 0.2, 0.1, 0.8,
            0.4, 0.3, 0.2, 0.1, 0.1, 0.8, 0.1, 0.2, 0.1, 0.8,
            0.4, 0.3, 0.2, 0.1, 0.1, 0.8, 0.1, 0.2, 0.1, 0.7,
          ],
          ['电信',
            2.9, 1.9, 1.5, 1.4, 1.2, 0.8, 0.7, 0.6, 0.9,
            2.9, 1.9, 1.5, 1.4, 1.2, 0.8, 0.8, 0.7, 0.6, 0.9,
            2.9, 1.9, 1.5, 1.4, 1.2, 0.8, 0.8, 0.7, 0.6, 5.4,
          ],
          ['线性（移动）',
            2.0, 2.2, 2.4, 2.6, 3.0, 3.2, 3.4, 3.6, 3.8,
            4.0, 4.2, 4.4, 4.6, 4.8, 5.0, 5.2, 5.4, 5.5, 5.7,
            5.8, 5.9, 6.0, 6.2, 6.4, 6.6, 6.8, 7.0, 7.2, 7.4,
          ],
        ]
      },

      //开机活跃数据
      //移动、电信、联通侧月开机活跃率数据
      monthPowerActivityData: {
        title: "移动、电信、联通侧月开机活跃率",
        id: "monthPowerActivity",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4", "#FFC000"],
        data: [
          ['product', '1月', '2月', '3月', '4月'],
          ['移动', 82.2, 83.4, 94.7, 89.6],
          ['联通', 35.8, 35.9, 36.9, 38.0],
          ['电信', 26.1, 27.0, 36.9, 49.7],
          ['总开机率', 58.8, 61.9, 59.7, 56.1],
        ]
      },
      //各市州4月开机活跃率
      areaPowerActivityData: {
        title: "各市州4月开机活跃率",
        id: "areaPowerActivity",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4", "#FFC000"],
        data: [
          ['product', '贵阳', '遵义', '六盘水', '铜仁', '黔南', '安顺', '毕节', '黔东南', '黔西南'],
          ['移动', 82.2, 83.4, 94.7, 89.6, 82.2, 83.4, 94.7, 89.6, 83.4],
          ['联通', 35.8, 35.9, 36.9, 38.0, 35.8, 35.9, 36.9, 38.0, 35.8,],
          ['电信', 26.1, 27.0, 36.9, 49.7, 26.1, 27.0, 36.9, 49.7, 27.0],
          ['总开机活跃率', 58.8, 61.9, 59.7, 56.1, 58.8, 61.9, 59.7, 56.1, 61.9],
        ]
      },

      // 日开机活跃数据
      everyPowerActivityData: {
        title: "日开机活跃率",
        id: "everyPowerActivity",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4", "#FFC000"],
        data: [
          [
            'product',
            '4月1日', '4月2日', '4月3日', '4月4日', '4月5日', '4月6日', '4月7日', '4月8日', '4月9日', '4月10日',
            '4月11日', '4月12日', '4月13日', '4月14日', '4月15日', '4月16日', '4月17日', '4月18日', '4月19日', '4月20日',
            '4月21日', '4月22日', '4月23日', '4月24日', '4月25日', '4月26日', '4月27日', '4月28日', '4月29日', '4月30日',
          ],
          ['移动',
            1.7, 1.8, 1.1, 0.9, 0.8, 1.2, 0.8, 0.9, 1.2,
            1.7, 1.8, 1.1, 0.9, 0.9, 0.8, 1.2, 0.8, 0.9, 1.2,
            1.7, 1.8, 1.1, 0.9, 0.9, 0.8, 1.2, 0.8, 0.9, 5.6,
          ],
          ['联通',
            0.4, 0.3, 0.2, 0.1, 0.8, 0.1, 0.2, 0.1, 0.8,
            0.4, 0.3, 0.2, 0.1, 0.1, 0.8, 0.1, 0.2, 0.1, 0.8,
            0.4, 0.3, 0.2, 0.1, 0.1, 0.8, 0.1, 0.2, 0.1, 0.7,
          ],
          ['电信',
            2.9, 1.9, 1.5, 1.4, 1.2, 0.8, 0.7, 0.6, 0.9,
            2.9, 1.9, 1.5, 1.4, 1.2, 0.8, 0.8, 0.7, 0.6, 0.9,
            2.9, 1.9, 1.5, 1.4, 1.2, 0.8, 0.8, 0.7, 0.6, 5.4,
          ],
          ['总开机活跃',
            2.0, 2.2, 2.4, 2.6, 3.0, 3.2, 3.4, 3.6, 3.8,
            4.0, 4.2, 4.4, 4.6, 4.8, 5.0, 5.2, 5.4, 5.5, 5.7,
            5.8, 5.9, 6.0, 6.2, 6.4, 6.6, 6.8, 7.0, 7.2, 7.4,
          ],
        ]
      },

      //4月三大基础功能使用用户占比
      usingTheUser: {
        title: "4月三大基础功能使用用户占比",
        id: 'usingTheUser',
        color: ["#B4CFA8", "#6FAC46", "#5B8E39"],
        content: [
          {
            title: "4月三大基础功能使用用户占比",
            data: [
              { value: 535, name: '直播' },
              { value: 410, name: '回看' },
              { value: 348, name: '点播' }
            ],
          },
          {
            title: "3月三大基础功能使用用户占比",
            data: [
              { value: 535, name: '直播' },
              { value: 410, name: '回看' },
              { value: 348, name: '点播' }
            ],
          },
          {
            title: "2月三大基础功能使用用户占比",
            data: [
              { value: 535, name: '直播' },
              { value: 410, name: '回看' },
              { value: 348, name: '点播' }
            ],
          },
          {
            title: "1月三大基础功能使用用户占比",
            data: [
              { value: 535, name: '直播' },
              { value: 410, name: '回看' },
              { value: 348, name: '点播' }
            ],
          }
        ],
      },

      //4月三大基础功能使用次数占比
      usingTheTime: {
        title: "4月三大基础功能使用次数占比",
        id: 'usingTheTimes',
        color: ["#878787", "#A4A4A4", "#CACACA"],
        content: [
          {
            title: "4月三大基础功能使用次数占比",
            data: [
              { value: 535, name: '直播' },
              { value: 410, name: '回看' },
              { value: 348, name: '点播' }
            ],
          },
          {
            title: "3月三大基础功能使用次数占比",
            data: [
              { value: 535, name: '直播' },
              { value: 410, name: '回看' },
              { value: 348, name: '点播' }
            ],
          },
          {
            title: "2月三大基础功能使用次数占比",
            data: [
              { value: 535, name: '直播' },
              { value: 410, name: '回看' },
              { value: 348, name: '点播' }
            ],
          },
          {
            title: "1月三大基础功能使用次数占比",
            data: [
              { value: 535, name: '直播' },
              { value: 410, name: '回看' },
              { value: 348, name: '点播' }
            ],
          }
        ],
      },
      //4月三大基础功能使用次数占比
      usingTheDuration: {
        title: "4月三大基础功能使用时长占比",
        id: 'usingTheDuration',
        color: ["#D29E00", "#FFC000", "#FFD99D"],
        content: [
          {
            title: "4月三大基础功能使用时长占比",
            data: [
              { value: 535, name: '直播' },
              { value: 410, name: '回看' },
              { value: 348, name: '点播' }
            ],
          },
          {
            title: "3月三大基础功能使用时长占比",
            data: [
              { value: 535, name: '直播' },
              { value: 410, name: '回看' },
              { value: 348, name: '点播' }
            ],
          },
          {
            title: "2月三大基础功能使用时长占比",
            data: [
              { value: 535, name: '直播' },
              { value: 410, name: '回看' },
              { value: 348, name: '点播' }
            ],
          },
          {
            title: "1月三大基础功能使用时长占比",
            data: [
              { value: 535, name: '直播' },
              { value: 410, name: '回看' },
              { value: 348, name: '点播' }
            ],
          }
        ],
      },

      // 4月总体收视数据
      monthlyTotalViewingData: {
        title: "4月总体收视数据",
        id: "monthlyTotalViewing",
        color: ["#EC7C30", "#A4A4A4", "#5B9BD4"],
        data: [
          ['product', '1月', '2月', '3月', '4月'],
          ['观看次数（百万次）', 103.1, 102.2, 90.5, 104.8],
          ['观看时长数（百万小时）', 99.3, 110.0, 106.2, 126.9],
          ['观看用户数（百万户）', 1.4, 1.6, 1.5, 1.7],
        ]
      },

      // 直播观看时长数据
      liveViewingDurationData: {
        title: "直播观看时长数据",
        id: 'liveViewingDuration',
        color: ["#F4B8A3", "#EC7C30", "#C46627"],
        content: [
          {
            title: "4月直播观看时长数据",
            data: [
              { value: 535, name: '移动' },
              { value: 410, name: '联通' },
              { value: 348, name: '电信' }
            ],
          },
          {
            title: "3月直播观看时长数据",
            data: [
              { value: 535, name: '移动' },
              { value: 410, name: '联通' },
              { value: 348, name: '电信' }
            ],
          },
          {
            title: "2月直播观看时长数据",
            data: [
              { value: 535, name: '移动' },
              { value: 410, name: '联通' },
              { value: 348, name: '电信' }
            ],
          },
          {
            title: "1月直播观看时长数据",
            data: [
              { value: 535, name: '移动' },
              { value: 410, name: '联通' },
              { value: 348, name: '电信' }
            ],
          }
        ],
      },
      //直播观看用户数据
      liveViewingUserData: {
        title: "直播观看用户数据",
        id: 'liveViewingUser',
        color: ["#878787", "#A4A4A4", "#CACACA"],
        content: [
          {
            title: "4月直播观看用户数据",
            data: [
              { value: 535, name: '移动' },
              { value: 410, name: '联通' },
              { value: 348, name: '电信' }
            ],
          },
          {
            title: "3月直播观看用户数据",
            data: [
              { value: 535, name: '移动' },
              { value: 410, name: '联通' },
              { value: 348, name: '电信' }
            ],
          },
          {
            title: "2月直播观看用户数据",
            data: [
              { value: 535, name: '移动' },
              { value: 410, name: '联通' },
              { value: 348, name: '电信' }
            ],
          },
          {
            title: "1月直播观看用户数据",
            data: [
              { value: 535, name: '移动' },
              { value: 410, name: '联通' },
              { value: 348, name: '电信' }
            ],
          }
        ],
      },
      // 直播观看次数数据
      liveViewingTimesData: {
        title: "直播观看用户数据",
        id: 'liveViewingTimes',
        color: ["#D29E00", "#FFC000", "#FFD99F"],
        content: [
          {
            title: "4月直播观看用户数据",
            data: [
              { value: 535, name: '移动' },
              { value: 410, name: '联通' },
              { value: 348, name: '电信' }
            ],
          },
          {
            title: "3月直播观看用户数据",
            data: [
              { value: 535, name: '移动' },
              { value: 410, name: '联通' },
              { value: 348, name: '电信' }
            ],
          },
          {
            title: "2月直播观看用户数据",
            data: [
              { value: 535, name: '移动' },
              { value: 410, name: '联通' },
              { value: 348, name: '电信' }
            ],
          },
          {
            title: "1月直播观看用户数据",
            data: [
              { value: 535, name: '移动' },
              { value: 410, name: '联通' },
              { value: 348, name: '电信' }
            ],
          }
        ],
      },
      // 1-4月直播收视数据
      monthlyTotalViewingData2: {
        title: "1-4月直播收视数据",
        id: "monthlyTotalViewing2",
        color: ["#EC7C30", "#A4A4A4", "#5B9BD4"],
        data: [
          ['product', '1月', '2月', '3月', '4月'],
          ['直播观看次数（百万次）', 103.1, 102.2, 90.5, 104.8],
          ['直播观看时长数（百万小时）', 99.3, 110.0, 106.2, 126.9],
          ['直播观看用户数（百万户）', 0.6, 0.7, 0.7, 0.8],
        ]
      },

      // 四月各周直播收视用户数
      weekLiveViewUserData: {
        title: "四月各周直播收视用户数",
        id: 'weekLiveViewUser',
        color: ["#F4B8A3", "#EC7C30", "#C46627"],
        content: [
          {
            title: "4月第1周直播收视用户数",
            data: [
              { value: 535, name: '移动' },
              { value: 410, name: '联通' },
              { value: 348, name: '电信' }
            ],
          },
          {
            title: "4月第2周直播收视用户数",
            data: [
              { value: 535, name: '移动' },
              { value: 410, name: '联通' },
              { value: 348, name: '电信' }
            ],
          },
          {
            title: "4月第3周直播收视用户数",
            data: [
              { value: 535, name: '移动' },
              { value: 410, name: '联通' },
              { value: 348, name: '电信' }
            ],
          },
          {
            title: "4月第4周直播收视用户数",
            data: [
              { value: 535, name: '移动' },
              { value: 410, name: '联通' },
              { value: 348, name: '电信' }
            ],
          }
        ]
      },
      //四月各周直播收视次数
      weekLiveViewTimesData: {
        title: "四月各周直播收视次数",
        id: 'weekLiveViewTimes',
        color: ["#5B8E39", "#6FAC46", "#B4CFA8"],
        content: [
          {
            title: "4月第1周直播收视次数",
            data: [
              { value: 535, name: '移动' },
              { value: 410, name: '联通' },
              { value: 348, name: '电信' }
            ],
          },
          {
            title: "4月第2周直播收视次数",
            data: [
              { value: 535, name: '移动' },
              { value: 410, name: '联通' },
              { value: 348, name: '电信' }
            ],
          },
          {
            title: "4月第3周直播收视次数",
            data: [
              { value: 535, name: '移动' },
              { value: 410, name: '联通' },
              { value: 348, name: '电信' }
            ],
          },
          {
            title: "4月第4周直播收视次数",
            data: [
              { value: 535, name: '移动' },
              { value: 410, name: '联通' },
              { value: 348, name: '电信' }
            ],
          }
        ]
      },
      //四月各周直播收视时长
      weekliveViewDurationData: {
        title: "四月各周直播收视时长",
        id: 'weekliveViewDuration',
        color: ["#D29E00", "#FFC000", "#FFD99F"],
        content: [
          {
            title: "4月第1周直播收视时长",
            data: [
              { value: 535, name: '移动' },
              { value: 410, name: '联通' },
              { value: 348, name: '电信' }
            ],
          },
          {
            title: "4月第2周直播收视时长",
            data: [
              { value: 535, name: '移动' },
              { value: 410, name: '联通' },
              { value: 348, name: '电信' }
            ],
          },
          {
            title: "4月第3周直播收视时长",
            data: [
              { value: 535, name: '移动' },
              { value: 410, name: '联通' },
              { value: 348, name: '电信' }
            ],
          },
          {
            title: "4月第4周直播收视时长",
            data: [
              { value: 535, name: '移动' },
              { value: 410, name: '联通' },
              { value: 348, name: '电信' }
            ],
          }
        ]
      },
      // 4月各周直播收视数据
      weekliveViewingData: {
        title: "1-4月直播收视数据",
        id: "weekliveViewing",
        color: ["#EC7C30", "#A4A4A4", "#5B9BD4"],
        data: [
          ['product', '4月第一周', '4月第二周', '4月第三周', '4月第四周'],
          ['直播观看次数（十万次）', 103.1, 102.2, 90.5, 104.8],
          ['直播观看时长数（十万小时）', 99.3, 110.0, 106.2, 126.9],
          ['直播观看用户数（十万户）', 0.6, 0.7, 0.7, 0.8],
        ]
      },

      //直播频道观看用户数排名（万户）
      liveViewerData: {
        title: "直播频道观看用户数排名（万户）",
        id: 'liveViewer',
        color: ["#5b9bd4", '#A4A4A4'],
        data: [
          ['product', '本月', '上月'],
          ['山东卫视（高清）', 18.8, 18.0],
          ['江苏卫视（高清', 19.1, 17.5],
          ['CCTV-2 财经', 20.0, 18.6],
          ['贵州-7 经济频道', 20.0, 17.2],
          ['贵州-6 科教健康频道', 20.2, 16.7],
          ['CCTV-15 音乐', 17.9, 16.1],
          ['浙江卫视（高清）', 18.8, 18.0],
          ['CCTV-4 中文国际（高清）', 19.1, 17.5],
          ['CCTV-10 科教', 20.0, 18.6],
          ['CCTV-7 军事农业', 20.0, 17.2],
          ['CCTV-14 少儿', 20.2, 16.7],
          ['贵州-5 法制频道', 20.4, 17.3],
          ['CCTV-12 社会与法', 20.8, 17.6],
          ['湖南卫视（高清）', 20.8, 17.2],
          ['CCTV-13 新闻', 21.4, 19.0],
          ['贵州-4 大众生活频道', 24.9, 32.0],
          ['贵州-3 影视文艺频道', 26.2, 22.3],
          ['CCTV-1 综合（高清）', 37.2, 28.7],
          ['贵州-2 公共频道', 38.1, 34.6],
          ['贵州卫视（高清）', 56.3, 37.1]
        ]
      },
      //直播频道观看次数排名
      liveViewTimesData: {
        title: "直播频道观看次数排名(百万次)",
        id: 'liveViewTimes',
        color: ["#EC7C30", '#FFC000'],
        data: [
          ['product', '本月', '上月'],
          ['山东卫视（高清）', 18.8, 18.0],
          ['江苏卫视（高清', 19.1, 17.5],
          ['CCTV-2 财经', 20.0, 18.6],
          ['贵州-7 经济频道', 20.0, 17.2],
          ['贵州-6 科教健康频道', 20.2, 16.7],
          ['CCTV-15 音乐', 17.9, 16.1],
          ['浙江卫视（高清）', 18.8, 18.0],
          ['CCTV-4 中文国际（高清）', 19.1, 17.5],
          ['CCTV-10 科教', 20.0, 18.6],
          ['CCTV-7 军事农业', 20.0, 17.2],
          ['CCTV-14 少儿', 20.2, 16.7],
          ['贵州-5 法制频道', 20.4, 17.3],
          ['CCTV-12 社会与法', 20.8, 17.6],
          ['湖南卫视（高清）', 20.8, 17.2],
          ['CCTV-13 新闻', 21.4, 19.0],
          ['贵州-4 大众生活频道', 24.9, 32.0],
          ['贵州-3 影视文艺频道', 26.2, 22.3],
          ['CCTV-1 综合（高清）', 37.2, 28.7],
          ['贵州-2 公共频道', 38.1, 34.6],
          ['贵州卫视（高清）', 56.3, 37.1]
        ]
      },
      //直播频道观看次数排名
      liveViewTimesData2: {
        title: "直播频道观看次数排名（百万小时）",
        id: 'liveViewTimes2',
        color: ["#E2AA00", '#FFDE85'],
        data: [
          ['product', '本月', '上月'],
          ['山东卫视（高清）', 18.8, 18.0],
          ['江苏卫视（高清', 19.1, 17.5],
          ['CCTV-2 财经', 20.0, 18.6],
          ['贵州-7 经济频道', 20.0, 17.2],
          ['贵州-6 科教健康频道', 20.2, 16.7],
          ['CCTV-15 音乐', 17.9, 16.1],
          ['浙江卫视（高清）', 18.8, 18.0],
          ['CCTV-4 中文国际（高清）', 19.1, 17.5],
          ['CCTV-10 科教', 20.0, 18.6],
          ['CCTV-7 军事农业', 20.0, 17.2],
          ['CCTV-14 少儿', 20.2, 16.7],
          ['贵州-5 法制频道', 20.4, 17.3],
          ['CCTV-12 社会与法', 20.8, 17.6],
          ['湖南卫视（高清）', 20.8, 17.2],
          ['CCTV-13 新闻', 21.4, 19.0],
          ['贵州-4 大众生活频道', 24.9, 32.0],
          ['贵州-3 影视文艺频道', 26.2, 22.3],
          ['CCTV-1 综合（高清）', 37.2, 28.7],
          ['贵州-2 公共频道', 38.1, 34.6],
          ['贵州卫视（高清）', 56.3, 37.1]
        ]
      },

      //直播频道观看用户数排名（移动）
      mobileLiveViewerData: {
        title: "直播频道观看用户数排名（移动）",
        id: 'mobileLiveViewer',
        color: ["#5b9bd4", '#A4A4A4'],
        data: [
          ['product', '本月', '上月'],
          ['山东卫视（高清）', 18.8, 18.0],
          ['江苏卫视（高清', 19.1, 17.5],
          ['CCTV-2 财经', 20.0, 18.6],
          ['贵州-7 经济频道', 20.0, 17.2],
          ['贵州-6 科教健康频道', 20.2, 16.7],
          ['CCTV-15 音乐', 17.9, 16.1],
          ['浙江卫视（高清）', 18.8, 18.0],
          ['CCTV-4 中文国际（高清）', 19.1, 17.5],
          ['CCTV-10 科教', 20.0, 18.6],
          ['CCTV-7 军事农业', 20.0, 17.2],
          ['CCTV-14 少儿', 20.2, 16.7],
          ['贵州-5 法制频道', 20.4, 17.3],
          ['CCTV-12 社会与法', 20.8, 17.6],
          ['湖南卫视（高清）', 20.8, 17.2],
          ['CCTV-13 新闻', 21.4, 19.0],
          ['贵州-4 大众生活频道', 24.9, 32.0],
          ['贵州-3 影视文艺频道', 26.2, 22.3],
          ['CCTV-1 综合（高清）', 37.2, 28.7],
          ['贵州-2 公共频道', 38.1, 34.6],
          ['贵州卫视（高清）', 56.3, 37.1]
        ]
      },
      //直播频道观看用户数排名（联通）
      unicornLiveViewerData: {
        title: "直播频道观看用户数排名（联通）",
        id: 'unicornLiveViewer',
        color: ["#EC7C30", '#FFC000'],
        data: [
          ['product', '本月', '上月'],
          ['山东卫视（高清）', 18.8, 18.0],
          ['江苏卫视（高清', 19.1, 17.5],
          ['CCTV-2 财经', 20.0, 18.6],
          ['贵州-7 经济频道', 20.0, 17.2],
          ['贵州-6 科教健康频道', 20.2, 16.7],
          ['CCTV-15 音乐', 17.9, 16.1],
          ['浙江卫视（高清）', 18.8, 18.0],
          ['CCTV-4 中文国际（高清）', 19.1, 17.5],
          ['CCTV-10 科教', 20.0, 18.6],
          ['CCTV-7 军事农业', 20.0, 17.2],
          ['CCTV-14 少儿', 20.2, 16.7],
          ['贵州-5 法制频道', 20.4, 17.3],
          ['CCTV-12 社会与法', 20.8, 17.6],
          ['湖南卫视（高清）', 20.8, 17.2],
          ['CCTV-13 新闻', 21.4, 19.0],
          ['贵州-4 大众生活频道', 24.9, 32.0],
          ['贵州-3 影视文艺频道', 26.2, 22.3],
          ['CCTV-1 综合（高清）', 37.2, 28.7],
          ['贵州-2 公共频道', 38.1, 34.6],
          ['贵州卫视（高清）', 56.3, 37.1]
        ]
      },
      //直播频道观看用户数排名（电信）
      telecomLiveViewerData: {
        title: "直播频道观看用户数排名（电信）",
        id: 'telecomLiveViewer',
        color: ["#E2AA00", '#FFDE85'],
        data: [
          ['product', '本月', '上月'],
          ['山东卫视（高清）', 18.8, 18.0],
          ['江苏卫视（高清', 19.1, 17.5],
          ['CCTV-2 财经', 20.0, 18.6],
          ['贵州-7 经济频道', 20.0, 17.2],
          ['贵州-6 科教健康频道', 20.2, 16.7],
          ['CCTV-15 音乐', 17.9, 16.1],
          ['浙江卫视（高清）', 18.8, 18.0],
          ['CCTV-4 中文国际（高清）', 19.1, 17.5],
          ['CCTV-10 科教', 20.0, 18.6],
          ['CCTV-7 军事农业', 20.0, 17.2],
          ['CCTV-14 少儿', 20.2, 16.7],
          ['贵州-5 法制频道', 20.4, 17.3],
          ['CCTV-12 社会与法', 20.8, 17.6],
          ['湖南卫视（高清）', 20.8, 17.2],
          ['CCTV-13 新闻', 21.4, 19.0],
          ['贵州-4 大众生活频道', 24.9, 32.0],
          ['贵州-3 影视文艺频道', 26.2, 22.3],
          ['CCTV-1 综合（高清）', 37.2, 28.7],
          ['贵州-2 公共频道', 38.1, 34.6],
          ['贵州卫视（高清）', 56.3, 37.1]
        ]
      },

      // 1-4月点播收视数据
      monthlyDemandViewingData: {
        title: "1-4月点播收视数据",
        id: "monthlyDemandViewing",
        color: ["#FFC000", "#6FAC46", "#EC7C30"],
        data: [
          ['product', '1月', '2月', '3月', '4月'],
          ['点播观看次数', 103.1, 102.2, 90.5, 104.8],
          ['点播观看时长数', 99.3, 110.0, 106.2, 126.9],
          ['点播观看用户数', 1.4, 1.6, 1.5, 1.7],
        ]
      },
      // 4月各周点播收视数据
      weekDemandViewingData: {
        title: "4月各周点播收视数据",
        id: "weekDemandViewing",
        color: ["#EC7C30", "#A4A4A4", "#5B9BD4"],
        data: [
          ['product', '1月', '2月', '3月', '4月'],
          ['直播收视次数', 103.1, 102.2, 90.5, 104.8],
          ['直播收视时长', 99.3, 110.0, 106.2, 126.9],
          ['直播收视用户数', 1.4, 1.6, 1.5, 1.7],
        ]
      },

      //点播用户数
      demandUserNumData: {
        title: '点播用户数',
        id: 'demandUserNum',
        color: ["#EC7C30", "#FFC000", "#6FAC46"],
        data: [
          ['product', '本月', '上月', '环比'],
          ['少儿', 43300, 13563, 11.38],
          ['电影', 83000, 16457, 2.21],
          ['游戏', 76000, 17096, 13.33],
          ['热剧', 66000, 57896, 28.84],
          ['动漫', 86080, 17096, 12.68],
          ['综艺', 56000, 27896, 32.26],
          ['纪实', 36000, 15896, 19.31],
          ['音乐', 26000, 12896, 36.71],
          ['体育', 66000, 7896, 1.22],
          ['资讯', 16000, 17896, 13.33],
        ]
      },
      //点播次数环比
      demandTimesData: {
        title: '点播次数环比',
        id: 'demandTimes',
        color: ["#D29E00", "#FFC000", "#FFD99F"],
        data: [
          ['product', '本月', '上月', '环比'],
          ['少儿', 43300, 13563, 11.38],
          ['电影', 83000, 16457, 2.21],
          ['游戏', 76000, 17096, 13.33],
          ['热剧', 66000, 57896, 28.84],
          ['动漫', 86080, 17096, 12.68],
          ['综艺', 56000, 27896, 32.26],
          ['纪实', 36000, 15896, 19.31],
          ['音乐', 26000, 12896, 36.71],
          ['体育', 66000, 7896, 1.22],
          ['资讯', 16000, 17896, 13.33],
        ]
      },
      //点播时长环比
      demandDurationData: {
        title: '点播时长环比',
        id: 'demandDuration',
        color: ["#ACC5E4", "#5B9BD4", "#497EAF"],
        data: [
          ['product', '本月', '上月', '环比'],
          ['少儿', 43300, 13563, 11.38],
          ['电影', 83000, 16457, 2.21],
          ['游戏', 76000, 17096, 13.33],
          ['热剧', 66000, 57896, 28.84],
          ['动漫', 86080, 17096, 12.68],
          ['综艺', 56000, 27896, 32.26],
          ['纪实', 36000, 15896, 19.31],
          ['音乐', 26000, 12896, 36.71],
          ['体育', 66000, 7896, 1.22],
          ['资讯', 16000, 17896, 13.33],
        ]
      },

      //主要栏目页面点击用户数对比
      programPageClickUserData: {
        title: '主要栏目页面点击用户数对比',
        id: 'programPageClickUser',
        color: ["#EC7C30", "#FFC000", "#6FAC46"],
        data: [
          ['product', '本月', '上月', '环比'],
          ['少儿', 43300, 13563, 11.38],
          ['电影', 83000, 16457, 2.21],
          ['游戏', 76000, 17096, 13.33],
          ['热剧', 66000, 57896, 28.84],
          ['动漫', 86080, 17096, 12.68],
          ['综艺', 56000, 27896, 32.26],
          ['纪实', 36000, 15896, 19.31],
          ['音乐', 26000, 12896, 36.71],
          ['体育', 66000, 7896, 1.22],
          ['资讯', 16000, 17896, 13.33],
        ]
      },
      //主要栏目页面点击次数对比
      programPageClickNumData: {
        title: '主要栏目页面点击次数对比',
        id: 'programPageClickNum',
        color: ["#ACC5E4", "#5B9BD4", "#497EAF"],
        data: [
          ['product', '本月', '上月', '环比'],
          ['少儿', 43300, 13563, 11.38],
          ['电影', 83000, 16457, 2.21],
          ['游戏', 76000, 17096, 13.33],
          ['热剧', 66000, 57896, 28.84],
          ['动漫', 86080, 17096, 12.68],
          ['综艺', 56000, 27896, 32.26],
          ['纪实', 36000, 15896, 19.31],
          ['音乐', 26000, 12896, 36.71],
          ['体育', 66000, 7896, 1.22],
          ['资讯', 16000, 17896, 13.33],
        ]
      },

      // 点播用户数对比（万户）
      demandUserNumData2: {
        title: "点播用户数对比（万户）",
        id: 'demandUserNum2',
        color: ["#5B9BD4", '#EC7C30'],
        data: [
          ['product', '本月', '上月'],
          ['（电视剧）封神演义', 18.8, 18.0],
          ['（电视剧）新白娘子传奇2019', 19.1, 17.5],
          ['（电影）飞驰人生', 20.0, 18.6],
          ['（电视剧）青春斗', 20.0, 17.2],
          ['（少儿）猪猪侠之竞球小英雄第二部', 20.2, 16.7],
          ['（少儿）熊出没之探险日记 第二季', 17.9, 16.1],
          ['（电视剧）招摇', 18.8, 18.0],
          ['（电视剧）黄河英雄', 19.1, 17.5],
          ['（电视剧）夜空中最闪亮的星', 20.0, 18.6],
          ['（综艺）王牌对王牌 第四季', 20.0, 17.2],
          ['（少儿）汪汪队立大功 第四季', 20.2, 16.7],
          ['（电影）狂暴凶狮', 20.4, 17.3],
          ['（通灵妃）通灵妃', 20.8, 17.6],
          ['湖南卫视（高清）', 20.8, 17.2],
          ['（电影）绿毛怪格林奇（原声版）', 21.4, 19.0],
          ['（电影）钢铁飞龙之奥特曼崛起', 24.9, 32.0],
          ['（少儿）宝宝巴士启蒙音乐剧之汽车家族', 26.2, 22.3],
          ['（电视剧）推手', 37.2, 28.7],
          ['（动漫）猫妖的诱惑', 38.1, 34.6],
          ['（少儿）假面骑士时王', 56.3, 37.1]
        ]
      },
      // 点播次数对比（十万次）
      demandTimesData2: {
        title: "点播次数对比（十万次）",
        id: 'demandTimes2',
        color: ["#EC7C30", '#FFC000'],
        data: [
          ['product', '本月', '上月'],
          ['（电视剧）封神演义', 18.8, 18.0],
          ['（电视剧）新白娘子传奇2019', 19.1, 17.5],
          ['（电影）飞驰人生', 20.0, 18.6],
          ['（电视剧）青春斗', 20.0, 17.2],
          ['（少儿）猪猪侠之竞球小英雄第二部', 20.2, 16.7],
          ['（少儿）熊出没之探险日记 第二季', 17.9, 16.1],
          ['（电视剧）招摇', 18.8, 18.0],
          ['（电视剧）黄河英雄', 19.1, 17.5],
          ['（电视剧）夜空中最闪亮的星', 20.0, 18.6],
          ['（综艺）王牌对王牌 第四季', 20.0, 17.2],
          ['（少儿）汪汪队立大功 第四季', 20.2, 16.7],
          ['（电影）狂暴凶狮', 20.4, 17.3],
          ['（通灵妃）通灵妃', 20.8, 17.6],
          ['湖南卫视（高清）', 20.8, 17.2],
          ['（电影）绿毛怪格林奇（原声版）', 21.4, 19.0],
          ['（电影）钢铁飞龙之奥特曼崛起', 24.9, 32.0],
          ['（少儿）宝宝巴士启蒙音乐剧之汽车家族', 26.2, 22.3],
          ['（电视剧）推手', 37.2, 28.7],
          ['（动漫）猫妖的诱惑', 38.1, 34.6],
          ['（少儿）假面骑士时王', 56.3, 37.1]
        ]
      },
      // 点播时长对比（十万小时）
      demandDurationData2: {
        title: "点播时长对比（十万小时）",
        id: 'demandDuration2',
        color: ["#6FAC46", '#4471C4'],
        data: [
          ['product', '本月', '上月'],
          ['（电视剧）封神演义', 18.8, 18.0],
          ['（电视剧）新白娘子传奇2019', 19.1, 17.5],
          ['（电影）飞驰人生', 20.0, 18.6],
          ['（电视剧）青春斗', 20.0, 17.2],
          ['（少儿）猪猪侠之竞球小英雄第二部', 20.2, 16.7],
          ['（少儿）熊出没之探险日记 第二季', 17.9, 16.1],
          ['（电视剧）招摇', 18.8, 18.0],
          ['（电视剧）黄河英雄', 19.1, 17.5],
          ['（电视剧）夜空中最闪亮的星', 20.0, 18.6],
          ['（综艺）王牌对王牌 第四季', 20.0, 17.2],
          ['（少儿）汪汪队立大功 第四季', 20.2, 16.7],
          ['（电影）狂暴凶狮', 20.4, 17.3],
          ['（通灵妃）通灵妃', 20.8, 17.6],
          ['湖南卫视（高清）', 20.8, 17.2],
          ['（电影）绿毛怪格林奇（原声版）', 21.4, 19.0],
          ['（电影）钢铁飞龙之奥特曼崛起', 24.9, 32.0],
          ['（少儿）宝宝巴士启蒙音乐剧之汽车家族', 26.2, 22.3],
          ['（电视剧）推手', 37.2, 28.7],
          ['（动漫）猫妖的诱惑', 38.1, 34.6],
          ['（少儿）假面骑士时王', 56.3, 37.1]
        ]
      },

      // 付费用户收视行为分析开始
      // 新增在册用户转化对比
      newAddUserData: {
        title: '主要栏目页面点击用户数对比',
        id: 'newAddUser',
        color: ["#EC7C30", "#FFC000", "#6FAC46"],
        data: [
          ['product', '新增付费用户数', '新增在册用户数', '新增在册用户转化率'],
          ['3月', 6300, 13563, 6.1],
          ['4月', 8000, 16457, 5.7],
        ]
      },
      // 引导用户付费内容排名
      payingUserData: {
        title: "点播用户数对比（万户）",
        id: 'payingUser',
        color: ["#5B9BD4"],
        data: [
          ['product', '本月'],
          ['（电视剧）封神演义', 78],
          ['（电视剧）新白娘子传奇2019', 91],
          ['（电影）飞驰人生', 98],
          ['（电视剧）青春斗', 101],
          ['（少儿）猪猪侠之竞球小英雄第二部', 150],
          ['（少儿）熊出没之探险日记 第二季', 179],
          ['（电视剧）招摇', 188],
          ['（电视剧）黄河英雄', 191],
          ['（电视剧）夜空中最闪亮的星', 285],
          ['（综艺）王牌对王牌 第四季', 302],
          ['（少儿）汪汪队立大功 第四季', 340],
          ['（电影）狂暴凶狮', 396],
          ['（通灵妃）通灵妃', 400],
          ['湖南卫视（高清）', 452],
          ['（电影）绿毛怪格林奇（原声版）', 465],
          ['（电影）钢铁飞龙之奥特曼崛起', 480],
          ['（少儿）宝宝巴士启蒙音乐剧之汽车家族', 506],
          ['（电视剧）推手', 527],
          ['（动漫）猫妖的诱惑', 538],
          ['（少儿）假面骑士时王', 560]
        ]
      },

      // 本土原创节目收视行为分析
      // 原创节目四月点播数据
      monthDemandData: {
        title: '原创节目四月点播数据',
        id: 'monthDemand',
        color: ["#ccc", "#5B9BD4"],
        data: [
          ['product', '三月', '四月'],
          ['点播用户数（万户）', 4330, 13563],
          ['点播次数（万次）', 8300, 16457],
          ['点播时长（万小时）', 4330, 16457]
        ]
      },

    }
  },
  mounted() { }
}
</script>
<style scoped>
.viewing_behavior_report {
  height: 500px;
  margin: 24px 0px;
}

/* G+TV用户发展数据概览开始 */
.G_TV_user_dev_data {
  height: 500px;
  margin-bottom: 24px;
}
/* G+TV用户发展数据概览结束 */

.week_region_data {
  height: 500px;
  margin-bottom: 24px;
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
  margin-bottom: 24px;
}

/* 整体收视行为分析 */
.analysis_of_viewing {
  height: 990px;
  margin-bottom: 24px;
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
  margin-bottom: 24px;
}

/* 整体点播收视行为 */
.overall_demand {
  height: 450px;
  padding-bottom: 60px;
  margin-bottom: 24px;
}

.type_program_data {
  height: 500px;
  padding-bottom: 60px;
  margin-bottom: 24px;
}
.paying_user_div {
  height: 800px;
  margin-bottom: 24px;
}
.local_originality {
  height: 400px;
}
</style>
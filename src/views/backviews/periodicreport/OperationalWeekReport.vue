<template>
  <div class="height_auto Operational_Week">
    <!-- 移动运营数据周报开始 -->
    <el-row class="OperationalWeekReport">
      <!-- 左侧内容开始 -->
      <el-col class="height_auto operational_left_content">
        <el-row class="periodic_report_title">运营数据周报</el-row>
        <el-row class="operational_left_content_body">
          <!-- 模块一 G+TV一周整体数据概览开始-->
          <!-- 一周用户活跃情况开始 -->
          <el-row class="marginbottom_14" id="weekly_whole_data">
            <el-row class="model_title">
              <span class="title_border_left"></span>一周用户活跃情况
            </el-row>
            <el-row class="hebdomad_user_active_body back_white">
              <el-col class="height_auto" :span="12">
                <type-program-chart :chartData="userNumAddPowerData"></type-program-chart>
              </el-col>
              <el-col class="height_auto" :span="12">
                <type-program-chart :chartData="dailyOperatingRateData"></type-program-chart>
              </el-col>
            </el-row>
          </el-row>
          <!-- 一周用户活跃情况结束 -->

          <!-- 一周用户收视概览开始 -->
          <el-row class="marginbottom_14">
            <el-row class="model_title">
              <span class="title_border_left"></span>一周用户收视概览
            </el-row>
            <el-row class="hebdomad_user_active_body back_white">
              <el-col class="height_auto" :span="12">
                <bar-chart-single :chartData="hebdomadViewNumData"></bar-chart-single>
              </el-col>
              <el-col class="height_auto" :span="12">
                <three-based-user-view :lineData="threeBasedUserViewData"></three-based-user-view>
              </el-col>
            </el-row>
          </el-row>
          <!-- 一周用户收视概览结束 -->

          <!-- 一周热力数据概览开始 -->
          <el-row class="marginbottom_14">
            <el-row class="model_title">
              <span class="title_border_left"></span>一周热力数据概览
            </el-row>
            <el-row class="hebdomad_thermodynamic_body back_white">
              <el-col class="height_auto" :span="12">
                <many-pie-chart3 :pieData="pageClickNumData"></many-pie-chart3>
              </el-col>
              <el-col class="height_auto" :span="12">
                <type-program-chart :chartData="hebdomadHotData"></type-program-chart>
              </el-col>
            </el-row>
          </el-row>
          <!-- 一周热力数据概览结束 -->
          <!-- 模块一 G+TV一周整体数据概览结束-->

          <!-- 模块二 一周点播数据及运营分析开始-->
          <!-- 一周点播数据概览开始 -->
          <el-row class="marginbottom_14" id="weekly_data_on_demand">
            <el-row class="model_title">
              <span class="title_border_left"></span>一周点播数据概览
            </el-row>
            <el-row class="hebdomad_dibble_seeding_body back_white">
              <el-col class="height_auto" :span="12">
                <bar-chart-single :chartData="hebdomadDibbleSeedingData"></bar-chart-single>
              </el-col>
              <el-col class="height_auto" :span="12">
                <live-view-behavior-analysis :barListData="hebdomadDibbleSeedingTOPData"></live-view-behavior-analysis>
              </el-col>
            </el-row>
          </el-row>
          <!-- 一周点播数据概览结束 -->

          <!-- 各类型节目点播数据开始 -->
          <el-row class="marginbottom_14">
            <el-row class="model_title">
              <span class="title_border_left"></span>各类型节目点播数据
            </el-row>
            <el-row class="types_programmes_body back_white">
              <el-col class="height_auto" :span="8">
                <types-programmes-play :barListData="dibbleSeedingUserNumData"></types-programmes-play>
              </el-col>
              <el-col class="height_auto" :span="8">
                <types-programmes-play :barListData="dibbleSeedingNumData"></types-programmes-play>
              </el-col>
              <el-col class="height_auto" :span="8">
                <types-programmes-play :barListData="dibbleSeedingDurationData"></types-programmes-play>
              </el-col>
            </el-row>
          </el-row>
          <!-- 各类型节目点播数据结束 -->

          <!-- 主要栏目点击次数开始 -->
          <el-row class="marginbottom_14">
            <el-row class="model_title">
              <span class="title_border_left"></span>主要栏目点击次数（万次）
            </el-row>
            <el-row class="main_programa_body back_white">
              <el-col class="height_auto" :span="24">
                <type-program-chart-big :chartData="mainProgramaPlayData"></type-program-chart-big>
              </el-col>
            </el-row>
          </el-row>
          <!-- 主要栏目点击次数结束 -->

          <!-- 本土原创节目一周点播次数开始 -->
          <el-row class="marginbottom_14">
            <el-row class="model_title">
              <span class="title_border_left"></span>本土原创节目点播数据
            </el-row>
            <el-row class="local_programs_play_body back_white">
              <el-col class="height_auto" :span="12">
                <bar-chart-single :chartData="localProgramsPlayData"></bar-chart-single>
              </el-col>
              <el-col class="height_auto" :span="12">
                <live-view-behavior-analysis :barListData="localProgramsPlayTOPData"></live-view-behavior-analysis>
              </el-col>
            </el-row>
          </el-row>
          <!-- 本土原创节目一周点播次数结束 -->
          <!-- 模块二 一周点播数据及运营分析结束-->

          <!-- 模块三 直播频道数据及运营分析开始-->
          <!-- 一周直播数据概览开始 -->
          <el-row class="marginbottom_14" id="broadcast_channel">
            <el-row class="model_title">
              <span class="title_border_left"></span>一周直播数据概览
            </el-row>
            <el-row class="hebdomad_live_data_body back_white">
              <el-col class="height_auto" :span="12">
                <bar-chart-single :chartData="hebdomadLiveData"></bar-chart-single>
              </el-col>
              <el-col class="height_auto" :span="12">
                <live-view-behavior-analysis :barListData="hebdomadLiveTOPData"></live-view-behavior-analysis>
              </el-col>
            </el-row>
          </el-row>
          <!-- 一周直播数据概览结束 -->

          <!-- 电视直播频道分组收视数据开始 -->
          <el-row class="marginbottom_14">
            <el-row class="model_title">
              <span class="title_border_left"></span>电视直播频道分组收视数据
            </el-row>
            <el-row class="TV_live_body back_white">
              <el-col class="height_auto" :span="8">
                <bar-chart-single :chartData="channelLiveUserNumData"></bar-chart-single>
              </el-col>
              <el-col class="height_auto" :span="8">
                <bar-chart-single :chartData="channelLiveTimesData"></bar-chart-single>
              </el-col>
              <el-col class="height_auto" :span="8">
                <bar-chart-single :chartData="channelLiveDurationData"></bar-chart-single>
              </el-col>
            </el-row>
          </el-row>
          <!-- 点视直播频道分组收视数据结束 -->

          <!-- 央视频道及节目收视排名开始 -->
          <el-row class="marginbottom_14">
            <el-row class="model_title">
              <span class="title_border_left"></span>央视频道及节目收视排名
            </el-row>
            <el-row class="CCTV_channel_body back_white">
              <el-col class="height_auto" :span="9">
                <live-view-behavior-analysis :barListData="liveChannelTOPData"></live-view-behavior-analysis>
              </el-col>
              <el-col class="height_auto" :span="15">
                <bar-chart-single :chartData="liveProgramTOPData"></bar-chart-single>
              </el-col>
            </el-row>
          </el-row>
          <!-- 央视频道及节目收视排名结束 -->

          <!-- 本地频道及节目收视排名开始 -->
          <el-row class="marginbottom_14">
            <el-row class="model_title">
              <span class="title_border_left"></span>本地频道及节目收视排名
            </el-row>
            <el-row class="local_channel_body back_white">
              <el-col class="height_auto" :span="9">
                <live-view-behavior-analysis :barListData="localChannelTOPData"></live-view-behavior-analysis>
              </el-col>
              <el-col class="height_auto" :span="15">
                <bar-chart-single :chartData="localProgramTOPData"></bar-chart-single>
              </el-col>
            </el-row>
          </el-row>
          <!-- 本地频道及节目收视排名结束 -->

          <!-- 卫视频道及节目收视排名开始 -->
          <el-row class="marginbottom_14">
            <el-row class="model_title">
              <span class="title_border_left"></span>卫视频道及节目收视排名
            </el-row>
            <el-row class="CCTV_channel_body back_white">
              <el-col class="height_auto" :span="9">
                <live-view-behavior-analysis :barListData="satelliteChannelTOPData"></live-view-behavior-analysis>
              </el-col>
              <el-col class="height_auto" :span="15">
                <bar-chart-single :chartData="satelliteLiveProgramTOPData"></bar-chart-single>
              </el-col>
            </el-row>
          </el-row>
          <!-- 卫视频道及节目收视排名结束 -->

          <!-- 轮播频道及节目收视排名开始 -->
          <el-row class="marginbottom_14">
            <el-row class="model_title">
              <span class="title_border_left"></span>轮播频道及节目收视排名
            </el-row>
            <el-row class="hebdomad_thermodynamic_body back_white">
              <el-col class="height_auto" :span="12">
                <type-program-chart :chartData="carouselChannelData"></type-program-chart>
              </el-col>
              <el-col class="height_auto" :span="12">
                <smooth-line-chart :smoothLineData="originalProgramsDemandData"></smooth-line-chart>
              </el-col>
            </el-row>
          </el-row>
          <!-- 轮播频道及节目收视排名结束 -->
          <!-- 模块三 直播频道数据及运营分析结束-->

          <!-- 模块四  推荐栏目一周数据概览开始-->
          <el-row class="marginbottom_14" id="recommended_Column">
            <el-row class="model_title">
              <span class="title_border_left"></span>推荐栏目一周数据概览
            </el-row>
            <el-row class="recommended_column_body back_white">
              <el-row>
                <el-tabs v-model="activeName">
                  <!-- <com-el-tab-pane v-bind:paneData="itemX"></com-el-tab-pane> -->
                  <!-- <template v-for="(itemX,index) in paneArr">
                    <el-tab-pane
                      :key="index + 'X' "
                      :label="paneData.data"
                      :name="paneData.id"
                      lazy
                    >~~!!!{{paneData.data}}</el-tab-pane>
                  </template>-->
                  <template v-for="(itemX,index) in paneArr">
                    <el-tab-pane :key="index + 'X' " :label="itemX.data" :name="itemX.id" lazy>
                      <recommend-column-week-data :columnData="Pane_ColumnData[index]"></recommend-column-week-data>
                    </el-tab-pane>
                    <!-- <el-tab-pane label="热剧" name="hotShow" lazy>热剧</el-tab-pane> -->
                  </template>
                  <!-- <el-tab-pane label="分类" name="classify">
                    <recommend-column-week-data
                      :columnData="classifyColumnData"
                      v-if="'classify' === activeName"
                    ></recommend-column-week-data>
                  </el-tab-pane>
                  <el-tab-pane label="电视" name="television">
                    <recommend-column-week-data
                      :columnData="televisionColumnData"
                      v-if="'television' === activeName"
                    ></recommend-column-week-data>
                  </el-tab-pane>
                  <el-tab-pane label="推荐" name="recommend">
                    <recommend-column-week-data
                      :columnData="recommendColumnData"
                      v-if="'recommend' === activeName"
                    ></recommend-column-week-data>
                  </el-tab-pane>
                  <el-tab-pane label="电影" name="film" lazy>电影</el-tab-pane>
                  <el-tab-pane label="热剧" name="hotShow" lazy>热剧</el-tab-pane>
                  <el-tab-pane label="少儿" name="children" lazy>少儿</el-tab-pane>
                  <el-tab-pane label="动漫" name="cartoon" lazy>动漫</el-tab-pane>
                  <el-tab-pane label="综艺" name="variety" lazy>综艺</el-tab-pane>
                  <el-tab-pane label="体育" name="PE" lazy>体育</el-tab-pane>
                  <el-tab-pane label="纪实" name="documentary" lazy>纪实</el-tab-pane>
                  <el-tab-pane label="游戏" name="game" lazy>游戏</el-tab-pane>
                  <el-tab-pane label="应用" name="apply" lazy>应用</el-tab-pane>-->
                </el-tabs>
              </el-row>
            </el-row>
          </el-row>
          <!-- 模块四  推荐栏目一周数据概览结束-->

          <!-- 模块五 专题热力数据及运营分析开始-->
          <!-- 一周专题数据概览开始 -->
          <el-row class="marginbottom_14" id="special_thermodynamic_data">
            <el-row class="model_title">
              <span class="title_border_left"></span>一周专题数据概览
            </el-row>
            <el-row class="thematic_data_body back_white">
              <el-col class="height_auto" :span="14">
                <types-programmes-play :barListData="thematicData"></types-programmes-play>
              </el-col>
              <el-col class="height_auto" :span="10">
                <pie-charts :chartData="monographicPlanData"></pie-charts>
              </el-col>
            </el-row>
          </el-row>
          <!-- 一周专题数据概览结束 -->

          <!-- 一周专题数据走势开始 -->
          <el-row class="marginbottom_14">
            <el-row class="model_title">
              <span class="title_border_left"></span>一周专题数据走势
            </el-row>
            <el-row class="thematic_data_trend_body back_white">
              <el-col class="height_auto" :span="24">
                <thematic-data-trend-chart :lineData="specialTrendData1"></thematic-data-trend-chart>
              </el-col>
            </el-row>
            <!-- <el-row class="thematic_data_trend_body back_white">
              <el-col class="height_auto" :span="24">
                <thematic-data-trend-chart :lineData="specialTrendData2"></thematic-data-trend-chart>
              </el-col>
            </el-row>-->
          </el-row>
          <!-- 一周专题数据走势结束 -->
          <!-- 模块五 专题热力数据及运营分析结束-->
        </el-row>
      </el-col>
      <!-- 左侧内容结束 -->

      <!-- 右侧导航开始 -->
      <el-col class="operational_nav height_auto">
        <el-row>
          <a
            href="javascript:void(0)"
            class="anchor_link1 avtive_link"
            @click="goAnchor('#weekly_whole_data')"
          >G+TV一周整体数据概览</a>
        </el-row>
        <el-row>
          <a
            href="javascript:void(0)"
            class="anchor_link2"
            @click="goAnchor('#weekly_data_on_demand')"
          >一周点播数据及运营分析</a>
        </el-row>
        <el-row>
          <a
            href="javascript:void(0)"
            class="anchor_link3"
            @click="goAnchor('#broadcast_channel')"
          >直播频道数据及运营分析</a>
        </el-row>
        <el-row>
          <a
            href="javascript:void(0)"
            class="anchor_link4"
            @click="goAnchor('#recommended_Column')"
          >各栏目热力数据及运营分析</a>
        </el-row>
        <el-row>
          <a
            href="javascript:void(0)"
            class="anchor_link5"
            @click="goAnchor('#special_thermodynamic_data')"
          >专题热力数据及运营分析</a>
        </el-row>
      </el-col>
      <!-- 右侧导航结束 -->
    </el-row>
    <!-- 移动运营数据周报结束 -->
  </div>
</template>
<script>
import TypeProgramChart from "@/views/backcoms/G_TVuserviewingmonthreport/TypeProgramChart"; //柱状图加折线图图表组件
import TypeProgramChartBig from "@/views/backcoms/OperationalWeekReport/TypeProgramChartBig"; //柱状图加折线图图表组件
import BarChartSingle from "@/views/backcoms/commoncomponents/BarChartSingle"; //单坐标柱状图组件
import ThreeBasedUserView from "@/views/backcoms/OperationalWeekReport/ThreeBasedUserView"; //柱状图加折线图图表组件
import ManyPieChart3 from "@/views/backcoms/OperationalWeekReport/ManyPieChart3"; //柱状图加折线图图表组件
import TypesProgrammesPlay from "@/views/backcoms/OperationalWeekReport/TypesProgrammesPlay"; //TOP排名（柱状图列表）
import LiveViewBehaviorAnalysis from "@/views/backcoms/G_TVuserviewingmonthreport/LiveViewBehaviorAnalysis"; //TOP排名（柱状图列表）
import SmoothLineChart from "@/views/backcoms/commoncomponents/SmoothLineChart"; //平滑曲线折线图组件
import PieCharts from "@/views/backcoms/commoncomponents/PieCharts"; //公用饼图
import LineChartSingle from "@/views/backcoms/commoncomponents/LineChartSingle"; //单数据折线图组件（新增用户概览）
import ThematicDataTrendChart from "@/views/backcoms/OperationalWeekReport/ThematicDataTrendChart"; //一周专题数据走势折线组件

import RecommendColumnWeekData from "@/views/backcoms/OperationalWeekReport/RecommendColumnWeekData"; //推荐栏目一周数据概览组件
// import EL_TAB_PANE from "@/views/backcoms/OperationalWeekReport/el_tab_pane"; //推荐栏目一周数据概览组件

import { mapGetters } from "vuex";
import { commonTools } from "@/utils/test";
import {
  users_mobileReport,
  epg_box_content,
  users_mobileReport_top,
  users_mobileReport_titop
} from "@/api/api_main";
import Vue from "vue";

export default {
  name: "OperationalWeekReport", // 移动运营数据周报
  components: {
    "type-program-chart": TypeProgramChart,
    "type-program-chart-big": TypeProgramChartBig,
    "bar-chart-single": BarChartSingle,
    "three-based-user-view": ThreeBasedUserView,
    "many-pie-chart3": ManyPieChart3,
    "types-programmes-play": TypesProgrammesPlay,
    "live-view-behavior-analysis": LiveViewBehaviorAnalysis,
    "smooth-line-chart": SmoothLineChart,
    "recommend-column-week-data": RecommendColumnWeekData,
    // "com-el-tab-pane": EL_TAB_PANE,
    "pie-charts": PieCharts,
    "line-chart-single": LineChartSingle,
    "thematic-data-trend-chart": ThematicDataTrendChart
  },
  computed: {
    ...mapGetters(["PR_week", "PR_Report_index", "PR_operator"])
  },
  // ▲注意有三种类型 =》 两种请求结构：  week-对应的 23~24week     week_days对应的是 23week（不用） 01~07（都用这种）
  watch: {
    PR_week(newValue, oldValue) {
      let vm = this;
      console.log("PR_week: " + newValue);
      setTimeout(function() {
        let operator_type = "";
        if (vm.PR_operator[0] == "移动") {
          operator_type = "yd";
        }
        if (vm.PR_operator[0] == "联通") {
          operator_type = "lt";
        }
        if (vm.PR_operator[0] == "电信") {
          operator_type = "dx";
        }
        vm.refresh_api_data(operator_type, "week");
        vm.refresh_api_data(operator_type, "week_days");
        // excel 处理
      }, 100);
      setTimeout(function() {
        vm.Excel_data_manage();
      }, 200);
    },
    PR_operator(newValue, oldValue) {
      let vm = this;
      console.log("PR_week: " + newValue);
      setTimeout(function() {
        let operator_type = "";

        if (newValue[0] == "移动") {
          operator_type = "yd";
        }
        if (newValue[0] == "联通") {
          operator_type = "lt";
        }
        if (newValue[0] == "电信") {
          operator_type = "dx";
        }
        vm.refresh_api_data(operator_type, "week");
        vm.refresh_api_data(operator_type, "week_days");
        // excel 处理
      }, 100);
      setTimeout(function() {
        vm.Excel_data_manage();
      }, 200);
    }
    // PR_operator(newValue, oldValue) {
    //   let vm = this;
    //   // excel 处理
    //   vm.Excel_data_manage();
    // }
  },
  mounted() {
    // 数据刷新
    let vm = this;
    setTimeout(function() {
      let operator_type = "";
      if (vm.PR_operator[0] == "移动") {
        operator_type = "yd";
      }
      if (vm.PR_operator[0] == "联通") {
        operator_type = "lt";
      }
      if (vm.PR_operator[0] == "电信") {
        operator_type = "dx";
      }
      vm.refresh_api_data(operator_type, "week");
      vm.refresh_api_data(operator_type, "week_days");
      // excel 处理
      vm.Excel_data_manage();
    }, 200);

    $(".operational_left_content_body").scroll(function(event) {
      let scrollTopHeight = $(".operational_left_content_body").scrollTop();
      // let weekly_whole_data = document.querySelector('#weekly_whole_data').offsetTop
      // let weekly_data_on_demand = document.querySelector('#weekly_data_on_demand').offsetTop
      // let broadcast_channel = document.querySelector('#broadcast_channel').offsetTop
      // let recommended_Column = document.querySelector('#recommended_Column').offsetTop
      // let special_thermodynamic_data = document.querySelector('#special_thermodynamic_data').offsetTop
      // console.log('weekly_whole_data 0', weekly_whole_data)
      // console.log('weekly_data_on_demand 1492', weekly_data_on_demand)
      // console.log('broadcast_channel 3848', broadcast_channel)
      // console.log('recommended_Column 7682', recommended_Column)
      // console.log('special_thermodynamic_data 9365', special_thermodynamic_data)
      if (0 <= scrollTopHeight) {
        $(".anchor_link1")
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      }
      if (1300 <= scrollTopHeight) {
        $(".anchor_link2")
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      }
      if (3700 <= scrollTopHeight) {
        $(".anchor_link3")
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      }
      if (7600 <= scrollTopHeight) {
        $(".anchor_link4")
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      }
      if (9200 <= scrollTopHeight) {
        $(".anchor_link5")
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      }
    });
  },
  methods: {
    Excel_data_manage() {
      // console.log("Excel_data_manage - 4");
      let vm = this;
      vm.$store
        .dispatch("set_PR_excel_ifCanDownload", false)
        .then(function(response_dataArr) {
          // console.log("下载关");
        })
        .catch(function(error) {
          console.info(error);
        });
      setTimeout(function() {
        if (vm.PR_Report_index == 4) {
          let temp_titleArr = [];
          let temp_DataArr = [];
          // /// 临时
          // temp_titleArr.push(["title1"]);
          // temp_titleArr.push(["title2"]);
          // temp_titleArr.push(["title3"]);

          // temp_DataArr.push([
          //   ["运营商", "移动", "联通", "电信444444444"],
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
            let i;
            let temp_pageClickNumData_content_data = [];
            let temp_pageClickNumData_content_title = [];
            for (i = 0; i < vm.pageClickNumData.content.length; i++) {
              temp_pageClickNumData_content_data.push([]); // [  [], ]
              vm.pageClickNumData.content[i].data.forEach((value, index) => {
                temp_pageClickNumData_content_data[i].push([]); // [  [[]]  ]
                temp_pageClickNumData_content_data[i][index].push(value.name); // [ [[name,value]], [[]] ]
                temp_pageClickNumData_content_data[i][index].push(value.value);
              });

              temp_pageClickNumData_content_title.push([]); // [  [],  ]
              temp_pageClickNumData_content_title[i].push(
                vm.pageClickNumData.content[i].title
              ); //  [   [title],[]   ]
            }
            let temp_weeklyThermodynamic_data = []; // 一周热力数据
            let temp_weeklyThermodynamic_title = [];
            let temp_buttonClickTOPData_data = [];
            let temp_buttonClickTOPData_title = [];
            let temp_columnButtonClickNum_data = [];
            let temp_columnButtonClickNum_title = [];
            let temp_someButtonDayTrendData_data = [];
            let temp_someButtonDayTrendData_title = [];

            vm.Pane_ColumnData.forEach((value, index) => {
              temp_weeklyThermodynamic_data.push(
                value.weeklyThermodynamic.data
              ); //  [  [[]], [[]]   ]
              temp_weeklyThermodynamic_title.push([
                value.weeklyThermodynamic.title
              ]); // [ [title], ]
              temp_buttonClickTOPData_data.push(value.buttonClickTOPData.data);
              temp_buttonClickTOPData_title.push([
                value.buttonClickTOPData.title
              ]);
              let temp_str = value.columnButtonClickNum.data;
              // let temp_str = [JSON.stringify(...(value.columnButtonClickNum.data))] // 拆后转换再封装
              // let temp_str = [];
              // for(let i = 0; i < value.columnButtonClickNum.data.length; i++){
              // }
              // => temp_columnButtonClickNum_data = [ [string{..},{..}],[{..},{},{}],[{}] ]
              // => temp_str
              // console.log(temp_str);
              temp_columnButtonClickNum_data.push(temp_str);
              temp_columnButtonClickNum_title.push([
                value.columnButtonClickNum.title
              ]);
              temp_someButtonDayTrendData_data.push(
                value.someButtonDayTrendData.data
              );
              temp_someButtonDayTrendData_title.push([
                value.someButtonDayTrendData.title
              ]);
            });

            title_arr.push(
              [vm.userNumAddPowerData.title],
              [vm.dailyOperatingRateData.title],
              [vm.hebdomadViewNumData.title],
              [vm.threeBasedUserViewData.title],
              ...temp_pageClickNumData_content_title, // 特殊
              ["一周热力数据柱状图和折线图数据"],
              [vm.hebdomadDibbleSeedingData.title],
              [vm.hebdomadDibbleSeedingTOPData.title],
              [vm.dibbleSeedingUserNumData.title],
              [vm.dibbleSeedingNumData.title],

              [vm.dibbleSeedingDurationData.title],
              [vm.mainProgramaPlayData.title],
              [vm.localProgramsPlayData.title],
              [vm.localProgramsPlayTOPData.title],
              [vm.hebdomadLiveData.title],
              [vm.hebdomadLiveTOPData.title],

              [vm.channelLiveUserNumData.title],
              [vm.channelLiveTimesData.title],
              [vm.channelLiveDurationData.title],
              [vm.liveChannelTOPData.title],
              [vm.liveProgramTOPData.title],
              [vm.localChannelTOPData.title],
              [vm.localProgramTOPData.title],

              [vm.satelliteChannelTOPData.title],
              [vm.satelliteLiveProgramTOPData.title],
              [vm.carouselChannelData.title],
              [vm.originalProgramsDemandData.title],

              ...temp_weeklyThermodynamic_title,
              ...temp_buttonClickTOPData_title,
              ...temp_columnButtonClickNum_title, //
              ...temp_someButtonDayTrendData_title,

              [vm.thematicData.title],
              [vm.monographicPlanData.title],
              [vm.specialTrendData1.title]
              // [vm.specialTrendData2.title], // pass
            );
            data_arr.push(
              vm.userNumAddPowerData.data,
              vm.dailyOperatingRateData.data,
              vm.hebdomadViewNumData.data,
              vm.threeBasedUserViewData.data,
              ...temp_pageClickNumData_content_data, // 特殊
              vm.hebdomadHotData.data,
              vm.hebdomadDibbleSeedingData.data,
              vm.hebdomadDibbleSeedingTOPData.data,
              vm.dibbleSeedingUserNumData.data,
              vm.dibbleSeedingNumData.data,

              vm.dibbleSeedingDurationData.data,
              vm.mainProgramaPlayData.data,
              vm.localProgramsPlayData.data,
              vm.localProgramsPlayTOPData.data,
              vm.hebdomadLiveData.data,
              vm.hebdomadLiveTOPData.data,

              vm.channelLiveUserNumData.data,
              vm.channelLiveTimesData.data,
              vm.channelLiveDurationData.data,
              vm.liveChannelTOPData.data,
              vm.liveProgramTOPData.data,
              vm.localChannelTOPData.data,
              vm.localProgramTOPData.data,

              vm.satelliteChannelTOPData.data,
              vm.satelliteLiveProgramTOPData.data,
              vm.carouselChannelData.data,
              vm.originalProgramsDemandData.data,

              ...temp_weeklyThermodynamic_data,
              ...temp_buttonClickTOPData_data,
              ...temp_columnButtonClickNum_data, //
              ...temp_someButtonDayTrendData_data,

              vm.thematicData.data,
              vm.monographicPlanData.data,
              vm.specialTrendData1.data
              // vm.specialTrendData2.data, // pass
            );
          } catch (error) {
            console.log(error);
          }
          // ///

          temp_titleArr = title_arr;
          temp_DataArr = data_arr;
          // console.log("运营数据周报");
          // console.log(temp_titleArr);
          // console.log(temp_DataArr);

          if (temp_titleArr.length == 0 || temp_DataArr.length == 0) {
            console.log("请选择时间！");
            return;
          }

          vm.$store
            .dispatch("set_PR_Excel_titleArr_firstM1", temp_titleArr)
            .then(function(response_title) {
              console.log(response_title);
              vm.$store
                .dispatch("set_PR_Excel_dataArr_firstM1", temp_DataArr)
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
      }, 12000); // 内容比较多
    },
    refresh_api_data(operator_type, week_type) {
      this.users_mobileReport(operator_type, week_type);
    },
    users_mobileReport(operator_type, week_type) {
      let vm = this;
      // console.log("~~~~~!users_mobileReport");
      console.log(vm.PR_week);
      if (vm.PR_week == "" || vm.PR_week == null || vm.PR_week == undefined) {
        return;
      }
      let m_operator = "";
      if (operator_type == "yd") {
        m_operator = "移动";
      }
      if (operator_type == "lt") {
        m_operator = "联通";
      }
      if (operator_type == "dx") {
        m_operator = "电信";
      }
      let temp_time = commonTools.split_WeeksDays_byDWwr(vm.PR_week);
      let temp;

      let WeekFormat = commonTools.weekDaysShowFormat_AndBeforeWeek(
        temp_time.week_day_start,
        temp_time.week_day_end
      );
      beforeWeekFormat = WeekFormat.beforeWeekFormat;
      currentWeekFormat = WeekFormat.currentWeekFormat; // 用于显示（将传入数据）
      // console.log("▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲");
      // console.log(beforeWeekFormat);
      // console.log(currentWeekFormat);

      let beforeWeekFormat;
      let currentWeekFormat;
      if (week_type == "week") {
        temp = {
          operator: String([m_operator]),
          year: temp_time.year,
          // start: temp_time.week,
          start: commonTools.ReturnBeforeWeek(temp_time.week, 1),
          end: temp_time.week
          // start: "22week",
          // end: "23week"
          // date: temp_time.week
        };
        console.log("~~~~~~a");
        console.log(temp);
      }
      if (week_type == "week_days") {
        temp = {
          operator: String([m_operator]),
          year: temp_time.year,
          start: temp_time.week_day_start,
          end: temp_time.week_day_end
        };
        console.log("~~~~~~b");
        console.log(temp);
      }

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("operator", temp.operator);
      formData.append("start", temp.start);
      formData.append("end", temp.end);
      formData.append("year", temp.year);
      users_mobileReport(formData)
        .then(function(response) {
          // //////////////////////////////// 数据填充
          if (week_type == "week") {
            console.log("users_mobileReport  week");

            console.log(response);
            let buckets_0 =
              response.data.responses[0].aggregations.statistical_granularity
                .buckets;
            try {
              // 一周用户活跃情况
              // ////////// 周末用户总量与一周开机率  (row1 left)
              vm.userNumAddPowerData.data = [];
              let length_0 = buckets_0.length;
              let i_0;
              // 在册用户数（万户） register_num
              // 开机用户数（万户） open_num
              // 开机率   // 开机用户数/在册用户数
              let temp_data_0 = [];
              temp_data_0.push([
                "product",
                "在册用户数（万户）",
                "开机用户数（万户）",
                "开机率"
              ]);
              for (i_0 = 0; i_0 < length_0; i_0++) {
                if (length_0 > 1) {
                  // 两周有数据情况
                  if (i_0 == 0) {
                    temp_data_0.push([
                      beforeWeekFormat,
                      (buckets_0[i_0].register_num.value / 10000).toFixed(2),
                      (buckets_0[i_0].open_num.value / 10000).toFixed(2),
                      (
                        (buckets_0[i_0].open_num.value /
                          buckets_0[i_0].register_num.value) *
                        100
                      ).toFixed(2)
                    ]);
                  }
                  if (i_0 == 1) {
                    temp_data_0.push([
                      currentWeekFormat,
                      (buckets_0[i_0].register_num.value / 10000).toFixed(2),
                      (buckets_0[i_0].open_num.value / 10000).toFixed(2),
                      (
                        (buckets_0[i_0].open_num.value /
                          buckets_0[i_0].register_num.value) *
                        100
                      ).toFixed(2)
                    ]);
                  }
                }
                if (length_0 == 1) {
                  // 一周有数据情况
                  temp_data_0.push([
                    currentWeekFormat,
                    (buckets_0[i_0].register_num.value / 10000).toFixed(2),
                    (buckets_0[i_0].open_num.value / 10000).toFixed(2),
                    (
                      (buckets_0[i_0].open_num.value /
                        buckets_0[i_0].register_num.value) *
                      100
                    ).toFixed(2)
                  ]);
                }
              }

              vm.userNumAddPowerData.data = temp_data_0; // 周末用户总量与一周开机率
            } catch (error) {
              console.log(error);
            }

            // console.log("~~~~~!!!!!");
            // console.log(vm.userNumAddPowerData);

            // //////////////// 一周热力数据概览 ///////  （row3） right responses 8 9 10  ---跳过 数据补全
            // 上周 本周
            // 访问用户数 访问次数 页面点击用户数 页面点击次数 页面播放次数 页面播放时长
            // access_user_num access_freq click_user_num click_freq access_freq  access_dur(用demand_dur)
            // 8 access_freq access_user_num
            // 9 click_freq click_user_num
            // 10 demand_dur
            try {
              vm.hebdomadHotData.data = [];
              let buckets_8 =
                response.data.responses[8].aggregations.statistical_granularity
                  .buckets;
              let buckets_9 =
                response.data.responses[9].aggregations.statistical_granularity
                  .buckets;
              let buckets_10 =
                response.data.responses[10].aggregations.statistical_granularity
                  .buckets;
              let length_8910 = buckets_8.length;
              let i_8910;
              let temp_data_8910 = [];
              let temp_data_8910_1 = [];
              let temp_data_8910_2 = [];
              let temp_data_8910_3 = [];
              let temp_data_8910_4 = [];
              let temp_data_8910_5 = [];
              let temp_data_8910_6 = [];
              temp_data_8910.push([
                "product",
                beforeWeekFormat,
                currentWeekFormat,
                "环比"
              ]);

              temp_data_8910_1.push("访问用户数");
              temp_data_8910_2.push("访问次数");
              temp_data_8910_3.push("页面点击用户数");
              temp_data_8910_4.push("页面点击次数");
              temp_data_8910_5.push("页面播放次数");
              temp_data_8910_6.push("页面播放时长");

              if (length_8910 > 1) {
                // 两周情况
                // 上周
                temp_data_8910_1.push(buckets_8[0].access_user_num.value);
                temp_data_8910_2.push(buckets_8[0].access_freq.value);
                temp_data_8910_3.push(buckets_9[0].click_user_num.value);
                temp_data_8910_4.push(buckets_9[0].click_freq.value);
                temp_data_8910_5.push(buckets_8[0].access_freq.value);
                temp_data_8910_6.push(
                  (buckets_10[0].demand_dur.value / 60).toFixed(2)
                ); //

                // 本周
                temp_data_8910_1.push(buckets_8[1].access_user_num.value);
                temp_data_8910_2.push(buckets_8[1].access_freq.value);
                temp_data_8910_3.push(buckets_9[1].click_user_num.value);
                temp_data_8910_4.push(buckets_9[1].click_freq.value);
                temp_data_8910_5.push(buckets_8[1].access_freq.value);
                temp_data_8910_6.push(
                  (buckets_10[1].demand_dur.value / 60).toFixed(2)
                ); //

                // 环比算法  （本期数值-上期数值）/上期数值

                temp_data_8910_1.push(
                  (
                    ((buckets_8[1].access_user_num.value -
                      buckets_8[0].access_user_num.value) /
                      buckets_8[0].access_user_num.value) *
                    100
                  ).toFixed(2)
                );
                temp_data_8910_2.push(
                  (
                    ((buckets_8[1].access_freq.value -
                      buckets_8[0].access_freq.value) /
                      buckets_8[0].access_freq.value) *
                    100
                  ).toFixed(2)
                );
                temp_data_8910_3.push(
                  (
                    ((buckets_9[1].click_user_num.value -
                      buckets_9[0].click_user_num.value) /
                      buckets_9[0].click_user_num.value) *
                    100
                  ).toFixed(2)
                );
                temp_data_8910_4.push(
                  (
                    ((buckets_9[1].click_freq.value -
                      buckets_9[0].click_freq.value) /
                      buckets_9[0].click_freq.value) *
                    100
                  ).toFixed(2)
                );
                temp_data_8910_5.push(
                  (
                    ((buckets_8[1].access_freq.value -
                      buckets_8[0].access_freq.value) /
                      buckets_8[0].access_freq.value) *
                    100
                  ).toFixed(2)
                );
                temp_data_8910_6.push(
                  (
                    ((buckets_10[1].demand_dur.value -
                      buckets_10[0].demand_dur.value) /
                      buckets_10[0].demand_dur.value) *
                    100
                  ).toFixed(2)
                ); //
              }
              if (length_8910 == 1) {
                // 单周情况

                temp_data_8910_1.push(0);
                temp_data_8910_2.push(0);
                temp_data_8910_3.push(0);
                temp_data_8910_4.push(0);
                temp_data_8910_5.push(0);
                temp_data_8910_6.push(0);
                temp_data_8910_1.push(buckets_8[0].access_user_num.value);
                temp_data_8910_2.push(buckets_8[0].access_freq.value);
                temp_data_8910_3.push(buckets_9[0].click_user_num.value);
                temp_data_8910_4.push(buckets_9[0].click_freq.value);
                temp_data_8910_5.push(buckets_8[0].access_freq.value);
                temp_data_8910_6.push(
                  (buckets_10[0].demand_dur.value / 60).toFixed(2)
                );
                temp_data_8910_1.push(0);
                temp_data_8910_2.push(0);
                temp_data_8910_3.push(0);
                temp_data_8910_4.push(0);
                temp_data_8910_5.push(0);
                temp_data_8910_6.push(0);
              }
              temp_data_8910.push(temp_data_8910_1);
              temp_data_8910.push(temp_data_8910_2);
              temp_data_8910.push(temp_data_8910_3);
              temp_data_8910.push(temp_data_8910_4);
              temp_data_8910.push(temp_data_8910_5);
              temp_data_8910.push(temp_data_8910_6);
              // console.log(buckets_8);
              // console.log(temp_data_8910);
              vm.hebdomadHotData.data = temp_data_8910;
            } catch (error) {
              console.log(error);
            }
            // //////////////// 一周点播数据概览 (row4 left)   responses 11
            try {
              vm.hebdomadDibbleSeedingData.data = [];
              let buckets_11 =
                response.data.responses[11].aggregations.statistical_granularity
                  .buckets;
              let length_11 = buckets_11.length;
              let i_11;
              let temp_data_11 = [];
              let temp_data_11_1 = [];
              let temp_data_11_2 = [];
              let temp_data_11_3 = [];
              temp_data_11_1.push("点播用户数（万户）");
              temp_data_11_2.push("点播次数（万次）");
              temp_data_11_3.push("点播时长（万小时）");

              if (length_11 > 1) {
                temp_data_11.push([
                  "product",
                  beforeWeekFormat,
                  currentWeekFormat
                ]);
              }
              if (length_11 == 1) {
                temp_data_11.push(["product", currentWeekFormat]);
              }

              for (i_11 = 0; i_11 < length_11; i_11++) {
                temp_data_11_1.push(
                  (buckets_11[i_11].demand_user_num.value / 10000).toFixed(2)
                );
                temp_data_11_2.push(
                  (buckets_11[i_11].demand_freq.value / 10000).toFixed(2)
                );
                temp_data_11_3.push(
                  (buckets_11[i_11].demand_dur.value / 10000 / 60).toFixed(2)
                );
              }
              temp_data_11.push(temp_data_11_1);
              temp_data_11.push(temp_data_11_2);
              temp_data_11.push(temp_data_11_3);
              vm.hebdomadDibbleSeedingData.data = temp_data_11;
            } catch (error) {
              console.log(error);
            }
            // console.log("~~~~~!!!!!");
            // console.log(vm.hebdomadDibbleSeedingData);

            // //////////////// 一周点播数据概览 (row4 right)   responses 12
            // ////// 本周（先） 上周（后）
            try {
              vm.hebdomadDibbleSeedingTOPData.data = [];

              let buckets_12 =
                response.data.responses[12].aggregations.statistical_granularity
                  .buckets;
              let length_12 = buckets_12.length; // 默认两周 - 2
              let i_12;
              let temp_data_12 = [];
              temp_data_12.push([
                "product",
                currentWeekFormat,
                beforeWeekFormat
              ]);

              let top15_length_12 = 15;
              for (i_12 = 0; i_12 < top15_length_12; i_12++) {
                temp_data_12.push([]);
              }
              let week_index_12 = length_12 - 1;

              let tlist = [];
              // 本周
              for (i_12 = 0; i_12 < top15_length_12; i_12++) {
                Vue.set(
                  temp_data_12[top15_length_12 - i_12],
                  0,
                  buckets_12[week_index_12].programname.buckets[i_12].key
                );
                Vue.set(
                  temp_data_12[top15_length_12 - i_12],
                  1,
                  (
                    buckets_12[week_index_12].programname.buckets[i_12]
                      .demand_freq.value / 10000
                  ).toFixed(2)
                );
                if (length_12 > 1) {
                  let temp_c = {
                    operator: String([m_operator]),
                    year: temp_time.year,
                    start: commonTools.ReturnBeforeWeek(temp_time.week, 1),
                    end: commonTools.ReturnBeforeWeek(temp_time.week, 1),
                    programname:
                      buckets_12[week_index_12].programname.buckets[i_12].key
                  };
                  let formData_c = new FormData();
                  formData_c = new window.FormData();
                  formData_c.append("operator", temp_c.operator);
                  formData_c.append("start", temp_c.start);
                  formData_c.append("end", temp_c.end);
                  formData_c.append("year", temp_c.year);
                  formData_c.append("programname", temp_c.programname);
                  tlist.push(
                    users_mobileReport_top(formData_c)
                      .then(function(response_c) {
                        // console.log(response_c);
                        // ▲▲▲ collection 0
                        let m_buckets =
                          response_c.data.responses[0].aggregations
                            .statistical_granularity.buckets;
                        let m_value;
                        if (m_buckets.length > 0) {
                          m_value = (
                            m_buckets[0].demand_freq.value / 10000
                          ).toFixed(2);
                        }
                        if (m_buckets.length == 0) {
                          m_value = "";
                        }
                        // console.log(m_value);

                        // Vue.set(
                        //   temp_data_12[top15_length_12 - i_12],
                        //   2,
                        //   m_value
                        // );
                        return m_value;
                      })
                      .catch(function(error) {
                        console.info(error);
                        return "";
                      })
                  );
                }
              } // for

              // let index_c = 0;
              Promise.all(tlist)
                .then(res => {
                  // console.log("▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲");
                  // console.log(index_c);
                  // console.log(res);
                  // Vue.set(temp_data_12[top15_length_12 - index_c], 2, res);
                  // index_c++;
                  if (length_12 > 1) {
                    res.forEach((item, index) => {
                      Vue.set(temp_data_12[top15_length_12 - index], 2, item);
                    });
                  } else {
                    for (i_12 = 0; i_12 < top15_length_12; i_12++) {
                      Vue.set(temp_data_12[top15_length_12 - index], 2, "");
                    }
                  }
                  for (i_12 = 0; i_12 < top15_length_12; i_12++) {
                    let temp_key_add =
                      buckets_12[week_index_12].programname.buckets[i_12]
                        .program_type.buckets[0].key +
                      " - " +
                      temp_data_12[top15_length_12 - i_12][0];
                    Vue.set(
                      temp_data_12[top15_length_12 - i_12],
                      0,
                      temp_key_add
                    );
                  }
                })
                .then(res2 => {
                  // console.log(temp_data_12);
                  vm.hebdomadDibbleSeedingTOPData.data = temp_data_12;
                });
              // ////// 上周
              // if (length_12 > 1) {
              //   let buckets_child_12_2 =
              //     response.data.responses[12].aggregations
              //       .statistical_granularity.buckets[0].programname.buckets;
              //   let top15_length_week2_all = buckets_child_12_2.length; // 200个
              //   let i_12_2;
              //   function Return_KeyValue_12(key) {
              //     let value;
              //     for (i_12_2 = 0; i_12_2 < top15_length_week2_all; i_12_2++) {
              //       if (buckets_child_12_2[i_12_2].key == key) {
              //         // console.log(buckets_child_12_2[i_12_2].key);
              //         value = (
              //           buckets_child_12_2[i_12_2].demand_freq.value / 10000
              //         ).toFixed(2);
              //         break;
              //       }
              //     }
              //     return value;
              //   }
              //   // 遍历 本周（先）top 15的key
              //   for (i_12 = 0; i_12 < top15_length_12; i_12++) {
              //     Vue.set(
              //       temp_data_12[top15_length_12 - i_12],
              //       2,
              //       Return_KeyValue_12(temp_data_12[top15_length_12 - i_12][0])
              //     );
              //   }
              // } else {
              //   for (i_12 = 0; i_12 < top15_length_12; i_12++) {
              //     Vue.set(temp_data_12[top15_length_12 - i_12], 2, 0);
              //   }
              // }
              // for (i_12 = 0; i_12 < top15_length_12; i_12++) {
              //   let temp_key_add =
              //     buckets_12[1].programname.buckets[i_12].program_type
              //       .buckets[0].key +
              //     " - " +
              //     temp_data_12[top15_length_12 - i_12][0];
              //   Vue.set(temp_data_12[top15_length_12 - i_12], 0, temp_key_add);
              // }
              // setTimeout(function() {
              //   console.log(temp_data_12);
              //   vm.hebdomadDibbleSeedingTOPData.data = temp_data_12;
              // }, 3000);
              // console.log("~~~~~!!!!!");
              // console.log(vm.hebdomadDibbleSeedingTOPData);
            } catch (error) {
              console.log(error);
            }

            // //////////////// 各类型节目点播数据 (row5 )   responses13
            // 结构类似：(row8 right )
            // ////// 本周（先） 上周（后）
            // dibbleSeedingUserNumData  点播用户数（万户）  demand_user_num
            // dibbleSeedingNumData      点播次数（万次）    demand_freq
            // dibbleSeedingDurationData 点播时长（万小时）  demand_dur
            try {
              vm.dibbleSeedingUserNumData.data = [];
              vm.dibbleSeedingNumData.data = [];
              vm.dibbleSeedingDurationData.data = [];

              let buckets_13 =
                response.data.responses[13].aggregations.statistical_granularity
                  .buckets;
              let length_13 = buckets_13.length; // 默认两周 - 2
              let i_13;
              let temp_data_13_dun = [];
              let temp_data_13_df = [];
              let temp_data_13_dd = [];

              let index_current_13 = length_13 - 1;

              if (length_13 > 1) {
                temp_data_13_dun.push([
                  "product",
                  currentWeekFormat,
                  beforeWeekFormat
                ]);
                temp_data_13_df.push([
                  "product",
                  currentWeekFormat,
                  beforeWeekFormat
                ]);
                temp_data_13_dd.push([
                  "product",
                  currentWeekFormat,
                  beforeWeekFormat
                ]);
              }
              if (length_13 == 1) {
                temp_data_13_dun.push(["product", currentWeekFormat]);
                temp_data_13_df.push(["product", currentWeekFormat]);
                temp_data_13_dd.push(["product", currentWeekFormat]);
              }

              let buckets_13_child = buckets_13[0].program_type.buckets;
              let length_13_child = buckets_13_child.length;
              let top15_length_13 = 10;
              if (length_13_child < top15_length_13) {
                top15_length_13 = length_13_child;
              }
              for (i_13 = 0; i_13 < top15_length_13; i_13++) {
                temp_data_13_dun.push([]);
                temp_data_13_df.push([]);
                temp_data_13_dd.push([]);
              }

              // 本周
              for (i_13 = 0; i_13 < top15_length_13; i_13++) {
                // 一 0 1
                Vue.set(
                  temp_data_13_dun[top15_length_13 - i_13],
                  0,
                  buckets_13[index_current_13].program_type.buckets[i_13].key
                );
                Vue.set(
                  temp_data_13_dun[top15_length_13 - i_13],
                  1,
                  commonTools.returnFloat_2(
                    Number(
                      buckets_13[index_current_13].program_type.buckets[i_13]
                        .demand_user_num.value
                    ) / 10000
                  )
                );
                // 二 0 1
                Vue.set(
                  temp_data_13_df[top15_length_13 - i_13],
                  0,
                  buckets_13[index_current_13].program_type.buckets[i_13].key
                );
                Vue.set(
                  temp_data_13_df[top15_length_13 - i_13],
                  1,
                  commonTools.returnFloat_2(
                    Number(
                      buckets_13[index_current_13].program_type.buckets[i_13]
                        .demand_freq.value
                    ) / 10000
                  )
                );
                // 三 0 1
                Vue.set(
                  temp_data_13_dd[top15_length_13 - i_13],
                  0,
                  buckets_13[index_current_13].program_type.buckets[i_13].key
                );
                Vue.set(
                  temp_data_13_dd[top15_length_13 - i_13],
                  1,
                  commonTools.returnFloat_2(
                    Number(
                      buckets_13[index_current_13].program_type.buckets[i_13]
                        .demand_dur.value
                    ) /
                      10000 /
                      60
                  )
                );
              }
              // ////// 上周
              if (length_13 > 1) {
                let buckets_child_13_2 =
                  response.data.responses[13].aggregations
                    .statistical_granularity.buckets[0].program_type.buckets;
                let top15_length_13_week2_all = buckets_child_13_2.length; // 200个
                let i_13_2;
                // 一
                function Return_KeyValue_13_dun(key) {
                  let value;
                  for (
                    i_13_2 = 0;
                    i_13_2 < top15_length_13_week2_all;
                    i_13_2++
                  ) {
                    if (buckets_child_13_2[i_13_2].key == key) {
                      // console.log(buckets_child_13_2[i_13_2].key);
                      value = commonTools.returnFloat_2(
                        buckets_child_13_2[i_13_2].demand_user_num.value / 10000
                      );
                      break;
                    }
                  }
                  return value;
                }
                // 二
                function Return_KeyValue_13_df(key) {
                  let value;
                  for (
                    i_13_2 = 0;
                    i_13_2 < top15_length_13_week2_all;
                    i_13_2++
                  ) {
                    if (buckets_child_13_2[i_13_2].key == key) {
                      value = commonTools.returnFloat_2(
                        Number(buckets_child_13_2[i_13_2].demand_freq.value) /
                          10000
                      );
                      break;
                    }
                  }
                  return value;
                }
                // 三
                function Return_KeyValue_13_dd(key) {
                  let value;
                  for (
                    i_13_2 = 0;
                    i_13_2 < top15_length_13_week2_all;
                    i_13_2++
                  ) {
                    if (buckets_child_13_2[i_13_2].key == key) {
                      value = commonTools.returnFloat_2(
                        Number(buckets_child_13_2[i_13_2].demand_dur.value) /
                          10000 /
                          60
                      );
                      break;
                    }
                  }
                  return value;
                }
                // 遍历 本周（先）top 15的key
                for (i_13 = 0; i_13 < top15_length_13; i_13++) {
                  // 一
                  Vue.set(
                    temp_data_13_dun[top15_length_13 - i_13],
                    2,
                    Return_KeyValue_13_dun(
                      temp_data_13_dun[top15_length_13 - i_13][0]
                    )
                  );
                  // 二
                  Vue.set(
                    temp_data_13_df[top15_length_13 - i_13],
                    2,
                    Return_KeyValue_13_df(
                      temp_data_13_df[top15_length_13 - i_13][0]
                    )
                  );
                  // 三
                  Vue.set(
                    temp_data_13_dd[top15_length_13 - i_13],
                    2,
                    Return_KeyValue_13_dd(
                      temp_data_13_dd[top15_length_13 - i_13][0]
                    )
                  );
                }
              } else {
              }

              // console.log(temp_data_13_dun);
              // console.log(temp_data_13_df);
              // console.log(temp_data_13_dd);

              vm.dibbleSeedingUserNumData.data = temp_data_13_dun;
              vm.dibbleSeedingNumData.data = temp_data_13_df;
              vm.dibbleSeedingDurationData.data = temp_data_13_dd;
            } catch (error) {
              console.log(error);
            }

            // //////////////// 主要栏目点击次数（万次） (row6 )   responses 14
            // 上周（显示先） 本周（显示后）
            try {
              vm.mainProgramaPlayData.data = [];

              let buckets_14 =
                response.data.responses[14].aggregations.statistical_granularity
                  .buckets;
              let length_14 = buckets_14.length;
              // let index_curren_14 = length_14-1;

              let buckets_14_1;
              if (length_14 > 1) {
                buckets_14_1 =
                  response.data.responses[14].aggregations
                    .statistical_granularity.buckets[1].ti.buckets;
              }
              if (length_14 == 1) {
                buckets_14_1 =
                  response.data.responses[14].aggregations
                    .statistical_granularity.buckets[0].ti.buckets;
              }

              let length_14_1 = buckets_14_1.length; // 以本周为主
              let i_14;
              let temp_data_14 = [];
              temp_data_14.push([
                "product",
                beforeWeekFormat,
                currentWeekFormat,
                "环比"
              ]);
              for (i_14 = 0; i_14 < length_14_1; i_14++) {
                temp_data_14.push([]);
              }

              // 本周 - 虽然上周（先） 但以 本周从大到小排列
              for (i_14 = 0; i_14 < length_14_1; i_14++) {
                Vue.set(temp_data_14[i_14 + 1], 0, buckets_14_1[i_14].key); // ▲ 0
                Vue.set(
                  temp_data_14[i_14 + 1],
                  2,
                  (buckets_14_1[i_14].demand_freq.value / 10000).toFixed(2)
                ); // ▲ 2
              }
              // 上周
              if (length_14 > 1) {
                let buckets_14_0 =
                  response.data.responses[14].aggregations
                    .statistical_granularity.buckets[0].ti.buckets;
                let top15_length_week2_all = buckets_14_0.length; //
                console.log("error change");
                let length_14_0 = buckets_14_0.length; // length_14_0
                let i_14_2;
                function Return_KeyValue_14(key) {
                  let value;
                  for (i_14_2 = 0; i_14_2 < top15_length_week2_all; i_14_2++) {
                    if (buckets_14_0[i_14_2].key == key) {
                      // console.log(buckets_14_0[i_14_2].key);
                      value = (
                        buckets_14_0[i_14_2].demand_freq.value / 10000
                      ).toFixed(2);
                      break;
                    }
                  }
                  return value;
                }
                for (i_14 = 0; i_14 < length_14_1; i_14++) {
                  // length_14_1
                  Vue.set(
                    temp_data_14[i_14 + 1],
                    1,
                    Return_KeyValue_14(temp_data_14[i_14 + 1][0])
                  ); // ▲ 1
                }

                // 环比 第4位置 即3
                // 环比算法  （本期数值-上期数值）/上期数值
                for (i_14 = 0; i_14 < length_14_1; i_14++) {
                  // length_14_1
                  Vue.set(
                    temp_data_14[i_14 + 1],
                    3,
                    (
                      (temp_data_14[i_14 + 1][2] - temp_data_14[i_14 + 1][1]) /
                      temp_data_14[i_14 + 1][1]
                    ).toFixed(2)
                  ); // ▲ 3
                }
              } else if (length_14 == 1) {
                for (i_14 = 0; i_14 < length_14_1; i_14++) {
                  Vue.set(temp_data_14[i_14 + 1], 1, 0); // ▲ 1
                  Vue.set(temp_data_14[i_14 + 1], 3, 0); // ▲ 3
                }
              }
              // console.log("~~~~~~~~!!!");
              // console.log(vm.mainProgramaPlayData);
              vm.mainProgramaPlayData.data = temp_data_14;
            } catch (error) {
              console.log(error);
            }
            // //////////////// 本土原创节目点播数据 (row7 left )   responses 15 (同row4 left)
            try {
              vm.localProgramsPlayData.data = [];
              let buckets_15 =
                response.data.responses[15].aggregations.statistical_granularity
                  .buckets;
              let length_15 = buckets_15.length;
              let i_15;
              let temp_data_15 = [];
              let temp_data_15_1 = [];
              let temp_data_15_2 = [];
              let temp_data_15_3 = [];
              temp_data_15_1.push("点播用户数（户）");
              temp_data_15_2.push("点播次数（次）");
              temp_data_15_3.push("点播时长（小时）");
              if (length_15 > 1) {
                temp_data_15.push([
                  "product",
                  beforeWeekFormat,
                  currentWeekFormat
                ]);
              }
              if (length_15 == 1) {
                temp_data_15.push(["product", currentWeekFormat]);
              }

              for (i_15 = 0; i_15 < length_15; i_15++) {
                temp_data_15_1.push(buckets_15[i_15].demand_user_num.value);
                temp_data_15_2.push(buckets_15[i_15].demand_freq.value);
                temp_data_15_3.push(
                  (buckets_15[i_15].demand_dur.value / 60).toFixed(2)
                );
              }
              temp_data_15.push(temp_data_15_1);
              temp_data_15.push(temp_data_15_2);
              temp_data_15.push(temp_data_15_3);
              vm.localProgramsPlayData.data = temp_data_15;
              // console.log("~~~~~!!!!!");
              // console.log(vm.localProgramsPlayData);
            } catch (error) {
              console.log(error);
            }
            // //////////////// 本土原创节目点播数据 (row7 right )   responses 16 (同row4 right)
            // ////// 本周（先） 上周（后）
            try {
              let buckets_16 =
                response.data.responses[16].aggregations.statistical_granularity
                  .buckets;
              let length_16 = buckets_16.length; // 默认两周 - 2
              let i_16;
              let temp_data_16 = [];
              temp_data_16.push([
                "product",
                currentWeekFormat,
                beforeWeekFormat
              ]);

              let index_current_16 = length_16 - 1;

              let top10_length_16 = 10;
              for (i_16 = 0; i_16 < top10_length_16; i_16++) {
                temp_data_16.push([]);
              }

              let tlist = [];
              // 本周
              for (i_16 = 0; i_16 < top10_length_16; i_16++) {
                Vue.set(
                  temp_data_16[top10_length_16 - i_16],
                  0,
                  buckets_16[index_current_16].programname.buckets[i_16].key
                );
                Vue.set(
                  temp_data_16[top10_length_16 - i_16],
                  1,
                  (
                    buckets_16[index_current_16].programname.buckets[i_16]
                      .demand_freq.value / 10000
                  ).toFixed(2)
                );
                if (length_16 > 1) {
                  let temp_c = {
                    operator: String([m_operator]),
                    year: temp_time.year,
                    start: commonTools.ReturnBeforeWeek(temp_time.week, 1),
                    end: commonTools.ReturnBeforeWeek(temp_time.week, 1),
                    programname:
                      buckets_16[index_current_16].programname.buckets[i_16].key
                  };
                  let formData_c = new FormData();
                  formData_c = new window.FormData();
                  formData_c.append("operator", temp_c.operator);
                  formData_c.append("start", temp_c.start);
                  formData_c.append("end", temp_c.end);
                  formData_c.append("year", temp_c.year);
                  formData_c.append("programname", temp_c.programname);
                  tlist.push(
                    users_mobileReport_top(formData_c)
                      .then(function(response_c) {
                        // ▲▲▲ collection 1
                        let m_buckets =
                          response_c.data.responses[1].aggregations
                            .statistical_granularity.buckets;
                        let m_value;
                        if (m_buckets.length > 0) {
                          m_value = (
                            m_buckets[0].demand_freq.value / 10000
                          ).toFixed(2);
                        }
                        if (m_buckets.length == 0) {
                          m_value = "";
                        }
                        // console.log(m_value);
                        return m_value;
                      })
                      .catch(function(error) {
                        console.info(error);
                        return "";
                      })
                  );
                }
              } // for
              Promise.all(tlist)
                .then(res => {
                  if (length_16 > 1) {
                    res.forEach((item, index) => {
                      Vue.set(temp_data_16[top10_length_16 - index], 2, item);
                    });
                  } else {
                    for (i_16 = 0; i_16 < top10_length_16; i_16++) {
                      Vue.set(temp_data_16[top10_length_16 - index], 2, "");
                    }
                  }
                  for (i_16 = 0; i_16 < top10_length_16; i_16++) {
                    let temp_key_add =
                      buckets_16[index_current_16].programname.buckets[i_16]
                        .program_type.buckets[0].key +
                      " - " +
                      temp_data_16[top10_length_16 - i_16][0];
                    Vue.set(
                      temp_data_16[top10_length_16 - i_16],
                      0,
                      temp_key_add
                    );
                  }
                })
                .then(res2 => {
                  vm.localProgramsPlayTOPData.data = temp_data_16;
                });

              // ////// 上周
              // if (length_16 > 1) {
              //   let buckets_child_16_2 =
              //     response.data.responses[16].aggregations
              //       .statistical_granularity.buckets[0].programname.buckets;
              //   let top10_length_16_week2_all = buckets_child_16_2.length; // 200个
              //   let i_16_2;
              //   function Return_KeyValue_16(key) {
              //     let value;
              //     for (
              //       i_16_2 = 0;
              //       i_16_2 < top10_length_16_week2_all;
              //       i_16_2++
              //     ) {
              //       if (buckets_child_16_2[i_16_2].key == key) {
              //         // console.log(buckets_child_16_2[i_16_2].key);
              //         value = (
              //           buckets_child_16_2[i_16_2].demand_freq.value / 10000
              //         ).toFixed(2);
              //         break;
              //       }
              //     }
              //     return value;
              //   }
              //   // 遍历 本周（先）top 15的key
              //   for (i_16 = 0; i_16 < top10_length_16; i_16++) {
              //     Vue.set(
              //       temp_data_16[top10_length_16 - i_16],
              //       2,
              //       Return_KeyValue_16(temp_data_16[top10_length_16 - i_16][0])
              //     );
              //   }
              // } else {
              //   for (i_16 = 0; i_16 < top10_length_16; i_16++) {
              //     Vue.set(temp_data_16[top10_length_16 - i_16], 2, 0);
              //   }
              // }

              // for (i_16 = 0; i_16 < top10_length_16; i_16++) {
              //   let temp_key_add =
              //     buckets_16[1].programname.buckets[i_16].program_type
              //       .buckets[0].key +
              //     " - " +
              //     temp_data_16[top10_length_16 - i_16][0];
              //   Vue.set(temp_data_16[top10_length_16 - i_16], 0, temp_key_add);
              // }

              // vm.localProgramsPlayTOPData.data = temp_data_16;
            } catch (error) {
              console.log(error);
            }
            // //////////////// 一周直播数据概览 (row8 left )   responses 17  (类似 row4/7 left)
            try {
              let buckets_17 =
                response.data.responses[17].aggregations.statistical_granularity
                  .buckets;
              let length_17 = buckets_17.length;
              let i_17;
              let temp_data_17 = [];
              let temp_data_17_1 = [];
              let temp_data_17_2 = [];
              let temp_data_17_3 = [];
              temp_data_17_1.push("直播收视用户数（万户）");
              temp_data_17_2.push("直播收视次数（万次）");
              temp_data_17_3.push("直播收视时长（万小时）");

              temp_data_17.push([
                "product",
                beforeWeekFormat,
                currentWeekFormat
              ]);

              for (i_17 = 0; i_17 < length_17; i_17++) {
                temp_data_17_1.push(
                  (buckets_17[i_17].onlive_user_num.value / 10000).toFixed(2)
                );
                temp_data_17_2.push(
                  (buckets_17[i_17].onlive_freq.value / 10000).toFixed(2)
                );
                temp_data_17_3.push(
                  (buckets_17[i_17].onlive_dur.value / 10000 / 60).toFixed(2)
                );
              }
              temp_data_17.push(temp_data_17_1);
              temp_data_17.push(temp_data_17_2);
              temp_data_17.push(temp_data_17_3);
              vm.hebdomadLiveData.data = temp_data_17;
              // console.log("~~~~~!!!!!");
              // console.log(vm.hebdomadLiveData);
            } catch (error) {
              console.log(error);
            }
            // ////////////////  一周直播数据概览 (row8 right )   responses 18 (同row4/7 right)
            // ////// 本周（先） 上周（后）
            try {
              let buckets_18 =
                response.data.responses[18].aggregations.statistical_granularity
                  .buckets;
              let length_18 = buckets_18.length; // 默认两周 - 2
              let i_18;
              let temp_data_18 = [];
              temp_data_18.push([
                "product",
                currentWeekFormat,
                beforeWeekFormat
              ]);
              let index_current_18 = length_18 - 1;

              let top15_length_18 = 15;
              for (i_18 = 0; i_18 < top15_length_18; i_18++) {
                temp_data_18.push([]);
              }

              let tlist = [];

              // 本周
              for (i_18 = 0; i_18 < top15_length_18; i_18++) {
                Vue.set(
                  temp_data_18[top15_length_18 - i_18],
                  0,
                  buckets_18[index_current_18].programname.buckets[i_18].key
                );
                Vue.set(
                  temp_data_18[top15_length_18 - i_18],
                  1,
                  commonTools.returnFloat_2(
                    buckets_18[index_current_18].programname.buckets[i_18]
                      .onlive_dur.value /
                      10000 /
                      60
                  )
                );
                if (length_18 > 1) {
                  let temp_c = {
                    operator: String([m_operator]),
                    year: temp_time.year,
                    start: commonTools.ReturnBeforeWeek(temp_time.week, 1),
                    end: commonTools.ReturnBeforeWeek(temp_time.week, 1),
                    programname:
                      buckets_18[index_current_18].programname.buckets[i_18].key
                  };
                  let formData_c = new FormData();
                  formData_c = new window.FormData();
                  formData_c.append("operator", temp_c.operator);
                  formData_c.append("start", temp_c.start);
                  formData_c.append("end", temp_c.end);
                  formData_c.append("year", temp_c.year);
                  formData_c.append("programname", temp_c.programname);
                  tlist.push(
                    users_mobileReport_top(formData_c)
                      .then(function(response_c) {
                        // ▲▲▲ collection 2
                        let m_buckets =
                          response_c.data.responses[2].aggregations
                            .statistical_granularity.buckets;
                        let m_value;
                        if (m_buckets.length > 0) {
                          m_value = (
                            m_buckets[0].onlive_dur.value /
                            10000 /
                            60
                          ).toFixed(2);
                        }
                        if (m_buckets.length == 0) {
                          m_value = "";
                        }
                        // console.log(m_value);
                        return m_value;
                      })
                      .catch(function(error) {
                        console.info(error);
                        return "";
                      })
                  );
                }
              } // for
              Promise.all(tlist)
                .then(res => {
                  if (length_18 > 1) {
                    res.forEach((item, index) => {
                      Vue.set(temp_data_18[top15_length_18 - index], 2, item);
                    });
                  } else {
                    for (i_18 = 0; i_18 < top15_length_18; i_18++) {
                      Vue.set(temp_data_18[top15_length_18 - index], 2, "");
                    }
                  }
                  for (i_18 = 0; i_18 < top15_length_18; i_18++) {
                    let temp_key_add =
                      buckets_18[index_current_18].programname.buckets[i_18]
                        .channel.buckets[0].key +
                      " - " +
                      temp_data_18[top15_length_18 - i_18][0];
                    Vue.set(
                      temp_data_18[top15_length_18 - i_18],
                      0,
                      temp_key_add
                    );
                  }
                })
                .then(res2 => {
                  vm.hebdomadLiveTOPData.data = temp_data_18;
                });
              // ////// 上周
              // let buckets_child_18_2 =
              //   response.data.responses[18].aggregations.statistical_granularity
              //     .buckets[0].programname.buckets;
              // let top15_length_18_week2_all = buckets_child_18_2.length; // 200个
              // let i_18_2;
              // function Return_KeyValue_18(key) {
              //   let value;
              //   for (i_18_2 = 0; i_18_2 < top15_length_18_week2_all; i_18_2++) {
              //     if (buckets_child_18_2[i_18_2].key == key) {
              //       // console.log(buckets_child_18_2[i_18_2].key);
              //       value = commonTools.returnFloat_2(
              //         buckets_child_18_2[i_18_2].onlive_dur.value / 10000 / 60
              //       );
              //       break;
              //     }
              //   }
              //   return value;
              // }
              // // 遍历 本周（先）top 15的key
              // for (i_18 = 0; i_18 < top15_length_18; i_18++) {
              //   Vue.set(
              //     temp_data_18[top15_length_18 - i_18],
              //     2,
              //     Return_KeyValue_18(temp_data_18[top15_length_18 - i_18][0])
              //   );
              // }
              // for (i_18 = 0; i_18 < top15_length_18; i_18++) {
              //   let temp_key_add =
              //     buckets_18[1].programname.buckets[i_18].channel.buckets[0]
              //       .key +
              //     " - " +
              //     temp_data_18[top15_length_18 - i_18][0];
              //   Vue.set(temp_data_18[top15_length_18 - i_18], 0, temp_key_add);
              // }
              // vm.hebdomadLiveTOPData.data = temp_data_18;
            } catch (error) {
              console.log(error);
            }
            // ////////////////  电视直播频道分组收视数据 (row9)   responses 19
            try {
              let buckets_19 =
                response.data.responses[19].aggregations.statistical_granularity
                  .buckets;
              let buckets_19_child_0 = buckets_19[0].channel_flag.buckets;
              let buckets_19_child_1 = buckets_19[1].channel_flag.buckets;
              let length_19 = buckets_19_child_0.length;
              let i_19;
              let temp_data_19_1 = [];
              let temp_data_19_2 = [];
              let temp_data_19_3 = [];
              temp_data_19_1.push([
                "product",
                beforeWeekFormat,
                currentWeekFormat
              ]);
              temp_data_19_2.push([
                "product",
                beforeWeekFormat,
                currentWeekFormat
              ]);
              temp_data_19_3.push([
                "product",
                beforeWeekFormat,
                currentWeekFormat
              ]);
              for (i_19 = 0; i_19 < length_19; i_19++) {
                temp_data_19_1.push([]);
                temp_data_19_2.push([]);
                temp_data_19_3.push([]);
              }

              // 默认排序 - 卫视 央视 本地 轮播 （不分大小）
              // 以上周为对比
              for (i_19 = 0; i_19 < length_19; i_19++) {
                temp_data_19_1[i_19 + 1].push(buckets_19_child_0[i_19].key);
                temp_data_19_2[i_19 + 1].push(buckets_19_child_0[i_19].key);
                temp_data_19_3[i_19 + 1].push(buckets_19_child_0[i_19].key);

                temp_data_19_1[i_19 + 1].push(
                  (
                    buckets_19_child_0[i_19].onlive_user_num.value / 10000
                  ).toFixed(2)
                );
                temp_data_19_2[i_19 + 1].push(
                  (buckets_19_child_0[i_19].onlive_freq.value / 10000).toFixed(
                    2
                  )
                );
                temp_data_19_3[i_19 + 1].push(
                  (
                    buckets_19_child_0[i_19].onlive_dur.value /
                    10000 /
                    60
                  ).toFixed(2)
                );

                temp_data_19_1[i_19 + 1].push(
                  (
                    buckets_19_child_1[i_19].onlive_user_num.value / 10000
                  ).toFixed(2)
                );
                temp_data_19_2[i_19 + 1].push(
                  (buckets_19_child_1[i_19].onlive_freq.value / 10000).toFixed(
                    2
                  )
                );
                temp_data_19_3[i_19 + 1].push(
                  (
                    buckets_19_child_1[i_19].onlive_dur.value /
                    10000 /
                    60
                  ).toFixed(2)
                );
              }

              vm.channelLiveUserNumData.data = temp_data_19_1;
              vm.channelLiveTimesData.data = temp_data_19_2;
              vm.channelLiveDurationData.data = temp_data_19_3;
              // console.log("~~~~~~~~~~~~~~~!!");
              // console.log(vm.channelLiveUserNumData);
              // console.log(vm.channelLiveTimesData);
              // console.log(vm.channelLiveDurationData);
            } catch (error) {
              console.log(error);
            }
            // ////////////////  央视频道及节目收视排名 (row10 left)   responses 20 (同row4/7/8 right)
            // ////// 本周（先） 上周（后）
            try {
              let buckets_20 =
                response.data.responses[20].aggregations.statistical_granularity
                  .buckets;
              // let length_20 = buckets_20.length; // 默认两周 - 2
              let i_20;
              let temp_data_20 = [];
              temp_data_20.push([
                "product",
                currentWeekFormat,
                beforeWeekFormat
              ]);
              let top10_length_20 = 10;
              for (i_20 = 0; i_20 < top10_length_20; i_20++) {
                temp_data_20.push([]);
              }

              // 本周
              for (i_20 = 0; i_20 < top10_length_20; i_20++) {
                Vue.set(
                  temp_data_20[top10_length_20 - i_20],
                  0,
                  buckets_20[1].channel.buckets[i_20].key
                );
                Vue.set(
                  temp_data_20[top10_length_20 - i_20],
                  1,
                  commonTools.returnFloat_2(
                    buckets_20[1].channel.buckets[i_20].onlive_user_num.value /
                      10000
                  )
                );
              }
              // ////// 上周
              let buckets_child_20_2 =
                response.data.responses[20].aggregations.statistical_granularity
                  .buckets[0].channel.buckets;
              let top10_length_20_week2_all = buckets_child_20_2.length; // 200个
              let i_20_2;
              function Return_KeyValue_20(key) {
                let value;
                for (i_20_2 = 0; i_20_2 < top10_length_20_week2_all; i_20_2++) {
                  if (buckets_child_20_2[i_20_2].key == key) {
                    value = commonTools.returnFloat_2(
                      buckets_child_20_2[i_20_2].onlive_user_num.value / 10000
                    );
                    break;
                  }
                }
                return value;
              }
              // 遍历 本周（先）top 15的key
              for (i_20 = 0; i_20 < top10_length_20; i_20++) {
                Vue.set(
                  temp_data_20[top10_length_20 - i_20],
                  2,
                  Return_KeyValue_20(temp_data_20[top10_length_20 - i_20][0])
                );
              }
              vm.liveChannelTOPData.data = temp_data_20;
            } catch (error) {
              console.log(error);
            }
            // ////////////////  央视频道及节目收视排名 (row10 right)   responses 21
            try {
              vm.liveProgramTOPData.data = [];

              let buckets_21 =
                response.data.responses[21].aggregations.statistical_granularity
                  .buckets;
              let length_21 = buckets_21.length; // 默认两周 - 2

              let buckets_21_child_0;
              let buckets_21_child_1;
              if (length_21 > 1) {
                buckets_21_child_0 = buckets_21[0].programname.buckets;
                buckets_21_child_1 = buckets_21[1].programname.buckets;
              }
              if (length_21 == 1) {
                buckets_21_child_1 = buckets_21[0].programname.buckets;
              }
              // 本周top10 名称+数值 (0+2) => 上周数值（1）
              let i_21;
              let temp_data_21 = [];
              temp_data_21.push([
                "product",
                beforeWeekFormat,
                currentWeekFormat
              ]);
              let top10_length_21 = 10;
              for (i_21 = 0; i_21 < top10_length_21; i_21++) {
                temp_data_21.push([]);
              }
              let tlist = [];

              // 本周
              for (i_21 = 0; i_21 < top10_length_21; i_21++) {
                Vue.set(
                  temp_data_21[i_21 + 1],
                  0,
                  buckets_21_child_1[i_21].key
                );
                Vue.set(
                  temp_data_21[i_21 + 1],
                  2,
                  commonTools.returnFloat_2(
                    buckets_21_child_1[i_21].onlive_dur.value / 10000 / 60
                  )
                );
                if (length_21 > 1) {
                  let temp_c = {
                    operator: String([m_operator]),
                    year: temp_time.year,
                    start: commonTools.ReturnBeforeWeek(temp_time.week, 1),
                    end: commonTools.ReturnBeforeWeek(temp_time.week, 1),
                    programname: buckets_21_child_1[i_21].key
                  };
                  let formData_c = new FormData();
                  formData_c = new window.FormData();
                  formData_c.append("operator", temp_c.operator);
                  formData_c.append("start", temp_c.start);
                  formData_c.append("end", temp_c.end);
                  formData_c.append("year", temp_c.year);
                  formData_c.append("programname", temp_c.programname);
                  // console.log(temp_c);
                  tlist.push(
                    users_mobileReport_top(formData_c)
                      .then(function(response_c) {
                        // console.log(response_c);
                        // ▲▲▲ collection 3
                        let m_buckets =
                          response_c.data.responses[3].aggregations
                            .statistical_granularity.buckets;
                        let m_value;
                        if (m_buckets.length > 0) {
                          m_value = (
                            m_buckets[0].onlive_dur.value /
                            10000 /
                            60
                          ).toFixed(2);
                        }
                        if (m_buckets.length == 0) {
                          m_value = "";
                        }
                        // console.log(m_value);
                        return m_value;
                      })
                      .catch(function(error) {
                        console.info(error);
                        return "";
                      })
                  );
                }
              } // for
              Promise.all(tlist)
                .then(res => {
                  // console.log(res);
                  if (length_21 > 1) {
                    res.forEach((item, index) => {
                      Vue.set(temp_data_21[index + 1], 1, item);
                    });
                  } else {
                    for (i_21 = 0; i_21 < top10_length_21; i_21++) {
                      Vue.set(temp_data_21[index + 1], 1, "");
                    }
                  }
                  function Manage_longKey(key) {
                    // 特殊处理：top10有点多
                    return key.replace(" ", "\n");
                  }
                  for (i_21 = 0; i_21 < top10_length_21; i_21++) {
                    let temp_key_add =
                      temp_data_21[i_21 + 1][0] +
                      "\n" +
                      Manage_longKey(
                        buckets_21[1].programname.buckets[i_21].channel
                          .buckets[0].key
                      );
                    Vue.set(temp_data_21[i_21 + 1], 0, temp_key_add);
                  }
                })
                .then(res2 => {
                  vm.liveProgramTOPData.data = temp_data_21;
                });

              // 上周
              // let top10_length_21_week2_all = buckets_21_child_0.length; // 至多200个
              // let i_21_2;
              // function Return_KeyValue_21(key) {
              //   let value;
              //   for (i_21_2 = 0; i_21_2 < top10_length_21_week2_all; i_21_2++) {
              //     if (buckets_21_child_0[i_21_2].key == key) {
              //       value = commonTools.returnFloat_2(
              //         buckets_21_child_0[i_21_2].onlive_dur.value / 10000 / 60
              //       );
              //       break;
              //     }
              //   }
              //   return value;
              // }
              // for (i_21 = 0; i_21 < top10_length_21; i_21++) {
              //   Vue.set(
              //     temp_data_21[i_21 + 1],
              //     1,
              //     Return_KeyValue_21(temp_data_21[i_21 + 1][0])
              //   );
              // }
              // function Manage_longKey(key) {
              //   // 特殊处理：top10有点多
              //   return key.replace(" ", "\n");
              // }
              // for (i_21 = 0; i_21 < top10_length_21; i_21++) {
              //   let temp_key_add =
              //     temp_data_21[i_21 + 1][0] +
              //     "\n" +
              //     Manage_longKey(
              //       buckets_21[1].programname.buckets[i_21].channel.buckets[0]
              //         .key
              //     );
              //   Vue.set(temp_data_21[i_21 + 1], 0, temp_key_add);
              // }
              // vm.liveProgramTOPData.data = temp_data_21;
            } catch (error) {
              console.log(error);
            }
            // ////////////////  本地频道及节目收视排名 (row11 left)   responses 22 (类似 row4/7/8 right row10 left)
            // ////// 本周（先） 上周（后）
            try {
              let buckets_22 =
                response.data.responses[22].aggregations.statistical_granularity
                  .buckets;
              let buckets_22_0 = buckets_22[0].channel.buckets;
              let buckets_22_1 = buckets_22[1].channel.buckets;
              // let length_22 = buckets_22.length; // 默认两周 - 2
              let i_22;
              let temp_data_22 = [];
              temp_data_22.push([
                "product",
                currentWeekFormat,
                beforeWeekFormat
              ]);
              let top22_length_22 = 22;
              if (buckets_22_0.length < top22_length_22) {
                // 实际没有22个，只有15个-根据实际数据改变
                top22_length_22 = buckets_22_0.length;
              }
              for (i_22 = 0; i_22 < top22_length_22; i_22++) {
                temp_data_22.push([]);
              }
              // 本周
              for (i_22 = 0; i_22 < top22_length_22; i_22++) {
                Vue.set(
                  temp_data_22[top22_length_22 - i_22],
                  0,
                  buckets_22[1].channel.buckets[i_22].key
                );
                Vue.set(
                  temp_data_22[top22_length_22 - i_22],
                  1,
                  commonTools.returnFloat_2(
                    buckets_22[1].channel.buckets[i_22].onlive_user_num.value /
                      10000
                  )
                );
              }
              // ////// 上周
              let buckets_child_22_2 =
                response.data.responses[22].aggregations.statistical_granularity
                  .buckets[0].channel.buckets;
              let top22_length_22_week2_all = buckets_child_22_2.length; // 220个
              let i_22_2;
              function Return_KeyValue_22(key) {
                let value;
                for (i_22_2 = 0; i_22_2 < top22_length_22_week2_all; i_22_2++) {
                  if (buckets_child_22_2[i_22_2].key == key) {
                    value = commonTools.returnFloat_2(
                      buckets_child_22_2[i_22_2].onlive_user_num.value / 10000
                    );
                    break;
                  }
                }
                return value;
              }
              // 遍历 本周（先）top 15的key
              for (i_22 = 0; i_22 < top22_length_22; i_22++) {
                Vue.set(
                  temp_data_22[top22_length_22 - i_22],
                  2,
                  Return_KeyValue_22(temp_data_22[top22_length_22 - i_22][0])
                );
              }
              vm.localChannelTOPData.data = temp_data_22;
            } catch (error) {
              console.log(error);
            }
            // ////////////////  本地频道及节目收视排名 (row11 right)   responses 23 (类似 row10 right)
            try {
              let buckets_23 =
                response.data.responses[23].aggregations.statistical_granularity
                  .buckets;
              let length_23 = buckets_23.length; // 默认两周 - 2

              let buckets_23_child_0;
              let buckets_23_child_1;
              if (length_23 > 1) {
                buckets_23_child_0 = buckets_23[0].programname.buckets;
                buckets_23_child_1 = buckets_23[1].programname.buckets;
              }
              if (length_23 == 1) {
                buckets_23_child_1 = buckets_23[0].programname.buckets;
              }

              let tlist = [];

              // 本周top10 名称+数值 (0+2) => 上周数值（1）
              let i_23;
              let temp_data_23 = [];
              temp_data_23.push([
                "product",
                beforeWeekFormat,
                currentWeekFormat
              ]);
              let top5_length_23 = 5;
              for (i_23 = 0; i_23 < top5_length_23; i_23++) {
                temp_data_23.push([]);
              }
              // 本周
              for (i_23 = 0; i_23 < top5_length_23; i_23++) {
                Vue.set(
                  temp_data_23[i_23 + 1],
                  0,
                  buckets_23_child_1[i_23].key
                );
                Vue.set(
                  temp_data_23[i_23 + 1],
                  2,
                  commonTools.returnFloat_2(
                    buckets_23_child_1[i_23].onlive_dur.value / 10000 / 60
                  )
                );
                if (length_23 > 1) {
                  let temp_c = {
                    operator: String([m_operator]),
                    year: temp_time.year,
                    start: commonTools.ReturnBeforeWeek(temp_time.week, 1),
                    end: commonTools.ReturnBeforeWeek(temp_time.week, 1),
                    programname: buckets_23_child_1[i_23].key
                  };
                  let formData_c = new FormData();
                  formData_c = new window.FormData();
                  formData_c.append("operator", temp_c.operator);
                  formData_c.append("start", temp_c.start);
                  formData_c.append("end", temp_c.end);
                  formData_c.append("year", temp_c.year);
                  formData_c.append("programname", temp_c.programname);
                  // console.log(temp_c);
                  tlist.push(
                    users_mobileReport_top(formData_c)
                      .then(function(response_c) {
                        // console.log(response_c);
                        // ▲▲▲ collection 4
                        let m_buckets =
                          response_c.data.responses[4].aggregations
                            .statistical_granularity.buckets;
                        let m_value;
                        if (m_buckets.length > 0) {
                          m_value = (
                            m_buckets[0].onlive_dur.value /
                            10000 /
                            60
                          ).toFixed(2);
                        }
                        if (m_buckets.length == 0) {
                          m_value = "";
                        }
                        // console.log(m_value);
                        return m_value;
                      })
                      .catch(function(error) {
                        console.info(error);
                        return "";
                      })
                  );
                }
              } // for
              Promise.all(tlist)
                .then(res => {
                  // console.log(res);
                  if (length_23 > 1) {
                    res.forEach((item, index) => {
                      Vue.set(temp_data_23[index + 1], 1, item);
                    });
                  } else {
                    for (i_23 = 0; i_23 < top5_length_23; i_23++) {
                      Vue.set(temp_data_23[index + 1], 1, "");
                    }
                  }
                  for (i_23 = 0; i_23 < top5_length_23; i_23++) {
                    let temp_key_add =
                      temp_data_23[i_23 + 1][0] +
                      "\n" +
                      buckets_23[1].programname.buckets[i_23].channel.buckets[0]
                        .key;
                    Vue.set(temp_data_23[i_23 + 1], 0, temp_key_add);
                  }
                })
                .then(res2 => {
                  vm.localProgramTOPData.data = temp_data_23;
                });

              // 上周
              // let top5_length_23_week2_all = buckets_23_child_0.length; // 至多200个
              // let i_23_2;
              // function Return_KeyValue_23(key) {
              //   let value;
              //   for (i_23_2 = 0; i_23_2 < top5_length_23_week2_all; i_23_2++) {
              //     if (buckets_23_child_0[i_23_2].key == key) {
              //       value = commonTools.returnFloat_2(
              //         buckets_23_child_0[i_23_2].onlive_dur.value / 10000 / 60
              //       );
              //       break;
              //     }
              //   }
              //   return value;
              // }
              // for (i_23 = 0; i_23 < top5_length_23; i_23++) {
              //   Vue.set(
              //     temp_data_23[i_23 + 1],
              //     1,
              //     Return_KeyValue_23(temp_data_23[i_23 + 1][0])
              //   );
              // }
              // for (i_23 = 0; i_23 < top5_length_23; i_23++) {
              //   let temp_key_add =
              //     temp_data_23[i_23 + 1][0] +
              //     "\n" +
              //     buckets_23[1].programname.buckets[i_23].channel.buckets[0]
              //       .key;
              //   Vue.set(temp_data_23[i_23 + 1], 0, temp_key_add);
              // }
              // vm.localProgramTOPData.data = temp_data_23;
            } catch (error) {
              console.log(error);
            }
            // ////////////////  卫视频道及节目收视排名 (row12 left)   responses 24 (同row10 left)
            // ////// 本周（先） 上周（后）
            try {
              let buckets_24 =
                response.data.responses[24].aggregations.statistical_granularity
                  .buckets;
              let length_24 = buckets_24.length; // 默认两周 - 2
              let i_24;
              let temp_data_24 = [];
              temp_data_24.push([
                "product",
                currentWeekFormat,
                beforeWeekFormat
              ]);
              let top10_length_24 = 10;
              for (i_24 = 0; i_24 < top10_length_24; i_24++) {
                temp_data_24.push([]);
              }
              let index_current_24 = length_24 - 1;

              // 本周
              for (i_24 = 0; i_24 < top10_length_24; i_24++) {
                Vue.set(
                  temp_data_24[top10_length_24 - i_24],
                  0,
                  buckets_24[index_current_24].channel.buckets[i_24].key
                );
                Vue.set(
                  temp_data_24[top10_length_24 - i_24],
                  1,
                  commonTools.returnFloat_2(
                    buckets_24[index_current_24].channel.buckets[i_24]
                      .onlive_user_num.value / 10000
                  )
                );
              }
              // ////// 上周
              if (length_24 > 1) {
                let buckets_child_24_2 =
                  response.data.responses[24].aggregations
                    .statistical_granularity.buckets[0].channel.buckets;
                let top10_length_24_week2_all = buckets_child_24_2.length; // 240个
                let i_24_2;
                function Return_KeyValue_24(key) {
                  let value;
                  for (
                    i_24_2 = 0;
                    i_24_2 < top10_length_24_week2_all;
                    i_24_2++
                  ) {
                    if (buckets_child_24_2[i_24_2].key == key) {
                      value = commonTools.returnFloat_2(
                        buckets_child_24_2[i_24_2].onlive_user_num.value / 10000
                      );
                      break;
                    }
                  }
                  return value;
                }
                // 遍历 本周（先）top 15的key
                for (i_24 = 0; i_24 < top10_length_24; i_24++) {
                  Vue.set(
                    temp_data_24[top10_length_24 - i_24],
                    2,
                    Return_KeyValue_24(temp_data_24[top10_length_24 - i_24][0])
                  );
                }
              } else {
                for (i_24 = 0; i_24 < top10_length_24; i_24++) {
                  Vue.set(temp_data_24[top10_length_24 - i_24], 2, "");
                }
              }

              vm.satelliteChannelTOPData.data = temp_data_24;
            } catch (error) {
              console.log(error);
            }
            // ////////////////  卫视频道及节目收视排名 (row12 right)   responses 25 (同row10 right)
            try {
              let buckets_25 =
                response.data.responses[25].aggregations.statistical_granularity
                  .buckets;
              let length_25 = buckets_25.length; // 默认两周 - 2
              let buckets_25_child_0;
              let buckets_25_child_1;
              if (length_25 > 1) {
                buckets_25_child_0 = buckets_25[0].programname.buckets;
                buckets_25_child_1 = buckets_25[1].programname.buckets;
              }
              if (length_25 == 1) {
                buckets_25_child_1 = buckets_25[0].programname.buckets;
              }

              // 本周top10 名称+数值 (0+2) => 上周数值（1）
              let i_25;
              let temp_data_25 = [];
              temp_data_25.push([
                "product",
                beforeWeekFormat,
                currentWeekFormat
              ]);
              let index_current_25 = length_25 - 1;

              let top10_length_25 = 10;
              for (i_25 = 0; i_25 < top10_length_25; i_25++) {
                temp_data_25.push([]);
              }
              let tlist = [];

              // 本周
              for (i_25 = 0; i_25 < top10_length_25; i_25++) {
                Vue.set(
                  temp_data_25[i_25 + 1],
                  0,
                  buckets_25_child_1[i_25].key
                );
                Vue.set(
                  temp_data_25[i_25 + 1],
                  2,
                  commonTools.returnFloat_2(
                    buckets_25_child_1[i_25].onlive_dur.value / 10000 / 60
                  )
                );
                if (length_25 > 1) {
                  let temp_c = {
                    operator: String([m_operator]),
                    year: temp_time.year,
                    start: commonTools.ReturnBeforeWeek(temp_time.week, 1),
                    end: commonTools.ReturnBeforeWeek(temp_time.week, 1),
                    programname: buckets_25_child_1[i_25].key
                  };
                  let formData_c = new FormData();
                  formData_c = new window.FormData();
                  formData_c.append("operator", temp_c.operator);
                  formData_c.append("start", temp_c.start);
                  formData_c.append("end", temp_c.end);
                  formData_c.append("year", temp_c.year);
                  formData_c.append("programname", temp_c.programname);
                  // console.log(temp_c);
                  tlist.push(
                    users_mobileReport_top(formData_c)
                      .then(function(response_c) {
                        // console.log(response_c);
                        // ▲▲▲ collection 5
                        let m_buckets =
                          response_c.data.responses[5].aggregations
                            .statistical_granularity.buckets;
                        let m_value;
                        if (m_buckets.length > 0) {
                          m_value = (
                            m_buckets[0].onlive_dur.value /
                            10000 /
                            60
                          ).toFixed(2);
                        }
                        if (m_buckets.length == 0) {
                          m_value = "";
                        }
                        // console.log(m_value);
                        return m_value;
                      })
                      .catch(function(error) {
                        console.info(error);
                        return "";
                      })
                  );
                }
              } //for
              Promise.all(tlist)
                .then(res => {
                  // console.log(res);
                  if (length_25 > 1) {
                    res.forEach((item, index) => {
                      Vue.set(temp_data_25[index + 1], 1, item);
                    });
                  } else {
                    for (i_25 = 0; i_25 < top10_length_25; i_25++) {
                      Vue.set(temp_data_25[index + 1], 1, "");
                    }
                  }
                  for (i_25 = 0; i_25 < top10_length_25; i_25++) {
                    let temp_key_add =
                      temp_data_25[i_25 + 1][0] +
                      "\n" +
                      buckets_25[index_current_25].programname.buckets[i_25]
                        .channel.buckets[0].key;
                    Vue.set(temp_data_25[i_25 + 1], 0, temp_key_add);
                  }
                })
                .then(res2 => {
                  vm.satelliteLiveProgramTOPData.data = temp_data_25;
                });
              // 上周
              // let top10_length_25_week2_all = buckets_25_child_0.length; // 至多200个
              // let i_25_2;
              // function Return_KeyValue_25(key) {
              //   let value;
              //   for (i_25_2 = 0; i_25_2 < top10_length_25_week2_all; i_25_2++) {
              //     if (buckets_25_child_0[i_25_2].key == key) {
              //       value = commonTools.returnFloat_2(
              //         buckets_25_child_0[i_25_2].onlive_dur.value / 10000 / 60
              //       );
              //       break;
              //     }
              //   }
              //   return value;
              // }
              // for (i_25 = 0; i_25 < top10_length_25; i_25++) {
              //   Vue.set(
              //     temp_data_25[i_25 + 1],
              //     1,
              //     Return_KeyValue_25(temp_data_25[i_25 + 1][0])
              //   );
              // }

              // for (i_25 = 0; i_25 < top10_length_25; i_25++) {
              //   let temp_key_add =
              //     temp_data_25[i_25 + 1][0] +
              //     "\n" +
              //     buckets_25[1].programname.buckets[i_25].channel.buckets[0]
              //       .key;
              //   Vue.set(temp_data_25[i_25 + 1], 0, temp_key_add);
              // }
              // vm.satelliteLiveProgramTOPData.data = temp_data_25;
            } catch (error) {
              console.log(error);
            }
            // ////////////////  轮播频道及节目收视排名 (row13 left)   responses 26  （类似 row12 right）
            try {
              let buckets_26 =
                response.data.responses[26].aggregations.statistical_granularity
                  .buckets;
              let buckets_26_child_0 = buckets_26[0].channel.buckets;
              let buckets_26_child_1 = buckets_26[1].channel.buckets;
              // let length_26 = buckets_26.length; // 默认两周 - 2
              // 本周top10 名称+数值 (0+2) => 上周数值（1）
              let i_26;
              let temp_data_26 = [];
              temp_data_26.push([
                "product",
                beforeWeekFormat,
                currentWeekFormat,
                "增率"
              ]);
              let top5_length_26 = 5;
              for (i_26 = 0; i_26 < top5_length_26; i_26++) {
                temp_data_26.push([]);
              }
              // 本周  ▲ 0 2
              for (i_26 = 0; i_26 < top5_length_26; i_26++) {
                Vue.set(
                  temp_data_26[i_26 + 1],
                  0,
                  buckets_26_child_1[i_26].key
                );
                Vue.set(
                  temp_data_26[i_26 + 1],
                  2,
                  commonTools.returnFloat_2(
                    buckets_26_child_1[i_26].onlive_user_num.value / 10000
                  )
                );
              }
              // 上周 ▲ 1
              let top5_length_26_week2_all = buckets_26_child_0.length; // 至多200个
              let i_26_2;
              function Return_KeyValue_26(key) {
                let value;
                for (i_26_2 = 0; i_26_2 < top5_length_26_week2_all; i_26_2++) {
                  if (buckets_26_child_0[i_26_2].key == key) {
                    value = commonTools.returnFloat_2(
                      buckets_26_child_0[i_26_2].onlive_user_num.value / 10000
                    );
                    break;
                  }
                }
                return value;
              }
              for (i_26 = 0; i_26 < top5_length_26; i_26++) {
                Vue.set(
                  temp_data_26[i_26 + 1],
                  1,
                  Return_KeyValue_26(temp_data_26[i_26 + 1][0])
                );
              }
              // 增率 ▲ 3
              // 增率算法：-》 直播收视用户环比 -- (直播收视用户数-上期直播收视用户数)/上期直播收视用户数
              for (i_26 = 0; i_26 < top5_length_26; i_26++) {
                Vue.set(
                  temp_data_26[i_26 + 1],
                  3,
                  (
                    (temp_data_26[i_26 + 1][2] - temp_data_26[i_26 + 1][1]) /
                    temp_data_26[i_26 + 1][1]
                  ).toFixed(2)
                );
              }
              vm.carouselChannelData.data = temp_data_26;
            } catch (error) {
              console.log(error);
            }
            // console.log("~~~~~~~~~~~~~~~!!!!");
            // console.log(vm.carouselChannelData);
            // //// 轮播频道及节目收视排名 (row13 right) 在  week_days

            // ////////// 推荐栏目一周数据概览-一周热力数据 row14 responses28 29
            // ----待添加 移动运营周报 下面分栏 添加开机时长 在 responses30
            // ////////// 推荐栏目一周数据概览-按钮点击排行 row14 responses31
            vm.Pane_ColumnData = [];
            vm.paneArr = [];
            vm.activeName = "0";

            try {
              let DATA_weeklyThermodynamic = [];
              let DATA_weeklyThermodynamic_all = []; // 整合 DATA_weeklyThermodynamic 目前11个

              let buckets_28 =
                response.data.responses[28].aggregations.ti.buckets;
              let length_28 = buckets_28.length;
              let i_28;

              let buckets_34 =
                response.data.responses[34].aggregations.ti.buckets;
              // let length_34 = buckets_34.length;
              // let i_34;

              let buckets_29 =
                response.data.responses[29].aggregations.ti.buckets;
              let length_29 = buckets_29.length;
              let i_29;
              let length_29_row5 = 5;
              let i_29_row5 = 0;

              // 处理 分栏 - paneArr  与 数据处理
              let temp_paneArr = []; // 使用于格式：[{}]
              let temp_paneArr_use = []; //  使用于请求list [""]

              let temp_Pane_ColumnData = [];

              try {
                // ////// 28 29 34 分别对应字段
                // 34 demand_dur        页面播放时长   5
                // 28 access_freq       访问次数       2
                // 28 access_user_num   访问用户数     1
                // 29 click_freq        页面点击次数   4
                // 29 click_user_num    页面点击用户数 3
                // 暂定5行

                // ■■■■ 整合 28的 11个（完整） --主key
                // 每个 DATA_weeklyThermodynamic 的 i+1 个 分别推入
                // 1 访问用户数      access_user_num  28
                // 2 访问次数        access_freq      28
                // 5 页面播放时长    demand_dur       34  --- 完整 ---34用28的逻辑
                for (i_28 = 0; i_28 < length_28; i_28++) {
                  // 处理 分栏 - paneArr
                  temp_paneArr.push({
                    data: buckets_28[i_28].key,
                    id: String(i_28)
                  });
                  temp_paneArr_use.push(buckets_28[i_28].key);

                  // 统一处理第一个视图:XX一周热力数据
                  DATA_weeklyThermodynamic = [];
                  DATA_weeklyThermodynamic.push([
                    // title数据
                    "product",
                    beforeWeekFormat,
                    currentWeekFormat,
                    "增率"
                  ]); // ▲ row0

                  for (i_29_row5 = 0; i_29_row5 < length_29_row5; i_29_row5++) {
                    DATA_weeklyThermodynamic.push([]); // ------------ ▲ row1-5
                  }
                  // key - ▲ 0
                  DATA_weeklyThermodynamic[1].push("访问用户数(万)");
                  DATA_weeklyThermodynamic[2].push("访问次数(万)");
                  DATA_weeklyThermodynamic[3].push("页面点击用户数(万)");
                  DATA_weeklyThermodynamic[4].push("页面点击次数(万)");
                  DATA_weeklyThermodynamic[5].push("页面播放时长(万小时)");

                  // ------------ ▲ row 1 2 5
                  // 本周 - ▲ 2
                  Vue.set(
                    DATA_weeklyThermodynamic[1],
                    2,
                    (
                      buckets_28[i_28].statistical_granularity.buckets[1]
                        .access_user_num.value / 10000
                    ).toFixed(2)
                  );
                  Vue.set(
                    DATA_weeklyThermodynamic[2],
                    2,
                    (
                      buckets_28[i_28].statistical_granularity.buckets[1]
                        .access_freq.value / 10000
                    ).toFixed(2)
                  );
                  Vue.set(
                    DATA_weeklyThermodynamic[5],
                    2,
                    (
                      buckets_34[i_28].statistical_granularity.buckets[1]
                        .demand_dur.value /
                      10000 /
                      60
                    ).toFixed(2)
                  );

                  // 上周 - ▲ 1
                  Vue.set(
                    DATA_weeklyThermodynamic[1],
                    1,
                    (
                      buckets_28[i_28].statistical_granularity.buckets[0]
                        .access_user_num.value / 10000
                    ).toFixed(2)
                  );
                  Vue.set(
                    DATA_weeklyThermodynamic[2],
                    1,
                    (
                      buckets_28[i_28].statistical_granularity.buckets[0]
                        .access_freq.value / 10000
                    ).toFixed(2)
                  );
                  Vue.set(
                    DATA_weeklyThermodynamic[5],
                    1,
                    (
                      buckets_34[i_28].statistical_granularity.buckets[0]
                        .demand_dur.value /
                      60 /
                      10000
                    ).toFixed(2)
                  );

                  // 增率 - ▲ 3   （本期-上期）/上期
                  Vue.set(
                    DATA_weeklyThermodynamic[1],
                    3,
                    (
                      (buckets_28[i_28].statistical_granularity.buckets[1]
                        .access_user_num.value -
                        buckets_28[i_28].statistical_granularity.buckets[0]
                          .access_user_num.value) /
                      buckets_28[i_28].statistical_granularity.buckets[0]
                        .access_user_num.value
                    ).toFixed(2)
                  );
                  Vue.set(
                    DATA_weeklyThermodynamic[2],
                    3,
                    (
                      (buckets_28[i_28].statistical_granularity.buckets[1]
                        .access_freq.value -
                        buckets_28[i_28].statistical_granularity.buckets[0]
                          .access_freq.value) /
                      buckets_28[i_28].statistical_granularity.buckets[0]
                        .access_freq.value
                    ).toFixed(2)
                  );
                  Vue.set(
                    DATA_weeklyThermodynamic[5],
                    3,
                    (
                      (buckets_34[i_28].statistical_granularity.buckets[1]
                        .demand_dur.value -
                        buckets_34[i_28].statistical_granularity.buckets[0]
                          .demand_dur.value) /
                      buckets_34[i_28].statistical_granularity.buckets[0]
                        .demand_dur.value
                    ).toFixed(2)
                  );

                  // console.log("~~~~~~!DATA_weeklyThermodynamic");
                  // console.log(DATA_weeklyThermodynamic);

                  // DATA_weeklyThermodynamic.push(buckets[].demand_dur)

                  DATA_weeklyThermodynamic_all.push(DATA_weeklyThermodynamic);
                }
                // console.log("~~~~~~!DATA_weeklyThermodynamic_all");
                // console.log(DATA_weeklyThermodynamic_all);

                // ■■■■ 整合 29的 10个（不完整） --对应key
                // 3 页面点击用户数  click_user_num   29
                // 4 页面点击次数    click_freq       29
                function Return_KeyValue_2829(key, current_i_28) {
                  for (i_29 = 0; i_29 < length_29; i_29++) {
                    if (buckets_29[i_29].key == key) {
                      // ------------ ▲ row 3 4
                      // 本周 - ▲ 2
                      Vue.set(
                        DATA_weeklyThermodynamic_all[current_i_28][3],
                        2,
                        (
                          buckets_29[i_29].statistical_granularity.buckets[1]
                            .click_user_num.value / 10000
                        ).toFixed(2)
                      );
                      Vue.set(
                        DATA_weeklyThermodynamic_all[current_i_28][4],
                        2,
                        (
                          buckets_29[i_29].statistical_granularity.buckets[1]
                            .click_freq.value / 10000
                        ).toFixed(2)
                      );

                      // 上周 - ▲ 1
                      Vue.set(
                        DATA_weeklyThermodynamic_all[current_i_28][3],
                        1,
                        (
                          buckets_29[i_29].statistical_granularity.buckets[0]
                            .click_user_num.value / 10000
                        ).toFixed(2)
                      );
                      Vue.set(
                        DATA_weeklyThermodynamic_all[current_i_28][4],
                        1,
                        (
                          buckets_29[i_29].statistical_granularity.buckets[0]
                            .click_freq.value / 10000
                        ).toFixed(2)
                      );

                      // 增率 - ▲ 3   （本期-上期）/上期
                      Vue.set(
                        DATA_weeklyThermodynamic_all[current_i_28][3],
                        3,
                        (
                          (buckets_29[i_29].statistical_granularity.buckets[1]
                            .click_user_num.value -
                            buckets_29[i_29].statistical_granularity.buckets[0]
                              .click_user_num.value) /
                          buckets_29[i_29].statistical_granularity.buckets[0]
                            .click_user_num.value
                        ).toFixed(2)
                      );
                      Vue.set(
                        DATA_weeklyThermodynamic_all[current_i_28][4],
                        3,
                        (
                          (buckets_29[i_29].statistical_granularity.buckets[1]
                            .click_freq.value -
                            buckets_29[i_29].statistical_granularity.buckets[0]
                              .click_freq.value) /
                          buckets_29[i_29].statistical_granularity.buckets[0]
                            .click_freq.value
                        ).toFixed(2)
                      );
                    }
                    // else{  // 没有则设置为undefined 或者 0
                    // }
                  }
                }
                for (i_28 = 0; i_28 < length_28; i_28++) {
                  Return_KeyValue_2829(temp_paneArr[i_28].data, i_28);
                }
                // console.log("~~~~~~!DATA_weeklyThermodynamic_all");
                // console.log(DATA_weeklyThermodynamic_all);
              } catch (error) {
                console.log(error);
              }
              //// 上面是2829
              //// responses31 开始
              // 格式：栏目 =》 时间（两周） =》 节目（TOP15） =》click_freq
              // XX页按钮点击排行
              let DATA_buttonClickTOPData = [];
              let DATA_buttonClickTOPData_all = [];

              try {
                let buckets_31 =
                  response.data.responses[31].aggregations.ti.buckets;
                let length_31 = buckets_31.length;
                let i_31;

                // 遍历31的所有ti（将近45个） 以 i_28的ti（将近11个） 为主key
                // key 对比：
                //    temp_paneArr.push({
                //     data: buckets_28[i_28].key,
                //     id: String(i_28)
                //    });
                // 初始化
                // for (i_28 = 0; i_28 < length_28; i_28++) {
                //   DATA_buttonClickTOPData = [];
                //   DATA_buttonClickTOPData.push([
                //     "product",
                //     currentWeekFormat,
                //     beforeWeekFormat
                //   ]);
                // }
                // for i_28，选择对应key - 本周 + 上周
                function Manage_KeyValue_31_current(key) {
                  // 遍历i_31对应key值 - 找到对应key
                  let ifOver = false;
                  for (i_31 = 0; i_31 < length_31; i_31++) {
                    if (ifOver == true) {
                      break;
                    }
                    if (buckets_31[i_31].key == key) {
                      ifOver = true;
                      return buckets_31[i_31].statistical_granularity.buckets; //两周的 数据
                    }
                  }
                  return "nokey"; //无指定 key情况
                }
                let temp_twoWeek_keyArr = []; // 处理好的28key的 i_31数据  // 28栏目 =》 分两周
                for (i_28 = 0; i_28 < length_28; i_28++) {
                  temp_twoWeek_keyArr.push(
                    Manage_KeyValue_31_current(temp_paneArr[i_28].data)
                  );
                }

                // for i_28，选择对应key - 上周（for i_28 或者 本周的key都行） --pass

                // console.log("~~~~~~~~~~~~~~~~~~temp_twoWeek_keyArr"); // 28中有的key值在 31中不一定有 输出了 "nokey"
                // console.log(temp_twoWeek_keyArr);



                // for (i_28 = 0; i_28 < length_28; i_28++) {
                  // (function(i_28_current) {
                    
                let i_28_current = -1;
                fun_callback_do(fun_callback_do);
                function fun_callback_do(callback) {

                  if (i_28_current < length_28 - 1) {   
                    // console.log("∏∏∏∏∏∏∏∏∏∏∏∏∏∏∏"+ String(i_28_current));
                    i_28_current++;   

                    let buckets_31_managed = temp_twoWeek_keyArr[i_28_current]; //第n个指定key - 两周
                    if (buckets_31_managed != "nokey") {
                      let length_31 = buckets_31_managed.length; // 默认两周 - 2
                      // console.log("~~~~~~~~~~~~~");
                      // console.log(length_31);
                      let i_31_m;
                      // let temp_data_31 = [];  // temp_data_31 => DATA_buttonClickTOPData
                      // temp_data_31.push([
                      //   "product",
                      //   currentWeekFormat,
                      //   beforeWeekFormat
                      // ]);
                      DATA_buttonClickTOPData = [];
                      DATA_buttonClickTOPData.push([
                        "product",
                        currentWeekFormat,
                        beforeWeekFormat
                      ]);
                      let top15_length_31 = 15;
                      let index_current_31 = length_31 - 1;

                      for (i_31_m = 0; i_31_m < top15_length_31; i_31_m++) {
                        DATA_buttonClickTOPData.push([]);
                      }

                      let tlist = [];

                      // 本周
                      for (i_31_m = 0; i_31_m < top15_length_31; i_31_m++) {
                        Vue.set(
                          DATA_buttonClickTOPData[top15_length_31 - i_31_m],
                          0,
                          buckets_31_managed[index_current_31].areaname.buckets[
                            i_31_m
                          ].key
                        );
                        Vue.set(
                          DATA_buttonClickTOPData[top15_length_31 - i_31_m],
                          1,
                          commonTools.returnFloat_2(
                            parseFloat(
                              buckets_31_managed[index_current_31].areaname
                                .buckets[i_31_m].click_freq.value
                            ) / 10000
                          )
                        );

                        if (length_31 > 1) {
                          // console.log(buckets_28[i_28_current].key);
                          let temp_c = {
                            operator: String([m_operator]),
                            year: temp_time.year,
                            start: commonTools.ReturnBeforeWeek(
                              temp_time.week,
                              1
                            ),
                            end: commonTools.ReturnBeforeWeek(temp_time.week, 1),
                            areaname:
                              buckets_31_managed[index_current_31].areaname
                                .buckets[i_31_m].key,
                            ti: buckets_28[i_28_current].key
                          };
                          let formData_c = new FormData();
                          formData_c = new window.FormData();
                          formData_c.append("operator", temp_c.operator);
                          formData_c.append("start", temp_c.start);
                          formData_c.append("end", temp_c.end);
                          formData_c.append("year", temp_c.year);
                          formData_c.append("areaname", temp_c.areaname);
                          formData_c.append("ti", temp_c.ti);
                          // console.log(temp_c);
                          tlist.push(
                            users_mobileReport_titop(formData_c)
                              .then(function(response_c) {
                                // console.log(response_c);
                                // ▲▲▲ collection 0
                                let m_buckets =
                                  response_c.data.responses[0].aggregations
                                    .statistical_granularity.buckets;
                                let m_value;
                                if (m_buckets.length > 0) {
                                  m_value = (
                                    parseFloat(m_buckets[0].click_freq.value) /
                                    10000
                                  ).toFixed(2);
                                }
                                if (m_buckets.length == 0) {
                                  m_value = "";
                                }
                                // console.log(m_value);
                                return m_value;
                              })
                              .catch(function(error) {
                                console.info(error);
                                return "";
                              })
                          );
                        }
                      } // for

                      Promise.all(tlist)
                        .then(res => {
                          // console.log(res);
                          if (length_31 > 1) {
                            res.forEach((item, index) => {
                              // console.log(index);
                              // console.log(item);
                              Vue.set(
                                DATA_buttonClickTOPData[top15_length_31 - index],
                                2,
                                item
                              );
                            });
                          } else {
                            for (i_31_m = 0; i_31_m < top15_length_31; i_31_m++) {
                              Vue.set(
                                DATA_buttonClickTOPData[top15_length_31 - i_31_m],
                                2,
                                ""
                              );
                            }
                          }
                          // console.log(DATA_buttonClickTOPData);
                          // DATA_buttonClickTOPData_all.push(DATA_buttonClickTOPData);
                          // console.log(DATA_buttonClickTOPData_all);
                        })
                        .then(res2 => {
                          DATA_buttonClickTOPData_all.push(DATA_buttonClickTOPData);
                          // console.log(i_28_current);
                          // Vue.set(
                          //   DATA_buttonClickTOPData_all,
                          //   i_28_current,
                          //   DATA_buttonClickTOPData
                          // );
                          setTimeout(function() {
                            callback(fun_callback_do);
                          }, 100);
                        });

                      // // ////// 上周
                      // let buckets_child_31_2 =
                      //   buckets_31_managed[0].areaname.buckets;
                      // let top15_length_31_week2_all = buckets_child_31_2.length; // 310个
                      // let i_31_m_2;
                      // function Return_KeyValue_31(key) {
                      //   let value;
                      //   for (
                      //     i_31_m_2 = 0;
                      //     i_31_m_2 < top15_length_31_week2_all;
                      //     i_31_m_2++
                      //   ) {
                      //     if (buckets_child_31_2[i_31_m_2].key == key) {
                      //       value = commonTools.returnFloat_2(
                      //         buckets_child_31_2[i_31_m_2].click_freq.value /
                      //           10000
                      //       );
                      //       break;
                      //     }
                      //   }
                      //   return value;
                      // }
                      // // 遍历 本周（先）top 15的key
                      // for (i_31_m = 0; i_31_m < top15_length_31; i_31_m++) {
                      //   Vue.set(
                      //     DATA_buttonClickTOPData[top15_length_31 - i_31_m],
                      //     2,
                      //     Return_KeyValue_31(
                      //       DATA_buttonClickTOPData[top15_length_31 - i_31_m][0]
                      //     )
                      //   );
                      // }

                      // DATA_buttonClickTOPData_all.push(DATA_buttonClickTOPData);

                    } else {
                      // 非 nokey 情况
                      let tempArr = [
                        ["product", "current", "lastweek"],
                        ["none1", 0, 0],
                        ["none2", 0, 0],
                        ["none3", 0, 0],
                        ["none4", 0, 0],
                        ["none5", 0, 0],
                        ["none6", 0, 0],
                        ["none7", 0, 0],
                        ["none8", 0, 0],
                        ["none9", 0, 0],
                        ["none10", 0, 0],
                        ["none11", 0, 0],
                        ["none12", 0, 0],
                        ["none13", 0, 0],
                        ["none14", 0, 0],
                        ["none15", 0, 0]
                      ];
                      // Vue.set(DATA_buttonClickTOPData_all, i_28_current, tempArr);
                      DATA_buttonClickTOPData_all.push(tempArr);
                      setTimeout(function() {
                        callback(fun_callback_do);
                      }, 100);
                    }
                  } else {
                    console.log("结束回调 i_31");
                  }

                } // function callback

                  // })(i_28);
                // } // for i_28;



                // console.log("▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲");
                // console.log(DATA_buttonClickTOPData_all);
              } catch (error) {
                console.log(error);
              }

              // ////////// 推荐栏目一周数据概览-XX页部分按钮每日走势 row14 responses32
              //// 上面是 31
              //// responses32 开始

              // 需要后置请求： epg_box_content
              // i_32
              // 传入7天 --- 当前是在 week中 =》用到的数据为week_days
              // 为避免结构错综复杂-week中 重复请求一次 week_days
              // 第一次请求为原请求中的responses32 -- 用其中的 key:如 box1_1
              // 第二次请求为epg_box_content

              let DATA_someButtonDayTrendData = [];
              let DATA_someButtonDayTrendData_all = [];
              // 注意：box areanumber 的个数 --- 每个栏目的不同 两周的对比也不同
              try {
                // week中 重复请求一次 week_days
                let temp_weeks = {
                  operator: String(["移动"]),
                  year: temp_time.year,
                  // start: commonTools.ReturnBeforeWeek(temp_time.week, 1),
                  // end: temp_time.week
                  start: temp_time.week_day_start,
                  end: temp_time.week_day_end
                };
                var m2_formData = new FormData();
                var m2_formData = new window.FormData();
                m2_formData.append("operator", temp_weeks.operator);
                m2_formData.append("start", temp_weeks.start);
                m2_formData.append("end", temp_weeks.end);
                m2_formData.append("year", temp_weeks.year);
                users_mobileReport(m2_formData)
                  .then(function(m2_response) {
                    // console.log("●●●●●●●●●●●●●●●●●●●●●●●●●");
                    console.log(m2_response); // 7天的

                    let buckets_32 =
                      m2_response.data.responses[32].aggregations.epgName
                        .buckets; // m2_response  epgName
                    let length_32 = buckets_32.length;
                    let i_32;
                    console.log(length_32);

                    function Manage_KeyValue_32_current(key) {
                      // 遍历i_32对应key值 - 找到对应key
                      // console.log(key);
                      let ifOver = false;
                      for (i_32 = 0; i_32 < length_32; i_32++) {
                        // console.log(i_32);
                        // console.log(buckets_32[i_32].key);
                        if (ifOver == true) {
                          break;
                        }
                        if (buckets_32[i_32].key == key) {
                          ifOver = true;
                          return buckets_32[i_32].statistical_granularity
                            .buckets; //7天的 数据
                        }
                      }
                      return "nokey"; //无指定 key情况
                    }
                    let temp_7days_keyArr = []; // 处理好的28key的 i_32数据  // 28栏目 =》 分两周
                    // console.log(temp_paneArr);
                    for (i_28 = 0; i_28 < length_28; i_28++) {
                      temp_7days_keyArr.push(
                        Manage_KeyValue_32_current(temp_paneArr[i_28].data)
                      );
                    }
                    // console.log("◆◆◆◆◆◆temp_7days_keyArr"); // 28中有的key值在 31中不一定有 输出了 "nokey"
                    // console.log(temp_7days_keyArr);

                    // 总数据初始化
                    for (i_28 = 0; i_28 < length_28; i_28++) {
                      DATA_someButtonDayTrendData_all.push([]);
                    }
                    console.log(temp_7days_keyArr);

                    // for (i_28 = 0; i_28 < length_28; i_28++) {
                    // i_28 = 0; // callback 初始化
                    let temp_i_28 = -1;
                    let temp_length_28 = length_28;
                    fun_callback_do(fun_callback_do);
                    function fun_callback_do(callback) {
                      // setTimeout(function () {
                      if (temp_i_28 < temp_length_28 - 1) {
                        // console.log("★★★★★★★★★★★★");
                        // console.log(temp_i_28);
                        temp_i_28++; // 进来即自增
                        let buckets_32_managed = temp_7days_keyArr[temp_i_28]; //第n个指定key - 7天
                        // console.log("buckets_32_managed");
                        // console.log(buckets_32_managed);
                        if (buckets_32_managed != "nokey") {
                          // console.log("★★★★★★★★★★★★2");
                          let length_32_m = buckets_32_managed.length;
                          let i_32_m;
                          DATA_someButtonDayTrendData = [];
                          DATA_someButtonDayTrendData.push(["product"]);
                          // 根据7天推入 n日
                          // 解决数据第一行：7天
                          for (i_32_m = 0; i_32_m < length_32_m; i_32_m++) {
                            // 7天
                            DATA_someButtonDayTrendData[0].push(
                              commonTools.format_dayToChinese_2(
                                buckets_32_managed[i_32_m].key
                              )
                            );
                          }

                          // 这里按照 指定的box来 - 有就显示数值，没有则数值置零
                          // responses32指定box 2_0~2_5 3_0~3_5
                          let sign_31_areanumber_arr = [
                            "box2_0",
                            "box2_1",
                            "box2_2",
                            "box2_3",
                            "box2_4",
                            "box2_5",
                            "box3_0",
                            "box3_1",
                            "box3_2",
                            "box3_3",
                            "box3_4",
                            "box3_5"
                          ];

                          let length_sign_32 = sign_31_areanumber_arr.length;
                          let i_sign_32 = 0;
                          // 解决：单个data的 "竖"值  box?_?
                          for (
                            i_sign_32 = 0;
                            i_sign_32 < length_sign_32;
                            i_sign_32++
                          ) {
                            DATA_someButtonDayTrendData.push([
                              sign_31_areanumber_arr[i_sign_32]
                            ]);
                          }
                          // console.log("○○○○○○○○○○○○○○");
                          // console.log(DATA_someButtonDayTrendData);
                          // 传入指定list 指定Box  获取7天
                          // 标记sign x 10个
                          for (
                            let i_sign_32 = 0;
                            i_sign_32 < length_sign_32;
                            i_sign_32++
                          ) {
                            // console.log("◆◆◆◆◆◆◆1");

                            (function(i_sign_32_current) {
                              // working(callback,currentIndex)
                              // 二次请求box详细信息
                              // let i_sign_32_current = i_sign_32;

                              let temp_data = {
                                operator: String(["移动"]),
                                // list:String(temp_paneArr_use),
                                // list:String(["体育"]), // ▲ list
                                list: String([temp_paneArr_use[temp_i_28]]), // 按指定list栏目 --data 父级arr
                                year: temp_time.year,
                                start: temp_time.week_day_start, // 传7天的 配置对应的值  -- data 横
                                end: temp_time.week_day_end,
                                // areanumber:"box2_1",
                                areanumber:
                                  sign_31_areanumber_arr[i_sign_32_current] //  按指定box分  -- data 竖 x10
                              };

                              var m2_formData = new FormData();
                              var m2_formData = new window.FormData();
                              m2_formData.append(
                                "operator",
                                String(temp_data.operator)
                              );
                              m2_formData.append(
                                "list",
                                String(temp_data.list)
                              );
                              m2_formData.append(
                                "start",
                                String(temp_data.start)
                              );
                              m2_formData.append("end", String(temp_data.end));
                              m2_formData.append(
                                "areanumber",
                                String(temp_data.areanumber)
                              );
                              m2_formData.append(
                                "year",
                                String(temp_data.year)
                              );
                              // console.log("◆◆◆◆◆◆◆2");
                              // console.log(m2_formData);

                              epg_box_content(m2_formData)
                                .then(function(response3) {
                                  // console.log("※※※※※※※※※※※※※※"); // ▲ 将近 11 x 10 = 110个请求
                                  // console.log("list:" + temp_i_28); // --data 父级arr
                                  // console.log("areanumber:" + i_sign_32); // -- data 竖
                                  // console.log("◆◆◆◆◆◆◆3");
                                  // console.log(m2_formData);
                                  // console.log(temp_data);
                                  // console.log(response3);

                                  // 移动1.0 移动2.0都是传入移动
                                  // ▲▲▲▲ responses0 是 移动1.0 responses1 是 移动2.0

                                  let buckets_32_signValue =
                                    response3.data.responses[0].aggregations
                                      .statistical_granularity.buckets;
                                  let length_32_signValue =
                                    buckets_32_signValue.length; // x7
                                  let i_32_signValue;
                                  // 天 -- data 横

                                  for (
                                    i_32_signValue = 0;
                                    i_32_signValue < length_32_signValue;
                                    i_32_signValue++
                                  ) {
                                    // console.log(
                                    //   String(length_sign_32) +
                                    //     " " +
                                    //     String(length_32_signValue)
                                    // );
                                    // console.log( "竖: " +
                                    //   String(i_sign_32_current) +
                                    //     " 横： " +
                                    //     String(i_32_signValue) + " --- " +String(
                                    //       buckets_32_signValue[i_32_signValue]
                                    //     .click_freq.value
                                    //     )
                                    // );
                                    // 返回的7天
                                    DATA_someButtonDayTrendData[
                                      i_sign_32_current + 1
                                    ].push(
                                      buckets_32_signValue[i_32_signValue]
                                        .click_freq.value
                                    ); // push单个数据-横-天  （by 指定box竖  i_sign_32_current+1）
                                  } // for 天 x7

                                  if (i_sign_32 == length_sign_32 - 1) {
                                    Vue.set(
                                      DATA_someButtonDayTrendData_all,
                                      temp_i_28,
                                      DATA_someButtonDayTrendData
                                    ); // data --父级
                                    // temp_i_28++; //自增a
                                    setTimeout(function() {
                                      callback(fun_callback_do);
                                    }, 100);
                                  }
                                }) // 请求收
                                .catch(function(error) {
                                  console.info(error);
                                }); // 请求收
                            })(i_sign_32);
                          } //for i_sign_32

                          // Vue.set(
                          //   DATA_someButtonDayTrendData_all,
                          //   temp_i_28,
                          //   DATA_someButtonDayTrendData
                          // ); // data --父级
                          // temp_i_28++; //自增a
                          // callback(fun_callback_do);
                        } else {
                          console.log("nokey");
                          // 非 nokey 情况
                          // DATA_someButtonDayTrendData_all.push([
                          //   [
                          //     ["product", "?1日", "?2日", "?3日", "?4日", "?5日", "?6日", "?7日"],
                          //     ["box?_?", 0, 0, 0, 0, 0, 0, 0],
                          //   ]
                          // ]);
                          Vue.set(DATA_someButtonDayTrendData_all, temp_i_28, [
                            [
                              [
                                "product",
                                "?1日",
                                "?2日",
                                "?3日",
                                "?4日",
                                "?5日",
                                "?6日",
                                "?7日"
                              ],
                              ["box?_?", 0, 0, 0, 0, 0, 0, 0]
                            ]
                          ]); // data --父级
                          setTimeout(function() {
                            callback(fun_callback_do);
                          }, 100);
                        } // == "nokey"
                        // callback(fun_callback_do);
                      } else {
                        // console.log("结束回调");
                        // console.log("◎◎◎◎◎◎◎◎◎◎◎◎◎◎◎◎◎");
                        // console.log(DATA_someButtonDayTrendData_all);
                      }
                      // }, 10);
                    } // function callback

                    // }// for i_28;
                  })
                  .catch(function(error) {
                    console.info(error);
                  });
              } catch (error) {
                //try
                console.log(error);
              }

              // ////////// 推荐栏目一周数据概览-推荐页各按钮点击次数 row15 responses32
              //// 上面是 32
              //// 33开始
              // XX页各按钮点击次数
              // i_33 responses33

              let DATA_columnButtonClickNum = [];
              let DATA_columnButtonClickNum_all = [];

              try {
                let buckets_32w =
                  response.data.responses[32].aggregations.epgName.buckets; // m2_response  epgName
                let length_32w = buckets_32w.length;
                let i_32w;
                //数值转换： box1_1 => 2 2 =》 2000 + 2 => 2002 =>用于对比大小，使排序
                function boxX_X_StringToInt(str) {
                  let arr = str.split("_");
                  let arr2 = arr[0].split("box");
                  return (
                    (parseInt(arr2[1]) + 1) * 1000 + (parseInt(arr[1]) + 1)
                  );
                }
                // //冒泡排序 -- 从序数index几开始
                // function sortArrZ(arr, index) { // 注意这个是处理二维数组的
                //   for (var i = 0; i < arr.length - 1; i++) {
                //     //决定每一轮比较多少次
                //     for (var j = index; j < arr.length - i - 1; j++) {
                //       if (arr[j][1] > arr[j + 1][1]) {
                //         // 判断第二位
                //         var tmp = arr[j];
                //         arr[j] = arr[j + 1];
                //         arr[j + 1] = tmp;
                //       }
                //     }
                //   }
                //   return arr;
                // }
                function sortArrZ(arr) {
                  var len = arr.length;
                  var temp; // 用于元素交换
                  for (var i = 0; i < len; i++) {
                    for (var j = 0; j < len - i - 1; j++) {
                      if (arr[j] > arr[j + 1]) {
                        // 相邻元素两对比
                        temp = arr[j + 1];
                        arr[j + 1] = arr[j];
                        arr[j] = temp;
                      }
                    }
                  }
                  return arr;
                }

                function boxX_X_sort(buckets_arr) {
                  let length_br = buckets_arr.length;
                  let i_br;
                  let temp_arr = [];
                  // console.log("※※※※※※※※※※");
                  for (i_br = 0; i_br < length_br; i_br++) {
                    temp_arr.push(boxX_X_StringToInt(buckets_arr[i_br].key)); // 转换成 Int 数组
                  }
                  // console.log(temp_arr);
                  let temp_arr2 = sortArrZ(temp_arr, 0); //进行排序
                  // console.log(temp_arr2);
                  return temp_arr2;
                }

                // console.log("〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓");
                // let temp_test = boxX_X_sort(
                // temp_twoWeek_32w_keyArr[0][0].areanumber.buckets
                // );
                // console.log(temp_test);
                // temp_test = boxX_X_IntArrToStringArr(temp_test);
                // console.log(temp_test);

                function boxX_X_IntToString(num) {
                  let str;
                  let str1 = String(parseInt(num / 1000) - 1);
                  let str2 = String(parseInt(num % 1000) - 1);
                  return "box" + str1 + "_" + str2;
                }
                function boxX_X_IntArrToStringArr(arr) {
                  let length = arr.length;
                  let i;
                  let temp_arr = [];
                  for (i = 0; i < length; i++) {
                    temp_arr.push(boxX_X_IntToString(arr[i]));
                  }
                  return temp_arr;
                }
                // console.log("〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓");
                function Manage_KeyValue_32w_current(key) {
                  // 遍历i_32w对应key值 - 找到对应key
                  let ifOver = false;
                  for (i_32w = 0; i_32w < length_32w; i_32w++) {
                    if (ifOver == true) {
                      break;
                    }
                    if (buckets_32w[i_32w].key == key) {
                      ifOver = true;
                      return buckets_32w[i_32w].statistical_granularity.buckets; //7天的 数据
                    }
                  }
                  return "nokey"; //无指定 key情况
                }
                let temp_twoWeek_32w_keyArr = []; // 处理好的28key的 i_32w数据  // 28栏目 =》 分两周
                for (i_28 = 0; i_28 < length_28; i_28++) {
                  temp_twoWeek_32w_keyArr.push(
                    Manage_KeyValue_32w_current(temp_paneArr[i_28].data)
                  );
                }

                // console.log("◆◆◆◆◆◆temp_twoWeek_32w_keyArr"); // 28中有的key值在 31中不一定有 输出了 "nokey"
                // console.log(temp_twoWeek_32w_keyArr);

                // console.log("〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓");
                // ▲▲▲▲ 一个栏目的data完毕后，进行总处理
                // 前面是有一个box则分一行(丢一个数组)
                // 这里使boxA_B A相同的在一行(使在一个数组)
                // data: Array(21)  21 对 1行（21行） 对 1个 =》 21 对 7行 对 3个
                //   0: Array(1)
                //     0:
                //     chainIndex: "-0.35%"
                //     classify: "xx"
                //     lastWeek: 33770
                //     thisWeek: 33651
                //     title: "box0_1"

                function Manage_DATA_c(data) {
                  let length = data.length;
                  let i;
                  //-0 : 0_1
                  //-1 : 0_2
                  //-2 : 1_2
                  //-3 : 1_3
                  // =>
                  //-0 : 0_1 0_2
                  //-2 : 1_2 1_3
                  let arr_count = -1; //默认为 -1，第一次必不同，即计数从0开始 // 记录多少行
                  let arr_count_arrData = []; // 记录n行各多少个 data
                  let new_num = 2044;
                  let old_bum = 3199;
                  function Single_DATA_mange(key, data_per_singleData) {
                    old_bum = new_num;
                    new_num = parseInt(boxX_X_StringToInt(key) / 1000);
                    if (old_bum != new_num) {
                      arr_count++;
                      arr_count_arrData.push([]);
                    }
                    // arr_count_arrData[arr_count].push(data_per_singleData)
                    arr_count_arrData[arr_count].push(data_per_singleData[0]);
                  }

                  for (let i = 0; i < length; i++) {
                    Single_DATA_mange(data[i][0].title, data[i]);
                  }
                  return arr_count_arrData;
                }

                let temp_twoWeek_32w_keyArr_sort = []; //排序box

                for (i_28 = 0; i_28 < length_28; i_28++) {
                  if (temp_twoWeek_32w_keyArr[i_28] == "nokey") {
                    temp_twoWeek_32w_keyArr_sort.push("nokey");
                  } else {
                    if (temp_twoWeek_32w_keyArr[i_28].length == 2) {
                      // 两周处理
                      temp_twoWeek_32w_keyArr_sort.push(
                        boxX_X_IntArrToStringArr(
                          boxX_X_sort(
                            temp_twoWeek_32w_keyArr[i_28][1].areanumber.buckets
                          )
                        )
                      );
                    }
                    if (temp_twoWeek_32w_keyArr[i_28].length == 1) {
                      // 单周处理
                      temp_twoWeek_32w_keyArr_sort.push(
                        boxX_X_IntArrToStringArr(
                          boxX_X_sort(
                            temp_twoWeek_32w_keyArr[i_28][0].areanumber.buckets
                          )
                        )
                      );
                    }
                    // 0周-不管让其报错不显示
                  }
                }
                setTimeout(() => {
                  // console.log("◆◆◆◆◆◆temp_twoWeek_32w_keyArr_sort");
                  // console.log(temp_twoWeek_32w_keyArr_sort);
                }, 500);

                // 总数据初始化
                for (i_28 = 0; i_28 < length_28; i_28++) {
                  DATA_columnButtonClickNum_all.push([]);
                }
                let temp_i_28 = -1;
                let temp_length_28 = length_28;
                fun_callback_do(fun_callback_do);
                function fun_callback_do(callback) {
                  // setTimeout(function() {
                  if (temp_i_28 < temp_length_28 - 1) { 
                    // console.log("★★★★★★★★★★★★BBB");
                    // console.log(temp_i_28);
                    temp_i_28++; // 进来即自增    
                    let buckets_32w_managed =
                      temp_twoWeek_32w_keyArr[temp_i_28]; //第n个指定key - 7天
                    let sign_32w_areanumber_arr =
                      temp_twoWeek_32w_keyArr_sort[temp_i_28]; // 指定的sign box数组
                    DATA_columnButtonClickNum = []; // 初始化

                    if (buckets_32w_managed != "nokey") {
                      let length_32_m = buckets_32w_managed.length;
                      let i_32_m;
                      let length_sign_32w = sign_32w_areanumber_arr.length;
                      let i_sign_32w = 0;

                      for (
                        let i_sign_32w = 0;
                        i_sign_32w < length_sign_32w;
                        i_sign_32w++
                      ) {
                        DATA_columnButtonClickNum.push([]);
                      }

                      //////
                      for (
                        let i_sign_32w = 0;
                        i_sign_32w < length_sign_32w;
                        i_sign_32w++
                      ) {
                        (function(i_sign_32w_current) {
                          // working(callback,currentIndex)
                          // 二次请求box详细信息
                          // let i_sign_32w_current = i_sign_32w;

                          let temp_data = {
                            operator: String(["移动"]),
                            list: String([temp_paneArr_use[temp_i_28]]), // 按指定list栏目 --data 父级arr
                            year: temp_time.year,
                            start: commonTools.ReturnBeforeWeek(
                              temp_time.week,
                              1
                            ), // 传2周的 配置对应的值  -- data 横
                            end: temp_time.week,
                            areanumber:
                              sign_32w_areanumber_arr[i_sign_32w_current] //  按指定box分  -- data 竖 x10
                          };

                          var m2_formData = new FormData();
                          var m2_formData = new window.FormData();
                          m2_formData.append(
                            "operator",
                            String(temp_data.operator)
                          );
                          m2_formData.append("list", String(temp_data.list));
                          m2_formData.append("start", String(temp_data.start));
                          m2_formData.append("end", String(temp_data.end));
                          m2_formData.append(
                            "areanumber",
                            String(temp_data.areanumber)
                          );
                          m2_formData.append("year", String(temp_data.year));
                          epg_box_content(m2_formData)
                            .then(function(response3) {
                              // console.log("※※※※※※※※※※※※※※"); // ▲ 将近 11 x 30 = 330+个请求
                              // console.log("list:" + temp_i_28); // --data 父级arr
                              // console.log("areanumber:" + i_sign_32w); // -- data 竖
                              // console.log(temp_data);
                              // console.log(response3);

                              // 移动1.0 移动2.0都是传入移动
                              // ▲▲▲▲ responses0 是 移动1.0 responses1 是 移动2.0

                              let buckets_32w_signValue =
                                response3.data.responses[0].aggregations
                                  .statistical_granularity.buckets;
                              let length_32w_signValue =
                                buckets_32w_signValue.length; // x7
                              let i_32w_signValue;
                              // 天 -- data 横

                              // 返回的2周
                              if (length_32w_signValue == 2) {
                                // console.log(
                                //   String(length_sign_32w) +
                                //     " " +
                                //     String(length_32w_signValue)
                                // );
                                // console.log(
                                //   "竖: " +
                                //     String(i_sign_32w_current) +
                                //     " 横： " +
                                //     String(1) +
                                //     " --- " +
                                //     String(
                                //       buckets_32w_signValue[1]
                                //         .click_freq.value
                                //     )
                                // );
                                let current_value =
                                  buckets_32w_signValue[1].click_freq.value;
                                let last_value =
                                  buckets_32w_signValue[0].click_freq.value;
                                // DATA_columnButtonClickNum.push([
                                //   {
                                //     // classify: "xx",
                                //     classify: "",
                                //     title:
                                //       sign_32w_areanumber_arr[
                                //         i_sign_32w_current
                                //       ],
                                //     lastWeek: last_value,
                                //     thisWeek: current_value,
                                //     chainIndex:
                                //       (
                                //         ((current_value - last_value) /
                                //           last_value) *
                                //         100
                                //       ).toFixed(2) + "%"
                                //   }
                                // ]);
                                Vue.set(
                                  DATA_columnButtonClickNum,
                                  i_sign_32w_current,
                                  [
                                    {
                                      // classify: "xx",
                                      classify: "",
                                      title:
                                        sign_32w_areanumber_arr[
                                          i_sign_32w_current
                                        ],
                                      lastWeek: last_value,
                                      thisWeek: current_value,
                                      chainIndex:
                                        (
                                          ((current_value - last_value) /
                                            last_value) *
                                          100
                                        ).toFixed(2) + "%"
                                    }
                                  ]
                                );
                              }
                              if (length_32w_signValue == 1) {
                                let current_value =
                                  buckets_32w_signValue[0].click_freq.value;
                                // DATA_columnButtonClickNum.push([
                                //   {
                                //     // classify: "xx",
                                //     classify: "",
                                //     title:
                                //       sign_32w_areanumber_arr[
                                //         i_sign_32w_current
                                //       ],
                                //     lastWeek: 0,
                                //     thisWeek: current_value,
                                //     chainIndex: "-%"
                                //   }
                                // ]);
                                Vue.set(
                                  DATA_columnButtonClickNum,
                                  i_sign_32w_current,
                                  [
                                    {
                                      // classify: "xx",
                                      classify: "",
                                      title:
                                        sign_32w_areanumber_arr[
                                          i_sign_32w_current
                                        ],
                                      lastWeek: 0,
                                      thisWeek: current_value,
                                      chainIndex: "-%"
                                    }
                                  ]
                                );
                              }
                              if (length_32w_signValue == 0) {
                                // DATA_columnButtonClickNum.push([
                                //   {
                                //     // classify: "xx",
                                //     classify: "",
                                //     title:
                                //       sign_32w_areanumber_arr[
                                //         i_sign_32w_current
                                //       ],
                                //     lastWeek: 0,
                                //     thisWeek: 0,
                                //     chainIndex: "-%"
                                //   }
                                // ]);
                                Vue.set(
                                  DATA_columnButtonClickNum,
                                  i_sign_32w_current,
                                  [
                                    {
                                      // classify: "xx",
                                      classify: "",
                                      title:
                                        sign_32w_areanumber_arr[
                                          i_sign_32w_current
                                        ],
                                      lastWeek: 0,
                                      thisWeek: 0,
                                      chainIndex: "-%"
                                    }
                                  ]
                                );
                              }

                              // if (i_sign_32w == length_sign_32w - 1) {
                              if (i_sign_32w_current == length_sign_32w - 1) {
                                setTimeout(function() {
                                  Vue.set(
                                    DATA_columnButtonClickNum_all,
                                    temp_i_28,
                                    Manage_DATA_c(DATA_columnButtonClickNum)
                                    // DATA_columnButtonClickNum
                                  ); // data --父级
                                  // temp_i_28++; //自增a
                                  callback(fun_callback_do);
                                }, 100);
                              }
                            }) // 请求收
                            .catch(function(error) {
                              console.info(error);
                            }); // 请求收
                        })(i_sign_32w);
                      } //for i_sign_32w
                      //////
                      // setTimeout(function() {
                      //   callback(fun_callback_do);
                      // }, 100);
                    } else {
                      // 非 nokey 情况
                      Vue.set(DATA_columnButtonClickNum_all, temp_i_28, [
                        [
                          {
                            // classify: "xx",
                            classify: "",
                            title: "boxx_x",
                            lastWeek: "0",
                            thisWeek: "0",
                            chainIndex: "-%"
                          }
                        ]
                      ]);
                      setTimeout(function() {
                        callback(fun_callback_do);
                      }, 100);
                    }
                  } else {
                    console.log("结束回调BBB");
                    // console.log("◎◎◎◎◎◎◎◎◎◎◎◎◎◎◎◎◎BBB");
                    // console.log(DATA_columnButtonClickNum_all);
                  }
                  // }, 10);
                } // function callback
              } catch (error) {
                console.log(error);
              }

              // return; // 测试

              // ■■■■ 最终整合数据
              setTimeout(function() {
                // console.log(DATA_columnButtonClickNum_all);
                // console.log(DATA_someButtonDayTrendData_all);

                for (i_28 = 0; i_28 < length_28; i_28++) {
                  // 数据初始化+总处理
                  temp_Pane_ColumnData.push({
                    //一周热力数据
                    weeklyThermodynamic: {
                      // title: "分类页一周热力数据",
                      title: buckets_28[i_28].key + "页一周热力数据",
                      // id: "classifyWeeklyThermodynamic",
                      id: "classifyWeeklyThermodynamic" + String(i_28),

                      color: ["#FFC000", "#5B9BD4", "#EC7C30"],
                      data: DATA_weeklyThermodynamic_all[i_28]
                      // [
                      // ["product", "0502-0226", "0527-0602", "增率"],
                      // ["访问用户数", 49.3, 49.1, -0.5],
                      // ["访问次数", 659.3, 660.6, -0.2],
                      // ["页面点击\n用户数", 39.4, 37.8, -4.4],
                      // ["页面点击次数", 338.3, 312.1, -7.3],
                      // ["页面播放次数", 141.6, 123.6, -13.2],
                      // ["页面播放时长", 216.6, 176.6, -18.2],
                      // ["开机次数", 182.6, 187.6, 2.5]
                      // ]
                    },
                    //按钮点击排行（万次）
                    buttonClickTOPData: {
                      // title: "分类页按钮点击排行（万次）",
                      title: buckets_28[i_28].key + "页按钮点击排行（万次）",
                      // id: "classifyButtonClickTOP",
                      id: "classifyButtonClickTOP" + String(i_28),

                      color: ["#5B9BD4", "#CBC9C9"],
                      data: DATA_buttonClickTOPData_all[i_28]
                      // [
                      // ["product", "0527-0602", "0520-0526"],
                      // ["推荐帮助", 1.4, 1.5],
                      // ["竖图1", 1.5, 1.6],
                      // ["横图", 2.6, 3.2],
                      // ["百姓关注", 3.0, 3.2],
                      // ["VIP限免", 4.5, 5.0],
                      // ["竖图2", 5.9, 7.1],
                      // ["点我换一换", 5.4, 6.0],
                      // ["竖图3", 7.4, 7.0],
                      // ["二屏", 9.4, 10.6],
                      // ["看电视", 16.0, 17.2],
                      // ["推荐个人中心", 23.4, 25.4],
                      // ["推荐搜索", 33.7, 36.1],
                      // ["历史记录", 70.6, 75.1],
                      // ["三屏", 96.8, 104.2],
                      // ["推荐页播放小窗口", 119.4, 129.0]
                      // ]
                    },
                    //栏目各按钮点击次数
                    columnButtonClickNum: {
                      // title: "分类页各按钮点击次数",
                      title: buckets_28[i_28].key + "页各按钮点击次数",
                      data: DATA_columnButtonClickNum_all[i_28]
                      // [
                      //   [
                      //     {
                      //       classify: "搜索",
                      //       title: "box0_0",
                      //       lastWeek: "361018",
                      //       thisWeek: "336859",
                      //       chainIndex: "-6.09%"
                      //     },
                      //     {
                      //       classify: "个人中心",
                      //       title: "box0_1",
                      //       lastWeek: "361018",
                      //       thisWeek: "336859",
                      //       chainIndex: "-6.09%"
                      //     },
                      //     {
                      //       classify: "帮助",
                      //       title: "box0_2",
                      //       lastWeek: "361018",
                      //       thisWeek: "336859",
                      //       chainIndex: "-6.09%"
                      //     }
                      //   ],
                      //   [
                      //     {
                      //       title: "box1_1",
                      //       lastWeek: "361018",
                      //       thisWeek: "336859",
                      //       chainIndex: "-6.09%"
                      //     },
                      //     {
                      //       title: "box1_2",
                      //       lastWeek: "361018",
                      //       thisWeek: "336859",
                      //       chainIndex: "-6.09%"
                      //     }
                      //   ],
                      //   [
                      //     {
                      //       title: "box2_1",
                      //       lastWeek: "361018",
                      //       thisWeek: "336859",
                      //       chainIndex: "-6.09%"
                      //     },
                      //     {
                      //       title: "box2_2",
                      //       lastWeek: "361018",
                      //       thisWeek: "336859",
                      //       chainIndex: "-6.09%"
                      //     },
                      //     {
                      //       title: "box2_3",
                      //       lastWeek: "361018",
                      //       thisWeek: "336859",
                      //       chainIndex: "-6.09%"
                      //     }
                      //   ],
                      //   [
                      //     {
                      //       title: "box3_1",
                      //       lastWeek: "361018",
                      //       thisWeek: "336859",
                      //       chainIndex: "-6.09%"
                      //     },
                      //     {
                      //       title: "box3_2",
                      //       lastWeek: "361018",
                      //       thisWeek: "336859",
                      //       chainIndex: "-6.09%"
                      //     },
                      //     {
                      //       title: "box3_3",
                      //       lastWeek: "361018",
                      //       thisWeek: "336859",
                      //       chainIndex: "-6.09%"
                      //     },
                      //     {
                      //       title: "box3_4",
                      //       lastWeek: "361018",
                      //       thisWeek: "336859",
                      //       chainIndex: "-6.09%"
                      //     },
                      //     {
                      //       title: "box3_5",
                      //       lastWeek: "361018",
                      //       thisWeek: "336859",
                      //       chainIndex: "-6.09%"
                      //     }
                      //   ],
                      //   [
                      //     {
                      //       title: "box4_1",
                      //       lastWeek: "361018",
                      //       thisWeek: "336859",
                      //       chainIndex: "-6.09%"
                      //     },
                      //     {
                      //       title: "box4_2",
                      //       lastWeek: "361018",
                      //       thisWeek: "336859",
                      //       chainIndex: "-6.09%"
                      //     },
                      //     {
                      //       title: "box4_3",
                      //       lastWeek: "361018",
                      //       thisWeek: "336859",
                      //       chainIndex: "-6.09%"
                      //     },
                      //     {
                      //       title: "box4_4",
                      //       lastWeek: "361018",
                      //       thisWeek: "336859",
                      //       chainIndex: "-6.09%"
                      //     }
                      //   ]
                      // ]
                    },
                    //部分按钮每日走势（次）
                    someButtonDayTrendData: {
                      // title: "分类页部分按钮每日走势（次）",
                      title: buckets_28[i_28].key + "页部分按钮每日走势（次）",
                      // id: "classifySomeButtonDayTrend",
                      id: "classifySomeButtonDayTrend" + String(i_28),
                      color: [
                        "#5B9BD4",
                        "#FFC000",
                        "#A6A6A6",
                        "#EC7C30",
                        "#6FAC46"
                      ],
                      data: DATA_someButtonDayTrendData_all[i_28]
                      // [
                      //   [
                      //     "product",
                      //     "周一",
                      //     "周二",
                      //     "周三",
                      //     "周四",
                      //     "周五",
                      //     "周六",
                      //     "周日"
                      //   ],
                      //   [
                      //     "box3_0",
                      //     15172,
                      //     13915,
                      //     13517,
                      //     11567,
                      //     10245,
                      //     11957,
                      //     13657
                      //   ],
                      //   ["box3_1", 12657, 12293, 11627, 11567, 8078, 7925, 8580],
                      //   ["box5_1", 4522, 4700, 5600, 5050, 5700, 5800, 6200],
                      //   ["box3_2", 8139, 5815, 5954, 5075, 6215, 6985, 5862],
                      //   ["box6_3", 3314, 3452, 3165, 3031, 3458, 3518, 3350]
                      // ]
                    }
                  });
                }

                // 初始化默认显示页
                vm.paneArr = temp_paneArr;
                vm.Pane_ColumnData = temp_Pane_ColumnData;
                vm.activeName = vm.paneArr[0].id;
              }, 9000);
            } catch (error) {
              console.log(error);
            }
            // vm.XX.weeklyThermodynamic = temp_data_28_1;
            // vm.XX.buttonClickTOPData = temp_data_28_2;
            // vm.XX.columnButtonClickNum; // box相关 先放置

            // ////////// 一周专题数据概览 row16 responses33
            // 一周专题数据概览  一周专题策划情况
            // thematicData monographicPlanData
            try {
              let buckets_33 =
                response.data.responses[33].aggregations
                  .special_or_activity_name.buckets;
              let length_33 = buckets_33.length;
              let i_33;
              let temp_data_33 = [];
              let temp_data_33B = [];

              let length_33_child =
                buckets_33[0].statistical_granularity.buckets.length;
              if (length_33_child == 2) {
                temp_data_33.push([
                  "product",
                  currentWeekFormat,
                  beforeWeekFormat
                ]);
              }
              if (length_33_child == 1) {
                temp_data_33.push(["product", currentWeekFormat]);
              }

              for (i_33 = 0; i_33 < length_33; i_33++) {
                if (length_33_child == 2) {
                  let current_value =
                    buckets_33[i_33].statistical_granularity.buckets[1]
                      .click_freq.value;
                  let last_value =
                    buckets_33[i_33].statistical_granularity.buckets[0]
                      .click_freq.value;
                  let key = buckets_33[i_33].key;
                  temp_data_33.push([key, current_value, last_value]);
                  temp_data_33B.push({ value: current_value, name: key });
                }
                if (length_33_child == 1) {
                  let current_value =
                    buckets_33[i_33].statistical_granularity.buckets[0]
                      .click_freq.value;
                  let key = buckets_33[i_33].key;
                  temp_data_33.push([key, current_value]);
                  temp_data_33B.push({ value: current_value, name: key });
                }
              }

              vm.thematicData.data = temp_data_33;
              vm.monographicPlanData.data = temp_data_33B;
              // console.log("●●●●●●●●●●●●●●●●");
              // console.log(temp_data_33);
              // console.log(temp_data_33B);
            } catch (error) {
              console.log(error);
            }
          } // if (week_type == "week")

          //////////////////////////////////////////////////////////////////////////
          //////////////////////////////////////////////////////////////////////////
          //////////////////////////////////////////////////////////////////////////

          if (week_type == "week_days") {
            console.log("users_mobileReport  week_days");
            console.log(response);
            // ////////// 每日开机率走势  (row1 right)  responses 0
            let buckets_0 =
              response.data.responses[0].aggregations.statistical_granularity
                .buckets;
            try {
              vm.dailyOperatingRateData.data = [];
              let length_0 = buckets_0.length;
              let i_0;
              // 在册用户数（万户） register_num
              // 开机用户数（万户） open_num
              // 开机率   // 开机用户数/在册用户数
              let temp_data_0 = [];
              temp_data_0.push([
                "product",
                "在册用户数（万户）",
                "开机用户数（万户）",
                "开机率"
              ]);
              for (i_0 = 0; i_0 < length_0; i_0++) {
                temp_data_0.push([
                  buckets_0[i_0].key,
                  (buckets_0[i_0].register_num.value / 10000).toFixed(2),
                  (buckets_0[i_0].open_num.value / 10000).toFixed(2),
                  (
                    (buckets_0[i_0].open_num.value /
                      buckets_0[i_0].register_num.value) *
                    100
                  ).toFixed(2)
                ]);
              }
              vm.dailyOperatingRateData.data = temp_data_0;
            } catch (error) {
              console.log(error);
            }
            // 一周用户活跃情况
            // ////////// 一周总体观看数据  (row 2 right)  --- 用  responses 1 2 3
            try {
              let aggregations_1 = response.data.responses[1].aggregations;
              let aggregations_2 = response.data.responses[2].aggregations;
              let aggregations_3 = response.data.responses[3].aggregations;
              let buckets_0 =
                response.data.responses[0].aggregations.statistical_granularity
                  .buckets;

              let temp_data_123 = [];
              temp_data_123.push(["product", "直播", "点播", "回看"]);
              temp_data_123.push([
                "观看用户数（万户）",
                (aggregations_1.onlive_user_num.value / 10000).toFixed(2),
                (aggregations_2.demand_user_num.value / 10000).toFixed(2),
                (aggregations_3.watch_user_num.value / 10000).toFixed(2)
              ]);

              temp_data_123.push([
                "观看次数（万次）",
                (aggregations_1.onlive_freq.value / 10000).toFixed(2),
                (aggregations_2.demand_freq.value / 10000).toFixed(2),
                (aggregations_3.watch_freq.value / 10000).toFixed(2)
              ]);
              temp_data_123.push([
                "观看时长（万小时）",
                (aggregations_1.onlive_dur.value / 10000 / 60).toFixed(2),
                (aggregations_2.demand_dur.value / 10000 / 60).toFixed(2),
                (aggregations_3.watch_dur.value / 10000 / 60).toFixed(2)
              ]);
              vm.hebdomadViewNumData.data = temp_data_123;
            } catch (error) {
              console.log(error);
            }
            // console.log("~~~~~~AAAA");
            // console.log(vm.hebdomadViewNumData);

            // 一周用户收视概览
            // ////////// 三大基础功能观看用户数每日走势（万户）  (row2 right) --- 用 responses 0 4 5 6
            try {
              vm.threeBasedUserViewData.data = [];

              let buckets_4 =
                response.data.responses[4].aggregations.item.buckets;
              let buckets_5 =
                response.data.responses[5].aggregations.item.buckets;
              let buckets_6 =
                response.data.responses[6].aggregations.item.buckets;

              let length_0456 = buckets_4.length;

              let i_0456;
              let temp_data_0456 = [];
              let temp_data_0456_1 = [];
              let temp_data_0456_2 = [];
              let temp_data_0456_3 = [];
              let temp_data_0456_4 = [];
              let temp_data_0456_5 = [];
              temp_data_0456_1.push("product");
              temp_data_0456_2.push("直播");
              temp_data_0456_3.push("点播");
              temp_data_0456_4.push("开机用户数");
              temp_data_0456_5.push("回看");

              for (i_0456 = 0; i_0456 < length_0456; i_0456++) {
                temp_data_0456_1.push(buckets_4[i_0456].key);
                temp_data_0456_2.push(
                  (buckets_4[i_0456].onlive_user_num.value / 10000).toFixed(2)
                );
                temp_data_0456_3.push(
                  (buckets_5[i_0456].demand_user_num.value / 10000).toFixed(2)
                );
                temp_data_0456_4.push(
                  (buckets_0[i_0456].open_num.value / 10000).toFixed(2)
                );
                temp_data_0456_5.push(
                  (buckets_6[i_0456].watch_user_num.value / 10000).toFixed(2)
                );
              }
              temp_data_0456.push(temp_data_0456_1);
              temp_data_0456.push(temp_data_0456_2);
              temp_data_0456.push(temp_data_0456_3);
              temp_data_0456.push(temp_data_0456_4);
              temp_data_0456.push(temp_data_0456_5);
              vm.threeBasedUserViewData.data = temp_data_0456;
            } catch (error) {
              console.log(error);
            }
            // console.log("~~~~~~AAAA");
            // console.log(vm.threeBasedUserViewData);

            // ///////// 一周热力数据概览 (row3) left responses 7
            try {
              let buckets_7 =
                response.data.responses[7].aggregations.ti.buckets;
              let length_7 = buckets_7.length;
              let i_7;
              let temp_data_7 = [];
              let temp_data_7_1 = {
                title: "页面点击次数",
                data: []
              };
              let temp_data_7_2 = {
                title: "页面点击用户数",
                data: []
              };
              for (i_7 = 0; i_7 < length_7; i_7++) {
                temp_data_7_1.data.push({
                  value: buckets_7[i_7].click_freq.value,
                  name: buckets_7[i_7].key
                });
                temp_data_7_2.data.push({
                  value: buckets_7[i_7].click_user_num.value,
                  name: buckets_7[i_7].key
                });
              }
              temp_data_7.push(temp_data_7_1);
              temp_data_7.push(temp_data_7_2);
              vm.pageClickNumData.content = temp_data_7;
              // console.log("~~~~~~AAAA");
              // console.log(vm.pageClickNumData);
            } catch (error) {
              console.log(error);
            }
            // ///////// 轮播频道及节目收视排名 (row13 right)  responses 27
            try {
              let buckets_27 =
                response.data.responses[27].aggregations.channel.buckets;
              // console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■");
              // console.log(buckets_27);

              let length_27 = buckets_27.length;

              let i_27;
              let temp_data_27 = [];
              // 第一行 product + 日期：处理
              temp_data_27.push([]);
              temp_data_27[0].push("product");
              for (i_27 = 0; i_27 < length_27; i_27++) {
                temp_data_27.push([]);
                temp_data_27[i_27 + 1].push(buckets_27[i_27].key);
              }
              // console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■");
              // console.log(temp_data_27);
              let buckets_27_child0 =
                buckets_27[0].statistical_granularity.buckets;
              let length_27_child = buckets_27_child0.length;
              let i_27_child;
              //  0-名称 1~8 对应7天日期的值
              for (i_27_child = 0; i_27_child < length_27_child; i_27_child++) {
                temp_data_27[0].push(buckets_27_child0[i_27_child].key);
              }
              // console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■");
              // console.log(temp_data_27);

              function Return_KeyValue(key) {
                let temp_buckets_27c =
                  buckets_27[i_27].statistical_granularity.buckets;
                let temp_length_27c = temp_buckets_27c.length;
                let temp_i_27c = 0;
                for (
                  temp_i_27c = 0;
                  temp_i_27c < temp_length_27c;
                  temp_i_27c++
                ) {
                  if (temp_buckets_27c[temp_i_27c].key == key) {
                    return temp_buckets_27c[temp_i_27c].onlive_user_num.value;
                  }
                }
                return 0;
              }

              for (i_27 = 0; i_27 < length_27; i_27++) {
                for (
                  i_27_child = 0;
                  i_27_child < length_27_child;
                  i_27_child++
                ) {
                  temp_data_27[i_27 + 1].push(
                    Return_KeyValue(temp_data_27[0][i_27_child + 1])
                  );
                  // temp_data_27[i_27 + 1].push(
                  //   buckets_27[i_27].statistical_granularity.buckets[i_27_child]
                  //     .onlive_user_num.value)
                }
              }
              // console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■");
              // console.log(temp_data_27);

              vm.originalProgramsDemandData.data = temp_data_27;
              // console.log("~~~~~~~~!!!!!");
              // console.log(temp_data_27);
            } catch (error) {
              console.log(error);
            }

            // ////////// 一周专题数据概览 row17 (上+下 -- 数据不够 下不显示) responses33
            //一周专题数据走势
            // specialTrendData1
            try {
              let buckets_33C =
                response.data.responses[33].aggregations
                  .special_or_activity_name.buckets;
              let length_33C = buckets_33C.length;
              let i_33C;
              let temp_data_33C = [];
              let temp_data_33C_title = "";
              temp_data_33C.push(["product"]);
              function tiKey_manage(specialKey, tiKey) {
                if (specialKey == "70周年专区") {
                  return "推荐";
                } else {
                  return tiKey[0].key;
                }
              }
              for (i_33C = 0; i_33C < length_33C; i_33C++) {
                if (i_33C == length_33C - 1) {
                  temp_data_33C_title += tiKey_manage(
                    buckets_33C[i_33C].key,
                    buckets_33C[i_33C].ti.buckets
                  );
                } else {
                  temp_data_33C_title +=
                    tiKey_manage(
                      buckets_33C[i_33C].key,
                      buckets_33C[i_33C].ti.buckets
                    ) + "/";
                }
                temp_data_33C.push([buckets_33C[i_33C].key]);

                let length_33C_child =
                  buckets_33C[0].statistical_granularity.buckets.length;
                for (
                  let i_33C_child = 0;
                  i_33C_child < length_33C_child;
                  i_33C_child++
                ) {
                  if (i_33C == 0) {
                    temp_data_33C[0].push(
                      buckets_33C[i_33C].statistical_granularity.buckets[
                        i_33C_child
                      ].key
                    );
                  }
                  temp_data_33C[i_33C + 1].push(
                    buckets_33C[i_33C].statistical_granularity.buckets[
                      i_33C_child
                    ].click_freq.value
                  );
                }
              }
              temp_data_33C_title += "专题点击数据走势（次）";

              vm.specialTrendData1.title = temp_data_33C_title;
              vm.specialTrendData1.data = temp_data_33C;
              // console.log(temp_data_33C);
            } catch (error) {
              console.log(error);
            }
          } //  if (week_type == "week_days")
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    //点击锚点实现左侧滚动
    goAnchor(selector) {
      let scrollDiv = document.querySelector(".operational_left_content_body"); //外层滚动容器元素
      var anchor = document.querySelector(selector); // 参数为要跳转到的元素id
      scrollDiv.scrollTop = anchor.offsetTop;
      $(".operational_nav a").on("click", function() {
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
      paneArr: [
        // {
        //   data: "a",
        //   id: "1"
        // },
        // {
        //   data: "b",
        //   id: "2"
        // }
      ],
      // activeName: "classify", //推荐栏目Tab标签默认选中
      activeName: "0", //推荐栏目Tab标签默认选中

      //周末用户总量与一周开机率
      userNumAddPowerData: {
        title: "周末用户总量与一周开机率",
        id: "userNumAddPower",
        color: ["#5B9BD4", "#FFC000", "#EC7C30"],
        data: [
          // ["product", "在册用户数（万户）", "开机用户数（万户）", "开机率"],
          // ["0520-0526", 113.4, 54.4, 48.0],
          // ["0527-0602", 116.2, 55.9, 48.1]
        ]
      },
      // 每日开机率走势
      dailyOperatingRateData: {
        title: "每日开机率走势",
        id: "dailyOperatingRate",
        color: ["#5B9BD4", "#FFC000", "#EC7C30"],
        data: [
          // ["product", "在册用户数（万户）", "开机用户数（万户）", "开机率"],
          // ["5月27日", 113.8, 27.6, 24.3],
          // ["5月28日", 114.2, 27.0, 23.7],
          // ["5月29日", 114.6, 26.3, 22.9],
          // ["5月30日", 114.9, 24.9, 21.7],
          // ["5月31日", 115.3, 27.1, 23.5],
          // ["6月1日", 115.7, 27.7, 23.9],
          // ["6月2日", 116.1, 26.8, 23.1]
        ]
      },

      //一周总体观看数据
      hebdomadViewNumData: {
        title: "一周总体观看数据",
        id: "hebdomadViewNum",
        color: ["#5B9BD4", "#FFC000", "#EC7C30"],
        data: [
          // ["product", "直播", "点播", "回看"],
          // ["观看用户数（万户）", 32.2, 41.4, 3.6],
          // ["观看次数（万次）", 661.0, 1096.7, 13.9],
          // ["观看时长（万小时）", 502.6, 1430.1, 11.9]
        ]
      },
      // 三大基础功能观看用户数每日走势（万户）
      threeBasedUserViewData: {
        title: "三大基础功能观看用户数每日走势（万户）",
        id: "threeBasedUserView",
        color: ["#6FAC46", "#5B9BD4", "#A6A6A6", "#FFC000"],
        data: [
          // [
          //   "product",
          //   "5月27日",
          //   "5月28日",
          //   "5月29日",
          //   "5月30日",
          //   "6月1日",
          //   "6月2日"
          // ],
          // ["直播", 13.1, 12.2, 9.5, 14.8, 14.6, 14.6],
          // ["点播", 27.3, 21.0, 20.2, 22.9, 24, 24.9],
          // ["开机用户数", 28, 27, 26.3, 26, 27, 28.2],
          // ["回看", 0.9, 0.9, 0.8, 0.7, 1.2, 1.1]
        ]
      },

      // 一周热力数据概览
      pageClickNumData: {
        title: "",
        id: "pageClickNum",
        color: [
          "#EC7C30",
          "#F4B083",
          "#FFC000",
          "#FFD966",
          "#5B9BD4",
          "#6FAC46",
          "#A9D18E",
          "#FFCCCC",
          "#BEBEBE",
          "#E7E6E6",
          "#E7E6E6"
        ],
        content: [
          {
            title: "页面点击次数",
            data: [
              // { value: 1100, name: "推荐" },
              // { value: 610, name: "电影" },
              // { value: 548, name: "热剧" },
              // { value: 535, name: "电视" },
              // { value: 410, name: "少儿" },
              // { value: 348, name: "动漫" },
              // { value: 235, name: "分类" },
              // { value: 410, name: "综艺" },
              // { value: 148, name: "游戏" },
              // { value: 110, name: "纪实" },
              // { value: 248, name: "体育" }
            ]
          },
          {
            title: "页面点击用户数",
            data: [
              // { value: 1035, name: "推荐" },
              // { value: 510, name: "电影" },
              // { value: 448, name: "热剧" },
              // { value: 535, name: "电视" },
              // { value: 410, name: "少儿" },
              // { value: 348, name: "动漫" },
              // { value: 235, name: "分类" },
              // { value: 410, name: "综艺" },
              // { value: 248, name: "游戏" },
              // { value: 110, name: "纪实" },
              // { value: 148, name: "体育" }
            ]
          }
        ]
      },
      // 一周热力数据柱状图和折线图数据
      hebdomadHotData: {
        title: "",
        id: "hebdomadHot",
        color: ["#FFC000", "#5B9BD4", "#EC7C30"],
        data: [
          // ["product", "0502-0226", "0527-0602", "环比"],
          // ["访问用户数", 234.2, 229.1, -2.2],
          // ["访问次数", 1942.3, 1956.9, 0.8],
          // ["页面点击用户数", 201.9, 193.2, -4.3],
          // ["页面点击次数", 1419.1, 1332.2, -6.1],
          // ["页面播放次数", 1122.6, 985.5, -12.2],
          // ["页面播放时长", 1516.6, 1258.9, -17.0]
        ]
      },

      //一周整体点播数据
      hebdomadDibbleSeedingData: {
        title: "一周整体点播数据",
        id: "hebdomadDibbleSeeding",
        color: ["#FFC000", "#5B9BD4"],
        data: [
          // ["product", "0520-0526", "0527-0602"],
          // ["点播用户数（万户）", 42.2, 41.4],
          // ["点播次数（万次）", 1152.3, 1096.7],
          // ["点播时长（万小时）", 1152.2, 1430.1]
        ]
      },
      // 一周节目点播TOP15
      hebdomadDibbleSeedingTOPData: {
        title: "一周节目点播TOP15（万次）",
        id: "hebdomadDibbleSeedingTOP",
        color: ["#5B9BD4", "#CBC9C9"],
        data: [
          // ["product", "0527-0602", "0520-0526"],
          // ["（电视剧）封神演义", 12.8, 12.0],
          // ["（电视剧）新白娘子传奇2019", 13.1, 15.5],
          // ["（电影）飞驰人生", 14.0, 12.6],
          // ["（电视剧）青春斗", 15.0, 14.2],
          // ["（少儿）猪猪侠之竞球小英雄第二部", 16.2, 16.7],
          // ["（少儿）熊出没之探险日记 第二季", 17.9, 16.1],
          // ["（电视剧）招摇", 18.8, 18.0],
          // ["（电视剧）黄河英雄", 19.1, 17.5],
          // ["（电视剧）夜空中最闪亮的星", 20.0, 18.6],
          // ["（综艺）王牌对王牌 第四季", 20.0, 17.2],
          // ["（少儿）汪汪队立大功 第四季", 20.2, 16.7],
          // ["（电影）狂暴凶狮", 20.4, 17.3],
          // ["（通灵妃）通灵妃", 20.8, 17.6],
          // ["湖南卫视（高清）", 20.8, 17.2],
          // ["（电影）绿毛怪格林奇（原声版）", 21.4, 19.0]
        ]
      },

      // 点播用户数
      dibbleSeedingUserNumData: {
        title: "点播用户数（万户）",
        id: "dibbleSeedingUserNum",
        color: ["#A9D18E", "#D6D1D1"],
        data: [
          // ["product", "0527-0602", "0520-0526"],
          // ["资讯", 5.3, 5.0],
          // ["体育", 5.8, 5.6],
          // ["音乐", 8.5, 9.5],
          // ["纪实", 10.8, 10.0],
          // ["综艺", 30.2, 30.1],
          // ["动漫", 62.2, 60.7],
          // ["游戏", 110.0, 114.2],
          // ["热剧", 123.0, 128.6],
          // ["电影", 149.1, 152.5],
          // ["少儿", 222.8, 225.0]
        ]
      },
      // 点播次数
      dibbleSeedingNumData: {
        title: "点播次数（万次）",
        id: "dibbleSeedingNum",
        color: ["#5B9BD4", "#D6D1D1"],
        data: [
          // ["product", "0527-0602", "0520-0526"],
          // ["资讯", 5.3, 5.0],
          // ["体育", 5.8, 5.6],
          // ["音乐", 8.5, 9.5],
          // ["纪实", 10.8, 10.0],
          // ["综艺", 30.2, 30.1],
          // ["动漫", 62.2, 60.7],
          // ["游戏", 110.0, 114.2],
          // ["热剧", 123.0, 128.6],
          // ["电影", 149.1, 152.5],
          // ["少儿", 222.8, 225.0]
        ]
      },
      // 点播时长
      dibbleSeedingDurationData: {
        title: "点播时长（万小时）",
        id: "dibbleSeedingDuration",
        color: ["#FFC000", "#D6D1D1"],
        data: [
          // ["product", "0527-0602", "0520-0526"],
          // ["资讯", 5.3, 5.0],
          // ["体育", 5.8, 5.6],
          // ["音乐", 8.5, 9.5],
          // ["纪实", 10.8, 10.0],
          // ["综艺", 30.2, 30.1],
          // ["动漫", 62.2, 60.7],
          // ["游戏", 110.0, 114.2],
          // ["热剧", 123.0, 128.6],
          // ["电影", 149.1, 152.5],
          // ["少儿", 222.8, 225.0]
        ]
      },

      // 主要栏目点播次数（万次）
      mainProgramaPlayData: {
        title: "",
        id: "mainProgramaPlay",
        color: ["#CBC9C9", "#5B9BD4", "#EC7C30"],
        data: [
          // ["product", "0502-0226", "0527-0602", "环比"],
          // ["少儿", 234.2, 229.1, -2.2],
          // ["电影", 1942.3, 1956.9, 0.8],
          // ["热剧", 201.9, 193.2, -4.3],
          // ["综艺", 1419.1, 1332.2, -6.1],
          // ["游戏", 1122.6, 985.5, -12.2],
          // ["纪实", 1516.6, 1258.9, -17.0],
          // ["体育", 234.2, 229.1, -2.2],
          // ["分类", 1942.3, 1956.9, 0.8],
          // ["推荐", 201.9, 193.2, -4.3],
          // ["点视", 1419.1, 1332.2, -6.1],
          // ["动漫", 1122.6, 985.5, -12.2]
          // ["开机次数", 1516.6, 1258.9, -17.0] // 暂时不管
        ]
      },

      //本土原创节目一周点播数据
      localProgramsPlayData: {
        title: "本土原创节目一周点播数据",
        id: "localProgramsPlay",
        color: ["#FFC000", "#5B9BD4"],
        data: [
          // ["product", "0520-0526", "0527-0602"],
          // ["点播用户数（万户）", 24400, 25157],
          // ["点播次数（万次）", 31392, 31653],
          // ["点播时长（万小时）", 23292.4, 21224.4]
        ]
      },
      // 点播排行（次）
      localProgramsPlayTOPData: {
        title: "点播排行（次）",
        id: "localProgramsPlayTOP",
        color: ["#5B9BD4", "#CBC9C9"],
        data: [
          // ["product", "0527-0602", "0520-0526"],
          // ["（电视剧）封神演义", 10.8, 10.0],
          // ["（电视剧）新白娘子传奇2019", 13.1, 12.5],
          // ["（电影）飞驰人生", 14.0, 12.6],
          // ["（电视剧）青春斗", 15.0, 14.2],
          // ["（少儿）猪猪侠之竞球小英雄第二部", 16.2, 16.7],
          // ["（少儿）熊出没之探险日记 第二季", 17.9, 16.1],
          // ["（电视剧）招摇", 18.8, 18.0],
          // ["（电视剧）黄河英雄", 19.1, 17.5],
          // ["（电视剧）夜空中最闪亮的星", 20.0, 18.6],
          // ["（综艺）王牌对王牌 第四季", 20.0, 17.2]
        ]
      },

      //一周整体直播收视数据
      hebdomadLiveData: {
        title: "一周整体直播收视数据",
        id: "hebdomadLive",
        color: ["#FFC000", "#5B9BD4"],
        data: [
          // ["product", "0520-0526", "0527-0602"],
          // ["直播收视用户数（万户）", 24400, 25157],
          // ["直播收视次数（万次）", 31392, 31653],
          // ["直播收视时长（万小时）", 23292.4, 21224.4]
        ]
      },
      // 一周直播节目TOP15（万小时）
      hebdomadLiveTOPData: {
        title: "一周直播节目TOP15（万小时）",
        id: "hebdomadLiveTOP",
        color: ["#5B9BD4", "#CBC9C9"],
        data: [
          // ["product", "0527-0602", "0520-0526"],
          // ["（电视剧）封神演义", 12.8, 12.0],
          // ["（电视剧）新白娘子传奇2019", 13.1, 15.5],
          // ["（电影）飞驰人生", 14.0, 12.6],
          // ["（电视剧）青春斗", 15.0, 14.2],
          // ["（少儿）猪猪侠之竞球小英雄第二部", 16.2, 16.7],
          // ["（少儿）熊出没之探险日记 第二季", 17.9, 16.1],
          // ["（电视剧）招摇", 18.8, 18.0],
          // ["（电视剧）黄河英雄", 19.1, 17.5],
          // ["（电视剧）夜空中最闪亮的星", 20.0, 18.6],
          // ["（综艺）王牌对王牌 第四季", 20.0, 17.2],
          // ["（少儿）汪汪队立大功 第四季", 20.2, 16.7],
          // ["（电影）狂暴凶狮", 20.4, 17.3],
          // ["（通灵妃）通灵妃", 20.8, 17.6],
          // ["湖南卫视（高清）", 20.8, 17.2],
          // ["（电影）绿毛怪格林奇（原声版）", 21.4, 19.0]
        ]
      },

      //分组频道直播用户数（万户）
      channelLiveUserNumData: {
        title: "分组频道直播用户数（万户）",
        id: "channelLiveUserNum",
        color: ["#CBC9C9", "#A9D18E"],
        data: [
          // ["product", "0520-0526", "0527-0602"],
          // ["央视", 55.5, 53.6],
          // ["卫视", 110.7, 108.1],
          // ["地方", 62.4, 61.4],
          // ["轮播", 15.5, 15.4]
        ]
      },
      //分组频道直播次数（万次）
      channelLiveTimesData: {
        title: "分组频道直播次数（万次）",
        id: "channelLiveTimes",
        color: ["#CBC9C9", "#5B9BD4"],
        data: [
          // ["product", "0520-0526", "0527-0602"],
          // ["央视", 55.5, 53.6],
          // ["卫视", 110.7, 108.1],
          // ["地方", 62.4, 61.4],
          // ["轮播", 15.5, 15.4]
        ]
      },
      //分组频道直播收视时长（万小时）
      channelLiveDurationData: {
        title: "分组频道直播收视时长（万小时）",
        id: "channelLiveDuration",
        color: ["#CBC9C9", "#FFC000"],
        data: [
          // ["product", "0520-0526", "0527-0602"],
          // ["央视", 55.5, 53.6],
          // ["卫视", 110.7, 108.1],
          // ["地方", 62.4, 61.4],
          // ["轮播", 15.5, 15.4]
        ]
      },

      //央视频道及节目收视排名 数据
      // 直播频道排名（万户）
      liveChannelTOPData: {
        title: "直播频道排名（万户）",
        id: "liveChannelTOP",
        color: ["#A9D18E", "#CBC9C9"],
        data: [
          // ["product", "0527-0602", "0520-0526"],
          // ["CCTV-11 戏曲", 2.5, 2.7],
          // ["CCTV-2 财经", 3.6, 3.8],
          // ["CCTV-10 科教", 4.7, 5.1],
          // ["CCTV-15 音乐", 4.6, 4.7],
          // ["CCTV-14 少儿", 4.8, 5.1],
          // ["CCTV-7 军事农业", 5.1, 5.1],
          // ["CCTV-4 中文国际", 6.4, 6.3],
          // ["CCTV-12 社会与法", 5.6, 5.7],
          // ["CCTV-13 新闻", 7.9, 7.9],
          // ["CCTV-1 综合", 8.4, 9.2]
        ]
      },
      //直播节目TOP10（万小时）
      liveProgramTOPData: {
        title: "直播节目TOP10（万小时）",
        id: "liveProgramTOP",
        color: ["#CBC9C9", "#5B9BD4"],
        data: [
          // ["product", "0520-0526", "0527-0602"],
          // ["新闻直播间\nCCTV-13", 55.5, 53.6],
          // ["中国新闻\nCCTV-4", 110.7, 108.1],
          // ["普法栏目剧\nCCTV-12", 62.4, 61.4],
          // ["初婚\nCCTV-1", 15.5, 15.4],
          // ["精彩音乐会\nCCTV-15", 55.5, 53.6],
          // ["朝闻天下\nCCTV-13", 110.7, 108.1],
          // ["麦香\nCCTV-1", 62.4, 61.4],
          // ["共同关注\nCCTV-13", 15.5, 15.4],
          // ["红七军\nCCTV-4", 62.4, 61.4],
          // ["新闻联播\nCCTV-13", 15.5, 15.4]
        ]
      },

      // 本地频道收视规模排名（万户
      localChannelTOPData: {
        title: "本地频道收视规模排名（万户）",
        id: "localLiveTOP",
        color: ["#A9D18E", "#CBC9C9"],
        data: [
          // ["product", "0527-0602", "0520-0526"],
          // ["黔西南-公共", 4.8, 4.0],
          // ["贵阳-5 旅游生活频道", 5.8, 5.0],
          // ["黔西南-综合", 6.8, 6.0],
          // ["六盘水-1", 7.8, 7.0],
          // ["贵州移动电视", 8.8, 8.0],
          // ["六盘水-2", 9.8, 9.0],
          // ["动画乐园", 10.8, 10.0],
          // ["都市剧场", 12.8, 12.0],
          // ["贵阳-1 新闻综合频道", 13.1, 15.5],
          // ["贵阳-2 经济生活频道", 14.0, 12.6],
          // ["海外佳片", 15.0, 14.2],
          // ["贵阳-3 法制频道", 16.2, 16.7],
          // ["谍战剧场", 17.9, 16.1],
          // ["贵州-7 经济频道", 18.8, 18.0],
          // ["贵州-6 科教健康频道", 19.1, 17.5],
          // ["贵阳-4 都市频道", 20.0, 18.6],
          // ["华语影院", 20.0, 17.2],
          // ["贵州-5 法制频道", 20.2, 16.7],
          // ["贵州-4 大众生活频道", 20.4, 17.3],
          // ["贵州-3 影视文艺频道", 20.8, 17.6],
          // ["贵州-2 公共频道", 20.8, 17.2],
          // ["贵州卫视", 21.4, 19.0]
        ]
      },
      //本地自办节目TOP5（万小时）
      localProgramTOPData: {
        title: "本地自办节目TOP5（万小时）",
        id: "localProgramTOP",
        color: ["#CBC9C9", "#5B9BD4"],
        data: [
          // ["product", "0520-0526", "0527-0602"],
          // ["百姓关注\n贵州-2", 55.5, 53.6],
          // ["贵州新闻联播\n贵州卫视", 110.7, 108.1],
          // ["第二放映室\n贵州-2", 62.4, 61.4],
          // ["谢谢你来了\n贵州-4", 15.5, 15.4],
          // ["天天来帮忙\n贵州-2", 55.5, 53.6]
        ]
      },

      //卫视频道及节目收视排名
      // 直播频道TOP10（万户）
      satelliteChannelTOPData: {
        title: "直播频道TOP10（万户）",
        id: "satelliteChannelTOP",
        color: ["#A9D18E", "#CBC9C9"],
        data: [
          // ["product", "0527-0602", "0520-0526"],
          // ["河南卫视", 2.5, 2.7],
          // ["安徽卫视", 3.6, 3.8],
          // ["广东卫视", 4.7, 5.1],
          // ["重庆卫视", 4.6, 4.7],
          // ["江西卫视", 4.8, 5.1],
          // ["云南卫视", 5.1, 5.1],
          // ["山东卫视", 6.4, 6.3],
          // ["江苏卫视", 5.6, 5.7],
          // ["浙江卫视", 7.9, 7.9],
          // ["湖南卫视", 8.4, 9.2]
        ]
      },
      //直播节目TOP10（万小时）
      satelliteLiveProgramTOPData: {
        title: "直播节目TOP10（万小时）",
        id: "satelliteLiveProgramTOP",
        color: ["#CBC9C9", "#5B9BD4"],
        data: [
          // ["product", "0520-0526", "0527-0602"],
          // ["情迷睡美人\n湖南卫视", 55.5, 53.6],
          // ["筑梦情缘\n湖南卫视", 110.7, 108.1],
          // ["我的真朋友\n浙江卫视", 62.4, 61.4],
          // ["非诚勿扰\n江苏卫视", 15.5, 15.4],
          // ["第二次人生\n湖南卫视", 55.5, 53.6],
          // ["向往的生活湘西篇\n湖南卫视", 110.7, 108.1],
          // ["奔跑吧\n浙江卫视", 62.4, 61.4],
          // ["封神演义\n湖南卫视", 15.5, 15.4],
          // ["激战\n重庆卫视", 62.4, 61.4],
          // ["新闻大求真\n湖南卫视", 15.5, 15.4]
        ]
      },

      // 一周轮播频道收视数据（万户）
      carouselChannelData: {
        title: "一周轮播频道收视数据（万户）",
        id: "carouselChannel",
        color: ["#FFC000", "#5B9BD4", "#EC7C30"],
        data: [
          // ["product", "0502-0226", "0527-0602", "增率"],
          // ["华语影院", 5.2, 5.1, -2.2],
          // ["谍战剧场", 4.6, 3.8, -16.5],
          // ["海外佳片", 1.9, 2.8, 49.3],
          // ["都市剧场", 2.3, 2.1, -8.3],
          // ["动画乐园", 1.6, 1.6, 3.2]
        ]
      },

      //轮播频道每日收视走势（户）
      originalProgramsDemandData: {
        title: "轮播频道每日收视走势（户）",
        id: "originalProgramsDemand_owr",
        color: ["#6FAC46", "#F7BCBC", "#5B9BD4", "#FFC000", "#EC7C30"],
        data: [
          // [
          //   "product",
          //   "5月27日",
          //   "5月28日",
          //   "5月29日",
          //   "5月30日",
          //   "5月31日",
          //   "6月1日",
          //   "6月2日"
          // ],
          // ["谍战剧场", 15172, 13915, 13517, 11567, 10245, 11957, 13657],
          // ["华语影院", 12657, 12293, 11627, 11567, 8078, 7925, 8580],
          // ["海外佳片", 4522, 4700, 5600, 5050, 5700, 5800, 6200],
          // ["都市剧场", 8139, 5815, 5954, 5075, 6215, 6985, 5862],
          // ["动画乐园", 3314, 3452, 3165, 3031, 3458, 3518, 3350]
        ]
      },

      /////////////////////////
      // //分类页一周热力数据
      Pane_ColumnData: [],
      // weeklyThermodynamic
      // buttonClickTOPData
      // columnButtonClickNum
      // someButtonDayTrendData

      // classifyColumnData: {
      //   //一周热力数据
      //   weeklyThermodynamic: {
      //     title: "分类页一周热力数据",
      //     id: "classifyWeeklyThermodynamic",
      //     color: ["#FFC000", "#5B9BD4", "#EC7C30"],
      //     data: [
      //       ["product", "0502-0226", "0527-0602", "增率"],
      //       ["访问用户数", 49.3, 49.1, -0.5],
      //       ["访问次数", 659.3, 660.6, -0.2],
      //       ["页面点击\n用户数", 39.4, 37.8, -4.4],
      //       ["页面点击次数", 338.3, 312.1, -7.3],
      //       ["页面播放次数", 141.6, 123.6, -13.2],
      //       ["页面播放时长", 216.6, 176.6, -18.2],
      //       ["开机次数", 182.6, 187.6, 2.5]
      //     ]
      //   },
      //   //按钮点击排行（万次）
      //   buttonClickTOPData: {
      //     title: "分类页按钮点击排行（万次）",
      //     id: "classifyButtonClickTOP",
      //     color: ["#5B9BD4", "#CBC9C9"],
      //     data: [
      //       ["product", "0527-0602", "0520-0526"],
      //       ["推荐帮助", 1.4, 1.5],
      //       ["竖图1", 1.5, 1.6],
      //       ["横图", 2.6, 3.2],
      //       ["百姓关注", 3.0, 3.2],
      //       ["VIP限免", 4.5, 5.0],
      //       ["竖图2", 5.9, 7.1],
      //       ["点我换一换", 5.4, 6.0],
      //       ["竖图3", 7.4, 7.0],
      //       ["二屏", 9.4, 10.6],
      //       ["看电视", 16.0, 17.2],
      //       ["推荐个人中心", 23.4, 25.4],
      //       ["推荐搜索", 33.7, 36.1],
      //       ["历史记录", 70.6, 75.1],
      //       ["三屏", 96.8, 104.2],
      //       ["推荐页播放小窗口", 119.4, 129.0]
      //     ]
      //   },
      //   //栏目各按钮点击次数
      //   columnButtonClickNum: {
      //     title: "分类页各按钮点击次数",
      //     data: [
      //       [
      //         {
      //           classify: "搜索",
      //           title: "box0_0",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           classify: "个人中心",
      //           title: "box0_1",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           classify: "帮助",
      //           title: "box0_2",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         }
      //       ],
      //       [
      //         {
      //           title: "box1_1",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box1_2",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         }
      //       ],
      //       [
      //         {
      //           title: "box2_1",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box2_2",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box2_3",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         }
      //       ],
      //       [
      //         {
      //           title: "box3_1",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box3_2",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box3_3",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box3_4",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box3_5",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         }
      //       ],
      //       [
      //         {
      //           title: "box4_1",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box4_2",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box4_3",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box4_4",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         }
      //       ]
      //     ]
      //   },
      //   //部分按钮每日走势（次）
      //   someButtonDayTrendData: {
      //     title: "分类页部分按钮每日走势（次）",
      //     id: "classifySomeButtonDayTrend",
      //     color: ["#5B9BD4", "#FFC000", "#A6A6A6", "#EC7C30", "#6FAC46"],
      //     data: [
      //       ["product", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      //       ["box3_0", 15172, 13915, 13517, 11567, 10245, 11957, 13657],
      //       ["box3_1", 12657, 12293, 11627, 11567, 8078, 7925, 8580],
      //       ["box5_1", 4522, 4700, 5600, 5050, 5700, 5800, 6200],
      //       ["box3_2", 8139, 5815, 5954, 5075, 6215, 6985, 5862],
      //       ["box6_3", 3314, 3452, 3165, 3031, 3458, 3518, 3350]
      //     ]
      //   }
      // },

      // //电视页一周热力数据television
      // televisionColumnData: {
      //   //一周热力数据
      //   weeklyThermodynamic: {
      //     title: "电视页一周热力数据",
      //     id: "televisionWeeklyThermodynamic",
      //     color: ["#FFC000", "#5B9BD4", "#EC7C30"],
      //     data: [
      //       ["product", "0502-0226", "0527-0602", "增率"],
      //       ["访问用户数", 49.3, 49.1, -0.5],
      //       ["访问次数", 659.3, 660.6, -0.2],
      //       ["页面点击\n用户数", 39.4, 37.8, -4.4],
      //       ["页面点击次数", 338.3, 312.1, -7.3],
      //       ["页面播放次数", 141.6, 123.6, -13.2],
      //       ["页面播放时长", 216.6, 176.6, -18.2],
      //       ["开机次数", 182.6, 187.6, 2.5]
      //     ]
      //   },
      //   //按钮点击排行（万次）
      //   buttonClickTOPData: {
      //     title: "电视页按钮点击排行（万次）",
      //     id: "televisionButtonClickTOP",
      //     color: ["#5B9BD4", "#CBC9C9"],
      //     data: [
      //       ["product", "0527-0602", "0520-0526"],
      //       ["推荐帮助", 1.4, 1.5],
      //       ["竖图1", 1.5, 1.6],
      //       ["横图", 2.6, 3.2],
      //       ["百姓关注", 3.0, 3.2],
      //       ["VIP限免", 4.5, 5.0],
      //       ["竖图2", 5.9, 7.1],
      //       ["点我换一换", 5.4, 6.0],
      //       ["竖图3", 7.4, 7.0],
      //       ["二屏", 9.4, 10.6],
      //       ["看电视", 16.0, 17.2],
      //       ["推荐个人中心", 23.4, 25.4],
      //       ["推荐搜索", 33.7, 36.1],
      //       ["历史记录", 70.6, 75.1],
      //       ["三屏", 96.8, 104.2],
      //       ["推荐页播放小窗口", 119.4, 129.0]
      //     ]
      //   },
      //   //栏目各按钮点击次数
      //   columnButtonClickNum: {
      //     title: "电视页各按钮点击次数",
      //     data: [
      //       [
      //         {
      //           classify: "搜索",
      //           title: "box0_0",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           classify: "个人中心",
      //           title: "box0_1",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           classify: "帮助",
      //           title: "box0_2",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         }
      //       ],
      //       [
      //         {
      //           title: "box1_1",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box1_2",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         }
      //       ],
      //       [
      //         {
      //           title: "box2_1",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box2_2",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box2_3",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         }
      //       ],
      //       [
      //         {
      //           title: "box3_1",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box3_2",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box3_3",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box3_4",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box3_5",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         }
      //       ],
      //       [
      //         {
      //           title: "box4_1",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box4_2",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box4_3",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box4_4",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         }
      //       ]
      //     ]
      //   },
      //   //部分按钮每日走势（次）
      //   someButtonDayTrendData: {
      //     title: "电视页部分按钮每日走势（次）",
      //     id: "televisionSomeButtonDayTrend",
      //     color: ["#5B9BD4", "#FFC000", "#A6A6A6", "#EC7C30", "#6FAC46"],
      //     data: [
      //       ["product", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      //       ["box3_0", 15172, 13915, 13517, 11567, 10245, 11957, 13657],
      //       ["box3_1", 12657, 12293, 11627, 11567, 8078, 7925, 8580],
      //       ["box5_1", 4522, 4700, 5600, 5050, 5700, 5800, 6200],
      //       ["box3_2", 8139, 5815, 5954, 5075, 6215, 6985, 5862],
      //       ["box6_3", 3314, 3452, 3165, 3031, 3458, 3518, 3350]
      //     ]
      //   }
      // },

      // //推荐页一周热力数据
      // recommendColumnData: {
      //   //一周热力数据
      //   weeklyThermodynamic: {
      //     title: "推荐页一周热力数据",
      //     id: "recommendWeeklyThermodynamic",
      //     color: ["#FFC000", "#5B9BD4", "#EC7C30"],
      //     data: [
      //       ["product", "0502-0226", "0527-0602", "增率"],
      //       ["访问用户数", 49.3, 49.1, -0.5],
      //       ["访问次数", 659.3, 660.6, -0.2],
      //       ["页面点击\n用户数", 39.4, 37.8, -4.4],
      //       ["页面点击次数", 338.3, 312.1, -7.3],
      //       ["页面播放次数", 141.6, 123.6, -13.2],
      //       ["页面播放时长", 216.6, 176.6, -18.2],
      //       ["开机次数", 182.6, 187.6, 2.5]
      //     ]
      //   },
      //   //按钮点击排行（万次）
      //   buttonClickTOPData: {
      //     title: "推荐页按钮点击排行（万次）",
      //     id: "recommendButtonClickTOP",
      //     color: ["#5B9BD4", "#CBC9C9"],
      //     data: [
      //       ["product", "0527-0602", "0520-0526"],
      //       ["推荐帮助", 1.4, 1.5],
      //       ["竖图1", 1.5, 1.6],
      //       ["横图", 2.6, 3.2],
      //       ["百姓关注", 3.0, 3.2],
      //       ["VIP限免", 4.5, 5.0],
      //       ["竖图2", 5.9, 7.1],
      //       ["点我换一换", 5.4, 6.0],
      //       ["竖图3", 7.4, 7.0],
      //       ["二屏", 9.4, 10.6],
      //       ["看电视", 16.0, 17.2],
      //       ["推荐个人中心", 23.4, 25.4],
      //       ["推荐搜索", 33.7, 36.1],
      //       ["历史记录", 70.6, 75.1],
      //       ["三屏", 96.8, 104.2],
      //       ["推荐页播放小窗口", 119.4, 129.0]
      //     ]
      //   },
      //   //栏目各按钮点击次数
      //   columnButtonClickNum: {
      //     title: "推荐页各按钮点击次数",
      //     data: [
      //       [
      //         {
      //           classify: "搜索",
      //           title: "box0_0",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           classify: "个人中心",
      //           title: "box0_1",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           classify: "帮助",
      //           title: "box0_2",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         }
      //       ],
      //       [
      //         {
      //           title: "box1_1",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box1_2",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         }
      //       ],
      //       [
      //         {
      //           title: "box2_1",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box2_2",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box2_3",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         }
      //       ],
      //       [
      //         {
      //           title: "box3_1",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box3_2",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box3_3",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box3_4",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box3_5",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         }
      //       ],
      //       [
      //         {
      //           title: "box4_1",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box4_2",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box4_3",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         },
      //         {
      //           title: "box4_4",
      //           lastWeek: "361018",
      //           thisWeek: "336859",
      //           chainIndex: "-6.09%"
      //         }
      //       ]
      //     ]
      //   },
      //   //部分按钮每日走势（次）
      //   someButtonDayTrendData: {
      //     title: "推荐页分按钮每日走势（次）",
      //     id: "recommendSomeButtonDayTrend",
      //     color: ["#5B9BD4", "#FFC000", "#A6A6A6", "#EC7C30", "#6FAC46"],
      //     data: [
      //       ["product", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      //       ["box3_0", 15172, 13915, 13517, 11567, 10245, 11957, 13657],
      //       ["box3_1", 12657, 12293, 11627, 11567, 8078, 7925, 8580],
      //       ["box5_1", 4522, 4700, 5600, 5050, 5700, 5800, 6200],
      //       ["box3_2", 8139, 5815, 5954, 5075, 6215, 6985, 5862],
      //       ["box6_3", 3314, 3452, 3165, 3031, 3458, 3518, 3350]
      //     ]
      //   }
      // },

      //模块五 专题热力数 据及运营分析
      // 一周专题数据概览（次）
      thematicData: {
        title: "一周专题数据概览（次）",
        id: "thematic",
        color: ["#5B9BD4", "#CBC9C9"],
        data: [
          // ["product", "0527-0602", "0520-0526"],
          // ["（电视剧）封神演义", 12.8, 12.0],
          // ["（电视剧）新白娘子传奇2019", 13.1, 15.5],
          // ["（电影）飞驰人生", 14.0, 12.6],
          // ["（电视剧）青春斗", 15.0, 14.2],
          // ["（少儿）猪猪侠之竞球小英雄第二部", 16.2, 16.7],
          // ["（少儿）熊出没之探险日记 第二季", 17.9, 16.1],
          // ["（电视剧）招摇", 18.8, 18.0],
          // ["（电视剧）黄河英雄", 19.1, 17.5],
          // ["（电视剧）夜空中最闪亮的星", 20.0, 18.6],
          // ["（综艺）王牌对王牌 第四季", 20.0, 17.2],
          // ["（少儿）汪汪队立大功 第四季", 20.2, 16.7],
          // ["（电影）狂暴凶狮", 20.4, 17.3],
          // ["（通灵妃）通灵妃", 20.8, 17.6],
          // ["湖南卫视（高清）", 20.8, 17.2],
          // ["（电影）绿毛怪格林奇（原声版）", 21.4, 19.0]
        ]
      },
      //一周专题策划情况
      monographicPlanData: {
        title: "一周专题策划情况",
        id: "monographicPlan",
        color: [
          "#EC7C30",
          "#FFC000",
          "#5B9BD4",
          "#6FAC46",
          "#A9D18E",
          "#FFD966",
          "#F8CAAC",
          "#FFCCCC",
          "#626262"
        ],
        data: [
          // { value: 735, name: "电视剧" },
          // { value: 510, name: "推荐" },
          // { value: 448, name: "电影" },
          // { value: 335, name: "动漫" },
          // { value: 210, name: "纪实" },
          // { value: 210, name: "游戏" },
          // { value: 135, name: "少儿" },
          // { value: 100, name: "体育" },
          // { value: 100, name: "综艺" }
        ]
      },

      // 一周专题数据走势（动漫/热剧/少儿/电影专题点击数据走势）
      specialTrendData1: {
        // title: "动漫/热剧/少儿/电影专题点击数据走势（次）",
        title: "专题点击数据走势（次）",
        id: "specialTrend1",
        color: [
          "#DB9B9B",
          "#6FAC46",
          "#5B9BD4",
          "#FFC000",
          "#EC7C30",
          "#622C0A",
          "#4ADBC7",
          "#2C55E3",
          "#8B8989"
        ],
        data: [
          // ["product", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          // ["探剧社第六期", "-", "-", "-", "-", 12152, 17568, 19831],
          // ["致敬", 7053, 7001, 6895, 6520, 6752, 7150, 6980],
          // ["此情可待成追忆", 2742, 2602, 2172, 2069, 2148, 2260, 2105],
          // ["白玉兰奖", 7053, 6895, 6520, 6540, 6685, 6520, 6423],
          // ["怪兽世界大对决", "-", "-", "-", 19360, 36541, 36852, 32210],
          // ["神灯许愿专题", 19520, 18953, 9865],
          // ["童心萌动 动漫回忆集", 7850, 7785, 7951, 7241, 7321, 7589, 8000],
          // ["龙珠回味童年专题", "-", "-", "-", "-", 12452, 13254, 15210],
          // ["萌趣星六一活动", 5240, 6542, 7683, 9142, 8652, 7652, 8752]
        ]
      },
      // 一周专题数据走势（推荐/体育/游戏/综艺/纪实专题点击数据走势）
      specialTrendData2: {
        title: "推荐/体育/游戏/综艺/纪实专题点击数据走势（次）",
        id: "specialTrend2",
        color: [
          "#DB9B9B",
          "#6FAC46",
          "#5B9BD4",
          "#FFC000",
          "#EC7C30",
          "#622C0A",
          "#4ADBC7",
          "#2C55E3",
          "#8B8989"
        ],
        data: [
          ["product", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          ["探剧社第六期", "-", "-", "-", "-", 12152, 17568, 19831],
          ["致敬", 7053, 7001, 6895, 6520, 6752, 7150, 6980],
          ["此情可待成追忆", 2742, 2602, 2172, 2069, 2148, 2260, 2105],
          ["白玉兰奖", 7053, 6895, 6520, 6540, 6685, 6520, 6423],
          ["怪兽世界大对决", "-", "-", "-", 19360, 36541, 36852, 32210],
          ["神灯许愿专题", 19520, 18953, 9865],
          ["童心萌动 动漫回忆集", 7850, 7785, 7951, 7241, 7321, 7589, 8000],
          ["龙珠回味童年专题", "-", "-", "-", "-", 12452, 13254, 15210],
          ["萌趣星六一活动", 5240, 6542, 7683, 9142, 8652, 7652, 8752]
        ]
      }
    };
  }
};
</script>
<style>
.OperationalWeekReport .el-tabs__nav-scroll {
  padding-left: 20px;
}
</style>
<style scoped>
.OperationalWeekReport {
  height: 700px;
  margin: 14px 0px;
  display: -webkit-flex;
  display: flex;
}
.operational_left_content {
  flex: 1;
  height: 100%;
}
.operational_left_content_body {
  height: calc(100% - 50px);
  padding-bottom: 40px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
/*webkit内核*/
.operational_left_content_body::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
/*o内核*/
.operational_left_content_body .-o-scrollbar {
  -moz-appearance: none !important;
  background: rgba(0, 255, 0, 0) !important;
}
/*IE10,IE11,IE12*/
.operational_left_content_body {
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

.operational_nav {
  width: 220px;
  padding-left: 20px;
  text-align: left;
}
.operational_nav .el-row {
  margin-bottom: 12px;
}
.operational_nav a {
  font-size: 14px;
  color: #333;
  text-decoration: none;
}
.operational_nav .avtive_link {
  color: #ff6123;
}

/* 一周用户活跃情况开始 */
.hebdomad_user_active_body,
.TV_live_body,
.main_programa_body {
  height: 400px;
}

.hebdomad_dibble_seeding_body,
.hebdomad_live_data_body,
.thematic_data_body {
  height: 700px;
}
.hebdomad_thermodynamic_body,
.types_programmes_body,
.local_programs_play_body,
.CCTV_channel_body,
.thematic_data_trend_body {
  height: 500px;
}
.local_channel_body {
  height: 850px;
}
.recommended_column_body {
  height: 100%;
}
.thematic_data_trend_body {
  padding-bottom: 24px;
}
</style>
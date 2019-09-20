<template>
  <div class="height_auto Operational_Week">
    <!-- 移动运营数据周报开始 -->
    <el-row class="OperationalWeekReport">
      <!-- 左侧内容开始 -->
      <el-col class="height_auto operational_left_content">
        <el-row class="periodic_report_title">移动运营数据周报</el-row>
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
                  <el-tab-pane label="分类" name="classify">
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
                  <el-tab-pane label="应用" name="apply" lazy>应用</el-tab-pane>
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
            <el-row class="thematic_data_trend_body back_white">
              <el-col class="height_auto" :span="24">
                <thematic-data-trend-chart :lineData="specialTrendData2"></thematic-data-trend-chart>
              </el-col>
            </el-row>
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
import TypeProgramChart from "@/views/backcoms/G_TVuserviewingmonthreport/TypeProgramChart"  //柱状图加折线图图表组件
import TypeProgramChartBig from "@/views/backcoms/OperationalWeekReport/TypeProgramChartBig"  //柱状图加折线图图表组件
import BarChartSingle from '@/views/backcoms/commoncomponents/BarChartSingle'  //单坐标柱状图组件
import ThreeBasedUserView from "@/views/backcoms/OperationalWeekReport/ThreeBasedUserView"  //柱状图加折线图图表组件
import ManyPieChart3 from "@/views/backcoms/OperationalWeekReport/ManyPieChart3"  //柱状图加折线图图表组件
import TypesProgrammesPlay from "@/views/backcoms/OperationalWeekReport/TypesProgrammesPlay"  //TOP排名（柱状图列表）
import LiveViewBehaviorAnalysis from "@/views/backcoms/G_TVuserviewingmonthreport/LiveViewBehaviorAnalysis"  //TOP排名（柱状图列表）
import SmoothLineChart from "@/views/backcoms/commoncomponents/SmoothLineChart"  //平滑曲线折线图组件
import RecommendColumnWeekData from "@/views/backcoms/OperationalWeekReport/RecommendColumnWeekData"  //推荐栏目一周数据概览组件
import PieCharts from "@/views/backcoms/commoncomponents/PieCharts"  //公用饼图
import LineChartSingle from '@/views/backcoms/commoncomponents/LineChartSingle'  //单数据折线图组件（新增用户概览）
import ThematicDataTrendChart from "@/views/backcoms/OperationalWeekReport/ThematicDataTrendChart"  //一周专题数据走势折线组件

export default {
  name: 'OperationalWeekReport',  // 移动运营数据周报
  components: {
    "type-program-chart": TypeProgramChart,
    "type-program-chart-big": TypeProgramChartBig,
    'bar-chart-single': BarChartSingle,
    "three-based-user-view": ThreeBasedUserView,
    "many-pie-chart3": ManyPieChart3,
    "types-programmes-play": TypesProgrammesPlay,
    "live-view-behavior-analysis": LiveViewBehaviorAnalysis,
    "smooth-line-chart": SmoothLineChart,
    "recommend-column-week-data": RecommendColumnWeekData,
    "pie-charts": PieCharts,
    "line-chart-single": LineChartSingle,
    "thematic-data-trend-chart": ThematicDataTrendChart
  },
  data() {
    return {
      activeName: 'classify',  //推荐栏目Tab标签默认选中
      //周末用户总量与一周开机率
      userNumAddPowerData: {
        title: '周末用户总量与一周开机率',
        id: 'userNumAddPower',
        color: ["#5B9BD4", "#FFC000", "#EC7C30"],
        data: [
          ['product', '在册用户数（万户）', '开机用户数（万户）', '开机率'],
          ['0520-0526', 113.4, 54.4, 48.0],
          ['0527-0602', 116.2, 55.9, 48.1],
        ]
      },
      // 每日开机率走势
      dailyOperatingRateData: {
        title: '每日开机率走势',
        id: 'dailyOperatingRate',
        color: ["#5B9BD4", "#FFC000", "#EC7C30"],
        data: [
          ['product', '在册用户数（万户）', '开机用户数（万户）', '开机率'],
          ['5月27日', 113.8, 27.6, 24.3],
          ['5月28日', 114.2, 27.0, 23.7],
          ['5月29日', 114.6, 26.3, 22.9],
          ['5月30日', 114.9, 24.9, 21.7],
          ['5月31日', 115.3, 27.1, 23.5],
          ['6月1日', 115.7, 27.7, 23.9],
          ['6月2日', 116.1, 26.8, 23.1],
        ]
      },

      //一周总体观看数据
      hebdomadViewNumData: {
        title: '一周总体观看数据',
        id: 'hebdomadViewNum',
        color: ["#5B9BD4", "#FFC000", "#EC7C30"],
        data: [
          ['product', '直播', '点播', '回看'],
          ['观看用户数（万户）', 32.2, 41.4, 3.6],
          ['观看次数（万次）', 661.0, 1096.7, 13.9],
          ['观看时长（万小时）', 502.6, 1430.1, 11.9]
        ]
      },
      // 三大基础功能观看用户数每日走势（万户）
      threeBasedUserViewData: {
        title: "三大基础功能观看用户数每日走势（万户）",
        id: "threeBasedUserView",
        color: ["#6FAC46", "#5B9BD4", "#A6A6A6", "#FFC000"],
        data: [
          ['product', '5月27日', '5月28日', '5月29日', '5月30日', '6月1日', '6月2日'],
          ['直播', 13.1, 12.2, 9.5, 14.8, 14.6, 14.6],
          ['点播', 27.3, 21.0, 20.2, 22.9, 24, 24.9],
          ['开机用户数', 28, 27, 26.3, 26, 27, 28.2],
          ['回看', 0.9, 0.9, 0.8, 0.7, 1.2, 1.1],
        ]
      },

      // 一周热力数据概览
      pageClickNumData: {
        title: "",
        id: 'pageClickNum',
        color: ["#EC7C30", "#F4B083", "#FFC000", "#FFD966", "#5B9BD4", "#6FAC46", "#A9D18E", "#FFCCCC", "#BEBEBE", "#E7E6E6", "#E7E6E6"],
        content: [
          {
            title: "页面点击次数",
            data: [
              { value: 1100, name: '推荐' },
              { value: 610, name: '电影' },
              { value: 548, name: '热剧' },
              { value: 535, name: '电视' },
              { value: 410, name: '少儿' },
              { value: 348, name: '动漫' },
              { value: 235, name: '分类' },
              { value: 410, name: '综艺' },
              { value: 148, name: '游戏' },
              { value: 110, name: '纪实' },
              { value: 248, name: '体育' },
            ],
          },
          {
            title: "页面点击用户数",
            data: [
              { value: 1035, name: '推荐' },
              { value: 510, name: '电影' },
              { value: 448, name: '热剧' },
              { value: 535, name: '电视' },
              { value: 410, name: '少儿' },
              { value: 348, name: '动漫' },
              { value: 235, name: '分类' },
              { value: 410, name: '综艺' },
              { value: 248, name: '游戏' },
              { value: 110, name: '纪实' },
              { value: 148, name: '体育' },
            ],
          }
        ],
      },
      // 一周热力数据柱状图和折线图数据
      hebdomadHotData: {
        title: '',
        id: 'hebdomadHot',
        color: ["#FFC000", "#5B9BD4", "#EC7C30"],
        data: [
          ['product', '0502-0226', '0527-0602', '环比'],
          ['访问用户数', 234.2, 229.1, -2.2],
          ['访问次数', 1942.3, 1956.9, 0.8],
          ['页面点击用户数', 201.9, 193.2, -4.3],
          ['页面点击次数', 1419.1, 1332.2, -6.1],
          ['页面播放次数', 1122.6, 985.5, -12.2],
          ['页面播放时长', 1516.6, 1258.9, -17.0],
        ]
      },

      //一周整体点播数据
      hebdomadDibbleSeedingData: {
        title: '一周整体点播数据',
        id: 'hebdomadDibbleSeeding',
        color: ["#FFC000", "#5B9BD4"],
        data: [
          ['product', '0520-0526', '0527-0602'],
          ['点播用户数（万户）', 42.2, 41.4],
          ['点播次数（万次）', 1152.3, 1096.7],
          ['点播时长（万小时）', 1152.2, 1430.1]
        ]
      },
      // 一周节目点播TOP15
      hebdomadDibbleSeedingTOPData: {
        title: "一周节目点播TOP15（万次）",
        id: 'hebdomadDibbleSeedingTOP',
        color: ["#5B9BD4", '#CBC9C9'],
        data: [
          ['product', '0527-0602', '0520-0526'],
          ['（电视剧）封神演义', 12.8, 12.0],
          ['（电视剧）新白娘子传奇2019', 13.1, 15.5],
          ['（电影）飞驰人生', 14.0, 12.6],
          ['（电视剧）青春斗', 15.0, 14.2],
          ['（少儿）猪猪侠之竞球小英雄第二部', 16.2, 16.7],
          ['（少儿）熊出没之探险日记 第二季', 17.9, 16.1],
          ['（电视剧）招摇', 18.8, 18.0],
          ['（电视剧）黄河英雄', 19.1, 17.5],
          ['（电视剧）夜空中最闪亮的星', 20.0, 18.6],
          ['（综艺）王牌对王牌 第四季', 20.0, 17.2],
          ['（少儿）汪汪队立大功 第四季', 20.2, 16.7],
          ['（电影）狂暴凶狮', 20.4, 17.3],
          ['（通灵妃）通灵妃', 20.8, 17.6],
          ['湖南卫视（高清）', 20.8, 17.2],
          ['（电影）绿毛怪格林奇（原声版）', 21.4, 19.0]
        ]
      },

      // 点播用户数
      dibbleSeedingUserNumData: {
        title: "点播用户数（万户）",
        id: 'dibbleSeedingUserNum',
        color: ["#A9D18E", '#D6D1D1'],
        data: [
          ['product', '0527-0602', '0520-0526'],
          ['资讯', 5.3, 5.0],
          ['体育', 5.8, 5.6],
          ['音乐', 8.5, 9.5],
          ['纪实', 10.8, 10.0],
          ['综艺', 30.2, 30.1],
          ['动漫', 62.2, 60.7],
          ['游戏', 110.0, 114.2],
          ['热剧', 123.0, 128.6],
          ['电影', 149.1, 152.5],
          ['少儿', 222.8, 225.0],
        ]
      },
      // 点播次数
      dibbleSeedingNumData: {
        title: "点播次数（万次）",
        id: 'dibbleSeedingNum',
        color: ["#5B9BD4", '#D6D1D1'],
        data: [
          ['product', '0527-0602', '0520-0526'],
          ['资讯', 5.3, 5.0],
          ['体育', 5.8, 5.6],
          ['音乐', 8.5, 9.5],
          ['纪实', 10.8, 10.0],
          ['综艺', 30.2, 30.1],
          ['动漫', 62.2, 60.7],
          ['游戏', 110.0, 114.2],
          ['热剧', 123.0, 128.6],
          ['电影', 149.1, 152.5],
          ['少儿', 222.8, 225.0],
        ]
      },
      // 点播时长
      dibbleSeedingDurationData: {
        title: "点播时长（万小时）",
        id: 'dibbleSeedingDuration',
        color: ["#FFC000", '#D6D1D1'],
        data: [
          ['product', '0527-0602', '0520-0526'],
          ['资讯', 5.3, 5.0],
          ['体育', 5.8, 5.6],
          ['音乐', 8.5, 9.5],
          ['纪实', 10.8, 10.0],
          ['综艺', 30.2, 30.1],
          ['动漫', 62.2, 60.7],
          ['游戏', 110.0, 114.2],
          ['热剧', 123.0, 128.6],
          ['电影', 149.1, 152.5],
          ['少儿', 222.8, 225.0],
        ]
      },

      // 主要栏目点播次数（万次）
      mainProgramaPlayData: {
        title: '',
        id: 'mainProgramaPlay',
        color: ["#CBC9C9", "#5B9BD4", "#EC7C30"],
        data: [
          ['product', '0502-0226', '0527-0602', '环比'],
          ['少儿', 234.2, 229.1, -2.2],
          ['电影', 1942.3, 1956.9, 0.8],
          ['热剧', 201.9, 193.2, -4.3],
          ['综艺', 1419.1, 1332.2, -6.1],
          ['游戏', 1122.6, 985.5, -12.2],
          ['纪实', 1516.6, 1258.9, -17.0],
          ['体育', 234.2, 229.1, -2.2],
          ['分类', 1942.3, 1956.9, 0.8],
          ['推荐', 201.9, 193.2, -4.3],
          ['点视', 1419.1, 1332.2, -6.1],
          ['动漫', 1122.6, 985.5, -12.2],
          ['开机次数', 1516.6, 1258.9, -17.0],
        ]
      },

      //本土原创节目一周点播数据
      localProgramsPlayData: {
        title: '本土原创节目一周点播数据',
        id: 'localProgramsPlay',
        color: ["#FFC000", "#5B9BD4"],
        data: [
          ['product', '0520-0526', '0527-0602'],
          ['点播用户数（万户）', 24400, 25157],
          ['点播次数（万次）', 31392, 31653],
          ['点播时长（万小时）', 23292.4, 21224.4]
        ]
      },
      // 点播排行（次）
      localProgramsPlayTOPData: {
        title: "点播排行（次）",
        id: 'localProgramsPlayTOP',
        color: ["#5B9BD4", '#CBC9C9'],
        data: [
          ['product', '0527-0602', '0520-0526'],
          ['（电视剧）封神演义', 10.8, 10.0],
          ['（电视剧）新白娘子传奇2019', 13.1, 12.5],
          ['（电影）飞驰人生', 14.0, 12.6],
          ['（电视剧）青春斗', 15.0, 14.2],
          ['（少儿）猪猪侠之竞球小英雄第二部', 16.2, 16.7],
          ['（少儿）熊出没之探险日记 第二季', 17.9, 16.1],
          ['（电视剧）招摇', 18.8, 18.0],
          ['（电视剧）黄河英雄', 19.1, 17.5],
          ['（电视剧）夜空中最闪亮的星', 20.0, 18.6],
          ['（综艺）王牌对王牌 第四季', 20.0, 17.2],
        ]
      },

      //一周整体直播收视数据
      hebdomadLiveData: {
        title: '一周整体直播收视数据',
        id: 'hebdomadLive',
        color: ["#FFC000", "#5B9BD4"],
        data: [
          ['product', '0520-0526', '0527-0602'],
          ['直播收视用户数（万户）', 24400, 25157],
          ['直播收视次数（万次）', 31392, 31653],
          ['直播收视时长（万小时）', 23292.4, 21224.4]
        ]
      },
      // 一周直播节目TOP15（万小时）
      hebdomadLiveTOPData: {
        title: "一周直播节目TOP15（万小时）",
        id: 'hebdomadLiveTOP',
        color: ["#5B9BD4", '#CBC9C9'],
        data: [
          ['product', '0527-0602', '0520-0526'],
          ['（电视剧）封神演义', 12.8, 12.0],
          ['（电视剧）新白娘子传奇2019', 13.1, 15.5],
          ['（电影）飞驰人生', 14.0, 12.6],
          ['（电视剧）青春斗', 15.0, 14.2],
          ['（少儿）猪猪侠之竞球小英雄第二部', 16.2, 16.7],
          ['（少儿）熊出没之探险日记 第二季', 17.9, 16.1],
          ['（电视剧）招摇', 18.8, 18.0],
          ['（电视剧）黄河英雄', 19.1, 17.5],
          ['（电视剧）夜空中最闪亮的星', 20.0, 18.6],
          ['（综艺）王牌对王牌 第四季', 20.0, 17.2],
          ['（少儿）汪汪队立大功 第四季', 20.2, 16.7],
          ['（电影）狂暴凶狮', 20.4, 17.3],
          ['（通灵妃）通灵妃', 20.8, 17.6],
          ['湖南卫视（高清）', 20.8, 17.2],
          ['（电影）绿毛怪格林奇（原声版）', 21.4, 19.0]
        ]
      },

      //分组频道直播用户数（万户）
      channelLiveUserNumData: {
        title: '分组频道直播用户数（万户）',
        id: 'channelLiveUserNum',
        color: ["#CBC9C9", "#A9D18E"],
        data: [
          ['product', '0520-0526', '0527-0602'],
          ['央视', 55.5, 53.6],
          ['卫视', 110.7, 108.1],
          ['地方', 62.4, 61.4],
          ['轮播', 15.5, 15.4]
        ]
      },
      //分组频道直播次数（万次）
      channelLiveTimesData: {
        title: '分组频道直播次数（万次）',
        id: 'channelLiveTimes',
        color: ["#CBC9C9", "#5B9BD4"],
        data: [
          ['product', '0520-0526', '0527-0602'],
          ['央视', 55.5, 53.6],
          ['卫视', 110.7, 108.1],
          ['地方', 62.4, 61.4],
          ['轮播', 15.5, 15.4]
        ]
      },
      //分组频道直播收视时长（万小时）
      channelLiveDurationData: {
        title: '分组频道直播收视时长（万小时）',
        id: 'channelLiveDuration',
        color: ["#CBC9C9", "#FFC000"],
        data: [
          ['product', '0520-0526', '0527-0602'],
          ['央视', 55.5, 53.6],
          ['卫视', 110.7, 108.1],
          ['地方', 62.4, 61.4],
          ['轮播', 15.5, 15.4]
        ]
      },

      //央视频道及节目收视排名 数据
      // 直播频道排名（万户）
      liveChannelTOPData: {
        title: "直播频道排名（万户）",
        id: 'liveChannelTOP',
        color: ["#A9D18E", '#CBC9C9'],
        data: [
          ['product', '0527-0602', '0520-0526'],
          ['CCTV-11 戏曲', 2.5, 2.7],
          ['CCTV-2 财经', 3.6, 3.8],
          ['CCTV-10 科教', 4.7, 5.1],
          ['CCTV-15 音乐', 4.6, 4.7],
          ['CCTV-14 少儿', 4.8, 5.1],
          ['CCTV-7 军事农业', 5.1, 5.1],
          ['CCTV-4 中文国际', 6.4, 6.3],
          ['CCTV-12 社会与法', 5.6, 5.7],
          ['CCTV-13 新闻', 7.9, 7.9],
          ['CCTV-1 综合', 8.4, 9.2]
        ]
      },
      //直播节目TOP10（万小时）
      liveProgramTOPData: {
        title: '直播节目TOP10（万小时）',
        id: 'liveProgramTOP',
        color: ["#CBC9C9", "#5B9BD4"],
        data: [
          ['product', '0520-0526', '0527-0602'],
          ['新闻直播间\nCCTV-13', 55.5, 53.6],
          ['中国新闻\nCCTV-4', 110.7, 108.1],
          ['普法栏目剧\nCCTV-12', 62.4, 61.4],
          ['初婚\nCCTV-1', 15.5, 15.4],
          ['精彩音乐会\nCCTV-15', 55.5, 53.6],
          ['朝闻天下\nCCTV-13', 110.7, 108.1],
          ['麦香\nCCTV-1', 62.4, 61.4],
          ['共同关注\nCCTV-13', 15.5, 15.4],
          ['红七军\nCCTV-4', 62.4, 61.4],
          ['新闻联播\nCCTV-13', 15.5, 15.4],
        ]
      },

      // 本地频道收视规模排名（万户
      localChannelTOPData: {
        title: "本地频道收视规模排名（万户）",
        id: 'localLiveTOP',
        color: ["#A9D18E", '#CBC9C9'],
        data: [
          ['product', '0527-0602', '0520-0526'],
          ['黔西南-公共', 4.8, 4.0],
          ['贵阳-5 旅游生活频道', 5.8, 5.0],
          ['黔西南-综合', 6.8, 6.0],
          ['六盘水-1', 7.8, 7.0],
          ['贵州移动电视', 8.8, 8.0],
          ['六盘水-2', 9.8, 9.0],
          ['动画乐园', 10.8, 10.0],
          ['都市剧场', 12.8, 12.0],
          ['贵阳-1 新闻综合频道', 13.1, 15.5],
          ['贵阳-2 经济生活频道', 14.0, 12.6],
          ['海外佳片', 15.0, 14.2],
          ['贵阳-3 法制频道', 16.2, 16.7],
          ['谍战剧场', 17.9, 16.1],
          ['贵州-7 经济频道', 18.8, 18.0],
          ['贵州-6 科教健康频道', 19.1, 17.5],
          ['贵阳-4 都市频道', 20.0, 18.6],
          ['华语影院', 20.0, 17.2],
          ['贵州-5 法制频道', 20.2, 16.7],
          ['贵州-4 大众生活频道', 20.4, 17.3],
          ['贵州-3 影视文艺频道', 20.8, 17.6],
          ['贵州-2 公共频道', 20.8, 17.2],
          ['贵州卫视', 21.4, 19.0]
        ]
      },
      //本地自办节目TOP5（万小时）
      localProgramTOPData: {
        title: '本地自办节目TOP5（万小时）',
        id: 'localProgramTOP',
        color: ["#CBC9C9", "#5B9BD4"],
        data: [
          ['product', '0520-0526', '0527-0602'],
          ['百姓关注\n贵州-2', 55.5, 53.6],
          ['贵州新闻联播\n贵州卫视', 110.7, 108.1],
          ['第二放映室\n贵州-2', 62.4, 61.4],
          ['谢谢你来了\n贵州-4', 15.5, 15.4],
          ['天天来帮忙\n贵州-2', 55.5, 53.6],
        ]
      },

      //卫视频道及节目收视排名 
      // 直播频道TOP10（万户）
      satelliteChannelTOPData: {
        title: "直播频道TOP10（万户）",
        id: 'satelliteChannelTOP',
        color: ["#A9D18E", '#CBC9C9'],
        data: [
          ['product', '0527-0602', '0520-0526'],
          ['河南卫视', 2.5, 2.7],
          ['安徽卫视', 3.6, 3.8],
          ['广东卫视', 4.7, 5.1],
          ['重庆卫视', 4.6, 4.7],
          ['江西卫视', 4.8, 5.1],
          ['云南卫视', 5.1, 5.1],
          ['山东卫视', 6.4, 6.3],
          ['江苏卫视', 5.6, 5.7],
          ['浙江卫视', 7.9, 7.9],
          ['湖南卫视', 8.4, 9.2]
        ]
      },
      //直播节目TOP10（万小时）
      satelliteLiveProgramTOPData: {
        title: '直播节目TOP10（万小时）',
        id: 'satelliteLiveProgramTOP',
        color: ["#CBC9C9", "#5B9BD4"],
        data: [
          ['product', '0520-0526', '0527-0602'],
          ['情迷睡美人\n湖南卫视', 55.5, 53.6],
          ['筑梦情缘\n湖南卫视', 110.7, 108.1],
          ['我的真朋友\n浙江卫视', 62.4, 61.4],
          ['非诚勿扰\n江苏卫视', 15.5, 15.4],
          ['第二次人生\n湖南卫视', 55.5, 53.6],
          ['向往的生活湘西篇\n湖南卫视', 110.7, 108.1],
          ['奔跑吧\n浙江卫视', 62.4, 61.4],
          ['封神演义\n湖南卫视', 15.5, 15.4],
          ['激战\n重庆卫视', 62.4, 61.4],
          ['新闻大求真\n湖南卫视', 15.5, 15.4],
        ]
      },

      // 一周轮播频道收视数据（万户）
      carouselChannelData: {
        title: '一周轮播频道收视数据（万户）',
        id: 'carouselChannel',
        color: ["#FFC000", "#5B9BD4", "#EC7C30"],
        data: [
          ['product', '0502-0226', '0527-0602', '增率'],
          ['华语影院', 5.2, 5.1, -2.2],
          ['谍战剧场', 4.6, 3.8, -16.5],
          ['海外佳片', 1.9, 2.8, 49.3],
          ['都市剧场', 2.3, 2.1, -8.3],
          ['动画乐园', 1.6, 1.6, 3.2],
        ]
      },

      //轮播频道每日收视走势（户）
      originalProgramsDemandData: {
        title: '轮播频道每日收视走势（户）',
        id: 'originalProgramsDemand',
        color: ["#6FAC46", "#F7BCBC", "#5B9BD4", "#FFC000", "#EC7C30"],
        data: [
          ['product', '5月27日', '5月28日', '5月29日', '5月30日', '5月31日', '6月1日', '6月2日'],
          ['谍战剧场', 15172, 13915, 13517, 11567, 10245, 11957, 13657],
          ['华语影院', 12657, 12293, 11627, 11567, 8078, 7925, 8580],
          ['海外佳片', 4522, 4700, 5600, 5050, 5700, 5800, 6200],
          ['都市剧场', 8139, 5815, 5954, 5075, 6215, 6985, 5862],
          ['动画乐园', 3314, 3452, 3165, 3031, 3458, 3518, 3350]
        ]
      },

      //分类页一周热力数据
      classifyColumnData: {
        //一周热力数据
        weeklyThermodynamic: {
          title: '分类页一周热力数据',
          id: 'classifyWeeklyThermodynamic',
          color: ["#FFC000", "#5B9BD4", "#EC7C30"],
          data: [
            ['product', '0502-0226', '0527-0602', '增率'],
            ['访问用户数', 49.3, 49.1, -0.5],
            ['访问次数', 659.3, 660.6, -0.2],
            ['页面点击\n用户数', 39.4, 37.8, -4.4],
            ['页面点击次数', 338.3, 312.1, -7.3],
            ['页面播放次数', 141.6, 123.6, -13.2],
            ['页面播放时长', 216.6, 176.6, -18.2],
            ['开机次数', 182.6, 187.6, 2.5],
          ]
        },
        //按钮点击排行（万次）
        buttonClickTOPData: {
          title: "分类页按钮点击排行（万次）",
          id: 'classifyButtonClickTOP',
          color: ["#5B9BD4", '#CBC9C9'],
          data: [
            ['product', '0527-0602', '0520-0526'],
            ['推荐帮助', 1.4, 1.5],
            ['竖图1', 1.5, 1.6],
            ['横图', 2.6, 3.2],
            ['百姓关注', 3.0, 3.2],
            ['VIP限免', 4.5, 5.0],
            ['竖图2', 5.9, 7.1],
            ['点我换一换', 5.4, 6.0],
            ['竖图3', 7.4, 7.0],
            ['二屏', 9.4, 10.6],
            ['看电视', 16.0, 17.2],
            ['推荐个人中心', 23.4, 25.4],
            ['推荐搜索', 33.7, 36.1],
            ['历史记录', 70.6, 75.1],
            ['三屏', 96.8, 104.2],
            ['推荐页播放小窗口', 119.4, 129.0]
          ]
        },
        //栏目各按钮点击次数
        columnButtonClickNum: {
          title: "分类页各按钮点击次数",
          data: [
            [
              { classify: '搜索', title: 'box0_0', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { classify: '个人中心', title: 'box0_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { classify: '帮助', title: 'box0_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
            ],
            [
              { title: 'box1_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box1_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
            ],
            [
              { title: 'box2_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box2_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box2_3', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
            ],
            [
              { title: 'box3_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box3_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box3_3', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box3_4', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box3_5', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
            ],
            [
              { title: 'box4_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box4_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box4_3', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box4_4', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
            ]
          ],
        },
        //部分按钮每日走势（次）
        someButtonDayTrendData: {
          title: '分类页部分按钮每日走势（次）',
          id: 'classifySomeButtonDayTrend',
          color: ["#5B9BD4", "#FFC000", "#A6A6A6", "#EC7C30", "#6FAC46"],
          data: [
            ['product', '周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            ['box3_0', 15172, 13915, 13517, 11567, 10245, 11957, 13657],
            ['box3_1', 12657, 12293, 11627, 11567, 8078, 7925, 8580],
            ['box5_1', 4522, 4700, 5600, 5050, 5700, 5800, 6200],
            ['box3_2', 8139, 5815, 5954, 5075, 6215, 6985, 5862],
            ['box6_3', 3314, 3452, 3165, 3031, 3458, 3518, 3350]
          ]
        },
      },

      //电视页一周热力数据television
      televisionColumnData: {
        //一周热力数据
        weeklyThermodynamic: {
          title: '电视页一周热力数据',
          id: 'televisionWeeklyThermodynamic',
          color: ["#FFC000", "#5B9BD4", "#EC7C30"],
          data: [
            ['product', '0502-0226', '0527-0602', '增率'],
            ['访问用户数', 49.3, 49.1, -0.5],
            ['访问次数', 659.3, 660.6, -0.2],
            ['页面点击\n用户数', 39.4, 37.8, -4.4],
            ['页面点击次数', 338.3, 312.1, -7.3],
            ['页面播放次数', 141.6, 123.6, -13.2],
            ['页面播放时长', 216.6, 176.6, -18.2],
            ['开机次数', 182.6, 187.6, 2.5],
          ]
        },
        //按钮点击排行（万次）
        buttonClickTOPData: {
          title: "电视页按钮点击排行（万次）",
          id: 'televisionButtonClickTOP',
          color: ["#5B9BD4", '#CBC9C9'],
          data: [
            ['product', '0527-0602', '0520-0526'],
            ['推荐帮助', 1.4, 1.5],
            ['竖图1', 1.5, 1.6],
            ['横图', 2.6, 3.2],
            ['百姓关注', 3.0, 3.2],
            ['VIP限免', 4.5, 5.0],
            ['竖图2', 5.9, 7.1],
            ['点我换一换', 5.4, 6.0],
            ['竖图3', 7.4, 7.0],
            ['二屏', 9.4, 10.6],
            ['看电视', 16.0, 17.2],
            ['推荐个人中心', 23.4, 25.4],
            ['推荐搜索', 33.7, 36.1],
            ['历史记录', 70.6, 75.1],
            ['三屏', 96.8, 104.2],
            ['推荐页播放小窗口', 119.4, 129.0]
          ]
        },
        //栏目各按钮点击次数
        columnButtonClickNum: {
          title: "电视页各按钮点击次数",
          data: [
            [
              { classify: '搜索', title: 'box0_0', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { classify: '个人中心', title: 'box0_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { classify: '帮助', title: 'box0_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
            ],
            [
              { title: 'box1_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box1_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
            ],
            [
              { title: 'box2_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box2_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box2_3', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
            ],
            [
              { title: 'box3_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box3_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box3_3', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box3_4', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box3_5', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
            ],
            [
              { title: 'box4_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box4_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box4_3', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box4_4', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
            ]
          ],
        },
        //部分按钮每日走势（次）
        someButtonDayTrendData: {
          title: '电视页部分按钮每日走势（次）',
          id: 'televisionSomeButtonDayTrend',
          color: ["#5B9BD4", "#FFC000", "#A6A6A6", "#EC7C30", "#6FAC46"],
          data: [
            ['product', '周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            ['box3_0', 15172, 13915, 13517, 11567, 10245, 11957, 13657],
            ['box3_1', 12657, 12293, 11627, 11567, 8078, 7925, 8580],
            ['box5_1', 4522, 4700, 5600, 5050, 5700, 5800, 6200],
            ['box3_2', 8139, 5815, 5954, 5075, 6215, 6985, 5862],
            ['box6_3', 3314, 3452, 3165, 3031, 3458, 3518, 3350]
          ]
        },
      },

      //推荐页一周热力数据
      recommendColumnData: {
        //一周热力数据
        weeklyThermodynamic: {
          title: '推荐页一周热力数据',
          id: 'recommendWeeklyThermodynamic',
          color: ["#FFC000", "#5B9BD4", "#EC7C30"],
          data: [
            ['product', '0502-0226', '0527-0602', '增率'],
            ['访问用户数', 49.3, 49.1, -0.5],
            ['访问次数', 659.3, 660.6, -0.2],
            ['页面点击\n用户数', 39.4, 37.8, -4.4],
            ['页面点击次数', 338.3, 312.1, -7.3],
            ['页面播放次数', 141.6, 123.6, -13.2],
            ['页面播放时长', 216.6, 176.6, -18.2],
            ['开机次数', 182.6, 187.6, 2.5],
          ]
        },
        //按钮点击排行（万次）
        buttonClickTOPData: {
          title: "推荐页按钮点击排行（万次）",
          id: 'recommendButtonClickTOP',
          color: ["#5B9BD4", '#CBC9C9'],
          data: [
            ['product', '0527-0602', '0520-0526'],
            ['推荐帮助', 1.4, 1.5],
            ['竖图1', 1.5, 1.6],
            ['横图', 2.6, 3.2],
            ['百姓关注', 3.0, 3.2],
            ['VIP限免', 4.5, 5.0],
            ['竖图2', 5.9, 7.1],
            ['点我换一换', 5.4, 6.0],
            ['竖图3', 7.4, 7.0],
            ['二屏', 9.4, 10.6],
            ['看电视', 16.0, 17.2],
            ['推荐个人中心', 23.4, 25.4],
            ['推荐搜索', 33.7, 36.1],
            ['历史记录', 70.6, 75.1],
            ['三屏', 96.8, 104.2],
            ['推荐页播放小窗口', 119.4, 129.0]
          ]
        },
        //栏目各按钮点击次数
        columnButtonClickNum: {
          title: "推荐页各按钮点击次数",
          data: [
            [
              { classify: '搜索', title: 'box0_0', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { classify: '个人中心', title: 'box0_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { classify: '帮助', title: 'box0_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
            ],
            [
              { title: 'box1_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box1_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
            ],
            [
              { title: 'box2_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box2_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box2_3', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
            ],
            [
              { title: 'box3_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box3_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box3_3', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box3_4', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box3_5', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
            ],
            [
              { title: 'box4_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box4_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box4_3', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
              { title: 'box4_4', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
            ]
          ],
        },
        //部分按钮每日走势（次）
        someButtonDayTrendData: {
          title: '推荐页分按钮每日走势（次）',
          id: 'recommendSomeButtonDayTrend',
          color: ["#5B9BD4", "#FFC000", "#A6A6A6", "#EC7C30", "#6FAC46"],
          data: [
            ['product', '周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            ['box3_0', 15172, 13915, 13517, 11567, 10245, 11957, 13657],
            ['box3_1', 12657, 12293, 11627, 11567, 8078, 7925, 8580],
            ['box5_1', 4522, 4700, 5600, 5050, 5700, 5800, 6200],
            ['box3_2', 8139, 5815, 5954, 5075, 6215, 6985, 5862],
            ['box6_3', 3314, 3452, 3165, 3031, 3458, 3518, 3350]
          ]
        },
      },

      //模块五 专题热力数 据及运营分析
      // 一周专题数据概览（次）
      thematicData: {
        title: "一周专题数据概览（次）",
        id: 'thematic',
        color: ["#5B9BD4", '#CBC9C9'],
        data: [
          ['product', '0527-0602', '0520-0526'],
          ['（电视剧）封神演义', 12.8, 12.0],
          ['（电视剧）新白娘子传奇2019', 13.1, 15.5],
          ['（电影）飞驰人生', 14.0, 12.6],
          ['（电视剧）青春斗', 15.0, 14.2],
          ['（少儿）猪猪侠之竞球小英雄第二部', 16.2, 16.7],
          ['（少儿）熊出没之探险日记 第二季', 17.9, 16.1],
          ['（电视剧）招摇', 18.8, 18.0],
          ['（电视剧）黄河英雄', 19.1, 17.5],
          ['（电视剧）夜空中最闪亮的星', 20.0, 18.6],
          ['（综艺）王牌对王牌 第四季', 20.0, 17.2],
          ['（少儿）汪汪队立大功 第四季', 20.2, 16.7],
          ['（电影）狂暴凶狮', 20.4, 17.3],
          ['（通灵妃）通灵妃', 20.8, 17.6],
          ['湖南卫视（高清）', 20.8, 17.2],
          ['（电影）绿毛怪格林奇（原声版）', 21.4, 19.0]
        ]
      },
      //一周专题策划情况
      monographicPlanData: {
        title: "一周专题策划情况",
        id: 'monographicPlan',
        color: ["#EC7C30", "#FFC000", "#5B9BD4", "#6FAC46", "#A9D18E", "#FFD966", "#F8CAAC", "#FFCCCC", "#626262"],
        data: [
          { value: 735, name: '电视剧' },
          { value: 510, name: '推荐' },
          { value: 448, name: '电影' },
          { value: 335, name: '动漫' },
          { value: 210, name: '纪实' },
          { value: 210, name: '游戏' },
          { value: 135, name: '少儿' },
          { value: 100, name: '体育' },
          { value: 100, name: '综艺' }
        ],
      },

      // 一周专题数据走势（动漫/热剧/少儿/电影专题点击数据走势）
      specialTrendData1: {
        title: "动漫/热剧/少儿/电影专题点击数据走势（次）",
        id: "specialTrend1",
        color: ["#DB9B9B", "#6FAC46", "#5B9BD4", "#FFC000", "#EC7C30", "#622C0A", "#4ADBC7", "#2C55E3", "#8B8989"],
        data: [
          ['product', '周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          ['探剧社第六期', '-', '-', '-', '-', 12152, 17568, 19831],
          ['致敬', 7053, 7001, 6895, 6520, 6752, 7150, 6980],
          ['此情可待成追忆', 2742, 2602, 2172, 2069, 2148, 2260, 2105],
          ['白玉兰奖', 7053, 6895, 6520, 6540, 6685, 6520, 6423],
          ['怪兽世界大对决', '-', '-', '-', 19360, 36541, 36852, 32210],
          ['神灯许愿专题', 19520, 18953, 9865],
          ['童心萌动 动漫回忆集', 7850, 7785, 7951, 7241, 7321, 7589, 8000],
          ['龙珠回味童年专题', '-', '-', '-', '-', 12452, 13254, 15210],
          ['萌趣星六一活动', 5240, 6542, 7683, 9142, 8652, 7652, 8752]
        ]
      },
      // 一周专题数据走势（推荐/体育/游戏/综艺/纪实专题点击数据走势）
      specialTrendData2: {
        title: "推荐/体育/游戏/综艺/纪实专题点击数据走势（次）",
        id: "specialTrend2",
        color: ["#DB9B9B", "#6FAC46", "#5B9BD4", "#FFC000", "#EC7C30", "#622C0A", "#4ADBC7", "#2C55E3", "#8B8989"],
        data: [
          ['product', '周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          ['探剧社第六期', '-', '-', '-', '-', 12152, 17568, 19831],
          ['致敬', 7053, 7001, 6895, 6520, 6752, 7150, 6980],
          ['此情可待成追忆', 2742, 2602, 2172, 2069, 2148, 2260, 2105],
          ['白玉兰奖', 7053, 6895, 6520, 6540, 6685, 6520, 6423],
          ['怪兽世界大对决', '-', '-', '-', 19360, 36541, 36852, 32210],
          ['神灯许愿专题', 19520, 18953, 9865],
          ['童心萌动 动漫回忆集', 7850, 7785, 7951, 7241, 7321, 7589, 8000],
          ['龙珠回味童年专题', '-', '-', '-', '-', 12452, 13254, 15210],
          ['萌趣星六一活动', 5240, 6542, 7683, 9142, 8652, 7652, 8752]
        ]
      },
    }
  },
  mounted() {
    $('.operational_left_content_body').scroll(function (event) {
      let scrollTopHeight = $('.operational_left_content_body').scrollTop()
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
        $(".anchor_link1").addClass("avtive_link").parent().siblings().children().removeClass("avtive_link")
      }
      if (1300 <= scrollTopHeight) {
        $(".anchor_link2").addClass("avtive_link").parent().siblings().children().removeClass("avtive_link")
      }
      if (3700 <= scrollTopHeight) {
        $(".anchor_link3").addClass("avtive_link").parent().siblings().children().removeClass("avtive_link")
      }
      if (7600 <= scrollTopHeight) {
        $(".anchor_link4").addClass("avtive_link").parent().siblings().children().removeClass("avtive_link")
      }
      if (9200 <= scrollTopHeight) {
        $(".anchor_link5").addClass("avtive_link").parent().siblings().children().removeClass("avtive_link")
      }
    })
  },
  methods: {
    //点击锚点实现左侧滚动
    goAnchor(selector) {
      let scrollDiv = document.querySelector('.operational_left_content_body')  //外层滚动容器元素
      var anchor = document.querySelector(selector)   // 参数为要跳转到的元素id
      scrollDiv.scrollTop = anchor.offsetTop
      $('.operational_nav a').on('click', function () {
        $(this).addClass("avtive_link").parent().siblings().children().removeClass("avtive_link")
      })
    }
  }
}
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
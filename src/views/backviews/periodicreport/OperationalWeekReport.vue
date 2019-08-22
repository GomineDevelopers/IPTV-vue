<template>
  <div class="height_auto">
    <!-- 运营数据周报开始 -->
    <el-row class="OperationalWeekReport">
      <!-- 左侧内容开始 -->
      <el-col class="height_auto operational_left_content">
        <el-row class="periodic_report_title">运营数据周报</el-row>
        <el-row class="operational_left_content_body">
          <!-- 一周用户活跃情况开始 -->
          <el-row class="marginbottom_14">
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

          <!-- 模块二 一周点播数据及运营分析开始-->
          <!-- 一周点播数据概览开始 -->
          <el-row class="marginbottom_14">
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
                <type-program-chart :chartData="mainProgramaPlayData"></type-program-chart>
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
          <el-row class="marginbottom_14">
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
              <el-col class="height_auto" :span="12">
                <live-view-behavior-analysis :barListData="liveChannelTOPData"></live-view-behavior-analysis>
              </el-col>
              <el-col class="height_auto" :span="12">
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
              <el-col class="height_auto" :span="12">
                <live-view-behavior-analysis :barListData="localChannelTOPData"></live-view-behavior-analysis>
              </el-col>
              <el-col class="height_auto" :span="12">
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
        </el-row>
      </el-col>
      <!-- 左侧内容结束 -->

      <!-- 右侧导航开始 -->
      <el-col class="operational_nav height_auto">
        <el-row>
          <a href="javascript:void(0)" class="avtive_link">G+TV一周整体数据概览</a>
        </el-row>
        <el-row>
          <a href="javascript:void(0)">一周点播数据及运营分析</a>
        </el-row>
        <el-row>
          <a href="javascript:void(0)">直播频道数据及运营分析</a>
        </el-row>
        <el-row>
          <a href="javascript:void(0)">各栏目热力数据及运营分析</a>
        </el-row>
        <el-row>
          <a href="javascript:void(0)">专题热力数 据及运营分析</a>
        </el-row>
      </el-col>
      <!-- 右侧导航结束 -->
    </el-row>
    <!-- 运营数据周报结束 -->
  </div>
</template>
<script>
import TypeProgramChart from "@/views/backcoms/G_TVuserviewingmonthreport/TypeProgramChart"  //柱状图加折线图图表组件
import BarChartSingle from '@/views/backcoms/commoncomponents/BarChartSingle'  //单坐标柱状图组件
import ThreeBasedUserView from "@/views/backcoms/OperationalWeekReport/ThreeBasedUserView"  //柱状图加折线图图表组件
import ManyPieChart3 from "@/views/backcoms/OperationalWeekReport/ManyPieChart3"  //柱状图加折线图图表组件
import TypesProgrammesPlay from "@/views/backcoms/OperationalWeekReport/TypesProgrammesPlay"  //TOP排名（柱状图列表）
import LiveViewBehaviorAnalysis from "@/views/backcoms/G_TVuserviewingmonthreport/LiveViewBehaviorAnalysis"  //TOP排名（柱状图列表）
import SmoothLineChart from "@/views/backcoms/commoncomponents/SmoothLineChart"  //平滑曲线折线图组件

export default {
  name: 'OperationalWeekReport',  //运营数据周报
  components: {
    "type-program-chart": TypeProgramChart,
    'bar-chart-single': BarChartSingle,
    "three-based-user-view": ThreeBasedUserView,
    "many-pie-chart3": ManyPieChart3,
    "types-programmes-play": TypesProgrammesPlay,
    "live-view-behavior-analysis": LiveViewBehaviorAnalysis,
    "smooth-line-chart": SmoothLineChart,
  },
  data() {
    return {
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

      // 轮播频道及节目收视排名
      carouselChannelData: {
        title: '直播节目TOP10（万小时）',
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
    }
  },
  mounted() {

  }
}
</script>
<style scoped>
.OperationalWeekReport {
  height: 870px;
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
}
.operational_nav {
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
.hebdomad_live_data_body {
  height: 700px;
}
.hebdomad_thermodynamic_body,
.types_programmes_body,
.local_programs_play_body,
.CCTV_channel_body {
  height: 500px;
}
.local_channel_body {
  height: 850px;
}
</style>
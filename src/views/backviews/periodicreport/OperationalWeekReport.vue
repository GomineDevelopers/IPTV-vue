<template>
  <div class="height_auto">
    <!-- 运营数据周报开始 -->
    <el-row class="OperationalWeekReport">
      <!-- 左侧内容开始 -->
      <el-col class="height_auto operational_left_content">
        <el-row class="periodic_report_title">运营数据周报</el-row>
        <!-- 一周用户活跃情况开始 -->
        <el-row class="operational_left_content_body">
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
                <bar-chart-single :chartData="clickNumData"></bar-chart-single>
              </el-col>
              <el-col class="height_auto" :span="12">
                <type-program-chart :chartData="dailyOperatingRateData"></type-program-chart>
              </el-col>
            </el-row>
          </el-row>
          <!-- 一周用户收视概览结束 -->
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

export default {
  name: 'OperationalWeekReport',  //运营数据周报
  components: {
    "type-program-chart": TypeProgramChart,
    'bar-chart-single': BarChartSingle,
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

      //各页面专区入口点击次数
      clickNumData: {
        title: '各页面专区入口点击次数',
        id: 'specialClickNum',
        color: ["#5B9BD4", "#FFC000", "#EC7C30"],
        data: [
          ['product', '推荐', '少儿包', '分类'],
          ['移动1.0', 4330, 13563, 3337],
          ['电信', 8300, 16457, 2330],
          ['联通', 8600, 17896, 1457]
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
  margin: 24px 0px;
  display: -webkit-flex;
  display: flex;
}
.operational_left_content {
  flex: 1;
  height: 100%;
}
.operational_left_content_body {
  height: calc(100% - 50px);
  padding-bottom: 30px;
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
.hebdomad_user_active_body {
  height: 400px;
}
</style>
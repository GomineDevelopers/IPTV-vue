<template>
  <div>
    <!-- 数据报告页面开始 -->
    <el-row class="periodic_report_body">
      <el-row class="periodic_report_title">专题专区数据报告</el-row>
      <el-row>
        <el-row class="model_title">
          <span class="title_border_left"></span>数据总览
        </el-row>
        <el-row class="back_white">
          <el-row class="special_data_total">
            <el-col :span="8" class="height_auto">
              <div class="ringlike_div flex">22.1万</div>
              <div class="chart_explain">
                小小福星”专区入口上线以来，
                <br />不去重累计获得
                <i class="special_data">17.5万用户</i>
                点击
                <i class="special_data">22.1</i>万次
              </div>
            </el-col>
            <el-col :span="8" class="height_auto">
              <div class="ringlike_div flex">3.6万</div>
              <div class="chart_explain">
                专区内节目累计点播量
                <i class="special_data">3.6万次</i>
              </div>
            </el-col>
            <el-col :span="8" class="height_auto">
              <div class="ringlike_div flex">4505</div>
              <div class="chart_explain">
                专区内节目累计点播时长
                <i class="special_data">4505小时</i>
              </div>
            </el-col>
          </el-row>
        </el-row>
      </el-row>
      <el-row class="special_click_data back_white">
        <el-row class="model_title">
          <span class="title_border_left"></span>入口点击情况
        </el-row>
        <el-row class="special_click_chart">
          <el-col :span="8" class="height_auto">
            <bar-chart-single :chartData="clickNumData"></bar-chart-single>
          </el-col>
          <el-col :span="8" class="height_auto">
            <pie-charts :chartData="pageProportionData"></pie-charts>
          </el-col>
          <el-col :span="8" class="height_auto">
            <pie-charts :chartData="operatorProportionData"></pie-charts>
          </el-col>
        </el-row>

        <!-- 图表的说明开始 -->
        <el-row class="chart_explain">
          <p>
            “小小福星”专区自6月24日各大平台正式上线，少儿、推荐、分类三大页面均有呈现。
            <br />整体而言，少儿页为专区入口贡献了最多的流量，推荐页其次。而电信推荐页由于推荐位较少的原因，专区入口无法得到最优位置，贡献反而小于分类页。
            <br />分运营商来看，其中移动1.0占比最高，但联通用户表现得更为踊跃。
          </p>
        </el-row>
        <!-- 图表的说明结束 -->

        <!-- 上下层图表块分割线开始 -->
        <div class="cut_off_rule"></div>
        <!-- 上下层图表块分割线开始 -->

        <!-- 入口点击情况第二模块开始 -->
        <el-row class="special_click_data2">
          <el-col :span="8">
            <smooth-line-chart :smoothLineData="recommendPageData"></smooth-line-chart>
          </el-col>
          <el-col :span="8">
            <smooth-line-chart :smoothLineData="childrenPageData"></smooth-line-chart>
          </el-col>
          <el-col :span="8">
            <smooth-line-chart :smoothLineData="classifyPageData"></smooth-line-chart>
          </el-col>
        </el-row>
        <!-- 入口点击情况第二模块结束 -->
      </el-row>
    </el-row>
    <!-- 数据报告页面结束 -->
  </div>
</template>
<script>
import BarChartSingle from '@/views/backcoms/commoncomponents/BarChartSingle' //（空心）饼图组件
import PieCharts from "@/views/backcoms/commoncomponents/PieCharts"  //公用饼图
import SmoothLineChart from "@/views/backcoms/commoncomponents/SmoothLineChart"  //平滑曲线折线图组件

export default {
  name: 'SpecialZoneReport',  //专题专区数据报告
  components: {
    'bar-chart-single': BarChartSingle,
    "pie-charts": PieCharts,
    "smooth-line-chart": SmoothLineChart
  },
  data() {
    return {
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

      //所属页面占比
      pageProportionData: {
        title: "所属页面占比",
        id: 'pageProportionChart',
        color: ["#5B9BD4", "#EC7C30 ", "#FFC000"],
        data: [
          { value: 535, name: '推荐' },
          { value: 410, name: '分类' },
          { value: 1348, name: '少儿' }
        ],
      },
      //所属运营商占比
      operatorProportionData: {
        title: "所属运营商占比",
        id: 'operatorProportionChart',
        color: ["#5B9BD4", "#EC7C30 ", "#FFC000"],
        data: [
          { value: 535, name: '移动1.0' },
          { value: 410, name: '联通' },
          { value: 648, name: '电信' }
        ],
      },

      //推荐页入口每日走势
      recommendPageData: {
        title: '推荐页入口每日走势(次)',
        id: 'recommendPage',
        color: ["#5B9BD4", "#EC7C30 ", "#FFC000"],
        data: [
          ['product', '2019/6/24', '2019/6/25', '2019/6/26', '2019/6/27', '2019/6/28', '2019/6/29', '2019/6/30', '2019/7/1', '2019/7/2', '2019/7/3', '2019/7/4'],
          ['移动推荐', 2140, 2370, 2800, 2200, 2234, 2640, 2859, 2140, 2670, 2580, 3800],
          ['电信推荐', 1400, 1700, 1800, 2000, 2340, 2400, 2590, 3040, 3070, 3800, 3200],
          ['联通推荐', 2140, 2170, 2580, 2400, 2534, 2640, 2759, 2640, 2270, 9880, 4200],
        ]
      },

      //推荐页入口每日走势
      childrenPageData: {
        title: '少儿页入口每日走势（次）',
        id: 'childrenPage',
        color: ["#5B9BD4", "#EC7C30 ", "#FFC000"],
        data: [
          ['product', '2019/6/24', '2019/6/25', '2019/6/26', '2019/6/27', '2019/6/28', '2019/6/29', '2019/6/30', '2019/7/1', '2019/7/2', '2019/7/3', '2019/7/4'],
          ['移动少儿', 2140, 2370, 2800, 2200, 2234, 2640, 2859, 2140, 2670, 2580, 3800],
          ['电信少儿', 1400, 1700, 1800, 2000, 2340, 2400, 2590, 3040, 3070, 3800, 3200],
          ['联通少儿', 2140, 2170, 2580, 2400, 2534, 2640, 2759, 2640, 2270, 9880, 4200],
        ]
      },

      //推荐页入口每日走势
      classifyPageData: {
        title: '分类页入口每日走势（次）',
        id: 'classifyPage',
        color: ["#5B9BD4", "#EC7C30 ", "#FFC000"],
        data: [
          ['product', '2019/6/24', '2019/6/25', '2019/6/26', '2019/6/27', '2019/6/28', '2019/6/29', '2019/6/30', '2019/7/1', '2019/7/2', '2019/7/3', '2019/7/4'],
          ['移动分类', 2140, 2370, 2800, 2200, 2234, 2640, 2859, 2140, 2670, 2580, 3800],
          ['电信分类', 1400, 1700, 1800, 2000, 2340, 2400, 2590, 3040, 3070, 3800, 3200],
          ['联通分类', 2140, 2170, 2580, 2400, 2534, 2640, 2759, 2640, 2270, 9880, 4200],
        ]
      },

    }
  },
  mounted() {

  }
}
</script>
<style scoped>
.periodic_report_body {
  height: 100%;
  margin: 24px 0px;
}
.special_data_total {
  height: 300px;
}
.ringlike_div {
  margin: 0 auto;
  border: 30px solid #ff8758;
  border-radius: 130px;
  height: 130px;
  width: 130px;
  font-weight: bold;
  color: red;
}
.chart_explain {
  font-size: 16px;
  color: #333;
  margin-top: 20px;
}
.chart_explain i.special_data {
  font-style: normal;
  color: red;
  font-size: 16px;
  font-weight: bold;
}

/* 入口点击情况开始 */
.special_click_data {
  height: 100%;
  margin: 24px 0px;
}
.special_click_chart {
  height: 300px;
}
.chart_explain p {
  text-align: left;
  padding-left: 10px;
  line-height: 25px;
}
.cut_off_rule {
  border-bottom: 1px dashed #f0f0f0;
  margin: 20px 0px 40px 0px;
}
.special_click_data2 {
  height: 400px;
}
/* 入口点击情况结束 */
</style>
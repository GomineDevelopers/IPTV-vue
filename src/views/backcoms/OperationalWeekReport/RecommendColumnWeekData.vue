<template>
  <div class="recommend_column_week_data">
    <el-row class="column_top_chart_body">
      <el-col class="height_auto" :span="12">
        <el-row class="bat_chart">
          <type-program-chart :chartData="columnData.weeklyThermodynamic"></type-program-chart>
        </el-row>
        <el-row class="line_chart">
          <smooth-line-chart :smoothLineData="columnData.someButtonDayTrendData"></smooth-line-chart>
        </el-row>
      </el-col>
      <el-col class="height_auto" :span="12">
        <types-programmes-play :barListData="columnData.buttonClickTOPData"></types-programmes-play>
      </el-col>
    </el-row>
    <el-row class="column_box_body">
      <el-row class="column_box_title">{{columnData.columnButtonClickNum.title}}</el-row>
      <div class="epg_page_container">
        <div
          class="epg_page_row"
          v-for="(item,index) in columnData.columnButtonClickNum.data"
          :key="index + 'a'"
        >
          <div class="epg_page_col" v-for="(list,index2) in item" :key="index2 + 'b'">
            <ul>
              <li>
                <span class="classify">{{list.classify}}</span>
                <span class="list_title">{{list.title}}</span>
              </li>
              <li>
                <span class="classify">上周</span>
                <span>{{list.lastWeek}}</span>
              </li>
              <li>
                <span class="classify">本周</span>
                <span>{{list.thisWeek}}</span>
              </li>
              <li>
                <span class="classify">环比</span>
                <span>{{list.chainIndex}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </el-row>
  </div>
</template>
<script>
import TypeProgramChart from "@/views/backcoms/G_TVuserviewingmonthreport/TypeProgramChart"  //柱状图加折线图图表组件（双坐标图表）
import SmoothLineChart from "@/views/backcoms/commoncomponents/SmoothLineChart"  //平滑曲线折线图组件
import TypesProgrammesPlay from "@/views/backcoms/OperationalWeekReport/TypesProgrammesPlay"  //TOP排名（柱状图列表）

export default {
  name: 'RecommendColumnWeekData',
  props: { columnData: Object },
  components: {
    "type-program-chart": TypeProgramChart,
    "smooth-line-chart": SmoothLineChart,
    "types-programmes-play": TypesProgrammesPlay,
  },
  data() {
    return {
      name: 'none'
    }
  },
  created() {
  },
  methods: {

  }
}
</script>
<style scoped>
.recommend_column_week_data {
  height: 100%;
}
.column_top_chart_body {
  height: 800px;
}
.bat_chart,
.line_chart {
  height: calc((100% - 10px) / 2);
}
.bat_chart {
  margin-bottom: 10px;
}
.column_box_body {
  height: 100%;
  padding: 0px 14px;
}

.column_box_title {
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  margin-top: 10px;
}
.epg_page_container .epg_page_row {
  height: 130px;
  margin: 14px 0px;
  font-size: 12px;
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
}
.epg_page_col {
  text-align: left;
  padding: 10px 0px;
  background: #f0f0f0;
  flex: 1;
  -webkit-flex: 1;
  margin-left: 14px;
  background: #ffffff;
  box-shadow: 0 1px 9px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}
.epg_page_col:nth-child(1) {
  margin-left: 0px;
}
.epg_page_col ul {
  margin: 0;
  height: 100%;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  align-content: space-around;
}
.epg_page_col ul li {
  height: 27px;
  line-height: 27px;
  list-style: disc;
  font-size: 14px;
}
.epg_page_col ul li:nth-child(2) {
  color: #5e70f1;
}
.epg_page_col ul li:nth-child(3) {
  color: #f97e6f;
}
.epg_page_col ul li:nth-child(4) {
  color: #4adbc7;
}
.epg_page_col ul li:nth-child(1) {
  list-style: none;
  color: #333;
}
.epg_page_col ul li span.classify {
  display: inline-block;
  width: 70px;
  text-align: left;
  font-size: 12px;
  color: #333;
}
.epg_page_col ul li .list_title {
  color: #333 !important;
}
.epg_page_col ul li span:nth-child(2) {
  color: #999;
}
</style>
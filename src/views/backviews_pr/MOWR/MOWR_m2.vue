<template>
  <div class="MOWR_m2">
    <el-row class="special_click_data back_white">
      <el-row :gutter="100" class="special_click_chart">
        <el-col :span="12" class="height_auto">
          <p class="m_common_sm_title_font">24小时新增用户激活率表</p>
          <table class="m_table" border="1">
            <tr class="tr_title">
              <td v-for="(item,index) in form.title " :key="index + 'a' " colspan="1">{{item}}</td>
            </tr>
            <tr class="tr_row">
              <td v-for="(item,index) in form.rowA " :key="index + 'b' " colspan="1">{{item}}</td>
            </tr>
            <tr class="tr_row">
              <td v-for="(item,index) in form.rowB " :key="index + 'c' " colspan="1">{{item}}</td>
            </tr>
            <tr class="tr_row">
              <td v-for="(item,index) in form.rowC " :key="index + 'd' " colspan="1">{{item}}</td>
            </tr>
            <tr class="tr_row">
              <td v-for="(item,index) in form.rowD " :key="index + 'e' " colspan="1">{{item}}</td>
            </tr>
          </table>
        </el-col>
        <el-col :span="12" class="height_auto">
          <p class="m_common_sm_title_font">24小时新增用户激活率图</p>
          <smooth-line-chart2 :smoothLineData="MOWR_m2_A1"></smooth-line-chart2>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import SmoothLineChart2 from "@/views/backcoms/commoncomponents2/SmoothLineChart_Change2"; //平滑曲线折线图组件-Y轴百分比

export default {
  name: "MOWR_m2",
  components: {
    "smooth-line-chart2": SmoothLineChart2
  },
  mounted() { },
  data() {
    return {
      form: {
        title: [
          "日新增",
          "7月1日",
          "7月2日",
          "7月3日",
          "7月4日",
          "7月5日",
          "7月6日",
          "7月7日",
          "总计"
        ],
        rowA: [
          "移动",
          "2575",
          "2222",
          "3131",
          "2424",
          "3636",
          "2929",
          "3261",
          "20000"
        ],
        rowB: [
          "电信",
          "2575",
          "2222",
          "3131",
          "2424",
          "3636",
          "2929",
          "3261",
          "20000"
        ],
        rowC: [
          "联通",
          "2575",
          "2222",
          "3131",
          "2424",
          "3636",
          "2929",
          "3261",
          "20000"
        ],
        rowD: ["", "", "", "", "", "", "", "", "66666"]
      },
      MOWR_m2_A1: {
        title: "",
        id: "MOWR_m2_A1",
        color: ["#8064A2", "#9BBB59", "#C0504D"],
        data: [
          [
            "product",
            "6月24日",
            "6月25日",
            "6月26日",
            "6月27日",
            "6月28日",
            "6月29日",
            "6月30日",
            "7月1日",
            "7月2日",
            "7月3日",
            "7月4日"
          ],
          ["移动", 60, 61, 55, 47, 58, 66, 62, 67, 64, 58, 54],
          ["电信", 22, 23, 25, 22, 22, 26, 22, 28, 22, 26, 22],
          ["联通", 77, 79, 74, 77, 72, 75, 78, 77, 71, 77, 79]
        ]
      }
    };
  },
  methods: {}
};
</script>
<style scoped>
.m_table {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
}
.tr_title {
  width: 100%;
}
.tr_row {
  width: 100%;
}
.tr_title td {
  background: #f0f0f0;
  border: 1px solid #999;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  width: auto;
  margin: auto;
  text-align: center;
  line-height: 63px;
  height: 63px;
}
.tr_row td {
  border: 1px solid #999;
  font-size: 14px;
  color: #333;
  width: auto;
  margin: auto;
  text-align: center;
  line-height: 50px;
  height: 50px;
}
</style>
<template>
  <div class="MOWR_m1">
    <el-row class="special_click_data back_white">
      <el-row :gutter="100" class="special_click_chart">
        <el-col :span="12" class="height_auto">
          <p class="m_common_sm_title_font">周新增数据表</p>
          <table class="m_table" border="1">
            <tr class="tr_title">
              <td
                v-for="(item,index) in form.title "
                :key="index + 'a' "
                colspan="1"
              >{{item}}</td>
            </tr>
            <tr class="tr_row">
              <td
                v-for="(item,index) in form.rowA "
                :key="index + 'b' "
                colspan="1"
              >{{item}}</td>
            </tr>
            <tr class="tr_row">
              <td
                v-for="(item,index) in form.rowB "
                :key="index + 'c' "
                colspan="1"
              >{{item}}</td>
            </tr>
            <tr class="tr_row">
              <td
                v-for="(item,index) in form.rowC "
                :key="index + 'd' "
                colspan="1"
              >{{item}}</td>
            </tr>
            <tr class="tr_row">
              <td
                v-for="(item,index) in form.rowD "
                :key="index + 'e' "
                colspan="1"
              >{{item}}</td>
            </tr>
          </table>
        </el-col>
        <el-col :span="12" class="height_auto">
          <p class="m_common_sm_title_font">周新增数据图</p>
          <bar-chart-single3 :chartData="MOWR_m1_A1"></bar-chart-single3>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import BarChartSingle3 from "@/views/backcoms/commoncomponents2/BarChartSingle_Change3"; //单坐标柱状图组件

export default {
  name: "MOWR_m1",
  components: {
    "bar-chart-single3": BarChartSingle3
  },
  mounted() {},
  data() {
    return {
      MOWR_m1_A1: {
        title: "各页面专区入口点击次数",
        id: "MOWR_m1_A1",
        height: "height:300px;",
        color: ["#8064A2", "#9BBB59", "#C0504D"],
        data: [
          ["product", "移动", "电信", "联通"],
          ["7月1日", 4330, 13563, 3337],
          ["7月2日", 8300, 16457, 2330],
          ["7月3日", 8600, 17896, 1457],
          ["7月4日", 8600, 17896, 1457],
          ["7月5日", 8600, 17896, 1457],
          ["7月6日", 8600, 17896, 1457],
          ["7月7日", 8600, 17896, 1457]
        ]
      },
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
}
.tr_title {
  width: 100%;
}
.tr_row {
  width: 100%;
}
.tr_title td {
  background: #92d050;
  border: 0;
  font-size: 14px;
  color: #ffffff;
  width: auto;
  margin: auto;
  text-align: center;
  line-height: 63px;
  height: 63px;
}
.tr_row td {
  background: #afafaf;
  border: 0;
  font-size: 14px;
  color: #ffffff;
  width: auto;
  margin: auto;
  text-align: center;
  line-height: 50px;
  height: 50px;
}
</style>

<style >
</style>
<template>
  <div class="MOWR_m7">
    <el-row class="special_click_data back_white">
      <el-row>
        <p class="m_common_sm_title_font">停机用户表</p>
        <table class="m_table" border="1">
          <tr class="tr_title">
            <td
              class="m_font_bold"
              v-for="(item,index) in form.title "
              :key="index + 'a' "
              colspan="1"
            >{{item}}</td>
          </tr>
          <tr class="tr_row">
            <template v-for="(item,index) in form.row1 ">
              <td :key="index + '1b' " v-if="index == 0" colspan="1" rowspan="3">{{item}}</td>
            </template>
            <template v-for="(item,index) in form.row1 ">
              <td :key="index + '2b' " v-if="index != 0" colspan="1">{{item}}</td>
            </template>
          </tr>
          <tr class="tr_row">
            <td v-for="(item,index) in form.row2 " :key="index + 'c' " colspan="1">{{item}}</td>
          </tr>
          <tr class="tr_row">
            <td
              class="m_font_bold"
              v-for="(item,index) in form.row3 "
              :key="index + 'd' "
              colspan="1"
            >{{item}}</td>
          </tr>
          <tr class="tr_row">
            <template v-for="(item,index) in form.row4 ">
              <td :key="index + '1b' " v-if="index == 0" colspan="1" rowspan="3">{{item}}</td>
            </template>
            <template v-for="(item,index) in form.row4 ">
              <td :key="index + '2b' " v-if="index != 0" colspan="1">{{item}}</td>
            </template>
          </tr>
          <tr class="tr_row">
            <td v-for="(item,index) in form.row5 " :key="index + 'c' " colspan="1">{{item}}</td>
          </tr>
          <tr class="tr_row">
            <td
              class="m_font_bold"
              v-for="(item,index) in form.row6 "
              :key="index + 'd' "
              colspan="1"
            >{{item}}</td>
          </tr>
          <tr class="tr_row">
            <template v-for="(item,index) in form.row7 ">
              <td :key="index + '1b' " v-if="index == 0" colspan="1" rowspan="3">{{item}}</td>
            </template>
            <template v-for="(item,index) in form.row7 ">
              <td :key="index + '2b' " v-if="index != 0" colspan="1">{{item}}</td>
            </template>
          </tr>
          <tr class="tr_row">
            <td v-for="(item,index) in form.row8 " :key="index + 'c' " colspan="1">{{item}}</td>
          </tr>
          <tr class="tr_row">
            <td
              class="m_font_bold"
              v-for="(item,index) in form.row9 "
              :key="index + 'd' "
              colspan="1"
            >{{item}}</td>
          </tr>
        </table>
      </el-row>
      <el-row :gutter="100" class="special_click_chart">
        <el-col :span="8" class="height_auto">
          <p class="m_common_sm_title_font">周新增占比</p>
          <div id="MOWR_m7_A1" :style="{width: '100%',height: '300px'}"></div>
        </el-col>
        <el-col :span="8" class="height_auto">
          <p class="m_common_sm_title_font">周销户占比</p>
          <div id="MOWR_m7_A2" :style="{width: '100%',height: '300px'}"></div>
        </el-col>
        <el-col :span="8" class="height_auto">
          <p class="m_common_sm_title_font">周净增占比</p>
          <div id="MOWR_m7_A3" :style="{width: '100%',height: '300px'}"></div>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import BarChartSingle2 from "@/views/backcoms/commoncomponents2/BarChartSingle_Change2"; //（空心）饼图组件

export default {
  name: "MOWR_m7",
  components: {
    "bar-chart-single2": BarChartSingle2
  },
  mounted() {
    this.drawLine();
    this.drawLine2();
    this.drawLine3();
  },
  data() {
    return {
      form: {
        title: [
          "运营商",
          "分类",
          "7月1日",
          "7月2日",
          "7月3日",
          "7月4日",
          "7月5日",
          "7月6日",
          "7月7日",
          "合计"
        ],
        row1: [
          "移动",
          "新增",
          "79",
          "130",
          "408",
          "533",
          "311",
          "310",
          "534",
          "2098"
        ],
        row2: ["销户", "79", "130", "408", "533", "311", "310", "534", "2098"],
        row3: ["净增", "79", "130", "408", "533", "311", "310", "534", "2098"],
        row4: [
          "电信",
          "新增",
          "79",
          "130",
          "408",
          "533",
          "311",
          "310",
          "534",
          "2098"
        ],
        row5: ["销户", "79", "130", "408", "533", "311", "310", "534", "2098"],
        row6: ["净增", "79", "130", "408", "533", "311", "310", "534", "2098"],
        row7: [
          "联通",
          "新增",
          "79",
          "130",
          "408",
          "533",
          "311",
          "310",
          "534",
          "2098"
        ],
        row8: ["销户", "79", "130", "408", "533", "311", "310", "534", "2098"],
        row9: ["净增", "79", "130", "408", "533", "311", "310", "534", "2098"]
      }
    };
  },
  methods: {
    drawLine() {
      var myChart = this.$echarts.init(document.getElementById("MOWR_m7_A1"));
      var data = {
        color: ["#C0504D", "#9BBB59", "#CC7B38"],
        data: [
          { value: 70, name: "移动" },
          { value: 20, name: "电信" },
          { value: 14, name: "联通" }
        ]
      };
      var option = this.common(data);
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    drawLine2() {
      var myChart = this.$echarts.init(document.getElementById("MOWR_m7_A2"));
      var data = {
        color: ["#C0504D", "#9BBB59", "#CC7B38"],
        data: [
          { value: 70, name: "移动" },
          { value: 20, name: "电信" },
          { value: 14, name: "联通" }
        ]
      };
      var option = this.common(data);
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    drawLine3() {
      var myChart = this.$echarts.init(document.getElementById("MOWR_m7_A3"));
      var data = {
        color: ["#C0504D", "#9BBB59", "#CC7B38"],
        data: [
          { value: 70, name: "移动" },
          { value: 20, name: "电信" },
          { value: 14, name: "联通" }
        ]
      };
      var option = this.common(data);
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    common(data) {
      var option = {
        title: {
          text: "",
          subtext: "",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        //图表自带工具
        toolbox: {
          show: true,
          right: "6%",
          feature: {
            saveAsImage: {}
          }
        },
        legend: {
          icon: "re",
          top: "20%",
          left: "70%",
          itemWidth: 12, // 设置宽度
          itemHeight: 7, // 设置高度
          itemGap: 10, // 设置间距
          padding: 0,
          orient: "vertical", //垂直显示
          textStyle: {
            fontSize: 14,
            color: "rgba(0, 0, 0, 0.65)"
          }
        },
        series: [
          {
            type: "pie",
            radius: "55%",
            center: ["45%", "50%"],
            selectedMode: "single",
            // color: ["#FCB84F", "#F97E6F"],
            color: data.color,

            label: {
              normal: {
                formatter: "{b}:\n {d}%" // 只显示百分比
              }
            },
            labelLine: {
              normal: {
                smooth: 0.2,
                length: 1
              }
            },
            // data: [{ value: 23, name: "订购" }, { value: 77, name: "未订购" }],
            data: data.data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      return option;
    }
  }
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
  background: #0e2a58;
  border: 0;
  font-size: 14px;
  color: #ffffff;
  width: auto;
  margin: auto;
  text-align: center;
  line-height: 50px;
  height: 50px;
}
.m_font_bold {
  font-weight: bold;
  font-size: 16px !important;
}
</style>

<style >
</style>
<template>
  <div class="UVWR_m5">
    <!-- ///////////////////////// Y -->
    <el-row class="model_title">
      <span class="title_border_left"></span>本土原创节目点播数据
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <el-row class="programs_demand_content1">
        <el-col :span="12">
          <p class="m_common_sm_title_font">本土原创节目一周点播数据</p>
          <bar-chart-single2 :chartData="GT_UVWR1_Y1"></bar-chart-single2>
        </el-col>
        <el-col :span="12">
          <p class="m_common_sm_title_font">内容类型 点播次数占比</p>
          <div id="GT_UVWR1_Y2" :style="{width: '100%',height: '300px'}"></div>

          <p class="m_common_sm_title_font">不同平台点播次数占比</p>
          <div id="GT_UVWR1_Y3" :style="{width: '100%',height: '300px'}"></div>
        </el-col>
      </el-row>
    </el-row>
    <!-- ///////////////////////// Z -->
    <el-row class="model_title">
      <span class="title_border_left"></span>本土原创节目点播TOP10
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 横向条形图x3 -->
      <el-row class>
        <el-col :span="8">
          <p class="m_common_sm_title_font">移动（次）</p>
          <bar-list-chart :barListData="GT_UVWR1_Z1"></bar-list-chart>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">联通（次）</p>
          <bar-list-chart :barListData="GT_UVWR1_Z2"></bar-list-chart>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">电信（次）</p>
          <bar-list-chart :barListData="GT_UVWR1_Z3"></bar-list-chart>
        </el-col>
      </el-row>
      <p class="m_common_content_font">移动侧一级页面总点击次数1332.2万次，环比下降6.1%；页面播放时长1258.9万小时，下降17.0%。</p>
    </el-row>
  </div>
</template>

<script>
import BarChartSingle2 from "@/views/backcoms/commoncomponents2/BarChartSingle_Change2"; //（空心）饼图组件
import BarListChart from "@/views/backcoms/commoncomponents2/BarListChart_Change"; //排名柱状图

export default {
  name: "UVWR_m5",
  components: {
    "bar-chart-single2": BarChartSingle2,
    "bar-list-chart": BarListChart
  },
  mounted() {
    this.drawLine();
    this.drawLine2();
  },
  data() {
    return {
      GT_UVWR1_Y1: {
        data: [
          ["product", "0520-0526", "0527-0602"],
          ["点播用户数（户）", 48.0, 48.1],
          ["点播次数（次）", 54.2, 57.4],
          ["点播时长（小时）", 20.1, 20.0]
        ],
        title: "",
        id: "GT_UVWR1_Y1",
        height: "height:600px;",
        color: ["#EDEDED", "#A9D18E"],
        ifYaxisShow: true,
        ifLegendShow: false,
        m_barWidth: "20%"
      },
      GT_UVWR1_Z1: {
        title: "",
        id: "GT_UVWR1_Z1",
        height: "height:600px;",
        color: ["#A9D18E", "#EDEDED"],
        data: [
          ["product", "0527-0602", "0520-0526"],
          ["少儿", 20, 20],
          ["电影", 18, 18],
          ["热剧", 15, 15],
          ["游戏", 17, 17],
          ["动漫", 16, 16],
          ["综艺", 14, 14],
          ["纪实", 13, 13],
          ["音乐", 12, 12],
          ["体育", 11.5, 11.5],
          ["资讯", 10, 10]
        ]
      },
      GT_UVWR1_Z2: {
        title: "",
        id: "GT_UVWR1_Z2",
        height: "height:600px;",
        color: ["#5B9BD5", "#EDEDED"],
        data: [
          ["product", "0527-0602", "0520-0526"],
          ["少儿", 20, 20],
          ["电影", 18, 18],
          ["热剧", 15, 15],
          ["游戏", 17, 17],
          ["动漫", 16, 16],
          ["综艺", 14, 14],
          ["纪实", 13, 13],
          ["音乐", 12, 12],
          ["体育", 11.5, 11.5],
          ["资讯", 10, 10]
        ]
      },
      GT_UVWR1_Z3: {
        title: "",
        id: "GT_UVWR1_Z3",
        height: "height:600px;",
        color: ["#FFC000", "#EDEDED"],
        data: [
          ["product", "0527-0602", "0520-0526"],
          ["少儿", 20, 20],
          ["电影", 18, 18],
          ["热剧", 15, 15],
          ["游戏", 17, 17],
          ["动漫", 16, 16],
          ["综艺", 14, 14],
          ["纪实", 13, 13],
          ["音乐", 12, 12],
          ["体育", 11.5, 11.5],
          ["资讯", 10, 10]
        ]
      }
    };
  },
  methods: {
    drawLine() {
      var myChart = this.$echarts.init(document.getElementById("GT_UVWR1_Y2"));
      var data = {
        color: [
          "#5B9BD5",
          "#ED7D31",
          "#FFC000",
          "#A9D18E",
          "#5B9BD5",
          "#70AD47",
          "#FFCCCC",
          "#E3E55D"
        ],
        data: [
          { value: 70, name: "综艺" },
          { value: 20, name: "微电影" },
          { value: 14, name: "纪实" },
          { value: 10, name: "其他" },
          { value: 8, name: "电影" },
          { value: 4, name: "新闻" },
          { value: 8, name: "时尚生活" },
          { value: 5, name: "纪录片" }
        ]
      };
      var option = this.common(data);
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    drawLine2() {
      var myChart = this.$echarts.init(document.getElementById("GT_UVWR1_Y3"));
      var data = {
        color: ["#5B9BD5", "#ED7D31", "#FFC000"],
        data: [
          { value: 70, name: "移动" },
          { value: 20, name: "联通" },
          { value: 14, name: "电信" }
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

<style >
</style>
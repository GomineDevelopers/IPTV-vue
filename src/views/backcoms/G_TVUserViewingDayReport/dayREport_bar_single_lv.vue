<template>
  <div class="height_auto">
    <el-row class="height_auto" :id="fillinData.id"></el-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "registereduserpie", //用户注册人数饼图
  props: ["fillinData"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PR_operator", "PR_day"])
  },
  watch: {
    PR_operator(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 1000);
    },
    PR_day(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 1000);
    }
  },
  mounted() {
    let vm = this;
    setTimeout(function() {
      vm.setLineChart();
    }, 1000);
  },
  methods: {
    setLineChart() {
      var lineChart = this.$echarts.init(
        document.getElementById(this.fillinData.id)
      );
      //   循环获取数据
      let seriesData = [];
      // seriesData.barWidth= 10
      let data = {};

      let legendlist = [];
      let xAxisdata = [];
      //设置series数据条数

      for (let i = 0; i < this.fillinData.data.length; i++) {
        data = {};
        data.name = this.fillinData.data[i][1][0];
        data.type = "bar";
        data.data = [];
        data.barWidth = "40";
        data.label = {
          show: true,
          position: "top",
          formatter: "{c}%"
        };
        data.barGap = "5%";
        data.itemStyle = {
          color: this.fillinData.color[i]
        };

        for (let j = 1; j <= this.fillinData.data[i][1].length - 1; j++) {
          data.data.push(this.fillinData.data[i][1][j]);
          if (i == this.fillinData.data.length - 1) {
            xAxisdata.push(this.fillinData.data[i][0][j]);
          }
        }

        legendlist.push(this.fillinData.data[i][1][0]);
        seriesData.push(data);
      }
      // console.log(seriesData,"1111111111")
      // 数据配置项
      let option = {
        title: {
          text: this.fillinData.title,
          x: "left",
          padding: [11, 0, 0, 18],
          textStyle: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14"
          }
        },
        xAxis: {
          type: "category",

          // 留白空隙
          boundaryGap: [0, 0.5],
          axisLine: {
            lineStyle: {
              color: "#A0A4AA"
            },
            show: false
          },
          // 文字斜体
          axisLabel: {
            interval: 0, //横轴信息全部显示
            rotate: 30, //30度角倾斜显示
            padding: [20, 0, 0, 0],
            fontSize: 14,
            color: "#111"
          },

          // 影藏刻度
          axisTick: {
            show: false
          },
          data: xAxisdata
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: true,
            lineStyle: {
              color: "#939393",
              opacity: 0.2
            }
          },
          axisLine: {
            lineStyle: {
              color: "#A0A4AA"
            },
            show: false
          },
          // 影藏刻度
          axisTick: {
            show: false
          }
        },
        grid: {
          top: "83",
          left: "3%",
          right: "50",
          bottom: "55",
          containLabel: true
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}%"
          // formatter: "{a} <br/>{b} : {c}%"
        },
        series: seriesData
      };
      lineChart.clear();
      lineChart.setOption(option);
      window.addEventListener("resize", () => {
        lineChart.resize();
      });
    }
  }
};
</script>
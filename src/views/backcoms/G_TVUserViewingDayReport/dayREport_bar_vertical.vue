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
  mounted() {
    let vm = this;
    setTimeout(function () {
      vm.setLineChart();
    }, 1000);
  },
  computed: {
    ...mapGetters(["PR_operator", "PR_day"])
  },
  watch: {
    PR_operator(newValue, oldValue) {
      let vm = this;
      setTimeout(function () {
        vm.setLineChart();
      }, 1000);
    },
    PR_day(newValue, oldValue) {
      let vm = this;
      setTimeout(function () {
        vm.setLineChart();
      }, 1000);
    },
    fillinData(newValue, oldValue) {
      let vm = this;
      setTimeout(function () {
        vm.setLineChart();
      }, 1000);
    }
  },
  methods: {
    setLineChart() {
      var lineChart = this.$echarts.init(
        document.getElementById(this.fillinData.id)
      );
      //   循环获取数据
      let seriesData = [];
      let data = {};
      let legendlist = [];
      let xAxisdata = [];
      //设置series数据条数

      for (let i = 0; i < this.fillinData.data.length; i++) {
        data = {};
        data.name = this.fillinData.data[i][1][0];
        data.type = "bar";
        data.data = [];
        data.label = {
          show: true,
          position: "right",
          formatter: "{c}"
        };
        // data.barWidth= '40'
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
      // console.log(seriesData)
      // console.log(xAxisdata)
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
          type: "value",
          // 留白空隙
          boundaryGap: [0, 0.5],
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
        yAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#A0A4AA"
            },
            show: false
          },
          inverse: true,
          axisLabel: {
            interval: 0,
            color: "#111"
          },
          // 影藏刻度
          axisTick: {
            show: false
          },
          data: xAxisdata
        },
        grid: {
          top: "50",
          left: "30",
          right: "150",
          bottom: "55",
          containLabel: true
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}"
        },
        //图表自带工具
        toolbox: {
          show: true,
          right: "6%",
          feature: {
            saveAsImage: {}
          }
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
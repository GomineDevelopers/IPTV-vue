<template>
  <div class="height_auto">
    <el-row class="height_auto" :id="lineData.id"></el-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "LineChartSingle", //折线图
  props: {
    lineData: Object
  },
  watch: {
    PR_week(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 2000);
    }
  },
  computed: {
    ...mapGetters(["PR_week"])
  },

  data() {
    return {};
  },
  mounted() {
    let vm = this;
    setTimeout(function() {
      vm.setLineChart();
    }, 2000);
  },
  methods: {
    setLineChart() {
      var lineChart = this.$echarts.init(
        document.getElementById(this.lineData.id)
      );
      let seriesData = [];
      //设置series数据条数
      for (let i = 1; i <= this.lineData.data.length - 1; i++) {
        seriesData.push({
          type: "line",
          seriesLayoutBy: "row",
          symbol: "circle"
        });
      }
      var option = {
        color: this.lineData.color,
        textStyle: {
          color: "rgba(0, 0, 0, 0.65)"
        },
        title: {
          text: this.lineData.title,
          x: "2%",
          y: "0%",
          textStyle: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14"
          }
        },
        legend: {
          icon: "re",
          top: "10%",
          width: "600",
          itemWidth: 18, // 设置宽度
          itemHeight: 2, // 设置高度
          itemGap: 20, // 设置间距
          textStyle: {
            fontSize: 12,
            color: "rgba(0, 0, 0, 0.65)"
          }
        },
        grid: {
          top: "30%",
          left: "80",
          right: "5%",
          bottom: "10%"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          },
          textStyle: {
            align: "left"
          }
        },
        //图表自带工具
        toolbox: {
          show: true,
          top: "10%",
          right: "6%",
          feature: {
            saveAsImage: {}
          }
        },
        dataset: {
          source: this.lineData.data
        },
        xAxis: {
          type: "category",
          boundaryGap: false, //设置数据开始显示的起点在Y轴上
          axisLine: {
            lineStyle: {
              color: "rgba(0,0,0,0.65)" //设置横坐标轴线颜色
            }
          },
          axisTick: {
            alignWithLabel: true //设置坐标轴刻度与坐标对齐
          }
        },
        yAxis: {
          gridIndex: 0,
          axisTick: {
            show: false //设置坐标轴刻度不显示
          },
          axisLine: {
            show: false
          },
          // 刻度线的设置
          splitLine: {
            show: true,
            lineStyle: {
              color: "#939393",
              type: "dotted",
              opacity: 0.2
            }
          }
        },
        series: seriesData
      };
      lineChart.setOption(option);
      window.addEventListener("resize", () => {
        lineChart.resize();
      });
    }
  }
};
</script>
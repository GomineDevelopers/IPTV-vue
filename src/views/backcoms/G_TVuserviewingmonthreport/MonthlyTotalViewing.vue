<template>
  <div class="height_auto">
    <!-- <el-row class="height_auto" :id="lineData.id"></el-row> -->
    <el-row class="height_auto" :id="lineData_Change.id"></el-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "MonthlyTotalViewing", //折线图
  props: {
    lineData: Object
  },
  data() {
    return {};
  },
  mounted() {
    let vm = this;
    setTimeout(function() {
      vm.setLineChart();
    }, 1000);
  },
  computed: {
    ...mapGetters(["PR_month"]),
    lineData_Change: {
      get: function() {
        let vm = this;
        if (vm.lineData.id == "newAddUserPercent") {
          if (vm.PR_month) {
            // do nothing. -- 监听
          }
        }
        // 视图更新
        setTimeout(function() {
          vm.setLineChart();
        }, 1000);
        return vm.lineData;
      },
      set: function(newValue) {}
    }
  },
  methods: {
    setLineChart() {
      var lineChart = this.$echarts.init(
        document.getElementById(this.lineData_Change.id)
      );
      var option = {
        color: this.lineData_Change.color,
        textStyle: {
          color: "rgba(0, 0, 0, 0.65)"
        },
        title: {
          text: this.lineData_Change.title,
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
          top: "8%",
          itemWidth: 20, // 设置宽度
          itemHeight: 2, // 设置高度
          itemGap: 20, // 设置间距
          textStyle: {
            fontSize: 14,
            color: "rgba(0, 0, 0, 0.65)"
          }
        },
        grid: {
          top: "25%",
          left: "5%",
          right: "5%",
          bottom: "10%"
        },
        tooltip: {
          trigger: "axis",
          textStyle: {
            align: "left"
          }
        },
        //图表自带工具
        toolbox: {
          show: true,
          top: "7%",
          right: "6%",
          feature: {
            saveAsImage: {}
          }
        },
        dataset: {
          source: this.lineData_Change.data
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
        yAxis: [
          {
            type: "value",
            gridIndex: 0,
            axisTick: {
              show: false //设置坐标轴刻度不显示
            },
            axisLine: {
              show: false
            },
            // 刻度线的设置
            splitLine: {
              show: false
            }
          },
          {
            type: "value",
            gridIndex: 0,
            axisTick: {
              show: false //设置坐标轴刻度不显示
            },
            axisLabel: {
              show: true,
              interval: "auto"
            },
            axisLine: {
              show: false
            },
            // 刻度线的设置
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          { type: "line", seriesLayoutBy: "row", symbol: "circle" },
          { type: "line", seriesLayoutBy: "row", symbol: "circle" },
          {
            type: "line",
            seriesLayoutBy: "row",
            symbol: "circle",
            yAxisIndex: 1
            //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
          }
        ]
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
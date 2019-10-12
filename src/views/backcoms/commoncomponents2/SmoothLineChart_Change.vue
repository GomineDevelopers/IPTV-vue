<template>
  <div class="height_auto">
    <!-- <div class="pie_hollow_chart" :id="smoothLineData.id"></div> -->
    <div class="pie_hollow_chart" :id="smoothLineData_Change.id"></div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "SmoothLineChart_Change", //专题专区数据报告
  props: {
    smoothLineData: {
      type: Object
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PR_operator", "PR_week"]),
    smoothLineData_Change: {
      get: function () {
        let vm = this;
        if (
          vm.smoothLineData.id == "GT_UVWR1_C4" ||
          vm.smoothLineData.id == "GT_UVWR1_C5" ||
          vm.smoothLineData.id == "GT_UVWR1_C6"
        ) {
          if (vm.PR_operator == null || vm.PR_operator.length == 0) {
            setTimeout(function () {
              vm.setLineChart();
            }, 1000);
            return vm.smoothLineData;
          } else {
            let color = [];
            let data = [];
            data.push(vm.smoothLineData.data[0]);
            if (vm.PR_operator.indexOf("移动") > -1) {
              color.push(vm.smoothLineData.color[0]);
              data.push(vm.smoothLineData.data[1]);
            }
            if (vm.PR_operator.indexOf("联通") > -1) {
              color.push(vm.smoothLineData.color[1]);
              data.push(vm.smoothLineData.data[2]);
            }
            if (vm.PR_operator.indexOf("电信") > -1) {
              color.push(vm.smoothLineData.color[2]);
              data.push(vm.smoothLineData.data[3]);
            }
            setTimeout(function () {
              vm.setLineChart();
            }, 1000);
            return {
              title: vm.smoothLineData.title,
              id: vm.smoothLineData.id,
              color: color,
              data: data
            };
          }
        } else if (
          vm.smoothLineData.id == "GT_UVWR1_J2" ||
          vm.smoothLineData.id == "GT_UVWR1_V2" ||
          vm.smoothLineData.id == "GT_UVWR1_P2"
        ) {
          setTimeout(function () {
            vm.setLineChart();
          }, 1000);
          if (vm.PR_week) {
            //do nothing  监听视图变化作用
          }
        }
        return vm.smoothLineData;
      },
      set: function (newValue) { }
    }
  },
  watch: {
    PR_week(newValue, oldValue) {
      let vm = this
      setTimeout(function () {
        vm.setLineChart();
      }, 1000);
    }
  },
  mounted() {
    let vm = this;
    setTimeout(function () {
      vm.setLineChart();
    }, 1000);
  },
  methods: {
    setLineChart() {
      var smoothLineChart = this.$echarts.init(
        document.getElementById(this.smoothLineData_Change.id)
      );
      let seriesData = [];
      //设置series数据条数
      for (let i = 1; i <= this.smoothLineData_Change.data.length - 1; i++) {
        seriesData.push({
          type: "line",
          seriesLayoutBy: "row",
          symbol: "none",
          smooth: true
        });
      }
      var option = {
        color: this.smoothLineData_Change.color,
        textStyle: {
          color: "rgba(0, 0, 0, 0.65)"
        },
        title: {
          text: this.smoothLineData_Change.title,
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
          top: "2%",
          itemWidth: 12, // 设置宽度
          itemHeight: 7, // 设置高度
          itemGap: 20, // 设置间距
          textStyle: {
            fontSize: 12,
            color: "rgba(0, 0, 0, 0.65)"
          }
        },
        grid: {
          containLabel: true,
          top: "25%",
          left: "35",
          right: "5",
          bottom: "5"
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
          top: "0%",
          right: "1%",
          feature: {
            saveAsImage: {}
          }
        },
        dataset: {
          source: this.smoothLineData_Change.data
        },
        xAxis: {
          type: "category",
          boundaryGap: false, //设置数据开始显示的起点在Y轴上
          axisLine: {
            lineStyle: {
              color: "rgba(0,0,0,0.65)" //设置横坐标轴线颜色
            }
          },
          axisLabel: {
            interval: 0,
            rotate: 40
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
      smoothLineChart.clear();
      smoothLineChart.setOption(option);
      window.addEventListener("resize", () => {
        smoothLineChart.resize();
      });
    }
  }
};
</script>
<style scoped>
.pie_hollow_chart {
  height: 300px;
}
</style>

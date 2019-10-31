<template>
  <div class="height_auto">
    <!-- <div class="height_auto" :id="smoothLineData.id"></div> -->
    <div class="height_auto" :id="smoothLineData_Change.id"></div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "SmoothLineChart", //专题专区数据报告
  props: {
    smoothLineData: {
      type: Object
    }
  },
  data() {
    return {};
  },
  watch: {
    PR_operator(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 2000);
    },
    PR_picker(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 2000);
    },
    PR_value_specialName(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 2000);
    }
  },
  computed: {
    ...mapGetters([
      "PR_operator",
      "PR_week",
      "PR_picker",
      "PR_value_specialName"
    ]),

    smoothLineData_Change: {
      get: function() {
        let vm = this;
        let data = [];
        let color = [];
        if (
          vm.smoothLineData.id == "recommendPage" ||
          vm.smoothLineData.id == "childrenPage" ||
          vm.smoothLineData.id == "classifyPage" ||
          vm.smoothLineData.id == "originalProgramsDemand"
        ) {
          if (this.PR_operator == null || this.PR_operator.length == 0) {
            data = vm.smoothLineData.data;
            color = vm.smoothLineData.color;
          } else {
            data.push(vm.smoothLineData.data[0]);
            if (this.PR_operator.indexOf("移动") > -1) {
              data.push(vm.smoothLineData.data[1]);
              color.push(vm.smoothLineData.color[0]);
            }
            if (this.PR_operator.indexOf("联通") > -1) {
              data.push(vm.smoothLineData.data[2]);
              color.push(vm.smoothLineData.color[1]);
            }
            if (this.PR_operator.indexOf("电信") > -1) {
              data.push(vm.smoothLineData.data[3]);
              color.push(vm.smoothLineData.color[2]);
            }
          }
          // 视图更新
          setTimeout(function() {
            // console.log("recommendPage 视图更新");
            vm.setLineChart();
          }, 2000);
          return {
            title: vm.smoothLineData.title,
            id: vm.smoothLineData.id,
            color: color,
            data: data
          };
        }
        if (vm.smoothLineData.id == "originalProgramsDemand_owr") {
          if (vm.PR_week && vm.PR_operator) {
            // do nothing. --监听
          }
        }
        setTimeout(function() {
          vm.setLineChart();
        }, 2000);
        return vm.smoothLineData;
      },
      set: function(newValue) {}
    }
  },
  mounted() {
    let vm = this;
    setTimeout(function() {
      vm.setLineChart();
    }, 2000);
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
          top: "10%",
          itemWidth: 12, // 设置宽度
          itemHeight: 7, // 设置高度
          itemGap: 20, // 设置间距
          textStyle: {
            fontSize: 14,
            color: "rgba(0, 0, 0, 0.65)"
          }
        },
        grid: {
          top: "25%",
          left: "12%",
          right: "5%",
          bottom: "15%"
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
          top: "9%",
          right: "6%",
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
</style>

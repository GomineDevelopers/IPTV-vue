<template>
  <div class="height_auto">
    <!-- <el-row class="height_auto" :id="lineData.id"></el-row> -->
    <el-row class="height_auto" :id="lineData_Change.id"></el-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "EveryPowerActivity", //折线图Y轴显示百分比
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
    }, 2000);
  },
  watch: {
    PR_month(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 2000);
    },
    PR_operator(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 2000);
    },
    lineData(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 2000);
    }
  },
  computed: {
    ...mapGetters(["PR_operator", "PR_month"]),
    lineData_Change: {
      get: function() {
        let vm = this;
        let data = [];
        let color = [];
        if (vm.lineData.id == "everyPowerActivity") {
          if (vm.PR_month) {
            // do nothing. --监听
          }
          if (this.PR_operator == null || this.PR_operator.length == 0) {
            data = vm.lineData.data;
            color = vm.lineData.color;
          } else {
            data.push(vm.lineData.data[0]);
            if (this.PR_operator.indexOf("移动") > -1) {
              color.push(vm.lineData.color[0]);
              data.push(vm.lineData.data[1]);
            }
            if (this.PR_operator.indexOf("联通") > -1) {
              color.push(vm.lineData.color[1]);
              data.push(vm.lineData.data[2]);
            }
            if (this.PR_operator.indexOf("电信") > -1) {
              color.push(vm.lineData.color[2]);
              data.push(vm.lineData.data[3]);
            }
            data.push(vm.lineData.data[4]);
          }
          // 视图更新
          setTimeout(function() {
            vm.setLineChart();
          }, 2000);
          return {
            title: vm.lineData.title,
            id: vm.lineData.id,
            color: color,
            data: data
          };
        }
        setTimeout(function() {
          vm.setLineChart();
        }, 2000);
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
      let seriesData = [];
      //设置series数据条数
      for (let i = 1; i <= this.lineData_Change.data.length - 1; i++) {
        seriesData.push({
          type: "line",
          seriesLayoutBy: "row",
          symbol: "circle"
        });
      }
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
          icon: "circle",
          top: "10%",
          itemWidth: 6, // 设置宽度
          itemHeight: 6, // 设置高度
          itemGap: 20, // 设置间距
          textStyle: {
            fontSize: 14,
            color: "rgba(0, 0, 0, 0.65)"
          }
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
          top: "10%",
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
          },
          axisLabel: {
            //横坐标类目文字
            show: true,
            interval: 0, // 坐标轴显示不全问题解决方案
            rotate: 40,
            textStyle: {
              fontSize: "12" //设置横坐标轴文字大小
            }
          }
        },
        yAxis: {
          gridIndex: 0,
          axisLabel: {
            show: true,
            interval: "auto",
            formatter: "{value}%"
          },
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
        grid: {
          top: "30%",
          left: "5%",
          right: "5%",
          bottom: "10%"
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
<template>
  <div class="height_auto">
    <!-- <el-row :style="chartData.height" :id="chartData.id"></el-row> -->
    <el-row :style="chartData_Change.height" :id="chartData_Change.id"></el-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "BarChartSingle_Change3",
  props: {
    chartData: {
      type: Object
    }
  },
  computed: {
    ...mapGetters(["PR_operator"]),
    chartData_Change: {
      get: function() {
        let vm = this;
        let data = [];
        let color = [];

        if (vm.chartData.id == "MOWR_m1_A1" || vm.chartData.id == "MOWR_m1_A2" ) {
          if (vm.PR_operator == null || vm.PR_operator.length == 0) {
            color = vm.chartData.color;
            data = vm.chartData.data;
          } else {
            let length = vm.chartData.data.length;
            let i;
            for (i = 0; i < length; i++) {
              data.push([]);
              data[i].push(vm.chartData.data[i][0]);
            }
            if (vm.PR_operator.indexOf("移动") > -1) {
              color.push(vm.chartData.color[0]);
              for (i = 0; i < length; i++) {
                data[i].push(vm.chartData.data[i][1]);
              }
            }
            if (vm.PR_operator.indexOf("联通") > -1) {
              color.push(vm.chartData.color[1]);
              for (i = 0; i < length; i++) {
                data[i].push(vm.chartData.data[i][2]);
              }
            }
            if (vm.PR_operator.indexOf("电信") > -1) {
              color.push(vm.chartData.color[2]);
              for (i = 0; i < length; i++) {
                data[i].push(vm.chartData.data[i][3]);
              }
            }
          }
          setTimeout(function() {
            vm.drawLine();
          }, 1000);
          let temp = {
            title: vm.chartData.title,
            id: vm.chartData.id,
            height: vm.chartData.height,
            color: color,
            data: data
          };
          // console.log(temp);
          return temp;
        }
        return vm.chartData;
      },

      set: function(newValue) {}
    }
  },

  data() {
    return {};
  },
  mounted() {
    let vm = this;
    setTimeout(function() {
      vm.drawLine();
    }, 1000);
  },
  methods: {
    drawLine() {
      var barChartSingle = this.$echarts.init(
        document.getElementById(this.chartData_Change.id)
      );
      let seriesData = [];
      //设置series数据条数
      for (let i = 1; i <= this.chartData_Change.data[0].length - 1; i++) {
        seriesData.push({ type: "bar", barWidth: "12" });
      }
      var option = {
        color: this.chartData_Change.color,
        textStyle: {
          color: "rgba(0, 0, 0, 0.65)"
        },
        title: {
          text: this.chartData_Change.title,
          x: "left",
          y: "0",
          textStyle: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14"
          }
        },
        legend: {
          top: "10%",
          itemWidth: 12,
          itemHeight: 7
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          },
          textStyle: {
            align: "left"
          }
        },
        //图表自带工具
        toolbox: {
          show: true,
          top: "8%",
          right: "6%",
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          top: "30%",
          left: "10%",
          right: "1%",
          bottom: "10%"
        },
        dataset: {
          source: this.chartData_Change.data
        },
        xAxis: {
          type: "category",
          axisLabel: {
            //横坐标类目文字
            show: true,
            interval: 0, // 坐标轴显示不全问题解决方案
            textStyle: {
              fontSize: "12" //设置横坐标轴文字大小
            }
          },
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            lineStyle: {
              color: "rgba(0,0,0,0.65)" //设置横坐标轴线颜色
            }
          }
        },
        yAxis: {
          // 刻度线的设置
          splitLine: {
            show: true,
            lineStyle: {
              color: "#939393",
              type: "dotted",
              opacity: 0.2
            }
          },
          axisLine: {
            show: false, //Y轴不显示
            lineStyle: {
              color: "rgba(0,0,0,0.65)" //设置横坐标轴线颜色
            }
          },
          axisLabel: {
            //横坐标类目文字
            show: true,
            textStyle: {
              fontSize: "12" //设置横坐标轴文字颜大小
            }
          },
          axisTick: {
            show: false //设置坐标轴刻度不显示
          }
        },
        series: seriesData
      };
      barChartSingle.clear();
      barChartSingle.setOption(option);
      window.addEventListener("resize", () => {
        barChartSingle.resize();
      });
    }
  }
};
</script>
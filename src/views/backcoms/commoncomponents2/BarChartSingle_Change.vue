<template>
  <div class="height_auto">
    <!-- <el-row :id="chartData.id" style="height:300px;"></el-row> -->
    <el-row :id="chartData_Change.id" style="height:300px;"></el-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "BarChartSingle_Change",
  props: {
    chartData: {
      type: Object
    }
  },
  computed: {
    ...mapGetters(["PR_week"]),
    chartData_Change: {
      get: function () {
        let vm = this;
        if (vm.chartData.id == "GT_UVWR1_I1" ||
          vm.chartData.id == "GT_UVWR1_I2" ||
          vm.chartData.id == "GT_UVWR1_I3" ||
          vm.chartData.id == "GT_UVWR1_U1" ||
          vm.chartData.id == "GT_UVWR1_U2" ||
          vm.chartData.id == "GT_UVWR1_U3" ||
          vm.chartData.id == "GT_UVWR1_O1" ||
          vm.chartData.id == "GT_UVWR1_O2" ||
          vm.chartData.id == "GT_UVWR1_O3" ||
          vm.chartData.id == "GT_UVWR1_J3" ||
          vm.chartData.id == "GT_UVWR1_V3" ||
          vm.chartData.id == "GT_UVWR1_P3"
        ) {
          setTimeout(function () {
            vm.drawLine();
          }, 1000);
          if (vm.PR_week) {
            //do nothing  监听视图变化作用
          }
        }
        return vm.chartData;
      },
      set: function (newValue) { }
    }
  },
  watch: {
    PR_week(newValue, oldValue) {
      let vm = this;
      setTimeout(function () {
        vm.drawLine();
      }, 1000);
    },
  },
  data() {
    return {};
  },
  mounted() {
    let vm = this;
    setTimeout(function () {
      vm.drawLine();
    }, 1000);
  },
  methods: {
    drawLine() {
      var m_barWidth = this.chartData_Change.m_barWidth;
      var ifYaxisShow = this.chartData_Change.ifYaxisShow;
      var ifLegendShow = this.chartData_Change.ifLegendShow;
      var Ybool;
      if (ifYaxisShow) {
        Ybool = {
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
        };
      } else {
        Ybool = {
          axisLabel: {
            formatter: function () {
              return ""; // 隐藏Y左边数据
            }
          },
          // 刻度线的设置
          splitLine: {
            show: false
          },
          axisLine: {
            show: false, //Y轴不显示
            lineStyle: {
              color: "rgba(0,0,0,0.65)" //设置横坐标轴线颜色
            }
          },
          axisLabel: {
            //横坐标类目文字
            show: false,
          },
          axisTick: {
            show: false //设置坐标轴刻度不显示
          }
        };
      }

      var barChartSingle = this.$echarts.init(
        document.getElementById(this.chartData_Change.id)
      );
      let seriesData = [];
      //设置series数据条数
      for (let i = 1; i <= this.chartData_Change.data[0].length - 1; i++) {
        seriesData.push({ type: "bar", barWidth: m_barWidth });
      }
      var option = {
        color: this.chartData_Change.color,
        title: {
          text: this.chartData_Change.title,
          x: "left",
          y: "7%",
          textStyle: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14"
          }
        },
        legend: {
          show: ifLegendShow,
          top: "8%",
          // right: "20%",
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
          top: "6%",
          right: "6%",
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          containLabel: true,
          top: "25%",
          left: "10",
          right: "15",
          bottom: "10"
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
            },
            formatter: function (val) {
              //验证后台返回的名称中是否含有空格，如有，需要做换行
              var reg = /\s/
              if (reg.test(val)) {
                let name = val.trim().split(/\s+/)
                let value = name[0] + '\n' + name[1]
                return value;
              } else {
                return val
              }
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
        yAxis: Ybool,
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
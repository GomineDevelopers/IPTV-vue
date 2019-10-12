<template>
  <div class="height_auto">
    <!-- <el-row style="height:500px;" :id="chartData.id"></el-row> -->
    <el-row style="height:500px;" :id="chartData_Change.id"></el-row>
    <!-- <div v-show="false">{{PR_operator}}{{chartData}}{{chartData_Change}}</div> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Vue from "vue";

export default {
  name: "BarChartsStack_Change",
  props: {
    chartData: {
      type: Object
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PR_operator"]),
    chartData_Change: {
      get: function () {
        let vm = this;
        let color = [];
        let data = [];
        if (vm.chartData.id == "GT_UVWR1_B2") {
          if (vm.PR_operator == null || vm.PR_operator.length == 0) {
            setTimeout(function () {
              vm.drawLine();
            }, 1000);
            return vm.chartData;
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
            color.push(vm.chartData.color[3]);
            for (i = 0; i < length; i++) {
              data[i].push(vm.chartData.data[i][4]);
            }
            setTimeout(function () {
              vm.drawLine();
            }, 300);
            return {
              title: vm.chartData.title,
              id: vm.chartData.id,
              color: color,
              data: data
            };
          }
        }
        setTimeout(function () {
          vm.drawLine();
        }, 300);
        return vm.chartData;
      },
      set: function (newValue) { }
    }
  },

  mounted() {
    let vm = this;
    setTimeout(function () {
      vm.drawLine();
    }, 1000);
  },
  methods: {
    drawLine() {
      let vm = this;
      var barGraphChart = vm.$echarts.init(
        document.getElementById(vm.chartData_Change.id)
      );
      let seriesData = [];
      //设置series数据条数
      // for (let i = 1; i <= vm.chartData_Change.data[0].length - 1; i++) {
      //   seriesData.push({ type: 'bar', stack: '堆叠', barWidth: '12' })
      // }
      let series = [];
      let length = vm.chartData_Change.color.length;
      let i;
      for (i = 0; i < length; i++) {
        if (i < length - 1) {
          series.push({
            type: "bar",
            stack: "堆叠",
            barWidth: "40%",
            yAxisIndex: "0",
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  color: "black"
                }
              }
            }
          });
        }
        if (i == length - 1) {
          series.push({
            type: "line",
            stack: "堆叠",
            yAxisIndex: "1",
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  color: "black",
                  formatter: function (value) {
                    // return "{a|" + value.data + "}";
                    // console.log(value);
                    return value.data[i] + "%";
                  }
                }
              }
            }
          });
        }
      }
      // console.log(series);

      var option = {
        color: vm.chartData_Change.color,
        title: {
          text: vm.chartData_Change.title,
          x: "left",
          y: "7%",
          textStyle: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14"
          }
        },
        legend: {
          top: "18%",
          right: "20%",
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
          top: "16%",
          right: "6%",
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          top: "35%",
          left: "8%",
          right: "1%",
          bottom: "10%"
        },
        dataset: {
          source: vm.chartData_Change.data
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
        // yAxis: {
        //   // 刻度线的设置
        //   splitLine: {
        //     show: false
        //   },
        //   axisLine: {
        //     show: false, //Y轴不显示
        //     lineStyle: {
        //       color: "rgba(0,0,0,0.65)" //设置横坐标轴线颜色
        //     }
        //   },
        //   axisLabel: {
        //     //横坐标类目文字
        //     show: true,
        //     textStyle: {
        //       fontSize: "12" //设置横坐标轴文字颜大小
        //     }
        //   },
        //   axisTick: {
        //     show: false //设置坐标轴刻度不显示
        //   }
        // },
        // yAxis: [
        //   //两个y轴
        //   {
        //     gridIndex: 0,
        //     axisTick: {
        //       show: false //设置坐标轴刻度不显示
        //     },
        //     axisLine: {
        //       show: false
        //     },
        //     // 刻度线的设置
        //     splitLine: {
        //       show: true,
        //       lineStyle: {
        //         color: "#939393",
        //         type: "dotted",
        //         opacity: 0.2
        //       }
        //     }
        //   },
        //   {
        //     type: "value",
        //     axisLabel: {
        //       formatter: "{value}%"
        //     },
        //     gridIndex: 0,
        //     axisTick: {
        //       show: false //设置坐标轴刻度不显示
        //     },
        //     axisLine: {
        //       show: false
        //     },
        //     // 刻度线的设置
        //     splitLine: {
        //       show: true,
        //       lineStyle: {
        //         color: "#939393",
        //         type: "dotted",
        //         opacity: 0.2
        //       }
        //     }
        //   }
        // ],
        yAxis: [
          {
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
          {
            type: "value",
            gridIndex: 0,
            axisTick: {
              show: false //设置坐标轴刻度不显示
            },
            axisLabel: {
              show: true,
              formatter: "{value}%", //右侧Y轴文字显示
              textStyle: {
                color: "#333"
              }
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
        // series: seriesData
        series: series
      };
      barGraphChart.clear();
      barGraphChart.setOption(option);
      window.addEventListener("resize", () => {
        barGraphChart.resize();
      });
    }
  }
};
</script>
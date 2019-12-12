<template>
  <div class="height_auto">
    <!-- <el-row :id="chartData.id" style="height:300px;"></el-row> -->
    <!-- <el-row :id="chartData.id" :style="chartData.height"></el-row> -->
    <el-row :id="chartData_Change.id" :style="chartData_Change.height"></el-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "BarChartSingle_Change2",
  props: {
    chartData: {
      type: Object
    }
  },
  computed: {
    ...mapGetters(["PR_operator", "PR_week"]),

    chartData_Change: {
      get: function() {
        try {
          let vm = this;
          let data = [];
          if (vm.chartData.id == "GT_UVWR1_D1") {
            if (vm.PR_operator == null || vm.PR_operator.length == 0) {
              setTimeout(function() {
                vm.drawLine();
              }, 1000);
              return vm.chartData;
            } else {
              data.push(vm.chartData.data[0]);
              if (vm.PR_operator.indexOf("移动") > -1) {
                data.push(vm.chartData.data[1]);
              }
              if (vm.PR_operator.indexOf("联通") > -1) {
                data.push(vm.chartData.data[2]);
              }
              if (vm.PR_operator.indexOf("电信") > -1) {
                data.push(vm.chartData.data[3]);
              }
              setTimeout(function() {
                vm.drawLine();
              }, 1000);
              return {
                data: data,
                title: vm.chartData.title,
                id: vm.chartData.id,
                height: vm.chartData.height,
                color: vm.chartData.color,
                ifYaxisShow: vm.chartData.ifYaxisShow,
                ifLegendShow: vm.chartData.ifLegendShow,
                m_barWidth: vm.chartData.m_barWidth
              };
            }
          } else if (vm.chartData.id == "GT_UVWR1_Y1") {
            setTimeout(function() {
              vm.drawLine();
            }, 1000);
            if (vm.PR_week) {
              //do nothing  监听视图变化作用
            }
          }
          if (
            vm.chartData.id == "MOWR_m7_A1" ||
            vm.chartData.id == "MOWR_m7_A2" ||
            vm.chartData.id == "MOWR_m7_A3"
          ) {
            if (vm.PR_week) {
              // do nothing. --监听
            }
          }

          setTimeout(function() {
            vm.drawLine();
          }, 1000);
          return vm.chartData;
        } catch (error) {
          console.log(error);
        }
      },
      set: function(newValue) {}
    }
  },
  watch: {
    PR_week(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 1000);
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
      try {
        var m_barWidth = this.chartData_Change.m_barWidth;
        var ifYaxisShow = this.chartData_Change.ifYaxisShow;
        var ifLegendShow = this.chartData_Change.ifLegendShow;
        var chartId = this.chartData_Change.id;
        var Ybool;
        var tooltip;
        if (ifYaxisShow) {
          (tooltip = {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            },
            textStyle: {
              align: "left"
            }
          }),
            (Ybool = {
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
            });
        }
        if (ifYaxisShow && this.chartData_Change.id == "GT_UVWR1_D1") {
          (tooltip = {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            },
            textStyle: {
              align: "left"
            },
            formatter: function(params) {
              // console.log(params)
              let length = params.length;

              let itemName = params[0].axisValue; //运营商名称
              let title = params[0].seriesName; //日期
              let title2 = params[1].seriesName; //日期
              let value1 = params[0].data[1];
              let value2 = params[1].data[2];
              if (length == 1) {
                return itemName + "<br/>" + title + ": " + value1 + "%";
              }
              if (length == 2) {
                return (
                  itemName +
                  "<br/>" +
                  title +
                  ": " +
                  value1 +
                  "%" +
                  "<br/>" +
                  title2 +
                  ": " +
                  value2 +
                  "%"
                );
              }
            }
          }),
            (Ybool = {
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
                },
                formatter: "{value}%"
              },
              axisTick: {
                show: false //设置坐标轴刻度不显示
              }
            });
        } else {
          (tooltip = {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            },
            textStyle: {
              align: "left"
            }
          }),
            (Ybool = {
              axisLabel: {
                formatter: function() {
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
                show: false
              },
              axisTick: {
                show: false //设置坐标轴刻度不显示
              }
            });
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
            // show: ifLegendShow,
            show: ifLegendShow,
            top: "5%",
            // right: "20%",
            itemWidth: 12,
            itemHeight: 7
          },
          tooltip: tooltip,
          //图表自带工具
          toolbox: {
            show: true,
            top: "3%",
            right: "6%",
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            containLabel: true,
            top: "20%",
            left: "10",
            right: "10",
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
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
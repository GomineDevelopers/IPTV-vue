<template>
  <div class="height_auto">
    <el-row class="height_auto" :id="chartData_Change.id"></el-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Vue from "vue";

export default {
  name: "BarChartsStack_ShowTop",
  props: {
    chartData: {
      type: Object
    }
  },
  watch: {
    chartData(newValue, oldValue) {
      let vm = this;
      console.log("@@@@@");
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },

    UVB_region(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    UVB_operator(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    UVB_playmode(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    UVB_programa(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    UVB_contenttype(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    UVB_day(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    UVB_week(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    UVB_picker(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    UVB_time_type(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },

    ADD_VIP_region(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    ADD_VIP_operator(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    ADD_VIP_programa(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    ADD_VIP_valueAddedPackage(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    ADD_VIP_day(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    ADD_VIP_week(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    ADD_VIP_picker(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    ADD_VIP_time_type(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },

    ADD_VIP_targetOption(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    UVB_targetOption(newValue, oldValue) {
      let vm = this;
      console.log("▲▲▲▲");
      console.log(newValue);
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    }
  },
  computed: {
    ...mapGetters([
      "UVB_region",
      "UVB_operator",
      "UVB_playmode",
      "UVB_programa",
      "UVB_contenttype",
      "UVB_day",
      "UVB_week",
      "UVB_picker",
      "UVB_time_type",

      "ADD_VIP_region",
      "ADD_VIP_operator",
      "ADD_VIP_programa",
      "ADD_VIP_valueAddedPackage",
      "ADD_VIP_day",
      "ADD_VIP_week",
      "ADD_VIP_picker",
      "ADD_VIP_time_type",

      "ADD_VIP_targetOption",
      "UVB_targetOption"
    ]),
    chartData_Change: {
      get: function() {
        let vm = this;
        let data = [];
        let color = [];

        setTimeout(function() {
          vm.drawLine();
        }, 2000);
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
    }, 2000);
  },
  methods: {
    drawLine() {
      let vm = this;
      var barGraphChart = vm.$echarts.init(
        document.getElementById(vm.chartData_Change.id)
      );
      let seriesData = [];
      //设置series数据条数
      console.log(vm.chartData);
      console.log(vm.chartData_Change);
      try {
        // 处理顶部Top问题

        let m_UVB_targetOption = vm.UVB_targetOption;
        let m_ADD_VIP_targetOption = vm.ADD_VIP_targetOption;

        let region_t = [];
        for (let z = 1; z < vm.chartData_Change.data.length; z++) {
          region_t.push(vm.chartData_Change.data[z][0]);
        }
        let length_t = vm.chartData_Change.data[0].length;
        for (let i = 1; i <= length_t - 1; i++) {
          // seriesData.push({ type: "bar", stack: "堆叠", barWidth: "12" });
          let barType = 0;
          if (i == length_t - 1) {
            barType = 1;
          }
          seriesData.push(seriesItem(region_t, barType));
        }
        function seriesItem(myregion, mybarType) {
          if (mybarType == 1) {
            return {
              type: "bar",
              stack: "堆叠",
              // stack: "总量",
              barWidth: "12",
              label: {
                normal: {
                  show: true,
                  position: "top",
                  formatter: function(params) {
                    /////
                    // console.log(params)
                    let region_index = 0;
                    for (let t = 0; t < myregion.length; t++) {
                      if (myregion[t] == params.name) {
                        region_index = t;
                      }
                    }
                    let m_perAC_SumOperator = 0;
                    let region_index_data =
                      vm.chartData_Change.data[region_index + 1];
                    for (let z = 1; z < region_index_data.length; z++) {
                      m_perAC_SumOperator += parseFloat(region_index_data[z]);
                    }
                    if (vm.chartData_Change.id == "operatorChart") {
                      // console.log("@@@@@@@@@@@@@@@@");
                      // console.log(m_UVB_targetOption);
                      if(m_UVB_targetOption == "次均收视时长（时）" || m_UVB_targetOption == "户均收视次数（次）"){
                        return ""
                      }
                      return (
                        String(
                          (parseFloat(m_perAC_SumOperator) / 10000).toFixed(1)
                        ) + "万"
                      );
                    }
                    if (vm.chartData_Change.id == "operatorChart_vip") {
                      // console.log("@@@@@@@@@@@@@@@@");
                      // console.log(m_ADD_VIP_targetOption);
                      if(m_ADD_VIP_targetOption == "次均收视时长（时）" || m_ADD_VIP_targetOption == "户均收视次数（次）"){
                        return ""
                      }
                      return m_perAC_SumOperator;
                    }
                    // 关于次均、户均的，堆叠图不能直接加

                    /////
                    return "";

                  },
                  textStyle: {
                    color: "black",
                    fontSize: 12
                  }
                }
              }
            };
          }
          return { type: "bar", stack: "堆叠", barWidth: "12" };
        }
      } catch (error) {
        console.log(error);
      }
      var option = {
        color: vm.chartData_Change.color,
        title: {
          text: vm.chartData_Change.title,
          x: "left",
          y: "10",
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
          top: "35%",
          left: "10",
          right: "5",
          bottom: "10",
          containLabel: true
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
        yAxis: {
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
      barGraphChart.clear();
      barGraphChart.setOption(option);
      window.addEventListener("resize", () => {
        barGraphChart.resize();
      });
    }
  }
};
</script>
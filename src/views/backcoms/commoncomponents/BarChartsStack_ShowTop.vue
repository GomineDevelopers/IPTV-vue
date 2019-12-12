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
      // console.log("@@@@@");
      setTimeout(function() {
        vm.drawLine();
      }, 3000);
    },

    UVB_region(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 3000);
    },
    UVB_operator(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 3000);
    },
    UVB_playmode(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 3000);
    },
    UVB_programa(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 3000);
    },
    UVB_contenttype(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 3000);
    },
    UVB_day(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 3000);
    },
    UVB_week(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 3000);
    },
    UVB_picker(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 3000);
    },
    UVB_time_type(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 3000);
    },

    ADD_VIP_region(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 3000);
    },
    ADD_VIP_operator(newValue, oldValue) {
      let vm = this;
      // console.log("!!!!!");
      // console.log(newValue);

      setTimeout(function() {
        vm.drawLine();
      }, 3000);
    },
    ADD_VIP_programa(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 3000);
    },
    ADD_VIP_valueAddedPackage(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 3000);
    },
    ADD_VIP_day(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 3000);
    },
    ADD_VIP_week(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 3000);
    },
    ADD_VIP_picker(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 3000);
    },
    ADD_VIP_time_type(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 3000);
    },

    ADD_VIP_targetOption(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 3000);
    },
    UVB_targetOption(newValue, oldValue) {
      let vm = this;
      // console.log("▲▲▲▲");
      // console.log(newValue);
      setTimeout(function() {
        vm.drawLine();
      }, 3000);
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
        try {
          let vm = this;
          let data = [];
          let color = [];

          setTimeout(function() {
            vm.drawLine();
          }, 3000);
          return vm.chartData;
        } catch (error) {
          console.log(error);
        }
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
    }, 3000);
  },
  methods: {
    drawLine() {
      try {
        let vm = this;
        var barGraphChart = vm.$echarts.init(
          document.getElementById(vm.chartData_Change.id)
        );
        barGraphChart.clear();

        let seriesData = [];
        //设置series数据条数
        // console.log(vm.chartData);
        // console.log(vm.chartData_Change);
        // let temp_chartData_Change = [];
        let temp_chartData_Change = vm.chartData_Change;
        if (vm.chartData_Change.data == undefined) {
          return;
        }
        // 特殊处理 增值业务-VIP情况 （与用户收视行为处理方式不同 --收视行为的数据处理时已经OK）
        let temp_data = [];
        if (vm.chartData_Change.id == "operatorChart_vip") {
          let length_ttt = temp_chartData_Change.data.length;
          for (let zz = 0; zz < length_ttt; zz++) {
            temp_data.push([]);
            if (temp_chartData_Change.data[zz].length == 4) {
              temp_data[zz].push(temp_chartData_Change.data[zz][0]);
              if (vm.ADD_VIP_operator.indexOf("移动") > -1) {
                temp_data[zz].push(temp_chartData_Change.data[zz][1]);
              }
              if (vm.ADD_VIP_operator.indexOf("联通") > -1) {
                temp_data[zz].push(temp_chartData_Change.data[zz][2]);
              }
              if (vm.ADD_VIP_operator.indexOf("电信") > -1) {
                temp_data[zz].push(temp_chartData_Change.data[zz][3]);
              }
            }
            if (temp_chartData_Change.data[zz].length == 3) {
              temp_data[zz].push(temp_chartData_Change.data[zz][0]);
              let if_hasYd = false;
              // 移动必为1
              if (vm.ADD_VIP_operator.indexOf("移动") > -1) {
                temp_data[zz].push(temp_chartData_Change.data[zz][1]);
                if_hasYd = true;
              }
              // 联通 1 或 2
              if (
                vm.ADD_VIP_operator.indexOf("联通") > -1 &&
                if_hasYd == true
              ) {
                temp_data[zz].push(temp_chartData_Change.data[zz][2]);
              }
              if (
                vm.ADD_VIP_operator.indexOf("联通") > -1 &&
                if_hasYd == false
              ) {
                temp_data[zz].push(temp_chartData_Change.data[zz][1]);
              }
              // 电信必为2
              if (vm.ADD_VIP_operator.indexOf("电信") > -1) {
                temp_data[zz].push(temp_chartData_Change.data[zz][2]);
              }
            }
            if (temp_chartData_Change.data[zz].length == 2) {
              temp_data[zz].push(temp_chartData_Change.data[zz][0]);
              if (vm.ADD_VIP_operator.indexOf("移动") > -1) {
                temp_data[zz].push(temp_chartData_Change.data[zz][1]);
              }
              if (vm.ADD_VIP_operator.indexOf("联通") > -1) {
                temp_data[zz].push(temp_chartData_Change.data[zz][1]);
              }
              if (vm.ADD_VIP_operator.indexOf("电信") > -1) {
                temp_data[zz].push(temp_chartData_Change.data[zz][1]);
              }
            }
          }
          temp_chartData_Change.data = temp_data;
        }

        try {
          // 处理顶部Top问题

          let m_UVB_targetOption = vm.UVB_targetOption;
          let m_ADD_VIP_targetOption = vm.ADD_VIP_targetOption;

          let region_t = [];
          for (let z = 1; z < temp_chartData_Change.data.length; z++) {
            region_t.push(temp_chartData_Change.data[z][0]);
          }
          let length_t = temp_chartData_Change.data[0].length;
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
                        temp_chartData_Change.data[region_index + 1];
                      for (let z = 1; z < region_index_data.length; z++) {
                        m_perAC_SumOperator += parseFloat(region_index_data[z]);
                      }
                      if (temp_chartData_Change.id == "operatorChart") {
                        // console.log("@@@@@@@@@@@@@@@@");
                        // console.log(m_UVB_targetOption);
                        if (
                          m_UVB_targetOption == "次均收视时长（时）" ||
                          m_UVB_targetOption == "户均收视次数（次）"
                        ) {
                          return "";
                        }
                        return (
                          String(
                            (parseFloat(m_perAC_SumOperator) / 10000).toFixed(1)
                          ) + "万"
                        );
                      }
                      if (temp_chartData_Change.id == "operatorChart_vip") {
                        // console.log("@@@@@@@@@@@@@@@@");
                        // console.log(m_ADD_VIP_targetOption);
                        if (
                          m_ADD_VIP_targetOption == "次均收视时长（时）" ||
                          m_ADD_VIP_targetOption == "户均收视次数（次）"
                        ) {
                          return "";
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
          return; // 初次无数据不渲染-直接返回
        }
        var option = {
          color: temp_chartData_Change.color,
          title: {
            text: temp_chartData_Change.title,
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
            source: temp_chartData_Change.data
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
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
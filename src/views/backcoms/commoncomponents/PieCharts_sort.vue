<template>
  <div class="height_auto">
    <!-- <el-row class="height_auto" :id="chartData.id"></el-row> -->
    <el-row class="height_auto" :id="chartData_Change.id"></el-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "PieCharts_sort", //饼图组件
  props: {
    chartData: {
      type: Object
    }
  },
  watch: {
    PR_operator(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    PR_week(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    PR_picker(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    PR_value_specialName(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    chartData(newValue, oldValue) {
      let vm = this;
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
    }
  },
  computed: {
    ...mapGetters([
      "PR_operator",
      "ADD_VIP_region",
      "ADD_VIP_playmode",
      "PR_week",
      "PR_picker",
      "PR_value_specialName",
      "UVB_region",
      "UVB_operator",
      "UVB_playmode",
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
      "ADD_VIP_time_type"
    ]),
    chartData_Change: {
      get: function() {
        try {
          let vm = this;

          let data = [];
          let color = [];

          // ★由于该组件是复用组件-涉及不同筛选条件的渲染-用唯一值（id）做数据+渲染
          if (vm.chartData.id == "operatorProportionChart") {
            if (this.PR_operator == null || this.PR_operator.length == 0) {
              data.push(vm.chartData.data[0]);
              data.push(vm.chartData.data[1]);
              data.push(vm.chartData.data[2]);
              color.push(vm.chartData.color[0]);
              color.push(vm.chartData.color[1]);
              color.push(vm.chartData.color[2]);
            } else {
              if (this.PR_operator.indexOf("移动") > -1) {
                data.push(vm.chartData.data[0]);
                color.push(vm.chartData.color[0]);
              }

              if (this.PR_operator.indexOf("联通") > -1) {
                data.push(vm.chartData.data[1]);
                color.push(vm.chartData.color[1]);
              }
              if (this.PR_operator.indexOf("电信") > -1) {
                data.push(vm.chartData.data[2]);
                color.push(vm.chartData.color[2]);
              }
            }
            // 视图更新
            setTimeout(function() {
              vm.drawLine();
            }, 2000);
            return {
              title: vm.chartData.title,
              id: vm.chartData.id,
              color: color,
              data: data
            };
          }

          if (vm.chartData.id == "regionChart") {
            if (vm.UVB_playmode) {
              // do nothing. -- 监听刷新
            }
            if (vm.UVB_day) {
              // do nothing. --监听
            }
            if (vm.UVB_week) {
              // do nothing. --监听
            }
            if (vm.UVB_picker) {
              // do nothing. --监听
            }
            if (vm.UVB_region == null || vm.UVB_region.length == 0) {
              color = vm.chartData.color;
              data = vm.chartData.data;
            } else {
              color = vm.chartData.color;
              data = vm.chartData.data;
            }
            // 视图更新
            setTimeout(function() {
              // console.log("regionChart 视图更新");
              vm.drawLine();
            }, 2000);
            return {
              title: vm.chartData.title,
              id: vm.chartData.id,
              color: color,
              data: data
            };
          }

          if (vm.chartData.id == "regionChart_vip") {
            if (vm.ADD_VIP_region == null || vm.ADD_VIP_region.length == 0) {
              color = vm.chartData.color;
              data = vm.chartData.data;
            } else {
              color = vm.chartData.color;
              data = vm.chartData.data;
            }
            // 视图更新
            setTimeout(function() {
              vm.drawLine();
            }, 2000);
            return {
              title: vm.chartData.title,
              id: vm.chartData.id,
              color: color,
              data: data
            };
          }
          if (vm.chartData.id == "playChart") {
            if (vm.UVB_playmode == null || vm.UVB_playmode.length == 0) {
              color = vm.chartData.color;
              data = vm.chartData.data;
            } else {
              color = vm.chartData.color;
              data = vm.chartData.data;
            }
            // 视图更新
            setTimeout(function() {
              vm.drawLine();
            }, 2000);
            return {
              title: vm.chartData.title,
              id: vm.chartData.id,
              color: color,
              data: data
            };
          }
          if (vm.chartData.id == "playChart_vip") {
            if (
              vm.ADD_VIP_playmode == null ||
              vm.ADD_VIP_playmode.length == 0
            ) {
              color = vm.chartData.color;
              data = vm.chartData.data;
            } else {
              color = vm.chartData.color;
              data = vm.chartData.data;
            }
            // 视图更新
            setTimeout(function() {
              vm.drawLine();
            }, 2000);
            return {
              title: vm.chartData.title,
              id: vm.chartData.id,
              color: color,
              data: data
            };
          }
          setTimeout(function() {
            vm.drawLine();
          }, 2000);
          return vm.chartData;
        } catch (error) {
          console.log(error);
        }
      },

      set: function(newValue) {
        //
      }
    }
  },

  data() {
    return {};
  },
  methods: {
    drawLine() {
      try {
        var pieChart = this.$echarts.init(
          document.getElementById(this.chartData_Change.id)
        );
        let m_data_index = [];
        // m_data_index = this.chartData_Change.data

        //////

        // 排序
        //  data: [
        // { value: 1335, name: "贵阳" },
        // { value: 810, name: "遵义" },
        // { value: 648, name: "安顺" },
        // { value: 148, name: "黔南" },
        // { value: 108, name: "黔东南" },
        // { value: 248, name: "铜仁" },
        // { value: 535, name: "毕节" },
        // { value: 234, name: "六盘水" },
        // { value: 348, name: "黔西南" }
        // ]
        // this.chartData_Change.data
        // m_data_index;
        // let temp_data = this.chartData_Change.data;
        try {
          let temp_data = [];
          // console.log(this.chartData_Change.data);
          if (this.chartData_Change.data == undefined) {
            return;
          }
          temp_data = this.chartData_Change.data;
          for (let i = 0; i < temp_data.length - 1; i++) {
            //决定每一轮比较多少次
            for (let j = 0; j < temp_data.length - i - 1; j++) {
              if (temp_data[j].value < temp_data[j + 1].value) {
                // 判断第二位
                let tmp = temp_data[j];
                temp_data[j] = temp_data[j + 1];
                temp_data[j + 1] = tmp;
              }
            }
          }
          for (let z = 0; z < temp_data.length; z++) {
            m_data_index.push(temp_data[z]);
          }
          // console.log(this.chartData_Change.data);
          // console.log(temp_data);
        } catch (error) {
          console.log(error);
          return; // 初次无数据不渲染-直接返回
        }
        //////

        var option = {
          color: this.chartData_Change.color,
          title: {
            text: this.chartData_Change.title,
            x: "left",
            y: "10",
            textStyle: {
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "14"
            }
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          //图表自带工具
          toolbox: {
            show: true,
            top: "16%",
            right: "10%",
            feature: {
              saveAsImage: {}
            }
          },
          series: [
            {
              name: this.chartData_Change.title,
              type: "pie",
              minAngle: 15,
              radius: "55%",
              center: ["50%", "60%"],
              data: m_data_index,
              // itemStyle: {
              //   emphasis: {
              //     shadowBlur: 10,
              //     shadowOffsetX: 0,
              //     shadowColor: "rgba(0, 0, 0, 0.5)"
              //   }
              // },
              // //// 新增
              selectedMode: "single",

              label: {
                normal: {
                  // position: "inner",
                  // color: "#000",
                  fontSize: "10",
                  formatter: "\n{b}:\n {c}"
                }
              },
              labelLine: {
                show: false,
                normal: {
                  smooth: 0.2,
                  length: 1
                }
              },
              emphasis: false,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)"
                }
              }
              // ////
            }
          ]
        };

        // 使用刚指定的配置项和数据显示图表。
        pieChart.clear();
        pieChart.setOption(option);
        window.addEventListener("resize", () => {
          pieChart.resize();
        });
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    let vm = this;
    setTimeout(function() {
      vm.drawLine();
    }, 1000);
  }
};
</script>
<style scoped>
</style>
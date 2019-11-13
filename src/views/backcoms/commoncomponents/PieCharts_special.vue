<template>
  <div class="height_auto">
    <!-- <el-row class="height_auto" :id="chartData.id"></el-row> -->
    <el-row class="height_auto" :id="chartData_Change.id"></el-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "PieCharts_special", //饼图组件
  props: {
    chartData: {
      type: Object
    }
  },
  watch: {
    chartData(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    PR_operator(newValue, oldValue) {
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
  },
  computed: {
    ...mapGetters([
      "PR_operator",
      "PR_picker",
      "PR_value_specialName",
    ]),
    chartData_Change: {
      get: function() {
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


        setTimeout(function() {
          vm.drawLine();
        }, 2000);
        return vm.chartData;
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
      var pieChart = this.$echarts.init(
        document.getElementById(this.chartData_Change.id)
      );
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
            radius: "55%",
            center: ["50%", "60%"],
            data: this.chartData_Change.data,
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
                color: "#000",
                fontSize: "10",
                formatter: "{b}:\n {c}"
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
    }
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    let vm = this;
    setTimeout(function() {
      vm.drawLine();
    }, 2000);
  }
};
</script>
<style scoped>
</style>
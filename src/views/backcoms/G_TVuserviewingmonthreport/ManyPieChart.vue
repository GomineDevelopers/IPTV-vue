<template>
  <div class="height_auto">
    <!-- <el-row class="height_auto" :id="pieData.id"></el-row> -->
    <el-row class="height_auto" :id="pieData_Change.id"></el-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "ManyPieChart", //四环饼图组件
  props: {
    pieData: {
      type: Object
    }
  },
  data() {
    return {};
  },
  mounted() {
    let vm = this;
    setTimeout(function() {
      vm.setLineChart();
    }, 2500);
  },
  watch: {
    PR_month(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 2500);
    },
    PR_operator(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 2500);
    },
    pieData(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 2500);
    }
  },
  computed: {
    ...mapGetters(["PR_operator", "PR_month"]),
    pieData_Change: {
      get: function() {
        let vm = this;

        if (
          vm.pieData.id == "liveViewingDuration" ||
          vm.pieData.id == "liveViewingUser" ||
          vm.pieData.id == "liveViewingTimes"
        ) {
          let content = [];
          let temp;
          let color = [];
          let data = [];
          if (this.PR_operator == null || this.PR_operator.length == 0) {
            content = vm.pieData.content;
            color = vm.pieData.color;
          } else {
            try {
              if (this.PR_operator.indexOf("移动") > -1) {
                color.push(vm.pieData.color[0]);
                data.push(vm.pieData.content[0].data[0]);
              }
              if (this.PR_operator.indexOf("联通") > -1) {
                color.push(vm.pieData.color[1]);
                data.push(vm.pieData.content[0].data[1]);
              }
              if (this.PR_operator.indexOf("电信") > -1) {
                color.push(vm.pieData.color[2]);
                data.push(vm.pieData.content[0].data[2]);
              }
              temp = {
                title: vm.pieData.content[0].title,
                data: data
              };
              content.push(temp);
            } catch (error) {
              console.log(error);
              return;
            }
          }
          // 视图更新
          setTimeout(function() {
            vm.setLineChart();
          }, 2500);

          let tempx = {
            title: vm.pieData.title,
            id: vm.pieData.id,
            color: color,
            content: content
          };
          return tempx;
        }
        setTimeout(function() {
          vm.setLineChart();
        }, 1000);
        return vm.pieData;
      },
      set: function(newValue) {}
    }
  },
  methods: {
    setLineChart() {
      // 基于准备好的dom，初始化echarts实例
      var pieChart = this.$echarts.init(
        document.getElementById(this.pieData_Change.id)
      );
      let series = [];

      if (this.pieData_Change.content.length >= 1) {
        let t1 = {
          name: this.pieData_Change.content[0].title,
          type: "pie",
          radius: ["60%", "75%"],
          center: ["50%", "56%"],
          data: this.pieData_Change.content[0].data,
          labelLine: {
            normal: {
              show: true
            }
          },
          label: {
            show: true,
            position: "inside",
            formatter: "{d}%",
            color: "#333"
          },
          itemStyle: {
            normal: {
              borderWidth: 3, //设置border的宽度有多大
              borderColor: "#fff"
            },
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
              borderWidth: 1, //设置border的宽度有多大
              borderColor: "#fff"
            }
          }
        };
        series.push(t1);
      }
      if (this.pieData_Change.content.length >= 2) {
        let t2 = {
          name: this.pieData_Change.content[1].title,
          type: "pie",
          radius: ["45%", "60%"],
          center: ["50%", "56%"],
          data: this.pieData_Change.content[1].data,
          labelLine: {
            normal: {
              show: false
            }
          },
          label: {
            show: true,
            position: "inside",
            formatter: "{d}%",
            color: "#333"
          },
          itemStyle: {
            normal: {
              borderWidth: 3, //设置border的宽度有多大
              borderColor: "#fff"
            },
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
              borderWidth: 1, //设置border的宽度有多大
              borderColor: "#fff"
            }
          }
        };
        series.push(t2);
      }
      if (this.pieData_Change.content.length >= 3) {
        let t3 = {
          name: this.pieData_Change.content[2].title,
          type: "pie",
          radius: ["30%", "45%"],
          center: ["50%", "56%"],
          data: this.pieData_Change.content[2].data,
          labelLine: {
            normal: {
              show: false
            }
          },
          label: {
            show: true,
            position: "inside",
            formatter: "{d}%",
            color: "#333"
          },
          itemStyle: {
            normal: {
              borderWidth: 3, //设置border的宽度有多大
              borderColor: "#fff"
            },
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
              borderWidth: 1, //设置border的宽度有多大
              borderColor: "#fff"
            }
          }
        };
        series.push(t3);
      }
      if (this.pieData_Change.content.length >= 4) {
        let t4 = {
          name: this.pieData_Change.content[3].title,
          type: "pie",
          radius: ["15%", "30%"],
          center: ["50%", "56%"],
          data: this.pieData_Change.content[3].data,
          labelLine: {
            normal: {
              show: false
            }
          },
          label: {
            show: true,
            position: "inside",
            formatter: "{d}%",
            color: "#333"
          },
          itemStyle: {
            normal: {
              borderWidth: 3, //设置border的宽度有多大
              borderColor: "#fff"
            },
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
              borderWidth: 1, //设置border的宽度有多大
              borderColor: "#fff"
            }
          }
        };
        series.push(t4);
      }
      if (this.pieData_Change.content.length >= 5) {
        let t5 = {
          name: this.pieData_Change.content[4].title,
          type: "pie",
          radius: ["2%", "15%"],
          center: ["50%", "56%"],
          data: this.pieData_Change.content[4].data,
          labelLine: {
            normal: {
              show: false
            }
          },
          label: {
            show: true,
            position: "inside",
            formatter: "{d}%",
            color: "#333"
          },
          itemStyle: {
            normal: {
              borderWidth: 3, //设置border的宽度有多大
              borderColor: "#fff"
            },
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
              borderWidth: 1, //设置border的宽度有多大
              borderColor: "#fff"
            }
          }
        };
        series.push(t5);
      }

      var option = {
        color: this.pieData_Change.color,
        title: {
          text: this.pieData_Change.title,
          x: "center",
          y: "7%",
          textStyle: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14"
          }
        },
        legend: {
          icon: "re",
          bottom: "1%",
          left: "3%",
          itemWidth: 12, // 设置宽度
          itemHeight: 7, // 设置高度
          itemGap: 10, // 设置间距
          padding: 0,
          orient: "vertical", //垂直显示
          textStyle: {
            fontSize: 14,
            color: "rgba(0, 0, 0, 0.65)"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        //图表自带工具
        toolbox: {
          show: true,
          top: "6%",
          right: "10%",
          feature: {
            saveAsImage: {}
          }
        },
        series: series
      };

      // 使用刚指定的配置项和数据显示图表。
      pieChart.clear();
      pieChart.setOption(option);
      window.addEventListener("resize", () => {
        pieChart.resize();
      });
    }
  }
};
</script>
<style scoped>
</style>
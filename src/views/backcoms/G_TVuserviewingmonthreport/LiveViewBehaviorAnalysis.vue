<template>
  <div class="height_auto">
    <!-- <div class="height_auto" :id="barListData.id"></div> -->
    <div class="height_auto" :id="barListData_Change.id"></div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "LiveViewBehaviorAnalysis", //直播收视行为分析（列表柱状图）
  props: {
    barListData: {
      type: Object
    }
  },
  data() {
    return {};
  },
  watch: {
    barListData(newValue, oldValue) {
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
    PR_week(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 2000);
    },
    PR_month(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 2000);
    }
  },
  mounted() {
    let vm = this;
    setTimeout(function() {
      vm.setLineChart();
    }, 2000);
  },
  computed: {
    ...mapGetters(["PR_week", "PR_month", "PR_operator"]),
    barListData_Change: {
      get: function() {
        try {
          let vm = this;
          if (vm.PR_week && vm.PR_month) {
            //  do nonthing. --监听
          }
          setTimeout(function() {
            vm.setLineChart();
          }, 2000);
          return vm.barListData;
        } catch (error) {
          console.log(error);
        }
      },
      set: function(newValue) {}
    }
  },
  methods: {
    setLineChart() {
      try {
        let vm = this;
        if (vm.barListData_Change.id == "payingUser") {
          // console.log("※※※※※※※※※※※※※※※※※※※※");
          // console.log(vm.barListData_Change);
        }

        var barListChart = this.$echarts.init(
          document.getElementById(this.barListData_Change.id)
        );
        let seriesData = [];
        if (
          this.barListData_Change.data.length == null ||
          this.barListData_Change.data <= 0
        ) {
          return false;
        }
        //设置series数据条数
        for (let i = 1; i <= this.barListData_Change.data[0].length - 1; i++) {
          seriesData.push({
            type: "bar",
            barWidth: "12",
            barGap: 0, //两条柱子之间的间隙
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: "right", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "black",
                    fontSize: 12
                  }
                }
              }
            }
          });
        }
        var option = {
          color: this.barListData_Change.color,
          textStyle: {
            color: "rgba(0, 0, 0, 0.65)"
          },
          title: {
            text: this.barListData_Change.title,
            x: "2%",
            y: "0%",
            textStyle: {
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "14"
            }
          },
          legend: {
            icon: "re",
            top: "5%",
            itemWidth: 12, // 设置宽度
            itemHeight: 7, // 设置高度
            itemGap: 20, // 设置间距
            textStyle: {
              fontSize: 14,
              color: "rgba(0, 0, 0, 0.65)"
            }
          },
          grid: {
            top: "12%",
            left: "40%",
            right: "8%",
            bottom: "5%"
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            },
            textStyle: {
              align: "left"
            }
          },
          //图表自带工具
          toolbox: {
            show: true,
            top: "4%",
            right: "6%",
            feature: {
              saveAsImage: {}
            }
          },
          dataset: {
            source: this.barListData_Change.data
          },
          xAxis: {
            type: "value",
            axisTick: {
              show: false //设置坐标轴刻度不显示
            },
            axisLabel: {
              show: false
            },
            // 刻度线的设置
            splitLine: {
              show: false
            },
            axisLine: {
              show: false //X轴不显示
            }
          },
          yAxis: {
            type: "category",
            gridIndex: 0,
            axisTick: {
              show: false //设置坐标轴刻度不显示
            },
            // 刻度线的设置
            splitLine: {
              show: false
            },
            axisLine: {
              show: true, //Y轴不显示
              lineStyle: {
                color: "rgba(0,0,0,0.65)" //设置横坐标轴线颜色
              }
            },
            axisLabel: {
              interval: 0,
              show: true,
              formatter: function(val) {
                var strs = val.split(""); //字符串数组
                var str = "";
                for (var i = 0, s; (s = strs[i++]); ) {
                  //遍历字符串数组
                  str += s;
                  if (!(i % 15)) str += "\n";
                }
                return str;
              }
            }
          },
          series: seriesData
        };
        barListChart.clear();
        barListChart.setOption(option);
        window.addEventListener("resize", () => {
          barListChart.resize();
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
<style scoped>
/* .pie_hollow_chart {
  height: 500px;
} */
</style>

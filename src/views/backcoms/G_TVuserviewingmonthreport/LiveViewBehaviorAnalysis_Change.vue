<template>
  <div class="height_auto">
    <!-- <div class="height_auto" :id="barListData.id"></div> -->
    <div class="height_auto" style="width:100%;" :id="barListData_Change.id"></div>
  </div>
</template>
<script>
export default {
  name: "LiveViewBehaviorAnalysis_Change", //直播收视行为分析（列表柱状图）
  props: {
    barListData: {
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
    }, 1000);
  },
  computed: {
    barListData_Change: {
      get: function() {
        let vm = this;
        setTimeout(function() {
          vm.setLineChart();
        }, 1000);
        return vm.barListData;
      },
      set: function(newValue) {}
    }
  },
  methods: {
    setLineChart() {
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
          barWidth: "9",
          barGap: 0, //两条柱子之间的间隙
          itemStyle: {
            normal: {
              label: {
                show: false, //开启显示
                position: "right", //在上方显示
                textStyle: {
                  //数值样式
                  color: "#ffffff",
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
          color: "rgba(2555, 2555, 2555, 0.65)"
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
          top: "0%",
          itemWidth: 12, // 设置宽度
          itemHeight: 7, // 设置高度
          itemGap: 20, // 设置间距
          textStyle: {
            fontSize: 12,
            color: "rgba(2555, 2555, 2555, 0.65)"
          }
        },
        grid: {
          top: "12%",
          left: "0",
          right: "8%",
          bottom: "1%",
          containLabel: true
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
        dataset: {
          source: this.barListData_Change.data
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          axisTick: {
            show: false //设置坐标轴刻度不显示
          },
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: "10" //设置坐标轴文字颜大小
            }
          },
          // 刻度线的设置
          splitLine: {
            show: true,
            lineStyle: {
              color: "#939393",
              opacity: 0.2
            }
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
            show: false,
            lineStyle: {
              color: "#939393",
              opacity: 0.2
            }
          },
          axisLine: {
            show: true, //Y轴不显示
            lineStyle: {
              color: "rgba(255,255,255,0.65)" //设置坐标轴线颜色
            }
          },
          axisLabel: {
            interval: 0,
            textStyle: {
              fontSize: "10" //设置横坐标轴文字颜大小
            },
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
    }
  }
};
</script>
<style scoped>
/* .pie_hollow_chart {
  height: 500px;
} */
</style>

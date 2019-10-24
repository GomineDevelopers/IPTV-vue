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
    return {
      current_value: 1 // 用于除以 千万之类的
    };
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
      let vm = this;
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
          },
          formatter: function(params) {
            let length = params.length;
            // console.log(params);
            // console.log(length);
            return (
              params[0].name +
              "<br/>" +
              params[0].seriesName +
              "：" +
              (((parseInt(params[0].value[1])) / vm.current_value).toFixed(2))+
              "<br/>" +
              params[1].seriesName +
              "：" +
              (((parseInt(params[0].value[2])) / vm.current_value).toFixed(2))
            );
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
            },
            formatter: function(value) {
              if (vm.barListData_Change.id == "GuizhouChannel") {
                // console.log(value);
                value = parseInt(value);
                // console.log(value);
                // console.log("~~~~~~~~~~~~~~~~~~~~!!!!!!");

                let m_Unit;
                let m_result;
                function Manage_Unit(Unit, result) {
                  // GuizhouChannel
                  // console.log("~~~~~~~~~~~~~~~~~~~~xxxxxxx");
                  vm.$store
                    .dispatch("set_GuizhouChannel_unit", Unit)
                    .then(function(response) {
                      // console.log("~~~~~~~~~~~~~~~~~~~~!!!!!!");
                      // console.log(result);
                    })
                    .catch(function(error) {
                      console.info(error);
                    });
                }
                if (value == 0) {
                  return 0;
                }
                // Manage_Unit("千万", "");

                if (vm.barListData_Change.data[5][1] > 100000000) {
                  m_Unit = "亿";
                  // m_result = String(value / 10000 / 10000) + "亿";
                  m_result = String(value / 10000 / 10000);
                  Manage_Unit(m_Unit, m_result);
                  vm.current_value = 100000000;
                  return m_result;
                }
                if (
                  vm.barListData_Change.data[5][1] > 10000000 &&
                  vm.barListData_Change.data[5][1] <= 100000000
                ) {
                  m_Unit = "千万";
                  m_result = String(value / 10000 / 1000);
                  Manage_Unit(m_Unit, m_result);
                  vm.current_value = 10000000;
                  return m_result;
                }
                if (
                  vm.barListData_Change.data[5][1] > 1000000 &&
                  vm.barListData_Change.data[5][1] <= 10000000
                ) {
                  m_Unit = "百万";
                  m_result = String(value / 10000 / 100);
                  Manage_Unit(m_Unit, m_result);
                  vm.current_value = 1000000;
                  return m_result;
                }
                if (
                  vm.barListData_Change.data[5][1] > 10000 &&
                  vm.barListData_Change.data[5][1] <= 1000000
                ) {
                  m_Unit = "万";
                  m_result = String(value / 10000);
                  Manage_Unit(m_Unit, m_result);
                  vm.current_value = 10000;
                  return m_result;
                }
              }
              // console.log("~~~~~~~~~~~~~~~~over");
              return String(value);
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

<template>
  <div class="height_auto">
    <el-row class="height_auto" :id="lineData.id"></el-row>
    <!-- <el-row class="height_auto" :id="lineData.id"></el-row> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "LineChartSingle2_datatotal", //折线图
  props: {
    lineData: Object
  },
  data() {
    return {};
  },
  mounted() {
    let vm = this;
    setTimeout(function() {
      vm.setLineChart();
    }, 2000);
  },
  computed: {
    ...mapGetters([
      "ADD_ALL_operator",
      "ADD_ALL_week",
      "ADD_ALL_month",
      "ADD_ALL_time_type"
    ])
  },
  watch: {
    lineData(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 2000);
    },
    ADD_ALL_operator(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 2000);
    },
    ADD_ALL_week(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 2000);
    },
    ADD_ALL_month(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 2000);
    },
    ADD_ALL_time_type(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 2000);
    }
  },
  methods: {
    setLineChart() {
      try {
        var lineChart = this.$echarts.init(
          document.getElementById(this.lineData.id)
        );
        let vm = this;
        let seriesData = [];
        let date_year = this.lineData.date_year;
        let date_month = this.lineData.date_month;

        //设置series数据条数
        // ▲▲▲针对数据总览进行特殊处理：由于两条线重叠 所以联通不显示label
        // console.log(vm.lineData.data);
        // 根据n天的首天判断， 联通电信大者Top在上面
        // 运营商数据：  电信1 移动2 联通3
        let first_dx = this.lineData.data[1][1];
        let first_lt = this.lineData.data[3][1];
        let max_operator_num = 0;
        if (first_dx > first_lt) {
          max_operator_num = 1;
        } else {
          max_operator_num = 3;
        }

        for (let i = 1; i <= this.lineData.data.length - 1; i++) {
          if (i == 2) {
            // 移动固定 默认 Top
            seriesData.push({
              type: "line",
              seriesLayoutBy: "row",
              symbol: "circle",
              /////
              itemStyle: { normal: { label: { show: true } } }
              /////
            });
          } else {
            if (max_operator_num == i) {
              seriesData.push({
                type: "line",
                seriesLayoutBy: "row",
                symbol: "circle",
                /////
                itemStyle: {
                  normal: { label: { show: true, position: "top" } }
                }
                /////
              });
            } else {
              seriesData.push({
                type: "line",
                seriesLayoutBy: "row",
                symbol: "circle",
                /////
                itemStyle: {
                  normal: { label: { show: true, position: "bottom" } }
                }
                /////
              });
            }
          }
        }

        var option = {
          color: this.lineData.color,
          textStyle: {
            color: "rgba(0, 0, 0, 0.65)"
          },
          title: {
            text: this.lineData.title,
            x: "2%",
            y: "0%",
            textStyle: {
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "14"
            }
          },
          legend: {
            icon: "circle",
            top: "10%",
            itemWidth: 6, // 设置宽度
            itemHeight: 6, // 设置高度
            itemGap: 20, // 设置间距
            textStyle: {
              fontSize: 14,
              color: "rgba(0, 0, 0, 0.65)"
            }
          },
          grid: {
            top: "30%",
            left: "10",
            right: "15",
            bottom: "10",
            containLabel: true
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              label: {
                backgroundColor: "#6a7985"
              }
            },
            textStyle: {
              align: "left"
            },
            formatter: function(params) {
              // console.log(params);
              let title = params[0].data[0];
              let length = params.length;
              let t1 = params[0].seriesName;
              let marker1 = params[0].marker;
              let value1 = params[0].data[1];
              if (length == 1) {
                // return title + ":<br/>" + marker1 + t1 + ":" + value1 + "%";
                //设置日期显示 年-月-日
                if (vm.lineData.id == "newUserTotal") {
                  // return title + "<br/>" + marker1 + t1 + ":  " + value1 + "%";
                  return title + "<br/>" + marker1 + t1 + ":  " + value1;
                }
                return (
                  date_year +
                  date_month +
                  title +
                  "<br/>" +
                  marker1 +
                  t1 +
                  ":  " +
                  value1
                );
              }

              let t2 = params[1].seriesName;
              let t3 = params[2].seriesName;
              let marker2 = params[1].marker;
              let marker3 = params[2].marker;
              let value2 = params[0].data[2];
              let value3 = params[0].data[3];
              return (
                date_year +
                date_month +
                title +
                "<br/>" +
                marker1 +
                t1 +
                ":  " +
                value1 +
                "<br/>" +
                marker2 +
                t2 +
                ":  " +
                value2 +
                "<br/>" +
                marker3 +
                t3 +
                ":  " +
                value3
              );
            }
          },
          //图表自带工具
          toolbox: {
            show: true,
            top: "10%",
            right: "6%",
            feature: {
              saveAsImage: {}
            }
          },
          dataset: {
            source: this.lineData.data
          },
          xAxis: {
            type: "category",
            boundaryGap: false, //设置数据开始显示的起点在Y轴上
            axisLine: {
              lineStyle: {
                color: "rgba(0,0,0,0.65)" //设置横坐标轴线颜色
              }
            },
            axisTick: {
              alignWithLabel: true //设置坐标轴刻度与坐标对齐
            }
          },
          yAxis: {
            gridIndex: 0,
            axisTick: {
              show: false //设置坐标轴刻度不显示
            },
            axisLine: {
              show: false
            },
            // 刻度线的设置
            splitLine: {
              show: true,
              lineStyle: {
                color: "#939393",
                type: "dotted",
                opacity: 0.2
              }
            }
          },
          series: seriesData
        };
        lineChart.clear();
        lineChart.setOption(option);
        window.addEventListener("resize", () => {
          lineChart.resize();
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
<template>
  <div class="height_auto">
    <el-row class="height_auto" :id="lineData_Change.id"></el-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Vue from "vue";

export default {
  name: "LineChartSingleProp2", //折线图Y轴显示百分比
  props: {
    lineData: Object
  },
  watch: {
    lineData(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 2000);
    },
    ULC_region(newValue, oldValue) {
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
    PR_month(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 2000);
    },
    ULC_operator(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 2000);
    },
    ULC_day(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 2000);
    },
    ULC_week(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 2000);
    },
    ULC_month(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 2000);
    },
    ULC_time_type(newValue, oldValue) {
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
  computed: {
    ...mapGetters([
      "ULC_region",
      "PR_operator",
      "PR_month",
      "ULC_operator",
      "ULC_day",
      "ULC_week",
      "ULC_month",
      "ULC_time_type",
      "ADD_ALL_operator",
      "ADD_ALL_week",
      "ADD_ALL_month",
      "ADD_ALL_time_type"
    ]),
    lineData_Change: {
      get: function() {
        try {
          var vm = this;
          if (vm.lineData.id == "newPayingUsers_ADD_ALL") {
            if (vm.ADD_ALL_operator && vm.ADD_ALL_week && vm.ADD_ALL_month) {
              // do nothing. -- 监听
            }
            // 视图更新
            setTimeout(function() {
              vm.setLineChart();
            }, 2000);
            return vm.lineData;
          }
          if (vm.lineData.id == "newPayingUsers") {
            if (
              vm.ULC_region &&
              vm.ULC_operator &&
              vm.ULC_day &&
              vm.ULC_week &&
              vm.ULC_month
            ) {
              // do nothing. -- 监听
            }
            // 用户生命周期-激活(right-折线图)
            let id = vm.lineData.id;
            let title = vm.lineData.title;
            let color = vm.lineData.color;
            let data = [];
            let d1 = [];
            let d2 = [];
            let d3 = [];

            if (vm.ULC_region == null || vm.ULC_region.length == 0) {
              data = vm.lineData.data;
            } else {
              function itemManage(num) {
                num += 1;
                // d1.push(vm.lineData.data[0][num]); // 从 1（第二个） 开始
                // d2.push(vm.lineData.data[1][num]);
                // d3.push(vm.lineData.data[2][num]);
                Vue.set(d1, num, vm.lineData.data[0][num]);
                Vue.set(d2, num, vm.lineData.data[1][num]);
                Vue.set(d3, num, vm.lineData.data[2][num]);
              }
              d1.push(vm.lineData.data[0][0]);
              d2.push(vm.lineData.data[1][0]);
              d3.push(vm.lineData.data[2][0]);

              for (let i_x = 0; i_x < vm.ULC_region.length; i_x++) {
                if (vm.ULC_region.indexOf("贵阳") > -1) {
                  itemManage(i_x);
                }
                if (vm.ULC_region.indexOf("遵义") > -1) {
                  itemManage(i_x);
                }
                if (vm.ULC_region.indexOf("安顺") > -1) {
                  itemManage(i_x);
                }
                if (vm.ULC_region.indexOf("黔南") > -1) {
                  itemManage(i_x);
                }
                if (vm.ULC_region.indexOf("黔东南") > -1) {
                  itemManage(i_x);
                }
                if (vm.ULC_region.indexOf("铜仁") > -1) {
                  itemManage(i_x);
                }
                if (vm.ULC_region.indexOf("毕节") > -1) {
                  itemManage(i_x);
                }
                if (vm.ULC_region.indexOf("六盘水") > -1) {
                  itemManage(i_x);
                }
                if (vm.ULC_region.indexOf("黔西南") > -1) {
                  itemManage(i_x);
                }
              }
              data.push(d1);
              data.push(d2);
              data.push(d3);
            }
            // 视图更新
            setTimeout(function() {
              vm.setLineChart();
            }, 2000);
            return {
              id: id,
              title: title,
              color: color,
              data: data
            };
          }
          if (
            vm.lineData.id == "monthPowerActivity" ||
            vm.lineData.id == "areaPowerActivity"
          ) {
            let data = [];
            let color = [];
            if (this.PR_operator == null || this.PR_operator.length == 0) {
              data = vm.lineData.data;
              color = vm.lineData.color;
            } else {
              data.push(vm.lineData.data[0]);
              if (this.PR_operator.indexOf("移动") > -1) {
                color.push(vm.lineData.color[0]);
                data.push(vm.lineData.data[1]);
              }
              if (this.PR_operator.indexOf("联通") > -1) {
                color.push(vm.lineData.color[1]);
                data.push(vm.lineData.data[2]);
              }
              if (this.PR_operator.indexOf("电信") > -1) {
                color.push(vm.lineData.color[2]);
                data.push(vm.lineData.data[3]);
              }
              data.push(vm.lineData.data[4]);
            }
            // 视图更新
            setTimeout(function() {
              vm.setLineChart();
            }, 2000);
            return {
              title: vm.lineData.title,
              id: vm.lineData.id,
              color: color,
              data: data
            };
          }
          if (vm.lineData.id == "newAddPayingUser") {
            if (vm.PR_month) {
              // do nothing. -- 监听
            }
          }
          if (vm.lineData.id == "activate_rate_ulc") {
            if (vm.ULC_day) {
              // do nothing. -- 监听
            }
            if (vm.ULC_week) {
              // do nothing. -- 监听
            }
            if (vm.ULC_month) {
              // do nothing. -- 监听
            }
          }
          // 视图更新
          setTimeout(function() {
            vm.setLineChart();
          }, 2000);
          return vm.lineData;
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
      vm.setLineChart();
    }, 2000);
  },
  methods: {
    setLineChart() {
      try {
        var lineChart = this.$echarts.init(
          document.getElementById(this.lineData_Change.id)
        );
        let vm = this;
        let seriesData = [];
        let date_year = this.lineData.date_year;
        let date_month = this.lineData.date_month;
        //设置series数据条数
        for (let i = 1; i <= this.lineData_Change.data.length - 1; i++) {
          seriesData.push({
            type: "line",
            seriesLayoutBy: "row",
            symbol: "circle",
            /////
            itemStyle: { normal: { label: { show: true } } }
            /////
          });
        }
        var option = {
          color: this.lineData_Change.color,
          textStyle: {
            color: "rgba(0, 0, 0, 0.65)"
          },
          title: {
            text: this.lineData_Change.title,
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
            top: "10%",
            itemWidth: 20, // 设置宽度
            itemHeight: 2, // 设置高度
            itemGap: 20, // 设置间距
            textStyle: {
              fontSize: 14,
              color: "rgba(0, 0, 0, 0.65)"
            }
          },
          tooltip: {
            trigger: "axis",
            textStyle: {
              align: "left"
            },
            formatter: function(params) {
              let length = params.length;
              let title = params[0].data[0];
              let t1 = params[0].seriesName;
              let marker1 = params[0].marker;
              let value1 = params[0].data[1];
              if (length == 1) {
                // return title + ":<br/>" + marker1 + t1 + ":" + value1 + "%";
                //设置日期显示 年-月-日
                if (
                  vm.lineData_Change.id == "newPayingUsers_ADD_ALL" ||
                  vm.lineData_Change.id == "newAddPayingUser" ||
                  vm.lineData_Change.id == "monthPowerActivity" ||
                  vm.lineData_Change.id == "areaPowerActivity"
                ) {
                  return title + "<br/>" + marker1 + t1 + ":  " + value1 + "%";
                }
                return (
                  date_year +
                  date_month +
                  title +
                  "<br/>" +
                  marker1 +
                  t1 +
                  ":  " +
                  value1 +
                  "%"
                );
              }
              let title2 = params[1].data[0];
              let t2 = params[1].seriesName;
              let marker2 = params[1].marker;
              let value2 = params[1].data[2];
              let str_return = "";
              str_return =
                title +
                "<br/>" +
                marker1 +
                t1 +
                ":  " +
                value1 +
                "%" +
                "<br/>" +
                marker2 +
                t2 +
                ":  " +
                value2 +
                "%";
              if (length == 2) {
                return str_return;
              }
              let title3 = params[2].data[0];
              let t3 = params[2].seriesName;
              let marker3 = params[2].marker;
              let value3 = params[2].data[3];
              str_return += "<br/>" + marker3 + t3 + ":  " + value3 + "%";

              if (length == 3) {
                return str_return;
              }
              let title4 = params[3].data[0];
              let t4 = params[3].seriesName;
              let marker4 = params[3].marker;
              let value4 = params[3].data[4];
              str_return += "<br/>" + marker4 + t4 + ":  " + value4 + "%";
              if (length == 4) {
                return str_return;
              }
              let title5 = params[4].data[0];
              let t5 = params[4].seriesName;
              let marker5 = params[4].marker;
              let value5 = params[4].data[5];
              str_return += "<br/>" + marker5 + t5 + ":  " + value5 + "%";
              if (length == 5) {
                return str_return;
              }
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
            source: this.lineData_Change.data
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
            },
            axisLabel: {
              //横坐标类目文字
              show: true,
              interval: 0, // 坐标轴显示不全问题解决方案
              textStyle: {
                fontSize: "12" //设置横坐标轴文字大小
              }
            }
          },
          yAxis: {
            gridIndex: 0,
            axisLabel: {
              show: true,
              interval: "auto",
              formatter: "{value}%"
            },
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
          grid: {
            containLabel: true,
            top: "30%",
            left: "15",
            right: "25",
            bottom: "20"
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
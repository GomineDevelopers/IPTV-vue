<template>
  <div class="Registered">
    <!-- <div :id="data1_Change.id" class="echarts1"></div> -->
    <div :id="data2_Change.id" class="echarts2"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Registered",
  props: ["api_data1", "api_data2"],
  computed: {
    ...mapGetters([
      "ULC_region",
      "ULC_operator",
      "ULC_day",
      "ULC_week",
      "ULC_month",
      "ULC_time_type"
    ]),
    data2_Change: {
      get: function() {
        try {
          var vm = this;
          if (
            vm.ULC_region &&
            vm.ULC_operator &&
            vm.ULC_day &&
            vm.ULC_week &&
            vm.ULC_month
          ) {
            // do nothing. -- 监听
          }
          // /////////////// 地区判断

          var region = [];
          var showData = [];
          var d0 = [];
          var d1 = [];
          var d2 = [];
          if (vm.ULC_region == null || vm.ULC_region.length == 0) {
            if (
              vm.ULC_region &&
              vm.ULC_operator &&
              vm.ULC_day &&
              vm.ULC_week &&
              vm.ULC_month
            ) {
              // do nothing. --监听
            }
            region = vm.data2.region;
            d0 = vm.data2.showData[0];
            d1 = vm.data2.showData[1];
            d2 = vm.data2.showData[2];
            // showData.push(d0);
            // showData.push(d1);
            // showData.push(d2);
          } else {
            function regionChange(regionN1, showDataN1) {
              region.push(vm.data2.region[regionN1]);
              d0.push(vm.data2.showData[0][showDataN1]);
              d1.push(vm.data2.showData[1][showDataN1]);
              d2.push(vm.data2.showData[2][showDataN1]);
            }
            for (let i_x = 0; i_x < vm.ULC_region.length; i_x++) {
              if (vm.ULC_region.indexOf("贵阳") > -1) {
                regionChange(i_x, i_x);
                continue;
              }
              if (vm.ULC_region.indexOf("遵义") > -1) {
                regionChange(i_x, i_x);
                continue;
              }
              if (vm.ULC_region.indexOf("安顺") > -1) {
                regionChange(i_x, i_x);
                continue;
              }
              if (vm.ULC_region.indexOf("黔南") > -1) {
                regionChange(i_x, i_x);
                continue;
              }
              if (vm.ULC_region.indexOf("黔东南") > -1) {
                regionChange(i_x, i_x);
                continue;
              }
              if (vm.ULC_region.indexOf("铜仁") > -1) {
                regionChange(i_x, i_x);
                continue;
              }
              if (vm.ULC_region.indexOf("毕节") > -1) {
                regionChange(i_x, i_x);
                continue;
              }
              if (vm.ULC_region.indexOf("六盘水") > -1) {
                regionChange(i_x, i_x);
                continue;
              }
              if (vm.ULC_region.indexOf("黔西南") > -1) {
                regionChange(i_x, i_x);
                continue;
              }
            }
          }

          // /////////////// 运营商判断
          // var color = vm.data2.color;
          // var operator = vm.data2.operator;

          var color = [];
          var operator = [];

          if (vm.ULC_operator == null || vm.ULC_operator.length == 0) {
            color = vm.data2.color;
            operator = vm.data2.operator;
            showData.push(d0);
            showData.push(d1);
            showData.push(d2);
          } else {
            if (vm.ULC_operator.indexOf("移动") > -1) {
              showData.push(d0);
              color.push(vm.data2.color[0]);
              operator.push(vm.data2.operator[0]);
            }
            if (vm.ULC_operator.indexOf("联通") > -1) {
              showData.push(d1);
              color.push(vm.data2.color[1]);
              operator.push(vm.data2.operator[1]);
            }
            if (vm.ULC_operator.indexOf("电信") > -1) {
              showData.push(d2);
              color.push(vm.data2.color[2]);
              operator.push(vm.data2.operator[2]);
            }
          }
          setTimeout(function() {
            vm.drawLine2();
          }, 2000);
          return {
            id: vm.data2.id,
            region: region,
            color: color,
            operator: operator,
            showData: showData
          };
        } catch (error) {
          console.log(error);
        }
      },
      set: function(newValue) {}
    }
  },
  watch: {
    ULC_day(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine2();
      }, 2000);
    },
    ULC_week(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine2();
      }, 2000);
    },
    ULC_month(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine2();
      }, 2000);
    },
    ULC_time_type(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine2();
      }, 2000);
    },
    api_data2(newValue, oldValue) {
      let vm = this;
      console.log("ULC - api_data2:");
      console.log(newValue);
      vm.data2 = vm.api_data2;
      if (
        vm.ULC_region &&
        vm.ULC_operator &&
        vm.ULC_day &&
        vm.ULC_week &&
        vm.ULC_month
      ) {
        // do nothing. --监听
      }
      setTimeout(function() {
        vm.drawLine2();
      }, 2000);
    }
  },
  data() {
    return {
      data1: {
        // id: "ULC_echartsA",
        // title: "在网用户数",
        // data1: ["7.08-7.14", "7.15-7.21"],
        // data2: ["219.4", "213.4"]
      },
      data2: {
        id: "echartsAA",
        color: ["#FF6123", "#FF8859", "#FFAA89"],
        region: [],
        operator: [],
        showData: [[], [], []]
      }
    };
  },
  mounted() {
    // this.drawLine();
    // this.drawLine2();
    this.data1 = this.api_data1;
    this.data2 = this.api_data2;
    // console.log("激活用户数---------", this.data2);
  },
  methods: {
    drawLine2() {
      try {
        var vm = this;
        var id = vm.data2_Change.id;
        var color = vm.data2_Change.color;
        var region = vm.data2_Change.region;
        var operator = vm.data2_Change.operator;
        var showData = vm.data2_Change.showData;
        var series = [];
        let i;
        let length = operator.length;
        for (i = 0; i < length; i++) {
          let barType = 0; // 0 - 为非总和bar  1 - 为总和bar
          if (i == length - 1) {
            barType = 1;
          }
          // series.push(seriesItem(operator[i], showData[i], color[i]));
          series.push(
            seriesItem(region, operator[i], showData[i], color[i], barType, i)
          );
        }

        // function seriesItem(myoperator, myshowData, mycolor) {
        //   return {
        //     name: myoperator,
        //     type: "bar",
        //     barWidth: "33%", //柱图宽度
        //     stack: "总量",
        //     label: {
        //       normal: {
        //         show: false,
        //         position: "insideRight"
        //       }
        //     },
        //     data: myshowData,
        //     color: mycolor
        //   };
        // }
        function seriesItem(
          myregion,
          myoperator,
          myshowData,
          mycolor,
          mybarType,
          current_i
        ) {
          if (mybarType == 1) {
            return {
              name: myoperator,
              type: "bar",
              barWidth: "33%", //柱图宽度
              stack: "总量",
              label: {
                normal: {
                  show: true,
                  position: "top",
                  formatter: function(params) {
                    let region_index = 0;
                    for (let t = 0; t < myregion.length; t++) {
                      if (myregion[t] == params.name) {
                        region_index = t;
                      }
                    }
                    let m_perAC_SumOperator = 0;
                    for (let z = 0; z < operator.length; z++) {
                      m_perAC_SumOperator += showData[z][region_index];
                    }
                    return (
                      String((m_perAC_SumOperator / 10000).toFixed(0)) + "万"
                    );
                  },
                  textStyle: {
                    color: "black",
                    fontSize: 12
                  }
                }
              },
              data: myshowData,
              color: mycolor
            };
          }
          return {
            name: myoperator,
            type: "bar",
            barWidth: "33%", //柱图宽度
            stack: "总量",
            label: {
              normal: {
                show: false,
                position: "insideRight"
              }
            },

            data: myshowData,
            color: mycolor
          };
        }
        var myChart2 = vm.$echarts.init(document.getElementById(id));

        var option2 = {
          title: {
            // text: "新增在册用户",
            text: "激活用户数（万户）",
            textStyle: {
              //设置主标题风格
              Color: "#333333", //设置主标题字体颜色
              fontStyle: "", //主标题文字风格
              fontSize: 12,
              fontStyle: "normal",
              fontWeight: "normal"
            }
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          //图表自带工具
          toolbox: {
            show: true,
            top: "5%",
            right: "5%",
            feature: {
              saveAsImage: {}
            }
          },
          legend: {
            show: true,
            top: "5%",
            data: operator,
            itemWidth: 12,
            itemHeight: 7,
            itemGap: 10,
            textStyle: {
              color: "#999999"
            }
          },
          grid: {
            left: "10",
            right: "5",
            bottom: "10",
            containLabel: true
          },
          xAxis: {
            type: "category",
            // axisLabel: {
            //   intervel: 0
            // },
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              //横坐标类目文字
              show: true,
              textStyle: {
                fontSize: "12" //设置横坐标轴文字大小
              },
              interval: 0 // 坐标轴显示不全问题解决方案
              // rotate: 40  // 旋转效果
            },
            axisLine: {
              lineStyle: {
                color: "rgba(0,0,0,0.65)" //设置横坐标轴线颜色
              }
            },
            data: region
          },
          yAxis: {
            type: "value",
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
          series: series
        };
        myChart2.clear();
        myChart2.setOption(option2);
        window.addEventListener("resize", () => {
          myChart2.resize();
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
/*
295 435+84
*/
.Registered {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #333333;
}
.Registered .echarts2 {
  display: inline-block;
  height: 300px;
  width: 100%;
}
</style>

<style scoped>
</style>

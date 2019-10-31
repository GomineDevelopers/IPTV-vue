<template>
  <div class="height_auto">
    <el-row class="height_auto" :id="chartData_Change.id"></el-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "BarChartSingle",
  props: {
    chartData: {
      type: Object
    }
    // chartData_Change: {
    //   title: "",
    //   id: "",
    //   color: [],
    //   data: []
    // }
  },
  watch: {
    PR_month(newValue, oldValue) {
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
    chartData(newValue, oldValue) {
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
    ADD_ALL_operator(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    ADD_ALL_week(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    ADD_ALL_month(newValue, oldValue) {
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
    UVB_programa(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    // UVB_contenttype(newValue, oldValue) {
    //   let vm = this;
    //   setTimeout(function() {
    //     vm.drawLine();
    //   }, 2000);
    // },
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
    }
  },
  computed: {
    ...mapGetters([
      "PR_operator",
      "PR_month",

      "UVB_region",
      "UVB_operator",
      "UVB_playmode",
      "UVB_programa",
      // "UVB_contenttype",
      "UVB_day",
      "UVB_week",
      "UVB_picker",

      "PR_week",
      "PR_picker",
      "PR_value_specialName",
      "ADD_ALL_operator",
      "ADD_ALL_week",
      "ADD_ALL_month",

      "ADD_VIP_region",
      "ADD_VIP_operator",
      "ADD_VIP_programa",
      "ADD_VIP_valueAddedPackage",
      "ADD_VIP_day",
      "ADD_VIP_week",
      "ADD_VIP_picker"
    ]),
    // ...this.$mapGetters(["PR_operator"]),

    chartData_Change: {
      get: function() {
        let vm = this;
        let data = [];
        // ★由于该组件是复用组件-涉及不同筛选条件的渲染-用唯一值（id）做数据+渲染
        if (vm.chartData.id == "specialClickNum") {
          // console.log("this.PR_operator");
          // console.log(this.PR_operator);
          data.push(vm.chartData.data[0]);
          if (this.PR_operator == null || this.PR_operator.length == 0) {
            data.push(vm.chartData.data[1]);
            data.push(vm.chartData.data[2]);
            data.push(vm.chartData.data[3]);
          } else {
            if (this.PR_operator.indexOf("移动") > -1) {
              data.push(vm.chartData.data[1]);
            }
            if (this.PR_operator.indexOf("联通") > -1) {
              data.push(vm.chartData.data[2]);
            }
            if (this.PR_operator.indexOf("电信") > -1) {
              data.push(vm.chartData.data[3]);
            }
          }

          // 视图更新
          setTimeout(function() {
            // console.log("specialClickNum 视图更新");
            vm.drawLine();
          }, 2000);
          return {
            title: vm.chartData.title,
            id: vm.chartData.id,
            color: vm.chartData.color,
            data: data
          };
        }

        if (vm.chartData.id == "columnChart") {
          if (vm.UVB_programa == null || vm.UVB_programa.length == 0) {
            data = vm.chartData.data;
          } else {
            data.push(vm.chartData.data[0]);
            // vm.$store
            //   .dispatch("get_UVB_programa_list")
            //   .then(function(response) {
            //     console.log(response);
            //     let length = response.length;
            //     let i;
            //     for (i = 0; i < length; i++) {
            //       if (vm.UVB_programa.indexOf(response[i]) > -1) {
            //         data.push(vm.chartData.data[i + 1]);
            //       }
            //     }
            //     console.log("~~~~~!!data");
            //     console.log(data);
            //   })
            //   .catch(function(error) {
            //     console.info(error);
            //   });
            data = vm.chartData.data;
            // vm.$store
            //   .dispatch("get_UVB_programa")
            //   .then(function(response) {
            //     console.log(response);
            //     let length = response.length;
            //     let i;
            //     for (i = 0; i < length; i++) {
            //       if (vm.UVB_programa.indexOf(response[i]) > -1) {
            //         data.push(vm.chartData.data[i + 1]);
            //       }
            //     }
            //     console.log("~~~~~!!data");
            //     console.log(data);
            //   })
            //   .catch(function(error) {
            //     console.info(error);
            //   });
            // if (vm.UVB_programa.indexOf("分类") > -1) {
            //   data.push(vm.chartData.data[1]);
            // }
            // if (vm.UVB_programa.indexOf("电视") > -1) {
            //   data.push(vm.chartData.data[2]);
            // }
            // if (vm.UVB_programa.indexOf("推荐") > -1) {
            //   data.push(vm.chartData.data[3]);
            // }
            // if (vm.UVB_programa.indexOf("电影") > -1) {
            //   data.push(vm.chartData.data[4]);
            // }
            // if (vm.UVB_programa.indexOf("热剧") > -1) {
            //   data.push(vm.chartData.data[5]);
            // }
            // if (vm.UVB_programa.indexOf("少儿") > -1) {
            //   data.push(vm.chartData.data[6]);
            // }
            // if (vm.UVB_programa.indexOf("动漫") > -1) {
            //   data.push(vm.chartData.data[7]);
            // }
            // if (vm.UVB_programa.indexOf("综艺") > -1) {
            //   data.push(vm.chartData.data[8]);
            // }
            // if (vm.UVB_programa.indexOf("体育") > -1) {
            //   data.push(vm.chartData.data[9]);
            // }
            // if (vm.UVB_programa.indexOf("游戏") > -1) {
            //   data.push(vm.chartData.data[10]);
            // }
            // if (vm.UVB_programa.indexOf("纪实") > -1) {
            //   data.push(vm.chartData.data[11]);
            // }
          }
          // 视图更新
          setTimeout(function() {
            // console.log("columnChart 视图更新");
            vm.drawLine();
          }, 2000);
          return {
            title: vm.chartData.title,
            id: vm.chartData.id,
            color: vm.chartData.color,
            data: data
          };
        }

        if (vm.chartData.id == "columnChart_vip") {
          if (vm.ADD_VIP_programa == null || vm.ADD_VIP_programa.length == 0) {
            data = vm.chartData.data;
          } else {
            // console.log("▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲1");
            // console.log(vm.chartData.data);
            // data.push(vm.chartData.data[0]);
            data = vm.chartData.data;
            // console.log("▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲2");
            // vm.$store
            //   .dispatch("get_ADD_VIP_programa")
            //   .then(function(response) {
            //     console.log(response);
            //     let length = response.length;
            //     let i;
            //     for (i = 0; i < length; i++) {
            //       if (vm.ADD_VIP_programa.indexOf(response[i]) > -1) {
            //         data.push(vm.chartData.data[i + 1]);
            //       }
            //     }
            //     console.log("~~~~~!!data");
            //     console.log(data);
            //   })
            //   .catch(function(error) {
            //     console.info(error);
            //   });
            // if (vm.ADD_VIP_programa.indexOf("分类") > -1) {
            //   data.push(vm.chartData.data[1]);
            // }
            // if (vm.ADD_VIP_programa.indexOf("电视") > -1) {
            //   data.push(vm.chartData.data[2]);
            // }
            // if (vm.ADD_VIP_programa.indexOf("推荐") > -1) {
            //   data.push(vm.chartData.data[3]);
            // }
            // if (vm.ADD_VIP_programa.indexOf("电影") > -1) {
            //   data.push(vm.chartData.data[4]);
            // }
            // if (vm.ADD_VIP_programa.indexOf("热剧") > -1) {
            //   data.push(vm.chartData.data[5]);
            // }
            // if (vm.ADD_VIP_programa.indexOf("少儿") > -1) {
            //   data.push(vm.chartData.data[6]);
            // }
            // if (vm.ADD_VIP_programa.indexOf("动漫") > -1) {
            //   data.push(vm.chartData.data[7]);
            // }
            // if (vm.ADD_VIP_programa.indexOf("综艺") > -1) {
            //   data.push(vm.chartData.data[8]);
            // }
            // if (vm.ADD_VIP_programa.indexOf("体育") > -1) {
            //   data.push(vm.chartData.data[9]);
            // }
            // if (vm.ADD_VIP_programa.indexOf("游戏") > -1) {
            //   data.push(vm.chartData.data[10]);
            // }
            // if (vm.ADD_VIP_programa.indexOf("纪实") > -1) {
            //   data.push(vm.chartData.data[11]);
            // }
          }
          // 视图更新
          setTimeout(function() {
            // console.log("columnChart 视图更新");
            vm.drawLine();
          }, 2000);
          return {
            title: vm.chartData.title,
            id: vm.chartData.id,
            color: vm.chartData.color,
            data: data
          };
        }
        if (
          vm.chartData.id == "hebdomadViewNum" ||
          vm.chartData.id == "hebdomadDibbleSeeding" ||
          vm.chartData.id == "localProgramsPlay" ||
          vm.chartData.id == "hebdomadLive" ||
          vm.chartData.id == "channelLiveUserNum" ||
          vm.chartData.id == "channelLiveTimes" ||
          vm.chartData.id == "channelLiveDuration" ||
          vm.chartData.id == "liveProgramTOP" ||
          vm.chartData.id == "localProgramTOP" ||
          vm.chartData.id == "satelliteLiveProgramTOP"
        ) {
          if (vm.PR_week) {
            // do nothing. --监听
          }
        }
        if (
          vm.chartData.id == "monthOrder" ||
          vm.chartData.id == "monthVIPOrder" ||
          vm.chartData.id == "monthVIPOrderIncome"
        ) {
          if (vm.PR_month && vm.PR_week) {
            // do nothing. --监听
          }
        }

        // 视图更新
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
  mounted() {
    let vm = this;
    setTimeout(function() {
      vm.drawLine();
    }, 2000);
  },
  methods: {
    drawLine() {
      let vm = this;
      var barChartSingle = this.$echarts.init(
        document.getElementById(this.chartData_Change.id)
      );
      let seriesData = [];
      //设置series数据条数
      try {
        for (let i = 1; i <= vm.chartData_Change.data[0].length - 1; i++) {
          seriesData.push({ type: "bar", barWidth: "12" });
        }
      } catch (error) {
        console.log(error);
      }
      var option = {
        color: this.chartData_Change.color,
        textStyle: {
          color: "rgba(0, 0, 0, 0.65)"
        },
        title: {
          text: this.chartData_Change.title,
          x: "left",
          y: "0",
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
          top: "30%",
          left: "10",
          right: "5",
          bottom: "10",
          containLabel: true
        },
        dataset: {
          source: this.chartData_Change.data
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
            show: true,
            lineStyle: {
              color: "#939393",
              type: "dotted",
              opacity: 0.2
            }
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
      barChartSingle.clear();
      barChartSingle.setOption(option);
      window.addEventListener("resize", () => {
        barChartSingle.resize();
      });
    }
  }
};
</script>
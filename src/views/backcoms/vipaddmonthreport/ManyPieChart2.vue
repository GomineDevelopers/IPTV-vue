<template>
  <div class="height_auto">
    <el-row class="height_auto" :id="pieData.id"></el-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "PieCharts", //饼图组件
  props: {
    pieData: {
      type: Object
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PR_month"])
  },
  watch: {
    PR_month(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 1000);
    }
  },
  mounted() {
    let vm = this;
    setTimeout(function() {
      vm.setLineChart();
    }, 1000);
  },
  methods: {
    setLineChart() {
      // 基于准备好的dom，初始化echarts实例
      var pieChart = this.$echarts.init(
        document.getElementById(this.pieData.id)
      );

      var temp_series_c1;
      var temp_series_c2;
      var temp_series_c3;
      var temp_series_c4;
      var temp_series_c5;
      var temp_series_c6;

      var temp_series_all = [];

      try {
        temp_series_c1 = {
          name: this.pieData.content[0].title,
          type: "pie",
          radius: ["68%", "80%"],
          center: ["50%", "56%"],
          data: this.pieData.content[0].data,
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
      } catch (error) {}

      try {
        temp_series_c2 = {
          name: this.pieData.content[1].title,
          type: "pie",
          radius: ["56%", "68%"],
          center: ["50%", "56%"],
          data: this.pieData.content[1].data,
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
      } catch (error) {}

      try {
        temp_series_c3 = {
          name: this.pieData.content[2].title,
          type: "pie",
          radius: ["44%", "56%"],
          center: ["50%", "56%"],
          data: this.pieData.content[2].data,
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
      } catch (error) {}

      try {
        temp_series_c4 = {
          name: this.pieData.content[3].title,
          type: "pie",
          radius: ["32%", "44%"],
          center: ["50%", "56%"],
          data: this.pieData.content[3].data,
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
      } catch (error) {}

      try {
        temp_series_c5 = {
          name: this.pieData.content[4].title,
          type: "pie",
          radius: ["20%", "32%"],
          center: ["50%", "56%"],
          data: this.pieData.content[4].data,
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
      } catch (error) {}

      try {
        temp_series_c6 = {
          name: this.pieData.content[5].title,
          type: "pie",
          radius: ["8%", "20%"],
          center: ["50%", "56%"],
          data: this.pieData.content[5].data,
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
      } catch (error) {}

      temp_series_all.push(temp_series_c1);
      temp_series_all.push(temp_series_c2);
      temp_series_all.push(temp_series_c3);
      temp_series_all.push(temp_series_c4);
      temp_series_all.push(temp_series_c5);
      temp_series_all.push(temp_series_c6);

      var length_x = this.pieData.content.length;
      var i_x;
      var m_series = [];

      for (i_x = 0; i_x < length_x; i_x++) {
        m_series.push(temp_series_all[i_x]);
      }


      var option = {
        color: this.pieData.color,
        title: {
          text: this.pieData.title,
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
          bottom: "30",
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
        series: m_series
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
<template>
  <div class="height_auto">
    <el-row class="height_auto" :id="pieData.id"></el-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "ManyPieChart3", //两环饼图组件
  props: {
    pieData: {
      type: Object
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PR_week", "PR_operator"])
  },
  watch: {
    PR_week(newValue, oldValue) {
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
    }
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
        // 基于准备好的dom，初始化echarts实例
        var pieChart = this.$echarts.init(
          document.getElementById(this.pieData.id)
        );

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
            bottom: "3%",
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
          series: [
            {
              name: this.pieData.content[0].title,
              type: "pie",
              minAngle: 15,
              radius: ["55%", "70%"],
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
            },
            {
              name: this.pieData.content[1].title,
              type: "pie",
              minAngle: 15,
              radius: ["40%", "55%"],
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
            }
          ]
        };

        // 使用刚指定的配置项和数据显示图表。
        pieChart.clear();
        pieChart.setOption(option);

        window.addEventListener("resize", () => {
          pieChart.resize();
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
<style scoped>
</style>
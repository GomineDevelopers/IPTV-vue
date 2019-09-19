<template>
  <div class="height_auto">
    <el-row style="height:500px;" :id="pieData.id"></el-row>
  </div>
</template>
<script>
export default {
  name: "ManyPieChart_Change", //饼图组件
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
      vm.drawline();
    }, 1000);
  },
  methods: {
    drawline() {
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
        series: [
          {
            name: this.pieData.content[0].title,
            type: "pie",
            radius: ["65%", "85%"],
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
            radius: ["45%", "65%"],
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
    }
  }
};
</script>
<style scoped>
</style>
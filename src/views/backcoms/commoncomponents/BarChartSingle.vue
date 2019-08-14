<template>
  <div class="height_auto">
    <el-row class="height_auto" :id="chartData.id"></el-row>
  </div>
</template>
<script>
export default {
  name: 'BarGraph',
  props: {
    chartData: {
      type: Object,
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var barChartSingle = this.$echarts.init(document.getElementById(this.chartData.id));
      var option = {
        color: this.chartData.color,
        title: {
          text: this.chartData.title,
          x: 'left',
          y: '7%',
          textStyle: {
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '14'
          }
        },
        legend: {
          top: "18%",
          right: "20%",
          itemWidth: 12,
          itemHeight: 7,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        //图表自带工具
        toolbox: {
          show: true,
          top: "16%",
          right: "6%",
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          top: "35%",
          left: '8%',
          right: '1%',
          bottom: "10%"
        },
        dataset: {
          source: this.chartData.data
        },
        xAxis: {
          type: 'category',
          axisLabel: {//横坐标类目文字
            show: true,
            interval: 0,  // 坐标轴显示不全问题解决方案
            textStyle: {
              fontSize: '12'//设置横坐标轴文字大小
            }
          },
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(0,0,0,0.65)',//设置横坐标轴线颜色
            }
          },
        },
        yAxis: {
          // 刻度线的设置
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,  //Y轴不显示
            lineStyle: {
              color: 'rgba(0,0,0,0.65)',//设置横坐标轴线颜色
            }
          },
          axisLabel: {//横坐标类目文字
            show: true,
            textStyle: {
              fontSize: '12'//设置横坐标轴文字颜大小
            }
          },
          axisTick: {
            show: false  //设置坐标轴刻度不显示
          }
        },
        series: [
          { type: 'bar', barWidth: '12' },
        ]
      };
      barChartSingle.setOption(option);
      window.addEventListener("resize", () => {
        barChartSingle.resize();
      })
    }
  }
}
</script>
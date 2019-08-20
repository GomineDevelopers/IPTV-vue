<template>
  <div class="height_auto">
    <div class="pie_hollow_chart" :id="smoothLineData.id"></div>
  </div>
</template>
<script>
export default {
  name: 'SmoothLineChart',  //专题专区数据报告
  props: {
    smoothLineData: {
      type: Object,
    }
  },
  data() {
    return {}
  },
  mounted() {

    this.setLineChart()
  },
  methods: {
    setLineChart() {
      var smoothLineChart = this.$echarts.init(document.getElementById(this.smoothLineData.id))
      let seriesData = []
      //设置series数据条数
      for (let i = 1; i <= this.smoothLineData.data.length - 1; i++) {
        seriesData.push({ type: 'line', seriesLayoutBy: 'row', symbol: 'none', smooth: true })
      }
      var option = {
        color: this.smoothLineData.color,
        textStyle: {
          color: "rgba(0, 0, 0, 0.65)"
        },
        title: {
          text: this.smoothLineData.title,
          x: '2%',
          y: '0%',
          textStyle: {
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '14'
          }
        },
        legend: {
          icon: "re",
          top: "10%",
          itemWidth: 12,  // 设置宽度
          itemHeight: 7, // 设置高度
          itemGap: 20, // 设置间距
          textStyle: {
            fontSize: 14,
            color: 'rgba(0, 0, 0, 0.65)'
          }
        },
        grid: {
          top: "20%",
          left: '12%',
          right: '5%',
          bottom: "15%"
        },
        tooltip: {
          trigger: 'axis',
          textStyle: {
            align: 'left'
          }
        },
        //图表自带工具
        toolbox: {
          show: true,
          top: "9%",
          right: "6%",
          feature: {
            saveAsImage: {}
          }
        },
        dataset: {
          source: this.smoothLineData.data
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,  //设置数据开始显示的起点在Y轴上
          axisLine: {
            lineStyle: {
              color: 'rgba(0,0,0,0.65)',//设置横坐标轴线颜色
            },
          },
          axisLabel: {
            interval: 0,
            rotate: 40
          },
          axisTick: {
            alignWithLabel: true  //设置坐标轴刻度与坐标对齐
          }
        },
        yAxis: {
          gridIndex: 0,
          axisTick: {
            show: false  //设置坐标轴刻度不显示
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
            },
          },
        },
        series: seriesData
      }
      smoothLineChart.setOption(option)
      window.addEventListener("resize", () => {
        smoothLineChart.resize()
      })
    }
  }
}
</script>
<style scoped>
.pie_hollow_chart {
  height: 300px;
}
</style>

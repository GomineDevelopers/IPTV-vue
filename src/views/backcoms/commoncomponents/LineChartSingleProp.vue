<template>
  <div class="height_auto">
    <el-row class="height_auto" :id="lineData.id"></el-row>
  </div>
</template>
<script>
export default {
  name: "LineChartSingleProp", //折线图Y轴显示百分比
  props: {
    lineData: Object
  },
  data() {
    return {}
  },
  mounted() {
    this.setLineChart()
  },
  methods: {
    setLineChart() {
      var lineChart = this.$echarts.init(document.getElementById(this.lineData.id))
      let seriesData = []
      //设置series数据条数
      for (let i = 1; i <= this.lineData.data.length - 1; i++) {
        seriesData.push({ type: 'line', seriesLayoutBy: 'row', symbol: 'circle' })
      }
      var option = {
        color: this.lineData.color,
        textStyle: {
          color: "rgba(0, 0, 0, 0.65)"
        },
        title: {
          text: this.lineData.title,
          x: '2%',
          y: '0%',
          textStyle: {
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '14'
          }
        },
        legend: {
          icon: "circle",
          top: "10%",
          itemWidth: 6,  // 设置宽度
          itemHeight: 6, // 设置高度
          itemGap: 20, // 设置间距
          textStyle: {
            fontSize: 14,
            color: 'rgba(0, 0, 0, 0.65)'
          }
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
          type: 'category',
          boundaryGap: false,  //设置数据开始显示的起点在Y轴上
          axisLine: {
            lineStyle: {
              color: 'rgba(0,0,0,0.65)',//设置横坐标轴线颜色
            }
          },
          axisTick: {
            alignWithLabel: true  //设置坐标轴刻度与坐标对齐
          },
          axisLabel: {//横坐标类目文字
            show: true,
            interval: 0,  // 坐标轴显示不全问题解决方案
            textStyle: {
              fontSize: '12'//设置横坐标轴文字大小
            }
          },
        },
        yAxis: {
          gridIndex: 0,
          axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value}%'
          },
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
        grid: {
          top: "30%",
          left: '12%',
          right: '5%',
          bottom: "10%"
        },
        series: seriesData
      }
      lineChart.setOption(option)
      window.addEventListener("resize", () => {
        lineChart.resize()
      })
    }
  }
}
</script>
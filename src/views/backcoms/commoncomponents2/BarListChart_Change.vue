<template>
  <div class="height_auto">
    <div class="pie_hollow_chart" :id="barListData.id"></div>
  </div>
</template>
<script>
export default {
  name: 'BarListChart',  //专题专区数据报告
  props: {
    barListData: {
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
      var barListChart = this.$echarts.init(document.getElementById(this.barListData.id))
      let seriesData = []
      //设置series数据条数
      for (let i = 1; i <= this.barListData.data[0].length - 1; i++) {
        seriesData.push({
          type: 'bar',
          barWidth: '8',
          itemStyle: {
            normal: {
              label: {
                show: true, //开启显示
                position: 'right', //在上方显示
                textStyle: { //数值样式
                  color: 'black',
                  fontSize: 8
                }
              }
            }
          },
        })
      }
      var option = {
        color: this.barListData.color,
        textStyle: {
          color: "rgba(0, 0, 0, 0.65)"
        },
        title: {
          text: this.barListData.title,
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
          left: '32%',
          right: '8%',
          bottom: "10%"
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
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
          source: this.barListData.data
        },
        xAxis: {
          type: 'value',
          axisTick: {
            show: false  //设置坐标轴刻度不显示
          },
          axisLabel: {
            show: false
          },
          // 刻度线的设置
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,  //X轴不显示
          }
        },
        yAxis: {
          type: 'category',
          gridIndex: 0,
          axisTick: {
            show: false  //设置坐标轴刻度不显示
          },
          // 刻度线的设置
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,  //Y轴不显示
            lineStyle: {
              color: 'rgba(0,0,0,0.65)',//设置横坐标轴线颜色
            }
          }
        },
        series: seriesData
      }
      barListChart.setOption(option)
      window.addEventListener("resize", () => {
        barListChart.resize()
      })
    }
  }
}
</script>
<style scoped>
.pie_hollow_chart {
  height: 500px;
}
</style>

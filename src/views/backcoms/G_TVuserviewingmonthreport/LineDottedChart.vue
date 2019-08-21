<template>
  <div class="height_auto">
    <el-row class="height_auto" :id="lineData.id"></el-row>
  </div>
</template>
<script>
export default {
  name: 'LineDottedChart',
  props: {
    lineData: Object
  },
  data() {
    return {}
  },
  mounted() {
    this.setLineChart()
    // console.log(this.lineData)
  },
  methods: {
    setLineChart() {
      var lineChart = this.$echarts.init(document.getElementById(this.lineData.id))
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
          icon: "rectangle",
          top: "10%",
          itemWidth: 20,  // 设置宽度
          itemHeight: 2, // 设置高度
          itemGap: 20, // 设置间距
          textStyle: {
            fontSize: 14,
            color: 'rgba(0, 0, 0, 0.65)'
          }
        },
        grid: {
          top: "30%",
          left: '5%',
          right: '5%',
          bottom: "15%"
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          },
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
          axisLabel: {
            interval: 0,
            rotate: 40
          },
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
        series: [
          { type: 'line', seriesLayoutBy: 'row', symbol: 'none' },
          { type: 'line', seriesLayoutBy: 'row', symbol: 'none' },
          { type: 'line', seriesLayoutBy: 'row', symbol: 'none' },
          {
            type: 'line',
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 2,
                  type: 'dotted'  //'dotted'虚线 'solid'实线
                }
              }
            },
            seriesLayoutBy: 'row',
            symbol: 'none'
          }
        ]
      }
      lineChart.setOption(option)
      window.addEventListener("resize", () => {
        lineChart.resize()
      })
    }
  }
}
</script>
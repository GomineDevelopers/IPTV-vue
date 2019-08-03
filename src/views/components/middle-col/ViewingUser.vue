<template>
  <div class="height_auto">
    <el-row class="title_row">
      <span class="title_border_left"></span>收视用户
    </el-row>
    <el-row class="chart_height" id="viewing_user"></el-row>
  </div>
</template>
<script>
export default {
  name: 'ViewingUser', //收视用户组件
  data() {
    return {

    }
  },
  mounted() {
    this.setNewUserChart()
  },
  methods: {
    setNewUserChart() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('viewing_user'))

      var option = {
        textStyle: {
          color: "#dedede"
        },
        color: [
          {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#488BFF' // 0% 处的颜色
            }, {
              offset: 1, color: '#6648FF' // 100% 处的颜色
            }],
          },
          {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#00E5FF' // 0% 处的颜色
            }, {
              offset: 1, color: '#0053DC' // 100% 处的颜色
            }],
          },
          {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#00D7CF' // 0% 处的颜色
            }, {
              offset: 1, color: '#00C786' // 100% 处的颜色
            }],
          }
        ],
        legend: {
          itemWidth: 6,
          itemHeight: 3,
          textStyle: {
            color: "#dedede"
          }
        },
        grid: {
          top: "15%",
          left: '0',
          right: '1%',
          bottom: "1%",
          containLabel: true
        },
        tooltip: {},
        dataset: {
          source: [
            ['product', '用户数', '收视次数', '户均收视次数'],
            ['总体收视', 950, 837, 433,],
            ['直播收视', 831, 734, 551],
            ['点播收视', 864, 652, 825],
            ['回看收视', 724, 539, 391]
          ]
        },
        xAxis: {
          type: 'category',
          axisLabel: {//横坐标类目文字
            show: true,
            textStyle: {
              fontSize: '10'//设置横坐标轴文字颜大小
            }
          },
          axisTick: {
            alignWithLabel: true  //设置坐标轴刻度与坐标对齐
          },
          axisLine: {
            lineStyle: {
              color: '#ccc',//设置横坐标轴线颜色
            }
          },
        },
        yAxis: {
          axisLabel: {//横坐标类目文字
            //rotate: 30,
          },
          // 刻度线的设置
          splitLine: {
            show: true,
            lineStyle: {
              color: "#939393",
              opacity: 0.2
            },
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false  //设置坐标轴刻度不显示
          },
        },
        series: [
          { type: 'bar', barWidth: 10 },
          { type: 'bar', barWidth: 10 },
          { type: 'bar', barWidth: 10 }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)

      window.addEventListener('resize', () => {
        myChart.resize()
      })
    }
  }
}
</script>
<style scoped>
</style>



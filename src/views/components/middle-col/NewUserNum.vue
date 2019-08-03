<template>
  <div class="height_auto">
    <el-row class="title_row">
      <span class="title_border_left"></span>新增用户数（户）
    </el-row>
    <el-row class="chart_height" id="new_user_num"></el-row>
  </div>
</template>
<script>
export default {
  name: 'NewUserNum', //新增用户数组件
  mounted() {
    this.setNewUserChart()
  },
  methods: {
    setNewUserChart() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('new_user_num'))

      var option = {
        textStyle: {
          color: "#dedede"
        },
        //设置柱子颜色渐变
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [{
            offset: 0, color: '#6648FF ' // 0% 处的颜色
          }, {
            offset: 1, color: '#488BFF' // 100% 处的颜色
          }],
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          top: "5%",
          left: '0',
          right: '8%',
          bottom: "1%",
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          // 刻度线的设置
          splitLine: {
            show: true,
            lineStyle: {
              color: "#939393",
              opacity: 0.2
            }
          },
          axisTick: {
            show: false  //设置坐标轴刻度不显示
          },
          axisLabel: {//横坐标类目文字
            show: true,
            //rotate: 30,
            textStyle: {
              fontSize: '10'//设置横坐标轴文字颜大小
            }
          },
          axisLine: {
            show: false
          }
        },
        yAxis: {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {//横坐标类目文字
            show: true,
            textStyle: {
              fontSize: '10'//设置横坐标轴文字颜大小
            }
          },
          axisLine: {
            lineStyle: {
              color: '#ccc',//设置横坐标轴线颜色
            }
          },
          data: ['黔西南', '黔南', '黔东南', '铜仁', '毕节', '安顺', '六盘水', '遵义', '贵阳',]
        },
        series: [
          {
            type: 'bar',
            barWidth: 10, //柱子宽度
            data: [2744, 3300, 4489, 5340, 6970, 7970, 8034, 9489, 10000]
          }
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



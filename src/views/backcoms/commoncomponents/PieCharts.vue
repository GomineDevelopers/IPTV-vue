<template>
  <div class="height_auto">
    <el-row class="height_auto" :id="chartData.id"></el-row>
  </div>
</template>
<script>
export default {
  name: 'PieCharts',  //饼图组件
  props: {
    chartData: {
      type: Object,
    }
  },
  data() {
    return {}
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var pieChart = this.$echarts.init(document.getElementById(this.chartData.id))

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
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      series: [
        {
          name: '地区',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: this.chartData.data,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }

    // 使用刚指定的配置项和数据显示图表。
    pieChart.setOption(option)

    window.addEventListener('resize', () => {
      pieChart.resize()
    })
  }
}
</script>
<style scoped>
</style>
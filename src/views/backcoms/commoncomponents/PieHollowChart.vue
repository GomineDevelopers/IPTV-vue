<template>
  <div class="height_auto">
    <div class="pie_hollow_chart" :id="pieHollowData.id"></div>
  </div>
</template>
<script>
export default {
  name: 'PieHollowChart',  //专题专区数据报告
  props: {
    pieHollowData: {
      type: Object,
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.setPieHollowChart()
  },
  methods: {
    setPieHollowChart() {

      // 基于准备好的dom，初始化echarts实例
      var pieHollowChart = this.$echarts.init(document.getElementById(this.pieHollowData.id))

      var option = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        // legend: {
        //   orient: 'vertical',
        //   x: 'left',
        //   data: this.pieHollowData.data.name
        // },
        series: [
          {
            name: '数据',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' }
            ]
          }
        ]
      }

      // 使用刚指定的配置项和数据显示图表。
      pieHollowChart.setOption(option)

      window.addEventListener('resize', () => {
        pieHollowChart.resize()
      })
    }
  }
}
</script>
<style scoped>
.pie_hollow_chart {
  height: 200px;
}
</style>

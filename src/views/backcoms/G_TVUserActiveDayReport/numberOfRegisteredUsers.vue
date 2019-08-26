<template>
  <div class="height_auto">
    <el-row class="height_auto" :id="fillinData.id"></el-row>
  </div>
</template>
<script>
export default {
  name: "registereduserpie",  //用户注册人数饼图
  props: ["fillinData"],
  data() {
    return {}
  },
  mounted() {
    this.setLineChart()
  },
  methods: {
    setLineChart() {
      // console.log(111)
      // console.log(this.fillinData)
      var lineChart = this.$echarts.init(document.getElementById(this.fillinData.id))
      //循环获取数据
      let seriesData = []
      //设置series数据条数
      for (let i = 1; i <= this.fillinData.data[0].length - 1; i++) {
        seriesData.push({ name: this.fillinData.data[0][i], value: this.fillinData.data[1][i] })
      }
      // console.log(seriesData)
      // 数据配置项
      let option = {
        title: {
          text: this.fillinData.title,
          x: 'left',
          padding: [
            11, 0, 0, 18
          ],
          textStyle: {
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '14'
          }
        },
        legend: {
          orient: 'vertical',
          padding: [
            71,
            100,
            0,
            0
          ],
          right: 'right',
          data: ['移动', '电信', '联通'],
          // icon: "circle",
          textStyle: {
            color: '#8C8C8C'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
          {
            name: this.fillinData.data[1][0],
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: seriesData,
            color: this.fillinData.color,
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

      lineChart.setOption(option)
      window.addEventListener("resize", () => {
        lineChart.resize()
      })
    }
  }
}
</script>
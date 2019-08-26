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
      var lineChart = this.$echarts.init(document.getElementById(this.fillinData.id))
      //   循环获取数据
      let seriesData = []
      let data = {}
      //设置series数据条数

      for (let i = 0; i < this.fillinData.data.length; i++) {
        data = {}
        data.name = this.fillinData.data[i][1][0]
        data.type = 'bar'
        data.data = []
        data.barWidth = '40'
        data.label = {
          show: true,
          position: 'top',
          formatter: '{c}%'

        }
        data.barGap = "5%"
        data.itemStyle = {
          color: this.fillinData.color[i],
        }

        for (let j = 1; j <= this.fillinData.data[i][1].length - 1; j++) {
          data.data.push(this.fillinData.data[i][1][j])
        }
        seriesData.push(data)
      }
      // console.log(seriesData)
      // 数据配置项
      let option = {
        title: {
          text: this.fillinData.title,
          x: 'center',
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
          orient: 'horizontal',
          padding: [
            20,
            50,
            0,
            50
          ],
          right: 'right',
          data: ['平均', '今日'],
          // icon: "circle",
          textStyle: {
            color: ['#82b65f', '#70a7d8']
          }
        },
        xAxis: {
          type: 'category',

          // 留白空隙
          boundaryGap: [0, 0.5],
          axisLine: {
            lineStyle: {
              color: "#A0A4AA",
            },
            show: false,
          },
          axisLabel: {
            padding: [10, 0, 0, 0],
            fontSize: 14,
            color: "#111"
          },
          // 影藏刻度
          axisTick: {
            show: false,
          },
          data: ['移动', '电信', '联通']
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: "#A0A4AA",
            },
            show: false,
          },
          // 影藏刻度
          axisTick: {
            show: false,
          },
        },
        grid: {
          top: "83",
          left: '3%',
          right: '50',
          bottom: "55",
          containLabel: true
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: seriesData
      };

      lineChart.setOption(option)
      window.addEventListener("resize", () => {
        lineChart.resize()
      })
    }
  }
}
</script>
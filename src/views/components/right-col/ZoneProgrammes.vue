<template>
  <div class="height_auto">
    <el-row class="title_row">
      <span class="title_border_left"></span>专区节目
    </el-row>
    <el-row class="programmes_name">
      <i></i>
      {{zoneProgrammes}}
    </el-row>
    <el-row class="zone_programmes_body">
      <el-row id="zone_programmes"></el-row>
      <el-row class="zone_programmes_detail">
        <el-col :span="12">
          <el-row class="zone_programmes_main">
            <el-row>
              <img src="@/assets/user_icon3.png" />获得用户
            </el-row>
            <el-row>
              <span>17.5</span>万
            </el-row>
          </el-row>
          <el-row class="zone_programmes_main">
            <el-row>
              &nbsp;
              <img src="@/assets/play_icon.png" />累积点播量
            </el-row>
            <el-row>
              <span>3.6</span>万
            </el-row>
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-row class="zone_programmes_main">
            <el-row>
              <img src="@/assets/click_icon.png" />点击次数
            </el-row>
            <el-row>
              <span>22.1</span>万
            </el-row>
          </el-row>
          <el-row class="zone_programmes_main">
            <el-row>
              <img src="@/assets/time_icon.png" />播放时长
            </el-row>
            <el-row>
              <span>4505</span>时
            </el-row>
          </el-row>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'ZoneProgrammes',  //专区节目组件
  data() {
    return {
      zoneProgrammes: '小小福星'
    }
  },
  mounted() {
    this.setZoneProgrammeChart()
  },
  methods: {
    setZoneProgrammeChart() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('zone_programmes'))
      var option = {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [{
            offset: 0, color: '#FF3D7D' // 0% 处的颜色
          }, {
            offset: 1, color: '#FFF067' // 100% 处的颜色
          }],
        },
        textStyle: {
          color: "#dedede"
        },
        legend: {
          textStyle: {
            color: "#dedede"
          },
        },
        tooltip: {
          trigger: 'axis',
          showContent: true
        },
        dataset: {
          source: [
            ['product', '03', '04', '05', '06', '07', '08', '09'],
            ['本周点击趋势', 14000, 17000, 18000, 20000, 23400, 24000, 25900],
          ]
        },
        xAxis: {
          type: 'category',
          //boundaryGap: false,  //设置数据开始显示的起点在Y轴上
          axisLine: {
            lineStyle: {
              color: '#ccc',//设置横坐标轴线颜色
            }
          },
          axisTick: {
            alignWithLabel: true  //设置坐标轴刻度与坐标对齐
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
              opacity: 0.2
            }
          }
        },
        grid: {
          top: "16%",
          left: '15%',
          right: '2%',
          bottom: "18%"
        },
        series: [
          { type: 'line', seriesLayoutBy: 'row' },
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.clear()
      myChart.setOption(option)
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    }
  }
}
</script>
<style scoped>
.programmes_name i {
  display: inline-block;
  width: 0.04rem;
  height: 0.04rem;
  border-radius: 50%;
  font-style: normal;
  background: #1e9fff;
  vertical-align: middle;
}
.programmes_name {
  height: 0.2rem;
  line-height: 0.2rem;
  font-size: 0.14rem;
  text-align: left;
  color: #dedede;
  margin-left: 0.08rem;
}
.zone_programmes_body {
  height: calc(100% - 0.5rem);
  margin-left: 0.08rem;
}
#zone_programmes {
  height: 60%;
}
.zone_programmes_detail {
  height: 40%;
  font-size: 0.12rem;
  color: #dedede;
}
.zone_programmes_main {
  margin-top: 0.05rem;
}
/* .zone_programmes_main:nth-child(odd) {
  margin-bottom: 0.1rem;
} */
.zone_programmes_detail img {
  vertical-align: sub;
  margin-right: 0.05rem;
}
.zone_programmes_detail span {
  padding-left: 0.18rem;
  font-size: 0.2rem;
  color: #fff067;
}
</style>



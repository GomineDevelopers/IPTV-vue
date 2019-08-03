<template>
  <div class="height_auto">
    <el-row class="title_row ">
      <span class="title_border_left"></span>订购用户数
    </el-row>
    <el-row class="paid_users_row proportion">
      <el-col :span="12" class="height_auto">
        <el-row id="proportion_of_subscribers"></el-row>
        <el-row class="order_user_title">订购用户占比</el-row>
      </el-col>
      <el-col :span="12">
        <el-row class="height_auto">
          <img src="@/assets/user_icon2.png">订购用户数：
          </br>
          <span class="number"><i>452.3</i>万</span>
        </el-row>
        <el-row>
          <img src="@/assets/earning_icon.png">收入：
          </br>
          <span class="number"><i>4367.7</i>万元</span>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="paid_users_row add_order">
      <el-col :span="12" class="height_auto">
        <el-row id="add_order_conversion_rate"></el-row>
        <el-row class="order_user_title">新增订购转换率</el-row>
      </el-col>
      <el-col :span="12">
        <el-row>
          <img src="@/assets/user_icon.png">新增订购用户数：
          </br>
          <span class="number"><i>2.3</i>万</span>
        </el-row>
        <el-row>
          <img src="@/assets/earning_icon2.png">收入：
          </br>
          <span class="number"><i>47.2</i>万元</span>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "SubscriberNumber",  //订购用户数组件
  data(){
    return{
      
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('proportion_of_subscribers'))

      // 指定图表的配置项和数据
      var option = {
            title: {
              text: '68%',
              x: 'center',
              y: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: '#dedede',
                fontSize: '16'
              }
            },
            color: 'rgba(47,69,84,0.8)',
            series: [{
              name: 'Line 1',
              type: 'pie',
              clockWise: true,
              radius: ['50%', '73%'],
              itemStyle: {
                normal: {
                  borderWidth:2, //设置border的宽度有多大
                  borderColor:'#061b4f',
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              },
              hoverAnimation: false,  //鼠标放上不放大
              data: [{
                value: 68,
                name: '订购用户数',
                itemStyle: {
                  normal: {
                    color: { // 完成的圆环的颜色
                      colorStops: [{
                        offset: 0,
                        color: '#0083FF' // 0% 处的颜色
                      }, {
                        offset: 1,
                        color: '#00C2FF' // 100% 处的颜色
                      }]
                    },
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              }, {
                name: '未订购用户数',
                value: 32
              }]
            }]
        }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)

      var myChart2 = this.$echarts.init(document.getElementById('add_order_conversion_rate'))
      var option2 = {
            title: {
              text: '29%',
              x: 'center',
              y: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: "#dedede",
                fontSize: '16'
              }
            },
            color: 'rgba(47,69,84,0.8)',
            legend: {
              show: false,
              itemGap: 12,
              data: ['已使用', '未使用']
            },
            series: [{
              name: 'Line 1',
              type: 'pie',
              clockWise: true,
              radius: ['50%', '73%'],
              itemStyle: {
                normal: {
                  borderWidth:2, //设置border的宽度有多大
                  borderColor:'#061b4f',
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              },
              hoverAnimation: false,  //鼠标放上不放大
              data: [{
                value: 29,
                name: '新增订购用户数',
                itemStyle: {
                  normal: {
                    color: { // 完成的圆环的颜色
                      colorStops: [{
                        offset: 0,
                        color: '#FF7E00' // 0% 处的颜色
                      }, {
                        offset: 1,
                        color: '#FF4800' // 100% 处的颜色
                      }]
                    },
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              }, {
                name: '未订购用户数',
                value: 71
              }]
            }]
        }
      myChart2.setOption(option2)

      //图表自适应
      window.addEventListener('resize', () => {
        myChart.resize()
        myChart2.resize()
      })
    }
  }
}
</script>

<style scoped>
/* 订购用户中的两个层设置高开始 */
.paid_users_row {
  height: calc((100% - 0.3rem) / 2);
  display: flex;
  align-items: center;
}
#proportion_of_subscribers,#add_order_conversion_rate{
  height:calc(100% - 0.2rem);
}
.order_user_title{
  height:0.2rem;
  line-height: 0.2rem;
  text-align: center !important;
  margin-top:-0.1rem !important;
}
.paid_users_row .el-row {
  text-align: left;
  font-size: 0.12rem;
  color:#dedede;
}
.paid_users_row .el-row:nth-child(2){
  margin-top:0.05rem
}
.paid_users_row .el-row img{
  vertical-align: sub;
  margin-right:0.05rem;
}
.paid_users_row .el-row .number {
  padding-left:0.24rem;
}
.height_auto {
  height: 100%;
}
.paid_users_row .el-row .number i{
  font-style: normal;
  font-size: 0.2rem;
}
#paid_data {
  height: 100%;
}
.proportion .number i{
  color: #00C2FF;
}
.add_order .number i{
  color: #FF7D00;
}
/* 订购用户中的两个层设置高结束 */
</style>


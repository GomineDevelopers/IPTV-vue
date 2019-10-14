<template>
  <div class="abnormal_value">
    <!-- 异常值图表开始 -->
    <el-row class="abnormal_value_body">
      <el-row class="model_title">
        <span class="title_border_left"></span>各地市每天用户开机次数
      </el-row>
      <el-row class="chart_body back_white">
        <el-col class="height_auto" :span="24">
          <el-row id="abnormalValueChart" class="height_auto"></el-row>
        </el-col>
      </el-row>
    </el-row>
    <!-- 异常值图表结束 -->
  </div>
</template>
<script>
export default {
  name: 'AbnormalValue', //数据异常值
  data() {
    return {}
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var abnormalValueChart = this.$echarts.init(document.getElementById('abnormalValueChart'))

    var dataTime = ["12日", "13日", "14日", "15日", "16日", "17日", "18日", "19日", "20日", "21日", "22日", "23日", "24日", "25日", "26日", "27日"]
    var nameArray = ['贵阳', '遵义', '安顺', '黔南', '黔东南', '铜仁', '毕节', '六盘水', '黔西南']
    var stringArray = [
      "2.399513119\t2.828314028\t2.312376238\t2.39081537\t2.80230535\t4.282758621\t2.871265378\t3.114492445\t2.054696012\t2.142528736\t2.260790641\t2.956497386\t2.756800871\t2.834182329\t2.161296509\t2.069767442",
      "2.243289306\t2.451304667\t3.072733787\t3.604081633\t3.245494096\t2.364439536\t2.964993216\t2.597731469\t2.108393409\t2.114770973\t2.23516537\t2.211039681\t2.413382594\t2.330260836\t2.249948014\t2.356405586",
      "2.2115548\t2.292988314\t2.519937451\t2.497893258\t2.872407291\t2.538233551\t2.490751445\t2.459797499\t2.272427078\t2.300180018\t2.214814815\t2.291609977\t2.514273166\t2.553508772\t2.346221441\t3.146224356",
      "2.881062356\t3.452354874\t6.891098485\t6.633161512\t5.189054726\t3.179948586\t2.965047393\t2.928571429\t2.660836977\t2.630785791\t2.739397036\t2.946314832\t3.237510955\t3.279137287\t2.999109924\t3.03467707",
      "2.465287049\t2.561500615\t2.459474886\t2.412334353\t2.416162489\t3.014393939\t2.720028209\t2.606966925\t2.497919556\t2.417412782\t2.463011314\t2.712787724\t2.811590689\t3.691940976\t2.441564675\t2.481199539",
      "2.264090177\t2.755319149\t2.627272727\t2.629251701\t3.463753724\t6.730186999\t2.640067912\t4.172828891\t2.45295587\t4.059006211\t13.71069634\t3.83463035\t2.623197115\t2.623885918\t2.367591425\t5.274660366",
      "2.845310597\t2.784334764\t3.176416819\t8.3352\t2.855622089\t2.995719636\t2.912475822\t2.709547739\t2.521096129\t2.787443578\t2.731441048\t2.579281184\t2.750401542\t2.722999107\t2.494865212\t2.878107218",
      "2.579158317\t2.437965261\t2.428742515\t2.682148853\t2.512361915\t2.73129562\t3.615555556\t6.080348944\t6.415909091\t4.479406919\t5.112459547\t2.496071829\t2.531814895\t2.546671128\t2.665264634\t2.435844513",
      "2.810897436\t2.833093525\t2.784266985\t2.880855397\t3.12243221\t3.431059507\t2.886162236\t2.824213406\t2.591207349\t2.568014706\t2.58037225\t2.846077948\t2.813664596\t2.715574549\t6.092814371\t6.200475059"
    ]

    var seriesData = [];
    for (var i = 0; i < 9; i++) {
      var tmpData = {};
      tmpData.type = "line";
      tmpData.symbol = "circle";
      tmpData.data = stringArray[i].split("\t");
      for (var j = 0; j < tmpData.data.length; j++) {
        tmpData.data[j] = parseFloat(tmpData.data[j]).toFixed(2);
      }
      tmpData.name = nameArray[i];
      seriesData[i] = tmpData;
    }
    console.log('seriesData', seriesData)
    seriesData[5].markPoint = {
      symbol: "Rect",
      symbolSize: [80, 30],
      label: {
        show: true, formatter: function (param) {
          return "异常值";
        }
      },
      data: [
        {
          coord: [10, '14.2'], label: { show: true }
        }
      ]
    };

    // 指定图表的配置项和数据
    var option = {
      color: ["#3BA0FF", "#FF6123", "#975FE4", "#7ECDF4", "#FCB84F", "#4ADBC7", "#5E70F1", "#A9CCDC", "#FC9D91"],
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: nameArray,
        icon: "circle",
        itemWidth: 6,  // 设置宽度
        itemHeight: 6, // 设置高度
        itemGap: 20, // 设置间距
        textStyle: {
          fontSize: 14,
          color: 'rgba(0, 0, 0, 0.65)'
        }
      },
      //图表自带工具
      toolbox: {
        show: true,
        feature: {
          // dataView: { readOnly: false }, //切换数据视图查看数据
          magicType: { type: ['line', 'bar'] },
          restore: {},
          saveAsImage: {}
        }
      },
      grid: {
        top: "10%",
        left: '2%',
        right: '2%',
        bottom: "7%",
        containLabel: true
      },
      dataZoom: [
        {
          show: true,
          start: 0,
          end: 100
        },
        {
          type: 'inside',
          start: 0,
          end: 100
        }
      ],
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: dataTime,
        axisLabel: {//横坐标类目文字
          show: true,
          textStyle: {
            fontSize: '12'//设置横坐标轴文字颜大小
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(0,0,0,0.65)',//设置横坐标轴线颜色
          }
        },
      },
      yAxis: {
        type: 'value',
        // 刻度线的设置
        splitLine: {
          show: true,
          lineStyle: {
            color: "#939393",
            type: "dotted",
            opacity: 0.2
          },
        },
        axisLine: {
          show: false,  //Y轴不显示
          lineStyle: {
            color: 'rgba(0,0,0,0.65)',//设置横坐标轴线颜色
          }
        },
        axisLabel: {//横坐标类目文字
          show: true,
          textStyle: {
            fontSize: '12'//设置横坐标轴文字颜大小
          }
        },
        axisTick: {
          show: false  //设置坐标轴刻度不显示
        },
      },
      series: seriesData
    };

    // 使用刚指定的配置项和数据显示图表。
    abnormalValueChart.setOption(option)

    window.addEventListener('resize', () => {
      abnormalValueChart.resize()
    })
  }
}
</script>
<style scoped>
.abnormal_value_body {
  height: 750px;
  margin-bottom: 50px;
}
</style>
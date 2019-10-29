<template>
  <div class="height_auto InTheNetwork">
    <div class="height_auto m_table">
      <el-row class="mt_title">
        <el-row class="mt_h">
          <el-col :span="3"></el-col>
          <el-col :span="4">在网数（万）</el-col>
          <el-col :span="4">户均观看时长（小时）</el-col>
          <el-col :span="4">订购用户占比（%）</el-col>
          <el-col :span="9">用户画像</el-col>
        </el-row>
      </el-row>
      <el-row class="mt_row">
        <el-row class="mt_h">
          <el-col :span="3">总体数据</el-col>
          <el-col
            :span="4"
            class="data_num"
            v-for="(item1,index1) in total_user_data"
            :key="index1 + 'a'"
          >{{item1}}</el-col>
          <!-- <el-col :span="4" class="data_num">292</el-col>
          <el-col :span="4" class="data_num">123</el-col>
          <el-col :span="4" class="data_num">1232</el-col>-->
          <el-col :span="9" id="Net_echartsA"></el-col>
        </el-row>
      </el-row>
      <el-row class="mt_row">
        <el-row class="mt_h">
          <el-col :span="3">活跃</el-col>
          <el-col
            :span="4"
            class="data_num"
            v-for="(item2,index2) in active_user"
            :key="index2 + 'b'"
          >{{item2}}</el-col>
          <!-- <el-col :span="4" class="data_num">292</el-col>
          <el-col :span="4" class="data_num">123</el-col>
          <el-col :span="4" class="data_num">1232</el-col>-->
          <el-col :span="9" id="Net_echartsB"></el-col>
        </el-row>
      </el-row>
      <el-row class="mt_row">
        <el-row class="mt_h">
          <el-col :span="3">沉默</el-col>
          <el-col
            :span="4"
            class="data_num"
            v-for="(item3,index3) in silence_user"
            :key="index3 + 'c'"
          >{{item3}}</el-col>
          <!-- <el-col :span="4" class="data_num">292</el-col>
          <el-col :span="4" class="data_num">123</el-col>
          <el-col :span="4" class="data_num">1232</el-col>-->
          <el-col :span="9" id="Net_echartsC"></el-col>
        </el-row>
      </el-row>
      <el-row class="mt_row">
        <el-row class="mt_h">
          <el-col :span="3">停机</el-col>
          <el-col
            :span="4"
            class="data_num"
            v-for="(item4,index4) in downtime_user"
            :key="index4 + 'd'"
          >{{item4}}</el-col>
          <!-- <el-col :span="4" class="data_num">292</el-col>
          <el-col :span="4" class="data_num">123</el-col>
          <el-col :span="4" class="data_num">1232</el-col>-->
          <el-col :span="9" id="Net_echartsD"></el-col>
        </el-row>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "InTheNetwork",
  data() {
    return {
      total_user_data: [],
      active_user: [],  //活跃
      silence_user: [],  //沉默
      downtime_user: [],  //停机

      //总的用户画像
      Net_data1: {
        id: "Net_echartsA",
        // data1: ["订购-Firsttime", "订购-Onetime", "订购-忠诚用户", "未订购用户"],
        data2: [
          // { value: 1035, name: "A" },
          // { value: 979, name: "B" },
          // { value: 848, name: "C" },
          // { value: 748, name: "D" }
        ]
      },
      //活跃用户用户画像
      Net_data2: {
        id: "Net_echartsB",
        data2: [
          // { value: 1035, name: "A" },
          // { value: 979, name: "B" },
          // { value: 848, name: "C" },
          // { value: 748, name: "D" }
        ]
      },
      //沉默用户用户画像
      Net_data3: {
        id: "Net_echartsC",
        data2: [
          // { value: 1035, name: "A" },
          // { value: 979, name: "B" },
          // { value: 848, name: "C" },
          // { value: 748, name: "D" }
        ]
      },
      //停机用户用户画像
      Net_data4: {
        id: "Net_echartsD",
        data2: [
          // { value: 1035, name: "A" },
          // { value: 979, name: "B" },
          // { value: 848, name: "C" },
          // { value: 748, name: "D" }
        ]
      }
    };
  },
  props: ["api_data3"],
  watch: {
    api_data3(newValue, oldValue) {
      let vm = this;
      console.log("在网用户数据------------------------")
      console.log("ULC - api_data3:");
      console.log(newValue);

      let inTheNetworkData = newValue.aggregations.flag_identity.buckets
      let active_user_temp = []  //活跃用户
      let silence_user_temp = []  //沉默用户
      let downtime_user_temp = []  //停机用户
      let total_user_temp = []  //总的用户数据
      let total_register_num = 0   //总的在册用户
      let total_watch_dur = 0   //总的观看时长
      let total_watch_user_num = 0   //总的观看用户数
      let total_watch_dur_family   //总的户均观看时长
      let total_cum_paid_num = 0   //总的订购用户

      //用户画像
      let active_user_por_temp = []   //活跃用户
      let silence_user_por_temp = []   //沉默用户
      let downtime_user_por_temp = []   //停机用户
      let total_user_por_temp = []   //总体数据

      let total_firsttime_num = 0   //总的firsttime_num
      let total_oncetime_num = 0   //总的oncetime_num
      let total_loyal_user_num = 0   //总的loyal_user_num
      let total_unord_num = 0   //总的unord_num
      let total_repurchase_num = 0   //总的repurchase_num
      let total_lapsed_num = 0   //总的lapsed_num

      inTheNetworkData.forEach((value, index) => {
        // console.log("--------------------")
        // console.log(value.key, value.register_num.value, value.watch_dur_family.value, value.cum_paid_num.value)
        // console.log(value.key, value.firsttime_num.value, value.oncetime_num.value, value.loyal_user_num.value, value.unord_num.value)
        // console.log("--------------------")
        let register_num = Number((value.register_num.value / 10000).toFixed(2))
        let watch_dur_family = ((value.watch_dur.value / 60) / value.watch_user_num.value).toFixed(2)
        let cum_paid_rate = Number(((value.cum_paid_num.value / value.register_num.value) * 100).toFixed(2)) + '%'
        if (value.key == 'active_user') {
          // console.log(value)
          active_user_temp.push(register_num, watch_dur_family, cum_paid_rate)
          active_user_por_temp.push({
            value: value.firsttime_num.value,
            name: "尝试购买"
          })
          active_user_por_temp.push({
            value: value.oncetime_num.value,
            name: "一次性购买"
          })
          active_user_por_temp.push({
            value: value.loyal_user_num.value,
            name: "忠诚用户"
          })
          active_user_por_temp.push({
            value: value.unord_num.value,
            name: "从未订购"
          })
          active_user_por_temp.push({
            value: value.repurchase_num.value,
            name: "重新激活"
          })
          active_user_por_temp.push({
            value: value.lapsed_num.value,
            name: "睡眠用户"
          })
        } else if (value.key == 'silence_user') {
          silence_user_temp.push(register_num, watch_dur_family, cum_paid_rate)
          silence_user_por_temp.push({
            value: value.firsttime_num.value,
            name: "尝试购买"
          })
          silence_user_por_temp.push({
            value: value.oncetime_num.value,
            name: "一次性购买"
          })
          silence_user_por_temp.push({
            value: value.loyal_user_num.value,
            name: "忠诚用户"
          })
          silence_user_por_temp.push({
            value: value.unord_num.value,
            name: "从未订购"
          })
          silence_user_por_temp.push({
            value: value.repurchase_num.value,
            name: "重新激活"
          })
          silence_user_por_temp.push({
            value: value.lapsed_num.value,
            name: "睡眠用户"
          })
        } else if (value.key == 'downtime_user') {
          downtime_user_temp.push(register_num, watch_dur_family, cum_paid_rate)
          downtime_user_por_temp.push({
            value: value.firsttime_num.value,
            name: "尝试购买"
          })
          downtime_user_por_temp.push({
            value: value.oncetime_num.value,
            name: "一次性购买"
          })
          downtime_user_por_temp.push({
            value: value.loyal_user_num.value,
            name: "忠诚用户"
          })
          downtime_user_por_temp.push({
            value: value.unord_num.value,
            name: "从未订购"
          })
          downtime_user_por_temp.push({
            value: value.repurchase_num.value,
            name: "重新激活"
          })
          downtime_user_por_temp.push({
            value: value.lapsed_num.value,
            name: "睡眠用户"
          })
        }
        total_register_num += value.register_num.value  //总在册人数
        total_watch_dur += value.watch_dur.value   //总的观看时长(小时)
        total_watch_user_num += value.watch_user_num.value  //总的观看用户数
        total_watch_dur_family = (total_watch_dur / 60) / total_watch_user_num
        total_cum_paid_num += value.cum_paid_num.value  //总订购人数

        total_firsttime_num += value.firsttime_num.value
        total_oncetime_num += value.oncetime_num.value
        total_loyal_user_num += value.loyal_user_num.value
        total_unord_num += value.unord_num.value
        total_repurchase_num += value.repurchase_num.value
        total_lapsed_num += value.lapsed_num.value
      });
      //总的订购用户占比
      let total_cum_paid_rate = Number(((total_cum_paid_num / total_register_num) * 100).toFixed(2))
      //总数据total_user_data
      total_user_temp.push(Number((total_register_num / 10000).toFixed(2)))
      total_user_temp.push(Number((total_watch_dur_family).toFixed(2)))
      total_user_temp.push(total_cum_paid_rate + '%')

      //得到总的用户画像
      total_user_por_temp.push({
        value: total_firsttime_num,
        name: "尝试购买"
      })
      total_user_por_temp.push({
        value: total_oncetime_num,
        name: "一次性订购"
      })
      total_user_por_temp.push({
        value: total_loyal_user_num,
        name: "忠诚用户"
      })
      total_user_por_temp.push({
        value: total_unord_num,
        name: "从未订购"
      })
      total_user_por_temp.push({
        value: total_repurchase_num,
        name: "重新激活"
      })
      total_user_por_temp.push({
        value: total_lapsed_num,
        name: "睡眠用户"
      })

      vm.total_user_data = total_user_temp
      vm.active_user = active_user_temp
      vm.silence_user = silence_user_temp
      vm.downtime_user = downtime_user_temp

      vm.Net_data1.data2 = total_user_por_temp
      vm.Net_data2.data2 = active_user_por_temp
      vm.Net_data3.data2 = silence_user_por_temp
      vm.Net_data4.data2 = downtime_user_por_temp

      // console.log("active_user_temp", active_user_temp)
      // console.log("silence_user_temp", silence_user_temp)
      // console.log("downtime_user_temp", downtime_user_temp)
      // console.log("total_register_num", total_register_num)
      // console.log("total_user_temp", total_user_temp)

      // console.log("active_user_por_temp", active_user_por_temp)
      // console.log("silence_user_por_temp", silence_user_por_temp)
      // console.log("downtime_user_por_temp", downtime_user_por_temp)
      // console.log("total_user_por_temp", total_user_por_temp)

      // 此处组件-刷新-drawline()
      setTimeout(function () {
        vm.drawLine1();
        vm.drawLine2();
        vm.drawLine3();
        vm.drawLine4();
      }, 100);
    }
  },
  mounted() {
    this.drawLine1();
    this.drawLine2();
    this.drawLine3();
    this.drawLine4();
  },
  methods: {
    drawLine1() {
      let vm = this;
      var myChart = this.$echarts.init(
        document.getElementById(vm.Net_data1.id)
      );
      var option = {
        tooltip: {
          trigger: "item",
          extraCssText: "height:60px",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: [
          {
            show: true,
            top: "0",
            right: "0",
            data: vm.Net_data1.data1,
            itemWidth: 6,
            itemHeight: 6,
            width: 20,
            itemGap: 2,
            textStyle: {
              color: "rgba(0,0,0,0.45)"
            }
          }
        ],
        series: [
          // 外环
          {
            name: "用户画像",
            type: "pie",
            center: ['40%', '50%'],
            radius: ["80%", "60%"], // 大小
            color: [
              "#91D4F5",
              "#BE8FF5",
              "#FCC269",
              "#64E0CF",
              "#F99184",
              "#7584F2"
            ],
            label: {
              normal: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            hoverAnimation: false, //鼠标移入变大false
            data: vm.Net_data1.data2
          }
        ]
      };
      myChart.clear();
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },

    drawLine2() {
      let vm = this;

      var myChart = this.$echarts.init(
        document.getElementById(vm.Net_data2.id)
      );
      var option = {
        tooltip: {
          trigger: "item",
          extraCssText: "height:60px",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
          // 外环
          {
            name: "用户画像",
            type: "pie",
            center: ['40%', '50%'],
            radius: ["80%", "60%"], // 大小
            color: [
              "#91D4F5",
              "#BE8FF5",
              "#FCC269",
              "#64E0CF",
              "#F99184",
              "#7584F2"
            ],
            label: {
              normal: {
                show: false
              }
            },
            hoverAnimation: false, //鼠标移入变大false
            labelLine: {
              normal: {
                show: false
              }
            },
            data: vm.Net_data2.data2
          }
        ]
      };
      myChart.clear();
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },

    drawLine3() {
      let vm = this;

      var myChart = this.$echarts.init(
        document.getElementById(vm.Net_data3.id)
      );
      var option = {
        tooltip: {
          trigger: "item",
          extraCssText: "height:60px",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
          // 外环
          {
            name: "用户画像",
            type: "pie",
            center: ['40%', '50%'],
            radius: ["80%", "60%"], // 大小
            color: [
              "#91D4F5",
              "#BE8FF5",
              "#FCC269",
              "#64E0CF",
              "#F99184",
              "#7584F2"
            ],
            hoverAnimation: false, //鼠标移入变大false
            label: {
              normal: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: vm.Net_data3.data2
          }
        ]
      };
      myChart.clear();
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },

    drawLine4() {
      let vm = this;
      var myChart = this.$echarts.init(
        document.getElementById(vm.Net_data4.id)
      );
      var option = {
        tooltip: {
          trigger: "item",
          extraCssText: "height:60px",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
          // 外环
          {
            name: "用户画像",
            type: "pie",
            center: ['40%', '50%'],
            radius: ["80%", "60%"], // 大小
            color: [
              "#91D4F5",
              "#BE8FF5",
              "#FCC269",
              "#64E0CF",
              "#F99184",
              "#7584F2"
            ],
            hoverAnimation: false, //鼠标移入变大false
            label: {
              normal: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: vm.Net_data4.data2
          }
        ]
      };
      myChart.clear();
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  }
};
</script>

<style>
.InTheNetwork {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #333333;
}
.InTheNetwork .mt_title .mt_h {
  height: 35px;
  line-height: 35px;
  display: -webkit-flex;
  display: flex;
}
.InTheNetwork .mt_title .mt_h div {
  display: -webkit-flex;
  display: flex;
  justify-content: center;
}
.InTheNetwork .mt_row {
  height: calc((100% - 35px) / 4);
}
.InTheNetwork .mt_row .mt_h {
  height: 100%;
}
.InTheNetwork .mt_row .mt_h div {
  height: 100%;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
}
.InTheNetwork #Net_echartsA,
.InTheNetwork #Net_echartsB,
.InTheNetwork #Net_echartsC,
.InTheNetwork #Net_echartsD {
  height: 100%;
}

.InTheNetwork .data_num {
  font-size: 12px;
  color: #999999;
}
</style>

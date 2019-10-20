<template>
  <div class="UserStructure height_auto">
    <el-row :style="{width: '100%',height: '100%'}">
      <el-col :span="10">
        <div id="echartsUA" :style="{width: '100%',height: '14vw'}"></div>
      </el-col>
      <el-col :span="3">
        <div class="arrow" :style="{width: '100%',height: '14vw'}">
          <p class="a_content">订购用户</p>
        </div>
      </el-col>
      <el-col :span="10">
        <div id="echartsUB" :style="{width: '100%',height: '14vw'}"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "UserStructure",
  props: ["api_data4"],
  watch: {
    api_data4(newValue, oldValue) {
      let vm = this;
      console.log("在网用户结构：ULC - api_data4:");
      console.log(newValue);
      let total_data = newValue.aggregations.flag_identity.buckets
      let total_firsttime_num = 0   //总的firsttime_num
      let total_oncetime_num = 0   //总的oncetime_num
      let total_loyal_user_num = 0   //总的loyal_user_num
      let total_unord_num = 0   //总的unord_num
      total_data.forEach((value, index) => {
        // console.log(value.key, value.firsttime_num.value, value.oncetime_num.value, value.loyal_user_num.value, value.unord_num.value)
        total_firsttime_num += value.firsttime_num.value
        total_oncetime_num += value.oncetime_num.value
        total_loyal_user_num += value.loyal_user_num.value
        total_unord_num += value.unord_num.value
      })

      // console.log("total_firsttime_num", total_firsttime_num)
      // console.log("total_oncetime_num", total_oncetime_num)
      // console.log("total_loyal_user_num", total_loyal_user_num)
      // console.log("total_unord_num", total_unord_num)

      //订购与未订购数据
      let order_data = []
      order_data.push({
        value: total_unord_num,
        name: "未订购"
      })
      order_data.push({
        value: total_firsttime_num + total_oncetime_num + total_loyal_user_num,
        name: "订购"
      })
      vm.US_data1.data1 = order_data

      //订购用户数据
      let order_user_detail_data = []
      order_user_detail_data.push({
        value: total_firsttime_num,
        name: "订购-Firsttime"
      })
      order_user_detail_data.push({
        value: total_oncetime_num,
        name: "订购-Onetime"
      })
      order_user_detail_data.push({
        value: total_loyal_user_num,
        name: "订购-忠诚用户"
      })
      vm.US_data2.data1 = order_user_detail_data


      // 测试
      // vm.US_data1.data1 = [
      //   { value: 123, name: "订购" },
      //   { value: 77, name: "未订购" }
      // ];
      // vm.US_data2.data1 = [
      //   { value: 111, name: "firsttime" },
      //   { value: 13, name: "onetime" },
      //   { value: 19, name: "周期性购买" },
      //   { value: 317, name: "忠诚用户" },
      //   { value: 22, name: "疑似流失" }
      // ];
      // 此处组件-刷新-drawline()
      setTimeout(function () {
        vm.drawLine();
        vm.drawLine2();
      }, 100);
    }
  },
  mounted() {
    this.drawLine();
    this.drawLine2();
  },
  data() {
    return {
      US_data1: {
        id: "echartsUA",
        data1: [
          // { value: 23, name: "订购" }, 
          // { value: 77, name: "未订购" }
        ]
      },
      US_data2: {
        id: "echartsUB",
        data1: [
          // { value: 11, name: "firsttime" },
          // { value: 13, name: "onetime" },
          // { value: 19, name: "周期性购买" },
          // { value: 37, name: "忠诚用户" },
          // { value: 22, name: "疑似流失" }
        ]
      }
    };
  },

  methods: {
    drawLine() {
      let vm = this;
      var myChart = this.$echarts.init(document.getElementById(vm.US_data1.id));

      var option = {
        title: {
          text: "",
          subtext: "",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        //图表自带工具
        toolbox: {
          show: true,
          right: "6%",
          feature: {
            saveAsImage: {}
          }
        },
        series: [
          {
            name: "用户",
            type: "pie",
            radius: "60%",
            center: ["45%", "50%"],
            selectedMode: "single",
            color: ["#FCB84F", "#F97E6F"],
            label: {
              normal: {
                formatter: "{b}:\n {d}%" // 只显示百分比
              }
            },
            labelLine: {
              show: false,
              normal: {
                smooth: 0.2,
                length: 1
              }
            },
            data: vm.US_data1.data1,
            emphasis: false,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
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
      var myChart = this.$echarts.init(document.getElementById(vm.US_data2.id));

      var option = {
        title: {
          text: "",
          subtext: "",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        //图表自带工具
        toolbox: {
          show: true,
          right: "6%",
          feature: {
            saveAsImage: {}
          }
        },
        series: [
          {
            name: "用户",
            type: "pie",
            radius: "60%",
            center: ["45%", "50%"],
            selectedMode: "single",
            color: ["#FCB84F", "#B37CF4", "#7ECDF4", "#F97E6F", "#4ADBC7"],

            label: {
              normal: {
                formatter: "{b}:\n {d}%" // 只显示百分比
              }
            },
            labelLine: {
              normal: {
                smooth: 0.2,
                length: 5
              }
            },
            emphasis: false,
            data: vm.US_data2.data1,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
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
.UserStructure .el-row {
  display: -webkit-flex;
  display: flex;
  align-items: center;
}
.UserStructure div {
  display: inline-block;
}
.UserStructure .arrow {
  background: url(../../../assets/m_arrow.png) no-repeat;
  background-size: 100%;
  font-size: 12px;
  color: #ffffff;
  vertical-align: top;
  /* margin-top: 20%; */
  margin-top: 200%;
}
.UserStructure .a_content {
  margin: 0;
  margin: auto;
  /* margin-top: 10%; */
  margin-top: 12%;
}
</style>


<style scoped>
</style>

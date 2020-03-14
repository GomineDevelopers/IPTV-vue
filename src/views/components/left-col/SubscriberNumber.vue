<template>
  <div class="height_auto">
    <el-row class="title_row">
      <span class="title_border_left"></span>订购用户数
    </el-row>
    <el-row class="title_row2">
      <!-- <span class="m_time_title">当日：</span> -->
      <span class="m_time_title">累计：</span>

    </el-row>
    <el-row v-show="ifgetdata" class="paid_users_row proportion">
      <el-col :span="12" class="height_auto">
        <el-row id="proportion_of_subscribers"></el-row>
        <el-row class="order_user_title">订购用户占比</el-row>
      </el-col>
      <el-col :span="12">
        <el-row class="height_auto">
          <img src="@/assets/user_icon2.png" />订购用户数(户)：
          <br />
          <span class="number">
            <!-- <i>452.3</i>万 -->
            <i>{{cum_paid_num}}</i>
          </span>
        </el-row>
        <el-row>
          <img src="@/assets/earning_icon.png" />收入(万元)：
          <br />
          <span class="number">
            <!-- <i>4367.7</i>万元 -->
            <i>{{cum_income}}</i>
          </span>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="title_row2">
      <!-- <span class="m_time_title">近7天：</span> -->
      <!-- <span class="m_time_title">当日：</span> -->
      <el-col :span="12" class="m_time_title height_auto">
        当日：
      </el-col>

      <el-col :span="12" class="m_time_title height_auto">
        近7天：
      </el-col>

    </el-row>
    <el-row v-show="ifgetdata" class="paid_users_row add_order">
      <el-col :span="12" class="height_auto">
        <el-row id="add_order_conversion_rate"></el-row>
        <!-- <el-row class="order_user_title">新增订购转换率（周）</el-row> -->
        <el-row class="order_user_title">新增订购转换率</el-row>
      </el-col>
      <el-col :span="12">
        <el-row>
          <img src="@/assets/user_icon.png" />新增订购用户数(户)：
          <br />
          <span class="number">
            <!-- <i>2.3</i>万 -->
            <i>{{new_paid_num}}</i>
          </span>
        </el-row>
        <el-row>
          <img src="@/assets/earning_icon2.png" />收入(万元)：
          <br />
          <span class="number">
            <!-- <i>47.2</i>万元 -->
            <i>{{new_income}}</i>
          </span>
        </el-row>
      </el-col>
    </el-row>
    <el-row v-show="!ifgetdata" class="exception_p">
      <span class="exception_child">数据请求异常!</span>
    </el-row>
  </div>
</template>
<script>
import { users_subscribe, users_basic } from "@/api/api_main";
import { commonTools } from "@/utils/test";

export default {
  name: "SubscriberNumber", //订购用户数组件
  data() {
    return {
      ifgetdata: true,

      cum_paid_num: null,
      cum_income: null,
      new_paid_num: null,
      new_income: null,
      subscriber_proportion: 0,
      New_order_conversion_rate: 0
    };
  },
  mounted() {
    let vm = this;
    setTimeout(function() {
      vm.$store
        .dispatch("get_BigScreenExpirationDate")
        .then(function(response) {
          vm.users_subscribe(response, "day"); // 当天
          vm.users_subscribe(response, "7days"); // 前七天（包括当天）
          vm.drawLine();
        })
        .catch(function(error) {
          console.info(error);
        });
    }, 100);
  },
  methods: {
    users_subscribe(ExpirationDate, date_time) {
      let vm = this;
      let data;
      let data_ub;
      let m_operator = commonTools.GetBigScreenOperator();

      if (date_time == "day") {
        data = {
          operator: m_operator,
          start: ExpirationDate,
          end: ExpirationDate,
          year: commonTools.get_ExpirationDate_year(ExpirationDate)
        };
        data_ub = {
          operator: m_operator,
          start: ExpirationDate,
          end: ExpirationDate,
          year: commonTools.get_ExpirationDate_year(ExpirationDate)
        };
      }
      if (date_time == "7days") {
        data = {
          operator: m_operator,
          start: commonTools.currentDay_ndaysAgodate(ExpirationDate, 6),
          end: ExpirationDate,
          year: commonTools.get_ExpirationDate_year(ExpirationDate)
        };
        data_ub = {
          operator: m_operator,
          start: commonTools.currentDay_ndaysAgodate(ExpirationDate, 6),
          end: ExpirationDate,
          year: commonTools.get_ExpirationDate_year(ExpirationDate)
        };
      }
      users_subscribe(data)
        .then(function(response) {
          if (date_time == "day") {
            // console.log(response);
          }
          if (date_time == "7days") {
            // console.log(response);
          }

          users_basic(data_ub)
            .then(function(response2) {
              if (date_time == "day") {
                // console.log(response2);
              }
              if (date_time == "7days") {
                // console.log(response2);
              }

              let aggregations = response.data.responses[0].aggregations;
              let aggregations2 = response2.data.responses[0].aggregations;
              if (date_time == "day") {
                vm.cum_paid_num = aggregations.cum_paid_num.value;
                vm.cum_income = (
                  aggregations.cum_income.value /
                  100 /
                  10000
                ).toFixed(0);
                // 订购用户占比

                vm.subscriber_proportion = commonTools.returnFloat_2(
                  (aggregations.cum_paid_num.value /
                    (aggregations2.all_register_num.value +
                      aggregations2.all_unsub_user_num.value)) *
                    100
                );
                // if (aggregations.cum_income.value == 0) {
                //   vm.subscriber_proportion = "";
                // } else {
                //   vm.subscriber_proportion = commonTools.returnFloat_2(
                //     (aggregations.cum_paid_num.value /
                //       (aggregations2.all_register_num.value +
                //         aggregations2.all_unsub_user_num.value)) *
                //       100
                //   );
                // }
                
                if (aggregations.new_num.value == 0) {
                  vm.New_order_conversion_rate = commonTools.returnFloat_2(0);
                } else {
                  // vm.New_order_conversion_rate = commonTools.returnFloat_2(
                  //   (aggregations.new_paid_num.value /
                  //     aggregations.new_num.value) *
                  //     100
                  // );
                  vm.New_order_conversion_rate = commonTools.returnFloat_2(
                    (aggregations.new_paid_num.value /
                      aggregations.active_num.value) *
                      100
                  );
                }

              }

              if (date_time == "7days") {
                console.log(aggregations);
                vm.new_paid_num = aggregations.new_paid_num.value;
                vm.new_income = (
                  aggregations.new_income.value /
                  100 /
                  10000
                ).toFixed(0);

                // if (aggregations.new_num.value == 0) {
                //   vm.New_order_conversion_rate = commonTools.returnFloat_2(0);
                // } else {
                //   vm.New_order_conversion_rate = commonTools.returnFloat_2(
                //     (aggregations.new_paid_num.value /
                //       aggregations.new_num.value) *
                //       100
                //   );
                // }

              }
              vm.ifgetdata = true;
              setTimeout(function() {
                vm.drawLine();
              }, 300);
            })

            .catch(function(error) {
              console.info(error);
              vm.ifgetdata = false;
            });
        })
        .catch(function(error) {
          console.info(error);
          vm.ifgetdata = false;
        });
    },
    drawLine() {
      let vm = this;
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(
        document.getElementById("proportion_of_subscribers")
      );

      // 指定图表的配置项和数据
      var option = {
        title: {
          // text: "68%",
          text: String(vm.subscriber_proportion) + "%",
          x: "center",
          y: "center",
          textStyle: {
            fontWeight: "normal",
            color: "#dedede",
            fontSize: "16"
          }
        },
        color: "rgba(47,69,84,0.8)",
        series: [
          {
            name: "Line 1",
            type: "pie",
            minAngle: 15,
            clockWise: true,
            // radius: ["50%", "73%"],
            radius: ["60%", "93%"],
            itemStyle: {
              normal: {
                borderWidth: 2, //设置border的宽度有多大
                borderColor: "#061b4f",
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false, //鼠标放上不放大
            data: [
              {
                value: vm.subscriber_proportion,
                name: "订购用户数",
                itemStyle: {
                  normal: {
                    color: {
                      // 完成的圆环的颜色
                      colorStops: [
                        {
                          offset: 0,
                          color: "#0083FF" // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#00C2FF" // 100% 处的颜色
                        }
                      ]
                    },
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              },
              {
                name: "未订购用户数",
                value: 32
              }
            ]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.clear();
      myChart.setOption(option);

      var myChart2 = this.$echarts.init(
        document.getElementById("add_order_conversion_rate")
      );
      var option2 = {
        title: {
          // text: "29%",
          text: String(vm.New_order_conversion_rate) + "%",
          x: "center",
          y: "center",
          textStyle: {
            fontWeight: "normal",
            color: "#dedede",
            fontSize: "16"
          }
        },
        color: "rgba(47,69,84,0.8)",
        legend: {
          show: false,
          itemGap: 12,
          data: ["已使用", "未使用"]
        },
        series: [
          {
            name: "Line 1",
            type: "pie",
            minAngle: 15,
            clockWise: true,
            // radius: ["50%", "73%"],
            radius: ["60%", "93%"],
            itemStyle: {
              normal: {
                borderWidth: 2, //设置border的宽度有多大
                borderColor: "#061b4f",
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false, //鼠标放上不放大
            data: [
              {
                value: vm.New_order_conversion_rate,
                name: "新增订购用户数",
                itemStyle: {
                  normal: {
                    color: {
                      // 完成的圆环的颜色
                      colorStops: [
                        {
                          offset: 0,
                          color: "#FF7E00" // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#FF4800" // 100% 处的颜色
                        }
                      ]
                    },
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              },
              {
                name: "未订购用户数",
                value: 71
              }
            ]
          }
        ]
      };
      myChart2.clear();
      myChart2.setOption(option2);

      //图表自适应
      window.addEventListener("resize", () => {
        myChart.resize();
        myChart2.resize();
      });
    }
  }
};
</script>

<style scoped>
.m_time_title {
  margin-left: 0.1rem;
  font-size: 0.1rem;
}

/* 订购用户中的两个层设置高开始 */
.paid_users_row {
  height: calc((100% - 0.7rem) / 2);
  display: flex;
  align-items: center;
}
#proportion_of_subscribers,
#add_order_conversion_rate {
  height: calc(100% - 0.2rem);
}
.order_user_title {
  height: 0.2rem;
  line-height: 0.2rem;
  text-align: center !important;
  /* margin-top: -0.1rem !important; */
  margin-top: 0rem !important;
}
.paid_users_row .el-row {
  text-align: left;
  font-size: 0.12rem;
  color: #dedede;
}
.paid_users_row .el-row:nth-child(2) {
  margin-top: 0.05rem;
}
.paid_users_row .el-row img {
  vertical-align: sub;
  margin-right: 0.05rem;
}
.paid_users_row .el-row .number {
  padding-left: 0.24rem;
}
.height_auto {
  height: 100%;
}
.paid_users_row .el-row .number i {
  font-style: normal;
  font-size: 0.2rem;
}
#paid_data {
  height: 100%;
}
.proportion .number i {
  color: #00c2ff;
}
.add_order .number i {
  color: #ff7d00;
}
/* 订购用户中的两个层设置高结束 */
</style>


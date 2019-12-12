<template>
  <div class="value_added_total">
    <!-- 条件筛选开始 -->
    <el-row class="value_added_option_select epg">
      <el-row class="model_title">
        <span class="title_border_left"></span>条件筛选
      </el-row>
      <el-row class="chart_body back_white">
        <option-select-valueAdd></option-select-valueAdd>
      </el-row>
    </el-row>
    <!-- 条件筛选结束 -->

    <!-- 用户转化开始 -->
    <el-row class="user_conversion" v-if="ifInitShow">
      <el-row class="model_title">
        <span class="title_border_left"></span>用户转化
      </el-row>
      <el-row class="chart_body back_white">
        <el-col class="height_auto" :span="12">
          <line-chart-single2 :lineData="newUserTotal"></line-chart-single2>
        </el-col>
        <el-col class="height_auto" :span="12">
          <line-chart-single-prop :lineData="newPayingUsersProportion"></line-chart-single-prop>
        </el-col>
      </el-row>
    </el-row>
    <!-- 用户转化结束 -->

    <!-- 订购用户开始 -->
    <el-row class="subscribers" v-if="ifInitShow">
      <el-row class="model_title">
        <span class="title_border_left"></span>订购用户
      </el-row>
      <el-row class="chart_body back_white">
        <el-col class="height_auto" :span="8">
          <!-- 订购用户 -->
          <bar-chart-single :chartData="subscribersData"></bar-chart-single>
        </el-col>
        <el-col class="height_auto" :span="8">
          <!-- 分包用户 -->
          <bar-chart-single :chartData="subcontractUserData"></bar-chart-single>
        </el-col>
        <el-col class="height_auto" :span="8">
          <!-- 分包收入 -->
          <bar-chart-single :chartData="subcontractIncomeData"></bar-chart-single>
        </el-col>
      </el-row>
    </el-row>
    <!-- 订购用户结束 -->
  </div>
</template>
<script>
import Vue from "vue";
import OptionSelectValueAdd from "@/views/backcoms/valueaddedtotal/OptionSelectValueAdd"; //数据总览条件筛选
import LineChartSingle2 from "@/views/backcoms/commoncomponents/LineChartSingle2"; //单数据折线图组件（新增用户概览）
import LineChartSingleProp from "@/views/backcoms/commoncomponents/LineChartSingleProp2"; //单数据折线图Y轴显示百分比组件（新增付费用户百分比）
import BarChartSingle from "@/views/backcoms/commoncomponents/BarChartSingle2"; //单数据折线图Y轴显示百分比组件（新增付费用户百分比）

import { mapGetters } from "vuex";
import { commonTools } from "@/utils/test";
import { increment } from "@/api/api_main";

export default {
  name: "ValueAddedTotal", //增值业务总览
  computed: {
    ...mapGetters([
      "ADD_ALL_operator",
      // "ADD_ALL_programa",
      "ADD_ALL_week",
      "ADD_ALL_month",
      "ADD_ALL_time_type"
    ])
  },
  components: {
    "option-select-valueAdd": OptionSelectValueAdd,
    "line-chart-single2": LineChartSingle2,
    "line-chart-single-prop": LineChartSingleProp,
    "bar-chart-single": BarChartSingle
  },
  watch: {
    ADD_ALL_operator(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.refresh_api_data();
      }, 1000);
    },
    // ADD_ALL_programa(newValue, oldValue) {
    //   let vm = this;
    //   setTimeout(function() {
    //     vm.refresh_api_data();
    //   }, 1000);
    // },
    ADD_ALL_week(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.refresh_api_data();
      }, 1000);
    },
    ADD_ALL_month(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.refresh_api_data();
      }, 1000);
    },
    ADD_ALL_time_type(newValue, oldValue) {
      let vm = this;
      vm.ifInitShow = true;
      setTimeout(function() {
        vm.refresh_api_data();
      }, 1000);
    }
  },
  mounted() {
    let vm = this;
    setTimeout(function() {
      if (vm.ADD_ALL_time_type == 0) {
        // 显示初始化
        vm.ifInitShow = false;
      } else {
        vm.ifInitShow = true;
        setTimeout(function() {
          vm.refresh_api_data();
        }, 1000);
      }
    }, 500);
  },
  methods: {
    refresh_api_data() {
      this.increment(this.ADD_ALL_time_type);
    },
    increment(time_type) {
      let vm = this;
      if (vm.ADD_ALL_operator.length == 0) {
        return;
      }
      let temp_operator = commonTools.operatorConvert(vm.ADD_ALL_operator);
      // let temp_programa = commonTools.programaConvert(vm.ADD_ALL_programa);

      let temp = {
        operator: null,
        // list: null,
        start: null,
        end: null,
        year: null
      };

      if (time_type == 1) {
        // 时间类型-1-周
        let temp_time = commonTools.split_yearAtime_byweekOrDay(
          vm.ADD_ALL_week
        );
        temp = {
          operator: String(temp_operator),
          // list: String(temp_programa),
          start: temp_time.time1,
          end: temp_time.time2,
          year: temp_time.year
        };
        // console.log("~~~~~1:");
        // console.log(temp);
      } else if (time_type == 2) {
        // 时间类型-2-月
        let temp_time = commonTools.split_yearAtime_byweekOrDay(
          vm.ADD_ALL_month
        );
        // console.log(temp_time);

        temp = {
          operator: String(temp_operator),
          // list: String(temp_programa),
          start: temp_time.time1,
          end: temp_time.time2,
          year: temp_time.year
        };
        // console.log("~~~~~2:");
        console.log(temp);
      } else {
        return;
      }

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("operator", temp.operator);
      // formData.append("list", temp.list);
      formData.append("start", temp.start);
      formData.append("end", temp.end);
      formData.append("year", temp.year);
      increment(formData)
        .then(function(response) {
          // console.log(response);
          // ///////// 1 2 3
          try {
            vm.newUserTotal.data = [];
            vm.newPayingUsersProportion.data = [];
            vm.subscribersData.data = [];
            let buckets_0;
            // let buckets_0 =
            //   response.data.responses[0].aggregations.statistical_granularity
            //     .buckets; //新增用户概览
            if (time_type == 1) {
              buckets_0 =
                response.data.responses[0].aggregations.statistical_granularity
                  .buckets;
            } else if (time_type == 2) {
              console.log(response);
              buckets_0 =
                response.data.responses[2].aggregations.statistical_granularity
                  .buckets;

              buckets_0 = commonTools.bucketsSort_WM(buckets_0); // 排序

              // buckets_0 = response.data.responses[0].aggregations.statistical_granularity.buckets;
            }

            let length_0 = buckets_0.length;
            if (length_0 == 0) {
              vm.newUserTotal.data = [];
              vm.newPayingUsersProportion.data = [];
              vm.subscribersData.data = [];
              throw "error：length_0 == 0";
            }
            let i_0;
            // 新增在册用户	new_num
            // 新增在册用户转化率	new2paid_rate
            // 新增在册用户转化率	new_person_paid_num/new_num 新增用户中订购用户数/新增用户
            // 新增收入	new_income
            // 新增订购用户数	new_paid_num
            let temp_newUserTotal = [["product"], ["新增用户"]]; // 1
            let temp_newPayingUsersProportion = [
              ["product"],
              ["新增付费用户占比"]
            ]; // 2
            let temp_subscribersData = [
              ["product", "订购用户数（数）", "收入（万元）"] // 3
            ];

            for (i_0 = 0; i_0 < length_0; i_0++) {
              if (time_type == 1) {
                // 1
                try {
                  temp_newUserTotal[0].push(
                    commonTools.format_dayToChinese_2(buckets_0[i_0].key)
                  );
                } catch (error) {
                  console.log(error);
                }
                // 2
                try {
                  temp_newPayingUsersProportion[0].push(
                    commonTools.format_dayToChinese_2(buckets_0[i_0].key)
                  );
                } catch (error) {
                  console.log(error);
                }
                // 3
                try {
                  temp_subscribersData.push([]);
                  Vue.set(
                    temp_subscribersData[i_0 + 1],
                    0,
                    commonTools.format_dayToChinese_2(buckets_0[i_0].key)
                  );
                } catch (error) {
                  console.log(error);
                }
              } // if
              if (time_type == 2) {
                // 1
                try {
                  temp_newUserTotal[0].push(
                    commonTools.format_weekToChinese(buckets_0[i_0].key)
                  );
                } catch (error) {
                  console.log(error);
                }
                // 2
                try {
                  temp_newPayingUsersProportion[0].push(
                    commonTools.format_weekToChinese(buckets_0[i_0].key)
                  );
                } catch (error) {
                  console.log(error);
                }
                // 3
                try {
                  temp_subscribersData.push([]);
                  Vue.set(
                    temp_subscribersData[i_0 + 1],
                    0,
                    commonTools.format_weekToChinese(buckets_0[i_0].key)
                  );
                } catch (error) {
                  console.log(error);
                }
              } // if

              // 1
              try {
                temp_newUserTotal[1].push(buckets_0[i_0].new_num.value);
              } catch (error) {
                console.log(error);
              }
              // 2
              try {
                temp_newPayingUsersProportion[1].push(
                  commonTools.returnFloat_2(
                    (
                      (buckets_0[i_0].new_person_paid_num.value /
                        buckets_0[i_0].new_num.value) *
                      100
                    ).toFixed(2)
                  )
                );
              } catch (error) {
                console.log(error);
              }
              // 3
              try {
                Vue.set(
                  temp_subscribersData[i_0 + 1],
                  1,
                  buckets_0[i_0].new_paid_num.value
                );
                Vue.set(
                  temp_subscribersData[i_0 + 1],
                  2,
                  (buckets_0[i_0].new_income.value / 10000 / 100).toFixed(2)
                );
              } catch (error) {
                console.log(error);
              }
            }
            vm.newUserTotal.data = [];
            vm.newPayingUsersProportion.data = [];
            vm.subscribersData.data = [];

            vm.newUserTotal.data = temp_newUserTotal;
            vm.newPayingUsersProportion.data = temp_newPayingUsersProportion;
            vm.subscribersData.data = temp_subscribersData;
          } catch (error) {
            console.log(error);
            vm.newUserTotal.data = [];
            vm.newPayingUsersProportion.data = [];
            vm.subscribersData.data = [];
          }

          // ///////// 4 5
          try {
            vm.subcontractUserData.data = [];
            vm.subcontractIncomeData.data = [];
            let buckets_1;
            if (time_type == 1) {
              buckets_1 =
                response.data.responses[1].aggregations.statistical_granularity
                  .buckets;
            } else if (time_type == 2) {
              buckets_1 =
                response.data.responses[3].aggregations.statistical_granularity
                  .buckets;
              buckets_1 = commonTools.bucketsSort_WM(buckets_1); // 排序

              // buckets_1 = response.data.responses[1].aggregations.statistical_granularity.buckets;
            }
            let length_1 = buckets_1.length;
            if (length_1 == 0) {
              vm.subcontractUserData.data = [];
              vm.subcontractIncomeData.data = [];
              throw "error：length_1 == 0";
            }
            let i_1;
            // 新增在册用户	new_num
            // 新增在册用户转化率	new2paid_rate
            // 新增在册用户转化率	new_person_paid_num/new_num 新增用户中订购用户数/新增用户
            // 新增收入	new_income
            // 新增订购用户数	new_paid_num

            let temp_subcontractUserData = [
              ["product", "欢乐家庭包（户）", "少儿包（户）", "影视包（户）"]
            ]; // 4
            let temp_subcontractIncomeData = [
              ["product", "欢乐家庭包（元）", "少儿包（元）", "影视包（元）"]
            ]; // 5

            for (i_1 = 0; i_1 < length_1; i_1++) {
              if (time_type == 1) {
                // 4
                try {
                  temp_subcontractUserData.push([]);
                  Vue.set(
                    temp_subcontractUserData[i_1 + 1],
                    0,
                    commonTools.format_dayToChinese_2(buckets_1[i_1].key)
                  );
                } catch (error) {
                  console.log(error);
                }
                // 5
                try {
                  temp_subcontractIncomeData.push([]);
                  Vue.set(
                    temp_subcontractIncomeData[i_1 + 1],
                    0,
                    commonTools.format_dayToChinese_2(buckets_1[i_1].key)
                  );
                } catch (error) {
                  console.log(error);
                }
              } // if
              if (time_type == 2) {
                // 4
                try {
                  temp_subcontractUserData.push([]);
                  Vue.set(
                    temp_subcontractUserData[i_1 + 1],
                    0,
                    commonTools.format_weekToChinese(buckets_1[i_1].key)
                  );
                } catch (error) {
                  console.log(error);
                }
                // 5
                try {
                  temp_subcontractIncomeData.push([]);
                  Vue.set(
                    temp_subcontractIncomeData[i_1 + 1],
                    0,
                    commonTools.format_weekToChinese(buckets_1[i_1].key)
                  );
                } catch (error) {
                  console.log(error);
                }
              } // if

              function Return_KeyValue_npn(key, index_date) {
                try {
                  let buckets_package =
                    buckets_1[index_date].value_added_service_package.buckets; // 用 buckets_1
                  let length_package = buckets_package.length;
                  let i_package;
                  if (length_package == 0) {
                    return 0;
                  }
                  for (i_package = 0; i_package < length_package; i_package++) {
                    if (buckets_package[i_package].key == key) {
                      return buckets_package[i_package].new_paid_num.value;
                      break;
                    }
                  }
                } catch (error) {
                  console.log(error);
                  return 0;
                }
                // return 0;
              }
              function Return_KeyValue_ni(key, index_date) {
                try {
                  let buckets_package =
                    buckets_1[index_date].value_added_service_package.buckets; // 用 buckets_1
                  let length_package = buckets_package.length;
                  let i_package;
                  if (length_package == 0) {
                    return 0;
                  }
                  for (i_package = 0; i_package < length_package; i_package++) {
                    if (buckets_package[i_package].key == key) {
                      return (
                        buckets_package[i_package].new_income.value / 100
                      ).toFixed(2);
                      break;
                    }
                  }
                } catch (error) {
                  console.log(error);
                  return 0;
                }
                // return 0;
              }
              // 4
              try {
                Vue.set(
                  temp_subcontractUserData[i_1 + 1],
                  1,
                  Return_KeyValue_npn("欢乐家庭VIP", i_1)
                );
                Vue.set(
                  temp_subcontractUserData[i_1 + 1],
                  2,
                  Return_KeyValue_npn("少儿VIP", i_1)
                );
                Vue.set(
                  temp_subcontractUserData[i_1 + 1],
                  3,
                  Return_KeyValue_npn("影视VIP", i_1)
                );
              } catch (error) {
                console.log(error);
              }
              // 5
              try {
                Vue.set(
                  temp_subcontractIncomeData[i_1 + 1],
                  1,
                  Return_KeyValue_ni("欢乐家庭VIP", i_1)
                );
                Vue.set(
                  temp_subcontractIncomeData[i_1 + 1],
                  2,
                  Return_KeyValue_ni("少儿VIP", i_1)
                );
                Vue.set(
                  temp_subcontractIncomeData[i_1 + 1],
                  3,
                  Return_KeyValue_ni("影视VIP", i_1)
                );
              } catch (error) {
                console.log(error);
              }
            }
            vm.subcontractUserData.data = [];
            vm.subcontractIncomeData.data = [];

            vm.subcontractUserData.data = temp_subcontractUserData;
            vm.subcontractIncomeData.data = temp_subcontractIncomeData;
            // console.log(temp_subcontractUserData);
            // console.log(temp_subcontractIncomeData);
            
          } catch (error) {
            console.log(error);
            vm.subcontractUserData.data = [];
            vm.subcontractIncomeData.data = [];
          }
        })
        .catch(function(error) {
          console.info(error);
        });
    }
  },

  data() {
    return {
      //新增用户概览数据
      ifInitShow: false,

      newUserTotal: {
        title: "新增用户概览（户）",
        id: "newUserTotal",
        color: "#FF6123",
        data: [
          // ["product", "15日", "16日", "17日", "18日", "19日", "20日", "21日"],
          // ["新增用户", 140, 170, 180, 200, 234, 240, 259]
        ]
      },
      //新增付费用户占比
      newPayingUsersProportion: {
        title: "新增付费用户占比",
        id: "newPayingUsers_ADD_ALL",
        color: "#5E70F1",

        data: [
          // ["product", "15日", "16日", "17日", "18日", "19日", "20日", "21日"],
          // ["新增用户占比", 3, 4, 3, 7, 9, 5, 8]
        ]
      },
      //订购用户数据
      subscribersData: {
        title: "订购用户",
        id: "subscribersUser",
        color: ["#FF6123", "#FFAA89"],
        data: [
          // ["product", "订购用户数（数）", "收入（元）"],
          // ["15日", 4330, 1563],
          // ["16日", 8300, 1457],
          // ["17日", 8600, 1896],
          // ["18日", 7242, 1457],
          // ["19日", 4337, 1123],
          // ["20日", 8310, 1245],
          // ["21日", 8665, 1234]
        ]
      },
      //分包用户数据
      subcontractUserData: {
        title: "分包用户",
        id: "subcontractUser",
        color: ["#FF6123", "#f97d4c", "#FFAA89"],
        data: [
          // ["product", "欢乐家庭包（户）", "少儿包（户）", "影视包（户）"],
          // ["15日", 4330, 3563, 3337],
          // ["16日", 8300, 6457, 2330],
          // ["17日", 8600, 7896, 1457],
          // ["18日", 7242, 5457, 4310],
          // ["19日", 4337, 1123, 3665],
          // ["20日", 8310, 5245, 4234],
          // ["21日", 8665, 7234, 2234]
        ]
      },
      //分包收入数据
      subcontractIncomeData: {
        title: "分包收入",
        id: "subcontractIncome",
        color: ["#FF6123", "#f97d4c", "#FFAA89"],
        data: [
          // ["product", "欢乐家庭包（户）", "少儿包（户）", "影视包（户）"],
          // ["15日", 4330, 3563, 2337],
          // ["16日", 8300, 6457, 1330],
          // ["17日", 8600, 7896, 2457],
          // ["18日", 7242, 5457, 3310],
          // ["19日", 4337, 1123, 1665],
          // ["20日", 8310, 5245, 2234],
          // ["21日", 8665, 7234, 1234]
        ]
      }
    };
  }
};
</script>
<style scoped>
.value_added_option_select {
  height: 250px;
}
/* 用户转化开始 */
.user_conversion {
  height: 422px;
  margin: 14px 0px;
}
/* 用户转化结束 */

/* 订购用户开始 */
.subscribers {
  height: 422px;
  margin-bottom: 50px;
}
/* 订购用户结束*/

/* 增值业务——总览页面自适应开始 */
@media (max-width: 1450px) {
  .user_conversion .el-col-12 {
    width: 100%;
    height: 362px;
  }
  .subscribers .el-col-8 {
    width: 100%;
    height: 372px;
  }
  .user_conversion,
  .subscribers {
    height: auto;
  }
}
</style>

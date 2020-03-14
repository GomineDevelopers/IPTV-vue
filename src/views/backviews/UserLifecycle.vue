<template>
  <div class="user_life_cycle">
    <!-- 条件筛选开始 -->
    <el-row class="option_select">
      <el-row class="model_title">
        <span class="title_border_left"></span>条件筛选
      </el-row>
      <el-row class="chart_body back_white">
        <com-optionselectULC></com-optionselectULC>
      </el-row>
    </el-row>
    <!-- 条件筛选结束 -->

    <div v-if="moduleShow">
      <!-- 在册和激活开始 -->
      <el-row class="user_register">
        <el-col class="user_register_left height_auto" :span="12">
          <el-row class="model_title">
            <!-- <span class="title_border_left"></span>在册 -->
            <span class="title_border_left"></span>在网
          </el-row>
          <el-row class="chart_body back_white">
            <com-registered v-bind:api_data1="api_data1" v-bind:api_data2="api_data2"></com-registered>
          </el-row>
        </el-col>
        <el-col class="user_register_right height_auto" :span="12">
          <el-row class="model_title">
            <span class="title_border_left"></span>激活
          </el-row>
          <el-row class="chart_body back_white">
            <com-activate
              v-bind:activate_user_num="activate_user_num"
              v-bind:activate_rate_data="activate_rate_data"
            ></com-activate>
          </el-row>
        </el-col>
      </el-row>
      <!-- 在册和激活结束-->

      <!-- 在网开始 -->
      <el-row class="user_online" v-if="ULC_time_type == 3">
        <el-col class="height_auto padding_right" :span="14">
          <el-row class="model_title">
            <span class="title_border_left"></span>在网
          </el-row>
          <el-row class="chart_body user_online_body back_white">
            <com-inthenetwork v-bind:api_data3="api_data3"></com-inthenetwork>
          </el-row>
        </el-col>
        <el-col
          class="height_auto padding_left"
          :span="10"
          v-if="ULC_operator.indexOf('电信') != -1 || ULC_operator==''"
        >
          <el-row class="model_title">
            <span class="title_border_left"></span>在网用户结构
          </el-row>
          <el-row class="chart_body user_structure_body back_white">
            <com-userstructure v-bind:api_data4="api_data4"></com-userstructure>
          </el-row>
        </el-col>
      </el-row>
      <!-- 在网结束 -->

      <!-- 用户细分开始 -->
      <el-row
        class="user_segment back_white"
        v-if="ULC_time_type == 3 && (ULC_operator.indexOf('电信') != -1 || ULC_operator=='')"
      >
        <el-row class="model_title">
          <span class="title_border_left"></span>用户细分
        </el-row>
        <el-row class="chart_body padding_10">
          <com-customersegmentation
            v-bind:api_data5="api_data5"
            v-bind:api_data6="api_data6"
            v-bind:api_data7="api_data7"
          ></com-customersegmentation>
        </el-row>
      </el-row>
      <!-- 用户细分结束 -->
    </div>
  </div>
</template>
<script>
import OptionSelectULC from "@/views/backcoms/userlifecycle/OptionSelectULC"; // 条件筛选
import Registered from "@/views/backcoms/userlifecycle/Registered"; // 在册
import Activate from "@/views/backcoms/userlifecycle/Activate"; // 激活
import InTheNetwork from "@/views/backcoms/userlifecycle/InTheNetwork"; // 在网
import UserStructure from "@/views/backcoms/userlifecycle/UserStructure"; // 用户结构
import CustomerSegmentation from "@/views/backcoms/userlifecycle/CustomerSegmentation"; // 用户细分

import Vue from "vue";
import { mapGetters } from "vuex";
import { commonTools } from "@/utils/test";
import { userLives } from "@/api/api_main";

export default {
  name: "UserLifecycle", //用户生命周期
  components: {
    "com-optionselectULC": OptionSelectULC,
    "com-registered": Registered,
    "com-activate": Activate,
    "com-inthenetwork": InTheNetwork,
    "com-userstructure": UserStructure,
    "com-customersegmentation": CustomerSegmentation
  },
  computed: {
    ...mapGetters([
      "ULC_region",
      "ULC_operator",
      "ULC_day",
      "ULC_week",
      "ULC_month",
      "ULC_time_type"
    ])
  },
  mounted() {
    let vm = this;
    vm.refresh_api_data();
  },
  watch: {
    ULC_region(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.refresh_api_data();
      }, 1000);
    },
    ULC_operator(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.refresh_api_data();
      }, 1000);
    },
    ULC_day(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.refresh_api_data();
      }, 1000);
    },
    ULC_week(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.refresh_api_data();
      }, 1000);
    },
    ULC_month(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.refresh_api_data();
      }, 1000);
    },
    ULC_time_type(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.refresh_api_data();
      }, 1000);
    }
  },
  methods: {
    refresh_api_data() {
      try {
        this.api_data_set("mixture");
        this.api_data_set("single");
      } catch (error) {
        console.log(error);
      }
    },
    api_data_set(datatype) {
      let vm = this;
      if (datatype == "mixture") {
        // 混合数据类型 -- 只执行一次
        if (vm.ULC_operator == null || vm.ULC_operator.length == 0) {
          let temp_operator = ["移动", "联通", "电信"];
          vm.userLives("all", temp_operator, datatype);
        } else {
          let count = vm.ULC_operator.length;
          if (count == 3 || count == 2) {
            vm.userLives("all", vm.ULC_operator, datatype);
          }
          if (count == 1) {
            if (vm.ULC_operator.indexOf("移动") > -1) {
              vm.userLives("yd", ["移动"], datatype);
            }
            if (vm.ULC_operator.indexOf("联通") > -1) {
              vm.userLives("lt", ["联通"], datatype);
            }
            if (vm.ULC_operator.indexOf("电信") > -1) {
              vm.userLives("dx", ["电信"], datatype);
            }
          }
        }
      } else if (datatype == "single") {
        // 单独数据类型 -- 执行三次
        vm.userLives("yd", ["移动"], datatype);
        vm.userLives("lt", ["联通"], datatype);
        vm.userLives("dx", ["电信"], datatype);
      }
    },
    userLives(type, ULC_operator, dataType) {
      let vm = this;
      let dataTypeName = dataType;
      let temp_region = commonTools.acConvert(vm.ULC_region);
      let time_type = vm.ULC_time_type;
      let temp_operator = commonTools.operatorConvert(ULC_operator);

      //本期
      let temp = {
        area: null,
        operator: null,
        start: null,
        end: null,
        year: null
      };
      //上期
      let prev_temp = {
        area: null,
        operator: null,
        start: null,
        end: null,
        year: null
      };
      if (time_type == 1) {
        // 时间类型-1-天
        vm.moduleShow = true;
        let temp_time = commonTools.split_yearAtime2(vm.ULC_day);
        temp = {
          area: String(temp_region),
          operator: String(temp_operator),
          start: vm.ULC_day,
          end: vm.ULC_day,
          year: temp_time.year
        };
        // console.log(temp);

        let prevDay = vm.$Utils.getBeforeDate(vm.ULC_day, 1); //获取当前的前一天
        let currentYear = commonTools.get_ExpirationDate_year(prevDay);
        prev_temp = {
          area: String(temp_region),
          operator: String(temp_operator),
          start: prevDay,
          end: prevDay,
          // year: temp_time.year
          year: currentYear
        };
      } else if (time_type == 2) {
        // 时间类型-2-周
        vm.moduleShow = true;
        let temp_time = commonTools.split_yearAtime(vm.ULC_week);
        temp = {
          area: String(temp_region),
          operator: String(temp_operator),
          start: temp_time.time,
          end: temp_time.time,
          year: temp_time.year
        };
        // console.log(temp);

        let prev_week_str = temp_time.time.replace(/[^0-9]/gi, ""); //获取本周的数字
        let prev_week_time = prev_week_str - 1;
        if (prev_week_time != 0) {
          prev_temp = {
            area: String(temp_region),
            operator: String(temp_operator),
            start: prev_week_time + "week",
            end: prev_week_time + "week",
            year: temp_time.year
          };
        } else if (prev_week_time == 0) {
          // 跨年处理
          prev_temp = {
            area: String(temp_region),
            operator: String(temp_operator),
            start:
              commonTools.return_AssignYear_FinalWeekNum(temp_time.year - 1) +
              "week",
            end:
              commonTools.return_AssignYear_FinalWeekNum(temp_time.year - 1) +
              "week",
            year: temp_time.year - 1
          };
        } else {
          // console.log("无上周数据");
        }
      } else if (time_type == 3) {
        // 时间类型-3-月
        // console.log("~~~~~month:" + vm.ULC_month);
        vm.moduleShow = true;
        let temp_time = commonTools.split_yearAtime(vm.ULC_month);
        // console.log(temp_time);

        temp = {
          area: String(temp_region),
          operator: String(temp_operator),
          start: temp_time.time,
          end: temp_time.time,
          year: temp_time.year
        };
        // console.log(temp);

        let prev_month_str = temp_time.time.replace(/[^0-9]/gi, ""); //获取本周的数字
        let prev_month_time = prev_month_str - 1;
        if (prev_month_time != 0) {
          prev_temp = {
            area: String(temp_region),
            operator: String(temp_operator),
            start: prev_month_time + "month",
            end: prev_month_time + "month",
            year: temp_time.year
          };
        } else if (prev_month_time == 0) {
          // 跨年处理  （需要2020年2月才能看到效果 --因为1月份时下拉框只有只到12月）
          prev_temp = {
            area: String(temp_region),
            operator: String(temp_operator),
            start: 12 + "month",
            end: 12 + "month",
            year: temp_time.year - 1
          };
        } else {
          console.log("无上月数据");
        }
      } else {
        // 未选择时间情况
        // console.log("请选择时间！");
        vm.moduleShow = false;
        return;
      }

      // if (temp.operator == null || temp.list == null || temp.date == null || temp.year == null) {
      //   console.log("请输入完整的查询条件")
      //   return
      // } else if (temp.operator == '' || temp.list == '' || temp.date == '' || temp.year == '') {
      //   console.log("请输入完整的查询条件")
      //   return
      // }

      // console.log("用户选择", temp)

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("ac", temp.area);
      formData.append("operator", temp.operator);
      formData.append("start", temp.start);
      formData.append("end", temp.end);
      formData.append("year", temp.year);

      var formDataPrev = new FormData();
      var formDataPrev = new window.FormData();
      formDataPrev.append("ac", prev_temp.area);
      formDataPrev.append("operator", prev_temp.operator);
      formDataPrev.append("start", prev_temp.start);
      formDataPrev.append("end", prev_temp.end);
      formDataPrev.append("year", prev_temp.year);

      userLives(formData)
        .then(function(response) {
          if (dataTypeName == "mixture") {
            // console.log("----------------------------------------");
            // console.log("混合数据 本期", ULC_operator);
            // console.log(response.data.responses);
            let total_data = response.data.responses;
            try {
              //在网
              let onTheNetData = total_data[0].aggregations;
              let register_num = onTheNetData.register_num.value;
              if (time_type == 1) {
                Vue.set(vm.api_data1.data1, 1, temp.start);
              } else if (time_type == 2) {
                Vue.set(
                  vm.api_data1.data1,
                  1,
                  commonTools.format_weekToChinese(temp.start)
                );
              } else if (time_type == 3) {
                Vue.set(
                  vm.api_data1.data1,
                  1,
                  commonTools.format_monthToChinese(temp.start)
                );
              }
              Vue.set(
                vm.api_data1.data2,
                1,
                (register_num / 1000000).toFixed(4)
              );
            } catch (error) {
              console.log(error);
            }

            //激活用户数
            // try {
            //   let activate_user_num_arr = total_data[0].aggregations.ac.buckets
            //   let activate_user_num_temp1 = []
            //   let activate_user_num_temp2 = []
            //   activate_user_num_arr.forEach((value, index) => {
            //     if (value.key != "other") {
            //       activate_user_num_temp1.push(commonTools.acConvert_Single(value.key))
            //       activate_user_num_temp2.push((value.activate_user_num.value / 1000000).toFixed(4))
            //     }
            //   })
            //   vm.activate_user_num.data_region = activate_user_num_temp1
            //   vm.activate_user_num.series_data = activate_user_num_temp2
            //   // console.log(vm.activate_user_num.data_region)
            //   // console.log(vm.activate_user_num.series_data)
            // } catch (error) {
            //   console.log(error);
            // }

            //激活率
            try {
              let activate_array = total_data[0].aggregations.ac.buckets;
              let city_temp = ["city"];
              let current_temp;
              if (time_type == 1) {
                current_temp = ["截止当日"];
              } else if (time_type == 2) {
                current_temp = ["截止本周"];
              } else if (time_type == 3) {
                current_temp = ["截止本月"];
              }
              activate_array.forEach((value, index) => {
                if (value.key != "other") {
                  city_temp.push(commonTools.acConvert_Single(value.key));
                  let activate_rate = (
                    (value.activate_user_num.value / value.register_num.value) *
                    100
                  ).toFixed(4);
                  current_temp.push(activate_rate);
                }
              });
              Vue.set(vm.activate_rate_data.data, 0, city_temp);
              Vue.set(vm.activate_rate_data.data, 2, current_temp);
            } catch (error) {
              console.log(error);
            }

            try {
              //在网数据
              vm.api_data3 = total_data[1];
              //在网用户结构
              vm.api_data4 = total_data[1];

              vm.api_data5 = total_data[2]; //用户细分
              vm.api_data6 = total_data[3]; //收视次数
              vm.api_data7 = total_data[4]; //收视时长
            } catch (error) {
              console.log(error);
            }
          }

          if (dataTypeName == "single") {
            if (type == "yd") {
              let total_data = response.data.responses;

              //新增在网用户
              try {
                let new_num_arr = total_data[0].aggregations.ac.buckets;
                let new_num_region = [];
                let new_num_data = [];
                new_num_arr.forEach((value, index) => {
                  if (value.key != "other") {
                    new_num_region.push(
                      commonTools.acConvert_Single(value.key)
                    );
                    new_num_data.push(value.new_num.value);
                  }
                });
                vm.api_data2.region = new_num_region;
                Vue.set(vm.api_data2.showData, 0, new_num_data);
              } catch (error) {
                console.log(error);
              }

              //新增激活用户数
              try {
                let activate_user_num_arr =
                  total_data[0].aggregations.ac.buckets;
                let activate_num_region = [];
                let activate_num_data = [];
                activate_user_num_arr.forEach((value, index) => {
                  if (value.key != "other") {
                    activate_num_region.push(
                      commonTools.acConvert_Single(value.key)
                    );
                    activate_num_data.push(value.activate_user_num.value);
                  }
                });
                vm.activate_user_num.region = activate_num_region;
                Vue.set(vm.activate_user_num.showData, 0, activate_num_data);
              } catch (error) {
                console.log(error);
              }
            } else if (type == "lt") {
              let total_data = response.data.responses;

              //新增在网用户
              try {
                let new_num_arr = total_data[0].aggregations.ac.buckets;
                let new_num_region = [];
                let new_num_data = [];
                new_num_arr.forEach((value, index) => {
                  if (value.key != "other") {
                    new_num_region.push(
                      commonTools.acConvert_Single(value.key)
                    );
                    new_num_data.push(value.new_num.value);
                  }
                });
                vm.api_data2.region = new_num_region;
                Vue.set(vm.api_data2.showData, 1, new_num_data);
              } catch (error) {
                console.log(error);
              }

              //新增激活用户数
              try {
                let activate_user_num_arr =
                  total_data[0].aggregations.ac.buckets;
                let activate_num_region = [];
                let activate_num_data = [];
                activate_user_num_arr.forEach((value, index) => {
                  if (value.key != "other") {
                    activate_num_region.push(
                      commonTools.acConvert_Single(value.key)
                    );
                    activate_num_data.push(value.activate_user_num.value);
                  }
                });
                vm.activate_user_num.region = activate_num_region;
                Vue.set(vm.activate_user_num.showData, 1, activate_num_data);
              } catch (error) {
                console.log(error);
              }
            } else if (type == "dx") {
              let total_data = response.data.responses;

              //新增在网用户
              try {
                let new_num_arr = total_data[0].aggregations.ac.buckets;
                let new_num_region = [];
                let new_num_data = [];
                new_num_arr.forEach((value, index) => {
                  if (value.key != "other") {
                    new_num_region.push(
                      commonTools.acConvert_Single(value.key)
                    );
                    new_num_data.push(value.new_num.value);
                  }
                });
                vm.api_data2.region = new_num_region;
                Vue.set(vm.api_data2.showData, 2, new_num_data);
              } catch (error) {
                console.log(error);
              }

              //新增激活用户数
              try {
                let activate_user_num_arr =
                  total_data[0].aggregations.ac.buckets;
                let activate_num_region = [];
                let activate_num_data = [];
                activate_user_num_arr.forEach((value, index) => {
                  if (value.key != "other") {
                    activate_num_region.push(
                      commonTools.acConvert_Single(value.key)
                    );
                    activate_num_data.push(value.activate_user_num.value);
                  }
                });
                vm.activate_user_num.region = activate_num_region;
                Vue.set(vm.activate_user_num.showData, 2, activate_num_data);
              } catch (error) {
                console.log(error);
              }
            }
          }
        })
        .catch(function(error) {
          console.info(error);
        });

      //判断上周或上月的时间不为空（比如当前时间为 1month  || 1week,那么无上期数据）
      if (prev_temp.start != null) {
        userLives(formDataPrev)
          .then(function(response) {
            if (dataTypeName == "mixture") {
              // 混合数据(上期)
              let total_data = response.data.responses;

              //在网
              try {
                let onTheNetData = total_data[0].aggregations;
                let register_num = onTheNetData.register_num.value;
                if (time_type == 1) {
                  Vue.set(vm.api_data1.data1, 0, prev_temp.start);
                } else if (time_type == 2) {
                  Vue.set(
                    vm.api_data1.data1,
                    0,
                    commonTools.format_weekToChinese(prev_temp.start)
                  );
                } else if (time_type == 3) {
                  Vue.set(
                    vm.api_data1.data1,
                    0,
                    commonTools.format_monthToChinese(prev_temp.start)
                  );
                }
                Vue.set(
                  vm.api_data1.data2,
                  0,
                  (register_num / 1000000).toFixed(4)
                );
                // console.log("shangqi!!!", vm.api_data1)
              } catch (error) {
                console.log(error);
              }

              //激活率
              try {
                let activate_array = total_data[0].aggregations.ac.buckets;
                let city_temp = ["city"];
                // let current_temp = ["同期"];
                let current_temp;
                if (time_type == 1) {
                  current_temp = ["截止昨日"];
                } else if (time_type == 2) {
                  current_temp = ["截止上周"];
                } else if (time_type == 3) {
                  current_temp = ["截止上月"];
                }
                activate_array.forEach((value, index) => {
                  if (value.key != "other") {
                    // console.log(commonTools.acConvert_Single(value.key), value.activate_user_num.value, value.register_num.value)
                    city_temp.push(commonTools.acConvert_Single(value.key));
                    let activate_rate = (
                      (value.activate_user_num.value /
                        value.register_num.value) *
                      100
                    ).toFixed(4);
                    current_temp.push(activate_rate);
                  }
                });
                Vue.set(vm.activate_rate_data.data, 0, city_temp);
                Vue.set(vm.activate_rate_data.data, 1, current_temp);
                // console.log("上期数据", vm.activate_rate_data.data)
              } catch (error) {
                console.log(error);
              }
            }
          })
          .catch(function(error) {
            console.info(error);
          });
      }
    }
  },
  data() {
    return {
      // 在网
      // 激活
      // 在网（2）
      // 在网用户结构
      // 用户细分
      // api_data1: {
      //   id: "ULC_echartsA",
      //   title: "在网用户数",
      //   data1: ["7.08-7.14", "7.15-7.21"],
      //   data2: ["219.4", "213.4"]
      // },
      moduleShow: false,
      api_data1: {
        id: "ULC_echartsA",
        title: "在网用户数（百万户）",
        data1: [,],
        data2: [,]
      },
      api_data2: {
        id: "ULC_echartsB",
        color: ["#FF6123", "#FF8859", "#FFAA89"],
        region: [],
        operator: ["移动", "联通", "电信"],
        showData: [[], [], []]
        // region: ["贵阳","遵义", "安顺","黔南","黔东南","铜仁","毕节","六盘水","黔西南"],
        // operator: ["移动", "联通", "电信"],
        // showData: [
        //   [3000, 2800, 2700, 2800, 2700, 2500, 2600, 2700, 2800],
        //   [4500, 4400, 4300, 4200, 4000, 4100, 4200, 4300, 4400],
        //   [6000, 5800, 5700, 5600, 5400, 5500, 5600, 5500, 5300]
        // ]
      },
      // activate_user_num: {
      //   id: "echartsAA",
      //   title: "激活用户数（百万户）",
      //   dataName: ["激活数"],
      //   color: ["#FF6123"],
      //   data_region: [],
      //   series_data: [],
      //   // data_region: ["贵阳", "遵义", "安顺", "黔南", "黔东南", "铜仁", "毕节", "六盘水", "黔西南"],
      //   // series_data: [3000, 2800, 2700, 2800, 2700, 2500, 2600, 2700, 2800]
      // },
      activate_user_num: {
        id: "echartsAA",
        color: ["#FF6123", "#FF8859", "#FFAA89"],
        region: [
          "贵阳",
          "遵义",
          "安顺",
          "黔南",
          "黔东南",
          "铜仁",
          "毕节",
          "六盘水",
          "黔西南"
        ],
        operator: ["移动", "联通", "电信"],
        showData: [[], [], []]
      },
      activate_rate_data: {
        title: "激活率",
        id: "newPayingUsers",
        color: ["#FF6123", "#FF8859"],
        data: [
          [],
          [],
          []
          // [
          //   "product",
          //   "贵阳",
          //   "遵义",
          //   "安顺",
          //   "黔南",
          //   "黔东南",
          //   "铜仁",
          //   "毕节",
          //   "六盘水",
          //   "黔西南"
          // ],
          // ["本月", 30, 40, 30, 70, 90, 50, 80, 30, 40],
          // ["同期", 20, 40, 50, 40, 60, 40, 77, 50, 80]
        ]
      },
      api_data3: [], //在网数据
      api_data4: [], //在网用户结构
      api_data5: [], //用户细分
      api_data6: [], //收视次数
      api_data7: [] //收视时长
    };
  }
};
</script>
<style>
.option_select {
  height: 250px;
}
.user_register {
  height: 350px;
  margin: 14px 0px;
}
.user_register_left {
  padding-right: 7px;
}
.user_register_right {
  padding-left: 7px;
}
.user_online {
  height: 486px;
  margin-bottom: 14px;
}
.user_segment {
  min-height: 1000px;
  margin-bottom: 50px;
}

/* 用户生命周期页自适应开始 */
@media (max-width: 1450px) {
  .user_register_left.el-col-12,
  .user_register_right.el-col-12,
  .user_online .el-col-14,
  .user_online .el-col-10,
  .CustomerSegmentation .el-col-12 {
    width: 100%;
  }
  .user_register,
  .user_online,
  .user_segment {
    height: 100% !important;
  }
  .user_online_body {
    height: 456px;
  }
  .user_structure_body {
    height: 300px;
  }
  .user_register_left,
  .user_online .padding_right {
    padding-right: 0px;
  }
  .user_register_right,
  .user_online .padding_left {
    padding-left: 0px;
    margin-top: 14px;
  }
}
</style>



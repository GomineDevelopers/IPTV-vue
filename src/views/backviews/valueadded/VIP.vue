<template>
  <div class="vip_body">
    <!-- 条件筛选开始 -->
    <el-row class="option_select vip">
      <el-row class="model_title">
        <span class="title_border_left"></span>条件筛选
      </el-row>
      <el-row class="chart_body back_white">
        <com-optionselectVIP></com-optionselectVIP>
      </el-row>
    </el-row>
    <!-- 条件筛选结束 -->

    <!-- 收视行为开始 -->
    <el-row class="vip_behavior">
      <el-row class="model_title">
        <span class="title_border_left"></span>收视行为
      </el-row>
      <el-row class="chart_body back_white">
        <el-row class="select_option_content">
          <span>选择指标：</span>
          <el-select v-model="targetOption" placeholder="请选择">
            <el-option v-for="(item,index) in target" :key="index+'cz'" :label="item" :value="item"></el-option>
          </el-select>
        </el-row>
        <el-col class="height_auto chart_height" :span="12">
          <el-col class="height_auto" :span="12">
            <!-- 地区饼图 -->
            <pie-charts :chartData="regionData"></pie-charts>
          </el-col>
          <el-col class="height_auto" :span="12">
            <!-- 运营商柱状图 -->
            <bar-charts-stack :chartData="operatorData"></bar-charts-stack>
          </el-col>
        </el-col>
        <el-col class="height_auto chart_height" :span="12">
          <el-col class="height_auto" :span="12">
            <pie-charts :chartData="playData"></pie-charts>
          </el-col>
          <el-col class="height_auto" :span="12" v-show="ifPlaymodeShow_db">
            <!-- 运营商柱状图 -->
            <bar-chart-single :chartData="columnData"></bar-chart-single>
          </el-col>
        </el-col>
      </el-row>
    </el-row>
    <!-- 收视行为结束 -->

    <!-- 收视TOP开始 -->
    <!-- <el-row class="vip_top15">
      <el-row class="model_title">
        <span class="title_border_left"></span>收视TOP15
      </el-row>
      <el-row class="chart_body back_white vip_top15_list">
        <vip-behavior-top :viewingTopList="viewingTopList"></vip-behavior-top>
      </el-row>
    </el-row>-->
    <!-- <el-row class="viewing_top15" v-show="ifPlaymodeShow_zb">
      <el-row class="model_title">
        <span class="title_border_left"></span>直播收视TOP15
      </el-row>
      <el-row class="chart_body back_white viewing_top15_list">
        <user-viewing-behavior-top-vip :viewingTopList="liveViewingTopList_VIP"></user-viewing-behavior-top-vip>
      </el-row>
    </el-row>-->
    <el-row class="viewing_top15" v-show="ifPlaymodeShow_db">
      <el-row class="model_title">
        <span class="title_border_left"></span>点播收视TOP15
      </el-row>
      <el-row class="chart_body back_white viewing_top15_list">
        <user-viewing-behavior-top-vip :viewingTopList="orderViewingTopList_VIP"></user-viewing-behavior-top-vip>
      </el-row>
    </el-row>

    <!-- <el-row class="viewing_top15 last_viewing_top15" v-show="ifPlaymodeShow_hk">
      <el-row class="model_title">
        <span class="title_border_left"></span>回看收视TOP15
      </el-row>
      <el-row class="chart_body back_white viewing_top15_list">
        <user-viewing-behavior-top-vip :viewingTopList="lookBackViewingTopList_VIP"></user-viewing-behavior-top-vip>
      </el-row>
    </el-row>-->
    <!-- 收视TOP结束 -->
    <!-- <span v-show="false">热更新用-不显示：{{if_playmode_is_single_db}}</span> -->
  </div>
</template>
<script>
import UserViewingBehaviorTOP from "@/views/backcoms/userviewingbehavior/UserViewingBehaviorTOP"; //收视TOP组件
import OptionSelectVIP from "@/views/backcoms/vip/OptionSelectVIP"; // 条件筛选
// import VIPBehaviorTOP from "@/views/backcoms/vip/VIPBehaviorTOP"; //收视TOP组件
import PieCharts from "@/views/backcoms/commoncomponents/PieCharts"; //公用饼图
import BarChartsStack from "@/views/backcoms/commoncomponents/BarChartsStack"; //公用柱状图堆叠
import BarChartSingle from "@/views/backcoms/commoncomponents/BarChartSingle"; //公用柱状图单个

import { mapGetters } from "vuex";
import { commonTools } from "@/utils/test";
import { vip_increment } from "@/api/api_main";
import Vue from "vue";

export default {
  name: "VIP", //增值业务VIP
  components: {
    "user-viewing-behavior-top-vip": UserViewingBehaviorTOP,
    "com-optionselectVIP": OptionSelectVIP,
    // "vip-behavior-top": VIPBehaviorTOP,
    "pie-charts": PieCharts,
    "bar-charts-stack": BarChartsStack,
    "bar-chart-single": BarChartSingle
  },
  computed: {
    ...mapGetters([
      "ADD_VIP_region",
      "ADD_VIP_operator",
      // "ADD_VIP_playmode",
      "ADD_VIP_programa",
      "ADD_VIP_valueAddedPackage",
      "ADD_VIP_day",
      "ADD_VIP_week",
      "ADD_VIP_picker",
      "ADD_VIP_time_type",
      "ADD_VIP_programa_list",
      "ADD_VIP_package_list",
      "ADD_VIP_target_type"
    ]),
    ifPlaymodeShow_zb: {
      get: function() {
        if (
          this.ADD_VIP_playmode == null ||
          this.ADD_VIP_playmode.length == 0
        ) {
          return true;
        }
        if (this.ADD_VIP_playmode.indexOf("直播") > -1) {
          return true;
        }
        return false;
      },
      set: function(newValue) {}
    },
    ifPlaymodeShow_db: {
      get: function() {
        if (
          this.ADD_VIP_playmode == null ||
          this.ADD_VIP_playmode.length == 0
        ) {
          return true;
        }
        if (this.ADD_VIP_playmode.indexOf("点播") > -1) {
          return true;
        }
        return false;
      },
      set: function(newValue) {}
    },
    ifPlaymodeShow_hk: {
      get: function() {
        if (
          this.ADD_VIP_playmode == null ||
          this.ADD_VIP_playmode.length == 0
        ) {
          return true;
        }
        if (this.ADD_VIP_playmode.indexOf("回看") > -1) {
          return true;
        }
        return false;
      },
      set: function(newValue) {}
    }
    // if_playmode_is_single_db: {
    //   get: function () {
    //     if (
    //       this.ADD_VIP_playmode.indexOf("点播") > -1 &&
    //       this.ADD_VIP_playmode.length == 1
    //     ) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   },
    //   set: function (newValue) { }
    // }
  },
  mounted() {
    // console.log("~~~~~test");
    // console.log(this.lookBackViewingTopList_VIP);
  },
  watch: {
    ADD_VIP_region(newValue, oldValue) {
      let vm = this;
      console.log("ADD_VIP_region: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data();
        setTimeout(function() {
          vm.refreshPerData();
        }, 200);
      }, 100);
    },
    ADD_VIP_operator(newValue, oldValue) {
      let vm = this;
      console.log("ADD_VIP_operator: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data();
        setTimeout(function() {
          vm.refreshPerData();
        }, 200);
      }, 100);
    },
    // ADD_VIP_playmode(newValue, oldValue) {
    //   let vm = this;
    //   console.log("ADD_VIP_playmode: " + newValue);
    //   setTimeout(function() {
    //     vm.refresh_api_data();
    //     setTimeout(function() {
    //       vm.refreshPerData();
    //     }, 200);
    //   }, 100);
    // },
    ADD_VIP_programa(newValue, oldValue) {
      let vm = this;
      console.log("ADD_VIP_programa: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data();
        setTimeout(function() {
          vm.refreshPerData();
        }, 200);
      }, 100);
    },
    ADD_VIP_valueAddedPackage(newValue, oldValue) {
      let vm = this;
      console.log("ADD_VIP_valueAddedPackage: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data();
        setTimeout(function() {
          vm.refreshPerData();
        }, 200);
      }, 100);
    },
    ADD_VIP_day(newValue, oldValue) {
      let vm = this;
      console.log("ADD_VIP_day: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data();
        setTimeout(function() {
          vm.refreshPerData();
        }, 200);
      }, 100);
    },
    ADD_VIP_week(newValue, oldValue) {
      let vm = this;
      console.log("ADD_VIP_week: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data();
        setTimeout(function() {
          vm.refreshPerData();
        }, 200);
      }, 100);
    },
    ADD_VIP_picker(newValue, oldValue) {
      let vm = this;
      console.log("ADD_VIP_picker: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data();
        setTimeout(function() {
          vm.refreshPerData();
        }, 200);
      }, 100);
    },
    ADD_VIP_time_type(newValue, oldValue) {
      let vm = this;
      console.log("ADD_VIP_time_type: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data();
        setTimeout(function() {
          vm.refreshPerData();
        }, 200);
      }, 100);
    },
    targetOption(newValue, oldValue) {
      let vm = this;
      // 监听指标选中
      // console.log("targetOption");
      // console.log(newValue);
      setTimeout(function() {
        vm.refreshPerData();
      }, 200);
    },
    ADD_VIP_target_type(newValue, oldValue) {
      let vm = this;
      if (newValue == 1) {
        vm.target = [
          "观看次数",
          "观看时长",
          "观看户数",
          "户均收视次数",
          "次均收视次数"
        ];
      }
      if (newValue == 0) {
        vm.target = ["观看次数", "观看时长", "次均收视次数"];
      }
    }
  },
  methods: {
    refreshPerData() {
      let vm = this;
      let newValue = vm.targetOption;
      if (newValue == "观看次数") {
        vm.regionData.data = vm.regionData_data_arr[0];
        vm.operatorData.data = vm.operatorData_arr[0];
        vm.playData.data = vm.playData_arr[0];
        vm.columnData.data = vm.columnData_arr[0];
      }
      if (newValue == "观看时长") {
        vm.regionData.data = vm.regionData_data_arr[1];
        vm.operatorData.data = vm.operatorData_arr[1];
        vm.playData.data = vm.playData_arr[1];
        vm.columnData.data = vm.columnData_arr[1];
      }
      if (newValue == "观看户数") {
        vm.regionData.data = vm.regionData_data_arr[2];
        vm.operatorData.data = vm.operatorData_arr[2];
        vm.playData.data = vm.playData_arr[2];
        vm.columnData.data = vm.columnData_arr[2];
      }
      if (newValue == "户均收视次数") {
        vm.regionData.data = vm.regionData_data_arr[3];
        vm.operatorData.data = vm.operatorData_arr[3];
        vm.playData.data = vm.playData_arr[3];
        vm.columnData.data = vm.columnData_arr[3];
      }
      if (newValue == "次均收视次数") {
        vm.regionData.data = vm.regionData_data_arr[4];
        vm.operatorData.data = vm.operatorData_arr[4];
        vm.playData.data = vm.playData_arr[4];
        vm.columnData.data = vm.columnData_arr[4];
      }
    },
    refresh_api_data() {
      // this.vip_increment(this.ADD_VIP_time_type, this.if_playmode_is_single_db);
      this.vip_increment(this.ADD_VIP_time_type);
    },
    // vip_increment(time_type, if_playmode_is_single_db) {
    vip_increment(time_type) {
      let vm = this;
      console.log("vip_increment");

      let temp_region = commonTools.acConvert(vm.ADD_VIP_region); //地区
      let temp_operator = commonTools.operatorConvert(vm.ADD_VIP_operator); //运营商
      // let temp_playmode = commonTools.playmodeConvert(vm.ADD_VIP_playmode); //播放方式
      let temp_programa;
      if (vm.ADD_VIP_programa.length == 0) {
        temp_programa = vm.ADD_VIP_programa_list;
      } else {
        temp_programa = vm.ADD_VIP_programa;
      }

      let temp_valueAddedPackage = [];
      temp_valueAddedPackage.push(vm.ADD_VIP_valueAddedPackage);
      if (
        temp_valueAddedPackage == null ||
        temp_valueAddedPackage == "" ||
        temp_valueAddedPackage == []
      ) {
        console.log("请选择包");
        return;
      }

      let temp;
      temp = {
        ac: null,
        operator: null,
        // mode: null,
        start: null,
        end: null,
        ti: null,
        package: null,
        year: null
      };
      console.log("~~~~~~~~~~~~~~");
      console.log(time_type);

      if (time_type == 1) {
        // 时间类型-1-天

        temp = {
          ac: String(temp_region),
          operator: String(temp_operator),
          // mode: String(temp_playmode),
          // mode: String(["点播"]),
          start: vm.ADD_VIP_day,
          end: vm.ADD_VIP_day,
          ti: String(temp_programa),
          package: String(temp_valueAddedPackage),
          year: commonTools.get_ExpirationDate_year(vm.ADD_VIP_day)
        };
        console.log("~~~~~1:");
        console.log(temp);
      } else if (time_type == 2) {
        // 时间类型-2-周
        // console.log("~~~~~week:" + vm.ADD_VIP_week);
        let temp_time = commonTools.split_yearAtime(vm.ADD_VIP_week);

        temp = {
          ac: String(temp_region),
          operator: String(temp_operator),
          // mode: String(temp_playmode),
          // mode: String(["点播"]),
          start: temp_time.time,
          end: temp_time.time,
          year: temp_time.year,
          ti: String(temp_programa),
          package: String(temp_valueAddedPackage),
          year: commonTools.get_ExpirationDate_year(vm.ADD_VIP_day)
        };
        // }
        // console.log("~~~~time_type:" + time_type);
        console.log("~~~~~2:");
        console.log(temp);
      } else if (time_type == 3) {
        // 时间类型-3-范围
        // console.log("~~~~~picker:" + vm.ADD_VIP_picker);
        // console.log(typeof vm.ADD_VIP_picker);
        let temp_time = commonTools.split_picker(vm.ADD_VIP_picker);
        // console.log(temp_time);

        //*****注意传参格式为这个 */
        temp = {
          ac: String(temp_region),
          operator: String(temp_operator),
          // mode: String(temp_playmode),
          // mode: String(["点播"]),
          start: temp_time.start,
          end: temp_time.end,
          ti: String(temp_programa),
          package: String(temp_valueAddedPackage),
          year: commonTools.get_ExpirationDate_year(vm.ADD_VIP_day)
        };
        console.log("~~~~~3:");
        console.log(temp);
      } else {
        console.log("请选择时间！");
        return;
      }

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("ac", temp.ac);
      formData.append("operator", temp.operator);
      // formData.append("mode", temp.mode);
      formData.append("ti", temp.ti);
      formData.append("package", temp.package);
      formData.append("start", temp.start);
      formData.append("end", temp.end);
      formData.append("year", temp.year);
      vip_increment(formData)
        .then(function(response) {
          console.log(response);

          // /////////// 0 -
          // demand_freq
          // demand_dur
          // demand_user_num
          // watch_freq_family
          // watch_dur_mean

          try {
            vm.regionData_data_arr = [];
            let aggregations_0 = response.data.responses[0].aggregations;
            let buckets_0 = response.data.responses[0].aggregations.ac.buckets; // x9
            let length_0 = buckets_0.length;
            let i_0;
            let temp1 = []; // 观看次数 - demand_freq
            let temp2 = []; // 观看时长 - demand_dur
            let temp3 = []; // 观看户数 - demand_user_num
            let temp4 = []; // 户均收视次数 - watch_freq_family
            let temp5 = []; // 次均收视次数 - watch_dur_mean
            let temp_all = []; // 集合 temp1~temp5 // ▲ 5种值-分别对应ac
            for (i_0 = 0; i_0 < length_0; i_0++) {
              temp1.push({
                value: buckets_0[i_0].demand_freq.value,
                name: commonTools.acConvert_Single(buckets_0[i_0].key)
              });
              temp2.push({
                value: buckets_0[i_0].demand_dur.value,
                name: commonTools.acConvert_Single(buckets_0[i_0].key)
              });
              temp3.push({
                value: buckets_0[i_0].demand_user_num.value,
                name: commonTools.acConvert_Single(buckets_0[i_0].key)
              });
              temp4.push({
                value: buckets_0[i_0].watch_freq_family.value,
                name: commonTools.acConvert_Single(buckets_0[i_0].key)
              });
              temp5.push({
                value: buckets_0[i_0].watch_dur_mean.value,
                name: commonTools.acConvert_Single(buckets_0[i_0].key)
              });
            }
            temp_all.push(temp1);
            temp_all.push(temp2);
            temp_all.push(temp3);
            temp_all.push(temp4);
            temp_all.push(temp5);
            vm.regionData_data_arr = temp_all;
          } catch (error) {
            console.log(error);
          }
          // console.log("~~~~~~~~~~~~~~~regionData_data_arr");
          // console.log(vm.regionData_data_arr);

          // ////////////////////////////
          try {
            vm.operatorData_arr = [];
            let buckets_0B =
              response.data.responses[0].aggregations.ac1.buckets; // x3
            let length_0B = buckets_0B.length;
            let i_0B;
            let temp1_B = []; // 观看次数 - demand_freq
            let temp2_B = []; // 观看时长 - demand_dur
            let temp3_B = []; // 观看户数 - demand_user_num
            let temp4_B = []; // 户均收视次数 - watch_freq_family
            let temp5_B = []; // 次均收视次数 - watch_dur_mean
            let temp_all_B = []; //包含temp1_B~temp5_B // ▲ 5种值-分别对应运营商-分别对应ac

            temp1_B.push(["product", "移动", "联通", "电信"]);
            temp2_B.push(["product", "移动", "联通", "电信"]);
            temp3_B.push(["product", "移动", "联通", "电信"]);
            temp4_B.push(["product", "移动", "联通", "电信"]);
            temp5_B.push(["product", "移动", "联通", "电信"]);
            // for (let j = 0; j < 9; j++) {
            //   // 推入9个地区的 []
            //   temp1_B.push([]);
            //   temp2_B.push([]);
            //   temp3_B.push([]);
            //   temp4_B.push([]);
            //   temp5_B.push([]);
            // }
            let api_ac_length = length_0B;
            for (let j = 0; j < api_ac_length; j++) {
              // 由于数据残缺，这里使用所返回地区个数的length
              // 推入9个地区的 []
              temp1_B.push([]);
              temp2_B.push([]);
              temp3_B.push([]);
              temp4_B.push([]);
              temp5_B.push([]);
            }

            for (i_0B = 0; i_0B < length_0B; i_0B++) {
              // x9
              Vue.set(
                temp1_B[i_0B + 1],
                0,
                commonTools.acConvert_Single(buckets_0B[i_0B].key)
              );
              Vue.set(
                temp2_B[i_0B + 1],
                0,
                commonTools.acConvert_Single(buckets_0B[i_0B].key)
              );
              Vue.set(
                temp3_B[i_0B + 1],
                0,
                commonTools.acConvert_Single(buckets_0B[i_0B].key)
              );
              Vue.set(
                temp4_B[i_0B + 1],
                0,
                commonTools.acConvert_Single(buckets_0B[i_0B].key)
              );
              Vue.set(
                temp5_B[i_0B + 1],
                0,
                commonTools.acConvert_Single(buckets_0B[i_0B].key)
              );

              // let operator_length = 3; //存在只有一个运营商数据的情况
              let operator_length = buckets_0B[i_0B].operators.buckets.length;
              let operator_i;
              let temp_aa = [];

              function SetValue_ByOperator(index_operator_i, key, index_sgin) {
                Vue.set(
                  temp1_B[i_0B + 1],
                  index_sgin,
                  buckets_0B[i_0B].operators.buckets[index_operator_i]
                    .demand_freq.value
                );
                Vue.set(
                  temp2_B[i_0B + 1],
                  index_sgin,
                  buckets_0B[i_0B].operators.buckets[index_operator_i]
                    .demand_dur.value
                );
                Vue.set(
                  temp3_B[i_0B + 1],
                  index_sgin,
                  buckets_0B[i_0B].operators.buckets[index_operator_i]
                    .demand_user_num.value
                );
                Vue.set(
                  temp4_B[i_0B + 1],
                  index_sgin,
                  buckets_0B[i_0B].operators.buckets[index_operator_i]
                    .watch_freq_family.value
                );
                Vue.set(
                  temp5_B[i_0B + 1],
                  index_sgin,
                  buckets_0B[i_0B].operators.buckets[index_operator_i]
                    .watch_dur_mean.value
                );
              }
              function SetValue_ByOperator_0(
                index_operator_i,
                key,
                index_sgin
              ) {
                Vue.set(temp1_B[i_0B + 1], index_sgin, 0);
                Vue.set(temp2_B[i_0B + 1], index_sgin, 0);
                Vue.set(temp3_B[i_0B + 1], index_sgin, 0);
                Vue.set(temp4_B[i_0B + 1], index_sgin, 0);
                Vue.set(temp5_B[i_0B + 1], index_sgin, 0);
              }
              let ifExist_yd = false;
              let ifExist_lt = false;
              let ifExist_dx = false;
              // 没有的运营商位置提前置0（全置零）
              for (operator_i = 0; operator_i < operator_length; operator_i++) {
                SetValue_ByOperator_0(operator_i, "移动", 1);
                SetValue_ByOperator_0(operator_i, "联通", 2);
                SetValue_ByOperator_0(operator_i, "电信", 3);
              }
              // 未置零的运营商 赋值
              for (operator_i = 0; operator_i < operator_length; operator_i++) {
                if (
                  buckets_0B[i_0B].operators.buckets[operator_i].key == "移动"
                ) {
                  SetValue_ByOperator(operator_i, "移动", 1);
                }
                if (
                  buckets_0B[i_0B].operators.buckets[operator_i].key == "联通"
                ) {
                  SetValue_ByOperator(operator_i, "联通", 2);
                }
                if (
                  buckets_0B[i_0B].operators.buckets[operator_i].key == "电信"
                ) {
                  SetValue_ByOperator(operator_i, "电信", 3);
                }
              }
            }

            // // ▲▲ 应该是返回 地区分运营商，不是 运营商分地区

            temp_all_B.push(temp1_B);
            temp_all_B.push(temp2_B);
            temp_all_B.push(temp3_B);
            temp_all_B.push(temp4_B);
            temp_all_B.push(temp5_B);
            console.log("~~~~~~~~temp_all_B");
            console.log(temp_all_B);
            vm.operatorData_arr = temp_all_B;
          } catch (error) {
            console.log(error);
          }

          try {
            vm.playData_arr = [];

            let aggregations_0BB = response.data.responses[0].aggregations; // x3
            // let length_0BB = aggregations_0BB.length;
            // let i_0BB;
            let temp1_BB = []; // 观看次数 - demand_freq
            let temp2_BB = []; // 观看时长 - demand_dur
            let temp3_BB = []; // 观看户数 - demand_user_num
            let temp4_BB = []; // 户均收视次数 - watch_freq_family
            let temp5_BB = []; // 次均收视次数 - watch_dur_mean
            let temp_all_BB = []; //包含temp1_B~temp5_BB // ▲ 5种值-分别对应运营商-分别对应ac

            // for (i_0BB = 0; i_0BB < length_0BB; i_0BB++) {
            temp1_BB.push({
              value: aggregations_0BB.demand_freq.value,
              name: "点播"
            });
            temp2_BB.push({
              value: aggregations_0BB.demand_dur.value,
              name: "点播"
            });
            temp3_BB.push({
              value: aggregations_0BB.demand_user_num.value,
              name: "点播"
            });
            temp4_BB.push({
              value: aggregations_0BB.watch_freq_family.value,
              name: "点播"
            });
            temp5_BB.push({
              value: aggregations_0BB.watch_dur_mean.value,
              name: "点播"
            });
            // }
            temp_all_BB.push(temp1_BB);
            temp_all_BB.push(temp2_BB);
            temp_all_BB.push(temp3_BB);
            temp_all_BB.push(temp4_BB);
            temp_all_BB.push(temp5_BB);
            vm.playData_arr = temp_all_BB;
            console.log("~~~~~~~~~~~~~~~~~~~~~temp_all_BB");
            console.log(vm.playData_arr);
          } catch (error) {
            console.log(error);
          }

          // /////////// 第四个视图
          // 用户收视行为是放在 api2  userAction_demand中 ---用ti分
          // 现在合并了俩api逻辑
          try {
            vm.columnData_arr = [];

            let buckets_ti = response.data.responses[0].aggregations.ti.buckets;
            let length_ti = buckets_ti.length;
            let i_ti;
            let temp1 = []; // 观看次数 - demand_freq
            let temp2 = []; // 观看时长 - demand_dur
            let temp3 = []; // 观看户数 - demand_user_num
            let temp4 = []; // 户均收视次数 - watch_freq_family
            let temp5 = []; // 次均收视次数 - watch_dur_mean
            let temp_all_C = []; // 集合 temp1~temp5 // ▲ 5种值-分别对应ti

            // ["product", "观看数"]
            // ["分类", 43.3],
            // ["电视", 83.1],
            // ["推荐", 43.3],
            // ["电影", 83.1],
            // ["热剧", 86.4],
            // ["少儿", 72.4],
            // ["动漫", 86.4],
            // ["综艺", 43.3],
            // ["体育", 72.4],
            // ["游戏", 72.4],
            // ["纪实", 86.4]
            temp1.push(["product", "观看次数"]);
            temp2.push(["product", "观看时长"]);
            temp3.push(["product", "观看户数"]);
            temp4.push(["product", "户均收视次数"]);
            temp5.push(["product", "次均收视次数"]);

            function dataManage(ti_name) {
              for (i_ti = 0; i_ti < length_ti; i_ti++) {
                try {
                  if (buckets_ti[i_ti].key == ti_name) {
                    temp1.push([ti_name, buckets_ti[i_ti].demand_freq.value]);
                    temp2.push([ti_name, buckets_ti[i_ti].demand_dur.value]);
                    temp3.push([
                      ti_name,
                      buckets_ti[i_ti].demand_user_num.value
                    ]);
                    temp4.push([
                      ti_name,
                      buckets_ti[i_ti].watch_freq_family.value
                    ]);
                    temp5.push([
                      ti_name,
                      buckets_ti[i_ti].watch_dur_mean.value
                    ]);
                  }
                } catch (error) {
                  console.log(error);
                }
              }
            }
            // let length_pl = vm.ADD_VIP_programa_list.length;
            let temp_programa_list;
            if (vm.ADD_VIP_programa.length == 0) {
              temp_programa_list = vm.ADD_VIP_programa_list;
            } else {
              temp_programa_list = vm.ADD_VIP_programa;
            }
            let length_p = temp_programa_list.length;
            let i_p;
            // console.log("★★★★★★★★★★★★★");
            // console.log(vm.ADD_VIP_programa_list)
            // console.log(vm.ADD_VIP_programa);
            for (i_p = 0; i_p < length_p; i_p++) {
              // 按照 ADD_VIP_programa_list 的顺序写入数据
              // dataManage(vm.ADD_VIP_programa_list[i_p]);
              // dataManage(vm.ADD_VIP_programa[i_p]);
              dataManage(temp_programa_list[i_p]);
            }
            console.log("▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲");
            console.log(temp1);
            console.log(temp2);

            temp_all_C.push(temp1);
            temp_all_C.push(temp2);
            temp_all_C.push(temp3);
            temp_all_C.push(temp4);
            temp_all_C.push(temp5);
            // console.log("~~~~~~~~temp_all_C");
            // console.log(temp_all_C);
            vm.columnData_arr = temp_all_C;
          } catch (error) {
            console.log(error);
          }
          try {
            vm.orderViewingTopList_VIP.data = []; // 初始化
            let buckets_top =
              response.data.responses[1].aggregations.programname.buckets;
            let length_top = buckets_top.length;
            let i_top;
            let temp_max_value_top = buckets_top[0].demand_freq.value; // 取第一个为最大值
            let temp_data_top;

            for (i_top = 0; i_top < length_top; i_top++) {
              temp_data_top = {
                // 分别为 排名 频道 节目 次数（万） --暂别管原先的变量命名
                topNum: i_top + 1,
                programName: buckets_top[i_top].program_type.buckets[0].key,
                programSource: buckets_top[i_top].key,
                hot:
                  String(
                    commonTools.returnFloat_2(
                      (buckets_top[i_top].demand_freq.value /
                        temp_max_value_top) *
                        100
                    )
                  ) + "%",
                // playNum: String(
                //   commonTools.returnFloat_2(
                //     buckets_top[i_top].demand_freq.value / 10000
                //   )
                // ) // 次数（万）
                playNum: String(buckets_top[i_top].demand_freq.value) // 次数 （单次）
              };
              vm.orderViewingTopList_VIP.data.push(temp_data_top);
            }
          } catch (error) {
            console.log(error);
          }
          // // /////////// liveViewingTopList - 1 - 直播Top15
          // // 获得最大值
          // try {
          //   let buckets_1 =
          //     response.data.responses[1].aggregations.programname.buckets;
          //   let length_1 = buckets_1.length;
          //   let i_1;
          //   let temp_max_value = buckets_1[0].onlive_freq.value; // 取第一个为最大值
          //   let temp_data;
          //   for (i_1 = 0; i_1 < length_1; i_1++) {
          //     temp_data = {
          //       // 分别为 排名 频道 节目 次数（万） --暂别管原先的变量命名
          //       topNum: i_1 + 1,
          //       programName: buckets_1[i_1].channel.buckets[0].key,
          //       programSource: buckets_1[i_1].key,
          //       hot:
          //         String(
          //           commonTools.returnFloat_2(
          //             (buckets_1[i_1].onlive_freq.value / temp_max_value) * 100
          //           )
          //         ) + "%",
          //       playNum: String(
          //         commonTools.returnFloat_2(
          //           buckets_1[i_1].onlive_freq.value / 10000
          //         )
          //       ) // 次数（万）
          //     };
          //     vm.liveViewingTopList_VIP.data.push(temp_data);
          //   }
          // } catch (error) {
          //   console.log(error);
          // }
          //   // /////////// lookBackViewingTopList - 2 - 回看Top15
          // try {
          //   let buckets_2 =
          //     response.data.responses[2].aggregations.programname.buckets;
          //   let length_2 = buckets_2.length;
          //   let i_2;
          //   let temp_max_value2 = buckets_2[0].demand_freq.value; // 取第一个为最大值
          //   let temp_data2;
          //   for (i_2 = 0; i_2 < length_2; i_2++) {
          //     temp_data2 = {
          //       // 分别为 排名 频道 节目 次数（万） --暂别管原先的变量命名
          //       topNum: i_2 + 1,
          //       programName: buckets_2[i_2].channel.buckets[0].key,
          //       programSource: buckets_2[i_2].key,
          //       hot:
          //         String(
          //           commonTools.returnFloat_2(
          //             (buckets_2[i_2].demand_freq.value / temp_max_value2) * 100
          //           )
          //         ) + "%",
          //       playNum: String(
          //         commonTools.returnFloat_2(
          //           buckets_2[i_2].watch_freq.value / 10000
          //         )
          //       ) // 次数（万）
          //     };
          //     vm.lookBackViewingTopList_VIP.data.push(temp_data2);
          //   }

          //   // console.log("回看数据", vm.lookBackViewingTopList_VIP)
          // } catch (error) {
          //   console.log(error);
          // }
        })
        .catch(function(error) {
          console.info(error);
        });
      // }

      // let temp = {
      //   ac: "all", // 地区码，all和贵州省地级市代码
      //   operator: "all", // 运营商列表：根据用户收视行为运营商api为准的列表单，all为全部运营商
      //   mode: 0, // 播放方式：0-总体，1-直播，2-点播，3-回看
      //   list: "all", // 节目列表：根据栏目api为准的列表单，all为全部节目
      //   start: "2019-07-12",
      //   end: "2019-07-31",
      //   increment: "少儿包" // 增值包选项 如 少儿包
      // };

      // var formData = new FormData();
      // var formData = new window.FormData();
      // formData.append("ac", temp.ac);
      // formData.append("operator", temp.operator);
      // formData.append("mode", temp.mode);
      // formData.append("list", temp.list);
      // formData.append("start", temp.start);
      // formData.append("end", temp.end);
      // formData.append("increment", temp.increment);

      // vip_increment(formData)
      //   .then(function(response) {
      //     console.log(response);
      //   })
      //   .catch(function(error) {
      //     console.info(error);
      //   });
    }
  },

  data() {
    return {
      targetOption: "", //存放选择的指标
      //选择指标数据
      target: [
        "观看次数",
        "观看时长",
        "观看户数",
        "户均收视次数",
        "次均收视次数"
      ],
      // target: ["观看次数", "观看时长", "次均收视次数"],
      //地区数据
      regionData: {
        title: "地区",
        id: "regionChart_vip",
        color: [
          "#B37CF4",
          "#DADEEA ",
          "#CEF1ED",
          "#FCB84F",
          "#7ECDF4",
          "#A9CCDC",
          "#5E70F1",
          "#F97E6F",
          "#4ADBC7"
        ],
        data: [
          // { value: 1335, name: "贵阳" },
          // { value: 810, name: "遵义" },
          // { value: 648, name: "安顺" },
          // { value: 148, name: "黔南" },
          // { value: 108, name: "黔东南" },
          // { value: 248, name: "铜仁" },
          // { value: 535, name: "毕节" },
          // { value: 234, name: "六盘水" },
          // { value: 348, name: "黔西南" }
        ]
      },
      regionData_data_arr: [], // 用于存储多个指标-方便切换

      //运营商数据
      operatorData: {
        title: "运营商",
        id: "operatorChart_vip",
        color: ["#FF6123", "#FF8859", "#FFAA89"],
        data: [
          // ["product", "移动", "联通", "电信"],
          // ["贵阳", 43.3, 85.8, 93.7],
          // ["遵义", 83.1, 73.4, 55.1],
          // ["安顺", 43.3, 85.8, 93.7],
          // ["黔南", 83.1, 73.4, 55.1],
          // ["黔东南", 86.4, 65.2, 82.5],
          // ["铜仁", 72.4, 53.9, 39.1],
          // ["毕节", 86.4, 65.2, 82.5],
          // ["六盘水", 43.3, 85.8, 93.7],
          // ["黔西南", 72.4, 53.9, 39.1]
        ]
      },
      operatorData_arr: [],

      //播放数据
      playData: {
        title: "播放",
        id: "playChart_vip",
        color: ["#B37CF4", "#F97E6F ", "#A9CCDC"],
        data: [
          // { value: 535, name: "直播" },
          // { value: 410, name: "回看" },
          // { value: 348, name: "点播" }
        ]
      },
      playData_arr: [],
      columnData: {
        // title: "栏目（点播专属）",
        title: "栏目",
        id: "columnChart_vip",
        color: ["#FF6123"],
        data: [
          // ["product", "观看数"],
          // ["分类", 43.3],
          // ["电视", 83.1],
          // ["推荐", 43.3],
          // ["电影", 83.1],
          // ["热剧", 86.4],
          // ["少儿", 72.4],
          // ["动漫", 86.4],
          // ["综艺", 43.3],
          // ["体育", 72.4],
          // ["游戏", 72.4],
          // ["纪实", 86.4]
        ]
      },
      columnData_arr: [],
      //直播收视时长TOP
      liveViewingTopList_VIP: {
        type: "live",
        id: "liveViewingTopList_VIP",
        data: [
          // {
          //   topNum: 1,
          //   programName: "疯狂的外星人",
          //   programSource: "电影",
          //   hot: "90%",
          //   playNum: "12.3"
          // },
          // {
          //   topNum: 2,
          //   programName: "熊出没.原始",
          //   programSource: "少儿",
          //   hot: "85%",
          //   playNum: "11.2"
          // },
          // {
          //   topNum: 3,
          //   programName: "流浪地球",
          //   programSource: "电影",
          //   hot: "83%",
          //   playNum: "10.3"
          // },
          // {
          //   topNum: 4,
          //   programName: "人间.喜剧",
          //   programSource: "电影",
          //   hot: "80%",
          //   playNum: "10.1"
          // },
          // {
          //   topNum: 5,
          //   programName: "白发",
          //   programSource: "电视剧",
          //   hot: "78%",
          //   playNum: "9.5"
          // },
          // {
          //   topNum: 6,
          //   programName: "反贪风暴",
          //   programSource: "电影",
          //   hot: "73%",
          //   playNum: "9.2"
          // },
          // {
          //   topNum: 7,
          //   programName: "一出好戏",
          //   programSource: "电影",
          //   hot: "70%",
          //   playNum: "9.0"
          // },
          // {
          //   topNum: 8,
          //   programName: "拜托了冰箱",
          //   programSource: "综艺",
          //   hot: "68%",
          //   playNum: "8.7"
          // },
          // {
          //   topNum: 9,
          //   programName: "极限挑战",
          //   programSource: "真人秀",
          //   hot: "64%",
          //   playNum: "8.5"
          // },
          // {
          //   topNum: 10,
          //   programName: "陈情令",
          //   programSource: "电视剧",
          //   hot: "60%",
          //   playNum: "8.0"
          // },
          // {
          //   topNum: 11,
          //   programName: "反贪风暴",
          //   programSource: "电影",
          //   hot: "56%",
          //   playNum: "7.5"
          // },
          // {
          //   topNum: 12,
          //   programName: "一出好戏",
          //   programSource: "电影",
          //   hot: "53%",
          //   playNum: "7.0"
          // },
          // {
          //   topNum: 13,
          //   programName: "拜托了冰箱",
          //   programSource: "综艺",
          //   hot: "50%",
          //   playNum: "6.8"
          // },
          // {
          //   topNum: 14,
          //   programName: "极限挑战",
          //   programSource: "真人秀",
          //   hot: "45%",
          //   playNum: "6.3"
          // },
          // {
          //   topNum: 15,
          //   programName: "陈情令",
          //   programSource: "电视剧",
          //   hot: "40%",
          //   playNum: "6.0"
          // }
        ]
      },
      //点播收视时长TOP
      orderViewingTopList_VIP: {
        type: "demand",
        id: "orderViewingTopList_VIP",
        data: [
          // {
          //   topNum: 1,
          //   programName: "疯狂的外星人",
          //   programSource: "电影",
          //   hot: "90%",
          //   playNum: "12.3"
          // },
          // {
          //   topNum: 2,
          //   programName: "熊出没.原始",
          //   programSource: "少儿",
          //   hot: "85%",
          //   playNum: "11.2"
          // },
          // {
          //   topNum: 3,
          //   programName: "流浪地球",
          //   programSource: "电影",
          //   hot: "83%",
          //   playNum: "10.3"
          // },
          // {
          //   topNum: 4,
          //   programName: "人间.喜剧",
          //   programSource: "电影",
          //   hot: "80%",
          //   playNum: "10.1"
          // },
          // {
          //   topNum: 5,
          //   programName: "白发",
          //   programSource: "电视剧",
          //   hot: "78%",
          //   playNum: "9.5"
          // },
          // {
          //   topNum: 6,
          //   programName: "反贪风暴",
          //   programSource: "电影",
          //   hot: "73%",
          //   playNum: "9.2"
          // },
          // {
          //   topNum: 7,
          //   programName: "一出好戏",
          //   programSource: "电影",
          //   hot: "70%",
          //   playNum: "9.0"
          // },
          // {
          //   topNum: 8,
          //   programName: "拜托了冰箱",
          //   programSource: "综艺",
          //   hot: "68%",
          //   playNum: "8.7"
          // },
          // {
          //   topNum: 9,
          //   programName: "极限挑战",
          //   programSource: "真人秀",
          //   hot: "64%",
          //   playNum: "8.5"
          // },
          // {
          //   topNum: 10,
          //   programName: "陈情令",
          //   programSource: "电视剧",
          //   hot: "60%",
          //   playNum: "8.0"
          // },
          // {
          //   topNum: 11,
          //   programName: "反贪风暴",
          //   programSource: "电影",
          //   hot: "56%",
          //   playNum: "7.5"
          // },
          // {
          //   topNum: 12,
          //   programName: "一出好戏",
          //   programSource: "电影",
          //   hot: "53%",
          //   playNum: "7.0"
          // },
          // {
          //   topNum: 13,
          //   programName: "拜托了冰箱",
          //   programSource: "综艺",
          //   hot: "50%",
          //   playNum: "6.8"
          // },
          // {
          //   topNum: 14,
          //   programName: "极限挑战",
          //   programSource: "真人秀",
          //   hot: "45%",
          //   playNum: "6.3"
          // },
          // {
          //   topNum: 15,
          //   programName: "陈情令",
          //   programSource: "电视剧",
          //   hot: "40%",
          //   playNum: "6.0"
          // }
        ]
      },
      //回看收视时长TOP
      lookBackViewingTopList_VIP: {
        type: "review",
        id: "lookBackViewingTopList_VIP",
        data: [
          // {
          //   topNum: 1,
          //   programName: "疯狂的外星人",
          //   programSource: "电影",
          //   hot: "90%",
          //   playNum: "12.3"
          // },
          // {
          //   topNum: 2,
          //   programName: "熊出没.原始",
          //   programSource: "少儿",
          //   hot: "85%",
          //   playNum: "11.2"
          // },
          // {
          //   topNum: 3,
          //   programName: "流浪地球",
          //   programSource: "电影",
          //   hot: "83%",
          //   playNum: "10.3"
          // },
          // {
          //   topNum: 4,
          //   programName: "人间.喜剧",
          //   programSource: "电影",
          //   hot: "80%",
          //   playNum: "10.1"
          // },
          // {
          //   topNum: 5,
          //   programName: "白发",
          //   programSource: "电视剧",
          //   hot: "78%",
          //   playNum: "9.5"
          // },
          // {
          //   topNum: 6,
          //   programName: "反贪风暴",
          //   programSource: "电影",
          //   hot: "73%",
          //   playNum: "9.2"
          // },
          // {
          //   topNum: 7,
          //   programName: "一出好戏",
          //   programSource: "电影",
          //   hot: "70%",
          //   playNum: "9.0"
          // },
          // {
          //   topNum: 8,
          //   programName: "拜托了冰箱",
          //   programSource: "综艺",
          //   hot: "68%",
          //   playNum: "8.7"
          // },
          // {
          //   topNum: 9,
          //   programName: "极限挑战",
          //   programSource: "真人秀",
          //   hot: "64%",
          //   playNum: "8.5"
          // },
          // {
          //   topNum: 10,
          //   programName: "陈情令",
          //   programSource: "电视剧",
          //   hot: "60%",
          //   playNum: "8.0"
          // },
          // {
          //   topNum: 11,
          //   programName: "反贪风暴",
          //   programSource: "电影",
          //   hot: "56%",
          //   playNum: "7.5"
          // },
          // {
          //   topNum: 12,
          //   programName: "一出好戏",
          //   programSource: "电影",
          //   hot: "53%",
          //   playNum: "7.0"
          // },
          // {
          //   topNum: 13,
          //   programName: "拜托了冰箱",
          //   programSource: "综艺",
          //   hot: "50%",
          //   playNum: "6.8"
          // },
          // {
          //   topNum: 14,
          //   programName: "极限挑战",
          //   programSource: "真人秀",
          //   hot: "45%",
          //   playNum: "6.3"
          // },
          // {
          //   topNum: 15,
          //   programName: "陈情令",
          //   programSource: "电视剧",
          //   hot: "40%",
          //   playNum: "6.0"
          // }
        ]
      }
      //收视时长TOP
      // viewingTopList: {
      //   id: "vipBehavior",
      //   data: [
      //     {
      //       topNum: 1,
      //       programName: "疯狂的外星人",
      //       programSource: "电影",
      //       hot: "90%",
      //       playNum: "12.3"
      //     },
      //     {
      //       topNum: 2,
      //       programName: "熊出没.原始",
      //       programSource: "少儿",
      //       hot: "85%",
      //       playNum: "11.2"
      //     },
      //     {
      //       topNum: 3,
      //       programName: "流浪地球",
      //       programSource: "电影",
      //       hot: "83%",
      //       playNum: "10.3"
      //     },
      //     {
      //       topNum: 4,
      //       programName: "人间.喜剧",
      //       programSource: "电影",
      //       hot: "80%",
      //       playNum: "10.1"
      //     },
      //     {
      //       topNum: 5,
      //       programName: "白发",
      //       programSource: "电视剧",
      //       hot: "78%",
      //       playNum: "9.5"
      //     },
      //     {
      //       topNum: 6,
      //       programName: "反贪风暴",
      //       programSource: "电影",
      //       hot: "73%",
      //       playNum: "9.2"
      //     },
      //     {
      //       topNum: 7,
      //       programName: "一出好戏",
      //       programSource: "电影",
      //       hot: "70%",
      //       playNum: "9.0"
      //     },
      //     {
      //       topNum: 8,
      //       programName: "拜托了冰箱",
      //       programSource: "综艺",
      //       hot: "68%",
      //       playNum: "8.7"
      //     },
      //     {
      //       topNum: 9,
      //       programName: "极限挑战",
      //       programSource: "真人秀",
      //       hot: "64%",
      //       playNum: "8.5"
      //     },
      //     {
      //       topNum: 10,
      //       programName: "陈情令",
      //       programSource: "电视剧",
      //       hot: "60%",
      //       playNum: "8.0"
      //     },
      //     {
      //       topNum: 11,
      //       programName: "反贪风暴",
      //       programSource: "电影",
      //       hot: "56%",
      //       playNum: "7.5"
      //     },
      //     {
      //       topNum: 12,
      //       programName: "一出好戏",
      //       programSource: "电影",
      //       hot: "53%",
      //       playNum: "7.0"
      //     },
      //     {
      //       topNum: 13,
      //       programName: "拜托了冰箱",
      //       programSource: "综艺",
      //       hot: "50%",
      //       playNum: "6.8"
      //     },
      //     {
      //       topNum: 14,
      //       programName: "极限挑战",
      //       programSource: "真人秀",
      //       hot: "45%",
      //       playNum: "6.3"
      //     },
      //     {
      //       topNum: 15,
      //       programName: "陈情令",
      //       programSource: "电视剧",
      //       hot: "40%",
      //       playNum: "6.0"
      //     }
      //   ]
      // }
    };
  }
};
</script>
<style scoped>
.option_select {
  height: 372px;
}
.vip_behavior {
  height: 500px;
  margin: 14px 0px;
}
.viewing_top15 {
  height: 520px;
  margin-bottom: 14px;
}
.last_viewing_top15 {
  margin-bottom: 50px;
}
.vip_top15 {
  height: 520px;
  margin-bottom: 50px;
}
.select_option_content {
  height: 40px;
  text-align: left;
  font-size: 14px;
  color: #333;
}
.select_option_content span {
  font-weight: bold;
}
.chart_height {
  height: calc(100% - 40px);
}
/* 增值业务——VIP页面自适应开始 */
@media (max-width: 1450px) {
  .vip_behavior .chart_height.el-col-12 {
    width: 100%;
    height: 360px;
  }
  .vip_behavior {
    height: auto;
  }
}
</style>

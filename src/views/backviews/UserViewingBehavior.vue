<template>
  <div class="user_viewing_behavior">
    <!-- 条件筛选开始 -->
    <el-row class="option_select">
      <el-row class="model_title">
        <span class="title_border_left"></span>条件筛选
      </el-row>
      <!-- <el-row class="chart_body back_white">条件.......</el-row> -->
      <el-row class="chart_body back_white">
        <com-optionselectUVB></com-optionselectUVB>
      </el-row>
    </el-row>
    <!-- 条件筛选结束 -->

    <!-- 收视行为开始 -->
    <el-row class="viewing_behavior">
      <el-row class="model_title">
        <span class="title_border_left"></span>收视行为
      </el-row>
      <el-row class="chart_body back_white">
        <el-row class="select_option_content">
          <span>选择指标：</span>
          <el-select v-model="targetOption" placeholder="请选择">
            <el-option v-for="(item,index) in target" :key="index+'c'" :label="item" :value="item"></el-option>
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
    <el-row class="viewing_top15" v-show="ifPlaymodeShow_zb">
      <el-row class="model_title">
        <span class="title_border_left"></span>直播收视TOP15
      </el-row>
      <el-row class="chart_body back_white viewing_top15_list">
        <user-viewing-behavior-top :viewingTopList="liveViewingTopList"></user-viewing-behavior-top>
      </el-row>
    </el-row>

    <el-row class="viewing_top15" v-show="ifPlaymodeShow_db">
      <el-row class="model_title">
        <span class="title_border_left"></span>点播收视TOP15
      </el-row>
      <el-row class="chart_body back_white viewing_top15_list">
        <user-viewing-behavior-top :viewingTopList="orderViewingTopList"></user-viewing-behavior-top>
      </el-row>
    </el-row>

    <el-row class="viewing_top15 last_viewing_top15" v-show="ifPlaymodeShow_hk">
      <el-row class="model_title">
        <span class="title_border_left"></span>回看收视TOP15
      </el-row>
      <el-row class="chart_body back_white viewing_top15_list">
        <user-viewing-behavior-top :viewingTopList="lookBackViewingTopList"></user-viewing-behavior-top>
      </el-row>
    </el-row>
    <!-- 收视TOP结束 -->
    <!-- <span v-show="false">热更新用-不显示：{{if_playmode_is_single_db}}</span> -->
  </div>
</template>
<script>
import UserViewingBehaviorTOP from "@/views/backcoms/userviewingbehavior/UserViewingBehaviorTOP"; //收视TOP组件
import OptionSelectUVB from "@/views/backcoms/userviewingbehavior/OptionSelectUVB"; // 条件筛选
import PieCharts from "@/views/backcoms/commoncomponents/PieCharts"; //公用饼图
import BarChartsStack from "@/views/backcoms/commoncomponents/BarChartsStack"; //公用柱状图堆叠
import BarChartSingle from "@/views/backcoms/commoncomponents/BarChartSingle"; //公用柱状图单个

import { mapGetters } from "vuex";
import { commonTools } from "@/utils/test";
import { userAction } from "@/api/api_main";
import Vue from "vue";

export default {
  name: "UserViewingBehavior", //用户收视行为
  computed: {
    ...mapGetters([
      "UVB_region",
      "UVB_operator",
      "UVB_playmode",
      "UVB_programa",
      "UVB_contenttype",
      "UVB_day",
      "UVB_week",
      "UVB_picker",
      "UVB_time_type"
    ]),
    ifPlaymodeShow_zb: {
      get: function() {
        if (this.UVB_playmode == null || this.UVB_playmode.length == 0) {
          return true;
        }
        if (this.UVB_playmode.indexOf("直播") > -1) {
          return true;
        }
        return false;
      },
      set: function(newValue) {}
    },
    ifPlaymodeShow_db: {
      get: function() {
        if (this.UVB_playmode == null || this.UVB_playmode.length == 0) {
          return true;
        }
        if (this.UVB_playmode.indexOf("点播") > -1) {
          return true;
        }
        return false;
      },
      set: function(newValue) {}
    },
    ifPlaymodeShow_hk: {
      get: function() {
        if (this.UVB_playmode == null || this.UVB_playmode.length == 0) {
          return true;
        }
        if (this.UVB_playmode.indexOf("回看") > -1) {
          return true;
        }
        return false;
      },
      set: function(newValue) {}
    }
    // if_playmode_is_single_db: {
    //   get: function() {
    //     if (
    //       this.UVB_playmode.indexOf("点播") > -1 &&
    //       this.UVB_playmode.length == 1
    //     ) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   },
    //   set: function(newValue) {}
    // }
  },
  watch: {
    UVB_region(newValue, oldValue) {
      let vm = this;
      console.log("UVB_region: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data();
      }, 100);
    },
    UVB_operator(newValue, oldValue) {
      let vm = this;
      console.log("UVB_operator: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data();
      }, 100);
    },
    UVB_playmode(newValue, oldValue) {
      let vm = this;
      console.log("UVB_playmode: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data();
      }, 100);
    },
    UVB_programa(newValue, oldValue) {
      let vm = this;
      console.log("UVB_programa: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data();
      }, 100);
    },
    UVB_contenttype(newValue, oldValue) {
      let vm = this;
      console.log("UVB_contenttype: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data();
      }, 100);
    },
    UVB_day(newValue, oldValue) {
      let vm = this;
      console.log("UVB_day: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data();
      }, 100);
    },
    UVB_week(newValue, oldValue) {
      let vm = this;
      console.log("UVB_week: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data();
      }, 100);
    },
    UVB_picker(newValue, oldValue) {
      let vm = this;
      console.log("UVB_picker: " + newValue);
      setTimeout(function() {
        vm.refresh_api_data();
      }, 100);
    },
    UVB_time_type(newValue, oldValue) {
      let vm = this;
      console.log("UVB_time_type: " + newValue);
    },
    targetOption(newValue, oldValue) {
      let vm = this;
      // 监听指标选中
      console.log("targetOption");
      console.log(newValue);
      if (newValue == "观看次数") {
        vm.regionData.data = vm.regionData_data_arr[0];
        vm.operatorData.data = vm.operatorData_arr[0];
      }
      if (newValue == "观看时长") {
        vm.regionData.data = vm.regionData_data_arr[1];
        vm.operatorData.data = vm.operatorData_arr[1];
      }
      if (newValue == "观看户数") {
        vm.regionData.data = vm.regionData_data_arr[2];
        vm.operatorData.data = vm.operatorData_arr[2];
      }
      if (newValue == "户均收视次数") {
        vm.regionData.data = vm.regionData_data_arr[3];
        vm.operatorData.data = vm.operatorData_arr[3];
      }
      if (newValue == "次均收视次数") {
        vm.regionData.data = vm.regionData_data_arr[4];
        vm.operatorData.data = vm.operatorData_arr[4];
      }
    }
  },
  methods: {
    refresh_api_data() {
      // this.userAction(this.UVB_time_type, this.if_playmode_is_single_db);
      this.userAction(this.UVB_time_type);
    },
    // userAction(time_type, if_playmode_is_single_db) {
    userAction(time_type) {
      let vm = this;
      console.log("userAction");

      let temp_region = commonTools.acConvert(vm.UVB_region);
      let temp_operator = commonTools.operatorConvert(vm.UVB_operator);
      let temp_playmode = commonTools.playmodeConvert(vm.UVB_playmode);
      let temp_programa;
      let temp_contenttype;

      // if (if_playmode_is_single_db) {
      //   temp_programa = commonTools.programaConvert(vm.UVB_programa);
      //   temp_contenttype = commonTools.contenttypeConvert(vm.UVB_contenttype);
      // }
      // console.log("temp_contenttype:" + temp_contenttype);
      // ▲▲▲ 接口再增加 contenttype  ---暂定  contenttype  --alex

      // let temp = {
      //   ac: null,
      //   operator: null,
      //   mode: null,
      //   list: null,
      //   start: null,
      //   end: null
      // };
      let temp;
      // if (if_playmode_is_single_db) {
      //   temp = {
      //     ac: null,
      //     operator: null,
      //     mode: null,
      //     list: null,
      //     contenttype: null,
      //     start: null,
      //     end: null
      //   };
      // } else {
      temp = {
        ac: null,
        operator: null,
        mode: null,
        // list: null,
        // contenttype: null,
        start: null,
        end: null
      };
      // }

      if (time_type == 1) {
        // 时间类型-1-天
        // console.log("~~~~~day:" + vm.UVB_day);
        // if (if_playmode_is_single_db) {
        //   temp = {
        //     ac: String(temp_region),
        //     operator: String(temp_operator),
        //     mode: String(temp_playmode),
        //     list: String(temp_programa),
        //     contenttype: String(temp_contenttype),
        //     start: vm.UVB_day,
        //     end: vm.UVB_day
        //   };
        // } else {
        temp = {
          ac: String(temp_region),
          operator: String(temp_operator),
          mode: String(temp_playmode),
          start: vm.UVB_day,
          end: vm.UVB_day
        };
        // }

        // console.log("~~~~time_type:" + time_type);
        console.log("~~~~~1:");
        console.log(temp);
      } else if (time_type == 2) {
        // 时间类型-2-周
        // console.log("~~~~~week:" + vm.UVB_week);
        let temp_time = commonTools.split_yearAtime(vm.UVB_week);
        // if (if_playmode_is_single_db) {
        //   temp = {
        //     ac: String(temp_region),
        //     operator: String(temp_operator),
        //     mode: String(temp_playmode),
        //     list: String(temp_programa),
        //     contenttype: String(temp_contenttype),
        //     start: temp_time.time,
        //     end: temp_time.time,
        //     year: temp_time.year
        //   };
        // } else {
        temp = {
          ac: String(temp_region),
          operator: String(temp_operator),
          mode: String(temp_playmode),
          start: temp_time.time,
          end: temp_time.time,
          year: temp_time.year
        };
        // }

        // console.log("~~~~time_type:" + time_type);
        console.log("~~~~~2:");
        console.log(temp);
      } else if (time_type == 3) {
        // 时间类型-3-范围
        // console.log("~~~~~picker:" + vm.UVB_picker);
        // console.log(typeof vm.UVB_picker);
        let temp_time = commonTools.split_picker(vm.UVB_picker);
        // console.log(temp_time);
        // if (if_playmode_is_single_db) {
        //   temp = {
        //     ac: String(temp_region),
        //     operator: String(temp_operator),
        //     mode: String(temp_playmode),
        //     list: String(temp_programa),
        //     contenttype: String(temp_contenttype),
        //     start: temp_time.start,
        //     end: temp_time.end
        //   };
        // } else {
        temp = {
          ac: String(temp_region),
          operator: String(temp_operator),
          mode: String(temp_playmode),
          start: temp_time.start,
          end: temp_time.end
        };
        // }

        // console.log("~~~~time_type:" + time_type);
        console.log("~~~~~3:");
        console.log(temp);
      } else {
        console.log("请选择时间！");
        return;
      }

      // if (if_playmode_is_single_db) {
      //   // api 2
      // } else {
      // api 1

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("ac", temp.ac);
      formData.append("operator", temp.operator);
      formData.append("mode", temp.mode);
      formData.append("start", temp.start);
      formData.append("end", temp.end);
      userAction(formData)
        .then(function(response) {
          console.log(response);
          // /////////// 0 -
          let aggregations_0 = response.data.responses[0].aggregations;
          let buckets_0 = response.data.responses[0].aggregations.ac.buckets; // x9
          let length_0 = buckets_0.length;
          let i_0;
          let temp1 = []; // 观看次数 - watch_freq
          let temp2 = []; // 观看时长 - watch_dur
          let temp3 = []; // 观看户数 - watch_user_num
          let temp4 = []; // 户均收视次数 - watch_freq_family
          let temp5 = []; // 次均收视次数 - watch_dur_mean
          let temp_all = []; // 集合 temp1~temp5 // ▲ 5种值-分别对应ac
          for (i_0 = 0; i_0 < length_0; i_0++) {
            temp1.push({
              value: buckets_0[i_0].watch_dur_mean.value,
              name: commonTools.acConvert_Single(buckets_0[i_0].key)
            });
            temp2.push({
              value: buckets_0[i_0].watch_dur.value,
              name: commonTools.acConvert_Single(buckets_0[i_0].key)
            });
            temp3.push({
              value: buckets_0[i_0].watch_user_num.value,
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
          // console.log("~~~~~~~~~~~~~~~regionData_data_arr");
          // console.log(vm.regionData_data_arr);
          // ////////////////////////////

          let buckets_0B = response.data.responses[0].aggregations.ac1.buckets; // x3
          let length_0B = buckets_0B.length;
          let i_0B;
          let temp1_B = []; // 观看次数 - watch_freq
          let temp2_B = []; // 观看时长 - watch_dur
          let temp3_B = []; // 观看户数 - watch_user_num
          let temp4_B = []; // 户均收视次数 - watch_freq_family
          let temp5_B = []; // 次均收视次数 - watch_dur_mean
          let temp_all_B = []; //包含temp1_B~temp5_B // ▲ 5种值-分别对应运营商-分别对应ac

          temp1_B.push(["product", "移动", "联通", "电信"]);
          temp2_B.push(["product", "移动", "联通", "电信"]);
          temp3_B.push(["product", "移动", "联通", "电信"]);
          temp4_B.push(["product", "移动", "联通", "电信"]);
          temp5_B.push(["product", "移动", "联通", "电信"]);
          for (let j = 0; j < 9; j++) {
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

            let operator_length = 3;
            let operator_i;
            let temp_aa = [];
            for (operator_i = 0; operator_i < operator_length; operator_i++) {
              if (
                buckets_0B[i_0B].operators.buckets[operator_i].key == "移动"
              ) {
                Vue.set(
                  temp1_B[i_0B + 1],
                  1,
                  buckets_0B[i_0B].operators.buckets[operator_i].watch_freq
                    .value
                );
                Vue.set(
                  temp2_B[i_0B + 1],
                  1,
                  buckets_0B[i_0B].operators.buckets[operator_i].watch_dur.value
                );
                Vue.set(
                  temp3_B[i_0B + 1],
                  1,
                  buckets_0B[i_0B].operators.buckets[operator_i].watch_user_num
                    .value
                );
                Vue.set(
                  temp4_B[i_0B + 1],
                  1,
                  buckets_0B[i_0B].operators.buckets[operator_i]
                    .watch_freq_family.value
                );
                Vue.set(
                  temp5_B[i_0B + 1],
                  1,
                  buckets_0B[i_0B].operators.buckets[operator_i].watch_dur_mean
                    .value
                );
              }
              if (
                buckets_0B[i_0B].operators.buckets[operator_i].key == "联通"
              ) {
                Vue.set(
                  temp1_B[i_0B + 1],
                  2,
                  buckets_0B[i_0B].operators.buckets[operator_i].watch_freq
                    .value
                );
                Vue.set(
                  temp2_B[i_0B + 1],
                  2,
                  buckets_0B[i_0B].operators.buckets[operator_i].watch_dur.value
                );
                Vue.set(
                  temp3_B[i_0B + 1],
                  2,
                  buckets_0B[i_0B].operators.buckets[operator_i].watch_user_num
                    .value
                );
                Vue.set(
                  temp4_B[i_0B + 1],
                  2,
                  buckets_0B[i_0B].operators.buckets[operator_i]
                    .watch_freq_family.value
                );
                Vue.set(
                  temp5_B[i_0B + 1],
                  2,
                  buckets_0B[i_0B].operators.buckets[operator_i].watch_dur_mean
                    .value
                );
              }
              if (
                buckets_0B[i_0B].operators.buckets[operator_i].key == "电信"
              ) {
                Vue.set(
                  temp1_B[i_0B + 1],
                  3,
                  buckets_0B[i_0B].operators.buckets[operator_i].watch_freq
                    .value
                );
                Vue.set(
                  temp2_B[i_0B + 1],
                  3,
                  buckets_0B[i_0B].operators.buckets[operator_i].watch_dur.value
                );
                Vue.set(
                  temp3_B[i_0B + 1],
                  3,
                  buckets_0B[i_0B].operators.buckets[operator_i].watch_user_num
                    .value
                );
                Vue.set(
                  temp4_B[i_0B + 1],
                  3,
                  buckets_0B[i_0B].operators.buckets[operator_i]
                    .watch_freq_family.value
                );
                Vue.set(
                  temp5_B[i_0B + 1],
                  3,
                  buckets_0B[i_0B].operators.buckets[operator_i].watch_dur_mean
                    .value
                );
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



          // /////////// liveViewingTopList - 1 - 直播Top15
          // 获得最大值
          let buckets_1 =
            response.data.responses[1].aggregations.programname.buckets;
          let length_1 = buckets_1.length;
          let i_1;
          let temp_max_value = buckets_1[0].onlive_freq.value; // 取第一个为最大值
          let temp_data;
          for (i_1 = 0; i_1 < length_1; i_1++) {
            temp_data = {
              // 分别为 排名 频道 节目 次数（万） --暂别管原先的变量命名
              topNum: i_1 + 1,
              programName: buckets_1[i_1].channel.buckets[0].key,
              programSource: buckets_1[i_1].key,
              hot:
                String(
                  commonTools.returnFloat_2(
                    (buckets_1[i_1].onlive_freq.value / temp_max_value) * 100
                  )
                ) + "%",
              playNum: String(
                commonTools.returnFloat_2(
                  buckets_1[i_1].onlive_freq.value / 10000
                )
              ) // 次数（万）
            };
            vm.liveViewingTopList.data.push(temp_data);
          }

          // /////////// lookBackViewingTopList - 2 - 回看Top15
          let buckets_2 =
            response.data.responses[2].aggregations.programname.buckets;
          let length_2 = buckets_2.length;
          let i_2;
          let temp_max_value2 = buckets_2[0].watch_freq.value; // 取第一个为最大值
          let temp_data2;
          for (i_2 = 0; i_2 < length_2; i_2++) {
            temp_data2 = {
              // 分别为 排名 频道 节目 次数（万） --暂别管原先的变量命名
              topNum: i_2 + 1,
              programName: buckets_2[i_2].channel.buckets[0].key,
              programSource: buckets_2[i_2].key,
              hot:
                String(
                  commonTools.returnFloat_2(
                    (buckets_2[i_2].watch_freq.value / temp_max_value2) * 100
                  )
                ) + "%",
              playNum: String(
                commonTools.returnFloat_2(
                  buckets_2[i_2].watch_freq.value / 10000
                )
              ) // 次数（万）
            };
            vm.lookBackViewingTopList.data.push(temp_data2);
          }
        })
        .catch(function(error) {
          console.info(error);
        });
      // }
    }
  },
  components: {
    "user-viewing-behavior-top": UserViewingBehaviorTOP,
    "com-optionselectUVB": OptionSelectUVB,
    "pie-charts": PieCharts,
    "bar-charts-stack": BarChartsStack,
    "bar-chart-single": BarChartSingle
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
      //地区数据
      regionData: {
        title: "地区",
        id: "regionChart",
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
        id: "operatorChart",
        color: ["#FF6123", "#FF8859", "#FFAA89"],
        data: [
          // ["product", "移动", "联通", "电信"]
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
        id: "playChart",
        color: ["#B37CF4", "#F97E6F ", "#A9CCDC"],
        data: [
          { value: 535, name: "直播" },
          { value: 348, name: "点播" },
          { value: 410, name: "回看" }
        ]
      },
      columnData: {
        title: "栏目（点播专属）",
        id: "columnChart",
        color: ["#FF6123"],
        data: [
          ["product", "观看数"],
          ["分类", 43.3],
          ["电视", 83.1],
          ["推荐", 43.3],
          ["电影", 83.1],
          ["热剧", 86.4],
          ["少儿", 72.4],
          ["动漫", 86.4],
          ["综艺", 43.3],
          ["体育", 72.4],
          ["游戏", 72.4],
          ["纪实", 86.4]
        ]
      },
      //直播收视时长TOP
      liveViewingTopList: {
        type: "live",
        id: "liveViewingTopList",
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
      orderViewingTopList: {
        type: "demand",
        id: "orderViewingTopList",
        data: [
          {
            topNum: 1,
            programName: "疯狂的外星人",
            programSource: "电影",
            hot: "90%",
            playNum: "12.3"
          },
          {
            topNum: 2,
            programName: "熊出没.原始",
            programSource: "少儿",
            hot: "85%",
            playNum: "11.2"
          },
          {
            topNum: 3,
            programName: "流浪地球",
            programSource: "电影",
            hot: "83%",
            playNum: "10.3"
          },
          {
            topNum: 4,
            programName: "人间.喜剧",
            programSource: "电影",
            hot: "80%",
            playNum: "10.1"
          },
          {
            topNum: 5,
            programName: "白发",
            programSource: "电视剧",
            hot: "78%",
            playNum: "9.5"
          },
          {
            topNum: 6,
            programName: "反贪风暴",
            programSource: "电影",
            hot: "73%",
            playNum: "9.2"
          },
          {
            topNum: 7,
            programName: "一出好戏",
            programSource: "电影",
            hot: "70%",
            playNum: "9.0"
          },
          {
            topNum: 8,
            programName: "拜托了冰箱",
            programSource: "综艺",
            hot: "68%",
            playNum: "8.7"
          },
          {
            topNum: 9,
            programName: "极限挑战",
            programSource: "真人秀",
            hot: "64%",
            playNum: "8.5"
          },
          {
            topNum: 10,
            programName: "陈情令",
            programSource: "电视剧",
            hot: "60%",
            playNum: "8.0"
          },
          {
            topNum: 11,
            programName: "反贪风暴",
            programSource: "电影",
            hot: "56%",
            playNum: "7.5"
          },
          {
            topNum: 12,
            programName: "一出好戏",
            programSource: "电影",
            hot: "53%",
            playNum: "7.0"
          },
          {
            topNum: 13,
            programName: "拜托了冰箱",
            programSource: "综艺",
            hot: "50%",
            playNum: "6.8"
          },
          {
            topNum: 14,
            programName: "极限挑战",
            programSource: "真人秀",
            hot: "45%",
            playNum: "6.3"
          },
          {
            topNum: 15,
            programName: "陈情令",
            programSource: "电视剧",
            hot: "40%",
            playNum: "6.0"
          }
        ]
      },
      //回看收视时长TOP
      lookBackViewingTopList: {
        type: "review",
        id: "lookBackViewingTopList",
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
    };
  }
};
</script>
<style scoped>
.option_select {
  /* height: 342px; */
  height: 374px;
}
.viewing_behavior {
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

/* 用户收视行为页自适应开始 */
@media (max-width: 1450px) {
  .viewing_behavior .chart_height.el-col-12 {
    width: 100%;
    height: 360px;
  }
  .viewing_behavior {
    height: auto;
  }
}
</style>



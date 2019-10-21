<template>
  <div class="height_auto">
    <el-row class="back_white margintop_14">
      <el-col class="height_auto periodic_report_title" :span="24">G+TV用户收视日报表</el-col>
    </el-row>
    <!-- 移动专项开始 -->
    <el-row
      v-show="ifOperatorShow_yd"
      class="viewing_behavior_report new_add_user_percent back_white marginbottom_14"
    >
      <el-row class="model_title">
        <span class="title_border_left"></span>移动专项
      </el-row>
      <el-row class="rigesteduserBody bottomborder">
        <el-col class="height_auto" :span="24">
          <dayREportBar :fillinData="yidongTypeLooktime"></dayREportBar>
        </el-col>
      </el-row>
      <el-row class="rigesteduserBody bottomborder">
        <el-col class="height_auto" :span="12">
          <dayREportBarSingleVertical :fillinData="yidongtypedayusernumber"></dayREportBarSingleVertical>
        </el-col>
        <el-col class="height_auto" :span="12">
          <dayREportBarSingleVertical :fillinData="yidongtypedayclicknumber"></dayREportBarSingleVertical>
        </el-col>
      </el-row>
      <el-row class="rigesteduserBody bottomborder">
        <el-col class="height_auto" :span="24">
          <dayREportBarSingleLv :fillinData="yidongLiveBroadcast"></dayREportBarSingleLv>
        </el-col>
      </el-row>
      <el-row class="rigesteduserBody">
        <el-col class="height_auto" :span="24">
          <dayREportBarSingle :fillinData="yidongAsideClickUser"></dayREportBarSingle>
        </el-col>
      </el-row>
    </el-row>
    <!-- 移动专项结束 -->

    <!-- 联通专项开始 -->
    <el-row v-show="ifOperatorShow_lt" class="new_add_user_percent back_white marginbottom_14">
      <el-row class="model_title">
        <span class="title_border_left"></span>联通专项
      </el-row>
      <el-row class="rigesteduserBody bottomborder">
        <el-col class="height_auto" :span="24">
          <dayREportBar :fillinData="liantongTypeLooktime"></dayREportBar>
        </el-col>
      </el-row>
      <el-row class="rigesteduserBody bottomborder">
        <el-col class="height_auto" :span="12">
          <dayREportBarSingleVertical :fillinData="liantongtypedayusernumber"></dayREportBarSingleVertical>
        </el-col>
        <el-col class="height_auto" :span="12">
          <dayREportBarSingleVertical :fillinData="liantongtypedayclicknumber"></dayREportBarSingleVertical>
        </el-col>
      </el-row>
      <el-row class="rigesteduserBody bottomborder">
        <el-col class="height_auto" :span="24">
          <dayREportBarSingleLv :fillinData="liantongLiveBroadcast"></dayREportBarSingleLv>
        </el-col>
      </el-row>
      <el-row class="rigesteduserBody">
        <el-col class="height_auto" :span="24">
          <dayREportBarSingle :fillinData="liantongAsideClickUser"></dayREportBarSingle>
        </el-col>
      </el-row>
    </el-row>
    <!-- 联通专项结束 -->

    <!-- 电信专项开始 -->
    <el-row v-show="ifOperatorShow_dx" class="new_add_user_percent back_white marginbottom_14">
      <el-row class="model_title">
        <span class="title_border_left"></span>电信专项
      </el-row>
      <el-row class="rigesteduserBody bottomborder">
        <el-col class="height_auto" :span="24">
          <dayREportBar :fillinData="dianxingTypeLooktime"></dayREportBar>
        </el-col>
      </el-row>
      <el-row class="rigesteduserBody bottomborder">
        <el-col class="height_auto" :span="12">
          <dayREportBarSingleVertical :fillinData="dianxingtypedayusernumber"></dayREportBarSingleVertical>
        </el-col>
        <el-col class="height_auto" :span="12">
          <dayREportBarSingleVertical :fillinData="dianxingtypedayclicknumber"></dayREportBarSingleVertical>
        </el-col>
      </el-row>
      <el-row class="rigesteduserBody bottomborder">
        <el-col class="height_auto" :span="24">
          <dayREportBarSingleLv :fillinData="dianxingLiveBroadcast"></dayREportBarSingleLv>
        </el-col>
      </el-row>
      <el-row class="rigesteduserBody">
        <el-col class="height_auto" :span="24">
          <dayREportBarSingle :fillinData="dianxingAsideClickUser"></dayREportBarSingle>
        </el-col>
      </el-row>
    </el-row>
    <!-- 电信专项结束 -->
  </div>
</template>
<script>
import dayREportBar from "@/views/backcoms/G_TVUserActiveDayReport/dayREport_bar"; //用户数统计柱状组件
import dayREportBarSingleLv from "@/views/backcoms/G_TVUserViewingDayReport/dayREport_bar_single_lv"; //用户数统计柱状组件（字斜体 %）
import dayREportBarSingleVertical from "@/views/backcoms/G_TVUserViewingDayReport/dayREport_bar_vertical"; //用户数统计柱状组件（垂直）
import dayREportBarSingle from "@/views/backcoms/G_TVUserViewingDayReport/dayREport_bar_single"; //用户数统计柱状组件（字斜体）

import { mapGetters } from "vuex";
import { users_daliyReport } from "@/api/api_main";
import Vue from "vue";
import { commonTools } from "@/utils/test";

export default {
  name: "G_TVUserViewingDayReport", //G+TV用户收视日报表
  mounted() {
    // singleday - 当天  rangeday - 前七天（不包括当天）

    let vm = this;
    setTimeout(function() {
      vm.$store
        .dispatch("get_BigScreenStartDate")
        .then(function(res1) {
          setTimeout(function() {
            vm.$store
              .dispatch("get_BigScreenExpirationDate")
              .then(function(res2) {
                if (
                  vm.PR_day == null ||
                  vm.PR_day == undefined ||
                  vm.PR_day == ""
                ) {
                  return;
                }
                vm.users_daliyReport("yd", "rangeday", res2, res2);
                vm.users_daliyReport("lt", "rangeday", res2, res2);
                vm.users_daliyReport("dx", "rangeday", res2, res2);
                vm.users_daliyReport("yd", "singleday", res1, res2);
                vm.users_daliyReport("lt", "singleday", res1, res2);
                vm.users_daliyReport("dx", "singleday", res1, res2);
              })
              .catch(function(error) {
                console.info(error);
              });
          }, 100);
        })
        .catch(function(error) {
          console.info(error);
        });
    }, 100);
  },
  watch: {
    PR_day(newValue, oldValue) {
      // console.log("~~~~~PR_day");
      // console.log(newValue);

      let vm = this;
      setTimeout(function() {
        if (newValue == null || newValue == undefined || newValue == "") {
          return;
        }
        vm.users_daliyReport("yd", "rangeday");
        vm.users_daliyReport("lt", "rangeday");
        vm.users_daliyReport("dx", "rangeday");
        vm.users_daliyReport("yd", "singleday");
        vm.users_daliyReport("lt", "singleday");
        vm.users_daliyReport("dx", "singleday");
      }, 100);
    }
  },
  computed: {
    ...mapGetters(["PR_operator", "PR_day"]),
    ifOperatorShow_yd: {
      get: function() {
        if (this.PR_operator == null || this.PR_operator.length == 0) {
          return true;
        }
        if (this.PR_operator.indexOf("移动") > -1) {
          return true;
        }
        return false;
      },
      set: function(newValue) {}
    },
    ifOperatorShow_lt: {
      get: function() {
        if (this.PR_operator == null || this.PR_operator.length == 0) {
          return true;
        }
        if (this.PR_operator.indexOf("联通") > -1) {
          return true;
        }
        return false;
      },
      set: function(newValue) {}
    },
    ifOperatorShow_dx: {
      get: function() {
        if (this.PR_operator == null || this.PR_operator.length == 0) {
          return true;
        }
        if (this.PR_operator.indexOf("电信") > -1) {
          return true;
        }
        return false;
      },
      set: function(newValue) {}
    }
  },
  methods: {
    users_daliyReport(operator_type, date_type) {
      console.log("users_daliyReport");
      let vm = this;
      let temp_operator;
      if (operator_type == "yd") {
        temp_operator = "移动";
      }
      if (operator_type == "lt") {
        temp_operator = "联通";
      }
      if (operator_type == "dx") {
        temp_operator = "电信";
      }
      console.log("~~~~~~!!vm.PR_day");
      console.log(vm.PR_day);

      let start;
      let end;
      if (vm.PR_day != null) {
        if (date_type == "singleday") {
          start = vm.PR_day.start;
          end = vm.PR_day.end; // 同 start
        }
        if (date_type == "rangeday") {
          let temp_b7d = commonTools.currentDay_7daysAgoRange(vm.PR_day.start);
          let data_start = temp_b7d.start;
          let data_end = temp_b7d.end;
          start = data_start;
          end = data_end;
        }
      }
      let temp = {
        // operator: String(["移动"]),
        operator: String([temp_operator]),
        // start: "2019-07-01",
        // end: "2019-07-01"
        start: start,
        end: end
      };

      console.log("~~~~~~~!");
      console.log(temp);

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("operator", temp.operator);
      formData.append("start", temp.start);
      formData.append("end", temp.end);

      users_daliyReport(formData)
        .then(function(response) {
          if (date_type == "rangeday") {
            if (operator_type == "yd") {
              console.log("~~~~yd rangeday");
              console.log(response);
            }
            if (operator_type == "lt") {
              console.log("~~~~lt rangeday");
              console.log(response);
            }
            if (operator_type == "dx") {
              console.log("~~~~dx rangeday");
              console.log(response);
            }
          }
          if (date_type == "singleday") {
            if (operator_type == "yd") {
              console.log("~~~~yd singleday");
              console.log(response);
            }
            if (operator_type == "lt") {
              console.log("~~~~lt singleday");
              console.log(response);
            }
            if (operator_type == "dx") {
              console.log("~~~~dx singleday");
              console.log(response);
            }
          }

          ///////////////// 移动侧各类型节目单日点播时长（千小时） - yidongTypeLooktime
          if (date_type == "rangeday") {
            let buckets0 =
              response.data.responses[1].aggregations.program_type.buckets;
            // ////// 平均  ( @PS:平均返回的值是所有（7）天的，需要(all_demand_dur)除以7 )
            // 注意，视图是 先平均 再今日  --- api是  先今日-0  后平均-1
            let temp_0 = [];
            let temp_0_C1 = [];
            let temp_0_C2 = [];
            // let top10Num = 10;
            // let length_0 = top10Num; // ▲指定10 - Top
            let length_0 = buckets0.length; // 由于固定了显示栏目--所以用全length

            let i_0;
            temp_0_C1.push("运营商");
            temp_0_C2.push("平均");
            function data_manage(i_0, index) {
              Vue.set(temp_0_C1, index, buckets0[i_0].key);
              Vue.set(
                temp_0_C2,
                index,
                String(
                  commonTools.returnFloat_4(
                    parseFloat(buckets0[i_0].all_demand_dur.value) /
                      1000 /
                      3600 /
                      7
                  )
                )
                // buckets0[i_0].all_demand_dur.value
              );
            }
            //（固定排列！） 热剧 少儿 电影 动漫 综艺 游戏 纪实 音乐 体育 新闻资讯
            for (i_0 = 0; i_0 < length_0; i_0++) {
              // temp_0_C1.push(buckets0[i_0].key);
              // temp_0_C2.push(
              // String(
              //   parseInt(
              //     parseFloat(buckets0[i_0].all_demand_dur.value) /
              //       1000 /
              //       3600 /
              //       7
              //   )
              // )
              // ); //秒-》千小时 取整
              if (buckets0[i_0].key == "热剧") {
                data_manage(i_0, 1);
              }
              if (buckets0[i_0].key == "少儿") {
                data_manage(i_0, 2);
              }
              if (buckets0[i_0].key == "电影") {
                data_manage(i_0, 3);
              }
              if (buckets0[i_0].key == "动漫") {
                data_manage(i_0, 4);
              }
              if (buckets0[i_0].key == "综艺") {
                data_manage(i_0, 5);
              }
              if (buckets0[i_0].key == "游戏") {
                data_manage(i_0, 6);
              }
              if (buckets0[i_0].key == "纪实") {
                data_manage(i_0, 7);
              }
              if (buckets0[i_0].key == "音乐") {
                data_manage(i_0, 8);
              }
              if (buckets0[i_0].key == "体育") {
                data_manage(i_0, 9);
              }
              if (buckets0[i_0].key == "新闻资讯") {
                data_manage(i_0, 10);
              }
            }
            temp_0.push(temp_0_C1);
            temp_0.push(temp_0_C2);
            if (operator_type == "yd") {
              vm.yidongTypeLooktime.data = []; // 初始化
              vm.yidongTypeLooktime.data.push(temp_0);
            }
            if (operator_type == "lt") {
              vm.liantongTypeLooktime.data = []; // 初始化
              vm.liantongTypeLooktime.data.push(temp_0);
            }
            if (operator_type == "dx") {
              vm.dianxingTypeLooktime.data = []; // 初始化
              vm.dianxingTypeLooktime.data.push(temp_0);
            }

            // console.log("~~~~~~~~Test！！！！");
            // console.log(vm.yidongTypeLooktime);
            // console.log(vm.liantongTypeLooktime);
            // console.log(vm.dianxingTypeLooktime);
          }

          // ////// 今日
          if (date_type == "singleday") {
            let buckets0 =
              response.data.responses[0].aggregations.program_type.buckets;
            let temp_0 = [];
            let temp_0_C1 = [];
            let temp_0_C2 = [];
            // let top10Num = 10;
            // let length_0 = top10Num; // ▲指定10 - Top
            let length_0 = buckets0.length; // 由于固定了显示栏目--所以用全length

            let i_0;
            temp_0_C1.push("运营商");
            temp_0_C2.push("今日");
            // Vue.set(temp_0_C1, 0, "运营商");
            // Vue.set(temp_0_C2, 0, "今日");

            function data_manage(i_0, index) {
              Vue.set(temp_0_C1, index, buckets0[i_0].key);
              Vue.set(
                temp_0_C2,
                index,
                String(
                  commonTools.returnFloat_4(
                    parseFloat(buckets0[i_0].demand_dur.value) / 1000 / 3600
                  )
                )
                // buckets0[i_0].demand_dur.value
              );
            }
            for (i_0 = 0; i_0 < length_0; i_0++) {
              if (buckets0[i_0].key == "热剧") {
                data_manage(i_0, 1);
              }
              if (buckets0[i_0].key == "少儿") {
                data_manage(i_0, 2);
              }
              if (buckets0[i_0].key == "电影") {
                data_manage(i_0, 3);
              }
              if (buckets0[i_0].key == "动漫") {
                data_manage(i_0, 4);
              }
              if (buckets0[i_0].key == "综艺") {
                data_manage(i_0, 5);
              }
              if (buckets0[i_0].key == "游戏") {
                data_manage(i_0, 6);
              }
              if (buckets0[i_0].key == "纪实") {
                data_manage(i_0, 7);
              }
              if (buckets0[i_0].key == "音乐") {
                data_manage(i_0, 8);
              }
              if (buckets0[i_0].key == "体育") {
                data_manage(i_0, 9);
              }
              if (buckets0[i_0].key == "新闻资讯") {
                data_manage(i_0, 10);
              }
            }
            // console.log("~~~~");
            // console.log(temp_0_C1);
            // console.log(temp_0_C2);

            temp_0.push(temp_0_C1);
            temp_0.push(temp_0_C2);
            if (operator_type == "yd") {
              // vm.yidongTypeLooktime.data = []; // 初始化
              vm.yidongTypeLooktime.data.push(temp_0);
            }
            if (operator_type == "lt") {
              // vm.liantongTypeLooktime.data = []; // 初始化
              vm.liantongTypeLooktime.data.push(temp_0);
            }
            if (operator_type == "dx") {
              // vm.dianxingTypeLooktime.data = []; // 初始化
              vm.dianxingTypeLooktime.data.push(temp_0);
            }

            // console.log("~~~~~~~~Test！！！！");
            // console.log(vm.yidongTypeLooktime);
            // console.log(vm.liantongTypeLooktime);
            // console.log(vm.dianxingTypeLooktime);
          }

          // //////////////////  移动侧直播频道单日收视率排行-TOP12 -  yidongLiveBroadcast
          if (date_type == "singleday") {
            let buckets1 =
              response.data.responses[2].aggregations.channel.buckets;
            let temp_1 = [];
            let temp_1_C1 = [];
            let temp_1_C2 = [];
            // let length_1 = buckets1.length;
            let length_1_all = buckets1.length;
            let length_1 = 12; // ▲▲▲ 固定Top12

            let i_1;
            // temp_0_C1.push("运营商");
            // temp_0_C2.push("今日");
            // Vue.set(temp_0_C1, 0, "运营商");
            // Vue.set(temp_0_C1, 0, "今日");
            temp_1_C1.push("运营商");
            temp_1_C2.push("今日");
            let all_count = 0.0;
            for (i_1 = 0; i_1 < length_1_all; i_1++) {
              all_count += parseFloat(buckets1[i_1].onlive_dur.value);
            }
            for (i_1 = 0; i_1 < length_1; i_1++) {
              temp_1_C1.push(buckets1[i_1].key);
              temp_1_C2.push(
                String(
                  parseInt(
                    (parseFloat(buckets1[i_1].onlive_dur.value) * 100) /
                      all_count
                  )
                )
              );
            }
            temp_1.push(temp_1_C1);
            temp_1.push(temp_1_C2);
            if (operator_type == "yd") {
              vm.yidongLiveBroadcast.data = []; // 初始化
              vm.yidongLiveBroadcast.data.push(temp_1);
              // console.log("~~~~~!!!");
              // console.log(buckets1);
              // console.log(vm.yidongLiveBroadcast.data);
            }
            if (operator_type == "lt") {
              vm.liantongLiveBroadcast.data = []; // 初始化
              vm.liantongLiveBroadcast.data.push(temp_1);
            }
            if (operator_type == "dx") {
              vm.dianxingLiveBroadcast.data = []; // 初始化
              vm.dianxingLiveBroadcast.data.push(temp_1);
            }
          }

          // console.log(vm.yidongLiveBroadcast);

          // ////////////////// 移动侧各栏目单日点击用户数（户） yidongtypedayusernumber
          // ////////////////// 移动侧各栏目单日点击次数（次）   yidongtypedayclicknumber
          // ▲▲ 固定栏目顺序：移动 联通 电信  不一样
          let yd_channnel_order = [
            "推荐",
            "热剧",
            "少儿",
            "电影",
            "电视",
            // "电视剧",
            "动漫",
            "游戏",
            "综艺",
            "体育",
            "纪实"
          ];
          let lt_channnel_order = [
            "推荐",
            "热剧",
            "少儿",
            "电影",
            "电视",
            // "电视剧",
            "应用",
            "动漫",
            "游戏",
            "综艺",
            "体育",
            "纪实"
          ];
          let dx_channnel_order = [
            "推荐",
            "热剧",
            "少儿",
            "电影",
            "电视",
            // "电视剧",
            "动漫",
            "游戏",
            "综艺",
            "体育",
            "纪实"
          ];

          if (date_type == "singleday") {
            let buckets2 = response.data.responses[3].aggregations.ti.buckets;
            let length_3_all = buckets2.length;
            let length_3_top;
            // if (length_3_all >= 12) {
            //   length_3_top = 12;
            // } else {
            //   length_3_top = length_3_all;
            // }
            length_3_top = length_3_all;
            let temp_3 = [];
            let temp_3_C1 = [];
            let temp_3_C2 = [];
            let temp_3B = [];
            let temp_3_C1B = [];
            let temp_3_C2B = [];
            let i_0;
            temp_3_C1.push("运营商");
            // temp_3_C2.push("平均");
            temp_3_C2.push("今日");
            temp_3_C1B.push("运营商");
            // temp_3_C2B.push("平均");
            temp_3_C2B.push("今日");
            function data_manage(i_0) {
              let t_leng2;
              let t_i2;

              if (operator_type == "yd") {
                t_leng2 = yd_channnel_order.length;
                for (t_i2 = 0; t_i2 < t_leng2; t_i2++) {
                  if (buckets2[i_0].key == yd_channnel_order[t_i2]) {
                    Vue.set(temp_3_C1, t_i2 + 1, buckets2[i_0].key);
                    Vue.set(
                      temp_3_C2,
                      t_i2 + 1,
                      String(
                        parseInt(parseFloat(buckets2[i_0].click_user_num.value))
                      )
                    );
                    Vue.set(temp_3_C1B, t_i2 + 1, buckets2[i_0].key);
                    Vue.set(
                      temp_3_C2B,
                      t_i2 + 1,
                      String(
                        parseInt(parseFloat(buckets2[i_0].click_freq.value))
                      )
                    );
                  }
                }
              }
              if (operator_type == "lt") {
                t_leng2 = lt_channnel_order.length;
                for (t_i2 = 0; t_i2 < t_leng2; t_i2++) {
                  if (buckets2[i_0].key == lt_channnel_order[t_i2]) {
                    Vue.set(temp_3_C1, t_i2 + 1, buckets2[i_0].key);
                    Vue.set(
                      temp_3_C2,
                      t_i2 + 1,
                      String(
                        parseInt(parseFloat(buckets2[i_0].click_user_num.value))
                      )
                    );
                    Vue.set(temp_3_C1B, t_i2 + 1, buckets2[i_0].key);
                    Vue.set(
                      temp_3_C2B,
                      t_i2 + 1,
                      String(
                        parseInt(parseFloat(buckets2[i_0].click_freq.value))
                      )
                    );
                  }
                }
              }
              if (operator_type == "dx") {
                t_leng2 = dx_channnel_order.length;
                for (t_i2 = 0; t_i2 < t_leng2; t_i2++) {
                  if (buckets2[i_0].key == dx_channnel_order[t_i2]) {
                    Vue.set(temp_3_C1, t_i2 + 1, buckets2[i_0].key);
                    Vue.set(
                      temp_3_C2,
                      t_i2 + 1,
                      String(
                        parseInt(parseFloat(buckets2[i_0].click_user_num.value))
                      )
                    );
                    Vue.set(temp_3_C1B, t_i2 + 1, buckets2[i_0].key);
                    Vue.set(
                      temp_3_C2B,
                      t_i2 + 1,
                      String(
                        parseInt(parseFloat(buckets2[i_0].click_freq.value))
                      )
                    );
                  }
                }
              }
            }
            for (i_0 = 0; i_0 < length_3_top; i_0++) {
              data_manage(i_0);

              // temp_3_C1.push(buckets2[i_0].key);
              // temp_3_C2.push(
              //   String(parseInt(parseFloat(buckets2[i_0].click_user_num.value)))
              // );
              // temp_3_C1B.push(buckets2[i_0].key);
              // temp_3_C2B.push(
              //   String(parseInt(parseFloat(buckets2[i_0].click_freq.value)))
              // );
            }
            temp_3.push(temp_3_C1);
            temp_3.push(temp_3_C2);
            temp_3B.push(temp_3_C1B);
            temp_3B.push(temp_3_C2B);

            if (operator_type == "yd") {
              vm.yidongtypedayusernumber.data = []; // 初始化
              vm.yidongtypedayclicknumber.data = []; // 初始化

              vm.yidongtypedayusernumber.data.push(temp_3);
              vm.yidongtypedayclicknumber.data.push(temp_3B);
            }
            if (operator_type == "lt") {
              vm.liantongtypedayusernumber.data = []; // 初始化
              vm.liantongtypedayclicknumber.data = []; // 初始化

              vm.liantongtypedayusernumber.data.push(temp_3);
              vm.liantongtypedayclicknumber.data.push(temp_3B);
            }
            if (operator_type == "dx") {
              vm.dianxingtypedayusernumber.data = []; // 初始化
              vm.dianxingtypedayclicknumber.data = []; // 初始化

              vm.dianxingtypedayusernumber.data.push(temp_3);
              vm.dianxingtypedayclicknumber.data.push(temp_3B);
            }
          }

          // ///////////////// yd lt dx 侧首页各推荐位/按钮单日点击次数
          // yidongAsideClickUser
          // liantongAsideClickUser
          // dianxingAsideClickUser
          if (date_type == "singleday") {
            console.log("~~~~~~~~~~~~~~~~~~▲▲▲▲▲▲▲▲▲▲▲▲");
            try {
              if (operator_type == "yd") {
                let buckets_4 =
                  response.data.responses[4].aggregations.ti.buckets;
                let length_4 = buckets_4.length;
                let i_4;
                let temp_data = [[["运营商"], ["今日"]]];
                for (let i_4 = 0; i_4 < length_4; i_4++) {
                  temp_data[0][0].push(buckets_4[i_4].key);
                  temp_data[0][1].push(buckets_4[i_4].click_freq.value);
                }
                vm.yidongAsideClickUser.data = temp_data;
                console.log("~~~~~~~~~~~~~~~~");
                console.log(temp_data);
              }
              if (operator_type == "lt") {
                let buckets_4 =
                  response.data.responses[4].aggregations.ti.buckets;
                let length_4 = buckets_4.length;
                let i_4;
                let temp_data = [[["运营商"], ["今日"]]];
                for (let i_4 = 0; i_4 < length_4; i_4++) {
                  temp_data[0][0].push(buckets_4[i_4].key);
                  temp_data[0][1].push(buckets_4[i_4].click_freq.value);
                }
                vm.liantongAsideClickUser.data = temp_data;
                console.log("~~~~~~~~~~~~~~~~");
                console.log(temp_data);
              }
              if (operator_type == "dx") {
                let buckets_4 =
                  response.data.responses[4].aggregations.ti.buckets;
                let length_4 = buckets_4.length;
                let i_4;
                let temp_data = [[["运营商"], ["今日"]]];
                for (let i_4 = 0; i_4 < length_4; i_4++) {
                  temp_data[0][0].push(buckets_4[i_4].key);
                  temp_data[0][1].push(buckets_4[i_4].click_freq.value);
                }
                vm.dianxingAsideClickUser.data = temp_data;
                console.log("~~~~~~~~~~~~~~~~");
                console.log(temp_data);
              }
            } catch (error) {
              console.log(error);
            }
          }
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    returnFloat(value) {
      // 保留两位小数
      var value = Math.round(parseFloat(value) * 100) / 100;
      var xsd = value.toString().split(".");
      if (xsd.length == 1) {
        value = value.toString() + ".00";
        return value;
      }
      if (xsd.length > 1) {
        if (xsd[1].length < 2) {
          value = value.toString() + "0";
        }
        return value;
      }
    }
  },

  data() {
    return {
      //移动侧各类型节目单日点播时长（千小时）
      yidongTypeLooktime: {
        title: "移动侧各类型节目单日点播时长（千小时）",
        id: "yidongTypeLooktime_UVDR",
        color: ["#82b65f", "#70a7d8"],
        data: [
          // [
          //   [
          //     "运营商",
          //     "热剧",
          //     "少儿",
          //     "电影",
          //     "动漫",
          //     "综艺",
          //     "游戏",
          //     "纪实",
          //     "体育",
          //     "音乐",
          //     "资讯"
          //   ],
          //   ["平均", 361.1, 282.3, 174.6, 39.8, 32.3, 27.4, 5.0, 1.9, 2.2, 1.1]
          // ],
          // [
          //   [
          //     "运营商",
          //     "热剧",
          //     "少儿",
          //     "电影",
          //     "动漫",
          //     "综艺",
          //     "游戏",
          //     "纪实",
          //     "体育",
          //     "音乐",
          //     "资讯"
          //   ],
          //   ["今日", 304.7, 221.4, 140.7, 23.2, 22.6, 15.8, 5.1, 1.5, 1.5, 1.3]
          // ]
        ]
      },

      //移动侧直播频道单日收视率排行-TOP12
      yidongLiveBroadcast: {
        title: "移动侧直播频道单日收视率排行-TOP12",
        id: "yidongLiveBroadcast_UVDR",
        color: ["#5b82c8"],
        data: [
          // [
          //   [
          //     "运营商",
          //     "CCTY-13 新闻",
          //     "贵州卫视",
          //     "贵州3 影视文艺频道",
          //     "CCTV-1 综合",
          //     "贵州-2 公共频道",
          //     "贵州-4 大众生活频道",
          //     "湖南卫视",
          //     "CCTY-12 社会与法",
          //     "贵州-7 经济频道",
          //     "CCTY-15 音乐",
          //     "CCTY-4 中文国际",
          //     "浙江卫视"
          //   ],
          //   ["平均", 5.7, 3.0, 1.8, 1.8, 1.5, 1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 0.8]
          // ]
        ]
      },

      //各栏目单日点击用户数(移动)
      yidongtypedayusernumber: {
        title: "移动侧各栏目单日点击用户数（户）",
        id: "yidongtypedayusernumber_UVDR",
        color: ["#5b82c8"],
        data: [
          // [
          //   [
          //     "运营商",
          //     "推荐",
          //     "热剧",
          //     "少儿",
          //     "电影",
          //     "电视",
          //     "搜索",
          //     "动漫",
          //     "分类",
          //     "游戏",
          //     "综艺",
          //     "体育",
          //     "纪实"
          //   ],
          //   [
          //     "平均",
          //     12.5,
          //     8.9,
          //     7.7,
          //     7.1,
          //     6.8,
          //     3.6,
          //     2.1,
          //     1.6,
          //     1.6,
          //     1.3,
          //     0.6,
          //     0.4
          //   ]
          // ]
        ]
      },

      //各栏目单日点击次数(移动)
      yidongtypedayclicknumber: {
        title: "移动侧各栏目单日点击次数（次）",
        id: "yidongtypedayclicknumber_UVDR",
        color: ["#5b82c8"],
        data: [
          // [
          //   [
          //     "运营商",
          //     "推荐",
          //     "热剧",
          //     "少儿",
          //     "电影",
          //     "电视",
          //     "搜索",
          //     "动漫",
          //     "分类",
          //     "游戏",
          //     "综艺",
          //     "体育",
          //     "纪实"
          //   ],
          //   [
          //     "平均",
          //     30.5,
          //     24.9,
          //     22.0,
          //     17.7,
          //     14.5,
          //     8.3,
          //     5.6,
          //     3.2,
          //     3.7,
          //     2.2,
          //     1.2,
          //     0.8
          //   ]
          // ]
        ]
      },

      //移动侧首页各推荐位/按钮单日点击次数（次）
      yidongAsideClickUser: {
        title: "移动侧首页各推荐位/按钮单日点击次数（次）",
        id: "yidongAsideClickUser_UVDR",
        color: ["#5b82c8"],
        data: [
          // [
          //   [
          //     "运营商",
          //     "导视框",
          //     "历史记录",
          //     "搜索",
          //     "看电视",
          //     "三屏",
          //     "二屏",
          //     "竖图三",
          //     "点我换一换",
          //     "VIP专区",
          //     "竖图二",
          //     "百姓关注",
          //     "竖图一",
          //     "横图"
          //   ],
          //   // [
          //   //   "平均",
          //   //   116394,
          //   //   63192,
          //   //   30301,
          //   //   22787,
          //   //   10611,
          //   //   9206,
          //   //   6353,
          //   //   6115,
          //   //   5501,
          //   //   4338,
          //   //   4114,
          //   //   3740,
          //   //   2557
          //   // ]
          //   [
          //     " ",
          //     116394,
          //     63192,
          //     30301,
          //     22787,
          //     10611,
          //     9206,
          //     6353,
          //     6115,
          //     5501,
          //     4338,
          //     4114,
          //     3740,
          //     2557
          //   ]
          // ]
        ]
      },

      // ------------------------------------------------------------------------
      //联通侧各类型节目单日点播时长（千小时）
      liantongTypeLooktime: {
        title: "联通侧各类型节目单日点播时长（千小时）",
        id: "liantongTypeLooktime_UVDR",
        color: ["#82b65f", "#70a7d8"],
        data: [
          // [
          //   [
          //     "运营商",
          //     "热剧",
          //     "少儿",
          //     "电影",
          //     "动漫",
          //     "综艺",
          //     "游戏",
          //     "纪实",
          //     "体育",
          //     "音乐",
          //     "资讯"
          //   ],
          //   ["平均", 122.7, 84.6, 50.2, 12.0, 14.4, 8.7, 1.8, 0.4, 0.5, 0.4]
          // ],
          // [
          //   [
          //     "运营商",
          //     "热剧",
          //     "少儿",
          //     "电影",
          //     "动漫",
          //     "综艺",
          //     "游戏",
          //     "纪实",
          //     "体育",
          //     "音乐",
          //     "资讯"
          //   ],
          //   ["今日", 104.1, 66.7, 40.4, 8.5, 8.5, 5.1, 1.8, 0.4, 0.4, 0.4]
          // ]
        ]
      },

      //联通侧直播频道单日收视率排行-TOP12
      liantongLiveBroadcast: {
        title: "联通侧直播频道单日收视率排行-TOP12",
        id: "liantongLiveBroadcast_UVDR",
        color: ["#5b82c8"],
        data: [
          // [
          //   [
          //     "运营商",
          //     "CCTY-13 新闻",
          //     "贵州卫视",
          //     "贵州3 影视文艺频道",
          //     "CCTV-1 综合",
          //     "贵州-2 公共频道",
          //     "贵州-4 大众生活频道",
          //     "湖南卫视",
          //     "CCTY-12 社会与法",
          //     "贵州-7 经济频道",
          //     "CCTY-15 音乐",
          //     "CCTY-4 中文国际",
          //     "浙江卫视"
          //   ],
          //   ["平均", 4.4, 3.5, 2.7, 2.0, 1.9, 1.8, 1.7, 1.2, 1.0, 0.9, 0.9, 0.7]
          // ]
        ]
      },

      //各栏目单日点击用户数(联通)
      liantongtypedayusernumber: {
        title: "联通侧各栏目单日点击用户数（户）",
        id: "liantongtypedayusernumber_UVDR",
        color: ["#5b82c8"],
        data: [
          // [
          //   [
          //     "运营商",
          //     "推荐",
          //     "热剧",
          //     "少儿",
          //     "电影",
          //     "电视",
          //     "搜索",
          //     "动漫",
          //     "分类",
          //     "游戏",
          //     "综艺",
          //     "体育",
          //     "纪实"
          //   ],
          //   ["平均", 6.2, 3.2, 3.1, 2.7, 2.6, 1.3, 0.7, 0.7, 0.6, 0.5, 0.3, 0.2]
          // ]
        ]
      },

      //各栏目单日点击次数(联通)
      liantongtypedayclicknumber: {
        title: "联通侧直各栏目单日点击次数（次）",
        id: "liantongtypedayclicknumber_UVDR",
        color: ["#5b82c8"],
        data: [
          // [
          //   [
          //     "运营商",
          //     "推荐",
          //     "热剧",
          //     "少儿",
          //     "电影",
          //     "电视",
          //     "搜索",
          //     "动漫",
          //     "分类",
          //     "游戏",
          //     "综艺",
          //     "体育",
          //     "纪实"
          //   ],
          //   [
          //     "平均",
          //     14.9,
          //     9.0,
          //     7.1,
          //     5.8,
          //     5.4,
          //     2.9,
          //     2.2,
          //     1.5,
          //     1.5,
          //     0.9,
          //     0.4,
          //     0.3
          //   ]
          // ]
        ]
      },

      //联通侧首页各推荐位/按钮单日点击次数（次）
      liantongAsideClickUser: {
        title: "联通侧首页各推荐位/按钮单日点击次数（次）",
        id: "liantongAsideClickUser_UVDR",
        color: ["#5b82c8"],
        data: [
          [
            [
              "运营商",
              "直播频道",
              "最近观看",
              "收藏",
              "二屏",
              "三屏",
              "沃家应用",
              "专题",
              "沃家影视",
              "横图二",
              "横图一",
              "VIP限时免费",
              "竖图",
              "百家关注"
            ],
            // [
            //   "平均",
            //   58914,
            //   36553,
            //   14192,
            //   12137,
            //   4657,
            //   3532,
            //   2595,
            //   2539,
            //   2137,
            //   1821,
            //   1741,
            //   1448,
            //   989
            // ]
            [
              " ",
              58914,
              36553,
              14192,
              12137,
              4657,
              3532,
              2595,
              2539,
              2137,
              1821,
              1741,
              1448,
              989
            ]
          ]
        ]
      },

      // ------------------------------------------------------------------------
      //电信侧各类型节目单日点播时长（千小时）
      dianxingTypeLooktime: {
        title: "电信侧各类型节目单日点播时长（千小时）",
        id: "dianxingTypeLooktime_UVDR",
        color: ["#82b65f", "#70a7d8"],
        data: [
          // [
          //   [
          //     "运营商",
          //     "热剧",
          //     "少儿",
          //     "电影",
          //     "动漫",
          //     "综艺",
          //     "游戏",
          //     "纪实",
          //     "体育",
          //     "音乐",
          //     "资讯"
          //   ],
          //   ["平均", 92.7, 56.5, 38.5, 11.3, 7.5, 6.3, 1.3, 0.7, 0.6, 0.2]
          // ],
          // [
          //   [
          //     "运营商",
          //     "热剧",
          //     "少儿",
          //     "电影",
          //     "动漫",
          //     "综艺",
          //     "游戏",
          //     "纪实",
          //     "体育",
          //     "音乐",
          //     "资讯"
          //   ],
          //   ["今日", 79.7, 41.0, 32.7, 8.2, 5.6, 3.8, 1.6, 0.8, 0.6, 0.3]
          // ]
        ]
      },

      //电信侧直播频道单日收视率排行-TOP12
      dianxingLiveBroadcast: {
        title: "电信侧直播频道单日收视率排行-TOP12",
        id: "dianxingLiveBroadcast_UVDR",
        color: ["#5b82c8"],
        data: [
          // [
          //   [
          //     "运营商",
          //     "CCTY-13 新闻",
          //     "贵州卫视",
          //     "贵州3 影视文艺频道",
          //     "CCTV-1 综合",
          //     "贵州-2 公共频道",
          //     "贵州-4 大众生活频道",
          //     "湖南卫视",
          //     "CCTY-12 社会与法",
          //     "贵州-7 经济频道",
          //     "CCTY-15 音乐",
          //     "CCTY-4 中文国际",
          //     "浙江卫视"
          //   ],
          //   ["平均", 5.0, 4.5, 2.5, 1.8, 1.7, 1.5, 1.4, 1.3, 1.3, 1.3, 1.2, 1.0]
          // ]
        ]
      },

      //各栏目单日点击用户数(联通)
      dianxingtypedayusernumber: {
        title: "电信侧各栏目单日点击用户数（户）",
        id: "dianxingtypedayusernumber_UVDR",
        color: ["#5b82c8"],
        data: [
          // [
          //   [
          //     "运营商",
          //     "推荐",
          //     "热剧",
          //     "少儿",
          //     "电影",
          //     "电视",
          //     "搜索",
          //     "动漫",
          //     "分类",
          //     "游戏",
          //     "综艺",
          //     "体育"
          //   ],
          //   [
          //     "平均",
          //     30480,
          //     18786,
          //     18380,
          //     16558,
          //     15172,
          //     9547,
          //     5892,
          //     5373,
          //     3556,
          //     2735,
          //     2396
          //   ]
          // ]
        ]
      },

      //各栏目单日点击次数(联通)
      dianxingtypedayclicknumber: {
        title: "电信侧各栏目单日点击次数（次）",
        id: "dianxingtypedayclicknumber_UVDR",
        color: ["#5b82c8"],
        data: [
          // [
          //   [
          //     "运营商",
          //     "推荐",
          //     "热剧",
          //     "少儿",
          //     "电影",
          //     "电视",
          //     "搜索",
          //     "动漫",
          //     "分类",
          //     "游戏",
          //     "综艺",
          //     "体育"
          //   ],
          //   [
          //     "平均",
          //     75451,
          //     61027,
          //     44943,
          //     41436,
          //     37445,
          //     24323,
          //     14882,
          //     13053,
          //     12272,
          //     4569,
          //     4225
          //   ]
          // ]
        ]
      },

      //电信侧首页各推荐位/按钮单日点击次数（次）
      dianxingAsideClickUser: {
        title: "电信侧首页各推荐位/按钮单日点击次数（次）",
        id: "dianxingAsideClickUser_UVDR",
        color: ["#5b82c8"],
        data: [
          // [
          //   [
          //     "运营商",
          //     "最近观看",
          //     "播放小窗口",
          //     "文字一",
          //     "搜索",
          //     "看电视",
          //     "三屏",
          //     "文字二",
          //     "二屏竖图",
          //     "文字五",
          //     "文字三",
          //     "百姓关注",
          //     "天翼优品",
          //     "VIP限时免费",
          //     "文字四",
          //     "二屏横图",
          //     "天翼",
          //     "家庭云"
          //   ],
          //   // [
          //   //   "平均",
          //   //   16738,
          //   //   13216,
          //   //   12203,
          //   //   8603,
          //   //   7118,
          //   //   3142,
          //   //   2217,
          //   //   1557,
          //   //   1221,
          //   //   1184,
          //   //   966,
          //   //   929,
          //   //   916,
          //   //   886,
          //   //   609,
          //   //   188,
          //   //   160
          //   // ]
          //   [
          //     " ",
          //     16738,
          //     13216,
          //     12203,
          //     8603,
          //     7118,
          //     3142,
          //     2217,
          //     1557,
          //     1221,
          //     1184,
          //     966,
          //     929,
          //     916,
          //     886,
          //     609,
          //     188,
          //     160
          //   ]
          // ]
        ]
      }
    };
  },
  components: {
    dayREportBar,
    dayREportBarSingleLv,
    dayREportBarSingleVertical,
    dayREportBarSingle
  }
};
</script>
<style scoped>
.viewing_behavior_report {
  /* height: 500px; */
  /* margin: 24px 0px; */
  margin: 0 0 14px 0;
}
.rigesteduserBody {
  height: 400px;
}
.bottomborder {
  border-bottom: 1px dashed #f0f0f0;
}
</style>
<template>
  <div class="height_auto">
    <!-- 用户注册人数开始 -->
    <el-row class="viewing_behavior_report new_add_user_percent back_white marginbottom_14">
      <el-row class="chart_body back_white">
        <el-col class="height_auto periodic_report_title" :span="24">G+TV用户活跃发展日报表</el-col>
      </el-row>
      <el-row>
        <el-row class="model_title">
          <span class="title_border_left"></span>在册用户数
        </el-row>
        <el-row class="rigesteduserBody">
          <el-col class="height_auto" :span="24">
            <numberOfRegisteredUsers :fillinData="registeredUsers"></numberOfRegisteredUsers>
          </el-col>
        </el-row>
      </el-row>
    </el-row>
    <!-- 用户注册人数结束 -->

    <!-- 数据专项开始 -->
    <el-row class="new_add_user_percent back_white marginbottom_14">
      <el-row class="model_title">
        <span class="title_border_left"></span>数据专项
      </el-row>
      <el-row class="rigesteduserBody bottomborder">
        <el-col class="height_auto" :span="12">
          <dayREportBar :fillinData="newAddUserNumber"></dayREportBar>
        </el-col>
        <el-col class="height_auto" :span="12">
          <dayREportBarLv :fillinData="turnOnRate"></dayREportBarLv>
        </el-col>
      </el-row>
      <el-row class="rigesteduserBody bottomborder">
        <el-col class="height_auto" :span="12">
          <dayREportBar :fillinData="outLookTime"></dayREportBar>
        </el-col>
        <el-col class="height_auto" :span="12">
          <dayREportBar :fillinData="dayLooktime"></dayREportBar>
        </el-col>
      </el-row>
    </el-row>
    <!-- 数据专项结束 -->

    <!-- 各类型节目点播时长开始 -->
    <el-row class="new_add_user_percent back_white marginbottom_14">
      <el-row class="model_title">
        <span class="title_border_left"></span>各类型节目点播时长
      </el-row>
      <el-row class="rigesteduserBody bottomborder">
        <el-col class="height_auto" :span="24">
          <dayREportBar :fillinData="typeLooktime"></dayREportBar>
        </el-col>
      </el-row>
    </el-row>
    <!-- 各类型节目点播时长结束 -->
  </div>
</template>
<script>
import numberOfRegisteredUsers from "@/views/backcoms/G_TVUserActiveDayReport/numberOfRegisteredUsers"; //在册用户数
import dayREportBar from "@/views/backcoms/G_TVUserActiveDayReport/dayREport_bar"; //用户数统计柱状组件
import dayREportBarLv from "@/views/backcoms/G_TVUserActiveDayReport/dayREport_bar_lv"; //用户数统计柱状组件带百分比

import { mapGetters } from "vuex";
import { liveUsers_daliyReport } from "@/api/api_main";
import Vue from "vue";
import { commonTools } from "@/utils/test";

export default {
  name: "G_TVUserActiveDayReport", //G+TV用户活跃发展日报表
  components: {
    numberOfRegisteredUsers,
    dayREportBar,
    dayREportBarLv
  },
  computed: {
    ...mapGetters(["PR_operator", "PR_day", "PR_Report_index"])
  },
  watch: {
    PR_operator(newValue, oldValue) {
      let vm = this;
      vm.liveUsers_daliyReport("yd"); //移动数据
      vm.liveUsers_daliyReport("lt"); //联通数据
      vm.liveUsers_daliyReport("dx"); //电信数据
      vm.api_data_set(); //混合数据
      // excel 处理
      vm.Excel_data_manage();
    },
    PR_day(newValue, oldValue) {
      let vm = this;
      vm.liveUsers_daliyReport("yd"); //移动数据
      vm.liveUsers_daliyReport("lt"); //联通数据
      vm.liveUsers_daliyReport("dx"); //电信数据
      vm.api_data_set(); //混合数据
      // excel 处理
      vm.Excel_data_manage();
    }
  },
  data() {
    return {
      //excel下载总数据
      activeDayReportTotalData: [],

      //在册用户数
      registeredUsers: {
        title: "各运营商在册用户数（户）",
        id: "registeredUsers_UADR",
        color: ["#4474c4", "#ed7d31", "#a5a5a5"],
        data: [["运营商", "移动", "联通", "电信"], ["占比", , ,]]
      },

      //新增用户数
      newAddUserNumber: {
        title: "各运营商新增在册用户数（户）",
        id: "newAddUserNumber_UADR",
        color: ["#82b65f", "#70a7d8"],
        data: [
          [["运营商", "移动", "联通", "电信"], ["平均"]],
          [["运营商", "移动", "联通", "电信"], ["今日"]]
        ]
      },

      //开机率
      turnOnRate: {
        title: "开机率（%）",
        id: "turnOnRate_UADR",
        color: ["#82b65f", "#70a7d8"],
        data: [
          [["运营商", "移动", "联通", "电信"], ["平均"]],
          [["运营商", "移动", "联通", "电信"], ["今日"]]
        ]
      },

      //户均观看时长（小时）
      outLookTime: {
        title: "户均观看时长（小时）",
        id: "outLookTime_UADR",
        color: ["#82b65f", "#70a7d8"],
        data: [
          [["运营商", "移动", "联通", "电信"], ["平均"]],
          [["运营商", "移动", "联通", "电信"], ["今日"]]
        ]
      },

      //三大基础功能单日观看时长（万小时）
      dayLooktime: {
        title: "三大基础功能单日观看时长（万小时）",
        id: "dayLooktime_UADR",
        color: ["#82b65f", "#70a7d8"],
        data: [
          [["播放方式", "回看", "点播", "直播"], ["平均"]],
          [["播放方式", "回看", "点播", "直播"], ["今日"]]
        ]
      },

      //各类型节目单日点播时长（千小时）
      typeLooktime: {
        title: "各类型节目单日点播时长（千小时）",
        id: "typeLooktime_UADR",
        color: ["#82b65f", "#70a7d8"],
        data: [
          [
            [
              "运营商",
              "热剧",
              "少儿",
              "电影",
              "动漫",
              "综艺",
              "游戏",
              "纪实",
              "体育",
              "音乐",
              "资讯"
            ],
            ["平均"]
          ],
          [
            [
              "运营商",
              "热剧",
              "少儿",
              "电影",
              "动漫",
              "综艺",
              "游戏",
              "纪实",
              "体育",
              "音乐",
              "资讯"
            ],
            ["今日"]
          ]
        ]
      }
    };
  },
  mounted() {
    let vm = this;
    if (vm.PR_day == null || vm.PR_day == undefined || vm.PR_day == "") {
      return;
    }
    vm.liveUsers_daliyReport("yd"); //移动数据
    vm.liveUsers_daliyReport("lt"); //联通数据
    vm.liveUsers_daliyReport("dx"); //电信数据
    vm.api_data_set(); //混合数据
    // excel 处理
    vm.Excel_data_manage();
  },
  methods: {
    Excel_data_manage() {
      console.log("Excel_data_manage - 1");
      let vm = this;
      setTimeout(function() {
        if (vm.PR_Report_index == 1) {
          let temp_titleArr = [];
          let temp_DataArr = [];
          // /// 临时
          temp_titleArr.push(["title1"]);
          temp_titleArr.push(["title2"]);
          temp_titleArr.push(["title3"]);

          temp_DataArr.push([
            ["运营商", "移动", "联通", "电信1111111111"],
            ["平均", 1, 2, 3]
          ]);
          temp_DataArr.push([
            ["运营商", "移动", "联通", "电信", "测试22"],
            ["平均", 1, 2, 3, 4]
          ]);
          temp_DataArr.push([
            ["运营商", "移动", "联通", "电信", "测试33"],
            ["平均", 1, 2, 3, 4]
          ]);
          // ///

          // /// 实际
          // try {
          //   // setTimeout(() => {
          //     // title_arr = [["各运营商在册用户数（户）"],["各运营商新增在册用户数（户）"],[""]];
          //     // data_arr = [
          //     //   [["运营商", "移动", "联通", "电信"], ["占比", , ,]]
          //     //   [["运营商", "移动", "联通", "电信"], ["平均"]],
          //     //   [["运营商", "移动", "联通", "电信"], ["平均"]]
          //     // ];
          //     let title_arr = [];
          //     let data_arr = []; //activeDayReportTotalData
          //     title_arr.push(
          //       [vm.registeredUsers.title],
          //       [vm.newAddUserNumber.title],
          //       [""],
          //       [vm.turnOnRate.title],
          //       [""],
          //       [vm.outLookTime.title],
          //       [""],
          //       [vm.dayLooktime.title],
          //       [""][vm.typeLooktime.title],
          //       [""]
          //     );
          //     data_arr.push(
          //       vm.registeredUsers.data, //各运营商在册用户数（户）
          //       vm.newAddUserNumber.data[0], //各运营商新增在册用户数（户）
          //       vm.newAddUserNumber.data[1],
          //       vm.turnOnRate.data[0], //开机率（%）
          //       vm.turnOnRate.data[1],
          //       vm.outLookTime.data[0], //户均观看时长（小时）
          //       vm.outLookTime.data[1],
          //       vm.dayLooktime.data[0], //三大基础功能单日观看时长（万小时）
          //       vm.dayLooktime.data[1],
          //       vm.typeLooktime.data[0], //各类型节目单日点播时长（千小时）
          //       vm.typeLooktime.data[1]
          //     );
          //   // }, 3000);
          //   console.log("日报excel下载数据~~~~~", title_arr, data_arr);
          // } catch (error) {
          //   console.log(error);
          // }
          // ///
          vm.$store
            .dispatch("set_PR_Excel_titleArr", temp_titleArr)
            .then(function(response_title) {
              console.log(response_title);
              vm.$store
                .dispatch("set_PR_Excel_dataArr", temp_DataArr)
                .then(function(response_dataArr) {
                  console.log(response_dataArr);
                  // 设置excel按钮下载状态 - 开
                  vm.$store
                    .dispatch("set_PR_excel_ifCanDownload", true)
                    .then(function(response_dataArr) {
                      console.log("下载开");
                    })
                    .catch(function(error) {
                      console.info(error);
                    });
                })
                .catch(function(error) {
                  console.info(error);
                });
            })
            .catch(function(error) {
              console.info(error);
            });
        }
      }, 3000);
    },
    //G+TV用户活跃发展日报表（今日数据）
    liveUsers_daliyReport(type) {
      let vm = this;
      if (vm.PR_day == null || vm.PR_day == undefined || vm.PR_day == "") {
        return;
      }
      let ttt; //运营商
      if (type == "yd") {
        ttt = "移动";
      }
      if (type == "lt") {
        ttt = "联通";
      }
      if (type == "dx") {
        ttt = "电信";
      }
      // console.log("~~~~~~!!vm.PR_day");
      // console.log(vm.PR_day);
      // let start = "2019-06-03";
      // let end = "2019-06-03";
      let start = vm.PR_day.start;
      let end = vm.PR_day.end;
      // if (vm.PR_day != null) {
      //   start = vm.PR_day.start;
      //   end = vm.PR_day.end;
      // }
      let temp = {
        operator: String([ttt]),
        start: start,
        end: start
      };

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("operator", temp.operator);
      formData.append("start", temp.start);
      formData.append("end", temp.end);

      // let average_data_date = '2019-06-08'
      // let average_data_start = vm.$commonTools.getBeforeDate(7); //获取当前日期的前7天的日期
      // let average_data_end = vm.$commonTools.getBeforeDate(1); //获取当前日期的前1天的日期
      let temp_b7d = commonTools.currentDay_7daysAgoRange(start);
      let average_data_start = temp_b7d.start;
      let average_data_end = temp_b7d.end;

      let average_temp = {
        operator: String([ttt]),
        start: average_data_start,
        end: average_data_end
      };
      // console.log(average_temp)
      var average_data_formData = new FormData();
      var average_data_formData = new window.FormData();
      average_data_formData.append("operator", average_temp.operator);
      average_data_formData.append("start", average_temp.start);
      average_data_formData.append("end", average_temp.end);

      // console.log("今日temp", temp)
      // console.log("平均average_temp----", average_temp)

      //G+TV用户活跃发展日报表api对接(单个运营商数据)  今日
      liveUsers_daliyReport(formData)
        .then(response => {
          console.log("今日数据~~~~~~~", ttt);
          console.log(response.data);
          try {
            let register_num =
              response.data.responses[0].aggregations.register_num.value; //在册用户数
            let new_num = response.data.responses[0].aggregations.new_num.value; //新增在册用户数（今日）
            let open_num =
              response.data.responses[0].aggregations.open_num.value; //开机用户
            // let open_rate1 = (open_num / register_num) * 100 //开机率
            let open_rate = this.returnFloat((open_num / register_num) * 100); //开机率
            // let watch_freq_family = this.returnFloat(response.data.responses[2].aggregations.watch_freq_family.value);
            let watch_dur =
              response.data.responses[2].aggregations.watch_dur.value;
            let watch_user_num =
              response.data.responses[2].aggregations.watch_user_num.value;
            let watch_freq_family = (watch_dur / watch_user_num).toFixed(2);
            //户均观看时长
            // console.log("在册用户数（今日）", ttt, register_num)
            // console.log("新增在册用户数（今日）", ttt, new_num)
            // console.log("开机用户数（今日）", ttt, open_num)
            // console.log("开机率（今日）", ttt, open_rate)
            // console.log("户均观看时长（今日）", ttt, watch_freq_family)

            // console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

            //移动
            if (type == "yd") {
              Vue.set(vm.registeredUsers.data[1], 1, register_num); //移动在册用户数
              Vue.set(vm.newAddUserNumber.data[1][1], 1, new_num); //移动新增在册用户数（今日）
              Vue.set(vm.turnOnRate.data[1][1], 1, open_rate); //移动开机率（今日）
              Vue.set(vm.outLookTime.data[1][1], 1, watch_freq_family); //移动户均观看时长
            }

            //联通
            if (type == "lt") {
              Vue.set(vm.registeredUsers.data[1], 2, register_num); //联通在册用户数
              Vue.set(vm.newAddUserNumber.data[1][1], 2, new_num); //联通新增在册用户数（今日）
              Vue.set(vm.turnOnRate.data[1][1], 2, open_rate); //联通开机率（今日）
              Vue.set(vm.outLookTime.data[1][1], 2, watch_freq_family); //联通户均观看时长
            }

            //电信
            if (type == "dx") {
              Vue.set(vm.registeredUsers.data[1], 3, register_num); //电信在册用户数
              Vue.set(vm.newAddUserNumber.data[1][1], 3, new_num); //电信新增在册用户数（今日）
              Vue.set(vm.turnOnRate.data[1][1], 3, open_rate); //电信开机率（今日）
              Vue.set(vm.outLookTime.data[1][1], 3, watch_freq_family); //电信户均观看时长
            }
            // console.log("vm.outLookTime.data-------", vm.outLookTime.data)
          } catch (error) {
            console.log(error);
          }
        })
        .catch(error => {
          console.log("G+TV用户活跃发展日报表", error);
        });

      //平均数据的获取 （当前日期前7天）
      liveUsers_daliyReport(average_data_formData)
        .then(response => {
          console.log("前7天平均数据为", ttt, response.data);
          try {
            let average_register_num =
              response.data.responses[1].aggregations.register_num.buckets[0]
                .register_num.value; //在册用户数
            let average_new_num = Math.floor(
              response.data.responses[1].aggregations.new_num.value / 7
            ); //新增在册用户数（平均）
            let average_open_num =
              response.data.responses[1].aggregations.open_num.value; //开机用户
            let average_open_rate = this.returnFloat(
              ((average_open_num / average_register_num) * 100) / 7
            ); //开机率

            //let average_watch_freq_family = this.returnFloat(response.data.responses[3].aggregations.watch_freq_family.value / 7); //户均观看时长
            let average_watch_dur =
              response.data.responses[3].aggregations.watch_dur.value;
            let average_watch_user_num =
              response.data.responses[3].aggregations.watch_user_num.value;
            let average_watch_freq_family = (
              average_watch_dur /
              average_watch_user_num /
              7
            ).toFixed(2); //户均观看时长

            // console.log("在册用户数average_register_num（平均）", ttt, average_register_num)
            // console.log("新增在册用户数average_new_num（平均）", ttt, average_new_num);
            // console.log("开机用户数average_open_num（平均）", ttt, average_open_num)
            // console.log("开机率average_open_rate（平均）", ttt, average_open_rate)
            // console.log("户均观看时长average_watch_freq_family（平均）", ttt, average_watch_freq_family)

            // console.log("-------------------------------")

            //移动
            if (type == "yd") {
              Vue.set(vm.newAddUserNumber.data[0][1], 1, average_new_num); //移动新增在册用户数（平均）
              Vue.set(vm.turnOnRate.data[0][1], 1, average_open_rate); //移动开机率（平均）
              Vue.set(vm.outLookTime.data[0][1], 1, average_watch_freq_family); //移动户均观看时长（平均）
            }

            //联通
            if (type == "lt") {
              Vue.set(vm.newAddUserNumber.data[0][1], 2, average_new_num); //联通新增在册用户数（平均）
              Vue.set(vm.turnOnRate.data[0][1], 2, average_open_rate); //联通开机率（平均）
              Vue.set(vm.outLookTime.data[0][1], 2, average_watch_freq_family); //联通户均观看时长（平均）
            }

            //电信
            if (type == "dx") {
              Vue.set(vm.newAddUserNumber.data[0][1], 3, average_new_num); //电信新增在册用户数（平均）
              Vue.set(vm.turnOnRate.data[0][1], 3, average_open_rate); //电信开机率（平均）
              Vue.set(vm.outLookTime.data[0][1], 3, average_watch_freq_family); //电信户均观看时长（平均）
            }
          } catch (error) {
            console.log(error);
          }
        })
        .catch(error => {
          console.log("G+TV用户活跃发展日报表", error);
        });
    },

    //混合运营商数据
    api_data_set() {
      let vm = this;
      if (vm.PR_day == null || vm.PR_day == undefined || vm.PR_day == "") {
        return;
      }

      let ttt;
      if (vm.PR_operator == null || vm.PR_operator.length == 0) {
        ttt = ["移动", "联通", "电信"];
      } else {
        ttt = this.PR_operator; //运营商
      }
      // let start = "2019-06-03";
      // let end = "2019-06-03";
      let start = vm.PR_day.start;
      let end = vm.PR_day.end;

      // if (vm.PR_day != null) {
      //   start = vm.PR_day.start;
      //   end = vm.PR_day.end;
      // }

      let temp = {
        operator: String([ttt]),
        start: start,
        end: start
      };
      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("operator", temp.operator);
      formData.append("start", temp.start);
      formData.append("end", temp.end);

      // let average_data_date = '2019-06-08'
      // let average_data_start = vm.$commonTools.getBeforeDate(7); //获取当前日期的前7天的日期
      // let average_data_end = vm.$commonTools.getBeforeDate(1); //获取当前日期的前1天的日期
      let temp_b7d = commonTools.currentDay_7daysAgoRange(start);
      let average_data_start = temp_b7d.start;
      let average_data_end = temp_b7d.end;

      let average_temp = {
        operator: String([ttt]),
        start: average_data_start,
        end: average_data_end
      };

      // console.log(average_temp)
      var average_data_formData = new FormData();
      var average_data_formData = new window.FormData();
      average_data_formData.append("operator", average_temp.operator);
      average_data_formData.append("start", average_temp.start);
      average_data_formData.append("end", average_temp.end);

      // console.log("选择运营商为：", ttt)

      //基础功能单日观看时长,各类型节目点播时长数据（今日）
      liveUsers_daliyReport(formData)
        .then(response => {
          // console.log("用户选择的条件筛选结果为：******")
          // console.log(response.data)
          let play_mode_buckets =
            response.data.responses[4].aggregations.play_mode.buckets; //基础功能观看时长（今日）
          let program_type_dur_order =
            response.data.responses[6].aggregations.program_type.buckets; //各类型节目点播时长（今日）

          // console.log("program_type_dur_order", program_type_dur_order)
          try {
            //循环遍历播放数据，取出回看，点播，直播数据
            play_mode_buckets.forEach((value, index) => {
              console.log(index, value);
              if (value.key == "回看") {
                Vue.set(
                  vm.dayLooktime.data[1][1],
                  1,
                  vm.returnFloat(value.watch_dur.value / 10000 / 3600)
                ); //回看数据
              } else if (value.key == "点播") {
                Vue.set(
                  vm.dayLooktime.data[1][1],
                  2,
                  vm.returnFloat(value.watch_dur.value / 10000 / 3600)
                ); //点播数据
              } else if (value.key == "直播") {
                Vue.set(
                  vm.dayLooktime.data[1][1],
                  3,
                  vm.returnFloat(value.watch_dur.value / 10000 / 3600)
                ); //直播数据
              }
            });
          } catch (error) {
            console.log(error);
          }

          try {
            //循环遍历各类型节目点播时长，取出相应数据
            program_type_dur_order.forEach((value, index) => {
              // console.log(index, value)
              switch (value.key) {
                case "热剧":
                  Vue.set(
                    vm.typeLooktime.data[1][1],
                    1,
                    vm.returnFloat(value.demand_dur.value / 1000 / 3600)
                  );
                  break;
                case "少儿":
                  Vue.set(
                    vm.typeLooktime.data[1][1],
                    2,
                    vm.returnFloat(value.demand_dur.value / 1000 / 3600)
                  );
                  break;
                case "电影":
                  Vue.set(
                    vm.typeLooktime.data[1][1],
                    3,
                    vm.returnFloat(value.demand_dur.value / 1000 / 3600)
                  );
                  break;
                case "动漫":
                  Vue.set(
                    vm.typeLooktime.data[1][1],
                    4,
                    vm.returnFloat(value.demand_dur.value / 1000 / 3600)
                  );
                  break;
                case "综艺":
                  Vue.set(
                    vm.typeLooktime.data[1][1],
                    5,
                    vm.returnFloat(value.demand_dur.value / 1000 / 3600)
                  );
                  break;
                case "游戏":
                  Vue.set(
                    vm.typeLooktime.data[1][1],
                    6,
                    vm.returnFloat(value.demand_dur.value / 1000 / 3600)
                  );
                  break;
                case "纪实":
                  Vue.set(
                    vm.typeLooktime.data[1][1],
                    7,
                    vm.returnFloat(value.demand_dur.value / 1000 / 3600)
                  );
                  break;
                case "体育":
                  Vue.set(
                    vm.typeLooktime.data[1][1],
                    8,
                    vm.returnFloat(value.demand_dur.value / 1000 / 3600)
                  );
                  break;
                case "音乐":
                  Vue.set(
                    vm.typeLooktime.data[1][1],
                    9,
                    vm.returnFloat(value.demand_dur.value / 1000 / 3600)
                  );
                  break;
                case "资讯":
                  Vue.set(
                    vm.typeLooktime.data[1][1],
                    10,
                    vm.returnFloat(value.demand_dur.value / 1000 / 3600)
                  );
                  break;
                default:
                  break;
              }
            });
          } catch (error) {
            console.log(error);
          }
        })
        .catch(error => {
          console.log("G+TV用户活跃发展日报表", error);
        });

      //基础功能单日观看时长,各类型节目点播时长数据（平均）

      liveUsers_daliyReport(average_data_formData)
        .then(response => {
          // console.log("平均数据", ttt)
          // console.log(response.data)
          let average_play_mode_buckets =
            response.data.responses[5].aggregations.play_mode.buckets; //基础功能观看时长（今日）
          let average_program_type_dur_order =
            response.data.responses[7].aggregations.program_type.buckets; //各类型节目点播时长（今日）

          // console.log("program_type_dur_order", program_type_dur_order)

          try {
            //循环遍历播放数据，取出回看，点播，直播数据
            average_play_mode_buckets.forEach((value, index) => {
              // console.log(index, value)
              if (value.key == "回看") {
                Vue.set(
                  vm.dayLooktime.data[0][1],
                  1,
                  vm.returnFloat(value.watch_dur.value / 10000 / 3600 / 7)
                ); //回看数据
              } else if (value.key == "点播") {
                Vue.set(
                  vm.dayLooktime.data[0][1],
                  2,
                  vm.returnFloat(value.watch_dur.value / 10000 / 3600 / 7)
                ); //点播数据
              } else if (value.key == "直播") {
                Vue.set(
                  vm.dayLooktime.data[0][1],
                  3,
                  vm.returnFloat(value.watch_dur.value / 10000 / 3600 / 7)
                ); //直播数据
              }
            });
          } catch (error) {
            console.log(error);
          }

          try {
            //循环遍历各类型节目点播时长，取出相应数据
            average_program_type_dur_order.forEach((value, index) => {
              // console.log(index, value)
              switch (value.key) {
                case "热剧":
                  Vue.set(
                    vm.typeLooktime.data[0][1],
                    1,
                    vm.returnFloat(value.demand_dur.value / 1000 / 3600 / 7)
                  );
                  break;
                case "少儿":
                  Vue.set(
                    vm.typeLooktime.data[0][1],
                    2,
                    vm.returnFloat(value.demand_dur.value / 1000 / 3600 / 7)
                  );
                  break;
                case "电影":
                  Vue.set(
                    vm.typeLooktime.data[0][1],
                    3,
                    vm.returnFloat(value.demand_dur.value / 1000 / 3600 / 7)
                  );
                  break;
                case "动漫":
                  Vue.set(
                    vm.typeLooktime.data[0][1],
                    4,
                    vm.returnFloat(value.demand_dur.value / 1000 / 3600 / 7)
                  );
                  break;
                case "综艺":
                  Vue.set(
                    vm.typeLooktime.data[0][1],
                    5,
                    vm.returnFloat(value.demand_dur.value / 1000 / 3600 / 7)
                  );
                  break;
                case "游戏":
                  Vue.set(
                    vm.typeLooktime.data[0][1],
                    6,
                    vm.returnFloat(value.demand_dur.value / 1000 / 3600 / 7)
                  );
                  break;
                case "纪实":
                  Vue.set(
                    vm.typeLooktime.data[0][1],
                    7,
                    vm.returnFloat(value.demand_dur.value / 1000 / 3600 / 7)
                  );
                  break;
                case "体育":
                  Vue.set(
                    vm.typeLooktime.data[0][1],
                    8,
                    vm.returnFloat(value.demand_dur.value / 1000 / 3600 / 7)
                  );
                  break;
                case "音乐":
                  Vue.set(
                    vm.typeLooktime.data[0][1],
                    9,
                    vm.returnFloat(value.demand_dur.value / 1000 / 3600 / 7)
                  );
                  break;
                case "资讯":
                  Vue.set(
                    vm.typeLooktime.data[0][1],
                    10,
                    vm.returnFloat(value.demand_dur.value / 1000 / 3600 / 7)
                  );
                  break;
                default:
                  break;
              }
            });
          } catch (error) {
            console.log(error);
          }
        })
        .catch(error => {
          console.log("G+TV用户活跃发展日报表", error);
        });
    },

    //保留两位小数
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
  }
};
</script>
<style scoped>
.viewing_behavior_report {
  margin: 14px 0px;
}
.rigesteduserBody {
  height: 400px;
}
.bottomborder {
  border-bottom: 1px dashed #f0f0f0;
}
.new_add_user_percent:last-child {
  margin-bottom: 70px;
}
</style>
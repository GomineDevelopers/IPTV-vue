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
import Vue from 'vue'


export default {
  name: "G_TVUserActiveDayReport", //G+TV用户活跃发展日报表
  components: {
    numberOfRegisteredUsers,
    dayREportBar,
    dayREportBarLv
  },
  computed: {
    ...mapGetters(["PR_operator", "PR_day"])
  },
  watch: {
    PR_operator(newValue, oldValue) {
      this.liveUsers_daliyReport("yd");
      this.liveUsers_daliyReport("lt");
      this.liveUsers_daliyReport("dx");
      this.api_data_set()
    }
  },
  data() {
    return {
      //在册用户数
      registeredUsers: {
        title: "各运营商在册用户数（户）",
        id: "registeredUsers_UADR",
        color: ["#4474c4", "#ed7d31", "#a5a5a5"],
        data: [
          ["运营商", "移动", "联通", "电信"],
          ["占比", , , ,]
        ]
      },

      //新增用户数
      newAddUserNumber: {
        title: "各运营商新增在册用户数（户）",
        id: "newAddUserNumber_UADR",
        color: ["#82b65f", "#70a7d8"],
        data: [
          [["运营商", "移动", "联通", "电信"], ["平均", 4128, 3380, 711]],
          [["运营商", "移动", "联通", "电信"], ["今日", , , ,]]
        ]
      },

      //开机率
      turnOnRate: {
        title: "开机率（%）",
        id: "turnOnRate_UADR",
        color: ["#82b65f", "#70a7d8"],
        data: [
          [["运营商", "移动", "联通", "电信"], ["平均", 27.4, 15.0, 37.6]],
          [["运营商", "移动", "联通", "电信"], ["今日", , , ,]]
        ]
      },

      //户均观看时长（小时）
      outLookTime: {
        title: "户均观看时长（小时）",
        id: "outLookTime_UADR",
        color: ["#82b65f", "#70a7d8"],
        data: [
          [["运营商", "移动", "联通", "电信"], ["平均", 0, 0, 0]],
          [["运营商", "移动", "联通", "电信"], ["今日", , , ,]]
        ]
      },

      //三大基础功能单日观看时长（万小时）
      dayLooktime: {
        title: "三大基础功能单日观看时长（万小时）",
        id: "dayLooktime_UADR",
        color: ["#82b65f", "#70a7d8"],
        data: [
          [["播放方式", "回看", "点播", "直播"], ["平均", , , ,]],
          [["播放方式", "回看", "点播", "直播"], ["今日", , , ,]]
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
              "运营商", "热剧", "少儿", "电影", "动漫", "综艺", "游戏", "纪实", "体育", "音乐", "资讯"
            ],
            ["平均", 576.4, 432.4, 363.3, 65.4, 51.8, 42.4, 8.1, 3.4, 2.8, 1.7]
          ],
          [
            [
              "运营商", "热剧", "少儿", "电影", "动漫", "综艺", "游戏", "纪实", "体育", "音乐", "资讯"
            ],
            ["今日", 488.4, 329.1, 213.7, 39.9, 36.7, 24.7, 8.5, 2.7, 2.4, 1.9]
          ]
        ]
      }
    };
  },
  mounted() {
    this.liveUsers_daliyReport("yd");   //移动数据
    this.liveUsers_daliyReport("lt");   //联通数据
    this.liveUsers_daliyReport("dx");   //电信数据
    this.api_data_set();  //混合数据
  },
  methods: {
    //G+TV用户活跃发展日报表
    liveUsers_daliyReport(type) {
      let vm = this;
      let ttt;  //运营商
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
      let start = "2019-06-01";
      let end = "2019-06-01";
      if (vm.PR_day != null) {
        start = vm.PR_day.start;
        end = vm.PR_day.end;
      }

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

      //G+TV用户活跃发展日报表api对接(单个运营商数据)
      liveUsers_daliyReport(formData)
        .then((response) => {
          // console.log("G+TV用户活跃发展日报表~~~~~~~", ttt)
          // console.log(response.data)

          let register_num = response.data.responses[0].aggregations.register_num.value  //在册用户数
          let new_num = response.data.responses[0].aggregations.new_num.value  //新增在册用户数（今日）
          let open_num = response.data.responses[0].aggregations.open_num.value  //开机用户
          // let open_rate1 = (open_num / register_num) * 100 //开机率
          let open_rate = this.returnFloat((open_num / register_num) * 100) //开机率
          let watch_freq_family = this.returnFloat(response.data.responses[2].aggregations.watch_freq_family.value) //户均观看时长
          // console.log("在册用户数", ttt, register_num)
          // console.log("新增在册用户数", ttt, new_num)
          // console.log("开机用户数", ttt, open_num)
          // console.log("开机率", ttt, open_rate)
          // console.log("户均观看时长", ttt, watch_freq_family)

          // console.log("----------------")

          //移动
          if (type == "yd") {
            Vue.set(vm.registeredUsers.data[1], 1, register_num);  //移动在册用户数
            Vue.set(vm.newAddUserNumber.data[1][1], 1, new_num);  //移动新增在册用户数（今日）
            Vue.set(vm.turnOnRate.data[1][1], 1, open_rate);  //移动开机率（今日）
            Vue.set(vm.outLookTime.data[1][1], 1, watch_freq_family);  //移动户均观看时长
          }

          //联通
          if (type == "lt") {
            Vue.set(vm.registeredUsers.data[1], 2, register_num);  //联通在册用户数
            Vue.set(vm.newAddUserNumber.data[1][1], 2, new_num);  //联通新增在册用户数（今日）
            Vue.set(vm.turnOnRate.data[1][1], 2, open_rate);  //联通开机率（今日）
            Vue.set(vm.outLookTime.data[1][1], 2, watch_freq_family);  //联通户均观看时长
          }

          //电信
          if (type == "dx") {
            Vue.set(vm.registeredUsers.data[1], 3, register_num); //电信在册用户数
            Vue.set(vm.newAddUserNumber.data[1][1], 3, new_num);  //电信新增在册用户数（今日）
            Vue.set(vm.turnOnRate.data[1][1], 3, open_rate);   //电信开机率（今日）
            Vue.set(vm.outLookTime.data[1][1], 3, watch_freq_family);  //电信户均观看时长
          }

        })
        .catch((error) => {
          console.log("G+TV用户活跃发展日报表", error)
        })
    },

    //混合运营商数据
    api_data_set() {
      let vm = this;
      let ttt;
      if (vm.PR_operator == null || vm.PR_operator.length == 0) {
        ttt = ["移动", "联通", "电信"]
      } else {
        ttt = this.PR_operator  //运营商
      }
      let start = "2019-06-01";
      let end = "2019-06-01";
      if (vm.PR_day != null) {
        start = vm.PR_day.start;
        end = vm.PR_day.end;
      }

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

      console.log("选择运营商为：", ttt)
      //G+TV用户活跃发展日报表api对接
      liveUsers_daliyReport(formData)
        .then((response) => {
          console.log("用户选择的条件筛选结果为：******")
          console.log(response.data)
          let watch_dur_look_back = response.data.responses[4].aggregations.play_mode.buckets[0].watch_dur.value  //回看数据
          let watch_dur_order = response.data.responses[4].aggregations.play_mode.buckets[1].watch_dur.value  //点播数据
          let watch_dur_live = response.data.responses[4].aggregations.play_mode.buckets[2].watch_dur.value  //直播数据
          let program_type_dur_order = response.data.responses[6].aggregations.program_type.buckets  //各类型节目点播时长

          Vue.set(vm.dayLooktime.data[1][1], 1, watch_dur_look_back)
          Vue.set(vm.dayLooktime.data[1][1], 2, watch_dur_order)
          Vue.set(vm.dayLooktime.data[1][1], 3, watch_dur_live)
          // Vue.set(vm.)

        })
        .catch((error) => {
          console.log("G+TV用户活跃发展日报表", error)
        })
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
    },
  }
}
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
</style>
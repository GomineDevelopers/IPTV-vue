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
  data() {
    return {
      //在册用户数
      registeredUsers: {
        title: "各运营商在册用户数（户）",
        id: "registeredUsers_UADR",
        color: ["#4474c4", "#ed7d31", "#a5a5a5"],
        data: [
          ["运营商", "移动", "联通", "电信"],
          ["占比", 849422, 283884, 354067]
        ]
      },

      //新增用户数
      newAddUserNumber: {
        title: "各运营商新增在册用户数（户）",
        id: "newAddUserNumber_UADR",
        color: ["#82b65f", "#70a7d8"],
        data: [
          [["运营商", "移动", "联通", "电信"], ["平均", 4128, 3380, 711]],
          [["运营商", "移动", "联通", "电信"], ["今日", 3389, 3054, 751]]
        ]
      },

      //开机率
      turnOnRate: {
        title: "开机率（%）",
        id: "turnOnRate_UADR",
        color: ["#82b65f", "#70a7d8"],
        data: [
          [["运营商", "移动", "联通", "电信"], ["平均", 27.4, 15.0, 37.6]],
          [["运营商", "移动", "联通", "电信"], ["今日", 23.6, 14.7, 35.8]]
        ]
      },

      //户均观看时长（小时）
      outLookTime: {
        title: "户均观看时长（小时）",
        id: "outLookTime_UADR",
        color: ["#82b65f", "#70a7d8"],
        data: [
          [["运营商", "移动", "联通", "电信"], ["平均", 0, 0, 0]],
          [["运营商", "移动", "联通", "电信"], ["今日", 0, 0, 0]]
        ]
      },

      //三大基础功能单日观看时长（万小时）
      dayLooktime: {
        title: "三大基础功能单日观看时长（万小时）",
        id: "dayLooktime_UADR",
        color: ["#70a7d8"],
        data: [
          // [["运营商", "移动", "联通", "电信"], ["平均", 77.4, 143.8, 0]], //清单中未提及均值，所以接口中没有得到数据
          [["运营商", "直播", "点播", "回看"], ["今日", 78.7, 114.2, 0]]
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
            ["平均", 576.4, 432.4, 363.3, 65.4, 51.8, 42.4, 8.1, 3.4, 2.8, 1.7]
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
            ["今日", 488.4, 329.1, 213.7, 39.9, 36.7, 24.7, 8.5, 2.7, 2.4, 1.9]
          ]
        ]
      }
    };
  },
  created() {
    this.liveUsers_daliyReport("yd");
    this.liveUsers_daliyReport("lt");
    this.liveUsers_daliyReport("dx");
  },
  methods: {
    //G+TV用户活跃发展日报表
    liveUsers_daliyReport(type) {
      let vm = this;
      let ttt;
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
      let start = "2019-06-02";
      let end = "2019-06-02";
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

      //户均观看时长api对接
      liveUsers_daliyReport(formData)
        .then((response) => {
          console.log("G+TV用户活跃发展日报表", response.data)

          //户均观看时长（今日）
          let watch_freq_family = this.returnFloat(response.data.responses[0].aggregations.watch_freq_family.value)
          // console.log(watch_freq_family)

          if (type == "yd") {
            // console.log("移动今日观看", this.outLookTime.data[1][1][1])
            this.outLookTime.data[1][1][1] = watch_freq_family  //设置户均观看时长（今日维度）
          }
          if (type == "lt") {
            // console.log("联通今日观看", this.outLookTime.data[1][1][2])
            this.outLookTime.data[1][1][2] = watch_freq_family
          }
          if (type == "dx") {
            // console.log("电信今日观看", this.outLookTime.data[1][1][3])
            this.outLookTime.data[1][1][3] = watch_freq_family
          }

        })
        .catch((error) => {
          console.log("G+TV用户活跃发展日报表", error)
        })

      //三大基础功能单日观看时长api对接


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
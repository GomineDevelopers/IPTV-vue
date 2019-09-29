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
    <el-row class="viewing_top15" v-show="ifPlaymodeShow_zb">
      <el-row class="model_title">
        <span class="title_border_left"></span>直播收视TOP15
      </el-row>
      <el-row class="chart_body back_white viewing_top15_list">
        <user-viewing-behavior-top-vip :viewingTopList="liveViewingTopList_VIP"></user-viewing-behavior-top-vip>
      </el-row>
    </el-row>
    <el-row class="viewing_top15" v-show="ifPlaymodeShow_db">
      <el-row class="model_title">
        <span class="title_border_left"></span>点播收视TOP15
      </el-row>
      <el-row class="chart_body back_white viewing_top15_list">
        <user-viewing-behavior-top-vip :viewingTopList="orderViewingTopList_VIP"></user-viewing-behavior-top-vip>
      </el-row>
    </el-row>

    <el-row class="viewing_top15 last_viewing_top15" v-show="ifPlaymodeShow_hk">
      <el-row class="model_title">
        <span class="title_border_left"></span>回看收视TOP15
      </el-row>
      <el-row class="chart_body back_white viewing_top15_list">
        <user-viewing-behavior-top-vip :viewingTopList="lookBackViewingTopList_VIP"></user-viewing-behavior-top-vip>
      </el-row>
    </el-row>
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

export default {
  name: "VIP", //增值业务VIP
  computed: {
    ...mapGetters([
      "ADD_VIP_region",
      "ADD_VIP_operator",
      "ADD_VIP_playmode",
      "ADD_VIP_programa",
      "ADD_VIP_valueAddedPackage",
      "ADD_VIP_day",
      "ADD_VIP_week",
      "ADD_VIP_picker",
      "ADD_VIP_time_type"
    ]),
    ifPlaymodeShow_zb: {
      get: function () {
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
      set: function (newValue) { }
    },
    ifPlaymodeShow_db: {
      get: function () {
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
      set: function (newValue) { }
    },
    ifPlaymodeShow_hk: {
      get: function () {
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
      set: function (newValue) { }
    },
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
      setTimeout(function () {
        vm.refresh_api_data();
      }, 100);
    },
    ADD_VIP_operator(newValue, oldValue) {
      let vm = this;
      console.log("ADD_VIP_operator: " + newValue);
      setTimeout(function () {
        vm.refresh_api_data();
      }, 100);
    },
    ADD_VIP_playmode(newValue, oldValue) {
      let vm = this;
      console.log("ADD_VIP_playmode: " + newValue);
      setTimeout(function () {
        vm.refresh_api_data();
      }, 100);
    },
    ADD_VIP_programa(newValue, oldValue) {
      let vm = this;
      console.log("ADD_VIP_programa: " + newValue);
      setTimeout(function () {
        vm.refresh_api_data();
      }, 100);
    },
    ADD_VIP_valueAddedPackage(newValue, oldValue) {
      let vm = this;
      console.log("ADD_VIP_valueAddedPackage: " + newValue);
      setTimeout(function () {
        vm.refresh_api_data();
      }, 100);
    },
    ADD_VIP_day(newValue, oldValue) {
      let vm = this;
      console.log("ADD_VIP_day: " + newValue);
      setTimeout(function () {
        vm.refresh_api_data();
      }, 100);
    },
    ADD_VIP_week(newValue, oldValue) {
      let vm = this;
      console.log("ADD_VIP_week: " + newValue);
      setTimeout(function () {
        vm.refresh_api_data();
      }, 100);
    },
    ADD_VIP_picker(newValue, oldValue) {
      let vm = this;
      console.log("ADD_VIP_picker: " + newValue);
      setTimeout(function () {
        vm.refresh_api_data();
      }, 100);
    },
    ADD_VIP_time_type(newValue, oldValue) {
      let vm = this;
      console.log("ADD_VIP_time_type: " + newValue);
    }
  },
  methods: {
    refresh_api_data() {
      // this.vip_increment(this.ADD_VIP_time_type, this.if_playmode_is_single_db);
      this.vip_increment(this.ADD_VIP_time_type);

    },
    // vip_increment(time_type, if_playmode_is_single_db) {
    vip_increment(time_type) {
      let vm = this;
      console.log("vip_increment");

      let temp_region = commonTools.acConvert(vm.ADD_VIP_region);  //地区
      let temp_operator = commonTools.operatorConvert(vm.ADD_VIP_operator);  //运营商
      let temp_valueAddedPackage = vm.ADD_VIP_valueAddedPackage;  //点播专属（增值包）
      let temp_playmode = commonTools.playmodeConvert(vm.ADD_VIP_playmode);  //播放方式
      let temp_programa = commonTools.programaConvert(vm.ADD_VIP_programa);   //点播专属（栏目）

      // if (if_playmode_is_single_db) {
      //   temp_programa = commonTools.programaConvert(vm.UVB_programa);
      //   temp_contenttype = commonTools.contenttypeConvert(vm.UVB_contenttype);
      // }
      // console.log("temp_contenttype:" + temp_contenttype);
      // ▲▲▲ 接口再增加 contenttype  ---暂定  contenttype  --alex

      // let temp = {
      //   area: null,
      //   operator: null,
      //   method: null,
      //   list: null,
      //   start: null,
      //   end: null
      // };

      let temp;
      // if (if_playmode_is_single_db) {
      //   temp = {
      //     area: null,
      //     operator: null,
      //     method: null,
      //     list: null,
      //     contenttype: null,
      //     start: null,
      //     end: null
      //   };
      // } else {
      temp = {
        area: null,
        operator: null,
        method: null,
        // list: null,
        // contenttype: null,
        start: null,
        end: null
      };
      // }

      // if (temp_valueAddedPackage == null || temp_valueAddedPackage == "") {
      //   console.log("需要新增 - 增值包为空提示");
      //   return;
      // }

      if (time_type == 1) {
        // 时间类型-1-天
        // console.log("~~~~~day:" + vm.ADD_VIP_day);
        // temp = {
        //   area: String(temp_region),
        //   operator: String(temp_operator),
        //   method: String(temp_playmode),
        //   list: String(temp_programa),
        //   increment: temp_valueAddedPackage,
        //   start: vm.ADD_VIP_day,
        //   end: vm.ADD_VIP_day
        // };
        // if (if_playmode_is_single_db) {
        //   temp = {
        //     area: String(temp_region),
        //     operator: String(temp_operator),
        //     method: String(temp_playmode),
        //     list: String(temp_programa),
        //     contenttype: String(temp_contenttype),
        //     start: vm.UVB_day,
        //     end: vm.UVB_day
        //   };
        // } else {
        temp = {
          area: String(temp_region),
          operator: String(temp_operator),
          method: String(temp_playmode),
          start: vm.UVB_day,
          end: vm.UVB_day
        };
        // }
        // console.log("~~~~time_type:" + time_type);
        console.log("~~~~~1:");
        console.log(temp);
      }
      if (time_type == 2) {
        // 时间类型-2-周
        // console.log("~~~~~week:" + vm.ADD_VIP_week);
        let temp_time = commonTools.split_yearAtime(vm.ADD_VIP_week);
        // temp = {
        //   area: String(temp_region),
        //   operator: String(temp_operator),
        //   method: String(temp_playmode),
        //   list: String(temp_programa),
        //   increment: temp_valueAddedPackage,
        //   start: temp_time.time,
        //   end: temp_time.time,
        //   year: temp_time.year
        // };
        // if (if_playmode_is_single_db) {
        //   temp = {
        //     area: String(temp_region),
        //     operator: String(temp_operator),
        //     method: String(temp_playmode),
        //     list: String(temp_programa),
        //     contenttype: String(temp_contenttype),
        //     start: temp_time.time,
        //     end: temp_time.time,
        //     year: temp_time.year
        //   };
        // } else {
        temp = {
          area: String(temp_region),
          operator: String(temp_operator),
          method: String(temp_playmode),
          start: temp_time.time,
          end: temp_time.time,
          year: temp_time.year
        };
        // }
        // console.log("~~~~time_type:" + time_type);
        console.log("~~~~~2:");
        console.log(temp);
      }
      if (time_type == 3) {
        // 时间类型-3-范围
        console.log("~~~~~picker:" + vm.ADD_VIP_picker);
        console.log(typeof vm.ADD_VIP_picker);
        let temp_time = commonTools.split_picker(vm.ADD_VIP_picker);
        console.log(temp_time);
        // temp = {
        //   area: String(temp_region),
        //   operator: String(temp_operator),
        //   method: String(temp_playmode),
        //   list: String(temp_programa),
        //   increment: temp_valueAddedPackage,
        //   start: temp_time.start,
        //   end: temp_time.end
        // };
        // if (if_playmode_is_single_db) {
        //   temp = {
        //     area: String(temp_region),
        //     operator: String(temp_operator),
        //     method: String(temp_playmode),
        //     list: String(temp_programa),
        //     contenttype: String(temp_contenttype),
        //     start: temp_time.start,
        //     end: temp_time.end
        //   };
        // } else {

        //*****注意传参格式为这个 */
        temp = {
          area: String(temp_region),
          operator: String(temp_operator),
          ti: String(temp_programa), //栏目
          package: temp_valueAddedPackage,
          // method: String(temp_playmode),
          start: temp_time.start,
          end: temp_time.end
        };
        // }
        // console.log("~~~~time_type:" + time_type);
        console.log("~~~~~3:");
        console.log(temp);
      }

      // if (if_playmode_is_single_db) {
      // api 2
      // } else {
      // api 1
      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("ac", temp.area);
      formData.append("operator", temp.operator);
      formData.append("mode", temp.method);
      formData.append("start", temp.start);
      formData.append("end", temp.end);
      vip_increment(formData)
        .then(function (response) {
          console.log("vip数据", response.data.responses);
          // /////////// 0 - 暂无数据
          let length_0;
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
            vm.liveViewingTopList_VIP.data.push(temp_data);
          }
          console.log("直播数据", vm.liveViewingTopList_VIP)

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
            vm.lookBackViewingTopList_VIP.data.push(temp_data2);
          }
          console.log("回看数据", vm.lookBackViewingTopList_VIP)

        })
        .catch(function (error) {
          console.info(error);
        });
      // }

      // let temp = {
      //   area: "all", // 地区码，all和贵州省地级市代码
      //   operator: "all", // 运营商列表：根据用户收视行为运营商api为准的列表单，all为全部运营商
      //   method: 0, // 播放方式：0-总体，1-直播，2-点播，3-回看
      //   list: "all", // 节目列表：根据栏目api为准的列表单，all为全部节目
      //   start: "2019-07-12",
      //   end: "2019-07-31",
      //   increment: "少儿包" // 增值包选项 如 少儿包
      // };

      // var formData = new FormData();
      // var formData = new window.FormData();
      // formData.append("area", temp.area);
      // formData.append("operator", temp.operator);
      // formData.append("method", temp.method);
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
  components: {
    "user-viewing-behavior-top-vip": UserViewingBehaviorTOP,
    "com-optionselectVIP": OptionSelectVIP,
    // "vip-behavior-top": VIPBehaviorTOP,
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
          { value: 1335, name: "贵阳" },
          { value: 810, name: "遵义" },
          { value: 648, name: "安顺" },
          { value: 148, name: "黔南" },
          { value: 108, name: "黔东南" },
          { value: 248, name: "铜仁" },
          { value: 535, name: "毕节" },
          { value: 234, name: "六盘水" },
          { value: 348, name: "黔西南" }
        ]
      },
      //运营商数据
      operatorData: {
        title: "运营商",
        id: "operatorChart_vip",
        color: ["#FF6123", "#FF8859", "#FFAA89"],
        data: [
          ["product", "移动", "联通", "电信"],
          ["贵阳", 43.3, 85.8, 93.7],
          ["遵义", 83.1, 73.4, 55.1],
          ["安顺", 43.3, 85.8, 93.7],
          ["黔南", 83.1, 73.4, 55.1],
          ["黔东南", 86.4, 65.2, 82.5],
          ["铜仁", 72.4, 53.9, 39.1],
          ["毕节", 86.4, 65.2, 82.5],
          ["六盘水", 43.3, 85.8, 93.7],
          ["黔西南", 72.4, 53.9, 39.1]
        ]
      },
      //播放数据
      playData: {
        title: "播放",
        id: "playChart_vip",
        color: ["#B37CF4", "#F97E6F ", "#A9CCDC"],
        data: [
          { value: 535, name: "直播" },
          { value: 410, name: "回看" },
          { value: 348, name: "点播" }
        ]
      },
      columnData: {
        title: "栏目（点播专属）",
        id: "columnChart_vip",
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

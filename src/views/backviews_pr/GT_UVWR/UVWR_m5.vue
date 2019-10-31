<template>
  <div class="UVWR_m5">
    <!-- ///////////////////////// Y -->
    <el-row class="model_title">
      <span class="title_border_left"></span>本土原创节目点播数据
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <el-row class="programs_demand_content1">
        <el-col :span="12">
          <p class="m_common_sm_title_font">本土原创节目一周点播数据</p>
          <bar-chart-single2 :chartData="GT_UVWR1_Y1"></bar-chart-single2>
        </el-col>
        <el-col :span="12">
          <p class="m_common_sm_title_font">内容类型点播次数占比</p>
          <div id="GT_UVWR1_Y2" :style="{width: '100%',height: '300px'}"></div>

          <p class="m_common_sm_title_font">不同平台点播次数占比</p>
          <!-- <div id="GT_UVWR1_Y3" :style="{width: '100%',height: '300px'}"></div> -->
          <numberOfRegisteredUsers2
            :fillinData="GT_UVWR1_Y3"
            :style="{width: '100%',height: '300px'}"
          ></numberOfRegisteredUsers2>
        </el-col>
      </el-row>
    </el-row>
    <!-- ///////////////////////// Z -->
    <el-row class="model_title">
      <span class="title_border_left"></span>本土原创节目点播TOP10
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 横向条形图x3 -->
      <el-row class>
        <el-col :span="8" v-show="ifModuleydShow">
          <p class="m_common_sm_title_font">移动（次）</p>
          <bar-list-chart :barListData="GT_UVWR1_Z1"></bar-list-chart>
        </el-col>
        <el-col :span="8" v-show="ifModuleltShow">
          <p class="m_common_sm_title_font">联通（次）</p>
          <bar-list-chart :barListData="GT_UVWR1_Z2"></bar-list-chart>
        </el-col>
        <el-col :span="8" v-show="ifModuledxShow">
          <p class="m_common_sm_title_font">电信（次）</p>
          <bar-list-chart :barListData="GT_UVWR1_Z3"></bar-list-chart>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import BarChartSingle2 from "@/views/backcoms/commoncomponents2/BarChartSingle_Change2"; //（空心）饼图组件
import BarListChart from "@/views/backcoms/commoncomponents2/BarListChart_Change"; //排名柱状图
import numberOfRegisteredUsers2 from "@/views/backcoms/commoncomponents2/numberOfRegisteredUsers_Change2"; //在册用户数

import Vue from "vue";
import { commonTools } from "@/utils/test";
import { mapGetters } from "vuex";

export default {
  name: "UVWR_m5",
  components: {
    "bar-chart-single2": BarChartSingle2,
    "bar-list-chart": BarListChart,
    numberOfRegisteredUsers2: numberOfRegisteredUsers2
  },
  props: [
    "api_data_m1",
    "api_data_m2",
    "api_data_m3",
    "api_data_m4",
    "api_data_m1_range",
    "api_data_m2_range",
    "api_data_m3_range",
    "api_data_m4_range"
  ],
  computed: {
    ...mapGetters(["PR_operator", "PR_week", "PR_Report_index"]),
    ifModuleydShow: {
      get: function () {
        let vm = this;
        if (vm.PR_operator == null || vm.PR_operator.length == 0) {
          return true;
        } else {
          if (vm.PR_operator.indexOf("移动") > -1) {
            return true;
          }
        }
        return false;
      },
      set: function (newValue) { }
    },
    ifModuleltShow: {
      get: function () {
        let vm = this;
        if (vm.PR_operator == null || vm.PR_operator.length == 0) {
          return true;
        } else {
          if (vm.PR_operator.indexOf("联通") > -1) {
            return true;
          }
        }
        return false;
      },
      set: function (newValue) { }
    },
    ifModuledxShow: {
      get: function () {
        let vm = this;
        if (vm.PR_operator == null || vm.PR_operator.length == 0) {
          return true;
        } else {
          if (vm.PR_operator.indexOf("电信") > -1) {
            return true;
          }
        }
        return false;
      },
      set: function (newValue) { }
    }
  },
  watch: {
    PR_operator(newValue, oldValue) {
      let vm = this;
      // excel 处理
      vm.Excel_data_manage();
    },
    PR_week(newValue, oldValue) {
      let vm = this;
      // excel 处理
      vm.Excel_data_manage();
    },
    //本周数据
    api_data_m1(newValue, oldValue) {
      console.log("api_data_m1模块5（本周）", newValue);
      let vm = this;
      //设置本周与上周时间（0603——0609  0610-0616）
      let temp_time = commonTools.split_WeeksDays_byDWwr(vm.PR_week);
      let WeekFormat = commonTools.weekDaysShowFormat_AndBeforeWeek(
        temp_time.week_day_start,
        temp_time.week_day_end
      );
      let beforeWeekFormat = WeekFormat.beforeWeekFormat; //上周时间
      let currentWeekFormat = WeekFormat.currentWeekFormat; // 本周时间
      try {
        //本土原创节目点播数据
        //本土原创节目一周点播数据
        try {
          let program_play_data = newValue.data.responses[17].aggregations;
          Vue.set(vm.GT_UVWR1_Y1.data[0], 1, beforeWeekFormat);
          Vue.set(vm.GT_UVWR1_Y1.data[0], 2, currentWeekFormat);
          Vue.set(vm.GT_UVWR1_Y1.data[1], 2, program_play_data.demand_user_num.value);
          Vue.set(vm.GT_UVWR1_Y1.data[2], 2, program_play_data.demand_freq.value);
          Vue.set(vm.GT_UVWR1_Y1.data[3], 2, (program_play_data.demand_dur.value / 60).toFixed(2));
        } catch (error) {
          //  = [
          //   ["product"],
          //   ["点播用户数（户）"],
          //   ["点播次数（次）"],
          //   ["点播时长（小时）"]
          // ]
          console.log(error)
        }

        try {
          let content_type_data = newValue.data.responses[18].aggregations.program_type.buckets;
          let content_type_temp = [];
          if (content_type_data[0].demand_freq.value) { }
          content_type_data.forEach((value, index) => {
            content_type_temp.push({
              value: value.demand_freq.value,
              name: value.key
            });
            // console.log(value)
          });
          vm.GT_UVWR1_Y2.data = content_type_temp;
          setTimeout(function () {
            vm.drawLine();
          }, 300);
        } catch (error) {
          // console.log("内容类型点播次数占比错误")
          vm.GT_UVWR1_Y2.data = []
          setTimeout(function () {
            vm.drawLine();
          }, 300);
          console.log("vm.GT_UVWR1_Y2.data", vm.GT_UVWR1_Y2.data)
          console.log(error)
        }

      } catch (error) {
        console.log(error);
      }
    },
    //上周数据
    api_data_m1_range(newValue, oldValue) {
      console.log("api_data_m1模块5（上周）", newValue);
      let vm = this;

      try {
        //本土原创节目点播数据
        //本土原创节目一周点播数据
        let program_play_data = newValue.data.responses[17].aggregations;
        // console.log("上周数据program_play_data", program_play_data)
        Vue.set(vm.GT_UVWR1_Y1.data[1], 1, program_play_data.demand_user_num.value);
        Vue.set(vm.GT_UVWR1_Y1.data[2], 1, program_play_data.demand_freq.value);
        Vue.set(vm.GT_UVWR1_Y1.data[3], 1, (program_play_data.demand_dur.value / 60).toFixed(2));
        // console.log("vm.GT_UVWR1_Y1.data", vm.GT_UVWR1_Y1.data)
      } catch (error) {
        console.log(error);
      }
    },
    //移动本周数据
    api_data_m2(newValue, oldValue) {
      console.log("移动本周数据", newValue);
      let vm = this;
      //设置本周与上周时间（0603——0609  0610-0616）
      let temp_time = commonTools.split_WeeksDays_byDWwr(vm.PR_week);
      let WeekFormat = commonTools.weekDaysShowFormat_AndBeforeWeek(
        temp_time.week_day_start,
        temp_time.week_day_end
      );
      let beforeWeekFormat = WeekFormat.beforeWeekFormat; //上周时间
      let currentWeekFormat = WeekFormat.currentWeekFormat; // 本周时间

      try {
        //移动平台点播次数占比
        let demand_freq_data = newValue.data.responses[18].aggregations.demand_freq.value;
        Vue.set(vm.GT_UVWR1_Y3.data[1], 1, demand_freq_data);

        //本土原创节目点播TOP10
        let local_program_type_data = newValue.data.responses[20].aggregations.programname.buckets;
        Vue.set(vm.GT_UVWR1_Z1.data[0], 1, currentWeekFormat);
        Vue.set(vm.GT_UVWR1_Z1.data[0], 2, beforeWeekFormat);
        if (local_program_type_data[0].key) { }
        local_program_type_data.forEach((value, index) => {
          let program_name = value.program_type.buckets[0].key + ' ' + value.key
          Vue.set(vm.GT_UVWR1_Z1.data[10 - index], 0, program_name);
          Vue.set(vm.GT_UVWR1_Z1.data[10 - index], 1, value.demand_freq.value);
        });
      } catch (error) {
        vm.GT_UVWR1_Z1.data.forEach((value, index) => {
          if (index > 0) {
            Vue.set(value, 0, '');
            Vue.set(value, 1, 0);
          }
        });
        console.log(error);
      }
    },
    //联通本周数据
    api_data_m3(newValue, oldValue) {
      console.log("联通本周数据", newValue);
      let vm = this;
      //设置本周与上周时间（0603——0609  0610-0616）
      let temp_time = commonTools.split_WeeksDays_byDWwr(vm.PR_week);
      let WeekFormat = commonTools.weekDaysShowFormat_AndBeforeWeek(
        temp_time.week_day_start,
        temp_time.week_day_end
      );
      let beforeWeekFormat = WeekFormat.beforeWeekFormat; //上周时间
      let currentWeekFormat = WeekFormat.currentWeekFormat; // 本周时间

      try {
        //联通平台点播次数占比
        let demand_freq_data = newValue.data.responses[18].aggregations.demand_freq.value;
        Vue.set(vm.GT_UVWR1_Y3.data[1], 2, demand_freq_data);

        //本土原创节目点播TOP10
        let local_program_type_data = newValue.data.responses[20].aggregations.programname.buckets;
        Vue.set(vm.GT_UVWR1_Z2.data[0], 1, currentWeekFormat);
        Vue.set(vm.GT_UVWR1_Z2.data[0], 2, beforeWeekFormat);
        if (local_program_type_data[0].key) { }
        local_program_type_data.forEach((value, index) => {
          let program_name = value.program_type.buckets[0].key + ' ' + value.key
          Vue.set(vm.GT_UVWR1_Z2.data[10 - index], 0, program_name);
          Vue.set(vm.GT_UVWR1_Z2.data[10 - index], 1, value.demand_freq.value);
        });
      } catch (error) {
        vm.GT_UVWR1_Z2.data.forEach((value, index) => {
          if (index > 0) {
            Vue.set(value, 0, '');
            Vue.set(value, 1, 0);
          }
        });
        console.log(error);
      }
    },
    //电信本周数据
    api_data_m4(newValue, oldValue) {
      console.log("电信本周数据", newValue);
      let vm = this;
      //设置本周与上周时间（0603——0609  0610-0616）
      let temp_time = commonTools.split_WeeksDays_byDWwr(vm.PR_week);
      let WeekFormat = commonTools.weekDaysShowFormat_AndBeforeWeek(
        temp_time.week_day_start,
        temp_time.week_day_end
      );
      let beforeWeekFormat = WeekFormat.beforeWeekFormat; //上周时间
      let currentWeekFormat = WeekFormat.currentWeekFormat; // 本周时间

      try {
        //电信平台点播次数占比
        let demand_freq_data = newValue.data.responses[18].aggregations.demand_freq.value;
        Vue.set(vm.GT_UVWR1_Y3.data[1], 3, demand_freq_data);

        //本土原创节目点播TOP10
        let local_program_type_data = newValue.data.responses[20].aggregations.programname.buckets;
        Vue.set(vm.GT_UVWR1_Z3.data[0], 1, currentWeekFormat);
        Vue.set(vm.GT_UVWR1_Z3.data[0], 2, beforeWeekFormat);
        if (local_program_type_data[0].key) { }
        local_program_type_data.forEach((value, index) => {
          let program_name = value.program_type.buckets[0].key + ' ' + value.key
          Vue.set(vm.GT_UVWR1_Z3.data[10 - index], 0, program_name);
          Vue.set(vm.GT_UVWR1_Z3.data[10 - index], 1, value.demand_freq.value);
        });
      } catch (error) {
        vm.GT_UVWR1_Z3.data.forEach((value, index) => {
          if (index > 0) {
            Vue.set(value, 0, '');
            Vue.set(value, 1, 0);
          }
        });
        console.log(error);
      }
    },
    //移动上周数据
    api_data_m2_range(newValue, oldValue) {
      console.log("移动上周数据", newValue);
      let vm = this;
      try {
        //本土原创节目点播TOP10
        let local_program_type_data = newValue.data.responses[20].aggregations.programname.buckets;
        setTimeout(() => {
          let live_temp = vm.GT_UVWR1_Z1.data;
          live_temp.forEach((value, index) => {
            if (index > 0) {
              Vue.set(vm.GT_UVWR1_Z1.data[index], 2, 0);
              // console.log(value)
              local_program_type_data.forEach((value2, index2) => {
                let program_name = value2.program_type.buckets[0].key + ' ' + value2.key
                if (program_name == value[0]) {
                  // console.log(program_name, value2.demand_freq.value)
                  Vue.set(
                    vm.GT_UVWR1_Z1.data[index],
                    2,
                    Number(value2.demand_freq.value.toFixed(2))
                  );
                }
              });
            }
          });
        }, 500);
      } catch (error) {
        console.log(error);
      }
    },
    //联通上周数据
    api_data_m3_range(newValue, oldValue) {
      console.log("联通上周数据", newValue);
      let vm = this;

      try {
        //本土原创节目点播TOP10
        let local_program_type_data = newValue.data.responses[20].aggregations.programname.buckets;
        setTimeout(() => {
          let live_temp = vm.GT_UVWR1_Z2.data;
          live_temp.forEach((value, index) => {
            if (index > 0) {
              Vue.set(vm.GT_UVWR1_Z2.data[index], 2, 0);
              // console.log("本土原创节目点播本周--", value)
              local_program_type_data.forEach((value2, index2) => {
                let program_name = value2.program_type.buckets[0].key + ' ' + value2.key
                if (program_name == value[0]) {
                  // console.log(value2.key, value2.demand_freq.value)
                  Vue.set(
                    vm.GT_UVWR1_Z2.data[index],
                    2,
                    Number(value2.demand_freq.value.toFixed(2))
                  );
                }
              });
            }
          });
        }, 500);
      } catch (error) {
        console.log(error);
      }
    },
    //电信上周数据
    api_data_m4_range(newValue, oldValue) {
      console.log("电信上周数据", newValue);
      let vm = this;
      try {
        //本土原创节目点播TOP10
        let local_program_type_data = newValue.data.responses[20].aggregations.programname.buckets;
        setTimeout(() => {
          let live_temp = vm.GT_UVWR1_Z3.data;
          live_temp.forEach((value, index) => {
            if (index > 0) {
              Vue.set(vm.GT_UVWR1_Z3.data[index], 2, 0);
              // console.log("本土原创节目点播本周--", value)
              local_program_type_data.forEach((value2, index2) => {
                let program_name = value2.program_type.buckets[0].key + ' ' + value2.key
                if (program_name == value[0]) {
                  // console.log(value2.key, value2.demand_freq.value)
                  Vue.set(
                    vm.GT_UVWR1_Z3.data[index],
                    2,
                    Number(value2.demand_freq.value.toFixed(2))
                  );
                }
              });
            }
          });
        }, 500);
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.drawLine();
    // this.drawLine2();
    let vm = this;
    setTimeout(function () {
      // console.log("api_data_m1");
      // console.log(vm.api_data_m1);
    }, 300);
  },

  data() {
    return {
      GT_UVWR1_Y1: {
        data: [
          ["product"],
          ["点播用户数（户）"],
          ["点播次数（次）"],
          ["点播时长（小时）"]
          // ["product", "0520-0526", "0527-0602"],
          // ["点播用户数（户）", 48.0, 48.1],
          // ["点播次数（次）", 54.2, 57.4],
          // ["点播时长（小时）", 20.1, 20.0]
        ],
        title: "",
        id: "GT_UVWR1_Y1",
        height: "height:600px;",
        color: ["#EDEDED", "#A9D18E"],
        ifYaxisShow: true,
        ifLegendShow: true,
        m_barWidth: "20%"
      },
      GT_UVWR1_Y2: {
        data: [
          // { value: 70, name: "综艺" },
          // { value: 20, name: "微电影" },
          // { value: 14, name: "纪实" },
          // { value: 10, name: "其他" },
          // { value: 8, name: "电影" },
          // { value: 4, name: "新闻" },
          // { value: 8, name: "时尚生活" },
          // { value: 5, name: "纪录片" }
        ]
      },
      GT_UVWR1_Y3: {
        title: "",
        id: "GT_UVWR1_Y3",
        color: ["#5B9BD5", "#ED7D31", "#FFC000"],
        data: [["运营商", "移动", "联通", "电信"], ["占比"]],
        label_formatter: "{c}\n{d}%"
      },
      GT_UVWR1_Z1: {
        title: "",
        id: "GT_UVWR1_Z1",
        height: "height:600px;",
        color: ["#A9D18E", "#EDEDED"],
        data: [
          // ["product",], [], [], [], [], [], [], [], [], [], []
          ["product"],
          [],
          [],
          [],
          [],
          [],
          [],
          [],
          [],
          [],
          []
          // ["product", "0527-0602", "0520-0526"],
          // ["少儿", 20, 20],
          // ["电影", 18, 18],
          // ["热剧", 15, 15],
          // ["游戏", 17, 17],
          // ["动漫", 16, 16],
          // ["综艺", 14, 14],
          // ["纪实", 13, 13],
          // ["音乐", 12, 12],
          // ["体育", 11.5, 11.5],
          // ["资讯", 10, 10]
        ]
      },
      GT_UVWR1_Z2: {
        title: "",
        id: "GT_UVWR1_Z2",
        height: "height:600px;",
        color: ["#5B9BD5", "#EDEDED"],
        data: [
          ["product"],
          [],
          [],
          [],
          [],
          [],
          [],
          [],
          [],
          [],
          []
          // ["product", "0527-0602", "0520-0526"],
          // ["少儿", 20, 20],
          // ["电影", 18, 18],
          // ["热剧", 15, 15],
          // ["游戏", 17, 17],
          // ["动漫", 16, 16],
          // ["综艺", 14, 14],
          // ["纪实", 13, 13],
          // ["音乐", 12, 12],
          // ["体育", 11.5, 11.5],
          // ["资讯", 10, 10]
        ]
      },
      GT_UVWR1_Z3: {
        title: "",
        id: "GT_UVWR1_Z3",
        height: "height:600px;",
        color: ["#FFC000", "#EDEDED"],
        data: [
          ["product"],
          [],
          [],
          [],
          [],
          [],
          [],
          [],
          [],
          [],
          []
          // ["product", "0527-0602", "0520-0526"],
          // ["少儿", 20, 20],
          // ["电影", 18, 18],
          // ["热剧", 15, 15],
          // ["游戏", 17, 17],
          // ["动漫", 16, 16],
          // ["综艺", 14, 14],
          // ["纪实", 13, 13],
          // ["音乐", 12, 12],
          // ["体育", 11.5, 11.5],
          // ["资讯", 10, 10]
        ]
      }
    };
  },
  methods: {
    Excel_data_manage() {
      console.log("Excel_data_manage - 5 - m5");
      let vm = this;
      setTimeout(function () {
        if (vm.PR_Report_index == 5) {
          let temp_titleArr = [];
          let temp_DataArr = [];
          // /// 临时
          // temp_titleArr.push(["title1"]);
          // temp_titleArr.push(["title2"]);
          // temp_titleArr.push(["title3"]);

          // temp_DataArr.push([
          //   ["运营商", "移动", "联通", "电信555555555555555.555"],
          //   ["平均", 1, 2, 3]
          // ]);
          // temp_DataArr.push([
          //   ["运营商", "移动", "联通", "电信", "测试22"],
          //   ["平均", 1, 2, 3, 4]
          // ]);
          // temp_DataArr.push([
          //   ["运营商", "移动", "联通", "电信", "测试33"],
          //   ["平均", 1, 2, 3, 4]
          // ]);
          // ///

          // /// 实际
          let title_arr = [];
          let data_arr = [];

          try {
            let Y2_data_temp = [[], []];
            vm.GT_UVWR1_Y2.data.forEach((value, index) => {
              Y2_data_temp[0].push(value.name);
              Y2_data_temp[1].push(value.value);
            });

            title_arr.push(
              ["本土原创节目一周点播数据"],
              ["内容类型点播次数占比"],
              ["不同平台点播次数占比"],
              ["移动本土原创节目点播TOP10"],
              ["联通本土原创节目点播TOP10"],
              ["电信本土原创节目点播TOP10"]
            );
            data_arr.push(
              vm.GT_UVWR1_Y1.data,
              // vm.GT_UVWR1_Y2.data,   //此处数据格式需处理
              Y2_data_temp,
              vm.GT_UVWR1_Y3.data,
              vm.GT_UVWR1_Z1.data,
              vm.GT_UVWR1_Z2.data,
              vm.GT_UVWR1_Z3.data
            );
          } catch (error) {
            console.log(error);
          }
          // ///
          temp_titleArr = title_arr;
          temp_DataArr = data_arr;

          if (temp_titleArr.length == 0 || temp_DataArr.length == 0) {
            console.log("请选择时间！");
            return;
          }

          vm.$store
            .dispatch("set_PR_Excel_titleArr", temp_titleArr)
            .then(function (response_title) {
              console.log(response_title);
              vm.$store
                .dispatch("set_PR_Excel_dataArr", temp_DataArr)
                .then(function (response_dataArr) {
                  console.log(response_dataArr);
                  // 设置excel按钮下载状态 - 开
                  vm.$store
                    .dispatch("set_PR_excel_ifCanDownload", true)
                    .then(function (response_dataArr) {
                      console.log("下载开");
                    })
                    .catch(function (error) {
                      console.info(error);
                    });
                })
                .catch(function (error) {
                  console.info(error);
                });
            })
            .catch(function (error) {
              console.info(error);
            });
        }
      }, 6000); //m5: 5000 + 200 * 5
    },
    drawLine() {
      let vm = this;
      var myChart = this.$echarts.init(document.getElementById("GT_UVWR1_Y2"));
      var data = {
        color: [
          "#5B9BD5",
          "#ED7D31",
          "#FFC000",
          "#A9D18E",
          "#5B9BD5",
          "#70AD47",
          "#FFCCCC",
          "#E3E55D"
        ],
        data: vm.GT_UVWR1_Y2.data
      };
      var option = this.common(data);
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    drawLine2() {
      var myChart = this.$echarts.init(document.getElementById("GT_UVWR1_Y3"));
      // var data = {
      //   color: ["#5B9BD5", "#ED7D31", "#FFC000"],
      //   // data: [
      //   //   { value: 70, name: "移动" },
      //   //   { value: 20, name: "联通" },
      //   //   { value: 14, name: "电信" }
      //   // ]
      // };
      var option = this.common(data);
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    common(data) {
      var option = {
        title: {
          text: "",
          subtext: "",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        //图表自带工具
        toolbox: {
          show: true,
          right: "6%",
          feature: {
            saveAsImage: {}
          }
        },
        legend: {
          icon: "re",
          top: "20%",
          left: "70%",
          itemWidth: 12, // 设置宽度
          itemHeight: 7, // 设置高度
          itemGap: 10, // 设置间距
          padding: 0,
          orient: "vertical", //垂直显示
          textStyle: {
            fontSize: 14,
            color: "rgba(0, 0, 0, 0.65)"
          }
        },
        series: [
          {
            type: "pie",
            radius: "55%",
            center: ["45%", "50%"],
            selectedMode: "single",
            // color: ["#FCB84F", "#F97E6F"],
            color: data.color,

            label: {
              normal: {
                formatter: "{b}:\n {d}%" // 只显示百分比
              }
            },
            labelLine: {
              normal: {
                smooth: 0.2,
                length: 1
              }
            },
            // data: [{ value: 23, name: "订购" }, { value: 77, name: "未订购" }],
            data: data.data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      return option;
    }
  }
};
</script>

<style >
</style>
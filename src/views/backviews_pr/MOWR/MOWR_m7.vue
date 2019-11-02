<template>
  <div class="MOWR_m7">
    <el-row class="special_click_data back_white">
      <el-row>
        <p class="m_common_sm_title_font">停机用户表</p>
        <table class="m_table" border="1">
          <tr class="tr_title">
            <td
              class="m_font_bold"
              v-for="(item,index) in form.title "
              :key="index + 'a' "
              colspan="1"
            >{{item}}</td>
          </tr>
          <tr v-show="ifFormRowShow_yd" class="tr_row">
            <template v-for="(item,index) in form.row1 ">
              <td :key="index + '1b' " v-if="index == 0" colspan="1" rowspan="3">{{item}}</td>
            </template>
            <template v-for="(item,index) in form.row1 ">
              <td :key="index + '2b' " v-if="index != 0" colspan="1">{{item}}</td>
            </template>
          </tr>
          <tr v-show="ifFormRowShow_yd" class="tr_row">
            <td v-for="(item,index) in form.row2 " :key="index + 'c' " colspan="1">{{item}}</td>
          </tr>
          <tr v-show="ifFormRowShow_yd" class="tr_row">
            <td
              class="m_font_bold"
              v-for="(item,index) in form.row3 "
              :key="index + 'd' "
              colspan="1"
            >{{item}}</td>
          </tr>
          <tr v-show="ifFormRowShow_lt" class="tr_row">
            <template v-for="(item,index) in form.row4 ">
              <td :key="index + '1b' " v-if="index == 0" colspan="1" rowspan="3">{{item}}</td>
            </template>
            <template v-for="(item,index) in form.row4 ">
              <td :key="index + '2b' " v-if="index != 0" colspan="1">{{item}}</td>
            </template>
          </tr>
          <tr v-show="ifFormRowShow_lt" class="tr_row">
            <td v-for="(item,index) in form.row5 " :key="index + 'c' " colspan="1">{{item}}</td>
          </tr>
          <tr v-show="ifFormRowShow_lt" class="tr_row">
            <td
              class="m_font_bold"
              v-for="(item,index) in form.row6 "
              :key="index + 'd' "
              colspan="1"
            >{{item}}</td>
          </tr>
          <tr v-show="ifFormRowShow_dx" class="tr_row">
            <template v-for="(item,index) in form.row7 ">
              <td :key="index + '1b' " v-if="index == 0" colspan="1" rowspan="3">{{item}}</td>
            </template>
            <template v-for="(item,index) in form.row7 ">
              <td :key="index + '2b' " v-if="index != 0" colspan="1">{{item}}</td>
            </template>
          </tr>
          <tr v-show="ifFormRowShow_dx" class="tr_row">
            <td v-for="(item,index) in form.row8 " :key="index + 'c' " colspan="1">{{item}}</td>
          </tr>
          <tr v-show="ifFormRowShow_dx" class="tr_row">
            <td
              class="m_font_bold"
              v-for="(item,index) in form.row9 "
              :key="index + 'd' "
              colspan="1"
            >{{item}}</td>
          </tr>
        </table>
      </el-row>
      <el-row :gutter="100" class="special_click_chart">
        <el-col :span="8" class="height_auto">
          <p class="m_common_sm_title_font">周新增占比</p>
          <!-- <div id="MOWR_m7_A1" :style="{width: '100%',height: '300px'}"></div> -->
          <numberOfRegisteredUsers2
            :fillinData="MOWR_m7_A1"
            :style="{width: '100%',height: '300px'}"
          ></numberOfRegisteredUsers2>
        </el-col>
        <el-col :span="8" class="height_auto">
          <p class="m_common_sm_title_font">周销户占比</p>
          <!-- <div id="MOWR_m7_A2" :style="{width: '100%',height: '300px'}"></div> -->
          <numberOfRegisteredUsers2
            :fillinData="MOWR_m7_A2"
            :style="{width: '100%',height: '300px'}"
          ></numberOfRegisteredUsers2>
        </el-col>
        <el-col :span="8" class="height_auto">
          <p class="m_common_sm_title_font">周净增占比</p>
          <!-- <div id="MOWR_m7_A3" :style="{width: '100%',height: '300px'}"></div> -->
          <numberOfRegisteredUsers2
            :fillinData="MOWR_m7_A3"
            :style="{width: '100%',height: '300px'}"
          ></numberOfRegisteredUsers2>
        </el-col>
      </el-row>
    </el-row>
    <!-- <div
      v-show="false"
    >{{PR_operator}}{{MOWR_m7_A1_Change}}{{MOWR_m7_A2_Change}}{{MOWR_m7_A3_Change}}</div>-->
  </div>
</template>

<script>
import BarChartSingle2 from "@/views/backcoms/commoncomponents2/BarChartSingle_Change2"; //（空心）饼图组件
import numberOfRegisteredUsers2 from "@/views/backcoms/commoncomponents2/numberOfRegisteredUsers_Change2"; //在册用户数

import { mapGetters } from "vuex";

export default {
  name: "MOWR_m7",
  components: {
    "bar-chart-single2": BarChartSingle2,
    numberOfRegisteredUsers2: numberOfRegisteredUsers2
  },
  props: ["m7_data"],
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
    m7_data(newValue, oldValue) {
      // console.log("m7_data - newValue");
      // console.log(newValue);
      let vm = this;
      try {
        vm.form = newValue[0][0];
      } catch (error) {
        console.log(error);
      }
      try {
        vm.MOWR_m7_A1 = newValue[0][1];
      } catch (error) {
        console.log(error);
      }
      try {
        vm.MOWR_m7_A2 = newValue[0][2];
      } catch (error) {
        console.log(error);
      }
      try {
        vm.MOWR_m7_A3 = newValue[0][3];
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {
    ...mapGetters(["PR_week", "PR_operator", "PR_Report_index"]),
    ifFormRowShow_yd: {
      get: function() {
        if (this.PR_operator == null || this.PR_operator.length == 0) {
          return true;
        } else {
          if (this.PR_operator.indexOf("移动") > -1) {
            return true;
          }
        }
        return false;
      },
      set: function(newValue) {}
    },
    ifFormRowShow_lt: {
      get: function() {
        if (this.PR_operator == null || this.PR_operator.length == 0) {
          return true;
        } else {
          if (this.PR_operator.indexOf("联通") > -1) {
            return true;
          }
        }
        return false;
      },
      set: function(newValue) {}
    },
    ifFormRowShow_dx: {
      get: function() {
        // console.log("~~~MOWR_m7_A1_Change2222");

        if (this.PR_operator == null || this.PR_operator.length == 0) {
          return true;
        } else {
          if (this.PR_operator.indexOf("电信") > -1) {
            // console.log("~~~MOWR_m7_A1_Change2333");

            return true;
          }
        }
        return false;
      },
      set: function(newValue) {}
    },
    MOWR_m7_A1_Change: {
      get: function() {
        // console.log("~~~MOWR_m7_A1_Change");
        let vm = this;
        if (vm.PR_operator == null || vm.PR_operator.length == 0) {
          // console.log("~~~MOWR_m7_A1_Change2");

          return vm.MOWR_m7_A1;
        } else {
          // console.log("~~~MOWR_m7_A1_Change3");

          let color = [];
          let data = [];
          if (vm.PR_operator.indexOf("移动") > -1) {
            color.push(vm.MOWR_m7_A1.color[0]);
            data.push(vm.MOWR_m7_A1.data[0]);
          }
          if (vm.PR_operator.indexOf("联通") > -1) {
            color.push(vm.MOWR_m7_A1.color[1]);
            data.push(vm.MOWR_m7_A1.data[1]);
          }
          if (vm.PR_operator.indexOf("电信") > -1) {
            color.push(vm.MOWR_m7_A1.color[2]);
            data.push(vm.MOWR_m7_A1.data[2]);
          }
          // console.log("~~~MOWR_m7_A1_Change4");

          setTimeout(function() {
            vm.drawLine();
          }, 300);
          // console.log("~~~MOWR_m7_A1_Change5");

          let temp = {
            id: vm.MOWR_m7_A1.id,
            title: vm.MOWR_m7_A1.title,
            color: color,
            data: data
          };
          // console.log(temp);
          return temp;
        }
        return vm.MOWR_m7_A1;
      },
      set: function(newValue) {}
    },
    MOWR_m7_A2_Change: {
      get: function() {
        let vm = this;
        if (vm.PR_operator == null || vm.PR_operator.length == 0) {
          return vm.MOWR_m7_A2;
        } else {
          let color = [];
          let data = [];
          if (vm.PR_operator.indexOf("移动") > -1) {
            color.push(vm.MOWR_m7_A2.color[0]);
            data.push(vm.MOWR_m7_A2.data[0]);
          }
          if (vm.PR_operator.indexOf("联通") > -1) {
            color.push(vm.MOWR_m7_A2.color[1]);
            data.push(vm.MOWR_m7_A2.data[1]);
          }
          if (vm.PR_operator.indexOf("电信") > -1) {
            color.push(vm.MOWR_m7_A2.color[2]);
            data.push(vm.MOWR_m7_A2.data[2]);
          }
          setTimeout(function() {
            vm.drawLine2();
          }, 300);
          return {
            id: vm.MOWR_m7_A2.id,
            title: vm.MOWR_m7_A2.title,
            color: color,
            data: data
          };
        }
        return vm.MOWR_m7_A2;
      },
      set: function(newValue) {}
    },
    MOWR_m7_A3_Change: {
      get: function() {
        let vm = this;
        if (vm.PR_operator == null || vm.PR_operator.length == 0) {
          return vm.MOWR_m7_A3;
        } else {
          let color = [];
          let data = [];
          if (vm.PR_operator.indexOf("移动") > -1) {
            color.push(vm.MOWR_m7_A3.color[0]);
            data.push(vm.MOWR_m7_A3.data[0]);
          }
          if (vm.PR_operator.indexOf("联通") > -1) {
            color.push(vm.MOWR_m7_A3.color[1]);
            data.push(vm.MOWR_m7_A3.data[1]);
          }
          if (vm.PR_operator.indexOf("电信") > -1) {
            color.push(vm.MOWR_m7_A3.color[2]);
            data.push(vm.MOWR_m7_A3.data[2]);
          }
          setTimeout(function() {
            vm.drawLine3();
          }, 300);
          return {
            id: vm.MOWR_m7_A3.id,
            title: vm.MOWR_m7_A3.title,
            color: color,
            data: data
          };
        }
        return vm.MOWR_m7_A3;
      },
      set: function(newValue) {}
    }
  },
  mounted() {
    // this.drawLine(); // 运营商1到0不刷新 =》换格式
    // this.drawLine2();
    // this.drawLine3();
  },
  data() {
    return {
      form: {
        title: [
          "运营商",
          "分类",
          "7月1日",
          "7月2日",
          "7月3日",
          "7月4日",
          "7月5日",
          "7月6日",
          "7月7日",
          "合计"
        ],
        row1: [
          "移动",
          "新增",
          "79",
          "130",
          "408",
          "533",
          "311",
          "310",
          "534",
          "2098"
        ],
        row2: ["销户", "0", "0", "0", "0", "0", "0", "0", "0"],
        row3: ["净增", "0", "0", "0", "0", "0", "0", "0", "0"],
        row4: [
          "联通",
          "新增",
          "79",
          "130",
          "408",
          "533",
          "311",
          "310",
          "534",
          "2098"
        ],
        row5: ["销户", "0", "0", "0", "0", "0", "0", "0", "0"],
        row6: ["净增", "0", "0", "0", "0", "0", "0", "0", "0"],
        row7: [
          "电信",
          "新增",
          "79",
          "130",
          "408",
          "533",
          "311",
          "310",
          "534",
          "2098"
        ],
        row8: ["销户", "0", "0", "0", "0", "0", "0", "0", "0"],
        row9: ["净增", "0", "0", "0", "0", "0", "0", "0", "0"]
      },
      // MOWR_m7_A1: {
      //   id: "MOWR_m7_A1",
      //   title: "",
      //   color: ["#C0504D", "#9BBB59", "#CC7B38"],
      //   data: [
      //     { value: 70, name: "移动" },
      //     { value: 20, name: "联通" },
      //     { value: 14, name: "电信" }
      //   ]
      // },
      // MOWR_m7_A2: {
      //   id: "MOWR_m7_A2",
      //   title: "",
      //   color: ["#C0504D", "#9BBB59", "#CC7B38"],
      //   data: [
      //     { value: 70, name: "移动" },
      //     { value: 20, name: "联通" },
      //     { value: 14, name: "电信" }
      //   ]
      // },
      // MOWR_m7_A3: {
      //   id: "MOWR_m7_A3",
      //   title: "",
      //   color: ["#C0504D", "#9BBB59", "#CC7B38"],
      //   data: [
      //     { value: 70, name: "移动" },
      //     { value: 20, name: "联通" },
      //     { value: 14, name: "电信" }
      //   ]
      // },
      MOWR_m7_A1: {
        title: "",
        id: "MOWR_m7_A1",
        color: ["#C0504D", "#9BBB59", "#CC7B38"],
        data: [["运营商", "移动", "联通", "电信"], ["占比", 70, 20, 14]],
        label_formatter: "{c}\n{d}%"
      },
      MOWR_m7_A2: {
        title: "",
        id: "MOWR_m7_A2",
        color: ["#C0504D", "#9BBB59", "#CC7B38"],
        data: [["运营商", "移动", "联通", "电信"], ["占比", 70, 20, 14]],
        label_formatter: "{c}\n{d}%"
      },
      MOWR_m7_A3: {
        title: "",
        id: "MOWR_m7_A3",
        color: ["#C0504D", "#9BBB59", "#CC7B38"],
        data: [["运营商", "移动", "联通", "电信"], ["占比", 70, 20, 14]],
        label_formatter: "{c}\n{d}%"
      }
    };
  },
  methods: {
    Excel_data_manage() {
      console.log("Excel_data_manage - 3 - m7");
      let vm = this;
      setTimeout(function() {
        if (vm.PR_Report_index == 3) {
          let temp_titleArr = [];
          let temp_DataArr = [];
          // /// 临时
          // temp_titleArr.push(["title1"]);
          // temp_titleArr.push(["title2"]);
          // temp_titleArr.push(["title3"]);

          // temp_DataArr.push([
          //   ["运营商", "移动", "联通", "电信33333.7777"],
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
            //停机用户表
            let down_user_arr = [];
            down_user_arr.push(
              vm.form.title,
              vm.form.row1,
              vm.form.row2,
              vm.form.row3,
              vm.form.row4,
              vm.form.row5,
              vm.form.row6,
              vm.form.row7,
              vm.form.row8,
              vm.form.row9
            );

            title_arr.push(
              ["停机用户表"],
              ["周新增占比"],
              ["周销户占比"],
              ["周净增占比"]
            );
            data_arr.push(
              down_user_arr,
              vm.MOWR_m7_A1.data,
              vm.MOWR_m7_A2.data,
              vm.MOWR_m7_A3.data
            );
          } catch (error) {
            console.log(error);
          }
          // ///
          temp_titleArr = title_arr;
          temp_DataArr = data_arr;
          vm.$store
            .dispatch("set_PR_Excel_titleArr", temp_titleArr)
            .then(function(response_title) {
              console.log(response_title);
              vm.$store
                .dispatch("set_PR_Excel_dataArr", temp_DataArr)
                .then(function(response_dataArr) {
                  console.log(response_dataArr);
                })
                .catch(function(error) {
                  console.info(error);
                });
            })
            .catch(function(error) {
              console.info(error);
            });
        }
      }, 6400); //m7: 5000 + 200 * 7
    },
    drawLine() {
      this.common(1);
    },
    drawLine2() {
      this.common(2);
    },
    drawLine3() {
      this.common(3);
    },
    common(num) {
      let vm = this;
      var data;
      if (num == 1) {
        data = {
          id: vm.MOWR_m7_A1_Change.id,
          title: vm.MOWR_m7_A1_Change.title,
          color: vm.MOWR_m7_A1_Change.color,
          data: vm.MOWR_m7_A1_Change.data
        };
      }
      if (num == 2) {
        data = {
          id: vm.MOWR_m7_A2_Change.id,
          title: vm.MOWR_m7_A2_Change.title,
          color: vm.MOWR_m7_A2_Change.color,
          data: vm.MOWR_m7_A2_Change.data
        };
      }
      if (num == 3) {
        data = {
          id: vm.MOWR_m7_A3_Change.id,
          title: vm.MOWR_m7_A3_Change.title,
          color: vm.MOWR_m7_A3_Change.color,
          data: vm.MOWR_m7_A3_Change.data
        };
      }
      var myChart = vm.$echarts.init(document.getElementById(data.id));

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
      myChart.clear();
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  }
};
</script>



<style scoped>
.m_table {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
}
.tr_title {
  width: 100%;
}
.tr_row {
  width: 100%;
}
.tr_title td {
  background: #f0f0f0;
  border: 1px solid #999;
  font-weight: bold;
  font-size: 14px;
  color: #333;
  width: auto;
  margin: auto;
  text-align: center;
  line-height: 63px;
  height: 63px;
}
.tr_row td {
  border: 1px solid #999;
  font-size: 14px;
  color: #333;
  width: auto;
  margin: auto;
  text-align: center;
  line-height: 50px;
  height: 50px;
}
</style>

<style >
</style>
<template>
  <div class="MOWR_m6">
    <el-row class="special_click_data back_white">
      <el-row>
        <p class="m_common_sm_title_font">停机用户表</p>
        <table class="m_table" border="1">
          <tr class="tr_title">
            <td v-for="(item,index) in form.title " :key="index + 'a' " colspan="1">{{item}}</td>
          </tr>
          <tr v-show="ifFormRowShow_yd" class="tr_row">
            <td v-for="(item,index) in form.rowA " :key="index + 'b' " colspan="1">{{item}}</td>
          </tr>
          <tr v-show="ifFormRowShow_lt" class="tr_row">
            <td v-for="(item,index) in form.rowB " :key="index + 'c' " colspan="1">{{item}}</td>
          </tr>
          <tr v-show="ifFormRowShow_dx" class="tr_row">
            <td v-for="(item,index) in form.rowC " :key="index + 'd' " colspan="1">{{item}}</td>
          </tr>
        </table>
      </el-row>
      <el-row :gutter="100" class="special_click_chart m_textalign_c">
        <el-col v-show="ifFormRowShow_yd" :span="8" class="height_auto">
          <p class="m_common_sm_title_font">移动停机用户图</p>
          <smooth-line-chart3 :smoothLineData="MOWR_m6_A1"></smooth-line-chart3>
        </el-col>
        <el-col v-show="ifFormRowShow_lt" :span="8" class="height_auto">
          <p class="m_common_sm_title_font">联通停机用户图</p>
          <smooth-line-chart3 :smoothLineData="MOWR_m6_A2"></smooth-line-chart3>
        </el-col>
        <el-col v-show="ifFormRowShow_dx" :span="8" class="height_auto">
          <p class="m_common_sm_title_font">电信停机用户图</p>
          <smooth-line-chart3 :smoothLineData="MOWR_m6_A3"></smooth-line-chart3>
        </el-col>
      </el-row>
      <el-row>
        <p class="m_common_sm_title_font">停机用户表（上周）</p>
        <table class="m_table" border="1">
          <tr class="tr_title">
            <td v-for="(item,index) in form2.title " :key="index + 'a' " colspan="1">{{item}}</td>
          </tr>
          <tr v-show="ifFormRowShow_yd" class="tr_row">
            <td v-for="(item,index) in form2.rowA " :key="index + 'b' " colspan="1">{{item}}</td>
          </tr>
          <tr v-show="ifFormRowShow_lt" class="tr_row">
            <td v-for="(item,index) in form2.rowB " :key="index + 'c' " colspan="1">{{item}}</td>
          </tr>
          <tr v-show="ifFormRowShow_dx" class="tr_row">
            <td v-for="(item,index) in form2.rowC " :key="index + 'd' " colspan="1">{{item}}</td>
          </tr>
        </table>
      </el-row>
      <el-row :gutter="100" class="special_click_chart m_textalign_c">
        <el-col v-show="ifFormRowShow_yd" :span="8" class="height_auto">
          <p class="m_common_sm_title_font">移动停机用户图（上周）</p>
          <smooth-line-chart3 :smoothLineData="MOWR_m6_A1_2"></smooth-line-chart3>
        </el-col>
        <el-col v-show="ifFormRowShow_lt" :span="8" class="height_auto">
          <p class="m_common_sm_title_font">联通停机用户图（上周）</p>
          <smooth-line-chart3 :smoothLineData="MOWR_m6_A2_2"></smooth-line-chart3>
        </el-col>
        <el-col v-show="ifFormRowShow_dx" :span="8" class="height_auto">
          <p class="m_common_sm_title_font">电信停机用户图（上周）</p>
          <smooth-line-chart3 :smoothLineData="MOWR_m6_A3_2"></smooth-line-chart3>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import SmoothLineChart3 from "@/views/backcoms/commoncomponents2/SmoothLineChart_Change3"; //平滑曲线折线图组件-Y轴百分比
import { mapGetters } from "vuex";

export default {
  name: "MOWR_m6",
  components: {
    "smooth-line-chart3": SmoothLineChart3
  },
  props: ["m6_data"],
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
        if (this.PR_operator == null || this.PR_operator.length == 0) {
          return true;
        } else {
          if (this.PR_operator.indexOf("电信") > -1) {
            return true;
          }
        }
        return false;
      },
      set: function(newValue) {}
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
    m6_data(newValue, oldValue) {
      // console.log("m6_data - newValue");
      // console.log(newValue);
      let vm = this;
      try {
        vm.form = newValue[0][0];
      } catch (error) {
        console.log(error);
      }
      try {
        vm.MOWR_m6_A1 = newValue[0][1];
      } catch (error) {
        console.log(error);
      }
      try {
        vm.MOWR_m6_A2 = newValue[0][2];
      } catch (error) {
        console.log(error);
      }
      try {
        vm.MOWR_m6_A3 = newValue[0][3];
      } catch (error) {
        console.log(error);
      }
      try {
        vm.form2 = newValue[1][0];
      } catch (error) {
        console.log(error);
      }
      try {
        vm.MOWR_m6_A1_2 = newValue[1][1];
      } catch (error) {
        console.log(error);
      }
      try {
        vm.MOWR_m6_A2_2 = newValue[1][2];
      } catch (error) {
        console.log(error);
      }
      try {
        vm.MOWR_m6_A3_2 = newValue[1][3];
      } catch (error) {
        console.log(error);
      }
    }
  },

  data() {
    return {
      form: {
        title: ["停机数", "", "", "", "", "", "", "", "总计"],
        rowA: ["移动", "0", "0", "0", "0", "0", "0", "0", "0"],
        rowC: ["联通", "0", "0", "0", "0", "0", "0", "0", "0"],
        rowB: ["电信", "0", "0", "0", "0", "0", "0", "0", "0"]
      },
      MOWR_m6_A1: {
        title: "",
        id: "MOWR_m6_A1",
        color: ["#8064A2"],
        data: [
          ["product", "", "", "", "", "", "", ""],
          ["移动", 0, 0, 0, 0, 0, 0, 0]
        ]
      },
      MOWR_m6_A2: {
        title: "",
        id: "MOWR_m6_A2",
        color: ["#9BBB59"],
        data: [
          ["product", "", "", "", "", "", "", ""],
          ["联通", 0, 0, 0, 0, 0, 0, 0]
        ]
      },
      MOWR_m6_A3: {
        title: "",
        id: "MOWR_m6_A3",
        color: ["#C0504D"],
        data: [
          ["product", "", "", "", "", "", "", ""],
          ["电信", 0, 0, 0, 0, 0, 0, 0]
        ]
      },
      form2: {
        title: ["停机数", "", "", "", "", "", "", "", "总计"],
        rowA: ["移动", "0", "0", "0", "0", "0", "0", "0", "0"],
        rowC: ["联通", "0", "0", "0", "0", "0", "0", "0", "0"],
        rowB: ["电信", "0", "0", "0", "0", "0", "0", "0", "0"]
      },
      MOWR_m6_A1_2: {
        title: "",
        id: "MOWR_m6_A1_2",
        color: ["#8064A2"],
        data: [
          ["product", "", "", "", "", "", "", ""],
          ["移动", 0, 0, 0, 0, 0, 0, 0]
        ]
      },
      MOWR_m6_A2_2: {
        title: "",
        id: "MOWR_m6_A2_2",
        color: ["#9BBB59"],
        data: [
          ["product", "", "", "", "", "", "", ""],
          ["联通", 0, 0, 0, 0, 0, 0, 0]
        ]
      },
      MOWR_m6_A3_2: {
        title: "",
        id: "MOWR_m6_A3_2",
        color: ["#C0504D"],
        data: [
          ["product", "", "", "", "", "", "", ""],
          ["电信", 0, 0, 0, 0, 0, 0, 0]
        ]
      }
    };
  },
  methods: {
    Excel_data_manage() {
      console.log("Excel_data_manage - 3 - m6");
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
          //   ["运营商", "移动", "联通", "电信33333.666"],
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
            let down_user_data = [];
            down_user_data.push(
              vm.form.title,
              vm.form.rowA,
              vm.form.rowC,
              vm.form.rowB
            );
            //停机用户表（上周）
            let last_down_user_data = [];
            last_down_user_data.push(
              vm.form2.title,
              vm.form2.rowA,
              vm.form2.rowC,
              vm.form2.rowB
            );
            title_arr.push(
              ["停机用户表"],
              ["移动停机用户图"],
              ["联通停机用户图"],
              ["电信停机用户图"],
              ["停机用户表（上周）"],
              ["移动停机用户图(上周)"],
              ["联通停机用户图(上周)"],
              ["电信停机用户图(上周)"]
            );
            data_arr.push(
              down_user_data,
              vm.MOWR_m6_A1.data,
              vm.MOWR_m6_A2.data,
              vm.MOWR_m6_A3.data,
              last_down_user_data,
              vm.MOWR_m6_A1_2.data,
              vm.MOWR_m6_A2_2.data,
              vm.MOWR_m6_A3_2.data
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
      }, 6200); //m6: 5000 + 200 * 6
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
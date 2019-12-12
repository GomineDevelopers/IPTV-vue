<template>
  <div class="MOWR_m2">
    <el-row class="special_click_data back_white">
      <el-row :gutter="100" class="special_click_chart">
        <el-col :span="12" class="height_auto">
          <p class="m_common_sm_title_font">24小时新增用户激活率表</p>
          <table class="m_table" border="1">
            <tr class="tr_title">
              <td
                v-for="(item,index) in form_Change.title "
                :key="index + 'a' "
                colspan="1"
              >{{item}}</td>
            </tr>
            <tr v-show="ifFormRowShow_yd" class="tr_row">
              <td v-for="(item,index) in form_Change.rowA " :key="index + 'b' " colspan="1">{{item}}</td>
            </tr>
            <tr v-show="ifFormRowShow_lt" class="tr_row">
              <td v-for="(item,index) in form_Change.rowB " :key="index + 'c' " colspan="1">{{item}}</td>
            </tr>
            <tr v-show="ifFormRowShow_dx" class="tr_row">
              <td v-for="(item,index) in form_Change.rowC " :key="index + 'd' " colspan="1">{{item}}</td>
            </tr>
            <tr class="tr_row">
              <td v-for="(item,index) in form_Change.rowD " :key="index + 'e' " colspan="1">{{item}}</td>
            </tr>
          </table>
        </el-col>
        <el-col :span="12" class="height_auto">
          <p class="m_common_sm_title_font">24小时新增用户激活率图</p>
          <smooth-line-chart2 :smoothLineData="MOWR_m2_A1"></smooth-line-chart2>
        </el-col>
      </el-row>
      <el-row :gutter="100" class="special_click_chart">
        <el-col :span="12" class="height_auto">
          <p class="m_common_sm_title_font">24小时新增用户激活率表（上周）</p>
          <table class="m_table" border="1">
            <tr class="tr_title">
              <td
                v-for="(item,index) in form_Change2.title "
                :key="index + 'a' "
                colspan="1"
              >{{item}}</td>
            </tr>
            <tr v-show="ifFormRowShow_yd" class="tr_row">
              <td
                v-for="(item,index) in form_Change2.rowA "
                :key="index + 'b' "
                colspan="1"
              >{{item}}</td>
            </tr>
            <tr v-show="ifFormRowShow_lt" class="tr_row">
              <td
                v-for="(item,index) in form_Change2.rowB "
                :key="index + 'c' "
                colspan="1"
              >{{item}}</td>
            </tr>
            <tr v-show="ifFormRowShow_dx" class="tr_row">
              <td
                v-for="(item,index) in form_Change2.rowC "
                :key="index + 'd' "
                colspan="1"
              >{{item}}</td>
            </tr>
            <tr class="tr_row">
              <td
                v-for="(item,index) in form_Change2.rowD "
                :key="index + 'e' "
                colspan="1"
              >{{item}}</td>
            </tr>
          </table>
        </el-col>
        <el-col :span="12" class="height_auto">
          <p class="m_common_sm_title_font">24小时新增用户激活率图（上周）</p>
          <smooth-line-chart2 :smoothLineData="MOWR_m2_A2"></smooth-line-chart2>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import SmoothLineChart2 from "@/views/backcoms/commoncomponents2/SmoothLineChart_Change2"; //平滑曲线折线图组件-Y轴百分比
import { mapGetters } from "vuex";

export default {
  name: "MOWR_m2",
  components: {
    "smooth-line-chart2": SmoothLineChart2
  },
  props: ["m2_data"],
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
    },
    form_Change: {
      get: function() {
        try {
          let sumArr = [];
          let sum = 0;
          let length;
          let i;
          let rowD;
          if (this.PR_operator == null || this.PR_operator.length == 0) {
            sumArr.push(this.form.rowA[8]);
            sumArr.push(this.form.rowB[8]);
            sumArr.push(this.form.rowC[8]);
            length = sumArr.length;
            for (i = 0; i < length; i++) {
              sum += parseInt(sumArr[i]);
            }
            rowD = this.form.rowD;
            // rowD[8] = String(sum);
            return {
              title: this.form.title,
              rowA: this.form.rowA,
              rowB: this.form.rowB,
              rowC: this.form.rowC,
              rowD: this.form.rowD
            };
          } else {
            if (this.PR_operator.indexOf("移动") > -1) {
              sumArr.push(this.form.rowA[8]);
            }
            if (this.PR_operator.indexOf("联通") > -1) {
              sumArr.push(this.form.rowB[8]);
            }
            if (this.PR_operator.indexOf("电信") > -1) {
              sumArr.push(this.form.rowC[8]);
            }
            length = sumArr.length;
            for (i = 0; i < length; i++) {
              sum += parseInt(sumArr[i]);
            }
            rowD = this.form.rowD;
            // rowD[8] = String(sum);

            return {
              title: this.form.title,
              rowA: this.form.rowA,
              rowB: this.form.rowB,
              rowC: this.form.rowC,
              rowD: this.form.rowD
            };
          }

          return this.form;
        } catch (error) {
          console.log(error);
        }
      },
      set: function(newValue) {}
    },
    form_Change2: {
      get: function() {
        try {
          let sumArr = [];
          let sum = 0;
          let length;
          let i;
          let rowD;
          if (this.PR_operator == null || this.PR_operator.length == 0) {
            sumArr.push(this.form2.rowA[8]);
            sumArr.push(this.form2.rowB[8]);
            sumArr.push(this.form2.rowC[8]);
            length = sumArr.length;
            for (i = 0; i < length; i++) {
              sum += parseInt(sumArr[i]);
            }
            rowD = this.form2.rowD;
            // rowD[8] = String(sum);
            return {
              title: this.form2.title,
              rowA: this.form2.rowA,
              rowB: this.form2.rowB,
              rowC: this.form2.rowC,
              rowD: this.form2.rowD
            };
          } else {
            if (this.PR_operator.indexOf("移动") > -1) {
              sumArr.push(this.form2.rowA[8]);
            }
            if (this.PR_operator.indexOf("联通") > -1) {
              sumArr.push(this.form2.rowB[8]);
            }
            if (this.PR_operator.indexOf("电信") > -1) {
              sumArr.push(this.form2.rowC[8]);
            }
            length = sumArr.length;
            for (i = 0; i < length; i++) {
              sum += parseInt(sumArr[i]);
            }
            rowD = this.form2.rowD;
            // rowD[8] = String(sum);

            return {
              title: this.form2.title,
              rowA: this.form2.rowA,
              rowB: this.form2.rowB,
              rowC: this.form2.rowC,
              rowD: this.form2.rowD
            };
          }

          return this.form2;
        } catch (error) {
          console.log(error);
        }
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
    m2_data(newValue, oldValue) {
      let vm = this;
      // console.log("m2_data - newValue");
      // console.log(newValue);
      try {
        vm.form = newValue[0][0];
      } catch (error) {
        console.log(error);
      }
      try {
        vm.MOWR_m2_A1 = newValue[0][1];
      } catch (error) {
        console.log(error);
      }
      try {
        vm.form2 = newValue[1][0];
      } catch (error) {
        console.log(error);
      }
      try {
        vm.MOWR_m2_A2 = newValue[1][1];
      } catch (error) {
        console.log(error);
      }
    }
  },

  data() {
    return {
      form: {
        title: ["日新增", "", "", "", "", "", "", "", "总计"],
        rowA: ["移动", "0", "0", "0", "0", "0", "0", "0", "0"],
        rowB: ["联通", "0", "0", "0", "0", "0", "0", "0", "0"],
        rowC: ["电信", "0", "0", "0", "0", "0", "0", "0", "0"],
        rowD: ["", "", "", "", "", "", "", "", "0"]
      },
      MOWR_m2_A1: {
        title: "",
        id: "MOWR_m2_A1",
        color: ["#8064A2", "#9BBB59", "#C0504D"],
        data: [
          ["product", "", "", "", "", "", "", ""],
          ["移动", 0, 0, 0, 0, 0, 0, 0],
          ["联通", 0, 0, 0, 0, 0, 0, 0],
          ["电信", 0, 0, 0, 0, 0, 0, 0]
        ]
      },
      form2: {
        title: ["日新增", "", "", "", "", "", "", "", "总计"],
        rowA: ["移动", "0", "0", "0", "0", "0", "0", "0", "0"],
        rowB: ["联通", "0", "0", "0", "0", "0", "0", "0", "0"],
        rowC: ["电信", "0", "0", "0", "0", "0", "0", "0", "0"],
        rowD: ["", "", "", "", "", "", "", "", "0"]
      },
      MOWR_m2_A2: {
        title: "",
        id: "MOWR_m2_A2",
        color: ["#8064A2", "#9BBB59", "#C0504D"],
        data: [
          ["product", "", "", "", "", "", "", ""],
          ["移动", 0, 0, 0, 0, 0, 0, 0],
          ["联通", 0, 0, 0, 0, 0, 0, 0],
          ["电信", 0, 0, 0, 0, 0, 0, 0]
        ]
      }
    };
  },
  methods: {
    Excel_data_manage() {
      // console.log("Excel_data_manage - 3 - m2");
      let vm = this;
      setTimeout(function() {
        if (vm.PR_Report_index == 3) {
          let temp_titleArr = [];
          let temp_DataArr = [];
          // /// 临时
          temp_titleArr.push(["title1"]);
          temp_titleArr.push(["title2"]);
          temp_titleArr.push(["title3"]);

          temp_DataArr.push([
            ["运营商", "移动", "联通", "电信33333.222"],
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

          /// 实际
          let title_arr = [];
          let data_arr = [];
          try {
            //24小时新增用户激活率表
            let hour_new_add_array = [];
            hour_new_add_array.push(vm.form.title);
            hour_new_add_array.push(vm.form.rowA);
            hour_new_add_array.push(vm.form.rowB);
            hour_new_add_array.push(vm.form.rowC);
            hour_new_add_array.push(vm.form.rowD);

            //24小时新增用户激活率表（上周）
            let last_hour_new_add_array = [];
            last_hour_new_add_array.push(vm.form2.title);
            last_hour_new_add_array.push(vm.form2.rowA);
            last_hour_new_add_array.push(vm.form2.rowB);
            last_hour_new_add_array.push(vm.form2.rowC);
            last_hour_new_add_array.push(vm.form2.rowD);

            title_arr.push(
              ["24小时新增用户激活率表"],
              ["24小时新增用户激活率图"],
              ["24小时新增用户激活率表（上周）"],
              ["24小时新增用户激活率图（上周）"]
            );
            data_arr.push(
              hour_new_add_array,
              vm.MOWR_m2_A1.data,
              last_hour_new_add_array,
              vm.MOWR_m2_A2.data
            );
          } catch (error) {
            console.log(error);
          }

          ///
          temp_titleArr = title_arr;
          temp_DataArr = data_arr;
          vm.$store
            .dispatch("set_PR_Excel_titleArr", temp_titleArr)
            .then(function(response_title) {
              // console.log(response_title);
              vm.$store
                .dispatch("set_PR_Excel_dataArr", temp_DataArr)
                .then(function(response_dataArr) {
                  // console.log(response_dataArr);
                })
                .catch(function(error) {
                  console.info(error);
                });
            })
            .catch(function(error) {
              console.info(error);
            });
        }
      }, 5400); //m2: 5000 + 200 * 2
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
  font-size: 14px;
  font-weight: bold;
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
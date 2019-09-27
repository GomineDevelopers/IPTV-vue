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
          <smooth-line-chart2 :smoothLineData="MOWR_m6_A1"></smooth-line-chart2>
        </el-col>
        <el-col v-show="ifFormRowShow_lt" :span="8" class="height_auto">
          <p class="m_common_sm_title_font">联通停机用户图</p>
          <smooth-line-chart2 :smoothLineData="MOWR_m6_A3"></smooth-line-chart2>
        </el-col>
        <el-col v-show="ifFormRowShow_dx" :span="8" class="height_auto">
          <p class="m_common_sm_title_font">电信停机用户图</p>
          <smooth-line-chart2 :smoothLineData="MOWR_m6_A2"></smooth-line-chart2>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import SmoothLineChart2 from "@/views/backcoms/commoncomponents2/SmoothLineChart_Change2"; //平滑曲线折线图组件-Y轴百分比
import { mapGetters } from "vuex";

export default {
  name: "MOWR_m6",
  components: {
    "smooth-line-chart2": SmoothLineChart2
  },
  props: ["m6_data"],
  watch: {
    m6_data(newValue, oldValue) {
      console.log("m6_data - newValue");
      console.log(newValue);
    }
  },
  mounted() {},
  computed: {
    ...mapGetters(["PR_operator"]),
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
          rowD[8] = String(sum);
          return {
            title: this.form.title,
            rowA: this.form.rowA,
            rowB: this.form.rowB,
            rowC: this.form.rowC,
            rowD: rowD
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
          rowD[8] = String(sum);

          return {
            title: this.form.title,
            rowA: this.form.rowA,
            rowB: this.form.rowB,
            rowC: this.form.rowC,
            rowD: rowD
          };
        }

        return this.form;
      },
      set: function(newValue) {}
    }
  },
  data() {
    return {
      form: {
        title: [
          "停机数",
          "7月1日",
          "7月2日",
          "7月3日",
          "7月4日",
          "7月5日",
          "7月6日",
          "7月7日",
          "总计"
        ],
        rowA: ["移动", "79", "130", "408", "533", "311", "310", "534", "2098"],
        rowC: ["联通", "0", "0", "0", "0", "0", "0", "0", "0"],
        rowB: ["电信", "0", "0", "0", "0", "0", "0", "0", "0"]
      },
      MOWR_m6_A1: {
        title: "",
        id: "MOWR_m6_A1",
        color: ["#8064A2"],
        data: [
          [
            "product",
            "6月24日",
            "6月25日",
            "6月26日",
            "6月27日",
            "6月28日",
            "6月29日",
            "6月30日",
            "7月1日",
            "7月2日",
            "7月3日",
            "7月4日"
          ],
          ["移动", 60, 61, 55, 47, 58, 66, 62, 67, 64, 58, 54]
        ]
      },
      MOWR_m6_A2: {
        title: "",
        id: "MOWR_m6_A2",
        color: ["#9BBB59"],
        data: [
          [
            "product",
            "6月24日",
            "6月25日",
            "6月26日",
            "6月27日",
            "6月28日",
            "6月29日",
            "6月30日",
            "7月1日",
            "7月2日",
            "7月3日",
            "7月4日"
          ],
          ["电信", 22, 23, 25, 22, 22, 26, 22, 28, 22, 26, 22]
        ]
      },
      MOWR_m6_A3: {
        title: "",
        id: "MOWR_m6_A3",
        color: ["#C0504D"],
        data: [
          [
            "product",
            "6月24日",
            "6月25日",
            "6月26日",
            "6月27日",
            "6月28日",
            "6月29日",
            "6月30日",
            "7月1日",
            "7月2日",
            "7月3日",
            "7月4日"
          ],
          ["联通", 77, 79, 74, 77, 72, 75, 78, 77, 71, 77, 79]
        ]
      }
    };
  },
  methods: {}
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
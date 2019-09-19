<template>
  <div class="MOWR_m1">
    <el-row class="special_click_data back_white">
      <el-row :gutter="100" class="special_click_chart">
        <el-col :span="12" class="height_auto">
          <p class="m_common_sm_title_font">周新增数据表</p>
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
          <p class="m_common_sm_title_font">周新增数据图</p>
          <bar-chart-single3 :chartData="MOWR_m1_A1"></bar-chart-single3>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import BarChartSingle3 from "@/views/backcoms/commoncomponents2/BarChartSingle_Change3"; //单坐标柱状图组件
import { mapGetters } from "vuex";

export default {
  name: "MOWR_m1",
  components: {
    "bar-chart-single3": BarChartSingle3
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
          "日新增",
          "7月1日",
          "7月2日",
          "7月3日",
          "7月4日",
          "7月5日",
          "7月6日",
          "7月7日",
          "总计"
        ],
        rowA: [
          "移动",
          "2575",
          "2222",
          "3131",
          "2424",
          "3636",
          "2929",
          "3261",
          "20000"
        ],
        rowB: [
          "联通",
          "2575",
          "2222",
          "3131",
          "2424",
          "3636",
          "2929",
          "3261",
          "20000"
        ],
        rowC: [
          "电信",
          "2575",
          "2222",
          "3131",
          "2424",
          "3636",
          "2929",
          "3261",
          "20000"
        ],
        rowD: ["", "", "", "", "", "", "", "", "66666"]
      },
      MOWR_m1_A1: {
        title: "各页面专区入口点击次数",
        id: "MOWR_m1_A1",
        height: "height:300px;",
        color: ["#8064A2", "#9BBB59", "#C0504D"],
        data: [
          ["product", "移动", "联通", "电信"],
          ["7月1日", 4330, 13563, 3337],
          ["7月2日", 8300, 16457, 2330],
          ["7月3日", 8600, 17896, 1457],
          ["7月4日", 8600, 17896, 1457],
          ["7月5日", 8600, 17896, 1457],
          ["7月6日", 8600, 17896, 1457],
          ["7月7日", 8600, 17896, 1457]
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
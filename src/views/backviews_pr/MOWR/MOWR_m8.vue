<template>
  <div class="MOWR_m8">
    <el-row class="special_click_data back_white">
      <el-row>
        <p class="m_common_sm_title_font">停机用户表</p>
        <table class="m_table" border="1">
          <tr class="tr_title">
            <template v-for="(item,index) in form.title1 ">
              <td :key="index + '11b' " v-if="index == 0" colspan="1" rowspan="2">{{item}}</td>
            </template>
            <template v-for="(item,index) in form.title1 ">
              <td :key="index + '21b' " v-if="index != 0" colspan="2" rowspan="1">{{item}}</td>
            </template>
          </tr>

          <tr class="tr_title">
            <td v-for="(item,index) in form.title2 " :key="index + '3b' " colspan="1">{{item}}</td>
          </tr>

          <tr class="tr_row">
            <td v-for="(item,index) in form.row1 " :key="index + '4b' " colspan="1">{{item}}</td>
          </tr>
          <tr class="tr_row">
            <td v-for="(item,index) in form.row2 " :key="index + '5c' " colspan="1">{{item}}</td>
          </tr>
          <tr class="tr_row">
            <td v-for="(item,index) in form.row3 " :key="index + '6d' " colspan="1">{{item}}</td>
          </tr>
          <tr class="tr_row">
            <td v-for="(item,index) in form.row4 " :key="index + '6d' " colspan="1">{{item}}</td>
          </tr>
          <tr class="tr_row">
            <td v-for="(item,index) in form.row5 " :key="index + '6d' " colspan="1">{{item}}</td>
          </tr>
          <tr class="tr_row">
            <td v-for="(item,index) in form.row6 " :key="index + '6d' " colspan="1">{{item}}</td>
          </tr>
          <tr class="tr_row">
            <td v-for="(item,index) in form.row7 " :key="index + '6d' " colspan="1">{{item}}</td>
          </tr>
          <tr class="tr_row">
            <td v-for="(item,index) in form.row_bottom " :key="index + '6d' " colspan="1">{{item}}</td>
          </tr>
        </table>
      </el-row>
      <dir style="height:50px;"></dir>
    </el-row>
  </div>
</template>

<script>
import SmoothLineChart2 from "@/views/backcoms/commoncomponents2/SmoothLineChart_Change2"; //平滑曲线折线图组件-Y轴百分比

export default {
  name: "MOWR_m8",
  components: {
    "smooth-line-chart2": SmoothLineChart2
  },
  props: ["m8_data"],
  watch: {
    m8_data(newValue, oldValue) {
      // console.log("m8_data - newValue");
      // console.log(newValue);
      let vm = this;
      vm.form = newValue[0][0];

    }
  },
  mounted() {},
  data() {
    return {
      form: {
        title1: [
          "订购日期",
          "欢乐家庭VIP",
          "欢乐家庭包季",
          "欢乐家庭包年",
          "少儿VIP",
          "少儿包季",
          "少儿包年",
          "影视VIP",
          "影视包季",
          "影视包年",
          "合计"
        ],
        title2: [
          "订购数",
          "收入",
          "订购数",
          "收入",
          "订购数",
          "收入",
          "订购数",
          "收入",
          "订购数",
          "收入",
          "订购数",
          "收入",
          "订购数",
          "收入",
          "订购数",
          "收入",
          "订购数",
          "收入",
          "订购数",
          "收入"
        ],

        row1: [
          "7月1日",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00"
        ],
        row2: [
          "7月2日",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00"
        ],
        row3: [
          "7月3日",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00"
        ],
        row4: [
          "7月4日",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00"
        ],
        row5: [
          "7月5日",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00"
        ],
        row6: [
          "7月6日",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00"
        ],
        row7: [
          "7月7日",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00"
        ],
        row_bottom: [
          "总计",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00",
          "0",
          "0.00"
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
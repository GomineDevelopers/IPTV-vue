<template>
  <div class="MOWR_m5">
    <el-row class="special_click_data back_white">
      <p class="m_common_sm_title_font">联通24小时新增激活情况</p>
      <table class="m_table" border="1">
        <tr class="tr_title">
          <td v-for="(item,index) in form.title " :key="index + 'a' " colspan="1">{{item}}</td>
        </tr>
        <tr class="tr_row">
          <template v-for="(item,index) in form.row1 ">
            <td :key="index + '1b' " v-if="index == 0" colspan="1" rowspan="11">{{item}}</td>
          </template>
          <template v-for="(item,index) in form.row1 ">
            <td :key="index + '2b' " v-if="index != 0" colspan="1">{{item}}</td>
          </template>
        </tr>
        <tr class="tr_row">
          <td v-for="(item,index) in form.row2 " :key="index + 'b' " colspan="1">{{item}}</td>
        </tr>
        <tr class="tr_row">
          <td v-for="(item,index) in form.row3 " :key="index + 'b' " colspan="1">{{item}}</td>
        </tr>
        <tr class="tr_row">
          <td v-for="(item,index) in form.row4 " :key="index + 'b' " colspan="1">{{item}}</td>
        </tr>
        <tr class="tr_row">
          <td v-for="(item,index) in form.row5 " :key="index + 'b' " colspan="1">{{item}}</td>
        </tr>
        <tr class="tr_row">
          <td v-for="(item,index) in form.row6 " :key="index + 'b' " colspan="1">{{item}}</td>
        </tr>
        <tr class="tr_row">
          <td v-for="(item,index) in form.row7 " :key="index + 'b' " colspan="1">{{item}}</td>
        </tr>
        <tr class="tr_row">
          <td v-for="(item,index) in form.row8 " :key="index + 'b' " colspan="1">{{item}}</td>
        </tr>
        <tr class="tr_row">
          <td v-for="(item,index) in form.row9 " :key="index + 'b' " colspan="1">{{item}}</td>
        </tr>
        <tr class="tr_row">
          <td v-for="(item,index) in form.row10 " :key="index + 'b' " colspan="1">{{item}}</td>
        </tr>
        <tr class="tr_row tr_last">
          <td v-for="(item,index) in form.row11 " :key="index + 'b' " colspan="1">{{item}}</td>
        </tr>
      </table>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "MOWR_m5",
  components: {},
  mounted() {},
  data() {
    return {
      form: {
        title: ["运营商", "地区", "在册用户", "新增激活率"],
        row1: ["联通", "安顺", "83508", "74.46%"],
        row2: ["遵义", "83508", "74.46%"],
        row3: ["六盘水", "83508", "74.46%"],
        row4: ["贵阳", "83508", "74.46%"],
        row5: ["黔西南", "83508", "74.46%"],
        row6: ["黔东南", "83508", "74.46%"],
        row7: ["贵安", "83508", "74.46%"],
        row8: ["毕节", "83508", "74.46%"],
        row9: ["黔南", "83508", "74.46%"],
        row10: ["铜仁", "83508", "74.46%"],
        row11: ["总计", "83508", "74.46%"]
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
}
.tr_title {
  width: 100%;
}
.tr_row {
  width: 100%;
}
.tr_title td {
  background: #92d050;
  border: 0;
  font-size: 14px;
  color: #ffffff;
  width: auto;
  margin: auto;
  text-align: center;
  line-height: 63px;
  height: 63px;
}
.tr_row td {
  background: #afafaf;
  border: 0;
  font-size: 14px;
  color: #ffffff;
  width: auto;
  margin: auto;
  text-align: center;
  line-height: 50px;
  height: 50px;
}
.tr_last td:first-child {
  color: #c00000;
  font-size: 18px;
}

</style>

<style >
</style>
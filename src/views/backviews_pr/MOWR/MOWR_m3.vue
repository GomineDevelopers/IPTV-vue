<template>
  <div class="MOWR_m3">
    <el-row class="special_click_data back_white">
      <p class="m_common_sm_title_font">移动24小时新增激活情况</p>
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
import { mapGetters } from "vuex";

export default {
  name: "MOWR_m3",
  components: {},
  props: ["m3_data"],
  computed: {
    ...mapGetters(["PR_week", "PR_operator", "PR_Report_index"])
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
    m3_data(newValue, oldValue) {
      // console.log("m3_data - newValue");
      // console.log(newValue);
      let vm = this;
      vm.form = newValue[0][0];
    }
  },

  data() {
    return {
      form: {
        title: ["运营商", "地区", "在册用户", "新增激活率"],
        row1: ["移动", "安顺", "0", "0%"],
        row2: ["遵义", "0", "0%"],
        row3: ["六盘水", "0", "0%"],
        row4: ["贵阳", "0", "0%"],
        row5: ["黔西南", "0", "0%"],
        row6: ["黔东南", "0", "0%"],
        row7: ["贵安", "0", "0%"],
        row8: ["毕节", "0", "0%"],
        row9: ["黔南", "0", "0%"],
        row10: ["铜仁", "0", "0%"],
        row11: ["总计", "0", "0%"]
      }
    };
  },
  methods: {
    Excel_data_manage() {
      console.log("Excel_data_manage - 3 - m3");
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
            ["运营商", "移动", "联通", "电信33333.333"],
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

          // /// 实际

          // setTimeout(() => {
          //   //移动24小时新增激活情况
          //   let yd_hour_add = [];
          //   yd_hour_add.push(
          //     vm.form.title,
          //     vm.form.row1,
          //     vm.form.row2,
          //     vm.form.row3,
          //     vm.form.row4,
          //     vm.form.row5,
          //     vm.form.row6,
          //     vm.form.row7,
          //     vm.form.row8,
          //     vm.form.row9,
          //     vm.form.row10,
          //     vm.form.row11
          //   );
          //   let title_arr = [];
          //   let data_arr = [];
          //   title_arr.push(["移动24小时新增激活情况"]);
          //   data_arr.push(yd_hour_add);
          // }, 5000);

          // ///

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
      }, 5600); //m3: 5000 + 200 * 3
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
<template>
  <div class="MOWR_m8">
    <el-row class="special_click_data back_white">
      <el-row>
        <!-- <p class="m_common_sm_title_font">停机用户表</p> -->
        <p class="m_common_sm_title_font">增值包订购表</p>
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
import { mapGetters } from "vuex";

export default {
  name: "MOWR_m8",
  components: {
    "smooth-line-chart2": SmoothLineChart2
  },
  props: ["m8_data"],
  computed: {
    ...mapGetters(["PR_operator", "PR_week", "PR_Report_index"])
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
    m8_data(newValue, oldValue) {
      // console.log("m8_data - newValue");
      // console.log(newValue);
      let vm = this;
      try {
        vm.form = newValue[0][0];
      } catch (error) {
        console.log(error);
      }
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
  methods: {
    Excel_data_manage() {
      console.log("Excel_data_manage - 3 - m8");
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
          //   ["运营商", "移动", "联通", "电信33333.8888"],
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
            //电信增值业务周发展情况
            let value_added_arr = [];
            value_added_arr.push(
              vm.form.title1,
              vm.form.title2,
              vm.form.row1,
              vm.form.row2,
              vm.form.row3,
              vm.form.row4,
              vm.form.row5,
              vm.form.row6,
              vm.form.row7,
              vm.form.row_bottom
            );

            title_arr.push(["电信增值业务周发展情况"]);
            data_arr.push(value_added_arr);
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
            .then(function(response_title) {
              console.log(response_title);
              vm.$store
                .dispatch("set_PR_Excel_dataArr", temp_DataArr)
                .then(function(response_dataArr) {
                  console.log(response_dataArr);
                  // 设置excel按钮下载状态 - 开
                  vm.$store
                    .dispatch("set_PR_excel_ifCanDownload", true)
                    .then(function(response_dataArr) {
                      console.log("下载开");
                    })
                    .catch(function(error) {
                      console.info(error);
                    });
                })
                .catch(function(error) {
                  console.info(error);
                });
            })
            .catch(function(error) {
              console.info(error);
            });
        }
      }, 6600); //m8: 5000 + 200 * 8
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
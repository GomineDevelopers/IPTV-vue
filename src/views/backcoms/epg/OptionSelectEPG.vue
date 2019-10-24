<template>
  <div class="OptionSelectEPG">
    <div class="operator">
      <span class="font_title">运营商：</span>
      <!-- <el-checkbox
        :indeterminate="operator_isIndeterminate"
        v-model="operator_checkAll"
        @change="operatorChoose_all"
      >全部</el-checkbox>-->
      <el-checkbox-group
        @change="operatorChoose_change"
        v-model=" operatorChoose"
        v-for="(item,index) in operator"
        :key="index + 'a' "
        v-show="operator_isIndeterminate"
      >
        <el-checkbox :disabled="false" :label="item"></el-checkbox>
      </el-checkbox-group>
      <el-checkbox-group
        @change="operatorChoose_change"
        v-model=" operatorChoose"
        v-for="(item,index) in operator"
        :key="index + 'ac' "
        v-show="!operator_isIndeterminate"
      >
        <el-checkbox class="font_choose" :disabled="false" :label="item"></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="programa">
      <span class="font_title">栏目：</span>

      <!-- <el-checkbox-group
        v-model=" programaChoose"
        v-for="(item,index) in programa"
        :key="index + 'd' "
      >
        <el-checkbox class="font_choose" :disabled="false" :label="item"></el-checkbox>
      </el-checkbox-group>-->
      <!-- <el-checkbox
        :indeterminate="programa_isIndeterminate"
        v-model="programa_checkAll"
        @change="programaChoose_all"
      >总体</el-checkbox>-->
      <el-checkbox-group
        @change="programaChoose_change"
        v-model=" programaChoose"
        v-for="(item,index) in programa"
        :key="index + 'a' "
        v-show="programa_isIndeterminate"
      >
        <el-checkbox class="font_choose" :disabled="false" :label="item"></el-checkbox>
      </el-checkbox-group>
      <el-checkbox-group
        @change="programaChoose_change"
        v-model=" programaChoose"
        v-for="(item,index) in programa"
        :key="index + 'ac' "
        v-show="!programa_isIndeterminate"
      >
        <el-checkbox class="font_choose" :disabled="false" :label="item"></el-checkbox>
      </el-checkbox-group>

      <el-select
        class="other_item_select"
        v-model="value_others"
        filterable
        allow-create
        clearable
        default-first-option
        placeholder="其他"
        @change="otherOption"
      >
        <el-option
          v-for="item in options_others"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="time">
      <span class="font_title">时间：</span>
      <div class="space">&nbsp;</div>
      <span class="font_choose">周：</span>
      <span>
        <el-select
          v-model="time.weekValue"
          filterable
          allow-create
          clearable
          default-first-option
          placeholder="请设置周数"
          style="width:300px;"
          @change="handleWeek"
        >
          <el-option
            v-for="item in time.week"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            style="width:300px;"
          ></el-option>
        </el-select>
      </span>
      <div class="space">&nbsp;</div>
      <span class="font_choose">月：</span>
      <span>
        <el-select
          v-model="time.monthValue"
          filterable
          allow-create
          clearable
          default-first-option
          placeholder="请设置月数"
          style="width:300px;"
          @change="handleMonth"
        >
          <el-option
            v-for="item in time.month"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            style="width:300px;"
          ></el-option>
        </el-select>
      </span>
    </div>
    <div class="submitP">
      <el-button class="submit" @click="getBoxDetail">确定</el-button>
    </div>
  </div>
</template>

<script>
import { commonTools } from "@/utils/test";
import { mapGetters } from "vuex";
import { epg_programs } from "@/api/api_main";

var operatorChoose_new = [];
var operatorChoose_old = [];
var programaChoose_new = [];
var programaChoose_old = [];

export default {
  name: "OptionSelectEPG",
  data() {
    return {
      operator: [
        "移动1.0",
        "移动2.0",
        "联通",
        "电信"
        //  "其他"
      ],
      operatorChoose: [],
      operator_checkAll: false,
      operator_isIndeterminate: true,
      programa: ["分类", "电视", "推荐", "电影", "热剧", "少儿", "动漫", "综艺", "体育", "纪实", "游戏", "应用"],
      programaChoose: [],
      programa_checkAll: false,
      programa_isIndeterminate: true,

      options_others: [
        // {
        //   value: "选项1",
        //   label: "其他1"
        // },
        // {
        //   value: "选项2",
        //   label: "其他2"
        // },
        // {
        //   value: "选项3",
        //   label: "其他3"
        // }
      ],
      value_others: [], //其他节目类型选择
      timeChoose: '',
      time: {
        week: [
          // {
          //   value: "选项1",
          //   label: "第1周（1.1-1.7）"
          // },
          // ...
        ],
        weekValue: "",
        month: [
          // {
          //   value: "选项1",
          //   label: "1月"
          // },
          // ...
          // {
          //   value: "选项12",
          //   label: "12月"
          // }
        ],
        monthValue: "",
      }
    };
  },
  computed: {
    ...mapGetters(["EPG_operator", "EPG_programa", "EPG_week", "EPG_month"])
  },
  watch: {
    operatorChoose(newValue, oldValue) {
      let vm = this;
      this.$store
        .dispatch("set_EPG_operator", newValue)
        .then(function (response) {
          // console.log(response);
        })
        .catch(function (error) {
          console.info(error);
        });
    },

    programaChoose(newValue, oldValue) {
      let vm = this;
      this.$store
        .dispatch("set_EPG_programa", newValue)
        .then(function (response) {
          // console.log(response);
          vm.$store
            .dispatch("set_EPG_programa_type", 1)
            .then(function (response) { })
            .catch(function (error) {
              console.info(error);
            });
        })
        .catch(function (error) {
          console.info(error);
        });
    },
    value_others(newValue, oldValue) {
      let vm = this;
      this.$store
        .dispatch("set_EPG_value_others", newValue)
        .then(function (response) {
          // console.log(response);
          // 设置 ULC_row3是否显示
          vm.$store
            .dispatch("set_EPG_programa_type", 2)
            .then(function (response) { })
            .catch(function (error) {
              console.info(error);
            });
        })
        .catch(function (error) {
          console.info(error);
        });
    },
    "time.weekValue"(newValue, oldValue) {
      let vm = this;
      this.$store
        .dispatch("set_EPG_week", newValue)
        .then(function (response) {
          // console.log(response);
        })
        .catch(function (error) {
          console.info(error);
        });
    },
    "time.monthValue"(newValue, oldValue) {
      let vm = this;
      this.$store
        .dispatch("set_EPG_month", newValue)
        .then(function (response) {
          // console.log(response);
        })
        .catch(function (error) {
          console.info(error);
        });
    },

    //监听运营商的变化
    EPG_operator(newValue, oldValue) {
      this.programsSwitch()
      this.getEpgProgramsTotal()
    }
  },
  mounted() {
    let vm = this;
    // ▲历史条件获取
    vm.$store
      .dispatch("get_EPG_operator")
      .then(function (response) {
        // console.log(response);
        vm.operatorChoose = response;
      })
      .catch(function (error) {
        console.info(error);
      });
    vm.$store
      .dispatch("get_EPG_programa")
      .then(function (response) {
        // console.log(response);
        vm.programaChoose = response;
      })
      .catch(function (error) {
        console.info(error);
      });

    // 初始化周
    let arr_temp = [];
    setTimeout(function () {
      // arr_temp = commonTools.weekDate(2018);
      // arr_temp = commonTools.weekDate_add(2019, arr_temp);

      vm.time.week = commonTools.weekDate_ED();
    }, 100);

    // 初始化月
    setTimeout(function () {
      // let arr_temp2 = commonTools.format_MonthDays(2018);
      // arr_temp2 = commonTools.format_MonthDays_add(2019, arr_temp2);

      vm.time.month = commonTools.format_MonthDays_ED();
    }, 100);

    this.getEpgProgramsTotal()
    this.programsSwitch()
  },
  methods: {
    operatorChoose_change(event) {
      operatorChoose_old = operatorChoose_new;
      let checkedCount = event.length;
      this.operator_checkAll = checkedCount === this.operator.length;
      this.operator_isIndeterminate =
        checkedCount > 0 && checkedCount < this.operator.length;
      if (this.operatorChoose.length == 0) {
        this.operator_isIndeterminate = true;
      }
      let vm = this;
      setTimeout(function () {
        operatorChoose_new = vm.operatorChoose;
        vm.operatorChoose = commonTools.delete_repet_origin(
          operatorChoose_new,
          operatorChoose_old
        );
      }, 100);
    },
    // operatorChoose_all(val) {
    //   this.operatorChoose = val ? this.operator : [];
    //   this.operator_isIndeterminate = !this.operator_isIndeterminate;
    // }
    programaChoose_change(event) {
      this.value_others = null  //点击除其他栏目时清空其他栏目的下拉框
      programaChoose_old = programaChoose_new;
      let checkedCount = event.length;
      this.programa_checkAll = checkedCount === this.programa.length;
      this.programa_isIndeterminate =
        checkedCount > 0 && checkedCount < this.programa.length;
      if (this.programaChoose.length == 0) {
        this.programa_isIndeterminate = true;
      }
      let vm = this;
      setTimeout(function () {
        programaChoose_new = vm.programaChoose;
        vm.programaChoose = commonTools.delete_repet_origin(
          programaChoose_new,
          programaChoose_old
        );
      }, 100);
    },
    programaChoose_all(val) {
      this.programaChoose = val ? this.programa : [];
      this.programa_isIndeterminate = !this.programa_isIndeterminate;
    },

    getBoxDetail() {
      // let operatorName = this.operatorChoose[0]
      // let programName = this.programaChoose[0]
      // let timeItem = this.timeChoose
      // console.log("查询数据")
      // console.log(operatorName)
      // console.log(programName)
      // console.log(timeItem)
    },

    //点击运营商切换栏目分类
    programsSwitch() {
      let programs_yd_one = ["分类", "电视", "推荐", "电影", "热剧", "少儿", "动漫", "综艺", "体育", "纪实", "游戏", "应用"]  //移动1.0栏目分类
      let programs_yd_two = ["分类", "电视", "推荐", "vip", "电影", "热剧", "少儿", "动漫", "综艺", "体育", "游戏", "纪实"]  //移动2.0栏目分类
      let programs_lt = ["分类", "电视", "推荐", "电影", "热剧", "少儿", "动漫", "综艺", "体育", "纪实", "游戏", "应用"]  //联通栏目分类
      let programs_dx = ["分类", "电视", "推荐", "电影", "热剧", "少儿", "动漫", "综艺", "体育", "纪实", "游戏", "应用"]  //电信栏目分类

      // console.log(this.EPG_operator)
      if (this.EPG_operator.length == 1) {
        let operatorName = this.EPG_operator[0]
        // console.log("选择运营商：", operatorName)
        switch (operatorName) {
          case '移动1.0':
            this.programa = programs_yd_one;
            break;
          case '移动2.0':
            this.programa = programs_yd_two;
            break;
          case '联通':
            this.programa = programs_lt;
            break;
          case '电信':
            this.programa = programs_dx;
            break;
          default:
            break;
        }
      }
    },

    //获取总的栏目分类数据
    getEpgProgramsTotal() {

      this.value_others = null  //运营商改变时初始化下拉框内容
      let programs_yd_two = ["分类", "电视", "推荐", "vip", "电影", "热剧", "少儿", "动漫", "综艺", "体育", "游戏", "纪实"]  //移动2.0栏目分类
      let programs_yd_one = ["分类", "电视", "推荐", "电影", "热剧", "少儿", "动漫", "综艺", "体育", "纪实", "游戏", "应用"]  //1.0栏目分类
      // console.log(this.EPG_operator)
      let operator
      if (this.EPG_operator.length == 1) {
        // operator = this.EPG_operator[0]
        if (this.EPG_operator[0] == '移动1.0' || this.EPG_operator[0] == '移动2.0') {
          operator = '移动'
        } else {
          operator = this.EPG_operator[0]
        }
        var formData = new FormData();
        var formData = new window.FormData();
        formData.append("operator", operator);
        epg_programs(formData)
          .then((response) => {
            console.log("运营商", operator)
            console.log("EPG所有栏目分类", response.data.responses)
            let programs_total = null
            let epg_programs_total = []  //后台返回的总的节目类型
            if (this.EPG_operator[0] == '移动2.0') {
              programs_total = response.data.responses[1].aggregations.ti.buckets
              console.log("EPG栏目分类移动2.0", epg_programs_total)
              programs_total.forEach((value, index) => {
                epg_programs_total.push(value.key)
              })
              var otherProgramsList = []  //其他节目类型数组（下拉框的值）
              epg_programs_total.forEach((value, index) => {
                if (programs_yd_two.indexOf(value) == -1) {
                  otherProgramsList.push({
                    value: value,
                    lable: value
                  })
                }
              })
              this.options_others = otherProgramsList  //设置 ‘其他’ 节目类型下拉框的值
            } else {
              programs_total = response.data.responses[0].aggregations.ti.buckets
              // console.log("EPG栏目分类1.0", epg_programs_total)
              programs_total.forEach((value, index) => {
                epg_programs_total.push(value.key)
              })
              var otherProgramsList = []  //其他节目类型数组（下拉框的值）
              epg_programs_total.forEach((value, index) => {
                if (programs_yd_one.indexOf(value) == -1) {
                  otherProgramsList.push({
                    value: value,
                    lable: value
                  })
                }
              })
              this.options_others = otherProgramsList  //设置 ‘其他’ 节目类型下拉框的值
            }

            //this.epgProgramsTotal = response.data.responses[0].aggregations.ti.buckets
            // console.log("栏目分类", this.epgProgramsTotal)
          })
          .catch((error) => {
            console.log("EPG", error)
          })
      }
    },

    //栏目 其他选项的控制
    otherOption(event) {
      console.log(event)
      let vm = this
      vm.programaChoose = []
    },

    //时间 周 选项的控制
    handleWeek(event) {
      let vm = this;
      this.time.weekValue = String(event);
      this.time.monthValue = "";
      let newValue = String(event);

      vm.$store
        .dispatch("set_EPG_week", newValue)
        .then(function (response) {
          console.log(response);
          // 设置 ULC_row3是否显示
          vm.$store
            .dispatch("set_EPG_time_type", 1)
            .then(function (response) { })
            .catch(function (error) {
              console.info(error);
            });
        })
        .catch(function (error) {
          console.info(error);
        });
    },

    //时间 月 选项的控制
    handleMonth(event) {

      let vm = this;
      this.time.weekValue = "";
      this.time.monthValue = String(event);
      let newValue = String(event);

      vm.$store
        .dispatch("set_EPG_month", newValue)
        .then(function (response) {
          console.log(response);
          // 设置 ULC_row3是否显示
          vm.$store
            .dispatch("set_EPG_time_type", 2)
            .then(function (response) { })
            .catch(function (error) {
              console.info(error);
            });
        })
        .catch(function (error) {
          console.info(error);
        });
      // if (this.time.monthValue != '') {
      //   // console.log("月选择", event)
      //   this.time.weekValue = ''
      //   this.timeChoose = event
      // } else {
      //   this.timeChoose = ''
      // }


    },

    distinct(a, b) {
      let arr = a.concat(b)
      var x = new Set(arr)
      return [...x]
    }
  },

};
</script>

<style>
/* elementui 复选框背景色 统一修改 */

.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #ff6123;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #ff6123;
  border-color: #ff6123;
}
.el-checkbox__inner:hover {
  border-color: #ff6123;
}
.el-checkbox__input.is-focus .el-checkbox__innder {
  border-color: #ff6123;
}

/* 时间范围 */
.el-date-table td.end-date span,
.el-date-table td.start-date span {
  background-color: #ff6123;
}
.other_item_select .el-input input {
  width: 200px;
  height: 35px;
}
</style>
<style scoped>
.el-checkbox-group {
  display: inline-block;
}
.OptionSelectEPG {
  text-align: left;
  padding: 0 14px;
}

.OptionSelectEPG .operator,
.OptionSelectEPG .programa,
.OptionSelectEPG .time {
  display: inline-block;
  width: 100%;
  line-height: 32px;
}
.OptionSelectEPG .operator label {
  margin-right: 18px;
}
.OptionSelectEPG .font_title {
  font-family: PingFangSC-Semibold;
  font-size: 14px;
  color: #333333;
  line-height: 32px;
  font-weight: bold;
}
.OptionSelectEPG .font_choose {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: rgba(51, 51, 51, 0.7);
  width: 75px;
}
.OptionSelectEPG .space {
  width: 14px;
  display: inline-block;
}

.OptionSelectEPG .submitP {
  margin-top: 14px;
}

.OptionSelectEPG .submit {
  background-color: #ff6123;
  color: #ffffff;
  line-height: 32px;
  height: 32px;
  margin: 0px;
  padding: 0px;
  width: 68px;
}
.programa {
  margin: 0px 0px;
}
.time {
  margin-top: 10px;
}
</style>

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
        <el-checkbox class="font_choose" :disabled="false" :label="item"></el-checkbox>
      </el-checkbox-group>
      <el-checkbox-group
        @change="operatorChoose_change"
        v-model=" operatorChoose"
        v-for="(item,index) in operator"
        :key="index + 'ac' "
        v-show="!operator_isIndeterminate"
      >
        <el-checkbox class="font_choose" :disabled="true" :label="item"></el-checkbox>
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
        <el-checkbox class="font_choose" :disabled="true" :label="item"></el-checkbox>
      </el-checkbox-group>

      <el-select
        v-model="value_others"
        filterable
        allow-create
        default-first-option
        placeholder="其他"
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
          default-first-option
          placeholder="请设置周数"
          style="width:300px;"
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
          default-first-option
          placeholder="请设置月数"
          style="width:300px;"
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
      <el-button class="submit">确定</el-button>
    </div>
  </div>
</template>

<script>
import { commonTools } from "@/utils/test";

var operatorChoose_new = [];
var operatorChoose_old = [];
var programaChoose_new = [];
var programaChoose_old = [];

export default {
  name: "OptionSelectEPG",
  watch: {
    operatorChoose(newValue, oldValue) {
      let vm = this;
      this.$store
        .dispatch("set_EPG_operator", newValue)
        .then(function(response) {
          // console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },

    programaChoose(newValue, oldValue) {
      let vm = this;
      this.$store
        .dispatch("set_EPG_programa", newValue)
        .then(function(response) {
          // console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    value_others(newValue, oldValue) {
      let vm = this;
      this.$store
        .dispatch("set_EPG_value_others", newValue)
        .then(function(response) {
          // console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    "time.weekValue"(newValue, oldValue) {
      let vm = this;
      this.$store
        .dispatch("set_EPG_week", newValue)
        .then(function(response) {
          // console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    "time.monthValue"(newValue, oldValue) {
      let vm = this;
      this.$store
        .dispatch("set_EPG_month", newValue)
        .then(function(response) {
          // console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    }
  },
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
      programa: [
        // "总体",
        "分类",
        "电视",
        "推荐",
        "电影",
        "热剧",
        "少儿",
        "动漫 ",
        "综艺",
        "体育",
        "纪实",
        "游戏",
        "健康",
        "音乐"
        // "其他"
      ],
      programaChoose: [],
      programa_checkAll: false,
      programa_isIndeterminate: true,

      options_others: [
        {
          value: "其他1",
          label: "其他1"
        },
        {
          value: "其他2",
          label: "其他2"
        },
        {
          value: "其他3",
          label: "其他3"
        }
      ],
      value_others: [],
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
        monthValue: ""
      }
    };
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
      setTimeout(function() {
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
      programaChoose_old = programaChoose_new;
      let checkedCount = event.length;
      this.programa_checkAll = checkedCount === this.programa.length;
      this.programa_isIndeterminate =
        checkedCount > 0 && checkedCount < this.programa.length;
      if (this.programaChoose.length == 0) {
        this.programa_isIndeterminate = true;
      }
      let vm = this;
      setTimeout(function() {
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
    }
  },
  mounted() {
    let vm = this;
    // ▲历史条件获取
    vm.$store
      .dispatch("get_EPG_operator")
      .then(function(response) {
        // console.log(response);
        vm.operatorChoose = response;
      })
      .catch(function(error) {
        console.info(error);
      });
    vm.$store
      .dispatch("get_EPG_programa")
      .then(function(response) {
        // console.log(response);
        vm.programaChoose = response;
      })
      .catch(function(error) {
        console.info(error);
      });

    // 初始化周
    let arr_temp = [];
    arr_temp = commonTools.weekDate(2018);
    setTimeout(function() {
      arr_temp = commonTools.weekDate_add(2019, arr_temp);
      vm.time.week = arr_temp;
    }, 100);

    // 初始化月
    let arr_temp2 = commonTools.format_MonthDays(2018);
    setTimeout(function() {
      arr_temp2 = commonTools.format_MonthDays_add(2019, arr_temp2);
      vm.time.month = arr_temp2;
    }, 100);
  }
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
.OptionSelectUVB .programa,
.OptionSelectEPG .time {
  display: inline-block;
  width: 100%;
  line-height: 32px;
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
</style>

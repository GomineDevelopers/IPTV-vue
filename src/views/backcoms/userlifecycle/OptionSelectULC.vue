<template>
  <div class="OptionSelectULC">
    <div class="region">
      <span class="font_title">地区：</span>
      <el-checkbox
        :indeterminate="region_isIndeterminate"
        v-model="region_checkAll"
        @change="regionChoose_all"
      >全部</el-checkbox>
      <el-checkbox-group
        @change="regionChoose_change"
        v-model=" regionChoose"
        v-for="(item,index) in region"
        :key="index + 'a' "
        v-show="region_isIndeterminate"
      >
        <el-checkbox class="font_choose" :disabled="false" :label="item"></el-checkbox>
      </el-checkbox-group>
      <el-checkbox-group
        @change="regionChoose_change"
        v-model=" regionChoose"
        v-for="(item,index) in region"
        :key="index + 'ac' "
        v-show="!region_isIndeterminate"
      >
        <el-checkbox class="font_choose" :disabled="true" :label="item"></el-checkbox>
      </el-checkbox-group>
    </div>

    <div class="operator">
      <span class="font_title">运营商：</span>
      <!-- <el-checkbox-group
        v-model=" operatorChoose"
        v-for="(item,index) in operator"
        :key="index + 'b' "
      >
        <el-checkbox class="font_choose" :disabled="false" :label="item"></el-checkbox>
      </el-checkbox-group>-->
      <el-checkbox
        :indeterminate="operator_isIndeterminate"
        v-model="operator_checkAll"
        @change="operatorChoose_all"
      >全部</el-checkbox>

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

    <div class="time">
      <span class="font_title">时间：</span>

      <span class="font_choose">天：</span>
      <span>
        <!-- <el-select v-model="time.dayValue" placeholder="请选择">
          <el-option
            v-for="item in time.day"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>-->
        <el-date-picker
          v-model="time.dayValue"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions0"
        ></el-date-picker>
      </span>
      <div class="space">&nbsp;</div>
      <span class="font_choose">周：</span>
      <span>
        <!-- <el-select v-model="time.weekValue" placeholder="请选择">
          <el-option
            v-for="item in time.week"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>-->
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
        <!-- <el-select v-model="time.monthValue" placeholder="请选择">
          <el-option
            v-for="item in time.month"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>-->
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

var regionChoose_new = [];
var regionChoose_old = [];
var operatorChoose_new = [];
var operatorChoose_old = [];

export default {
  name: "OptionSelectULC",
  watch: {
    regionChoose(newValue, oldValue) {
      let vm = this;
      this.$store
        .dispatch("set_ULC_region", newValue)
        .then(function(response) {
          // console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    operatorChoose(newValue, oldValue) {
      let vm = this;
      this.$store
        .dispatch("set_ULC_operator", newValue)
        .then(function(response) {
          // console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    "time.dayValue"(newValue, oldValue) {
      let vm = this;
      this.$store
        .dispatch("set_ULC_day", newValue)
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
        .dispatch("set_ULC_week", newValue)
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
        .dispatch("set_ULC_month", newValue)
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
      // 设置选择三个月之前到今天的日期
      pickerOptions0: {
        disabledDate(time) {
          let curDate = new Date().getTime();
          let three = 90 * 24 * 3600 * 1000;
          let threeMonths = curDate - three;
          return time.getTime() > Date.now() || time.getTime() < threeMonths;
        }
      },
      region: [
        // "全部",
        "贵阳",
        "遵义",
        "安顺",
        "黔南",
        "黔东南",
        "铜仁",
        "毕节",
        "六盘水",
        "黔西南"
      ],
      regionChoose: [],
      region_checkAll: false,
      region_isIndeterminate: true,
      region_toapi: null,
      operator: [
        // "全部",
        "移动",
        "联通",
        "电信"
        // "其他"
      ],
      operatorChoose: [],
      operator_checkAll: false,
      operator_isIndeterminate: true,

      time: {
        day: [
          // {
          //   value: "选项1",
          //   label: "day1"
          // },
          // ...
        ],
        dayValue: "",
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
  mounted() {
    let vm = this;

    // ▲历史条件获取
    vm.$store
      .dispatch("get_ULC_region")
      .then(function(response) {
        // console.log(response);
        vm.regionChoose = response;
      })
      .catch(function(error) {
        console.info(error);
      });
    vm.$store
      .dispatch("get_ULC_operator")
      .then(function(response) {
        // console.log(response);
        vm.operatorChoose = response;
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
  },
  methods: {
    regionChoose_change(event) {
      regionChoose_old = regionChoose_new;
      let checkedCount = event.length;
      this.region_checkAll = checkedCount === this.region.length;
      this.region_isIndeterminate =
        checkedCount > 0 && checkedCount < this.region.length;
      if (this.regionChoose.length == 0) {
        this.region_isIndeterminate = true;
      }
      let vm = this;
      setTimeout(function() {
        regionChoose_new = vm.regionChoose;
        vm.regionChoose = commonTools.delete_repet(
          regionChoose_new,
          regionChoose_old
        );
      }, 100);
    },
    regionChoose_all(val) {
      console.log(val);
      this.regionChoose = val ? this.region : [];
      this.region_isIndeterminate = !this.region_isIndeterminate;
    },
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
        vm.operatorChoose = commonTools.delete_repet(
          operatorChoose_new,
          operatorChoose_old
        );
      }, 100);
    },
    operatorChoose_all(val) {
      this.operatorChoose = val ? this.operator : [];
      this.operator_isIndeterminate = !this.operator_isIndeterminate;
    }
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
.OptionSelectULC {
  text-align: left;
  padding: 0 14px;
}
.OptionSelectULC .region,
.OptionSelectULC .operator,
.OptionSelectULC .time {
  display: inline-block;
  width: 100%;
  line-height: 32px;
}

.OptionSelectULC .font_title {
  font-family: PingFangSC-Semibold;
  font-size: 14px;
  color: #333333;
  line-height: 32px;
  font-weight: bold;
}
.OptionSelectULC .font_choose {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: rgba(51, 51, 51, 0.7);
  width: 75px;
}
.OptionSelectULC .space {
  width: 14px;
  display: inline-block;
}

.OptionSelectULC .submitP {
  margin-top: 14px;
}

.OptionSelectULC .submit {
  background-color: #ff6123;
  color: #ffffff;
  line-height: 32px;
  height: 32px;
  margin: 0px;
  padding: 0px;
  width: 68px;
}
</style>

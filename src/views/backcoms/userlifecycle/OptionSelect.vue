<template>
  <div class="OptionSelect">
    <div class="region">
      <span class="font_title">地区：</span>
      <el-checkbox-group v-model=" regionChoose" v-for="(item,index) in region" :key="index + 'a' ">
        <el-checkbox class="font_choose" :disabled="false" :label="item"></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="operator">
      <span class="font_title">运营商：</span>
      <el-checkbox-group
        v-model=" operatorChoose"
        v-for="(item,index) in operator"
        :key="index + 'b' "
      >
        <el-checkbox class="font_choose" :disabled="false" :label="item"></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="time">
      <span class="font_title">时间：</span>

      <span class="font_choose">天：</span>
      <span>
        <el-select v-model="time.dayValue" placeholder="请选择">
          <el-option
            v-for="item in time.day"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </span>
      <div class="space">&nbsp;</div>
      <span class="font_choose">周：</span>
      <span>
        <el-select v-model="time.weekValue" placeholder="请选择">
          <el-option
            v-for="item in time.week"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </span>
      <div class="space">&nbsp;</div>
      <span class="font_choose">月：</span>
      <span>
        <el-select v-model="time.monthValue" placeholder="请选择">
          <el-option
            v-for="item in time.month"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </span>
    </div>
    <div>
      <el-button class="submit">确定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OptionSelect",
  data() {
    return {
      region: [
        "全部",
        "贵阳",
        "遵义",
        "六盘水",
        "安顺",
        "毕节",
        "铜仁",
        "黔东南",
        "黔南",
        "黔西南"
      ],
      regionChoose: [],
      operator: ["全部", "移动", "联通", "电信"],
      operatorChoose: [],
      time: {
        day: [
          {
            value: "选项1",
            label: "day1"
          },
          {
            value: "选项2",
            label: "day2"
          },
          {
            value: "选项3",
            label: "day3"
          },
          {
            value: "选项4",
            label: "day4"
          },
          {
            value: "选项5",
            label: "day5"
          },
          {
            value: "选项6",
            label: "day6"
          },
          {
            value: "选项7",
            label: "day7"
          }
        ],
        dayValue: "",
        week: [
          {
            value: "选项1",
            label: "第1周（1.1-1.7）"
          },
          {
            value: "选项2",
            label: "第2周（1.8-1.14）"
          },
          {
            value: "选项3",
            label: "第3周（1.15-1.21）"
          },
          {
            value: "选项4",
            label: "第4周（1.22-1.28）"
          }
        ],
        weekValue: "",
        month: [
          {
            value: "选项1",
            label: "1月"
          },
          {
            value: "选项2",
            label: "2月"
          },
          {
            value: "选项3",
            label: "3月"
          },
          {
            value: "选项4",
            label: "4月"
          },
          {
            value: "选项5",
            label: "5月"
          },
          {
            value: "选项6",
            label: "6月"
          },
          {
            value: "选项7",
            label: "7月"
          },
          {
            value: "选项8",
            label: "8月"
          },
          {
            value: "选项9",
            label: "9月"
          },
          {
            value: "选项10",
            label: "10月"
          },
          {
            value: "选项11",
            label: "11月"
          },
          {
            value: "选项12",
            label: "12月"
          }
        ],
        monthValue: ""
      }
    };
  },
  methods: {}
};
</script>

<style>
</style>


<style scoped>
.el-checkbox-group {
  display: inline-block;
}
.OptionSelect {
  text-align: left;
  padding: 0 14px;
}
.OptionSelect .region,
.OptionSelect .operator,
.OptionSelect .time {
  display: inline-block;
  width: 100%;
  line-height: 32px;
}

.OptionSelect .font_title {
  font-family: PingFangSC-Semibold;
  font-size: 14px;
  color: #333333;
  line-height: 32px;
  font-weight: bold;
}
.OptionSelect .font_choose {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: rgba(51, 51, 51, 0.7);
  width: 75px;
}
.OptionSelect .space {
  width: 14px;
  display: inline-block;
}

.OptionSelect .submit {
  background-color: #ff6123;
  color: #ffffff;
  line-height: 32px;
  height: 32px;
  margin: 0px;
  padding: 0px;
  width: 68px;
}
</style>

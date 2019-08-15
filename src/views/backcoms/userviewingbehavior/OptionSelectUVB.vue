<template>
  <div class="OptionSelectUVB">
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
    <div class="playmode">
      <span class="font_title">播放方式：</span>
      <el-checkbox-group
        v-model=" playmodeChoose"
        v-for="(item,index) in playmode"
        :key="index + 'c' "
      >
        <el-checkbox class="font_choose" :disabled="false" :label="item"></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="programa">
      <span class="font_title">栏目：</span>
      <el-checkbox-group
        v-model=" programaChoose"
        v-for="(item,index) in programa"
        :key="index + 'd' "
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

      <span class="font_choose">范围：</span>
      <span>
        <div class="m_block">
          <el-date-picker
            v-model="time.pickervalue"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="time.pickerOptions"
          ></el-date-picker>
        </div>
      </span>
    </div>
    <div class="submitP">
      <el-button class="submit">确定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OptionSelectUVB",
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
      playmode: ["总体", "直播", "点播", "回看"],
      playmodeChoose: [],
      programa: [
        "总体",
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
      ],
      programaChoose: [],
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
        pickerOptions: {
          shortcuts: [
            {
              text: "最近一周",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit("pick", [start, end]);
              }
            },
            {
              text: "最近一个月",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit("pick", [start, end]);
              }
            },
            {
              text: "最近三个月",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit("pick", [start, end]);
              }
            }
          ]
        },
        pickervalue: ""
      }
    };
  },
  methods: {}
};
</script>

<style>


/* elementui 复选框背景色 统一修改 */

.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #FF6123;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #FF6123;
  border-color: #FF6123;
}
.el-checkbox__inner:hover {
  border-color: #FF6123;
}
.el-checkbox__input.is-focus .el-checkbox__innder {
  border-color: #FF6123;
}

/* 时间范围 */
.el-date-table td.end-date span, .el-date-table td.start-date span {
    background-color: #FF6123;
}
</style>


<style scoped>
.el-checkbox-group {
  display: inline-block;
}
.OptionSelectUVB {
  text-align: left;
  padding: 0 14px;
}
.OptionSelectUVB .region,
.OptionSelectUVB .operator,
.OptionSelectUVB .time,
.OptionSelectUVB .playmode,
.OptionSelectUVB .programa {
  display: inline-block;
  width: 100%;
  line-height: 32px;
}
.OptionSelectUVB .m_block {
  display: inline-block;
  line-height: 32px;
}

.OptionSelectUVB .font_title {
  font-family: PingFangSC-Semibold;
  font-size: 14px;
  color: #333333;
  line-height: 32px;
  font-weight: bold;
}
.OptionSelectUVB .font_choose {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: rgba(51, 51, 51, 0.7);
  width: 75px;
}
.OptionSelectUVB .space {
  width: 14px;
  display: inline-block;
}
.OptionSelectUVB .submitP {
  margin-top: 14px;
}
.OptionSelectUVB .submit {
  background-color: #ff6123;
  color: #ffffff;
  line-height: 32px;
  height: 32px;
  margin: 0px;
  padding: 0px;
  width: 68px;
}
</style>

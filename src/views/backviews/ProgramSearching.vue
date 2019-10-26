<template>
  <div class="program_searching">
    <!-- 条件筛选开始 -->
    <el-row class="option_select program_searching_option">
      <el-row class="model_title">
        <span class="title_border_left"></span>条件筛选
      </el-row>
      <el-row class="chart_body back_white">
        <el-row class="date_option">
          <div class="block">
            <span class="demonstration">日期：</span>
            <el-date-picker
              v-model="date"
              type="date"
              placeholder="选择日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">时间：</span>
            <el-time-select
              v-model="time"
              :picker-options="{
            start: '00:00',
            step: '01:00',
            end: '23:00'
            }"
              placeholder="选择时间"
            ></el-time-select>
            <el-tooltip
              class="item"
              effect="dark"
              content="这是一个时间段，如选择12:00则代表是12:00-1:00小时段"
              placement="right"
            >
              <i class="iconfont">&#xe605;</i>
            </el-tooltip>
          </div>
        </el-row>
        <el-row class="programInput_elrow">
          <el-input class="program_input" v-model="programInput" placeholder="请输入节目名称" clearable></el-input>
          <el-button class="search_btn" @click="searchSubmit">搜索</el-button>
        </el-row>
      </el-row>
    </el-row>
    <!-- 条件筛选结束 -->

    <!-- 收视行为开始 -->
    <el-row class="program_searching_content">
      <el-row class="model_title">
        <span class="title_border_left"></span>栏目点击数据
      </el-row>
      <el-row class="chart_body back_white">
        <el-col class="height_auto" :span="24">
          <el-row class="search_notice">
            您当前搜索的节目
            <i>{{programInput}}</i>具体数据如下：
          </el-row>
          <el-row>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column
                prop="date(hits.hits[0]._source.demand_user_num,hits.hits[0]._source.onlive_user_num)"
                label="观看户数"
              >
                <template
                  slot-scope="scope"
                >{{scope.row.hits.hits[0]._source.demand_user_num + scope.row.hits.hits[0]._source.onlive_user_num}}</template>
              </el-table-column>
              <el-table-column prop="hits.hits[0]._source.watch_freq" label="观看次数"></el-table-column>
              <el-table-column prop="hits.hits[0]._source.watch_dur" label="观看时长（小时）"></el-table-column>
              <el-table-column prop="hits.hits[0]._source.watch_freq_family" label="户均收视次数"></el-table-column>
              <el-table-column prop="hits.hits[0]._source.watch_dur_mean" label="次均收视时长"></el-table-column>
              <el-table-column prop="hits.hits[0]._source.rank_demand_dur" label="节目收视排名（点播）"></el-table-column>
              <el-table-column prop="hits.hits[0]._source.rank_onlive_dur" label="节目收视排名（直播）"></el-table-column>
            </el-table>
          </el-row>
        </el-col>
      </el-row>
    </el-row>
    <!-- 收视行为结束 -->
  </div>
</template>
<script>
import { program_search } from "@/api/api_main"

export default {
  name: "ProgramSearching", //节目搜索
  watch: {
    dateValue(newValue, oldValue) {
      let vm = this;
      this.$store
        .dispatch("set_PS_time", newValue)
        .then(function (response) {
          // console.log(response);
        })
        .catch(function (error) {
          console.info(error);
        });
    },
    programInput(newValue, oldValue) {
      let vm = this;
      this.$store
        .dispatch("set_PS_name", newValue)
        .then(function (response) {
          // console.log(response);
        })
        .catch(function (error) {
          console.info(error);
        });
    }
  },

  data() {
    return {
      date: '',  //日期
      time: '',  //时间
      programInput: "",  //节目名称
      //节目数据
      tableData: [],
    };
  },
  methods: {
    searchSubmit() {
      let time = (this.time).slice(0, 2)
      let startTime
      //截取时间小时段  截取有效数字
      if (time.slice(0, 1) == 0) {
        // console.log("当前时间第一位是0")
        startTime = time.slice(1, 2)
      } else {
        // console.log("当前时间第一位不是0")
        startTime = time.slice(0, 2)
      }
      // let endTime = String(Number(startTime) + 1)   //结束时间是开始时间 + 1小时

      console.log("开始时间", startTime)
      // console.log("结束时间", endTime)
      // console.log("日期", this.date)
      // console.log("节目名称", this.programInput)

      let formData = new FormData()
      formData.append("name", this.programInput)
      formData.append("time", startTime)
      // formData.append("end", endTime)
      formData.append("date", this.date)

      if (startTime != '' && this.date != '' && this.programInput != '') {
        // console.log("可以提交数据")
        program_search(formData)
          .then((response) => {
            this.tableData = response.data.responses
            this.showMessage('success', '查询成功！')
            // console.log("返回的数据tableData为：", response.data.responses)
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        this.showMessage('warning', '请填写完整查询条件')
      }
    },

    showMessage(messageType, message) {
      this.$notify({
        title: '提示',
        message: message,
        type: messageType,
        offset: 100
      });
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

.program_searching_option {
  height: 156px;
}
.program_searching_content {
  height: 300px;
  margin-top: 14px;
}
.search_notice {
  text-align: left;
  font-size: 14px;
  color: #333333;
}
.program_searching_option .iconfont {
  margin-left: 10px;
  cursor: pointer;
}
.search_notice i {
  font-style: normal;
  font-size: 16px;
  color: #ff6123;
  font-weight: bold;
}
.program_searching_content .el-table td {
  padding: 7px 0 !important;
  font-size: 12px;
  color: #999999;
}
.program_searching_content .el-table th > .cell {
  font-size: 14px;
  color: #333333;
}
.date_option {
  text-align: left;
  display: -webkit-flex;
  display: flex;
}
.date_option .block {
  margin-right: 20px;
}
.date_option span {
  font-size: 14px;
  color: #333333;
  font-weight: bold;
}
.program_searching .programInput_elrow {
  height: 35px;
  line-height: 35px;
  text-align: left;
}
.programInput_elrow .program_input {
  width: 340px;
  height: 32px;
  line-height: 32px;
  margin-top: 15px;
}
.programInput_elrow .search_btn {
  background-color: #ff6123;
  color: #ffffff;
  line-height: 40px;
  height: 40px;
  margin: 0px;
  padding: 0px;
  width: 90px;
  margin-left: 15px;
}
</style>
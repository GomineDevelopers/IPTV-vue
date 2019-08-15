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
            <span class="demonstration">时间：</span>
            <el-date-picker
              v-model="dateValue"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
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
            <i>白发</i>具体数据如下：
          </el-row>
          <el-row>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="watchNumber" label="观看户数" width="180"></el-table-column>
              <el-table-column prop="watchNumber" label="观看次数" width="180"></el-table-column>
              <el-table-column prop="watchTheTime" label="观看时长（小时）"></el-table-column>
              <el-table-column prop="ratingPerHousehold" label="户均收视时长"></el-table-column>
              <el-table-column prop="averageViewingTimes" label="次均收视时长"></el-table-column>
              <el-table-column prop="bunchViewingTop" label="节目收视排名（点播）"></el-table-column>
              <el-table-column prop="liveViewingTop" label="节目收视排名（直播）"></el-table-column>
            </el-table>
          </el-row>
        </el-col>
      </el-row>
    </el-row>
    <!-- 收视行为结束 -->
  </div>
</template>
<script>
export default {
  name: 'ProgramSearching', //节目搜索
  data() {
    return {
      dateValue: [new Date(2019, 2, 10, 10, 10), new Date(2019, 2, 10, 10, 10)],
      programInput: '',
      tableData: [
        {
          watchUserNumber: '12312',
          watchNumber: '421312',
          watchTheTime: '21312',
          ratingPerHousehold: '2',
          averageViewingTimes: '21',
          bunchViewingTop: '23',
          liveViewingTop: '12'
        }
      ]
    }
  },
  mounted() {

  },
  methods: {
    searchSubmit() {
      console.log(this.dateValue)
      console.log(this.programInput)
    }
  }
}
</script>
<style>
.program_searching_option {
  height: 156px;
}
.program_searching_content {
  height: 300px;
  margin-top: 24px;
}
.search_notice {
  text-align: left;
  font-size: 14px;
  color: #333333;
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
  font-size: 12px;
  color: #333333;
}
.date_option {
  text-align: left;
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
<template>
  <!-- 开机日志开始 -->
  <el-row class="data_integrity_model">
    <el-row class="back_white width_100">
      <el-col class="height_auto" :span="24">
        <el-table :data="tableData" style="width: 100%" height="100%">
          <el-table-column prop="programName" label="节目名" width="180"></el-table-column>
          <el-table-column prop="programType" label="类容类型"></el-table-column>
          <el-table-column prop="userNum" label="点播用户数"></el-table-column>
          <el-table-column prop="times" label="点播次数"></el-table-column>
          <el-table-column prop="duration" label="点播时长"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </el-row>
  <!-- 开机日志结束 -->
</template>
<script>
export default {
  name: 'DataIntegrityModel',
  props: {
    tableData: {
      type: Array,
    }
  },
  data() {
    return {

    }
  }

}
</script>
<style>
.data_integrity_model .el-table td {
  padding: 7px 0 !important;
  font-size: 12px;
  color: #999999;
}
.data_integrity_model .el-table th > .cell {
  font-size: 12px;
  color: #333333;
}
/* .data_integrity_model .el-table tr {
  cursor: pointer;
} */
</style>
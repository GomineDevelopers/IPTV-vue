<template>
  <!-- 开机日志开始 -->
  <el-row class="data_integrity_model">
    <el-row class="back_white width_100">
      <el-col class="height_auto_set" :span="24">
        <el-table :data="tableData" style="width: 100%" height="100%">
          <el-table-column prop="programName" label="节目名" width="80"></el-table-column>
          <el-table-column prop="programType" label="类容类型" width="200"></el-table-column>
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
  name: "DataIntegrityModel",
  props: {
    tableData: {
      type: Array
    }
  },
  data() {
    return {};
  }
};
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

.el-table__body-wrapper::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
.el-table__body-wrapper::-webkit-scrollbar {
  width: 5px;
  background-color: rgba(0, 0, 0, 0);
}
/*定义滑块 内阴影+圆角*/
.el-table__body-wrapper::-webkit-scrollbar-thumb {
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  background-color: #555;
}
</style>

<style scoped>
.height_auto_set {
  height: 680px;
}
</style>
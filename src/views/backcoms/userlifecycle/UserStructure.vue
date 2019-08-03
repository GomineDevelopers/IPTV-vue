<template>
  <div class="UserStructure">
    <el-row>111</el-row>
    <el-row>111</el-row>
    <el-row>111</el-row>

    <el-col>111</el-col>
    <el-col>111</el-col>
    <el-col>111</el-col>
    <el-col>111</el-col>

  </div>
</template>

<script>
export default {
  name: "UserStructure",
  data() {
    return {};
  },
  methods: {
    drawLine() {
      var myChartProe = this.$echarts.init(
        document.getElementById("eMap_guizhou2")
      );
    },
    drawLine2() {
      var myChartProe = this.$echarts.init(
        document.getElementById("eMap_guizhou2")
      );
    }
  },
  mounted() {
    this.drawLine();
    this.drawLine2();
  }
};
</script>

<style>
</style>


<style scoped>
</style>

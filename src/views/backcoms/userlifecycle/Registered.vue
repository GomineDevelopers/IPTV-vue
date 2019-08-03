<template>
  <div class="Registered">
    <div class="echarts1"></div>
    <!-- <div class="echarts2"></div> -->
  </div>
</template>

<script>
export default {
  name: "Registered",
  data() {
    return {};
  },
  methods: {
    drawLine() {
      var myChartProe = this.$echarts.init(
        document.getElementById("echarts1")
      );
    }
    // drawLine2() {
    //   var myChartProe = this.$echarts.init(
    //     document.getElementById("eMap_guizhou2")
    //   );
    // }
  },
  mounted() {
    this.drawLine();
    // this.drawLine2();
  }
};
</script>

<style>
</style>

<style scoped>
/*
295 435+84
*/
.Registered {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #333333;
}
</style>

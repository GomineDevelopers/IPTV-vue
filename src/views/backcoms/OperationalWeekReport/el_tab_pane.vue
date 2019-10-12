<template>
  <!-- <el-tab-pane label="电视" name="television">
    <recommend-column-week-data
      :columnData="televisionColumnData"
      v-if="'television' === activeName"
    ></recommend-column-week-data>
  </el-tab-pane>-->
  <el-tab-pane :label="paneData.data" :name="paneData.id" lazy>~~!!!{{paneData.data}}</el-tab-pane>
</template>
<script>
export default {
  name: "el_tab_pane",
  props: ["paneData"],
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>
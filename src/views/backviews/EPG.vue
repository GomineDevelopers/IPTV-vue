<template>
  <div class="epg_content">
    <!-- 条件筛选开始 -->
    <el-row class="option_select epg">
      <el-row class="model_title">
        <span class="title_border_left"></span>条件筛选
      </el-row>
      <el-row class="chart_body back_white">
        <com-optionselectEGB></com-optionselectEGB>
      </el-row>
    </el-row>
    <!-- 条件筛选结束 -->

    <!-- 栏目点击数据开始 -->
    <el-row class="epg_body">
      <el-row class="model_title">
        <span class="title_border_left"></span>栏目点击次数
      </el-row>
      <el-row class="back_white">
        <div class="epg_body_nav">
          <div
            class="epg_page_one"
            :class="{ 'page_active': pageOneShow }"
            @click="changePage('one')"
          >一级页面</div>
          <div
            class="epg_page_two"
            :class="{ 'page_active': pageTwoShow }"
            @click="changePage('two')"
          >二级页面</div>
        </div>
        <!-- 一级页面内容 -->
        <div class="pageOneContent" v-show="pageOneShow">
          <epg-page-one></epg-page-one>
        </div>
        <!-- 二级页面内容 -->
        <div class="pageTwoContent" v-show="pageTwoShow">
          <epg-page-two></epg-page-two>
        </div>
      </el-row>
    </el-row>
    <!-- 栏目点击数据结束 -->
  </div>
</template>
<script>
import OptionSelectEPG from "../backcoms/epg/OptionSelectEPG";
import EpgPageOne from "../backcoms/epg/EpgPageOne";
import EpgPageTwo from "../backcoms/epg/EpgPageTwo";

export default {
  name: "EPG", //EPG
  components: {
    "com-optionselectEGB": OptionSelectEPG,
    "epg-page-one": EpgPageOne,
    "epg-page-two": EpgPageTwo
  },
  data() {
    return {
      pageOneShow: true,
      pageTwoShow: false,
      epgProgramsTotal: null  //总的栏目分类
    };
  },
  mounted() {

  },
  methods: {
    //一级页面与二级页面切换选项卡
    changePage(string) {
      if (string == "one") {
        this.pageOneShow = true;
        this.pageTwoShow = false;
      } else if (string == "two") {
        this.pageOneShow = false;
        this.pageTwoShow = true;
      }
    }
  }
};
</script>
<style scoped>
.epg_content {
  margin-bottom: 50px;
}
.epg {
  height: 260px;
}
.epg_body {
  margin: 14px 0px;
}
.epg_body_nav {
  display: -webkit-flex;
  display: flex;
  width: 192px;
  height: 32px;
  line-height: 32px;
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 14px;
  margin-top: 5px;
}
.epg_body_nav .epg_page_one,
.epg_body_nav .epg_page_two {
  width: 50%;
  color: #333;
  cursor: pointer;
}
.page_active {
  background: #ff6123;
  color: #fff !important;
}
.epg_page_container {
  padding: 24px;
}
</style>

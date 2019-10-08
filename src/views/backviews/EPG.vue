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
          <epg-page-one :programesListOne="programesListOne"></epg-page-one>
        </div>
        <!-- 二级页面内容 -->
        <div class="pageTwoContent" v-show="pageTwoShow">
          <epg-page-two :programesListTwo="programesListTwo"></epg-page-two>
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
import { mapGetters } from "vuex";

export default {
  name: "EPG", //EPG
  components: {
    "com-optionselectEGB": OptionSelectEPG,
    "epg-page-one": EpgPageOne,
    "epg-page-two": EpgPageTwo
  },
  computed: {
    ...mapGetters(["EPG_operator", "EPG_programa", "EPG_week", "EPG_month", "EPG_time_type"])
  },
  watch: {
    EPG_operator(newValue, oldValue) {
      if (this.EPG_operator.length == 1) {
        this.getEpgBoxData(this.EPG_time_type)
      }
    },
    EPG_programa(newValue, oldValue) {
      if (this.EPG_programa.length == 1) {
        this.getEpgBoxData(this.EPG_time_type)
      }
    },
    // EPG_week(newValue, oldValue) {
    //   this.getEpgBoxData(this.EPG_time_type)
    // },
    // EPG_month(newValue, oldValue) {
    //   this.getEpgBoxData(this.EPG_time_type)
    // },
    EPG_time_type(newValue, oldValue) {
      this.getEpgBoxData(this.EPG_time_type)
      console.log("时间类型", newValue)
    }
  },
  mounted() {

  },
  data() {
    return {
      pageOneShow: true,
      pageTwoShow: false,
      //一级页面数据
      programesListOne: [
        [
          { classify: '搜索', title: 'box0_0', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { classify: '个人中心', title: 'box0_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { classify: '帮助', title: 'box0_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
        ],
        [
          { title: 'box1_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { title: 'box1_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
        ],
        [
          { title: 'box2_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { title: 'box2_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { title: 'box2_3', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
        ],
        [
          { title: 'box3_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { title: 'box3_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { title: 'box3_3', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { title: 'box3_4', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { title: 'box3_5', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
        ],
        [
          { title: 'box4_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { title: 'box4_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { title: 'box4_3', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { title: 'box4_4', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
        ],
      ],
      //二级页面数据
      programesListTwo: [
        [
          { classify: '搜索', title: 'box0_0', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { classify: '个人中心', title: 'box0_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { classify: '帮助', title: 'box0_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
        ],
        [
          { title: 'box1_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { title: 'box1_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
        ],
        [
          { title: 'box2_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { title: 'box2_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { title: 'box2_3', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
        ],
        [
          { title: 'box3_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { title: 'box3_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { title: 'box3_3', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { title: 'box3_4', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { title: 'box3_5', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
        ],
        [
          { title: 'box4_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
        ],
      ]
    };
  },
  methods: {
    refresh_api_data() {
      this.getEpgBoxData(this.EPG_time_type);
    },
    //获取当前选项的页面数据
    getEpgBoxData(time_type) {
      let temp_operator  //运营商选项
      if (this.EPG_operator.length == 1) {
        temp_operator = this.EPG_operator[0]
      }
      let temp = {
        operator: null,
        list: null,
        start: null,
        end: null
      };
      let temp_programa = this.EPG_programa[0]
      let temp_week = this.EPG_week
      let temp_month = this.EPG_month
      // console.log("temp_operator", temp_operator, typeof (temp_operator))
      // console.log("temp_programa", temp_programa, typeof (temp_programa))
      // console.log("temp_week", temp_week, typeof (temp_week))
      // console.log("temp_month", temp_month, typeof (temp_month))
      if (temp_operator == undefined) {
        return
      }
      if (temp_programa == undefined) {
        return
      }
      console.log("time_type", time_type)
      if (time_type == 1) {
        // time = temp_week
        temp = {
          operator: String(temp_operator),
          list: String(temp_programa),
          start: temp_week,
          end: temp_week
        };
      } else if (time_type == 2) {
        // time = temp_month
        temp = {
          operator: String(temp_operator),
          list: String(temp_programa),
          start: temp_month,
          end: temp_month
        };
      } else {
        return
      }
      console.log(temp)
      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("operator", temp.operator);
      formData.append("list", temp.list);
      formData.append("start", temp.start);
      formData.append("end", temp.end);
      // console.log("可以开始请求数据,时间是：", time)
      // epg()
      //   .then((response) => {
      //     console.log("EPG所有栏目分类", response.data)
      //   })
      //   .catch((error) => {
      //     console.log("EPG", error)
      //   })
    },

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

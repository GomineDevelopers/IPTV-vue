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
import { commonTools } from "@/utils/test";

export default {
  name: "EPG", //EPG
  components: {
    "com-optionselectEGB": OptionSelectEPG,
    "epg-page-one": EpgPageOne,
    "epg-page-two": EpgPageTwo
  },
  computed: {
    ...mapGetters(["EPG_operator", "EPG_programa", "EPG_value_others", "EPG_week", "EPG_month", "EPG_time_type", "EPG_programa_type"])
  },
  watch: {
    EPG_operator(newValue, oldValue) {
      if (this.EPG_operator.length == 1) {
        setTimeout(() => {
          this.refresh_api_data()
        }, 500)
      }
    },
    EPG_programa(newValue, oldValue) {
      if (this.EPG_programa.length == 1) {
        setTimeout(() => {
          this.refresh_api_data()
        }, 500)
      }
    },
    EPG_value_others(newValue, oldValue) {
      if (this.EPG_value_others != null) {
        setTimeout(() => {
          this.refresh_api_data()
        }, 500)
      }
    },
    EPG_week(newValue, oldValue) {
      if (this.EPG_week != null) {
        setTimeout(() => {
          this.refresh_api_data()
        }, 500)
      }
    },
    EPG_month(newValue, oldValue) {
      if (this.EPG_month != null) {
        setTimeout(() => {
          this.refresh_api_data()
        }, 500)
      }
    },
    EPG_time_type(newValue, oldValue) {
      // setTimeout(() => {
      //   this.refresh_api_data()
      // }, 500)
    },
    EPG_programa_type(newValue, oldValue) {
      // setTimeout(() => {
      //   this.refresh_api_data()
      // }, 500)
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
      this.getEpgBoxData(this.EPG_time_type, this.EPG_programa_type);
    },
    //获取当前选项的页面数据
    getEpgBoxData(time_type, programa_type) {
      console.log("time_type", time_type)
      console.log("programa_type", programa_type)
      // let temp_operator  //运营商选项
      // let temp_programa  //栏目选择
      let temp_week = this.EPG_week
      let temp_month = this.EPG_month
      let temp = {
        operator: null,
        list: null,
        date: null,
        year: null
      };
      //运营商
      if (this.EPG_operator.length == 1) {
        temp.operator = this.EPG_operator[0]
        // if (this.EPG_operator[0] == '移动2.0') {
        //   temp.ver = '2.0'
        // } else {
        //   temp.ver = null
        // }
      }
      //栏目类型
      if (programa_type == 1) {
        temp.list = this.EPG_programa[0]
      } else if (programa_type == 2) {
        temp.list = this.EPG_value_others
      } else {
        console.log("请选择栏目")
      }

      //时间类型
      if (time_type == 1) {
        // console.log('temp_week', temp_week)
        // temp.date = temp_week
        let date1 = commonTools.split_yearAtime(temp_week)
        temp.date = date1.time
        temp.year = date1.year
      } else if (time_type == 2) {
        // console.log('temp_month', temp_month)
        // temp.date = temp_month
        let date2 = commonTools.split_yearAtime(temp_month)
        temp.date = date2.time
        temp.year = date2.year
      } else {
        console.log("请选择时间！")
      }
      // console.log("temp_operator", temp_operator, typeof (temp_operator))
      // console.log("temp_programa", temp_programa, typeof (temp_programa))
      // console.log("temp_week", temp_week, typeof (temp_week))
      // console.log("temp_month", temp_month, typeof (temp_month))

      // if (temp_operator == undefined) {
      //   return
      // }
      // if (temp_programa == undefined) {
      //   return
      // }

      if (temp.operator == null || temp.list == null || temp.date == null || temp.year == null) {
        console.log("请输入完整的查询条件")
        return
      } else if (temp.operator == '' || temp.list == '' || temp.date == '' || temp.year == '') {
        console.log("请输入完整的查询条件")
        return
      }
      console.log('temp', temp)

      //设置上周或者上月的时间选项
      let last_temp = temp
      let last_date
      if (time_type == 1) {
        last_date = temp.date.replace(/[^0-9]/ig, "") - 1
        last_temp.date = last_date + 'week'
      } else if (time_type == 2) {
        last_date = temp.date.replace(/[^0-9]/ig, "") - 1
        last_temp.date = last_date + 'month'
      } else {
        console.log("请选择时间！")
      }

      // console.log("上期时间last_temp", last_temp)

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("operator", temp.operator);
      formData.append("list", temp.list);
      formData.append("date", temp.date);
      formData.append("year", temp.year);

      var last_formData = new FormData();
      var last_formData = new window.FormData();
      last_formData.append("operator", last_temp.operator);
      last_formData.append("list", last_temp.list);
      last_formData.append("date", last_temp.date);
      last_formData.append("year", last_temp.year);

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

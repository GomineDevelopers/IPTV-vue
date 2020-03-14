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
          <!-- epg-page-one2为2.0版本的盒子信息组件 -->
          <!-- <epg-page-one2 :programesListOne2="mobileProgramesListOne" v-show="!oneShow"></epg-page-one2> -->
        </div>

        <!-- 二级页面内容 -->
        <div class="pageTwoContent" v-show="pageTwoShow">
          <epg-page-two :programesListTwo="programesListTwo"></epg-page-two>
          <!-- epg-page-one2为2.0版本的盒子信息组件 -->
          <!-- <epg-page-one2 :programesListOne2="mobileProgramesListTwo" v-show="!oneShow"></epg-page-one2> -->
        </div>
        <!-- <div v-for="(item,index) in box_content" :key="index">{{item}}</div> -->
      </el-row>
    </el-row>
    <!-- 栏目点击数据结束 -->
  </div>
</template>
<script>
import OptionSelectEPG from "../backcoms/epg/OptionSelectEPG";
import EpgPageOne2 from "../backcoms/epg/EpgPageOne2";
import EpgPageTwo from "../backcoms/epg/EpgPageTwo";
import EpgPageOne from "../backcoms/epg/EpgPageOne";
import { mapGetters } from "vuex";
import { commonTools } from "@/utils/test";
import { epg, epg_box_content } from "@/api/api_main";

export default {
  name: "EPG", //EPG
  components: {
    "com-optionselectEGB": OptionSelectEPG,
    "epg-page-one": EpgPageOne, // 1.0版本
    "epg-page-two": EpgPageTwo, // 1.0版本
    "epg-page-one2": EpgPageOne2 //移动2.0版本的一级页面
  },
  computed: {
    ...mapGetters([
      "EPG_operator",
      "EPG_programa",
      "EPG_value_others",
      "EPG_week",
      "EPG_month",
      "EPG_time_type",
      "EPG_programa_type"
    ])
  },
  watch: {
    EPG_operator(newValue, oldValue) {
      if (this.EPG_operator.length == 1) {
        let vm = this;
        setTimeout(() => {
          vm.refresh_api_data();
        }, 500);
      }
    },
    EPG_programa(newValue, oldValue) {
      if (this.EPG_programa.length == 1) {
        let vm = this;
        setTimeout(() => {
          vm.refresh_api_data();
        }, 500);
      }
    },
    EPG_value_others(newValue, oldValue) {
      if (this.EPG_value_others != null) {
        let vm = this;
        setTimeout(() => {
          vm.refresh_api_data();
        }, 500);
      }
    },
    EPG_week(newValue, oldValue) {
      if (this.EPG_week != null) {
        let vm = this;
        setTimeout(() => {
          vm.refresh_api_data();
        }, 500);
      }
    },
    EPG_month(newValue, oldValue) {
      if (this.EPG_month != null) {
        let vm = this;
        setTimeout(() => {
          vm.refresh_api_data();
        }, 500);
      }
    },
    EPG_time_type(newValue, oldValue) {
      let vm = this;
      setTimeout(() => {
        vm.refresh_api_data();
      }, 500);
    },
    EPG_programa_type(newValue, oldValue) {
      console.log("节目类型更新", newValue);
      //根据节目类型来判断显示一级页面还是二级页面
      this.changePage();
      // setTimeout(() => {
      //   this.refresh_api_data()
      // }, 500)
    }
  },
  mounted() {
    this.refresh_api_data();
  },
  data() {
    return {
      pageOneShow: false, //大的一级页面
      pageTwoShow: false, //大的二级页面

      oneShow: false, //1.0 页面
      // twoShow: false,  //2.0页面

      //一级页面数据
      programesListOne: [
        // [
        //   { classify: '搜索', title: 'box0_0', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
        //   { classify: '个人中心', title: 'box0_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
        //   { classify: '帮助', title: 'box0_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
        // ],
        // [
        //   { title: 'box1_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
        //   { title: 'box1_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
        // ],
        // [
        //   { title: 'box2_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
        //   { title: 'box2_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
        //   { title: 'box2_3', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
        // ],
        // [
        //   { title: 'box3_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
        //   { title: 'box3_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
        //   { title: 'box3_3', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
        //   { title: 'box3_4', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
        //   { title: 'box3_5', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
        // ],
        // [
        //   { title: 'box4_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
        //   { title: 'box4_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
        //   { title: 'box4_3', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
        //   { title: 'box4_4', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
        // ],
      ],
      //二级页面数据
      programesListTwo: [
        // [
        //   { classify: '搜索', title: 'box0_0', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
        //   { classify: '个人中心', title: 'box0_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
        //   { classify: '帮助', title: 'box0_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
        // ],
        // [
        //   { title: 'box1_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
        //   { title: 'box1_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
        // ],
        // [
        //   { title: 'box2_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
        //   { title: 'box2_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
        //   { title: 'box2_3', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
        // ],
        // [
        //   { title: 'box3_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
        //   { title: 'box3_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
        //   { title: 'box3_3', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
        //   { title: 'box3_4', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
        //   { title: 'box3_5', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
        // ],
        // [
        //   { title: 'box4_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
        // ],
      ],

      //移动2.0版本数据 一级页面
      mobileProgramesListOne: [
        // {
        //   // classify: '搜索',
        //   title: 'box0_0',
        //   // lastWeek: '361018',
        //   // thisWeek: '336859',
        //   // chainIndex: '-6.09%',
        //   style: {
        //     position: 'absolute', width: '306px', left: '632px', height: '186px', top: '150px'
        //   }
        // },
        // {
        //   // classify: '个人中心',
        //   title: 'box0_1',
        //   // lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%',
        //   style: {
        //     position: 'absolute', width: '88px', left: '1020px', height: '30px', top: '22px'
        //   }
        // },
        // {
        //   // classify: '帮助',
        //   title: 'box0_2',
        //   // lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%',
        //   style: {
        //     position: 'absolute', width: '123px', left: '1122px', height: '30px', top: '22px'
        //   }
        // },
        // {
        //   title: 'box1_1',
        //   // lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%',
        //   style: {
        //     position: 'absolute', width: '90px', left: '8px', height: '35px', top: '68px'
        //   }
        // },
        // {
        //   title: 'box1_2',
        //   // lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%',
        //   style: {
        //     position: 'absolute', width: '90px', left: '114px', height: '35px', top: '68px'
        //   }
        // },
        // {
        //   title: 'box2_1',
        //   // lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%',
        //   style: {
        //     position: 'absolute', width: '90px', left: '1075px', height: '35px', top: '68px'
        //   }
        // },
        // {
        //   title: 'box2_2',
        //   // lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%',
        //   style: {
        //     position: 'absolute', width: '90px', left: '220px', height: '35px', top: '68px'
        //   }
        // },
      ],
      //移动2.0版本数据  二级页面
      mobileProgramesListTwo: [
        // {
        //   // classify: '搜索',
        //   title: 'box0_0',
        //   // lastWeek: '361018',
        //   // thisWeek: '336859',
        //   // chainIndex: '-6.09%',
        //   style: {
        //     position: 'absolute', width: '306px', left: '632px', height: '186px', top: '150px'
        //   }
        // },
        // {
        //   // classify: '个人中心',
        //   title: 'box0_1',
        //   // lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%',
        //   style: {
        //     position: 'absolute', width: '88px', left: '1020px', height: '30px', top: '22px'
        //   }
        // },
        // {
        //   // classify: '帮助',
        //   title: 'box0_2',
        //   // lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%',
        //   style: {
        //     position: 'absolute', width: '123px', left: '1122px', height: '30px', top: '22px'
        //   }
        // },
        // {
        //   title: 'box1_1',
        //   // lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%',
        //   style: {
        //     position: 'absolute', width: '90px', left: '8px', height: '35px', top: '68px'
        //   }
        // },
        // {
        //   title: 'box1_2',
        //   // lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%',
        //   style: {
        //     position: 'absolute', width: '90px', left: '114px', height: '35px', top: '68px'
        //   }
        // },
        // {
        //   title: 'box2_1',
        //   // lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%',
        //   style: {
        //     position: 'absolute', width: '90px', left: '1075px', height: '35px', top: '68px'
        //   }
        // },
        // {
        //   title: 'box2_2',
        //   // lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%',
        //   style: {
        //     position: 'absolute', width: '90px', left: '220px', height: '35px', top: '68px'
        //   }
        // },
      ]
    };
  },
  methods: {
    refresh_api_data() {
      try {
        this.getEpgBoxData(this.EPG_time_type, this.EPG_programa_type);
      } catch (error) {
        console.log(error);
      }
    },
    //获取当前选项的页面数据
    getEpgBoxData(time_type, programa_type) {
      console.log("time_type", time_type);
      console.log("programa_type", programa_type);
      // let temp_operator  //运营商选项
      // let temp_programa  //栏目选择
      let vm = this;
      let temp_week = this.EPG_week;
      let temp_month = this.EPG_month;
      let temp = {
        operator: null,
        list: null,
        date: null,
        year: null
      };
      //运营商
      if (this.EPG_operator.length == 1) {
        if (
          this.EPG_operator[0] == "移动1.0" ||
          this.EPG_operator[0] == "移动2.0"
        ) {
          temp.operator = "移动";
        } else {
          temp.operator = this.EPG_operator[0];
        }
      }
      //栏目类型
      if (programa_type == 1) {
        temp.list = this.EPG_programa[0];
      } else if (programa_type == 2) {
        temp.list = this.EPG_value_others;
      } else {
        console.log("请选择栏目");
      }

      //时间类型
      if (time_type == 1) {
        // console.log('temp_week', temp_week)
        // temp.date = temp_week
        let date1 = commonTools.split_yearAtime(temp_week);
        temp.date = date1.time;
        temp.year = date1.year;
      } else if (time_type == 2) {
        // console.log('temp_month', temp_month)
        // temp.date = temp_month
        let date2 = commonTools.split_yearAtime(temp_month);
        temp.date = date2.time;
        temp.year = date2.year;
      } else {
        // console.log("请选择时间！")
      }
      // console.log("temp_operator", temp_operator, typeof (temp_operator))
      // console.log("temp_programa", temp_programa, typeof (temp_programa))
      // console.log("temp_week", temp_week, typeof (temp_week))
      // console.log("temp_month", temp_month, typeof (temp_month))

      if (
        temp.operator == null ||
        temp.list == null ||
        temp.date == null ||
        temp.year == null
      ) {
        console.log("请输入完整的查询条件");
        vm.programesListOne = []; //初始化
        vm.programesListTwo = []; //初始化
        return;
      } else if (
        temp.operator == "" ||
        temp.list == "" ||
        temp.date == "" ||
        temp.year == ""
      ) {
        console.log("请输入完整的查询条件");

        return;
      }
      console.log("temp", temp);
      // console.log("上周last_temp", last_temp)

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("operator", temp.operator);
      formData.append("list", temp.list);
      formData.append("date", temp.date);
      formData.append("year", temp.year);

      //设置二次请求的temp
      // 一次请求用date，当前周月 // 二次请求end为当前周月，start上周月（年由后台判断，前端排序）
      let last_temp = {  
        operator: temp.operator,
        list: temp.list,
        start: null,
        end: temp.date,
        areanumber: null,
        year: temp.year
      };
      //设置上周或者上月的时间选项
      let last_date;
      // if (time_type == 1) {
      //   last_date = temp.date.replace(/[^0-9]/gi, "") - 1;
      //   last_temp.start = last_date + "week";
      // } else if (time_type == 2) {
      //   last_date = temp.date.replace(/[^0-9]/gi, "") - 1;
      //   last_temp.start = last_date + "month";
      // }
      // 跨年处理
      if (time_type == 1) {     // 周
        last_date = temp.date.replace(/[^0-9]/gi, "") - 1;
        if (last_date != 0) {
          last_temp.start = last_date + "week";
        } else if (last_date == 0) {
          last_temp.start =
            commonTools.return_AssignYear_FinalWeekNum(last_temp.year - 1) +
            "week";
        }
      } else if (time_type == 2) { // 月
        last_date = temp.date.replace(/[^0-9]/gi, "") - 1;
        if (last_date != 0) {
          last_temp.start = last_date + "month";
        } else if (last_date == 0) {
          last_temp.start = 12 + "month";
        }
      }
      epg(formData)
        .then(response => {
          // **注：此处要先判断时间维度，后台返回的responses[0]，responses[1]为周维度的数据，responses[0]是1.0的数据，responses[1]是2.0的数据
          //后台返回的responses[2]，responses[3]为月维度的数据，responses[2]是1.0的数据，responses[3]是2.0的数据
          if (this.EPG_operator[0] != "移动2.0") {
            (vm.oneShow = true), //1.0 页面显示
              console.log("1.0版本选择0");
            let box_data = response.data.responses[0].hits.hits;
            // console.log("response.data", response.data);
            try {
              /*  */
              if (box_data[0]._source.areanumber) {
              } //若为空，进入catch
              let promise_list = []; //存放所有的请求
              box_data.forEach((value, index) => {
                // console.log("box", value._source.areanumber)
                let res_index = index;
                let areanumber = value._source.areanumber;
                last_temp.areanumber = areanumber;
                var last_formData = new FormData();
                var last_formData = new window.FormData();
                last_formData.append("operator", String(last_temp.operator));
                last_formData.append("list", String(last_temp.list));
                last_formData.append("start", String(last_temp.start));
                last_formData.append("end", String(last_temp.end));
                last_formData.append(
                  "areanumber",
                  String(last_temp.areanumber)
                );
                last_formData.append("year", String(last_temp.year));
                promise_list.push(
                  epg_box_content(last_formData).then(response => {
                    console.log("~~~~~~~~~~~~~~~~~~~~");
                    console.log(response);
                    //此处是1.0版本 的box信息
                    let responseVer1;
                    if (time_type == 1) {
                      //此处时间格式为周维度 responses[0]是周维度1.0版本的数据
                      responseVer1 = response.data.responses[0];
                      // console.log(
                      //   "周1.0版本的box信息",
                      //   response.data.responses
                      // );
                    } else if (time_type == 2) {
                      //此处时间格式为月维度   responses[2]是月维度1.0版本的数据
                      responseVer1 = response.data.responses[2];
                      // console.log(
                      //   "月1.0版本的box信息",
                      //   response.data.responses
                      // );
                    }
                    let click_freq_num =
                      responseVer1.aggregations.statistical_granularity.buckets;
                    click_freq_num = commonTools.bucketsSort_WM_CrossYear(click_freq_num); // 跨年处理
                    // console.log("box名称：", areanumber);
                    //此处需要判断是否有上期数据
                    let last_click_freq_num = click_freq_num[1]
                      ? click_freq_num[0].click_freq.value
                      : ""; //上期点击数
                    let current_click_freq_num = click_freq_num[1]
                      ? click_freq_num[1].click_freq.value
                      : click_freq_num[0].click_freq.value; //本周点击数
                    let chain_index;
                    if (last_click_freq_num != 0) {
                      //若上期数据不为 0，求环比
                      chain_index = (
                        ((current_click_freq_num - last_click_freq_num) /
                          last_click_freq_num) *
                        100
                      ).toFixed(1); //����
                    } else {
                      chain_index = "-";
                    }
                    return {
                      classify: "",
                      title: areanumber,
                      lastWeek: last_click_freq_num,
                      thisWeek: current_click_freq_num,
                      chainIndex: chain_index + "%"
                    };
                    // console.log("----------------------------")
                  })
                );
              });
              // promise_All处理异步函数顺序
              // 全部执行完之后再执行……
              Promise.all(promise_list).then(res => {
                //拿到的为18行return 出来的结果
                // console.log(`执行完所有才OK，${res}`);
                // console.log(res)
                let result = [];
                res.forEach(item => {
                  if (
                    !result[
                      Number(item.title.substring(3, item.title.indexOf("_")))
                    ]
                  ) {
                    result[
                      Number(item.title.substring(3, item.title.indexOf("_")))
                    ] = [];
                  }
                  result[
                    Number(item.title.substring(3, item.title.indexOf("_")))
                  ].push(item);
                });
                result.forEach(item => {
                  item.sort(function(a, b) {
                    return (
                      Number(
                        a.title.substring(
                          a.title.indexOf("_") + 1,
                          a.title.length
                        )
                      ) -
                      Number(
                        b.title.substring(
                          b.title.indexOf("_") + 1,
                          b.title.length
                        )
                      )
                    );
                  });
                });
                // console.log("result--------", result)
                if (vm.EPG_programa_type == 2) {
                  vm.programesListTwo = result;
                  // console.log("vm.programesListTwo~~~~~~~~~", vm.programesListTwo)
                } else if (vm.EPG_programa_type == 1) {
                  vm.programesListOne = result;
                  // console.log("vm.programesListOne~~~~~~~~~", vm.programesListOne)
                }
              });
              // 执行完一个后就执行……
              // Promise.race(list_pro).then(res=>{
              //     console.log(`执行完第一个就OK，${res}`);     //返回值为第一个执行的数据
              // });
            } catch (error) {
              //若数据为空，初始化
              if (vm.EPG_programa_type == 2) {
                vm.programesListTwo = [];
                // console.log("vm.programesListTwo~~~~~~~~~", vm.programesListTwo)
              } else if (vm.EPG_programa_type == 1) {
                vm.programesListOne = [];
                // console.log("vm.programesListOne~~~~~~~~~", vm.programesListOne)
              }
              // vm.programesListOne = []  //若数据为空，初始化
              console.log(error);
            }
          } else {
            vm.programesListOne = []; //初始化
            vm.programesListTwo = []; //初始化

            // vm.oneShow = false,  //1.0 页面显示
            // console.log("2.0版本选择1");
            // console.log("2.0版本box", response.data.responses[0])
            let box_data = response.data.responses[1].hits.hits;
            // console.log("2.0,2.0,2.0------", box_data);
            try {
              /*  */
              let promise_list = []; //存放所有的请求
              // if (box_data[0]._source.areanumber)  //若为空，则进入catch初始化数据
              box_data.forEach((value, index) => {
                // console.log("2.0box名称", value._source.areanumber);
                let res_index = index;
                let areanumber = value._source.areanumber;
                last_temp.areanumber = areanumber;
                var last_formData = new FormData();
                var last_formData = new window.FormData();
                last_formData.append("operator", String(last_temp.operator));
                last_formData.append("list", String(last_temp.list));
                last_formData.append("start", String(last_temp.start));
                last_formData.append("end", String(last_temp.end));
                last_formData.append(
                  "areanumber",
                  String(last_temp.areanumber)
                );
                last_formData.append("year", String(last_temp.year));
                promise_list.push(
                  epg_box_content(last_formData).then(response => {
                    let responseVer2;
                    if (time_type == 1) {
                      //此处时间格式为周维度 responses[1]是周维度2.0版本的数据
                      responseVer2 = response.data.responses[1];
                      // console.log(
                      //   "周2.0版本的box信息",
                      //   response.data.responses
                      // );
                    } else if (time_type == 2) {
                      //此处时间格式为月维度   responses[3]是月维度2.0版本的数据
                      responseVer2 = response.data.responses[3];
                      // console.log(
                      //   "月2.0版本的box信息",
                      //   response.data.responses
                      // );
                    }
                    //此处是2.0版本 的box信息
                    // console.log("box名称：", areanumber);
                    let click_freq_num =
                      responseVer2.aggregations.statistical_granularity.buckets;
                    click_freq_num = commonTools.bucketsSort_WM_CrossYear(click_freq_num); // 跨年处理
                    // console.log("box详细信息", click_freq_num)
                    //此处需要判断是否有上期数据
                    let last_click_freq_num = click_freq_num[1]
                      ? click_freq_num[0].click_freq.value
                      : ""; //上期点击数
                    let current_click_freq_num = click_freq_num[1]
                      ? click_freq_num[1].click_freq.value
                      : click_freq_num[0].click_freq.value; //本周点击数
                    let chain_index;
                    if (last_click_freq_num != 0) {
                      //若上期数据不为 0，求环比
                      chain_index = (
                        ((current_click_freq_num - last_click_freq_num) /
                          last_click_freq_num) *
                        100
                      ).toFixed(1); //����
                    } else {
                      chain_index = "-";
                    }
                    //注：此处2.0版本盒子设置与1.0版本盒子显示一样，不涉及位置信息，等广电2.0版本box盒子信息完整再做调整
                    return {
                      classify: "",
                      title: areanumber,
                      lastWeek: last_click_freq_num,
                      thisWeek: current_click_freq_num,
                      chainIndex: chain_index + "%"
                    };

                    // 注：此处为2.0版本box盒子位置信息处理，等广电2.0版本box盒子信息完整再恢复使用
                    // return {
                    //   classify: '',
                    //   title: areanumber,
                    //   lastWeek: last_click_freq_num,
                    //   thisWeek: current_click_freq_num,
                    //   chainIndex: chain_index + '%',
                    //   style: {
                    //     position: 'absolute',
                    //     width: value._source.w + 'px',
                    //     left: value._source.x + 'px',
                    //     height: value._source.h + 'px',
                    //     top: value._source.y + 'px'
                    //   }
                    // }
                    // console.log("----------------------------")
                  })
                );
              });
              // promise_All处理异步函数顺序
              // 全部执行完之后再执行……
              Promise.all(promise_list).then(res => {
                //拿到的为18行return 出来的结果
                let result = [];
                res.forEach(item => {
                  if (
                    !result[
                      Number(item.title.substring(3, item.title.indexOf("_")))
                    ]
                  ) {
                    result[
                      Number(item.title.substring(3, item.title.indexOf("_")))
                    ] = [];
                  }
                  result[
                    Number(item.title.substring(3, item.title.indexOf("_")))
                  ].push(item);
                });
                result.forEach(item => {
                  item.sort(function(a, b) {
                    return (
                      Number(
                        a.title.substring(
                          a.title.indexOf("_") + 1,
                          a.title.length
                        )
                      ) -
                      Number(
                        b.title.substring(
                          b.title.indexOf("_") + 1,
                          b.title.length
                        )
                      )
                    );
                  });
                });
                if (vm.EPG_programa_type == 2) {
                  vm.programesListTwo = result;
                  // console.log("vm.programesListTwo~~~~~~~~~", vm.programesListTwo)
                } else if (vm.EPG_programa_type == 1) {
                  vm.programesListOne = result;
                  // console.log("vm.programesListOne~~~~~~~~~", vm.programesListOne)
                }

                // 注：下面为2.0版本box盒子的信息代码，等2.0版本box位置信息数据调整好再恢复
                // if (vm.EPG_programa_type == 1) {
                //   vm.mobileProgramesListOne = res
                //   console.log("2.0版本一级页面vm.mobileProgramesListOne~~~~~~~~~", vm.mobileProgramesListOne)
                // } else if (vm.EPG_programa_type == 2) {
                //   vm.mobileProgramesListTwo = res
                // }
              });
            } catch (error) {
              // console.log("result--------", result)
              if (vm.EPG_programa_type == 2) {
                vm.programesListTwo = [];
                // console.log("vm.programesListTwo~~~~~~~~~", vm.programesListTwo)
              } else if (vm.EPG_programa_type == 1) {
                vm.programesListOne = [];
                // console.log("vm.programesListOne~~~~~~~~~", vm.programesListOne)
              }

              // if (vm.EPG_programa_type == 1) {
              //   vm.mobileProgramesListOne = []
              //   // console.log("2.0版本一级页面vm.mobileProgramesListOne~~~~~~~~~", vm.mobileProgramesListOne)
              // } else if (vm.EPG_programa_type == 2) {
              //   vm.mobileProgramesListTwo = []
              //   // console.log("2.0版本二级页面vm.mobileProgramesListTwo~~~~~~~~~", vm.mobileProgramesListTwo)
              // }
              console.log(error);
            }
          }
        })
        .catch(error => {
          console.log("EPG", error);
        });
    },

    //一级页面与二级页面切换选项卡
    changePage() {
      if (this.EPG_programa_type == 1) {
        //节目类型为 1 显示一级页面
        this.pageOneShow = true;
        this.pageTwoShow = false;
      } else if (this.EPG_programa_type == 2) {
        //节目类型为 2 显示二级页面
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

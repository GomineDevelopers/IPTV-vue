<template>
  <div class="OptionSelectPR">
    <div class="report">
      <span class="font_title">日报:</span>&nbsp;
      <div class="r_btnP">
        <el-button
          v-for="(item,index) in daily"
          :key="index + 'aa' "
          class="r_btn"
          :class="item.routerLink==routerLink ? 'active_btn': ''"
          @click="setReportOption(item.name,item.routerLink,1,index)"
        >{{item.name}}</el-button>
      </div>
      <div class="mspace"></div>
      <span class="font_title">周报：</span>&nbsp;
      <div class="r_btnP">
        <el-button
          v-for="(item,index) in weekly"
          :key="index + 'bb' "
          class="r_btn"
          :class="item.routerLink==routerLink ? 'active_btn': ''"
          @click="setReportOption(item.name,item.routerLink,2,index)"
        >{{item.name}}</el-button>
      </div>
      <div class="mspace"></div>
      <span class="font_title">月报：</span>&nbsp;
      <div class="r_btnP">
        <el-button
          v-for="(item,index) in monthly "
          :key="index + 'cc' "
          class="r_btn"
          :class="item.routerLink==routerLink ? 'active_btn': ''"
          @click="setReportOption(item.name,item.routerLink,3,index)"
        >{{item.name}}</el-button>
      </div>
      <div class="mspace"></div>
      <span class="font_title">专题报告：</span>&nbsp;
      <div class="r_btnP">
        <el-button
          v-for="(item,index) in specially"
          :key="index + 'dd' "
          class="r_btn"
          :class="item.routerLink==routerLink ? 'active_btn': ''"
          @click="setReportOption(item.name,item.routerLink,4,index)"
        >{{item.name}}</el-button>
      </div>
    </div>
    <!-- 复选-运营商 -->
    <div v-show="ifOperatorShow" class="operator">
      <span class="font_title">运营商：</span>
      <el-checkbox v-model="operator_checkAll" @change="operatorChoose_all">全部</el-checkbox>

      <el-checkbox-group
        @change="operatorChoose_change"
        v-model=" operatorChoose"
        v-for="(item,index) in operator"
        :key="index + 'a' "
        v-show="operator_isIndeterminate"
      >
        <el-checkbox class="font_choose" :disabled="false" :label="item"></el-checkbox>
      </el-checkbox-group>
      <el-checkbox-group
        @change="operatorChoose_change"
        v-model=" operatorChoose"
        v-for="(item,index) in operator"
        :key="index + 'ac' "
        v-show="!operator_isIndeterminate"
      >
        <el-checkbox class="font_choose" :disabled="false" :label="item"></el-checkbox>
      </el-checkbox-group>
    </div>
    <!-- 单选-运营商 -->
    <div v-show="ifOperatorShow2" class="operator">
      <span class="font_title">运营商：</span>
      <!-- <el-checkbox v-model="operator_checkAll" @change="operatorChoose_all">全部</el-checkbox> -->
      <el-checkbox-group
        @change="operatorChoose2_change"
        v-model="operatorChoose2"
        v-for="(item,index) in operator"
        :key="index + 'a' "
        v-show="operator_isIndeterminate2"
      >
        <el-checkbox class="font_choose" :disabled="false" :label="item"></el-checkbox>
      </el-checkbox-group>
      <el-checkbox-group
        @change="operatorChoose2_change"
        v-model="operatorChoose2"
        v-for="(item,index) in operator"
        :key="index + 'ac' "
        v-show="!operator_isIndeterminate2"
      >
        <el-checkbox class="font_choose" :disabled="false" :label="item"></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="time">
      <span class="font_title">时间：</span>
      <span v-show="PR_assignReportNum == 1" class="font_choose">天：</span>
      <span v-show="PR_assignReportNum == 1">
        <el-date-picker
          v-model="time.dayValue"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions0"
          @change="dayChange"
        ></el-date-picker>
      </span>
      <div v-show="PR_assignReportNum == 1" class="space">&nbsp;</div>
      <span v-show="PR_assignReportNum == 2" class="font_choose">周：</span>
      <span v-show="PR_assignReportNum == 2">
        <el-select
          v-model="time.weekValue"
          filterable
          allow-create
          default-first-option
          placeholder="请设置周数"
          style="width:300px;"
          @change="weekChange"
        >
          <el-option
            v-for="item in time.week"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            style="width:300px;"
          ></el-option>
        </el-select>
      </span>
      <div v-show="PR_assignReportNum == 2" class="space">&nbsp;</div>
      <span v-show="PR_assignReportNum == 3" class="font_choose">月：</span>
      <span v-show="PR_assignReportNum == 3">
        <el-select
          v-model="time.monthValue"
          filterable
          allow-create
          default-first-option
          placeholder="请设置月数"
          style="width:300px;"
          @change="monthChange"
        >
          <el-option
            v-for="item in time.month"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            style="width:300px;"
          ></el-option>
        </el-select>
      </span>
      <div v-show="PR_assignReportNum == 3" class="space">&nbsp;</div>
      <span v-show="PR_assignReportNum == 4" class="font_choose">范围：</span>
      <span v-show="PR_assignReportNum == 4">
        <div class="m_block">
          <el-date-picker
            v-model="time.pickerValue"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="time.pickerOptions"
            @change="pickerValue_change"
          ></el-date-picker>
        </div>
      </span>
      <span v-show="PR_assignReportNum == 4" class="font_title" style="margin-left: 20px;">专题：</span>
      <el-select
        v-show="PR_assignReportNum == 4"
        v-model="value_specialName"
        filterable
        allow-create
        default-first-option
        placeholder="选择专题名称"
      >
        <el-option
          v-for="item in options_specialName"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="download">
      <span class="font_title">下载：</span>
      <el-button
        v-show="PR_excel_DownloadingStatus == 0"
        class="btn_download"
        id="id_btn_download"
        @click="export2Excel()"
      >
        <div class="download_text">Excel表单</div>
        <div :style="download_style" class="download_icon"></div>
      </el-button>
      <el-button v-show="PR_excel_DownloadingStatus == 1" class="btn_download2">
        <div class="download_text2">
          数据初始化中
          <img class="m_wait" src="@/assets/loading.gif" />
        </div>
      </el-button>
      <el-button v-show="PR_excel_DownloadingStatus == 2" class="btn_download2">
        <div class="download_text2">
          <!-- 下载中({{PR_downloadNum_child}}/{{PR_downloadNum_parent}}) -->
          下载中
          <img class="m_wait" src="@/assets/loading.gif" />
        </div>
      </el-button>
    </div>

    <div class="submitP">
      <el-button class="submit" @click="submitOption">确定</el-button>
    </div>
  </div>
</template>

<script>
import { commonTools } from "@/utils/test";
import { mapGetters } from "vuex";
import { subReport_list } from "@/api/api_main";

var operatorChoose_new = []; // 多选框-初始化
var operatorChoose_old = []; // 多选框-初始化

// var operatorChoose_new2 = [];
// var operatorChoose_old2 = [];
var operatorChoose_new2 = ["移动"]; // 单选框-初始化
var operatorChoose_old2 = ["移动"]; // 单选框-初始化

export default {
  name: "OptionSelectPR",
  computed: {
    ...mapGetters([
      "PR_assignReportNum",
      "PR_excel_ifCanDownload",
      "PR_downloadNum_child",
      "PR_downloadNum_parent",
      "PR_excel_DownloadingStatus"
    ])
  },
  watch: {
    PR_excel_ifCanDownload(newValue, oldValue) {
      let vm = this;
      let status = newValue;
      if (status == true) {
        document.getElementById("id_btn_download").style.backgroundColor =
          "#ff6123";
        // background-color: #ff6123;
        // background-color: #c0c4cc;
      }
      if (status == false) {
        document.getElementById("id_btn_download").style.backgroundColor =
          "#c0c4cc";
      }
    },
    operatorChoose(newValue, oldValue) {
      let vm = this;
      if (vm.ifOperatorShow == true && vm.ifOperatorShow2 == false) {
        // console.log("∏∏∏∏∏∏∏∏∏∏∏∏∏∏∏");
        // console.log(newValue);

        vm.$store
          .dispatch("set_PR_operator", newValue)
          .then(function(response) {
            // console.log(newValue);
          })
          .catch(function(error) {
            console.info(error);
          });
      }
    },
    operatorChoose2(newValue, oldValue) {
      let vm = this;
      if (vm.ifOperatorShow == false && vm.ifOperatorShow2 == true) {
        // console.log("∏∏∏∏∏∏∏∏∏∏∏∏∏∏∏");
        // console.log(newValue);
        vm.$store
          .dispatch("set_PR_operator", newValue)
          .then(function(response) {
            // console.log(newValue);
          })
          .catch(function(error) {
            console.info(error);
          });
      }
    },
    value_specialName(newValue, oldValue) {
      let vm = this;
      console.log(newValue);
      this.$store
        .dispatch("set_PR_value_specialName", newValue)
        .then(function(response) {
          // console.log(response);
          // console.log("专题报告-专题名称：");
          // console.log(newValue);
        })
        .catch(function(error) {
          console.info(error);
        });
    }
  },
  data() {
    return {
      download_style: {
        backgroundImage: "url(" + require("@/assets/download.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      },
      // 设置日期截止至今日
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      // reportOptionRouter: "专题专区数据报告", //点击不同报表选项对应切换
      // operatorChoose: ["总体"], //绑定选择运营商数据的数组
      routerLink: "/backhome/periodicreport/SpecialZoneReport", //不同报表对应的路由  默认是专题专区数据报告路由
      daily: [
        {
          name: "G+TV用户活跃发展日报表",
          pointStatus: false,
          routerLink: "/backhome/periodicreport/G_TVUserActiveDayReport"
        },
        {
          name: "G+TV用户收视日报表",
          pointStatus: false,
          routerLink: "/backhome/periodicreport/G_TVUserViewingDayReport"
        }
      ],
      weekly: [
        {
          name: "市场业务运营数据分析周报",
          pointStatus: false,
          routerLink: "/backhome/periodicreport/MarketOperationalWeekReport"
        },
        {
          name: "运营数据周报",
          pointStatus: false,
          routerLink: "/backhome/periodicreport/OperationalWeekReport"
        },
        {
          name: "G+TV用户收视行为周报",
          pointStatus: false,
          routerLink: "/backhome/periodicreport/G_TVUserViewingWeekReport"
        }
      ],
      monthly: [
        {
          name: "电信VIP增值业务专项分析",
          pointStatus: false,
          routerLink: "/backhome/periodicreport/VIPAddMonthReport"
        },
        {
          name: "G+TV月度用户收视行为报告",
          pointStatus: false,
          routerLink: "/backhome/periodicreport/G_TVUserViewingMonthReport"
        }
      ],
      specially: [
        {
          name: "专题专区数据报告",
          pointStatus: false,
          routerLink: "/backhome/periodicreport/SpecialZoneReport"
        }
      ],
      operator: [
        // "总体",
        "移动",
        "联通",
        "电信"
        // "其他"
      ],
      // operatorChoose: [],
      operatorChoose: ["移动", "联通", "电信"],

      // operator_checkAll: false,
      operator_checkAll: true,

      operator_isIndeterminate: true,

      operatorChoose2: ["移动"],
      operator_isIndeterminate2: true,

      options_specialName: [
        // 专区专题名称 -- 先从后台获取
        // {
        //   value: "小小福星",
        //   label: "小小福星"
        // },
        // {
        //   value: "70周年",
        //   label: "70周年"
        // }
      ],
      // value_specialName: [],
      value_specialName: "",
      time: {
        day: [
          // {
          //   value: "选项1",
          //   label: "day1"
          // },
          // ...
        ],
        dayValue: "",
        week: [
          // {
          //   value: "选项1",
          //   label: "第1周（1.1-1.7）"
          // },
          // //// 下面是临时-周
          // {
          //   value: "选项1",
          //   label: "第26周（2019.07.01-07.07）"
          // },
          // {
          //   value: "选项2",
          //   label: "第27周（2019.07.08-07.14）"
          // },
          // {
          //   value: "选项3",
          //   label: "第28周（2019.07.15-07.21）"
          // },
          // {
          //   value: "选项4",
          //   label: "第29周（2019.07.22-07.28）"
          // }
          // ...
        ],
        weekValue: "",
        month: [
          // //// 下面是临时-月
          // {
          //   value: "选项1",
          //   label: "2019年7月"
          // }
          // ...
          // {
          //   value: "选项12",
          //   label: "12月"
          // }
        ],
        monthValue: "",
        pickerOptions: {
          shortcuts: [
            {
              text: "最近一周",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit("pick", [start, end]);
              }
            },
            {
              text: "最近一个月",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit("pick", [start, end]);
              }
            },
            {
              text: "最近三个月",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit("pick", [start, end]);
              }
            }
          ]
        },
        pickerValue: ""
      },
      ifOperatorShow: true,
      ifOperatorShow2: false,
      list: [
        {
          name: "韩版设计时尚风衣大",
          number: "MPM00112",
          salePrice: "￥999.00",
          stocknums: 3423,
          salesnums: 3423,
          sharenums: 3423
        },
        {
          name: "韩版设计时尚风衣大",
          number: "MPM00112",
          salePrice: "￥999.00",
          stocknums: 3423,
          salesnums: 3423,
          sharenums: 3423
        }
      ],
      goodsItems: ["商品名称", "商品货号", "售价", "库存", "销量", "分享"]
    };
  },
  created() {
    this.handlerClass();
  },
  mounted() {
    let vm = this;

  
    this.specialName_init();
    // 初始化周
    setTimeout(function() {
      vm.time.week = commonTools.format_WeeksDays_byDWwr_ED();
    }, 100);

    // 初始化月
    setTimeout(function() {
      vm.time.month = commonTools.format_MonthDays_byDWMMr_ED();
    }, 500);


    // 历史条件关了 -- 防止视图初始化渲染bug
    // // ▲历史条件获取  
    // setTimeout(function() {
    //   // 历史选中的定期报告
    //   vm.$store
    //     .dispatch("get_PR_Report_index")
    //     .then(function(response) {
    //       console.log(response);
    //       let if_PR_Report_index = 0;
    //       switch (response) {
    //         case 1:
    //           vm.routerLink =
    //             "/backhome/periodicreport/G_TVUserActiveDayReport";
    //           break;
    //         case 2:
    //           vm.routerLink =
    //             "/backhome/periodicreport/G_TVUserViewingDayReport";
    //           break;
    //         case 3:
    //           vm.routerLink =
    //             "/backhome/periodicreport/MarketOperationalWeekReport";
    //           break;
    //         case 4:
    //           if_PR_Report_index = 4;
    //           vm.routerLink = "/backhome/periodicreport/OperationalWeekReport";
    //           break;
    //         case 5:
    //           vm.routerLink =
    //             "/backhome/periodicreport/G_TVUserViewingWeekReport";
    //           break;
    //         case 6:
    //           if_PR_Report_index = 6;
    //           vm.routerLink = "/backhome/periodicreport/VIPAddMonthReport";
    //           break;
    //         case 7:
    //           vm.routerLink =
    //             "/backhome/periodicreport/G_TVUserViewingMonthReport";
    //           break;
    //         case 8:
    //           vm.routerLink = "/backhome/periodicreport/SpecialZoneReport";
    //           break;
    //         default:
    //           break;
    //       }

    //       // 条件筛选-运营商-显示初始化(除了4)
    //       if(if_PR_Report_index == 4){
    //         console.log(if_PR_Report_index);
    //         vm.ifOperatorShow == false;
    //         vm.ifOperatorShow2 == true;
    //       }
    //       else if(if_PR_Report_index == 6) {
    //         vm.ifOperatorShow == false;
    //         vm.ifOperatorShow2 == false;
    //       }
    //       else{
    //         console.log(if_PR_Report_index);
    //         vm.ifOperatorShow == true;
    //         vm.ifOperatorShow2 == false;
    //       }
    //       console.log(vm.operatorChoose_change);
    //       console.log(vm.operatorChoose_change2);
    //       console.log(vm.operatorChoose);
    //       console.log(vm.operatorChoose2);

    //       vm.$router.push({ path: vm.routerLink });
    //     })
    //     .catch(function(error) {
    //       console.info(error);
    //     });
      
    //   // 下面的主要用于组件显示值（api请求中使用已存在store值）

    //   // 运营商
    //   vm.$store
    //     .dispatch("get_PR_operator")
    //     .then(function(response) {
    //       vm.operatorChoose = response;
    //       vm.operator_checkAll = response.length === vm.operator.length;

    //       // vm.operatorChoose2 = response;
    //       vm.operatorChoose2 = ["移动"]; // 固定
    //     })
    //     .catch(function(error) {
    //       console.info(error);
    //     });
    //   // 范围
    //   vm.$store
    //     .dispatch("get_PR_picker")
    //     .then(function(res) {
    //       if (res.length != 0) {
    //         let temp = [];
    //         let t_arr = res.split(",");
    //         temp.push(t_arr[0]);
    //         temp.push(t_arr[1]);
    //         vm.time.pickerValue = temp;
    //       }
    //     })
    //     .catch(function(error) {
    //       console.info(error);
    //     });

    //   // 专题
    //   vm.$store
    //     .dispatch("get_PR_value_specialName")
    //     .then(function(response) {
    //       console.log(response);
    //       vm.value_specialName = response;
    //     })
    //     .catch(function(error) {
    //       console.info(error);
    //     });
    //   // // 天
    //   // vm.$store
    //   //   .dispatch("get_PR_day")
    //   //   .then(function(res) {
    //   //     vm.time.dayValue = res;
    //   //   })
    //   //   .catch(function(error) {
    //   //     console.info(error);
    //   //   });
    //   // // 周
    //   // vm.$store
    //   //   .dispatch("get_PR_week")
    //   //   .then(function(res) {
    //   //     let length = vm.time.week.length;
    //   //     let i;
    //   //     let temp_label;
    //   //     for (i = 0; i < length; i++) {
    //   //       if (vm.time.week[i].value == res) {
    //   //         temp_label = vm.time.week[i].label;
    //   //         break;
    //   //       }
    //   //     }
    //   //     vm.time.weekValue = temp_label;
    //   //   })
    //   //   .catch(function(error) {
    //   //     console.info(error);
    //   //   });

    // }, 200);



  },
  methods: {
    specialName_init() {
      let vm = this;
      subReport_list()
        .then(function(response) {
          // options_specialName: [
          // 专区专题名称 -- 先从后台获取
          // {
          //   value: "小小福星",
          //   label: "小小福星"
          // },
          // {
          //   value: "70周年",
          //   label: "70周年"
          // }
          // ]
          let temp_specialName = [];
          let buckets =
            response.data.responses[0].aggregations.special_or_activity_name
              .buckets;
          let length = buckets.length;
          let i;
          for (i = 0; i < length; i++) {
            temp_specialName.push({
              value: buckets[i].key,
              label: buckets[i].key
            });
          }

          vm.options_specialName = temp_specialName;
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    dayChange(event) {
      let vm = this;
      // console.log(event);
      // console.log(typeof event);
      let string_event = String(event);
      let m_time = commonTools.dayChange(string_event);
      // console.log(m_time);
      // this.dayReport.start = m_time;
      // this.dayReport.end = m_time;
      let newValue = {
        start: m_time,
        end: m_time
      };
      this.$store
        .dispatch("set_PR_day", newValue)
        .then(function(response) {
          // console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    weekChange(event) {
      // console.log(event);
      // console.log(commonTools.split_WeeksDays_byDWwr(event));
      let vm = this;
      let newValue = event;
      this.$store
        .dispatch("set_PR_week", newValue)
        .then(function(response) {})
        .catch(function(error) {
          console.info(error);
        });
    },
    monthChange(event) {
      // console.log(event);
      // console.log(commonTools.split_MonthDays_byDWMMr(event));
      let newValue = event;
      this.$store
        .dispatch("set_PR_month", newValue)
        .then(function(response) {})
        .catch(function(error) {
          console.info(error);
        });
    },
    pickerValue_change(event) {
      // console.log(event);
      let vm = this;
      this.time.dayValue = "";
      this.time.weekValue = "";
      // this.time.pickerValue = String(event);
      this.time.pickerValue = event; // 显示为object
      let newValue = String(event); // 传入为string
      // let newValue = event;
      vm.$store
        .dispatch("set_PR_picker", newValue)
        .then(function(response) {})
        .catch(function(error) {
          console.info(error);
        });
    },

    operatorChoose_change(event) {
      //c
      operatorChoose_old = operatorChoose_new;
      let checkedCount = event.length;
      this.operator_checkAll = checkedCount === this.operator.length;
      this.operator_isIndeterminate =
        checkedCount > 0 && checkedCount < this.operator.length;
      if (this.operatorChoose.length == 0) {
        this.operator_isIndeterminate = true;
      }
      let vm = this;
      setTimeout(function() {
        operatorChoose_new = vm.operatorChoose;
        vm.operatorChoose = commonTools.delete_repet(
          operatorChoose_new,
          operatorChoose_old
        );
      }, 100);
    },
    operatorChoose_all(val) {
      this.operatorChoose = val ? this.operator : [];
      this.operator_isIndeterminate2 = !this.operator_isIndeterminate2;
    },
    operatorChoose2_change(event) {
      //c
      operatorChoose_old2 = operatorChoose_new2;
      let checkedCount = event.length;
      // this.operator_checkAll = checkedCount === this.operator.length;
      this.operator_isIndeterminate2 =
        checkedCount > 0 && checkedCount < this.operator.length;
      if (this.operatorChoose2.length == 0) {
        this.operator_isIndeterminate2 = true;
      }
      let vm = this;
      setTimeout(function() {
        operatorChoose_new2 = vm.operatorChoose2;
        vm.operatorChoose2 = commonTools.delete_repet_origin(
          operatorChoose_new2,
          operatorChoose_old2
        );
      }, 100);
    },
    //点击报表对应切换
    setReportOption(reportName, routerLink, num, index) {
      // console.log("※※※※※※※※※※※※※※※");
      let vm = this;

      let value1;
      let value2;
      let temp_PR_Report_index = 0;
      if (num == 1) {
        value1 = 1;
      }
      if (num == 2) {
        value1 = 3;
      }
      if (num == 3) {
        value1 = 6;
      }
      if (num == 4) {
        value1 = 8;
      }
      value2 = index;
      temp_PR_Report_index = value1 + value2;

      // 设置区分运营商
      if (
        reportName == "G+TV用户活跃发展日报表" ||
        reportName == "G+TV用户收视日报表" ||
        reportName == "市场业务运营数据分析周报" ||
        reportName == "G+TV用户收视行为周报" ||
        reportName == "G+TV月度用户收视行为报告" ||
        reportName == "电信VIP增值业务专项分析" ||
        reportName == "专题专区数据报告"
      ) {
        vm.operatorChoose = ["移动", "联通", "电信"];
        operatorChoose_new = []; // 多选框-初始化
        operatorChoose_old = []; // 多选框-初始化
        vm.$store
          .dispatch("set_PR_operator", ["移动", "联通", "电信"])
          .then(function(res) {})
          .catch(function(error) {
            console.info(error);
          });
      }
      // if (reportName == "运营数据周报") {
      //   vm.operatorChoose2 = ["移动"];
      //   operatorChoose_new2 = ["移动"]; // 单选框-初始化
      //   operatorChoose_old2 = ["移动"]; // 单选框-初始化
      //   vm.$store
      //     .dispatch("set_PR_operator", ["移动"])
      //     .then(function(res) {})
      //     .catch(function(error) {
      //       console.info(error);
      //     });
      // }

      // 设置excel按钮下载状态 - 关
      vm.$store
        .dispatch("set_PR_excel_ifCanDownload", false)
        .then(function(response_dataArr) {
          // console.log("下载关");
          // 下载 title/data 数据初始化
          vm.$store
            .dispatch("init_PR_Excel_dataArr_titleArr", "")
            .then(function(response_init) {
              // console.log(response_init);
            })
            .catch(function(error) {
              console.info(error);
            });
        })
        .catch(function(error) {
          console.info(error);
        });
      vm.$store
        .dispatch("set_PR_Report_index", temp_PR_Report_index)
        .then(function(response) {
          vm.$store
            .dispatch("set_PR_assignReportNum", num)
            .then(function(response) {
              vm.reportOption = reportName;
              vm.routerLink = routerLink;
              if (
                reportName == "运营数据周报" ||
                reportName == "电信VIP增值业务专项分析"
              ) {
                if (reportName == "运营数据周报") {
                  vm.ifOperatorShow = false;
                  vm.ifOperatorShow2 = true;
                }
                if (reportName == "电信VIP增值业务专项分析") {
                  vm.ifOperatorShow = false;
                  vm.ifOperatorShow2 = false;
                }
              } else {
                vm.ifOperatorShow = true;
                vm.ifOperatorShow2 = false;
              }
            })
            .catch(function(error) {
              console.info(error);
            });
        })
        .catch(function(error) {
          console.info(error);
        });
    },

    //点击确定按钮提交数据
    submitOption() {
      let vm = this;
      // 重置所有时间为空：天周月范围
      // PR_day: null,
      // PR_week: null,
      // PR_month: null,
      // PR_picker: [],
      // vm.$store
      //   .dispatch("init_AllPRTime", "")
      //   .then(function(response_dataArr) {
      //     vm.$emit("setRoute", {
      //       // repotrName: this.reportOption,
      //       // operatorOption: this.operatorChoose,
      //       routerLink: vm.routerLink
      //     });
      //   })
      //   .catch(function(error) {
      //     console.info(error);
      //   });
      vm.$emit("setRoute", {
        // repotrName: this.reportOption,
        // operatorOption: this.operatorChoose,
        routerLink: vm.routerLink
      });
    },
    //页面刷新时定期报告恢复默认路由
    handlerClass() {
      this.$router.push({ path: "/backhome/periodicreport/SpecialZoneReport" });
    },
    // 下载excel表格
    export2Excel() {
      let vm = this;
      if (vm.PR_excel_ifCanDownload == false) {
        console.log("数据处理中，请稍后下载！");
        return;
      }
      // 获取当前报告序数index
      this.$store
        .dispatch("get_PR_Report_index")
        .then(function(response_index) {
          // console.log("~~~~~当前报告序数");
          // console.log(response_index);
          let excelName = "";
          switch (response_index) {
            case 1:
              excelName = "G+TV用户活跃发展日报表";
              break;
            case 2:
              excelName = "G+TV用户收视日报表";
              break;
            case 3:
              excelName = "市场业务运营数据分析周报";
              break;
            case 4:
              excelName = "运营数据周报";
              break;
            case 5:
              excelName = "TV用户收视行为周报";
              break;
            case 6:
              excelName = "VIP增值业务专项分析";
              break;
            case 7:
              excelName = "G+TV月度用户收视行为报告";
              break;
            case 8:
              excelName = "专题专区数据报告";
              break;
            default:
              console.log("none!");
          }
          // console.log(excelName);
          require.ensure([], () => {
            const { exportExcel } = require("../../../vendor/Export2Excel");
            const {
              export_json_to_excel_new
            } = require("../../../vendor/Export2Excel");
            // 获取当前excel data --延时3s
            vm.$store
              .dispatch("set_PR_excel_DownloadingStatus", 1)
              .then(function(response_dataArr) {})
              .catch(function(error) {
                console.info(error);
              });
            setTimeout(function() {
              vm.$store
                .dispatch("get_PR_Excel_titleArr")
                .then(function(response_title) {
                  // console.log(response_title);
                  vm.$store
                    .dispatch("get_PR_Excel_dataArr")
                    .then(function(response_dataArr) {
                      // console.log(response_dataArr);
                      let temp_titleArr = new Array();
                      temp_titleArr = [];
                      let temp_DataArr = new Array();
                      temp_DataArr = [];
                      // temp_titleArr = response_title;
                      // temp_DataArr = response_dataArr;
                      if (
                        response_title.length == 0 ||
                        response_dataArr.length == 0
                      ) {
                        // console.log("请选择时间！");
                        return;
                      } else {
                        // console.log("excel下载中...");
                        vm.$store
                          .dispatch("set_PR_excel_DownloadingStatus", 2)
                          .then(function(response_dataArr) {})
                          .catch(function(error) {
                            console.info(error);
                          });
                      }
                      for (let i = 0; i < response_title.length; i++) {
                        // 用for处理-避免引用问题
                        temp_titleArr.push(response_title[i]);
                        temp_DataArr.push(response_dataArr[i]);
                      }
                      // console.log(temp_titleArr.length);
                      // console.log(temp_DataArr.length);
                      // /// 临时
                      // temp_titleArr.push(["title1"]);
                      // temp_titleArr.push(["title2"]);
                      // temp_titleArr.push(["title3"]);

                      // temp_DataArr.push([
                      //   ["运营商", "移动", "联通", "电信"],
                      //   ["平均", 1, 2, 3]
                      // ]);
                      // temp_DataArr.push([
                      //   ["运营商", "移动", "联通", "电信", "测试"],
                      //   ["平均", 1, 2, 3, 4]
                      // ]);
                      // temp_DataArr.push([
                      //   ["运营商", "移动", "联通", "电信", "测试"],
                      //   ["平均", 1, 2, 3, 4]
                      // ]);
                      // ///
                      setTimeout(function() {
                        // exportExcel(temp_titleArr, temp_DataArr, excelName);
                        export_json_to_excel_new(
                          temp_titleArr,
                          temp_DataArr,
                          excelName
                        );
                      }, 100);
                    })
                    .catch(function(error) {
                      console.info(error);
                    });
                })
                .catch(function(error) {
                  console.info(error);
                });
            }, 3000);
          });
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    formatJson(filterVal, jsonData) {
      //   let temp1 = [55, 66];
      //   let k ;
      //   let temp2 = temp1.map(v => k);
      //   console.log(temp2);
      return jsonData.map(v => filterVal.map(j => v[j]));
      // return "";
    }
  }
};
</script>

<style>
/* elementui 复选框背景色 统一修改 */
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #ff6123;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #ff6123;
  border-color: #ff6123;
}
.el-checkbox__inner:hover {
  border-color: #ff6123;
}
.el-checkbox__input.is-focus .el-checkbox__innder {
  border-color: #ff6123;
}

/* 时间范围 */
.el-date-table td.end-date span,
.el-date-table td.start-date span {
  background-color: #ff6123;
}
</style>

<style scoped>
.OptionSelectPR .time,
.OptionSelectPR .operator {
  margin-top: 12px;
}
.el-checkbox-group {
  display: inline-block;
}
.OptionSelectPR {
  text-align: left;
  padding: 0 14px;
}

.OptionSelectPR .report,
.OptionSelectPR .operator,
.OptionSelectPR .time,
.OptionSelectPR .download {
  display: inline-block;
  width: 100%;
  line-height: 32px;
}
.OptionSelectPR .download {
  margin-top: 14px;
}

.OptionSelectPR .m_block {
  display: inline-block;
  line-height: 32px;
}

.OptionSelectPR .mspace {
  margin: 7px;
}

.OptionSelectPR .report .r_btnP {
  display: inline-block;
}

.active_btn {
  background-color: #ff6123;
  color: #fff !important;
}
.OptionSelectPR .report .r_btnP .r_btn {
  color: #333;
  line-height: 32px;
  height: 32px;
  margin: 0px;
  padding: 0px;
  width: 15vw;
  margin-right: 14px;
}

.OptionSelectPR .font_title {
  font-family: PingFangSC-Semibold;
  font-size: 14px;
  color: #333333;
  line-height: 32px;
  font-weight: bold;
}
.OptionSelectPR .font_choose {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: rgba(51, 51, 51, 0.7);
  width: 75px;
}
.OptionSelectPR .space {
  width: 14px;
  display: inline-block;
}

.OptionSelectPR .submitP {
  margin-top: 14px;
}

.OptionSelectPR .submit {
  background-color: #ff6123;
  color: #ffffff;
  line-height: 32px;
  height: 32px;
  margin: 0px;
  padding: 0px;
  width: 68px;
}

.OptionSelectPR .btn_download {
  /* background-color: #ff6123; */
  background-color: #c0c4cc;

  color: #ffffff;
  /* line-height: 32px; */
  height: 40px;
  margin: 0px;
  padding: 0px;
  width: 177px;
  margin-left: 10px;
}
.OptionSelectPR .btn_download2 {
  background-color: #8dd85f;
  color: #ffffff;
  height: 40px;
  margin: 0px;
  padding: 0px;
  width: 177px;
  margin-left: 10px;
}
.OptionSelectPR .m_wait {
  width: 17px;
  height: 17px;
  margin-top: 3px;
  vertical-align: bottom;
}

.download_text {
  height: 22px;
  width: 100px;
  display: inline-block;
}
.download_text2 {
  height: 22px;
  width: 100%;
  display: inline-block;
}
.download_icon {
  display: inline-block;
  height: 30px;
  width: 30px;
  vertical-align: bottom;
}
</style>

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
      <el-button class="btn_download" @click="export2Excel()">
        <div class="download_text">Excel表单</div>
        <div :style="download_style" class="download_icon"></div>
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

var operatorChoose_new = [];
var operatorChoose_old = [];
export default {
  name: "OptionSelectPR",
  computed: {
    ...mapGetters(["PR_assignReportNum"])
  },
  watch: {
    operatorChoose(newValue, oldValue) {
      let vm = this;
      this.$store
        .dispatch("set_PR_operator", newValue)
        .then(function(response) {
          // console.log(response);
          // vm.$store
          //   .dispatch("get_PR_operator")
          //   .then(function(response) {
          //     console.log(response);
          //   })
          //   .catch(function(error) {
          //     console.info(error);
          //   });
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    // "time.dayValue"(newValue, oldValue) {
    //   let vm = this;
    //   this.$store
    //     .dispatch("set_PR_day", newValue)
    //     .then(function(response) {
    //       // console.log(response);
    //     })
    //     .catch(function(error) {
    //       console.info(error);
    //     });
    // },
    // "time.weekValue"(newValue, oldValue) {
    //   let vm = this;
    //   this.$store
    //     .dispatch("set_PR_week", newValue)
    //     .then(function(response) {
    //       // console.log(response);
    //     })
    //     .catch(function(error) {
    //       console.info(error);
    //     });
    // },
    // "time.monthValue"(newValue, oldValue) {
    //   let vm = this;
    //   this.$store
    //     .dispatch("set_PR_month", newValue)
    //     .then(function(response) {
    //       // console.log(response);
    //     })
    //     .catch(function(error) {
    //       console.info(error);
    //     });
    // },
    // "time.pickerValue"(newValue, oldValue) {
    //   let vm = this;
    //   this.$store
    //     .dispatch("set_PR_picker", newValue)
    //     .then(function(response) {
    //       // console.log(response);
    //     })
    //     .catch(function(error) {
    //       console.info(error);
    //     });
    // }
    value_specialName(newValue, oldValue) {
      let vm = this;
      this.$store
        .dispatch("set_PR_value_specialName", newValue)
        .then(function(response) {
          // console.log(response);
          console.log("专题报告-专题名称：");
          console.log(newValue);
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
          name: "移动运营数据周报",
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
      value_specialName: [],
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
    // console.log(commonTools.format_MonthDays_byDWMMr(2018, 4));
    // console.log(commonTools.format_WeeksDays_byDWwr(2018, 4));

    let vm = this;

    this.specialName_init();

    // 初始化周
    // let arr_temp = [];
    // arr_temp = commonTools.weekDate(2018);
    // setTimeout(function() {
    //   arr_temp = commonTools.weekDate_add(2019, arr_temp);
    //   vm.time.week = arr_temp;
    // }, 100);
    let arr_temp = [];
    setTimeout(function() {
      // arr_temp = commonTools.format_WeeksDays_byDWwr(2018, 4);
      // arr_temp = commonTools.format_WeeksDays_byDWwr_add(2019, 4, arr_temp);
      vm.time.week = commonTools.format_WeeksDays_byDWwr_ED();
    }, 100);

    // 初始化月
    // let arr_temp2 = commonTools.format_MonthDays(2018);
    // setTimeout(function() {
    //   arr_temp2 = commonTools.format_MonthDays_add(2019, arr_temp2);
    //   vm.time.month = arr_temp2;
    // }, 100);
    setTimeout(function() {
      // let arr_temp2 = commonTools.format_MonthDays_byDWMMr(2018, 4);
      // arr_temp2 = commonTools.format_MonthDays_byDWMMr_add(2019, 4, arr_temp2);
      vm.time.month =commonTools.format_MonthDays_byDWMMr_ED();
    }, 100);

    // ▲历史条件获取
    setTimeout(function() {
      // 历史选中的定期报告
      vm.$store
        .dispatch("get_PR_Report_index")
        .then(function(response) {
          switch (response) {
            case 1:
              vm.routerLink =
                "/backhome/periodicreport/G_TVUserActiveDayReport";
              break;
            case 2:
              vm.routerLink =
                "/backhome/periodicreport/G_TVUserViewingDayReport";
              break;
            case 3:
              vm.routerLink =
                "/backhome/periodicreport/MarketOperationalWeekReport";
              break;
            case 4:
              vm.routerLink = "/backhome/periodicreport/OperationalWeekReport";
              break;
            case 5:
              vm.routerLink =
                "/backhome/periodicreport/G_TVUserViewingWeekReport";
              break;
            case 6:
              vm.routerLink = "/backhome/periodicreport/VIPAddMonthReport";
              break;
            case 7:
              vm.routerLink =
                "/backhome/periodicreport/G_TVUserViewingMonthReport";
              break;
            case 8:
              vm.routerLink = "/backhome/periodicreport/SpecialZoneReport";
              break;
            default:
              break;
          }
          vm.$router.push({ path: vm.routerLink });
        })
        .catch(function(error) {
          console.info(error);
        });

      // 运营商
      vm.$store
        .dispatch("get_PR_operator")
        .then(function(response) {
          // console.log(response);
          vm.operatorChoose = response;
        })
        .catch(function(error) {
          console.info(error);
        });
      // 范围
      vm.$store
        .dispatch("get_PR_picker")
        .then(function(res) {
          // console.log("~~~~res： ");
          // console.log(res);
          if (res.length != 0) {
            let temp = [];
            let t_arr = res.split(",");
            temp.push(t_arr[0]);
            temp.push(t_arr[1]);
            vm.time.pickerValue = temp;
          }
        })
        .catch(function(error) {
          console.info(error);
        });
    }, 200);
  },
  methods: {
    specialName_init() {
      let vm = this;
      subReport_list()
        .then(function(response) {
          // console.log("~~~~~~~~specialName_init");
          // console.log(response);
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
      // console.log("dayChange");
      let vm = this;
      console.log(event);
      console.log(typeof event);
      let string_event = String(event);
      let m_time = commonTools.dayChange(string_event);
      console.log(m_time);
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
      console.log("~~~~~~event:");
      console.log(event);
      console.log("~~~split");
      console.log(commonTools.split_WeeksDays_byDWwr(event));

      let vm = this;
      let newValue = event;

      // let m_time1;
      // let m_time2;
      // if (String(event) == "选项1") {
      //   m_time1 = "2019-07-01";
      //   m_time2 = "2019-07-07";
      // }
      // if (String(event) == "选项2") {
      //   m_time1 = "2019-07-08";
      //   m_time2 = "2019-07-14";
      // }
      // if (String(event) == "选项3") {
      //   m_time1 = "2019-07-15";
      //   m_time2 = "2019-07-21";
      // }
      // if (String(event) == "选项4") {
      //   m_time1 = "2019-07-22";
      //   m_time2 = "2019-07-28";
      // }
      // newValue = {
      //   start: m_time1,
      //   end: m_time2
      // };

      this.$store
        .dispatch("set_PR_week", newValue)
        .then(function(response) {
          // console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    monthChange(event) {
      console.log("~~~~~~month event:");
      console.log(event);
      console.log("~~~split");
      console.log(commonTools.split_MonthDays_byDWMMr(event));
      let newValue = event;
      this.$store
        .dispatch("set_PR_month", newValue)
        .then(function(response) {
          // console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    pickerValue_change(event) {
      console.log(event);
      let vm = this;
      this.time.dayValue = "";
      this.time.weekValue = "";
      // this.time.pickerValue = String(event);
      this.time.pickerValue = event; // 显示为object
      let newValue = String(event); // 传入为string
      // let newValue = event;
      vm.$store
        .dispatch("set_PR_picker", newValue)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },

    operatorChoose_change(event) {
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
      this.operator_isIndeterminate = !this.operator_isIndeterminate;
    },
    //点击报表对应切换
    setReportOption(reportName, routerLink, num, index) {
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
      // console.log("~~~~~~temp_PR_Report_index:" + temp_PR_Report_index);
      vm.$store
        .dispatch("set_PR_Report_index", temp_PR_Report_index)
        .then(function(response) {
          vm.$store
            .dispatch("set_PR_assignReportNum", num)
            .then(function(response) {
              vm.reportOption = reportName;
              vm.routerLink = routerLink;
              if (reportName == "移动运营数据周报" || reportName == "电信VIP增值业务专项分析") {
                vm.ifOperatorShow = false;
              } else {
                vm.ifOperatorShow = true;
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
      // console.log(this.dayValue);
      // console.log(this.weekValue);
      // console.log(this.monthValue);
      // console.log(this.pickerValue);
      this.$emit("setRoute", {
        repotrName: this.reportOption,
        operatorOption: this.operatorChoose,
        routerLink: this.routerLink
      });
    },
    //页面刷新时定期报告恢复默认路由
    handlerClass() {
      this.$router.push({ path: "/backhome/periodicreport/SpecialZoneReport" });
    },
    // 下载excel表格
    export2Excel() {
      // 获取当前报告序数index

      this.$store
        .dispatch("get_PR_Report_index")
        .then(function(response) {
          console.log("~~~~~当前报告序数");
          console.log(response);

          require.ensure([], () => {
            console.log("~~~~export2Excel1");
            const {
              export_json_to_excel
            } = require("../../../vendor/Export2Excel");
            console.log("~~~~export2Excel2");
            const tHeader = [
              "商品名称",
              "商品货号",
              "售价",
              "库存",
              "销量",
              "分享"
            ];
            const filterVal = [
              "name",
              "number",
              "salePrice",
              "stocknums",
              "salesnums",
              "sharenums"
            ];
            // const list = this.goodsItems;
            const list = this.list;
            console.log(list);
            console.log(filterVal);
            const data = this.formatJson(filterVal, list);
            console.log(tHeader);
            console.log(data);
            export_json_to_excel(tHeader, data, "商品管理列表");
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
  background-color: #ff6123;
  color: #ffffff;
  /* line-height: 32px; */
  height: 40px;
  margin: 0px;
  padding: 0px;
  width: 177px;
  margin-left: 10px;
}
.download_text {
  height: 22px;
  width: 100px;
  display: inline-block;
}
.download_icon {
  display: inline-block;
  height: 30px;
  width: 30px;
  vertical-align: bottom;
}
</style>

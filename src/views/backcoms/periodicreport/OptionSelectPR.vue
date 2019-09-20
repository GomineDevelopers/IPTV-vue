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
          @click="setReportOption(item.name,item.routerLink,1)"
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
          @click="setReportOption(item.name,item.routerLink,2)"
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
          @click="setReportOption(item.name,item.routerLink,3)"
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
          @click="setReportOption(item.name,item.routerLink,4)"
        >{{item.name}}</el-button>
      </div>
    </div>
    <div v-show="ifOperatorShow" class="operator">
      <span class="font_title">运营商：</span>
      <el-checkbox
        :indeterminate="operator_isIndeterminate"
        v-model="operator_checkAll"
        @change="operatorChoose_all"
      >全部</el-checkbox>

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
        <el-checkbox class="font_choose" :disabled="true" :label="item"></el-checkbox>
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
            v-model="time.pickervalue"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="time.pickerOptions"
          ></el-date-picker>
        </div>
      </span>
    </div>
    <div class="submitP">
      <el-button class="submit" @click="submitOption">确定</el-button>
    </div>
  </div>
</template>

<script>
import { commonTools } from "@/utils/test";
import { mapGetters } from "vuex";

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
    }
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
    // "time.pickervalue"(newValue, oldValue) {
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
  },
  data() {
    return {
      // 设置选择三个月之前到今天的日期
      pickerOptions0: {
        disabledDate(time) {
          let curDate = new Date().getTime();
          let three = 90 * 24 * 3600 * 1000;
          let threeMonths = curDate - three;
          return time.getTime() > Date.now() || time.getTime() < threeMonths;
        }
      },
      reportOptionRouter: "专题专区数据报告", //点击不同报表选项对应切换
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
          name: "VIP增值业务专项分析",
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
      operatorChoose: [],
      operator_checkAll: false,
      operator_isIndeterminate: true,

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
          {
            value: "选项1",
            label: "第26周（2019.07.01-07.07）"
          },
          {
            value: "选项2",
            label: "第27周（2019.07.08-07.14）"
          },
          {
            value: "选项3",
            label: "第28周（2019.07.15-07.21）"
          },
          {
            value: "选项4",
            label: "第29周（2019.07.22-07.28）"
          }
          // ...
        ],
        weekValue: "",
        month: [
          {
            value: "选项1",
            label: "2019年7月"
          }
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
        pickervalue: ""
      },
      ifOperatorShow: true
    };
  },
  created() {
    this.handlerClass();
  },
  mounted() {
    let vm = this;

    // ▲历史条件获取
    vm.$store
      .dispatch("get_PR_operator")
      .then(function(response) {
        // console.log(response);
        vm.operatorChoose = response;
      })
      .catch(function(error) {
        console.info(error);
      });

    // 初始化周
    // let arr_temp = [];
    // arr_temp = commonTools.weekDate(2018);
    // setTimeout(function() {
    //   arr_temp = commonTools.weekDate_add(2019, arr_temp);
    //   vm.time.week = arr_temp;
    // }, 100);

    // 初始化月 - 临时关掉
    // let arr_temp2 = commonTools.format_MonthDays(2018);
    // setTimeout(function() {
    //   arr_temp2 = commonTools.format_MonthDays_add(2019, arr_temp2);
    //   vm.time.month = arr_temp2;
    // }, 100);
    //
  },
  methods: {
    // 时间格式转换X (Aug 2, 2019 at 4:59PM  = 》 2019-08-02)
    timeformatX(str) {
      let tmepArr = str.split(" ");
      let year = tmepArr[2];
      let month = this.monthManage(tmepArr[0]); // Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec
      let day = this.dayManage(tmepArr[1].replace(",", ""));
      return year + "-" + month + "-" + day;
    },
    dayManage(str) {
      let day = str;
      switch (str) {
        case "1":
          day = "01";
          break;
        case "2":
          day = "02";
          break;
        case "3":
          day = "03";
          break;
        case "4":
          day = "04";
          break;
        case "5":
          day = "05";
          break;
        case "6":
          day = "06";
          break;
        case "7":
          day = "07";
          break;
        case "8":
          day = "08";
          break;
        case "9":
          day = "09";
          break;
        default:
          day = str;
      }
      return day;
    },
    monthManage(str) {
      let month;
      switch (str) {
        case "Jan":
          month = "01";
          break;
        case "Feb":
          month = "02";
          break;
        case "Mar":
          month = "03";
          break;
        case "Apr":
          month = "04";
          break;
        case "May":
          month = "05";
          break;
        case "Jun":
          month = "06";
          break;
        case "Jul":
          month = "07";
          break;
        case "Aug":
          month = "08";
          break;
        case "Sep":
          month = "09";
          break;
        case "Oct":
          month = "10";
          break;
        case "Nov":
          month = "11";
          break;
        case "Dec":
          month = "12";
          break;
        default:
          console.log("none!");
      }
      return month;
    },
    dayChange(event) {
      // console.log("dayChange");
      console.log(event);
      console.log(typeof event);
      let string_event = String(event);
      let tempArr = string_event.split(" ");

      let year = tempArr[3];
      let month = this.monthManage(tempArr[1]);
      let day = tempArr[2];
      let m_time = String(year + "-" + month + "-" + day);
      console.log(m_time);
      // this.dayReport.start = m_time;
      // this.dayReport.end = m_time;
      let vm = this;
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
      let m_time1;
      let m_time2;

      if (String(event) == "选项1") {
        m_time1 = "2019-07-01";
        m_time2 = "2019-07-07";
      }
      if (String(event) == "选项2") {
        m_time1 = "2019-07-08";
        m_time2 = "2019-07-14";
      }
      if (String(event) == "选项3") {
        m_time1 = "2019-07-15";
        m_time2 = "2019-07-21";
      }
      if (String(event) == "选项4") {
        m_time1 = "2019-07-22";
        m_time2 = "2019-07-28";
      }
      let vm = this;
      let newValue = {
        start: m_time1,
        end: m_time2
      };
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
    setReportOption(reportName, routerLink, num) {
      let vm = this;
      this.$store
        .dispatch("set_PR_assignReportNum", num)
        .then(function(response) {
          vm.reportOption = reportName;
          vm.routerLink = routerLink;
          if (reportName == "移动运营数据周报") {
            vm.ifOperatorShow = false;
          } else {
            vm.ifOperatorShow = true;
          }
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
      // console.log(this.pickervalue);
      this.$emit("setRoute", {
        repotrName: this.reportOption,
        operatorOption: this.operatorChoose,
        routerLink: this.routerLink
      });
    },
    //页面刷新时定期报告恢复默认路由
    handlerClass() {
      this.$router.push({ path: "/backhome/periodicreport/SpecialZoneReport" });
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
.el-checkbox-group {
  display: inline-block;
}
.OptionSelectPR {
  text-align: left;
  padding: 0 14px;
}

.OptionSelectPR .report,
.OptionSelectPR .operator,
.OptionSelectPR .time {
  display: inline-block;
  width: 100%;
  line-height: 32px;
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
</style>

<template>
  <div class="OptionSelectVIP">
    <div class="region">
      <span class="font_title">地区：</span>
      <el-checkbox v-model="region_checkAll" @change="regionChoose_all">全省</el-checkbox>
      <el-checkbox-group
        @change="regionChoose_change"
        v-model=" regionChoose"
        v-for="(item,index) in region"
        :key="index + 'a' "
        v-show="region_isIndeterminate"
      >
        <el-checkbox class="font_choose" :disabled="false" :label="item"></el-checkbox>
      </el-checkbox-group>
      <el-checkbox-group
        @change="regionChoose_change"
        v-model=" regionChoose"
        v-for="(item,index) in region"
        :key="index + 'ac' "
        v-show="!region_isIndeterminate"
      >
        <el-checkbox class="font_choose" :disabled="false" :label="item"></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="operator">
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

    <!-- <div class="playmode">
      <span class="font_title">播放方式：</span>
      <el-checkbox v-model="playmode_checkAll" @change="playmodeChoose_all">总体</el-checkbox>

      <el-checkbox-group
        @change="playmodeChoose_change"
        v-model=" playmodeChoose"
        v-for="(item,index) in playmode"
        :key="index + 'a' "
        v-show="playmode_isIndeterminate"
      >
        <el-checkbox class="font_choose" :disabled="false" :label="item"></el-checkbox>
      </el-checkbox-group>
      <el-checkbox-group
        @change="playmodeChoose_change"
        v-model=" playmodeChoose"
        v-for="(item,index) in playmode"
        :key="index + 'ac' "
        v-show="!playmode_isIndeterminate"
      >
        <el-checkbox class="font_choose" :disabled="false" :label="item"></el-checkbox>
      </el-checkbox-group>
    </div>-->

    <!-- <div class="programa" v-show="ifPlaymodeShow_db && if_playmode_is_single_db"> -->
    <div class="programa" v-show="ifPlaymodeShow_db">
      <!-- <span class="font_title">栏目（点播-收视行为专属）：</span> -->
      <span class="font_title">栏目：</span>
      <el-checkbox v-model="programa_checkAll" @change="programaChoose_all">总体</el-checkbox>
      <el-checkbox-group
        @change="programaChoose_change"
        v-model=" programaChoose"
        v-for="(item,index) in programa"
        :key="index + 'a' "
        v-show="programa_isIndeterminate"
      >
        <el-checkbox class="font_choose" :disabled="false" :label="item"></el-checkbox>
      </el-checkbox-group>
      <el-checkbox-group
        @change="programaChoose_change"
        v-model=" programaChoose"
        v-for="(item,index) in programa"
        :key="index + 'ac' "
        v-show="!programa_isIndeterminate"
      >
        <el-checkbox class="font_choose" :disabled="false" :label="item"></el-checkbox>
      </el-checkbox-group>
    </div>

    <!-- <div class="valueAddedPackage" v-show="ifPlaymodeShow_db ">
      <span class="font_title">增值包：</span>
      <el-select
        v-model="valueAddedPackageChoose"
        filterable
        allow-create
        default-first-option
        placeholder="请选择类型"
      >
        <el-option
          v-for="item in options_valueAddedPackage"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div> -->

    <div class="valueAddedPackage">
      <span class="font_title">增值包：</span>
      <el-checkbox v-model="valueAddedPackage_checkAll" @change="valueAddedPackageChoose_all">总体</el-checkbox>
      <el-checkbox-group
        @change="valueAddedPackageChoose_change"
        v-model=" valueAddedPackageChoose"
        v-for="(item,index) in valueAddedPackage"
        :key="index + 'a' "
        v-show="valueAddedPackage_isIndeterminate"
      >
        <el-checkbox class="font_choose" :disabled="false" :label="item"></el-checkbox>
      </el-checkbox-group>
      <el-checkbox-group
        @change="valueAddedPackageChoose_change"
        v-model=" valueAddedPackageChoose"
        v-for="(item,index) in valueAddedPackage"
        :key="index + 'ac' "
        v-show="!valueAddedPackage_isIndeterminate"
      >
        <el-checkbox class="font_choose" :disabled="false" :label="item"></el-checkbox>
      </el-checkbox-group>
    </div>


    <div class="time">
      <span class="font_title">时间：</span>

      <span class="font_choose">天：</span>
      <span>
        <el-date-picker
          v-model="time.dayValue"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions0"
          @change="dayValue_change"
        ></el-date-picker>
      </span>
      <div class="space">&nbsp;</div>
      <span class="font_choose">周：</span>
      <span>
        <el-select
          v-model="time.weekValue"
          filterable
          allow-create
          default-first-option
          placeholder="请设置周数"
          style="width:300px;"
          @change="weekValue_change"
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
      <div class="space">&nbsp;</div>
      <span class="font_choose">范围：</span>
      <span>
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
    </div>
    <div class="submitP">
      <el-button class="submit">确定</el-button>
    </div>
    <!-- <span v-show="false">热更新用-不显示：{{if_playmode_is_single_db}}</span> -->
  </div>
</template>

<script>
import { commonTools } from "@/utils/test";
import { mapGetters } from "vuex";
import { vip_programs_list, vip_increment_list } from "@/api/api_main";

var regionChoose_new = [];
var regionChoose_old = [];
var operatorChoose_new = [];
var operatorChoose_old = [];
var playmodeChoose_new = [];
var playmodeChoose_old = [];
var programaChoose_new = [];
var programaChoose_old = [];
var valueAddedPackageChoose_new = [];
var valueAddedPackageChoose_old = [];
export default {
  name: "OptionSelectVIP",
  computed: {
    ...mapGetters(["ADD_VIP_playmode"]),
    ifPlaymodeShow_zb: {
      get: function() {
        if (
          this.ADD_VIP_playmode == null ||
          this.ADD_VIP_playmode.length == 0
        ) {
          return true;
        }
        if (this.ADD_VIP_playmode.indexOf("直播") > -1) {
          return true;
        }
        return false;
      },
      set: function(newValue) {}
    },
    ifPlaymodeShow_db: {
      get: function() {
        if (
          this.ADD_VIP_playmode == null ||
          this.ADD_VIP_playmode.length == 0
        ) {
          return true;
        }
        if (this.ADD_VIP_playmode.indexOf("点播") > -1) {
          return true;
        }
        return false;
      },
      set: function(newValue) {}
    },
    ifPlaymodeShow_hk: {
      get: function() {
        if (
          this.ADD_VIP_playmode == null ||
          this.ADD_VIP_playmode.length == 0
        ) {
          return true;
        }
        if (this.ADD_VIP_playmode.indexOf("回看") > -1) {
          return true;
        }
        return false;
      },
      set: function(newValue) {}
    }
    // if_playmode_is_single_db: {
    //   get: function () {
    //     if (
    //       this.ADD_VIP_playmode.indexOf("点播") > -1
    //     ) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   },
    //   set: function (newValue) { }
    // }
  },
  watch: {
    regionChoose(newValue, oldValue) {
      let vm = this;
      this.$store
        .dispatch("set_ADD_VIP_region", newValue)
        .then(function(response) {
          // console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    operatorChoose(newValue, oldValue) {
      let vm = this;
      this.$store
        .dispatch("set_ADD_VIP_operator", newValue)
        .then(function(response) {
          // console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    playmodeChoose(newValue, oldValue) { // 暂且没用到
      let vm = this;
      this.$store
        .dispatch("set_ADD_VIP_playmode", newValue)
        .then(function(response) {
          // console.log(response);
          vm.$store
            .dispatch("set_ADD_VIP_target_type", "")
            .then(function(response) {})
            .catch(function(error) {
              console.info(error);
            });
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    programaChoose(newValue, oldValue) {
      let vm = this;
      this.$store
        .dispatch("set_ADD_VIP_programa", newValue)
        .then(function(response) {
          // console.log(response);
          vm.$store
            .dispatch("set_ADD_VIP_target_type", "")
            .then(function(response) {})
            .catch(function(error) {
              console.info(error);
            });
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    valueAddedPackageChoose(newValue, oldValue) {
      let vm = this;
      this.$store
        .dispatch("set_ADD_VIP_valueAddedPackage", newValue)
        .then(function(response) {
          // console.log(response);
          vm.$store
            .dispatch("set_ADD_VIP_target_type", "")
            .then(function(response) {})
            .catch(function(error) {
              console.info(error);
            });   
        })
        .catch(function(error) {
          console.info(error);
        });
    }
    // "time.dayValue"(newValue, oldValue) {
    //   let vm = this;
    //   this.$store
    //     .dispatch("set_ADD_VIP_day", newValue)
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
    //     .dispatch("set_ADD_VIP_week", newValue)
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
    //     .dispatch("set_ADD_VIP_picker", newValue)
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
      // 设置日期截止至今日
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      region: [
        // "全部",
        "贵阳",
        "遵义",
        "安顺",
        "黔南",
        "黔东南",
        "铜仁",
        "毕节",
        "六盘水",
        "黔西南"
      ],
      // regionChoose: [],
      regionChoose: [
        "贵阳",
        "遵义",
        "安顺",
        "黔南",
        "黔东南",
        "铜仁",
        "毕节",
        "六盘水",
        "黔西南"
      ],

      // region_checkAll: false,
      region_checkAll: true,

      region_isIndeterminate: true,
      operator: [
        // "全部",
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

   
      playmode: [
        // "总体",
        "直播",
        "点播",
        "回看"
      ],
      playmodeChoose: [],
      playmode_checkAll: false,
      playmode_isIndeterminate: true,
      programa: [
        // "总体",
        // "分类",
        // "电视",
        // "推荐",
        // "电影",
        // "热剧",
        // "少儿",
        // "动漫 ",
        // "综艺",
        // "体育",
        // "游戏",
        // "纪实"
        // "健康",
        // "音乐",
        // "其他"
      ],
      // programaChoose: [],
      programaChoose: [], // 从api获取数据
      // programa_checkAll: false,
      programa_checkAll: true,
      programa_isIndeterminate: true,

      // options_valueAddedPackage: [
        // {
        //   value: "少儿包",
        //   label: "少儿包"
        // },
        // {
        //   value: "影视包",
        //   label: "影视包"
        // },
        // {
        //   value: "其他包",
        //   label: "其他包"
        // }
      // ],
      // valueAddedPackageChoose: "",

      valueAddedPackage: [],
      valueAddedPackageChoose: [],
      valueAddedPackage_checkAll: true,
      valueAddedPackage_isIndeterminate: true,


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
          // ...
        ],
        weekValue: "",
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
      }
    };
  },
  mounted() {
    // 获取VIP的栏目
    this.vip_programs_list();
    // 获取VIP的内容类型
    this.vip_increment_list();

    let vm = this;

    // 初始化周
    let arr_temp = [];
    setTimeout(function() {
      // arr_temp = commonTools.weekDate(2018);
      // arr_temp = commonTools.weekDate_add(2019, arr_temp);
      vm.time.week = commonTools.weekDate_ED();
    }, 100);

    // ▲历史条件获取
    setTimeout(function() {
      vm.$store
        .dispatch("get_ADD_VIP_region")
        .then(function(response) {
          // console.log(response);
          vm.regionChoose = response;
        })
        .catch(function(error) {
          console.info(error);
        });
      vm.$store
        .dispatch("get_ADD_VIP_operator")
        .then(function(response) {
          // console.log(response);
          vm.operatorChoose = response;
        })
        .catch(function(error) {
          console.info(error);
        });
      // vm.$store
      //   .dispatch("get_ADD_VIP_playmode")
      //   .then(function(response) {
      //     // console.log(response);
      //     vm.playmodeChoose = response;
      //   })
      //   .catch(function(error) {
      //     console.info(error);
      //   });
      vm.$store
        .dispatch("get_ADD_VIP_programa")
        .then(function(response) {
          // console.log(response);
          vm.programaChoose = response;
        })
        .catch(function(error) {
          console.info(error);
        });
      vm.$store
        .dispatch("get_ADD_VIP_valueAddedPackage")
        .then(function(response) {
          // console.log(response);
          vm.valueAddedPackageChoose = response;
        })
        .catch(function(error) {
          console.info(error);
        });
      vm.$store
        .dispatch("get_ADD_VIP_day")
        .then(function(res) {
          vm.$store
            .dispatch("get_ADD_VIP_time_type")
            .then(function(response) {
              // console.log("~~~get_ADD_VIP_time_type:");
              // console.log(response);
              if (response == 1) {
                console.log("history：" + response);
                vm.time.dayValue = res;
              }
            })
            .catch(function(error) {
              console.info(error);
            });
        })
        .catch(function(error) {
          console.info(error);
        });
      vm.$store
        .dispatch("get_ADD_VIP_week")
        .then(function(res) {
          vm.$store
            .dispatch("get_ADD_VIP_time_type")
            .then(function(response) {
              // console.log("~~~get_ADD_VIP_time_type:");
              // console.log(response);
              if (response == 2) {
                console.log("history：" + response);
                let length = vm.time.week.length;
                let i;
                let temp_label;
                for (i = 0; i < length; i++) {
                  if (vm.time.week[i].value == res) {
                    temp_label = vm.time.week[i].label;
                    break;
                  }
                }
                vm.time.weekValue = temp_label;
              }
            })
            .catch(function(error) {
              console.info(error);
            });
        })
        .catch(function(error) {
          console.info(error);
        });
      vm.$store
        .dispatch("get_ADD_VIP_picker")
        .then(function(res) {
          vm.$store
            .dispatch("get_ADD_VIP_time_type")
            .then(function(response) {
              // console.log("~~~get_ULC_time_type:");
              // console.log(response);
              if (response == 3) {
                console.log("history：" + response);
                console.log("res" + res);
                console.log("Object(res)");
                // console.log( Object(res));
                // vm.time.pickerValue = Object(res); // 反转成Object的格式是零零碎碎的字符串-pass
                // vm.time.pickerValue = JSON.parse(res);
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
        })
        .catch(function(error) {
          console.info(error);
        });
    }, 200);
  },
  methods: {
    vip_programs_list() {
      let vm = this;
      vip_programs_list()
        .then(function(response) {
          // console.log(response);
          let buckets = response.data.responses[0].aggregations.ti.buckets;
          let length = buckets.length;
          let i;
          let temp = [];
          for (i = 0; i < length; i++) {
            temp.push(buckets[i].key);
          }
          vm.programa = temp;
          // ////
          vm.programaChoose = temp;
          vm.$store
            .dispatch("set_ADD_VIP_programa", temp)
            .then(function(response) {
              // console.log(response);
            })
            .catch(function(error) {
              console.info(error);
            });
          // ////
          vm.$store
            .dispatch("set_ADD_VIP_programa_list", temp)
            .then(function(response) {
              // console.log(response);
            })
            .catch(function(error) {
              console.info(error);
            });
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    vip_increment_list() {
      let vm = this;
      vip_increment_list()
        .then(function(response) {
          // console.log(response);
          let buckets =
            response.data.responses[0].aggregations.package_classic.buckets;
          let length = buckets.length;
          let i;
          let temp = []; // 用于 store
          let temp2 = []; // 用于 显示下拉框

          for (i = 0; i < length; i++) {
            temp.push(buckets[i].key);
          //   temp2.push({ value: buckets[i].key, label: buckets[i].key });
          }
          // vm.options_valueAddedPackage = temp2;
          // console.log(temp);
          vm.valueAddedPackage = temp;
          vm.valueAddedPackageChoose = temp;

          vm.$store
            .dispatch("set_ADD_VIP_package_list", temp)
            .then(function(response) {
              // console.log(response);
            })
            .catch(function(error) {
              console.info(error);
            });
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    dayValue_change(event) {
      // console.log(event);
      // console.log(typeof event);
      // console.log(typeof String(event));
      let vm = this;
      this.time.dayValue = String(event);
      this.time.weekValue = "";
      this.time.pickerValue = "";
      let newValue = String(event);
      newValue = commonTools.dayChange(newValue); // store 传入 2019-09-20 格式
      console.log("~~~~set_ADD_VIP_day:" + newValue);
      vm.$store
        .dispatch("set_ADD_VIP_day", newValue)
        .then(function(response) {
          console.log(response);
          vm.$store
            .dispatch("set_ADD_VIP_time_type", 1)
            .then(function(response) {
              vm.$store
                .dispatch("set_ADD_VIP_target_type", "")
                .then(function(response) {})
                .catch(function(error) {
                  console.info(error);
                });
            })
            .catch(function(error) {
              console.info(error);
            });
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    weekValue_change(event) {
      let vm = this;
      this.time.dayValue = "";
      this.time.weekValue = String(event);
      this.time.pickerValue = "";
      let newValue = String(event);
      vm.$store
        .dispatch("set_ADD_VIP_week", newValue)
        .then(function(response) {
          console.log(response);
          vm.$store
            .dispatch("set_ADD_VIP_time_type", 2)
            .then(function(response) {
              vm.$store
                .dispatch("set_ADD_VIP_target_type", "")
                .then(function(response) {})
                .catch(function(error) {
                  console.info(error);
                });
            })
            .catch(function(error) {
              console.info(error);
            });
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    pickerValue_change(event) {
      let vm = this;
      this.time.dayValue = "";
      this.time.weekValue = "";
      this.time.pickerValue = event;
      let newValue = String(event);
      vm.$store
        .dispatch("set_ADD_VIP_picker", newValue)
        .then(function(response) {
          console.log(response);
          vm.$store
            .dispatch("set_ADD_VIP_time_type", 3)
            .then(function(response) {
              vm.$store
                .dispatch("set_ADD_VIP_target_type", "")
                .then(function(response) {})
                .catch(function(error) {
                  console.info(error);
                });
            })
            .catch(function(error) {
              console.info(error);
            });
        })
        .catch(function(error) {
          console.info(error);
        });
    },

    // //////////////

    regionChoose_change(event) {
      regionChoose_old = regionChoose_new;
      let checkedCount = event.length;
      this.region_checkAll = checkedCount === this.region.length;
      this.region_isIndeterminate =
        checkedCount > 0 && checkedCount < this.region.length;
      if (this.regionChoose.length == 0) {
        this.region_isIndeterminate = true;
      }
      let vm = this;
      setTimeout(function() {
        regionChoose_new = vm.regionChoose;
        vm.regionChoose = commonTools.delete_repet(
          regionChoose_new,
          regionChoose_old
        );
      }, 100);
    },
    regionChoose_all(val) {
      // console.log(val);
      this.regionChoose = val ? this.region : [];
      this.region_isIndeterminate = !this.region_isIndeterminate;
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
    playmodeChoose_change(event) {
      playmodeChoose_old = playmodeChoose_new;
      let checkedCount = event.length;
      this.playmode_checkAll = checkedCount === this.playmode.length;
      this.playmode_isIndeterminate =
        checkedCount > 0 && checkedCount < this.playmode.length;
      if (this.playmodeChoose.length == 0) {
        this.playmode_isIndeterminate = true;
      }
      let vm = this;
      setTimeout(function() {
        playmodeChoose_new = vm.playmodeChoose;
        vm.playmodeChoose = commonTools.delete_repet(
          playmodeChoose_new,
          playmodeChoose_old
        );
      }, 100);
    },
    playmodeChoose_all(val) {
      this.playmodeChoose = val ? this.playmode : [];
      this.playmode_isIndeterminate = !this.playmode_isIndeterminate;
    },
    programaChoose_change(event) {
      programaChoose_old = programaChoose_new;
      let checkedCount = event.length;
      this.programa_checkAll = checkedCount === this.programa.length;
      this.programa_isIndeterminate =
        checkedCount > 0 && checkedCount < this.programa.length;
      if (this.programaChoose.length == 0) {
        this.programa_isIndeterminate = true;
      }
      let vm = this;
      setTimeout(function() {
        programaChoose_new = vm.programaChoose;
        vm.programaChoose = commonTools.delete_repet(
          programaChoose_new,
          programaChoose_old
        );
      }, 100);
    },
    programaChoose_all(val) {
      this.programaChoose = val ? this.programa : [];
      this.programa_isIndeterminate = !this.programa_isIndeterminate;
    },
    valueAddedPackageChoose_change(event) {
      valueAddedPackageChoose_old = valueAddedPackageChoose_new;
      let checkedCount = event.length;
      this.valueAddedPackage_checkAll = checkedCount === this.valueAddedPackage.length;
      this.valueAddedPackage_isIndeterminate =
        checkedCount > 0 && checkedCount < this.valueAddedPackage.length;
      if (this.valueAddedPackageChoose.length == 0) {
        this.valueAddedPackage_isIndeterminate = true;
      }
      let vm = this;
      setTimeout(function() {
        valueAddedPackageChoose_new = vm.valueAddedPackageChoose;
        vm.valueAddedPackageChoose = commonTools.delete_repet(
          valueAddedPackageChoose_new,
          valueAddedPackageChoose_old
        );
      }, 100);
    },
    valueAddedPackageChoose_all(val) {
      this.valueAddedPackageChoose = val ? this.valueAddedPackage : [];
      this.valueAddedPackage_isIndeterminate = !this.valueAddedPackage_isIndeterminate;
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
.OptionSelectVIP {
  text-align: left;
  padding: 0 14px;
}
.OptionSelectVIP .region,
.OptionSelectVIP .operator,
.OptionSelectVIP .time,
.OptionSelectVIP .playmode,
.OptionSelectVIP .programa,
.OptionSelectVIP .valueAddedPackage {
  display: inline-block;
  width: 100%;
  line-height: 32px;
}
.OptionSelectVIP .valueAddedPackage {
  margin-bottom: 10px;
}

.OptionSelectVIP .m_block {
  display: inline-block;
  line-height: 32px;
}
.OptionSelectVIP .font_title {
  font-family: PingFangSC-Semibold;
  font-size: 14px;
  color: #333333;
  line-height: 32px;
  font-weight: bold;
}
.OptionSelectVIP .font_choose {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: rgba(51, 51, 51, 0.7);
  width: 75px;
}
.OptionSelectVIP .space {
  width: 14px;
  display: inline-block;
}
.OptionSelectVIP .submitP {
  margin-top: 14px;
}
.OptionSelectVIP .submit {
  background-color: #ff6123;
  color: #ffffff;
  line-height: 32px;
  height: 32px;
  margin: 0px;
  padding: 0px;
  width: 68px;
}
</style>

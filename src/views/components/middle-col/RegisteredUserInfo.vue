<template>
  <div class="height_auto registered_user_info">
    <el-row class="height_auto">
      <el-col :span="6" class="flex_start registered_user_num" id="color1">
        在册数：
        <div>
          <span class="nmber_background back_color1" v-if="registeredUserNum.length != 8">&nbsp;</span>
          <!-- <span class="nmber_background back_color1" v-if="registeredUserNum.length != 7">&nbsp;</span> -->
          <span
            class="nmber_background back_color1"
            v-for="(item,index) in registeredUserNum"
            :key="index"
          >{{item}}</span>
        </div>
      </el-col>
      <el-col :span="6" class="flex_start day_live_num" id="color2">
        日活数：
        <div>
          <span class="nmber_background back_color2" v-if="dayLiveNum.length != 8">&nbsp;</span>
          <!-- <span class="nmber_background back_color2" v-if="dayLiveNum.length != 7">&nbsp;</span> -->
          <span
            class="nmber_background back_color2"
            v-for="(item2,index2) in dayLiveNum"
            :key="index2 + 'a'"
          >{{item2}}</span>
        </div>
      </el-col>
      <el-col :span="6" class="flex_start height_auto activation_rate" id="color3">
        激活率：
        <div>
          <!-- <span class="nmber_background" v-if="dayLiveNum.length != 8">&nbsp;</span>
          <span class="nmber_background" v-if="dayLiveNum.length != 7">&nbsp;</span>-->
          <span
            class="nmber_background back_color3"
            v-for="(item3,index3) in activationRate"
            :key="index3 + 'b'"
          >{{item3}}</span>
        </div>
      </el-col>
      <el-col :span="6" class="flex_start height_auto seven_keep" id="color4">
        七日留存率：
        <div>
          <!-- <span class="nmber_background" v-if="dayLiveNum.length != 8">&nbsp;</span>
          <span class="nmber_background" v-if="dayLiveNum.length != 7">&nbsp;</span>-->
          <span
            class="nmber_background back_color4"
            v-for="(item3,index3) in sevenKeep"
            :key="index3 + 'b'"
          >{{item3}}</span>
        </div>
      </el-col>
    </el-row>

    <!-- {{value}} -->
  </div>
</template>
<script>
import { commonTools } from "@/utils/test";

// import { activationRate } from "@/api/api_main";
import { users_basic, users_retention } from "@/api/api_main";

export default {
  name: "RegisteredUserInfo", //顶部logo下的总体数据
  props: ["value_p"],
  data() {
    return {
      registeredUserNum: "3426746", //在册数
      dayLiveNum: "262346", //日活数
      activationRate: "87.3%", //激活率
      sevenKeep: "67.4%" //七日留存
      // value: 0
    };
  },
  computed: {
    value: {
      get: function() {
        return this.value_p;
      },
      set: function(newValue) {
        //
      }
    }
  },
  mounted() {
    // activationRate()
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.info(error);
    //   });

    let vm = this;
    setTimeout(function() {
      vm.$store
        .dispatch("get_BigScreenExpirationDate")
        .then(function(response) {
          vm.users_basic(response);
          vm.users_retention(response);
          vm.handleRegisteredUserNum();
        })
        .catch(function(error) {
          console.info(error);
        });
    }, 100);
    setInterval(this.get, 1000);
  },
  methods: {
    users_retention(ExpirationDate) {
      // console.log("users_retention");
      // 七天留存和三十天留存（0=7天，1=30天留存率）
      // console.log("~~~~~~~!");
      let date_range = commonTools.currentDay_currenDayRange(ExpirationDate);
      // console.log(date_range);

      let vm = this;
      let m_operator = commonTools.GetBigScreenOperator();

      let temp = {
        // operator: String(["移动", "联通", "电信"]),
        operator: m_operator,
        start: date_range.start,
        end: date_range.end
      };

      users_retention(temp)
        .then(function(response) {
          // console.log(response);
          let aggregations = response.data.responses[0].aggregations;
          let t1 = aggregations.all_remain_num.value; // 留存用户数
          let t2 = aggregations.all_new_activate_num.value; // 新增激活用户数
          let t3 = t1 / t2;
          vm.sevenKeep = String(commonTools.returnFloat_1(t3 * 100)) + "%"; //激活率
        })
        .catch(function(error) {
          console.info(error);
          vm.sevenKeep = "--%";
        });
    },
    users_basic(ExpirationDate) {
      // console.log("~~~~~~users_basic");
      let vm = this;
      let m_operator = commonTools.GetBigScreenOperator();
      let temp = {
        // operator: String(["移动", "联通", "电信"]),
        operator: m_operator,
        start: ExpirationDate,
        end: ExpirationDate,
        year:commonTools.get_ExpirationDate_year(ExpirationDate)

      };
      users_basic(temp)
        .then(function(response) {
          // console.log(response);
          let aggregations = response.data.responses[0].aggregations;
          let t1 = aggregations.all_register_num.value; // 在册
          let t2 = aggregations.all_active_num.value; // 日活
          let t3 = aggregations.all_activate_user_num.value; // 临时-激活用户数
          t3 = t3 / t1; // 激活率 = 激活用户数 / 在册用户数
          vm.registeredUserNum = String(t1); //在册数
          vm.dayLiveNum = String(t2); //日活数
          vm.activationRate = String(commonTools.returnFloat_1(t3 * 100)) + "%"; //激活率
        })
        .catch(function(error) {
          console.info(error);
          vm.registeredUserNum = "--------";
          vm.dayLiveNum = "--------";
          vm.activationRate = "--%";
        });
    },
    resetColor() {
      let color1 = document.getElementById("color1");
      let color2 = document.getElementById("color2");
      let color3 = document.getElementById("color3");
      let color4 = document.getElementById("color4");
      let back_color1 = this.getElementsByClassName("back_color1");
      let back_color2 = this.getElementsByClassName("back_color2");
      let back_color3 = this.getElementsByClassName("back_color3");
      let back_color4 = this.getElementsByClassName("back_color4");

      color1.style.color = "#30e1f6";
      color2.style.color = "#30e1f6";
      color3.style.color = "#30e1f6";
      color4.style.color = "#30e1f6";
      color1.style.transition = "all 1s ease-in 0s";
      color2.style.transition = "all 1s ease-in 0s";
      color3.style.transition = "all 1s ease-in 0s";
      color4.style.transition = "all 1s ease-in 0s";

      // back_color1[0].style.boxShadow = "inset 0 0 31px 0 #30e1f6";
      // back_color2[0].style.boxShadow = "inset 0 0 31px 0 #30e1f6";
      // back_color3[0].style.boxShadow = "inset 0 0 31px 0 #30e1f6";
      // back_color4[0].style.boxShadow = "inset 0 0 31px 0 #30e1f6";
      this.manageArrBC(back_color1, "inset 0 0 31px 0 #30e1f6");
      this.manageArrBC(back_color2, "inset 0 0 31px 0 #30e1f6");
      this.manageArrBC(back_color3, "inset 0 0 31px 0 #30e1f6");
      this.manageArrBC(back_color4, "inset 0 0 31px 0 #30e1f6");
    },
    manageArrBC(ele, boxShadow) {
      let i;
      let length = ele.length;
      for (i = 0; i < length; i++) {
        ele[i].style.boxShadow = boxShadow;
        ele[i].style.transition = "all 1s ease-in 0s";
      }
    },
    handleRegisteredUserNum() {
      //console.log(this.registeredUserNum.length)
    },
    //可以让低版本的浏览器使用 (原生getElementsByClassName需要高版本浏览器支持)
    getElementsByClassName(classname, node) {
      if (!node) node = document.getElementsByTagName("body")[0];
      var a = [];
      var re = new RegExp("\\b" + classname + "\\b");
      var els = node.getElementsByTagName("*");
      for (var i = 0, j = els.length; i < j; i++)
        if (re.test(els[i].className)) a.push(els[i]);
      return a;
    },
    get() {
      // if (
      //   this.value == 0 ||
      //   this.value == 6 ||
      //   this.value == 11 ||
      //   this.value == 16
      // ) {
      // }

      // if (this.value >= 0 && this.value <= 4) {
      if (this.value == 0) {
        this.resetColor();
        let color1 = document.getElementById("color1");
        let back_color1 = this.getElementsByClassName("back_color1");
        color1.style.color = "#ff4800";
        this.manageArrBC(back_color1, "inset 0 0 31px 0 #ff4800");
      }
      // if (this.value >= 5 && this.value <= 9) {
      if (this.value == 5) {
        this.resetColor();
        let color2 = document.getElementById("color2");
        let back_color2 = this.getElementsByClassName("back_color2");
        color2.style.color = "#ff4800";
        this.manageArrBC(back_color2, "inset 0 0 31px 0 #ff4800");
      }
      // if (this.value >= 10 && this.value <= 14) {
      if (this.value == 10) {
        this.resetColor();
        let color3 = document.getElementById("color3");
        let back_color3 = this.getElementsByClassName("back_color3");
        color3.style.color = "#ff4800";
        this.manageArrBC(back_color3, "inset 0 0 31px 0 #ff4800");
      }
      // if (this.value >= 15 && this.value <= 19) {
      if (this.value == 15) {
        this.resetColor();
        let color4 = document.getElementById("color4");
        let back_color4 = this.getElementsByClassName("back_color4");
        color4.style.color = "#ff4800";
        this.manageArrBC(back_color4, "inset 0 0 31px 0 #ff4800");
      }
      if (this.value >= 19) {
        this.value = 0;
      } else {
        this.value++;
      }
    }
  }
};
</script>
<style scoped>
.flex_start {
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.registered_user_num,
.activation_rate,
.seven_keep {
  height: 100%;
  font-size: 0.16rem;
  /* color: #30e1f6; */
}

#color1 {
  color: #ff4800;
}
#color2,
#color3,
#color4 {
  color: #30e1f6;
}

#back_color1 {
  box-shadow: inset 0 0 31px 0 #ff4800;
}
#back_color2,
#back_color3,
#back_color4 {
  box-shadow: inset 0 0 31px 0 #30e1f6;
}

.nmber_background {
  color: #fff;
  font-family: "Aldrich-Regular";
  font-size: 0.25rem;
  display: inline-block;
  width: 0.25rem;
  height: 0.3rem;
  line-height: 0.28rem;
  margin-right: 0.05rem;
}
.registered_user_num .nmber_background,
.activation_rate .nmber_background,
.seven_keep .nmber_background {
  background-image: linear-gradient(
    180deg,
    rgba(247, 248, 253, 0) 0%,
    rgba(236, 239, 251, 0) 100%
  );
  /* box-shadow: inset 0 0 31px 0 #30e1f6; */
}

/* 日活数开始 */
.day_live_num {
  justify-content: flex-end;
  height: 100%;
  font-size: 0.16rem;
  /* color: #ff4800; */
}
.day_live_num .nmber_background {
  background-image: linear-gradient(
    180deg,
    rgba(247, 248, 253, 0) 0%,
    rgba(236, 239, 251, 0) 100%
  );
  /* box-shadow: inset 0 0 31px 0 #ff4800; */
}
.activation_rate {
  /* padding-left: 0.12rem; */
  padding-left: 0.5rem;
}
</style>


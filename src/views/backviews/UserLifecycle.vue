<template>
  <div class="user_life_cycle">
    <!-- 条件筛选开始 -->
    <el-row class="option_select">
      <el-row class="model_title">
        <span class="title_border_left"></span>条件筛选
      </el-row>
      <el-row class="chart_body back_white">
        <com-optionselectULC></com-optionselectULC>
      </el-row>
    </el-row>
    <!-- 条件筛选结束 -->

    <!-- 在册和激活开始 -->
    <el-row class="user_register">
      <el-col class="user_register_left height_auto" :span="12">
        <el-row class="model_title">
          <!-- <span class="title_border_left"></span>在册 -->
          <span class="title_border_left"></span>在网
        </el-row>
        <el-row class="chart_body back_white">
          <com-registered v-bind:api_data1="api_data1"></com-registered>
        </el-row>
      </el-col>
      <el-col class="user_register_right height_auto" :span="12">
        <el-row class="model_title">
          <span class="title_border_left"></span>激活
        </el-row>
        <el-row class="chart_body back_white">
          <com-activate v-bind:api_data2="api_data2"></com-activate>
        </el-row>
      </el-col>
    </el-row>
    <!-- 在册和激活结束-->

    <!-- 在网开始 -->
    <el-row class="user_online">
      <el-col class="height_auto padding_right" :span="14">
        <el-row class="model_title">
          <span class="title_border_left"></span>在网
        </el-row>
        <el-row class="chart_body user_online_body back_white">
          <com-inthenetwork v-bind:api_data3="api_data3"></com-inthenetwork>
        </el-row>
      </el-col>
      <el-col class="height_auto padding_left" :span="10">
        <el-row class="model_title">
          <span class="title_border_left"></span>在网用户结构
        </el-row>
        <el-row class="chart_body user_structure_body back_white">
          <com-userstructure v-bind:api_data4="api_data4"></com-userstructure>
        </el-row>
      </el-col>
    </el-row>
    <!-- 在网结束 -->

    <!-- 用户细分开始 -->
    <el-row class="user_segment back_white" v-show="ULC_time_type == 3">
      <el-row class="model_title">
        <span class="title_border_left"></span>用户细分
      </el-row>
      <el-row class="chart_body padding_10">
        <com-customersegmentation v-bind:api_data5="api_data5"></com-customersegmentation>
      </el-row>
    </el-row>
    <!-- 用户细分结束 -->
  </div>
</template>
<script>
import OptionSelectULC from "@/views/backcoms/userlifecycle/OptionSelectULC"; // 条件筛选
import Registered from "@/views/backcoms/userlifecycle/Registered"; // 在册
import Activate from "@/views/backcoms/userlifecycle/Activate"; // 激活
import InTheNetwork from "@/views/backcoms/userlifecycle/InTheNetwork"; // 在网
import UserStructure from "@/views/backcoms/userlifecycle/UserStructure"; // 用户结构
import CustomerSegmentation from "@/views/backcoms/userlifecycle/CustomerSegmentation"; // 用户细分

import { mapGetters } from "vuex";
import { commonTools } from "@/utils/test";
import { userLives } from "@/api/api_main";

export default {
  name: "UserLifecycle", //用户生命周期
  components: {
    "com-optionselectULC": OptionSelectULC,
    "com-registered": Registered,
    "com-activate": Activate,
    "com-inthenetwork": InTheNetwork,
    "com-userstructure": UserStructure,
    "com-customersegmentation": CustomerSegmentation
  },
  computed: {
    ...mapGetters([
      "ULC_region",
      "ULC_operator",
      "ULC_day",
      "ULC_week",
      "ULC_month",
      "ULC_time_type"
    ])
  },
  watch: {
    ULC_region(newValue, oldValue) {
      let vm = this;
      console.log("ULC_region: " + newValue);
      setTimeout(function () {
        vm.refresh_api_data();
      }, 100);
    },
    ULC_operator(newValue, oldValue) {
      let vm = this;
      console.log("ULC_operator: " + newValue);
      setTimeout(function () {
        vm.refresh_api_data();
      }, 100);
    },
    ULC_day(newValue, oldValue) {
      let vm = this;
      console.log("~~~-watch - ULC_day: " + newValue);
      setTimeout(function () {
        vm.refresh_api_data();
      }, 100);
    },
    ULC_week(newValue, oldValue) {
      let vm = this;
      console.log("ULC_week: " + newValue);
      setTimeout(function () {
        vm.refresh_api_data();
      }, 100);
    },
    ULC_month(newValue, oldValue) {
      let vm = this;
      console.log("ULC_month: " + newValue);
      setTimeout(function () {
        vm.refresh_api_data();
      }, 100);
    },
    ULC_time_type(newValue, oldValue) {
      let vm = this;
      console.log("ULC_time_type: " + newValue);
    }
  },
  data() {
    return {
      form: {},
      // 在网
      // 激活
      // 在网（2）
      // 在网用户结构
      // 用户细分
      api_data1: {
        id: "ULC_echartsA",
        title: "在网用户数",
        data1: ["7.08-7.14", "7.15-7.21"],
        data2: ["219.4", "213.4"]
      },
      api_data2: [],
      api_data3: [],
      api_data4: [],
      api_data5: []
    };
  },
  methods: {
    refresh_api_data() {
      this.userLives(this.ULC_time_type);
    },
    userLives(time_type) {
      let vm = this;
      // console.log("userLives");

      // console.log("~~~~~ ULC_region:" + vm.ULC_region);
      let temp_region = commonTools.acConvert(vm.ULC_region);
      // console.log("~~~~~ temp_region:" + temp_region);
      // console.log("~~~~~time_type: " + time_type);
      // console.log(typeof time_type);
      let temp_operator = commonTools.operatorConvert(vm.ULC_operator);

      let temp = {
        area: null,
        operator: null,
        start: null,
        end: null
      };
      if (time_type == 1) {
        // 时间类型-1-天
        // console.log("~~~~~day:" + vm.ULC_day);
        let temp_time = commonTools.split_yearAtime2(vm.ULC_day);
        temp = {
          area: String(temp_region),
          operator: String(temp_operator),
          start: vm.ULC_day,
          end: vm.ULC_day,
          year: temp_time.year
        };
        // console.log("~~~~time_type:" + time_type);
        console.log("~~~~~1:");
        console.log(temp);
      } else if (time_type == 2) {
        // 时间类型-2-周
        // console.log("~~~~~week:" + vm.ULC_week);
        let temp_time = commonTools.split_yearAtime(vm.ULC_week);
        temp = {
          area: String(temp_region),
          operator: String(temp_operator),
          start: temp_time.time,
          end: temp_time.time,
          year: temp_time.year
        };
        // console.log("~~~~time_type:" + time_type);
        console.log("~~~~~2:");
        console.log(temp);
      } else if (time_type == 3) {
        // 时间类型-3-月
        // console.log("~~~~~month:" + vm.ULC_month);
        let temp_time = commonTools.split_yearAtime(vm.ULC_month);
        console.log(temp_time);

        temp = {
          area: String(temp_region),
          operator: String(temp_operator),
          start: temp_time.time,
          end: temp_time.time,
          year: temp_time.year
        };
        // console.log("~~~~time_type:" + time_type);
        console.log("~~~~~3:");
        console.log(temp);
      } else {
        // 未选择时间情况
        return;
      }

      // 测试开启
      // vm.api_data1 = [1];
      // vm.api_data2 = [1];
      // vm.api_data3 = [1];
      // vm.api_data4 = [1];
      // vm.api_data5 = [1];
      //return; // 测试开启

      console.log("用户选择", temp)

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("ac", temp.area);
      formData.append("operator", temp.operator);
      formData.append("start", temp.start);
      formData.append("end", temp.end);
      formData.append("year", temp.year);

      userLives(formData)
        .then(function (response) {
          console.log("用户生命周期", response);

        })
        .catch(function (error) {
          console.info(error);
        });
    }
  },
};
</script>
<style>
.option_select {
  height: 250px;
}
.user_register {
  height: 350px;
  margin: 14px 0px;
}
.user_register_left {
  padding-right: 7px;
}
.user_register_right {
  padding-left: 7px;
}
.user_online {
  height: 486px;
  margin-bottom: 14px;
}
.user_segment {
  height: 655px;
  margin-bottom: 50px;
}

/* 用户生命周期页自适应开始 */
@media (max-width: 1450px) {
  .user_register_left.el-col-12,
  .user_register_right.el-col-12,
  .user_online .el-col-14,
  .user_online .el-col-10,
  .CustomerSegmentation .el-col-12 {
    width: 100%;
  }
  .user_register,
  .user_online,
  .user_segment {
    height: 100% !important;
  }
  .user_online_body {
    height: 456px;
  }
  .user_structure_body {
    height: 300px;
  }
  .user_register_left,
  .user_online .padding_right {
    padding-right: 0px;
  }
  .user_register_right,
  .user_online .padding_left {
    padding-left: 0px;
    margin-top: 14px;
  }
}
</style>



<template>
  <div class="user_life_cycle">
    <!-- 条件筛选开始 -->
    <el-row class="option_select">
      <el-row class="model_title">
        <span class="title_border_left"></span>条件筛选
      </el-row>
      <el-row class="chart_body back_white">
        <com-optionselect></com-optionselect>
      </el-row>
    </el-row>
    <!-- 条件筛选结束 -->

    <!-- 在册和激活开始 -->
    <el-row class="user_register">
      <el-col class="user_register_left height_auto" :span="12">
        <el-row class="model_title">
          <span class="title_border_left"></span>在册
        </el-row>
        <el-row class="chart_body back_white">
          <com-registered></com-registered>
        </el-row>
      </el-col>
      <el-col class="user_register_right height_auto" :span="12">
        <el-row class="model_title">
          <span class="title_border_left"></span>激活
        </el-row>
        <el-row class="chart_body back_white">
          <com-activate></com-activate>
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
          <com-inthenetwork></com-inthenetwork>
        </el-row>
      </el-col>
      <el-col class="height_auto padding_left" :span="10">
        <el-row class="model_title">
          <span class="title_border_left"></span>用户结构
        </el-row>
        <el-row class="chart_body user_structure_body back_white">
          <com-userstructure></com-userstructure>
        </el-row>
      </el-col>
    </el-row>
    <!-- 在网结束 -->

    <!-- 用户细分开始 -->
    <el-row class="user_segment back_white">
      <el-row class="model_title">
        <span class="title_border_left"></span>用户细分
      </el-row>
      <el-row class="chart_body padding_10">
        <com-customersegmentation></com-customersegmentation>
      </el-row>
    </el-row>
    <!-- 用户细分结束 -->
  </div>
</template>
<script>
import OptionSelect from "@/views/backcoms/userlifecycle/OptionSelect"; // 条件筛选
import Registered from "@/views/backcoms/userlifecycle/Registered"; // 在册
import Activate from "@/views/backcoms/userlifecycle/Activate"; // 激活
import InTheNetwork from "@/views/backcoms/userlifecycle/InTheNetwork"; // 在网
import UserStructure from "@/views/backcoms/userlifecycle/UserStructure"; // 用户结构
import CustomerSegmentation from "@/views/backcoms/userlifecycle/CustomerSegmentation"; // 用户细分

export default {
  name: "UserLifecycle", //用户生命周期
  data() {
    return {
      form: {}
    }
  },
  components: {
    "com-optionselect": OptionSelect,
    "com-registered": Registered,
    "com-activate": Activate,
    "com-inthenetwork": InTheNetwork,
    "com-userstructure": UserStructure,
    "com-customersegmentation": CustomerSegmentation,
  }
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
</style>



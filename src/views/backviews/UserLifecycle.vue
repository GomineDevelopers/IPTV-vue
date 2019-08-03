<template>
  <div class="user_life_cycle">
    <!-- 条件筛选开始 -->
    <el-row class="option_select">
      <el-row class="model_title">
        <span class="title_border_left"></span>条件筛选
      </el-row>
      <el-row class="chart_body back_white">
        <!-- <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="活动性质">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>-->
      </el-row>
    </el-row>
    <!-- 条件筛选结束 -->

    <!-- 在册和激活开始 -->
    <el-row class="user_register">
      <el-col class="user_register_left height_auto" :span="12">
        <el-row class="model_title">
          <span class="title_border_left"></span>在册
        </el-row>
        <el-row class="chart_body back_white"></el-row>
      </el-col>
      <el-col class="user_register_right height_auto" :span="12">
        <el-row class="model_title">
          <span class="title_border_left"></span>激活
        </el-row>
        <el-row class="chart_body back_white"></el-row>
      </el-col>
    </el-row>
    <!-- 在册和激活结束-->

    <!-- 在网开始 -->
    <el-row class="user_online">
      <el-col class="height_auto padding_right" :span="14">
        <el-row class="model_title">
          <span class="title_border_left"></span>在网
        </el-row>
        <el-row class="chart_body user_online_body back_white"></el-row>
      </el-col>
      <el-col class="height_auto padding_left" :span="10">
        <el-row class="model_title">
          <span class="title_border_left"></span>用户结构
        </el-row>
        <el-row class="chart_body user_structure_body back_white"></el-row>
      </el-col>
    </el-row>
    <!-- 在网结束 -->

    <!-- 用户细分开始 -->
    <el-row class="user_segment back_white">
      <el-row class="model_title">
        <span class="title_border_left"></span>用户细分
      </el-row>
      <el-row class="chart_body padding_10"></el-row>
    </el-row>
    <!-- 用户细分结束 -->
  </div>
</template>
<script>
// import MyMap from "@/views/backcoms/userlifecycle/MyMap"; // 
// import MyMap from "@/views/backcoms/userlifecycle/MyMap"; // 
// import MyMap from "@/views/backcoms/userlifecycle/MyMap"; // 
// import MyMap from "@/views/backcoms/userlifecycle/MyMap"; // 
// import MyMap from "@/views/backcoms/userlifecycle/MyMap"; // 
// import MyMap from "@/views/backcoms/userlifecycle/MyMap"; // 


export default {
  name: 'UserLifecycle',  //用户生命周期
  data() {
    return {
      form: {}
    }
  }
}
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
  height: 627px;
  margin-bottom: 50px;
}
</style>



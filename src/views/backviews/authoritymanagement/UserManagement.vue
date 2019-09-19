<template>
  <div class="UserManagement height_auto">
    <el-row class="hot_topics_control">
      <el-row class="model_title">
        <span class="title_border_left"></span>用户管理
      </el-row>
      <el-row class="hot_topics_list chart_body back_white">
        <el-row class="programInput_elrow">
          <el-button class="search_btn">＋ 添加用户</el-button>
          <el-row class="form_titleP">
            <el-col :span="4" class="form_title">&nbsp;&nbsp;&nbsp;&nbsp;{{form.title[0]}}</el-col>
            <el-col :span="5" class="form_title">{{form.title[1]}}</el-col>
            <el-col :span="5" class="form_title">{{form.title[2]}}</el-col>
            <el-col :span="5" class="form_title">{{form.title[3]}}</el-col>
            <el-col :span="5" class="form_title">{{form.title[4]}}</el-col>
          </el-row>
          <el-row class="form_rowP" v-for="(item,index) in form.row" :key="index">
            <el-col :span="4" class="form_row">&nbsp;&nbsp;&nbsp;&nbsp;{{item.serialNumber}}</el-col>
            <el-col :span="5" class="form_row">{{item.groupName}}</el-col>
            <el-col :span="5" class="form_row">{{item.intro}}</el-col>
            <el-col :span="5" class="form_row">{{item.status}}</el-col>
            <el-col :span="5" class="form_row">
              <!-- <el-button class="form_btn1">
                <i class="iconfont">&#xe613;</i> 授权
              </el-button>-->
              <el-button class="form_btn2">
                <i class="iconfont">&#xe7e1;</i> 编辑
              </el-button>
              <el-button class="form_btn3">
                <i class="iconfont">&#xe7c3;</i> 删除
              </el-button>
            </el-col>
          </el-row>
        </el-row>
      </el-row>

    </el-row>
  </div>
</template>
<script>
export default {
  name: "AuthorityManagement", //热点监控
  data() {
    return {
      form: {
        title: ["序号", "组名", "简介", "状态", "操作"],
        row: [
          {
            serialNumber: "1",
            groupName: "管理员",
            intro: "管理员",
            status: "正常"
          },
          {
            serialNumber: "2",
            groupName: "管理员",
            intro: "管理员",
            status: "正常"
          },
          {
            serialNumber: "3",
            groupName: "管理员",
            intro: "管理员",
            status: "正常"
          }
        ]
      },
      
    };
  },
  methods: {
    authorizationChoose_change(event) {
      console.log(event);
    }
  }
};
</script>
<style scoped>
.hot_topics_control {
  height: 550px;
}
.hot_topics_list_date {
  font-size: 14px;
  color: #999999;
  padding-left: 10px;
  text-align: left;
  line-height: 40px;
}
.hot_topics_list_content {
  text-align: left;
  font-size: 14px;
  color: #333333;
  text-align: left;
  line-height: 40px;
}
.hot_time {
  font-size: 16px;
  color: #ff4800;
  font-weight: bold;
}
.hot_topics_list_content .up_icon {
  color: #ff4800;
  font-size: 16px;
}
/* ----------- */
.programInput_elrow {
  height: 35px;
  line-height: 35px;
  text-align: left;
}
.programInput_elrow .search_btn {
  width: 119px;
  height: 32px;
  border-radius: 4px;
  background-color: #ff6123;
  color: #ffffff;
  /* line-height: 40px; */
  margin: 0px;
  padding: 0px;
  margin: 20px 6px;
}
.form_titleP {
  border-bottom: 1px solid rgba(216, 216, 216, 1);
}
.form_title {
  height: 40px;
  font-size: 14px;
  font-family: PingFangSC;
  /* font-weight: 400; */
  color: rgba(51, 51, 51, 1);
  font-weight: bold;
}

.form_rowP {
  border-bottom: 1px solid rgba(216, 216, 216, 1);
}
.form_row {
  height: 40px;
  font-size: 14px;
  font-family: PingFangSC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}
.form_btn1 {
  width: 95px;
  /* height: 32px; */
  background: rgba(126, 205, 244, 1);
  border-radius: 4px;
  color: rgba(255, 255, 255, 1);
}
.form_btn2 {
  width: 95px;
  /* height: 32px; */
  background: rgba(121, 171, 252, 1);
  border-radius: 4px;
  color: rgba(255, 255, 255, 1);
}
.form_btn3 {
  width: 95px;
  /* height: 32px; */
  background: rgba(255, 136, 89, 1);
  border-radius: 4px;
  color: rgba(255, 255, 255, 1);
}
.add_user {
  height: 50px;
  border-bottom: 1px #ededed solid;
}
.font_choose {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: rgba(51, 51, 51, 0.7);
  width: 75px;
}
</style>

<style>
.el-dialog {
  width: 500px !important;
}
.el-input {
  width: 240px !important;
}
.el-button--primary {
  color: #fff;
  background-color: #ff6123 !important;
  border-color: #ff6123 !important;
}
.el-dialog__header {
  padding: 0px !important;
}
.el-dialog__body {
  /* padding: 0px !important; */
}
.el-dialog__footer {
  /* padding: 0px !important; */
}
.el-textarea {
  width: 240px !important;
}
.el-radio__input.is-checked .el-radio__inner {
  border-color: #ff6123;
  background: #ff6123;
}
.el-radio__inner:hover {
  border-color: #ff6123;
}
.m_status {
  /* margin-left: 169px; */
  text-align: left;
}
.el-form-item__label {
  font-weight: bold;
}
.el-radio {
  margin-right: 0px;
  margin-left: 50px;
}
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
.dialog_authorization .el-dialog__body {
  /* padding: 0px !important; */
  text-align: left !important;
  margin-left: 50px !important;
  line-height: 25px !important;
}
</style>
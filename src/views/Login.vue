<template>
  <div class="login_body flex" :style="loginBodyBgm">
    <div class="alert_div">
      <el-alert show-icon :title="alertTitle" :type="alertType" effect="dark" v-show="alertShow"></el-alert>
    </div>
    <div class="content_form flex">
      <div class="login_left height_auto">
        <img src="@/assets/lgoin-left.png" />
      </div>
      <div class="login_right height_auto">
        <span class="form_title">登&nbsp;录</span>
        <p>
          <span>用户名:</span>
          <el-input placeholder="请输入用户名" v-model="name" clearable></el-input>
        </p>
        <p>
          <span>密码：</span>
          <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
        </p>
        <p>
          <el-button type="primary" round @click="login">登录</el-button>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      loginBodyBgm: {
        backgroundImage: "url(" + require("@/assets/loginbg.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      },
      name: '',  //用户名
      password: '',  //密码
      alertShow: false,  //控制提示
      alertTitle: '', //提示文字
      alertType: '',  //提示类型
    }
  },
  methods: {
    login() {
      let name = this.name
      let password = this.password
      console.log("用户名：", name)
      console.log("密码：", password)
      if (name == '' || password == '') {
        this.alertShow = true
        this.alertTitle = "请填写正确的用户名和密码！"
        this.alertType = 'warning'
      } else {

      }
    }
  }
}
</script>
<style>
.login_body .el-input--suffix .el-input__inner {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #666;
  background: none !important;
  color: #fff;
  font-size: 14px;
}
.login_body .el-input .el-input__clear {
  color: #fff;
}
.login_body input::-webkit-input-placeholder {
  color: #fff;
}

.login_body input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #fff;
}

.login_body input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #fff;
}

.login_body input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #fff;
}
.login_body .el-button--primary {
  width: 280px;
  height: 40px;
  margin-top: 10px;
}
.alert_div {
  position: absolute;
  height: 20px;
  line-height: 20px;
  top: 0;
  left: 50%;
  width: 700px;
  transform: translateX(-50%);
}
</style>
<style scoped>
.login_body {
  height: 100vh;
  width: 100vw;
  position: relative;
}
.content_form {
  width: 700px;
  height: 430px;
}
.login_left,
.login_right {
  width: 50%;
}
.login_right {
  background: rgba(255, 255, 255, 0.4);
  padding: 0px 35px;
}
.login_right .form_title {
  display: inline-block;
  font-size: 20px;
  color: #fff;
  margin: 63px 0px 10px 0px;
}
.login_right p {
  margin-bottom: 40px;
}
.login_right p span {
  width: 100%;
  margin-bottom: 5px;
  display: inline-block;
  text-align: left;
  color: #333;
  font-size: 16px;
}
</style>
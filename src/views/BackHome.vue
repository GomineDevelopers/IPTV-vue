<template>
  <div class="backHome">
    <div class="backHome_nav">
      <back-home-nav></back-home-nav>
    </div>
    <div class="backHome_body">
      <div class="backHome_body_title">
        <p class="backhome_title">贵州广电新媒体数据分析平台</p>
        <div class="aboutuser">
          <!-- <div class="m_imgP">
              <img class="m_img" src="../assets/pic/user.png" alt />
          </div>-->
          <div class="account_name">&nbsp;{{username}}</div>
          <div>
            <button class="signout" @click="logout">退出</button>
          </div>
        </div>
      </div>
      <div class="backHome_body_main">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import "@/styles/common.css";
import BackHomeNav from "@/views/backcoms/backhomenav/BackHomeNav"; //左侧导航栏
import { logout, get_myinfo } from "@/api/api_main";

export default {
  name: "BackHome",
  components: {
    "back-home-nav": BackHomeNav
  },
  data() {
    return {
      email: "",
      username: ""
    };
  },
  mounted() {
    this.email = this.$Utils.getCookieCry("email");
    this.get_myinfo();
  },
  methods: {
    get_myinfo() {
      let vm = this;
      let token = vm.$Utils.getCookie("user_token");
      let newToken = token.replace('"', "").replace('"', "");
      get_myinfo(newToken)
        .then(function (response) {
          vm.username = response.data.name;
        })
        .catch(function (error) {
          console.info(error);
        });
    },
    logout() {
      let vm = this;
      let token = vm.$Utils.getCookie("user_token");
      let newToken = token.replace('"', "").replace('"', "");
      vm.$Utils.delCookie("user_token");

      logout(newToken)
        .then(function (response) {
          console.log(response);
          if (response.status === 204) {
            // console.log("204");
            vm.$router.push({ path: "/login" });
            // vm.$router.go(0);
          } else {
            // console.log("非204");
          }
        })
        .catch(function (error) {
          console.log(error);
          // console.log("登出，请重试！");
          vm.$router.push({ path: "/login" });
        });
    }
  }
};
</script>

<style scoped>
.backHome {
  width: 100%;
  height: 100%;
  display: -webkit-flex;
  display: flex;
}
.backHome .backHome_nav {
  width: 230px;
  height: 100%;
  box-shadow: 2px 0 6px 0 rgba(0, 21, 41, 0.35);
}
.backHome .backHome_body {
  background: #f0f2f5;
  width: calc(100% - 230px);
  height: 100%;
}
.backHome_body .backHome_body_title {
  position: fixed;
  top: 0;
  right: 0;
  width: calc(100% - 230px);
  text-align: center;
  /* height: 60px; */
  /* line-height: 60px; */
  font-size: 24px;
  font-weight: bold;
  color: #333;
  background: #fff;
  box-shadow: 0 0px 0px 1px rgba(0, 0, 0, 0.2);
  z-index: 99;
  margin: 0 auto;
}
.backHome_body .backhome_title {
  margin: 0 auto;
  margin-left: 17.1%;
  display: inline-block;
  width: 50%;
  margin-top: 17px;
}
.backHome_body .backHome_body_main {
  height: calc(100% - 60px);
  padding: 24px 14px;
  margin-top: 60px;
  overflow: auto;
  z-index: 1;
}

.aboutuser {
  width: 150px;
  float: right;
  margin: 16.5px;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.account_name {
  display: inline-block;
  color: #ff6123;
  font-size: 14px;
  text-align: left;
}
.signout {
  width: 70px;
  height: 30px;
  border-radius: 3px;
  border: 1px solid #ff6123;
  background: rgba(255, 255, 255, 1);
  color: #ff6123;
}
.signout:hover {
  background: #ff6123;
  color: #fff;
}
.signout:hover {
  cursor: pointer;
}
.m_imgP {
  display: inline-block;
  width: 15px;
}
.m_img {
  height: 15px;
  width: 15px;
}
</style>

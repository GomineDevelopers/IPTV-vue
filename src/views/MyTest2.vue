<template>
  <div class="MyTest2">
    <br />

    <button @click="get_user_permissions">get_user_permissions √√√</button>
    <button @click="post_users_permissions">post_users_permissions √√√</button>
    <button @click="get_permissions_list">get_permissions_list √√√</button>
    <button @click="del_user">del_user √√√</button>
    <button @click="update_users">update_users</button>
    <button @click="get_userinfo_byid">get_userinfo_byid √√√</button>
    <button @click="create_users">create_users √√√</button>
    <button @click="get_allusersinfo">get_allusersinfo √√√</button>
    <button @click="get_myinfo">get_myinfo √√√</button>
    <br />
    <br />
    <button @click="refreshToken">refreshToken</button>
  </div>
</template>

<script>
// import "@/vendor/Blob";
// import "@/vendor/Export2Excel";
// import Vue from "vue";
import {
  // //////////////////////// 权限

  get_user_permissions,
  post_users_permissions,
  get_permissions_list,
  // //////////////////////// 用户（新）
  del_user,
  update_users,
  get_userinfo_byid,
  create_users,
  get_allusersinfo,
  get_myinfo,
  refreshToken
} from "@/api/api_main";

import { commonTools } from "@/utils/test";

export default {
  name: "MyTest2",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    // //////////////////////// 用户

    get_user_permissions() {
      console.log("get_user_permissions");
      let vm = this;
      let token = vm.$Utils.getCookie("user_token");
      let newToken = token.replace('"', "").replace('"', "");

      get_user_permissions(newToken)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },

    post_users_permissions() {
      console.log("post_users_permissions");
      let vm = this;
      let token = vm.$Utils.getCookie("user_token");
      let newToken = token.replace('"', "").replace('"', "");
      // vm.$Utils.delCookie("user_token");

      let temp = {
        // permissions: String(["visit_data,visit_life"])
        permissions: String(["visit_life", "visit_action"])
      };

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("permissions", temp.permissions);
      // let user = this.$Utils.getCookieCry("user");
      let user = "1";
      post_users_permissions(newToken, user, formData)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    get_permissions_list() {
      console.log("get_permissions_list");
      let vm = this;
      let token = vm.$Utils.getCookie("user_token");
      let newToken = token.replace('"', "").replace('"', "");

      get_permissions_list(newToken)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    del_user() {
      console.log("del_user");
      let vm = this;
      let token = vm.$Utils.getCookie("user_token");
      let newToken = token.replace('"', "").replace('"', "");
      let user = "3";
      del_user(newToken, user)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    update_users() {
      console.log("update_users");
      let vm = this;
      let token = vm.$Utils.getCookie("user_token");
      let newToken = token.replace('"', "").replace('"', "");
      let user = "2";

      let temp = {
        name: "ttt22222",
        // email: "ttt@ttt.com",
        password: "12345678",
        department: "市场部",
        reporter: "yyy",
        role: "数据分析师"
      };
      // var formData = new FormData();
      // var formData = new window.FormData();
      // formData.append("name", temp.name);
      // formData.append("email", temp.email);
      // formData.append("password", temp.password);
      // formData.append("department", temp.department);
      // formData.append("reporter", temp.reporter);
      // formData.append("role", temp.role);
      // update_users(newToken, user, formData)
      update_users(newToken, user, temp)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    get_userinfo_byid() {
      console.log("get_userinfo_byid");
      let vm = this;
      let token = vm.$Utils.getCookie("user_token");
      let newToken = token.replace('"', "").replace('"', "");
      // let user = this.$Utils.getCookieCry("user");
      let user = "1";
      get_userinfo_byid(newToken, user)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    create_users() {
      console.log("create_users");
      let vm = this;
      let token = vm.$Utils.getCookie("user_token");
      let newToken = token.replace('"', "").replace('"', "");

      let temp = {
        name: "ttt2",
        email: "ttt2@ttt.com",
        password: "123456",
        department: "技术部",
        reporter: "yyy",
        role: "数据分析师"
      };
      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("name", temp.name);
      formData.append("email", temp.email);
      formData.append("password", temp.password);
      formData.append("department", temp.department);
      formData.append("reporter", temp.reporter);
      formData.append("role", temp.role);

      create_users(newToken, formData)
        .then(function(response) {
          console.log(response);
          // 获取所有用户信息
          vm.get_allusersinfo();
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    get_allusersinfo() {
      console.log("get_allusersinfo");
      let vm = this;
      let token = vm.$Utils.getCookie("user_token");
      let newToken = token.replace('"', "").replace('"', "");
      get_allusersinfo(newToken)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    get_myinfo() {
      console.log("get_myinfo");
      let vm = this;
      let token = vm.$Utils.getCookie("user_token");
      let newToken = token.replace('"', "").replace('"', "");
      get_myinfo(newToken)
        .then(function(response) {
          console.log(response);
          let user = String(response.data.id);
          console.log("~~~user:" + user);

          vm.$Utils.setCookieCry("user", user, 1);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    refreshToken() {
      console.log("refreshToken");
      let vm = this;
      let token = vm.$Utils.getCookie("user_token");
      let newToken = token.replace('"', "").replace('"', "");
      refreshToken(newToken)
        .then(function(response) {
          console.log(response);
          let access_token = response.data.access_token;
          console.log(access_token);
          vm.$Utils.setCookie(
            "user_token",
            JSON.stringify(access_token),
            60
          );
        })
        .catch(function(error) {
          console.info(error);
        });
    }
  }
};
</script>

<style >
.MyTest2 {
  text-align: left;
}
</style>


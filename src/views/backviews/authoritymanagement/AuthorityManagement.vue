<template>
  <div class="height_auto">
    <el-row class="hot_topics_control">
      <el-row class="model_title">
        <span class="title_border_left"></span>权限管理
      </el-row>
      <el-row class="hot_topics_list chart_body back_white">
        <el-row class="programInput_elrow">
          <el-button class="search_btn" @click="add_user()">＋ 添加用户</el-button>
          <el-row class="form_titleP">
            <el-col :span="2" class="form_title">&nbsp;&nbsp;&nbsp;&nbsp;{{form.title[0]}}</el-col>
            <el-col :span="2" class="form_title">{{form.title[1]}}</el-col>
            <el-col :span="4" class="form_title">{{form.title[2]}}</el-col>
            <el-col :span="3" class="form_title">{{form.title[3]}}</el-col>
            <el-col :span="3" class="form_title">{{form.title[4]}}</el-col>
            <el-col :span="3" class="form_title">{{form.title[5]}}</el-col>
            <el-col :span="7" class="form_title">{{form.title[6]}}</el-col>
          </el-row>
          <el-row class="form_rowP" v-for="(item,index) in form.row" :key="index">
            <el-col :span="2" class="form_row">&nbsp;&nbsp;&nbsp;&nbsp;{{item.serialNumber}}</el-col>
            <el-col :span="2" class="form_row">{{item.userName}}</el-col>
            <el-col :span="4" class="form_row">{{item.email}}</el-col>
            <el-col :span="3" class="form_row">{{item.department}}</el-col>
            <el-col :span="3" class="form_row">{{item.ReportingManager}}</el-col>
            <el-col :span="3" class="form_row">{{item.jobRole}}</el-col>
            <el-col :span="7" class="form_row">
              <el-button class="form_btn1" @click="authorityManage(index)">
                <i class="iconfont">&#xe613;</i> 授权
              </el-button>
              <el-button class="form_btn2" @click="change_user(index)">
                <i class="iconfont">&#xe7e1;</i> 编辑
              </el-button>
              <el-button class="form_btn3" @click="ifDeleteUser(index)">
                <i class="iconfont">&#xe7c3;</i> 删除
              </el-button>
            </el-col>
          </el-row>
        </el-row>
      </el-row>
      <!-- 
      <el-button type="text" @click="dialogFormVisible = true">添加用户</el-button>
      <el-button type="text" @click="dialogFormVisible3 = true">授权</el-button>-->

      <!-- Form -->
      <el-dialog :visible.sync="dialogFormVisible">
        <el-row slot="title" class="model_title add_user">
          <span class="title_border_left"></span>
          {{user_dialog_info}}
        </el-row>
        <el-form :model="m_form">
          <el-form-item label="用户名：" :label-width="formLabelWidth">
            <el-input v-model="m_form.userName" placeholder="请输入用户名" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱：" :label-width="formLabelWidth">
            <el-input
              v-model="m_form.email"
              :disabled="ifEmailDisabled"
              placeholder="请输入邮箱"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="所在部门：" :label-width="formLabelWidth">
            <el-select v-model="m_form.department" placeholder="请选择部门">
              <el-option label="内容运营部" value="内容运营部"></el-option>
              <el-option label="市场部" value="市场部"></el-option>
              <el-option label="技术部" value="技术部"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="汇报经理：" :label-width="formLabelWidth">
            <el-input v-model="m_form.ReportingManager" placeholder="请输入名称" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="工作角色：" :label-width="formLabelWidth">
            <el-input v-model="m_form.jobRole" placeholder="请输入名称" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码：" :label-width="formLabelWidth">
            <el-input
              type="password"
              v-model="m_form.password"
              placeholder="请设置密码"
              autocomplete="off"
              show-password
            ></el-input>
          </el-form-item>
        </el-form>
        <div class="notice_info">
          <span>{{noticeMessage}}</span>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="userinfo_submit()">确 定</el-button>
          <el-button @click="dialogFormVisible = false">取 消</el-button>
        </div>
      </el-dialog>
      <!-- Form -->

      <!-- Form -->
      <el-dialog class="dialog_authorization" :visible.sync="dialogFormVisible3">
        <el-row slot="title" class="model_title add_user">
          <span class="title_border_left"></span>授权
        </el-row>
        <el-checkbox-group
          @change="authorizationChoose_change"
          v-model=" authorizationChoose"
          v-for="(item,index) in authorization"
          :key="index + 'a' "
        >
          <el-checkbox class="font_choose" :disabled="false" :label="item"></el-checkbox>
        </el-checkbox-group>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="authoritySubmit()">确 定</el-button>
          <el-button @click="dialogFormVisible3 = false">取 消</el-button>
        </div>
      </el-dialog>
      <!-- Form -->
      <!-- Form -->
      <el-dialog class="dialog_authorization" :visible.sync="dialogFormVisible5">
        <el-row slot="title" class="model_title add_user">
          <span class="title_border_left"></span>删除用户
        </el-row>
        <p class="del_info">确定删除当前用户？</p>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="del_user()">确 定</el-button>
          <el-button @click="dialogFormVisible5 = false">取 消</el-button>
        </div>
      </el-dialog>
      <!-- Form -->
    </el-row>
  </div>
</template>
<script>
import {
  get_allusersinfo,
  create_users,
  update_users,
  del_user,
  get_user_permissions,
  get_user_permissions_byid,
  post_users_permissions
} from "@/api/api_main";

export default {
  name: "AuthorityManagement", //热点监控
  data() {
    return {
      // noticeShow: false,
      noticeMessage: '',
      form: {
        title: [
          "用户ID",
          "用户名",
          "邮箱",
          "所在部门",
          "汇报经理",
          "工作角色",
          "操作"
        ],
        row: [
          // {
          //   serialNumber: "1",
          //   userName: "Kelly",
          //   department: "内容运营部",
          //   ReportingManager: "Lily",
          //   jobRole: "数据分析师"
          // },
          // {
          //   serialNumber: "2",
          //   userName: "Lisa",
          //   department: "市场部",
          //   ReportingManager: "Lily",
          //   jobRole: "数据分析师"
          // },
          // {
          //   serialNumber: "3",
          //   userName: "Merry",
          //   department: "技术部",
          //   ReportingManager: "Lily",
          //   jobRole: "数据分析师"
          // }
        ]
      },
      formLabelWidth: "120px",

      dialogFormVisible: false,
      m_form: {
        userName: "",
        email: "",
        department: "",
        ReportingManager: "",
        jobRole: "",
        password: ""
      },
      authorization: [
        "数据总览",
        "用户生命周期",
        "用户收视行为",
        "定期报告",
        "EPG",
        "增值业务",
        "热点监控",
        "数据审计",
        "节目搜索",
        "权限管理",
        "大屏管理",
        "大屏查看",
        "文件上传"
      ],
      // visit_data
      // visit_life
      // visit_action
      // visit_report
      // visit_epg
      // visit_increase
      // visit_hot
      // visit_audit
      // visit_search
      // visit_control
      // visit_screen
      // visit_lookscreen
      // visit_upload
      authorizationChoose: [],
      dialogFormVisible3: false,
      dialogFormVisible5: false,
      submitType: "add", // add - 添加 ， update - 修改
      user_dialog_info: "添加用户",
      current_choose_index: null, // 当前选中id - 用户信息修改/用户权限修改
      ifEmailDisabled: false, // 邮箱input是否能用 （add用户 - true ， update - false）
      m_data: null
    };
  },
  mounted() {
    // 获取所有用户信息
    this.get_allusersinfo();
  },
  methods: {
    passwordinfo(event) {
      // console.log(event);
    },
    // 权限处理
    authorityManage(index) {
      // 获取权限by_id
      let vm = this;
      vm.current_choose_index = index;
      let token = vm.$commonTools.getCookie("user_token");
      let newToken = token.replace('"', "").replace('"', "");
      let user = String(vm.m_data[index].id);
      get_user_permissions_byid(newToken, user)
        .then(function (response) {
          // console.log(response);
          let m_res_data = response.data.data;
          let length = m_res_data.length;
          let i;
          let temp = [];
          for (i = 0; i < length; i++) {
            temp.push(m_res_data[i].id);
          }
          let temp_authorizationChoose = [];
          if (temp.indexOf(1) > -1) {
            temp_authorizationChoose.push("数据总览");
          }
          if (temp.indexOf(2) > -1) {
            temp_authorizationChoose.push("用户生命周期");
          }
          if (temp.indexOf(3) > -1) {
            temp_authorizationChoose.push("用户收视行为");
          }
          if (temp.indexOf(4) > -1) {
            temp_authorizationChoose.push("定期报告");
          }
          if (temp.indexOf(5) > -1) {
            temp_authorizationChoose.push("EPG");
          }
          if (temp.indexOf(6) > -1) {
            temp_authorizationChoose.push("增值业务");
          }
          if (temp.indexOf(7) > -1) {
            temp_authorizationChoose.push("热点监控");
          }
          if (temp.indexOf(8) > -1) {
            temp_authorizationChoose.push("数据审计");
          }
          if (temp.indexOf(9) > -1) {
            temp_authorizationChoose.push("节目搜索");
          }
          if (temp.indexOf(10) > -1) {
            temp_authorizationChoose.push("权限管理");
          }
          if (temp.indexOf(11) > -1) {
            temp_authorizationChoose.push("大屏管理");
          }
          if (temp.indexOf(12) > -1) {
            temp_authorizationChoose.push("大屏查看");
          }
          if (temp.indexOf(13) > -1) {
            temp_authorizationChoose.push("文件上传");
          }
          vm.authorizationChoose = temp_authorizationChoose;
          // vm.$store.dispatch("get_current_authority").then(function(response) {
          //   console.log("~~~~~get_current_authority");
          //   console.log(response);
          //   vm.authorizationChoose = response;
          // });
        })
        .catch(function (error) {
          console.info(error);
        });
      this.dialogFormVisible3 = true;
    },
    // 权限确定
    authoritySubmit(index) {
      // console.log("post_users_permissions");
      let vm = this;
      let token = vm.$commonTools.getCookie("user_token");
      let newToken = token.replace('"', "").replace('"', "");
      let temp_format_options = [];
      let temp_authorizationChoose = vm.authorizationChoose;
      if (temp_authorizationChoose.indexOf("数据总览") > -1) {
        temp_format_options.push("visit_data");
      }
      if (temp_authorizationChoose.indexOf("用户生命周期") > -1) {
        temp_format_options.push("visit_life");
      }
      if (temp_authorizationChoose.indexOf("用户收视行为") > -1) {
        temp_format_options.push("visit_action");
      }
      if (temp_authorizationChoose.indexOf("定期报告") > -1) {
        temp_format_options.push("visit_report");
      }
      if (temp_authorizationChoose.indexOf("EPG") > -1) {
        temp_format_options.push("visit_epg");
      }
      if (temp_authorizationChoose.indexOf("增值业务") > -1) {
        temp_format_options.push("visit_increase");
      }
      if (temp_authorizationChoose.indexOf("热点监控") > -1) {
        temp_format_options.push("visit_hot");
      }
      if (temp_authorizationChoose.indexOf("数据审计") > -1) {
        temp_format_options.push("visit_audit");
      }
      if (temp_authorizationChoose.indexOf("节目搜索") > -1) {
        temp_format_options.push("visit_search");
      }
      if (temp_authorizationChoose.indexOf("权限管理") > -1) {
        temp_format_options.push("visit_control");
      }
      if (temp_authorizationChoose.indexOf("大屏管理") > -1) {
        temp_format_options.push("visit_screen");
      }
      if (temp_authorizationChoose.indexOf("大屏查看") > -1) {
        temp_format_options.push("visit_lookscreen");
      }
      if (temp_authorizationChoose.indexOf("文件上传") > -1) {
        temp_format_options.push("visit_upload");
      }
      let temp = {
        // permissions: String(["visit_data,visit_life"])
        // permissions: String(["visit_life", "visit_action"])
        permissions: String(temp_format_options)
      };

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("permissions", temp.permissions);
      // let user = this.$commonTools.getCookieCry("user");
      // let user = "1";
      let user = String(vm.m_data[vm.current_choose_index].id);
      post_users_permissions(newToken, user, formData)
        .then(function (response) {
          // console.log(response);
          // 获取所有用户信息
          // vm.get_allusersinfo();
          // window.location.href = "/backhome/authoritymanagement";
          // 重新获取当前登录账户权限 - 使刷新
          setTimeout(function () {
            // 权限判定
            let token = vm.$commonTools.getCookie("user_token");
            let newToken = token.replace('"', "").replace('"', "");
            get_user_permissions(newToken)
              .then(function (response) {
                // console.log(response);
                // console.log("~~~~获取权限成功！2222");
                let m_res_data = response.data.data;
                let length = m_res_data.length;
                let i;
                let temp = [];
                for (i = 0; i < length; i++) {
                  temp.push(m_res_data[i].id);
                }
                let temp_authorizationChoose = [];
                temp_authorizationChoose = temp;
                vm.$store
                  .dispatch("set_current_authority", temp_authorizationChoose)
                  .then(function (response) {
                    // console.log(response);
                    // console.log(temp_authorizationChoose);
                    // 跳转-后台主页面
                    // vm.$router.push({ path: "/backhome" });
                  })
                  .catch(function (error) {
                    console.info(error);
                  });
              })
              .catch(function (error) {
                console.info(error);
              });
          }, 300);
        })
        .catch(function (error) {
          console.info(error);
        });
      this.dialogFormVisible3 = false;
    },
    // 获取所有用户信息
    get_allusersinfo() {
      // console.log("get_allusersinfo");
      let vm = this;
      vm.form.row = [];
      let token = vm.$commonTools.getCookie("user_token");
      let newToken = token.replace('"', "").replace('"', "");
      get_allusersinfo(newToken)
        .then(function (response) {
          // console.log(response);
          let m_data = response.data.data;
          vm.m_data = m_data;
          let length = m_data.length;
          let i;
          let temp;
          for (i = 0; i < length; i++) {
            temp = {
              serialNumber: m_data[i].id,
              userName: m_data[i].name,
              email: m_data[i].email,
              department: m_data[i].department,
              ReportingManager: m_data[i].reporter,
              jobRole: m_data[i].role,
              password: ""
            };
            vm.form.row.push(temp);
          }
        })
        .catch(function (error) {
          console.info(error);
        });
    },
    authorizationChoose_change(event) {
      // console.log(event);
    },
    ifDeleteUser(index) {
      let vm = this;
      vm.current_choose_index = index;
      this.dialogFormVisible5 = true;
    },
    del_user() {
      // console.log("del_user");
      let vm = this;
      let index = vm.current_choose_index;
      let token = vm.$commonTools.getCookie("user_token");
      let newToken = token.replace('"', "").replace('"', "");
      // let user = "3";
      let user = String(vm.m_data[index].id);
      del_user(newToken, user)
        .then(function (response) {
          // console.log(response);
          // 获取所有用户信息
          vm.get_allusersinfo();
          vm.dialogFormVisible5 = false;
        })
        .catch(function (error) {
          console.info(error);
        });
    },
    add_user() {
      this.m_form = {};
      this.submitType = "add";
      this.ifEmailDisabled = false;
      this.user_dialog_info = "添加用户";
      this.dialogFormVisible = true;
    },
    change_user(index) {
      let vm = this;
      vm.current_choose_index = index;

      let temp = {
        userName: this.form.row[index].userName,
        email: this.form.row[index].email,
        department: this.form.row[index].department,
        ReportingManager: this.form.row[index].ReportingManager,
        jobRole: this.form.row[index].jobRole,
        password: this.form.row[index].password
      };
      this.m_form = temp;
      this.submitType = "change";
      this.ifEmailDisabled = true;
      this.user_dialog_info = "用户更新";
      this.dialogFormVisible = true;
    },
    userinfo_submit() {
      if (this.submitType == "add") {
        // console.log("add");
        let name = this.m_form.userName
        let email = this.m_form.email
        let department = this.m_form.department
        let reporter = this.m_form.ReportingManager
        let role = this.m_form.jobRole
        let password = this.m_form.password
        // console.log(name, name, department, reporter, role, password)
        if (name == undefined || name == undefined || department == undefined || reporter == undefined || role == undefined) {
          this.noticeMessage = '请填写完整用户信息'
          setTimeout(() => {
            this.noticeMessage = ''
          }, 3000)
        } else if (password.length < 6) {
          this.noticeMessage = '请输入6位数以上的密码'
          setTimeout(() => {
            this.noticeMessage = ''
          }, 3000)
        }
        else {
          this.noticeMessage = ''
          this.create_users()
        }
      }
      if (this.submitType == "change") {
        // console.log("change");
        this.update_users();
      }
    },
    update_users() {
      // console.log("update_users");
      let vm = this;
      let token = vm.$commonTools.getCookie("user_token");
      let newToken = token.replace('"', "").replace('"', "");
      // let user = "2";
      let user = String(vm.m_data[vm.current_choose_index].id);
      // console.log("~~~~~:id:" + user);
      let temp = {
        name: vm.m_form.userName,
        // email: vm.m_form.email,
        department: vm.m_form.department,
        reporter: vm.m_form.ReportingManager,
        role: vm.m_form.jobRole,
        password: vm.m_form.password
      };
      // console.log("~~~~~~~temp：");
      // console.log(temp);
      if (vm.m_form.password < 6) {
        this.noticeMessage = '请输入6位数以上的密码'
        setTimeout(() => {
          this.noticeMessage = ''
        }, 3000)
      } else {
        update_users(newToken, user, temp)
          .then(function (response) {
            // console.log(response);
            // 获取所有用户信息
            vm.get_allusersinfo();
            vm.dialogFormVisible = false;
          })
          .catch(function (error) {
            console.info(error);
          });
      }
    },
    // 判断字符串状态
    determineString(m_string) {
      if (
        m_string == null ||
        m_string == undefined ||
        m_string == "" ||
        m_string == " " ||
        m_string == "  "
      ) {
        return "none";
      }
    },
    create_users() {
      // console.log("create_users");
      let vm = this;
      let token = vm.$commonTools.getCookie("user_token");
      let newToken = token.replace('"', "").replace('"', "");

      // let temp = {
      //   name: "ttt2",
      //   email: "ttt2@ttt.com",
      //   password: "123456",
      //   department: "技术部",
      //   reporter: "yyy",
      //   role: "数据分析师"
      // };
      if (vm.determineString(vm.m_form.userName) == "none") {
        return false;
      }
      if (vm.determineString(vm.m_form.email) == "none") {
        return false;
      }
      if (vm.determineString(vm.m_form.department) == "none") {
        return false;
      }
      if (vm.determineString(vm.m_form.ReportingManager) == "none") {
        return false;
      }
      if (vm.determineString(vm.m_form.jobRole) == "none") {
        return false;
      }
      if (vm.determineString(vm.m_form.password) == "none") {
        return false;
      }

      let temp = {
        name: vm.m_form.userName,
        email: vm.m_form.email,
        department: vm.m_form.department,
        reporter: vm.m_form.ReportingManager,
        role: vm.m_form.jobRole,
        password: vm.m_form.password
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
        .then(function (response) {
          // console.log(response);
          // 获取所有用户信息
          vm.get_allusersinfo();
          vm.dialogFormVisible = false;
          return true;
        })
        .catch(function (error) {
          console.info(error);
        });
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
  height: 40px;
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
  line-height: 40px;
  font-size: 14px;
  font-family: PingFangSC;
  font-weight: 400;
  color: #909399;
}
.form_btn1,
.form_btn2,
.form_btn3 {
  padding: 6px 10px;
  font-size: 13px;
  border-radius: 4px;
  color: rgba(255, 255, 255, 1);
}
.form_btn1 {
  background: rgba(126, 205, 244, 1);
}
.form_btn2 {
  background: rgba(121, 171, 252, 1);
}
.form_btn3 {
  background: rgba(255, 136, 89, 1);
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
.del_info {
  font-size: 16px;
  color: red;
}
.notice_info {
  width: 100%;
  height: 20px;
  color: red;
}
</style>

<style>
.el-dialog {
  width: 500px !important;
}
.el-dialog__body .el-input {
  width: 260px !important;
}
.el-button--primary {
  color: #fff;
  background-color: #ff6123 !important;
  border-color: #ff6123 !important;
}
.el-dialog__header {
  padding: 0px !important;
}
.el-dialog__body .el-textarea {
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
  width: 140px !important;
}
.el-form-item__content .el-input {
  margin-left: -80px !important;
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
.el-dialog .el-dialog__body {
  padding: 30px 20px 0px 20px !important;
}
</style>
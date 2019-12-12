<template>
  <div class="upload_files">
    <el-row>
      <el-row class="model_title">
        <span class="title_border_left"></span>文件上传
      </el-row>
      <el-row class="upload_row" type="flex" justify="space-around">
        <el-col :span="6" class="upload_col">
          <el-row>VIP转免时间统计</el-row>
          <el-row class="upload_button">
            <span class="upload_click">+</span>
            <input type="file" class="file_input" @change="fileUpload($event)" />
            <!-- <input type="file" class="file_input" accept=".csv" @change="fileUpload($event)" />  此处设置了上传格式为 .csv-->
          </el-row>
          <el-row class="show_files_row">
            <span
              class="show_files_name"
              v-show="dataMatchingFile1 != null"
            >已选择文件：{{dataMatchingFile1}}</span>
          </el-row>
        </el-col>
        <el-col :span="6" class="upload_col">
          <el-row>产品内容绑定关系表</el-row>
          <el-row class="upload_button">
            <span class="upload_click">+</span>
            <input type="file" class="file_input" @change="fileUpload2($event)" />
          </el-row>
          <el-row class="show_files_row">
            <span
              class="show_files_name"
              v-show="dataMatchingFile2 != null"
            >已选择文件：{{dataMatchingFile2}}</span>
          </el-row>
        </el-col>
        <el-col :span="6" class="upload_col">
          <el-row>微博热搜上传</el-row>
          <el-row class="upload_button">
            <span class="upload_click">+</span>
            <input type="file" class="file_input" @change="fileUpload3($event)" />
          </el-row>
          <el-row class="show_files_row">
            <span
              class="show_files_name"
              v-show="dataMatchingFile3 != null"
            >已选择文件：{{dataMatchingFile3}}</span>
          </el-row>
        </el-col>
      </el-row>
      <el-row class="notice_row">
        <span>
          <br />1、确保文件格式为.csv
          <br />2、文件里的字段名正确
          <br />3、数据上传前需要做好人工审查
          <br />4、工作日18:00前完成上传
          <br />5、上传文件不超过200mb

        </span>
      </el-row>
    </el-row>
    <uf-form-model :type="1" :m_title="m_title1" :refreshCount="refreshCount"></uf-form-model>
    <uf-form-model :type="2" :m_title="m_title2" :refreshCount="refreshCount"></uf-form-model>
  </div>
</template>
<script>
import { csv_program_free, csv_program, csv_weibo } from "@/api/api_main";
import uf_form_model from "@/views/backviews/uf_form_model";

export default {
  name: "uploadFiles",
  data() {
    return {
      m_title1: "VIP转免时间统计（删除）",
      m_title2: "产品内容绑定关系表（删除）",
      alertShow: false, //文字提示
      alertTitle: "", //提示文字
      alertType: "", //提示类型
      dataMatchingFile1: null,
      dataMatchingFile2: null,
      dataMatchingFile3: null,
      refreshCount:0 // 添加上传(转免、非转免)时候 重新请求数据
    };
  },
  components: {
    "uf-form-model": uf_form_model
  },
  methods: {
    // ///////////////////////////

    //////
    fileUpload(e) {
      let vm = this;
      let file = e.target.files[0];
      let formData = new FormData();
      vm.dataMatchingFile1 = file.name;
      //注：上传成功后清空vm.dataMatchingFile1绑定的文件名称
      formData.append("csv", file);
      // console.log("file---", file)
      if (file) {
        vm.$confirm("确认上传文件?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            csv_program_free(formData)
              .then(function(response) {
                // console.log(response);
                vm.showAlert("上传成功！", "success");
                vm.dataMatchingFile1 = null;
                vm.refreshCount++;
              })
              .catch(function(error) {
                console.log(error);
              });
          })
          .catch(() => {
            vm.showAlert("取消上传！", "info");
            vm.dataMatchingFile1 = null;
          });
        // console.log("可以上传文件了！")
      } else {
        console.log("操作取消");
      }
    },
    fileUpload2(e) {
      let vm = this;
      let file = e.target.files[0];
      let formData = new FormData();
      vm.dataMatchingFile2 = file.name;
      //注：上传成功后清空vm.dataMatchingFile2绑定的文件名称
      formData.append("csv", file);
      if (file) {
        vm.$confirm("确认上传文件?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            csv_program(formData)
              .then(function(response) {
                // console.log(response);
                vm.showAlert("上传成功！", "success");
                vm.dataMatchingFile2 = null;
                vm.refreshCount++;
              })
              .catch(function(error) {
                console.log(error);
              });
          })
          .catch(() => {
            vm.showAlert("取消上传！", "info");
            vm.dataMatchingFile2 = null;
          });
        // console.log("可以上传文件了！")
      } else {
        // console.log("操作取消")
      }
    },
    fileUpload3(e) {
      let vm = this;
      let file = e.target.files[0];
      let formData = new FormData();
      vm.dataMatchingFile3 = file.name;
      //注：上传成功后清空vm.dataMatchingFile3绑定的文件名称
      formData.append("csv", file);
      if (file) {
        vm.$confirm("确认上传文件?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            csv_weibo(formData)
              .then(function(response) {
                // console.log(response);
                vm.showAlert("上传成功！", "success");
                vm.dataMatchingFile3 = null;
              })
              .catch(function(error) {
                console.log(error);
              });
          })
          .catch(() => {
            vm.showAlert("取消上传！", "info");
            vm.dataMatchingFile3 = null;
          });
        // console.log("可以上传文件了！")
      } else {
        // console.log("操作取消")
      }
    },

    showAlert(info, type) {
      let vm = this;
      vm.alertShow = true;
      vm.alertTitle = info;
      vm.alertType = type;
      setTimeout(() => {
        vm.alertShow = false;
        vm.alertTitle = "";
        vm.alertType = "";
      }, 2000);
    }
  }
};
</script>
<style >
.upload_files {
  width: 100%;
  height: calc(100% - 60px);
  background: #fff;
  color: #333;
  overflow-y: scroll;
}
.upload_files .upload_row {
  font-size: 16px;
  height: 250px;
  margin: 20px;
}
.upload_files .upload_col {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  text-align: center;
  border: 1px solid #f0f0f0;
  -moz-box-shadow: 0px 0px 7px #f0f0f0;
  -webkit-box-shadow: 0px 7px 5px #f0f0f0;
  box-shadow: 0px 0px 7px #f0f0f0;
}
.upload_row .upload_button {
  position: relative;
  margin-top: 10px;
}
.upload_row .upload_click {
  display: block;
  width: 105px;
  height: 30px;
  background: #f18257;
  color: #fff;
  text-align: center;
  line-height: 30px;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 3px;
}
.upload_row .file_input {
  width: 105px;
  height: 30px;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 1;
  -moz-opacity: 0;
  -ms-opacity: 0;
  -webkit-opacity: 0;
  opacity: 0;
  filter: alpha(opacity=0);
  cursor: pointer;
}
.notice_row {
  margin-top: 20px;
  text-align: left;
  margin-left: 70px;
  font-size: 15px;
  line-height: 30px;
}
.show_files_row {
  height: 20px;
  margin-top: 5px;
  color: #666;
}
.alert_div {
  position: absolute;
  height: 20px;
  line-height: 20px;
  top: 90px;
  left: 50%;
  width: 300px;
  transform: translateX(-50%);
}
</style>
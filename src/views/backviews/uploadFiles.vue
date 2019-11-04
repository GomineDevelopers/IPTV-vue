<template>
  <div class="upload_files">
    <el-row>
      <el-row class="model_title">
        <span class="title_border_left"></span>文件上传
      </el-row>
      <el-row class="upload_row" type="flex" justify="space-around">
        <el-col :span="6" class="upload_col">
          <el-row>转免节目单上传</el-row>
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
          <el-row>节目单上传</el-row>
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
        </span>
      </el-row>
    </el-row>
  </div>
</template>
<script>
import { csv_program_free, csv_program, csv_weibo } from "@/api/api_main";

export default {
  name: "uploadFiles",
  data() {
    return {
      dataMatchingFile1: null,
      dataMatchingFile2: null,
      dataMatchingFile3: null
    };
  },
  methods: {
    fileUpload(e) {
      let vm = this;
      let file = e.target.files[0];
      let formData = new FormData();
      vm.dataMatchingFile1 = file.name;
      //注：上传成功后清空vm.dataMatchingFile1绑定的文件名称
      formData.append("csv", file);
      csv_program_free(formData)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    fileUpload2(e) {
      let vm = this;
      let file = e.target.files[0];
      let formData = new FormData();
      vm.dataMatchingFile2 = file.name;
      //注：上传成功后清空vm.dataMatchingFile2绑定的文件名称
      formData.append("csv", file);
      csv_program(formData)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    fileUpload3(e) {
      let vm = this;
      let file = e.target.files[0];
      let formData = new FormData();
      vm.dataMatchingFile3 = file.name;
      //注：上传成功后清空vm.dataMatchingFile3绑定的文件名称
      formData.append("csv", file);
      csv_weibo(formData)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
.upload_files {
  width: 100%;
  height: calc(100% - 60px);
  background: #fff;
  color: #333;
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
</style>
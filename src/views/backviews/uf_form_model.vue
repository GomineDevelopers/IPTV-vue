<template>
  <div>
    <!-- ///// -->
    <br />
    <br />
    <el-row>
      <el-row class="model_title">
        <span class="title_border_left"></span>
        {{m_title}}
      </el-row>
      <div class="alert_div">
        <el-alert show-icon :title="alertTitle" :type="alertType" effect="dark" v-show="alertShow"></el-alert>
      </div>
      <div id="test">
        <!-- <div id="top">
          <span style="float:right;">
            <el-button type="text" @click="add" style="color:white">添加</el-button>
            <el-button type="text" @click="deletenames" style="color:white">批量删除</el-button>
          </span>
        </div>-->

        <el-row class="m_form">
          <div style="margin-top:15px">
            <!-- <el-input placeholder="请输入内容" v-model="criteria" style="padding-bottom:10px;">
              <el-select v-model="select" slot="prepend" placeholder="请选择">
                <el-option label="id" value="1"></el-option>
                <el-option label="name" value="2"></el-option>
              </el-select>
              <el-button slot="append" icon="search" v-on:click="search"></el-button>
            </el-input>-->

            <el-table
              ref="testTable"
              :data="tableData"
              style="width:100%"
              border
              :default-sort="{prop: 'id', order: 'ascending'}"
              @selection-change="handleSelectionChange"
              @row-click="handleclick"
              :row-class-name="tableRowClassName"
            >
              <!-- <el-table-column type="selection"></el-table-column> -->
              <!-- <el-table-column prop="seriesName" label="seriesName" sortable show-overflow-tooltip></el-table-column>
              <el-table-column prop="seriesCode" label="seriesCode" sortable></el-table-column>
              <el-table-column prop="timestamp" label="上传时间" sortable></el-table-column>-->
              <el-table-column prop="key" label="csvName" sortable></el-table-column>-->
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <!-- <el-button size="small" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
                  <el-button
                    size="small"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <br />

            <div align="center">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="page_sizes"
                :page-size="pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="totalCount"
              ></el-pagination>
            </div>
          </div>
          <br />
        </el-row>
      </div>
    </el-row>
  </div>
</template>


<script>
import {
  uf_program_list,
  uf_del_program,
  uf_freeprogram_list,
  uf_del_freeprogram
} from "@/api/api_main";
export default {
  name: "uploadFiles",
  props: ["type", "m_title", "refreshCount"],
  watch: {
    refreshCount(newValue, oldValue) {
      let vm = this;
      setTimeout(() => {
        vm.loadData(vm.criteria, vm.currentPage, vm.pagesize);
      }, 20000);
    }
  },
  data() {
    return {
      alertShow: false, //文字提示
      alertTitle: "", //提示文字
      alertType: "", //提示类型

      // 分页部分
      //表格当前页数据
      tableData: [],
      //总数据  --- 前端做分页  ---分别处理=》表格当前页数据
      tableData_ALL: [],
      //多选数组
      multipleSelection: [],
      //请求的URL
      // url: "newstu/querystudentbypage",
      //搜索条件
      criteria: "",
      //下拉菜单选项
      select: "",
      //默认高亮行数据id
      highlightId: -1,
      //当前页码
      currentPage: 1,
      //查询的页码
      start: 1,
      //默认数据总数
      totalCount: 1000,
      // 每页个数
      // page_sizes: [10, 20, 30, 40]
      // page_sizes: [20], // 后台每页设置20个
      page_sizes: [20],
      //默认每页数据量
      // pagesize: 20
      pagesize: 20

      //   m_title: "节目单删除"
    };
  },

  mounted() {
    let vm = this;
    // console.log(vm.type);
    this.loadData(this.criteria, this.currentPage, this.pagesize);

    // console.log(vm.m_title);
  },
  methods: {
    loadData: function(criteria, pageNum, pageSize) {
      let vm = this;

      // let from = 0; // 第1页 0~19  第2页 20~39   第3页 40~59
      // from = (pageNum - 1) * 20;
      // console.log(pageNum);
      // console.log(from);
      if (vm.type == 2) {
        setTimeout(function() {
          // uf_program_list(from)
          // uf_program_list()
          uf_program_list()
            .then(function(response) {
              // console.log(response);
              // let hits = response.data.responses[0].hits;
              // vm.totalCount = hits.total.value;
              // let temp_tableData = [];
              // for (let i = 0; i < hits.hits.length; i++) {
              //   let _source = hits.hits[i]._source;
              //   temp_tableData.push({
              //     _id: hits.hits[i]._id, // 用于删除
              //     seriesName: _source.seriesName, // 显示顺序1 翻译：seriesName
              //     seriesCode: _source.seriesCode, // 显示顺序2 翻译：seriesCode
              //     timestamp: _source.timestamp // 显示顺序3 翻译：timestamp
              //   });
              // }
              // vm.tableData = temp_tableData;
              // console.log("★★★★");
              // console.log(vm.tableData);
              let temp_tableData_ALL = [];
              let buckets =
                response.data.responses[0].aggregations.csvName.buckets;
              for (let i = 0; i < buckets.length; i++) {
                temp_tableData_ALL.push({
                  key: buckets[i].key // 用于删除
                });
              }

              vm.tableData_ALL = temp_tableData_ALL;
              // console.log(temp_tableData_ALL);
              vm.manageCurrentPageData(pageNum, pageSize);
              vm.totalCount = temp_tableData_ALL.length; //设置总数
            })
            .catch(function(error) {
              console.log(error);
            });
        }, 1000);
      }

      if (vm.type == 1) {
        setTimeout(function() {
          uf_freeprogram_list()
            .then(function(response) {
              // console.log(response);
              let temp_tableData_ALL = [];
              let buckets =
                response.data.responses[0].aggregations.csvName.buckets;
              for (let i = 0; i < buckets.length; i++) {
                temp_tableData_ALL.push({
                  key: buckets[i].key // 用于删除
                });
              }

              vm.tableData_ALL = temp_tableData_ALL;
              // console.log(temp_tableData_ALL);
              vm.manageCurrentPageData(pageNum, pageSize);
              vm.totalCount = temp_tableData_ALL.length; //设置总数
            })
            .catch(function(error) {
              console.log(error);
            });
        }, 1000);
      }

      // this.tableData = [
      //   {
      //     id: 1,
      //     name: "xx",
      //     other1: "ok",
      //     other2: "ok",
      //     other3: "ok"
      //   },
      //   {
      //     id: 2,
      //     name: "xxx",
      //     other1: "ok",
      //     other2: "ok",
      //     other3: "ok"
      //   }
      // ];
      // this.totalCount = 500;
    },
    manageCurrentPageData(pageNum, pageSize) {
      // 处理当前页
      // pageNum    --当前页
      // pageSize   --每页数量
      // 当前4个  每页2个 两页
      let vm = this;
      let temp_tableData = [];
      let currentRange_min = 0; // 序数
      let currentRange_max = 0; // 序数
      // 1 =》 0 1   2 =》 2 3
      currentRange_min = (pageNum - 1) * pageSize + 0;
      currentRange_max = (pageNum - 1) * pageSize + pageSize - 1;
      for (let k = 0; k < vm.tableData_ALL.length; k++) {
        if (k >= currentRange_min && k <= currentRange_max) {
          temp_tableData.push(vm.tableData_ALL[k]);
        }
      }
      vm.tableData = temp_tableData;
    },

    handleSelectionChange: function(val) {
      this.multipleSelection = val;
    },

    //点击行响应
    handleclick: function(row, event, column) {
      this.highlightId = row.id;
    },

    //单行删除
    handleDelete: function(index, row) {
      let vm = this;
      var array = [];
      // array.push(row.id);
      // console.log(row);
      // let id = row._id;
      let id = row.key;
      // console.log(id);
      // return;
      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("name", id);

      vm.$confirm("确认删除当前内容?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          if (vm.type == 2) {
            // uf_del_program(id) // 删除
            uf_del_program(formData) // 删除
              .then(function(response) {
                // console.log(response);
                // console.log("删除成功");
                setTimeout(() => {
                  vm.loadData(vm.criteria, vm.currentPage, vm.pagesize);
                }, 500);
              })
              .catch(function(error) {
                console.log(error);
              });
          }
          if (vm.type == 1) {
            // uf_del_freeprogram(id) // 删除
            uf_del_freeprogram(formData) // 删除
              .then(function(response) {
                // console.log(response);
                // console.log("删除成功");
                setTimeout(() => {
                  vm.loadData(vm.criteria, vm.currentPage, vm.pagesize);
                }, 500);
              })
              .catch(function(error) {
                console.log(error);
              });
          }
        })
        .catch(() => {
          vm.showAlert("取消删除！", "info");
        });

      // this.$http
      //   .post("newstu/delete", { array: array }, { emulateJSON: true })
      //   .then(
      //     function(res) {
      //       this.loadData(this.criteria, this.currentPage, this.pagesize);
      //     },
      //     function() {
      //       console.log("failed");
      //     }
      //   );
    },

    //页码变更
    handleCurrentChange: function(val) {
      this.currentPage = val;
      // this.loadData(this.criteria, this.currentPage, this.pagesize);
      this.manageCurrentPageData(this.currentPage, this.pagesize);
    },

    // /////////////////////////// 暂时没用到

    //从服务器读取数据
    // loadData: function(criteria, pageNum, pageSize) {
    //   this.$http
    //     .get(this.url, {
    //       parameter: criteria,
    //       pageNum: pageNum,
    //       pageSize: pageSize
    //     })
    //     .then(
    //       function(res) {
    //         this.tableData = res.data.pagestudentdata;
    //         this.totalCount = res.data.number;
    //       },
    //       function() {
    //         console.log("failed");
    //       }
    //     );
    //多选响应
    //编辑
    // handleEdit: function(index, row) {
    //   this.$prompt("请输入新名称", "提示", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消"
    //   })
    //     .then(({ value }) => {
    //       if (value == "" || value == null) return;
    //       this.$http
    //         .post(
    //           "newstu/update",
    //           { id: row.id, name: value },
    //           { emulateJSON: true }
    //         )
    //         .then(
    //           function(res) {
    //             this.loadData(this.criteria, this.currentPage, this.pagesize);
    //           },
    //           function() {
    //             console.log("failed");
    //           }
    //         );
    //     })
    //     .catch(() => {});
    // },

    //搜索
    search: function() {
      this.loadData(this.criteria, this.currentPage, this.pagesize);
    },

    //添加
    add: function() {
      this.$prompt("请输入名称", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          if (value == "" || value == null) return;
          this.$http
            .post("newstu/add", { name: value }, { emulateJSON: true })
            .then(
              function(res) {
                this.loadData(this.criteria, this.currentPage, this.pagesize);
              },
              function() {
                console.log("failed");
              }
            );
        })
        .catch(() => {});
    },

    //多项删除
    deletenames: function() {
      if (this.multipleSelection.length == 0) return;
      var array = [];
      this.multipleSelection.forEach(item => {
        array.push(item.id);
      });
      this.$http
        .post("newstu/delete", { array: array }, { emulateJSON: true })
        .then(
          function(res) {
            this.loadData(this.criteria, this.currentPage, this.pagesize);
          },
          function() {
            console.log("failed");
          }
        );
    },

    //改变当前点击的行的class，高亮当前行
    tableRowClassName: function(row, index) {
      if (row.id == this.highlightId) {
        return "info-row";
      }
    },

    //每页显示数据量变更
    handleSizeChange: function(val) {
      this.pagesize = val;
      this.loadData(this.criteria, this.currentPage, this.pagesize);
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

<style scoped>
.m_form {
  width: 60%;
  margin-left: 20%;
  margin-right: 20%;
}

/* .el-table,
.el-table .cell {
  text-align: center !important;
} */

th.el-table_1_column_1 {
  width: 60%;
}
th.el-table_1_column_2 {
  width: 50%;
}
</style>
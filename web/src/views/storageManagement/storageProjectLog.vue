<!--
 * @Author: renlei
 * @Date: 2020-05-19 18:10:03
 * @LastEditors: renlei
 * @LastEditTime: 2020-06-04 17:11:32
 * @Description:个人日志存储空间
-->
<template>
  <div class="storage-detail">
    <div style="padding:10px 0;">
      <!--   <div class="v-line">
        <span class="primary-color">{{
          $t("views.storageManagement.detail.baseInfo")
        }}</span>
      </div> -->
      <div class="clear-float" style="padding:10px 0;">
        <!--  <div class="base-info-v">
          <div>
            <span>{{ $t("views.storageManagement.storage.spaceName") }}：</span>
            <p class="text-ellipsis" :title="baseinfo.name">
              {{ baseinfo.php_name }}
            </p>
          </div>
          <div>
            <span>{{ $t("views.storageManagement.detail.createTime") }}</span>
            <p>{{ baseinfo.created_at }}</p>
          </div>
          <div v-if="baseinfo.porject_name">
            <span
              >{{ $t("views.storageManagement.storage.belongSpace") }}：</span
            >
            <p>{{ baseinfo.porject_name }}</p>
          </div>
          <div>
            <span>{{ $t("views.storageManagement.detail.user") }}</span>
            <p>{{ baseinfo.user }}</p>
            <a @click="showSpaceDesc">{{
              $t("views.storageManagement.detail.description")
            }}</a>
          </div>
        </div> -->
        <div class="num-space bg-blue">
          <i class="iconfont icon-duixiangliebiao-n"></i>
          <div class="text-desc">
            <p>{{ $t("views.storageManagement.detail.objectNum") }}</p>
            <p>
              <span>{{ baseinfo.numsdb || 0 }}</span
              >个
            </p>
          </div>
        </div>
        <div class="num-space bg-yellow">
          <i class="iconfont icon-cunchu" style="font-size: 60px;"></i>
          <div class="text-desc">
            <p>{{ $t("views.storageManagement.detail.sizeStorage") }}</p>
            <p>
              <span>{{ baseinfo.sizedb }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="app-container">
      <div class="v-line">
        <span class="primary-color">{{
          $t("views.storageManagement.fileManagement.title")
        }}</span>
      </div>
      <div class="options">
        <div class="search">
          <span>{{
            $t("views.storageManagement.fileManagement.tableFileList.thName")
          }}</span>
          <el-input size="small" v-model="objParams.name"></el-input>
          <!-- 重置 -->
          <el-button
            class="views-btn-query"
            size="small"
            @click="resetNameBtn"
            >{{ $t("views.button.reset") }}</el-button
          >
          <!-- 查询 -->
          <el-button
            class="views-btn-query"
            @click="searchNameBtn"
            size="small"
            >{{ $t("views.button.search") }}</el-button
          >
        </div>
        <div class="btn-group" v-if="showBtn">
          <el-button class="dark mid btn" @click="batchDeleteId" size="small">{{
            $t("views.button.batchDelete")
          }}</el-button>
        </div>
      </div>
      <sedu-path-breadcrumb
        ref="seduPathBreadcrumb"
        style="font-size:13px;"
        matchKeyName="id"
        :backLabel="
          $t(
            'views.storageManagement.fileManagement.seduPathBreadcrumb.backLabel'
          )
        "
        :allFileLabel="
          $t(
            'views.storageManagement.fileManagement.seduPathBreadcrumb.allFileLabel'
          )
        "
        :callBack="getBackFileList"
      />
      <el-table
        class="tab-content"
        :data="tableData"
        style="margin-top:10px;"
        ref="multipleTable"
        @selection-change="selectChange"
        v-loading="listLoading"
        :default-sort="{ prop: 'date', order: 'descending' }"
        border
      >
        <el-table-column type="selection" width="55" align="center">
        </el-table-column>
        <el-table-column
          :label="
            $t('views.storageManagement.fileManagement.tableFileList.thName')
          "
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <div v-if="scope.row.pseudo === 'true'">
              <i
                class="iconfont icon-wenjianjia"
                style="color:#417dd0;"
              />&nbsp;
              <a href="javascript:void(0)" @click="updateTable(scope.row)">
                <span>{{ scope.row.name }}</span>
              </a>
            </div>
            <div v-else>
              <i class="el-icon-document" />&nbsp;
              <span>{{ scope.row.name }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="
            $t('views.storageManagement.fileManagement.tableFileList.thSize')
          "
        >
          <template slot-scope="scope">
            {{
              scope.row.size != 0 ? numberFormatter(scope.row.size, 2) : "--"
            }}
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="
            $t(
              'views.storageManagement.fileManagement.tableFileList.thEncipher'
            )
          "
        >
          <template slot-scope="scope">
            <el-tag
              v-if="scope.row.pin === 'encrypt'"
              type="success"
              size="small"
              >加密</el-tag
            >
            <el-tag v-if="scope.row.pin === 'decrypt'" type="info" size="small"
              >不加密</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="
            $t('views.storageManagement.fileManagement.tableFileList.thAction')
          "
        >
          <template slot-scope="scope">
            <button
              class="btn"
              v-if="scope.row.pseudo === 'false'"
              @click="downloadFile(scope.row)"
            >
              {{
                $t(
                  "views.storageManagement.fileManagement.tableFileList.btnEdit"
                )
              }}
            </button>
            <span v-if="scope.row.pseudo === 'false' && !showBtn">--</span>
            <button class="del" v-if="showBtn" @click="deleteFile(scope.row)">
              {{ $t("views.button.delete") }}
            </button>
          </template>
        </el-table-column>
        <div slot="empty">
          <div class="views-empty">
            <span class="views-empty-table"></span>
            <p class="views-empty-text">{{ $t("views.table.noData") }}</p>
          </div>
        </div>
      </el-table>
      <el-pagination
        layout="prev, pager, next"
        class="tab-page"
        :page-size="pageSize"
        :current-page.sync="Pagination.page"
        @current-change="pageChange"
        :total="Pagination.total_count"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "storageLog",
  components: {},
  data() {
    return {
      listLoading: false,
      showBtn: true,
      fileKeyArr: [],
      tableData: [],
      objParams: {
        storage_id: "",
        name: "",
        page: 1,
        path: ""
      },
      pageSize: 10,
      Pagination: {
        page: 1,
        total_count: 0
      },
      baseinfo: {
        sizedb: "",
        numsdb: ""
      }
    };
  },
  mounted() {
    this.$refs.seduPathBreadcrumb.addPath({ id: 0 });
  },
  methods: {
    // 获取数据信息
    getTableInf(params) {
      this.listLoading = true;
      this.$get("/storage/dirinfo", params).then(res => {
        this.listLoading = false;
        if (res.code === 200) {
          // console.log(JSON.stringify(res));
          this.tableData = res.data.list;
          this.Pagination.currage = res.data.currPage;
          this.Pagination.total_count = res.data.total_count;
          this.baseinfo.sizedb = res.data.summary.total_size;
          this.baseinfo.numsdb =
            parseInt(res.data.summary.directory_num) +
            parseInt(res.data.summary.files_number);
          // console.log(this.baseinfo.numsdb);
        } else {
          this.$message({ message: res.message, type: "error" });
        }
      });
    },
    // 返回上一级文件
    getBackFileList(obj) {
      console.log(obj);
      this.objParams.path = obj.rawname || "";
      this.objParams.page = 1;
      this.getTableInf(this.objParams);
    },
    // 重置
    resetNameBtn() {
      this.objParams.name = "";
      this.objParams.page = 1;
      this.getTableInf(this.objParams);
    },
    // 查询
    searchNameBtn() {
      this.objParams.page = 1;
      this.getTableInf(this.objParams);
    },
    deleteFile(rows) {
      console.log(rows);
      const params = {
        username: rows.username,
        passwd: rows.passwd,
        filePath: rows.rawname
      };
      this.fileKeyArr.push(params);
      this.handleDeleteFile(this.fileKeyArr);
    },
    // 批量删除
    batchDeleteId() {
      //  console.log(this.fileKeyArr);
      if (this.fileKeyArr.length > 0) {
        this.handleDeleteFile(this.fileKeyArr);
      } else {
        this.$message({
          message: this.$t("views.dialogText.selectNull"),
          type: "warning"
        });
      }
    },
    handleDeleteFile(arr) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          console.log(arr);
          const params = {
            delete_data: arr
          };
          this.$post("/storage/deletefile", params).then(res => {
            if (res.code === 200) {
              this.$message({ message: res.message, type: "success" });
              this.fileKeyArr = [];
              this.objParams.page = 1;
              this.getTableInf(this.objParams);
            } else {
              this.$message({ message: res.message, type: "error" });
            }
          });
        })
        .catch(() => {
          this.fileKeyArr = [];
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 上一层更新表格
    updateTable(obj) {
      console.log(obj);
      if (!obj) return false;
      //   this.targetPath = obj
      this.$refs.seduPathBreadcrumb.addPath(obj);
      this.objParams.path = obj.rawname;
      this.objParams.page = 1;
      this.getTableInf(this.objParams);
    },
    // 选中事件
    selectChange(rows) {
      // console.log(rows);
      this.fileKeyArr = [];
      for (let i = 0; i < rows.length; i++) {
        const params = {
          username: rows[i].username,
          passwd: rows[i].passwd,
          filePath: rows[i].rawname
        };

        this.fileKeyArr.push(params);
      }
    },
    // 分页点击事件
    pageChange(page) {
      this.objParams.page = page;
      this.getTableInf(this.objParams);
      console.log(page);
      // this.getFileList(false, 0);
    },
    // post原生
    downloadFile(row) {
      let xhr;
      const parms = {
        username: row.username,
        passwd: row.passwd,
        filePath: row.rawname
      };
      try {
        xhr = new XMLHttpRequest();
      } catch (e) {
        // eslint-disable-next-line no-undef
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }
      // 2.调用open方法（true----异步）
      xhr.open(
        "post",
        window.Simple.pingTai + "/filestorage/file/download",
        true
      );
      // 3.发送数据
      xhr.setRequestHeader(
        "authorization",
        "Bearer " + JSON.parse(sessionStorage.getItem("userinfo")).access_token
      );
      xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
      xhr.responseType = "blob";
      xhr.send(
        "username=" +
          parms.username +
          "&passwd=" +
          parms.passwd +
          "&filePath=" +
          parms.filePath
      );
      // 4.请求状态改变事件
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            // 文件流保存
            let blob = xhr.response;
            if (navigator.msSaveBlob) {
              navigator.msSaveBlob(blob, row.name);
            } else {
              let link = document.createElement("a");
              link.href = URL.createObjectURL(blob);
              link.download = row.name;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              URL.revokeObjectURL(link.href);
            }
          } else {
            this.$message({
              type: "error",
              message: "网络错误" + xhr.status
            });
          }
        }
      };
    }
  },
  created() {
    console.log(this.$route.query);
    if (this.$route.query) {
      this.objParams.storage_id = this.$route.query.storage_id;
    }
    this.getTableInf(this.objParams);
    // this.$refs.fileManage.kk()
    this.role = JSON.parse(sessionStorage.getItem("userinfo")).role;
    this.baseinfo.sid = this.$route.query.id;
    this.is_init = this.$route.query.is_init;
    // this.getStorageDetail()
  }
};
</script>

/* * @Author: aFei * @Date: 2018-07-10 15:52:29 */ /* * @LastEditors: aFei *
@LastEditTime: 2018-08-21 14:33:55 */
<template>
  <div class="views-system-management-system-setting">
    <el-tabs v-model="parentActiveName" @tab-click="clickSettingTabs">
      <!-- 系统配置设置 -->
      <el-tab-pane
        :label="$t('views.systemManagement.systemConfigurationSettings')"
        name="quotaSetting"
        :lazy="true"
      >
        <quota-setting ref="quota" @setResource="setResource"></quota-setting>
      </el-tab-pane>
      <!-- 系统日志设置 -->
      <el-tab-pane
        :label="$t('views.systemManagement.systemLogSettings')"
        name="logSetting"
        :lazy="true"
      >
        <div class="log-title">
          {{ $t("views.systemManagement.systemLogSettings") }}：{{
            $t("views.systemManagement.systemSetting.p3")
          }}
          <el-select
            v-model="logTimeMsg"
            :placeholder="$t('views.systemManagement.chose')"
          >
            <el-option
              v-for="item in logTime"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          {{ $t("views.systemManagement.systemSetting.p4") }}
          <el-button class="btn dark small" @click="saveLogTime">{{
            $t("views.systemManagement.save")
          }}</el-button>
        </div>
      </el-tab-pane>
      <!-- 系统告警设置 -->
      <el-tab-pane
        :label="$t('views.systemManagement.warnManagementSettings')"
        name="diskManagement"
      >
        <div class="disk-title">
          {{ $t("views.systemManagement.warnManagementSettings") }}：{{
            $t("views.systemManagement.systemSetting.p1")
          }}
          <el-select
            v-model="warnTimeMsg"
            :placeholder="$t('views.systemManagement.chose')"
          >
            <el-option
              v-for="item in logTime"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          {{ $t("views.systemManagement.systemSetting.p2") }}
          <el-button class="btn dark small" @click="saveWarnTime">{{
            $t("views.systemManagement.save")
          }}</el-button>
        </div>
        <warn-management
          ref="warnManage"
          @diskCleaning="diskCleaning"
        ></warn-management>
      </el-tab-pane>
      <!-- 授权设置 -->
      <el-tab-pane
        :label="$t('views.systemManagement.manageAuthorSetting')"
        name="manageAuthorSetting"
      >
        <div class="manageAuthor">
          <div v-if="isAuthor" class="manage-no">
            暂无授权行为
          </div>
          <div v-else class="manage-have">
            <div class="mange-have-inf">
              <div class="mange-have-people-num">{{ authorInf.number }}</div>
              <div>授权人数</div>
            </div>
            <div class="mange-have-inf">
              <div class="mange-have-people-num">{{ authorInf.time }}</div>
              <div>授权剩余时间</div>
            </div>
          </div>
          <div class="author-row">
            <span class="author-label">
              授权码：
            </span>
            <el-input
              placeholder="获取授权码"
              v-model="authorInput"
              :disabled="true"
            >
            </el-input>
            <el-button type="primary" @click="handleGetAuthorCode"
              >点击生成授权码</el-button
            >
            <el-button
              type="primary"
              @click="handleCopy"
              v-clipboard:copy="authorInput"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
              >复制授权码</el-button
            >
          </div>
          <div class="author-upload">
            <span class="author-label">
              导入授权服务器：
            </span>
            <el-upload
              class="upload-demo"
              :action="authorUrl"
              :on-change="handleChange"
              name="authfile"
              :multiple="multiple"
              :accept="accept"
              :on-success="handleAvatarSuccess"
              :headers="myHeaders"
              :show-file-list="showFile"
            >
              <el-button size="small" type="primary">上传</el-button>
              <div slot="tip" class="el-upload__tip">
                只支持 ".so" 的文件上传
              </div>
            </el-upload>
          </div>
          <div class="author-row">
            <span class="author-label"> </span>
            <el-button type="primary" @click="handleSaveauth"
              >点击授权</el-button
            >
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-dialog
      class="diskCleaningPop small"
      :title="$t('views.systemManagement.diskCleaning')"
      :visible.sync="diskCleaningPop"
      width="30%"
    >
      <div class="content">
        {{ $t("views.systemManagement.clean") }}
        <el-date-picker
          v-model="diskCleaningPopMsg.clear_time"
          type="date"
          :placeholder="$t('views.systemManagement.chose')"
        ></el-date-picker>
        {{ $t("views.systemManagement.systemSetting.p12") }}
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button class="cancel" @click="diskCleaningPop = false">{{
          $t("views.systemManagement.cancel")
        }}</el-button>
        <el-button class="primary" type="primary" @click="diskCleaningPopDo">{{
          $t("views.systemManagement.start")
        }}</el-button>
      </span>
    </el-dialog>
    <el-dialog
      class="small"
      @close="handleClose2"
      :title="$t('views.systemManagement.setResourceQuota')"
      :visible.sync="setResourcePop"
      width="50%"
    >
      <div class="content">
        <el-form
          :model="resourceForm"
          :rules="resourceFormRules"
          ref="resourceForm"
          label-width="80px"
        >
          <el-form-item label="CPU" prop="cpu">
            <el-input v-model="resourceForm.cpu"></el-input>
          </el-form-item>
          <el-form-item label="内存" prop="memory">
            <el-input v-model="resourceForm.memory"></el-input>
          </el-form-item>
          <el-form-item label="GPU" prop="gpu">
            <el-input v-model="resourceForm.gpu"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button class="cancel" @click="setResourcePop = false">{{
          $t("views.systemManagement.cancel")
        }}</el-button>
        <el-button class="primary" type="primary" @click="setResourcePopDo">{{
          $t("views.systemManagement.save")
        }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import warnManagement from "./components/warnManagement";
import quotaSetting from "./components/quotaSetting";
export default {
  name: "systemSetting",
  data() {
    var checkCPU = (rule, value, callback) => {
      if (!value) {
        return callback(this.$t("views.validError.notNull"));
      }
      if (this.limitInt(value, 128, this.selectRow.cpu)) {
        callback();
      } else {
        callback(
          new Error(
            this.$t("views.systemManagement.limeNum", {
              mix: this.selectRow.cpu || 1,
              num: 128
            })
          )
        );
      }
    };
    var checkGPU = (rule, value, callback) => {
      if (!value) {
        return callback(this.$t("views.validError.notNull"));
      }
      if (this.limitInt(value, 16, this.selectRow.gpu)) {
        callback();
      } else {
        callback(
          new Error(
            this.$t("views.systemManagement.limeNum", {
              mix: this.selectRow.gpu || 1,
              num: 16
            })
          )
        );
      }
    };
    var checkMemory = (rule, value, callback) => {
      if (!value) {
        return callback(this.$t("views.validError.notNull"));
      }
      if (this.limitInt(value, 256, this.selectRow.memory)) {
        callback();
      } else {
        callback(
          new Error(
            this.$t("views.systemManagement.limeNum", {
              mix: this.selectRow.memory || 1,
              num: 256
            })
          )
        );
      }
    };
    return {
      parentActiveName: "quotaSetting", // 外面当前激活页
      resourceForm: {
        cpu: "",
        gpu: "",
        memory: ""
      },
      authorInf: {
        number: 12312,
        time: "21天20秒"
      },
      isAuthor: true,
      authorInput: "",
      multiple: false,
      accept: ".so",
      limit: 0,
      myHeaders: {},
      authorUrl: window.Simple.php + "/v1/system/uploadauthfile",
      showFile: false,
      resourceFormRules: {
        cpu: [{ validator: checkCPU, trigger: "blur", required: true }],
        gpu: [{ validator: checkGPU, trigger: "blur", required: true }],
        memory: [{ validator: checkMemory, trigger: "blur", required: true }]
      },
      logTime: [],
      warnTimeMsg: 3,
      logTimeMsg: "",
      diskCleaningPop: false,
      diskCleaningPopMsg: {
        node_id: "",
        clear_time: ""
      },
      setResourcePop: false,
      setResourcePopMsg: {
        project_id: ""
      },
      savePath: {
        key: "",
        path: ""
      }
    };
  },
  methods: {
    // 显示授权信息函数
    handleShowInf(res) {
      // console.log(JSON.stringify(res));
      this.isAuthor = false;
      this.authorInf.number = res.data.number;
      if (parseInt(res.data.is_permanent) === 1) {
        this.authorInf.time = "永久授权";
      } else {
        if (res.data.expired_time === 0) {
          this.authorInf.time = "授权已过期";
        } else {
          this.authorInf.time = res.data.expired_time;
        }
      }
    },
    // 提交授权函数
    handleSaveauth() {
      const data = this.savePath;
      data.key = this.authorInput;
      if (data.key === "") {
        this.$message({ message: "请获取授权码！", type: "warning" });
      } else if (data.path === "") {
        this.$message({ message: "请上传授权文件！", type: "warning" });
      } else {
        this.$post("/system/saveauth", data).then(res => {
          if (res.code === 200) {
            // console.log(JSON.stringify(res));
            // this.handleShowInf(res);
            this.handleGetAuthorInit();
            this.handleGetKey();
            this.savePath.path = "";
          } else {
            this.isAuthor = true;
            this.$message({ message: res.message, type: "error" });
          }
        });
      }
    },
    handleCopy() {
      if (this.authorInput === "") {
        // 复制成功
        this.$message({
          message: "请先获取授权码！",
          type: "warning"
        });
      }
    },
    onCopy(e) {
      console.log(e);
      // 复制成功
      this.$message({
        message: "复制成功！",
        type: "success"
      });
    },
    onError(e) {
      // 复制失败
      this.$message({
        message: "复制失败！",
        type: "error"
      });
    },
    handleAvatarSuccess(res, file) {
      // console.log(res, "123123");
      if (res.code === 200) {
        this.savePath.path = res.data.path;
        this.$message({ message: res.message, type: "success" });
      }
    },
    handleChange(file, fileList) {},
    // 初始化获取授权信息
    handleGetAuthorInit() {
      this.$get("/system/getauthinfo").then(res => {
        if (res.code === 200) {
          // this.authorInput = this.savePath.key = res.data.key;
          this.handleShowInf(res);
        } else {
          this.isAuthor = true;
          this.$message({ message: res.message, type: "error" });
        }
      });
    },
    // 初始化获取授权码
    handleGetKey() {
      this.$get("/system/getkey").then(res => {
        if (res.code === 200) {
          // this.authorInput = this.savePath.key = res.data.key;
          this.authorInput = res.data;
          // this.handleShowInf(res);
        } else {
          // this.isAuthor = true;
          this.$message({ message: res.message, type: "error" });
        }
      });
    },
    // 获取授权码
    handleGetAuthorCode() {
      if (this.authorInput) {
        this.$confirm(
          "此操作会导致以前的授权文件失效，您确定要重新生成授权码？",
          "警告",
          {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }
        )
          .then(() => {
            this.$get("/system/generateauth").then(res => {
              if (res.code === 200) {
                this.authorInput = this.savePath.key = res.data.key;
                this.isAuthor = true;
              } else {
                this.$message({ message: res.message, type: "error" });
              }
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取操作"
            });
          });
      } else {
        this.$get("/system/generateauth").then(res => {
          if (res.code === 200) {
            this.authorInput = this.savePath.key = res.data.key;
          } else {
            this.$message({ message: res.message, type: "error" });
          }
        });
      }
    },
    // 整数判断
    limitInt(num, limitNum, mix) {
      // console.log(num, mix)
      if (num - 0 < mix) {
        return false;
      } else if (num - 0 !== 0 && num <= limitNum) {
        let regNum = /^\d+$/g;
        return regNum.test(num);
      } else {
        return false;
      }
    },
    diskCleaning(id) {
      this.diskCleaningPopMsg.clear_time = "";
      this.diskCleaningPopMsg.node_id = id;
      this.diskCleaningPop = true;
    },
    diskCleaningPopDo() {
      this.$axios.post("/clear-disk", this.diskCleaningPopMsg).then(data => {
        this.diskCleaningPop = false;
      });
    },
    clickSettingTabs() {
      switch (
        this.parentActiveName // 对应tabs的name
      ) {
        case "warnManagement":
          // this.$refs.diskManage.initMsgTabs()
          break;
        case "logSetting":
          break;
        case "quotaSetting":
          if (this.$refs.quota) {
            this.$refs.quota.initMsg();
          }
          break;
        case "manageAuthorSetting":
          this.handleGetAuthorInit();
          this.handleGetKey();
          break;
      }
    },
    setResource(row) {
      this.setResourcePopMsg.project_id = row.id;
      if (row) {
        this.resourceForm.cpu = row.cpu;
        this.resourceForm.gpu = row.gpu;
        this.resourceForm.memory = row.memory;
        this.selectRow = row;
      } else {
        setTimeout(() => {
          this.$refs["resourceForm"].resetFields();
        }, 0);
      }
      this.setResourcePop = true;
    },
    setResourcePopDo() {
      this.$refs["resourceForm"].validate(valid => {
        if (valid) {
          this.$post("/system/setprojectconfig", {
            ...this.setResourcePopMsg,
            ...this.resourceForm
          }).then(data => {
            if (data.code === 200) {
              this.$message({
                message: this.$t("views.notification.succeed"),
                type: "success"
              });
              this.$refs.quota.getActiveTab("tableData3");
              this.setResourcePop = false;
            } else {
              this.$message({ message: data.message, type: "error" });
            }
          });
        }
      });
    },
    handleClose2() {
      this.$refs["resourceForm"].resetFields();
    },
    saveWarnTime() {
      let params = {};
      params.type = "BasicConfig";
      params.log_type = "system_warning";
      params.data = {};
      params.data.warning_save = this.warnTimeMsg;
      this.$post("/system/systemsetting", params).then(data => {
        if (data.code === 200) {
          this.$message({
            message: this.$t("views.notification.saved"),
            type: "success"
          });
        } else {
          this.$message({ message: data.message, type: "warning" });
        }
      });
    },
    saveLogTime() {
      let params = {};
      params.type = "BasicConfig";
      params.log_type = "system_log";
      params.data = {};
      params.data.system_save = this.logTimeMsg;
      this.$post("/system/systemsetting", params).then(data => {
        if (data.code === 200) {
          this.$message({
            message: this.$t("views.notification.saved"),
            type: "success"
          });
        } else {
          this.$message({ message: data.message, type: "warning" });
        }
      });
    }
  },
  components: { warnManagement, quotaSetting },
  created() {
    this.myHeaders = {
      authorization: "Bearer " + sessionStorage.getItem("access_token")
    };
    this.$axios.get("/system/systemconfig").then(data => {
      this.logTime = [...data.data.data.system_save];
      this.warnTimeMsg = data.data.data.base_setting.warning_save - 0;
      this.logTimeMsg = data.data.data.base_setting.system_save - 0;
    });
  }
};
</script>

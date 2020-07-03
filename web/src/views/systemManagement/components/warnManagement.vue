<!--
 * @Author: renlei
 * @Date: 2020-05-19 18:10:03
 * @LastEditors: renlei
 * @LastEditTime: 2020-06-16 17:32:25
 * @Description:添加告警设置
-->
<template>
  <div class="warn-system-management">
    <h6 class="title">警阀值设置：</h6>
    <div class="v-flow">
      <div class="v-warn" v-for="(item, index) in dataList" :key="index">
        <!-- <p>{{ item.is_mian }}({{ item.ip }})</p> -->
        <div class="v-list">
          <div class="text-title">
            cpu: <span>{{ item.cpu }}</span
            >核
          </div>
          <div class="input-v">
            <el-input
              placeholder=""
              :disabled="item.isEdite"
              @blur="validNum(index)"
              v-model="item.cpuValue"
            >
              <template slot="prepend">阀值：</template>
              <template slot="append">%</template>
            </el-input>
            <span class="error">{{ item.cpuValid ? "" : errorStr }}</span>
          </div>
          <div class="text-title">
            内存: <span>{{ item.memory }}</span
            >G
          </div>
          <div class="input-v">
            <el-input
              placeholder=""
              @blur="validNum(index)"
              :disabled="item.isEdite"
              v-model="item.memoryValue"
            >
              <template slot="prepend">阀值：</template>
              <template slot="append">%</template>
            </el-input>
            <span class="error">{{ item.memoryValid ? "" : errorStr }}</span>
          </div>
          <div class="text-title">
            硬盘: <span>{{ item.disk }}</span
            >G
          </div>
          <div class="input-v">
            <el-input
              placeholder=""
              @blur="validNum(index)"
              :disabled="item.isEdite"
              v-model="item.diskValue"
            >
              <template slot="prepend">阀值：</template>
              <template slot="append">%</template>
            </el-input>
            <span class="error">{{ item.diskValid ? "" : errorStr }}</span>
          </div>
          <div class="text-title">
            存储: <span>{{ item.simpleTotal }}</span
            >G
          </div>
          <div class="input-v">
            <el-input
              placeholder=""
              @blur="validNum(index)"
              :disabled="item.isEdite"
              v-model="item.simpleDisk"
            >
              <template slot="prepend">阀值：</template>
              <template slot="append">%</template>
            </el-input>
            <span class="error">{{ item.simpleValid ? "" : errorStr }}</span>
          </div>
        </div>
        <div class="controls">
          <el-button
            class="btn dark small"
            @click="editeValue(index)"
            v-if="item.isEdite"
            >{{ $t("views.systemManagement.modify") }}</el-button
          >
          <el-button class="btn dark small" @click="saveValue(index)" v-else>{{
            $t("views.systemManagement.save")
          }}</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "warnManagement",
  data() {
    return {
      clearTimeMsg: "",
      clearTime: [],
      dataList: [],
      errorStr: "请输入0~100的整数",
      input4: 0
    };
  },
  methods: {
    editeValue(key) {
      this.dataList[key].isEdite = false;
    },
    saveValue(key) {
      if (this.validNum(key)) {
        this.dataList[key].isEdite = true;
        console.log(this.dataList[key]);
        this.$post("/system/systemwarningsetting", {
          ip: this.dataList[key].ip,
          cpu: this.dataList[key].cpuValue,
          memory: this.dataList[key].memoryValue,
          disk: this.dataList[key].diskValue,
          simple_disk: this.dataList[key].simpleDisk
        }).then(res => {
          if (res.code === 200) {
            this.$message({
              message: this.$t("views.notification.saved"),
              type: "success"
            });
          }
        });
      }
    },
    // 整数判断
    limitInt(num) {
      if (num >= 0 && num <= 100) {
        let regNum = /^\d+$/g;
        return regNum.test(num);
      } else {
        return false;
      }
    },
    validNum(key) {
      console.log(this.dataList[key].simpleValid);
      if (!this.limitInt(this.dataList[key].cpuValue)) {
        this.dataList[key].cpuValid = false;
        return false;
      } else {
        this.dataList[key].cpuValid = true;
      }
      if (!this.limitInt(this.dataList[key].memoryValue)) {
        this.dataList[key].memoryValid = false;
        return false;
      } else {
        this.dataList[key].memoryValid = true;
      }
      if (!this.limitInt(this.dataList[key].diskValue)) {
        this.dataList[key].diskValid = false;
        return false;
      } else {
        this.dataList[key].diskValid = true;
      }
      if (!this.limitInt(this.dataList[key].simpleDisk)) {
        this.dataList[key].simpleValid = false;
        return false;
      } else {
        this.dataList[key].simpleValid = true;
      }
      return true;
    },
    init() {
      this.$get("/system/systemwarningconfig").then(res => {
        if (res.code === 200) {
          console.log(JSON.stringify(res));
          this.dataList = [];
          for (let item in res.data) {
            let obj = {};
            obj.ip = res.data[item].ip;
            obj.isEdite = true;
            obj.cpu = res.data[item].cpu;
            obj.cpuValue = res.data[item].cpu_config;
            obj.cpuValid = true;
            obj.disk = res.data[item].disk;
            obj.diskValue = res.data[item].disk_config;
            obj.diskValid = true;
            obj.memory = res.data[item].memory;
            obj.memoryValue = res.data[item].memory_config;
            obj.memoryValid = true;
            obj.is_mian = res.data[item].is_mian;
            obj.simpleDisk = res.data[item].simple_disk;
            obj.simpleValid = true;
            obj.simpleTotal = res.data[item].simple_srp_disk_total;
            return this.dataList.push(obj);
          }
        } else {
          this.$message({ message: res.message, type: "error" });
        }
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>

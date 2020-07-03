<!--
 * @Author:  aFei
 * @Date: 2020-05-19 18:10:03
 * @LastEditors: renlei
 * @LastEditTime: 2020-06-04 16:45:33
 * @Description:命名空间
-->

<template>
  <div class="views-cluster-monitoring-namespaces">
    <div class="tab-select">
      <div>
        <span class="tab-select-title">{{
          $t("views.clusterMonitoring.name")
        }}</span>
        <el-input
          v-model="tableData1.sel.name"
          :placeholder="$t('views.clusterMonitoring.enter')"
        ></el-input>
      </div>
      <div>
        <span class="tab-select-title">{{
          $t("views.clusterMonitoring.spaceType")
        }}</span>
        <el-select
          v-model="tableData1.sel.type"
          :placeholder="$t('views.clusterMonitoring.chose')"
        >
          <el-option
            v-for="item in space_type"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div>
        <span class="tab-select-title">{{
          $t("views.clusterMonitoring.user")
        }}</span>
        <el-input
          v-model="tableData1.sel.user_name"
          :placeholder="$t('views.clusterMonitoring.enter')"
        ></el-input>
      </div>
      <!-- 对象数量 -->
      <!--  <div>
        <span class="tab-select-title">{{
          $t("views.clusterMonitoring.objectNum")
        }}</span>
        <el-input
          v-model="tableData1.sel.user_name"
          :placeholder="$t('views.clusterMonitoring.enter')"
        ></el-input>
        <el-select
          v-model="tableData1.sel.status"
          :placeholder="$t('views.clusterMonitoring.chose')"
        >
          <el-option
            v-for="item in space_status"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div> -->
      <!--  <div>
        <span class="tab-select-title">{{
          $t("views.clusterMonitoring.storageNum")
        }}</span>
          <el-date-picker
          v-model="tableData1.sel.full_time"
          type="daterange"
          align="right"
          value-format="yyyy-MM-dd"
          unlink-panels
          range-separator="-"
          :start-placeholder="$t('views.clusterMonitoring.beginTime')"
          :end-placeholder="$t('views.clusterMonitoring.endTime')"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
        <el-input
          v-model="tableData1.sel.user_name"
          :placeholder="$t('views.clusterMonitoring.enter')"
        ></el-input>
      </div> -->
      <div>
        <el-button class="btn light small" @click="clearSearch('tableData1')">{{
          $t("views.clusterMonitoring.reset")
        }}</el-button>
        <el-button class="btn light small" @click="doSearch('tableData1')">{{
          $t("views.clusterMonitoring.select")
        }}</el-button>
      </div>
    </div>
    <el-table
      class="tab-content"
      @sort-change="sortTable"
      :data="tableData1.msg"
      v-loading="tableData1.loading"
      border
    >
      <el-table-column
        type="index"
        :label="$t('views.clusterMonitoring.serialNumber')"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column
        :label="$t('views.clusterMonitoring.namespaceName')"
        prop="namespace_name"
        show-overflow-tooltip
        width="200"
      >
        <template slot-scope="scope">
          <!-- <router-link
            class="link"
            :to="{
              name: 'namespacesDetail',
              query: { name: scope.row.namespace_name }
            }"
            >{{ scope.row.namespace_name }}</router-link
          > -->
          <span>{{ scope.row.userName }}</span>
        </template>
      </el-table-column>
      <!--  <el-table-column
        prop="name"
        show-overflow-tooltip
        :label="$t('views.clusterMonitoring.project')"
      ></el-table-column> -->
      <el-table-column
        prop="type"
        align="center"
        :label="$t('views.clusterMonitoring.spaceType')"
      >
        <template slot-scope="scope">
          <span v-if="scope.row.type === 1">
            个人空间
          </span>
          <span v-else-if="scope.row.type === 0">
            公共空间
          </span>
          <span v-else-if="scope.row.type === 2">
            项目空间
          </span>
          <span v-else>
            --
          </span>
        </template>
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        :label="$t('views.clusterMonitoring.user')"
      >
        <template slot-scope="scope">
          <span v-if="scope.row.user">
            {{ scope.row.user }}
          </span>
          <span v-else>
            --
          </span>
        </template>
      </el-table-column>
      <el-table-column
        prop="fileNumber"
        align="center"
        :label="$t('views.clusterMonitoring.objectNum')"
      ></el-table-column>
      <el-table-column
        prop="occupiedCapacity"
        align="center"
        :label="$t('views.clusterMonitoring.storageNum')"
      ></el-table-column>
      <!--   <el-table-column
        prop="created_at"
        align="center"
        sortable="custom"
        width="180"
        :label="$t('views.clusterMonitoring.creationTime')"
      ></el-table-column> -->
      <div slot="empty">
        <div class="views-empty">
          <span class="views-empty-table"></span>
          <p class="views-empty-text">{{ $t("views.table.noData") }}</p>
        </div>
      </div>
    </el-table>
    <el-pagination
      class="tab-page"
      layout="prev, pager, next"
      :page-size="pageSize"
      :current-page.sync="tableData1.Pagination.currPage"
      :total="tableData1.Pagination.total_count"
      @current-change="changePage"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "namespaces",
  data() {
    return {
      pageSize: 10,
      tableData1: {
        // 没有分页就删掉Pagination，没有查询条件就删掉sel
        msg: [],
        loading: true,
        Pagination: {
          currPage: 1,
          total_count: 5
        },
        sel: {
          name: "",
          type: "",
          user_name: "",
          page: 1
        }
      },
      space_type: [
        {
          label: this.$t("views.clusterMonitoring.commonSpace"),
          value: 0
        },
        {
          label: this.$t("views.clusterMonitoring.personalSpace"),
          value: 1
        },
        {
          label: this.$t("views.clusterMonitoring.projectSpace"),
          value: 2
        }
      ],
      space_status: []
    };
  },
  created() {
    const paramsData = this.tableData1.sel;
    this.getStorageSpaces(paramsData);
  },
  methods: {
    // 表格排序
    sortTable(event) {
      if (event.order === "descending") {
        this.tableData1.sel.sort = "-" + event.prop;
      } else {
        this.tableData1.sel.sort = event.prop;
      }
      this.initMsg();
    },
    clearSearch(name) {
      // 清除搜索条件
      for (let key in this[name].sel) {
        this[name].sel[key] = "";
      }
      this.tableData1.sel.page = 1;
      this.getStorageSpaces(this.tableData1.sel);
    },
    doSearch(name) {
      this.tableData1.sel.page = 1;
      this.getStorageSpaces(this.tableData1.sel);
    },
    changePage(page) {
      console.log(page);
      this.tableData1.sel.page = page;
      this.getStorageSpaces(this.tableData1.sel);
    },
    objToArr(obj) {
      let arr = [];
      if (obj) {
        for (let key in obj) {
          arr.push(obj[key]);
        }
      }
      return arr;
    },
    // 获取存储空间信息函数封装
    getStorageSpaces(params) {
      this.tableData1.loading = true;
      this.$axios.get("/storage/satstorage", { params: params }).then(data => {
        //  console.log(JSON.stringify(data));
        // 数据处理
        this.tableData1.msg = data.data.data.list;
        this.tableData1.Pagination.total_count = parseInt(
          data.data.data.total_count
        );
        this.tableData1.Pagination.currPage = parseInt(data.data.data.currPage);
        this.tableData1.loading = false;
      });
    }
  }
};
</script>

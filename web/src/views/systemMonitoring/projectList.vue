/*
* @Author: aFei
* @Date: 2018-07-10 15:52:29
*/
/*
* @LastEditors: aFei
* @LastEditTime: 2018-08-23 11:20:48
*/
<template>
  <div class="views-cluster-monitoring-node-control">
    <!-- <div class="tab-select">
      <div>
        <span class="tab-select-title">{{$t("views.clusterMonitoring.nodeName")}}</span>
        <el-input v-model="tableData1.sel.name"
                  :placeholder='$t("views.clusterMonitoring.enter")'></el-input>
      </div>
      <div>
        <span class="tab-select-title">{{$t("views.clusterMonitoring.creationTime")}}</span>
        <el-date-picker v-model="tableData1.sel.full_time"
                        type="daterange"
                        align="right"
                        value-format="yyyy-MM-dd"
                        unlink-panels
                        range-separator="-"
                        :start-placeholder='$t("views.clusterMonitoring.beginTime")'
                        :end-placeholder='$t("views.clusterMonitoring.endTime")'
                        :picker-options="pickerOptions">
        </el-date-picker>
      </div> -->
    <!-- <div>
        <span class="tab-select-title">{{$t("views.clusterMonitoring.ip")}}</span>
        <el-input v-model="tableData1.sel.ip"
                  :placeholder='$t("views.clusterMonitoring.enter")'></el-input>
      </div> -->
    <!-- <div>
        <span class="tab-select-title">{{$t("views.clusterMonitoring.status")}}</span>
        <el-select v-model="tableData1.sel.type"
                   :placeholder='$t("views.clusterMonitoring.chose")'>
          <el-option v-for="item in node_status"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div>
        <el-button class="btn light small"
                   @click="clearSearch('tableData1')">{{$t("views.clusterMonitoring.reset")}}</el-button>
        <el-button class="btn light small"
                   @click="doSearch('tableData1')">{{$t("views.clusterMonitoring.select")}}</el-button>
      </div>
  </div>-->
    <el-table class="tab-content"
              :data="tableData1.msg"
              v-loading="tableData1.loading"
              @sort-change="addSort($event,'tableData1')"
              border>
      <el-table-column type="index"
                       :label='$t("views.clusterMonitoring.serialNumber")'
                       width="80"
                       align="center"></el-table-column>
      <el-table-column label='项目名称'
                       prop="name"
                       show-overflow-tooltip></el-table-column>
      <el-table-column prop="cpu"
                       show-overflow-tooltip
                       align="center"
                       label='CPU'>
        <template slot-scope="scope">
          {{scope.row.project_cpu_use}}核/{{scope.row.cpu}}核
        </template>
      </el-table-column>
      <el-table-column prop="memory"
                       show-overflow-tooltip
                       align="center"
                       label='内存'>
        <template slot-scope="scope">
          {{scope.row.project_memory_use}}G/{{scope.row.memory}}G
        </template>
      </el-table-column>
      <el-table-column prop="gpu"
                       show-overflow-tooltip
                       align="center"
                       label='GPU'>
        <template slot-scope="scope">
          {{scope.row.project_gpu_use}}个/{{scope.row.gpu}}个
        </template>
      </el-table-column>
      <el-table-column prop="created_at"
                       sortable
                       show-overflow-tooltip
                       align="center"
                       label='分配时间'></el-table-column>
      <el-table-column label="操作"
                       align="center"
                       width="100">
        <template slot-scope="scope">
          <button class="btn"
                  @click="clearNamespace(scope.row)">清理</button>
        </template>
      </el-table-column>
      <!--暂无数据情况-->
      <div slot="empty">
        <div class="views-empty">
          <span class="views-empty-table"></span>
          <p class="views-empty-text">{{$t('views.table.noData')}}</p>
        </div>
      </div>
    </el-table>
    <el-pagination class="tab-page"
                   layout="prev, pager, next"
                   :page-size="pageSize"
                   :current-page.sync="tableData1.Pagination.page"
                   :total="tableData1.Pagination.total_count"
                   @current-change="changePage('tableData1')"></el-pagination>
  </div>
</template>

<script>
export default {
  name: 'projectList',
  data () {
    return {
      linTabData: '',
      linUrl: '',
      pageSize: 10,
      node_status: [],
      pickerOptions: {
        shortcuts: [{
          text: this.$t('views.clusterMonitoring.recentOneWeek'),
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: this.$t('views.clusterMonitoring.recentOneMonth'),
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: this.$t('views.clusterMonitoring.recentThreeMonth'),
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      tableData1: {// 没有分页就删掉Pagination，没有查询条件就删掉sel
        msg: [],
        url: '/system/getprojectlist',
        loading: true,
        Pagination: {
          page: 1,
          total_count: 5
        },
        sel: {
          name: '',
          type: '',
          // ip: '',
          full_time: '',
          start_time: '',
          end_time: '',
          sort: '-created_at'
        }
      }
    }
  },
  methods: {
    clearNamespace (row) {
      console.log(row)
      this.$confirm('是否清理分配的所有资源?', '资源清理', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$post('/system/namespacedeleteall', { namespace_name: row.namespace_name, project_id: row.id }).then(res => {
          if (res.code === 200) {
            this.$message({
              type: 'success',
              message: res.message
            })
            this.getActiveTab('tableData1')
          } else {
            this.$message({
              type: 'error',
              message: res.message
            })
          }
        })
      }).catch(() => {
      })
    },
    getActiveTab (name) { // 获取当前展示的表格、搜索等信息
      this.linTabData = name
      this.linUrl = this[name].url
      this.initMsg()
    },
    addSort (event, name) {
      if (event.order === 'descending') {
        this.tableData1.sel.sort = '-' + event.prop
      } else {
        this.tableData1.sel.sort = event.prop
      }
      this.getActiveTab(name)
    },
    clearSearch (name) { // 清除搜索条件
      for (let key in this[name].sel) {
        this[name].sel[key] = ''
      }
      if (this[name].Pagination !== undefined) {
        this[name].Pagination.page = 1
      }
      this.getActiveTab(name)
    },
    doSearch (name) { // 按条件搜索
      if (this[name].Pagination !== undefined) {
        this[name].Pagination.page = 1
      }
      this.getActiveTab(name)
    },
    changePage (name) { // 改变分页
      this.getActiveTab(name)
    },
    initMsg () {
      this[this.linTabData].loading = true
      let lin = {}
      if (this[this.linTabData].Pagination !== undefined) {
        lin = Object.assign({}, this[this.linTabData].Pagination, {
          count: this.pageSize
        })
      }
      // if (this[this.linTabData].sel !== undefined) {
      //   if (this[this.linTabData].sel.full_time === '' || this[this.linTabData].sel.full_time === null) {
      //     this[this.linTabData].sel.start_time = ''
      //     this[this.linTabData].sel.end_time = ''
      //   } else {
      //     this[this.linTabData].sel.start_time = this[this.linTabData].sel.full_time[0] + ' 00:00:00'
      //     this[this.linTabData].sel.end_time = this[this.linTabData].sel.full_time[1] + ' 23:59:59'
      //   }
      //   lin = Object.assign({}, lin, this[this.linTabData].sel)
      // }
      this.$axios.get(this[this.linTabData].url, { params: lin }).then(data => {
        // 根据后台接口更改
        let tableDate = data.data.data.list
        // 数据处理
        let arr = []
        // 数据处理
        for (const key in tableDate) {
          arr.push(tableDate[key])
        }
        this[this.linTabData].msg = arr
        // 重置数据总数
        if (this[this.linTabData].Pagination !== undefined) {
          this[this.linTabData].Pagination.total_count = data.data.data.total_count
        }
        this.pageSize = data.data.data.per_page || 10
        this[this.linTabData].loading = false
      })
    }
  },
  created () { // 每有一个表格就要写个初始化赋值
    this.$get('/cluster/returnstatus').then(res => {
      this.node_status = res.data
    })
    this.getActiveTab('tableData1')
  }
}
</script>

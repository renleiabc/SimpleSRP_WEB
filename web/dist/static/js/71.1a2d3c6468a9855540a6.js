webpackJsonp([71],{nKoj:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("aA9S"),l=a.n(i),s=a("IHPB"),n=a.n(s),o=a("v46e"),r={name:"imageSort",data:function(){var e=this;return{linTabData:"",linUrl:"",pageSize:10,titleSort:"新增镜像分类",sortType:[],roleCode:!1,numRole:0,ruleForm:{keys_name:"",is_init:1},rules:{keys_name:[{required:!0,message:this.$t("views.validError.notNull"),trigger:"blur"},{validator:function(t,a,i){""!==a.trim()?o.d(a)?i():i(new Error(e.$t("views.validError.validStr"))):i(new Error(e.$t("views.validError.notNull")))},trigger:"blur"}],is_init:[{required:!0,message:this.$t("views.validError.notNull"),trigger:"blur"}]},pickerOptions:{shortcuts:[{text:this.$t("views.systemManagement.recentOneWeek"),onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:this.$t("views.systemManagement.recentOneMonth"),onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:this.$t("views.systemManagement.recentThreeMonth"),onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},tableData:{msg:[],url:"/image/newimagecategorylist",loading:!0,Pagination:{page:1,total_count:10},sel:{sort:"",is_init:1,full_date:"",start_time:"",end_time:"",use:"",name:""}},case_type:[{label:"使用中",value:"使用中"},{label:"未使用",value:"未使用"}],dialogCreatKey:!1,multipleSelection:[],isUpdateName:!1}},methods:{checkSelectable:function(e,t){return 3===this.numRole||4===this.numRole?(this.roleCode=!0,"1"===e.is_init?0:1):1},handleSelectionChange:function(e){var t=this;this.multipleSelection=[],e&&e.forEach(function(e,a,i){t.multipleSelection.push(e.id)}),this.multipleSelection=[].concat(n()(this.multipleSelection))},getActiveTab:function(e){this.linTabData=e,this.linUrl=this[e].url,this.initMsg()},clearSearch:function(e){for(var t in this[e].sel)this[e].sel[t]="";void 0!==this[e].Pagination&&(this[e].Pagination.page=1),2===this.numRole?this.tableData.sel.is_init=1:this.tableData.sel.is_init="",this.getActiveTab(e)},doSearch:function(e){void 0!==this[e].Pagination&&(this[e].Pagination.page=1),this.getActiveTab(e)},changePage:function(e){this.getActiveTab(e)},sortTable:function(e){"descending"===e.order?this.tableData.sel.sort="-"+e.prop:this.tableData.sel.sort=e.prop,this.initMsg()},initMsg:function(){var e=this;this.tableData.loading=!0;var t={};void 0!==this.tableData.Pagination&&(t=l()({},this.tableData.Pagination,{count:this.pageSize})),void 0!==this.tableData.sel&&(this.tableData.sel.full_date&&2===this.tableData.sel.full_date.length?(this.tableData.sel.start_time=this.tableData.sel.full_date[0]+" 00:00:00",this.tableData.sel.end_time=this.tableData.sel.full_date[1]+" 23:59:59"):(this.tableData.sel.start_time="",this.tableData.sel.end_time=""),t=l()({},t,this.tableData.sel)),this.$axios.get(this.tableData.url,{params:t}).then(function(t){var a=t.data.data.category_list;e.tableData.msg=[].concat(n()(a)),void 0!==e.tableData.Pagination&&(e.tableData.Pagination.total_count=t.data.data.total_count),e.pageSize=t.data.data.per_page||10,e.tableData.loading=!1})},creatKey:function(e){var t=this;this.dialogCreatKey=!0,this.$refs[e].validate(function(e){if(e){var a=t.ruleForm.keys_name,i=t.ruleForm.is_init;t.isUpdateName?t.$post("/image/imagecategoryupdate",{category_id:t.updateID.id,name:a,is_init:i}).then(function(e){200===e.code?(t.ruleForm.keys_name="",t.$message({message:t.$t("views.notification.saved"),type:"success"}),t.dialogCreatKey=!1,t.getActiveTab("tableData")):t.$message({message:e.message,type:"error"})}):t.$post("/image/imagecategorycreate",{category_name:a,is_init:i}).then(function(e){200===e.code?(t.ruleForm.keys_name="",t.$message({message:t.$t("views.notification.saved"),type:"success"}),t.dialogCreatKey=!1,t.getActiveTab("tableData")):t.$message({message:e.message,type:"error"})})}})},closeDialog:function(){this.ruleForm.keys_name="",this.$refs.ruleForm.resetFields()},updateName:function(e){console.log(e),this.dialogCreatKey=!0,e?(this.titleSort="修改镜像分类",this.updateID=e,this.ruleForm.keys_name=e.name,this.ruleForm.is_init=parseInt(e.is_init),this.isUpdateName=!0):(this.titleSort="新增镜像分类",this.isUpdateName=!1)},deleteMoreKeys:function(){this.multipleSelection.length?this.deleteKey(this.multipleSelection):this.$message({type:"warning",message:this.$t("views.dialogText.selectNull")})},deleteSingleKey:function(e){this.deleteKey(e)},deleteKey:function(e){var t=this;this.mixinConfirm("/image/imagecategorydelete",{category_id:e}).then(function(e){e&&t.getActiveTab("tableData")})},handleSortType:function(e){2===e?(this.ruleForm.is_init=1,this.sortType=[{value:1,label:"公共镜像分类"},{value:3,label:"编排镜像分类"}]):3===e?(this.ruleForm.is_init=2,this.sortType=[{value:2,label:"项目镜像分类"},{value:0,label:"个人镜像分类"},{value:3,label:"编排镜像分类"}]):4===e&&(this.ruleForm.is_init=0,this.sortType=[{value:2,label:"项目镜像分类"},{value:0,label:"个人镜像分类"}])}},created:function(){var e=this.numRole=JSON.parse(sessionStorage.getItem("userinfo")).role;this.handleSortType(e),this.tableData.sel.is_init=2===e?1:"",this.getActiveTab("tableData")}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"tab-select"},[a("div",[a("span",{staticClass:"tab-select-title"},[e._v("分类名称")]),e._v(" "),a("el-input",{attrs:{placeholder:"分类名称"},model:{value:e.tableData.sel.name,callback:function(t){e.$set(e.tableData.sel,"name",t)},expression:"tableData.sel.name"}})],1),e._v(" "),a("div",[a("span",{staticClass:"tab-select-title"},[e._v(e._s(e.$t("views.table.createTime")))]),e._v(" "),a("el-date-picker",{attrs:{type:"daterange",editable:!1,align:"right","range-separator":"-","value-format":"yyyy-MM-dd","picker-options":e.pickerOptions,"start-placeholder":e.$t("views.button.startDate"),"end-placeholder":e.$t("views.button.endDate")},model:{value:e.tableData.sel.full_date,callback:function(t){e.$set(e.tableData.sel,"full_date",t)},expression:"tableData.sel.full_date"}})],1),e._v(" "),a("div",[a("span",{staticClass:"tab-select-title"},[e._v("状态")]),e._v(" "),a("el-select",{attrs:{placeholder:e.$t("views.button.selectPlease")},model:{value:e.tableData.sel.use,callback:function(t){e.$set(e.tableData.sel,"use",t)},expression:"tableData.sel.use"}},e._l(e.case_type,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("div",[a("el-button",{staticClass:"btn light small",on:{click:function(t){return e.clearSearch("tableData")}}},[e._v(e._s(e.$t("views.button.reset")))]),e._v(" "),a("el-button",{staticClass:"btn light small",on:{click:function(t){return e.doSearch("tableData")}}},[e._v(e._s(e.$t("views.button.search")))])],1)]),e._v(" "),a("div",[a("el-button",{staticClass:"btn dark mid",attrs:{type:"button"},on:{click:function(t){return e.updateName(!1)}}},[e._v("新增镜像分类")]),e._v(" "),a("el-button",{staticClass:"btn dark mid",attrs:{type:"button"},on:{click:function(t){return e.deleteMoreKeys()}}},[e._v(e._s(e.$t("views.button.batchDelete")))])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableData.loading,expression:"tableData.loading"}],staticClass:"tab-content sortImage",attrs:{data:e.tableData.msg,border:""},on:{"sort-change":e.sortTable,"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center",selectable:e.checkSelectable}}),e._v(" "),a("el-table-column",{attrs:{prop:"name","show-overflow-tooltip":"",sortable:"custom",label:"分类名称"}}),e._v(" "),a("el-table-column",{attrs:{label:"分类类型",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["1"===t.row.is_init?a("span",[e._v("公共镜像分类")]):e._e(),e._v(" "),"2"===t.row.is_init?a("span",[e._v("项目镜像分类")]):e._e(),e._v(" "),"0"===t.row.is_init?a("span",[e._v("个人镜像分类")]):e._e(),e._v(" "),"3"===t.row.is_init?a("span",[e._v("编排镜像分类")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"use","show-overflow-tooltip":"",label:"状态",width:"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"total",width:"160","show-overflow-tooltip":"",label:"应用镜像数量",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"created_at",width:"200",sortable:"custom","show-overflow-tooltip":"",label:e.$t("views.imageManagement.creationTime"),align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("views.table.operate"),width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"btn",attrs:{disabled:e.roleCode&&"1"===t.row.is_init},on:{click:function(a){return e.updateName(t.row)}}},[e._v(e._s(e.$t("views.imageManagement.modify")))]),e._v(" "),a("el-button",{staticClass:"del",attrs:{id:t.row.id,disabled:e.roleCode&&"1"===t.row.is_init},on:{click:function(a){return e.deleteSingleKey(t.row.id)}}},[e._v(e._s(e.$t("views.button.delete")))])]}}])}),e._v(" "),a("div",{attrs:{slot:"empty"},slot:"empty"},[a("div",{staticClass:"views-empty"},[a("span",{staticClass:"views-empty-table"}),e._v(" "),a("p",{staticClass:"views-empty-text"},[e._v(e._s(e.$t("views.table.noData")))])])])],1),e._v(" "),a("el-pagination",{staticClass:"tab-page",attrs:{layout:"prev, pager, next","page-size":e.pageSize,"current-page":e.tableData.Pagination.page,total:e.tableData.Pagination.total_count},on:{"update:currentPage":function(t){return e.$set(e.tableData.Pagination,"page",t)},"update:current-page":function(t){return e.$set(e.tableData.Pagination,"page",t)},"current-change":function(t){return e.changePage("tableData")}}}),e._v(" "),a("el-dialog",{staticClass:"small",attrs:{title:e.titleSort,visible:e.dialogCreatKey,width:"30%",top:"30vh"},on:{close:e.closeDialog,"update:visible":function(t){e.dialogCreatKey=t}}},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"},nativeOn:{submit:function(e){e.preventDefault()}}},[a("el-form-item",{attrs:{label:"分类名称",prop:"keys_name"}},[a("el-input",{attrs:{maxlength:"30"},model:{value:e.ruleForm.keys_name,callback:function(t){e.$set(e.ruleForm,"keys_name",t)},expression:"ruleForm.keys_name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"分类类型",prop:"is_init"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.is_init,callback:function(t){e.$set(e.ruleForm,"is_init",t)},expression:"ruleForm.is_init"}},e._l(e.sortType,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogCreatKey=!1}}},[e._v(e._s(e.$t("views.button.cancel")))]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.creatKey("ruleForm")}}},[e._v(e._s(e.$t("views.button.save")))])],1)],1)],1)},staticRenderFns:[]},u=a("C7Lr")(r,c,!1,null,null,null);t.default=u.exports}});
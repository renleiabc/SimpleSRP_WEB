webpackJsonp([33],{BRgI:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={name:"storageLog",components:{},data:function(){return{listLoading:!1,showBtn:!0,fileKeyArr:[],tableData:[],objParams:{storage_id:"",name:"",page:1,path:""},pageSize:10,Pagination:{page:1,total_count:0},baseinfo:{sizedb:"",numsdb:""}}},mounted:function(){this.$refs.seduPathBreadcrumb.addPath({id:0})},methods:{getTableInf:function(e){var t=this;this.listLoading=!0,this.$get("/storage/dirinfo",e).then(function(e){t.listLoading=!1,200===e.code?(t.tableData=e.data.list,t.Pagination.currage=e.data.currPage,t.Pagination.total_count=e.data.total_count,t.baseinfo.sizedb=e.data.summary.total_size,t.baseinfo.numsdb=parseInt(e.data.summary.directory_num)+parseInt(e.data.summary.files_number)):t.$message({message:e.message,type:"error"})})},getBackFileList:function(e){console.log(e),this.objParams.path=e.rawname||"",this.objParams.page=1,this.getTableInf(this.objParams)},resetNameBtn:function(){this.objParams.name="",this.objParams.page=1,this.getTableInf(this.objParams)},searchNameBtn:function(){this.objParams.page=1,this.getTableInf(this.objParams)},deleteFile:function(e){console.log(e);var t={username:e.username,passwd:e.passwd,filePath:e.rawname};this.fileKeyArr.push(t),this.handleDeleteFile(this.fileKeyArr)},batchDeleteId:function(){this.fileKeyArr.length>0?this.handleDeleteFile(this.fileKeyArr):this.$message({message:this.$t("views.dialogText.selectNull"),type:"warning"})},handleDeleteFile:function(e){var t=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){console.log(e);var a={delete_data:e};t.$post("/storage/deletefile",a).then(function(e){200===e.code?(t.$message({message:e.message,type:"success"}),t.fileKeyArr=[],t.objParams.page=1,t.getTableInf(t.objParams)):t.$message({message:e.message,type:"error"})})}).catch(function(){t.fileKeyArr=[],t.$message({type:"info",message:"已取消删除"})})},updateTable:function(e){if(console.log(e),!e)return!1;this.$refs.seduPathBreadcrumb.addPath(e),this.objParams.path=e.rawname,this.objParams.page=1,this.getTableInf(this.objParams)},selectChange:function(e){this.fileKeyArr=[];for(var t=0;t<e.length;t++){var a={username:e[t].username,passwd:e[t].passwd,filePath:e[t].rawname};this.fileKeyArr.push(a)}},pageChange:function(e){this.objParams.page=e,this.getTableInf(this.objParams),console.log(e)},downloadFile:function(e){var t=void 0,a=e.username,s=e.passwd,n=e.rawname;try{t=new XMLHttpRequest}catch(e){t=new ActiveXObject("Microsoft.XMLHTTP")}t.open("post",window.Simple.pingTai+"/filestorage/file/download",!0),t.setRequestHeader("authorization","Bearer "+JSON.parse(sessionStorage.getItem("userinfo")).access_token),t.setRequestHeader("content-type","application/x-www-form-urlencoded"),t.responseType="blob",t.send("username="+a+"&passwd="+s+"&filePath="+n),t.onreadystatechange=function(){if(4===t.readyState)if(200===t.status){var a=t.response;if(navigator.msSaveBlob)navigator.msSaveBlob(a,e.name);else{var s=document.createElement("a");s.href=URL.createObjectURL(a),s.download=e.name,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(s.href)}}else this.$message({type:"error",message:"网络错误"+t.status})}}},created:function(){console.log(this.$route.query),this.$route.query&&(this.objParams.storage_id=this.$route.query.storage_id),this.getTableInf(this.objParams),this.role=JSON.parse(sessionStorage.getItem("userinfo")).role,this.baseinfo.sid=this.$route.query.id,this.is_init=this.$route.query.is_init}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"storage-detail"},[a("div",{staticStyle:{padding:"10px 0"}},[a("div",{staticClass:"clear-float",staticStyle:{padding:"10px 0"}},[a("div",{staticClass:"num-space bg-blue"},[a("i",{staticClass:"iconfont icon-duixiangliebiao-n"}),e._v(" "),a("div",{staticClass:"text-desc"},[a("p",[e._v(e._s(e.$t("views.storageManagement.detail.objectNum")))]),e._v(" "),a("p",[a("span",[e._v(e._s(e.baseinfo.numsdb||0))]),e._v("个\n          ")])])]),e._v(" "),a("div",{staticClass:"num-space bg-yellow"},[a("i",{staticClass:"iconfont icon-cunchu",staticStyle:{"font-size":"60px"}}),e._v(" "),a("div",{staticClass:"text-desc"},[a("p",[e._v(e._s(e.$t("views.storageManagement.detail.sizeStorage")))]),e._v(" "),a("p",[a("span",[e._v(e._s(e.baseinfo.sizedb))])])])])])]),e._v(" "),a("div",{staticClass:"app-container"},[a("div",{staticClass:"v-line"},[a("span",{staticClass:"primary-color"},[e._v(e._s(e.$t("views.storageManagement.fileManagement.title")))])]),e._v(" "),a("div",{staticClass:"options"},[a("div",{staticClass:"search"},[a("span",[e._v(e._s(e.$t("views.storageManagement.fileManagement.tableFileList.thName")))]),e._v(" "),a("el-input",{attrs:{size:"small"},model:{value:e.objParams.name,callback:function(t){e.$set(e.objParams,"name",t)},expression:"objParams.name"}}),e._v(" "),a("el-button",{staticClass:"views-btn-query",attrs:{size:"small"},on:{click:e.resetNameBtn}},[e._v(e._s(e.$t("views.button.reset")))]),e._v(" "),a("el-button",{staticClass:"views-btn-query",attrs:{size:"small"},on:{click:e.searchNameBtn}},[e._v(e._s(e.$t("views.button.search")))])],1),e._v(" "),e.showBtn?a("div",{staticClass:"btn-group"},[a("el-button",{staticClass:"dark mid btn",attrs:{size:"small"},on:{click:e.batchDeleteId}},[e._v(e._s(e.$t("views.button.batchDelete")))])],1):e._e()]),e._v(" "),a("sedu-path-breadcrumb",{ref:"seduPathBreadcrumb",staticStyle:{"font-size":"13px"},attrs:{matchKeyName:"id",backLabel:e.$t("views.storageManagement.fileManagement.seduPathBreadcrumb.backLabel"),allFileLabel:e.$t("views.storageManagement.fileManagement.seduPathBreadcrumb.allFileLabel"),callBack:e.getBackFileList}}),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"multipleTable",staticClass:"tab-content",staticStyle:{"margin-top":"10px"},attrs:{data:e.tableData,"default-sort":{prop:"date",order:"descending"},border:""},on:{"selection-change":e.selectChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("views.storageManagement.fileManagement.tableFileList.thName"),"show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return["true"===t.row.pseudo?a("div",[a("i",{staticClass:"iconfont icon-wenjianjia",staticStyle:{color:"#417dd0"}}),e._v(" \n            "),a("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){return e.updateTable(t.row)}}},[a("span",[e._v(e._s(t.row.name))])])]):a("div",[a("i",{staticClass:"el-icon-document"}),e._v(" \n            "),a("span",[e._v(e._s(t.row.name))])])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:e.$t("views.storageManagement.fileManagement.tableFileList.thSize")},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(0!=t.row.size?e.numberFormatter(t.row.size,2):"--")+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:e.$t("views.storageManagement.fileManagement.tableFileList.thEncipher")},scopedSlots:e._u([{key:"default",fn:function(t){return["encrypt"===t.row.pin?a("el-tag",{attrs:{type:"success",size:"small"}},[e._v("加密")]):e._e(),e._v(" "),"decrypt"===t.row.pin?a("el-tag",{attrs:{type:"info",size:"small"}},[e._v("不加密")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:e.$t("views.storageManagement.fileManagement.tableFileList.thAction")},scopedSlots:e._u([{key:"default",fn:function(t){return["false"===t.row.pseudo?a("button",{staticClass:"btn",on:{click:function(a){return e.downloadFile(t.row)}}},[e._v("\n            "+e._s(e.$t("views.storageManagement.fileManagement.tableFileList.btnEdit"))+"\n          ")]):e._e(),e._v(" "),"false"!==t.row.pseudo||e.showBtn?e._e():a("span",[e._v("--")]),e._v(" "),e.showBtn?a("button",{staticClass:"del",on:{click:function(a){return e.deleteFile(t.row)}}},[e._v("\n            "+e._s(e.$t("views.button.delete"))+"\n          ")]):e._e()]}}])}),e._v(" "),a("div",{attrs:{slot:"empty"},slot:"empty"},[a("div",{staticClass:"views-empty"},[a("span",{staticClass:"views-empty-table"}),e._v(" "),a("p",{staticClass:"views-empty-text"},[e._v(e._s(e.$t("views.table.noData")))])])])],1),e._v(" "),a("el-pagination",{staticClass:"tab-page",attrs:{layout:"prev, pager, next","page-size":e.pageSize,"current-page":e.Pagination.page,total:e.Pagination.total_count},on:{"update:currentPage":function(t){return e.$set(e.Pagination,"page",t)},"update:current-page":function(t){return e.$set(e.Pagination,"page",t)},"current-change":e.pageChange}})],1)])},staticRenderFns:[]},i=a("C7Lr")(s,n,!1,null,null,null);t.default=i.exports}});
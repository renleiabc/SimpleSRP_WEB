webpackJsonp([69],{vKWT:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("aA9S"),l=a.n(i),s=a("IHPB"),n=a.n(s),o={name:"objectImage",data:function(){return{pickerOptions:{shortcuts:[{text:this.$t("views.imageManagement.recentOneWeek"),onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:this.$t("views.imageManagement.recentOneMonth"),onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:this.$t("views.imageManagement.recentThreeMonth"),onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},imageTypeOptions:[],imageStatusOptions:[{value:0,label:"上传中"},{value:1,label:"可用"},{value:2,label:"失败"}],listProject:[],isCreatImage:!0,pageSize:10,detailDialogVisible:!1,detailData:{},multipleSelection:[],tableData:{msg:[],url:"/image/imagelist",loading:!1,Pagination:{page:1,total_count:1},sel:{is_init:2,name:"",sort:"",category:"",project_id:"",status:"",full_date:"",start_time:"",end_time:""}},imageId:""}},created:function(){var e=this;this.initMsg(),this.$get("/image/checkauth").then(function(t){0===t.data.auth?e.isCreatImage=!1:e.isCreatImage=!0}),this.$get("/image/imagecategorylist",{is_init:this.tableData.sel.is_init}).then(function(t){200===t.code&&(e.imageTypeOptions=t.data.category)})},methods:{handleDetail:function(e,t){this.detailDialogVisible=!0,this.detailData=t},handleSelectionChange:function(e){var t=this;this.multipleSelection=[],e&&e.forEach(function(e,a,i){t.multipleSelection.push(e.id)}),this.multipleSelection=[].concat(n()(this.multipleSelection))},deleteMulImage:function(){this.multipleSelection.length?this.deleteRequest(this.multipleSelection):this.$message({type:"warning",message:this.$t("views.dialogText.selectNull")})},deleteSingleImage:function(e){this.deleteRequest([e])},clearSearch:function(){for(var e in this.listProject=[],this.tableData.sel)this.tableData.sel[e]="",this.tableData.sel.is_init=2;void 0!==this.tableData.Pagination&&(this.tableData.Pagination.page=1),this.initMsg()},initMsg:function(){var e=this;this.tableData.loading=!0;var t={};void 0!==this.tableData.Pagination&&(t={count:this.pageSize,page:this.tableData.Pagination.page}),void 0!==this.tableData.sel&&(this.tableData.sel.full_date&&2===this.tableData.sel.full_date.length?(this.tableData.sel.start_time=this.tableData.sel.full_date[0]+" 00:00:00",this.tableData.sel.end_time=this.tableData.sel.full_date[1]+" 23:59:59"):(this.tableData.sel.start_time="",this.tableData.sel.end_time=""),t=l()({},t,this.tableData.sel)),this.$get(this.tableData.url,t).then(function(t){var a=t.data.image_list;0===e.listProject.length&&(e.listProject=t.data.pro),e.tableData.msg=[].concat(n()(a)),void 0!==e.tableData.Pagination&&(e.tableData.Pagination.total_count=t.data.total_count),e.pageSize=t.data.per_page||10,e.tableData.loading=!1})},deleteRequest:function(e){var t=this;this.mixinConfirm("/image/imagedelete",{image_id:e}).then(function(e){e&&t.initMsg()})},sortTable:function(e){"descending"===e.order?this.tableData.sel.sort="-"+e.prop:this.tableData.sel.sort=e.prop,this.initMsg()},shareImage:function(e){var t=this;this.mixinConfirm("/image/imageshare",{image_id:e,is_init:1},this.$t("views.imageManagement.shareImage1")).then(function(e){e&&t.initMsg()})},changeImage:function(e){isNaN(e)?(this.imageId="",this.$router.push({name:"proEditImage",query:{is_init:2}})):(this.imageId=e,this.$router.push({name:"proEditImage",query:{imageId:e,is_init:2}}))}},components:{ImageDetail:a("dclA").a},beforeRouteLeave:function(e,t,a){"proEditImage"===e.name&&(""===this.imageId?e.meta.title="views.nav.addImage":e.meta.title="views.nav.editImage"),a()}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"views-public-image-manage"},[a("div",{staticClass:"tab-select"},[a("div",[a("span",{staticClass:"tab-select-title"},[e._v(e._s(e.$t("views.imageManagement.mirrorName")))]),e._v(" "),a("el-input",{attrs:{placeholder:e.$t("views.imageManagement.enter")},model:{value:e.tableData.sel.name,callback:function(t){e.$set(e.tableData.sel,"name",t)},expression:"tableData.sel.name"}})],1),e._v(" "),a("div",[a("span",{staticClass:"tab-select-title"},[e._v(e._s(e.$t("views.imageManagement.creationTime")))]),e._v(" "),a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","value-format":"yyyy-MM-dd","range-separator":"-","start-placeholder":e.$t("views.imageManagement.beginTime"),"end-placeholder":e.$t("views.imageManagement.endTime"),"picker-options":e.pickerOptions},model:{value:e.tableData.sel.full_date,callback:function(t){e.$set(e.tableData.sel,"full_date",t)},expression:"tableData.sel.full_date"}})],1),e._v(" "),a("div",[a("span",{staticClass:"tab-select-title"},[e._v(e._s(e.$t("views.imageManagement.status")))]),e._v(" "),a("el-select",{attrs:{clearable:"",filterable:"",placeholder:e.$t("views.imageManagement.chose")},model:{value:e.tableData.sel.status,callback:function(t){e.$set(e.tableData.sel,"status",t)},expression:"tableData.sel.status"}},e._l(e.imageStatusOptions,function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("div",[a("span",{staticClass:"tab-select-title"},[e._v(e._s(e.$t("views.imageManagement.mirrorClassification")))]),e._v(" "),a("el-select",{attrs:{clearable:"",filterable:"",placeholder:e.$t("views.imageManagement.chose")},model:{value:e.tableData.sel.category,callback:function(t){e.$set(e.tableData.sel,"category",t)},expression:"tableData.sel.category"}},e._l(e.imageTypeOptions,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),a("div",[a("span",{staticClass:"tab-select-title"},[e._v(e._s(e.$t("views.storageManagement.storage.belongSpace")))]),e._v(" "),a("el-select",{attrs:{clearable:"",filterable:"",placeholder:e.$t("views.imageManagement.chose")},model:{value:e.tableData.sel.project_id,callback:function(t){e.$set(e.tableData.sel,"project_id",t)},expression:"tableData.sel.project_id"}},e._l(e.listProject,function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("div",[a("el-button",{staticClass:"btn light small",on:{click:function(t){return e.clearSearch("tableData")}}},[e._v(e._s(e.$t("views.imageManagement.reset")))]),e._v(" "),a("el-button",{staticClass:"btn light small",on:{click:function(t){return e.initMsg()}}},[e._v(e._s(e.$t("views.imageManagement.select")))])],1)]),e._v(" "),a("div",{staticClass:"controls-else"},[a("el-button",{staticClass:"btn dark mid",attrs:{disabled:!e.isCreatImage},on:{click:function(t){return e.changeImage()}}},[e._v("\n      "+e._s(e.$t("views.imageManagement.createMirror"))+"\n    ")]),e._v(" "),a("el-button",{staticClass:"btn dark mid",on:{click:function(t){return e.deleteMulImage()}}},[e._v(e._s(e.$t("views.imageManagement.deleteMirror")))])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableData.loading,expression:"tableData.loading"}],staticClass:"tab-content",staticStyle:{"margin-top":"10px"},attrs:{data:e.tableData.msg,border:""},on:{"sort-change":e.sortTable,"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("views.imageManagement.mirrorName"),sortable:"custom",prop:"name","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.project.status?a("a",{attrs:{size:"mini"},on:{click:function(a){return e.handleDetail(t.$index,t.row)}}},[e._v(e._s(t.row.name))]):a("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("views.imageManagement.status"),"show-overflow-tooltip":"",width:"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(0==t.row.status?"上传中":1==t.row.status?"可用":"失败"))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"created_at",sortable:"custom","show-overflow-tooltip":"",label:e.$t("views.imageManagement.creationTime"),width:"200px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"category",sortable:"custom","show-overflow-tooltip":"",label:e.$t("views.imageManagement.mirrorClassification"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.imageCategory.name))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"project_name","show-overflow-tooltip":"",label:"所属项目"}}),e._v(" "),a("el-table-column",{attrs:{label:"项目状态",align:"center",prop:"project.status"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.project.status?a("span",[e._v("开发中")]):a("span",[e._v("已归档")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"describe","show-overflow-tooltip":"",label:e.$t("views.imageManagement.mirrorDescription")}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("views.imageManagement.operating"),width:"180px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.project.status?a("button",{staticClass:"btn",on:{click:function(a){return e.changeImage(t.row.id)}}},[e._v(e._s(e.$t("views.imageManagement.modify")))]):e._e(),e._v(" "),0==t.row.share&&1==t.row.status&&0==t.row.project.status?a("button",{staticClass:"btn",on:{click:function(a){return e.shareImage(t.row.id)}}},[e._v("共享")]):e._e(),e._v(" "),a("button",{staticClass:"del",on:{click:function(a){return e.deleteSingleImage(t.row.id)}}},[e._v(e._s(e.$t("views.imageManagement.delete")))])]}}])}),e._v(" "),a("div",{attrs:{slot:"empty"},slot:"empty"},[a("div",{staticClass:"views-empty"},[a("span",{staticClass:"views-empty-table"}),e._v(" "),a("p",{staticClass:"views-empty-text"},[e._v(e._s(e.$t("views.table.noData")))])])])],1),e._v(" "),a("el-pagination",{staticClass:"tab-page",attrs:{layout:"prev, pager, next","page-size":e.pageSize,"current-page":e.tableData.Pagination.page,total:e.tableData.Pagination.total_count},on:{"update:currentPage":function(t){return e.$set(e.tableData.Pagination,"page",t)},"update:current-page":function(t){return e.$set(e.tableData.Pagination,"page",t)},"current-change":function(t){return e.initMsg()}}}),e._v(" "),a("el-dialog",{attrs:{title:e.$t("views.imageManagement.mirrorDetails"),visible:e.detailDialogVisible},on:{"update:visible":function(t){e.detailDialogVisible=t}}},[a("image-detail",{attrs:{detailData:e.detailData}}),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticClass:"primary",attrs:{type:"primary"},on:{click:function(t){e.detailDialogVisible=!1}}},[e._v(e._s(e.$t("views.imageManagement.close")))])],1)],1)],1)},staticRenderFns:[]},c=a("C7Lr")(o,r,!1,null,null,null);t.default=c.exports}});
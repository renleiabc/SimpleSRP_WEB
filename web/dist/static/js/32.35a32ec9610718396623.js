webpackJsonp([32],{eBKl:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"namespaces",data:function(){return{pageSize:10,tableData1:{msg:[],loading:!0,Pagination:{currPage:1,total_count:5},sel:{name:"",type:"",user_name:"",page:1}},space_type:[{label:this.$t("views.clusterMonitoring.commonSpace"),value:0},{label:this.$t("views.clusterMonitoring.personalSpace"),value:1},{label:this.$t("views.clusterMonitoring.projectSpace"),value:2}],space_status:[]}},created:function(){var t=this.tableData1.sel;this.getStorageSpaces(t)},methods:{sortTable:function(t){"descending"===t.order?this.tableData1.sel.sort="-"+t.prop:this.tableData1.sel.sort=t.prop,this.initMsg()},clearSearch:function(t){for(var e in this[t].sel)this[t].sel[e]="";this.tableData1.sel.page=1,this.getStorageSpaces(this.tableData1.sel)},doSearch:function(t){this.tableData1.sel.page=1,this.getStorageSpaces(this.tableData1.sel)},changePage:function(t){console.log(t),this.tableData1.sel.page=t,this.getStorageSpaces(this.tableData1.sel)},objToArr:function(t){var e=[];if(t)for(var a in t)e.push(t[a]);return e},getStorageSpaces:function(t){var e=this;this.tableData1.loading=!0,this.$axios.get("/storage/satstorage",{params:t}).then(function(t){e.tableData1.msg=t.data.data.list,e.tableData1.Pagination.total_count=parseInt(t.data.data.total_count),e.tableData1.Pagination.currPage=parseInt(t.data.data.currPage),e.tableData1.loading=!1})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"views-cluster-monitoring-namespaces"},[a("div",{staticClass:"tab-select"},[a("div",[a("span",{staticClass:"tab-select-title"},[t._v(t._s(t.$t("views.clusterMonitoring.name")))]),t._v(" "),a("el-input",{attrs:{placeholder:t.$t("views.clusterMonitoring.enter")},model:{value:t.tableData1.sel.name,callback:function(e){t.$set(t.tableData1.sel,"name",e)},expression:"tableData1.sel.name"}})],1),t._v(" "),a("div",[a("span",{staticClass:"tab-select-title"},[t._v(t._s(t.$t("views.clusterMonitoring.spaceType")))]),t._v(" "),a("el-select",{attrs:{placeholder:t.$t("views.clusterMonitoring.chose")},model:{value:t.tableData1.sel.type,callback:function(e){t.$set(t.tableData1.sel,"type",e)},expression:"tableData1.sel.type"}},t._l(t.space_type,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),a("div",[a("span",{staticClass:"tab-select-title"},[t._v(t._s(t.$t("views.clusterMonitoring.user")))]),t._v(" "),a("el-input",{attrs:{placeholder:t.$t("views.clusterMonitoring.enter")},model:{value:t.tableData1.sel.user_name,callback:function(e){t.$set(t.tableData1.sel,"user_name",e)},expression:"tableData1.sel.user_name"}})],1),t._v(" "),a("div",[a("el-button",{staticClass:"btn light small",on:{click:function(e){return t.clearSearch("tableData1")}}},[t._v(t._s(t.$t("views.clusterMonitoring.reset")))]),t._v(" "),a("el-button",{staticClass:"btn light small",on:{click:function(e){return t.doSearch("tableData1")}}},[t._v(t._s(t.$t("views.clusterMonitoring.select")))])],1)]),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableData1.loading,expression:"tableData1.loading"}],staticClass:"tab-content",attrs:{data:t.tableData1.msg,border:""},on:{"sort-change":t.sortTable}},[a("el-table-column",{attrs:{type:"index",label:t.$t("views.clusterMonitoring.serialNumber"),align:"center",width:"60"}}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("views.clusterMonitoring.namespaceName"),prop:"namespace_name","show-overflow-tooltip":"",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.userName))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"type",align:"center",label:t.$t("views.clusterMonitoring.spaceType")},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.type?a("span",[t._v("\n          个人空间\n        ")]):0===e.row.type?a("span",[t._v("\n          公共空间\n        ")]):2===e.row.type?a("span",[t._v("\n          项目空间\n        ")]):a("span",[t._v("\n          --\n        ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":"",label:t.$t("views.clusterMonitoring.user")},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.user?a("span",[t._v("\n          "+t._s(e.row.user)+"\n        ")]):a("span",[t._v("\n          --\n        ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"fileNumber",align:"center",label:t.$t("views.clusterMonitoring.objectNum")}}),t._v(" "),a("el-table-column",{attrs:{prop:"occupiedCapacity",align:"center",label:t.$t("views.clusterMonitoring.storageNum")}}),t._v(" "),a("div",{attrs:{slot:"empty"},slot:"empty"},[a("div",{staticClass:"views-empty"},[a("span",{staticClass:"views-empty-table"}),t._v(" "),a("p",{staticClass:"views-empty-text"},[t._v(t._s(t.$t("views.table.noData")))])])])],1),t._v(" "),a("el-pagination",{staticClass:"tab-page",attrs:{layout:"prev, pager, next","page-size":t.pageSize,"current-page":t.tableData1.Pagination.currPage,total:t.tableData1.Pagination.total_count},on:{"update:currentPage":function(e){return t.$set(t.tableData1.Pagination,"currPage",e)},"update:current-page":function(e){return t.$set(t.tableData1.Pagination,"currPage",e)},"current-change":t.changePage}})],1)},staticRenderFns:[]},n=a("C7Lr")(s,l,!1,null,null,null);e.default=n.exports}});
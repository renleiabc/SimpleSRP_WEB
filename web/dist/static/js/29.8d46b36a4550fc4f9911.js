webpackJsonp([29],{QCcE:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("IHPB"),n=s.n(a),i=s("4YfN"),o=s.n(i),r=s("3cXf"),l=s.n(r),m={name:"warnManagement",data:function(){return{clearTimeMsg:"",clearTime:[],dataList:[],errorStr:"请输入0~100的整数",input4:0}},methods:{editeValue:function(t){this.dataList[t].isEdite=!1},saveValue:function(t){var e=this;this.validNum(t)&&(this.dataList[t].isEdite=!0,console.log(this.dataList[t]),this.$post("/system/systemwarningsetting",{ip:this.dataList[t].ip,cpu:this.dataList[t].cpuValue,memory:this.dataList[t].memoryValue,disk:this.dataList[t].diskValue,simple_disk:this.dataList[t].simpleDisk}).then(function(t){200===t.code&&e.$message({message:e.$t("views.notification.saved"),type:"success"})}))},limitInt:function(t){if(t>=0&&t<=100){return/^\d+$/g.test(t)}return!1},validNum:function(t){return console.log(this.dataList[t].simpleValid),this.limitInt(this.dataList[t].cpuValue)?(this.dataList[t].cpuValid=!0,this.limitInt(this.dataList[t].memoryValue)?(this.dataList[t].memoryValid=!0,this.limitInt(this.dataList[t].diskValue)?(this.dataList[t].diskValid=!0,this.limitInt(this.dataList[t].simpleDisk)?(this.dataList[t].simpleValid=!0,!0):(this.dataList[t].simpleValid=!1,!1)):(this.dataList[t].diskValid=!1,!1)):(this.dataList[t].memoryValid=!1,!1)):(this.dataList[t].cpuValid=!1,!1)},init:function(){var t=this;this.$get("/system/systemwarningconfig").then(function(e){if(200===e.code)for(var s in console.log(l()(e)),t.dataList=[],e.data){var a={};return a.ip=e.data[s].ip,a.isEdite=!0,a.cpu=e.data[s].cpu,a.cpuValue=e.data[s].cpu_config,a.cpuValid=!0,a.disk=e.data[s].disk,a.diskValue=e.data[s].disk_config,a.diskValid=!0,a.memory=e.data[s].memory,a.memoryValue=e.data[s].memory_config,a.memoryValid=!0,a.is_mian=e.data[s].is_mian,a.simpleDisk=e.data[s].simple_disk,a.simpleValid=!0,a.simpleTotal=e.data[s].simple_srp_disk_total,t.dataList.push(a)}else t.$message({message:e.message,type:"error"})})}},mounted:function(){this.init()}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"warn-system-management"},[s("h6",{staticClass:"title"},[t._v("警阀值设置：")]),t._v(" "),s("div",{staticClass:"v-flow"},t._l(t.dataList,function(e,a){return s("div",{key:a,staticClass:"v-warn"},[s("div",{staticClass:"v-list"},[s("div",{staticClass:"text-title"},[t._v("\n          cpu: "),s("span",[t._v(t._s(e.cpu))]),t._v("核\n        ")]),t._v(" "),s("div",{staticClass:"input-v"},[s("el-input",{attrs:{placeholder:"",disabled:e.isEdite},on:{blur:function(e){return t.validNum(a)}},model:{value:e.cpuValue,callback:function(s){t.$set(e,"cpuValue",s)},expression:"item.cpuValue"}},[s("template",{slot:"prepend"},[t._v("阀值：")]),t._v(" "),s("template",{slot:"append"},[t._v("%")])],2),t._v(" "),s("span",{staticClass:"error"},[t._v(t._s(e.cpuValid?"":t.errorStr))])],1),t._v(" "),s("div",{staticClass:"text-title"},[t._v("\n          内存: "),s("span",[t._v(t._s(e.memory))]),t._v("G\n        ")]),t._v(" "),s("div",{staticClass:"input-v"},[s("el-input",{attrs:{placeholder:"",disabled:e.isEdite},on:{blur:function(e){return t.validNum(a)}},model:{value:e.memoryValue,callback:function(s){t.$set(e,"memoryValue",s)},expression:"item.memoryValue"}},[s("template",{slot:"prepend"},[t._v("阀值：")]),t._v(" "),s("template",{slot:"append"},[t._v("%")])],2),t._v(" "),s("span",{staticClass:"error"},[t._v(t._s(e.memoryValid?"":t.errorStr))])],1),t._v(" "),s("div",{staticClass:"text-title"},[t._v("\n          硬盘: "),s("span",[t._v(t._s(e.disk))]),t._v("G\n        ")]),t._v(" "),s("div",{staticClass:"input-v"},[s("el-input",{attrs:{placeholder:"",disabled:e.isEdite},on:{blur:function(e){return t.validNum(a)}},model:{value:e.diskValue,callback:function(s){t.$set(e,"diskValue",s)},expression:"item.diskValue"}},[s("template",{slot:"prepend"},[t._v("阀值：")]),t._v(" "),s("template",{slot:"append"},[t._v("%")])],2),t._v(" "),s("span",{staticClass:"error"},[t._v(t._s(e.diskValid?"":t.errorStr))])],1),t._v(" "),s("div",{staticClass:"text-title"},[t._v("\n          存储: "),s("span",[t._v(t._s(e.simpleTotal))]),t._v("G\n        ")]),t._v(" "),s("div",{staticClass:"input-v"},[s("el-input",{attrs:{placeholder:"",disabled:e.isEdite},on:{blur:function(e){return t.validNum(a)}},model:{value:e.simpleDisk,callback:function(s){t.$set(e,"simpleDisk",s)},expression:"item.simpleDisk"}},[s("template",{slot:"prepend"},[t._v("阀值：")]),t._v(" "),s("template",{slot:"append"},[t._v("%")])],2),t._v(" "),s("span",{staticClass:"error"},[t._v(t._s(e.simpleValid?"":t.errorStr))])],1)]),t._v(" "),s("div",{staticClass:"controls"},[e.isEdite?s("el-button",{staticClass:"btn dark small",on:{click:function(e){return t.editeValue(a)}}},[t._v(t._s(t.$t("views.systemManagement.modify")))]):s("el-button",{staticClass:"btn dark small",on:{click:function(e){return t.saveValue(a)}}},[t._v(t._s(t.$t("views.systemManagement.save")))])],1)])}),0)])},staticRenderFns:[]},u=s("C7Lr")(m,c,!1,null,null,null).exports,p=s("aA9S"),g=s.n(p),d={name:"quotaSetting",data:function(){return{limitNum:[10,8,24],linSelData:"",linTabData:"",linLoad:"",linUrl:"",languageList:[{value:"中文",label:"中文"},{value:"英文",label:"English"}],basis:{disabled:!0,valided:!0,errorStr:{languages:"",page_num:"",user_create_num:""},content:{languages:"中文",page_num:"20",user_create_num:"5"}},mirror:{disabled:!0,valided:!0,errorStr:{project_image_num:"",personal_image_num:""},content:{project_image_num:"10",personal_image_num:"10"}},personal:{disabled:!0,valided:!0,errorStr:{cpu:"",memory:"",gpu:""},content:{cpu:"8",memory:"24",gpu:"1"}},storage:{disabled:!0,valided:!0,errorStr:{project_storage_size:"",project_storage_num:"",personal_storage_size:"",personal_storage_num:""},content:{project_storage_size:"100",project_storage_num:"10",personal_storage_size:"50",personal_storage_num:"10"}},tableData3:{msg:[],url:"/system/allproject",loading:!0,Pagination:{page:1,total_count:5}},pageSize:10}},methods:{getActiveTab:function(t){this.linTabData=t,this.linUrl=this[t].url,this.initMsg()},clearSearch:function(t){for(var e in this[t].sel)this[t].sel[e]="";void 0!==this[t].Pagination&&(this[t].Pagination.page=1),this.getActiveTab(t)},changePage:function(t){this.getActiveTab(t)},viladInput:function(t,e,s){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,n=t.split("."),i=e.split("."),o=this.limitInt(this[n[0]][n[1]][n[2]],s,a);console.log(o),o?(this[n[0]].valided=!0,this[i[0]][i[1]][i[2]]=""):(this[n[0]].valided=!1,this[i[0]][i[1]][i[2]]="请输入"+a+"~"+s+"的整数")},limitNotNull:function(t){return"basis"===t?""!==this.basis.content.page_num&&""!==this.basis.content.user_create_num:"mirror"===t?""!==this.mirror.content.project_image_num&&""!==this.mirror.content.personal_image_num:"personal"===t?""!==this.personal.content.cpu&&""!==this.personal.content.gpu&&""!==this.personal.content.memory:"storage"===t?""!==this.storage.content.project_storage_size&&""!==this.storage.content.project_storage_num&&""!==this.storage.content.personal_storage_size&&""!==this.storage.content.personal_storage_num:void 0},limitInt:function(t,e,s){if(t-0<s)return!1;if(t<=e){return/^\d+$/g.test(t)}return!1},initMsg:function(){var t=this;this[this.linTabData].loading=!0;var e={};void 0!==this[this.linTabData].Pagination&&(e=g()({},this[this.linTabData].Pagination,{count:this.pageSize})),void 0!==this[this.linTabData].sel&&(void 0!==this[this.linTabData].sel.full_time&&(""===this[this.linTabData].sel.full_time||null===this[this.linTabData].sel.full_time?(this[this.linTabData].sel.start_time="",this[this.linTabData].sel.end_time=""):(this[this.linTabData].sel.start_time=this[this.linTabData].sel.full_time[0],this[this.linTabData].sel.end_time=this[this.linTabData].sel.full_time[1])),e=g()({},e,this[this.linTabData].sel)),this.$axios.get(this[this.linTabData].url,{params:e}).then(function(e){var s=e.data.data.project_space;t[t.linTabData].msg=[].concat(n()(s)),void 0!==t[t.linTabData].Pagination&&(t[t.linTabData].Pagination.total_count=e.data.data.total_count),t.pageSize=e.data.data.per_page,t[t.linTabData].loading=!1})},setResource:function(t){this.$emit("setResource",t)},editBasis:function(){this.basis.disabled=!1},saveBasis:function(){var t=this;if(this.basis.valided){var e={type:"BasicConfig",log_type:"system_config",data:{}};e.data.language=this.basis.content.languages,e.data.per_page=this.basis.content.page_num,e.data.manage_project_num=this.basis.content.user_create_num,this.$post("/system/systemsetting",e).then(function(e){t.basis.disabled=!0,200===e.code?t.$message({message:t.$t("views.notification.saved"),type:"success"}):t.$message({message:e.message,type:"warning"})})}},editMirror:function(){this.mirror.disabled=!1},saveMirror:function(){var t=this;if(this.mirror.valided){var e={type:"ImageConfig",log_type:"system_config",data:{}};e.data.project_image_num=this.mirror.content.project_image_num,e.data.personal_image_num=this.mirror.content.personal_image_num,this.$post("/system/systemsetting",e).then(function(e){t.mirror.disabled=!0,200===e.code?t.$message({message:t.$t("views.notification.saved"),type:"success"}):t.$message({message:e.message,type:"warning"})})}},editPersonal:function(){this.personal.disabled=!1},savePersonal:function(){var t=this;if(this.personal.valided){var e={type:"PersonalResourceConfig",log_type:"system_config",data:{}};e.data.cpu=this.personal.content.cpu,e.data.memory=this.personal.content.memory,this.$post("/system/systemsetting",e).then(function(e){t.personal.disabled=!0,200===e.code?t.$message({message:t.$t("views.notification.saved"),type:"success"}):t.$message({message:e.message,type:"warning"})})}},editStorage:function(){this.storage.disabled=!1},saveStorage:function(){var t=this;if(this.storage.valided){var e={type:"StorageConfig",log_type:"system_config",data:{}};e.data.project_storage=this.storage.content.project_storage_size,e.data.project_num=this.storage.content.project_storage_num,e.data.personal_storage=this.storage.content.personal_storage_size,e.data.personal_num=this.storage.content.personal_storage_num,this.$post("/system/systemsetting",e).then(function(e){t.storage.disabled=!0,200===e.code?t.$message({message:t.$t("views.notification.saved"),type:"success"}):t.$message({message:e.message,type:"warning"})})}}},mounted:function(){var t=this;this.getActiveTab("tableData3"),this.$get("/system/systemconfig").then(function(e){t.basis.content.languages=e.data.base_setting.language,t.basis.content.user_create_num=e.data.base_setting.manage_project_num,t.basis.content.page_num=e.data.base_setting.per_page,t.mirror.content=o()({},e.data.images_setting),t.personal.content=o()({},e.data.person_space_setting),t.storage.content.project_storage_size=e.data.storage_param_setting.project_storage,t.storage.content.project_storage_num=e.data.storage_param_setting.project_num,t.storage.content.personal_storage_size=e.data.storage_param_setting.personal_storage,t.storage.content.personal_storage_num=e.data.storage_param_setting.personal_num,t.limitNum=[t.mirror.content.project_image_num,t.mirror.content.personal_image_num,t.personal.content.cpu,t.personal.content.memory,t.storage.content.project_storage_size,t.storage.content.project_storage_num,t.storage.content.personal_storage_size,t.storage.content.personal_storage_num,t.basis.content.user_create_num]})}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"quota-title"},[s("div",{staticClass:"item"},[s("p",{staticClass:"item-top"},[t._v("\n        "+t._s(t.$t("views.systemManagement.basicSettings"))+"\n      ")]),t._v(" "),s("div",{staticClass:"content"},[s("p",[t._v(t._s(t.$t("views.systemManagement.systemSetting.p5")))]),t._v(" "),s("el-input",{attrs:{disabled:!0===t.basis.disabled},on:{blur:function(e){return t.viladInput("basis.content.page_num","basis.errorStr.page_num",100)}},model:{value:t.basis.content.page_num,callback:function(e){t.$set(t.basis.content,"page_num",e)},expression:"basis.content.page_num"}}),t._v(" "),s("span",{staticClass:"error"},[t._v(t._s(t.basis.errorStr.page_num))]),t._v(" "),s("p",[t._v(t._s(t.$t("views.systemManagement.systemSetting.p6")))]),t._v(" "),s("el-input",{attrs:{disabled:!0===t.basis.disabled},on:{blur:function(e){return t.viladInput("basis.content.user_create_num","basis.errorStr.user_create_num",10,t.limitNum[8])}},model:{value:t.basis.content.user_create_num,callback:function(e){t.$set(t.basis.content,"user_create_num",e)},expression:"basis.content.user_create_num"}}),t._v(" "),s("span",{staticClass:"error"},[t._v(t._s(t.basis.errorStr.user_create_num))])],1),t._v(" "),s("div",{staticClass:"controls"},[!0===t.basis.disabled?s("el-button",{staticClass:"btn dark small",on:{click:t.editBasis}},[t._v(t._s(t.$t("views.systemManagement.modify")))]):t._e(),t._v(" "),!1===t.basis.disabled?s("el-button",{staticClass:"btn dark small",on:{click:t.saveBasis}},[t._v(t._s(t.$t("views.systemManagement.save")))]):t._e()],1)]),t._v(" "),s("div",{staticClass:"item"},[s("p",{staticClass:"item-top"},[t._v("\n        "+t._s(t.$t("views.systemManagement.mirrorParameterSetting"))+"\n      ")]),t._v(" "),s("div",{staticClass:"content"},[s("p",[t._v(t._s(t.$t("views.systemManagement.systemSetting.p7")))]),t._v(" "),s("el-input",{attrs:{disabled:!0===t.mirror.disabled},on:{blur:function(e){return t.viladInput("mirror.content.project_image_num","mirror.errorStr.project_image_num",100,t.limitNum[0])}},model:{value:t.mirror.content.project_image_num,callback:function(e){t.$set(t.mirror.content,"project_image_num",e)},expression:"mirror.content.project_image_num"}}),t._v(" "),s("span",{staticClass:"error"},[t._v(t._s(t.mirror.errorStr.project_image_num))]),t._v(" "),s("p",[t._v(t._s(t.$t("views.systemManagement.systemSetting.p8")))]),t._v(" "),s("el-input",{attrs:{disabled:!0===t.mirror.disabled},on:{blur:function(e){return t.viladInput("mirror.content.personal_image_num","mirror.errorStr.personal_image_num",100,t.limitNum[1])}},model:{value:t.mirror.content.personal_image_num,callback:function(e){t.$set(t.mirror.content,"personal_image_num",e)},expression:"mirror.content.personal_image_num"}}),t._v(" "),s("span",{staticClass:"error"},[t._v(t._s(t.mirror.errorStr.personal_image_num))])],1),t._v(" "),s("div",{staticClass:"controls"},[!0===t.mirror.disabled?s("el-button",{staticClass:"btn dark small",on:{click:t.editMirror}},[t._v(t._s(t.$t("views.systemManagement.modify")))]):t._e(),t._v(" "),!1===t.mirror.disabled?s("el-button",{staticClass:"btn dark small",on:{click:t.saveMirror}},[t._v(t._s(t.$t("views.systemManagement.save")))]):t._e()],1)]),t._v(" "),s("div",{staticClass:"item"},[s("p",{staticClass:"item-top"},[t._v("\n        "+t._s(t.$t("views.systemManagement.personalSpaceResourceQuota"))+"\n      ")]),t._v(" "),s("div",{staticClass:"content"},[s("p",[t._v("CPU")]),t._v(" "),s("el-input",{attrs:{disabled:!0===t.personal.disabled},on:{blur:function(e){return t.viladInput("personal.content.cpu","personal.errorStr.cpu",48,t.limitNum[2])}},model:{value:t.personal.content.cpu,callback:function(e){t.$set(t.personal.content,"cpu",e)},expression:"personal.content.cpu"}},[s("template",{slot:"append"},[t._v("核")])],2),t._v(" "),s("span",{staticClass:"error"},[t._v(t._s(t.personal.errorStr.cpu))]),t._v(" "),s("p",[t._v(t._s(t.$t("views.systemManagement.RAM")))]),t._v(" "),s("el-input",{attrs:{disabled:!0===t.personal.disabled},on:{blur:function(e){return t.viladInput("personal.content.memory","personal.errorStr.memory",128,t.limitNum[3])}},model:{value:t.personal.content.memory,callback:function(e){t.$set(t.personal.content,"memory",e)},expression:"personal.content.memory"}},[s("template",{slot:"append"},[t._v("G")])],2),t._v(" "),s("span",{staticClass:"error"},[t._v(t._s(t.personal.errorStr.memory))]),t._v(" "),s("p",[t._v("GPU")]),t._v(" "),s("el-input",{attrs:{disabled:!0},model:{value:t.personal.content.gpu,callback:function(e){t.$set(t.personal.content,"gpu",e)},expression:"personal.content.gpu"}},[s("template",{slot:"append"},[t._v("个")])],2),t._v(" "),s("span",{staticClass:"error"})],1),t._v(" "),s("div",{staticClass:"controls"},[!0===t.personal.disabled?s("el-button",{staticClass:"btn dark small",on:{click:t.editPersonal}},[t._v(t._s(t.$t("views.systemManagement.modify")))]):t._e(),t._v(" "),!1===t.personal.disabled?s("el-button",{staticClass:"btn dark small",on:{click:t.savePersonal}},[t._v(t._s(t.$t("views.systemManagement.save")))]):t._e()],1)]),t._v(" "),s("div",{staticClass:"item else"},[s("p",{staticClass:"item-top"},[t._v("\n        "+t._s(t.$t("views.systemManagement.storageSpaceParameterSetting"))+"\n      ")]),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"group"},[s("p",[t._v(t._s(t.$t("views.systemManagement.systemSetting.p9")))]),t._v(" "),s("div",{staticClass:"group-content"},[s("div",{staticClass:"group-content-item"},[s("p",[t._v(t._s(t.$t("views.systemManagement.systemSetting.p10")))]),t._v(" "),s("el-input",{attrs:{disabled:!0===t.storage.disabled},on:{blur:function(e){return t.viladInput("storage.content.project_storage_size","storage.errorStr.project_storage_size",1024,t.limitNum[4])}},model:{value:t.storage.content.project_storage_size,callback:function(e){t.$set(t.storage.content,"project_storage_size",e)},expression:"storage.content.project_storage_size"}},[s("template",{slot:"append"},[t._v("G")])],2),t._v(" "),s("span",{staticClass:"error"},[t._v(t._s(t.storage.errorStr.project_storage_size))])],1),t._v(" "),s("div",{staticClass:"group-content-item"},[s("p",[t._v(t._s(t.$t("views.systemManagement.count")))]),t._v(" "),s("el-input",{attrs:{disabled:!0===t.storage.disabled},on:{blur:function(e){return t.viladInput("storage.content.project_storage_num","storage.errorStr.project_storage_num",20,t.limitNum[5])}},model:{value:t.storage.content.project_storage_num,callback:function(e){t.$set(t.storage.content,"project_storage_num",e)},expression:"storage.content.project_storage_num"}},[s("template",{slot:"append"},[t._v("个")])],2),t._v(" "),s("span",{staticClass:"error"},[t._v(t._s(t.storage.errorStr.project_storage_num))])],1)])]),t._v(" "),s("div",{staticClass:"group"},[s("p",[t._v(t._s(t.$t("views.systemManagement.systemSetting.p11")))]),t._v(" "),s("div",{staticClass:"group-content"},[s("div",{staticClass:"group-content-item"},[s("p",[t._v(t._s(t.$t("views.systemManagement.systemSetting.p10")))]),t._v(" "),s("el-input",{attrs:{disabled:!0===t.storage.disabled},on:{blur:function(e){return t.viladInput("storage.content.personal_storage_size","storage.errorStr.personal_storage_size",512,t.limitNum[6])}},model:{value:t.storage.content.personal_storage_size,callback:function(e){t.$set(t.storage.content,"personal_storage_size",e)},expression:"storage.content.personal_storage_size"}},[s("template",{slot:"append"},[t._v("G")])],2),t._v(" "),s("span",{staticClass:"error"},[t._v(t._s(t.storage.errorStr.personal_storage_size))])],1),t._v(" "),s("div",{staticClass:"group-content-item"},[s("p",[t._v(t._s(t.$t("views.systemManagement.count")))]),t._v(" "),s("el-input",{attrs:{disabled:!0===t.storage.disabled},on:{blur:function(e){return t.viladInput("storage.content.personal_storage_num","storage.errorStr.personal_storage_num",20,t.limitNum[7])}},model:{value:t.storage.content.personal_storage_num,callback:function(e){t.$set(t.storage.content,"personal_storage_num",e)},expression:"storage.content.personal_storage_num"}},[s("template",{slot:"append"},[t._v("个")])],2),t._v(" "),s("span",{staticClass:"error"},[t._v(t._s(t.storage.errorStr.personal_storage_num))])],1)])])]),t._v(" "),s("div",{staticClass:"controls"},[!0===t.storage.disabled?s("el-button",{staticClass:"btn dark small",on:{click:t.editStorage}},[t._v(t._s(t.$t("views.systemManagement.modify")))]):t._e(),t._v(" "),!1===t.storage.disabled?s("el-button",{staticClass:"btn dark small",on:{click:t.saveStorage}},[t._v(t._s(t.$t("views.systemManagement.save")))]):t._e()],1)])]),t._v(" "),s("div",{staticClass:"quota-content"},[s("p",[t._v(t._s(t.$t("views.systemManagement.projectQuotaAdjustment")))]),t._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableData3.loading,expression:"tableData3.loading"}],staticClass:"tab-content",attrs:{data:t.tableData3.msg,border:""}},[s("el-table-column",{attrs:{type:"index",label:t.$t("views.systemManagement.serialNumber"),align:"center","show-overflow-tooltip":"",width:"50"}}),t._v(" "),s("el-table-column",{attrs:{prop:"name","show-overflow-tooltip":"",label:t.$t("views.systemManagement.projectName")}}),t._v(" "),s("el-table-column",{attrs:{prop:"userProfile.name","show-overflow-tooltip":"",label:t.$t("views.systemManagement.user")}}),t._v(" "),s("el-table-column",{attrs:{prop:"created_at",align:"center",width:"180",label:t.$t("views.systemManagement.creationTime")}}),t._v(" "),s("el-table-column",{attrs:{prop:"describe","show-overflow-tooltip":"",label:t.$t("views.systemManagement.projectDescription")}}),t._v(" "),s("el-table-column",{attrs:{label:t.$t("views.systemManagement.operating"),align:"center",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("button",{staticClass:"btn",on:{click:function(s){return t.setResource(e.row)}}},[t._v(t._s(t.$t("views.systemManagement.setResourceQuota")))])]}}])}),t._v(" "),s("div",{attrs:{slot:"empty"},slot:"empty"},[s("div",{staticClass:"views-empty"},[s("span",{staticClass:"views-empty-table"}),t._v(" "),s("p",{staticClass:"views-empty-text"},[t._v(t._s(t.$t("views.table.noData")))])])])],1),t._v(" "),s("el-pagination",{staticClass:"tab-page",attrs:{layout:"prev, pager, next","page-size":t.pageSize,"current-page":t.tableData3.Pagination.page,total:t.tableData3.Pagination.total_count},on:{"update:currentPage":function(e){return t.$set(t.tableData3.Pagination,"page",e)},"update:current-page":function(e){return t.$set(t.tableData3.Pagination,"page",e)},"current-change":function(e){return t.changePage("tableData3")}}})],1)])},staticRenderFns:[]},v={name:"systemSetting",data:function(){var t=this;return{parentActiveName:"quotaSetting",resourceForm:{cpu:"",gpu:"",memory:""},authorInf:{number:12312,time:"21天20秒"},isAuthor:!0,authorInput:"",multiple:!1,accept:".so",limit:0,myHeaders:{},authorUrl:window.Simple.php+"/v1/system/uploadauthfile",showFile:!1,resourceFormRules:{cpu:[{validator:function(e,s,a){if(!s)return a(t.$t("views.validError.notNull"));t.limitInt(s,128,t.selectRow.cpu)?a():a(new Error(t.$t("views.systemManagement.limeNum",{mix:t.selectRow.cpu||1,num:128})))},trigger:"blur",required:!0}],gpu:[{validator:function(e,s,a){if(!s)return a(t.$t("views.validError.notNull"));t.limitInt(s,16,t.selectRow.gpu)?a():a(new Error(t.$t("views.systemManagement.limeNum",{mix:t.selectRow.gpu||1,num:16})))},trigger:"blur",required:!0}],memory:[{validator:function(e,s,a){if(!s)return a(t.$t("views.validError.notNull"));t.limitInt(s,256,t.selectRow.memory)?a():a(new Error(t.$t("views.systemManagement.limeNum",{mix:t.selectRow.memory||1,num:256})))},trigger:"blur",required:!0}]},logTime:[],warnTimeMsg:3,logTimeMsg:"",diskCleaningPop:!1,diskCleaningPopMsg:{node_id:"",clear_time:""},setResourcePop:!1,setResourcePopMsg:{project_id:""},savePath:{key:"",path:""}}},methods:{handleShowInf:function(t){this.isAuthor=!1,this.authorInf.number=t.data.number,1===parseInt(t.data.is_permanent)?this.authorInf.time="永久授权":0===t.data.expired_time?this.authorInf.time="授权已过期":this.authorInf.time=t.data.expired_time},handleSaveauth:function(){var t=this,e=this.savePath;e.key=this.authorInput,""===e.key?this.$message({message:"请获取授权码！",type:"warning"}):""===e.path?this.$message({message:"请上传授权文件！",type:"warning"}):this.$post("/system/saveauth",e).then(function(e){200===e.code?(t.handleGetAuthorInit(),t.handleGetKey(),t.savePath.path=""):(t.isAuthor=!0,t.$message({message:e.message,type:"error"}))})},handleCopy:function(){""===this.authorInput&&this.$message({message:"请先获取授权码！",type:"warning"})},onCopy:function(t){console.log(t),this.$message({message:"复制成功！",type:"success"})},onError:function(t){this.$message({message:"复制失败！",type:"error"})},handleAvatarSuccess:function(t,e){200===t.code&&(this.savePath.path=t.data.path,this.$message({message:t.message,type:"success"}))},handleChange:function(t,e){},handleGetAuthorInit:function(){var t=this;this.$get("/system/getauthinfo").then(function(e){200===e.code?t.handleShowInf(e):(t.isAuthor=!0,t.$message({message:e.message,type:"error"}))})},handleGetKey:function(){var t=this;this.$get("/system/getkey").then(function(e){200===e.code?t.authorInput=e.data:t.$message({message:e.message,type:"error"})})},handleGetAuthorCode:function(){var t=this;this.authorInput?this.$confirm("此操作会导致以前的授权文件失效，您确定要重新生成授权码？","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$get("/system/generateauth").then(function(e){200===e.code?(t.authorInput=t.savePath.key=e.data.key,t.isAuthor=!0):t.$message({message:e.message,type:"error"})})}).catch(function(){t.$message({type:"info",message:"已取操作"})}):this.$get("/system/generateauth").then(function(e){200===e.code?t.authorInput=t.savePath.key=e.data.key:t.$message({message:e.message,type:"error"})})},limitInt:function(t,e,s){if(t-0<s)return!1;if(t-0!=0&&t<=e){return/^\d+$/g.test(t)}return!1},diskCleaning:function(t){this.diskCleaningPopMsg.clear_time="",this.diskCleaningPopMsg.node_id=t,this.diskCleaningPop=!0},diskCleaningPopDo:function(){var t=this;this.$axios.post("/clear-disk",this.diskCleaningPopMsg).then(function(e){t.diskCleaningPop=!1})},clickSettingTabs:function(){switch(this.parentActiveName){case"warnManagement":case"logSetting":break;case"quotaSetting":this.$refs.quota&&this.$refs.quota.initMsg();break;case"manageAuthorSetting":this.handleGetAuthorInit(),this.handleGetKey()}},setResource:function(t){var e=this;this.setResourcePopMsg.project_id=t.id,t?(this.resourceForm.cpu=t.cpu,this.resourceForm.gpu=t.gpu,this.resourceForm.memory=t.memory,this.selectRow=t):setTimeout(function(){e.$refs.resourceForm.resetFields()},0),this.setResourcePop=!0},setResourcePopDo:function(){var t=this;this.$refs.resourceForm.validate(function(e){e&&t.$post("/system/setprojectconfig",o()({},t.setResourcePopMsg,t.resourceForm)).then(function(e){200===e.code?(t.$message({message:t.$t("views.notification.succeed"),type:"success"}),t.$refs.quota.getActiveTab("tableData3"),t.setResourcePop=!1):t.$message({message:e.message,type:"error"})})})},handleClose2:function(){this.$refs.resourceForm.resetFields()},saveWarnTime:function(){var t=this,e={type:"BasicConfig",log_type:"system_warning",data:{}};e.data.warning_save=this.warnTimeMsg,this.$post("/system/systemsetting",e).then(function(e){200===e.code?t.$message({message:t.$t("views.notification.saved"),type:"success"}):t.$message({message:e.message,type:"warning"})})},saveLogTime:function(){var t=this,e={type:"BasicConfig",log_type:"system_log",data:{}};e.data.system_save=this.logTimeMsg,this.$post("/system/systemsetting",e).then(function(e){200===e.code?t.$message({message:t.$t("views.notification.saved"),type:"success"}):t.$message({message:e.message,type:"warning"})})}},components:{warnManagement:u,quotaSetting:s("C7Lr")(d,_,!1,null,null,null).exports},created:function(){var t=this;this.myHeaders={authorization:"Bearer "+sessionStorage.getItem("access_token")},this.$axios.get("/system/systemconfig").then(function(e){t.logTime=[].concat(n()(e.data.data.system_save)),t.warnTimeMsg=e.data.data.base_setting.warning_save-0,t.logTimeMsg=e.data.data.base_setting.system_save-0})}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"views-system-management-system-setting"},[s("el-tabs",{on:{"tab-click":t.clickSettingTabs},model:{value:t.parentActiveName,callback:function(e){t.parentActiveName=e},expression:"parentActiveName"}},[s("el-tab-pane",{attrs:{label:t.$t("views.systemManagement.systemConfigurationSettings"),name:"quotaSetting",lazy:!0}},[s("quota-setting",{ref:"quota",on:{setResource:t.setResource}})],1),t._v(" "),s("el-tab-pane",{attrs:{label:t.$t("views.systemManagement.systemLogSettings"),name:"logSetting",lazy:!0}},[s("div",{staticClass:"log-title"},[t._v("\n        "+t._s(t.$t("views.systemManagement.systemLogSettings"))+"："+t._s(t.$t("views.systemManagement.systemSetting.p3"))+"\n        "),s("el-select",{attrs:{placeholder:t.$t("views.systemManagement.chose")},model:{value:t.logTimeMsg,callback:function(e){t.logTimeMsg=e},expression:"logTimeMsg"}},t._l(t.logTime,function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v("\n        "+t._s(t.$t("views.systemManagement.systemSetting.p4"))+"\n        "),s("el-button",{staticClass:"btn dark small",on:{click:t.saveLogTime}},[t._v(t._s(t.$t("views.systemManagement.save")))])],1)]),t._v(" "),s("el-tab-pane",{attrs:{label:t.$t("views.systemManagement.warnManagementSettings"),name:"diskManagement"}},[s("div",{staticClass:"disk-title"},[t._v("\n        "+t._s(t.$t("views.systemManagement.warnManagementSettings"))+"："+t._s(t.$t("views.systemManagement.systemSetting.p1"))+"\n        "),s("el-select",{attrs:{placeholder:t.$t("views.systemManagement.chose")},model:{value:t.warnTimeMsg,callback:function(e){t.warnTimeMsg=e},expression:"warnTimeMsg"}},t._l(t.logTime,function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v("\n        "+t._s(t.$t("views.systemManagement.systemSetting.p2"))+"\n        "),s("el-button",{staticClass:"btn dark small",on:{click:t.saveWarnTime}},[t._v(t._s(t.$t("views.systemManagement.save")))])],1),t._v(" "),s("warn-management",{ref:"warnManage",on:{diskCleaning:t.diskCleaning}})],1),t._v(" "),s("el-tab-pane",{attrs:{label:t.$t("views.systemManagement.manageAuthorSetting"),name:"manageAuthorSetting"}},[s("div",{staticClass:"manageAuthor"},[t.isAuthor?s("div",{staticClass:"manage-no"},[t._v("\n          暂无授权行为\n        ")]):s("div",{staticClass:"manage-have"},[s("div",{staticClass:"mange-have-inf"},[s("div",{staticClass:"mange-have-people-num"},[t._v(t._s(t.authorInf.number))]),t._v(" "),s("div",[t._v("授权人数")])]),t._v(" "),s("div",{staticClass:"mange-have-inf"},[s("div",{staticClass:"mange-have-people-num"},[t._v(t._s(t.authorInf.time))]),t._v(" "),s("div",[t._v("授权剩余时间")])])]),t._v(" "),s("div",{staticClass:"author-row"},[s("span",{staticClass:"author-label"},[t._v("\n            授权码：\n          ")]),t._v(" "),s("el-input",{attrs:{placeholder:"获取授权码",disabled:!0},model:{value:t.authorInput,callback:function(e){t.authorInput=e},expression:"authorInput"}}),t._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:t.handleGetAuthorCode}},[t._v("点击生成授权码")]),t._v(" "),s("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.authorInput,expression:"authorInput",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],attrs:{type:"primary"},on:{click:t.handleCopy}},[t._v("复制授权码")])],1),t._v(" "),s("div",{staticClass:"author-upload"},[s("span",{staticClass:"author-label"},[t._v("\n            导入授权服务器：\n          ")]),t._v(" "),s("el-upload",{staticClass:"upload-demo",attrs:{action:t.authorUrl,"on-change":t.handleChange,name:"authfile",multiple:t.multiple,accept:t.accept,"on-success":t.handleAvatarSuccess,headers:t.myHeaders,"show-file-list":t.showFile}},[s("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上传")]),t._v(" "),s("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v('\n              只支持 ".so" 的文件上传\n            ')])],1)],1),t._v(" "),s("div",{staticClass:"author-row"},[s("span",{staticClass:"author-label"}),t._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:t.handleSaveauth}},[t._v("点击授权")])],1)])])],1),t._v(" "),s("el-dialog",{staticClass:"diskCleaningPop small",attrs:{title:t.$t("views.systemManagement.diskCleaning"),visible:t.diskCleaningPop,width:"30%"},on:{"update:visible":function(e){t.diskCleaningPop=e}}},[s("div",{staticClass:"content"},[t._v("\n      "+t._s(t.$t("views.systemManagement.clean"))+"\n      "),s("el-date-picker",{attrs:{type:"date",placeholder:t.$t("views.systemManagement.chose")},model:{value:t.diskCleaningPopMsg.clear_time,callback:function(e){t.$set(t.diskCleaningPopMsg,"clear_time",e)},expression:"diskCleaningPopMsg.clear_time"}}),t._v("\n      "+t._s(t.$t("views.systemManagement.systemSetting.p12"))+"\n    ")],1),t._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{staticClass:"cancel",on:{click:function(e){t.diskCleaningPop=!1}}},[t._v(t._s(t.$t("views.systemManagement.cancel")))]),t._v(" "),s("el-button",{staticClass:"primary",attrs:{type:"primary"},on:{click:t.diskCleaningPopDo}},[t._v(t._s(t.$t("views.systemManagement.start")))])],1)]),t._v(" "),s("el-dialog",{staticClass:"small",attrs:{title:t.$t("views.systemManagement.setResourceQuota"),visible:t.setResourcePop,width:"50%"},on:{close:t.handleClose2,"update:visible":function(e){t.setResourcePop=e}}},[s("div",{staticClass:"content"},[s("el-form",{ref:"resourceForm",attrs:{model:t.resourceForm,rules:t.resourceFormRules,"label-width":"80px"}},[s("el-form-item",{attrs:{label:"CPU",prop:"cpu"}},[s("el-input",{model:{value:t.resourceForm.cpu,callback:function(e){t.$set(t.resourceForm,"cpu",e)},expression:"resourceForm.cpu"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"内存",prop:"memory"}},[s("el-input",{model:{value:t.resourceForm.memory,callback:function(e){t.$set(t.resourceForm,"memory",e)},expression:"resourceForm.memory"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"GPU",prop:"gpu"}},[s("el-input",{model:{value:t.resourceForm.gpu,callback:function(e){t.$set(t.resourceForm,"gpu",e)},expression:"resourceForm.gpu"}})],1)],1)],1),t._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{staticClass:"cancel",on:{click:function(e){t.setResourcePop=!1}}},[t._v(t._s(t.$t("views.systemManagement.cancel")))]),t._v(" "),s("el-button",{staticClass:"primary",attrs:{type:"primary"},on:{click:t.setResourcePopDo}},[t._v(t._s(t.$t("views.systemManagement.save")))])],1)])],1)},staticRenderFns:[]},b=s("C7Lr")(v,h,!1,null,null,null);e.default=b.exports}});
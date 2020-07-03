webpackJsonp([52],{mk71:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("ZLEe"),o=s.n(r),i=s("3cXf"),a=s.n(i),l=s("zsLt"),n=s.n(l),c=s("kfHR"),d=s.n(c),u=s("KxGM"),m=s("v46e"),v={data:function(){return{input:"",textarea:"",obj:{project_id:""},projectId:"",labelWidth:"120px",storage_id:{},storage_object_id:{},modelDialog:{title:"选择使用模型",dialogCode:!1,isFirst:!1,isSecond:!1,type:1},isLoading:!1,assembly:"",mount_info:"",ruleForm:{name:"",memory:"4",useModel:"",task:"",engine:"tensorflow",version:"",cpu:"1",paramsName:"model_name",model:"",radio:"GRPC",desc:""},modelRules:{name:[{required:!0,validator:function(e,t,s){""===t?s(new Error("请输入名称")):Object(m.j)(t)?s():s(new Error("只能输入2-30位字母、数字、下划线"))},trigger:"blur"},{min:2,max:30,message:this.$t("views.development.youCan"),trigger:"blur"}],engine:[{required:!0,message:"请选择引擎类型",trigger:"change"}],version:[{required:!0,message:"请选择版本信息",trigger:"change"}],memory:[{required:!0,message:"内存不能为空",trigger:"change"}],cpu:[{required:!0,message:"CPU不能为空",trigger:"change"}],useModel:[{required:!0,message:"请选择使用的模型",trigger:"change"}],task:[{required:!0,validator:function(e,t,s){""===t?s(new Error("请输入作业参数")):Object(m.j)(t)?s():s(new Error("只能输入2-30位字母、数字、下划线"))},trigger:"blur"},{min:2,max:30,message:this.$t("views.development.youCan"),trigger:"blur"}],desc:[{required:!1,validator:function(e,t,s){""===t?s():Object(m.d)(t)?s():s(new Error("不得包含特殊字符:<>:'\"/\\."))},trigger:"blur"}],radio:[{required:!0,message:"请选择接口类型",trigger:"change"}]},storageUserOn:{}}},beforeRouteLeave:function(e,t,s){var r=this.$route.query.partId;"partProjectDetails"===e.name&&void 0===e.query.partId?this.$router.push({name:"partProjectDetails",query:{partId:r}}):s()},created:function(){this.$store.dispatch("getPracticeengine"),this.$store.dispatch("getPracticeengineversion"),this.$store.dispatch("getModelinterfacetype");var e=this.$route.query.partId;this.projectId=this.obj.project_id=e,this.$store.dispatch("getprojectAttendConfig",this.obj)},watch:{STORE_THEME_LANG:{handler:function(e,t){"zh"===this.STORE_THEME_LANG&&(this.labelWidth="120px"),"en"===this.STORE_THEME_LANG&&(this.labelWidth="200px")}}},mounted:function(){"zh"===this.STORE_THEME_LANG&&(this.labelWidth="120px"),"en"===this.STORE_THEME_LANG&&(this.labelWidth="200px")},methods:{handleStorageUserOn:function(e){this.storageUserOn=e},storageId:function(e){var t=[];for(var s in e)t.push(e[s]);return t},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;var s=t.storageId(t.storage_id),r=t.storageId(t.storage_object_id),o=d()(new n.a(s)),i=d()(new n.a(r)),l={ModelPrediction:{project_id:t.obj.project_id,name:t.ruleForm.name,describe:t.ruleForm.desc,engine:t.ruleForm.engine,engine_version:t.ruleForm.version,mount_info:t.mount_info,gpu:0,cpu:t.ruleForm.cpu,memory:t.ruleForm.memory,type:t.ruleForm.radio,param:{model_name:t.ruleForm.task}},storage_object_id:i,storage_id:o};console.log(a()(l)),t.isLoading=!0,t.modelpredictioncreate(l)})},resetForm:function(e){this.$refs[e].resetFields(),this.$router.go(-1)},interfaceType:function(e){console.log(e)},choice:function(){this.assembly="ViewsCodeDirectory",this.$store.commit("projectpath",{data:[]}),this.modelDialog.dialogCode=!0,this.modelDialog.isFirst=!0,this.modelDialog.isSecond=!0},dialogSure:function(){var e=this.$store.state.projectSpace.projectpath,t=this.storageUserOn;if(""===e)this.$message({message:"请选择目录",type:"warning"});else{var s=o()(e)[0];this.ruleForm.useModel=s,this.storage_id.first=e.storage_id,this.storage_object_id.first=e.storage_object_id,this.mount_info={model_path:e[s]},this.mount_info.keyFileName=t.keyname+".keytab",this.mount_info.keyFile=t.key_file,this.modelDialog.dialogCode=!1,this.assembly=""}},dialogColse:function(){this.modelDialog.dialogCode=!1,this.assembly=""},handleClose:function(e){e()},modelpredictioncreate:function(e){var t=this;this.$post("/model/modelpredictioncreate",e).then(function(e){t.isLoading=!1,200===e.code?(t.$message({message:e.message,type:"success"}),t.$router.go(-1)):t.$message({message:e.message,type:"error"})})}},components:{ViewsCodeDirectory:u.a},computed:{practiceengine:function(){return this.$store.getters.postPracticeengine},projectconfig:function(){return this.$store.getters.postAttendConfig},version:function(){return this.$store.getters.postVersion},faceType:function(){return this.$store.getters.postFaceType}}},p={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"views-personal"},[s("el-form",{ref:"ruleForm",staticClass:"views-icon-ruleForm",attrs:{model:e.ruleForm,rules:e.modelRules,"label-width":e.labelWidth}},[s("div",{staticClass:"views-header-inf"},[s("span",[e._v(e._s(e.$t("views.modelPrediction.basicInf")))])]),e._v(" "),s("div",{staticClass:"views-develop-inf"},[s("div",{staticClass:"views-task-input"},[s("el-form-item",{attrs:{label:e.$t("views.modelPrediction.job"),prop:"name"}},[s("el-input",{attrs:{minlength:"2",maxlength:"30",placeholder:e.$t("views.development.youCan"),clearable:""},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1)],1),e._v(" "),s("div",{staticClass:"views-task-image"},[s("el-form-item",{attrs:{label:e.$t("views.development.remarks"),prop:"desc"}},[s("el-input",{attrs:{type:"textarea",rows:6,maxlength:"200",placeholder:e.$t("views.development.pleaseContents")},model:{value:e.ruleForm.desc,callback:function(t){e.$set(e.ruleForm,"desc",t)},expression:"ruleForm.desc"}})],1)],1)]),e._v(" "),s("div",{staticClass:"views-header-inf"},[s("span",[e._v(e._s(e.$t("views.modelPrediction.parameterConfig")))])]),e._v(" "),s("div",{staticClass:"views-develop-inf views-model-image"},[s("div",{staticClass:"views-task-input"},[s("el-form-item",{attrs:{label:e.$t("views.modelPrediction.interfaceType"),prop:"radio"}},[s("el-radio-group",{on:{change:e.interfaceType},model:{value:e.ruleForm.radio,callback:function(t){e.$set(e.ruleForm,"radio",t)},expression:"ruleForm.radio"}},e._l(e.faceType,function(t){return s("el-radio",{key:t.label,attrs:{label:t.label}},[e._v("\n                            "+e._s(t.value)+"\n                        ")])}),1)],1)],1),e._v(" "),s("div",{staticClass:"views-develop-resources"},[s("el-form-item",{attrs:{label:e.$t("views.trainingTask.engineType"),prop:"engine"}},[s("el-select",{attrs:{placeholder:e.$t("views.development.pleaseChoose"),disabled:""},model:{value:e.ruleForm.engine,callback:function(t){e.$set(e.ruleForm,"engine",t)},expression:"ruleForm.engine"}},e._l(e.practiceengine,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),s("el-form-item",{attrs:{label:e.$t("views.trainingTask.versionInf"),prop:"version"}},[s("el-select",{attrs:{placeholder:e.$t("views.development.pleaseChoose")},model:{value:e.ruleForm.version,callback:function(t){e.$set(e.ruleForm,"version",t)},expression:"ruleForm.version"}},e._l(e.version,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),e._v(" "),s("div",{staticClass:"views-develop-image"},[s("el-form-item",{attrs:{label:e.$t("views.modelPrediction.useModel"),prop:"useModel"}},[s("div",{staticClass:"views-develop-choice"},[s("el-input",{attrs:{readonly:!0},model:{value:e.ruleForm.useModel,callback:function(t){e.$set(e.ruleForm,"useModel",t)},expression:"ruleForm.useModel"}}),e._v(" "),s("el-button",{staticClass:"view-btn-medium",attrs:{type:"primary"},on:{click:e.choice}},[e._v("选择")])],1)])],1),e._v(" "),s("div",{staticClass:"views-develop-image views-model-job"},[s("el-form-item",{staticClass:"views-divelop-none",attrs:{label:e.$t("views.modelPrediction.jobParameter"),prop:"task"}},[s("div",{staticClass:"views-develop-choice views-develop-block"},[s("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.paramsName,callback:function(t){e.$set(e.ruleForm,"paramsName",t)},expression:"ruleForm.paramsName"}}),e._v(" "),s("b",{staticClass:"views-task-sign"},[e._v("=")]),e._v(" "),s("el-form-item",{attrs:{"label-width":"0",prop:"task"}},[s("el-input",{attrs:{placeholder:e.$t("views.development.youCan"),clearable:"",minlength:"2",maxlength:"30"},model:{value:e.ruleForm.task,callback:function(t){e.$set(e.ruleForm,"task",t)},expression:"ruleForm.task"}})],1)],1)])],1),e._v(" "),s("div",{staticClass:"views-develop-image"},[s("el-form-item",{attrs:{label:e.$t("views.modelPrediction.nodeRules"),prop:"memory"}},[s("div",{staticClass:"views-model-task views-task-border"},[s("div",{staticClass:"views-task-sitting views-task-sitting-mg"},[s("span",{staticClass:"views-task-cpu"},[e._v("CPU")]),e._v(" "),s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.cpu,callback:function(t){e.$set(e.ruleForm,"cpu",t)},expression:"ruleForm.cpu"}},e._l(e.projectconfig.cpu_config,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v(" 核\n                            "),e._v(" "),s("span",{staticClass:"views-task-cpu"},[e._v(e._s(e.$t("views.projectContent.memory")))]),e._v(" "),s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.memory,callback:function(t){e.$set(e.ruleForm,"memory",t)},expression:"ruleForm.memory"}},e._l(e.projectconfig.memory_config,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v("\n                             G\n                        ")],1)])])],1)]),e._v(" "),s("div",{staticClass:"views-develop-btn"},[s("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v(e._s(e.$t("views.button.cancel")))]),e._v(" "),s("el-button",{staticClass:"view-btn-big",attrs:{type:"primary",loading:e.isLoading},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("\n                "+e._s(e.$t("views.button.run"))+"\n            ")])],1)]),e._v(" "),s("el-dialog",{staticClass:"small",attrs:{title:e.modelDialog.title,visible:e.modelDialog.dialogCode,"before-close":e.handleClose},on:{"update:visible":function(t){return e.$set(e.modelDialog,"dialogCode",t)}}},[s("div",{staticClass:"content"},[s(e.assembly,{tag:"component",attrs:{isFirst:e.modelDialog.isFirst,isSecond:e.modelDialog.isSecond,type:e.modelDialog.type,projectId:e.projectId},on:{storageUserOn:function(t){return e.handleStorageUserOn(t)}}})],1),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{staticClass:"cancel",on:{click:e.dialogColse}},[e._v(e._s(e.$t("views.button.cancel")))]),e._v(" "),s("el-button",{staticClass:"primary",attrs:{type:"primary"},on:{click:function(t){return e.dialogSure()}}},[e._v(e._s(e.$t("views.button.sure")))])],1)])],1)},staticRenderFns:[]},g=s("C7Lr")(v,p,!1,null,null,null);t.default=g.exports}});
webpackJsonp([62],{"n/rF":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("IHPB"),a=s.n(i),l=s("ZoQJ"),o=s("v46e"),r={data:function(){var e=Object(l.b)(),t=new Date,s=Object(l.e)(t);return{editDisabled:!0,dialogModel:!1,remarksDialog:!1,downDialog:!1,clearable:!1,modelBasic:"",modelarea:"",modelName:"",journal:"",pickerOptions:e,practice_node:"",obj:{model_id:""},logParams:{model_id:"",model_node:""},labelWidth:"120px",ruleForm:{name:"",desc:""},descRules:{desc:[{required:!1,validator:function(e,t,s){""===t?s():Object(o.d)(t)?s():s(new Error("不得包含特殊字符:<>:'\"/\\."))},trigger:"blur"}]},nodeTime:"",modelRules:{name:[{required:!0,validator:function(e,t,s){""===t?s(new Error("请输入名称")):Object(o.j)(t)?s():s(new Error("只能输入2-30位字母、数字、下划线"))},trigger:"blur"},{min:2,max:30,message:this.$t("views.development.youCan"),trigger:"blur"}]},nodeObj:{id:"",node:"",start_time:s,type:2},pract:{practice_id:""}}},created:function(){this.nodeObj.id=this.logParams.model_id=this.obj.model_id=this.$route.params.perModelId,this.pract.practice_id=this.$route.params.perModelId,this.getModelDetails(this.obj),this.getModelpredictionlog(this.logParams)},mounted:function(){},destroyed:function(){window.clearTimeout(this.timer)},beforeRouteLeave:function(e,t,s){window.clearTimeout(this.timer),s()},methods:{formatSeconds:l.c,getModelDetails:function(e){var t=this;this.$get("/model/modelpredictiondetail",e).then(function(e){200===e.code?(t.modelBasic=e.data.model_prediction,t.ruleForm.name=t.modelBasic.name,t.ruleForm.desc=t.modelBasic.describe):t.$message({message:e.message,type:"error"})})},modelpredictionupdate:function(e){var t=this;this.$post("/model/modelpredictionupdate",e).then(function(e){200===e.code?(t.$message({message:e.message,type:"success"}),t.getModelDetails(t.obj)):t.$message({message:e.message,type:"error"})})},getModelpredictionlog:function(e){var t=this,s=this;this.$post("/model/modelpredictionlog",e).then(function(e){200===e.code?(0!==e.data.length&&(t.journal=e.data.model_log,t.practice_node=[{label:"全部",value:""}].concat(a()(e.data.model_node))),t.timer=setTimeout(function(){s.getModelpredictionlog(t.logParams)},1e4)):t.$message({message:e.message,type:"error"})})},remarksEdit:function(){this.ruleForm.desc=this.modelBasic.describe,this.remarksDialog=!0},modelEdit:function(){this.dialogModel=!0,this.ruleForm.name=this.modelBasic.name},dialogCancel:function(e){this.$refs[e].resetFields(),this.dialogModel=!1},remarksCancel:function(e){this.$refs[e].resetFields(),this.remarksDialog=!1},handleClose:function(e){e()},changeDialogSingle:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;var s={model_id:t.obj.model_id,"ModelPrediction[name]":t.ruleForm.name};t.modelpredictionupdate(s),t.dialogModel=!1})},remarksDialogSingle:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;var s={model_id:t.obj.model_id,"ModelPrediction[describe]":t.ruleForm.desc};t.modelpredictionupdate(s),t.remarksDialog=!1})},changeLogModel:function(e){this.logParams.model_node=e,this.getModelpredictionlog(this.logParams)},downLog:function(){this.downDialog=!0},dialogSingleSure:function(){this.$store.commit("downloadlog",this.nodeObj),this.downDialog=!1}},components:{},computed:{}},d={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"views-personal"},[s("div",{staticClass:"views-header-inf"},[s("span",[e._v(e._s(e.$t("views.modelPrediction.basicInf")))])]),e._v(" "),""!==e.modelBasic?s("table",{staticClass:"views-project-details views-tabel-details"},[s("tr",[s("td",{staticClass:"views-basic-color1"},[e._v("作业名称")]),e._v(" "),s("td",{staticClass:"views-basic-name"},[s("el-input",{attrs:{placeholder:"",disabled:e.editDisabled},model:{value:e.modelBasic.name,callback:function(t){e.$set(e.modelBasic,"name",t)},expression:"modelBasic.name"}}),e._v(" "),s("i",{staticClass:"iconfont icon-edit views-icon-edit",on:{click:e.modelEdit}})],1),e._v(" "),s("td",{staticClass:"views-basic-color1"},[e._v("作业状态")]),e._v(" "),s("td",["0"===e.modelBasic.status?s("span",[e._v("运行失败")]):e._e(),e._v(" "),"1"===e.modelBasic.status?s("span",[e._v(e._s(e.$t("views.status.running")))]):e._e(),e._v(" "),"2"===e.modelBasic.status?s("span",[e._v("创建中")]):e._e()])]),e._v(" "),s("tr",[s("td",{staticClass:"views-basic-color2"},[e._v("引擎类型")]),e._v(" "),s("td",{staticClass:"views-basic-color3"},[e._v(e._s(e.modelBasic.engine))]),e._v(" "),s("td",{staticClass:"views-basic-color2"},[e._v("ID")]),e._v(" "),s("td",{staticClass:"views-basic-color3"},[e._v(e._s(e.modelBasic.model_uid))])]),e._v(" "),s("tr",[s("td",{staticClass:"views-basic-color1"},[e._v("创建时间")]),e._v(" "),s("td",[e._v(e._s(e.modelBasic.created_at))]),e._v(" "),s("td",{staticClass:"views-basic-color1"},[e._v("运行时长")]),e._v(" "),s("td",[e._v(e._s(e.formatSeconds(e.modelBasic.used_time)))])]),e._v(" "),s("tr",[s("td",{staticClass:"views-basic-color2"},[e._v("计算节点规格")]),e._v(" "),s("td",{staticClass:"views-basic-color3"},[s("span",{staticClass:"views-table-margin"},[e._v("\n          CPU:"+e._s(e.modelBasic.cpu)+" 核\n        ")]),e._v(" "),s("span",{staticClass:"views-table-margin"},[e._v("\n          内存:"+e._s(e.modelBasic.memory)+" G\n        ")])]),e._v(" "),s("td",{staticClass:"views-basic-color2"},[e._v("使用模型")]),e._v(" "),s("td",{staticClass:"views-basic-color3"},[s("div",{staticClass:"views-table-word"},[e._v("\n          "+e._s(e.modelBasic.mount_info.model_path.s3_path)+"\n        ")])])]),e._v(" "),s("tr",[s("td",{staticClass:"views-basic-color1"},[e._v("接口类型")]),e._v(" "),s("td",[e._v(e._s(e.modelBasic.type))]),e._v(" "),s("td",{staticClass:"views-basic-color1"},[e._v("计算节点个数")]),e._v(" "),s("td",[e._v("1")])]),e._v(" "),s("tr",[s("td",{staticClass:"views-basic-color2"},[e._v("作业参数")]),e._v(" "),s("td",{staticClass:"views-basic-color3"},[e._v("model_name="+e._s(e.modelBasic.param.model_name))]),e._v(" "),s("td",{staticClass:"views-basic-color2"},[e._v("服务器地址")]),e._v(" "),s("td",{staticClass:"views-basic-color3"},[s("span",[e._v(e._s(e.modelBasic.ip))])])])]):e._e(),e._v(" "),e._m(0),e._v(" "),s("div",{staticClass:"views-develop-remarks"},[s("div",{staticClass:"views-develop-edit"},[s("i",{staticClass:"iconfont icon-edit views-icon-edit",on:{click:e.remarksEdit}})]),e._v(" "),s("el-input",{attrs:{type:"textarea",rows:8,placeholder:"请输入内容",disabled:e.editDisabled},model:{value:e.modelBasic.describe,callback:function(t){e.$set(e.modelBasic,"describe",t)},expression:"modelBasic.describe"}})],1),e._v(" "),s("div",{staticClass:"views-model-log"},[e._m(1),e._v(" "),s("div",{staticClass:"views-task-news"},[s("div",{staticClass:"views-task-select"},[s("el-select",{ref:"changeFocus",attrs:{placeholder:"请选择"},on:{change:e.changeLogModel},model:{value:e.logParams.model_node,callback:function(t){e.$set(e.logParams,"model_node",t)},expression:"logParams.model_node"}},e._l(e.practice_node,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value,title:e.label}})}),1),e._v(" "),s("el-button",{staticClass:"view-btn-medium",attrs:{type:"primary"},on:{click:e.downLog}},[e._v("下载日志")])],1)]),e._v(" "),s("p",{staticClass:"views-task-text"},[e._v("在运行日志内使用鼠标上下滚动获取更多的日志")]),e._v(" "),s("div",{staticClass:"views-task-log"},[s("el-scrollbar",{staticStyle:{height:"100%"}},[s("div",{staticClass:"veiws-text-log"},e._l(e.journal,function(t,i){return s("div",{key:i,staticClass:"views-text-span"},[s("span",[e._v(e._s(i)+"：")]),e._v(" "),e._l(t,function(t,i){return s("div",{key:i},[e._v("\n              "+e._s(t)+"\n            ")])})],2)}),0)])],1)]),e._v(" "),s("el-dialog",{attrs:{title:"修改作业名称",visible:e.dialogModel,width:"30%","before-close":e.handleClose,top:"30vh","custom-class":"views-dialog"},on:{"update:visible":function(t){e.dialogModel=t}}},[s("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.modelRules,"label-width":e.labelWidth}},[s("div",{staticClass:"views-modify-name"},[s("el-form-item",{attrs:{label:e.$t("views.modelPrediction.jobName"),prop:"name"}},[s("el-input",{attrs:{placeholder:e.$t("views.development.youCan"),minlength:"2",maxlength:"30",clearable:""},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1)],1)]),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{staticClass:"cancel",on:{click:function(t){return e.dialogCancel("ruleForm")}}},[e._v("取 消")]),e._v(" "),s("el-button",{staticClass:"primary",attrs:{type:"primary"},on:{click:function(t){return e.changeDialogSingle("ruleForm")}}},[e._v("确 定")])],1)],1),e._v(" "),s("el-dialog",{attrs:{title:"修改备注信息",visible:e.remarksDialog,width:"30%","before-close":e.handleClose,top:"30vh","custom-class":"views-dialog"},on:{"update:visible":function(t){e.remarksDialog=t}}},[s("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.descRules,"label-width":e.labelWidth}},[s("div",{staticClass:"views-dialog-develop"},[s("el-form-item",{attrs:{label:"备注信息",prop:"desc"}},[s("el-input",{attrs:{type:"textarea",rows:8,maxlength:"200",placeholder:"请输入内容"},model:{value:e.ruleForm.desc,callback:function(t){e.$set(e.ruleForm,"desc",t)},expression:"ruleForm.desc"}})],1)],1)]),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{staticClass:"cancel",on:{click:function(t){return e.remarksCancel("ruleForm")}}},[e._v("取 消")]),e._v(" "),s("el-button",{staticClass:"primary",attrs:{type:"primary"},on:{click:function(t){return e.remarksDialogSingle("ruleForm")}}},[e._v("确 定")])],1)],1),e._v(" "),s("el-dialog",{attrs:{title:"下载日志",visible:e.downDialog,width:"30%","before-close":e.handleClose,top:"30vh","custom-class":"views-dialog"},on:{"update:visible":function(t){e.downDialog=t}}},[s("div",{staticClass:"views-dialog-develop views-dialog-loading"},[s("div",[s("span",{staticClass:"tab-select-title tab-select-mg"},[e._v("选择节点：")]),e._v(" "),s("el-select",{attrs:{placeholder:e.$t("views.development.pleaseChoose"),clearable:""},model:{value:e.nodeObj.node,callback:function(t){e.$set(e.nodeObj,"node",t)},expression:"nodeObj.node"}},e._l(e.practice_node,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value,title:e.label}})}),1)],1),e._v(" "),s("div",{staticClass:"views-input-box views-input-time"},[s("span",{staticClass:"tab-select-title  tab-select-mg"},[e._v("选择时间：")]),e._v(" "),s("div",{staticClass:"views-date-picter"},[s("el-date-picker",{attrs:{align:"right",type:"date",editable:!1,"value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期","picker-options":e.pickerOptions,clearable:e.clearable},model:{value:e.nodeObj.start_time,callback:function(t){e.$set(e.nodeObj,"start_time",t)},expression:"nodeObj.start_time"}}),s("span",{staticClass:"views-time-now"},[e._v(" ~ 现在")])],1)])]),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{staticClass:"cancel",on:{click:function(t){e.downDialog=!1}}},[e._v("取 消")]),e._v(" "),s("el-button",{staticClass:"primary",attrs:{type:"primary"},on:{click:e.dialogSingleSure}},[e._v("确 定")])],1)])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"views-header-inf"},[t("span",[this._v("备注信息")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"views-header-inf"},[t("span",[this._v("预测日志")])])}]},c=s("C7Lr")(r,d,!1,null,null,null);t.default=c.exports}});
webpackJsonp([40],{u3Zw:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("ZoQJ"),o={name:"myForum",data:function(){return{activeName:"first",total:0,per:0,currentPage:1,loading:!0,forumData:[],isCount:!1,obj:{page:0,keyword:"",type:0,created_at:"",last_at:"",views:"",id:"DESC",card:1},user_id:0,tag:[{label:this.$t("views.researchForum.myPosts"),name:"first",lazy:!0},{label:this.$t("views.researchForum.iParticipated"),name:"second",lazy:!0}],type:[{label:this.$t("views.researchForum.all"),active:!0},{label:this.$t("views.researchForum.help"),active:!1},{label:this.$t("views.researchForum.share"),active:!1},{label:this.$t("views.researchForum.notice"),active:!1},{label:this.$t("views.researchForum.announcement"),active:!1}]}},methods:{forumSend:function(){this.$router.push({name:"forumSend"})},getForumData:function(t){var e=this;this.$get("/forum/myforummanagelist",t).then(function(t){if(200===t.code){e.loading=!1,e.forumData=t.data.forums;var a=t.data.total_count,s=t.data.per_page;e.user_id=t.data.user_id,a<=s?e.isCount=!1:(e.isCount=!0,e.per=s,e.total=a)}else e.$message({message:t.message,type:"error"})})},searchTabs:function(){switch(this.clearSearch(),this.initTag(),this.activeName){case"first":this.obj.card=1;break;case"second":this.obj.card=2;break;default:this.obj.card=1}var t=this.obj;this.getForumData(t),this.currentPage=1},clearSearch:function(){var t={page:0,keyword:"",type:0,created_at:"",last_at:"",views:"",id:"DESC",card:1};return this.obj=t,t},sortChange:function(t){var e=t.column,a=t.prop,o=t.order;if(0===this.forumData.length)return this.$message({message:"数据为空",type:"warning"}),!1;var r={column:e,prop:a,order:o},i=r.prop,n="descending"===r.order?"DESC":"ASC",l=Object(s.h)(i,n);l.keyword=this.obj.keyword,l.type=this.obj.type,l.card=this.obj.card,this.getForumData(l)},changePageTabs:function(t){var e=this.obj;e.page=t,this.getForumData(e)},doSearch:function(){this.initTag(),this.obj.type=0,this.obj.page=0,this.obj.created_at="",this.obj.last_at="",this.obj.views="";var t=this.obj;this.getForumData(t)},changeType:function(t){console.log(t),this.type.forEach(function(e,a){e.active=!1,t===a&&(e.active=!0)}),this.obj.id="DESC",this.obj.views="",this.obj.created_at="",this.obj.last_at="",this.obj.type=t,this.currentPage=1,this.getForumData(this.obj)},initTag:function(){this.type.forEach(function(t,e){t.active=!1,0===e&&(t.active=!0)})},deleteCard:function(t){var e=this;this.$confirm("确定删除该帖子?","删除帖子",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",beforeClose:function(a,s,o){if("confirm"===a){s.confirmButtonLoading=!0;var r=[];r.push(t);var i={forum_id:r};e.$post("/forum/deletebench",i).then(function(t){200===t.code?(e.$message({message:t.message,type:"success"}),e.obj.id="DESC",e.obj.views="",e.obj.created_at="",e.obj.last_at="",e.currentPage=1,e.getForumData(e.obj)):e.$message({message:t.message,type:"error"}),s.confirmButtonLoading=!1,o()})}else o()}}).catch(function(){})}},created:function(){var t=this.obj;this.getForumData(t)},computed:{}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"views-research-forum-my"},[a("el-tabs",{on:{"tab-click":t.searchTabs},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.tag,function(e,s){return a("el-tab-pane",{key:s,attrs:{label:e.label,name:e.name}},[a("div",{staticClass:"tab-select"},[a("div",[a("el-input",{attrs:{placeholder:t.$t("views.researchForum.enter")},model:{value:t.obj.keyword,callback:function(e){t.$set(t.obj,"keyword",e)},expression:"obj.keyword"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.doSearch},slot:"append"})],1)],1),t._v(" "),a("div",[a("el-button",{staticClass:"btn dark mid link",on:{click:t.forumSend}},[a("a",[t._v("\n              "+t._s(t.$t("views.researchForum.post"))+"\n            ")])])],1)]),t._v(" "),a("p",{staticClass:"sel"},t._l(t.type,function(e,s){return a("button",{key:s,class:{active:e.active},on:{click:function(e){return t.changeType(s)}}},[t._v("\n          "+t._s(e.label)+"\n        ")])}),0),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"tab-content",attrs:{data:t.forumData},on:{"sort-change":t.sortChange}},[a("el-table-column",{attrs:{label:t.$t("views.researchForum.postTopic"),"show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{staticClass:"link text-ellipsis",attrs:{to:{name:"forumDetails",query:{forumId:e.row.id}}}},[a("i",{staticClass:"icon iconfont",class:"1"===e.row.type?"icon-qiuzhu":"2"===e.row.type?"icon-fenxiang":"3"===e.row.type?"icon-tongzhi1":"icon-gonggao2"}),t._v("\n              "+t._s(e.row.title)+"\n            ")])]}}],null,!0)}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("views.researchForum.authorReleaseTime"),width:"180",sortable:"custom",prop:"created_at","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",{staticClass:"top text-ellipsis"},[t._v(t._s(e.row.user_name))]),t._v(" "),a("p",{staticClass:"bottom text-ellipsis"},[t._v(t._s(e.row.created_at))])]}}],null,!0)}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("views.researchForum.replyClick"),width:"180",prop:"views","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",{staticClass:"top text-ellipsis"},[t._v(t._s(e.row.reply_num))]),t._v(" "),a("p",{staticClass:"bottom text-ellipsis"},[t._v(t._s(e.row.views))])]}}],null,!0)}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("views.researchForum.lastReply"),width:"180",prop:"last_at","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[null===e.row.last_reply?a("div",[t._v("\n              --\n            ")]):a("div",[a("p",{staticClass:"top text-ellipsis"},[t._v(t._s(e.row.last_reply))]),t._v(" "),a("p",{staticClass:"bottom text-ellipsis"},[t._v(t._s(e.row.last_at))])])]}}],null,!0)}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("views.researchForum.operating"),width:"100","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t.user_id===parseInt(e.row.user_id)?a("button",{staticClass:"btn",staticStyle:{padding:"0"},on:{click:function(a){return t.deleteCard(e.row.id)}}},[t._v(t._s(t.$t("views.researchForum.delete")))]):t._e()]}}],null,!0)}),t._v(" "),a("div",{attrs:{slot:"empty"},slot:"empty"},[a("div",{staticClass:"views-empty"},[a("span",{staticClass:"views-empty-table"}),t._v(" "),a("p",{staticClass:"views-empty-text"},[t._v(t._s(t.$t("views.table.noData")))])])])],1),t._v(" "),a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.isCount,expression:"isCount"}],staticClass:"tab-page",attrs:{layout:"prev, pager, next","page-size":t.per,"current-page":t.currentPage,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"current-change":t.changePageTabs}})],1)}),1)],1)},staticRenderFns:[]},i=a("C7Lr")(o,r,!1,null,null,null);e.default=i.exports}});
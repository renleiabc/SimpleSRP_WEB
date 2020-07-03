webpackJsonp([43],{"9+WO":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("ZoQJ");var o={name:"forumCenter",data:function(){return{linTabData:"",linUrl:"",forumData:[],loading:!0,isCount:!1,total:100,per:10,forumTitle:"",currentPage:1,tag:[{label:"researchForum.all",active:!0},{label:"researchForum.help",active:!1},{label:"researchForum.share",active:!1},{label:"researchForum.notice",active:!1},{label:"researchForum.announcement",active:!1}],obj:{page:0,keyword:"",type:0,created_at:"",last_at:"",views:"",id:"DESC"}}},methods:{generateTitle:function(t){var e=this.$te("views."+t),a=this.$t("views."+t);return e?a:t},forumSend:function(){this.$router.push({name:"forumSend"})},doSearch:function(){var t=this.forumTitle;this.obj.keyword=t;var e=this.obj;this.currentPage=1,this.getForumData(e)},changePage:function(t){var e=this.obj;e.page=t,this.getForumData(e)},getForumData:function(t){var e=this;this.$get("/forum/forumlist",t).then(function(t){if(200===t.code){e.loading=!1,e.forumData=t.data.forums;var a=t.data.total_count,s=t.data.per_page;a<=s?e.isCount=!1:(e.isCount=!0,e.per=s,e.total=a)}else e.$message({message:t.message,type:"error"})})},changeType:function(t){console.log(t),this.tag.forEach(function(e,a){e.active=!1,t===a&&(e.active=!0)});var e=this.obj;e.id="DESC",e.views="",e.created_at="",e.last_at="",e.type=t,this.currentPage=1,this.getForumData(e)},sortChange:function(t){var e=t.column,a=t.prop,o=t.order;if(0===this.forumData.length)return this.$message({message:"数据为空",type:"warning"}),!1;var r={column:e,prop:a,order:o},i=r.prop,n="descending"===r.order?"DESC":"ASC",l=Object(s.h)(i,n);l.keyword=this.obj.keyword,l.type=this.obj.type,this.getForumData(l)}},created:function(){},mounted:function(){var t=this.obj;this.getForumData(t)}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"views-research-forum-center views-table-content"},[a("div",{staticClass:"tab-select"},[a("div",[a("el-input",{attrs:{placeholder:t.$t("views.researchForum.enter")},model:{value:t.forumTitle,callback:function(e){t.forumTitle=e},expression:"forumTitle"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.doSearch},slot:"append"})],1)],1),t._v(" "),a("div",[a("el-button",{staticClass:"btn dark mid link",on:{click:t.forumSend}},[a("a",[t._v("\n          "+t._s(t.$t("views.researchForum.post"))+"\n        ")])])],1)]),t._v(" "),a("p",{staticClass:"sel"},t._l(t.tag,function(e,s){return a("button",{key:s,class:{active:e.active},on:{click:function(e){return t.changeType(s)}}},[t._v("\n      "+t._s(t.generateTitle(e.label))+"\n    ")])}),0),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"tab-content",attrs:{data:t.forumData},on:{"sort-change":t.sortChange}},[a("el-table-column",{attrs:{label:t.$t("views.researchForum.postTopic"),"default-sort":{prop:"poster_time"},"show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{staticClass:"link text-ellipsis",attrs:{to:{name:"forumDetails",query:{forumId:e.row.id}}}},[a("i",{staticClass:"icon iconfont",class:"1"===e.row.type?"icon-qiuzhu":"2"===e.row.type?"icon-fenxiang":"3"===e.row.type?"icon-tongzhi1":"icon-gonggao2"}),t._v("\n          "+t._s(e.row.title)+"\n        ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("views.researchForum.authorReleaseTime"),width:"180",sortable:"custom",prop:"created_at","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",{staticClass:"top text-ellipsis"},[t._v(t._s(e.row.user_name))]),t._v(" "),a("p",{staticClass:"bottom text-ellipsis"},[t._v(t._s(e.row.created_at))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("views.researchForum.replyClick"),width:"180",prop:"views","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",{staticClass:"top text-ellipsis"},[t._v(t._s(e.row.reply_num))]),t._v(" "),a("p",{staticClass:"bottom text-ellipsis"},[t._v(t._s(e.row.views))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("views.researchForum.lastReply"),width:"180",prop:"last_at","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[null===e.row.last_reply?a("div",[t._v("\n          --\n        ")]):a("div",[a("p",{staticClass:"top text-ellipsis"},[t._v(t._s(e.row.last_reply))]),t._v(" "),a("p",{staticClass:"bottom text-ellipsis"},[t._v(t._s(e.row.last_at))])])]}}])}),t._v(" "),a("div",{attrs:{slot:"empty"},slot:"empty"},[a("div",{staticClass:"views-empty"},[a("span",{staticClass:"views-empty-table"}),t._v(" "),a("p",{staticClass:"views-empty-text"},[t._v(t._s(t.$t("views.table.noData")))])])])],1),t._v(" "),a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.isCount,expression:"isCount"}],staticClass:"tab-page",attrs:{layout:"prev, pager, next","page-size":t.per,"current-page":t.currentPage,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"current-change":t.changePage}})],1)},staticRenderFns:[]},i=a("C7Lr")(o,r,!1,null,null,null);e.default=i.exports}});
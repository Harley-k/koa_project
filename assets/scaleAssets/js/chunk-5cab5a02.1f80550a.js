(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cab5a02"],{"8a93":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return l})),a.d(e,"d",(function(){return r})),a.d(e,"e",(function(){return o})),a.d(e,"c",(function(){return c}));var n=a("b775");function i(t){return Object(n["a"])({url:"/scalemanagement/scale/",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/scalemanagement/scale/",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/scalemanagement/scaleorg/",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/scalemanagement/scalegroupchange/",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/scalemanagement/scalegroupchange/",method:"get",params:t})}},be9c:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{id:"main-container"}},[a("el-container",[a("el-header",[a("div",{attrs:{id:"main-title"}},[a("span",[t._v(t._s(t.$route.meta.title))])])]),t._v(" "),a("el-main",[a("div",{attrs:{id:"main-filter"}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.filterTableData}},[a("el-form-item",{attrs:{label:""}},[a("el-input",{attrs:{clearable:"",size:"medium",placeholder:""},on:{clear:t.clarFilter},model:{value:t.filterTableData.name,callback:function(e){t.$set(t.filterTableData,"name",e)},expression:"filterTableData.name"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:t.searchFilterTableData}},[t._v("搜索")])],1)],1)],1),t._v(" "),a("div",{attrs:{id:"main-table"}},[a("el-table",{attrs:{"header-row-class-name":"tableTitleStyle",data:t.tableData,border:""}},[a("el-table-column",{attrs:{type:"index",label:"ID",align:"center",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"量表名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"scalegroup__groupname",label:"量表分组",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"is_active",align:"center",label:"状态","min-width":"140px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-text":"启用","inactive-text":"禁用"},on:{change:function(a){return t.changeSwitch(e.row)}},model:{value:e.row.is_active,callback:function(a){t.$set(e.row,"is_active",a)},expression:"scope.row.is_active"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"",size:"mini"},on:{click:function(a){return t.$router.push("/detail/scaleplat_scale/"+e.row.id)}}},[t._v("查看")]),t._v(" "),a("el-button",{attrs:{type:"",size:"mini"},on:{click:function(a){return t.setGroup(e.row)}}},[t._v("设置分组")])]}}])})],1)],1)]),t._v(" "),a("el-footer",[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"pager-count":5,small:!1,"current-page":t.filterTableData.page},on:{"update:currentPage":function(e){return t.$set(t.filterTableData,"page",e)},"update:current-page":function(e){return t.$set(t.filterTableData,"page",e)},"current-change":t.pageSizeChange}})],1)],1),t._v(" "),a("el-dialog",{attrs:{width:"400px",title:"设置分组",visible:t.dialog},on:{"update:visible":function(e){t.dialog=e}}},[t.dialog?a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"选择分组","label-width":"80px",prop:"group_id",rules:[{required:!0,message:"请选择分组"}]}},[a("el-select",{attrs:{placeholder:"请选择分组"},model:{value:t.form.group_id,callback:function(e){t.$set(t.form,"group_id",e)},expression:"form.group_id"}},t._l(t.groupList,(function(t){return a("el-option",{key:t.id+t.groupname,attrs:{label:t.groupname,value:t.id}})})),1)],1)],1):t._e(),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.groupEventStatus=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.confireForm}},[t._v("确 定")])],1)],1)],1)},i=[],l=(a("ac6a"),a("5df3"),a("8a93")),r={name:"ScaleplatScale",data:function(){return{filterTableData:{name:"",page:1},tableData:[],loading:!0,total:1,form:{group_id:"",scale_id:""},groupList:[],dialog:!1}},created:function(){this.init()},methods:{confireForm:function(){var t=this;Object(l["e"])(this.form).then((function(){t.dialog=!1,t.init()}))},setGroup:function(t){this.form.group_id="",this.form.scale_id=t.id,this.dialog=!0},init:function(){var t=this;this.loading=!0,Promise.all([Object(l["b"])(this.filterTableData),Object(l["c"])()]).then((function(e){t.tableData=e[0].results,t.total=e[0].count,t.groupList=e[1]})).then((function(){t.loading=!1}))},searchFilterTableData:function(){var t=this;this.loading=!0,this.filterTableData.page=1,Object(l["b"])(this.filterTableData).then((function(e){t.tableData=e.results,t.filterTableData.page=e.num_pages,t.total=e.count})).then((function(){t.loading=!1}))},clarFilter:function(){this.searchFilterTableData()},changeSwitch:function(t){this.$confirm("此操作将".concat(!0===t.is_active?"启用":"禁用","量表, 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(l["a"])({scaleid:t.id,action:t.is_active?"active":"deactive"})})).catch((function(){t.is_active=!t.is_active}))},pageSizeChange:function(t){this.filterTableData.page=t,this.init()}}},o=r,c=a("2877"),s=Object(c["a"])(o,n,i,!1,null,null,null);e["default"]=s.exports}}]);
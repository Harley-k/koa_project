(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-984d6c40"],{"5ad5":function(t,e,r){"use strict";r.d(e,"d",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"g",(function(){return a})),r.d(e,"f",(function(){return u})),r.d(e,"a",(function(){return s})),r.d(e,"e",(function(){return c})),r.d(e,"h",(function(){return l})),r.d(e,"b",(function(){return d}));var n=r("b775");function o(t){return Object(n["a"])({url:"/users/",method:"get",params:t})}function i(t){return Object(n["a"])({url:"/userextra/userchangeotherisactive/",method:"post",data:t})}function a(){return Object(n["a"])({url:"/userextra/userrole/",method:"get"})}function u(){return Object(n["a"])({url:"/organizations/?page_size=9999",method:"get"})}function s(t){return Object(n["a"])({url:"/users/",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/users/".concat(t,"/"),method:"get"})}function l(t,e){return Object(n["a"])({url:"/users/".concat(t,"/"),method:"put",data:e})}function d(t){return Object(n["a"])({url:"/userextra/userchangeotherpwd/",method:"post",data:t})}},"9b52":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{id:"main-container"}},[r("el-container",[r("el-header",[r("div",{attrs:{id:"main-title"}},[r("span",[t._v("用户详情-修改")])]),t._v(" "),r("el-divider",{attrs:{"content-position":"left"}},[r("el-button",{attrs:{type:"",size:"mini"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回列表页")])],1)],1),t._v(" "),r("el-main",{staticStyle:{display:"flex","justify-content":"flex-start"}},[r("el-form",{ref:"form",staticStyle:{width:"100%"},attrs:{model:t.form,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"用户名/手机号:",prop:"username"}},[r("span",[t._v(t._s(t.form.username))])]),t._v(" "),r("el-form-item",{attrs:{label:"真实姓名:",prop:"truename",rules:[{required:!0,message:"真实姓名不能为空"}]}},[r("el-input",{model:{value:t.form.truename,callback:function(e){t.$set(t.form,"truename",t._n("string"===typeof e?e.trim():e))},expression:"form.truename"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"角色:",prop:"role_id"}},[r("span",[t._v(t._s(t.form.rolename))])]),t._v(" "),r("el-form-item",{attrs:{label:"机构:",prop:"org_id"}},[r("span",[t._v(t._s(t.form.orgname))])]),t._v(" "),r("el-form-item",{attrs:{label:"用户状态"}},[r("el-tag",{attrs:{type:t.form.is_active?"":"danger"}},[t._v(t._s(t.form.is_active?"已启用":"已禁用"))])],1),t._v(" "),r("el-form-item",{attrs:{align:"center"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.onSubmit("form")}}},[t._v("保存")])],1)],1)],1),t._v(" "),r("el-footer")],1)],1)},o=[],i=(r("ac6a"),r("5df3"),r("5ad5")),a={name:"AddUser",inject:["reload"],data:function(){return{form:{username:"",password:"",truename:"",role_id:"",org_id:"",is_active:!0},show:!0,role_id:[],org_id:[],loading:!1}},created:function(){this.init()},methods:{init:function(){var t=this;this.loading=!0,Promise.all([Object(i["g"])(),Object(i["f"])(),Object(i["e"])(this.$route.params.id)]).then((function(e){t.role_id=e[0],t.org_id=e[1].results,t.form=e[2]})).then((function(){t.role_id.filter((function(e,r){t.form.role_id=e.id===t.form.role_id?e.rolename:""})),t.org_id.filter((function(e,r){t.form.org_id=e.id===t.form.org_id?e.orgname:""})),t.loading=!1}))},resetForm:function(){this.reload()},onSubmit:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return console.log("error submit!!"),!1;Object(i["h"])(e.$route.params.id,e.form).then((function(){e.$confirm("保存成功, 是否返回上一页?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){e.$router.go(-1)})).catch((function(){e.resetForm()}))}))}))}}},u=a,s=r("2877"),c=Object(s["a"])(u,n,o,!1,null,"1ce47ba5",null);e["default"]=c.exports}}]);
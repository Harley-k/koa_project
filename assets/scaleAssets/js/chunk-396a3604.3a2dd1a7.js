(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-396a3604"],{"76bd":function(e,t,r){"use strict";r.d(t,"d",(function(){return o})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return i})),r.d(t,"e",(function(){return u})),r.d(t,"f",(function(){return s})),r.d(t,"b",(function(){return c}));var n=r("b775");function o(e){return Object(n["a"])({url:"/users/",method:"get",params:e})}function a(e){return Object(n["a"])({url:"/userextra/userchangeotherisactive/",method:"post",data:e})}function i(e){return Object(n["a"])({url:"/users/",method:"post",data:e})}function u(e){return Object(n["a"])({url:"/users/".concat(e,"/"),method:"get"})}function s(e,t){return Object(n["a"])({url:"/users/".concat(e,"/"),method:"put",data:t})}function c(e){return Object(n["a"])({url:"/userextra/userchangeotherpwd/",method:"post",data:e})}},f60f:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"main-container"}},[r("el-container",[r("el-header",[r("div",{attrs:{id:"main-title"}},[r("span",[e._v("新增用户")])]),e._v(" "),r("el-divider",{attrs:{"content-position":"left"}},[r("el-button",{attrs:{type:"",size:"mini"},on:{click:function(t){return e.$router.go(-1)}}},[e._v("返回列表页")])],1)],1),e._v(" "),r("el-main",[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"用户名/手机号:",prop:"username",rules:[{required:!0,message:"用户名/手机号不能为空"}]}},[r("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username","string"===typeof t?t.trim():t)},expression:"form.username"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码:",prop:"password",rules:[{required:!0,message:"密码不为空"}]}},[r("el-input",{model:{value:e.form.password,callback:function(t){e.$set(e.form,"password","string"===typeof t?t.trim():t)},expression:"form.password"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"真实姓名:",prop:"truename",rules:[{required:!0,message:"真实姓名不能为空"}]}},[r("el-input",{model:{value:e.form.truename,callback:function(t){e.$set(e.form,"truename",e._n("string"===typeof t?t.trim():t))},expression:"form.truename"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"用户状态"}},[r("el-radio-group",{model:{value:e.form.is_active,callback:function(t){e.$set(e.form,"is_active",t)},expression:"form.is_active"}},[r("el-radio",{attrs:{label:!0}},[e._v("启用")]),e._v(" "),r("el-radio",{attrs:{label:!1}},[e._v("禁用")])],1)],1),e._v(" "),r("el-form-item",{attrs:{align:"center"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("form")}}},[e._v("立即创建")]),e._v(" "),r("el-button",{on:{click:e.resetForm}},[e._v("重置")])],1)],1)],1),e._v(" "),r("el-footer")],1)],1)},o=[],a=r("76bd"),i={name:"AddUser",inject:["reload"],data:function(){return{form:{username:"",password:"",truename:"",is_active:!0},show:!0}},methods:{resetForm:function(){this.reload()},onSubmit:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;Object(a["a"])(t.form).then((function(){t.$confirm("新增用户成功, 是否返回上一页?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){t.$router.go(-1)})).catch((function(){t.resetForm()}))}))}))}}},u=i,s=r("2877"),c=Object(s["a"])(u,n,o,!1,null,"8e3b7cca",null);t["default"]=c.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6412d11c"],{"048f":function(e,t,r){"use strict";r.d(t,"h",(function(){return a})),r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return i})),r.d(t,"e",(function(){return l})),r.d(t,"j",(function(){return m})),r.d(t,"m",(function(){return u})),r.d(t,"n",(function(){return s})),r.d(t,"l",(function(){return c})),r.d(t,"c",(function(){return f})),r.d(t,"d",(function(){return p})),r.d(t,"f",(function(){return d})),r.d(t,"g",(function(){return b})),r.d(t,"k",(function(){return h})),r.d(t,"i",(function(){return v}));var n=r("b775");function a(e){return Object(n["a"])({url:"/scale01evaperson/",method:"get",params:e})}function o(e){return Object(n["a"])({url:"/scale01evaperson/",method:"post",data:e})}function i(e){return Object(n["a"])({url:"/scale01evaperson/".concat(e,"/"),method:"delete"})}function l(e){return Object(n["a"])({url:"/scale01evaperson/".concat(e,"/"),method:"get"})}function m(e,t){return Object(n["a"])({url:"/scale01evaperson/".concat(e,"/"),method:"put",data:t})}function u(e){return Object(n["a"])({url:"/scaleevaluate/scale01evaoperate/",method:"get",params:e})}//! scaleevaluate/scale01evaoperate/=>通过不通过
function s(e){return Object(n["a"])({url:"/scaleevaluate/scale01evaoperate/",method:"post",data:e})}//! scaleevaluate/scale01evaoperate/
function c(e){return Object(n["a"])({url:"/scaleevaluate/scale01evaoperate/",method:"get",params:e})}function f(e){return Object(n["a"])({url:"/scaleevaluate/scale01evaoperate/",method:"get",params:e})}function p(e){return Object(n["a"])({url:"/scaleevaluate/scale01evaoperate/",method:"post",data:e})}function d(e){return Object(n["a"])({url:"scaleevaluate/scale01evareport/",method:"get",params:e})}function b(){return Object(n["a"])({url:"scaleevaluate/scale01comment/",method:"get"})}function h(e){return Object(n["a"])({url:"scaleevaluate/scale01comment/",method:"post",data:e})}function v(e){return Object(n["a"])({url:"scaleevaluate/scale01evareport/",method:"post",data:e})}},"19b6":function(e,t,r){"use strict";var n=r("9b33"),a=r.n(n);a.a},"9b33":function(e,t,r){},cf9a:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"scale_01scale",attrs:{id:"main-container"}},[r("el-container",[r("el-header",[r("div",{attrs:{id:"main-title"}},[r("span",[e._v(e._s(e.$route.meta.title))])]),e._v(" "),r("el-divider",{attrs:{"content-position":"left"}},[r("el-button",{attrs:{type:"",size:"mini"},on:{click:function(t){return e.$router.go(-1)}}},[e._v("返回上一页")])],1)],1),e._v(" "),r("el-main",[r("el-form",{ref:"form",attrs:{size:"medium","label-position":"top",inline:!0,model:e.form,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"姓名:",prop:"name",rules:[{required:!0,message:"请输入姓名"}]}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name","string"===typeof t?t.trim():t)},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"性别:",prop:"sex",rules:[{required:!0,message:"请选择性别"}]}},[r("el-select",{attrs:{placeholder:""},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[r("el-option",{key:"男",attrs:{label:"男",value:"男"}}),e._v(" "),r("el-option",{key:"女",attrs:{label:"女",value:"女"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"出生日期:",prop:"birthday",rules:[{required:!0,message:"请选择出生日期"}]}},[r("el-date-picker",{attrs:{type:"date",placeholder:"选择日期",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:e.form.birthday,callback:function(t){e.$set(e.form,"birthday",t)},expression:"form.birthday"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"学校:",prop:"school"}},[r("el-input",{model:{value:e.form.school,callback:function(t){e.$set(e.form,"school","string"===typeof t?t.trim():t)},expression:"form.school"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"地址:",prop:"addr"}},[r("el-input",{model:{value:e.form.addr,callback:function(t){e.$set(e.form,"addr","string"===typeof t?t.trim():t)},expression:"form.addr"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"体重:",prop:"weight"}},[r("el-input",{model:{value:e.form.weight,callback:function(t){e.$set(e.form,"weight","string"===typeof t?t.trim():t)},expression:"form.weight"}})],1),e._v(" "),r("br"),e._v(" "),r("el-form-item",{attrs:{label:"母名:",prop:"mama"}},[r("el-input",{model:{value:e.form.mama,callback:function(t){e.$set(e.form,"mama",e._n("string"===typeof t?t.trim():t))},expression:"form.mama"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"民族:",prop:"mingzu2"}},[r("el-input",{model:{value:e.form.mingzu2,callback:function(t){e.$set(e.form,"mingzu2","string"===typeof t?t.trim():t)},expression:"form.mingzu2"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"职业:",prop:"zhiye2"}},[r("el-input",{model:{value:e.form.zhiye2,callback:function(t){e.$set(e.form,"zhiye2","string"===typeof t?t.trim():t)},expression:"form.zhiye2"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"文化:",prop:"wenhua2"}},[r("el-input",{model:{value:e.form.wenhua2,callback:function(t){e.$set(e.form,"wenhua2","string"===typeof t?t.trim():t)},expression:"form.wenhua2"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"儿童出生时年龄:",prop:"age2"}},[r("el-input",{model:{value:e.form.age2,callback:function(t){e.$set(e.form,"age2","string"===typeof t?t.trim():t)},expression:"form.age2"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"孕期:",prop:"yunqi"}},[r("el-input",{model:{value:e.form.yunqi,callback:function(t){e.$set(e.form,"yunqi","string"===typeof t?t.trim():t)},expression:"form.yunqi"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"胎:",prop:"tai"}},[r("el-input",{model:{value:e.form.tai,callback:function(t){e.$set(e.form,"tai","string"===typeof t?t.trim():t)},expression:"form.tai"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"产:",prop:"chan"}},[r("el-input",{model:{value:e.form.chan,callback:function(t){e.$set(e.form,"chan","string"===typeof t?t.trim():t)},expression:"form.chan"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"顺(难)产:",prop:"shunnanchan"}},[r("el-input",{model:{value:e.form.shunnanchan,callback:function(t){e.$set(e.form,"shunnanchan","string"===typeof t?t.trim():t)},expression:"form.shunnanchan"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"曾患病:",prop:"cenhuanbing"}},[r("el-input",{model:{value:e.form.cenhuanbing,callback:function(t){e.$set(e.form,"cenhuanbing","string"===typeof t?t.trim():t)},expression:"form.cenhuanbing"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"现患病:",prop:"xianhuanbing"}},[r("el-input",{model:{value:e.form.xianhuanbing,callback:function(t){e.$set(e.form,"xianhuanbing","string"===typeof t?t.trim():t)},expression:"form.xianhuanbing"}})],1),e._v(" "),r("br"),e._v(" "),r("el-form-item",{attrs:{label:"父名:",prop:"baba"}},[r("el-input",{model:{value:e.form.baba,callback:function(t){e.$set(e.form,"baba","string"===typeof t?t.trim():t)},expression:"form.baba"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"民族:",prop:"mingzu1"}},[r("el-input",{model:{value:e.form.mingzu1,callback:function(t){e.$set(e.form,"mingzu1","string"===typeof t?t.trim():t)},expression:"form.mingzu1"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"职业:",prop:"zhiye1"}},[r("el-input",{model:{value:e.form.zhiye1,callback:function(t){e.$set(e.form,"zhiye1","string"===typeof t?t.trim():t)},expression:"form.zhiye1"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"文化:",prop:"wenhua1"}},[r("el-input",{model:{value:e.form.wenhua1,callback:function(t){e.$set(e.form,"wenhua1","string"===typeof t?t.trim():t)},expression:"form.wenhua1"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"儿童出生时年龄:",prop:"age1"}},[r("el-input",{model:{value:e.form.age1,callback:function(t){e.$set(e.form,"age1","string"===typeof t?t.trim():t)},expression:"form.age1"}})],1)],1),e._v(" "),r("el-form",{attrs:{inline:!1,model:e.form}},[r("el-form-item",{attrs:{align:"left"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("form")}}},[e._v("登记信息")]),e._v(" "),r("el-button",{on:{click:e.resetForm}},[e._v("重置")])],1)],1)],1),e._v(" "),r("el-footer")],1)],1)},a=[],o=r("048f"),i={name:"AddUser",inject:["reload"],data:function(){return{form:{name:"",sex:"男",school:"",birthday:null,addr:"",weight:"",yunqi:"",tai:"",chan:"",shunnanchan:"",cenhuanbing:"",xianhuanbing:"",baba:"",mingzu1:"",zhiye1:"",wenhua1:"",age1:"",mama:"",mingzu2:"",zhiye2:"",wenhua2:"",age2:""},show:!0,loading:!1}},created:function(){this.init()},methods:{init:function(){var e=this;this.loading=!0,Object(o["e"])(this.$route.params.id).then((function(t){e.form=t,e.loading=!1}))},resetForm:function(){this.reload()},onSubmit:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;Object(o["j"])(t.$route.params.id,t.form).then((function(){t.$confirm("信息修改成功, 是否返回上一页?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){t.$router.go(-1)})).catch((function(){t.resetForm()}))}))}))}}},l=i,m=(r("19b6"),r("2877")),u=Object(m["a"])(l,n,a,!1,null,"70701e71",null);t["default"]=u.exports}}]);
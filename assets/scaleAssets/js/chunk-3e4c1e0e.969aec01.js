(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e4c1e0e"],{2017:function(e,t,o){"use strict";var n=o("b12d"),r=o.n(n);r.a},9369:function(e,t,o){},"9ed6":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login-container"},[o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,autocomplete:"on","label-position":"left"}},[o("div",{staticClass:"title-container"},[o("h3",{staticClass:"title"},[e._v("量表管理系统")])]),e._v(" "),o("el-form-item",{attrs:{prop:"username",rules:[{required:!0,message:"请输入用户名",trigger:"blur"}]}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),o("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1",autocomplete:"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}}),e._v(" "),o("span",{staticClass:"show-pwd",on:{click:e.showUsername}},[o("svg-icon",{attrs:{"icon-class":e.usernameType?"select-1":"select-2"}})],1)],1),e._v(" "),o("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(t){e.capsTooltip=t},expression:"capsTooltip"}},[o("el-form-item",{attrs:{prop:"password",rules:[{required:!0,message:"请输入密码",trigger:"blur"}]}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),o("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(t){e.capsTooltip=!1}},nativeOn:{keyup:[function(t){return e.checkCapslock(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}]},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),e._v(" "),o("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[o("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1)],1),e._v(" "),o("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("Login")]),e._v(" "),o("div",{staticStyle:{position:"relative"}})],1)],1)},r=[],s=(o("ac6a"),o("456d"),["SelectKey-orgno","SelectKey-username"]),a=["Save-orgno","Save-username"];function i(){return localStorage.getItem(s[0])}function l(){return localStorage.getItem(s[1])}function c(e){return localStorage.setItem(s[1],e)}function u(){return localStorage.getItem(a[1])}function p(e){return localStorage.setItem(a[0],e)}function d(e){return localStorage.setItem(a[1],e)}var m={name:"Login",data:function(){var e=function(e,t,o){0===t.length?o(new Error("必须填写用户名")):o()},t=function(e,t,o){t.length<6?o(new Error("密码必须大于6位")):o()};return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,otherQuery:{},orgnoType:!1,usernameType:!1}},computed:{},watch:{$route:{handler:function(e){var t=e.query;t&&(this.redirect=t.redirect,this.otherQuery=this.getOtherQuery(t))},immediate:!0},loginForm:{deep:!0,handler:function(e){e&&(i()&&p(e.orgno),l()&&d(e.username))}}},created:function(){this.usernameType=l(),this.loginForm.username=u()},methods:{showUsername:function(){l()?(c(""),d(""),this.usernameType=l()):(c("1"),d(this.loginForm.username),this.usernameType=l())},checkCapslock:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.shiftKey,o=e.key;o&&1===o.length&&(this.capsTooltip=!!(t&&o>="a"&&o<="z"||!t&&o>="A"&&o<="Z")),"CapsLock"===o&&!0===this.capsTooltip&&(this.capsTooltip=!1)},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){e.$router.push({path:"/"}),e.loading=!1})).catch((function(){e.loading=!1}))}))},getOtherQuery:function(e){return Object.keys(e).reduce((function(t,o){return"redirect"!==o&&(t[o]=e[o]),t}),{})}}},g=m,h=(o("2017"),o("e89e"),o("2877")),f=Object(h["a"])(g,n,r,!1,null,"7c9b0506",null);t["default"]=f.exports},b12d:function(e,t,o){},e89e:function(e,t,o){"use strict";var n=o("9369"),r=o.n(n);r.a}}]);
webpackJsonp([6],{UebM:function(t,s){},agEe:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("1f0h"),i=e("1mVl"),a={name:"Admin",data:function(){return{title:"系统管理员"}},components:{SimpleHeader:n.a,FullButton:i.a},methods:{initSystemDB:function(){JSI.initSystemDatabase(function(){console.log("initSystemDatabase success")})},submitLocalTest:function(){JSI.submitExamResult(function(){console.log("submitExamResult success")})},handleLogout:function(){this.$store.dispatch("removeLocalUser"),this.$router.push("/login")}}},o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("simple-header",{attrs:{title:t.title}}),t._v(" "),e("div",{staticClass:"page-body"},[e("ul",{staticClass:"point-list"},[e("li",{staticClass:"point-item",on:{click:t.initSystemDB}},[t._v("\n\t\t\t\t初始化考试系统数据库\t\t\t\t\t\n\t\t\t\t"),e("span",{staticClass:"iconfont right"},[t._v("")])]),t._v(" "),e("li",{staticClass:"point-item",on:{click:t.submitLocalTest}},[t._v("\n\t\t\t\t提交考生试卷\n\t\t\t\t"),e("span",{staticClass:"iconfont right"},[t._v("")])])]),t._v(" "),e("div",{staticClass:"btn-box"},[e("full-button",{attrs:{name:"退出登录"},on:{skipNext:t.handleLogout}})],1)])],1)},staticRenderFns:[]};var l=e("VU/8")(a,o,!1,function(t){e("UebM")},"data-v-e1659288",null);s.default=l.exports}});
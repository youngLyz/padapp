webpackJsonp([10],{EUPm:function(t,e){},UiK1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("teIl"),a=n("1mVl"),i={name:"UserInfo",data:function(){return{title:"个人信息"}},components:{PageHeader:s.a,FullButton:a.a},methods:{handleLogout:function(){this.$store.dispatch("removeLocalUser"),this.$router.push("/login")}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-header",{attrs:{title:t.title}}),t._v(" "),n("div",{staticClass:"page-body"},[n("ul",{staticClass:"point-list"},[n("li",{staticClass:"point-item"},[t._v("\n\t\t\t\t昵称\t\t\t\t\t\n\t\t\t\t"),n("span",{staticClass:"iconfont right"},[t._v("")]),t._v(" "),n("span",{staticClass:"point-info"},[t._v(t._s(t.$store.state.userInfo.phone_name))])])]),t._v(" "),n("div",{staticClass:"btn-box"},[n("full-button",{attrs:{name:"退出登录"},on:{skipNext:t.handleLogout}})],1)])],1)},staticRenderFns:[]};var l=n("VU/8")(i,o,!1,function(t){n("EUPm")},"data-v-644d4918",null);e.default=l.exports}});
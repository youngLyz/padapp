webpackJsonp([0],{gZRf:function(t,e){},teIl:function(t,e,s){"use strict";var n={name:"PageHeader",props:["title","backUrl"],methods:{handleReturnClick:function(){this.backUrl?(console.log(this.backUrl),this.$router.push(this.backUrl)):this.$router.go(-1)}}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("span",{staticClass:"header-back iconfont",on:{click:this.handleReturnClick}},[this._v("")]),this._v("\n  "+this._s(this.title)+"\n")])},staticRenderFns:[]};var a=s("VU/8")(n,i,!1,function(t){s("gZRf")},"data-v-1d6149bb",null);e.a=a.exports}});
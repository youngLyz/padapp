webpackJsonp([16],{O1MG:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={name:"TestHis",data:function(){return{title:"测试记录",list:[]}},components:{PageHeader:e("teIl").a},methods:{handleHisClick:function(t,i){var e=this,s={itemId:t,itemTheme:i,itemDetail:null};JSI.checkHisItemDetail(this.$store.state.userInfo.id,t,function(t){s.itemDetail=t,e.$store.dispatch("initializeData",s),e.$router.push("/testHisItem")})}},created:function(){var t=this;JSI.checkHisItemList(this.$store.state.userInfo.id,function(i){t.list=i})}},n={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("page-header",{attrs:{title:t.title}}),t._v(" "),e("div",{staticClass:"page-body"},[0==t.list.length?e("p",{staticClass:"no-item-tip"},[t._v("您尚未提交模拟试卷，当前没有测试记录")]):e("ul",{staticClass:"list"},t._l(t.list,function(i,s){return e("li",{key:i.id,staticClass:"list-item",on:{click:function(e){t.handleHisClick(i.id,i.pt_name)}}},[e("div",{staticClass:"list-item-hd"},[e("span",{staticClass:"list-item-title"},[t._v("\n\t\t\t\t\t\t"+t._s(i.pt_name)+"\n\t\t\t\t\t")]),t._v(" "),e("p",{staticClass:"list-item-info"},[t._v("\n\t\t\t\t\t\t"+t._s(i.date)+"\n\t\t\t\t\t\t  得分：\n\t\t\t\t\t\t"),e("span",{staticClass:"list-item-score"},[t._v("\n\t\t\t\t\t\t\t"+t._s(i.score)+"\n\t\t\t\t\t\t")])])]),t._v(" "),e("span",{staticClass:"iconfont list-item-check"},[t._v("")])])}))])],1)},staticRenderFns:[]};var a=e("VU/8")(s,n,!1,function(t){e("sCZE")},"data-v-32906b0f",null);i.default=a.exports},sCZE:function(t,i){}});
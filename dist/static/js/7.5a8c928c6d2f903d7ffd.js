webpackJsonp([7],{"0+ZD":function(t,e){},O1MG:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"TestHis",data:function(){return{title:"测试记录",list:[]}},components:{PageHeader:i("teIl").a},methods:{handleHisClick:function(t,e){var i=this,s={itemId:t,itemTheme:e,itemDetail:null};JSI.checkHisItemDetail(this.$store.state.userInfo.id,t,function(t){s.itemDetail=t,i.$store.dispatch("initializeData",s),i.$router.push("/testHisItem")})}},created:function(){var t=this;JSI.checkHisItemList(this.$store.state.userInfo.id,function(e){t.list=e})}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("page-header",{attrs:{title:t.title}}),t._v(" "),i("div",{staticClass:"page-body"},[0==t.list.length?i("p",{staticClass:"no-item-tip"},[t._v("您尚未提交模拟试卷，当前没有测试记录")]):i("ul",{staticClass:"list"},t._l(t.list,function(e,s){return i("li",{key:e.id,staticClass:"list-item",on:{click:function(i){t.handleHisClick(e.id,e.pt_name)}}},[i("div",{staticClass:"list-item-hd"},[i("span",{staticClass:"list-item-title"},[t._v("\n\t\t\t\t\t\t"+t._s(e.pt_name)+"\n\t\t\t\t\t")]),t._v(" "),i("p",{staticClass:"list-item-info"},[t._v("\n\t\t\t\t\t\t"+t._s(e.date)+"\n\t\t\t\t\t\t  得分：\n\t\t\t\t\t\t"),i("span",{staticClass:"list-item-score"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.score)+"\n\t\t\t\t\t\t")])])]),t._v(" "),i("span",{staticClass:"iconfont list-item-check"},[t._v("")])])}))])],1)},staticRenderFns:[]};var n=i("VU/8")(s,a,!1,function(t){i("0+ZD")},"data-v-dea5af54",null);e.default=n.exports}});
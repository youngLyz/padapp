webpackJsonp([16],{"1FS9":function(t,e){},TaCj:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"SimulateTest",data:function(){return{title:"模拟考场",backUrl:"/exer",list:[]}},components:{PageHeader:i("teIl").a},methods:{handleTestAnswer:function(t,e){var i=this,s={itemId:t,itemTheme:e,itemDetail:null};JSI.getPageTblObjectById(t,function(t){s.itemDetail=t,i.$store.dispatch("initializeData",s),i.$router.push("/testHisItem")})}},mounted:function(){var t=this;JSI.getAllPageTbl(this.$store.state.userInfo.id,function(e){t.list=e})}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("page-header",{attrs:{title:t.title,backUrl:t.backUrl}}),t._v(" "),i("div",{staticClass:"page-body"},[0==t.list.length?i("p",{staticClass:"no-item-tip"},[t._v("当前分类没有模拟试卷~")]):i("ul",{staticClass:"list"},t._l(t.list,function(e,s){return i("li",{key:e.id,staticClass:"list-item"},[i("router-link",{staticClass:"list-item-link",attrs:{to:"/testStart/"+e.id}},[t._v("\n\t\t\t\t\t"+t._s(e.pt_name)+"\n\t\t\t\t")]),t._v(" "),i("button",{directives:[{name:"show",rawName:"v-show",value:1==e.status,expression:"item.status==1"}],staticClass:"list-item-asw",on:{click:function(i){t.handleTestAnswer(e.id,e.pt_name)}}},[t._v("\n\t\t\t\t\t查看答案\n\t\t\t\t")])],1)}))])],1)},staticRenderFns:[]};var n=i("VU/8")(s,a,!1,function(t){i("1FS9")},"data-v-24d284bb",null);e.default=n.exports}});
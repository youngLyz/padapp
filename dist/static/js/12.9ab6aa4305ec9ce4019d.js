webpackJsonp([12],{O1MG:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"TestHis",data:function(){return{title:"测试记录",list:[{id:1,pt_name:"2018年资料员专业基础知识试题一2018年资料员专业基础知识试题一",date:"2018-07-11 10:10:32",score:50},{id:2,pt_name:"2018年资料员专业基础知识试题二",date:"2018-07-11 10:10:32",score:50},{id:3,pt_name:"2018年资料员专业基础知识试题三",date:"2018-07-11 10:10:32",score:50},{id:4,pt_name:"2018年资料员专业基础知识试题四",date:"2018-07-11 10:10:32",score:50},{id:5,pt_name:"2018年资料员专业基础知识试题五",date:"2018-07-11 10:10:32",score:50}]}},components:{PageHeader:i("teIl").a},methods:{handleHisClick:function(t,e){var i={itemTheme:e,itemDetail:[{id:1,q_name:"单选试题名称",q_type:"1",q_result:[1],answer_ids:[2],q_option:["选项A","选项B","选项C","选项D"]},{id:2,q_name:"多选试题名称",q_type:"2",q_result:[1,2],answer_ids:[2,3],q_option:["选项A","选项B","选项C","选项D"]},{id:3,q_name:"判断试题名称",q_type:"3",q_result:[1],answer_ids:[1],q_option:["选项A","选项B"]}]};this.$store.dispatch("initializeData",i),this.$router.push("/testHisItem")}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("page-header",{attrs:{title:t.title}}),t._v(" "),i("div",{staticClass:"page-body"},[i("ul",{staticClass:"list"},t._l(t.list,function(e,s){return i("li",{key:e.id,staticClass:"list-item",on:{click:function(i){t.handleHisClick(e.id,e.pt_name)}}},[i("div",{staticClass:"list-item-hd"},[i("span",{staticClass:"list-item-title"},[t._v("\n\t\t\t\t\t\t"+t._s(e.pt_name)+"\n\t\t\t\t\t")]),t._v(" "),i("p",{staticClass:"list-item-info"},[t._v("\n\t\t\t\t\t\t"+t._s(e.date)+"\n\t\t\t\t\t\t  得分：\n\t\t\t\t\t\t"),i("span",{staticClass:"list-item-score"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.score)+"\n\t\t\t\t\t\t")])])]),t._v(" "),i("span",{staticClass:"iconfont list-item-check"},[t._v("")])])}))])],1)},staticRenderFns:[]};var n=i("VU/8")(s,a,!1,function(t){i("ynvO")},"data-v-517ca9ad",null);e.default=n.exports},ynvO:function(t,e){}});
//# sourceMappingURL=12.9ab6aa4305ec9ce4019d.js.map
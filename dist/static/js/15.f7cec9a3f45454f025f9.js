webpackJsonp([15],{TaCj:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"SimulateTest",data:function(){return{title:"模拟考场",backUrl:"/exer",list:[{id:1,pt_name:"2018年资料员专业基础知识试题一",status:1},{id:2,pt_name:"2018年资料员专业基础知识试题二",status:0},{id:3,pt_name:"2018年资料员专业基础知识试题三",status:0},{id:4,pt_name:"2018年资料员专业基础知识试题四",status:0},{id:5,pt_name:"2018年资料员专业基础知识试题五",status:0}]}},components:{PageHeader:s("teIl").a},methods:{handleTestAnswer:function(t,e){var s={itemTheme:e,itemDetail:[{id:1,q_name:"单选试题名称",q_type:"1",q_result:[1],q_option:["选项A","选项B","选项C","选项D"]},{id:2,q_name:"多选试题名称",q_type:"2",q_result:[1,2],q_option:["选项A","选项B","选项C","选项D"]},{id:3,q_name:"判断试题名称",q_type:"3",q_result:[1],q_option:["选项A","选项B"]}]};this.$store.dispatch("initializeData",s),this.$router.push("/testHisItem")}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("page-header",{attrs:{title:t.title,backUrl:t.backUrl}}),t._v(" "),s("div",{staticClass:"page-body"},[s("ul",{staticClass:"list"},t._l(t.list,function(e,a){return s("li",{key:e.id,staticClass:"list-item"},[s("router-link",{staticClass:"list-item-link",attrs:{to:"/testStart/"+e.id}},[t._v("\n\t\t\t\t\t"+t._s(e.pt_name)+"\n\t\t\t\t")]),t._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:1==e.status,expression:"item.status==1"}],staticClass:"list-item-asw",on:{click:function(s){t.handleTestAnswer(e.id,e.pt_name)}}},[t._v("\n\t\t\t\t\t查看答案\n\t\t\t\t")])],1)}))])],1)},staticRenderFns:[]};var n=s("VU/8")(a,i,!1,function(t){s("zr03")},"data-v-1035526e",null);e.default=n.exports},zr03:function(t,e){}});
//# sourceMappingURL=15.f7cec9a3f45454f025f9.js.map
webpackJsonp([13],{DPtA:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={name:"ExamStart",data:function(){return{title:"2018年资料员专业基础",hideBtn:!1,pt_info:null}},components:{PageHeader:e("teIl").a},methods:{handleStartClick:function(){var t={itemTheme:this.pt_info.pt_name,totalScore:this.pt_info.total_score,scorePrinciple:{single_score:this.pt_info.pt_single_score,multi_score:this.pt_info.pt_multi_score,tf_score:this.pt_info.pt_tf_score},itemDetail:[{id:1,q_name:"单选试题名称",q_type:"1",q_result:[1],q_option:["选项A","选项B","选项C","选项D"]},{id:2,q_name:"多选试题名称",q_type:"2",q_result:[1,2],q_option:["选项A","选项B","选项C","选项D"]},{id:3,q_name:"判断试题名称",q_type:"3",q_result:[1],q_option:["选项A","选项B"]}]};this.$store.dispatch("initializeData",t),this.$store.commit("REMBER_TIME"),this.$router.push("/testItem/examStart")}},created:function(){console.log(this.pt_id),this.pt_info={pt_name:"2018年资料员专业基础知识试题一",pt_single_num:30,pt_single_score:1,pt_multi_num:20,pt_multi_score:2,pt_tf_num:20,pt_tf_score:1.5,answer_time:"120",type_num:"单选题（30）多选题（20）判断题（20）",total_score:100,intro:"2018年资料员专业基础知识试题一，本试卷是为考资料员考试的考生准备的专业基础知识试题及答案练习。"}}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("page-header",{attrs:{title:t.title}}),t._v(" "),e("div",{staticClass:"page-body"},[e("h2",{staticClass:"test-title"},[t._v(t._s(t.pt_info.pt_name))]),t._v(" "),e("ul",{staticClass:"test-list"},[e("li",{staticClass:"test-list-item"},[t._v("\n\t\t\t\t卷面总分："+t._s(t.pt_info.total_score)+"分\n\t\t\t")]),t._v(" "),e("li",{staticClass:"test-list-item"},[t._v("\n\t\t\t\t试卷类型：模拟试题\n\t\t\t")]),t._v(" "),e("li",{staticClass:"test-list-item"},[t._v("\n\t\t\t\t题型及量："+t._s(t.pt_info.type_num)+"\n\t\t\t")]),t._v(" "),e("li",{staticClass:"test-list-item"},[t._v("\n\t\t\t\t作答时间："+t._s(t.pt_info.answer_time)+"分钟\n\t\t\t")]),t._v(" "),e("li",{staticClass:"test-list-item"},[t._v("\n\t\t\t\t答案解析：否\n\t\t\t")])]),t._v(" "),e("div",{staticClass:"test-btn"},[e("button",{staticClass:"test-start-btn",attrs:{type:"button"},on:{click:t.handleStartClick}},[t._v("开始做题")])]),t._v(" "),e("div",{staticClass:"test-intro"},[e("h4",{staticClass:"test-intro-hd"},[t._v("试卷简介")]),t._v(" "),e("p",[t._v(t._s(t.pt_info.intro))])])])],1)},staticRenderFns:[]};var _=e("VU/8")(i,n,!1,function(t){e("PcC+")},"data-v-4a5a2c9b",null);s.default=_.exports},"PcC+":function(t,s){}});
//# sourceMappingURL=13.3915654ed70cb100dd9f.js.map
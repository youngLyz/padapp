webpackJsonp([13],{DPtA:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("mvHQ"),n=s.n(i),a=s("Dd8w"),o=s.n(a),l=s("teIl"),_=s("NYxO"),c={name:"ExamStart",data:function(){return{hideBtn:!1}},computed:o()({},Object(_.c)(["pt_info"])),components:{PageHeader:l.a},methods:{handleStartClick:function(){var t=this,e={itemId:this.pt_info.id,itemTheme:this.pt_info.pt_name,totalScore:this.pt_info.total_score,scorePrinciple:{single_score:this.pt_info.pt_single_score,multi_score:this.pt_info.pt_multi_score,tf_score:this.pt_info.pt_tf_score},itemDetail:null};console.log("getExamTemplateQuestions:"+n()(e.scorePrinciple)),JSI.getExamTemplateQuestions(function(s){e.itemDetail=s,t.$store.dispatch("initializeData",e),t.$store.commit("REMBER_TIME"),t.$router.push("/testItem/examStart")})}},created:function(){console.log(this.pt_id)}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("page-header",{attrs:{title:t.pt_info.pt_name}}),t._v(" "),s("div",{staticClass:"page-body"},[s("h2",{staticClass:"test-title"},[t._v(t._s(t.pt_info.pt_name))]),t._v(" "),s("ul",{staticClass:"test-list"},[s("li",{staticClass:"test-list-item"},[t._v("\n\t\t\t\t卷面总分："+t._s(t.pt_info.total_score)+"分\n\t\t\t")]),t._v(" "),s("li",{staticClass:"test-list-item"},[t._v("\n\t\t\t\t试卷类型：考试试卷\n\t\t\t")]),t._v(" "),s("li",{staticClass:"test-list-item"},[t._v("\n\t\t\t\t题型及量："+t._s(t.pt_info.type_num)+"\n\t\t\t")]),t._v(" "),s("li",{staticClass:"test-list-item"},[t._v("\n\t\t\t\t作答时间："+t._s(t.pt_info.answer_time)+"分钟\n\t\t\t")]),t._v(" "),s("li",{staticClass:"test-list-item"},[t._v("\n\t\t\t\t答案解析：否\n\t\t\t")])]),t._v(" "),s("div",{staticClass:"test-btn"},[s("button",{staticClass:"test-start-btn",attrs:{type:"button"},on:{click:t.handleStartClick}},[t._v("开始做题")])]),t._v(" "),s("div",{staticClass:"test-intro"},[s("h4",{staticClass:"test-intro-hd"},[t._v("试卷简介")]),t._v(" "),s("p",[t._v(t._s(t.pt_info.pt_memo))])])])],1)},staticRenderFns:[]};var p=s("VU/8")(c,r,!1,function(t){s("aRaV")},"data-v-55bb6bef",null);e.default=p.exports},aRaV:function(t,e){}});
webpackJsonp([11],{UWS3:function(t,s){},fNA1:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={name:"TestStart",data:function(){return{title:"2018年资料员专业基础",backUrl:"/simulateTest",pt_id:this.$route.params.pt_id,pt_info:null}},components:{PageHeader:e("teIl").a},methods:{handleStartClick:function(){var t=this,s={itemId:this.pt_id,itemTheme:this.pt_info.pt_name,totalScore:this.pt_info.total_score,scorePrinciple:{single_score:this.pt_info.pt_single_score,multi_score:this.pt_info.pt_multi_score,tf_score:this.pt_info.pt_tf_score},itemDetail:null};JSI.getPageTblObjectById(this.pt_id,function(e){s.itemDetail=e,t.$store.dispatch("initializeData",s),t.$store.commit("REMBER_TIME"),t.$router.push("/testItem/simulateTest")})}},created:function(){var t=this;console.log(this.pt_id),JSI.getPageTblById(this.pt_id,function(s){s.answer_time=120,s.type_num="单选题（"+s.pt_single_num+"）多选题（"+s.pt_multi_num+"）判断题（"+s.pt_tf_num+"）",s.total_score=s.pt_single_num*s.pt_single_score+s.pt_multi_num*s.pt_multi_score+s.pt_tf_num*s.pt_tf_score,t.pt_info=s})}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("page-header",{attrs:{title:t.title,backUrl:t.backUrl}}),t._v(" "),e("div",{staticClass:"page-body"},[e("h2",{staticClass:"test-title"},[t._v(t._s(t.pt_info.pt_name))]),t._v(" "),e("ul",{staticClass:"test-list"},[e("li",{staticClass:"test-list-item"},[t._v("\n\t\t\t\t卷面总分："+t._s(t.pt_info.total_score)+"分\n\t\t\t")]),t._v(" "),e("li",{staticClass:"test-list-item"},[t._v("\n\t\t\t\t试卷类型：模拟试题\n\t\t\t")]),t._v(" "),e("li",{staticClass:"test-list-item"},[t._v("\n\t\t\t\t题型及量："+t._s(t.pt_info.type_num)+"\n\t\t\t")]),t._v(" "),e("li",{staticClass:"test-list-item"},[t._v("\n\t\t\t\t作答时间："+t._s(t.pt_info.answer_time)+"分钟\n\t\t\t")]),t._v(" "),e("li",{staticClass:"test-list-item"},[t._v("\n\t\t\t\t答案解析：否\n\t\t\t")])]),t._v(" "),e("div",{staticClass:"test-btn"},[e("button",{staticClass:"test-start-btn",attrs:{type:"button"},on:{click:t.handleStartClick}},[t._v("开始做题")])]),t._v(" "),e("div",{staticClass:"test-intro"},[e("h4",{staticClass:"test-intro-hd"},[t._v("试卷简介")]),t._v(" "),e("p",[t._v(t._s(t.pt_info.pt_memo))])])])],1)},staticRenderFns:[]};var _=e("VU/8")(i,n,!1,function(t){e("UWS3")},"data-v-60123f80",null);s.default=_.exports}});
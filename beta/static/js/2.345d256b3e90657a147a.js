webpackJsonp([2],{"24Gs":function(t,e,s){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"test-btn"},[e("button",{staticClass:"test-start-btn",attrs:{type:"button"},on:{click:this.handleBtnClick}},[this._t("default")],2)])},staticRenderFns:[]};var n=s("VU/8")({name:"TestBtn",methods:{handleBtnClick:function(){this.$emit("clickTestBtn")}}},i,!1,function(t){s("TEKJ")},"data-v-c43aa8a0",null);e.a=n.exports},"4oNf":function(t,e){},IEb8:function(t,e){},PSiR:function(t,e){},TEKJ:function(t,e){},qQ1n:function(t,e,s){t.exports=s.p+"static/img/test-pic.9a1b8c4.jpg"},rsVV:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Dd8w"),n=s.n(i),a=s("teIl"),c=s("NYxO"),r={name:"TestFooter",props:["downClock"],computed:n()({},Object(c.c)(["itemNum","itemDetail"])),methods:{clickPrevItem:function(){this.$emit("prevBtnClick")},clickNextItem:function(){this.$emit("nextBtnClick")},clickAnswerCard:function(){this.$emit("clickAnswerCard")}}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"footer-nav"},[s("div",{staticClass:"footer-link prev-link",class:{disable:1===t.itemNum},on:{click:t.clickPrevItem}},[s("span",{staticClass:"iconfont prev"},[t._v("")]),t._v(" "),s("span",{staticClass:"footer-text"},[t._v("上一题")])]),t._v(" "),s("div",{staticClass:"footer-link",on:{click:t.clickAnswerCard}},[s("span",{staticClass:"iconfont"},[t._v("")]),t._v(" "),s("span",{staticClass:"footer-text"},[t._v("答题卡")])]),t._v(" "),s("div",{staticClass:"footer-link"},[s("span",{staticClass:"iconfont"},[t._v("")]),t._v(" "),s("span",{staticClass:"footer-text"},[t._v(t._s(t.downClock))])]),t._v(" "),s("div",{staticClass:"footer-link next-link",class:{disable:t.itemNum===t.itemDetail.length},on:{click:t.clickNextItem}},[s("span",{staticClass:"iconfont"},[t._v("")]),t._v(" "),s("span",{staticClass:"footer-text"},[t._v("下一题")])])])},staticRenderFns:[]};var l=s("VU/8")(r,o,!1,function(t){s("PSiR")},"data-v-161ab82f",null).exports,m=s("24Gs"),h={name:"AnswerCard",props:["itemTheme","answerids"],data:function(){return{title:"答题卡"}},components:{SimpleHeader:s("1f0h").a},methods:{clickAnswer:function(t,e){this.$emit("answerClick",t,e)},handleHeaderClick:function(){this.$emit("closeAnsw")}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("simple-header",{attrs:{title:t.itemTheme}}),t._v(" "),s("div",{staticClass:"page-body"},[t.answerids[1].length>0?[s("div",{staticClass:"item-info"},[s("h4",{staticClass:"item-type"},[t._v("\n\t\t\t\t单项选择题\n\t\t\t")]),t._v(" "),s("div",{staticClass:"item-answs"},t._l(t.answerids[1],function(e,i){return s("span",{key:i,staticClass:"as-item",class:{selected:e.answer_id.length>0},on:{click:function(s){t.clickAnswer(e.num,e.answer_id)}}},[t._v(t._s(e.num))])}))])]:t._e(),t._v(" "),t.answerids[2].length>0?[s("div",{staticClass:"item-info"},[s("h4",{staticClass:"item-type"},[t._v("\n\t\t\t多项选择题\n\t\t")]),t._v(" "),s("div",{staticClass:"item-answs"},t._l(t.answerids[2],function(e,i){return s("span",{key:i,staticClass:"as-item",class:{selected:e.answer_id.length>0},on:{click:function(s){t.clickAnswer(e.num,e.answer_id)}}},[t._v(t._s(e.num))])}))])]:t._e(),t._v(" "),t.answerids[3].length>0?[s("div",{staticClass:"item-info"},[s("h4",{staticClass:"item-type"},[t._v("\n\t\t\t判断题\n\t\t")]),t._v(" "),s("div",{staticClass:"item-answs"},t._l(t.answerids[3],function(e,i){return s("span",{key:i,staticClass:"as-item",class:{selected:e.answer_id.length>0},on:{click:function(s){t.clickAnswer(e.num,e.answer_id)}}},[t._v(t._s(e.num))])}))])]:t._e(),t._v(" "),t._m(0),t._v(" "),t._t("default")],2)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"remark"},[e("p",[this._v("注：蓝色背景代表改题目已答，白色背景代表尚未作答")])])}]};var u=s("VU/8")(h,d,!1,function(t){s("4oNf")},"data-v-5a3f6d6f",null).exports,v={name:"TestItem",data:function(){return{clockDown:"00:00:00",asList:["A","B","C","D","E","F","G","H","I","J"],choosedId:[],typeArr:["单选题","多选题","判断题"],topicId:null,topicType:null,showAnswer:!1,showCheckAnswer:!1,prevUrl:this.$route.params.prevUrl}},computed:n()({},Object(c.c)(["itemNum","itemTheme","itemDetail","timer","showTime","answerid","examState"]),{pageTitle:function(){return this.itemTheme+this.itemNum+"/"+this.itemDetail.length},itemType:function(){var t=this.itemDetail[this.itemNum-1].q_type;return this.typeArr[t-1]},itemRes:function(){var t=this;return this.itemDetail[this.itemNum-1].q_result.map(function(e,s){return t.asList[e-1]})},ifCheckAnwer:function(){var t=this.$route.path;return!(t.indexOf("simulateTest")>-1||t.indexOf("examStart")>-1)}}),watch:{examState:function(t,e){var s=this;if(!t){var i=this.$store.state,n=i.answerid[1].concat(i.answerid[2],i.answerid[3]),a=i.userInfo.id,c=this.formatDate(new Date);if("examStart"===this.$route.params.prevUrl)JSI.saveExamResult(a,i.currentItemId,i.score,c,n,function(t){console.log("saveExamResult callback:"+t.result),s.$store.commit("submitExamDate"),s.$router.push("/exam")});else if("simulateTest"===this.prevUrl)console.log("savePageTblObject start"),JSI.savePageTblObject(a,i.currentItemId,i.score,c,n,function(t){console.log("savePageTblObject callback:"+t.result),s.$router.push("/scoreCard/"+s.prevUrl)});else{var r=["fastTest","pointTest","wrongTest"].indexOf(this.prevUrl);if(r>-1){2==r&&(n=n.filter(function(t,e){return 1==t.res}));var o=n.map(function(t,e){return t.id}).join("|");JSI.testItemSubmit(r,a,o,function(t){console.log("testItemSubmit callback:"+t.result),s.$router.push("/scoreCard/"+s.prevUrl)})}}}}},components:{PageHeader:a.a,TestFooter:l,TestBtn:m.a,AnswerCard:u},methods:n()({},Object(c.b)(["addNum","changeNum","remeberAnsw","computeScore","exitExercise"]),{choose:function(t,e,s){var i=t+1,n=this.choosedId.indexOf(i);n>-1?this.choosedId.splice(n,1):(this.topicId=e,this.topicType=s,this.choosedId.push(i)),this.choosedId.length>1&&(1===s||3===s)&&this.choosedId.shift(),this.remeberAnsw({topic_id:this.topicId,topic_type:this.topicType,answer_id:this.choosedId})},handlePrevNextClick:function(t){this.addNum({isAdd:t});var e=this.$store.state,s=e.itemNum,i=e.itemDetail[s-1];this.choosedId=e.answerid[i.q_type].find(function(t,e){return t.num===s}).answer_id,this.topicId=i.id,this.topicType=i.q_type,this.showCheckAnswer=!1},submitAnswer:function(){this.confirmSubmit()},confirmSubmit:function(){var t=this;this.answerid[1].concat(this.answerid[2],this.answerid[3]).some(function(t,e){return 0==t.answer_id.length})?this.$confirmMsg("提示","您还有别的题没有答哦，您确认要提交吗？").then(function(e){e&&(clearInterval(t.timer),console.log("confirmSubmit clearInterval:"+t.timer),t.choosedId=[],t.computeScore())}):(clearInterval(this.timer),console.log("confirmSubmit clearInterval:"+this.timer),this.choosedId=[],this.computeScore())},handleAnswerClicked:function(t,e){this.showAnswer=!1,this.changeNum(t);var s=this.$store.state;this.choosedId=e,this.topicId=s.itemDetail[t-1].id,this.topicType=s.itemDetail[t-1].q_type},handleCheckAnswer:function(){this.showCheckAnswer=!0}}),beforeRouteLeave:function(t,e,s){var i=this;t.path.indexOf("testStart")>-1?(console.log("beforeRouteLeave examState="+this.examState),this.examState?this.$confirmMsg("提示","您尚未提交试卷，退出将无法在记录中查看试卷").then(function(t){t&&(clearInterval(i.timer),console.log("beforeRouteLeave clearInterval:"+i.timer),i.exitExercise(),s())}):s()):t.path.indexOf("exam")>-1?this.examState?this.$showMsg("您尚未提交试卷，不能退出"):s():(console.log("beforeRouteLeave examState="+this.examState),this.examState?(console.log("other tests confirmMsg------"),this.$confirmMsg("提示","您尚未提交试卷，退出将无法查看答题结果").then(function(t){t&&(i.exitExercise(),console.log("beforeRouteLeave :"+i.examState),s())})):s())}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("dialogs-wrapper",{attrs:{"wrapper-name":"confirm-message",tag:"div","transition-name":"fade"}}),t._v(" "),s("page-header",{attrs:{title:t.pageTitle}}),t._v(" "),s("div",{staticClass:"page-body"},[s("h2",{staticClass:"test-title"},[s("span",{staticClass:"test-type"},[t._v(t._s(t.itemNum)+".")]),t._v("["+t._s(t.itemType)+"] \n\t\t\t"+t._s(t.itemTheme)+"\n\t\t")]),t._v(" "),s("div",{staticClass:"test-content"},[s("ul",{staticClass:"test-list"},[s("li",{staticClass:"test-list-item descrip"},[t._v("\n\t\t\t\t\t"+t._s(t.itemDetail[t.itemNum-1].q_name)+"\n\t\t\t\t")]),t._v(" "),t._l(t.itemDetail[t.itemNum-1].q_option,function(e,i){return s("li",{key:e.id,staticClass:"test-list-item",class:{selected:t.choosedId.indexOf(i+1)>-1},on:{click:function(s){t.choose(i,e.id,t.itemDetail[t.itemNum-1].q_type)}}},[s("button",{staticClass:"test-option-btn",attrs:{type:"button"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.asList[i])+"\t\t\t\t\t\t\n\t\t\t\t\t")]),t._v("\n\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t")])})],2),t._v(" "),t._m(0)]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.ifCheckAnwer,expression:"ifCheckAnwer"}],staticClass:"answer-descrip"},[s("button",{directives:[{name:"show",rawName:"v-show",value:!t.showCheckAnswer,expression:"!showCheckAnswer"}],staticClass:"answer-check-btn",attrs:{type:"button"},on:{click:t.handleCheckAnswer}},[t._v("查看答案解析")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showCheckAnswer,expression:"showCheckAnswer"}]},[s("h4",{staticClass:"answer-hd"},[t._v("\n\t\t\t\t\t答案解析\n\t\t\t\t")]),t._v(" "),s("div",{staticClass:"answer-info"},[t._v("\n\t\t\t\t\t正确答案"),t._l(t.itemRes,function(e,i){return s("span",{staticClass:"answer-color"},[t._v(t._s(e))])})],2)])]),t._v(" "),t.itemNum===t.itemDetail.length?s("test-btn",{on:{clickTestBtn:t.submitAnswer}},[t._v("\n\t\t\t提交答案\n\t\t")]):t._e()],1),t._v(" "),s("test-footer",{attrs:{downClock:t.showTime},on:{clickAnswerCard:function(e){t.showAnswer=!0},prevBtnClick:function(e){t.handlePrevNextClick(!1)},nextBtnClick:function(e){t.handlePrevNextClick(!0)}}}),t._v(" "),s("transition",{attrs:{name:"custom-defined-transition","enter-active-class":"animated bounceInUp","leave-active-class":"animated bounceOutDown"}},[s("answer-card",{directives:[{name:"show",rawName:"v-show",value:t.showAnswer,expression:"showAnswer"}],staticClass:"answer-card",attrs:{itemTheme:t.itemTheme,answerids:t.answerid},on:{answerClick:t.handleAnswerClicked,closeAnsw:function(e){t.showAnswer=!1}}},[s("div",{staticClass:"btn-box"},[s("test-btn",{staticClass:"submit-btn first",on:{clickTestBtn:t.submitAnswer}},[t._v("\n\t\t\t\t\t交卷并查看结果\n\t\t\t\t")]),t._v(" "),s("test-btn",{staticClass:"submit-btn",on:{clickTestBtn:function(e){t.showAnswer=!1}}},[t._v("\n\t\t\t\t\t关闭答题卡\n\t\t\t\t")])],1)])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"test-pics"},[e("img",{attrs:{src:s("qQ1n")}})])}]};var w=s("VU/8")(v,f,!1,function(t){s("IEb8")},"data-v-4ac9d546",null);e.default=w.exports}});
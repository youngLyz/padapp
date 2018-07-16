webpackJsonp([1],{"0zoD":function(t,e){},"24Gs":function(t,e,s){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"test-btn"},[e("button",{staticClass:"test-start-btn",attrs:{type:"button"},on:{click:this.handleBtnClick}},[this._t("default")],2)])},staticRenderFns:[]};var n=s("VU/8")({name:"TestBtn",methods:{handleBtnClick:function(){this.$emit("clickTestBtn")}}},i,!1,function(t){s("Q5Vh")},"data-v-5623f522",null);e.a=n.exports},BG4E:function(t,e){},Q5Vh:function(t,e){},btOJ:function(t,e){},mvHQ:function(t,e,s){t.exports={default:s("qkKv"),__esModule:!0}},qkKv:function(t,e,s){var i=s("FeBl"),n=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}},rsVV:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("mvHQ"),n=s.n(i),a=s("Dd8w"),c=s.n(a),r=s("teIl"),o=s("NYxO"),l={name:"TestFooter",props:["downClock"],computed:c()({},Object(o.c)(["itemNum","itemDetail"])),methods:{clickPrevItem:function(){this.$emit("prevBtnClick")},clickNextItem:function(){this.$emit("nextBtnClick")},clickAnswerCard:function(){this.$emit("clickAnswerCard")}}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"footer-nav"},[s("div",{staticClass:"footer-link",class:{disable:1===t.itemNum},on:{click:t.clickPrevItem}},[s("span",{staticClass:"iconfont"},[t._v("")]),t._v(" "),s("span",{staticClass:"footer-text"},[t._v("上一题")])]),t._v(" "),s("div",{staticClass:"footer-link",on:{click:t.clickAnswerCard}},[s("span",{staticClass:"iconfont"},[t._v("")]),t._v(" "),s("span",{staticClass:"footer-text"},[t._v("答题卡")])]),t._v(" "),s("div",{staticClass:"footer-link"},[s("span",{staticClass:"iconfont"},[t._v("")]),t._v(" "),s("span",{staticClass:"footer-text"},[t._v(t._s(t.downClock))])]),t._v(" "),s("div",{staticClass:"footer-link",class:{disable:t.itemNum===t.itemDetail.length},on:{click:t.clickNextItem}},[s("span",{staticClass:"iconfont"},[t._v("")]),t._v(" "),s("span",{staticClass:"footer-text"},[t._v("下一题")])])])},staticRenderFns:[]};var d=s("VU/8")(l,m,!1,function(t){s("btOJ")},"data-v-efd8684a",null).exports,u=s("24Gs"),h={name:"AnswerCard",props:["itemTheme","answerids"],data:function(){return{title:"答题卡"}},components:{SimpleHeader:s("1f0h").a},methods:{clickAnswer:function(t,e){this.$emit("answerClick",t,e)},handleHeaderClick:function(){this.$emit("closeAnsw")}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("simple-header",{attrs:{title:t.itemTheme}}),t._v(" "),s("div",{staticClass:"page-body"},[s("h4",{staticClass:"item-type"},[t._v("\n\t\t\t单项选择题\n\t\t")]),t._v(" "),s("div",{staticClass:"item-answs"},t._l(t.answerids[1],function(e,i){return s("span",{key:i,staticClass:"as-item",class:{selected:e.answer_id.length>0},on:{click:function(s){t.clickAnswer(e.num,e.answer_id)}}},[t._v(t._s(e.num))])})),t._v(" "),s("h4",{staticClass:"item-type"},[t._v("\n\t\t\t多项选择题\n\t\t")]),t._v(" "),s("div",{staticClass:"item-answs"},t._l(t.answerids[2],function(e,i){return s("span",{key:i,staticClass:"as-item",class:{selected:e.answer_id.length>0},on:{click:function(s){t.clickAnswer(e.num,e.answer_id)}}},[t._v(t._s(e.num))])})),t._v(" "),s("h4",{staticClass:"item-type"},[t._v("\n\t\t\t判断题\n\t\t")]),t._v(" "),s("div",{staticClass:"item-answs"},t._l(t.answerids[3],function(e,i){return s("span",{key:i,staticClass:"as-item",class:{selected:e.answer_id.length>0},on:{click:function(s){t.clickAnswer(e.num,e.answer_id)}}},[t._v(t._s(e.num))])})),t._v(" "),t._m(0)]),t._v(" "),t._t("default")],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"remark"},[e("p",[this._v("注：蓝色背景代表改题目已答，白色背景代表尚未作答")])])}]};var _=s("VU/8")(h,v,!1,function(t){s("BG4E")},"data-v-2d89668e",null).exports,f={name:"TestItem",data:function(){return{clockDown:"00:00:00",asList:["A","B","C","D","E","F","G","H","I","J"],choosedId:[],typeArr:["单选题","多选题","判断题"],topicId:null,topicType:null,showAnswer:!1}},computed:c()({},Object(o.c)(["itemNum","itemTheme","itemDetail","timer","showTime","answerid","examState"]),{pageTitle:function(){return this.itemTheme+this.itemNum+"/"+this.itemDetail.length},itemType:function(){var t=this.itemDetail[this.itemNum-1].q_type;return this.typeArr[t-1]}}),watch:{examState:function(t,e){t||(console.log("force submit"+n()(this.$store.state.answerid)),"examStart"===this.$route.params.prevUrl?this.$router.push("/exam"):this.$router.push("/testStart"))}},components:{PageHeader:r.a,TestFooter:d,TestBtn:u.a,AnswerCard:_},methods:c()({},Object(o.b)(["addNum","changeNum","remeberAnsw","computeScore"]),{choose:function(t,e,s){var i=t+1,n=this.choosedId.indexOf(i);n>-1?this.choosedId.splice(n,1):(this.topicId=e,this.topicType=s,this.choosedId.push(i)),this.choosedId.length>1&&("1"===s||"3"===s)&&this.choosedId.shift(),this.remeberAnsw({topic_id:this.topicId,topic_type:this.topicType,answer_id:this.choosedId})},handlePrevNextClick:function(t){this.addNum({isAdd:t});var e=this.$store.state,s=e.itemNum,i=e.itemDetail[s-1];this.choosedId=e.answerid[i.q_type].find(function(t,e){return t.num===s}).answer_id,this.topicId=i.id,this.topicType=i.q_type},submitAnswer:function(){this.confirmSubmit()},confirmSubmit:function(){var t=this.answerid[1].concat(this.answerid[2],this.answerid[3]).some(function(t,e){return 0==t.answer_id.length});console.log("confirmSubmit:"+t),t&&!confirm("您还有别的题没有答哦，您确认要提交吗？")||(clearInterval(this.timer),this.choosedId=[],this.computeScore(),this.$router.push("/scoreCard/"+this.$route.params.prevUrl))},handleAnswerClicked:function(t,e){this.showAnswer=!1,this.changeNum(t);var s=this.$store.state;this.choosedId=e,this.topicId=s.itemDetail[t-1].id,this.topicType=s.itemDetail[t-1].q_type}}),beforeRouteLeave:function(t,e,s){t.path.indexOf("testStart")>-1?this.examState?confirm("提示：您尚未提交试卷，退出将无法在记录中查看试卷")&&(clearInterval(this.timer),s()):s():t.path.indexOf("exam")>-1&&this.examState?(alert("提示：您尚未提交试卷，请提交试卷后退出"),console.log("force submit"+n()(this.$store.state.answerid))):s()}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("page-header",{attrs:{title:t.pageTitle}}),t._v(" "),s("div",{staticClass:"page-body"},[s("h2",{staticClass:"test-title"},[s("span",{staticClass:"test-type"},[t._v(t._s(t.itemNum)+"["+t._s(t.itemType)+"]")]),t._v("\n\t\t\t"+t._s(t.itemTheme)+"\n\t\t")]),t._v(" "),s("ul",{staticClass:"test-list"},[s("li",{staticClass:"test-list-item descrip"},[t._v("\n\t\t\t\t"+t._s(t.itemDetail[t.itemNum-1].q_name)+"\n\t\t\t")]),t._v(" "),t._m(0),t._v(" "),t._l(t.itemDetail[t.itemNum-1].q_option,function(e,i){return s("li",{key:e.topic_answer_id,staticClass:"test-list-item",class:{selected:t.choosedId.indexOf(i+1)>-1},on:{click:function(s){t.choose(i,e.id,t.itemDetail[t.itemNum-1].q_type)}}},[s("button",{staticClass:"test-option-btn",attrs:{type:"button"}},[t._v("\n\t\t\t\t\t"+t._s(t.asList[i])+"\t\t\t\t\t\t\n\t\t\t\t")]),t._v("\n\t\t\t\t"+t._s(e)+"\n\t\t\t")])})],2),t._v(" "),t.itemNum===t.itemDetail.length?s("test-btn",{on:{clickTestBtn:t.submitAnswer}},[t._v("\n\t\t\t提交答案\n\t\t")]):t._e()],1),t._v(" "),s("test-footer",{attrs:{downClock:t.showTime},on:{clickAnswerCard:function(e){t.showAnswer=!0},prevBtnClick:function(e){t.handlePrevNextClick(!1)},nextBtnClick:function(e){t.handlePrevNextClick(!0)}}}),t._v(" "),s("transition",{attrs:{name:"custom-defined-transition","enter-active-class":"animated bounceInUp","leave-active-class":"animated bounceOutDown"}},[s("answer-card",{directives:[{name:"show",rawName:"v-show",value:t.showAnswer,expression:"showAnswer"}],staticClass:"answer-card",attrs:{itemTheme:t.itemTheme,answerids:t.answerid},on:{answerClick:t.handleAnswerClicked,closeAnsw:function(e){t.showAnswer=!1}}},[s("div",{staticClass:"btn-box"},[s("test-btn",{staticClass:"submit-btn first",on:{clickTestBtn:t.submitAnswer}},[t._v("\n\t\t\t\t\t交卷并查看结果\n\t\t\t\t")]),t._v(" "),s("test-btn",{staticClass:"submit-btn",on:{clickTestBtn:function(e){t.showAnswer=!1}}},[t._v("\n\t\t\t\t\t关闭答题卡\n\t\t\t\t")])],1)])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("h4",{staticClass:"test-tip"},[this._v("选项")])])}]};var w=s("VU/8")(f,p,!1,function(t){s("0zoD")},"data-v-3e3bca10",null);e.default=w.exports}});
//# sourceMappingURL=1.f7e648076293b76895f0.js.map
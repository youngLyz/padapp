webpackJsonp([5],{"24xR":function(e,t){},FbZw:function(e,t,s){"use strict";var n={name:"SelectType",data:function(){return{types:[{id:"0",name:"全部"},{id:"1",name:"单选题"},{id:"2",name:"多选题"},{id:"3",name:"判断题"}]}},methods:{handleSelectClick:function(e){var t=e.target;t.parentNode.childNodes.forEach(function(e,t){e.className=e.className.replace("selected","")}),t.className+=" selected";var s=t.getAttribute("val");console.log("selected type:"+s),this.$emit("selectedType",s)}}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",e._l(e.types,function(t,n){return s("div",{key:n,staticClass:"select-item",attrs:{val:t.id},on:{click:e.handleSelectClick}},[s("span",{staticClass:"type-name"},[e._v(e._s(t.name))]),e._v(" "),s("span",{staticClass:"iconfont"},[e._v("")])])}))},staticRenderFns:[]};var l=s("VU/8")(n,a,!1,function(e){s("24xR")},"data-v-5713d662",null);t.a=l.exports},GbIZ:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("teIl"),a=s("FbZw"),l=s("1mVl"),i={name:"WrongTest",data:function(){return{title:"错题重做",backUrl:"/exer",selected:""}},computed:{selectType:function(){return""!=this.selected}},components:{PageHeader:n.a,SelectType:a.a,FullButton:l.a},methods:{handleBtnClick:function(){var e=this,t={itemTheme:this.title,totalScore:0,scorePrinciple:{single_score:1,multi_score:1,tf_score:1},itemDetail:null};JSI.generateNoRepeatWrongRandom({post:this.$store.state.firstClz.id,know:this.$store.state.secondClz.id,u_id:this.$store.state.userInfo.id,q_type:this.selected,num:10},function(s){t.itemDetail=s,t.totalScore=s.length,e.$store.dispatch("initializeData",t),e.$router.push("/testItem/wrongTest")})},handleSeleted:function(e){this.selected=e}}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("page-header",{attrs:{title:e.title,backUrl:e.backUrl}}),e._v(" "),s("div",{staticClass:"select-body"},[s("h2",{staticClass:"select-title"},[e._v("选择测试题型")]),e._v(" "),s("select-type",{on:{selectedType:e.handleSeleted}}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.selectType,expression:"selectType"}],staticClass:"btn-box"},[s("full-button",{attrs:{name:"开始练习"},on:{skipNext:e.handleBtnClick}})],1)],1)],1)},staticRenderFns:[]};var r=s("VU/8")(i,c,!1,function(e){s("heLR")},"data-v-4e155eb0",null);t.default=r.exports},heLR:function(e,t){}});
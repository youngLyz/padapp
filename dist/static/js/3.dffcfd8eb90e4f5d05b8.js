webpackJsonp([3],{"+ntZ":function(e,t){},"7VeE":function(e,t){},Ezit:function(e,t,s){"use strict";var n={render:function(){var e=this.$createElement;return(this._self._c||e)("button",{staticClass:"start-btn",attrs:{type:"button"},on:{click:this.handleStart}},[this._v(this._s(this.name))])},staticRenderFns:[]};var a=s("VU/8")({name:"LineButton",props:["name"],methods:{handleStart:function(){this.$emit("skipNext")}}},n,!1,function(e){s("+ntZ")},"data-v-328f04a5",null);t.a=a.exports},FbZw:function(e,t,s){"use strict";var n={name:"SelectType",data:function(){return{types:[{id:"0",name:"全部"},{id:"1",name:"单选题"},{id:"2",name:"多选题"},{id:"3",name:"判断题"}]}},methods:{handleSelectClick:function(e){var t=e.target;t.parentNode.childNodes.forEach(function(e,t){e.className=e.className.replace("selected","")}),t.className+=" selected";var s=t.getAttribute("val");console.log("selected type:"+s),this.$emit("selectedType",s)}}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",e._l(e.types,function(t,n){return s("div",{key:n,staticClass:"select-item",attrs:{val:t.id},on:{click:e.handleSelectClick}},[s("span",{staticClass:"type-name"},[e._v(e._s(t.name))]),e._v(" "),s("span",{staticClass:"iconfont"},[e._v("")])])}))},staticRenderFns:[]};var i=s("VU/8")(n,a,!1,function(e){s("7VeE")},"data-v-673e8be6",null);t.a=i.exports},NRUV:function(e,t){},swi5:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("teIl"),a=s("FbZw"),i=s("Ezit"),c={name:"FastTest",data:function(){return{title:"快速练习",backUrl:"/exer",selected:""}},computed:{selectType:function(){return""!=this.selected}},components:{PageHeader:n.a,SelectType:a.a,LineButton:i.a},methods:{handleBtnClick:function(){var e=this,t={itemTheme:this.title,totalScore:0,scorePrinciple:{single_score:1,multi_score:1,tf_score:1},itemDetail:null};JSI.genPostKnowQuestions({u_id:this.$store.state.userInfo.id,post:this.$store.state.firstClz.id,know:this.$store.state.secondClz.id,qtype:this.selected,num:10},function(s){t.itemDetail=s,t.totalScore=s.length,e.$store.dispatch("initializeData",t),e.$router.push("/testItem/fastTest")})},handleSeleted:function(e){this.selected=e}}},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("page-header",{attrs:{title:e.title,backUrl:e.backUrl}}),e._v(" "),s("div",{staticClass:"select-body"},[s("h2",{staticClass:"select-title"},[e._v("选择测试题型")]),e._v(" "),s("select-type",{on:{selectedType:e.handleSeleted}}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.selectType,expression:"selectType"}],staticClass:"btn-box"},[s("line-button",{attrs:{name:"开始练习"},on:{skipNext:e.handleBtnClick}})],1)],1)],1)},staticRenderFns:[]};var r=s("VU/8")(c,l,!1,function(e){s("NRUV")},"data-v-93b1787e",null);t.default=r.exports}});
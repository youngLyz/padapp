<template>
	<div>
		<dialogs-wrapper wrapper-name="confirm-message" tag="div" transition-name="fade">			
		</dialogs-wrapper>		
		<page-header :title="pageTitle"></page-header>
		<div class="page-body">
			<h2 class="test-title">
				<span class="test-type">{{itemNum}}.</span>[{{itemType}}]&nbsp;
				{{itemTheme}}
			</h2>
			<div class="test-content">
				
				<ul class="test-list">
					<li class="test-list-item descrip">
						{{itemDetail[itemNum-1].q_name}}
					</li>
					<!-- <li><h4 class="test-tip">选项</h4></li> -->
					<li class="test-list-item" 
						v-for="(item,index) of itemDetail[itemNum-1].q_option"
						:key="item.id"
						v-bind:class="{'selected':choosedId.indexOf(index+1)>-1}"
						@click="choose(index,item.id,itemDetail[itemNum-1].q_type)">
						<button 
							type="button" 
							class="test-option-btn"
							>
							{{asList[index]}}						
						</button>
						{{item}}
					</li>				
				</ul>
				<div class="test-pics">
					<img src="./../../assets/images/test-pic.jpg">
				</div>
			</div>
						
			<div class="answer-descrip" v-show="ifCheckAnwer">
				<button type="button" 
					class="answer-check-btn"
					v-show="!showCheckAnswer" 
					@click="handleCheckAnswer">查看答案解析</button>
				<div v-show="showCheckAnswer">
					<h4 class="answer-hd"><!-- 
						<span class="iconfont answer-hd-icon">&#xe71b;</span> -->
						答案解析
					</h4>
					<div class="answer-info">
						正确答案<span v-for="(res,index) of itemRes" class="answer-color">{{res}}</span>
					</div>
				</div>	
				
			</div>		
			<test-btn 
				v-if="itemNum===itemDetail.length"
				@clickTestBtn="submitAnswer">
				提交答案
			</test-btn>			
		</div>
		<test-footer 
			:downClock="showTime"
			@clickAnswerCard="showAnswer=true"
			@prevBtnClick="handlePrevNextClick(false)"
			@nextBtnClick="handlePrevNextClick(true)"></test-footer>
		<transition 
			name="custom-defined-transition"
			enter-active-class="animated bounceInUp"
			leave-active-class="animated bounceOutDown">
			<answer-card 
				class="answer-card" 
				:itemTheme="itemTheme"
				:answerids="answerid"
				v-show="showAnswer"
				@answerClick="handleAnswerClicked"
				@closeAnsw="showAnswer=false">
				<div class="btn-box">
					<test-btn class="submit-btn first"
						@clickTestBtn="submitAnswer">
						交卷并查看结果
					</test-btn>	
					<test-btn class="submit-btn"
						@clickTestBtn="showAnswer=false">
						关闭答题卡
					</test-btn>	
				</div>
			</answer-card>
		</transition>	
	</div>
</template>

<script type="text/javascript">
	import PageHeader from 'comp/Header'
	import TestFooter from './components/TestFooter'
	import TestBtn from './components/TestBtn'
	import SimpleHeader from 'comp/SimpleHeader'
	import AnswerCard from './components/Answer'
	import { mapState,mapActions } from 'vuex'
	export default {
		name: 'TestItem',		
		data () {
			return {
				//title: '2018年资料员专业基础',
				clockDown:'00:00:00',
				asList:['A','B','C','D','E','F','G','H','I','J'],				
				choosedId:[],
				typeArr:['单选题','多选题','判断题'],
				topicId: null,
				topicType:null,				
				showAnswer:false,
				showCheckAnswer:false,
				prevUrl:this.$route.params.prevUrl
			}
		},
		computed: {
			...mapState(['itemNum','itemTheme','itemDetail','timer','showTime','answerid','examState']),
			pageTitle () {				
				return this.itemTheme + this.itemNum + '/' + this.itemDetail.length
			},
			itemType() {
				let qt = this.itemDetail[this.itemNum-1].q_type;
				return this.typeArr[qt-1];
			},
			itemRes() {
				let res = this.itemDetail[this.itemNum-1].q_result;
				let str =  res.map((item,index)=>{					
					return this.asList[item-1]
				});				
				return str;
			},
			ifCheckAnwer () {
				let path = this.$route.path;
				//console.log(path);
				
				if(path.indexOf('simulateTest')>-1||path.indexOf('examStart')>-1){
				//排除模拟考试，正常考试
					return false;
				}else{
					return true
				}
			}
		},
		watch: {
			examState: function (val,oldVal){//观察考试状态，过了考试时间或者提交试卷则自动跳转
				if(!val){
					//提交试题
					//console.log("force submit"+JSON.stringify(this.$store.state.answerid));
					let state_ = this.$store.state;						
			  		let qalist = state_.answerid["1"].concat(state_.answerid["2"],state_.answerid["3"]);
			  		let userId = state_.userInfo.id;
			  		let date = this.formatDate(new Date());
					if(this.$route.params.prevUrl==='examStart'){//考试
						JSI.saveExamResult(userId,state_.currentItemId,state_.score,date,qalist,(res)=>{
							console.log("saveExamResult callback:"+res.result);
							this.$store.commit('submitExamDate');//设置考试时间
							this.$router.push("/exam");	
						})						
					}else{
						
				  		if(this.prevUrl==='simulateTest'){//模拟考试
							console.log("savePageTblObject start");				  			
					  		JSI.savePageTblObject(userId,state_.currentItemId,state_.score,date,qalist,
					  			(res)=>{
					  				//模拟考试
					  			console.log("savePageTblObject callback:"+res.result);
					  			this.$router.push('/scoreCard/'+this.prevUrl);
					  		});
				  		}else{//0-快速练习，1-考点练习，2-错题重做
				  			//console.log("testItemSubmit start");
				  			let typesArr = ["fastTest","pointTest","wrongTest"];
				  			let curType = typesArr.indexOf(this.prevUrl);
				  			if(curType>-1){
				  				if(curType==2){//错题重做，传正确题目的id
				  					qalist = qalist.filter((qitem,index)=>{
				  						return qitem.res==1;
				  					});
				  				}
				  				let itemIds = qalist.map((qitem,index)=>{
				  					return qitem.id
				  				}).join("|");				  				

				  				JSI.testItemSubmit(curType,userId,itemIds,(res)=>{
									console.log("testItemSubmit callback:"+res.result);
					  				this.$router.push('/scoreCard/'+this.prevUrl);
				  				});	
				  			}
				  			
				  		} 
				  		
						
					}					
				}				
			}
		},
		components: {
			PageHeader,
			TestFooter,
			TestBtn,
			AnswerCard
		},
		methods: {
			...mapActions(['addNum','changeNum','remeberAnsw','computeScore','exitExercise']),
			choose (index,topic_id,topic_type) {	
				let ans_id = index+1;			
				let curIndex = this.choosedId.indexOf(ans_id);	//判断当前答案的id是否被选中
				if(curIndex>-1){//被选中，则删除
					this.choosedId.splice(curIndex,1);
				}else{//未选中，添加
					this.topicId = topic_id;
					this.topicType = topic_type;
					this.choosedId.push(ans_id);
				}

				if(this.choosedId.length>1&&(topic_type===1||topic_type===3)){
				//单选和判断，将上次选择的数据删除
					this.choosedId.shift();
				}

				//记住答案
				this.remeberAnsw({
		  				topic_id:this.topicId,
		  				topic_type:this.topicType,
		  				answer_id:this.choosedId
		  			});
			},			
			handlePrevNextClick (isAdd) {
				this.addNum({isAdd});
	  			//获取上下一个题目和答案
	  			let state_ = this.$store.state;
				let num = state_.itemNum;
				let currentItem = state_.itemDetail[num-1];
				
				this.choosedId = state_.answerid[currentItem.q_type].find((item,index)=>item.num===num).answer_id;
				this.topicId = currentItem.id;
		  		this.topicType = currentItem.q_type;
		  		this.showCheckAnswer = false;
			},
			submitAnswer () {				
				this.confirmSubmit();
			},
			confirmSubmit () {
				let ansArr = this.answerid['1'].concat(this.answerid['2'],this.answerid['3']);
				let notAll = ansArr.some((item,index)=>{
								return item.answer_id.length==0
							});
				//console.log("confirmSubmit:"+notAll);
				if(notAll){
					this.$confirmMsg('提示','您还有别的题没有答哦，您确认要提交吗？').then(res=>{
						if(!res){
							return;
						}else{
							clearInterval(this.timer)	
							console.log("confirmSubmit clearInterval:"+this.timer);
					  		this.choosedId = [];
					  		this.computeScore();	
						}
					})
					
				}else{
					clearInterval(this.timer)	
					console.log("confirmSubmit clearInterval:"+this.timer);
			  		this.choosedId = [];
			  		this.computeScore();	
				}		
					  		
				//this.$router.push('/scoreCard/'+this.$route.params.prevUrl)
			},
			handleAnswerClicked (num,answers) {
				this.showAnswer = false;
				this.changeNum(num);//跳转到当前题号，获取原来存储的题目和答案
				let state_ = this.$store.state;				
				this.choosedId = answers;
				this.topicId = state_.itemDetail[num-1].id
		  		this.topicType = state_.itemDetail[num-1].q_type
			},
			handleCheckAnswer () {
				this.showCheckAnswer = true;
			}
		},
		beforeRouteLeave (to, from, next) {	
			
			if(to.path.indexOf('testStart')>-1){//模拟考试
				console.log("beforeRouteLeave examState="+this.examState);
				if(!this.examState){//考试状态变化，直接退出考试				
					//加提示
					next();
				}else{//考试中，手动退出提示
					this.$confirmMsg('提示','您尚未提交试卷，退出将无法在记录中查看试卷').then(res=>{
						if(res){
							clearInterval(this.timer);
							console.log("beforeRouteLeave clearInterval:"+this.timer);
							this.exitExercise();//更改考试状态
							next();		
							
						}
					})	
				}
				
			}else if(to.path.indexOf('exam')>-1){//真实考试	

				if(!this.examState){					
					next()	
				}else{//手动退出
					this.$showMsg("您尚未提交试卷，不能退出");
					//console.log("force submit"+JSON.stringify(this.$store.state.answerid));	
				}
				
			}else{//其他考试，退出提示
				console.log("beforeRouteLeave examState="+this.examState);
				if(!this.examState){
					next();
				}else{
					console.log("other tests confirmMsg------")
					this.$confirmMsg('提示','您尚未提交试卷，退出将无法查看答题结果').then(res=>{
						if(res){
							this.exitExercise();//更改考试状态
							console.log("beforeRouteLeave :"+this.examState);
							next();							
						}
					})	
				}
				
			}	
		
			
		}
	}
</script>

<style lang="scss" scoped>
.page-body{
	margin: 1.36rem 0.76rem 0;
	height: 9rem;
	overflow: auto;
	.test-title{
		padding:0 0.672rem;
		font-size: $font18;
		color: $blue;
		line-height: 0.896rem;
		@include border-bottom;
		.test-type{
			padding-right: 0.32rem;			
		}
	}
	.test-content{
		display: flex;
	}
	.test-pics{
		width: 6.4rem;
		margin: 0.36rem 1.04rem;
		img{
			width: 100%;
		}
	}
	.test-list{
		position: relative;
		flex:1;
		padding:0.36rem 1.24rem;
		&:before{
			content:'';
			width: 0.16rem;
			height: 0.16rem;
			background: $color-dark;
			border-radius: 50%;
			position: absolute;
			left: 0.64rem;
			top: 0.56rem;
		}
		.test-list-item{
			font-size: $font18;	
			color: $color-dark;	
			line-height: 0.56rem;
			padding-bottom: 0.36rem;
			&.descrip{
				
			}
			.test-option-btn{
				width:0.512rem;
				height: 0.512rem;
				margin-right:0.24rem;
				color: $color-grey;
				font-size: $font18;
				border:1px solid $color-dark;
				border-radius: 50%;

			}
			&.selected{
				color: $green;
				.test-option-btn{
					color: $color-white;
					background: $green;
					border:1px solid $green;
				}
			}
		}
	}
	.test-tip{
		color: $blue;
		font-size: $font16;
		padding: .15rem 0;
	}	
}	
.answer-card{
	position: fixed;
	top:1.12rem;
	left: 0;
	right: 0;
	bottom: 0;
	background: $color-white;
	z-index: 1000;	
}
.btn-box{	
	display: flex;
	.submit-btn{		
		flex:1;
		text-align: center;
		margin:1rem 0;
	}
	.submit-btn /deep/ .test-start-btn{
		width: 4.664rem;
		height: 0.76rem;
		line-height: 0.76rem;
		border-radius: 0;
		margin: 0 auto;
		background: $green;
	}
	.submit-btn.first /deep/ .test-start-btn{
		background: $blue;
	}
}
.answer-check-btn{
	margin-top: 1.2rem;
	width: 3.328rem;
	height: 0.768rem;
	line-height: 0.7655rem;		
	font-size: $font20;
	color: $color-white;
	@include background($green);	
}
.answer-descrip{	
	border-top: 1px solid $border-dark-grey;
	color: $color-dark-grey;
	text-align: center;
	padding-bottom: 0.72rem;

	.answer-hd{
		text-align: left;
		line-height: 1.6;
		font-size: $font18;
		padding:0.36rem 1.24rem;
		position: relative;
		color: $blue;
		&:before{
			content:'';
			width: 0.16rem;
			height: 0.16rem;
			background: $blue;
			border-radius: 50%;
			position: absolute;
			left: 0.64rem;
			top: 0.56rem;
		}
	}
	.answer-info{
		text-align: left;
		padding:0 1.24rem;
	}
	.answer-hd-icon{
		font-size: $font30;
		color: $color-white;
		background: $bg-cyan;
		width: .7rem;
		height: .7rem;		
		border-radius: 50%;
		margin-right: .1rem;
	}
	.answer-color{
		width:0.512rem;
		height: 0.512rem;
		line-height: 0.512rem;
		margin-right:.01rem;
		margin-left:.25rem;
		font-size: $font16;
		border:1px solid $color-grey;
		border-radius: 50%;
		display: inline-block;
		text-align: center;
		color: $color-white;
		background: $green;
		border:1px solid $green;
	}

}
</style>
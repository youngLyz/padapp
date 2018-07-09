<template>
	<div>
		<page-header :title="pageTitle"></page-header>
		<div class="page-body">
			<h2 class="test-title">
				<span class="test-type">{{itemNum}}[{{itemDetail[itemNum-1].type_name}}]</span>
				{{itemTheme}}
			</h2>
			<ul class="test-list">
				<li class="test-list-item descrip">
					{{itemDetail[itemNum-1].topic_name}}
				</li>
				<li><h4 class="test-tip">选项</h4></li>
				<li class="test-list-item" 
					v-for="(item,index) of itemDetail[itemNum-1].topic_answer"
					:key="item.topic_answer_id"
					v-bind:class="{'selected':choosedId.indexOf(item.topic_answer_id)>-1}"
					@click="choose(index,item.topic_id,itemDetail[itemNum-1].type,item.topic_answer_id)">
					<button 
						type="button" 
						class="test-option-btn"
						>
						{{asList[index]}}						
					</button>
					{{item.answer_name}}
				</li>				
			</ul>			
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
				topicId: null,
				topicType:null,				
				showAnswer:false				
			}
		},
		computed: {
			...mapState(['itemNum','itemTheme','itemDetail','timer','showTime','answerid']),
			pageTitle () {				
				return this.itemTheme + this.itemNum + '/' + this.itemDetail.length
			}
		},
		components: {
			PageHeader,
			TestFooter,
			TestBtn,
			AnswerCard
		},
		methods: {
			...mapActions(['addNum','changeNum','remeberAnsw','resetData']),
			choose (index,topic_id,topic_type,answ_id) {				
				let curIndex = this.choosedId.indexOf(answ_id);				
				if(curIndex>-1){
					this.choosedId.splice(curIndex,1);
				}else{					
					this.topicId = topic_id;
					this.topicType = topic_type;
					this.choosedId.push(answ_id);
				}

				if(this.choosedId.length>1&&(topic_type==='ONE'||topic_type==='TFNG')){
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
				
				this.choosedId = state_.answerid[currentItem.type].find((item,index)=>item.num===num).answer_id;
				this.topicId = currentItem.topic_id;
		  		this.topicType = currentItem.type;
			},
			submitAnswer () {				
				this.confirmSubmit();
			},
			confirmSubmit () {
				if(this.answerid.len<this.itemNum){
					if(!confirm('您还有别的题没有答哦，您确认要提交吗？')){
						return;
					}
				}		
				clearInterval(this.timer)
		  		this.choosedId = []; 		  		
				this.$router.push('/scoreCard/'+this.$route.params.prevUrl)
			},
			handleAnswerClicked (num,answers) {
				this.showAnswer = false;
				this.changeNum(num);//跳转到当前题号，获取原来存储的题目和答案
				let state_ = this.$store.state;				
				this.choosedId = answers;
				this.topicId = state_.itemDetail[num-1].topic_id
		  		this.topicType = state_.itemDetail[num-1].type
			}
		},
		created () {
			this.$store.commit('REMBER_TIME');
		},
		beforeRouteLeave (to, from, next) {
			clearInterval(this.timer)
			if(confirm('提示：您尚未提交试卷，退出将无法在记录中查看试卷')){
				this.resetData();
				next();
			}
		}
	}
</script>

<style lang="scss" scoped>
.page-body{
	margin-top: 1.3rem;
	@include padlf40;
	.test-title{
		font-size: $font20;
		color: $color-dark;
		line-height: 1.2rem;
		@include border-bottom($border-dark-grey);
		.test-type{
			color: $blue;
		}
	}
	.test-list{
		.test-list-item{
			font-size: $font18;	
			color: $color-black;	
			line-height: 1rem;
			&.descrip{
				padding:.25rem 0;
			}
			.test-option-btn{
				width:.7rem;
				height: .7rem;
				margin-right:.5rem;
				color: $color-grey;
				font-size: $font24;
				border:1px solid $color-grey;
				border-radius: 50%;

			}
			&.selected{
				color: $bg-cyan;
				.test-option-btn{
					color: $color-white;
					background: $bg-cyan;
					border:1px solid $bg-cyan;
				}
			}
		}
	}
	.test-tip{
		color: $blue;
		font-size: $font16;
		padding: .3rem 0;
	}	
}	
.answer-card{
	position: fixed;
	top:1.3rem;
	left: 0;
	right: 0;
	bottom: 0;
	background: $color-white;
	z-index: 1000;	
}
.btn-box{
	border-top:1px solid $border-dark-grey;
	display: flex;
	padding-top: 1rem;
	margin-top: .5rem;
	.submit-btn{		
		flex: 1;	
	}
	.submit-btn /deep/ .test-start-btn{
		width: 80% !important;
		margin-left: 10%;
	}
	.submit-btn.first /deep/ .test-start-btn{
		background: $blue;
	}
}
</style>
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
				v-if="itemNum < itemDetail.length&&choosedId.length>0"
				@clickTestBtn="nextItem">
				下一题
			</test-btn>
			<test-btn 
				v-if="itemNum===itemDetail.length&&choosedId.length>0"
				@clickTestBtn="submitAnswer(true)">
				提交答案
			</test-btn>			
		</div>
		<test-footer 
			:downClock="showTime"
			@clickAnswerCard="showAnswer=true"></test-footer>
		<transition 
			name="custom-defined-transition"
			enter-active-class="animated slideInUp"
			leave-active-class="animated slideOutDown">
			<answer-card 
				class="answer-card" 
				:itemTheme="itemTheme"
				:answerids="answerid"
				v-show="showAnswer"
				@answerClick="handleAnswerClicked">
				<test-btn class="submit-btn"
					@clickTestBtn="submitAnswer">
					交卷并查看结果
				</test-btn>	
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
				title: '2018年资料员专业基础',
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
				return this.title + this.itemNum + '/' + this.itemDetail.length
			}
		},
		components: {
			PageHeader,
			TestFooter,
			TestBtn,
			AnswerCard
		},
		methods: {
			...mapActions(['addNum','changeNum','initializeData']),
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

			},
			nextItem () {				
				if (this.choosedId.length>0) {
					
		  			this.addNum({
		  				topic_id:this.topicId,
		  				topic_type:this.topicType,
		  				answer_id:this.choosedId
		  			});
		  			//获取下一个题目和答案
		  			let state_ = this.$store.state;
					let num = state_.itemNum;
					let currentItem = state_.itemDetail[num-1];
					
					this.choosedId = state_.answerid[currentItem.type].find((item,index)=>item.num===num).answer_id;
					this.topicId = currentItem.topic_id;
			  		this.topicType = currentItem.type;
	  			}else{
	  				alert('您还没有选择答案哦')
	  			}
			},
			submitAnswer (isSub) {
				if(isSub){//是否提交最后一题					

					if (this.choosedId.length>0) {		  			
			  			this.addNum({
			  				topic_id:this.topicId,
			  				topic_type:this.topicType,
			  				answer_id:this.choosedId
			  			});
			  			this.confirmSubmit();			  			
		  			}else{
		  				alert('您还没有选择答案哦')
		  			}
				}else{
					this.confirmSubmit();
				}
				
			},
			confirmSubmit () {
				if(this.answerid.len<this.itemNum){
					if(!confirm('您还有别的题没有答哦，您确认要提交吗？')){
						return;
					}
				}		
				clearInterval(this.timer)
		  		this.choosedId = []; 
				this.$router.push('/scoreCard')
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
			this.initializeData();
		},
		beforeRouteLeave (to, from, next) {
			clearInterval(this.timer)
			next()
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
</style>
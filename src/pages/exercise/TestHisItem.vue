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
				>
					<button 
						type="button" 
						class="test-option-btn"
						>
						{{asList[index]}}						
					</button>
					{{item.answer_name}}
				</li>				
			</ul>
			<div class="answer-descrip">
				<h4 class="answer-hd">
					<span class="iconfont answer-hd-icon">&#xe71b;</span>
					答案解析
				</h4>
				<div class="answer-info">
					正确答案<span class="answer-color">{{itemDetail[itemNum-1].answer_ids}}</span>
				</div>
			</div>								
		</div>
		<test-his-footer 
			:downClock="showTime"			
			@prevBtnClick="handlePrevNextClick(false)"
			@nextBtnClick="handlePrevNextClick(true)"></test-his-footer>
		
	</div>
</template>

<script type="text/javascript">
	import PageHeader from 'comp/Header'
	import TestHisFooter from './components/TestHisFooter'
	import TestBtn from './components/TestBtn'
	import SimpleHeader from 'comp/SimpleHeader'
	import { mapState,mapActions } from 'vuex'
	export default {
		name: 'TestHisItem',		
		data () {
			return {				
				asList:['A','B','C','D','E','F','G','H','I','J'],				
				choosedId:[],
				topicId: null,
				topicType:null				
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
			TestHisFooter,
			TestBtn			
		},
		methods: {
			...mapActions(['addNum']),				
			handlePrevNextClick (isAdd) {
				this.addNum({isAdd});
	  			//获取上下一个题目和答案
	  			let state_ = this.$store.state;
				let num = state_.itemNum;
				let currentItem = state_.itemDetail[num-1];
				
				this.choosedId = state_.answerid[currentItem.type].find((item,index)=>item.num===num).answer_id;
				this.topicId = currentItem.topic_id;
		  		this.topicType = currentItem.type;
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
.answer-descrip{
	margin-top: .5rem;
	padding-top: .5rem;
	border-top: 1px solid $border-dark-grey;
	color: $color-dark-grey;
	.answer-hd{line-height: .7rem;margin-bottom: .25rem;}
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
		color: $bg-cyan;
		padding-left: .1rem;
	}

}
</style>
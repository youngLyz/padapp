<template>
	<div>
		<page-header :title="pageTitle"></page-header>
		<div class="page-body">
			<h2 class="test-title">
				<span class="test-type">{{itemNum}}[{{itemType}}]</span>
				{{itemTheme}}
			</h2>
			<ul class="test-list">
				<li class="test-list-item descrip">
					{{itemDetail[itemNum-1].q_name}}
				</li>
				<li><h4 class="test-tip">选项</h4></li>
				<li class="test-list-item" 
					v-for="(item,index) of itemDetail[itemNum-1].q_option"
					:key="index"
					v-bind:class="{'selected':choosedId.indexOf(index+1)>-1}"
				>
					<button 
						type="button" 
						class="test-option-btn"
						>
						{{asList[index]}}						
					</button>
					{{item}}
				</li>				
			</ul>
			<div class="answer-descrip">
				<h4 class="answer-hd">
					<span class="iconfont answer-hd-icon">&#xe71b;</span>
					答案解析
				</h4>
				<div class="answer-info">
					正确答案<span class="answer-color">{{itemRes}}</span>
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
				typeArr:['单选题','多选题','判断题']				
			}
		},
		computed: {
			...mapState(['itemNum','itemTheme','itemDetail','timer','showTime','answerid']),
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
				return str.join(",");
			},
			choosedId () {
				return this.itemDetail[this.itemNum-1].answer_ids||[];
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
	  			/*//获取上下一个题目和答案
	  			let state_ = this.$store.state;
				let num = state_.itemNum;
				let currentItem = state_.itemDetail[num-1];
				//显示标准答案
				let ansItem = state_.answerid[currentItem.q_type]
										.find((item,index)=>item.num===num);
				this.choosedId = ansItem.answer_id;
				this.id = currentItem.id;
		  		this.q_type = currentItem.q_type;*/
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
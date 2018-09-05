<template>
	<div>
		<page-header :title="pageTitle"></page-header>
		<div class="page-body">
			<h2 class="test-title">
				<span class="test-type">{{itemNum}}.</span>[{{itemType}}]&nbsp;
				{{itemTheme}}
			</h2>
			<ul class="test-list">
				<li class="test-list-item descrip">
					{{itemDetail[itemNum-1].q_name}}
				</li>
				<!-- <li><h4 class="test-tip">选项</h4></li> -->
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
					答案解析
				</h4>
				<div class="answer-info">
					正确答案<span v-for="(res,index) of itemRes" class="answer-color">{{res}}</span>
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
				return str;//.join(",");
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
			...mapActions(['addNum','exitExercise']),				
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
		},
		beforeRouteLeave (to, from, next) {
			this.exitExercise();
			next();
		}
	}
</script>

<style lang="scss" scoped>
.page-body{
	margin: 1.36rem 0.76rem 0;	
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
				padding-bottom: 0.92rem;
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
.answer-check-btn{
	margin-top: 1.68rem;
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
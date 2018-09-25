<template>
	<div>
		<page-header :title="title" :backUrl="backUrl"></page-header>
		<div class="page-body">
			<div class="score-box">
				<div class="score-circle">
					<span class="score-cur">{{score}}&nbsp;分</span>
					<span class="score-total">总分数 {{totalScore}}分</span>
				</div>
				<p class="score-date">结果生成时间：{{currentTime}}</p>
			</div>
			<div class="score-info">
				<div class="score-info-hd">
					<span class="iconfont">&#xe614;</span>
					答题情况
				</div>
				<div class="answer-list">
					<template v-if="answerid['1'].length>0">
					<div class="item-info">
					<h4 class="item-type">
						单项选择题
					</h4>
					<div class="item-answs">
						<span class="as-item" 
							v-for="(item,index) of answerid['1']"
							:key="index"
							:class="{'selected':item.answer_id.length>0,'error':item.res==0}"	
						>{{item.num}}</span>
					</div>
					</div>
					</template>
					<template v-if="answerid['2'].length>0">
					<div class="item-info">
					<h4 class="item-type">
						多项选择题
					</h4>
					<div class="item-answs">
						<span
							class="as-item" 
							v-for="(item,index) of answerid['2']"
							:key="index"
							:class="{'selected':item.answer_id.length>0,'error':item.res==0}"	
						>{{item.num}}</span>
					</div>
					</div>
				</template>
				<template v-if="answerid['3'].length>0">
				<div class="item-info">
					<h4 class="item-type">
						判断题
					</h4>
					<div class="item-answs">
						<span class="as-item" 
							v-for="(item,index) of answerid['3']"
							:key="index"
							:class="{'selected':item.answer_id.length>0,'error':item.res==0}"	
						>{{item.num}}</span>
					</div>
					</div>
					</template>
				</div>
			</div>
		</div>
	</div>	
</template>
<script type="text/javascript">
	import PageHeader from 'comp/Header'
	import { mapState } from 'vuex'
	export default {
		name: 'ScoreCard',
		data () {
			return {
				title:this.$store.state.itemTheme+"答题结果",
				backUrl: "/"+this.$route.params.prevUrl,
				currentTime: this.formatDate(new Date())
			}
		},
		components: {
			PageHeader
		},
		computed: {
			...mapState(['answerid','totalScore','score'])
		}
	}
</script>

<style lang="scss" scoped>
.page-body{
	margin-top: 1.12rem;
	background: $bg-light-grey;
	max-height: 11.2rem;
	overflow: auto;
	.score-box{
		padding-top: 1.12rem;
		height: 6.0rem;
		background: url(./../../assets/images/grid@2.jpg) repeat;
		color: $color-white;
		justify-content: center;

		.score-circle{
			width:3.424rem;
			height: 3.424rem;
			background-color: $blue;
			border:0.08rem solid #ffffff8a;						
			border-radius: 50%;			
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;
			margin: 0.36rem auto;
		}
		.score-cur{
			font-size: $font30;
			line-height: 0.8rem;
			padding-top: 0.32rem;
		}
		.score-total{
			padding-top: 0.48rem;
			font-size: $font20;
		}
	}
	.score-date{
		color: $blue;
		font-size: $font18;
		text-align: center;
		line-height: 0.6rem;
		font-weight: 600;
	}
	


	.score-info{
		background: $color-white;
		padding: 0 0.76rem;
		.score-info-hd{
			height: 1.2rem;
			line-height: 1.2rem;
			color: $blue;
			font-size: $font20;
			font-weight: bold;			
			.iconfont{
				font-size: $font30;
				padding-left: .36rem;
				padding-right: 0.32rem;
			}
		}
	}
	.answer-list{
	padding-bottom: 0.36rem;
	}
	.item-info{
		@include border-top;
		padding: 0.36rem 0.72rem;
	}
	.item-type{
		position: relative;		
		color: $color-grey;
		font-size: $font18;
		line-height: 1;
		padding-left:0.6rem;
		&:before{
			content:'';
			width: 0.16rem;
			height: 0.16rem;
			background: $color-grey;
			border-radius: 50%;
			position: absolute;
			left:0;
			top: 0.096rem;
		}
	}
	.item-answs{
		margin:0 0.6rem;
		.as-item{
			width:0.512rem;
			height: 0.512rem;
			line-height: 0.512rem;
			margin-right:.25rem;
			margin-top:.25rem;
			color: $color-grey;
			font-size: $font16;
			border:1px solid $color-grey;
			border-radius: 50%;
			display: inline-block;
			text-align: center;
			&.selected{				
				color: $color-white;
				background: $blue;
				border:1px solid $blue;				
			}
			&.error{				
				color: $color-white;
				background: $color-red;
				border:1px solid $color-red;				
			}
			&.warn{				
				color: $color-white;
				background: $color-orange;
				border:1px solid $color-orange;				
			}
		}
	}	
	
}
</style>
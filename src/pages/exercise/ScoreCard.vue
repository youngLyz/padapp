<template>
	<div>
		<page-header :title="title" :backUrl="backUrl"></page-header>
		<div class="page-body">
			<div class="score-box">
				<div class="score-circle">
					<span class="score-cur">20.0</span>
					<span class="score-total">总分数 100.0</span>
				</div>
				<p class="score-date">结果生成时间：{{currentTime}}</p>
			</div>
			<div class="score-info">
				<div class="score-info-hd">
					<span class="iconfont">&#xe631;</span>
					答题情况
				</div>
				<div class="answer-list">
					<h4 class="item-type">
						多项选择题
					</h4>
					<div class="item-answs">
						<span
							class="as-item" 
							v-for="(item,index) of answerid.MORE"
							:key="index"
							:class="{'selected':item.answer_id.length>0}"					
						>{{item.num}}</span>
					</div>
					<h4 class="item-type">
						判断题
					</h4>
					<div class="item-answs">
						<span class="as-item" 
							v-for="(item,index) of answerid.TFNG"
							:key="index"
							:class="{'selected':item.answer_id.length>0}"					
						>{{item.num}}</span>
					</div>
					<h4 class="item-type">
						单项选择题
					</h4>
					<div class="item-answs">
						<span class="as-item" 
							v-for="(item,index) of answerid.ONE"
							:key="index"
							:class="{'selected':item.answer_id.length>0}"						
						>{{item.num}}</span>
					</div>
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
				currentTime: '2018-07-06 10:34'
			}
		},
		components: {
			PageHeader
		},
		computed: {
			...mapState(['answerid'])
		}
	}
</script>

<style lang="scss" scoped>
.page-body{
	margin-top: 1.2rem;
	background: $bg-light-grey;
	.score-box{
		background: $blue;
		color: $color-white;
		justify-content: center;	
		padding: .5rem 0;
		.score-circle{
			width:3.5rem;
			height: 3.5rem;
			border:.1rem solid rgba(255,255,255,.25);
			border-radius: 50%;
			margin:0 auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;
		}
		.score-cur{
			font-size: $font36;
		}
		.score-total{
			font-size: $font24;
		}
	}
	.score-date{
		font-size: $font18;
		text-align: center;
		margin-top: .5rem;
	}

	.score-info{
		@include padlf40;
		margin-top: .45rem;
		background: $color-white;
		.score-info-hd{
			@include border-bottom($border-dark-grey);
			color: $blue;
			font-size: $font20;
			font-weight: bold;
			line-height: 1.25rem;
		}
	}
	.answer-list{
		margin-top: .5rem;
	}
	.item-type{
		color: $blue;
		font-size: $font20;
		font-weight: bold;
		height: .45rem;
		line-height: .45rem;
		border-left: .1rem solid $blue;
		padding-left: .25rem;
		margin: .3rem 0;
	}
	.item-answs{
		margin: .5rem .35rem;
		.as-item{
			width:.7rem;
			height: .7rem;
			margin-right:.5rem;
			margin-bottom:.25rem;
			color: $color-grey;
			font-size: $font24;
			border:1px solid $color-grey;
			border-radius: 50%;
			display: inline-block;
			text-align: center;
			&.selected{				
				color: $color-white;
				background: $blue;
				border:1px solid $blue;
				
			}
		}
	}	
}
</style>
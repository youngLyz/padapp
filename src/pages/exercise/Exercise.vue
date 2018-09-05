<template>	
	<div class="exercise">
		<exer-header 
			:title="title"
			></exer-header>		
		<div class="score-box">
			<div class="score-circle">
				<span class="score-cur finish">0 &nbsp;题</span>
				<span class="score-total">已答题数</span>
				<span class="score-cur total">1000题</span>
				<span class="score-total">总题数</span>
			</div>				
		</div>
		<div class="icon-list">
			<exer-icon 
				v-for="(item,index) of iconList"
				:iconObj="item"
				:key="index"></exer-icon>
		</div>		
	</div>
</template>

<script type="text/javascript">
	import ExerHeader from './components/Header'
	import ExerIcon from './components/Icon'
	export default {
		name: 'Exercise',
		data () {
			return {	
				title:this.$store.state.secondClz,	
				iconList: [
					{iconName:'&#xe61d;',iconTitle:'模拟考场',url:"/simulateTest"},
					{iconName:'&#xe61c;',iconTitle:'快速练习',url:"/fastTest"},
					{iconName:'&#xe618;',iconTitle:'考点练习',url:"/pointTest"},
					{iconName:'&#xe611;',iconTitle:'测试记录',url:"/testHis"},
					{iconName:'&#xe617;',iconTitle:'错题重做',url:"/wrongTest"}
				]
			}
		},
			
		components: {
			ExerHeader,
			ExerIcon
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.exercise{
	background: $bg-light-grey;
}
.score-box{		
		color: $color-white;		
		height: 6.0rem;
		margin-top: 1.12rem;	
		display: flex;
		flex-direction: column;
		justify-content: center;	
		background: url(./../../assets/images/grid@2.jpg) repeat;
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
			margin: 0 auto;
			line-height: 1.4;
		}
		.score-cur{
			font-size: $font20;
			&.finish{font-size: $font30;padding-top: 0.3rem;}
			&.total{padding-top: 0.25rem;font-weight: 600;}
		}
		.score-total{
			font-size: $font18;
		}
	}
/* .answer-info{
	height:6.0rem;
	position: relative;
	color: $blue;
	margin-top: 1.12rem;	
	display: flex;
	flex-direction: column;
	justify-content: center;	
	background: url(./../../assets/images/grid@2.jpg) repeat;
	.answer-tip{
		position: absolute;
		top:.7rem;
		left: .7rem;
		font-size: $font18;
	}
	.answer-value{
		font-size: $font36;
		text-align: center;
	}
	.answer-total{
		position: absolute;
		bottom:.7rem;
		right: .7rem;
		font-size: $font18;
	}
} */
.icon-list{
	background: $color-white;
	display: flex;
}
</style>
<template>	
	<div class="exercise">
		<exer-header 
			:title="title"
			></exer-header>
		<div class="answer-info">
			<p class="answer-tip">已答题数</p>
			<p class="answer-value">0</p>
			<p class="answer-total">总题数：1000</p>
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
					{iconName:'&#xe677;',iconTitle:'模拟考场',url:"/simulateTest"},
					{iconName:'&#xe632;',iconTitle:'快速练习',url:"/fastTest"},
					{iconName:'&#xe613;',iconTitle:'考点练习',url:"/pointTest"},
					{iconName:'&#xe61c;',iconTitle:'测试记录',url:"/testHis"},
					{iconName:'&#xe647;',iconTitle:'错题重做',url:"/wrongTest"}
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
.answer-info{
	height:5rem;
	position: relative;
	color: $blue;
	margin-top: 1.3rem;
	@include padlf40;
	display: flex;
	flex-direction: column;
	justify-content: center;	
	background: $color-white;
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
}
.icon-list{
	margin-top: 1rem;
	background: $color-white;
	display: flex;
}
</style>
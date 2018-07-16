<template>
	<div>
		<simple-header :title="itemTheme"></simple-header>
		<div class="page-body">
			<h4 class="item-type">
				单项选择题
			</h4>
			<div class="item-answs">
				<span class="as-item" 
					v-for="(item,index) of answerids['1']"
					:key="index"
					:class="{'selected':item.answer_id.length>0}"
					@click="clickAnswer(item.num,item.answer_id)"
				>{{item.num}}</span>
			</div>
			<h4 class="item-type">
				多项选择题
			</h4>
			<div class="item-answs">
				<span
					class="as-item" 
					v-for="(item,index) of answerids['2']"
					:key="index"
					:class="{'selected':item.answer_id.length>0}"
					@click="clickAnswer(item.num,item.answer_id)"
				>{{item.num}}</span>
			</div>
			<h4 class="item-type">
				判断题
			</h4>
			<div class="item-answs">
				<span class="as-item" 
					v-for="(item,index) of answerids['3']"
					:key="index"
					:class="{'selected':item.answer_id.length>0}"
					@click="clickAnswer(item.num,item.answer_id)"
				>{{item.num}}</span>
			</div>
			<div class="remark">
				<p>注：蓝色背景代表改题目已答，白色背景代表尚未作答</p>
			</div>
		</div>
		<slot></slot>
		
	</div>	
</template>
<script type="text/javascript">
	import SimpleHeader from 'comp/SimpleHeader'
	export default {
		name: 'AnswerCard',
		props:['itemTheme','answerids'],
		data () {
			return {
				title:'答题卡'
			}
		},
		components: {
			SimpleHeader
		},
		methods: {
			clickAnswer (num,answers) {				
				this.$emit('answerClick',num,answers)
			},
			handleHeaderClick () {
				this.$emit('closeAnsw');
			}
		}
	}
</script>

<style lang="scss" scoped>
.page-body{
	margin-top: 1.3rem;
	@include padlf40;
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
			margin-bottom:.5rem;
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
	.remark{
		font-size: $font16;
		color: $color-grey;
	}
}


</style>
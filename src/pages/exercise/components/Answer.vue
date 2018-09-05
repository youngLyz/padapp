<template>
	<div>
		<simple-header :title="itemTheme"></simple-header>
		<div class="page-body">
			<template v-if="answerids['1'].length>0">
			<div class="item-info">
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
			</div>
				
			</template>
			<template v-if="answerids['2'].length>0">
			<div class="item-info">
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
			</div>
			</template>
			<template v-if="answerids['3'].length>0">
			<div class="item-info">
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
			</div>
		</template>
			<div class="remark">
				<p>注：蓝色背景代表改题目已答，白色背景代表尚未作答</p>
			</div>
			<slot></slot>
		</div>				
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
	max-height: 10.04rem;
	overflow: auto;
	margin-top: 1.52rem;
	.item-info{
		@include border-top;
		margin:0 0.76rem;
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
		}
	}	
	.remark{
		margin:0 0.76rem;
		padding: 0.36rem 0.72rem;
		@include border-top;
		font-size: $font18;
		color: $color-grey-dark;
	}
}


</style>
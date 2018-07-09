<template>	
	<nav class="footer-nav">	
		<div class="footer-link" 
			@click="clickPrevItem"
			:class="{'disable':itemNum===1}">
			<span class="iconfont">&#xe64f;</span>
			<span class="footer-text">上一题</span>
		</div>
		<div class="footer-link" @click="clickAnswerCard">
			<span class="iconfont">&#xe644;</span>
			<span class="footer-text">答题卡</span>
		</div>
		<div class="footer-link">
			<span class="iconfont">&#xe616;</span>
			<span class="footer-text">{{downClock}}</span>
		</div>
		<div class="footer-link" 
			@click="clickNextItem"
			:class="{'disable':itemNum===itemDetail.length}">
			<span class="iconfont">&#xe8f0;</span>
			<span class="footer-text">下一题</span>
		</div>
	</nav>
</template>

<script type="text/javascript">
	import { mapState } from 'vuex'
	export default {
		name: 'TestFooter',
		props:['downClock'],
		computed: {
			...mapState(['itemNum','itemDetail'])
		},
		methods: {
			clickPrevItem () {
				this.$emit('prevBtnClick')
			},
			clickNextItem() {
				this.$emit('nextBtnClick')
			},
			clickAnswerCard () {
				this.$emit('clickAnswerCard');
			}
		}
	}
</script>

<style lang="scss" scoped>
.footer-nav{
	position: fixed;
	bottom: 0;
	left: 0;
	right:0;
	z-index: 99;
	background: $bg-grey;
	height: 1.9rem;
	border-top: 1px solid $border-dark-grey;
	display: flex;
	.footer-link{
		flex: 1;
		color: $color-grey-dark;
		text-align: center;
		display: flex;
		justify-content: center;
		flex-direction: column;
		&.active{
			color: $blue;
		}
		&.disable{
			color: $border-dark-grey;
			cursor: not-allowed;
		}
		.iconfont{
			font-size: $font30;
		}
		.footer-text{
			font-size: $font24;			
		}
	}
}
</style>
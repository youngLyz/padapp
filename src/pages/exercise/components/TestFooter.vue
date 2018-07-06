<template>	
	<nav class="footer-nav">	
		<div class="footer-link" @click="clickAnswerCard">
			<span class="iconfont">&#xe644;</span>
			<span class="footer-text">答题卡</span>
		</div>
		<div class="footer-link">
			<span class="iconfont">&#xe616;</span>
			<span class="footer-text">{{downClock}}</span>
		</div>
	</nav>
</template>

<script type="text/javascript">
	export default {
		name: 'TestFooter',
		props:['downClock'],
		methods: {
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
		.iconfont{
			font-size: $font30;
		}
		.footer-text{
			font-size: $font24;			
		}
	}
}
</style>
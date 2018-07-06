<template>	
	<nav class="footer-nav">
		<router-link to="/home" class="footer-link active">
			<span class="iconfont">&#xe613;</span>
			<span class="footer-text">练习</span>
		</router-link>
		<router-link to="/home" class="footer-link">
			<span class="iconfont">&#xe677;</span>
			<span class="footer-text">考试</span>
		</router-link>
		<router-link to="/home" class="footer-link">
			<span class="iconfont">&#xe615;</span>
			<span class="footer-text">阅读</span>
		</router-link>
		<router-link to="/home" class="footer-link">
			<span class="iconfont">&#xe612;</span>
			<span class="footer-text">我的</span>
		</router-link>
	</nav>
</template>

<script type="text/javascript">
	export default {
		name: 'HomeFooter'
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
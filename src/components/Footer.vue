<template>	
	<nav class="footer-nav">
		<a href="javascript:void(0)"
			@click="openPage('/home',1)" 
			:class="{'active':activeLink==='Home'||activeLink==='Exercise'}"
			class="footer-link">
			<span class="iconfont">&#xe61a;</span>
			<span class="footer-text">练习</span>
		</a>
		<a href="javascript:void(0)"
			@click="openPage('/exam',2)" 
			class="footer-link"
			:class="{'active':activeLink==='Exam'}">
			<span class="iconfont">&#xe619;</span>
			<span class="footer-text">考试</span>
		</a>
		<a href="javascript:void(0)"
			@click="openPage('/read',3)" 
			class="footer-link"
			:class="{'active':activeLink==='Read'}">
			<span class="iconfont">&#xe627;</span>
			<span class="footer-text">阅读</span>
		</a>
		<a href="javascript:void(0)"
			@click="openPage('/userCenter',4)" 
			class="footer-link"			
			:class="{'active':activeLink==='UserCenter'}">
			<span class="iconfont">&#xe622;</span>
			<span class="footer-text">我的</span>
		</a>
	</nav>
</template>

<script type="text/javascript">
	export default {
		name: 'HomeFooter',		
		computed: {
			activeLink () {
				return this.$route.name;
			}
		},
		methods: {
			openPage (url,order) {
				this.$router.openPage(url,order);
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
	height: 1.6rem;
	border-top: 1px solid $border-dark-grey;
	display: flex;
	.footer-link{
		flex: 1;
		color: $color-grey-dark;
		text-align: center;
		line-height: 1.6rem;
		&.active{
			color: $blue;
		}
		.iconfont{
			font-size: $font36;
			vertical-align: top;
		}
		.footer-text{
			font-size: $font20;
			font-weight: 600;
			padding-left: 0.08rem;
		}
	}
}
</style>
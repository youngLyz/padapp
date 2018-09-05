<template>
	<router-link :to="iconObj.url" class="icon-item">
		<span class="iconfont" v-html="iconObj.iconName"></span>
		<span class="icon-text">{{iconObj.iconTitle}}</span>
	</router-link>
</template>

<script type="text/javascript">
	export default {
		name: 'ExerIcon',
		props: {
			iconObj: Object
		}
	}
</script>

<style lang="scss" scoped>
.icon-item{
	flex:1;
	height: 3.6rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	@include border-bottom;
	.iconfont{
		font-size: $font36;
		color: $blue;
	}
	.icon-text{
		color: $blue;
		font-size: $font20;
		font-weight: 600;
	}
}
</style>
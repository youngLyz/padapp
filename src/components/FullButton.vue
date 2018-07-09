<template>
	<button type="button" class="submit-btn" @click="handleStart">{{name}}</button>	
</template>

<script type="text/javascript">
	export default {
		name: 'FullButton',
		props:['name'],
		methods: {
			handleStart (){
				this.$emit('skipNext')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.submit-btn{
		width: 90%;
		height: 1.26rem;
		line-height: 1.26rem;
		border-radius: 0.63rem;
		margin-left: 5%;
		font-size: $font24;
		color: $color-white;
		background: $blue;
		box-shadow: 1px 5px 3px rgba(0,0,0,.3);
	}
</style>
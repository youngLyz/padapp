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
		width: 2.696rem;
		height: 0.7655rem;
		line-height: 0.7655rem;		
		font-size: $font20;
		color: $color-white;
		@include background($green);		
	}
</style>
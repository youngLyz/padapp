<template>
	<button type="button" class="start-btn" @click="handleStart">{{name}}</button>	
</template>

<script type="text/javascript">
	export default {
		name: 'LineButton',
		props:['name'],
		methods: {
			handleStart (){
				this.$emit('skipNext')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.start-btn{
		width:80%;
		height: 1rem;
		line-height: 1rem;
		color: $blue;
		font-size: $font24;
		border:1px solid $blue;
		border-radius: .5rem;
		margin-left: 10%;
		transition:background .5s;
		/*&:linked{
			color:$color-blue;
		}
		&:visited{
			color: $color-orange;
		}*/
		&:hover{
			background: $blue;
			color: $color-white;
		}
		&:active{
			background: $blue;
			opacity: .8;
		}
	}	
</style>
<template>
	<div class="test-btn">
		<button type="button" @click="handleBtnClick" class="test-start-btn">
			<slot></slot>
		</button>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'TestBtn',		
		methods: {
			handleBtnClick () {
				this.$emit('clickTestBtn');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.test-btn{
		margin:.5rem 0;
		text-align: center;
		.test-start-btn{
			width: 4.664rem;
			height: 0.76rem;
			line-height: 0.76rem;
			border-radius: 0;
			background: $green;
			color: $color-white;
			font-size: $font20;
		}
	}
</style>
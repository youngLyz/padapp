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
		.test-start-btn{
			width:100%;
			height: 1rem;
			line-height: 1rem;
			display: block;
			color: $color-white;
			font-size: $font18;
			background: $bg-cyan;
			border-radius: .25rem;
			text-align: center;
		}
	}
</style>
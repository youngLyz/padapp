<template>
	<div>
		<div class="select-item" 
		v-for="(item,index) of types"
		:key="index"
		:val="item"
		@click="handleSelectClick">
			<span class="type-name">{{item}}</span>
			<span class="iconfont">&#xe8ef;</span>
		</div>	
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'SelectType',
		data () {
			return {				
				types: ['全部','单选题','多选题','判断题']
			}
		},		
		methods: {
			handleSelectClick (e) {				
				let t = e.target;				
				t.parentNode.childNodes.forEach((child,index) =>{
					child.className = child.className.replace('selected','');
				});
				t.className += ' selected';
				let type = t.getAttribute('val');
				console.log('selected type:'+type);
				this.$emit('selectedType',type)
			}
		}	
	}
</script>

<style lang="scss" scoped>
	
	.select-item{
		height: 1.4rem;
		line-height: 1.4rem;
		font-size: $font24;
		color: $color-dark;
		@include border-top($border-dark-grey);

		&.selected{
			color: $color-blue;
		}
		.iconfont{
			font-size: $font30;
			float: right;
		}
	}
</style>
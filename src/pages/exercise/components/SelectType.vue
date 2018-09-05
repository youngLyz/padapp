<template>
	<div>
		<div class="select-item" 
		v-for="(item,index) of types"
		:key="index"
		:val="item.id"
		@click="handleSelectClick">
			<span class="type-name">{{item.name}}</span>
			<span class="iconfont">&#xe628;</span>
		</div>	
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'SelectType',
		data () {
			return {				
				types: [
					{id:"0",name:'全部'},
					{id:"1",name:'单选题'},
					{id:"2",name:'多选题'},
					{id:"3",name:'判断题'}
					]
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
		height: 1.2rem;
		line-height: 1.2rem;
		font-size: $font20;
		color: $color-grey;
		@include border-top;
		padding:0 0.24rem; 
		&.selected{
			color: $color-blue;
		}
		.iconfont{
			font-size: $font24;
			float: right;
		}
		&:last-child{
			@include border-bottom;
		}
	}
</style>
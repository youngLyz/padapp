<template>
	<div class="wrap">
		<h2 class="title">
			<span class="iconfont">&#xe650;</span>
			{{firstClass}}	
		</h2>
		<div class="list">
			<a href="javascript:void(0)" 
				class="list-link" 
				@click="handleEngiClick(firstClass,item)"
				v-for="(item,index) of secondClass"
				:key="index"
			>
				{{item}}
			</a>
		</div>
	</div>
</template>

<script type="text/javascript">
	import { mapActions } from 'vuex'
	export default {
		name: 'Engineer',
		props:['firstClass','secondClass'],
		data () {
			return {

			}
		},

		methods: {
			...mapActions(['setCurrentClaz']),
			handleEngiClick (firstClz,secondClz) {
				this.setCurrentClaz({firstClz,secondClz});
				this.$router.push('/exer');
			}
		}
	}
</script>

<style lang="scss" scoped>
.wrap{
	height: 2.5rem;
	@include padlf40;	
	@include border-bottom;
	.title{
		font-size: $font24;
		color: $color-dark-grey;
		margin-top: .25rem;
		.iconfont{
			font-size: $font30;
			color: $color-white;
			width:.75rem;
			height: .75rem;
			padding: .15rem;
			border-radius: 50%;
			background: $blue;
			margin-right: .3rem;
		}
	}
	.list{
		margin-top: .45rem;
		.list-link{
			font-size: $font18;
			color: $color-grey;
			padding: .1rem .36rem;
			border-radius: .36rem;
			border:1px solid $blue;
			margin-right: .45rem;
		}
	}
}	
</style>
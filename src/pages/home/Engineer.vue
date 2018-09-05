<template>
	<div class="wrap">
		<h2 class="title">
			<span class="iconfont">&#xe601;</span>
			{{firstClass.qp_name}}	
		</h2>
		<div class="list">
			<a href="javascript:void(0)" 
				class="list-link" 
				@click="handleEngiClick(firstClass,item)"
				v-for="(item,index) of secondClass"
				:key="index"
			>
				{{item.qk_name}}
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
				JSI.initQuestionBank({"post":firstClz.id,"know":secondClz.id},function(params){
		        	console.log("updatePostClass");
		      	});
				this.setCurrentClaz({firstClz,secondClz});
				this.$router.push('/exer');
			}
		}
	}
</script>

<style lang="scss" scoped>
.wrap{
	min-height: 2rem;	
	box-sizing: border-box;
	@include border-bottom;
	.title{
		font-size: $font18;
		font-weight: 600;
		color: $blue;
		margin-top: 0.224rem;
		margin-left: 0.256rem;
		line-height:0.688rem;	
		.iconfont{
			font-size: $font36;
			font-weight: normal;
			color: $blue;
			width:0.688rem;
			height:0.688rem;		
			margin-right: .112rem;	
			vertical-align: middle;		
		}
	}
	.list{
		margin-top: 0.1rem;
		margin-left: 0.96rem;
		.list-link{
			font-size: $font16;
			color: $blue;
			height: 0.624rem;
			line-height: 0.624rem;
			padding: 0 0.256rem;
			border:1px solid $blue;
			margin-right: 0.552rem;
			margin-bottom: 0.28rem;
			display: inline-block;
			white-space: nowrap;
		}
	}
}	
</style>
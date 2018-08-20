<template>
	<div>
		<simple-header :title="title"></simple-header>
		<div class="page-body">
			<ul class="point-list">
				<router-link tag="li" to="/userInfo" class="point-item">
					{{$store.state.userInfo.phone_name}}	
					<span class="iconfont right">&#xe8f0;</span>
				</router-link>
				<router-link tag="li" to="/testHis" class="point-item">
					<span class="iconfont left">&#xe61c;</span>
					测试历史		
					<span class="iconfont right">&#xe8f0;</span>
				</router-link>
				<router-link tag="li" to="/myWrong" class="point-item">
					<span class="iconfont left">&#xe647;</span>
					我的错题		
					<span class="iconfont right">&#xe8f0;</span>
				</router-link>
				<router-link tag="li" to="/system" class="point-item">
					<span class="iconfont left">&#xe60b;</span>
					系统通知		
					<span class="iconfont right">&#xe8f0;</span>
				</router-link>
				<router-link tag="li" to="/setting" class="point-item">
					<span class="iconfont left">&#xe643;</span>
					设置		
					<span class="iconfont right">&#xe8f0;</span>
				</router-link>
			</ul>	
		</div>	
	</div>
</template>
<script type="text/javascript">
	import SimpleHeader from 'comp/SimpleHeader' 	
	export default {
		name: 'UserCenter',
		data () {
			return {
				title:'我的'
			}
		},
		components: {
			SimpleHeader
		}
	}
</script>

<style lang="scss" scoped>
.page-body{
	margin-top: 1.3rem;

	.point-list{	
		.point-item{
			@include padlf40;
			height: 1.25rem;
			line-height: 1.25rem;
			color:$color-dark-grey;
			@include border-bottom($border-dark-grey);			
			.iconfont{
				color:$blue;
				font-size: $font20;		
			}
			.left{
				padding-right:.15rem; 
			}
			.right{
				float: right;				
			}

			&:first-child{
				border-top: .5rem solid $bg-grey;
				border-bottom: .5rem solid $bg-grey;
			}
		}
	}
}	
</style>
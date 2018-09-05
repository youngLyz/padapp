<template>
	<div>
		<simple-header :title="title"></simple-header>
		<div class="page-body">
			<ul class="point-list">
				<router-link tag="li" to="/userInfo" class="point-item">
					<span class="iconfont left">&#xe626;</span>
					准考证号
					<span class="exam-num">{{$store.state.userInfo.phone_name}}</span>
					<span class="iconfont right">&#xe628;</span>
				</router-link>
				<router-link tag="li" to="/testHis" class="point-item">
					<span class="iconfont left">&#xe612;</span>
					测试历史		
					<span class="iconfont right">&#xe628;</span>
				</router-link>
				<router-link tag="li" to="/myWrong" class="point-item">
					<span class="iconfont left">&#xe623;</span>
					我的错题		
					<span class="iconfont right">&#xe628;</span>
				</router-link>
				<router-link tag="li" to="/system" class="point-item">
					<span class="iconfont left">&#xe624;</span>
					系统通知		
					<span class="iconfont right">&#xe628;</span>
				</router-link>
				<router-link tag="li" to="/setting" class="point-item">
					<span class="iconfont left">&#xe61e;</span>
					设置		
					<span class="iconfont right">&#xe628;</span>
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
	margin-top: 2.312rem;

	.point-list{		
		margin: 0 0.76rem;
		@include border-top;

		.point-item{			
			height: 1.192rem;
			line-height: 1.192rem;
			padding-left: 0.2rem;
			font-size: $font18;
			font-weight: 600;
			color:$color-grey;
			@include border-bottom;		
			.iconfont{
				color:$color-grey;
				font-size: $font20;		
			}
			.exam-num{
				color: $color-light-grey;
				font-size: $font16;
				padding-left: 0.48rem;
			}
			.left{
				font-size: $font30;
				font-weight: normal;
				padding-right:0.356rem; 
				vertical-align: middle;
			}
			.right{
				font-size: $font18;
				font-weight: normal;
				color: $color-light-grey;
				float: right;				
			}
			
		}
	}
}	
</style>
<template>
	<div>
		<page-header :title="title"></page-header>
		<div class="page-body">
			<ul class="point-list">
				<li class="point-item">
					<span class="iconfont left">&#xe626;</span>
					准考证号					
					
					<span class="point-info">{{$store.state.userInfo.phone_name}}</span>
				</li>
				<li class="point-item">
				<span class="iconfont left">&#xe626;</span>
					身份证号					
					
					<span class="point-info">{{$store.state.userInfo.phone_name}}</span>
				</li>
				<!-- <router-link tag="li" to="/userPswd" class="point-item">
					修改密码					
					<span class="iconfont right">&#xe8f0;</span>
				</router-link>  -->
			</ul>
			<div class="btn-box">
				<full-button name="退出登录" @skipNext="handleLogout"></full-button>
			</div>
		</div>	
	</div>
</template>
<script type="text/javascript">
	import PageHeader from 'comp/Header' 	
	import FullButton from 'comp/FullButton'
	export default {
		name: 'UserInfo',
		data () {
			return {
				title:'个人信息'
			}
		},
		components: {
			PageHeader,
			FullButton
		},
		methods: {
			handleLogout () {
				this.$store.dispatch("removeLocalUser");
				this.$router.push('/login');
			}
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
			.point-info{
				color:$border-ccc;
				font-weight: normal;
				padding-left: 0.356rem;
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
	.btn-box{
		margin-top: 4.32rem;
		text-align: center;
		/deep/ .submit-btn{
			background: $blue;
		}
	}
}	
</style>
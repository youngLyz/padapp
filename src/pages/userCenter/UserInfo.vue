<template>
	<div>
		<page-header :title="title"></page-header>
		<div class="page-body">
			<ul class="point-list">
				<li class="point-item">
					昵称					
					<span class="iconfont right">&#xe8f0;</span>
					<span class="point-info">{{$store.state.userInfo.phone_name}}</span>
				</li>
				<!-- <router-link tag="li" to="/userPswd" class="point-item">
					修改密码					
					<span class="iconfont right">&#xe8f0;</span>
				</router-link> -->
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
	margin-top: 1.3rem;

	.point-list{	
		border-top: .5rem solid $bg-grey;
		border-bottom: .5rem solid $bg-grey;
		.point-item{
			@include padlf40;
			height: 1.25rem;
			line-height: 1.25rem;
			color:$color-dark;
			
			&:first-child{
				@include border-bottom($border-dark-grey);
			}
			.iconfont{
				color:$blue;
				font-size: $font20;		
			}
			.point-info{
				float: right;
				margin-right: .15rem;
				color: $color-grey;	
			}
			.right{
				float: right;				
			}
		}
	}
	.btn-box{
		padding-top: 1rem;
	}	
}	
</style>
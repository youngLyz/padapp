<template>
	<div>
		<page-header :title="title"></page-header>
		<div class="page-body">
			<ul class="point-list">
				<li class="point-item">
					报考地					
					<span class="iconfont right">&#xe8f0;</span>
					<span class="point-info">上海</span>
				</li>
				<li class="point-item">
					选择科目										
					<span class="iconfont right">&#xe8f0;</span>
					<span class="point-info">专业管理实务</span>
				</li>
			</ul>
			<ul class="point-list">
				<li class="point-item">
					清除缓存
					<span class="point-info">151 KB</span>					
				</li>
				<li class="point-item">
					版本更新			
					<span class="point-info">V1.2.4</span>
				</li>
				<li class="point-item">
					意见反馈			
					<span class="iconfont right">&#xe8f0;</span>
				</li>
			</ul>	
			<ul class="point-list">
				<li class="point-item">
					关于
					<span class="iconfont right">&#xe8f0;</span>				
				</li>				
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
		name: 'UserSetting',
		data () {
			return {
				title:'设置'
			}
		},
		components: {
			PageHeader,
			FullButton
		},
		methods: {
			
			handleLogout () {
				this.$router.push('/login');
			}
		}
	}
</script>

<style lang="scss" scoped>
.page-body{
	margin-top: 1.3rem;

	.point-list{			
		border-bottom: .5rem solid $bg-grey;
		&:first-child{
			border-top: .5rem solid $bg-grey;
		}
		.point-item{
			@include padlf40;
			height: 1.25rem;
			line-height: 1.25rem;
			color:$color-dark;
			@include border-bottom($border-dark-grey);
			&:last-child{
				border-bottom:none;
			}			
			.iconfont{
				color:$blue;
				font-size: $font20;		
			}
			.point-info{
				float: right;
				color: $color-grey;	
				margin-right: .15rem;
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
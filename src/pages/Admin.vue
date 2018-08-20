<template>
	<div>
		<simple-header :title="title"></simple-header>
		<div class="page-body">
			<ul class="point-list">
				<li class="point-item" @click="initSystemDB">
					初始化考试系统数据库					
					<span class="iconfont right">&#xe8f0;</span>					
				</li>
				<li class="point-item" @click="submitLocalTest">
					提交考生试卷
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
	import SimpleHeader from 'comp/SimpleHeader' 	
	import FullButton from 'comp/FullButton'
	export default {
		name: 'Admin',
		data() {
			return {
				title: "系统管理员"
			}
		},
		components: {
			SimpleHeader,
			FullButton
		},
		methods: {
			initSystemDB() {
				JSI.initSystemDatabase(()=>{
					console.log("initSystemDatabase success")
				});
			},
			submitLocalTest() {
				JSI.submitExamResult(()=>{
					console.log("submitExamResult success")
				})
			},
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
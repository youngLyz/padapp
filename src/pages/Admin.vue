<template>
	<div>
		<simple-header :title="title"></simple-header>
		<div class="page-body">
			<ul class="point-list">
				<li class="point-item" @click="initSystemDB">
					初始化考试系统数据库					
					<span class="iconfont right">&#xe628;</span>					
				</li>
				<li class="point-item" @click="submitLocalTest">
					提交考生试卷
					<span class="iconfont right">&#xe628;</span>					
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
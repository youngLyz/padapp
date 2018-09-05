<template>
	<div class="log-page">
		<dialogs-wrapper wrapper-name="default-message" tag="div" transition-name="fade">			
		</dialogs-wrapper>
		<simple-header :title="title"></simple-header>
		<div class="log-body">
			<form class="log-form">
				<img class="logo" src="./../assets/images/logo.png" alt="logo图片">
				<div class="form-content">					
					<img class="login-card" src="./../assets/images/login-card.png" alt="准考证图片">
					<div class="input-box">
						<input type="text" placeholder="请输入您的身份证号码" v-model="userName" />
						<input type="text" placeholder="请输入您的准考证号码" v-model="pswd" />
					</div>		
				</div>
							
				<div class="form-btn">
					<full-button name="提交登录" @skipNext="handleReigsterSubmit"></full-button>
					<!-- <p class="login-link">
						<router-link class="to-register-btn" to="/register">新用户注册</router-link>
						<router-link class="to-forget-btn" to="/register">忘记密码？</router-link>
					</p> -->
				</div>
			</form>	
		</div>
	</div>
</template>

<script type="text/javascript">
	import SimpleHeader from 'comp/SimpleHeader'
	import FormInput from 'comp/Input'
	import FullButton from 'comp/FullButton'
	export default {
		name: "UserLogin",
		data () {
			return {
				title:'智来天扬智慧移动考试系统',
				mobile: {labelName:'账号',inputName:'mobile',inputType:'text',validCode:false},
				password: {labelName:'密码',inputName:'pswd',inputType:'password',validCode:false},
				userName:'',
				pswd:''		
			}
		
		},
		components: {
			SimpleHeader,
			FormInput,
			FullButton
		},
		methods: {
			handleReigsterSubmit () {
				//console.log("window.devicePixelRatio:"+window.devicePixelRatio);
				let $ref = this.$refs;
				let user = {
						"phone_name":this.userName,//$ref.mobileInput.inputData,
						"pswd":this.pswd//$ref.pswdInput.inputData
					};
					//console.log(JSON.stringify(user));
				if(user.phone_name&&user.pswd){
					JSI.verifyUser(user,(res)=>{
						if(!res.id){//用户验证错误,返回"0"
							this.$showMsg("您输入的用户名或密码有误，请重新输入");
						}else{//用户验证成功，返回用户id
							user.id = res.id;
							this.$store.dispatch('setLocalUser',user)	
							this.$router.openPage("/home",1);		
						}
						
					});		
					
				}else{
					this.$showMsg('请输入用户名和密码')
					
				}	
										
				
			}
		}

	}
</script>

<style lang="scss" scoped>
.log-page{
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: url(./../assets/images/grid@2.jpg) repeat;
}
.log-body{
	margin: 2.896rem auto 0 auto;	
	width:9.72rem;
	height: 7.04rem;
	@include background;	
	.log-form{
		padding: 1.064rem 0.924rem;
		.logo{
			width: 3.946rem;
			height: 1.206rem;
			margin-left: 1.972rem;
		}
	}
}
.form-content{
	margin-top: 0.592rem;
	display: flex;
	.login-card{
		margin-right:0.664rem; 
		width: 1.92rem;
		height: 1.52rem;
	} 
	.input-box{
		flex: 1;
		input{
			width: 3.916rem;
			height: 0.58rem;
			margin-top:0.14rem;
			padding-left: 0.1rem;
			line-height: 0.58rem;
			font-size: $font16;
			border:none;			
			@include border-bottom;			
		}
	}
}
.form-btn{
	width:100%;	
	text-align: center;
	margin-top: 1.064rem;
	/*
	.login-link{
		margin-top: .75rem;
		.to-register-btn{
			font-size: $font18;
			color: $blue;
			float: left;	
		}
		.to-forget-btn{
			font-size: $font18;
			color: $color-grey;
			float: right;		
		}
	}*/
	
}

	
</style>
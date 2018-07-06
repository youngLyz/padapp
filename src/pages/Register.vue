<template>
	<div>
		<page-header :title="title"></page-header>
		<div class="reg-body">
			<form>
				<form-input :obj="mobile"></form-input>
				<form-input :obj="password"></form-input>
				<form-input :obj="repeatPassword"></form-input>
				<form-input :obj="valideCode"></form-input>				
				
				<div class="contract">
					注册即阅读并同意
					<router-link to="/" class="contract-link">《上学吧服务协议》</router-link>
				</div>	
				<div class="form-btn">
					<button type="submit" class="submit-btn">注册</button>
					<p>
						<router-link class="to-login-btn" to="/login">已有账号，立即登录</router-link>
					</p>
				</div>
				
			</form>
			
		</div>
	</div>
</template>

<script type="text/javascript">
	import PageHeader from 'comp/Header'
	import FormInput from 'comp/Input'
	export default {
		name: "UserRegister",
		data () {
			return {
				title: '用户注册',
				mobile: {labelName:'手机号',inputName:'mobile',inputType:'text',validCode:false},
				password: {labelName:'密码',inputName:'pswd',inputType:'password',validCode:false},
				repeatPassword: {labelName:'确认密码',inputName:'rpswd',inputType:'password',validCode:false},
				valideCode:{labelName:'验证码',inputName:'valideCode',inputType:'text',validCode:true}
			}
		},
		components: {
			PageHeader,
			FormInput
		}
	}
</script>

<style lang="scss" scoped>
.reg-body{
	margin-top: 2rem;	
	@include padlf40;
}

.contract{
	width:60%;
	margin: .6rem auto 0;
	line-height: .6rem;
	color: $color-grey;
	font-size: $font18;
	.contract-link{
		color: $color-blue;
	}
}
.form-btn{
	width:60%;
	margin: 1.3rem auto 0;
	.submit-btn{
		width: 90%;
		height: 1.26rem;
		line-height: 1.26rem;
		border-radius: 0.63rem;
		margin-left: 5%;
		font-size: $font24;
		color: $color-white;
		background: $blue;
		box-shadow: 1px 5px 3px rgba(0,0,0,.3);
	}
	.to-login-btn{
		font-size: $font18;
		color: $blue;
		float: right;
		margin-top: .75rem;
	}
}

</style>
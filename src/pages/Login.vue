<template>
	<div>
		<page-header :title="title"></page-header>
		<div class="log-body">
			<form>
				<form-input :obj="mobile"></form-input>
				<form-input :obj="password"></form-input>
				<div class="form-btn">
					<button type="submit" class="submit-btn">登录</button>
					<p class="login-link">
						<router-link class="to-register-btn" to="/register">新用户注册</router-link>
						<router-link class="to-forget-btn" to="/register">忘记密码？</router-link>
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
		name: "UserLogin",
		data () {
			return {
				title:'用户登录',
				mobile: {labelName:'账号',inputName:'mobile',inputType:'text',validCode:false},
				password: {labelName:'密码',inputName:'pswd',inputType:'password',validCode:false}		
			}
		
		},
		components: {
			PageHeader,
			FormInput
		}
	}
</script>

<style lang="scss" scoped>
.log-body{
	margin-top: 2rem;	
	@include padlf40;
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
	}
	
}
	
</style>
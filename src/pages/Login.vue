<template>
	<div>
		<simple-header :title="title"></simple-header>
		<div class="log-body">
			<form>
				<form-input :obj="mobile"></form-input>
				<form-input :obj="password"></form-input>
				<div class="form-btn">
					<full-button name="登录" @skipNext="handleReigsterSubmit"></full-button>
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
	import SimpleHeader from 'comp/SimpleHeader'
	import FormInput from 'comp/Input'
	import FullButton from 'comp/FullButton'
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
			SimpleHeader,
			FormInput,
			FullButton
		},
		methods: {
			handleReigsterSubmit () {
								
				this.$router.openPage("/home",1);
			}
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
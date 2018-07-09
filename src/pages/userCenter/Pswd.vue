<template>
	<div>
		<page-header :title="title"></page-header>
		<div class="log-body">
			<form>
				<form-input :obj="oldPswd"></form-input>
				<form-input :obj="newPswd"></form-input>
				<form-input :obj="confirmPswd"></form-input>
				<div class="form-btn">
					<full-button name="修改密码" @skipNext="handleSubmit"></full-button>
				</div>
			</form>	
		</div>
	</div>
</template>
<script type="text/javascript">
	import PageHeader from 'comp/Header' 
	import FormInput from 'comp/Input'
	import FullButton from 'comp/FullButton'
	export default {
		name: 'UserPswd',
		data () {
			return {
				title:'修改密码',
				oldPswd: {labelName:'原密码',inputName:'oldPswd',inputType:'password',validCode:false},
				newPswd: {labelName:'新密码',inputName:'newPswd',inputType:'password',validCode:false},
				confirmPswd: {labelName:'确认密码',inputName:'confirmPswd',inputType:'password',validCode:false}		
			}
		},
		components: {
			PageHeader,
			FormInput,
			FullButton
		},
		methods: {
			handleSubmit () {
							
				this.$router.openPage("/userCenter",4);
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
}
</style>
<template>
	<div class="form-group">
		<label class="form-label">{{obj.labelName}}</label>
		<input :type="obj.inputType" 
			:value="value" 
			@input="emitVal" 
			class="form-input" 
			:name="obj.inputName">
		<span v-if="!obj.validCode" @click="clearInputHandler" class="form-clear-btn iconfont">&#xe641;</span>
		<span v-else class="form-valid-code">获取验证码</span>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'FormInput',
		props:['obj','value'],
		/*data () {
			return {
				inputData:''
			}
		},*/
		methods: {
			emitVal (e){
				this.$emit('input',e.target.value)
			},
			clearInputHandler () {
				this.$emit('input',"");
			}
		}
	}
</script>

<style lang="scss" scoped>
.form-group{	
	width:60%;
	height: 1rem;
	line-height: 1rem;
	@include border-bottom;
	display: flex;
	margin: 1rem auto 0;
	.form-label{
		width:2.6rem;
		color: $color-grey;
		font-size: $font20;
	}
	.form-input{
		flex:1;
		border:none;
		font-size: $font24;
		color: $color-orange;
		line-height: 1rem;
		letter-spacing: .1rem;
	}
	.form-clear-btn{
		width: .6rem;
		font-size: $font24;
		color: $color-dark;
	}
	.form-valid-code{		
		font-size: $font20;
		color: $blue;
	}
}
</style>
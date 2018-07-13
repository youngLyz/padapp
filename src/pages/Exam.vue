<template>
	<div>
		<simple-header :title="title"></simple-header>
		<div class="page-body">
			<div class="score-box">
				<div class="score-circle">
					<span class="score-cur">{{examClock}}</span>
					<span class="score-total">倒计时</span>
				</div>
				<p class="score-date">考试时间：{{examDate}}</p>
				<p class="score-date">答题时间：{{examMinutes}}分钟</p>
			</div>
			<div class="remark">
				<p>注：过了考试时间范围将无法进入考试，考试期间一旦提交试题答案，将无法修改答案，各位考试谨慎提交！</p>
			</div>
			<div class="test-btn">
				<button type="button" 
					@click="handleClickStart"
					class="test-start-btn"					
					:class="{'disabled':!examState}">进入考试</button>
			</div>
			
		</div>		
	</div>
</template>
<script type="text/javascript">
	import SimpleHeader from 'comp/SimpleHeader'
	import { mapState } from 'vuex'
	export default {
		name: 'Exam',
		data () {
			return {
				title:'考试',
				standClock: "00天 00:00:00"
			}
		},
		computed: {
			...mapState(['examClock','examMinutes','examDate','examState'])
		},
		watch: {
			examState (val,oldVal){
				console.log("examWatch:"+val)
				if(val){
					this.$store.commit('REMBER_TIME');//开始计时
				}
			}
		},		
		components: {
			SimpleHeader
		},		
		methods: {
			handleClickStart () {
				console.log(this.examState);
				if(this.examClock===this.standClock&&this.examState){					
					this.$router.push('/examStart');
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.page-body{
	margin-top: 1.2rem;
	background: $bg-light-grey;
	.score-box{
		background: $blue;
		color: $color-white;
		justify-content: center;	
		padding: .5rem 0;
		.score-circle{
			width:3.5rem;
			height: 3.5rem;
			border:.1rem solid rgba(255,255,255,.25);
			border-radius: 50%;
			margin:0 auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;
		}
		.score-cur{
			font-size: $font36;
		}
		.score-total{
			font-size: $font24;
		}
	}
	.score-date{
		font-size: $font18;
		text-align: center;
		margin-top: .5rem;
	}

	.score-info{
		@include padlf40;
		margin-top: .45rem;
		background: $color-white;
		.score-info-hd{
			@include border-bottom($border-dark-grey);
			color: $blue;
			font-size: $font20;
			font-weight: bold;
			line-height: 1.25rem;
		}
	}
	.test-btn{
		margin:2rem 5% 0;
		.test-start-btn{
			width:100%;
			height: 1rem;
			line-height: 1rem;
			display: block;
			color: $color-white;
			font-size: $font18;
			background: $bg-cyan;
			border-radius: .25rem;
			text-align: center;
			&.disabled{
				background: $color-grey;				
			}			
		}
	}
	.remark{
		margin-left: 5%;
		margin-top: .5rem;  
		font-size: $font16;
		color: $color-grey;
	}
}
</style>
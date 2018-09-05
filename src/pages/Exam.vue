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
				<full-button 
					class="test-start-btn"
					:name="buttonText"
					:class="{'disabled':!examState}"
					@skipNext="handleClickStart"></full-button>
				<!-- <button type="button" 
					@click="handleClickStart"
					class="test-start-btn"
					:class="{'disabled':!examState}">{{buttonText}}</button> -->
			</div>
			
		</div>		
	</div>
</template>
<script type="text/javascript">
	import SimpleHeader from 'comp/SimpleHeader'
	import FullButton from 'comp/FullButton'
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
			...mapState(['examClock','examMinutes','examDate','examState','pt_info']),
			buttonText() {
				if(this.pt_info.submit_date!=null){
					return "您已提交试卷"
				}else{
					return "进入考试"
				}
			}
		},		
		components: {
			SimpleHeader,
			FullButton
		},		
		methods: {
			handleClickStart () {
				//console.log(this.examState);
				if(this.examClock===this.standClock&&this.examState){					
					this.$router.push('/examStart');
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.page-body{
	margin-top: 1.12rem;
	background: $color-white;
	.score-box{		
		color: $color-white;
		padding-top: 0.376rem;	
		height: 6.0rem;
		box-sizing: border-box;
		background: url(./../assets/images/grid@2.jpg) repeat;
		text-align: center;
		.score-circle{
			width:3.424rem;
			height: 3.424rem;
			background-color: $blue;
			border:0.08rem solid #ffffff8a;						
			border-radius: 50%;			
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;
			margin: 0.36rem auto;
		}
		.score-cur{
			font-size: $font30;
			line-height: 0.8rem;
			padding-top: 0.32rem;
		}
		.score-total{
			padding-top: 0.48rem;
			font-size: $font20;
		}
	}
	.score-date{
		color: $blue;
		font-size: $font18;
		text-align: center;
		line-height: 0.6rem;
		font-weight: 600;
	}
	
	.test-btn{
		margin-top: 1.0rem;
		text-align: center;
		.test-start-btn{
			&.disabled{
				background: $color-grey;				
			}			
		}
	}
	.remark{
		margin-left: 1.0rem;
		margin-top: 0.36rem;  
		font-size: $font16;
		color: $color-grey;
	}
}
</style>
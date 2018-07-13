<template>
	<div>
		<page-header :title="title"></page-header>
		<div class="page-body">
			<h2 class="test-title">2018年资料员专业考试</h2>
			<ul class="test-list">
				<li class="test-list-item">
					卷面总分：100分
				</li>
				<li class="test-list-item">
					试卷类型：模拟试题
				</li>
				<li class="test-list-item">
					题型及量：单选题（30）多选题（20）判断题（20）
				</li>
				<li class="test-list-item">
					作答时间：120分钟
				</li>
				<li class="test-list-item">
					答案解析：否
				</li>
				
			</ul>
			<div class="test-btn">
				<button type="button" @click="handleStartClick" class="test-start-btn">开始做题</button>
			</div>
			<div class="test-intro">
				<h4 class="test-intro-hd">试卷简介</h4>
				<p>2018年资料员专业基础知识试题一，本试卷是为考资料员考试的考生准备的专业基础知识试题及答案练习。</p>
			</div>
		</div>
		
	</div>
</template>

<script type="text/javascript">
	import PageHeader from 'comp/Header'	
	export default {
		name: 'ExamStart',		
		data () {
			return {
				title: '2018年资料员专业基础',
				hideBtn:false					
			}
		},
		components: {
			PageHeader
		},
		methods: {
			handleStartClick () {
				
				let info = {
					itemTheme:'',
					itemDetail: []
				};
				//获取试卷标题和试题列表
				this.$axios.get('/simulateTest.json').then(res=>{					
					//console.log('axios get:'+JSON.stringify(res.data.status));
					res = res.data;
					if(res.status==='ok'){
						info.itemTheme = res.data.itemTheme;
						info.itemDetail = res.data.itemDetail;
						this.$store.dispatch('initializeData',info);
						this.$router.push('/testItem/examStart');
					}
				}).catch(err=>{
					console.log('axios error:'+err)
				});
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.page-body{
	margin-top: 2rem;
	@include padlf40;
	.test-title{
		font-size: $font24;
		color: $color-dark;
		line-height: 1.2rem;
		@include border-bottom($border-dark-grey);
	}
	.test-list{
		margin-top: .3rem;
		overflow: hidden;
		.test-list-item{
			font-size: $font18;
			color: $color-grey;
			line-height: .9rem;
			width: 50%;
			float: left;
		}
	}
	.test-btn{
		margin:.5rem 0;
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
		}
	}
	
	.test-intro{
		font-size: $font18;
		color: $color-grey;
		line-height: 1.5;
		.test-intro-hd{		
			color: $color-dark;
			padding-bottom: .5rem;
		}
	}
}	
</style>
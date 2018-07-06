<template>
	<div>
		<page-header :title="title"></page-header>
		<div class="page-body">
			<h2 class="test-title">2018年资料员专业基础知识试题一</h2>
			<ul class="test-list">
				<li class="test-list-item">
					卷面总分：100分
				</li>
				<li class="test-list-item">
					试卷类型：模拟试题
				</li>
				<li class="test-list-item">
					作答时间：120分钟
				</li>
				<li class="test-list-item">
					答案解析：否
				</li>
				<li class="test-list-item">
					练习次数：3
				</li>
			</ul>
			<div class="test-btn">
				<router-link to="/testItem" class="test-start-btn">开始做题</router-link>
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
		name: 'TestStart',		
		data () {
			return {
				title: '2018年资料员专业基础'		
			}
		},
		components: {
			PageHeader
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
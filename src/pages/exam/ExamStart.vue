<template>
	<div>
		<page-header :title="pt_info.pt_name"></page-header>
		<div class="page-body">
			<h2 class="test-title">{{pt_info.pt_name}}</h2>
			<ul class="test-list">
				<li class="test-list-item">
					卷面总分：{{pt_info.total_score}}分
				</li>
				<li class="test-list-item">
					试卷类型：考试试卷
				</li>
				<li class="test-list-item">
					题型及量：{{pt_info.type_num}}
				</li>
				<li class="test-list-item">
					作答时间：{{pt_info.answer_time}}分钟
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
				<p>{{pt_info.pt_memo}}</p>
			</div>
		</div>
		
	</div>
</template>

<script type="text/javascript">
	import PageHeader from 'comp/Header'	
	import { mapState } from 'vuex'
	export default {
		name: 'ExamStart',		
		data () {
			return {
				//title: '2018年资料员专业基础',
				hideBtn:false				
			}
		},
		computed: {
			...mapState(['pt_info'])
		},
		components: {
			PageHeader
		},
		methods: {
			handleStartClick () {
				
				/*let itemList = [{
						id:1,
						q_name:'单选试题名称',
						q_type:'1',//类型：单选-1、多选-2、判断-3		
						q_result:[1],//1,2,3,4对应ABCD
						q_option:['选项A','选项B','选项C','选项D']
					},
					{	id:2,
						q_name:'多选试题名称',
						q_type:'2',//类型：单选-1、多选-2、判断-3		
						q_result:[1,2],//1,2,3,4对应ABCD
						q_option:['选项A','选项B','选项C','选项D']
					},
					{	id:3,
						q_name:'判断试题名称',
						q_type:'3',//类型：单选-1、多选-2、判断-3		
						q_result:[1],//1,2,3,4对应ABCD
						q_option:['选项A','选项B']
					}]
*/
				let info = {
					itemId:this.pt_info.id,
					itemTheme:this.pt_info.pt_name,
					totalScore:this.pt_info.total_score,
					scorePrinciple:{
						single_score:this.pt_info.pt_single_score,
						multi_score:this.pt_info.pt_multi_score,
						tf_score:this.pt_info.pt_tf_score
					},
					itemDetail: null
				};
				console.log("getExamTemplateQuestions:"+JSON.stringify(info.scorePrinciple))
				JSI.getExamTemplateQuestions((res)=>{
					info.itemDetail = res;							
					this.$store.dispatch('initializeData',info);
					this.$store.commit('REMBER_TIME');//开始计时
					this.$router.push('/testItem/examStart');		
				});	

					
				
			}
		},
		created () {
			console.log(this.pt_id)
			//获取试卷信息
			/*this.pt_info = {
				pt_name:"2018年资料员专业基础知识试题一",				
				pt_single_num:30,
				pt_single_score:1,
				pt_multi_num:20,
				pt_multi_score:2,
				pt_tf_num:20,
				pt_tf_score:1.5,				
				answer_time:"120",
				type_num:"单选题（30）多选题（20）判断题（20）",
				total_score:100,
				intro:"2018年资料员专业基础知识试题一，本试卷是为考资料员考试的考生准备的专业基础知识试题及答案练习。"
			}*/
		}
	}
</script>

<style lang="scss" scoped>
.page-body{
	margin-top: 1.36rem;
	.test-title{
		font-size: $font20;
		color: $blue;
		line-height: 1.2rem;
		margin: 0 0.8rem;
		padding:0 1.16rem;
		@include border-bottom;
	}
	.test-list{
		margin: 0.24rem 0.8rem;
		padding:0 1.16rem;
		overflow: hidden;
		.test-list-item{
			font-size: $font18;
			color: $color-dark;
			line-height: 0.72rem;
			width: auto;
			float: left;

			&:nth-child(odd){
				width: 10.12rem;
			}
		}
	}
	.test-btn{
		margin:0.896rem 0;
		text-align:center;
		.test-start-btn{
			width: 2.696rem;
			height: 0.7655rem;
			line-height: 0.7655rem;		
			font-size: $font20;
			color: $color-white;
			@include background($green);	
		}
	}
	
	.test-intro{
		font-size: $font18;
		color: $color-grey;		
		margin: 0 0.8rem;
		padding:0.592rem 1.16rem 0;
		@include border-top;
		.test-intro-hd{		
			color: $color-dark;
			font-size: $font20;
			line-height: 0.72rem;
		}
	}
}	
</style>